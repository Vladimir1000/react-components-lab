import './WeatherForecast.css'

function WeatherForecast(props) {
    console.log(props)
    return (
        <div className="weather-container">
            {props.weatherForecasts.map((forecast, index) => (
                <div className="weather" key={index}>
                    <h2>{forecast.day}</h2>
                    <img src={forecast.img} alt={forecast.imgAlt} />
                    <p><span>conditions: </span>{forecast.conditions}</p>
                    <p><span>time: </span>{forecast.time}</p>
                </div>
        ))}
        </div>
    )
}

export default WeatherForecast;

