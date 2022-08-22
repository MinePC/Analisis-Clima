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
$(function() {
    "use strict";

     // chart 1

		  var ctx = document.getElementById('chart1').getContext('2d');



      var myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
					datasets: [{
						label: 'Temperatura de llegada',
						data: [19.3,19,18,17.2,16.3,16,16.3,17.1,18.2,19.8,20.9,21.7,22.8,23.3,23.8,23.9,23.3,22.7,21.9,20.3,19.2,17.8,17,16.5,16.1,15.7,15.5,15.3,14.7,14.5,16.1,18.6,20.7,22.2,22.4,22.6,23.1,23.7,23.3,23,22.3,21.6,20.9,20,19.5,18.7,18.3,17.5,16.9,16.4,16.1,15.9,16,16,16.3,16.8,17.5,18.1,18.1,18.5,19,19.7,20.2,20.3,20.5,20.3,19.6,18.7,18,17.4,17.6,17,16.5,16.2,16.2,16.1,16,16.3,17.2,18.6,20.8,21.9,23.4,24.8,25.7,26.1,26.4,26.7,26.6,26,24.2,22.7,21.7,20.8,20.1,19.6,19.3,19.1,19.1,19.2,19.3,19.5,19.9,20.5,21.1,22.3,23.4,24.8,26.2,26.9,27.4,27.5,27.1,26.4,25.3,24.3,23.3,22,21.4,20.9,20.4,20.2,20.1,20.1,20.2,20.4,21.1,22.4,24,26.1,27.3,28.3,29.2,29.3,29.1,28.5,27.7,26.5,25.4,25.4,24.1,22.7,22,21.6,21.1,20.8,20.5,20.4,20.4,20.6,21.4,22.8,24.7,26.7,27.4,27.7,27.8,27.8,27.6,27.2,26.9,26.6,25.9,24.8,23.5,22.1,21.7,21.7],
						backgroundColor: '#fff',
						borderColor: "transparent",
						pointRadius :"0",
						borderWidth: 3
					}, {
						label: 'Temperatura de salida',
						data: [27.6,27.7,28,28.4,28.4,28.6,28.6,28.6,28.6,28.4,28.5,28.6,28.6,28.6,28.5,28.5,28.5,28.5,28.3,28.3,28.2,27.9,27.8,27.7,27.8,28,28.3,28.5,28.5,28.6,28.6,28.5,28.5,28.6,28.4,28.3,28.4,28.2,28,27.9,28.4,28.3,28.4,28.3,28.3,28.3,28.4,28.2,28.3,28.2,28,27.9,28,28,28,27.9,28,28.1,28.1,28.1,28.1,27.8,27.7,27.9,27.8,27.9,28,28,28.1,28.3,28.4,28.5,28.5,28.5,28.4,28.5,28.5,28.5,28.3,28.2,28.2,28,27.8,27.7,27.6,27.8,27.9,28,28.1,28.1,28.1,28.1,28,27.9,27.8,27.8,27.8,27.9,28.1,28.3,28.3,28.3,28.3,28.3,28.4,28.4,28.3,28.2,28,28,28.1,28.2,28.3,28.3,28.3,28.2,28.2,28.1,28.1,28.1,28,28,27.9,27.8,27.8,27.8,27.8,27.8,27.7,27.6,27.6,27.6,27.6,27.7,27.8,28,28.1,28.1,28.1,28.3,28.2,28.1,28.1,28.2,28.3,28.2,28.2,28.1,28,27.9,27.8,27.8,27.7,27.6,27.7,27.9,28.1,28.3,28.5,28.6,28.6,28.6,28.5,28.4,28.3,28.1,28.1,28],
						backgroundColor: "rgba(255, 255, 255, 0.25)",
						borderColor: "transparent",
						pointRadius :"0",
						borderWidth: 1
					}]
				},
			options: {
				maintainAspectRatio: false,
				legend: {
				  display: false,
				  labels: {
					fontColor: '#ddd',
					boxWidth:40
				  }
				},
				tooltips: {
				  displayColors:false
				},
			  scales: {
				  xAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#ddd'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					},
				  }],
				   yAxes: [{
					ticks: {
						beginAtZero:true,
						fontColor: '#ddd'
					},
					gridLines: {
					  display: true ,
					  color: "rgba(221, 221, 221, 0.08)"
					},
				  }]
				 }

			 }
			});


    // chart 2

		var ctx = document.getElementById("chart2").getContext('2d');
			var myChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["Direct", "Affiliate", "E-mail", "Other"],
					datasets: [{
						backgroundColor: [
							"#ffffff",
							"rgba(255, 255, 255, 0.70)",
							"rgba(255, 255, 255, 0.50)",
							"rgba(255, 255, 255, 0.20)"
						],
						data: [5856, 2602, 1802, 1105],
						borderWidth: [0, 0, 0, 0]
					}]
				},
			options: {
				maintainAspectRatio: false,
			   legend: {
				 position :"bottom",
				 display: false,
				    labels: {
					  fontColor: '#ddd',
					  boxWidth:15
				   }
				}
				,
				tooltips: {
				  displayColors:false
				}
			   }
			});




   });
