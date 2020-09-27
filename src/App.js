import React ,{ useState } from 'react';


const api = {
    key: '696f181c684503377938c61397189cd5',
    base: 'https://api.openweathermap.org/data/2.5/'
}
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
}

function App () {

    const [query , setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if(evt.key === 'Enter'){
            fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setQuery('');
                setWeather(result)
            })
        }
    }
    return(
        <div className={ (typeof weather.main != "undefined") ? (weather.main.temp > 25+273.15) ? "app warm" : "app" : "app"}  >
            <main className="search-box">
                <input type="text" onChange={e => {console.log('1');setQuery(e.target.value)}} value={query} className="search-bar" placeholder="Search..." onKeyPress={search}/>
                {(typeof weather.main != "undefined") ? ( 
                <div>
                    <div className="location-box">
                        <div className="location">{weather.name},{weather.sys.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">{Math.round(weather.main.temp-273.15)}°c</div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                    </div>
                ) : ('')}
            </main>
        </div>
    );
}


export default App;