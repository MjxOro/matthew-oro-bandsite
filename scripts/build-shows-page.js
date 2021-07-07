let objArray = [{date: 'Mon Sept 16 2021',venue: 'Pier 3 East'},{date: 'Tue Sept 21 2021',venue: 'View Lounge'},{date: 'Fri Oct 15 2021',venue: 'Hyatt Agency'},{date: 'Fri Nov 26 2021',venue: 'Moscow Center'},{date: 'Wed Dec 15 2021',venue: 'Press Club'}];
const section = document.querySelector('.show');
const parentDiv = document.getElementById('showParent');
const showsHeading = document.createElement('h2');
showsHeading.classList.add('show__title');
section.appendChild(showsHeading);

//functions
function displayShows(){
	for (let i = 0; i < objArray.length; i++){
	
	
		const childDiv = document.createElement('div')
		childDiv.classList.add('show__container');

		const infoTop = document.createElement('div');
		infoTop.classList.add('show__container__info-top');
		infoTop.classList.add('show__container__info-top--border');
		infoTop.innerText = 'DATES';
		const infoBot = document.createElement('p');
		infoBot.classList.add('show__container__info-bot');
		infoBot.classList.add('show__container__info-bot--bold');
		infoBot.innerText = objArray[i].date;
		infoTop.appendChild(infoBot);
		childDiv.appendChild(infoTop);

		const infoTop2 = document.createElement('div');
		infoTop2.classList.add('show__container__info-top');
		infoTop2.innerText = 'VENUE';
		const infoBot2 = document.createElement('p');
		infoBot2.classList.add('show__container__info-bot');
		infoBot2.innerText = objArray[i].venue;
		infoTop2.appendChild(infoBot2);
		childDiv.appendChild(infoTop2);

		const infoTop3 = document.createElement('div');
		infoTop3.classList.add('show__container__info-top');
		infoTop3.innerText = 'LOCATION';
		const infoBot3 = document.createElement('p');
		infoBot3.classList.add('show__container__info-bot');
		infoBot3.innerText = 'San Francisco, CA';
		infoTop3.appendChild(infoBot3);
		childDiv.appendChild(infoTop3);

		const btn = document.createElement('button');
		btn.classList.add('show__container__btn');
		btn.innerText='BUY TICKETS';
		childDiv.appendChild(btn);

		parentDiv.appendChild(childDiv);
	}
}
displayShows();
