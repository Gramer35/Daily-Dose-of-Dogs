function getApi() {
  // Fetch Request for Dog Gifs
  let gifURL = 'https://api.giphy.com/v1/gifs/search?api_key=FN2y1TfECIL5ESAWifTW0uzZCqrkRJQg&q=cute dogs';

  fetch(gifURL)
    .then(response => response.json())
    .then(content => {
      //Logs to check arrays and status
      console.log(content.data);
      console.log('META', content.meta);
      // i = Math.floor(Math.random() * content.data.length);
      let i = 0;
      document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);
      gifbtn = document.getElementById('gifbtn');
      gifbtn.addEventListener('click', function () {
        i++;
        document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);
      });
    })
    .catch(err => {
      console.error('error');
    });

}

// Call the getApi function when the page loads
window.addEventListener('load', getApi);
