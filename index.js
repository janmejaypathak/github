function fetchData() {
  fetch('/data-endpoint') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); 
    })
    .then(data => {
      document.getElementById('data-container').textContent = data;
    })
    .catch(error => {
      console.error('Fetch error:', error);
      document.getElementById('data-container').textContent = 'Error loading data.';
    });
}


setInterval(fetchData, 5000);


fetchData();
