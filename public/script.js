// Global Variables
let currentChannel = 'ctv';
let channels = [];
let currentProgram = null;
let isShowingCommercial = false;
let isGuideOpen = false;

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  fetchChannels();
  setupChannelButtons();
  setupControlButtons();
  updateTime();
  setInterval(updateTime, 1000);
  tuneToChannel('ctv');
}

// Fetch channels from server
function fetchChannels() {
  fetch('/api/channels')
    .then(response => response.json())
    .then(data => {
      channels = data;
    })
    .catch(error => console.error('Error fetching channels:', error));
}

// Setup channel button event listeners
function setupChannelButtons() {
  const channelBtns = document.querySelectorAll('.channel-btn');
  channelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const channelId = btn.getAttribute('data-channel');
      tuneToChannel(channelId);
    });
  });
}

// Setup control button event listeners
function setupControlButtons() {
  document.getElementById('guideBtn').addEventListener('click', openGuide);
  document.getElementById('closeGuideBtn').addEventListener('click', closeGuide);
  document.getElementById('volumeBtn').addEventListener('click', toggleVolume);
  document.getElementById('favBtn').addEventListener('click', toggleFavorites);
}

// Tune to a specific channel
function tuneToChannel(channelId) {
  currentChannel = channelId;
  
  // Update active button
  document.querySelectorAll('.channel-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-channel="${channelId}"]`).classList.add('active');
  
  // Fetch current program
  fetchCurrentProgram(channelId);
  
  // Simulate commercial break randomly (20% chance)
  if (Math.random() < 0.2) {
    setTimeout(showCommercial, 2000);
  }
}

// Fetch current program from server
function fetchCurrentProgram(channelId) {
  fetch(`/api/current/${channelId}`)
    .then(response => response.json())
    .then(data => {
      currentProgram = data.program;
      displayProgram(data);
    })
    .catch(error => console.error('Error fetching program:', error));
}

// Display program on screen
function displayProgram(data) {
  const display = document.getElementById('programDisplay');
  const channel = channels.find(ch => ch.id === currentChannel) || {};
  
  let html = `
    <div class="channel-name">${channel.name || 'Unknown Channel'}</div>
    <h2>${data.program.title}</h2>
    <div class="genre">${data.program.genre}</div>
    <div class="time-info">${data.program.startTime} | ${data.program.duration} mins</div>
  `;
  
  if (data.timeRemaining !== undefined) {
    html += `<div class="time-info">Next up in ${data.timeRemaining} minutes...</div>`;
  }
  
  display.innerHTML = html;
}

// Show commercial
function showCommercial() {
  fetch(`/api/commercials/${currentChannel}`)
    .then(response => response.json())
    .then(commercials => {
      if (commercials.length > 0) {
        const ad = commercials[Math.floor(Math.random() * commercials.length)];
        displayCommercial(ad);
      }
    })
    .catch(error => console.error('Error fetching commercials:', error));
}

// Display commercial modal
function displayCommercial(ad) {
  document.getElementById('adTitle').textContent = ad.title;
  document.getElementById('adDescription').textContent = ad.description;
  document.getElementById('adYear').textContent = `📅 ${ad.year}`;
  
  const commercialModal = document.getElementById('commercialModal');
  commercialModal.classList.add('show');
  
  let timeLeft = ad.duration;
  const timerInterval = setInterval(() => {
    document.getElementById('adTimer').textContent = `${timeLeft}s`;
    timeLeft--;
    
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      commercialModal.classList.remove('show');
      isShowingCommercial = false;
    }
  }, 1000);
  
  isShowingCommercial = true;
}

// Open TV guide
function openGuide() {
  const guideModal = document.getElementById('guideModal');
  const guideContainer = document.getElementById('guideContainer');
  
  guideContainer.innerHTML = '<div class="loading">Loading guide...</div>';
  guideModal.classList.add('show');
  isGuideOpen = true;
  
  const today = new Date().toISOString().split('T')[0];
  
  fetch(`/api/guide/${today}`)
    .then(response => response.json())
    .then(data => {
      displayGuide(data);
    })
    .catch(error => {
      console.error('Error fetching guide:', error);
      guideContainer.innerHTML = '<p>Error loading guide</p>';
    });
}

// Display TV guide
function displayGuide(guideData) {
  const guideContainer = document.getElementById('guideContainer');
  let html = '';
  
  guideData.forEach(channel => {
    html += `
      <div class="channel-guide">
        <h3>📍 ${channel.name}</h3>
        ${channel.programs.map(program => `
          <div class="program-item">
            <div class="program-title">${program.title}</div>
            <div class="program-time">${program.startTime}</div>
            <div class="program-genre">${program.genre}</div>
          </div>
        `).join('')}
      </div>
    `;
  });
  
  guideContainer.innerHTML = html;
}

// Close guide
function closeGuide() {
  document.getElementById('guideModal').classList.remove('show');
  isGuideOpen = false;
}

// Toggle volume (placeholder)
function toggleVolume() {
  alert('🔊 Volume: 75%\nThis is a retro emulator - sound simulation only!');
}

// Toggle favorites (placeholder)
function toggleFavorites() {
  alert('⭐ Favorite channels saved!\nFeature coming soon...');
}

// Update time display
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  
  document.getElementById('timeDisplay').textContent = `🕐 ${timeString}`;
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  const guideModal = document.getElementById('guideModal');
  const commercialModal = document.getElementById('commercialModal');
  
  if (event.target === guideModal) {
    closeGuide();
  }
  
  if (event.target === commercialModal) {
    commercialModal.classList.remove('show');
  }
});

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if (event.key === 'g' || event.key === 'G') {
    if (isGuideOpen) closeGuide();
    else openGuide();
  }
  if (event.key === 'Escape' && isGuideOpen) {
    closeGuide();
  }
});
