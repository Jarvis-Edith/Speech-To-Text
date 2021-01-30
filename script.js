var speechRecognition = window.webkitSpeechRecognitio;

var recognition = new speechRecognition();

var textbox = $("#textbox");

var instructions = $("#instructions");

var content = '';
recognition.continuous = true;

// recognition is started
recognition.onstart = function () {
    instructions.text("Voice Recognition is on");
}

recognition.onspeechend = function () {
    instructions.text("No Activity");
}

recognition.onerror = function () {
    instructions.text("Try again..!");
}

recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    content += transcript;
    textbox.val(content);
}

$("#start-btn").click(function (event) {
    if (content.length) {
        content += '';
    }
    recognition.start();
})