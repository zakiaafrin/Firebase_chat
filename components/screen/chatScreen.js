function mountChatScreen() {
    let db = firebase.database();
    let messages = db.ref('messages/');

    $('#root').html(ChatScreen());
    initChatScreenListeners(messages);
}
function ChatScreen() {
    let container = document.createElement('div');     //to create an HTML element

    container.id = 'chat-screen';                    //to loading screen
    container.classList.add('chat-screen');
    container.innerHTML = `
    <div class="chatscreen">
        <div class="chat-header">
            <div class="profile">
                <div>
                    <img src="./image/chat_logo.png" width="40vw" height="55vh">
                </div>
                Hi ${window.user.email.split('@')[0]}! 
            </div>
            
            <div style="margin-right: 9px; ">
                <img src="./image/call.png" alt="Call" width="35vw" height="35vh">
            </div>

            <div style="margin-right: 9px; ">
                <img src="./image/videocall.png" alt="Call" width="35vw" height="35vh">
            </div>

            <div>
                <button class="signout" id=="signout">Sign Out</button>
            </div>
        </div>

        <div id="chat_messages" class="chat_messages"></div>

        <div class="chat_input_btn_container">
            <input type="text" class="chat_input_msg" id="chat_input_msg" />
            <button class="send" id="send">Send</button>
        </div>
    
    </div>
      `;
    return container;
}

function initChatScreenListeners(messages) {
    let sendMessage = () => {
        let date = new Date();
        let text = $("#chat_input_msg").val();

        messages.push({
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL,
            date: date,
            text: text
        });

        $("#chat_input_msg").val('');
    }

    $('.signout').on('click', signOut);

    $('#send').on('click', sendMessage);

    $('#chat_input_msg').keypress(function (e) {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }).keyup(function () {
        //we are going to do some cool stuff here

    });

    messages.on('value', function (snapshot) {
        let msgs = snapshot.val();

        $('#chat_messages').html('');

        let currentPerson = '';

        for (let mid in msgs) {
            let msg = msgs[mid];
            let showUsername = true;

            if(user.email === msg.email){
                currentPerson = msg.email;
                showUsername = false;
            }
            else if(currentPerson === msg.email){
                showUsername = false;
            }
            else {
                currentPerson = msg.email;
            }
        console.log(msg);
            $('#chat_messages').append(Messages(msg,showUsername));
        }
        
        scroll();
    });
}
function scroll() {
    let height = $('#chat_messages')[0].scrollHeight;
    $('#chat_messages').scrollTop(height);
}


