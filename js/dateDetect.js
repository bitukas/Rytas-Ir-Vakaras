var today_obj=new Date()
var today_date=today_obj.getDate()
var today_month=today_obj.getMonth()+1

var tips=new Array()
var prefix=today_month + '/img-'
var tip
var format ='.htm'
var next = 0
var tiptitle=' <b>Rytas Ir Vakaras</b><br />'


tips[1]='1'
tips[2]='2'
tips[3]='3'
tips[4]='4'
tips[5]='5'
tips[6]='6'
tips[7]='7'
tips[8]='8'
tips[9]='9'
tips[10]='10'
tips[11]='11'
tips[12]='12'
tips[13]='13'
tips[14]='14'
tips[15]='15'
tips[16]='16'
tips[17]='17'
tips[18]='18'
tips[19]='19'
tips[20]='20'
tips[21]='21'
tips[22]='22'
tips[23]='23'
tips[24]='24'
tips[25]='25'
tips[26]='26'
tips[27]='27'
tips[28]='28'
tips[29]='29'
tips[30]='30'
tips[31]='31'


function refresh()
{
	if(prefix+tips[today_date]+format==undefined)
	{
		tip='none.html'
	}else if(tips[today_date+next]==undefined)
	{
		if(tips[today_date+next-1]!=undefined)
		{
			next-=1
		}
		else if(tips[today_date+next+1]!=undefined)
		{
			next+=1
		}
	}else{
		tip=prefix+(tips[today_date+next])+format
	}
	console.log("Showing: " + tip)
}
function reset()
{
next=0
refresh()
}
function nexti()
{
next+=1
refresh()
}
function previ()
{
next-=1
refresh()
}

console.log(tiptitle)
refresh()
