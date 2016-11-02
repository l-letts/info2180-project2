$ (document).ready(main);

var blankPos = [3,3];
var spaces = [];
var root;

function main(){
	var i = 0;
	var j = 0;
	var x = 0;
	var y = 0;
	$("#puzzlearea>div").each(function(){
		$(this).addClass("puzzlepiece");
		root = $("#puzzlearea>div:first-child").position();
		x = root.left+(98*i);
		y = root.top+(98*j);
		$(this).css({
			"top": y,
			"left": x
		});
		if(i<3){
			i++;
		}else{
			i=0;	
			j++;
		}
		$(this).css({
			"background-position-x":0-x,
			"background-position-y":+0-y
		});
		//console.log(getSpace($(this)));
	});	
	defSpaces();	
	$("#shufflebutton").on("click",shuffle);	
	setMovable();
}