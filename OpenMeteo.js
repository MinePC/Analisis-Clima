const input = document.querySelector("input")
const button = document.querySelector("button")
const LatitudContainer = document.querySelector(".latitud");

button.addEventListener("click", (e) => {
  e.preventDefault();
  traerlatitud(input.value);
});


function traerlatitud(latitud) {
  fetch(`https://api.open-meteo.com/v1/forecast?${latitud}&hourly=temperature_2m`)
  .then((res) => res.json())
  .then((data)=>{
    crearLatitud(data);
  })
}

function crearLatitud(latitud){
  const h3 = document.createElement('h3')
  h3.textContent = latitud.hourly.temperature_2m

  const div = document.createElement('div')

  div.appendChild(h3)
  LatitudContainer.appendChild(div)
}
