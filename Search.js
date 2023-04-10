
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
