function daywish()
{
	var d = new Date();
	var d = d.getHours();
	if(d>=21||d<04)
	{
		w = 'Good Night';
	}
	if(d>=04&&d<12)
	{
		w = 'Good Morning';
	}
	if(d>=12&&d<16)
	{
		w = 'Good Afternoon';
	}
	if(d>=16&&d<21)
	{
		w = 'Good Evening';
	}
	return w;
}