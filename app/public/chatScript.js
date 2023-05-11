//make connection
var socket = io();

//Query DOM
const message = document.getElementById('message')
const handle = document.getElementById('handle')
const btn = document.getElementById('send')
const output = document.getElementById('chat-output')
const feedback = document.getElementById('feedback')

//emit events
btn.addEventListener('click', function () {
    console.log('click')
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

//feedback message
message.addEventListener('keypress', function () {
    socket.emit('typing', {
        handle: handle.value
    })
})

//Listening for events
socket.on('chat', function (data) {
    feedback.innerHTML = ""
    output.innerHTML += "<p><strong>" + data.handle + "</strong> :" + data.message + "</p>"
})

socket.on('typing', function (data) {
    feedback.innerHTML = "<p><em>" + data.handle + " is typing a message...</em></p>"
})
