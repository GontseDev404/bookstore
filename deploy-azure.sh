#!/bin/bash

# Azure Container Apps Deployment Script
# Usage: ./deploy-azure.sh [environment]

set -e

# Configuration
REGISTRY="bookhavenregistry.azurecr.io"
IMAGE_NAME="bookstore-app"
CONTAINER_APP_NAME="bookhaven-app"
RESOURCE_GROUP="bookhaven-rg"
ENVIRONMENT=${1:-production}

echo "🚀 Starting Azure Container Apps deployment..."
echo "Environment: $ENVIRONMENT"
echo "Registry: $REGISTRY"
echo "Image: $IMAGE_NAME"
echo "Container App: $CONTAINER_APP_NAME"
echo "Resource Group: $RESOURCE_GROUP"

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first."
    exit 1
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo "❌ Not logged in to Azure. Please run 'az login' first."
    exit 1
fi

# Build and push Docker image
echo "📦 Building and pushing Docker image..."

# Get the latest commit hash for tagging
COMMIT_HASH=$(git rev-parse --short HEAD)
TAG="latest-${COMMIT_HASH}"

# Build the image
echo "🔨 Building Docker image..."
docker build -t $REGISTRY/$IMAGE_NAME:$TAG .
docker build -t $REGISTRY/$IMAGE_NAME:latest .

# Push to Azure Container Registry
echo "📤 Pushing to Azure Container Registry..."
docker push $REGISTRY/$IMAGE_NAME:$TAG
docker push $REGISTRY/$IMAGE_NAME:latest

# Deploy to Azure Container Apps
echo "🚀 Deploying to Azure Container Apps..."

# Update the container app
az containerapp update \
    --name $CONTAINER_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --image $REGISTRY/$IMAGE_NAME:$TAG \
    --set-env-vars NODE_ENV=production,NEXT_TELEMETRY_DISABLED=1 \
    --cpu 1.0 \
    --memory 2.0Gi \
    --min-replicas 1 \
    --max-replicas 3 \
    --scale-rule-name http-scaling \
    --scale-rule-type http \
    --scale-rule-http-concurrency 50

# Wait for deployment to complete
echo "⏳ Waiting for deployment to complete..."
sleep 30

# Get the application URL
APP_URL=$(az containerapp show \
    --name $CONTAINER_APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query properties.configuration.ingress.fqdn \
    --output tsv)

echo "🌐 Application URL: http://$APP_URL"

# Health check with retries
echo "🏥 Performing health check..."
for i in {1..5}; do
    echo "Health check attempt $i..."
    if curl -f "http://$APP_URL/api/health"; then
        echo "✅ Health check passed!"
        break
    else
        echo "❌ Health check failed, retrying in 30 seconds..."
        sleep 30
    fi
done

# Final health check
if curl -f "http://$APP_URL/api/health"; then
    echo "✅ Deployment completed successfully!"
    echo "🌐 Application URL: http://$APP_URL"
    echo "📊 Monitor your app at: https://portal.azure.com/#@/resource/subscriptions/$(az account show --query id -o tsv)/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.App/containerApps/$CONTAINER_APP_NAME"
else
    echo "❌ Final health check failed!"
    echo "🔍 Check the logs: az containerapp logs show --name $CONTAINER_APP_NAME --resource-group $RESOURCE_GROUP"
    exit 1
fi

echo "🎉 Deployment completed successfully!" 