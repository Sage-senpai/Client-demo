# Grok X Scraping Prompt

Use this prompt in Grok (on X) to find founders and decision-makers by industry.
Replace {INDUSTRY} and {KEYWORDS} per niche before running.

---

## Master Prompt

```
Find me 50 active X/Twitter accounts that match ALL of these criteria:

1. They are founders, CEOs, CTOs, COOs, or managing directors of {INDUSTRY} companies
2. They are based in Nigeria, Ghana, Kenya, South Africa, UK, US, or UAE
3. They have posted within the last 30 days
4. They have between 500 and 500,000 followers (active but reachable)
5. Their bio or recent posts mention any of these keywords: {KEYWORDS}

For each account, give me:
- Display name
- @handle
- Bio summary (one line)
- Follower count
- Location (if visible)
- Company name (if visible)
- A recent post topic I can reference in my outreach
- Their likely pain point based on their content

Format as a table. Sort by follower count (lowest first — they're more likely to respond).
```

---

## Industry-Specific Keyword Sets

### Real Estate
```
{INDUSTRY}: Real estate agencies, property tech, property management
{KEYWORDS}: property listings, real estate, housing, property management, rentals, Airbnb host, short-let, estate agent, proptech, land sales
```

### E-commerce
```
{INDUSTRY}: E-commerce brands, online stores, DTC brands, Shopify stores
{KEYWORDS}: online store, Shopify, e-commerce, DTC, fashion brand, dropshipping, product launch, conversion rate, AOV, cart abandonment
```

### Healthcare / Clinics
```
{INDUSTRY}: Private clinics, hospitals, healthtech, telemedicine
{KEYWORDS}: clinic, hospital, healthtech, telemedicine, patient care, medical practice, health startup, doctor, appointment booking, EMR
```

### Fintech
```
{INDUSTRY}: Fintech startups, neobanks, payment companies, lending platforms
{KEYWORDS}: fintech, payments, neobank, lending, mobile money, POS, financial inclusion, banking API, KYC, compliance
```

### Marketing Agencies
```
{INDUSTRY}: Digital marketing agencies, social media agencies, creative agencies
{KEYWORDS}: digital marketing, agency, social media marketing, SEO, content marketing, paid ads, branding agency, client work, retainer
```

### Agritech / Farming
```
{INDUSTRY}: Agritech companies, farm-to-table, agricultural marketplaces
{KEYWORDS}: agritech, farming, agriculture, farm management, crop, livestock, food supply chain, agribusiness, farm-to-market
```

### Legal Firms
```
{INDUSTRY}: Law firms, legal tech, corporate law
{KEYWORDS}: law firm, legal tech, case management, litigation, corporate law, legal services, barrister, solicitor, contract management
```

### Education / EdTech
```
{INDUSTRY}: EdTech platforms, schools, tutoring, online learning
{KEYWORDS}: edtech, online learning, LMS, school management, tutoring, e-learning, student portal, curriculum, enrollment
```

### Construction / Engineering
```
{INDUSTRY}: Construction firms, civil engineering, real estate development
{KEYWORDS}: construction, civil engineering, project management, building, contractor, site management, structural engineering
```

### Fitness / Gym
```
{INDUSTRY}: Gyms, fitness studios, personal training, wellness
{KEYWORDS}: gym, fitness, personal training, workout, wellness, membership, group class, CrossFit, yoga studio
```

### Hospitality / Hotels
```
{INDUSTRY}: Hotels, resorts, short-let, hospitality management
{KEYWORDS}: hotel, resort, hospitality, booking, short-let, Airbnb, guest experience, hotel management, luxury stay
```

### SaaS / Tech Products
```
{INDUSTRY}: SaaS startups, B2B software, developer tools
{KEYWORDS}: SaaS, B2B, startup, product launch, MRR, churn, onboarding, API, developer tools, subscription
```

### Logistics / Delivery
```
{INDUSTRY}: Logistics companies, delivery startups, courier services
{KEYWORDS}: logistics, delivery, last-mile, courier, fleet management, dispatch, warehouse, supply chain, e-commerce fulfillment
```

### Beauty / Wellness
```
{INDUSTRY}: Salons, spas, beauty brands, skincare
{KEYWORDS}: salon, spa, beauty, skincare, hair studio, nail bar, aesthetics, beauty brand, wellness center, appointment
```

### Coworking / Events
```
{INDUSTRY}: Coworking spaces, event venues, community spaces
{KEYWORDS}: coworking, event space, community, workspace, hot desk, meeting room, conference venue, hub, innovation center
```

### Restaurants / Food
```
{INDUSTRY}: Restaurants, cafes, food brands, catering
{KEYWORDS}: restaurant, cafe, food brand, catering, chef, menu, reservation, food delivery, kitchen, dining
```

### Tech Companies / Consultancies
```
{INDUSTRY}: Software consultancies, dev agencies, IT services
{KEYWORDS}: software development, tech consulting, IT services, web development, mobile app, custom software, digital transformation
```

---

## LinkedIn Scraping Approach

For LinkedIn, use Sales Navigator search with these filters:
- **Title**: Founder, CEO, CTO, COO, Managing Director, Head of Digital
- **Industry**: Select the specific industry
- **Company headcount**: 2-200 (SMBs — they make decisions fast)
- **Geography**: Nigeria, Ghana, Kenya, South Africa, UK, US, UAE
- **Posted on LinkedIn**: Last 30 days

Export results via LinkedIn helper tools or manually build a CSV with:
Name, Title, Company, Industry, LinkedIn URL, Email (if visible), Recent Post Topic

---

## Email Finding

After scraping handles/names, use these to find emails:
1. **Hunter.io** — enter company domain, get team emails
2. **Apollo.io** — search by name + company
3. **Snov.io** — email finder + verifier
4. **Google**: "{Name}" "{Company}" email OR contact
5. **Company website**: Check /about, /team, /contact pages

Always verify emails before sending (use NeverBounce or ZeroBounce).
