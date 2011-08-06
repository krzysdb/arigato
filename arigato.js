
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
		el.appendChild(li);
	}
	
	
}