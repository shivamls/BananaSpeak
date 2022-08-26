var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input-ar")
var txtOutput = document.querySelector("#output")

function log_btn_translate_event() {
    console.log("Btn clicked")
    console.log(txtInput.value)
    txtOutput.innerText = txtInput.value;
}

btnTranslate.addEventListener("click", log_btn_translate_event)

