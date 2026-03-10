const pageButton = document.querySelector("#page-button");

async function makeRequest() {
    const userInputValue = document.querySelector("#user-textbox").value;
    const response = await fetch(`https://www.dnd5eapi.co/api/2014/spells/${userInputValue}`);
    const data = await response.json();

    console.log(data);

    document.querySelector("#content-section").innerHTML = `
      <h2>Name: ${data.name}</h2>
      <p>Level: ${data.level}</p>
      <p>School: ${data.school.name}</p>
      <p>Class: ${data.classes.name}</p>
      <p>Description: ${data.desc}</p>
    `
}

pageButton.addEventListener("click", makeRequest);