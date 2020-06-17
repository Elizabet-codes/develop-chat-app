const chatList=document.querySelector('.chat-list');
const newChatForm=document.querySelector('.new-chat');
const newNameForm=document.querySelector('.new-name');
const rooms=document.querySelector('.chat-rooms');


//add a new chat

newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=newChatForm.input.value.trim();
    chatroom.addChat(message)
    .then(()=>newChatForm.reset())
    .catch(err=>console.log(err));
});

//update username
newNameForm.addEventListener('submit',e=>{
    e.preventDefault();
    const newName=newNameForm.update.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();
   
});

rooms.addEventListener('click', e=>{
    console.log(e);
    if(e.target.tagName==='BUTTON'){
    
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat=>chatUI.render(chat));
    }
})

const username=localStorage.username ? localStorage.username : 'anon';



//class instances
const chatUI=new ChatUI(chatList);
const chatroom=new Chatroom('general', username);

//get chats and render
chatroom.getChats((data)=>
    chatUI.render(data)
);
