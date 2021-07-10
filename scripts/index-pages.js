//Variables
let apiKey = 'e5008d67-03aa-4d9d-98be-ada602cd40c4';
let url = 'https://project-1-api.herokuapp.com/';
let username = document.getElementById('usernameInputbox')
let	comment = document.getElementById('commentInputbox');
let form = document.getElementById('commentForm');
let btn = document.querySelector('.chat__comment__btn');
//Functions

function timeConverter(getTime){
	let unixTime = getTime;
	let dateObj = new Date(unixTime);
	let y = dateObj.getFullYear();
	let m = dateObj.getMonth()+1;
	let d = dateObj.getDate();

	if(d<10){
		d = '0'+d;
	}
	if(m<10){
		m = '0'+m;
	}
	return m + '/' + d + '/' + y;

}
function compareElements(a,b){

	if ( a.timestamp < b.timestamp ){
		return -1;
	}
	if ( a.timestamp > b.timestamp ){
		return 1;
	}

}
function getInfo(event){
	event.preventDefault();
	if (username.value && comment.value){
		axios.post(`${url}comments/?api_key=${apiKey}`,{
			name: username.value,
			comment: comment.value
		})
		.then(resolve=>{
			console.log(resolve);
			displayNewComment();
			form.reset();

		})

	}
	else{
		if(!username.value){
			username.classList.remove('chat__user__input--error');
			setTimeout(function(){
				username.className = 'chat__user__input chat__user__input--error';
			},30)
		}
		if(!comment.value){
			comment.classList.remove('chat__comment__txtarea--error');
			setTimeout(function(){
				comment.className = 'chat__comment__txtarea chat__comment__txtarea--error';
			},30)
		}
		
	}

}
const displayNewComment = function(){
	axios.get(`${url}comments/?api_key=${apiKey}`)
		.then(resolve=>{
			const postParent = document.querySelector('#chatID');
			postParent.innerHTML = '';
			let getInfo = resolve.data;
			getInfo.sort(compareElements).forEach(elements =>{
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
				userName.innerText = `${elements.name}`;
				userDiv.appendChild(userName);

				const userTime = document.createElement('p')
				userTime.classList.add('chat__post__cont__user__time');
				userTime.innerText = `${timeConverter(elements.timestamp)}`;
				userDiv.appendChild(userTime);

				contDiv.appendChild(userDiv);

				const contComment = document.createElement('p');
				contComment.classList.add('chat__post__cont__comment');
				contComment.innerText = `${elements.comment}`;
				contDiv.appendChild(contComment)
				
				const bottomContainer = document.createElement('div');
				bottomContainer.classList.add('chat__post__cont__bot');

				const likeButton = document.createElement('div');
				const likeCounter = document.createElement('p');
				likeCounter.classList.add('chat__post__cont__bot__like__count');
				likeCounter.innerText = `${elements.likes}`;
				likeButton.appendChild(likeCounter);
				likeButton.classList.add('chat__post__cont__bot__like');
				const likeIcon = document.createElement('img')
				likeIcon.setAttribute('id',`${elements.id}`);
				likeIcon.classList.add('chat__post__cont__bot__like-icon');
				likeIcon.setAttribute('id',`${elements.id}`);
				likeIcon.src = './assets/Icons/SVG/icon-like.svg';
				likeButton.appendChild(likeIcon);
				bottomContainer.appendChild(likeButton);


				const deleteButton = document.createElement('div');
				deleteButton.classList.add('chat__post__cont__bot__delete');
				const deleteIcon = document.createElement('img');
				deleteIcon.src = './assets/Icons/SVG/icon-delete.svg';
				deleteIcon.classList.add('chat__post__cont__bot__delete-icon')
				deleteIcon.setAttribute('id',`${elements.id}`);
				deleteButton.appendChild(deleteIcon);
				bottomContainer.appendChild(deleteButton);
				contDiv.appendChild(bottomContainer);

				post.appendChild(contDiv);

				postParent.appendChild(post);

		})
	})
	
}
const displayComment = function(){
	axios.get(`${url}comments/?api_key=${apiKey}`)
		.then(resolve=>{
			let getInfo = resolve.data;
			getInfo.sort(compareElements).forEach(elements =>{
				const postParent = document.querySelector('#chatID');
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
				userName.innerText = `${elements.name}`;
				userDiv.appendChild(userName);

				const userTime = document.createElement('p')
				userTime.classList.add('chat__post__cont__user__time');
				userTime.innerText = `${timeConverter(elements.timestamp)}`;
				userDiv.appendChild(userTime);

				contDiv.appendChild(userDiv);

				const contComment = document.createElement('p');
				contComment.classList.add('chat__post__cont__comment');
				contComment.innerText = `${elements.comment}`;
				contDiv.appendChild(contComment)
				
				const bottomContainer = document.createElement('div');
				bottomContainer.classList.add('chat__post__cont__bot');

				const likeButton = document.createElement('div');
				const likeCounter = document.createElement('p');
				likeCounter.classList.add('chat__post__cont__bot__like__count');
				likeCounter.innerText = `${elements.likes}`;
				likeButton.appendChild(likeCounter);
				likeButton.classList.add('chat__post__cont__bot__like');
				const likeIcon = document.createElement('img')
				likeIcon.setAttribute('id',`${elements.id}`);
				likeIcon.classList.add('chat__post__cont__bot__like-icon');
				likeIcon.src = './assets/Icons/SVG/icon-like.svg';
				likeButton.appendChild(likeIcon);
				bottomContainer.appendChild(likeButton);


				const deleteButton = document.createElement('div');
				deleteButton.classList.add('chat__post__cont__bot__delete');
				const deleteIcon = document.createElement('img');
				deleteIcon.src = './assets/Icons/SVG/icon-delete.svg';
				deleteIcon.classList.add('chat__post__cont__bot__delete-icon')
				deleteIcon.setAttribute('id',`${elements.id}`);
				deleteButton.appendChild(deleteIcon);
				bottomContainer.appendChild(deleteButton);
				contDiv.appendChild(bottomContainer);

				post.appendChild(contDiv);

				postParent.appendChild(post);

				//========= Diving Deeper ==========

				const likeParent = document.getElementById('chatID');
				likeParent.addEventListener('click',e =>{
					if (e.target.className === 'chat__post__cont__bot__like-icon'){
						e.stopImmediatePropagation()
						axios.put(`${url}comments/${e.target.id}/like/?api_key=${apiKey}`,{likes: this.likes+1})
						.then(resolve =>{
							displayNewComment();
							console.log(resolve);
						})
					}
					if(e.target.className === 'chat__post__cont__bot__delete-icon'){
						e.stopImmediatePropagation();
						axios.delete(`${url}comments/${e.target.id}/?api_key=${apiKey}`)
						.then(resolve =>{
							console.log('clicked')
							displayNewComment();
							console.log(resolve);
						})

					}
				})
		})
	})
	
}
displayComment();
form.addEventListener('submit',getInfo);
username.addEventListener('input', () => {
	username.className = 'chat__user__input';
});
comment.addEventListener('input', () =>{
	comment.className = 'chat__comment__txtarea';
});

