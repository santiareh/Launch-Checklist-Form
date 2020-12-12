// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      const fuelLevelNumber = Number(fuelLevel);
      const cargoMassNumber = Number(cargoMass);
      if (typeof pilotName.value !== 'string'){
         alert("Pilot value must be a string")
         event.preventDefault();
      } else if (typeof copilotName.value !== 'string'){
         alert("Co-Pilot value must be a string")
         event.preventDefault();
      } else if (isNaN(fuelLevelNumber) === false) {
         alert("Fuel Level value must be a number")
         event.preventDefault();
      } else if (isNaN(cargoMassNumber) === false) {
         alert("Cargo Mass value must be a number")
         event.preventDefault();
      }
   });
});

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      const pilotStatus = document.getElementById("pilotStatus");
      const coPilotStatus = document.getElementById("copilotStatus");
      const faulyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");
      let fuelStatus = document.getElementById("fuelStatus");

      pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready`;
      coPilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is Ready`;

      if(fuelLevelNumber < 1000) {
         launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
         launchStatus.style.color = "red";
         fuelStatus.innerHTML = `Not Enough Fuel`;
         faulyItems.style.visibility = "visible";
      } else {
         launchStatus.innerHTML = `Shuttle Is Ready For Launch`;
         launchStatus.style.color = "green";
      };

      if (cargoMassNumber > 10000) {
         launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
         launchStatus.style.color = "red";
         cargoStatus.innerHTML = `Too Much Mass`;
         faultyItems.style.visibility = "visible";
      };
   });
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json){
      let data = json();
      let missionTarget = document.getElementById("missionTarget");
      //This block of code shows how to format the HTML once you fetch some planetary JSON!
      missionTarget.innerHTML = `
         <h2>Mission Destination</h2>;
         <ol>
         <li>Name: ${data.name}</li>
         <li>Diameter: ${data.diameter}</li>
         <li>Star: ${data.star}</li>
         <li>Distance from Earth: ${data.distance}</li>
         <li>Number of Moons: ${data.moons}</li>
         </ol>
         <img src="${data.image}"></img>`
   });
   console.log(response);
});