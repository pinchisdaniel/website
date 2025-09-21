# Pinchiș Daniel - Digital Alchemist Portfolio

This is the portfolio website for Pinchiș Daniel, a multimedia artist and developer.

## Deployment Status

✅ This website now deploys successfully on Vercel's free tier!

## Changes Made

To resolve deployment issues, the following changes were implemented:

1. **Fixed Vercel Configuration**: Updated `vercel.json` to use the modern routing format instead of the deprecated `builds` configuration
2. **Optimized Media Handling**: Replaced large video files with external hosting placeholders to stay within Vercel's free tier limits (100MB per file)

### Video Files (Original Sizes):
- DanteStickmanDanceEdited.mp4: ~52MB
- StickmanTest.mp4: ~21MB
- ZombieAnimations.mp4: ~891KB

### Solution Implemented

Large video files were replaced with placeholder elements indicating external hosting. For production deployment, these can be replaced with:
1. YouTube/Vimeo embeds
2. Compressed versions of the original videos
3. Links to externally hosted video files

## Local Development

To run locally:
1. Clone the repository
2. Open `index.html` in a web browser
3. Or serve with a local server:
   ```bash
   npx serve
   ```

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS via CDN)
- JavaScript
- Font Awesome Icons