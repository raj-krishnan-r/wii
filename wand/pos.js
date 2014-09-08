function prep()
{
	midheight();
	turnover(0);
}
function midheight()
{
	var w = window.innerHeight;
	var h = window.innerWidth;
	document.getElementById('midstate').style.top=(w/2)-100/2+'px';
	document.getElementById('midstate').style.left=(h/2)-800/2+'px';
}
function turnover(skip)
{
	var i=0;
	var timer = window.setInterval(function ()
	{
		if(skip==0)
		{
		i++;
		if(i==2)
		{
			document.getElementById('midstate').innerHTML="<center>let's know eachother now</center>";
		}
		if(i==5)
		{
			document.getElementById('midstate').innerHTML="<center>I'm WII and </center>";
		}
		if(i==8)
		{
			document.getElementById('midstate').innerHTML='<center>You are, <input onblur = "feed()"; id="uname" type = "text"/></center>';
		}
		/*if(i==14)
		{
		document.getElementById('midstate').innerHTML='<center>So you are, '+toTitleCase(document.getElementById('uname').value)+'</center>';
		}*/
		}
	}
	,1000);
}
function feed()
{
	var cont = document.getElementById('uname').value;
	document.getElementById('memory').innerHTML='Memorizing...';
	$.post('name.php',{name:cont},
	function(data,success)
	{
	document.getElementById('memory').innerHTML='';
	});
	
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
