import React, { useEffect, useState } from "react";
import axios from "axios";

const KEY = "e6fff67cac53824cfa310c55ffe4a8ad";

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [iconUrl, setIconUrl] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchWeather = async (lat, lon) => {
        try {
            setError("");
            setLoading(true);

            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric&lang=kr`;

            const res = await axios.get(URL);
            setWeather(res.data);

            const iconCode = res.data.weather[0].icon;
            const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            setIconUrl(iconURL);
        } catch (err) {
            setError("날씨 정보를 가져올 수 없습니다: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    fetchWeather(latitude, longitude);
                },
                (err) => {
                    setError("위치 권한 필요: " + err.message);
                },
                options
            );
        } else {
            setError("이 브라우저는 위치 정보를 지원하지 않습니다.");
        }
    }, []);

    return (
        <div id="weather-page">
            {loading && <p>로딩 중...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!weather && !error && <p>위치 정보를 기다리는 중...</p>}

            {weather && (
                <>
                    <h2>현재 위치 기준 날씨</h2>
                    <p>도시: {weather.name}</p>
                    <p>기온: {weather.main.temp}℃</p>
                    <p>체감 온도: {weather.main.feels_like}℃</p>
                    <p>날씨: {weather.weather[0].description}</p>
                    {iconUrl && <img src={iconUrl} alt="weather-icon" />}
                </>
            )}
        </div>
    );
};

export default Weather;
