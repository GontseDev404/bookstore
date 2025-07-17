# Bookstore (BookHaven)

A modern, full-stack online bookstore built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates scalable architecture, professional UI/UX, and CI/CD best practices.

## 🚀 Features
- Dynamic book pages with scalable routing
- Responsive, accessible UI with Tailwind CSS and Radix UI
- Modular component architecture
- Book ratings, reviews, and related books
- Category browsing and staff picks
- Dockerized for easy deployment
- Ready for CI/CD and cloud deployment

## 🏗️ Project Structure
```
app/           # Next.js App Router pages
components/    # UI, layout, and book components
public/        # Static assets (images, covers)
hooks/         # Custom React hooks
lib/           # Utilities
styles/        # Global styles
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ (recommended: 20.x)
- npm 9+ (recommended: 10.x)

### Installation
```bash
npm install --force --legacy-peer-deps
```

### Running Locally
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t bookstore .
docker run -p 3001:3000 bookstore
```

## 🧪 Testing
- (Add test instructions here if/when tests are implemented)

## 🚢 Deployment
- Ready for deployment to Vercel, Azure Container Apps, or Google Cloud Run.
- Static export supported for GitHub Pages.

## 🤝 Contributing
1. Fork the repo and create a feature branch.
2. Commit using conventional commit messages.
3. Open a pull request with a clear description.

## 📄 License
MIT 