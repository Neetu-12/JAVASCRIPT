var city=require("readline-sync").question("enter your city:-")
if (city=="delhi"){
    console.log("Redfort");
}
else if(city=="agra"){
    console.log("Tajmahal");
}
else if(city=="jaipur"){
    console.log("Hawamahal");
}
else{
    console.log("wrong city choose");
}