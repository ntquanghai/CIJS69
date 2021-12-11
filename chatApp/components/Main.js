import {
  getFirestore, addDoc, collection, query, where, getDoc, doc, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
import { auth, db, conversationRef } from "../constants/index.js";
import ConversationList from "./ConversationList.js";
import ConversationItem from "./ConversationItem.js";


export default class Main {
  $mainContainer;
  $contentContainer;
  $chatBox;
  $headerContainer;
  $headerImg;
  $headerContent;
  $contentChat;
  $chatInput;
  $chatSend;
  $conversationList;


  
  constructor() {
    this.$conversationList = new ConversationList();
    this.setUpConversationListener();

    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute("class", "flex w-screen h-screen bg-gray-400");

    this.$contentContainer = document.createElement("div");
    this.$contentContainer.setAttribute("class", "w-full h-full bg-white flex flex-col");

    this.$chatBox = document.createElement("div");
    this.$chatBox.setAttribute("class","flex-grow");

    this.$headerContainer = document.createElement("div");
    this.$headerContainer.setAttribute("class", "h-20 border-b-2 p-4 flex");

    this.$headerImg = document.createElement("div");

    this.$headerContent = document.createElement("div");
    this.$headerContent.setAttribute("class","text-lg my-auto ml-4");

    this.$contentChat = document.createElement("div");
    this.$chatInput = document.createElement("input");
    this.$chatSend = document.createElement("div");
    this.$chatSend.textContent = "Send";
    this.$chatSend.setAttribute("class","mx-5 my-auto font-bold");
    this.$contentChat.setAttribute("class","pl-4 py-4 flex");
    this.$chatInput.setAttribute("class","bg-gray-100 h-10 w-full bottom-0 px-4 py-1 rounded-2xl focus:outline-none");
    this.$chatInput.placeholder = "Type your message here!"
  }

  async setUpConversationListener() {
    this.$conversationList.$conversationListContent.innerHTML = "";

    const q = query(
      conversationRef,
      where("users", "array-contains", auth.currentUser.email)
    );

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const conversationItem = new ConversationItem(change.doc.data());
          conversationItem.$itemContainer.addEventListener('focus', () => {
            conversationItem.$itemContainer.classList.add("bg-blue-200");
            this.$headerContent.textContent =  conversationItem.$itemName.textContent;
            this.$headerImg.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full inline-block my-auto");
          })
          conversationItem.$itemContainer.addEventListener('focusout', () => {
            conversationItem.$itemContainer.classList.remove("bg-blue-200");
            this.$headerContent.textContent = "";
            this.$headerImg.setAttribute("class","");
          })
          conversationItem.render(this.$conversationList.$conversationListContent);
        }
      });
    });
  }


  render(container) {
    // const mainContainer = document.createElement("div");
    // mainContainer.setAttribute("class", "flex w-screen h-screen bg-gray-400");

    // const contentContainer = document.createElement("div");
    // contentContainer.setAttribute("class", "w-full h-full bg-white flex flex-col");

    // const chatBox = document.createElement("div");
    // chatBox.setAttribute("class","flex-grow");

    // const contentHeader = document.createElement("div");
    // contentHeader.setAttribute("class", "h-20 border-b-2 p-4");

    // const contentChat = document.createElement("div");
    // const chatInput = document.createElement("input");
    // const chatSend = document.createElement("div");
    // chatSend.textContent = "Send";
    // chatSend.setAttribute("class","mx-5 my-auto font-bold");
    // contentChat.setAttribute("class","pl-4 py-4 flex");
    // chatInput.setAttribute("class","bg-gray-100 h-10 w-full bottom-0 px-4 py-1 rounded-2xl focus:outline-none");
    // chatInput.placeholder = "Type your message here!"
    // contentChat.appendChild(chatInput);
    // contentChat.appendChild(chatSend);

    this.$contentChat.appendChild(this.$chatInput);
    this.$contentChat.appendChild(this.$chatSend);

    this.$headerContainer.appendChild(this.$headerImg);
    this.$headerContainer.appendChild(this.$headerContent);
    this.$contentContainer.appendChild(this.$headerContainer);
    this.$contentContainer.appendChild(this.$chatBox);
    this.$contentContainer.appendChild(this.$contentChat);
    
    this.$conversationList.render(this.$mainContainer);
    this.$mainContainer.appendChild(this.$contentContainer);

    container.appendChild(this.$mainContainer);
  }
}
