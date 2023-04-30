function enable(dn)
{
var covid_cases = document.getElementById('covid_cases');
covid_cases.style.visibility= "visible";
var imgsrc = covid_cases.getElementsByTagName('img')[0];
imgsrc.style.visibility="visible";
var district =covid_cases.getElementsByTagName('h1')[0];
district.style.visibility="visible";
var hr= covid_cases.getElementsByTagName('hr')[0];
hr.style.visibility = "visible";
var para = covid_cases.getElementsByTagName('p')[0];
para.style.visibility= "visible";
var span = covid_cases.getElementsByTagName('span')[0];
span.style.visibility= "hidden";
switch(dn)
{
case 1 :
imgsrc.src="doll.jpg";
district.innerHTML="Thanjavur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 68,972' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 864'
+ "<br>" +
'Total Recovery : 67,113' ;
break;
case 2:
imgsrc.src="thirumalai nayak palace.jpg";
district.innerHTML="Tirunelveli";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 48,151' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 430'
+ "<br>" +
'Total Recovery : 47,469' ;
break;
case 3:
imgsrc.src="v.jpg";
district.innerHTML="Vellore";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 48,356' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 1,097'
+ "<br>" +
break;
'Total Recovery : 46,951' ;
case 4:
imgsrc.src="tiruvallur.jpg";
district.innerHTML="Tiruvallur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 1,14,461' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 1,766'
+ "<br>" +
break;
'Total Recovery : 1,11,754' ;
case 5:
imgsrc.src="images.jpg";
district.innerHTML="Kanyakumari";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 60,451' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 1,022'
+ "<br>" +
break;
'Total Recovery : 59,090' ;
case 6:
imgsrc.src="Panchalankurichi_Fort.jpg";
district.innerHTML="Thoothukudi";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 55,274' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 398'
+ "<br>" +
break;
'Total Recovery : 54,680' ;
case 7:
imgsrc.src="malli poo.jpg";
district.innerHTML="Madurai";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 73,729' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 1,147'
+ "<br>" +
'Total Recovery : 72,354' ;
break;
case 8:
imgsrc.src="Shenbaga-Thopu.jpg";
district.innerHTML="Virudhunagar";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 45,628' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 542'
+ "<br>" +
break;
'Total Recovery : 44,949' ;
case 9:
imgsrc.src="photo.jpg";
district.innerHTML="Ramanathapuram";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 20,110' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 351'
+ "<br>" +
break;
'Total Recovery : 19,665' ;
case 10:
imgsrc.src="meghamalai.jpg";
district.innerHTML="Theni";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 43,038' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 514'
+ "<br>" +
break;
'Total Recovery : 42,404' ;
case 11:
imgsrc.src="Sivagangai.jpg";
district.innerHTML="Sivagangai";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 19,022' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 199'
+ "<br>" +
break;
'Total Recovery : 18,594' ;
case 12:
imgsrc.src="caption.jpg";
district.innerHTML="Dindigul";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 32,322' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 627'
+ "<br>" +
break;
'Total Recovery : 31,538' ;
case 13:
imgsrc.src="Thirumayam-Fort.jpg";
district.innerHTML="Pudukkottai";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 28,533' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 372'
+ "<br>" +
break;
'Total Recovery : 27,805' ;
case 14:
imgsrc.src="chennai.jpg";
district.innerHTML="Chennai";
para.innerHTML ='Total cases &nbsp; &nbsp;: 5,40,300' + "<br>"
+ 'Total Deaths &nbsp; : 8,345' +
"<br>" +
'Total Recovery : 5,29,907' ;
break;
case 15:
imgsrc.src="download.jpg";
district.innerHTML="Tiruppur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 88,754' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 876'
+ "<br>" +
break;
'Total Recovery : 87,021' ;
case 16:
imgsrc.src="coimbatore-tamil-nadu.jpg";
district.innerHTML="Coimbatore";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 2,31,863' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 2,201'
+ "<br>" +
break;
'Total Recovery:5,29,907' ;
case 17:
imgsrc.src="karur.jpg";
district.innerHTML="Karur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 22,836' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 351'
+ "<br>" +
break;
'Total Recovery : 22,297' ;
case 18:
imgsrc.src="tiruvarur.jpg";
district.innerHTML="Triuvarur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 28,410' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 604
' + "<br>" +
break;
'Total Recovery : 27,628' ;
case 19:
imgsrc.src="tiruchirappalli1.jpg";
district.innerHTML="Tiruchirappalli";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 73,209' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 979'
+ "<br>" +
break;
'Total Recovery : 71,481' ;
case 20:
imgsrc.src="nagapattinam.jpg";
district.innerHTML="Nagapattinam";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 19,075' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 295'
+ "<br>" +
break;
'Total Recovery : 18,353' ;
case 21:
imgsrc.src="nilgris.jpg";
district.innerHTML="Nilgris";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 31,048' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 186'
+ "<br>" +
'Total Recovery : 30,369' ;
break;
case 22:
imgsrc.src="erode.jpg";
district.innerHTML="Erode";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 95,559' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 641'
+ "<br>" +
break;
'Total Recovery : 93,208' ;
case 23:
imgsrc.src="Salem.jpg";
district.innerHTML="Salem";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 94,328' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 1,597'
+ "<br>" +
break;
'Total Recovery : 91,888' ;
case 24:
imgsrc.src="Namakkal.jpg";
district.innerHTML="Namakkal";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 47,771' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 458'
+ "<br>" +
break;
'Total Recovery : 46,739' ;
case 25:
imgsrc.src="peramballur.jpg";
district.innerHTML="Perambalur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 11,579' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 225'
+ "<br>" +
break;
'Total Recovery : 11,245' ;
case 26:
imgsrc.src="viluppuram.jpg";
district.innerHTML="Viluppuram";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 44,205' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 341'
+ "<br>" +
break;
'Total Recovery : 43,506' ;
case 27:
imgsrc.src="ariyalur.jpg";
district.innerHTML="Ariyalur";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 16,037' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 240'
+ "<br>" +
break;
'Total Recovery : 15,560' ;
case 28:
imgsrc.src="images2.jpg";
district.innerHTML="Cuddalore";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 61,220' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 821'
+ "<br>" +
'Total Recovery : 59,622' ;
break;
case 29:
imgsrc.src="kanchipuram.jpg";
district.innerHTML="kanchipuram";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 72,144' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 1,213'
+ "<br>" +
break;
'Total Recovery : 70,483' ;
case 30:
imgsrc.src="Krishnagiri_temple.jpg";
district.innerHTML="krishnagiri";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 41,638' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 325'
+ "<br>" +
break;
'Total Recovery : 41,004' ;
case 31:
imgsrc.src="Dharmapuri.jpg";
district.innerHTML="Dharmapuri";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 26,415' + "<br>"+ 'Total
Deaths &nbsp; &nbsp;: 23
' + "<br>" +
break;
case 32:
'Total Recovery : 25,862' ;
imgsrc.src="download (1).jpg";
district.innerHTML="Tiruvannamalai";
para.innerHTML ='Total cases &nbsp; &nbsp; &nbsp;: 52,586' + "<br>"
+ 'Total Deaths &nbsp; &nbsp;: 641'
+ "<br>" +
break;
'Total Recovery : 51,442' ;
default: alert('some error');
}
}
function disable()
{
var covid_cases = document.getElementById('covid_cases');
covid_cases.style.visibility= "visible";
var imgsrc = covid_cases.getElementsByTagName('img')[0];
imgsrc.style.visibility = "hidden";
var district
=covid_cases.getElementsByTagName('h1')[0].style.visibility="hidden";
var hr= covid_cases.getElementsByTagName('hr')[0];
hr.style.visibility = "hidden";
var para = covid_cases.getElementsByTagName('p')[0];
para.style.visibility= "hidden";
covid_cases.getElementsByTagName('span')[0].style.visibility= "visible";
}
