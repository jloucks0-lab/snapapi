# SnapAPI - Professional Screenshot API Service

**Your first SaaS product - Generate passive recurring revenue**

A complete, production-ready Screenshot API service built with Next.js 14, Puppeteer, Stripe, and Supabase.

## 🎯 Project Overview

SnapAPI is a micro-SaaS that generates website screenshots via API. Built for developers, agencies, and SaaS platforms who need reliable screenshot generation.

**Revenue Model:** Subscription-based (Freemium + Paid Tiers)
**Target Market:** Developers, Agencies, SaaS Companies
**Potential Revenue:** $4,000-10,000/month with 100+ customers

## ✨ Features

- **Screenshot API:** Fast, reliable website screenshot generation
- **Multiple Formats:** PNG, JPEG, WebP support
- **Custom Viewports:** Any screen size, mobile/desktop testing
- **Full Page Capture:** Entire pages, not just above the fold
- **Usage Tracking:** Real-time API usage monitoring
- **Stripe Billing:** Automated subscription management
- **Beautiful Dashboard:** User-friendly interface
- **Comprehensive Docs:** Ready-to-use API documentation

## 🏗️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Screenshot Engine:** Puppeteer + Chrome
- **Database:** PostgreSQL via Supabase (free tier)
- **Payments:** Stripe
- **Hosting:** Vercel (free tier → pro as you scale)
- **Styling:** Tailwind CSS

## 💰 Pricing Tiers

