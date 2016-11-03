
// Sir, I Must Admit I had some Issues, Will be Working Harder On the Next assignment.



$ (document).ready(main);
"use strict";


var blankPos = [3,3];
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



function getTileElement(puzzlepiece)
{
	var prefix;
	var result;

	prefix=".puzzlepiece";
	result="";

	if(document.getElementById(prefix+tileNumber)!==null)
	{
		result=document.getElementById(prefix+tileNumber);
	}

	else
	{
		result=null;
	}
	return result;

}

function swapInfo(element1, element2)
{
	var tmp;
	var tmp2;
tmp=element1.className;
element1.className=element2.className;
element2.className=tmp;

tmp2=element1.innerHTML;
element1.innerHTML=element2.innerHTML;
element2.innerHTML=tmp2;

}

function getEmptyTile()
{
	var i;
	var prefix;
	var result;

	i=0;
	prefix=".puzzlepiece";
	result="";

	while(i<15 && result !== null)
	{
		if(getTileElement(i).className==="<div>15</div>")
		{
			result=result+prefix+i;
		}
			i=i+1;
	}

	return result;
}

function scrambleTiles()
{
	swapInfo(document.getElementById(".puzzlepiece"),document.getElementById(".puzzlepiece"+getRandomInteger(14)));
}

function getRandomInteger(upperLimit)
{
	return Math.floor(Math.random()*(upperLimit+1));
};



//THE CLICK EVENT!!!!!!! :)




/*

function moving(blankCell){

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




