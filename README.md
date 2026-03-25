# Abdul Siddiq — Portfolio Site

Built with Next.js 14, Tailwind CSS, Framer Motion, and Lucide React.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Before You Deploy: Replace Placeholders

- `public/Abdul_Siddiq_Resume.pdf` — replace with your actual resume PDF
- `components/About.tsx` — replace the gray photo block with a `next/image` pointing to your headshot (400x500px, save as `/public/headshot.jpg`)
- All `[PLACEHOLDER: ...]` blocks in each `/app/case-studies/*/page.tsx` — fill in your real copy and metric values
- `app/layout.tsx` — uncomment the GA4 snippet and replace `G-XXXXXXXXXX` with your real Measurement ID

---

## Deployment: Vercel + GoDaddy DNS

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio build"
# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**, select your repository
3. Leave the framework preset as **Next.js**
4. Click **Deploy**

You will get a `.vercel.app` preview URL immediately.

### Step 3: Add Your Custom Domain on Vercel

1. In your Vercel project, go to **Settings > Domains**
2. Add `abdulsiddiq.com` and `www.abdulsiddiq.com`
3. Vercel will show the DNS records you need to configure

### Step 4: Update DNS Records on GoDaddy

1. Log in to [GoDaddy](https://godaddy.com), go to **My Products > DNS** for your domain

**Apex domain (`abdulsiddiq.com`):**
- Delete any existing `A` records for `@`
- Add a new `A` record: Host = `@`, Points to = `76.76.21.21`

**WWW subdomain:**
- Add a `CNAME` record: Host = `www`, Points to = `cname.vercel-dns.com`

DNS propagation can take 15 minutes to 48 hours.

### Step 5: Verify SSL/HTTPS

1. Once DNS propagates, return to Vercel **Settings > Domains**
2. You should see a green checkmark next to your domain
3. SSL is provisioned automatically via Let's Encrypt
4. Confirm by visiting `https://abdulsiddiq.com`

---

## Adding Google Analytics 4

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. Open `app/layout.tsx` and find the commented GA4 block
4. Uncomment it and replace `G-XXXXXXXXXX` with your real ID
5. Commit and push. Vercel will redeploy automatically.

---

## File Structure

```
portfolio/
  app/
    layout.tsx                    Root layout, fonts, SEO meta, GA4 placeholder
    page.tsx                      Main page
    case-studies/
      paid-media/page.tsx
      ai-automation/page.tsx
      fith-brand/page.tsx
      creator-program/page.tsx
  components/
    Navigation.tsx                Sticky nav with scroll blur
    Hero.tsx                      Hero with headline and CTAs
    About.tsx                     Two-column about + headshot
    Experience.tsx                Timeline experience section
    CaseStudies.tsx               Dark section with case study cards
    AIAutomation.tsx              AI tools grid
    Skills.tsx                    Skills badge grid
    Contact.tsx                   Contact section
    Footer.tsx                    Minimal footer
    CaseStudyTemplate.tsx         Shared template for all case study pages
  public/
    Abdul_Siddiq_Resume.pdf       Replace with real resume
    favicon.svg                   AS initials favicon
  app/globals.css
  tailwind.config.ts
  next.config.mjs
```
