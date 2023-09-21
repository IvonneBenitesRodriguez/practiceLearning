import PoliticianCollection from "./js/app.js";
import AppPoliticianCollection from "./js/display.js";


const politicianCollection = new PoliticianCollection();
const appPoliticianCollection = new AppPoliticianCollection();

appPoliticianCollection.displayPoliticians();

const form = document.getElementById('formPart');
const submitButton = form.querySelector('button[type="submit"]');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const politicianPartyInput = document.getElementById('partei');
    const countryInput = document.getElementById('country');
    const scoreInput = document.getElementById('score');

    const name = nameInput.value.trim();
    const politicianParty = politicianPartyInput.value.trim();
    const country = countryInput.value.trim();
    const score = scoreInput.value.trim();

    if(name && politicianParty && country && score){
        politicianCollection.addPolitician(event);
       
        nameInput.value='';
        politicianPartyInput.value='';
        countryInput.value = '';
        scoreInput.value = '';
    }
    appPoliticianCollection.displayPoliticians();
});
