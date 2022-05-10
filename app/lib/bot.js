const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./../../app/lib/controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = (msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
        }else if (isNaN(numberToApplyFb)){
            if (numberToApplyFb === "node"){
                const nodeExplorers = ExplorerController.explorersArrayToString("node")
                const responseNode = `Los explorers en la misión node son: ${nodeExplorers}`;
                bot.sendMessage(chatId, responseNode);   
            }if (numberToApplyFb === "java"){
                const javaExplorers = ExplorerController.explorersArrayToString("java")
                const responseJava = `Los explorers en la misión java son: ${javaExplorers}`;
                bot.sendMessage(chatId, responseJava);   
            }else{
                bot.sendMessage(chatId, "Envía un número válido");
        }
    }


});