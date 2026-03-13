## Sri Vijaya Sai Coaching Center (Static Site + Gemini Quiz)

This project is a static website (HTML/CSS/Vanilla JS).  
It can load quiz questions **dynamically from Gemini** when deployed on **Vercel**, and it will **fall back to the built-in question bank** when offline / opened as `file://`.

### Files
- `index.html`
- `style.css`
- `script.js`
- `api/questions.js` (Vercel Serverless Function)

### Deploy on Vercel (Gemini dynamic questions)
1. Push this folder to GitHub (or upload to Vercel).
2. In Vercel project settings, add Environment Variable:
   - `GEMINI_API_KEY` = your Google AI Studio API key
3. Deploy.

The frontend will call:
- `GET /api/questions?class=8&subject=physics`

### Run locally
Open `index.html` directly.  
Dynamic Gemini fetch is skipped for `file://`, so the quiz uses the built-in question bank.

