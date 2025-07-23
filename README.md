# Bookstore (BookHaven)

A modern, full-stack online bookstore built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates scalable architecture, professional UI/UX, and CI/CD best practices.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application
- **Next.js 15**: Latest features with App Router
- **Component Library**: Reusable UI components with Radix UI
- **CI/CD Pipeline**: Automated testing and deployment
- **Docker Support**: Containerized development and deployment

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Testing**: Jest, Playwright
- **CI/CD**: GitHub Actions
- **Containerization**: Docker

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GontseDev404/bookstore.git
   cd bookstore
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
```bash
   cp .env.example .env.local
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run unit tests
- `npm run test:ci` - Run tests in CI environment
- `npm run test:e2e` - Run end-to-end tests

## Docker

### Build and run with Docker:

```bash
docker build -t bookstore-app .
docker run -p 3000:3000 bookstore-app
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 

---

## 🌐 Live Cloud Deployment
- **Live URL:** [https://bookhaven-app--b5bhqv6.victoriouspond-e9b4a388.eastus.azurecontainerapps.io/](https://bookhaven-app--b5bhqv6.victoriouspond-e9b4a388.eastus.azurecontainerapps.io/)
- **Platform:** Azure Container Apps

### Redeployment Steps
1. Push to the `main` branch on GitHub, or
2. Manually run the `Deploy to Azure Container Apps` workflow in GitHub Actions
   - This will build, push, and deploy the latest Docker image automatically 

## Testing

### Unit & Integration Tests (Jest)
- Run all non-database tests:
  ```bash
  npm test
  ```
- Jest is configured to ignore E2E tests in the `e2e/` directory.
- Some database-related tests (e.g., checkout-flow) may be skipped due to ESM/Supabase issues.

### End-to-End Tests (Playwright)
- Start your dev server:
  ```bash
  npm run dev
  ```
- In a separate terminal, run Playwright E2E tests:
  ```bash
  npx playwright test e2e/
  ```
- Playwright tests are not run by Jest and must be run separately.

### Troubleshooting
- If you see ESM import errors in Jest (e.g., in checkout-flow.test.tsx), these are due to ESM-only dependencies and can be skipped if not testing database flows.
- Only one Jest config is used (`jest.config.js`). 