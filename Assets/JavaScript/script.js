function getApi() {
    // fetch requests get a random dog image and a random dog fact
    var imageUrl = 'https://dog.ceo/api/breeds/image/random';
  
    fetch(imageUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Set the src attribute of the img element to the retrieved image
        document.getElementById('dog-image').setAttribute('src', data.message);
      })
      .catch(function (error) {
        console.error(error);
      });
  
    //Section for Giphy JS
    let gifURL = 'https://api.giphy.com/v1/gifs/search?api_key=FN2y1TfECIL5ESAWifTW0uzZCqrkRJQg&q=cute dogs';
    
    gifBoxes = document.querySelectorAll('.gif');
    console.log(gifBoxes);
    
    fetch(gifURL)
      .then(response => response.json())
      .then(content => {
        //Logs to check arrays and status
        console.log(content.data);
        console.log('META', content.meta);
        gifBoxes.forEach((e) => {
          i = Math.floor(Math.random() * content.data.length)
          e.setAttribute('src', content.data[i].images.downsized.url);
        });
      })
      .catch(err =>{
        console.error('error');
      });  
  
    }
  
  // Call the getApi function when the page loads
  window.addEventListener('load', getApi);
  //Updated 

  