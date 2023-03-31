function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://dog.ceo/api/breeds/image/random';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      })
    }
getApi();