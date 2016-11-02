$ (document).ready(main);

var blankPos = [3,3];
var spaces = [];
var base;

var moveCount = 0;
var offset;
var clock;
var interval;

//var blankPos = [3,3];
//var spaces = [];
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

	});	
}

// movable pieces
/*

$(".puzzlepiece").click(function()
                        {
    $(this).animate({"left":"0"})
});
*/

//THE CLICK EVENT!!!!!!! :)

function shuffle(){
	var x = Math.floor(Math.random()*128);
	for(var i=16;i<x;i++){
		randSwap();
	}
	//randSwap();
}

function move(a,space){
	if(a.hasClass("movablepiece")){
		var x = base.left+(98*space[0]);
		var y = base.top+(98*space[1]);
		a.animate({
			top: y,
			left: x
		});
		a.css({
			"top": y,
			"left": x
		});
		setMovable();
	}	
}

function setMovable(){
	$(".puzzlepiece").each(function(){
		$(this).off();
		if($(this).hasClass("movablepiece")){
			$(this).removeClass("movablepiece");		
		}
		if(isBeside(getSpace($(this)),blankPos)){
			$(this).addClass("movablepiece");
			$(this).on("click",movePiece);
		}		
	})
}

/*

function movablepieces(playingArea, element) {
var puzzleArea = document.getElementById("puzzlearea");
var puzzlePieces = puzzleArea.getElementsByTagName("div");

if (playingArea[element - 1][0] ==16)
    {
        return mpUp (playingArea, element, puzzlePieces);
    }

else if  (playingArea[element - 1][1] == 16)
    {
        return mpRight (playingArea, element, puzzlePieces);
    }

else if (playingArea [element - 1][2] == 16)
    {
        return mpDown (playingArea, element, puzzlePieces);
    }

else if (playingArea [element - 1][3] == 16)
    {
        return mpLeft (playingArea, element, puzzlePieces);
    }
}

*/

function movePiece(){
	var newPos = blankPos;
	blankPos = getSpace($(this));
	move($(this),newPos);
	//setMovable();
}

/*function moving(blankCell){

  //Initialization of the different elements used to modify html document
  var puzzleArea = document.getElementById("puzzlearea");
  var puzzlePieces = puzzleArea.getElementsByTagName("div");

  //Makes all puzzle pieces regular pieces
  for( var count = 0; count < puzzlePieces.length; count++){

    puzzlePieces[count].setAttribute("class", "puzzlepiece");
  }

  //Makes movable puzzle pieces movable
  for (var count = 0; count < blankCell.length; count++){

    if(blankCell[count] != null){
      puzzlePieces[blankCell[count]-1].setAttribute("class", "puzzlepiece movablepiece");
    }
  }
}
*/

function getSpace(el){
	var p = el.position();
	var x = Math.ceil((p.left-base.left)/98);
	var y = Math.ceil((p.top-base.top)/98);	
	return [x,y];
}

function isBeside(a,b){
	if(a[0]===b[0]){
		return a[1]+1===b[1] || a[1]-1===b[1];
	}else if(a[1]===b[1]){
		return a[0]+1===b[0] || a[0]-1===b[0];
	}else{
		return false;
	}
}





