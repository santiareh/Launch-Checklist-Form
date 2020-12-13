// Write your JavaScript code here!
window.addEventListener("load", function() {
   const pilotStatus = document.getElementById("pilotStatus");
   const coPilotStatus = document.getElementById("copilotStatus");
   const faulyItems = document.getElementById("faultyItems");
   const launchStatus = document.getElementById("launchStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      //Verify all fields are completed
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      const fuelLevelNumber = Number(fuelLevel.value);
      const cargoMassNumber = Number(cargoMass.value);
      //Verify fields are correct types
      if (typeof pilotName.value !== 'string'){
         alert("Pilot value must be a string")
         event.preventDefault();
      } else if (typeof copilotName.value !== 'string'){
         alert("Co-Pilot value must be a string")
         event.preventDefault();
      } else if (isNaN(fuelLevelNumber) === true) {
         alert("Fuel Level value must be a number")
         event.preventDefault();
      } else if (isNaN(cargoMassNumber) === true) {
         alert("Cargo Mass value must be a number")
         event.preventDefault();
      } else {
         //Update fields according to inputs
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready`;
      coPilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is Ready`;
      if(fuelLevelNumber < 10000 && cargoMassNumber < 10000) {
         launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
         launchStatus.style.color = "red";
         cargoStatus.innerHTML = `Cargo Mass Low Enough`;
         fuelStatus.innerHTML = `Fuel Level Too Low`;
      } else if(fuelLevelNumber > 10000 && cargoMassNumber > 10000) {
         launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
         launchStatus.style.color = "red";
         cargoStatus.innerHTML = `Cargo Mass Too Heavy`;
         fuelStatus.innerHTML = `Fuel Level High Enough`;
      } else if(fuelLevelNumber < 10000 && cargoMassNumber > 10000) {
         launchStatus.innerHTML = `Shuttle Not Ready For Launch`;
         launchStatus.style.color = "red";
         cargoStatus.innerHTML = `Cargo Mass Too Heavy`;
         fuelStatus.innerHTML = `Fuel Level Too Low`;
      } else {
         launchStatus.innerHTML = `Shuttle Is Ready For Launch`;
         launchStatus.style.color = "green";
         cargoStatus.innerHTML = `Cargo Mass Low Enough`;
         fuelStatus.innerHTML = `Fuel Level High Enough`;
      };
   };
   });
});

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json){
      let random = Math.floor(Math.random() * 6);
      let data = json[random];
      let missionTarget = document.getElementById("missionTarget");
      //This block of code shows how to format the HTML once you fetch some planetary JSON!
      missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         <li>Name: ${data.name}</li>
         <li>Diameter: ${data.diameter}</li>
         <li>Star: ${data.star}</li>
         <li>Distance from Earth: ${data.distance}</li>
         <li>Number of Moons: ${data.moons}</li>
         </ol>
         <img src="${data.image}"></img>`
   });
   //console.log(response);
});