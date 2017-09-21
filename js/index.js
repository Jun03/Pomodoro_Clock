

$(document).ready(function(){
  var count;
var minutes=25; 
var seconds=0;
  var stime=25;
  var btime=5;
var pause=false;

/////////////////////////////////////////////
  function counting(){
  
    if(minutes === 0 && seconds === 0){
      if($(".main").text().trim()==="Session"){
        $(".main").text("Break");
        minutes=btime;
        document.getElementById("run").src="https://images.cooltext.com/4998532.png";
  
        $("#time").html(minutes+" : "+ "0" + seconds);
      }
      else if($("#title").text().trim()==="Break"){
        $("#title").text("Session");
        minutes=stime;
        $("#time").html(minutes+" : "+ "0" + seconds);
         document.getElementById("run").src="http://2.bp.blogspot.com/-oVi4AN73VtY/U0lxKaiUxvI/AAAAAAAAIZc/J_VPzOc2bH8/s1600/running.gif";
  
        
      }
    }
    else {
      if(seconds ===0){
        seconds=60;
        minutes--;
      }
      seconds--;
      if(seconds<10){
        $("#time").html(minutes+" : "+ "0" + seconds);
      }
      else{
        $("#time").html(minutes+" : " + seconds);
      }
    }
  }
  
  $("#plus_s").click(function(){
    if(pause === false)
{
  stime++;
  $("#session").html(stime);
  $("#time").html(stime+ ": 00");
  $("#title").text("Session");
  document.getElementById("run").src="http://2.bp.blogspot.com/-oVi4AN73VtY/U0lxKaiUxvI/AAAAAAAAIZc/J_VPzOc2bH8/s1600/running.gif";
  
  ///
  seconds=0;
  minutes=stime;
}});
//////////////////////
  
   $("#minus_s").click(function(){
    if(pause === false&&stime>1)
{
  stime--;
  $("#session").html(stime);
  $("#time").html(stime+ ": 00");
  $("#title").text("Session");
  document.getElementById("run").src="http://2.bp.blogspot.com/-oVi4AN73VtY/U0lxKaiUxvI/AAAAAAAAIZc/J_VPzOc2bH8/s1600/running.gif";
  
  ///
  seconds=0;
  minutes=stime;
}});
/////////////
  
  
  $("#plus_b").click(function(){
    if(pause === false)
{
  btime++;
  $("#break").html(btime);
  $("#time").html(stime+ ": 00");
  $("#title").text("Session");
  document.getElementById("run").src="http://2.bp.blogspot.com/-oVi4AN73VtY/U0lxKaiUxvI/AAAAAAAAIZc/J_VPzOc2bH8/s1600/running.gif";
  
  ///
  seconds=0;
  minutes=stime;
}});
  
 $("#minus_b").click(function(){
    if(pause === false&&btime>1)
{
  $("#title").text("Session");
  btime--;
  $("#break").html(btime);
  $("#time").html(stime+ ": 00");
  document.getElementById("run").src="http://2.bp.blogspot.com/-oVi4AN73VtY/U0lxKaiUxvI/AAAAAAAAIZc/J_VPzOc2bH8/s1600/running.gif";
  
  ///
  seconds=0;
  minutes=stime;
}});
  
  //////////////////////////////////////////////
  $("#clock").click(function(){
    if(pause===false){
    count=setInterval(counting,1000);
    pause=true;
    }
    else if(pause==true){
      clearInterval(count);
      pause=false;
    }
    
  });
  
  
});