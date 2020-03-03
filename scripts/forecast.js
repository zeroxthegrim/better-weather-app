const apiKey = "husUuYYTpotRJFWSUamKoFLj2mPJe24j";

const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

const getWeather = async (key) => {

    const base = `http://dataservice.accuweather.com/currentconditions/v1/${key}`;
    const query = `?apikey=${apiKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}



