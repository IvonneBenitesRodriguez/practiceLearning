export default class PoliticianCollection {
    constructor(){
        this.politicians = [];
    }

    savePoliticiansToStorage(){
        localStorage.setItem('politicians', JSON.stringify(this.politicians));
    }

    addPoliticianToCollection(name, politicianParty, country, score){
        const politician = {
            id: Math.floor(Math.random() * 1000),
            name,
            politicianParty,
            country,
            score,
        };
        this.politicians.push(politician);
        this.savePoliticiansToStorage();
    }

    addPolitician(event){
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const politicianPartyInput = document.getElementById('partei');
        const countryInput = document.getElementById('country');
        const scoreInput = document.getElementById('score');

        const name = nameInput.value.trim();
        const politicianParty = politicianPartyInput.value.trim();
        const country = countryInput.value.trim();
        const score = scoreInput.value.trim();

        if( name && politicianParty && country && score){
            this.getPoliticiansFromStorage();
            this.addPoliticianToCollection(name, politicianParty, country, score);
            nameInput.value= '';
            politicianPartyInput.value='';
            countryInput.value = '';
            scoreInput.value = '';
        }
    }

    getPoliticiansFromStorage(){
        const storedPoliticians = localStorage.getItem('politicians');
        if(storedPoliticians){
            this.politicians = JSON.parse(storedPoliticians);
        }
    }
}

const politicianCollection = new PoliticianCollection();
const form = document.getElementById('formPart');
const submitButton = form.querySelector('button[type="submit"]');
submitButton.addEventListener('click', (event) => politicianCollection.addPolitician(event));
