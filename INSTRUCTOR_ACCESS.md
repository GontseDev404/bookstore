# Instructor Access Guide

## 📦 Repository URL
[https://github.com/GontseDev404/bookstore](https://github.com/GontseDev404/bookstore)

## 🛠️ Clone Instructions
```bash
git clone https://github.com/GontseDev404/bookstore.git
cd bookstore
npm install
```

## 🚀 Local Development
- Start the app locally:
  ```bash
  npm run dev
  ```
- Visit: [http://localhost:3000](http://localhost:3000)

## 🐳 Docker Usage
- Build the Docker image:
  ```bash
  docker build -t bookstore-app .
  ```
- Run the container:
  ```bash
  docker run -p 3001:3000 bookstore-app
  ```
- Visit: [http://localhost:3001](http://localhost:3001)

## 🔄 CI/CD Pipeline
- GitHub Actions workflow runs on every push and pull request
- View pipeline status: [Actions Tab](https://github.com/GontseDev404/bookstore/actions)

---

## 🌐 Live Cloud Deployment
- **Live URL:** [https://bookhaven-app--b5bhqv6.victoriouspond-e9b4a388.eastus.azurecontainerapps.io/](https://bookhaven-app--b5bhqv6.victoriouspond-e9b4a388.eastus.azurecontainerapps.io/)
- **Platform:** Azure Container Apps

### Redeployment Steps
1. Push to the `main` branch on GitHub, or
2. Manually run the `Deploy to Azure Container Apps` workflow in GitHub Actions
   - This will build, push, and deploy the latest Docker image automatically

---

If you need additional access or have questions, please contact the project owner via GitHub. 