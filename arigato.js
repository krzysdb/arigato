
var katakana = [
            	{consonant:'a',character:"あ"},
            	{consonant:'i',character:"い"},
            	{consonant:'u',character:"う"},
            	{consonant:'ka',character:"か"}
            ];

var selectedSound = movingLetter = '';

function populate(){
	var el = document.getElementById("sounds");
	
	for(var i=0; i<katakana.length; i++){
		var li = document.createElement('li');
		li.innerHTML = katakana[i].consonant;
		li.onclick = function(){
			var self = this;
			alert(self.innerHTML);
			
		    window.localStorage.setItem('sound', self.innerHTML);
		    
		    areTheyTheSame();
		    
		    //window.localStorage.setItem('timestamp', (new Date()).getTime());
			
		};
		el.appendChild(li);
		
	}
	
	var selectedLetters = document.getElementsByClassName('movingLetter');
	for(var i=0; i<selectedLetters.length; i++){
		selectedLetters[i].onclick = function(){
			var self = this;
			selectedSound = window.localStorage.getItem('sound');
			
			window.localStorage.setItem('fallingLetter', self.innerHTML);
			
			areTheyTheSame();
		};
	}
	
	
	
};

function areTheyTheSame(){
	if (selectedSound == movingLetter){
		alert('wow');
		selectSound = movingLetter = '';
	}else{
		alert('keep trying');
	}
}
	

