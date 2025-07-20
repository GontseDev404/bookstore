# Docker & Azure Deployment Guide

This guide covers the Docker containerization and Azure deployment setup for the BookHaven bookstore application.

## 🐳 Docker Setup

### Production Build

Build the production Docker image:

```bash
# Build the image
docker build -t bookstore-app:latest .

# Run the container
docker run -p 3000:3000 bookstore-app:latest
```

### Development Build

For development with hot reloading:

```bash
# Build development image
docker build -f Dockerfile.dev -t bookstore-app:dev .

# Run with volume mounting for hot reload
docker run -p 3001:3000 -v $(pwd):/app bookstore-app:dev
```

### Using Docker Compose

```bash
# Production
docker-compose up -d

# Development
docker-compose --profile dev up -d
```

## ☁️ Azure Deployment

### Prerequisites

1. **Azure CLI** installed and authenticated
2. **Azure Container Registry** (ACR) created
3. **Azure Container Apps Environment** set up
4. **GitHub Secrets** configured:
   - `AZURE_CREDENTIALS`
   - `ACR_USERNAME`
   - `ACR_PASSWORD`

### Manual Deployment

```bash
# Login to Azure
az login

# Login to ACR
az acr login --name bookhavenregistry

# Build and push image
docker build -t bookhavenregistry.azurecr.io/bookstore-app:latest .
docker push bookhavenregistry.azurecr.io/bookstore-app:latest

# Deploy to Container Apps
az containerapp update \
  --name bookhaven-app \
  --resource-group bookhaven-rg \
  --image bookhavenregistry.azurecr.io/bookstore-app:latest
```

### Automated Deployment

The GitHub Actions workflow automatically deploys on pushes to the `main` branch:

1. **Test Stage**: Runs linting, type checking, and build
2. **Build Stage**: Creates optimized Docker image
3. **Deploy Stage**: Updates Azure Container Apps

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `1` |
| `PORT` | Application port | `3000` |
| `HOSTNAME` | Bind address | `0.0.0.0` |

### Azure Container Apps Configuration

- **CPU**: 0.5 cores
- **Memory**: 1GB
- **Min Replicas**: 1
- **Max Replicas**: 10
- **Scaling**: HTTP-based (100 concurrent requests)

### Health Checks

The application includes health check endpoints:

- **Readiness Probe**: `/api/health` (every 5s)
- **Liveness Probe**: `/api/health` (every 10s)

## 🚀 Performance Optimizations

### Docker Optimizations

1. **Multi-stage Build**: Reduces final image size
2. **Layer Caching**: Optimized dependency installation
3. **Standalone Output**: Next.js standalone mode for smaller images
4. **Non-root User**: Security best practices

### Azure Optimizations

1. **Auto-scaling**: Based on HTTP traffic
2. **Health Monitoring**: Proactive health checks
3. **Resource Limits**: Optimized CPU/memory allocation
4. **CDN Integration**: Global content delivery

## 📊 Monitoring

### Azure Monitor

- **Application Insights**: Performance monitoring
- **Container Apps Metrics**: Resource utilization
- **Log Analytics**: Centralized logging

### Health Check Response

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "version": "1.0.0"
}
```

## 🔒 Security

### Docker Security

- **Non-root User**: Application runs as `nextjs` user
- **Minimal Base Image**: Alpine Linux for smaller attack surface
- **Dependency Scanning**: Regular security updates

### Azure Security

- **Private Registry**: Azure Container Registry
- **Managed Identity**: Secure credential management
- **Network Security**: VNet integration available

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**: Check Node.js version compatibility
2. **Deployment Errors**: Verify Azure credentials and permissions
3. **Health Check Failures**: Ensure `/api/health` endpoint is accessible
4. **Performance Issues**: Monitor resource utilization in Azure Portal

### Debug Commands

```bash
# Check container logs
docker logs <container-id>

# Access container shell
docker exec -it <container-id> /bin/sh

# Check Azure Container Apps logs
az containerapp logs show --name bookhaven-app --resource-group bookhaven-rg
```

## 📈 Scaling

### Horizontal Scaling

- **Auto-scaling**: Based on HTTP traffic
- **Manual Scaling**: Adjust replica count in Azure Portal
- **Custom Metrics**: Implement custom scaling rules

### Vertical Scaling

- **CPU**: 0.5 to 2 cores
- **Memory**: 1GB to 4GB
- **Storage**: Persistent volumes for file uploads

## 🔄 CI/CD Pipeline

The GitHub Actions workflow includes:

1. **Code Quality**: Linting and type checking
2. **Security Scanning**: Dependency vulnerability checks
3. **Automated Testing**: Build verification
4. **Blue-Green Deployment**: Zero-downtime updates
5. **Rollback Capability**: Quick revert to previous version

## 📚 Additional Resources

- [Azure Container Apps Documentation](https://docs.microsoft.com/en-us/azure/container-apps/)
- [Next.js Docker Deployment](https://nextjs.org/docs/deployment#docker-image)
- [Azure Container Registry](https://docs.microsoft.com/en-us/azure/container-registry/)
- [GitHub Actions for Azure](https://docs.microsoft.com/en-us/azure/developer/github/) 