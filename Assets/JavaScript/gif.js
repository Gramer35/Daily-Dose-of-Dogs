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


const toGifs = document.getElementById('gifs');
const toPhotos = document.getElementById('photos');
const toAdopt = document.getElementById('adopt');
const toLanding = document.getElementById('landingPage');


function moveToGifs(event) {
  event.preventDefault();

  const gifPage = './GifPage.html'
  location.assign(gifPage);
  
}

function moveToPhotos(event) {
  event.preventDefault();

  const photoPage = './Photos.html'
  location.assign(photoPage);
  
}

// correct this once adopt page is done - coming soon
function moveToAdopt(event) {
  event.preventDefault();

  const adoptPage = './AdoptPage.html'
  location.assign(adoptPage);
  
}

// correct this once landing page is done
function moveToLanding(event) {
  event.preventDefault();

  const landingPage = '/index.html'
  location.assign(landingPage);
  
}


toGifs.addEventListener('click', moveToGifs);
toPhotos.addEventListener('click', moveToPhotos);
toAdopt.addEventListener('click', moveToAdopt);
toLanding.addEventListener('click', moveToLanding);