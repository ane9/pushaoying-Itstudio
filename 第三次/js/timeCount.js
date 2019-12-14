let t;
let b=0//用来判断是否点击了开始按钮
function clock(){
    let today = new Date();
     t = today.toLocaleString();
    document.getElementById("time").innerHTML=t;
}      
setInterval(clock,1000);
//let T;
    let button1=document.getElementById("start");
    let button2=document.getElementById("stop");
    button1.addEventListener("click",a);
    button2.addEventListener("click",stopCount);
    let h=0;
    let m=0;
    let s=0;
    function timeCount(){
    let timeKeep=document.getElementById("timeKeep");
    s=s+1;
    if(s>60){
        m=m+1;
        s=0;}
        if(m>60){
            h=h+1;
            m=0;
        }   
    timeKeep.innerHTML=h+"H "+m+"M "+s+"S ";
    //let T=setTimeout(timedCount(),1000)   
}
let ts
let nowtime
function a(){
    if(ts!=null){
        clearInterval(ts)
        h=0;m=0;s=0;
        timeKeep.innerHTML=h+"H "+m+"M "+s+"S ";
    }
    ts=setInterval(timeCount,1000);
    nowtime=t;
    b=1
}
let ul=document.getElementById("ul");
let button3;
// let i=0;
function stopCount(){
    clearInterval(ts);
    if(b==1){
    h=0;m=0;s=0;
    timeKeep.innerHTML=h+"H "+m+"M "+s+"S ";
    let li=document.createElement("li");
    ul.appendChild(li);
    li.innerHTML=nowtime+"-"+t;
    // let a=new Array()
    // for(i=0;i<i;i++)
    // {a[i]=li}
    // console.log(a)
    // console.log(a.indexOf(li))
    // i=i+1;
    //li.setAttribute("id","li"+i)
    button3=document.createElement("button");
    li.appendChild(button3);
    button3.innerHTML="删除";
    button3.setAttribute("id","delete");
    button3.addEventListener("click",remove)
    //let deleteLi=document.getElementById("li"+i)
    //let deleteLi=a.indexOf(li)
    // console.log(deleteLi)
   function remove(){
  ul.removeChild(li);}
   }
}