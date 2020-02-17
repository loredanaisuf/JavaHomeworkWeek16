
function fibonacci() {
	let var1, var2,var3;
	let i;
	let result='';
	let n=document.getElementById("n").value;
	if(isNaN(n))
		document.getElementById("result1").innerHTML='Please insert a number';
	else if(n<2)
		document.getElementById("result1").innerHTML='Insert a number bigger than 2';
	else{
		var1=0;
		var2=1;
		result='<ol>'
		result += '<li>' + var1 + '</li>';
		result += '<li>' + var2 + '</li>';
		//console.log(var1);
		//console.log(var2);
		for(i=3;i<=n;i++){
			var3=var1+var2;
	        result += '<li>' + var3 + '</li>';
	        //console.log(var3);
	        var1=var2;
	        var2=var3;
		}
		result+='</ol>';
		document.getElementById("result1").innerHTML=result;
		result='';
	}
}

function verifyCNP(){

	let CNP=document.getElementById("CNP").value;
	console.log(CNP);
	let year=document.getElementById("year").value;
	console.log(year);
	let month=document.getElementById("month").value;
	console.log(month);
	let data=document.getElementById("data").value;
	console.log(data);

	if(CNP==" "|| CNP.length<13)
		document.getElementById("result2").innerHTML="Please insert a valid CNP";
	else{
		if(CNP.substring(1,3)==year.substring(2,4) && CNP.substring(3,5)==month && CNP.substring(5,7)==data)
			document.getElementById("result2").innerHTML="The CNP is valid";
		else
			document.getElementById("result2").innerHTML="The CNP isn't valid";
	}

}
	
