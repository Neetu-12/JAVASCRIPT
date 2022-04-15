var a=(name)=>{
    if(name==="vinod"){
        return function(topic){
            console.log(`hiii ${name}.what is ${topic}? plz.. explain us`);
        }
    }

    if(name==="neetu"){
        return function(topic){
            console.log(`hiii ${name}.what is ${topic}? plz.. explain us`);
        }
    }

    if(name==="shubh"){
        return function(topic){
            console.log(`hiii ${name}.what is ${topic}? plz.. explain us`);
        }
    }
    else{
        return function(){
            console.log("Welcome to Interview");
        }
    }
}
a("vinod")("UI")
a("neetu")("call-stack")
a("shubh")("react")