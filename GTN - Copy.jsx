

var x = Math.floor(Math.random() * 100);
console.log(x);

var z = document.getElementById('para');
var z2 = document.getElementById('ara');
var z3 = document.getElementById('cont');
var arr =[];
var count = 0;



function clickme(){
    var n = document.getElementById("a").value;
    console.log(n);
    count++;

    if(n==""){
        alert("Why are you guessing it blank?");
    }
    else{
        arr.push(n);
        if(n>100 || n<1){
            alert("Guess between 1 to 100 to win!!")
        }
        else if(n<x){
            let y="Your guess is low";
            z.innerHTML = y;
        }
        else if(n>x){
            let y="Your guess is high";
            z.innerHTML = y;
        }
        else if(n==x){
            let y = "You Won!!";
           // return y;
            //console.log(y);
            z.innerHTML = y; 
             
        }
        else{
            let y = "Wrong guess";
            //return y;
            console.log(y);
            z.innerHTML = y;
        }

        z2.innerHTML = "Your inputs are " +arr;
        z3.innerHTML = "Your attempts "+count;
    }
 //   for(let i=0; i<arr.length;i++){
    //    z2.innerHTML = "Your inputs are" +arr[i];
    
  //  }  
}
