# 🚀 Bookstore Deployment Guide

This guide covers deploying the Bookstore application using Docker, Azure Container Apps, and CI/CD pipelines.

## 📋 Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed
- [Node.js 20+](https://nodejs.org/) (for local development)
- Azure subscription with Container Registry and Container Apps

## 🐳 Docker Deployment

### Local Development

```bash
# Build and run development container
docker-compose up bookstore-app

# Or build manually
docker build -f Dockerfile.dev -t bookstore-app:dev .
docker run -p 3000:3000 -v $(pwd):/app bookstore-app:dev
```

### Production Build

```bash
# Build production image
docker build -t bookstore-app:latest .

# Run production container
docker run -p 3000:3000 bookstore-app:latest
```

### Using Docker Compose

```bash
# Start development environment
docker-compose up

# Start production environment
docker-compose up bookstore-prod

# Stop all services
docker-compose down
```

## ☁️ Azure Container Apps Deployment

### Manual Deployment

1. **Login to Azure:**
   ```bash
   az login
   ```

2. **Set your subscription:**
   ```bash
   az account set --subscription <your-subscription-id>
   ```

3. **Run the deployment script:**
   ```bash
   chmod +x deploy-azure.sh
   ./deploy-azure.sh
   ```

### Automated CI/CD

The GitHub Actions workflow automatically deploys on pushes to `main`:

1. **Tests the application**
2. **Builds Docker image**
3. **Pushes to Azure Container Registry**
4. **Deploys to Azure Container Apps**
5. **Verifies deployment with health checks**

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `NEXT_TELEMETRY_DISABLED` | Disable Next.js telemetry | `1` |
| `PORT` | Application port | `3000` |

### Azure Resources

| Resource | Name | Purpose |
|----------|------|---------|
| Container Registry | `bookhavenregistry` | Store Docker images |
| Container App | `bookhaven-app` | Run the application |
| Resource Group | `bookhaven-rg` | Organize resources |

## 📊 Monitoring

### Health Checks

The application includes a health check endpoint:
```
GET /api/health
```

### Azure Monitoring

- **Application Insights**: Automatic monitoring
- **Container App Logs**: `az containerapp logs show`
- **Metrics**: CPU, Memory, Requests

### Local Monitoring

```bash
# View container logs
docker logs <container-id>

# Monitor resource usage
docker stats

# Health check
curl http://localhost:3000/api/health
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The `.github/workflows/deploy-azure.yml` includes:

1. **Test Job:**
   - Install dependencies with `--legacy-peer-deps`
   - Run linting and type checking
   - Build the application

2. **Deploy Job:**
   - Build and push Docker image
   - Deploy to Azure Container Apps
   - Verify deployment with health checks

### Secrets Required

Add these secrets to your GitHub repository:

- `AZURE_CREDENTIALS`: Service principal credentials
- `ACR_USERNAME`: Azure Container Registry username
- `ACR_PASSWORD`: Azure Container Registry password

## 🛠️ Troubleshooting

### Common Issues

#### 1. Dependency Conflicts
```bash
# Solution: Use legacy peer deps
npm ci --legacy-peer-deps
```

#### 2. Docker Build Failures
```bash
# Clear Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t bookstore-app .
```

#### 3. Azure Deployment Issues
```bash
# Check container app status
az containerapp show --name bookhaven-app --resource-group bookhaven-rg

# View logs
az containerapp logs show --name bookhaven-app --resource-group bookhaven-rg
```

#### 4. Health Check Failures
```bash
# Check if app is running
curl -f http://localhost:3000/api/health

# Check container logs
docker logs <container-id>
```

### Debug Commands

```bash
# Check Azure login
az account show

# List container apps
az containerapp list --resource-group bookhaven-rg

# Get container app URL
az containerapp show --name bookhaven-app --resource-group bookhaven-rg --query properties.configuration.ingress.fqdn
```

## 📈 Scaling

### Azure Container Apps Scaling

The application is configured with:
- **Min replicas**: 1
- **Max replicas**: 3
- **CPU**: 1.0 cores
- **Memory**: 2.0 Gi

### Manual Scaling

```bash
# Scale to 2 replicas
az containerapp revision set-mode \
  --name bookhaven-app \
  --resource-group bookhaven-rg \
  --mode single \
  --revision-suffix v2

# Scale to multiple replicas
az containerapp update \
  --name bookhaven-app \
  --resource-group bookhaven-rg \
  --min-replicas 2 \
  --max-replicas 5
```

## 🔒 Security

### Best Practices

1. **Use managed identities** for Azure services
2. **Enable HTTPS** for production traffic
3. **Regular security updates** for base images
4. **Network security groups** for traffic control
5. **Azure Key Vault** for secrets management

### Security Scanning

```bash
# Scan Docker image for vulnerabilities
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image bookstore-app:latest
```

## 📚 Additional Resources

- [Azure Container Apps Documentation](https://docs.microsoft.com/en-us/azure/container-apps/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🆘 Support

For deployment issues:
1. Check the troubleshooting section above
2. Review Azure Container Apps logs
3. Verify GitHub Actions workflow status
4. Check application health endpoint

---

**Happy Deploying! 🚀** 