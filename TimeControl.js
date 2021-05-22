var x=0;

function realtimeClock()
{
    var d = new Date();

    var dd = d.getDate();
	var mm = d.getMonth()+1;
	var yyyy = d.getFullYear();
	var h = d.getHours();
	var m = d.getMinutes();
	var s = d.getSeconds();

    document.getElementById("clock").innerHTML= dd+" / "+mm+" / "+yyyy+" , "+h + ":" + m + ":" + s;

    var t=setTimeout(realtimeClock,500);
    if(x == 0)
    {
    	document.getElementById("input_time").onmouseleave= function(){mouseLeave(t,h,m,s)};
    }
    else
    {
        mouseLeave(t,h,m,s);
    }    
}

function mouseLeave(t,h,m,s)
 {
    var h1=parseInt(document.getElementById("hour").value);
    var m1=parseInt(document.getElementById("minute").value);
    var s1=parseInt(document.getElementById("second").value);

    if(x == 0)
    	x++;

    if((!isNaN(h1) && h>h1)||(!isNaN(h1)&& isNaN(m1) && h===h1) || 
    (!isNaN(h1) && !isNaN(m1) && h===h1 && m>m1)||
    (!isNaN(h1) && !isNaN(m1) && isNaN(s1) && h===h1 && m===m1 )||
    (!isNaN(h1) && !isNaN(m1) && !isNaN(s1) && h===h1 && m===m1 &&s>=s1))
    {
    	document.getElementById("clock").style.color="red";
    	clearTimeout(t);
    }
 }