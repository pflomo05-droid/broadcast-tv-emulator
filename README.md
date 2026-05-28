# 📺 Broadcast TV Emulator

> A nostalgic broadcast TV emulator featuring 2000s-2010s Canadian television channels

![TV Emulator](https://img.shields.io/badge/Era-2000s--2010s-red) ![License](https://img.shields.io/badge/License-MIT-blue) ![Status](https://img.shields.io/badge/Status-Active-green)

## Features

✨ **Retro UI Design** - Authentic 2000s-2010s television aesthetics

📺 **Major Canadian Channels** - CTV, CBC, Global, Citytv, TSN, MuchMusic, Space, Discovery Channel

📖 **TV Guide** - Complete program schedule for all channels

📺 **Channel Browser** - Switch between channels with authentic button design

🎬 **Period-Accurate Programming** - Shows and content from the 2000s-2010s era

📺 **Commercial Breaks** - Nostalgic period-accurate commercials

🎨 **Visual Effects** - Scanlines, CRT screen effects, neon glow

📱 **Responsive Design** - Works on desktop and mobile devices

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pflomo05-droid/broadcast-tv-emulator.git
cd broadcast-tv-emulator

# Install dependencies
npm install

# Start the server
npm start
```

The application will be available at `http://localhost:3000`

### Development

For development with auto-reload:

```bash
npm run dev
```

## Usage

1. **Open the application** in your web browser
2. **Select a channel** by clicking on the channel buttons (CTV, CBC, Global, etc.)
3. **View the program** currently airing on the screen
4. **Open the TV Guide** to see the full schedule for all channels
5. **Experience commercials** - Period-accurate ads from the era
6. **Enjoy the retro experience** with authentic 2000s-2010s UI design

### Keyboard Shortcuts

- **G** - Toggle TV Guide
- **Esc** - Close modals

## Project Structure

```
broadcast-tv-emulator/
├── public/
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Retro styling
│   └── script.js           # Frontend logic
├── data/
│   ├── channels.js         # Channel definitions
│   ├── tvGuide.js          # Program schedules
│   └── commercials.js      # Commercial content
├── server.js               # Express server
├── package.json            # Dependencies
└── README.md               # This file
```

## API Endpoints

### Channels
```
GET /api/channels
```
Get all available channels

### Current Program
```
GET /api/current/:channelId
```
Get the currently airing program for a channel

### TV Guide
```
GET /api/guide/:date
GET /api/guide/:channelId/:date
```
Get program schedule for a date or specific channel

### Commercials
```
GET /api/commercials/:channelId
```
Get commercials for a specific channel

## Channels

| Channel | Number | Type |
|---------|--------|------|
| CTV | 2 | General Entertainment |
| CBC | 4 | Public Broadcasting |
| Global | 7 | General Entertainment |
| Citytv | 6 | Urban Programming |
| TSN | 20 | Sports |
| MuchMusic | 15 | Music |
| Space | 32 | Science Fiction |
| Discovery | 30 | Documentary |

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Data**: JSON-based program scheduling
- **Design**: Retro CSS animations and effects

## Customization

### Add New Channels

Edit `data/channels.js` and add a new channel object:

```javascript
{
  id: 'channelid',
  name: 'Channel Name',
  number: 99,
  logo: '🎬',
  color: '#XXXXXX',
  era: '2000s-2010s',
  description: 'Channel Description'
}
```

### Add New Programs

Edit `data/tvGuide.js` and add programs to the channel's array:

```javascript
{ title: 'Program Name', startTime: 'HH:MM', duration: 60, genre: 'Genre' }
```

### Add Commercials

Edit `data/commercials.js` and add ads:

```javascript
{ id: 1, title: 'Ad Title', duration: 30, year: 2005, description: 'Ad Description' }
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Features

- [ ] Real-time program updates
- [ ] User favorites/bookmarks
- [ ] Recording simulation
- [ ] More period-accurate graphics
- [ ] Historical program data
- [ ] Audio/video integration
- [ ] Multi-language support
- [ ] Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by nostalgia for 2000s-2010s Canadian television
- Retro design inspired by CRT monitors and vintage TV sets
- Programming schedules inspired by actual Canadian TV history
- Special thanks to all Canadian broadcasters of the era

## Contact

Flomo - [@pflomo05-droid](https://github.com/pflomo05-droid)

Project Link: [https://github.com/pflomo05-droid/broadcast-tv-emulator](https://github.com/pflomo05-droid/broadcast-tv-emulator)

---

⭐ If you enjoy this project, please consider giving it a star!
