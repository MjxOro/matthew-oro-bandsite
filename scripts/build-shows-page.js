let objArray = [{date: 'Mon Sept 16 2021',venue: 'Pier 3 East'},{date: 'Tue Sept 21 2021',venue: 'View Lounge'},{date: 'Fri Oct 15 2021',venue: 'Hyatt Agency'},{date: 'Fri Nov 26 2021',venue: 'Moscow Center'},{date: 'Wed Dec 15 2021',venue: 'Press Club'}];
const parentDiv = document.getElementById('showParent');
//functions
function displayShows(){
	for (let i = 0; i < objArray.length; i++){
		const childDivOG = document.createElement('div')
		const childDiv = document.createElement('div');
		childDiv.classList.add('show__container__date');
		const infoTop = document.createElement('p');
		infoTop.classList.add('show__container__info-top');
		infoTop.classList.add('show__container__info-top--border');
		infoTop.innerText = 'DATES';
		childDiv.appendChild(infoTop);
		const infoBot = document.createElement('p');
		infoBot.classList.add('show__container__info-bot');
		infoBot.classList.add('show__container__info-bot--bold');
		infoBot.innerText = objArray[i].date;
		childDiv.appendChild(infoBot);
		parentDiv.appendChild(childDiv);

		const childDiv2 = document.createElement('div');
		childDiv2.classList.add('show__container__venue');
		const infoTop2 = document.createElement('p');
		infoTop2.classList.add('show__container__info-top');
		infoTop2.innerText = 'VENUE';
		childDiv2.appendChild(infoTop2);
		const infoBot2 = document.createElement('p');
		infoBot2.classList.add('show__container__info-bot');
		infoBot2.innerText = objArray[i].venue;
		childDiv2.appendChild(infoBot2);
		parentDiv.appendChild(childDiv2);

		const childDiv3 = document.createElement('div');
		childDiv3.classList.add('show__container__location');
		const infoTop3 = document.createElement('p');
		infoTop3.classList.add('show__container__info-top');
		infoTop3.innerText = 'LOCATION';
		childDiv3.appendChild(infoTop3);
		const infoBot3 = document.createElement('p');
		infoBot3.classList.add('show__container__info-bot');
		infoBot3.innerText = 'San Francisco, CA';
		childDiv3.appendChild(infoBot3);
		parentDiv.appendChild(childDiv3);

		const btn = document.createElement('button');
		btn.classList.add('show__container__btn');
		btn.innerText='BUY TICKETS';
		parentDiv.appendChild(btn);
	}
}
displayShows();
