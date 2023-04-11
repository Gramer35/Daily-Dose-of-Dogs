function getApi() {
    // fetch requests get a random dog image and a random dog fact
    var imageUrl = 'https://dog.ceo/api/breeds/image/random';
  
    fetch(imageUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //Set the src attribute of the img element to the retrieved image
        console.log(data)
        document.getElementById('pic').setAttribute('src', data.message);
  
        picbtn = document.getElementById('picBtn');
        picbtn.addEventListener('click', function () {
          fetch(imageUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              //Set the src attribute of the img element to the retrieved image
              console.log(data)
              document.getElementById('pic').setAttribute('src', data.message);
            })
        })
      })
      .catch(function (error) {
        console.error(error);
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

    const landingPage = './JavaScript/index.html'
    location.assign(landingPage);
    
  }


  toGifs.addEventListener('click', moveToGifs);
  toPhotos.addEventListener('click', moveToPhotos);
  toAdopt.addEventListener('click', moveToAdopt);
  toLanding.addEventListener('click', moveToLanding);
