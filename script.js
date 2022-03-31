let outputScreen = document.getElementById("output");

const display = (number) => {
    outputScreen.value += number;
    outputScreen.value = outputScreen.value.replace(/^0+/, '');
}

const calculate = () => {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err) {
        alert("Please check the input");
    }
}

const Clear = () => {
    outputScreen.value= '';
}

const del = () => {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