- **Free:** 100 screenshots/month - $0
- **Starter:** 1,000 screenshots/month - $20
- **Pro:** 5,000 screenshots/month - $50  
- **Business:** 20,000 screenshots/month - $100

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Supabase account (free)
- Stripe account (free)
- Vercel account for deployment (free)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create project at [supabase.com](https://supabase.com)
2. Go to SQL Editor
3. Run the schema from `supabase-schema.sql`
4. Get your project URL and anon key from Settings → API

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📝 Setup Guide

### Supabase Setup (5 minutes)

1. **Create Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Wait for database to provision

2. **Run Schema**
   - SQL Editor → New Query
   - Paste contents of `supabase-schema.sql`
   - Run query

3. **Get Credentials**
   - Settings → API
   - Copy Project URL and anon/public key

### Stripe Setup (10 minutes)

1. **Create Account**
   - Sign up at [stripe.com](https://stripe.com)
   - Use test mode for development

2. **Get API Keys**
   - Developers → API keys
   - Copy Publishable and Secret keys

3. **Create Products**
   - Products → Add Product
   - Create 4 products (Starter, Pro, Business)
   - Copy Price IDs

4. **Set Up Webhook** (for production)
   - Developers → Webhooks
   - Add endpoint: `https://yourapp.vercel.app/api/webhooks/stripe`
   - Select events: `checkout.session.completed`, `customer.subscription.*`
   - Copy webhook secret

### Deploy to Vercel (5 minutes)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Production → Settings → Environment Variables
```

## 📊 File Structure

```
snapapi/
├── app/
│   ├── api/
│   │   └── screenshot/
│   │       └── route.ts          # Main API endpoint
│   ├── dashboard/
│   │   └── page.tsx              # User dashboard
│   ├── pricing/
│   │   └── page.tsx              # Pricing page
│   ├── docs/
│   │   └── page.tsx              # API documentation
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── lib/
│   ├── screenshot.ts             # Screenshot generation logic
│   └── database.ts               # Supabase operations
├── supabase-schema.sql           # Database schema
├── package.json                  # Dependencies
├── next.config.js                # Next.js config
├── tailwind.config.js            # Tailwind config
└── README.md                     # This file
```

## 🔧 Key Components

### Screenshot API (`/api/screenshot`)

**GET Request:**
```bash
curl "https://snapapi.dev/api/screenshot?url=https://example.com" \
  -H "X-API-Key: YOUR_API_KEY" \
  -o screenshot.png
```

**Parameters:**
- `url` (required): Website URL to capture
- `fullPage` (optional): Capture full page (true/false)
- `width` (optional): Viewport width (default: 1280)
- `height` (optional): Viewport height (default: 720)
- `format` (optional): png, jpeg, or webp
- `quality` (optional): 1-100 (for jpeg/webp)
- `delay` (optional): Wait time in ms before capture

### Database Schema

**Users Table:**
- Stores user accounts and API keys
- Tracks subscription plan and Stripe IDs

**API Usage Table:**
- Logs every API request
- Enables usage tracking and limits

**Subscriptions Table:**
- Manages Stripe subscriptions
- Tracks billing periods and status

## 💳 Stripe Integration

### Create Checkout Session

```typescript
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  payment_method_types: ['card'],
  line_items: [{
    price: 'price_XXXXX', // Stripe Price ID
    quantity: 1,
  }],
  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
});
```

### Webhook Handler

```typescript
// Handle subscription events
switch (event.type) {
  case 'checkout.session.completed':
    // Activate subscription
    break;
  case 'customer.subscription.updated':
    // Update subscription status
    break;
  case 'customer.subscription.deleted':
    // Cancel subscription
    break;
}
```

## 📈 Revenue Roadmap

### Month 1-2: Launch & Validate
- Deploy to production
- Share on Twitter, Hacker News, Reddit
- Get first 10 paying customers
- Target: $200-500 MRR

### Month 3-4: Growth
- SEO optimization
- Content marketing (blog posts, tutorials)
- Partnership with dev tools
- Target: $1,000-2,000 MRR

### Month 5-6: Scale
- 50+ paying customers
- Premium tier adoption
- Enterprise features
- Target: $4,000+ MRR

## 🎯 Marketing Strategy

**Free Marketing:**
1. Product Hunt launch
2. Hacker News "Show HN"
3. Reddit r/SideProject, r/webdev
4. Twitter developer community
5. Dev.to articles and tutorials

**Content Marketing:**
1. "How to Generate Screenshots with API" tutorials
2. Integration guides (Notion, Airtable, Zapier)
3. Use case examples
4. SEO-optimized landing pages

**Paid Marketing (once profitable):**
1. Google Ads for "screenshot API"
2. Sponsored dev newsletters
3. Developer conference booths

## 🔐 Security Best Practices

- API keys stored securely (never in client code)
- Rate limiting per API key
- Input validation on all parameters
- Stripe webhook signature verification
- Database row-level security (RLS)

## 🐛 Troubleshooting

**Puppeteer not working locally?**
- Install Chrome: `npx @puppeteer/browsers install chrome@stable`
- Or use the dev placeholder in `lib/screenshot.ts`

**Vercel deployment failing?**
- Check runtime is set to `nodejs` in route.ts
- Ensure `@sparticuz/chromium` is in dependencies
- Increase function timeout in vercel.json

**Database connection issues?**
- Verify Supabase URL and keys
- Check RLS policies
- Enable service_role if needed

## 📦 Production Checklist

Before going live:

- [ ] Add real Stripe products and prices
- [ ] Set up Stripe webhook endpoint
- [ ] Configure custom domain
- [ ] Add analytics (PostHog, Plausible)
- [ ] Set up error monitoring (Sentry)
- [ ] Create Terms of Service
- [ ] Create Privacy Policy
- [ ] Test all payment flows
- [ ] Set up customer support email
- [ ] Create onboarding emails

## 🚀 Next Steps

**Expand Features:**
- PDF generation API
- HTML to image conversion
- Scheduled screenshots
- Screenshot comparison tools

**Build More SaaS Products:**
This codebase is a template. Clone it for:
- PDF Generation API
- Form Backend Service
- Image Optimization API
- Webhook Testing Service

---

**Built by:** Josh's Web Services
**License:** MIT
**Support:** Open an issue on GitHub

**Ready to launch your SaaS?** This is your foundation! 🎉
