 var x=0;
function chay()
      {
                var tag_trong=document.getElementById("trong");
                tag_trong.style.transform="translateX(-"+x+"px)";
                tag_trong.style.transition="transform 3s";
                x=x+800;
                if(x>=3200) x=0;
                setTimeout("chay()",3000);
                
     }