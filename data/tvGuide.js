const moment = require('moment');

const programs = {
  'ctv': [
    { title: 'CTV Morning News', startTime: '06:00', duration: 120, genre: 'News' },
    { title: 'Canada AM', startTime: '08:00', duration: 180, genre: 'Talk Show' },
    { title: 'The Young and the Restless', startTime: '12:30', duration: 45, genre: 'Drama' },
    { title: 'CTV News at Noon', startTime: '12:00', duration: 30, genre: 'News' },
    { title: 'Dr. Phil', startTime: '13:00', duration: 60, genre: 'Talk Show' },
    { title: 'The Oprah Winfrey Show', startTime: '14:00', duration: 60, genre: 'Talk Show' },
    { title: 'CTV News at 6', startTime: '18:00', duration: 30, genre: 'News' },
    { title: 'Hockey Night in Canada', startTime: '19:00', duration: 180, genre: 'Sports' },
    { title: 'CTV Evening News', startTime: '22:30', duration: 30, genre: 'News' }
  ],
  'cbc': [
    { title: 'CBC News Network', startTime: '06:00', duration: 120, genre: 'News' },
    { title: 'Toddler Time', startTime: '08:00', duration: 60, genre: 'Children' },
    { title: 'The National', startTime: '09:00', duration: 60, genre: 'News' },
    { title: 'Coronation Street', startTime: '12:00', duration: 30, genre: 'Drama' },
    { title: 'The Passionate Eye', startTime: '13:00', duration: 60, genre: 'Documentary' },
    { title: 'Rick Mercer Report', startTime: '19:00', duration: 30, genre: 'Comedy' },
    { title: 'Degrassi: The Next Generation', startTime: '19:30', duration: 60, genre: 'Drama' },
    { title: 'The National (Late)', startTime: '21:00', duration: 60, genre: 'News' }
  ],
  'global': [
    { title: 'Global Morning News', startTime: '06:00', duration: 120, genre: 'News' },
    { title: 'Regis & Kelly', startTime: '09:00', duration: 60, genre: 'Talk Show' },
    { title: 'The Young and the Restless', startTime: '12:00', duration: 45, genre: 'Drama' },
    { title: 'Ellen', startTime: '13:00', duration: 60, genre: 'Talk Show' },
    { title: 'Jeopardy!', startTime: '14:00', duration: 30, genre: 'Game Show' },
    { title: 'Global National News', startTime: '17:30', duration: 30, genre: 'News' },
    { title: 'Wheel of Fortune', startTime: '18:00', duration: 30, genre: 'Game Show' },
    { title: 'Dancing with the Stars', startTime: '19:00', duration: 120, genre: 'Reality' }
  ],
  'city': [
    { title: 'CP24 Breakfast', startTime: '06:00', duration: 180, genre: 'News' },
    { title: 'CP24 Afternoon', startTime: '12:00', duration: 120, genre: 'News' },
    { title: 'Cheers', startTime: '14:00', duration: 30, genre: 'Comedy' },
    { title: 'WKRP in Cincinnati', startTime: '14:30', duration: 30, genre: 'Comedy' },
    { title: 'CP24 Evening', startTime: '17:00', duration: 120, genre: 'News' },
    { title: 'The X-Files', startTime: '19:00', duration: 60, genre: 'Drama' },
    { title: 'CP24 Late', startTime: '23:00', duration: 60, genre: 'News' }
  ],
  'tsn': [
    { title: 'TSN SportsCentre', startTime: '06:00', duration: 120, genre: 'Sports News' },
    { title: 'Curling', startTime: '08:00', duration: 180, genre: 'Sports' },
    { title: 'NBA Basketball', startTime: '13:00', duration: 180, genre: 'Sports' },
    { title: 'TSN Lunch', startTime: '12:00', duration: 60, genre: 'Sports News' },
    { title: 'CFL Football', startTime: '19:00', duration: 180, genre: 'Sports' },
    { title: 'TSN SportsCentre Late', startTime: '23:00', duration: 60, genre: 'Sports News' }
  ],
  'much': [
    { title: 'MuchMusic Video Show', startTime: '07:00', duration: 180, genre: 'Music' },
    { title: 'MTV Video Countdown', startTime: '10:00', duration: 120, genre: 'Music' },
    { title: 'The Rap Show', startTime: '13:00', duration: 120, genre: 'Music' },
    { title: 'Power Hour', startTime: '15:00', duration: 60, genre: 'Music' },
    { title: 'MuchmusictPriemiere', startTime: '19:00', duration: 60, genre: 'Music' },
    { title: 'The Wedge', startTime: '20:00', duration: 120, genre: 'Music' }
  ],
  'space': [
    { title: 'Stargate SG-1', startTime: '07:00', duration: 60, genre: 'Sci-Fi' },
    { title: 'Battlestar Galactica', startTime: '08:00', duration: 60, genre: 'Sci-Fi' },
    { title: 'The Twilight Zone', startTime: '13:00', duration: 60, genre: 'Sci-Fi' },
    { title: 'Quantum Leap', startTime: '14:00', duration: 60, genre: 'Sci-Fi' },
    { title: 'The Outer Limits', startTime: '19:00', duration: 60, genre: 'Sci-Fi' },
    { title: 'Eureka', startTime: '20:00', duration: 60, genre: 'Sci-Fi' }
  ],
  'discovery': [
    { title: 'Discovery News', startTime: '07:00', duration: 60, genre: 'Documentary' },
    { title: 'How It\'s Made', startTime: '08:00', duration: 60, genre: 'Documentary' },
    { title: 'MythBusters', startTime: '09:00', duration: 60, genre: 'Reality' },
    { title: 'Planet Earth', startTime: '13:00', duration: 60, genre: 'Documentary' },
    { title: 'Animal Planet: Most Extreme', startTime: '14:00', duration: 60, genre: 'Documentary' },
    { title: 'Discovery: After Dark', startTime: '21:00', duration: 120, genre: 'Reality' }
  ]
};

module.exports = {
  getGuideForChannel(channelId, date) {
    const scheduleForChannel = programs[channelId] || [];
    return {
      channel: channelId,
      date: date,
      programs: scheduleForChannel
    };
  },

  getCurrentProgram(channelId) {
    const scheduleForChannel = programs[channelId] || [];
    const now = moment();
    const currentHour = now.format('HH:mm');

    for (let program of scheduleForChannel) {
      const startTime = moment(program.startTime, 'HH:mm');
      const endTime = startTime.clone().add(program.duration, 'minutes');

      if (now.isBetween(startTime, endTime)) {
        return {
          channel: channelId,
          program: program,
          progress: now.diff(startTime, 'minutes'),
          timeRemaining: endTime.diff(now, 'minutes')
        };
      }
    }

    return {
      channel: channelId,
      program: scheduleForChannel[0],
      message: 'No program currently airing'
    };
  },

  getGuideForDate(date) {
    const channels = require('./channels');
    const guide = channels.map(channel => ({
      channel: channel.id,
      name: channel.name,
      date: date,
      programs: programs[channel.id] || []
    }));
    return guide;
  }
};
