
function generate(){
    const generatePin = Math.round(Math.random()*10000);
    document.getElementById('generate-display').value = generatePin;
    const pinLength = generatePin.toString();
    if( pinLength.length < 4 ){
        generate();
    }
    document.getElementById('display').value = "";
    return generatePin;
}

function display(value){
    const displayPin =  document.getElementById('display').value += value;
    return displayPin;
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

function backspace() {
    const input = document.getElementById('display').value;
    const text = input.toString();
    const editedText = text.slice(0, -1);
    document.getElementById('display').value = editedText;
}

document.getElementById('wrong').style.display = 'none';
document.getElementById('verified').style.display = 'none';

function submit(display) {
    const generatedPin = document.getElementById('generate-display').value; 
    const typedPin = display;
    const pin = parseInt(typedPin);
    if( generatedPin == pin ){
        document.getElementById('verified').style.display = 'flex';
        document.getElementById('wrong').style.display = 'none';
    }
    else{
        document.getElementById('wrong').style.display = 'flex';
        document.getElementById('display').value = "";
    }
}