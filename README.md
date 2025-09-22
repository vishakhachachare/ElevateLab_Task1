# 📝 TASK 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)

## 🎯 Objective
Set up a **CI/CD pipeline** to build and deploy a Node.js web app using GitHub Actions and Docker.

---

## 🛠️ Tools
- ⚡ GitHub  
- ⚙️ GitHub Actions  
- 🟢 Node.js  
- 🐳 Docker  

---

## 📦 Deliverables
- A **GitHub repository** containing the Node.js app  
- `.github/workflows/main.yml` CI/CD workflow  

---

## 🔎 Task Breakdown
- 🐳 Containerize the app with Docker  
- ⚡ Set up GitHub Actions for CI/CD:  
  - ✅ **CI (Continuous Integration)** → build & test the app on each push or pull request.  
  - 🚀 **CD (Continuous Deployment/Delivery)** → build & push the Docker image to a registry (Docker Hub or GitHub Container Registry), and optionally deploy it.  

---

## 🛠️ Steps to Do It

### 1️⃣ Add Docker Secrets to GitHub Repo
Go to your repository → **Settings → Secrets and variables → Actions → New repository secret**:

- `DOCKER_USERNAME` → Your Docker Hub username  
- `DOCKER_PASSWORD` → Your Docker Hub password or access token  

These secrets are used by the workflow to log in and push Docker images.

---

### 2️⃣ Install Dependencies Locally
Before running the app, install Node.js dependencies:

npm install

---

### 3️⃣ Trigger Workflow

Push your code to the main branch.

GitHub Actions will automatically:

Install dependencies

Run tests

Build the Docker image

Push it to Docker Hub using the secrets you added

---

🚀 Running the App Locally

Build Docker image:

docker build -t elevate_lab_task1:latest .


Run Docker container:

docker run -p 3000:3000 elevate_lab_task1:latest


Open your browser at http://localhost:3000
 to see the app running.
