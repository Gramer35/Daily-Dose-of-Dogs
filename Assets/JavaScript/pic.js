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