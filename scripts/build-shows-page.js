const url = 'https://project-1-api.herokuapp.com/showdates/';
const apiKey ='?api_key=e5008d67-03aa-4d9d-98be-ada602cd40c4';
let objArray = [{date: 'Mon Sept 16 2021',venue: 'Pier 3 East'},{date: 'Tue Sept 21 2021',venue: 'View Lounge'},{date: 'Fri Oct 15 2021',venue: 'Hyatt Agency'},{date: 'Fri Nov 26 2021',venue: 'Moscow Center'},{date: 'Wed Dec 15 2021',venue: 'Press Club'}];
const section = document.querySelector('.show');
const parentDiv = document.getElementById('showParent');
const showsHeading = document.createElement('h2');
showsHeading.classList.add('show__title');
section.appendChild(showsHeading);

//functions
function compareElements(a,b){

	if ( a.date < b.timestamp ){
		return -1;
	}
	if ( a.date > b.timestamp ){
		return 1;
	}

}
const dateConverter = unixTime =>{
	let t = new Date(unixTime);
	return t.toDateString();
}
function displayShows(){
	axios.get(url+apiKey)
	.then(results => {
		const resultData = results.data;
		resultData.sort(compareElements).forEach(apiData =>{
			const childDiv = document.createElement('div')
			childDiv.classList.add('show__container');

			const infoTop = document.createElement('div');
			infoTop.classList.add('show__container__info-top');
			infoTop.classList.add('show__container__info-top--border');
			infoTop.innerText = 'DATES';
			const infoBot = document.createElement('p');
			infoBot.classList.add('show__container__info-bot');
			infoBot.classList.add('show__container__info-bot--bold');
			infoBot.innerText = dateConverter(Number(apiData.date));
			infoTop.appendChild(infoBot);
			childDiv.appendChild(infoTop);

			const infoTop2 = document.createElement('div');
			infoTop2.classList.add('show__container__info-top');
			infoTop2.innerText = 'VENUE';
			const infoBot2 = document.createElement('p');
			infoBot2.classList.add('show__container__info-bot');
			infoBot2.innerText = apiData.place;
			infoTop2.appendChild(infoBot2);
			childDiv.appendChild(infoTop2);

			const infoTop3 = document.createElement('div');
			infoTop3.classList.add('show__container__info-top');
			infoTop3.innerText = 'LOCATION';
			const infoBot3 = document.createElement('p');
			infoBot3.classList.add('show__container__info-bot');
			infoBot3.innerText = apiData.location;
			infoTop3.appendChild(infoBot3);
			childDiv.appendChild(infoTop3);

			const btn = document.createElement('button');
			btn.classList.add('show__container__btn');
			btn.innerText='BUY TICKETS';
			childDiv.appendChild(btn);

			parentDiv.appendChild(childDiv);




		})

	})
	
	
}
displayShows();
