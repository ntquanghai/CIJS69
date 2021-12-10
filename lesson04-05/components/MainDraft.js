export default class Main {
    $mainContainer;
    $conversationList;
  
    constructor() {
      this.$conversationList = new ConversationList();
    }
  
    render(container) {
      const mainContainer = document.createElement("div");
      mainContainer.setAttribute("class", "flex w-screen h-screen bg-gray-400");
  
      const contentContainer = document.createElement("div");
      contentContainer.setAttribute("class", "w-full h-full bg-white flex flex-col");
  
      const chatBox = document.createElement("div");
      chatBox.setAttribute("class","flex-grow")
  
  
      const contentHeader = document.createElement("div");
      contentHeader.setAttribute("class", "h-20 border-b-2");
      contentHeader.addEventListener("storage", () => {
        console.log("asdfasdf");
      })
  
      const contentChat = document.createElement("div");
      const chatInput = document.createElement("input");
      const chatSend = document.createElement("div");
      chatSend.textContent = "Send";
      chatSend.setAttribute("class","mx-5 my-auto font-bold");
      contentChat.setAttribute("class","pl-4 py-4 flex");
      chatInput.setAttribute("class","bg-gray-100 h-10 w-full bottom-0 px-4 py-1 rounded-2xl focus:outline-none");
      chatInput.placeholder = "Type your message here!"
      contentChat.appendChild(chatInput);
      contentChat.appendChild(chatSend);
  
  
      contentContainer.appendChild(contentHeader);
      contentContainer.appendChild(chatBox);
      contentContainer.appendChild(contentChat);
      
      this.$conversationList.render(mainContainer);
      mainContainer.appendChild(contentContainer);
  
      container.appendChild(mainContainer);
    }
  }