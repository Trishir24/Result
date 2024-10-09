


function result_my(){
    var a=parseInt(document.getElementById("n1").value)
    var b=parseInt(document.getElementById("n2").value)
    var c=parseInt(document.getElementById("n3").value)
    var d=parseInt(document.getElementById("n4").value)
    var e=parseInt(document.getElementById("n5").value)
     total=(a+b+c+d+e)
     avg=total/5

    document.write("<h2> Your Total Marks out of 500 :</h2>",total,"<br>")
    
    document.write("<h2> Your Avarage Marks :</h2>",avg,"<br>")
    

    if(avg>=90)
    {
        document.write("<h1>congrats! You are Grade is A+ </h1>")

    }
    else if(avg>=80 && avg<90)
    {
        document.write("<h1>congrats! You are Grade is A </h1>")

    }
   else if(avg>=70 && avg<80)
    {
        document.write("<h1>congrats! You are Grade is B+ </h1>")

    }
    else if(avg>=60 && avg<70)
    {
        document.write("<h1>congrats! Your are Grade is B </h1>")
    }
    else if(avg>=40 && avg<60)
    {
        document.write("<h1>congrats! Your are Grade is c </h1>")
    }
    else
    {
        document.write("<h1>Sorry! You are fall </h1>")
    }
}
