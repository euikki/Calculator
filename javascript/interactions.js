function insert(number){
    let num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num + number;
}


function clean(){
    document.getElementById('result').innerHTML = "";
}


function back(){
    let value = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = value.substring(0, value.length -1)
}

function resultOperation(){
    let operation = document.getElementById('result').innerHTML;
    
    if(operation){
        document.getElementById('result').innerHTML = eval(operation)
    } else {
        document.getElementById('result').innerHTML = "--_--";
    }

}