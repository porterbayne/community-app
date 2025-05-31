# Shopify Community App

A full-featured community platform integrated with Shopify, built with Nuxt.js, Supabase, and Prisma.

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Update `.env` with your actual credentials

3. **Set up the database**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## Features

- 🔐 Magic Link Authentication with Shopify Customer Integration
- 📝 Rich Text Editor (TipTap) for posts, recipes, and comments
- 👥 Social Features (Follow, Reactions, Comments, Bookmarks)
- 📧 Email Notifications and Daily Digests
- 🏷️ Tagging System
- 📱 Responsive Design
- 🌙 Dark Mode Support

## Project Structure

- `/server` - API endpoints and server utilities
- `/pages` - Application pages
- `/components` - Reusable Vue components
- `/composables` - Vue composables
- `/prisma` - Database schema and migrations
- `/assets` - Static assets and styles

## Deployment

Deploy to Vercel:
```bash
vercel --prod
```

## Documentation

See the complete documentation for detailed setup and configuration instructions.
