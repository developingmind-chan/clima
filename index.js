let ciudad = "Rocha";
let api_key = "697f098a72f15eb12bc95b17cd8e13b6";

let weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_key}`;

fetch(weather_url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }
    return response.json();
  })
  .then((datosClima) => {
    let clima = datosClima.weather[0].description;
    let temperaturaEnKelvin = datosClima.main.temp;
    let temperaturaEnCelsius = temperaturaEnKelvin - 273;
    let objetoClima = document.getElementById("parrafo");
    objetoClima.innerHTML = `El clima en ${ciudad} es ${clima} con una temperatura de ${temperaturaEnCelsius}°C.`;
    console.log(`El clima en ${ciudad} es ${clima} con una temperatura de ${temperaturaEnCelsius}°C.`);
  });
