function encodeAndDecodeMessages() {
    let messageInput = document.getElementsByTagName('textarea')[0];
    let encodeBtn = document.getElementsByTagName('button')[0];

    let decodeInput = document.getElementsByTagName('textarea')[1];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage(){
        let message = messageInput.value;
        let newMessage = ''
        for (let index = 0; index < message.length; index++){
            let newText = String.fromCharCode(message[index].charCodeAt(0)+1);
            newMessage += newText;
        }
        decodeInput.value = newMessage;
        messageInput.value = '';
        decodeBtn.disabled = false;
    }

    function decodeMessage(){
        let message = decodeInput.value;
        let newMessage = ''
        for (let index = 0; index < message.length; index++){
            let newText = String.fromCharCode(message[index].charCodeAt(0)-1);
            newMessage += newText;
        }
        decodeInput.value = newMessage;
        decodeBtn.disabled = true;
    }
}