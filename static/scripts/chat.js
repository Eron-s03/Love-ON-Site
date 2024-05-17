// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage", "message").innerHTML = '<span>' + firstMessage + '</span>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Created By Eron Pogi";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);


     setTimeout(() => {
         getHardResponse(sampleText);
     }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("💗")
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});

function generateRandomMaleName() {
    const maleFirstNames = [
        'Bogart', 'Joel', 'Mark', 'John', 'Oliver', 'Eron', 'Jake', 'Lucas', 'Carl', 'Jarred'
    ];
    const lastNames = [
        'Santos', 'Cruz', 'Marcos', 'Agular', 'Dionisio', 'Alonzo', 'Aquino', 'Acosta', 'Jamito', 'Molina'
    ];

    const firstName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

function updateMaleNames() {
    // Ensure the DOM is fully loaded before attempting to update elements
    document.addEventListener('DOMContentLoaded', function() {
        const messages = document.querySelectorAll('.messages, .messages1');

        messages.forEach((message, index) => {
            // Ensure each message has a unique index for local storage by using a data attribute
            const usernameDiv = message.querySelector('.username');
            if (usernameDiv) {
                const uniqueIndex = message.getAttribute('data-unique-index') || index;
                message.setAttribute('data-unique-index', uniqueIndex);

                const storedNameKey = `userName${uniqueIndex}`;
                const storedName = localStorage.getItem(storedNameKey);
    
                if (storedName) {
                    usernameDiv.textContent = storedName;
                } else {
                    const newName = generateRandomMaleName();
                    localStorage.setItem(storedNameKey, newName);
                    usernameDiv.textContent = newName;
                }
            }
        });
    });
}

updateMaleNames();
