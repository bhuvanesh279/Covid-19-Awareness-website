<!DOCTYPE html>
<html>
<head>
<title>Vaccine registration</title>
<script>
function read()
{
var name=document.getElementById('name');
var input = document.getElementsByTagName('input');
alert("Registration done successfully");
}
</script>
</head>
<body style="background:url(vaccine_img.png); background-repeat : no-repeat;
background-size : cover;">
<div style="position:absolute;right:50px; top:50px; background-color:
rgba(255,255,255,0.3);
backdrop-filter:blur(3px);">
<table border="3" >
<caption style="color:red;"><b><b></caption>
<form action ="index.html" >
<tr>
<th colspan = 2><p align="center"> Vaccine Registration</p></th>
</tr>
<tr>
<td><b>Name:</b></td>
<td><input id="name" type="text" size="40" maxlength="100" placeholder="Enter the
name"></td>
<script>
</script>
</tr>
<tr>
<td><b> Vaccine:</b></td>
<td>
<input type="radio" name="vaccine" value="Covaccine">
<label for="vaccine">Covaccine</label><br>
<input type="radio" name="vaccine" value="Covidshield">
<label for="vaccine">Covidshield</label><br>
<input type="radio" name="vaccine" value="Sputnik">
<label for="vaccine">Sputnik</label><br>
</td>
</tr>
<td><b> dose selection:</b></td>
<td>
<input type="radio" name="dose selection" value="Dose 1">
<label for="vaccine">Dose 1</label><br>
<input type="radio" name="dose selection" value="Dose 2">
<label for="vaccine">Dose 2</label><br>
</td>
</tr>
<tr>
<td><b>Email Id:</b></td>
<td><input id="email id" type="text" size="40" maxlength="100" placeholder="enter
with @ "></td>
</tr>
<tr>
<td><b> Gender:</b></td>
<td>
<input type="radio" name="Gender" value="Male">
<label for="Gender">Male</label><br>
<input type="radio" name="Gender" value="Female">
<label for="Gender">Female</label><br>
<input type="radio" name="Gender" value="Others">
<label for="Gender">Others</label><br>
</td>
</tr>
<tr>
<td><b>Phone number:</b></td>
<td><input id="phone number" type="text" size="40" maxlength="100"
placeholder="enter minimum 10 number "></td>
</tr>
<tr>
<td><b> Histroy of medications:</b></td>
<td>
<input type="radio" name="medications" value="Yes">
<label for="medications">Yes</label><br><br>
<input type="radio" name="medications" value="No">
<label for="medications">No</label><br>
</td>
</tr>
<td><b>D.O.B:</b></td>
<td><input id="dob" type="Date" size="40" maxlength="100" ></td>
<tr>
<td><b>City:</b></td>
<td><input id="city" type="text" size="40" maxlength="100" ></td></tr>
<tr>
<td><b>Nationality:</b></td>
<td><input id="nationality" type="text" size="40" maxlength="100" ></td></tr>
<tr>
<td><b>Address:</b></td>
<td><input id="address" type="text" size="40" maxlength="100" ></td></tr>
<tr>
<td colspan = "2">
<input type="submit" onclick ="read();">
</td>
</tr>
</table>
</form>
</div>
<br><br>
</center>
</body>
</html>