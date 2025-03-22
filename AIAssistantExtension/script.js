document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    const startButton = document.getElementById('start-button');
  
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
  
      startButton.addEventListener('click', () => {
        status.textContent = 'Listening...';
        recognition.start();
      });
  
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        status.textContent = `You said: "${transcript}"`;
  
        if (transcript.includes('open youtube')) {
          window.open('https://www.youtube.com', '_blank');
        } else if (transcript.includes('open google')) {
          window.open('https://www.google.com', '_blank');
        } else if (transcript.includes('open email')) {
          window.open('https://mail.google.com', '_blank');
        } else if (transcript.includes('open twitter')) {
          window.open('https://x.com', '_blank');
        } else if (transcript.includes('open facebook')) {
          window.open('https://www.facebook.com', '_blank');
        } else if (transcript.includes('open instagram')) {
          window.open('https://www.instagram.com', '_blank');
        } else if (transcript.includes('open linkedin')) {
          window.open('https://www.linkedin.com', '_blank');
        } else if (transcript.includes('what time is it')) {
          status.textContent = `The current time is ${new Date().toLocaleTimeString()}.`;
        } else if (transcript.includes('what day is it')) {
          status.textContent = `Today is ${new Date().toLocaleDateString()}.`;
        } else if (transcript.includes('how are you')) {
          status.textContent = 'I am fine, thank you!';
        } else if (transcript.includes('what is your name')) {
          status.textContent = 'I am your AI assistant.';
        } else {
          const question = transcript;
          window.open(`https://www.google.com/search?q=${encodeURIComponent(question)}`, '_blank');
          status.textContent = `Searching for: "${question}"`;
        }
      };
  
      recognition.onerror = (event) => {
        status.textContent = 'Error occurred in recognition: ' + event.error;
      };
    } else {
      status.textContent = 'Speech recognition not supported in this browser.';
      startButton.disabled = true;
    }
  });