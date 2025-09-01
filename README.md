# Promtopia 🧠✨

Promtopia is a **smart AI prompt–sharing application** built with **Next.js** and **Tailwind CSS**.  
Think of it like a blog app, but instead of blog posts, users create and share **AI prompts**.  
Other users can browse, copy, and use these prompts for their own AI experiments.

---

## 🚀 Features
- 🔐 **Google Authentication** with [NextAuth.js](https://next-auth.js.org/)  
- 📝 **Create, edit, and delete AI prompts**  
- 🌍 **Share prompts publicly** for others to explore and use    
- 🎨 **Modern UI** styled with Tailwind CSS    

---

## 🛠️ Tech Stack
- [Next.js (App Router)](https://nextjs.org/docs) – React framework  
- [NextAuth.js](https://next-auth.js.org/) – Authentication (Google OAuth)  
- [Tailwind CSS](https://tailwindcss.com/) – Styling  
- [MongoDB](https://www.mongodb.com/) – Database for storing prompts & users   

---

## 📂 Project Structure
```
├── app/               # Next.js App Router (pages, layouts, API routes)
├── components/        # Reusable UI components
├── model/             # Data models (e.g., Prompt schema)
├── utils/             # Helper functions
├── styles/            # Global styles & Tailwind config
├── public/assets/     # Static images and assets
├── next.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v16+  
- npm / yarn / pnpm  
- MongoDB connection string  
- Google OAuth credentials (for NextAuth)

### Environment Variables
Create a `.env.local` file in the project root and add:

```env
GOOGLE_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL= http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
MONGODB_URI=your-mongodb-connection-uri
```

### Installation
```bash
npm install
npm run dev
```
