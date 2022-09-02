let a=[0,0,0,0,0,0,0,0,0,0];
function answers(q,ans,nq){
    a[q-1]=ans;
    if(nq>0){
      $(".q").removeClass("active");
        $(".q"+nq).addClass("active");
    }
    else{
        if((a[0],a[1],a[3],a[7],a[5],a[8]==1)&&(a[2],a[4],a[6],a[9]==0||1)){
            $(".q").removeClass("active");
            $(".result1").addClass("active"); 
        }
        else if((a[1],a[0],a[3]==1)&&(a[2],a[5],a[4],a[6],a[9],a[7],a[8]==0||1)){
            $(".q").removeClass("active");
            $(".result2").addClass("active"); 
        }
        else{
            $(".q").removeClass("active");
            $(".result3").addClass("active"); 
        }
    }
}