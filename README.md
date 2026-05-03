# MailQuark 🚀 | Premium Email Testing Tool

**MailQuark** is an engineering-grade email testing tool designed for developers who need a seamless, high-performance environment to catch and inspect outgoing emails during development. 

Built with **Next.js 16 (Turbopack)** and **Vanilla CSS**, it provides a premium dark-mode experience with a focus on visual precision and developer productivity.

![MailQuark Dashboard](public/window.svg) <!-- Reemplazar con captura real luego -->

## ✨ Features

- 📧 **Instant Capture**: Real-time email interception with SMTP support.
- 🧪 **QA Analysis**: Automated check for unreplaced variables (`{{var}}`) to prevent "template-leaks" in production.
- 📱 **Adaptive Viewport**: Toggle between Desktop and Mobile previews with a single click.
- 📂 **Attachment Support**: Full support for receiving and downloading files.
- 🎨 **Real Colors Mode**: Preview emails in their original styling or with a dark-mode optimized filter.
- ⚡ **High Performance**: Optimized with SQLite WAL mode for near-instant writes.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Vanilla CSS (Modern CSS Variables & Glassmorphism)
- **Icons**: Lucide React
- **Backend**: Next.js API Routes (Mocked for this portfolio demo)
- **Design Philosophy**: Minimalist, Mobile-First, and Engineering-centric.

## 🚀 Why I built this?

As a developer, I found existing tools either too bulky or too expensive for simple local testing. MailQuark was born from the need for a **"Dogfooding"** tool: a professional-grade dashboard that looks as good as the apps we build for our clients at **CinloDev**.

## 📖 Portfolio Demo Note

This repository is a **Frontend-only demonstration** of the MailQuark project. 
- The SMTP server logic and SQLite persistence are present in the private production version.
- This public version uses a **Mock Seeder** to demonstrate the UI/UX and interaction patterns.

---

Developed with ❤️ by [CinloDev](https://www.cinlodev.com)
