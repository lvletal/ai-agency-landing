# 🚀 Next.js AI SaaS Boilerplate (PayPal Edition)

Congratulations on purchasing the ultimate starter kit for your AI business! 
This boilerplate is designed to save you 200+ hours of setup time.

## 📦 What's Inside?
- **Next.js 14 (App Router)**: The latest and greatest React framework.
- **Firebase Auth**: Pre-configured Google Login & Email/Password.
- **PayPal Integration**: Native subsciption & one-time payment buttons.
- **AI Ready**: Structure for OpenAI/Claude API integration.
- **Tailwind CSS**: Beautiful, responsive UI components.

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Rename `.env.example` to `.env.local` and fill in your keys:

```bash
# Firebase Config (Get this from Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...

# PayPal Config (Get this from PayPal Developer Dashboard)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to see your app!

## 💰 How to Change Prices
Go to `app/saas-kit/page.tsx` and find the `PayPalButtons` component.
Change the `value: "99.00"` to whatever price you want to charge.

## 🤖 Hooking up AI
Check `app/api/generate/route.ts` (example) to see how to connect your OpenAI key.

---
© 2026 Profit Architect. All rights reserved.

---

## 🆘 Troubleshooting (Memory & Stability)

### 1. Memory Spike (Computer Slow)
If the tool uses too much memory:
- **Solution**: Run `kill_browser.bat` in this folder. It forcibly closes all hidden Chrome windows.
- **Prevention**: The tool now includes a "Zombie Process Killer" that runs automatically on startup.

### 2. Browser Not Opening
- If the AI Business Director doesn't open, try running `run_dashboard.bat` again.
- Ensure you have **Google Chrome** installed.

### 3. "Driver Not Found" Error
- The system automatically installs the correct driver, but if it fails:
  ```bash
  pip install webdriver-manager --upgrade
  ```
