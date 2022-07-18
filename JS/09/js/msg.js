let session = new Session();
session_id = session.getSession();

if (session !== ''){
    
}
else{
    window.location.href = '/';
}

document.querySelector('.message-input').addEventListener('submit',e=>{
    e.preventDefault();

    async function createMessage(){
        let content = document.querySelector('.message-input textarea').value;
        document.querySelector('.message-input textarea').value = '';
        let message = new Message();
        message.message_content = content;
        message = await message.create();


        let current_user = new User;
        current_user = await current_user.get(session_id);
        let html = document.querySelector('.content').innerHTML;

        document.querySelector('.content').innerHTML = `
        <div class="m">
            <div class='single-message' message-message_id="${message.id}">
                <img src="../img/profile-icon.png" class='profile'>
                <div class='message-autor'>
                    <b>${current_user.username}:</b>
                </div>
                    
                <div class="message-content">${message.content}</div>
            </div>
        </div>`+html;
        
    }

    createMessage();
})

async function getAllMessage(){
    let all_messages = new Message();
    all_messages = await all_messages.getAllMessage();
    all_messages.forEach(message => {
        async function getMsg(){
            let user = new User();
            user = await user.get(message.user_id);

            let html = document.querySelector('.content').innerHTML;

            document.querySelector('.content').innerHTML=` 
            <div class="m">
                <div class='single-message' message-message_id="${message.id}">
                
                    <img src="../img/profile-icon.png" class='profile'>
                    <div class='message-autor'>
                        <b>${user.username}:</b>
                    </div>
                        
                    <div class="message-content">${message.content}</div>
                </div>
                    
            </div>`+html;
                
        }
        getMsg();
    });
}
getAllMessage();

document.querySelector('#back').addEventListener('click',e=>{
    e.preventDefault();
    window.location.href = 'hexa.html';
})