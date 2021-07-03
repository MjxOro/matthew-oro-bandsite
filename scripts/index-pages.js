//Variables
let commentArray = [
	{username:"Miles Acosta", text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",date:"12/20/2020",},{username:"Emilie Beach", text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",date:"01/09/2021",},{username:"Connor Walton", text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",date:"02/17/2021",}];
let username = document.getElementById('usernameInputbox')
let	comment = document.getElementById('commentInputbox');
let form = document.getElementById('commentForm');
let btn = document.querySelector('.chat__comment__btn');
//Functions

const gettingTime = function(){
	let t = new Date();
	let d = t.getDate();
	let m = t.getMonth() + 1;
	let y = t.getFullYear();

	if (d<10){
		d = "0" + d;
	}
	if (m < 10){
		m = "0" + m;
	}
	return m + "/" + d + "/" + y;
}
function getInfo(event){

	event.preventDefault();
	let commentObj = {}
	if (username.value && comment.value){
		commentObj.username = username.value; 
		commentObj.text = comment.value;
		commentObj.date = gettingTime();
		console.log(commentObj);
		form.reset();
		commentArray.push(commentObj);
		displayComment(commentArray,commentArray.length-1)

	}
	else{
		if(!username.value){
			username.className = 'chat__user__input chat__user__input--error';
		}
		if(!comment.value){
			comment.className = 'chat__comment__txtarea chat__comment__txtarea--error';
		}
		
	}

}
const displayComment = function(arr,num){
	const postParent = document.querySelector('#chatID');
	for(let i = num; i < arr.length;i++){
		const post = document.createElement('div');
		post.classList.add('chat__post');

		const imageDiv = document.createElement('div');
		imageDiv.classList.add('chat__post__img');
		post.appendChild(imageDiv);

		const contDiv = document.createElement('div');
		contDiv.classList.add('chat__post__cont');

		const userDiv = document.createElement('div');
		userDiv.classList.add('chat__post__cont__user');

		const userName = document.createElement('h2');
		userName.classList.add('chat__post__cont__user__name');
		userName.innerText = `${arr[i].username}`;
		userDiv.appendChild(userName);

		const userTime = document.createElement('p')
		userTime.classList.add('chat__post__cont__user__time');
		userTime.innerText = `${arr[i].date}`;
		userDiv.appendChild(userTime);

		contDiv.appendChild(userDiv);

		const contComment = document.createElement('p');
		contComment.classList.add('chat__post__cont__comment');
		contComment.innerText = `${arr[i].text}`;
		contDiv.appendChild(contComment)

		post.appendChild(contDiv);

		postParent.appendChild(post);
	
	}

}
displayComment(commentArray,0);
form.addEventListener('submit',getInfo);
username.addEventListener('input', () => {
	username.className = 'chat__user__input';
});
comment.addEventListener('input', () =>{
	comment.className = 'chat__comment__txtarea';
});
