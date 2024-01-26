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

let madLibInput1 = document.getElementById("madLibInput1");
let madLibInput2 = document.getElementById("madLibInput2");
let madLibInput3 = document.getElementById("madLibInput3");
let madLibInput4 = document.getElementById("madLibInput4");
let madLibInput5 = document.getElementById("madLibInput5");
let madLibInput6 = document.getElementById("madLibInput6");
let madLibInput7 = document.getElementById("madLibInput7");
let madLibInput8 = document.getElementById("madLibInput8");
let madLibInput9 = document.getElementById("madLibInput9");
let madLibInput10 = document.getElementById("madLibInput10");
let madLibText = document.getElementById("madLibText");
let madLibBtn = document.getElementById("madLibBtn");

let oddOrEvenInput = document.getElementById("oddOrEvenInput");
let oddOrEvenText = document.getElementById("oddOrEvenText");
let oddOrEvenBtn = document.getElementById("oddOrEvenBtn");

let reverseItWordsInput = document.getElementById("reverseItWordsInput");
let reverseItWordsText = document.getElementById("reverseItWordsText");
let reverseItWordsBtn = document.getElementById("reverseItWordsBtn");

let reverseItNumbersInput = document.getElementById("reverseItNumbersInput");
let reverseItNumbersText = document.getElementById("reverseItNumbersText");
let reverseItNumbersBtn = document.getElementById("reverseItNumbersBtn");

let restaurantPickerInput = document.getElementById("restaurantPickerInput");
let restaurantPickerText = document.getElementById("restaurantPickerText");
let restaurantPickerBtn = document.getElementById("restaurantPickerBtn");

let magic8BallInput = document.getElementById("magic8BallInput");
let magic8BallText = document.getElementById("magic8BallText");
let magic8BallBtn = document.getElementById("magic8BallBtn");

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

const MadLib = async (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/MadLib/MadLib/${input1}/${input2}/${input3}/${input4}/${input5}/${input6}/${input7}/${input8}/${input9}/${input10}`);
    const data = await promise.text();
    return data;
}

const OddOrEven = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/OddOrEven/OddOrEven/${input}`);
    const data = await promise.text();
    return data;
}

const ReverseItWords = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${input}`);
    const data = await promise.text();
    return data;
}

const ReverseItNumbers = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItNumbersOnly/ReverseItNumbersOnly/${input}`);
    const data = await promise.text();
    return data;
}

const RestaurantPicker = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${input}`);
    const data = await promise.text();
    return data;
}

const Magic8Ball = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();
    return data
}

if(sayHelloBtn){
    sayHelloBtn.addEventListener('click', async () => {
    
        if(sayHelloInput.value === ""){
            sayHelloText.textContent = "Please enter a valid response!!!!!";
        }else{
            sayHelloText.textContent = await SayHello(sayHelloInput.value);
        }      
        sayHelloInput.value = ""; 
});
}

if(add2NumbersBtn){
    add2NumbersBtn.addEventListener('click', async () => {
        
        if(add2NumbersInput1.value === "" || add2NumbersInput2.value === ""){
            add2NumbersText.textContent = "Please enter a valid response!!!!!";
        }else{
            add2NumbersText.textContent = await Add2Numbers(add2NumbersInput1.value, add2NumbersInput2.value);  
        }
        add2NumbersInput1.value = "";
        add2NumbersInput2.value = ""; 
    });
}

if(askingQuestionsBtn){
    askingQuestionsBtn.addEventListener('click', async () => {

        if(askingQuestionsInput1.value === "" || askingQuestionsInput2.value === ""){
            askingQuestionsText.textContent = "Please enter a valid response!!!!!";
        }else{
            askingQuestionsText.textContent = await AskingQuestions(askingQuestionsInput1.value, askingQuestionsInput2.value);         
        }
        askingQuestionsInput1.value = "";
        askingQuestionsInput2.value = "";
    });
}

if(greaterOrLessBtn){
    greaterOrLessBtn.addEventListener('click', async () => {

        if(greaterOrLessInput1.value === "" || greaterOrLessInput2.value === ""){
            greaterOrLessText.textContent = "Please enter a valid response!!!!!";
        }else{
            greaterOrLessText.textContent = await GreaterOrLess(greaterOrLessInput1.value, greaterOrLessInput2.value);
        }
        greaterOrLessInput1.value = "";
        greaterOrLessInput2.value = "";
    });
}

if(madLibBtn){
    madLibBtn.addEventListener('click', async() => {

        if(madLibInput1.value === "" || madLibInput2.value === "" || madLibInput3.value === "" || madLibInput4.value === "" || madLibInput5.value === "" || madLibInput6.value === "" || madLibInput7.value === "" || madLibInput8.value === "" || madLibInput9.value === "" || madLibInput10.value === ""){
            madLibText.textContent = "Please enter a valid response!!!!!";
        }else{
            madLibText.textContent = await MadLib(madLibInput1.value, madLibInput2.value, madLibInput3.value, madLibInput4.value, madLibInput5.value, madLibInput6.value, madLibInput7.value, madLibInput8.value, madLibInput9.value, madLibInput10.value);
        }
        madLibInput1.value = "";
        madLibInput2.value = "";
        madLibInput3.value = "";
        madLibInput4.value = "";
        madLibInput5.value = "";
        madLibInput6.value = "";
        madLibInput7.value = "";
        madLibInput8.value = "";
        madLibInput9.value = "";
        madLibInput10.value = "";
    });
}

if(oddOrEvenBtn){
    oddOrEvenBtn.addEventListener('click', async () => {

        if(oddOrEvenInput.value === ""){
            oddOrEvenText.textContent = "Please enter a valid response!!!!!";
        }else{
            oddOrEvenText.textContent = await OddOrEven(oddOrEvenInput.value);
        }
        oddOrEvenInput.value = "";

    });
}

if(reverseItWordsBtn){
    reverseItWordsBtn.addEventListener('click', async () => {

        if(reverseItWordsInput.value === ""){
            reverseItWordsText.textContent = "Please enter a valid response!!!!!";
        }else{
            reverseItWordsText.textContent = await ReverseItWords(reverseItWordsInput.value);
        }
        reverseItWordsInput.value = "";

    });
}

if(reverseItNumbersBtn){
    reverseItNumbersBtn.addEventListener('click', async () => {

        if(reverseItNumbersInput.value === ""){
            reverseItNumbersText.textContent = "Please enter a valid response!!!!!";
        }else{
            reverseItNumbersText.textContent = await ReverseItNumbers(reverseItNumbersInput.value);
        }
        reverseItNumbersInput.value = "";

    });
}

if(restaurantPickerBtn){
    restaurantPickerBtn.addEventListener('click', async () => {

        if(restaurantPickerInput.value === ""){
            restaurantPickerText.textContent = "Please enter a valid response!!!!!";
        }else{
            restaurantPickerText.textContent = await RestaurantPicker(restaurantPickerInput.value);
        }
        restaurantPickerInput.value = "";

    });
}

if(magic8BallBtn){
    magic8BallBtn.addEventListener('click', async () => {

        if(magic8BallInput.value === ""){
            magic8BallText.textContent = "Please enter a valid response!!!!!";
        }else{
            magic8BallText.textContent = await Magic8Ball();
        }
        magic8BallInput.value = "";

    });
}