var x=0;

function realtimeClock()
{
    var d = new Date();

    var dd = ("0" + d.getDate()).slice(-2);
	var mm = ("0" + (d.getMonth()+1)).slice(-2);
	var yyyy = d.getFullYear();
	var h = ("0" + d.getHours()).slice(-2);
	var m = ("0" + d.getMinutes()).slice(-2);
	var s = ("0" + d.getSeconds()).slice(-2);

    document.getElementById("date").innerHTML = dd+" / "+mm+" / "+yyyy;
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(realtimeClock,500);
    
    if(x == 0)
    	document.getElementById("input_time").onmouseleave= function(){mouseLeave(t,parseInt(h),parseInt(m),parseInt(s))};
    else
        mouseLeave(t,parseInt(h),parseInt(m),parseInt(s));   
}

function mouseLeave(t,h,m,s)
{

    var h1=parseInt(document.getElementById("hour").value);
    var m1=parseInt(document.getElementById("minute").value);
    var s1=parseInt(document.getElementById("second").value);

    if(x == 0)
    	x++;

    if((!isNaN(h1) && h>h1)||(!isNaN(h1)&& isNaN(m1) && h==h1)||
    (!isNaN(h1) && !isNaN(m1) && h==h1 && m>m1)||
    (!isNaN(h1) && !isNaN(m1) && isNaN(s1) && h==h1 && m==m1 )||
    (!isNaN(h1) && !isNaN(m1) && !isNaN(s1) && h==h1 && m==m1 && s>=s1))
    {
    	document.getElementById("clock").style.color="red";
    	clearTimeout(t);
    }
}