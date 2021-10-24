var k;
var isauto=true;
const autocarousel=()=>{

    var cnt=0;
    var y=document.getElementsByClassName("slide");
    var x=document.getElementsByClassName("text");
    for(cnt=0;cnt<y.length;cnt++){
        y[cnt].style.display="none";
        x[cnt].style.display="none";
    }
    k++;
    /**
     * After the last slide, autocarousel should again start from first slide
     */
    if (k > y.length) {
        k = 1
    }    

y[k-1].style.display="block";
x[k-1].style.display="block";
var getbutton =document.getElementsByClassName("slbutton");
for(var p=0;p<getbutton.length;p++){
    getbutton[p].className=getbutton[p].className.replace("active","");
}

getbutton[k-1].className +="active";
if(isauto===true){
    setTimeout(autocarousel,6000);
    /**
     * Calling autocarousel function to make the next slide active after 6 seconds
     */
}
}
window.addEventListener('load',firstauto)
function firstauto(){
    k=0;
    autocarousel();
}
/**
 * If a carousel button is clicked, after 6 seconds display the corresponding slide, and make isauto as false 
 * in order to stop the previous asynchronous timeout operation
 * Then resume the autocarousel, this time from the current index
 */
const clickbutton=(e)=>{
    isauto=false;
    k=e-1;
   setTimeout(()=>{
       isauto=true;
    autocarousel()
   },6000) 
}
