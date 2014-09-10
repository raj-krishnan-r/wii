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
			document.getElementById('midstate').innerHTML="<center>let's know each other now</center>";
		}
		if(i==5)
		{
			document.getElementById('midstate').innerHTML="<center>I'm WII and </center>";
		}
		if(i==8)
		{
			document.getElementById('midstate').innerHTML='<center>you are, <input autofocus onblur = "feed()"; id="uname" type = "text"/></center>';
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
	if(cont!='')
	{
	document.getElementById('memory').innerHTML='Memorizing you, '+toTitleCase(cont)+'...';
	$.post('name.php',{name:cont},
	function(data,success)
	{
	document.getElementById('memory').innerHTML='';
	knowmore(toTitleCase(data));

	});
	}
	
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
function knowmore(name)
{
document.getElementById('midstate').innerHTML='<center><h2>So, '+name+' </h2><h3>I think, I can help you in some way. More, precisely by storing your data. And also keep in mind, that I am being build.<br></h3><p> Just to mention, '+name+', to proceed always click some where on the screen.</p></center>';
}