
//Game system
function GameSystem() {
	
	var self = this;
	
	this.paused = false;
	this.running = false;
	this.soundsTable = null;
	
	this.cellXY = null;

	
	this.start = function() {
		var elem = document.getElementById("selected");
		elem.style.display = "block"; //block
		elem.className = "d1 movingLetter";
		
		self.running = true;
		
		//set default location for pointer to letters
		self.soundsTable = document.getElementById("sounds");
				
		self.cellXY = {col: 0, row: 0};
		// this.markCell(0, 0);
		self.markCell(this.cellXY.col, this.cellXY.row);
		
	};
	
	this.stop = function() {
		var elem = document.getElementById("selected");
		elem.style.display = "none"; //block
		// elem.className = "d1 movingLetter";

		//set default location for pointer to letters
		self.clearCell(0, 0);
		
		self.running = false;
		self.cellXY = null;
		// self.soundsTable = null;

	};
	
	this.isRunning = function() {
		return self.running;
	};
	
	this.markCell = function(col, row) {
		if( self.cellExists(col, row)){
			var rows = self.soundsTable.getElementsByTagName('tr');
			var cell = rows[row].getElementsByTagName('td')[col];
			cell.className = "highlighting";
		} else {
			alert("markCell:Cell [col,row]='"+ col +", "+ row +"' do not exists!!");
		}
	};
	
	this.clearCell = function(col, row) {
		if( self.cellExists( col, row)){
			if(self.isCellMarked(col, row)){
				var rows = self.soundsTable.getElementsByTagName('tr');
				var cell = rows[row].getElementsByTagName('td')[col];
				cell.className = "";
			}
		} else {
			alert("clearCell:Cell [col,row]='"+ col +", "+ row +"' do not exists!!");
		}
	};
	
	this.isCellMarked = function(col, row) {
		var isMarked = false;
		if( self.cellExists(col, row)){
			var rows = self.soundsTable.getElementsByTagName('tr');
			var cell = rows[row].getElementsByTagName('td')[col];
			if( cell.className == "highlighting" ){
				isMarked = true;
			}
		} else {
			alert("isCellMarked:Cell [col,row]='"+ col +", "+ row +"' do not exists!!");
		}
		return isMarked;
	};
	
	this.cellExists = function(col, row) {
		var exists = false;
		var rows = self.soundsTable.getElementsByTagName('tr');
		if (row < rows.length && row>-1) {
			var cols = rows[row].getElementsByTagName('td');
			if (col < cols.length && col>-1) {
				exists = true;
			}
		}
		return exists;
	};
	
	this.nextNonEmptyCell = function(col, row) {
		
		
		var cxy = self.getCellXY();
		//moving verticaly (left/right)
		if( cxy.col != col){
			var rows = self.soundsTable.getElementsByTagName('tr');
			var cols = rows[row].getElementsByTagName('td');
			
		}
		
		// var exists = false;
		// var rows = self.soundsTable.getElementsByTagName('tr');
		// if (row < rows.length && row>-1) {
		// 	var cols = rows[row].getElementsByTagName('td');
		// 	if (col < cols.length && col>-1) {
		// 		exists = true;
		// 	}
		// }
		// return exists;
	};
	
	this.getCellXY = function() {
		return self.cellXY;
	};
	
	this.setCellXY = function(col, row) {
		self.cellXY = { col: col, row: row};
	};

	this.moveMark = function(colNext, rowNext) {
		if( self.isRunning() ){
			var cxy = self.getCellXY();
			var colRight = cxy.col+1;
			if( self.cellExists(colNext, rowNext)){
				//clear previous cell and mark next on cell, update cell coordinates (col,row)
				if(self.isCellMarked(cxy.col, cxy.row)){
					self.clearCell(cxy.col, cxy.row);
					self.markCell(colNext, rowNext);
					self.setCellXY(colNext, rowNext);
				} else {
					alert("Expecting that cell:"+ colNext +","+ rowNext +" will be marked!!");
				}
			}
		} else {
			alert("Game should be running!!");
		}		
	};

	this.right = function() {
		var cxy = self.getCellXY();
		self.moveMark(cxy.col+1, cxy.row);
	};
		
	this.left = function() {
		var cxy = self.getCellXY();
		self.moveMark(cxy.col-1, cxy.row);
	};
	
	this.up = function() {
		var cxy = self.getCellXY();
		self.moveMark(cxy.col, cxy.row-1);
	};
	
	this.down = function() {
		var cxy = self.getCellXY();
		self.moveMark(cxy.col, cxy.row+1);
	};
	
	
	
	//game setup
	document.getElementById("start-button").onclick = function() { 
		//highscores.close(); 
		self.start();
		//self.blur(); 
	};
	document.getElementById("stop-button").onclick = function() { 
		//highscores.close(); 
		self.stop();
		//self.blur(); 
	};
	
	// keyboard
	var keyboard = new Keyboard();
	keyboard.set(keyboard.n, this.start);
	//keyboard.set(keyboard.r, this.reset);
	keyboard.set(keyboard.p, this.pause);
	keyboard.set(keyboard.up, this.up);
	keyboard.set(keyboard.down, this.down);
	keyboard.set(keyboard.left, this.left);
	keyboard.set(keyboard.right, this.right);
	document.onkeydown = keyboard.event;
	
	
	
	// Supporting keyboard
	function Keyboard()
	{
		this.left = 37;
		this.right = 39;
		this.up = 38;
		this.down = 40;
		this.enter = 13;
		this.escape = 27;
		this.p = 80;

		this.keys = [];
		this.funcs = [];

		var self = this;

		this.set = function(key, func) {
			self.keys.push(key);
			self.funcs.push(func);
		};

		this.event = function(e) {
			if (!e) { e = window.event; }
			for (var i = 0; i < self.keys.length; i++) {
				var keyCode = ('which' in e) ? e.which : e.keyCode;
				// if (e.keyCode == self.keys[i]) {
				if (keyCode == self.keys[i]) {
					self.funcs[i]();
				}
			}
		};
	};
	//Keyboard
	
}

