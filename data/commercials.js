module.exports = {
  getCommercialsForChannel(channelId) {
    const commercials = {
      'ctv': [
        { id: 1, title: 'Tim Hortons Coffee', duration: 30, year: 2005, description: 'Roll up the rim!' },
        { id: 2, title: 'Rogers Wireless', duration: 15, year: 2008, description: 'Never stops working' },
        { id: 3, title: 'Telus Mobility', duration: 30, year: 2006, description: 'The future is friendly' },
        { id: 4, title: 'Bell Canada', duration: 30, year: 2007, description: 'Together we are better' }
      ],
      'cbc': [
        { id: 1, title: 'Hockey Canada', duration: 30, year: 2004, description: 'Our Game' },
        { id: 2, title: 'Canadian Tourism', duration: 30, year: 2006, description: 'Canada Way' },
        { id: 3, title: 'Dominion Bank', duration: 15, year: 2008, description: 'We take care of your money' }
      ],
      'global': [
        { id: 1, title: 'Coca-Cola', duration: 30, year: 2005, description: 'Taste the feeling' },
        { id: 2, title: 'Ford Canada', duration: 60, year: 2007, description: 'Built Ford Tough' },
        { id: 3, title: 'Labatt Blue', duration: 30, year: 2006, description: 'Here\'s to us' }
      ],
      'city': [
        { id: 1, title: 'MuchMusic Concert', duration: 30, year: 2005, description: 'Music Showcase' },
        { id: 2, title: 'Local Radio Station', duration: 15, year: 2008, description: 'The Buzz' }
      ],
      'tsn': [
        { id: 1, title: 'Sports Betting', duration: 30, year: 2006, description: 'Place your bets' },
        { id: 2, title: 'Hockey Equipment', duration: 30, year: 2007, description: 'CCM Hockey' },
        { id: 3, title: 'Energy Drink', duration: 15, year: 2009, description: 'Red Bull' }
      ],
      'much': [
        { id: 1, title: 'Music Festival', duration: 30, year: 2005, description: 'Warped Tour' },
        { id: 2, title: 'Latest Album', duration: 30, year: 2008, description: 'New Music Release' }
      ],
      'space': [
        { id: 1, title: 'Sci-Fi Convention', duration: 30, year: 2006, description: 'Comic-Con' },
        { id: 2, title: 'Space Documentary', duration: 30, year: 2007, description: 'Discovery Channel Promo' }
      ],
      'discovery': [
        { id: 1, title: 'National Geographic', duration: 30, year: 2005, description: 'Expedition' },
        { id: 2, title: 'Science Kit', duration: 30, year: 2008, description: 'Learn and Explore' }
      ]
    };

    return commercials[channelId] || [];
  }
};
