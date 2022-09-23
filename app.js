var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input-ar")
var txtOutput = document.querySelector("#output")

function log_btn_translate_event() {
    console.log("Btn clicked")
    console.log(txtInput.value)
    txtOutput.innerText = txtInput.value;

    baseUrl = "https://api.funtranslations.com/translate/minion.json"
    //baseUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
    finalUrl = baseUrl + "?text=" + txtInput.value

    var res_json = fetch(finalUrl)
    
    res_json.then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    })
}

btnTranslate.addEventListener("click", log_btn_translate_event)
