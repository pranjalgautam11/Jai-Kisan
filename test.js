// Hover Function for Mobile
document.addEventListener('touchstart', function() {}, true);

// Variables for API & Location Heading
const apiKey = '10dc4a9025b811536cde5459c533e738';
const apiWeather = 'https://api.openweathermap.org/data/2.5/weather';
const apiOneCall = 'https://api.openweathermap.org/data/2.5/onecall';
let units = 'imperial';
const locationHeading = document.querySelector('#location');
const geolocationButton = document.querySelector('#geolocation-btn');

// Display High Alert City (Default)
const alertcityTemps = document.querySelectorAll('.alertglobal-temps');
const alertcityWeatherDesc = document.querySelectorAll('.alertglobal-descriptions');
const alertcityNames = document.querySelectorAll('.alertglobal-name');
const alertcountryNames = document.querySelectorAll('.alertcountry-name');
const alertcities = [
    'Mumbai',
    'Delhi',
    'Agra',
    'Los Angeles',
    'Dubai',
];

// Shuffle Array for Randomized Cities
alertcities.sort(() => Math.random() - 0.5);

// Default Information for Global Forecast Section
function displayalertcity() {
    for (let i = 0; i < 5; i++) {
        axios
            .get(`${apiWeather}?q=${alertcities[i]}&appid=${apiKey}&units=${units}`)
            .then(response => {
                const data = response.data;
                alertcityNames[i].innerHTML = `${data.name}`;
                alertcountryNames[i].innerHTML = `${data.sys.country}`;
                alertcityTemps[i].innerHTML = Math.round(data.main.temp);
                alertcityWeatherDesc[i].innerHTML = `${data.weather[0].description}`;
                axios.get('icons.json').then(icon => {
                    for (let k = 0; k < icon.data.length; k++) {
                        if (
                            data.weather[0].id === icon.data[k].id &&
                            data.weather[0].icon === icon.data[k].icon
                        ) {
                            let globalWeatherIcon = document.querySelectorAll('.alertglobal-icon');
                            globalWeatherIcon[i].setAttribute('src', icon.data[k].src);
                            globalWeatherIcon[i].setAttribute('alt', icon.data[k].alt);
                        }
                    }
                });
            });
            
    }
}


// Click on "Other Cities" To Display Weather For That Region
let alertglobalContainers = document.querySelectorAll('.alertglobal-item');
for (let i = 0; i < 5; i++) {
    alertglobalContainers[i].addEventListener('click', () => {
        updateWeatherByName(alertcities[i]);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}
// Default Location to Show
displayalertcity();






