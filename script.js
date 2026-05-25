const apiKey = "5fe77504be09f524807e493d269910b5";
async function getWeather() {

  try {

    const city =
    document.getElementById("cityInput").value;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
      alert(data.message);
      return;
    }

    document.getElementById("cityName").innerText =
    data.name;

    document.getElementById("temperature").innerText =
    data.main.temp + "°C";

    document.getElementById("condition").innerText =
    data.weather[0].main;

    const icon = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const timezone = data.timezone;

    const localTime = new Date(
      new Date().getTime() + timezone * 1000
    );

    document.getElementById("time").innerText =
    localTime.toUTCString().slice(17,25);

  }

  catch(error) {
    console.log(error);
    alert("Something went wrong");
  }
}
