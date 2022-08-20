var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input-ar")

function log_btn_translate_event() {
    console.log("Btn clicked")
    console.log(txtInput.value)
}

btnTranslate.addEventListener("click", log_btn_translate_event)
