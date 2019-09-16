function textSubmit(){
	//document.writeln( "<h1>Hello, " + document.getElementById("myInput").value + 
    //           ", welcome to JavaScript programming!</h1>" );
		   
	document.getElementById("myH1").innerHTML = "Hello, " + window.prompt( "Please enter your name", "Name" ) + 
				",welcome to JavaScript programming!";
    
}