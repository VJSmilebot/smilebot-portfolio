# Smilebot Portfolio Source of Truth

## Purpose

Smilebot Portfolio is Aaron "Smiley" Cate's public portfolio and booking hub. It should make creative work easy to explore and make paid-work contact options obvious on phones and desktop screens.

## Approved Public Contact Details

- Display name: Aaron "Smiley" Cate
- Email: smilebot3000@gmail.com
- Phone: 470-553-3856
- Location: US ( East ) / Mexico / Tour
- Instagram: https://instagram.com/smilebotnft
- Calendly: https://calendly.com/smilebotproductions
- Linktree: https://linktr.ee/Smilebot

Reusable contact values and social URLs belong in `data/siteContent.js`. Pages should import that file instead of repeating values.

## Public Routes

- `/`: landing page
- `/portal`: primary entry point for work, resume, and external links
- `/work`: portfolio category grid
- `/work/vj`: detailed VJ clip archive
- `/work/memes`: meme archive
- `/work/models`: 3D models and virtual spaces
- `/work/design`: graphic design gallery
- `/work/flyers`: event flyer gallery
- `/work/nfts`: NFT collection gallery
- `/vj`: concise booking-focused VJ overview
- `/about`: artist biography
- `/connect`: working booking and contact links
- `/links`: social profile directory
- `/resume`: public resume and PDF download

The former `/nsfw` route is intentionally removed. Its local media files remain stored in the repository for now and must not be linked from public pages.

## Mobile Requirements

- Use a compact menu button below the desktop breakpoint.
- Keep interactive controls at least 44 pixels high where practical.
- Use single-column content on narrow screens and expand grids progressively.
- Prevent horizontal scrolling.
- Keep images, videos, and embeds inside responsive containers with stable aspect ratios.
- Make email, phone, resume PDF, and profile links easy to tap.

## Content Rules

- `/vj` is the booking overview. `/work/vj` is the deeper clip archive.
- `/connect` must only show working contact actions. Do not add a form without a real submission service.
- The resume page and `public/media/smilebot-resume.pdf` must carry matching contact details.
- The public resume page shows reference names and affiliations only, with contact info available upon request.
- The downloadable resume PDF includes phone numbers for the three approved references: Joey Appleseed, Aireon "Ployd" Grimes, and Kevin Rodriguez.
- Portfolio galleries should use media that exists in `public/media`.

## Verification Checklist

- Check all public routes at phone, tablet, and desktop widths.
- Confirm there is no horizontal overflow and no clipped media.
- Confirm `/nsfw` returns not found and no navigation points to it.
- Confirm email, telephone, Calendly, Linktree, and social links work.
- Confirm visible images, videos, and embeds load.
- Stop the dev server before running `npm run build`.
- Leave unrelated untracked artifacts untouched: `.playwright-mcp/`, `cd`, and `pages - Copy/`.
