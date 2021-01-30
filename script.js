var speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''
recognition.continuous = true

// recognition is started
recognition.onstart = function () {
    instructions.text("Voice Recognition is on")
}

recognition.onspeechend = function () {
    instructions.text("Voice Recognition is off")
}

recognition.onerror = function () {
    instructions.text("Try again..!")
}

recognition.onresult = function (event) {
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript
    content += transcript
    textbox.val(content)
}

$("#start-btn").click(function (event) {
    if (content.length) {
        content += ''
    }
    recognition.start()
})

textbox.on('input', function () {
    content = $(this).val()
})

$("#stop-btn").click(function (event) {
    recognition.stop()
})