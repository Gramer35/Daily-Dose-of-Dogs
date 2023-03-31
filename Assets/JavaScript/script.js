function getApi() {
    // fetch requests get a random dog image and a random dog fact
    var imageUrl = 'https://dog.ceo/api/breeds/image/random';
    var factUrl = 'http://dog-api.kinduff.com/api/facts';
  
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
  
    fetch(factUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Select a random fact from the array of facts and set the text content of the fact element to it
        var factIndex = Math.floor(Math.random() * data.facts.length);
        document.getElementById('dog-fact').textContent = data.facts[factIndex];
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  
  // Call the getApi function when the page loads
  window.addEventListener('load', getApi);
  
  //Updated  
  