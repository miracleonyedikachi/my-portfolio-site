
wordArray=["I'm a Frontend Web Developer","I build web application with good UX","I build web applications that are scalable","I build web applications that are secure","I build web applications that are high Performing"];
myIndex=0;
var text=document.getElementById("frontend");
function change(){
    text.innerHTML=wordArray[myIndex];
    myIndex++;
    if(myIndex>=wordArray.length){
        myIndex=0;
    }
}
setInterval(change,4000);
document.querySelector(".group").addEventListener("mouseover",setColor);
function setColor(e){
    var linear=e.offsetX;
    var vertical=e.offsetY;
    document.querySelector(".contactdhgroup").style.background=`rgb(${linear},${vertical},50)`;
}
