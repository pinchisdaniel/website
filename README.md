# Pinchiș Daniel - Digital Alchemist Portfolio

This is the portfolio website for Pinchiș Daniel, a multimedia artist and developer.

## Deployment Note

This website contains large video files that exceed Vercel's free tier file size limits (100MB per file). For proper deployment, you have two options:

1. **Upgrade Vercel Plan**: Upgrade to a Pro plan which supports files up to 1GB
2. **Optimize Media Files**: Compress the video files to reduce their size

### Video Files (Current Sizes):
- DanteStickmanDanceEdited.mp4: ~52MB
- StickmanTest.mp4: ~21MB
- ZombieAnimations.mp4: ~891KB

### Recommended Solution

To ensure proper deployment on the free tier:

1. Compress videos using tools like HandBrake or FFmpeg:
   ```bash
   ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slow output.mp4
   ```

2. Or host videos on external platforms (YouTube, Vimeo) and embed them instead.

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