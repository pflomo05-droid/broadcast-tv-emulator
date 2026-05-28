# Broadcast TV Emulator

A retro 2000s/2010s style TV emulator built with vanilla HTML, CSS, and JavaScript. Experience the nostalgia of classic television with a fully functional interface!

## Features

✨ **Retro Design**
- Authentic 2000s/2010s TV aesthetic
- CRT screen effect with scanlines and flicker
- Realistic control panel with knobs and buttons
- Glowing green channel display
- Power indicator light with animations
- Speaker grilles
- Beveled 3D TV body

📺 **Full Functionality**
- 20 channels to browse
- Video playback support (MP4/WebM)
- Volume control with visual feedback
- Channel switching (buttons, direct input, keyboard, sidebar)
- Channel information display
- Power on/off capability
- Channel selection sidebar

⌨️ **Interactive Controls**
- **POWER Button**: Turn TV on/off (or press SPACEBAR)
- **Channel Up/Down**: Switch channels (◀/▶ buttons or Arrow Up/Down)
- **Channel Input**: Jump to a specific channel (1-20)
- **Volume Knob**: Adjust volume (0-100%)
- **Sidebar**: Click any channel to switch instantly

## How to Use

1. **Turn On the TV**: Click the POWER button or press SPACEBAR
2. **Switch Channels**: 
   - Click ◀ or ▶ buttons
   - Use Arrow Up/Down keys
   - Enter a channel number (1-20) in the input field
   - Click a channel in the sidebar
3. **Adjust Volume**: Drag the volume slider
4. **Turn Off**: Click POWER button again or press SPACEBAR

## Installation

Simply open `index.html` in a modern web browser. No dependencies, no build process!

```bash
# Clone or download the repository
git clone https://github.com/pflomo05-droid/broadcast-tv-emulator.git
cd broadcast-tv-emulator

# Open in browser
open index.html
# or
start index.html
# or
double-click index.html
```

## Browser Support

Works in all modern browsers:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Project Structure

```
broadcast-tv-emulator/
├── index.html          # Main HTML structure
├── styles.css          # Retro styling and animations
├── script.js           # Interactive functionality
└── README.md          # Documentation
```

## Technical Details

- **Pure HTML5**: No frameworks or libraries needed
- **CSS3**: Advanced gradients, animations, and effects
- **HTML5 Video**: Native video playback with `<video>` element
- **Vanilla JavaScript**: No dependencies, lightweight
- **Responsive Design**: Works on desktop and tablet

## Video Sources

Uses sample videos from Google Commons (public domain):
- BigBuckBunny.mp4
- ElephantsDream.mp4
- Sintel.mp4
- TearsOfSteel.mp4
- VolkswagenGTIReview.mp4
- And more!

## Customization

### Add Custom Channels

Edit the `channels` array at the top of `script.js`:

```javascript
const channels = [
    {
        id: 1,
        name: "Channel 1",
        title: "Your Channel Name",
        description: "Your channel description",
        videoUrl: "https://your-video-url.mp4"
    },
    // Add more channels...
];
```

### Change Colors and Styling

Modify CSS variables and colors in `styles.css`:
- TV bezel colors: `.tv-container` background
- Screen glow: `.tv-screen-wrapper` box-shadow
- Channel display: `.channel-display` color
- Button colors: `.power-btn`, `.channel-btn` styling

### Customize Channel List

Edit the channels before the `init()` function in `script.js` to add:
- Different video URLs
- Custom channel names
- New channel descriptions
- More or fewer channels

## Tips & Tricks

- Press **SPACEBAR** to quickly toggle power
- Use **Arrow Keys** to navigate channels when TV is on
- The TV remembers your volume setting during the session
- All videos are streamed, not stored locally
- Great for full-screen display!
- Works perfect on large projectors or displays

## Features Overview

### Channel Display
- Digital green text display showing current channel
- Animated scanlines for authentic CRT effect
- Power indicator light that pulses when on

### Control Panel
- Authentic 2000s design with beveled buttons
- Volume slider with percentage display
- Channel selector with forward/back buttons
- Direct channel input (1-20)
- Power button with feedback

### Info Display
- Current channel name and title
- Program description
- Updates in real-time

### Sidebar
- List of all 20 channels
- Active channel highlighting
- Click to switch instantly

## Performance

- Lightweight: Only ~8KB of CSS, ~12KB of JavaScript
- Fast loading: No external dependencies
- Smooth animations: 60fps animations
- Mobile optimized: Touch-friendly controls

## Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome/Chromium | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ❌ Not Supported |

## Future Enhancement Ideas

- Add more channels (expand to 50+)
- Commercial breaks simulation
- TV guide / schedule display
- Recording/snapshot feature
- Channel presets (favorite channels)
- Picture adjustment (brightness, contrast)
- Sound customization
- Local video file upload
- Dark/light themes

## Troubleshooting

**Video won't play?**
- Check your internet connection
- Try a different channel
- Ensure your browser supports HTML5 video
- Check browser console for errors

**Controls not working?**
- Refresh the page
- Clear browser cache
- Try a different browser
- Check if JavaScript is enabled

**Audio issues?**
- Adjust the volume slider
- Check system volume
- Try a different video source

## License

Free to use and modify for personal and commercial projects.

## Contributing

Feel free to fork and submit improvements! Suggestions welcome.

## Credits

Created with vanilla web technologies - HTML5, CSS3, and JavaScript.

---

**Enjoy your retro TV experience! 📺✨**

Visit: [https://github.com/pflomo05-droid/broadcast-tv-emulator](https://github.com/pflomo05-droid/broadcast-tv-emulator)
