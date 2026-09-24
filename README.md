# 🏗️ Apex Construction & Home Services Portfolio

A modern, high-performance web portfolio for construction, home remodeling, and property repair services. Built with Next.js 16 (App Router), Tailwind CSS v4, Lucide React, and integrated with Sanity.io Studio for headless content management.

---

## 🚀 Key Features

- **12 Comprehensive Service Categories**: Complete with high-resolution AI placeholder images, sub-services breakdown, and key benefits.
- **Instant Estimate Request Modal**: Multi-step interactive quote form with service pre-selection and urgency indicators.
- **Emergency 24/7 Call Integration**: Click-to-call mobile buttons and emergency badges.
- **Rich Social Proof**: 4.9-star rating badges, verified customer testimonials, and project showcase with filters.
- **Contractor Comparison Table**: Highlights advantages over ordinary handymen (written warranties, upfront pricing, licensing).
- **Sanity CMS Studio at `/admin`**: Client can create, update, or remove services, blog articles, projects, and testimonials without touching code.
- **AI Placeholder Image Replacement**: Client can directly replace dev placeholder images with real photos through the admin panel.

---

## 📁 Project Structure

```
construction-portfolio/
├── public/
│   └── images/
│       └── services/           # 12 High-Res AI Service Placeholders
│           ├── remodeling.jpg
│           ├── home-repair.jpg
│           ├── painting.jpg
│           ├── plumbing.jpg
│           ├── hvac.jpg
│           ├── electrical.jpg
│           ├── flooring.jpg
│           ├── carpentry.jpg
│           ├── landscaping.jpg
│           ├── roofing.jpg
│           ├── appliance-repair.jpg
│           └── cleaning.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout & SEO metadata
│   │   ├── page.tsx            # Full 12-section homepage
│   │   ├── globals.css         # Tailwind v4 theme & brand tokens
│   │   └── admin/
│   │       └── [[...tool]]/    # Embedded Sanity Studio
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.tsx      # Phone, hours, 24/7 notice
│   │   │   ├── Navbar.tsx      # Sticky navy header with mega-dropdown
│   │   │   └── Footer.tsx      # 4-column footer with services list
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBanner.tsx
│   │   │   ├── AboutSnapshot.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── ProjectsShowcase.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   └── EstimateModal.tsx
│   │   └── ui/
│   │       └── Button.tsx
│   ├── data/
│   │   ├── company.ts          # Central branding, phone, address, hours
│   │   ├── services.ts         # Full 12 services details & metadata
│   │   └── testimonials.ts     # Customer reviews & FAQs
│   └── sanity/
│       ├── sanity.config.ts    # Studio configuration
│       └── schemaTypes/        # Schemas for Services, Projects, Reviews, etc.
└── package.json
```

---

## 🛠️ Changing Company Details

All company name, contact info, and business hours are centrally defined in:
`src/data/company.ts`

When your client decides on their final company name, phone number, and address, simply edit this single file to update the entire website:

```typescript
export const companyData = {
  name: "Your Client Company Name",
  phone: "(555) 123-4567",
  email: "info@clientdomain.com",
  // ...
};
```

---

## 🧑‍💻 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## ⚙️ Sanity CMS Setup

1. Create a free account at [Sanity.io](https://www.sanity.io).
2. Create a new project and copy your **Project ID**.
3. Create a `.env.local` file from `.env.local.example`:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   ```
4. Access the admin dashboard at `http://localhost:3000/admin`.
5. Invite your client as an Editor so they can upload real photos and write content.

---

## ☁️ Deployment to Vercel

1. Push this repository to GitHub / GitLab.
2. Go to [Vercel](https://vercel.com) and import the repository.
3. Add your environment variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`).
4. Click **Deploy**. Vercel will provision SSL and global CDN automatically.
5. In Vercel domain settings, connect your client's custom domain (e.g. `clientdomain.com`).
