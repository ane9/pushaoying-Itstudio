// let div =document.getElementById("room")
// console.log(div)
// let div1=document.getElementsByClassName("big")
// console.log(div1)
// div.style.height="300px";
// div.style.background="red";
// div.addEventListener("click",color);
// function color()
// {div.style.background="black"};

// let today=new Date();
// let p=document.getElementById("");
// p.value=today;

var tew=document.getElementById('cont')
        var a=null;
        var p1=null;

        function getTime(){     	
        	var date=new Date();

        	var year=date.getFullYear();
        	var month=date.getMonth()+1;
        	var day=date.getDate();

            var hour=date.getHours();
            var minute=date.getMinutes();
            var second=date.getSeconds();

            if (hour<10) {
            	hour='0'+hour;
            }
            if (minute<10) {
            	minute='0'+minute;
            }
            if (second<10) {
            	second='0'+second;
            }


            var time=year+'/'+month+'/'+day+'/'+hour+':'+minute+':'+second
              tew.innerHTML=time;
              return time;
        }
        getTime();
        setInterval(getTime,1000);

             var record=document.getElementById('record')
             
             function before(){
                 
                 var _hour=0;
                 var _min=0;
                 var _scod=0;
                 var _time=_hour+'H '+_min+'M '+_scod+'S ';
                 record.innerHTML=_time;
                 return _time;
             }
             before();
            
             function _before(){  
                 _hour=0;
                 _min=0;
                 _scod=0;
         a=setInterval( function react(){
                    _scod++;
                    if(_scod>60)
                         {
                             _scod=0;
                             _min++;
                         }
                     if(_min>60)
                        {
                            _min=0;
                            _hour++;
                        }
                        var _time=_hour+'H '+_min+'M '+_scod+'S ';
                        record.innerHTML=_time;
                 },1000)
                
             }
             function clear(){
                clearInterval(a)
             } 
             
            
             var start=document.getElementById('start');
             start.addEventListener('click',first)
             start.addEventListener('click',clear)
             start.addEventListener('click',_before)
             
            
             var end=document.getElementById('end')
             end.addEventListener('click',ending);
             

             function ending(){
               
                clearInterval(a)
                before();
                 var p=document.createElement('p')
                document.body.appendChild(p);
                p.textContent=getTime()

                 var button=document.createElement('button')
                 p.appendChild(button);
                 button.textContent='删除'
                
                 function die(){
                     p.textContent=''
                 }
                button.addEventListener('click',die)
  }
