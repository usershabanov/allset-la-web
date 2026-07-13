# Fast launch: AllSet Appliance on Vercel

## What is already prepared
- Vite app builds successfully
- form submits to `/api/booking`
- Telegram delivery is implemented through Vercel serverless function
- `vercel.json` already exists
- `.env.example` shows required env vars

## What you need to do

### 1) Put the code in GitHub
Create a GitHub repo and upload this project folder.

### 2) Create a Vercel project
- Go to https://vercel.com/
- Sign in with GitHub
- Click **Add New Project**
- Import the GitHub repo with this site

### 3) Add environment variables in Vercel
In the Vercel project settings, add:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Use your real values.

### 4) Deploy
Click **Deploy**.

After deploy, Vercel will give you a temporary URL like:
- `https://allset-la-web.vercel.app`

### 5) Connect your Namecheap domain
In Vercel:
- open project
- go to **Settings -> Domains**
- add your domain
- Vercel will show the exact DNS records to put into Namecheap

In Namecheap:
- open your domain
- go to **Advanced DNS**
- add the records Vercel gives you

Usually this is one of these patterns:
- root domain (`allsetmyappliance.com`) -> A record to Vercel IP
- `www` -> CNAME to `cname.vercel-dns.com`

## Recommended first launch setup
Launch with:
- main domain: `allsetmyappliance.com`
- optional redirect: `www.allsetmyappliance.com` -> main domain

## How to verify after launch
1. Open homepage
2. Submit the form
3. Check that Telegram receives the lead
4. Click phone link on mobile
5. Open Contact / Services / Pricing pages

## If the form does not work
Check in Vercel:
- Project Settings -> Environment Variables
- Functions logs
- Deployment logs

The most common issue is missing or wrong Telegram env variables.
