
//Game system
function GameSystem(){
	
	var self = this;
	
	this.paused = false;
	
	this.start = function()
	{
		var elem = document.getElementById("selected");
		elem.style.display = "block"; //block
		elem.className = "d2 movingLetter";
		
	}
	
	
	
	
	
	//game setup
	document.getElementById("game-start").onclick = function() { 
		//highscores.close(); 
		self.start();
		//this.blur(); 
	};
	
	
	
	// Supporting keyboard
	function Keyboard()
	{
		this.left = 37;
		this.right = 39;
		this.up = 38;
		this.down = 40;
		this.enter = 13
		this.escape = 27;
		this.p = 80;

		this.keys = [];
		this.funcs = [];

		var self = this;

		this.set = function(key, func)
		{
			this.keys.push(key);
			this.funcs.push(func);
		};

		this.event = function(e)
		{
			if (!e) { e = window.event; }
			for (var i = 0; i < self.keys.length; i++) {
				if (e.keyCode == self.keys[i]) {
					self.funcs[i]();
				}
			}
		};
	}
	//Keyboard
	
}



// "Hello, World" class
function HelloWorld(hour)
{
  // class "constructor" initializes this.hour field
  if (hour)
  {
    // if the hour parameter has a value, store it as a class field
    this.hour = hour;
  }
  else
  {
    // if the hour parameter doesn't exist, save the current hour
    var date = new Date();
    this.hour = date.getHours();
  }

  // display greeting
  this.DisplayGreeting = function()
  {
    if (this.hour >= 22 || this.hour <= 5) 
      document.write("Goodnight, world!");
    else
      document.write("Hello, world!");
  }  
}
