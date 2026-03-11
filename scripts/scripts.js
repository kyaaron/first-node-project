const pageButton = document.querySelector(".page-button");
const spellsButton = document.querySelector("#spells-button");
const monstersButton = document.querySelector("#monsters-button");

async function makeSpellsRequest(type) {
    const userInputValue = document.querySelector("#user-textbox").value;
    const response = await fetch(`https://www.dnd5eapi.co/api/2014/${type}/${formatUserInput(userInputValue)}`);
    const data = await response.json();

    if (type === "spells") {
        document.querySelector("#content-section").innerHTML = `
            <h2>Name: ${data.name}</h2>
            <p>Level: ${data.level}</p>
            <p>School: ${data.school.name}</p>
            <p>Class: ${data.classes.name}</p>
            <p>Description: ${data.desc}</p>
        `
    }

    if (type === "monsters") {
        document.querySelector("#content-section").innerHTML = `
            <h2>Name: ${data.name}</h2>
            <p>Type: ${data.type}</p>
            <p>Health: ${data.hit_points}</p>
            <p>Size: ${data.size}</p>
            <p>Strength: ${data.strength}</p>
            <p>Dexterity: ${data.dexterity}</p>
            <p>Constitution: ${data.constitution}</p>
            <p>Intelligence: ${data.intelligence}</p>
            <p>Wisdom: ${data.wisdom}</p>
            <p>Charisma: ${data.charisma}</p>
        `
    }
}

const formatUserInput = input => {
    return input.split(" ").join("-").toLowerCase();
}