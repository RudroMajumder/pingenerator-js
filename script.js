
function generate(){
    const generate = Math.ceil(Math.random()*10000);
    document.getElementById('generate-display').value = generate;
    return generate;
}
function display(value){
   const display =  document.getElementById('display').value += value;
   return display;
}
function remove(){
    const item = document.getElementById('value-c').innerText;
    if( item === 'C') {
        document.getElementById('display').value = "";
        document.getElementById('generate-display').value = "";
    }
    document.getElementById('wrong').style.display = 'none';
    document.getElementById('verified').style.display = 'none';
}
document.getElementById('wrong').style.display = 'none';
document.getElementById('verified').style.display = 'none';
function submit(display) {
    const generatedPin = document.getElementById('generate-display').value; 
    const typedPin = display;
    const pin = parseInt(typedPin);
    let tryLeft = document.getElementById('try-left').innerText;
    if( generatedPin == pin ){
        document.getElementById('verified').style.display = 'flex';
    }
    else{
        document.getElementById('wrong').style.display = 'flex';
    }
}