const upperletter = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
const lowerLetter = [..."abcdefghijklmnopqrstuvwxyz"]
const Numbers = [..."0123456789"]
const Symbols = [..."!@#$%^&*><."]
const Result = document.getElementById("Result")
const Generatebtn = document.getElementById("Print-btn")
let FinalResult = "";

function copyPassword() {
    const Resultbtn = document.getElementById("Result-btn")
    Resultbtn.addEventListener("click", () => {
        navigator.clipboard.writeText(Result.textContent)
        alert("Password was Copied")
    })
}
copyPassword()

Generatebtn.addEventListener("click", () => {
    WhenClicked()
})

const PassWordLength = document.getElementById("passLength")
PassWordLength.value = 20;
PassWordLength.addEventListener("input", () => {
    let value = parseInt(PassWordLength.value);
    if (value < 4) PassWordLength.value = 4;
    if (value > 20) PassWordLength.value = 20;
})

function WhenClicked() {
    FinalResult = ""; 

    const UpperLet = document.getElementById("Upperlet")
    const LowerLet = document.getElementById("Lowerlet")
    const NumberVal = document.getElementById("Numberval")
    const SymbolVal = document.getElementById("Symbolval")

    let charPool = [];

    if (UpperLet.checked) charPool = charPool.concat(upperletter);
    if (LowerLet.checked) charPool = charPool.concat(lowerLetter);
    if (NumberVal.checked) charPool = charPool.concat(Numbers);
    if (SymbolVal.checked) charPool = charPool.concat(Symbols);

    for (let i = 0; i < PassWordLength.value; i++) {
        let randomIndex = Math.trunc(Math.random() * charPool.length);
        FinalResult += charPool[randomIndex];
    }

    Result.innerHTML = FinalResult;
}
