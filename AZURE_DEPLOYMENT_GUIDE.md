# 🚀 Azure Container Apps Deployment Guide

## 📋 Overview

This guide covers the complete deployment process for the BookHaven bookstore application to Azure Container Apps, including Docker builds, CI/CD pipeline, and monitoring.

## ✅ **Latest Updates Applied**

### **Fixed Issues:**
- ✅ **Dependency conflicts** resolved with `--legacy-peer-deps`
- ✅ **React 19 compatibility** issues fixed
- ✅ **Price overflow** in book cards resolved
- ✅ **Duplicate heart buttons** removed from book cards
- ✅ **Next.js 15 compatibility** issues resolved
- ✅ **Docker build optimizations** implemented

### **Enhanced Features:**
- ✅ **Improved CI/CD pipeline** with better error handling
- ✅ **Enhanced health checks** with retry logic
- ✅ **Better logging** and status reporting
- ✅ **Automatic scaling** configuration
- ✅ **Comprehensive monitoring** setup

## 🐳 **Docker Builds**

### **Development Build**
```bash
# Build development image
docker build -f Dockerfile.dev -t bookstore-app:dev .

# Run development container
docker run -p 3000:3000 bookstore-app:dev
```

### **Production Build**
```bash
# Build production image
docker build -t bookstore-app:latest .

# Run production container
docker run -p 3000:3000 bookstore-app:latest
```

### **Docker Compose**
```bash
# Start all services
docker-compose up

# Start specific service
docker-compose up bookstore-app
```

## 🔄 **CI/CD Pipeline**

### **GitHub Actions Workflow**

The updated `.github/workflows/deploy-azure.yml` includes:

#### **Test Job:**
- ✅ **Dependency installation** with `--legacy-peer-deps`
- ✅ **Linting and type checking**
- ✅ **Build verification**
- ✅ **Docker build testing**

#### **Deploy Job:**
- ✅ **Multi-platform builds** (linux/amd64)
- ✅ **Enhanced caching** for faster builds
- ✅ **Automatic scaling** configuration
- ✅ **Health check verification** with retries

### **Pipeline Features:**

#### **Enhanced Error Handling:**
```yaml
# Test Docker build in CI
- name: Test Docker build
  run: |
    docker build -f Dockerfile.dev -t bookstore-app:test .
    echo "✅ Development Docker build successful"
```

#### **Improved Deployment:**
```yaml
# Enhanced deployment with scaling
az containerapp update \
  --name ${{ env.CONTAINER_APP_NAME }} \
  --resource-group ${{ env.RESOURCE_GROUP }} \
  --image ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:$LATEST_TAG \
  --set-env-vars NODE_ENV=production,NEXT_TELEMETRY_DISABLED=1 \
  --cpu 1.0 \
  --memory 2.0Gi \
  --min-replicas 1 \
  --max-replicas 3 \
  --scale-rule-name http-scaling \
  --scale-rule-type http \
  --scale-rule-http-concurrency 50
```

#### **Health Check Verification:**
```yaml
# Retry logic for health checks
for i in {1..5}; do
  echo "🏥 Health check attempt $i..."
  if curl -f http://$APP_URL/api/health; then
    echo "✅ Health check passed!"
    break
  else
    echo "❌ Health check failed, retrying in 30 seconds..."
    sleep 30
  fi
done
```

## ☁️ **Azure Deployment**

### **Manual Deployment**

#### **1. Prerequisites:**
```bash
# Install Azure CLI
# Login to Azure
az login

# Set subscription
az account set --subscription <your-subscription-id>
```

#### **2. Deploy using script:**
```bash
# Make script executable
chmod +x deploy-azure.sh

# Deploy to production
./deploy-azure.sh production
```

#### **3. Deploy using Azure CLI:**
```bash
# Build and push image
docker build -t bookhavenregistry.azurecr.io/bookstore-app:latest .
docker push bookhavenregistry.azurecr.io/bookstore-app:latest

# Deploy to Container Apps
az containerapp update \
  --name bookhaven-app \
  --resource-group bookhaven-rg \
  --image bookhavenregistry.azurecr.io/bookstore-app:latest
```

