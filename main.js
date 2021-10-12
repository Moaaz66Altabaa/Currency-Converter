document.addEventListener("DOMContentLoaded",function(){

        document.querySelector("form").onsubmit = function(){
        
        const firstcurrency = document.querySelector("#firstcurrency").value.toUpperCase();

fetch(`https://api.exchangerate.host/latest?base=${firstcurrency}`).then((res)=> res.json()).then((data) =>{

        const secondcurrency = document.querySelector("#secondcurrency").value.toUpperCase();      
        
        const rate = data.rates[secondcurrency];
        
           if(rate !== undefined){ document.querySelector("h1").innerHTML = `1 ${firstcurrency} equals ${rate.toFixed(2)} ${secondcurrency}`; }
    
                 else{document.querySelector("h1").innerHTML = "you enterd an invalid currency"}
        

}).catch((error) => {console.log("error :" + error);});
return false;
        }

})

//download xampp