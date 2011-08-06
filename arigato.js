
var katakana = [
            	{consonant:'a',character:"あ"},
            	{consonant:'i',character:"い"},
            	{consonant:'u',character:"う"},
            	{consonant:'ka',character:"か"}
];

var selectedSound = movingLetter ='';

function populate(){
	
	//we populate the value of one letter moving down. (PLEASE NOTE INDEX HARCODED TO 1)
	var selected = document.getElementById('selected');
	selected.innerHTML = katakana[1].character;
	
	//we store that value in the local storage
	window.localStorage.setItem('value', 1);
	
	var el = document.getElementById("sounds");
	
	for(var i=0; i<katakana.length; i++){
		var li = document.createElement('li');
		li.innerHTML = katakana[i].consonant;
		li.onclick = function(){
			var self = this;
			
			//var selectedSound = window.localStorage.getItem('sound');
			
		    //window.localStorage.setItem('sound', self.innerHTML);
		    
		    areTheyTheSame(self.innerHTML);
		
		};
		el.appendChild(li);
		
	}
	
	/*var selectedLetters = document.getElementsByClassName('movingLetter');
	for(var i=0; i<selectedLetters.length; i++){
		selectedLetters[i].onclick = function(){
			
		};
	}*/
	

};

function areTheyTheSame(selectedSound){
	var index = window.localStorage.getItem('value');
	alert(katakana[index].sound +' '+ selectedSound);
	
	if (katakana[index].sound == selectedSound){
		alert('wow');
	}else{
		alert('keep trying');
	}
	
	
	/*if (selectedSound == movingLetter){
		alert('wow');
		selectSound = movingLetter = '';
	}else{
		alert('keep trying');
	}*/
	
}
	

