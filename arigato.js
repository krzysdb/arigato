
var katakana = [
	{consonant:'a',character:"あ"},
	{consonant:'i',character:"い"},
	{consonant:'u',character:"う"},
	{consonant:'e',character:"え"},
	{consonant:'o',character:"お"},
	
	{consonant:'ka',character:"か"},//k
	{consonant:'ki',character:"き"},
	{consonant:'ku',character:"く"},
	{consonant:'ke',character:"け"},
	{consonant:'ko',character:"こ"},	
	
	{consonant:'ga',character:"が"},//g
	{consonant:'gi',character:"ぎ"},
	{consonant:'gu',character:"ぐ"},
	{consonant:'ge',character:"げ"},
	{consonant:'go',character:"ご"},
	
	{consonant:'sa',character:"さ"},//s
	{consonant:'si',character:"し"},
	{consonant:'su',character:"す"},
	{consonant:'se',character:"せ"},
	{consonant:'so',character:"そ"},
	
	{consonant:'za',character:"ざ"},//z
	{consonant:'zi',character:"じ"},
	{consonant:'zu',character:"ず"},
	{consonant:'ze',character:"ぜ"},
	{consonant:'zo',character:"ぞ"},
	
	{consonant:'ta',character:"た"},//t
	{consonant:'ti',character:"ち"},
	{consonant:'tu',character:"つ"},
	{consonant:'te',character:"て"},
	{consonant:'to',character:"と"},
	
	{consonant:'da',character:"だ"},//d
	{consonant:'di',character:"ぢ"},
	{consonant:'du',character:"づ"},
	{consonant:'de',character:"で"},
	{consonant:'do',character:"ど"},
	
	{consonant:'na',character:"な"},//n
	{consonant:'ni',character:"に"},
	{consonant:'nu',character:"ぬ"},
	{consonant:'ne',character:"ね"},
	{consonant:'no',character:"の"},
	
	{consonant:'ha',character:"は"},//h
	{consonant:'hi',character:"ひ"},
	{consonant:'hu',character:"ふ"},
	{consonant:'he',character:"へ"},
	{consonant:'ho',character:"ほ"},
	
	{consonant:'ba',character:"ば"},//b
	{consonant:'bi',character:"び"},
	{consonant:'bu',character:"ぶ"},
	{consonant:'be',character:"べ"},
	{consonant:'bo',character:"ぼ"},
	
	{consonant:'pa',character:"あ"},//p
	{consonant:'pi',character:"い"},
	{consonant:'pu',character:"う"},
	{consonant:'pe',character:"え"},
	{consonant:'po',character:"お"},
	
	{consonant:'ma',character:"ま"},//m
	{consonant:'mi',character:"み"},
	{consonant:'mu',character:"む"},
	{consonant:'me',character:"め"},
	{consonant:'mo',character:"も"},
	
	{consonant:'ya',character:"や"},//y
	{},
	{consonant:'yu',character:"ゆ"},
	{},
	{consonant:'yo',character:"よ"},
	
	{consonant:'ra',character:"ら"},//r
	{consonant:'ri',character:"り"},
	{consonant:'ru',character:"る"},
	{consonant:'re',character:"れ"},
	{consonant:'ro',character:"ろ"},
	
	{consonant:'wa',character:"わ"},//w
	{consonant:'wi',character:"ゐ"},
	{consonant:'wu',character:"ゔ"},
	{consonant:'we',character:"ゑ"},
	{consonant:'wo',character:"を"},
	
	{consonant:'n',character:"ん"}

];

var selectedSound = movingLetter ='',
	index = 1;

function populate(){
	
	//we populate the value of one letter moving down. (PLEASE NOTE INDEX HARCODED TO 1)
	var selected = document.getElementById('selected');
	selected.innerHTML = katakana[index].character;
	
	//we store that value in the local storage
	window.localStorage.setItem('index', index);
	
	var el = document.getElementById("sounds");
	
	for(var i=0; i<katakana.length; i++){
		var li = document.createElement('li');
		var consonant = katakana[i].consonant;
		if(consonant == null){
			consonant = "";
		}
		li.innerHTML = consonant;
		li.onclick = function(){
			var self = this;
		
		    areTheyTheSame(self.innerHTML);
	
		};
		el.appendChild(li);
	
	}

};

function areTheyTheSame(selectedSound){
	
	var index2 = window.localStorage.getItem('index'),
		count,
		messageP = document.getElementById('passed'),
		messageF = document.getElementById('failed');
	
	
	//alert(katakana[index2].consonant +' '+ selectedSound);
	
	debugger;
	
	if (katakana[index2].consonant == selectedSound){
		count = window.localStorage.getItem('failed');
		count ++;
		window.localStorage.setItem('failed',count);
		messageP.innerHTML = count;
		
	}else{
		
		count = window.localStorage.getItem('passed');

		count ++;
		window.localStorage.setItem('passed',count);
		messageF.innerHTML = count;
	}
	
	
}
