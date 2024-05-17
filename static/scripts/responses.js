function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "Who are you?") {
        return "I am AskBot";
    } else if (input == "Who made you?") {
        return "Hello, I am a chatbot created by Eron, a grade 10 student from Afgbmts. I was designed to help you with various tasks and answer your questions. If you need any assistance, feel free to ask me anything";
    } else if (input == "What are you?") {
        return "Hello! I'm an AI-powered bot designed to assist you with your queries. Please feel free to ask me any questions, and I'll do my best to provide you with accurate and helpful answers";
    }
     else if (input == "Sure!") {
        return "What do you want to play";
    }
     else if (input == "Anything") {
        return "Let's play rock scissors papers, ready?";
    }
     else if (input == "Yeah") {
        return "3... 2... 1... Go!";
    }
    else if (input == "Okay?...") {
        return "Let's play";
    }
     else if (input == "So, What is your purpose?") {
        return "The purpose of this chat bot is to provide you with a personalized and interactive experience. It is designed to assist you with various tasks such as answering your queries, providing helpful information, and engaging in conversation. With its advanced language processing capabilities, the chat bot can understand your input and provide you with accurate and relevant responses. Additionally, it is programmed to learn from your interactions, which allows it to adapt and improve over time. Ultimately, the chat bot's purpose is to enhance your experience and make your interactions as seamless and enjoyable as possible.";
    }
    else if (input == "hi?") {
        return "Hello, M";
    }
    else if (input == "oh, F") {
        return "From Ph, 20";
    }
    else if (input == "uy pinoy din ako 20") {
        return "anong pangalan mo?";
    }
    else if (input == "My name is Elle") {
        return "Nice to meet you Elle, I am Lucas";
    }
    else if (input == "taga saan ka sa pinas?") {
        return "Taga karuhatan Valenzuela ako, ikaw taga saan ka?";
    }
    else if (input == "totoo ba? taga Valenzuela din ako sa malinta") {
        return "Wow kita naman tayo HAHAHAHAH";
    }
    else if (input == "Uy kalma di panga kita kilala e") {
        return "Lol, haha";
    }
    else if (input == "anong grade mo naba?") {
        return "3rd Year I.T, ikaw ba?";
    }
    else if (input == "2nd Year nako. Nursing") {
        return "Nuks sana magkasakit ako para maalagaan moko";
    }
    else if (input == "HAHAHA ang corny mo") {
        return "HAHAHA pwede ba kitang makita?";
    }
    else if (input == "Hindi, di panga kita kilala baka mamaya anong gawin mo saken") {
        return "HAHAHAH edi kilalanin moko sa personal";
    }
    else if (input == "HAHAHA ayoko next time nalang tayo magkita kapag magkakilala na talaga tayo") {
        return "Kelan pa yon tagal non";
    }
    else if (input == "kalma kalang muna kaka kilala lang natin, sge na mamaya naman at madami pakong gagawin") {
        return "Sge, byee! mamaya ulit. Iloveyou HAHAHA";
    }
    

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Sorry You dont have enough Credits to send a message to this person. Please buy more credits to Send this message";
    } 

    
}
