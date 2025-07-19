# BookHaven Verification Guide

## 🏗️ Build Instructions

### Local Build
```bash
npm install
npm run build
npm run start
```
- App will be available at: [http://localhost:3000](http://localhost:3000)

### Docker Build
```bash
docker build -t bookstore-app .
docker run -p 3001:3000 bookstore-app
```
- App will be available at: [http://localhost:3001](http://localhost:3001)

---

## 🔄 Git Workflow Validation
- Branch protection is enabled on `main`
- All changes are made via feature branches and pull requests
- Example workflow:
  1. `git checkout -b feature/your-feature`
  2. Make changes and commit
  3. `git push origin feature/your-feature`
  4. Open a Pull Request on GitHub
  5. Wait for CI/CD checks to pass
  6. Merge after review

---

## 🧪 Routing Test Examples

### Dynamic Book Pages
- `/books/silver-feet-and-her-wonder` → Should display Silver Feet and Her Wonder
- `/books/the-monkey-blanket` → Should display The Monkey Blanket
- `/books/invalid-id` → Should show 404 Not Found

### Home Page
- `/` → Should display BookHaven homepage with staff favorites and club picks

---

## 🐳 Docker Validation
- Build and run the container as above
- Visit [http://localhost:3001](http://localhost:3001) and verify all routes

---

## 🛠️ Additional Checks
- Lint: `npm run lint` (should pass)
- Type-check: `npm run type-check` (should pass)
- Unit tests: `npm test` (should pass)
- E2E tests: `npm run test:e2e` (if implemented)

---

For any issues, please refer to the README or contact the project owner. 