const select = document.getElementById('select');
const decide = document.getElementById('choose');
const entirePage = document.querySelector('html');

let results = document.querySelector('.results');
results.style.paddingLeft = '40px';
results.style.color = 'white';
results.style.fontSize = '1.5rem';
results.style.backgroundColor = '#a75265';
results.style.padding = '20px 20px';

decide.addEventListener('change', changingBackground);
select.addEventListener('change', informationIceCream);



function changingBackground(){
    let elect =  decide.value;

    switch(elect){

        case 'vanilla': 
        entirePage.style.backgroundColor = "#fafafa";
        break;
        case 'strawberry':
        entirePage.style.backgroundColor =  '#f70776';
        break;
        case 'orange':
        entirePage.style.backgroundColor = '#ff6f3c';
        break;
        case 'chocolate':
        entirePage.style.backgroundColor = '#25161b';
        break;
        case 'lemon':
        entirePage.style.backgroundColor = '#cbf078';
        break;
        default:
        entirePage.style.backgroundColor = '';
    }
}











function informationIceCream(){
    let choice = select.value;

    switch(choice) {
        case "strawberry":
            results.textContent =
            "Fresas puras organicas de estacion, helado de crema exquisito y con leche sin lactosa!.🍓";
            break;
        case "chocolate":
            results.textContent =
            "Cacao puro con almendras tostadas y hierbas aromaticas, helado unico una vez en la vida!.🍫";
            break;
        case "lemon":
            results.textContent =
            "Sorbete de helado de limon del norte, macerado con moras y miel de lavanda, solo esta temporada🍋!";
            break;
        case "berries":
            results.textContent =
            "Los mejores Berries, moras, frambuesas con miel de rosas, helado exquisito🫐!.";    
            break;
        case "pistaccho":
            results.textContent =
            "Pistacchos traidos de Italia, tostados y destilados con su propio aroma, helado inolvidable🍧!.";
            break;
            default:
            results.textContent = "";
        }
}