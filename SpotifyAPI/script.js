const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const results = document.getElementById('results');

// Constant variables
const clientId = 'c7ca917f4c4e4dd487683e38a8c91029';
const redirectURI = 'http://127.0.0.1:5500/Practice/SpotifyAPI/index.html';
const baseURL = 'https://api.spotify.com/v1'

let token = null;
let expireTime = null;

const authorisationURL = 'https://accounts.spotify.com/authorize'
    + `?client_id=${clientId}`
    + '&response_type=token'
    + `&redirect_uri=${redirectURI}`;

button.addEventListener('click', () => {
    // Talk to Spotify to get the access token
    // Will go to Spotify and come back to our page, attaching both the token and the expiration time at the end of the URL
    // window.open(authorisationURL, '_blank', 'popup,height=480,width=430')
    window.location = authorisationURL;
})

// Stores the token and expiration time in their respective variables. Retrieves info from the API
button2.addEventListener('click', () => {
    token = window.location.href.match(/access_token=([^&]*)/)[1];
    expireTime = window.location.href.match(/expires_in=([^&]*)/)[1];

    fetch(`${baseURL}/search?q=Madonna&type=track`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error('Error, bitch!!');
        }, networkError => console.log(networkError))
        .then(response => response.tracks.items.map(item => item.id))
        // At this point, we have an array with 20 song's id
        .then(songs => {
            fetch(`${baseURL}/tracks/${songs[12]}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw Error('Everything is BAD!')
                }, networkError => console.log(networkError))
                .then(response => console.log(response))
        }
        )
})

//Re
button3.addEventListener('click', () => {
    token = window.location.href.match(/access_token=([^&]*)/)[1];

    // No expire time for this experiment

    const response = fetch(`${baseURL}/search?type=track&q=Miles%Davis`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(response => response.ok ? response.json() : undefined)
        .then(response => {
            const result = response.tracks.items.map(track => track);
            console.log(result)
            return result.lenght === 0 ? 'No tracks founded' : result;
        })
})