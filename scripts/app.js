let sayHelloInput = document.getElementById("sayHelloInput");
let sayHelloText = document.getElementById("sayHelloText");
let sayHelloBtn = document.getElementById("sayHelloBtn");

let add2NumbersInput1 = document.getElementById("add2NumbersInput1");
let add2NumbersInput2 = document.getElementById("add2NumbersInput2");
let add2NumbersText = document.getElementById("add2NumbersText");
let add2NumbersBtn = document.getElementById("add2NumbersBtn");

let askingQuestionsInput1 = document.getElementById("askingQuestionsInput1");
let askingQuestionsInput2 = document.getElementById("askingQuestionsInput2");
let askingQuestionsText = document.getElementById("askingQuestionsText");
let askingQuestionsBtn = document.getElementById("askingQuestionsBtn");

let greaterOrLessInput1 = document.getElementById("greaterOrLessInput1");
let greaterOrLessInput2 = document.getElementById("greaterOrLessInput2");
let greaterOrLessText = document.getElementById("greaterOrLessText");
let greaterOrLessBtn = document.getElementById("greaterOrLessBtn");


const SayHello = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/controller/SayHell/${input}`);
    const data = await promise.text();
    return data;
}

const Add2Numbers = async (input1, input2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Add2Numbers/Adding2Num/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

const AskingQuestions = async (input1, input2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Ask2Questions/Ask2Questions/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

const GreaterOrLess = async (input1, input2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

if(sayHelloBtn){
    sayHelloBtn.addEventListener('click', async () => {
    
        if(sayHelloInput.value === ""){
            sayHelloText.textContent = "Please enter a response!!!!!";
            sayHelloInput.value = ""; 
        }else{
            sayHelloText.textContent = await SayHello(sayHelloInput.value);
            sayHelloInput.value = "";   
        }      
    
});
}

if(add2NumbersBtn){
    add2NumbersBtn.addEventListener('click', async () => {
        
        if(add2NumbersInput1.value === "" || add2NumbersInput2.value === ""){
            add2NumbersText.textContent = "Please enter a response!!!!!";
            add2NumbersInput1.value = "";
            add2NumbersInput2.value = "";
        }else{
            add2NumbersText.textContent = await Add2Numbers(add2NumbersInput1.value, add2NumbersInput2.value);
            add2NumbersInput1.value = "";
            add2NumbersInput2.value = ""; 
        }

    });
}

if(askingQuestionsBtn){
    askingQuestionsBtn.addEventListener('click', async () => {

        if(askingQuestionsInput1.value === "" || askingQuestionsInput2.value === ""){
            askingQuestionsText.textContent = "Please enter a response!!!!!";
            askingQuestionsInput1.value = "";
            askingQuestionsInput2.value = "";
        }else{
            askingQuestionsText.textContent = await AskingQuestions(askingQuestionsInput1.value, askingQuestionsInput2.value);
            askingQuestionsInput1.value = "";
            askingQuestionsInput2.value = "";
        }
    });
}

if(greaterOrLessBtn){
    greaterOrLessBtn.addEventListener('click', async () => {

        if(greaterOrLessInput1.value === "" || greaterOrLessInput2.value === ""){
            greaterOrLessText.textContent = "Please enter a response!!!!!";
            greaterOrLessInput1.value = "";
            greaterOrLessInput2.value = "";
        }else{
            greaterOrLessText.textContent = await GreaterOrLess(greaterOrLessInput1.value, greaterOrLessInput2.value);
            greaterOrLessInput1.value = "";
            greaterOrLessInput2.value = "";
        }

    });
}