### **Automated Deployment**

#### **GitHub Secrets Required:**
- `AZURE_CREDENTIALS`: Service principal credentials
- `ACR_USERNAME`: Azure Container Registry username
- `ACR_PASSWORD`: Azure Container Registry password

#### **Deployment Triggers:**
- ✅ **Push to main branch**: Automatic deployment
- ✅ **Pull requests**: Test deployment
- ✅ **Manual trigger**: Workflow dispatch

## 📊 **Monitoring & Health**

### **Health Endpoints**
```bash
# Application health
GET /api/health

# Response format
{
  "status": "healthy",
  "timestamp": "2025-07-20T21:38:34.151Z",
  "uptime": 19.685509184,
  "environment": "production",
  "version": "1.0.0"
}
```

### **Azure Monitoring**
```bash
# View container app logs
az containerapp logs show \
  --name bookhaven-app \
  --resource-group bookhaven-rg

# Get application URL
az containerapp show \
  --name bookhaven-app \
  --resource-group bookhaven-rg \
  --query properties.configuration.ingress.fqdn
```

### **Local Testing**
```bash
# Test local container
docker run -d -p 3000:3000 --name bookstore-test bookstore-app:latest

# Health check
curl http://localhost:3000/api/health

# Clean up
docker stop bookstore-test && docker rm bookstore-test
```

## 🔧 **Configuration**

### **Environment Variables**
| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `1` |
| `PORT` | Application port | `3000` |

### **Azure Resources**
| Resource | Name | Purpose |
|----------|------|---------|
| Container Registry | `bookhavenregistry` | Store Docker images |
| Container App | `bookhaven-app` | Run the application |
| Resource Group | `bookhaven-rg` | Organize resources |

### **Scaling Configuration**
- **Min replicas**: 1
- **Max replicas**: 3
- **CPU**: 1.0 cores
- **Memory**: 2.0 Gi
- **HTTP scaling**: 50 concurrent requests

## 🛠️ **Troubleshooting**

### **Common Issues**

#### **1. Docker Build Failures**
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t bookstore-app .
```

#### **2. Azure Deployment Issues**
```bash
# Check container app status
az containerapp show \
  --name bookhaven-app \
  --resource-group bookhaven-rg

# View logs
az containerapp logs show \
  --name bookhaven-app \
  --resource-group bookhaven-rg
```

#### **3. Health Check Failures**
```bash
# Test health endpoint
curl -f http://your-app-url/api/health

# Check container logs
docker logs <container-id>
```

### **Debug Commands**
```bash
# Check Azure login
az account show

# List container apps
az containerapp list --resource-group bookhaven-rg

# Get container app URL
az containerapp show \
  --name bookhaven-app \
  --resource-group bookhaven-rg \
  --query properties.configuration.ingress.fqdn
```

## 📈 **Performance Optimization**

### **Docker Optimizations**
- ✅ **Multi-stage builds** for smaller images
- ✅ **Layer caching** for faster builds
- ✅ **Standalone output** for Next.js
- ✅ **Non-root user** for security

### **Azure Optimizations**
- ✅ **Automatic scaling** based on HTTP traffic
- ✅ **Resource limits** for cost control
- ✅ **Health monitoring** for reliability
- ✅ **Log aggregation** for debugging

## 🔒 **Security**

### **Best Practices**
- ✅ **Non-root user** in containers
- ✅ **Resource limits** to prevent abuse
- ✅ **Health checks** for monitoring
- ✅ **Secure environment** variables

### **Azure Security**
- ✅ **Managed identities** for service access
- ✅ **Network security** groups
- ✅ **HTTPS enforcement** for production
- ✅ **Regular security** updates

## 📚 **Additional Resources**

- [Azure Container Apps Documentation](https://docs.microsoft.com/en-us/azure/container-apps/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🆘 **Support**

For deployment issues:
1. Check the troubleshooting section above
2. Review Azure Container Apps logs
3. Verify GitHub Actions workflow status
4. Test application health endpoint

---

**🎉 Your BookHaven application is now ready for production deployment on Azure Container Apps!**

The deployment process is fully automated, monitored, and optimized for performance and reliability. 