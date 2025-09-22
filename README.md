📝 TASK 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)

🎯 Objective
Set up a CI/CD pipeline to build and deploy a web app.

🛠️ Tools:
  ⚡ GitHub
  ⚙️ GitHub Actions
  🟢 Node.js
  🐳 Docker

📦 Deliverables:
  📁 GitHub repo with .yml CI/CD workflow

🔎 Task Breakdown:
  🐳 Containerize app with Docker
  ⚡ Set up GitHub Actions for CI/CD:
  ✅ CI (Continuous Integration) → build & test the app on each push/PR.
  🚀 CD (Continuous Deployment/Delivery) → build & push Docker image to a registry (Docker Hub / GitHub Container Registry), and optionally deploy.


🛠️ Steps to Do It:
  1️⃣ Create a Dockerfile

Add a Dockerfile in your project root.

  2️⃣ Create GitHub Actions Workflow

.github/workflows/main.yml

