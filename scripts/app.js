const form = document.querySelector("form");
const details = document.querySelector(".details");
const icon = document.querySelector(".icon img");
const card = document.querySelector(".card");
const timeImg = document.querySelector(".time");




const chooseRandomImage = (imgArr) => {
    return imgArr[Math.floor(Math.random() * imgArr.length)];
}

const updateUI = async (city) => {
    const cityInfo = await getCity(city);
    const weatherInfo = await getWeather(cityInfo.Key);

    details.innerHTML = `
        <h5 class="my-3">${cityInfo.EnglishName}</h5>
        <div class="my-3">${weatherInfo.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherInfo.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;    
    
    // sets icon and image
    icon.setAttribute("src", `img/icons/${weatherInfo.WeatherIcon}.svg`);

    if (weatherInfo.IsDayTime) {
        timeImg.setAttribute("src", `img/day/${chooseRandomImage(dayImages)}`);
    } else {
        timeImg.setAttribute("src", `img/night/${chooseRandomImage(nightImages)}`);
    }

    // removes "d-none" class if it is present
    if (card.classList.contains("d-none")) {
        card.classList.remove("d-none");
    }

};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputValue = form.city.value.trim();
    
    updateUI(inputValue);

    form.reset();
});