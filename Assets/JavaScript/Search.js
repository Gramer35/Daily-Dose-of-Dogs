
document.getElementById('searchbtn').addEventListener('click', event => {
  event.preventDefault();
  let gifURL = 'https://api.giphy.com/v1/gifs/search?api_key=FN2y1TfECIL5ESAWifTW0uzZCqrkRJQg&q='
  let userInput = document.getElementById('search').value.trim();
  localStorage.setItem('search', userInput)
  gifURL = gifURL.concat(userInput);
  let i = 0;
  fetch(gifURL)
      .then(response => response.json())
      .then(content => {
          document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);
          let gifbtn = document.getElementById('gifbtn2');
          gifbtn.style.visibility = 'visible';
          document.getElementById('search').value = '';
          let nextbtn = document.getElementById('gifbtn2')
          nextbtn.addEventListener('click', function () {
              i++;
              document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);
          });
      }).catch(err => {
          console.error(err);
      }) 
})

let historybtn = document.getElementById('historybtn');
historybtn.addEventListener('click', function () {
  let history2 = localStorage.getItem('search');
  console.log(history2);
  document.getElementById('search').value = history2;
  let gifURL = 'https://api.giphy.com/v1/gifs/search?api_key=FN2y1TfECIL5ESAWifTW0uzZCqrkRJQg&q='
  let userInput = document.getElementById('search').value.trim();
  localStorage.setItem('search', userInput)
  gifURL = gifURL.concat(userInput);
  let i = 0;
  fetch(gifURL)
      .then(response => response.json())
      .then(content => {
          document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);
          let gifbtn = document.getElementById('gifbtn2');
          gifbtn.style.visibility = 'visible';
          document.getElementById('search').value = '';
          let nextbtn = document.getElementById('gifbtn2')
          nextbtn.addEventListener('click', function () {
              i++;
              document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);
          });
      }).catch(err => {
          console.error(err);
      }) 
})



const toGifs = document.getElementById('gifs');
const toPhotos = document.getElementById('photos');
const toAdopt = document.getElementById('adopt');
const toLanding = document.getElementById('landingPage');
const toSearch = document.getElementById('searchbtn');


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