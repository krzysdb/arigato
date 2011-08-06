
var katakana = [
            	{consonant:'a',character:"あ"},
            	{consonant:'i',character:"い"},
            	{consonant:'u',character:"う"},
            	{consonant:'ka',character:"か"}
            ];



function populate(){
	var el = document.getElementById("sounds");
	
	for(var i=0; i<katakana.length; i++){
		var li = document.createElement('li');
		li.innerHTML = katakana[i].consonant;
		li.onclick = function(){
			var self = this;
			alert(self.innerHTML);
		};
		el.appendChild(li);
		
	}
	var selectedLetters = document.getElementsByClassName('movingLetter');
	for(var i=0; i<selectedLetters.length; i++){
		selectedLetters[i].onclick = function(){
			alert('wow');
		};
	}
	
	
	
};
	

