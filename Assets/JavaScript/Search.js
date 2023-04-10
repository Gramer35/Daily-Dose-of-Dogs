
document.getElementById('searchbtn').addEventListener('click', event => {
    event.preventDefault();
    let gifURL = 'https://api.giphy.com/v1/gifs/search?api_key=FN2y1TfECIL5ESAWifTW0uzZCqrkRJQg&q='
    let userInput = document.getElementById('search').value.trim();
    gifURL = gifURL.concat(userInput);
    console.log(gifURL);

    //Fetch for search
    fetch(gifURL)
    .then(response => response.json())
    .then(content => {
        console.log(content);
        console.log('META', content.meta);
        let i = 0;
        document.getElementById('gif').setAttribute('src', content.data[i].images.original.url);

        let gifbtn = document.getElementById('gifbtn2');
        gifbtn.style.visibility='visible';

    })
    .catch(err =>{
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
toSearch.addEventListener('click', moveToSearch);