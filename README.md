# Joe's Portfolio

> A personal portfolio built during my web developer training — and kept evolving ever since.

**[joe.arkaans.com](https://joe.arkaans.com)**

---

## About this project

This portfolio started as the final project of my web developer certification. Once submitted, instead of archiving it, I kept going — refactoring, adding features, and pushing the infrastructure further than required.

What began as a simple Vercel deployment became a full AWS-hosted application. Not because I had to, but because I wanted to understand how things work in a real production environment. AWS is unavoidable in professional settings, so I figured I'd learn it properly.

Along the way, I covered the entire DevOps lifecycle on my own:

- **Plan & Code** — feature branches, pull requests, versioning
- **Build & Test** — CI pipeline with ESLint, dependency audit, and build verification
- **Release & Deploy** — automated deployment via AWS Amplify on merge to `main`
- **Operate & Monitor** — CloudWatch dashboards, 5xx error alerts via SNS

---

## Live stack

| Layer        | Technology               |
| ------------ | ------------------------ |
| Framework    | Next.js 16 (SSR)         |
| Language     | TypeScript               |
| Styling      | Tailwind CSS + shadcn/ui |
| i18n         | next-intl                |
| Animations   | Framer Motion            |
| Hosting      | AWS Amplify              |
| Data storage | AWS S3                   |
| DNS          | AWS Route 53             |
| Testing      | Jest                     |
| Monitoring   | AWS CloudWatch           |
| CI/CD        | GitHub Actions           |

---

## Tech stack (full)

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-black?style=flat)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-black?style=flat)
![AWS Amplify](https://img.shields.io/badge/AWS_Amplify-FF9900?style=flat&logo=awsamplify&logoColor=white)
![Amazon S3](https://img.shields.io/badge/Amazon_S3-569A31?style=flat&logo=amazons3&logoColor=white)
![Route 53](https://img.shields.io/badge/Route_53-8C4FFF?style=flat&logo=amazonaws&logoColor=white)
![CloudWatch](https://img.shields.io/badge/CloudWatch-FF4F8B?style=flat&logo=amazonaws&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-22B573?style=flat)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white)

---

## CI/CD

Every push to `dev` triggers a GitHub Actions pipeline:

1. Dependency install
2. ESLint check
3. Security audit (`--audit-level=high`)
4. Unit tests
5. Production build

Merging to `main` triggers an automatic deployment on AWS Amplify.

---

## Run locally

```bash
git clone https://github.com/Boutzi/portfolio.git
cd portfolio
npm install --legacy-peer-deps
```

Create a `.env` file at the root with the following variables:

```env
# GITHUB
NEXT_PUBLIC_GITHUB_BEARER_TOKEN=

# AWS S3
NEXT_PUBLIC_S3_BUCKET_URL=https://joe-portfolio-data.s3.eu-west-3.amazonaws.com

# NODEMAILER
NEXT_PUBLIC_GMAIL_USER=
NEXT_PUBLIC_GMAIL_PASSWORD=
NEXT_PUBLIC_PROTONMAIL_USER=
```

```bash
npm run dev
```

---

## License

This project is open source. Feel free to explore the code, get inspired, or reach out if you have questions.
