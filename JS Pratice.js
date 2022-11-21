function pqr()
{
    let a=document.getElementById("amount").value;
    let b=document.getElementById("percent").value;
    let c=document.getElementById("year").value;
    
    let SI=(a*b*c)/(100)
    document.getElementById('si').innerHTML="The amount is of Interest is "+ SI;
    if (a < 0 || b<0 || c < 0){
        alert("Enter positive number")
        document.getElementById('si').innerHTML=" ";
   
    }
    if(a==""|| b==""|| c==""){
        alert("Enter positive number")
        document.getElementById('si').innerHTML=" ";
    }
}