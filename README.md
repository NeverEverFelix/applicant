# applicant Auto-Tuned Resume Ranker — MLOps at Scale
An end-to-end MLOps pipeline that ranks resumes against job descriptions using real-time semantic similarity models. Deployed to AWS EKS with full infrastructure automation, observability, and CI/CD — this project reflects the type of scalable, reproducible ML systems used in production.

🔍 Built for recruiters, powered by NLP, deployed like a real-world ML SaaS product.
 What It Does

Given a job description and a set of resumes, the system:

Uses TF-IDF and BERT embeddings to compute semantic similarity
Ranks resumes based on relevance and domain fit
Serves results via a FastAPI inference layer in real-time

 Architecture Overview

Layer	Tooling & Features
Model Layer	TF-IDF, BERT, Python, Scikit-learn, HuggingFace Transformers
Serving	FastAPI + Gunicorn (containerized, production-tuned)
Containerization	Dockerized for consistent deployment across environments
Infrastructure	AWS EKS, Terraform IaC, modular & reproducible
CI/CD	GitLab CI/CD + ArgoCD for automated model training & deployment
Monitoring	Prometheus + Grafana for model latency, uptime, and resource utilization
Load Testing	k6 — validated under 500+ concurrent users with stable p95 latency (< 800ms)
🔁 CI/CD Automation

GitLab CI triggers build → test → deploy stages
ArgoCD performs GitOps-based Kubernetes deployments
All changes go through a fully traceable Git workflow

 Infra Security

Deployed via Terraform modules with proper IAM scoping and RBAC
Container images securely pushed to AWS ECR
Secrets and keys managed via AWS Secrets Manager

 Observability & Testing

k6 load testing to simulate traffic and detect bottlenecks
Prometheus for metrics scraping
Grafana dashboards to visualize latency, throughput, and model behavior
🔗 Live Infrastructure

This project runs on:

AWS EKS (production-grade cluster)
Fully open-sourced infrastructure: terraform-aws-devops-infra
📌 Why It Matters

This isn’t a toy model — it’s an ML system architected for real-world use:

Reproducible
Observable
Scalable
DevOps-ready
This project reflects how I think about deploying machine learning: not just about accuracy, but about shipping reliable, performant, and secure systems.
