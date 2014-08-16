function gamer() {

var text = "GAME";
var col = new Array(8);

	function game (col){
		var a;
		for (a = 0; a < col.length; ++ a){
			var b;
			for (b = 0; b < text.length; ++ b) {
	
				if (a < 5){
					col [a] = text.substr(0, a);
					} else if (a == 5){
					col [a] = text.substr(1, a);
					}else if (a == 6){
					col [a] = text.substr(2, a);
					} else
					col [a] = text.substr(3, a);
					
			
				document . writeln ("<div id='show" + a.toString() + "'></div>");
				document.getElementById("show" + a.toString()).innerHTML = col[a];
		
			}
		}


	}

game (col); 

}
