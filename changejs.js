
 function myFunction()
 {
 var checkflag=0;
 var SignumID=document.getElementById('SignumID').value;
 var OldPassword=document.getElementById('OldPassword').value;
 var NewPassword=document.getElementById('NewPassword').value;
//alert('SignumID'); 
//alert('OldPassword'); 
//alert('NewPassword'); 

 if(window.XMLHttpRequest)
{
 xmlHttp_ch=new XMLHttpRequest();
}
 else
{
 xmlHttp_ch=new ActiveXObject("Microsoft.XMLHTTP");
}
 xmlHttp_ch.onreadystatechange=function()
{

if (xmlHttp_ch.readyState === 4 || xmlHttp_ch.readyState === "complete")
{

//alert('reached here');
xmlDoc_ch = xmlHttp_ch.responseXML;

//alert('xmlDoc_ch');
var flag = xmlDoc_ch.getElementsByTagName("flag"); 
checkflag = flag[0].childNodes[0].nodeValue;
//alert('checkflag');	
if (checkflag === '1')
{
alert ("Incorrect information!");
}
else 
{alert ("Password is successfully changed, check your mail!");}
}
}
 //alert ("http://10.184.20.93/UM/USERMANAGEMENT/ch.php?SignumID=" + SignumID + "&OldPassword=" + OldPassword + "&NewPassword=" + NewPassword);
 xmlHttp_ch.open("POST","http://10.184.20.93/UM/USERMANAGEMENT/ch.php?SignumID=" + SignumID + "&OldPassword=" + OldPassword + "&NewPassword=" + NewPassword,false);
 xmlHttp_ch.send();
 //
 }

			   



