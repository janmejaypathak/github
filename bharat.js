function enterSite() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('main-site').classList.remove('hidden');
  }
  
  function greetUser() {
    const greeting = document.getElementById('greeting');
    greeting.textContent = "Namaste 🙏 I’m Bharat AI — how can I help you today?";
    greeting.classList.remove('hidden');
  }
  