function Fibonacci()
{
    
// var nterms = int(input("How many terms? "));
var nterm=document.getElementById("G");
var nterms=nterm.value;
var n1=0;
var n2 =1;
var count = 0;


if (nterms <= 0)
  { alert("Please enter a positive integer");}

else if (nterms == 1)
   {alert("Fibonacci sequence upto:"+nterms)
   alert(n1)}

else
   
    alert("Fibonacci sequence:")
    while (count < nterms)
    {
        alert(n1)
        nth = n1 + n2
        n1 = n2
        n2 = nth
        count += 1      
    }
   
   
}