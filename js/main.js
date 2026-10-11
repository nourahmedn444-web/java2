function converValue() {
    var dollar = document.getElementById('dollar').value;
    var result = document.getElementById('result');
    if(dollar==""){
        result.innerHTML="Enter Data";
    }else if(isNaN(dollar)){
        result.innerHTML="Enter Number not text";
    }else if(dollar<0){
     result.innerHTML="Enter positive number"
    }else if(dollar==0){
        result.innerHTML="Enter number rather than zero"
    }
    else{
        result.innerHTML = dollar *50 +"Egyption Pound";
    }
    return false;
}