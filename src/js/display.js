export default class AppPoliticianCollection{
    constructor(){
        this.politicians = [];
    }


getPoliticiansFromStorage(){
    const storedPoliticians = localStorage.getItem('politicians');

    if(storedPoliticians){
        this.politicians = JSON.parse(storedPoliticians);
    }
}

savePoliticiansToStorage(){
    localStorage.setItem('politicians', JSON.stringify(this.politicians));
}

displayPoliticians(){
 const politicianList = document.getElementById('results');
 politicianList.innerHTML = '';

 this.getPoliticiansFromStorage();//retrieve players from storage

 this.politicians.forEach((politician)=> {
    const politicianItem  = document.createElement('tr');
    const politicianName = document.createElement('td');
    const politicianParty = document.createElement('td');
    const politicianCountry = document.createElement('td');
    const politicianScore = document.createElement('td');

    politicianName.textContent = `Name: ${politician.name}`;
    politicianParty.textContent = `PoliticalParty: ${politician.politicianParty}`;
    politicianCountry.textContent = `Country: ${politician.country}`;
    politicianScore.textContent = `Score: ${politician.score}`;

    politicianItem.appendChild(politicianName);
    politicianItem.appendChild(politicianParty);
    politicianItem.appendChild(politicianCountry);
    politicianItem.appendChild(politicianScore);

    politicianList.appendChild(politicianItem);
 });
}
}