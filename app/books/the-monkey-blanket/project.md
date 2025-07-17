
## 📦 Essential Tools Installation

### 1. Node.js & npm

| OS | Installation Command |
|----|--------------------|
| **Ubuntu/WSL** | `curl -fsSL https://deb.nodesource.com/setup_20.x \| sudo -E bash -`<br>`sudo apt-get install -y nodejs` |
| **macOS** | `brew install node` |
| **Windows** | Download from [nodejs.org](https://nodejs.org/) |

**Verify Installation:**
```bash
node --version    # Should show v20.x.x
npm --version     # Should show 10.x.x
```

### 2. Git

| OS | Installation Command |
|----|--------------------|
| **Ubuntu/WSL** | `sudo apt install git -y` |
| **macOS** | `brew install git` |
| **Windows** | Download from [git-scm.com](https://git-scm.com/) |

**Configure Git:**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
```

### 3. Docker & Docker Compose

#### Ubuntu/WSL Installation
```bash
# Remove old versions
sudo apt-get remove docker docker-engine docker.io containerd runc

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### macOS Installation
```bash
brew install --cask docker
# Or download Docker Desktop from docker.com
```

#### Windows Installation
Download [Docker Desktop](https://www.docker.com/products/docker-desktop) and enable WSL2 integration.

**Verify Docker:**
```bash
docker --version
docker-compose --version
docker run hello-world
```

### 4. Development IDEs

#### VS Code
| OS | Installation |
|----|----|
| **Ubuntu/WSL** | `sudo snap install code --classic` |
| **macOS** | `brew install --cask visual-studio-code` |
| **Windows** | Download from [code.visualstudio.com](https://code.visualstudio.com/) |

#### WebStorm (JetBrains)
1. Sign up for [JetBrains Education](https://www.jetbrains.com/community/education/)
2. Download [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/)
3. Install WebStorm through Toolbox

### 5. Git Tools

#### GitHub Desktop
- Download from [desktop.github.com](https://desktop.github.com/)

#### GitHub CLI
| OS | Installation Command |
|----|--------------------|
| **Ubuntu/WSL** | `curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \| sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg`<br>`echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \| sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null`<br>`sudo apt update && sudo apt install gh` |
| **macOS** | `brew install gh` |
| **Windows** | `winget install --id GitHub.cli` |

#### GitKraken
1. Get free Pro license: [GitKraken Student Pack](https://www.gitkraken.com/github-student-developer-pack)
2. Download [GitKraken](https://www.gitkraken.com/)

**Authenticate with GitHub:**
```bash
gh auth login
```

### 6. Essential VS Code Extensions

```bash
# Install via command palette (Ctrl+Shift+P)
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
code --install-extension eamodio.gitlens
code --install-extension ms-vscode.vscode-docker
code --install-extension ms-vscode.remote-containers
```

### 8. Claude Desktop (AI Assistant)

| OS | Installation |
|----|----|
| **Ubuntu/WSL** | Download from [claude.ai/download](https://claude.ai/download) |
| **macOS** | Download from [claude.ai/download](https://claude.ai/download) |
| **Windows** | Download from [claude.ai/download](https://claude.ai/download) |

**Setup Claude Desktop:**
1. Create account at [claude.ai](https://claude.ai)
2. Download and install Claude Desktop
3. Sign in with your account
4. Enable MCP (Model Context Protocol) for VS Code integration

### 9. TypeScript Global Installation

```bash
npm install -g typescript @types/node
```

---

## 🚀 Project Setup

### Step 1: Create Your Private Repository

1. **Sign up for GitHub Education:** [education.github.com](https://education.github.com)
2. **Create new repository:**
  - Go to [github.com/new](https://github.com/new)
  - Name: `bookstore-ci-cd` (or your preferred name)
  - Description: "Next.js bookstore with CI/CD pipeline"
  - Set to **Private**
  - Initialize with README
  - Add .gitignore: Node

### Step 2: Clone and Setup Local Repository

```bash
# Navigate to your projects directory
mkdir ~/projects && cd ~/projects

# Clone the template repository
git clone https://github.com/Mokhatla/bookstore.git bookstore-temp

# Clone your new private repository
git clone https://github.com/YOUR_USERNAME/bookstore-ci-cd.git
cd bookstore-ci-cd

# Copy template files to your repository
cp -r ../bookstore-temp/* .
cp ../bookstore-temp/.* . 2>/dev/null || true

# Remove template directory
rm -rf ../bookstore-temp

# Initialize git and set remote
git add .
git commit -m "Initial commit: Add bookstore template"
git push origin main
```

### Step 3: Understand the Project Structure

```
bookstore-ci-cd/
├── app/
│   ├── globals.css
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Home page
│   └── books/
│       ├── [id]/
│       │   └── page.tsx    # Dynamic book detail page (currently empty)
│       └── the-monkey-blanket/
│           └── page.tsx    # Specific book (will fix at project end)
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── book/              # Book-specific components
│   └── layout/            # Layout components
├── public/
│   └── images/            # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

> **📝 Note:** There's a routing structure issue we'll fix as the final coding task. For now, focus on CI/CD setup.

### Step 4: Install Dependencies and Test

```bash
# Install dependencies (use --force --legacy-peer-deps if needed)
npm install --force --legacy-peer-deps

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your bookstore application.

---

## 🐳 Docker Configuration

### Understanding Docker Concepts

| Concept | Description | Analogy |
|---------|-------------|---------|
| **Image** | Read-only template with application code | Recipe for a dish |
| **Container** | Running instance of an image | Actual cooked dish |
| **Dockerfile** | Instructions to build an image | Cooking instructions |
| **Alpine Linux** | Lightweight Linux distribution for containers | Minimalist kitchen setup |

### Create Dockerfile

Create `Dockerfile` in your project root:

```dockerfile
# Use Alpine Linux with Node.js for smaller image size
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --force --legacy-peer-deps

# Copy application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to outside world
EXPOSE 3000

# Command to run when container starts
CMD ["npm", "start"]
```

### Create .dockerignore

```dockerignore
node_modules
.next
.git
.gitignore
README.md
Dockerfile
.dockerignore
npm-debug.log
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### Test Docker Build

```bash
# Build Docker image
docker build -t bookstore-app .

# Run container on port 3001 (different from dev server)
docker run -p 3001:3000 bookstore-app

# Test both versions simultaneously:
# Development: http://localhost:3000
# Docker: http://localhost:3001
```

**Why Different Ports?**
- Development server runs on host machine (port 3000)
- Docker container exposes port 3000 internally, mapped to 3001 externally
- This simulates how production deployments work

---

## 🔄 GitHub Actions CI Pipeline

### Understanding CI/CD

```mermaid
graph LR
    A[Developer Push] --> B[GitHub Actions]
    B --> C[Build & Test]
    C --> D[Code Quality]
    D --> E[Security Scan]
    E --> F[Docker Build]
    F --> G[Deploy Ready]
```

### Create GitHub Actions Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '20'
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  test:
    name: Test Suite
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install --force --legacy-peer-deps
      
    - name: Run TypeScript check
      run: npm run type-check
      
    - name: Run ESLint
      run: npm run lint
      
    - name: Run tests
      run: npm run test:ci
      
    - name: Run E2E tests
      run: npm run test:e2e
      
  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: test
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: ${{ env.NODE_VERSION }}
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install --force --legacy-peer-deps
      
    - name: Build application
      run: npm run build
      env:
        NEXT_PUBLIC_APP_NAME: ${{ secrets.APP_NAME }}
        
    - name: Upload build artifacts
      uses: actions/upload-artifact@v4
      with:
        name: build-files
        path: .next/
        
  docker:
    name: Docker Build & Push
    runs-on: ubuntu-latest
    needs: [test, build]
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3
      
    - name: Login to Container Registry
      uses: docker/login-action@v3
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
        
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha
          
    - name: Build and push Docker image
      uses: docker/build-push-action@v5
      with:
        context: .
        platforms: linux/amd64,linux/arm64
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  security:
    name: Security Scans
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Run Trivy vulnerability scanner
      uses: aquasecurity/trivy-action@master
      with:
        scan-type: 'fs'
        scan-ref: '.'
        format: 'sarif'
        output: 'trivy-results.sarif'
        
    - name: Upload Trivy scan results
      uses: github/codeql-action/upload-sarif@v3
      with:
        sarif_file: 'trivy-results.sarif'
        
  notify:
    name: Slack Notification
    runs-on: ubuntu-latest
    needs: [test, build, docker, security]
    if: always()
    
    steps:
    - name: Slack Notification
      uses: 8398a7/action-slack@v3
      with:
        status: ${{ job.status }}
        channel: '#dev-notifications'
        webhook_url: ${{ secrets.SLACK_WEBHOOK }}
      if: always()
```

### Update package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

---

## 🧪 Testing Setup

### Jest Configuration

Create `jest.config.js`:

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
```

Create `jest.setup.js`:

```javascript
import '@testing-library/jest-dom'
```

### Sample Unit Test

Create `__tests__/components/BookRating.test.tsx`:

```typescript
import { render, screen } from '@testing-library/react'
import { BookRating } from '@/components/book/book-rating'

describe('BookRating Component', () => {
  it('renders rating and review count', () => {
    render(<BookRating rating={4.5} reviewCount={42} />)
    
    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('(42 reviews)')).toBeInTheDocument()
  })
  
  it('displays correct number of stars', () => {
    render(<BookRating rating={3} reviewCount={10} />)
    
    const filledStars = screen.getAllByTestId('filled-star')
    expect(filledStars).toHaveLength(3)
  })
})
```

### Playwright E2E Testing

Install Playwright:

```bash
npm init playwright@latest
```

Create `tests/bookstore.spec.ts`:

```typescript
import { test, expect } from '@playwright/test'

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000')
  
  await expect(page).toHaveTitle(/2BOOKS/)
  await expect(page.getByRole('heading', { name: 'Bestsellers' })).toBeVisible()
})

test('can navigate to book detail page', async ({ page }) => {
  await page.goto('http://localhost:3000')
  
  await page.click('text=The Monkey Blanket')
  await expect(page).toHaveURL(/.*books.*/)
  await expect(page.getByRole('heading', { name: 'The Monkey Blanket' })).toBeVisible()
})
```

Install test dependencies:

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

### Pre-commit Hooks Setup

Pre-commit hooks ensure code quality before commits reach the repository.

#### Install and Configure Pre-commit

```bash
# Install pre-commit globally
npm install -g @commitlint/cli @commitlint/config-conventional
npm install --save-dev husky lint-staged

# Initialize husky
npx husky-init && npm install
```

#### Create .lintstagedrc.json

```json
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,yml,yaml}": [
    "prettier --write"
  ],
  "*.{ts,tsx}": [
    "tsc --noEmit"
  ]
}
```

#### Update .husky/pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "🔍 Running pre-commit checks..."
npm run type-check
npm run lint
npx lint-staged

echo "🧪 Running tests..."
npm run test -- --watchAll=false --passWithNoTests

echo "✅ All checks passed!"
```

#### Create commitlint.config.js

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'ci']
    ],
    'subject-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100]
  }
}
```

**Why Pre-commit Hooks Matter:**
- **Quality Gate**: Prevents broken code from entering repository
- **Consistency**: Enforces coding standards across team
- **Speed**: Catches issues locally vs. waiting for CI
- **Professionalism**: Industry standard practice

---

## 🔒 Environment Variables & Secrets

### Create .env.local

```bash
# Application Configuration
NEXT_PUBLIC_APP_NAME="YourBookstore"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_SEARCH=true

# Development Settings
NODE_ENV=development
```

### Update .gitignore

Ensure these entries exist in `.gitignore`:

```gitignore
# Environment files
.env.local
.env.development.local
.env.test.local
.env.production.local
.env

# Project documentation (internal)
SPECS/

# Dependencies
node_modules/

# Build outputs
.next/
out/

# Testing
coverage/
test-results/
playwright-report/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Docker
.dockerignore
```

### Add GitHub Secrets

```bash
# Add secrets using GitHub CLI
gh secret set APP_NAME --body "YourBookstore"
gh secret set SLACK_WEBHOOK --body "your-slack-webhook-url"

# Or manually through GitHub web interface:
# Repository Settings > Secrets and variables > Actions > New repository secret
```

---

## 🌐 Cloud Deployment Setup

### Azure Container Apps Deployment

Create `.github/workflows/deploy-azure.yml`:

```yaml
name: Deploy to Azure Container Apps

on:
  workflow_run:
    workflows: ["CI Pipeline"]
    types:
      - completed
    branches: [main]

env:
  AZURE_CONTAINER_APP_NAME: bookstore-app
  AZURE_RESOURCE_GROUP: rg-bookstore
  AZURE_CONTAINER_ENV: bookstore-env

jobs:
  deploy:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Azure Login
      uses: azure/login@v1
      with:
        creds: ${{ secrets.AZURE_CREDENTIALS }}
        
    - name: Deploy to Azure Container Apps
      uses: azure/container-apps-deploy-action@v1
      with:
        containerAppName: ${{ env.AZURE_CONTAINER_APP_NAME }}
        resourceGroup: ${{ env.AZURE_RESOURCE_GROUP }}
        imageToDeploy: ghcr.io/${{ github.repository }}:${{ github.sha }}
        environmentVariables: |
          NEXT_PUBLIC_APP_NAME=${{ secrets.APP_NAME }}
```

### Google Cloud Run Deployment

Create `.github/workflows/deploy-gcp.yml`:

```yaml
name: Deploy to Google Cloud Run

on:
  workflow_run:
    workflows: ["CI Pipeline"]
    types:
      - completed
    branches: [main]

env:
  PROJECT_ID: your-project-id
  SERVICE_NAME: bookstore-service
  REGION: us-central1

jobs:
  deploy:
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Google Cloud CLI
      uses: google-github-actions/setup-gcloud@v1
      with:
        service_account_key: ${{ secrets.GCP_SA_KEY }}
        project_id: ${{ env.PROJECT_ID }}
        
    - name: Configure Docker for GCR
      run: gcloud auth configure-docker
      
    - name: Deploy to Cloud Run
      run: |
        gcloud run deploy ${{ env.SERVICE_NAME }} \
          --image ghcr.io/${{ github.repository }}:${{ github.sha }} \
          --platform managed \
          --region ${{ env.REGION }} \
          --allow-unauthenticated \
          --set-env-vars NEXT_PUBLIC_APP_NAME=${{ secrets.APP_NAME }}
```

---

## 📋 Complete Project Execution Checklist

### Phase 1: Preparation & Environment Setup ✅

- [ ] **Account Registrations**
  - [ ] GitHub Education account with student verification
  - [ ] Azure for Students account ($100 credits)
  - [ ] JetBrains Education license
  - [ ] GitHub Codespaces access
  - [ ] GitKraken Student Pack
  - [ ] Trello account for project management
  - [ ] Slack account for notifications
  - [ ] Claude AI account and Claude Desktop installation

- [ ] **Development Environment**
  - [ ] Node.js 20+ and npm installation
  - [ ] Docker and Docker Compose setup
  - [ ] Git configuration with user details
  - [ ] VS Code with all required extensions
  - [ ] WebStorm installation via JetBrains Toolbox
  - [ ] GitHub Desktop, GitHub CLI, GitKraken installation
  - [ ] PostgreSQL installation and setup
  - [ ] TypeScript global installation

### Phase 2: Repository & Application Setup ✅

- [ ] Create private GitHub repository
- [ ] Clone template from https://github.com/Mokhatla/bookstore
- [ ] Set up local repository with proper remote
- [ ] Install dependencies with `npm install --force --legacy-peer-deps`
- [ ] Test application runs on `http://localhost:3000`
- [ ] Create comprehensive README.md
- [ ] Configure .gitignore with all necessary entries
- [ ] Initial commit and push to main branch

### Phase 3: Docker Implementation ✅

- [ ] Create Dockerfile with Alpine Linux base
- [ ] Configure .dockerignore file
- [ ] Build Docker image successfully
- [ ] Run Docker container on port 3001
- [ ] Verify both local (3000) and Docker (3001) versions work
- [ ] Understand port mapping and production implications

### Phase 4: CI/CD Pipeline Implementation ✅

- [ ] Create `.github/workflows/ci.yml`
- [ ] Configure environment variables in `.env.local`
- [ ] Set up GitHub secrets (APP_NAME, SLACK_WEBHOOK)
- [ ] Implement Jest unit testing with one test
- [ ] Set up Playwright E2E testing with one test
- [ ] Configure test coverage reporting
- [ ] Add ESLint and TypeScript checking
- [ ] Implement code quality scanning
- [ ] Add vulnerability scanning
- [ ] Set up Slack notifications for pipeline status
- [ ] **Configure pre-commit hooks with Husky and lint-staged**
- [ ] **Create commitlint configuration for conventional commits**

### Phase 5: Git Workflow & Text Changes ✅

- [ ] **Enable branch protection on main branch**
- [ ] **Create feature branch `ui-update` using GitKraken**
- [ ] **Execute specific text changes using different tools:**
  - [ ] Change "2BOOKS" to "BookHaven" using terminal
  - [ ] Update "Add to Cart" to "Add to Library" using VS Code
  - [ ] Change tagline using WebStorm version control
  - [ ] Update "Bestsellers" to "Staff Favorites" using GitHub CLI
  - [ ] Enhance navigation language for better UX
  - [ ] Improve newsletter call-to-action text
- [ ] **Practice all Git tools: terminal, VS Code, WebStorm, GitHub CLI**
- [ ] **Verify branch protection blocks direct main pushes**

### Phase 6: Architecture Fix ✅

- [ ] Create feature branch `fix/dynamic-routing`
- [ ] Move static monkey-blanket route to dynamic [id] route
- [ ] Update component to accept URL parameters
- [ ] Add helper function for book data simulation
- [ ] Test dynamic routing with multiple book IDs
- [ ] Commit changes with professional commit message
- [ ] Create pull request with detailed description
- [ ] Verify CI pipeline passes with new structure

### Phase 7: Professional Documentation ✅

- [ ] **Create SPECS directory structure**
- [ ] **Add SPECS/ folder to .gitignore**
- [ ] **Generate documentation using GitHub Copilot:**
  - [ ] SPECS/vision.md - Project vision and mission
  - [ ] SPECS/project.md - Technical specification
  - [ ] SPECS/roadmap.md - Product development roadmap
- [ ] **Set up Trello integration:**
  - [ ] Install Trello VS Code extension
  - [ ] Configure Claude Desktop MCP integration
  - [ ] Create Trello board from roadmap items
  - [ ] Generate automated task cards
- [ ] **Export documentation to PDF:**
  - [ ] Install markdown-pdf or pandoc
  - [ ] Generate individual PDF files
  - [ ] Create combined documentation PDF

### Phase 8: Final Submission & Collaboration ✅

- [ ] **Add instructor as repository maintainer**
- [ ] **Create repository access summary**
- [ ] **Prepare submission email with all details**
- [ ] **Create verification guide for instructor**
- [ ] **Verify all functionality works end-to-end:**
  - [ ] Local development server
  - [ ] Docker container
  - [ ] CI/CD pipeline
  - [ ] All tests passing
  - [ ] Documentation complete
- [ ] **Send final submission package to instructor**

### Phase 9: Cloud Deployment ✅

- [ ] Set up Azure Container Apps OR Google Cloud Run
- [ ] Configure deployment secrets and environment variables
- [ ] Test complete CI/CD pipeline with deployment
- [ ] Verify production application accessibility
- [ ] Document live URLs and access instructions

---

## 🚨 Common Issues & Solutions

### Docker Issues

| Problem | Solution |
|---------|----------|
| **Permission denied** | `sudo usermod -aG docker $USER && newgrp docker` |
| **Port already in use** | `docker ps` to find running containers, `docker stop <container_id>` |
| **Build fails on M1 Mac** | Add `--platform linux/amd64` to docker build command |

### npm Issues

| Problem | Solution |
|---------|----------|
| **Peer dependency warnings** | Use `--force --legacy-peer-deps` flags |
| **EACCES permissions error** | `sudo chown -R $(whoami) ~/.npm` |
| **Package not found** | Clear cache with `npm cache clean --force` |

### Git Issues

| Problem | Solution |
|---------|----------|
| **Permission denied (publickey)** | Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"` |
| **Branch protection blocks push** | Create feature branch and pull request |
| **Merge conflicts** | Use VS Code or GitKraken merge conflict resolution |

---

## 📚 Additional Resources

### Learning Materials

- [Docker Documentation](https://docs.docker.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Documentation](https://nextjs.org/docs)
- [Jest Testing Framework](https://jestjs.io/docs/getting-started)
- [Playwright Testing](https://playwright.dev/docs/intro)

### Useful Commands Reference

```bash
# Git commands
git status                    # Check repository status
git branch                   # List branches
git checkout -b feature-name # Create and switch to new branch
git add .                    # Stage all changes
git commit -m "message"      # Commit changes
git push origin branch-name  # Push to remote

# Docker commands
docker build -t app-name .   # Build image
docker run -p 3001:3000 app  # Run container
docker ps                    # List running containers
docker logs container-id     # View container logs

# npm commands
npm install                  # Install dependencies
npm run dev                  # Start development server
npm run build               # Build for production
npm test                    # Run tests
```

---

## 🎉 Project Completion

Congratulations! You've successfully:

1. ✅ Set up a comprehensive professional development environment
2. ✅ Implemented a complete CI/CD pipeline with advanced testing
3. ✅ Learned Docker containerization and production deployment
4. ✅ Mastered Git workflows, branch protection, and collaboration
5. ✅ Fixed Next.js routing structure using dynamic routes
6. ✅ Configured automated testing, code quality, and security scanning
7. ✅ Implemented pre-commit hooks and professional development standards
8. ✅ Created comprehensive project documentation using AI assistance
9. ✅ Integrated project management with Trello and roadmap planning
10. ✅ Deployed to cloud services with professional DevOps practices


## 🎓 Final Submission & Collaboration Setup

### Step 1: Add Instructor as Repository Collaborator

#### Using GitHub Web Interface:
1. Navigate to your repository on GitHub
2. Click **Settings** tab
3. Click **Collaborators** in left sidebar
4. Click **Add people** button
5. Enter instructor's GitHub username
6. Select **Maintainer** role (full access)
7. Click **Add [username] to this repository**

#### Using GitHub CLI:
```bash
# Add instructor with maintainer access
gh api \
  --method PUT \
  -H "Accept: application/vnd.github+json" \
  /repos/YOUR_USERNAME/bookstore-ci-cd/collaborators/INSTRUCTOR_USERNAME \
  -f permission='admin'

# Verify collaborator was added
gh api /repos/YOUR_USERNAME/bookstore-ci-cd/collaborators
```

### Step 2: Repository Access Verification

**Create Repository Summary for Instructor:**

```bash
# Generate repository information
echo "# BookHaven Repository Access" > INSTRUCTOR_ACCESS.md
echo "" >> INSTRUCTOR_ACCESS.md
echo "**Repository:** https://github.com/YOUR_USERNAME/bookstore-ci-cd" >> INSTRUCTOR_ACCESS.md
echo "**Access Level:** Maintainer" >> INSTRUCTOR_ACCESS.md
echo "**Clone Command:** \`git clone https://github.com/YOUR_USERNAME/bookstore-ci-cd.git\`" >> INSTRUCTOR_ACCESS.md
echo "" >> INSTRUCTOR_ACCESS.md
echo "## Live Application" >> INSTRUCTOR_ACCESS.md
echo "- **Local Development:** http://localhost:3000" >> INSTRUCTOR_ACCESS.md
echo "- **Docker Version:** http://localhost:3001" >> INSTRUCTOR_ACCESS.md
echo "- **Production URL:** [Your deployed URL]" >> INSTRUCTOR_ACCESS.md
echo "" >> INSTRUCTOR_ACCESS.md
echo "## CI/CD Pipeline" >> INSTRUCTOR_ACCESS.md
echo "- **GitHub Actions:** https://github.com/YOUR_USERNAME/bookstore-ci-cd/actions" >> INSTRUCTOR_ACCESS.md
echo "- **Latest Build:** [Status badge from README]" >> INSTRUCTOR_ACCESS.md
```

### Step 3: Final Documentation Package

**Create Submission Email Template:**

```text
Subject: Project 1 Submission - BookHaven CI/CD Implementation

Dear [Instructor Name],

I have completed Project 1: CI/CD Pipeline with Next.js Bookstore. Please find the submission details below:

📁 **Repository Access:**
- Repository: https://github.com/YOUR_USERNAME/bookstore-ci-cd
- You have been added as a maintainer
- Clone command: git clone https://github.com/YOUR_USERNAME/bookstore-ci-cd.git

🔧 **Technical Implementation:**
✅ Complete CI/CD pipeline with GitHub Actions
✅ Docker containerization with Alpine Linux
✅ Branch protection and professional Git workflow
✅ Automated testing (Jest unit tests + Playwright E2E)
✅ Code quality scanning and vulnerability assessment
✅ Dynamic routing architecture implementation
✅ Pre-commit hooks and linting standards

📋 **Documentation Delivered:**
- SPECS/vision.md → vision.pdf
- SPECS/project.md → project.pdf
- SPECS/roadmap.md → roadmap.pdf
- Complete documentation: BookHaven-Complete-Documentation.pdf

🎯 **Project Management:**
- Trello board: [Your Trello board URL]
- Roadmap integrated with task management
- All phases completed per project requirements

🚀 **Live Demonstration:**
- Application running locally on port 3000
- Docker container accessible on port 3001
- CI/CD pipeline fully functional
- All tests passing with coverage reports

The project demonstrates mastery of:
- Modern development workflows
- Professional Git practices
- CI/CD automation
- Code quality standards
- Documentation and project management

Ready for your review and feedback!

Best regards,
[Your Name]
[Your Student ID]
[Date]
```

### Step 4: Verification Checklist for Instructor

**Create VERIFICATION_GUIDE.md:**

```markdown
# Instructor Verification Guide

## Quick Start Verification

### 1. Repository Access Test
```bash
git clone https://github.com/STUDENT_USERNAME/bookstore-ci-cd.git
cd bookstore-ci-cd
```

### 2. Application Startup
```bash
npm install --force --legacy-peer-deps
npm run dev  # Should start on http://localhost:3000
```

### 3. Docker Test
```bash
docker build -t bookstore-test .
docker run -p 3001:3000 bookstore-test  # Should start on http://localhost:3001
```

### 4. CI/CD Pipeline Check
- Visit: https://github.com/STUDENT_USERNAME/bookstore-ci-cd/actions
- Verify: Latest workflow runs successfully
- Check: All stages pass (build, test, lint, security scan)

### 5. Git Workflow Verification
- Branch protection enabled on main
- Feature branches created properly
- Pull request process followed
- Commit messages follow conventional format

### 6. Code Quality Assessment
- ESLint configuration present
- TypeScript strict mode enabled
- Pre-commit hooks configured
- Test coverage reports available

### 7. Architecture Review
- Dynamic routing implemented correctly
- Environment variables properly configured
- Security best practices followed
- Professional project structure

## Expected Deliverables Checklist

✅ Private GitHub repository with maintainer access
✅ Working Next.js application (local + Docker)
✅ Complete CI/CD pipeline with all stages
✅ Professional Git workflow with branch protection
✅ Comprehensive testing setup
✅ Security scanning and vulnerability management
✅ Dynamic routing architecture
✅ Professional documentation (vision, project, roadmap)
✅ Trello integration with project management
✅ PDF documentation package
```

---

## 🔧 Final Architecture Fix: Dynamic Routing

Now that you've mastered the CI/CD workflow and Git best practices, it's time to fix a critical architectural issue in the project. This is your **final coding task** before testing the complete pipeline.

### Understanding the Routing Problem

The current project structure has a fundamental flaw:
```
app/books/
├── [id]/
│   └── page.tsx          # Empty file - should contain book template
└── the-monkey-blanket/
    └── page.tsx          # Complete book layout - specific to one book
```

**Why This Is Architecturally Wrong:**
1. **Static Routes for Dynamic Content**: `the-monkey-blanket` creates a static route for ONE specific book
2. **Code Duplication**: Each book would need its own folder and duplicate layout code
3. **Poor Scalability**: Adding 1000 books means 1000 folders
4. **Violates DRY Principle**: Don't Repeat Yourself

### The Professional Solution: Dynamic Routes

```
app/books/
└── [id]/
    └── page.tsx          # Universal book template for ALL books
```

**Why This Architecture Is Correct:**
1. **Dynamic Routing**: `[id]` accepts any book identifier (the-monkey-blanket, silver-feet, etc.)
2. **Single Template**: One component handles all books
3. **Scalable**: Works for unlimited books without code changes
4. **SEO Friendly**: Clean URLs like `/books/the-monkey-blanket`

### Next.js Dynamic Routing Patterns

| Route Pattern | Matches | Example URLs |
|--------------|---------|--------------|
| `[id]` | Single segment | `/books/monkey-blanket` |
| `[...slug]` | Multiple segments | `/books/category/fiction/bestseller` |
| `[[...slug]]` | Optional segments | `/books` or `/books/category` |

### Implementation Process

#### Step 1: Create Feature Branch for Final Fix

```bash
# Create new branch for this architectural improvement
git checkout -b fix/dynamic-routing

# Verify you're on the new branch
git branch --show-current
```

#### Step 2: Analyze Current Structure

```bash
# See current structure
ls -la app/books/

# View the empty dynamic route file
cat app/books/[id]/page.tsx

# View the complete monkey blanket file  
cat app/books/the-monkey-blanket/page.tsx
```

#### Step 3: Move the Complete Template

The `the-monkey-blanket/page.tsx` contains the complete, working book detail layout. This should be our universal template.

```bash
# Copy the complete template to the dynamic route
cp app/books/the-monkey-blanket/page.tsx app/books/[id]/page.tsx

# Remove the old static route folder
rm -rf app/books/the-monkey-blanket/
```

#### Step 4: Update the Dynamic Route Component

Open `app/books/[id]/page.tsx` and transform it from static to dynamic:

```typescript
// BEFORE: Static component for one book
export default function BookPage() {
  const book = {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    // ... hardcoded data
  }
  
  return (
    // ... JSX using hardcoded book data
  )
}
```

```typescript
// AFTER: Dynamic component for any book
interface BookPageProps {
  params: {
    id: string
  }
}

export default function BookPage({ params }: BookPageProps) {
  // Extract the book ID from URL
  const bookId = params.id
  
  // In a real app, you'd fetch data based on bookId
  // For now, we'll simulate dynamic behavior
  const book = getBookData(bookId)
  
  return (
    // ... JSX using dynamic book data
  )
}

// Helper function to simulate book data fetching
function getBookData(id: string) {
  // This would normally query a database
  // For demo purposes, return monkey blanket data for any ID
  return {
    id: id,
    title: id === "the-monkey-blanket" ? "The Monkey Blanket" : "Book Title",
    author: "Nana Ndlovana-Mthimkhulu",
    // ... rest of book data
  }
}
```

#### Step 5: Test the Routing Fix

```bash
# Start development server
npm run dev

# Test these URLs in your browser:
# http://localhost:3000/books/the-monkey-blanket  ✅ Should work
# http://localhost:3000/books/any-book-id        ✅ Should work (shows template)
# http://localhost:3000/books/silver-feet        ✅ Should work (shows template)
```

#### Step 6: Understanding URL Mapping

```mermaid
graph TD
    A[User visits /books/the-monkey-blanket] --> B[Next.js Router]
    B --> C[Matches [id] pattern]
    C --> D[params.id = 'the-monkey-blanket']
    D --> E[BookPage component receives params]
    E --> F[Component renders with book data]
```

### Why This Matters Professionally

#### Production Benefits:
1. **Database Integration**: `params.id` would query a database for book details
2. **SEO Optimization**: Each book gets its own URL for search engines
3. **Code Maintainability**: One component handles all book pages
4. **Performance**: Next.js can optimize dynamic routes with static generation

#### Real-World Implementation Pattern:
```typescript
// In a production app with database
export default async function BookPage({ params }: BookPageProps) {
  // Fetch book data from database
  const book = await getBookFromDatabase(params.id)
  
  if (!book) {
    // Handle book not found
    notFound()
  }
  
  return <BookDetail book={book} />
}
```

### Commit and Push Final Changes

```bash
# Check what you've changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "fix: implement dynamic routing for book pages

- Move static monkey-blanket route to dynamic [id] route
- Update BookPage component to accept params
- Add helper function for book data retrieval
- Remove deprecated static route folder
- Improve scalability for multiple books

This architectural fix transforms the application from a static,
non-scalable routing structure to a professional, dynamic routing
system that can handle unlimited books with a single template."

# Push the feature branch
git push origin fix/dynamic-routing
```

### Create Final Pull Request

```bash
# Using GitHub CLI
gh pr create \
  --title "Fix: Implement Dynamic Routing Architecture" \
  --body "
## 🏗️ Architectural Improvement

This PR fixes a fundamental routing issue and transforms the application into a professional, scalable architecture.

## Changes Made
- ✅ Moved static book route to dynamic [id] pattern
- ✅ Updated BookPage component to accept URL parameters  
- ✅ Improved scalability for# Full-Stack Development Project 1: CI/CD Pipeline with Next.js Bookstore

## 📚 Project Overview

Welcome to your first full-stack development project! You'll be working with a Next.js bookstore application, learning modern development workflows, and implementing a complete CI/CD pipeline. This project focuses on **Continuous Integration (CI)** - automating the build, test, and validation process.

### 🎯 Learning Objectives

By the end of this project, you will:
- Understand Git workflows and branch protection
- Master Docker containerization
- Implement GitHub Actions CI/CD
- Deploy to cloud services (Azure Container Apps or Google Cloud Run)
- Use professional development tools
- Follow industry best practices for code quality
- Fix application architecture using Next.js dynamic routing

---

## 🚀 Preparation & Account Setup

**⚠️ Complete ALL these signups BEFORE starting development!**

### Required Service Accounts

| Service | Purpose | Link | Student Benefits |
|---------|---------|------|------------------|
| **GitHub Education** | Free Pro features, Copilot | [education.github.com](https://education.github.com) | Free GitHub Pro, Copilot, Actions |
| **Azure for Students** | Cloud deployment | [azure.microsoft.com/free/students](https://azure.microsoft.com/en-us/free/students) | $100 free credits |
| **JetBrains Education** | Professional IDEs | [jetbrains.com/community/education](https://www.jetbrains.com/community/education/) | Free WebStorm, DataGrip, etc. |
| **GitHub Codespaces** | Cloud development | [github.com/codespaces](https://github.com/codespaces) | Free tier with Education |
| **GitKraken Student Pack** | Git GUI tools | [gitkraken.com/github-student-developer-pack](https://www.gitkraken.com/github-student-developer-pack) | Free Pro license |
| **Trello** | Project management | [trello.com](https://trello.com) | Task tracking |
| **Slack** | Team communication | [slack.com](https://slack.com) | Development notifications |
| **Claude Desktop** | AI coding assistant | [claude.ai](https://claude.ai) | Advanced code generation and analysis |

### 📝 Setup Checklist

- [ ] Sign up for GitHub Education (verify student status)
- [ ] Create Azure for Students account
- [ ] Register for JetBrains Education license
- [ ] Set up GitHub Codespaces access
- [ ] Sign up for GitKraken with student benefits
- [ ] Create Trello account for project tracking
- [ ] Install Slack for CI notifications
- [ ] Sign up for Claude AI and install Claude Desktop
- [ ] Send GitHub username to instructor for organization access

> **💡 Pro Tip:** Use your `.edu` email address for all student accounts to qualify for education benefits!

---

## 🔧 Final Architecture Fix: Dynamic Routing

Now that you've mastered the CI/CD workflow and Git best practices, it's time to fix a critical architectural issue in the project. This is your final code change before testing the complete pipeline.

### Understanding the Routing Problem

The current project structure has a fundamental flaw:
```
app/books/
├── [id]/
│   └── page.tsx          # Empty file - should contain book template
└── the-monkey-blanket/
└── page.tsx          # Complete book layout - specific to one book
```

**Why This Is Architecturally Wrong:**
1. **Static Routes for Dynamic Content**: `the-monkey-blanket` creates a static route for ONE specific book
2. **Code Duplication**: Each book would need its own folder and duplicate layout code
3. **Poor Scalability**: Adding 1000 books means 1000 folders
4. **Violates DRY Principle**: Don't Repeat Yourself

### The Professional Solution: Dynamic Routes

```
app/books/
└── [id]/
└── page.tsx          # Universal book template for ALL books
```

**Why This Architecture Is Correct:**
1. **Dynamic Routing**: `[id]` accepts any book identifier (the-monkey-blanket, silver-feet, etc.)
2. **Single Template**: One component handles all books
3. **Scalable**: Works for unlimited books without code changes
4. **SEO Friendly**: Clean URLs like `/books/the-monkey-blanket`

### Next.js Dynamic Routing Patterns

| Route Pattern | Matches | Example URLs |
|--------------|---------|--------------|
| `[id]` | Single segment | `/books/monkey-blanket` |
| `[...slug]` | Multiple segments | `/books/category/fiction/bestseller` |
| `[[...slug]]` | Optional segments | `/books` or `/books/category` |

### Implementation Process

#### Step 1: Create Feature Branch for Final Fix

```bash
# Create new branch for this architectural improvement
git checkout -b fix/dynamic-routing

# Verify you're on the new branch
git branch --show-current
```

#### Step 2: Analyze Current Structure

```bash
# See current structure
ls -la app/books/

# View the empty dynamic route file
cat app/books/[id]/page.tsx

# View the complete monkey blanket file  
cat app/books/the-monkey-blanket/page.tsx
```

#### Step 3: Move the Complete Template

The `the-monkey-blanket/page.tsx` contains the complete, working book detail layout. This should be our universal template.

```bash
# Copy the complete template to the dynamic route
cp app/books/the-monkey-blanket/page.tsx app/books/[id]/page.tsx

# Remove the old static route folder
rm -rf app/books/the-monkey-blanket/
```

#### Step 4: Update the Dynamic Route Component

Open `app/books/[id]/page.tsx` and transform it from static to dynamic:

```typescript
// BEFORE: Static component for one book
export default function BookPage() {
  const book = {
    id: "the-monkey-blanket",
    title: "The Monkey Blanket",
    // ... hardcoded data
  }
  
  return (
    // ... JSX using hardcoded book data
  )
}
```

```typescript
// AFTER: Dynamic component for any book
interface BookPageProps {
  params: {
    id: string
  }
}

export default function BookPage({ params }: BookPageProps) {
  // Extract the book ID from URL
  const bookId = params.id
  
  // In a real app, you'd fetch data based on bookId
  // For now, we'll simulate dynamic behavior
  const book = getBookData(bookId)
  
  return (
    // ... JSX using dynamic book data
  )
}

// Helper function to simulate book data fetching
function getBookData(id: string) {
  // This would normally query a database
  // For demo purposes, return monkey blanket data for any ID
  return {
    id: id,
    title: id === "the-monkey-blanket" ? "The Monkey Blanket" : "Book Title",
    author: "Nana Ndlovana-Mthimkhulu",
    // ... rest of book data
  }
}
```

#### Step 5: Test the Routing Fix

```bash
# Start development server
npm run dev

# Test these URLs in your browser:
# http://localhost:3000/books/the-monkey-blanket  ✅ Should work
# http://localhost:3000/books/any-book-id        ✅ Should work (shows template)
# http://localhost:3000/books/silver-feet        ✅ Should work (shows template)
```

#### Step 6: Understanding URL Mapping

```mermaid
graph TD
    A[User visits /books/the-monkey-blanket] --> B[Next.js Router]
    B --> C[Matches [id] pattern]
    C --> D[params.id = 'the-monkey-blanket']
    D --> E[BookPage component receives params]
    E --> F[Component renders with book data]
```

### Why This Matters Professionally

#### Production Benefits:
1. **Database Integration**: `params.id` would query a database for book details
2. **SEO Optimization**: Each book gets its own URL for search engines
3. **Code Maintainability**: One component handles all book pages
4. **Performance**: Next.js can optimize dynamic routes with static generation

#### Real-World Implementation Pattern:
```typescript
// In a production app with database
export default async function BookPage({ params }: BookPageProps) {
  // Fetch book data from database
  const book = await getBookFromDatabase(params.id)
  
  if (!book) {
    // Handle book not found
    notFound()
  }
  
  return <BookDetail book={book} />
}
```

### Commit and Push Final Changes

```bash
# Check what you've changed
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "fix: implement dynamic routing for book pages

- Move static monkey-blanket route to dynamic [id] route
- Update BookPage component to accept params
- Add helper function for book data retrieval
- Remove deprecated static route folder
- Improve scalability for multiple books

This architectural fix transforms the application from a static,
non-scalable routing structure to a professional, dynamic routing
system that can handle unlimited books with a single template."

# Push the feature branch
git push origin fix/dynamic-routing
```

### Create Final Pull Request

```bash
# Using GitHub CLI
gh pr create \
  --title "Fix: Implement Dynamic Routing Architecture" \
  --body "
## 🏗️ Architectural Improvement

This PR fixes a fundamental routing issue and transforms the application into a professional, scalable architecture.

## Changes Made
- ✅ Moved static book route to dynamic [id] pattern
- ✅ Updated BookPage component to accept URL parameters  
- ✅ Improved scalability for multiple books
- ✅ Follows Next.js App Router best practices
- ✅ Prepares codebase for database integration

## Testing Completed
- ✅ Verified /books/the-monkey-blanket still works
- ✅ Tested arbitrary book IDs work with template
- ✅ No breaking changes to existing functionality
- ✅ All CI pipeline checks pass

## Why This Change Is Critical
Dynamic routing is essential for scalable web applications. This change:
- Eliminates code duplication across book pages
- Improves maintainability and developer experience
- Follows React/Next.js industry conventions
- Enables future database integration without refactoring
- Demonstrates understanding of production-ready architecture

Ready for final CI/CD pipeline testing! 🚀
" \
  --base main \
  --head fix/dynamic-routing
```

### Final CI Pipeline Verification

After creating the PR, your complete CI pipeline will run with the corrected architecture:
- ✅ TypeScript compilation with new dynamic component
- ✅ ESLint code quality checks
- ✅ Unit tests pass with routing changes
- ✅ E2E tests verify book page functionality
- ✅ Docker build succeeds with new structure
- ✅ Security scans pass
- ✅ Deployment pipeline ready

Once this PR is approved and merged, your application will have a **professional, production-ready architecture** that demonstrates mastery of modern web development principles!

---

## 🛠️ Environment Setup

### System Requirements

| Component | Minimum Version | Recommended |
|-----------|----------------|-------------|
| Node.js | 18.x | 20.x LTS |
| npm | 9.x | 10.x |
| Git | 2.40+ | Latest |
| Docker | 24.x | Latest |
| Python | 3.8+ | 3.11+ |

### 🖥️ Operating System Setup

#### Windows Users - Ubuntu Setup (Recommended)

> **Why Ubuntu?** Most production servers run Linux. Learning on Ubuntu prepares you for real-world development.

**Option 1: WSL2 (Windows Subsystem for Linux)**
```bash
# Run in PowerShell as Administrator
wsl --install Ubuntu-22.04
wsl --set-default-version 2
```

**Option 2: Dual Boot**
- Download [Ubuntu 22.04 LTS](https://ubuntu.com/download/desktop)
- Create bootable USB with [Rufus](https://rufus.ie/)
- Follow Ubuntu installation guide

**Option 3: Virtual Machine**
- Download [VirtualBox](https://www.virtualbox.org/)
- Create Ubuntu 22.04 VM with 4GB+ RAM

#### macOS Users
```bash
# Install Homebrew first
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Linux Users
You're all set! Update your system:
```bash
sudo apt update && sudo apt upgrade -y
```

---
> **💡 Pro Tip:** Keep this guide handy as a reference for future projects. The skills you've learned here form the foundation of modern software development workflows used in professional environments worldwide.

**Routing Achievement**: You've transformed a poorly structured static routing system into a professional, scalable dynamic routing architecture. This is a fundamental skill that separates junior developers from those who understand production-ready applications.

**Professional Skills Gained**: You now have hands-on experience with the complete modern development stack used by professional software teams worldwide, including AI-assisted development, project management integration, and enterprise-grade documentation practices.

**Next Steps:** Project 2 will focus on adding Continuous Deployment (CD) and implementing database integration with proper DevOps practices. But first, update your CV and Resume (these are two different documents).

---

# Full-Stack Development Project 2: Continuous Deployment with GitHub Pages & Terraform

## 📚 Project Overview

Welcome to Project 2! Building on your CI expertise from Project 1, you'll now implement **Continuous Deployment (CD)** using multiple deployment strategies. This project focuses on Infrastructure as Code (IaC) with Terraform and multi-environment deployment pipelines.

### 🎯 Learning Objectives

By the end of this project, you will:
- Implement Continuous Deployment (CD) pipelines
- Master Terraform for Infrastructure as Code
- Deploy to multiple environments (GitHub Pages + Google Cloud Run)
- Understand environment promotion strategies
- Implement monitoring and rollback mechanisms
- Practice GitOps workflows
- Handle secrets management across environments

### 🛠️ Prerequisites

**⚠️ You MUST complete Project 1 first!**

- ✅ Working Next.js bookstore with CI pipeline
- ✅ Docker containerization setup
- ✅ GitHub repository with branch protection
- ✅ Professional Git workflow experience
- ✅ Basic cloud deployment understanding

---

## 🚀 Additional Tools & Account Setup

### New Service Accounts Required

| Service | Purpose | Link | Why Needed |
|---------|---------|------|------------|
| **Google Cloud Platform** | Infrastructure hosting | [cloud.google.com](https://cloud.google.com) | Terraform target, Cloud Run deployment |
| **Terraform Cloud** | State management | [terraform.io](https://terraform.io) | Remote state, team collaboration |
| **Vercel** | Preview deployments | [vercel.com](https://vercel.com) | Additional deployment target |

### 🔧 Additional Tools Installation

#### Terraform Installation

| OS | Installation Command |
|----|--------------------|
| **Ubuntu/WSL** | `curl -fsSL https://apt.releases.hashicorp.com/gpg \| sudo apt-key add -`<br>`sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"`<br>`sudo apt-get update && sudo apt-get install terraform` |
| **macOS** | `brew tap hashicorp/tap && brew install hashicorp/tap/terraform` |
| **Windows** | Download from [terraform.io/downloads](https://terraform.io/downloads) |

**Verify Installation:**
```bash
terraform --version  # Should show v1.6+
```

#### Google Cloud CLI

| OS | Installation Command |
|----|--------------------|
| **Ubuntu/WSL** | `curl https://sdk.cloud.google.com \| bash`<br>`exec -l $SHELL` |
| **macOS** | `brew install --cask google-cloud-sdk` |
| **Windows** | Download from [cloud.google.com/sdk](https://cloud.google.com/sdk) |

**Setup & Authentication:**
```bash
gcloud init
gcloud auth login
gcloud auth application-default login
```

---

## 📋 Project Architecture Overview

### Deployment Strategy

```mermaid
graph TB
    A[Developer Push] --> B[GitHub Actions CI]
    B --> C{Branch?}
    C -->|feature| D[Preview Deploy to Vercel]
    C -->|main| E[Production Pipeline]
    E --> F[Build & Test]
    F --> G[GitHub Pages Deploy]
    G --> H[Terraform Plan]
    H --> I[Terraform Apply]
    I --> J[Cloud Run Deploy]
    J --> K[Health Checks]
    K --> L[Notify Success]
```

### Environment Strategy

| Environment | Branch | Deployment Target | Purpose |
|-------------|--------|------------------|---------|
| **Preview** | `feature/*` | Vercel | Feature testing, PR reviews |
| **Staging** | `develop` | GitHub Pages | Static site testing |
| **Production** | `main` | Google Cloud Run | Live application |

---

## 🔧 Part A: GitHub Pages Deployment

### Understanding Static Site Generation

Next.js supports static export for GitHub Pages deployment. This creates a fully static version of your site.

#### Step 1: Configure Next.js for Static Export

Create `next.config.js` with static export configuration:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com'
    ]
  },
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? '/bookstore-ci-cd' 
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/bookstore-ci-cd' 
    : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' 
      ? '/bookstore-ci-cd' 
      : '',
  }
}

module.exports = nextConfig
```

#### Step 2: Update Package.json Scripts

Add export scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy:static": "npm run export && touch out/.nojekyll",
    "lint": "next lint",
    "test": "jest",
    "test:ci": "jest --ci --coverage --watchAll=false"
  }
}
```

#### Step 3: Handle Dynamic Routes for Static Export

Update `app/books/[id]/page.tsx` to support static generation:

```typescript
import { notFound } from 'next/navigation'

// Define all possible book IDs for static generation
export async function generateStaticParams() {
  // In a real app, this would fetch from an API
  return [
    { id: 'the-monkey-blanket' },
    { id: 'silver-feet-and-her-wonder' },
    { id: 'fearless' },
    { id: 'great-big-beautiful-life' },
    { id: 'the-tenant' },
    { id: 'remarkably-bright-creatures' }
  ]
}

interface BookPageProps {
  params: {
    id: string
  }
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookData(params.id)
  
  if (!book) {
    notFound()
  }
  
  return (
    // ... existing JSX
  )
}

function getBookData(id: string) {
  const books = {
    'the-monkey-blanket': {
      id: 'the-monkey-blanket',
      title: 'The Monkey Blanket',
      author: 'Nana Ndlovana-Mthimkhulu',
      // ... full book data from Project 1
    },
    // Add other books...
  }
  
  return books[id as keyof typeof books] || null
}
```

#### Step 4: Create GitHub Pages Deployment Workflow

Create `.github/workflows/deploy-pages.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Setup Pages
      uses: actions/configure-pages@v4
      with:
        static_site_generator: next
        
    - name: Restore cache
      uses: actions/cache@v3
      with:
        path: |
          .next/cache
        key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx') }}
        restore-keys: |
          ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
          
    - name: Install dependencies
      run: npm ci --force --legacy-peer-deps
      
    - name: Build with Next.js
      run: npm run build
      env:
        NODE_ENV: production
        NEXT_PUBLIC_APP_NAME: ${{ secrets.APP_NAME }}
        
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    
    steps:
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

#### Step 5: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save configuration

**Test the deployment:**
```bash
# Push changes to trigger deployment
git add .
git commit -m "feat: add GitHub Pages deployment with static export"
git push origin main

# Your site will be available at:
# https://YOUR_USERNAME.github.io/bookstore-ci-cd
```

---

## 🏗️ Part B: Infrastructure as Code with Terraform

### Understanding Terraform Concepts

| Concept | Description | Analogy |
|---------|-------------|---------|
| **Provider** | Cloud service interface | Programming language |
| **Resource** | Infrastructure component | Object/class instance |
| **State** | Current infrastructure snapshot | Database of what exists |
| **Plan** | Changes to be made | Preview of modifications |
| **Apply** | Execute the changes | Deploy the modifications |

### Step 1: Project Structure Setup

Create Terraform directory structure:

```bash
mkdir terraform
cd terraform
mkdir environments modules
mkdir environments/staging environments/production
mkdir modules/cloud-run modules/networking
```

**Final structure:**
```
terraform/
├── main.tf                    # Root configuration
├── variables.tf               # Input variables
├── outputs.tf                 # Output values
├── terraform.tf               # Provider requirements
├── environments/
│   ├── staging/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── terraform.tfvars
│   └── production/
│       ├── main.tf
│       ├── variables.tf
│       └── terraform.tfvars
└── modules/
    ├── cloud-run/
    │   ├── main.tf
    │   ├── variables.tf
    │   └── outputs.tf
    └── networking/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

### Step 2: Root Terraform Configuration

Create `terraform/terraform.tf`:

```hcl
terraform {
  required_version = ">= 1.6"
  
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.4"
    }
  }
  
  backend "gcs" {
    bucket = "bookstore-terraform-state"
    prefix = "terraform/state"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}
```

Create `terraform/variables.tf`:

```hcl
variable "project_id" {
  description = "Google Cloud Project ID"
  type        = string
}

variable "region" {
  description = "Google Cloud Region"
  type        = string
  default     = "us-central1"
}

variable "environment" {
  description = "Environment name (staging/production)"
  type        = string
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "bookstore"
}

variable "container_image" {
  description = "Container image URL"
  type        = string
}

variable "domain_name" {
  description = "Custom domain name (optional)"
  type        = string
  default     = ""
}
```

Create `terraform/outputs.tf`:

```hcl
output "cloud_run_url" {
  description = "URL of the deployed Cloud Run service"
  value       = module.cloud_run.service_url
}

output "project_id" {
  description = "Google Cloud Project ID"
  value       = var.project_id
}

output "service_name" {
  description = "Name of the Cloud Run service"
  value       = module.cloud_run.service_name
}
```

### Step 3: Cloud Run Module

Create `terraform/modules/cloud-run/main.tf`:

```hcl
resource "google_cloud_run_v2_service" "bookstore" {
  name     = "${var.app_name}-${var.environment}"
  location = var.region
  
  template {
    containers {
      image = var.container_image
      
      ports {
        container_port = 3000
      }
      
      env {
        name  = "NODE_ENV"
        value = var.environment == "production" ? "production" : "development"
      }
      
      env {
        name  = "NEXT_PUBLIC_APP_NAME"
        value = var.app_name
      }
      
      resources {
        limits = {
          cpu    = "1000m"
          memory = "512Mi"
        }
      }
    }
    
    scaling {
      min_instance_count = var.environment == "production" ? 1 : 0
      max_instance_count = var.environment == "production" ? 10 : 3
    }
    
    timeout = "300s"
  }
  
  traffic {
    percent = 100
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
  }
  
  lifecycle {
    ignore_changes = [
      template[0].containers[0].image
    ]
  }
}

resource "google_cloud_run_service_iam_member" "public" {
  service  = google_cloud_run_v2_service.bookstore.name
  location = google_cloud_run_v2_service.bookstore.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Custom domain mapping (optional)
resource "google_cloud_run_domain_mapping" "bookstore" {
  count    = var.domain_name != "" ? 1 : 0
  location = var.region
  name     = var.domain_name
  
  metadata {
    namespace = var.project_id
  }
  
  spec {
    route_name = google_cloud_run_v2_service.bookstore.name
  }
}
```

Create `terraform/modules/cloud-run/variables.tf`:

```hcl
variable "project_id" {
  description = "Google Cloud Project ID"
  type        = string
}

variable "region" {
  description = "Google Cloud Region"
  type        = string
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "app_name" {
  description = "Application name"
  type        = string
}

variable "container_image" {
  description = "Container image URL"
  type        = string
}

variable "domain_name" {
  description = "Custom domain name"
  type        = string
  default     = ""
}
```

Create `terraform/modules/cloud-run/outputs.tf`:

```hcl
output "service_url" {
  description = "URL of the Cloud Run service"
  value       = google_cloud_run_v2_service.bookstore.uri
}

output "service_name" {
  description = "Name of the Cloud Run service"
  value       = google_cloud_run_v2_service.bookstore.name
}

output "service_id" {
  description = "ID of the Cloud Run service"
  value       = google_cloud_run_v2_service.bookstore.id
}
```

### Step 4: Environment-Specific Configurations

Create `terraform/environments/production/main.tf`:

```hcl
terraform {
  backend "gcs" {
    bucket = "bookstore-terraform-state"
    prefix = "environments/production"
  }
}

module "cloud_run" {
  source = "../../modules/cloud-run"
  
  project_id      = var.project_id
  region          = var.region
  environment     = "production"
  app_name        = var.app_name
  container_image = var.container_image
  domain_name     = var.domain_name
}
```

Create `terraform/environments/production/variables.tf`:

```hcl
variable "project_id" {
  description = "Google Cloud Project ID"
  type        = string
}

variable "region" {
  description = "Google Cloud Region"
  type        = string
  default     = "us-central1"
}

variable "app_name" {
  description = "Application name"
  type        = string
  default     = "bookstore"
}

variable "container_image" {
  description = "Container image URL"
  type        = string
}

variable "domain_name" {
  description = "Custom domain name"
  type        = string
  default     = ""
}
```

Create `terraform/environments/production/terraform.tfvars`:

```hcl
project_id = "your-gcp-project-id"
region     = "us-central1"
app_name   = "bookstore"
domain_name = "bookstore.yourdomain.com"  # Optional
```

### Step 5: Google Cloud Setup

#### Create GCP Project and Enable APIs

```bash
# Create new project
gcloud projects create your-bookstore-project --name="BookStore Project"

# Set as default project
gcloud config set project your-bookstore-project

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
gcloud services enable storage.googleapis.com
```

#### Create Service Account for Terraform

```bash
# Create service account
gcloud iam service-accounts create terraform-sa \
    --description="Terraform service account" \
    --display-name="Terraform SA"

# Add required roles
gcloud projects add-iam-policy-binding your-bookstore-project \
    --member="serviceAccount:terraform-sa@your-bookstore-project.iam.gserviceaccount.com" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding your-bookstore-project \
    --member="serviceAccount:terraform-sa@your-bookstore-project.iam.gserviceaccount.com" \
    --role="roles/storage.admin"

gcloud projects add-iam-policy-binding your-bookstore-project \
    --member="serviceAccount:terraform-sa@your-bookstore-project.iam.gserviceaccount.com" \
    --role="roles/iam.serviceAccountUser"

# Create and download key
gcloud iam service-accounts keys create terraform-key.json \
    --iam-account=terraform-sa@your-bookstore-project.iam.gserviceaccount.com
```

#### Create Terraform State Bucket

```bash
# Create bucket for Terraform state
gsutil mb gs://bookstore-terraform-state

# Enable versioning
gsutil versioning set on gs://bookstore-terraform-state
```

---

## 🚀 Part C: Complete CD Pipeline Implementation

### Step 1: Update CI/CD Workflow

Create `.github/workflows/cd-pipeline.yml`:

```yaml
name: Complete CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}
  GCP_PROJECT_ID: ${{ secrets.GCP_PROJECT_ID }}
  GCP_SA_KEY: ${{ secrets.GCP_SA_KEY }}

jobs:
  ci:
    name: Continuous Integration
    runs-on: ubuntu-latest
    outputs:
      image-tag: ${{ steps.meta.outputs.tags }}
      image-digest: ${{ steps.build.outputs.digest }}
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci --force --legacy-peer-deps
      
    - name: Run type checking
      run: npm run type-check
      
    - name: Run linting
      run: npm run lint
      
    - name: Run tests
      run: npm run test:ci
      
    - name: Build application
      run: npm run build
      env:
        NEXT_PUBLIC_APP_NAME: ${{ secrets.APP_NAME }}
        
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v3
      
    - name: Login to Container Registry
      uses: docker/login-action@v3
      with:
        registry: ${{ env.REGISTRY }}
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
        
    - name: Extract metadata
      id: meta
      uses: docker/metadata-action@v5
      with:
        images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}
        tags: |
          type=ref,event=branch
          type=ref,event=pr
          type=sha,prefix={{branch}}-
          
    - name: Build and push Docker image
      id: build
      uses: docker/build-push-action@v5
      with:
        context: .
        push: true
        tags: ${{ steps.meta.outputs.tags }}
        labels: ${{ steps.meta.outputs.labels }}
        cache-from: type=gha
        cache-to: type=gha,mode=max

  deploy-preview:
    name: Deploy Preview (Vercel)
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    needs: ci
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        github-comment: true

  deploy-staging:
    name: Deploy to GitHub Pages (Staging)
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    needs: ci
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
        
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Install dependencies
      run: npm ci --force --legacy-peer-deps
      
    - name: Build for GitHub Pages
      run: npm run export
      env:
        NODE_ENV: production
        NEXT_PUBLIC_APP_NAME: ${{ secrets.APP_NAME }}-Staging
        
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: ./out
        
    - name: Deploy to GitHub Pages
      uses: actions/deploy-pages@v4

  terraform-plan:
    name: Terraform Plan
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    needs: ci
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v3
      with:
        terraform_version: 1.6.0
        
    - name: Authenticate to Google Cloud
      uses: google-github-actions/auth@v2
      with:
        credentials_json: ${{ secrets.GCP_SA_KEY }}
        
    - name: Terraform Init
      run: terraform init
      working-directory: terraform/environments/production
      
    - name: Terraform Plan
      run: |
        terraform plan \
          -var="project_id=${{ env.GCP_PROJECT_ID }}" \
          -var="container_image=${{ needs.ci.outputs.image-tag }}" \
          -out=tfplan
      working-directory: terraform/environments/production
      
    - name: Upload Terraform Plan
      uses: actions/upload-artifact@v4
      with:
        name: terraform-plan
        path: terraform/environments/production/tfplan

  deploy-production:
    name: Deploy to Production (Cloud Run)
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    needs: [ci, terraform-plan]
    environment: production
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v3
      
    - name: Authenticate to Google Cloud
      uses: google-github-actions/auth@v2
      with:
        credentials_json: ${{ secrets.GCP_SA_KEY }}
        
    - name: Download Terraform Plan
      uses: actions/download-artifact@v4
      with:
        name: terraform-plan
        path: terraform/environments/production/
        
    - name: Terraform Init
      run: terraform init
      working-directory: terraform/environments/production
      
    - name: Terraform Apply
      run: terraform apply -auto-approve tfplan
      working-directory: terraform/environments/production
      
    - name: Get Service URL
      id: service
      run: |
        URL=$(terraform output -raw cloud_run_url)
        echo "url=$URL" >> $GITHUB_OUTPUT
      working-directory: terraform/environments/production
      
    - name: Health Check
      run: |
        for i in {1..10}; do
          if curl -f ${{ steps.service.outputs.url }}; then
            echo "✅ Health check passed"
            exit 0
          fi
          echo "⏳ Waiting for service to be ready..."
          sleep 30
        done
        echo "❌ Health check failed"
        exit 1

  notify:
    name: Notify Deployment Status
    runs-on: ubuntu-latest
    needs: [deploy-production]
    if: always()
    
    steps:
    - name: Slack Notification
      uses: 8398a7/action-slack@v3
      with:
        status: ${{ job.status }}
        channel: '#deployments'
        webhook_url: ${{ secrets.SLACK_WEBHOOK }}
        fields: repo,message,commit,author,action,eventName,ref,workflow
```

### Step 2: Required GitHub Secrets

Add these secrets to your repository:

```bash
# Using GitHub CLI
gh secret set GCP_PROJECT_ID --body "your-gcp-project-id"
gh secret set GCP_SA_KEY --body "$(cat terraform-key.json)"
gh secret set VERCEL_TOKEN --body "your-vercel-token"
gh secret set VERCEL_ORG_ID --body "your-vercel-org-id"
gh secret set VERCEL_PROJECT_ID --body "your-vercel-project-id"

# Or manually through GitHub web interface:
# Repository Settings > Secrets and variables > Actions
```

---

## 📊 Monitoring & Observability

### Step 1: Add Health Check Endpoint

Create `app/api/health/route.ts`:

```typescript
import { NextResponse } from 'next/server'

export async function GET() {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || 'unknown'
  }
  
  return NextResponse.json(healthCheck)
}
```

### Step 2: Cloud Run Monitoring

Add monitoring configuration to Terraform:

```hcl
# In terraform/modules/cloud-run/main.tf
resource "google_monitoring_uptime_check_config" "bookstore" {
  count        = var.environment == "production" ? 1 : 0
  display_name = "${var.app_name}-${var.environment}-uptime"
  timeout      = "10s"
  period       = "300s"
  
  http_check {
    path           = "/api/health"
    port           = "443"
    use_ssl        = true
    validate_ssl   = true
    request_method = "GET"
  }
  
  monitored_resource {
    type = "uptime_url"
    labels = {
      host       = google_cloud_run_v2_service.bookstore.uri
      project_id = var.project_id
    }
  }
  
  content_matchers {
    content = "healthy"
    matcher = "CONTAINS_STRING"
  }
}
```

---

## 🔄 Rollback Strategy

### Automatic Rollback on Health Check Failure

Add rollback job to workflow:

```yaml
  rollback:
    name: Rollback on Failure
    if: failure() && needs.deploy-production.result == 'failure'
    runs-on: ubuntu-latest
    needs: [deploy-production]
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Terraform
      uses: hashicorp/setup-terraform@v3
      
    - name: Authenticate to Google Cloud
      uses: google-github-actions/auth@v2
      with:
        credentials_json: ${{ secrets.GCP_SA_KEY }}
        
    - name: Get Previous Stable Image
      id: previous
      run: |
        # Get the second-to-last successful deployment
        IMAGE=$(gcloud run revisions list \
          --service=bookstore-production \
          --region=us-central1 \
          --limit=2 \
          --format="value(spec.template.spec.template.spec.containers[0].image)" \
          | tail -n 1)
        echo "image=$IMAGE" >> $GITHUB_OUTPUT
        
    - name: Rollback to Previous Version
      run: |
        terraform init
        terraform apply -auto-approve \
          -var="project_id=${{ env.GCP_PROJECT_ID }}" \
          -var="container_image=${{ steps.previous.outputs.image }}"
      working-directory: terraform/environments/production
```

---

## 📋 Project 2 Execution Checklist

### Phase 1: GitHub Pages Setup ✅

- [ ] Configure Next.js for static export
- [ ] Update package.json with export scripts
- [ ] Handle dynamic routes for static generation
- [ ] Create GitHub Pages deployment workflow
- [ ] Enable GitHub Pages in repository settings
- [ ] Test static site deployment

### Phase 2: Terraform Infrastructure ✅

- [ ] Install Terraform and Google Cloud CLI
- [ ] Create GCP project and enable required APIs
- [ ] Set up service account with proper permissions
- [ ] Create Terraform state storage bucket
- [ ] Build modular Terraform configuration
- [ ] Create environment-specific configurations
- [ ] Test Terraform plan and apply locally

### Phase 3: Complete CD Pipeline ✅

- [ ] Create comprehensive CI/CD workflow
- [ ] Set up preview deployments with Vercel
- [ ] Configure staging deployment to GitHub Pages
- [ ] Implement production deployment with Terraform
- [ ] Add health checks and monitoring
- [ ] Set up rollback mechanisms
- [ ] Configure deployment notifications

### Phase 4: Advanced Features ✅

- [ ] Implement infrastructure monitoring
- [ ] Add automated rollback on failure
- [ ] Set up multi-environment promotion
- [ ] Configure custom domain (optional)
- [ ] Test disaster recovery procedures
- [ ] Document deployment processes

### Phase 5: Security & Compliance ✅

- [ ] Implement least-privilege IAM policies
- [ ] Set up secret rotation procedures
- [ ] Configure infrastructure security scanning
- [ ] Add compliance monitoring
- [ ] Document security procedures
- [ ] Test incident response plans

---

## 🎉 Project 2 Completion

Congratulations! You've successfully:

1. ✅ **Implemented Continuous Deployment** across multiple environments
2. ✅ **Mastered Infrastructure as Code** with Terraform
3. ✅ **Built multi-target deployment pipeline** (GitHub Pages + Cloud Run)
4. ✅ **Configured environment promotion** strategies
5. ✅ **Added comprehensive monitoring** and health checks
6. ✅ **Implemented automated rollback** mechanisms
7. ✅ **Secured cloud infrastructure** with proper IAM
8. ✅ **Practiced GitOps workflows** with infrastructure changes

### 🚀 **Professional Skills Gained:**

- **DevOps Engineering:** Complete CI/CD pipeline design and implementation
- **Infrastructure as Code:** Terraform modules, state management, environment promotion
- **Cloud Architecture:** Multi-region deployments, auto-scaling, monitoring
- **Security Engineering:** IAM policies, secret management, compliance monitoring
- **Site Reliability:** Health checks, rollback strategies, incident response

### 📈 **Next Steps:**

Project 3 will focus on **Database Integration**, **API Development**, and **Advanced Security** with authentication, data persistence, and enterprise-grade monitoring.

---

> **💡 Pro Tip:** The infrastructure and deployment patterns you've learned are used by Fortune 500 companies. You now have hands-on experience with enterprise-grade DevOps practices that are highly valued in the industry!
> \
> 
> ## 📄 **CV (Curriculum Vitae) Additions**

### **Technical Skills Section - ADD:**

**Infrastructure & DevOps:**
- Terraform (Infrastructure as Code, module development, state management)
- Google Cloud Platform (Cloud Run, IAM, Cloud Storage, Monitoring)
- Multi-environment deployment (staging, production, preview environments)
- GitOps workflows (infrastructure versioning, automated deployments)

**Advanced CI/CD:**
- Environment promotion strategies (dev → staging → production)
- Blue-green deployments and rollback mechanisms
- Health check automation and service monitoring
- Pipeline orchestration across multiple deployment targets

**Cloud Architecture:**
- Serverless container orchestration (Google Cloud Run)
- Auto-scaling configuration and resource optimization
- Custom domain management and SSL/TLS certificates
- Uptime monitoring and alerting systems

**Security & Compliance:**
- Infrastructure security scanning and vulnerability assessment
- IAM policy management and least-privilege access
- Secret management and rotation procedures
- Compliance monitoring and audit trails

**Static Site Generation:**
- Next.js static export optimization
- CDN deployment strategies (GitHub Pages, Vercel)
- Performance optimization for static assets
- SEO optimization for server-side generated content

### **Projects Section - ADD:**

**Enterprise DevOps Platform** | *Infrastructure Automation Project* | *2025*
- Architected and implemented complete Infrastructure as Code solution using Terraform modules for multi-environment deployment
- Designed advanced CI/CD pipeline with automated environment promotion from development through staging to production
- Deployed scalable application infrastructure to Google Cloud Platform using serverless containers with auto-scaling capabilities
- Implemented comprehensive monitoring, health checks, and automated rollback mechanisms ensuring 99.9% uptime SLA
- Established GitOps workflow enabling infrastructure changes through version-controlled pull request process
- Integrated multi-target deployment strategy: GitHub Pages (staging), Google Cloud Run (production), Vercel (previews)
- Configured enterprise-grade security with IAM policies, secret management, and infrastructure vulnerability scanning
- **Technologies:** Terraform, Google Cloud Platform, GitHub Actions, Cloud Run, Infrastructure as Code, GitOps

**Multi-Environment Deployment Architecture** | *Cloud Infrastructure Project* | *2025*
- Developed modular Terraform infrastructure supporting independent staging and production environments
- Implemented automated deployment pipeline with preview environments for every pull request
- Configured advanced monitoring and observability including uptime checks, performance metrics, and alerting
- Established disaster recovery procedures with automated rollback capabilities and infrastructure backup strategies
- Optimized deployment performance reducing infrastructure provisioning time from 15 minutes to 3 minutes through Terraform optimization
- **Technologies:** Terraform Modules, GCP Cloud Run, GitHub Pages, Vercel, Infrastructure Monitoring

### **Professional Development Section - ADD:**

**Infrastructure & Cloud Certifications:**
- Google Cloud Platform Fundamentals (2025)
- Terraform Associate Certification (In Progress)
- HashiCorp Infrastructure Automation Specialist

**Advanced Training:**
- Infrastructure as Code Best Practices Workshop
- Site Reliability Engineering (SRE) Fundamentals
- Cloud Security and Compliance Training

---

## 📝 **Resume Additions**

### **Technical Skills - ADD:**
**Infrastructure:** Terraform, Infrastructure as Code (IaC), Google Cloud Platform, Multi-Environment Deployment  
**DevOps:** Advanced CI/CD, GitOps, Environment Promotion, Automated Rollbacks, Infrastructure Monitoring  
**Cloud Services:** Google Cloud Run, Container Orchestration, Auto-Scaling, Serverless Architecture  
**Security:** IAM Management, Infrastructure Security, Compliance Monitoring, Secret Management

### **Professional Experience/Projects - ADD:**

**DevOps Engineer** | *Enterprise Infrastructure Automation* | *2025*
• **Reduced infrastructure deployment time by 75%** implementing Infrastructure as Code with Terraform modules and automated environment provisioning
• **Achieved 99.9% application uptime** through comprehensive monitoring, health checks, and automated rollback mechanisms across production infrastructure  
• **Eliminated manual deployment errors** by establishing GitOps workflow with infrastructure version control and pull request-based change management
• **Scaled application to handle 10x traffic** using Google Cloud Run serverless containers with intelligent auto-scaling and resource optimization
• **Improved deployment safety by 90%** implementing multi-environment promotion strategy with automated testing at each stage
• **Accelerated development velocity by 60%** through preview environment automation providing isolated testing for every feature branch

**Cloud Architecture Specialist** | *Multi-Target Deployment Platform* | *2025*
• **Designed enterprise-grade infrastructure** supporting 3 deployment targets (GitHub Pages, Cloud Run, Vercel) with unified CI/CD pipeline
• **Implemented zero-downtime deployments** using blue-green deployment strategy with automated health validation and instant rollback capability
• **Reduced security vulnerabilities by 85%** through automated infrastructure scanning, IAM policy enforcement, and compliance monitoring
• **Optimized cloud costs by 40%** implementing intelligent resource allocation and auto-scaling policies based on traffic patterns

### **Key Achievements - ADD:**
• **Built Infrastructure as Code platform** managing 100% of cloud resources through version-controlled Terraform modules
• **Established enterprise DevOps practices** enabling safe, automated deployments across multiple environments  
• **Implemented comprehensive observability** with automated monitoring, alerting, and incident response procedures
• **Achieved SOC 2 compliance readiness** through infrastructure security automation and audit trail implementation

### **Technical Leadership - ADD:**
• **Infrastructure Architecture:** Designed scalable, secure cloud infrastructure patterns using Infrastructure as Code principles
• **DevOps Strategy:** Established deployment best practices and environment promotion workflows for enterprise applications
• **Security Engineering:** Implemented infrastructure security scanning, IAM governance, and compliance automation
• **Performance Optimization:** Achieved sub-3-second deployment times through infrastructure automation and optimization

---

## 🎯 **Enhanced Resume Power Words from Project 2:**

**Advanced Action Verbs:** Architected, Orchestrated, Provisioned, Automated, Scaled, Optimized, Established, Implemented

**Infrastructure Quantifiables:**
- "Reduced deployment time by 75%"
- "Achieved 99.9% uptime SLA"
- "Eliminated 100% of manual deployment errors"
- "Scaled to handle 10x traffic volume"
- "Reduced infrastructure costs by 40%"
- "Improved deployment safety by 90%"

**Enterprise Keywords:** Infrastructure as Code, GitOps, Multi-Environment, Auto-Scaling, Serverless, Compliance, Observability, Disaster Recovery, Blue-Green Deployment

## 🚀 **Career Positioning After Project 2:**

### **Junior → Mid-Level Transition**
These additions position the student for **mid-level DevOps Engineer** or **Cloud Engineer** roles, demonstrating:

**Enterprise Capabilities:**
- Infrastructure automation at scale
- Multi-environment deployment strategies
- Advanced security and compliance
- Production incident response

**Leadership Indicators:**
- Architecture design decisions
- Infrastructure strategy development
- Security policy implementation
- Performance optimization initiatives

**Market Value:**
- **Salary Range:** $75,000 - $95,000 (junior to mid-level DevOps)
- **Target Roles:** DevOps Engineer, Cloud Engineer, Infrastructure Engineer, Site Reliability Engineer (SRE)
- **Industry Demand:** High (Infrastructure automation skills are in extreme demand)

The combination of Project 1 + Project 2 creates a **complete DevOps professional profile** ready for enterprise environments and advanced technical challenges.

## 📄 **CV (Curriculum Vitae) Additions**

### **Technical Skills Section - ADD:**

**Programming Languages & Frameworks:**
- TypeScript, JavaScript (ES6+), React, Next.js 14 (App Router)
- HTML5, CSS3, Tailwind CSS, Responsive Web Design

**DevOps & CI/CD:**
- GitHub Actions (workflow automation, multi-stage pipelines)
- Docker (containerization, Alpine Linux, multi-platform builds)
- Git (advanced workflows, branch protection, conventional commits)
- Pre-commit hooks (Husky, lint-staged, commitlint)

**Testing & Quality Assurance:**
- Jest (unit testing, coverage reporting, CI integration)
- Playwright (end-to-end testing, browser automation)
- ESLint, Prettier (code quality, automated formatting)
- TypeScript strict mode, static type checking

**Cloud Platforms & Deployment:**
- Azure Container Apps (serverless containers, auto-scaling)
- Google Cloud Run (managed container platform)
- GitHub Container Registry (image management)

**Security & Compliance:**
- Trivy vulnerability scanning
- SARIF security reporting
- Dependency security auditing
- OWASP security practices

**Development Tools:**
- VS Code, WebStorm, GitHub Codespaces
- GitKraken, GitHub Desktop, GitHub CLI
- Slack API integration, Trello project management
- AI-assisted development (GitHub Copilot, Claude)

### **Projects Section - ADD:**

**BookHaven E-commerce Platform** | *Personal Project* | *2025*
- Developed full-stack Next.js bookstore application with TypeScript and Tailwind CSS
- Implemented comprehensive CI/CD pipeline using GitHub Actions with automated testing, security scanning, and deployment
- Containerized application using Docker with Alpine Linux for optimized production deployment
- Established professional Git workflow with branch protection, code reviews, and conventional commit standards
- Achieved 90%+ test coverage using Jest unit tests and Playwright E2E testing
- Deployed to Azure Container Apps with auto-scaling and environment-based configuration management
- Integrated security scanning (Trivy) and code quality analysis into automated pipeline
- **Technologies:** Next.js 14, TypeScript, Docker, GitHub Actions, Azure Container Apps, Jest, Playwright

### **Certifications/Training Section - ADD:**

**Professional Development:**
- GitHub Student Developer Pack (2025)
- JetBrains Educational License (IDE Proficiency)
- Azure for Students (Cloud Computing Fundamentals)

---

## 📝 **Resume Additions**

### **Technical Skills - ADD:**
**Frontend:** Next.js, TypeScript, React, Tailwind CSS  
**Backend:** Node.js, RESTful APIs, Environment Management  
**DevOps:** Docker, GitHub Actions, CI/CD Pipelines, Cloud Deployment  
**Testing:** Jest, Playwright, Automated Testing, Code Coverage  
**Tools:** Git, VS Code, Azure Container Apps, Security Scanning

### **Professional Experience/Projects - ADD:**

**Full-Stack Developer** | *BookHaven E-commerce Platform* | *2025*
• Built scalable Next.js bookstore application serving dynamic content with TypeScript and modern React patterns
• **Reduced deployment time by 80%** through automated CI/CD pipeline with GitHub Actions and Docker containerization
• **Achieved 95% code coverage** implementing comprehensive testing strategy with Jest and Playwright frameworks  
• **Eliminated security vulnerabilities** by integrating automated scanning and code quality checks into development workflow
• **Streamlined team collaboration** using professional Git workflows, branch protection, and automated code reviews
• Deployed production application to Azure Container Apps with auto-scaling and zero-downtime deployments

### **Key Achievements - ADD:**
• Implemented enterprise-grade CI/CD pipeline reducing manual deployment effort by 90%
• Architected scalable routing system supporting unlimited dynamic content without code duplication
• Established automated testing infrastructure catching 100% of breaking changes before production
• Integrated AI-assisted development tools increasing development velocity by 40%

### **Relevant Coursework/Projects - ADD:**
• **DevOps Engineering:** CI/CD automation, containerization, cloud deployment strategies
• **Software Quality Assurance:** Automated testing, security scanning, code coverage analysis  
• **Modern Web Development:** Next.js App Router, TypeScript, responsive design, performance optimization

---

## 🎯 **Key Resume Power Words from This Project:**

**Action Verbs:** Implemented, Architected, Automated, Streamlined, Optimized, Deployed, Integrated, Established

**Quantifiable Results:**
- "Reduced deployment time by 80%"
- "Achieved 95% test coverage"
- "Eliminated security vulnerabilities"
- "Increased development velocity by 40%"

**Industry Keywords:** CI/CD, DevOps, Containerization, Microservices, Cloud-native, Automated Testing, Security Scanning, Infrastructure as Code

These additions position the student as having **production-ready development skills** and **enterprise DevOps experience** - highly valuable in today's job market.
