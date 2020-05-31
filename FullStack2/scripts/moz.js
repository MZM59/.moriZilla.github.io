
let myImage = document.querySelector('img');

myImage.onclick = function(){	
	let mySrc = myImage.getAttribute('src');	
	if(mySrc==='C:/Users/User/Desktop/Programming-Projectrs/FullStack2/images/moz1.jpg'){		
		myImage.setAttribute('src','C:/Users/User/Desktop/Programming-Projectrs/FullStack2/images/moz2.jpg');
	}
	else{	
		myImage.setAttribute('src','C:/Users/User/Desktop/Programming-Projectrs/FullStack2/images/moz1.jpg');
	}
	
	
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } 
	else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hallo ' + myName;
  }
}

if(!localStorage.getItem('name')) {	
  setUserName(); 
}
	else {	
		let storedName = localStorage.getItem('name'); 
		myHeading.textContent = 'Hallo ' + storedName; 
}

myButton.onclick = function() {
  setUserName();
}
