import {
  getFirestore, addDoc, collection, query, where, getDoc, doc, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
import { auth, db, conversationRef } from "../constants/index.js";
import ConversationList from "./ConversationList.js";
import Title from "./Title.js";


export default class Main {
  $mainContainer;
  $contentContainer;
  $title;
  $chatBox;
  $contentChat;
  $chatInput;
  $chatSend;
  $conversationList;


  
  constructor() {
    this.$conversationList = new ConversationList();

    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute("class", "flex w-screen h-screen bg-gray-400");

    this.$contentContainer = document.createElement("div");
    this.$contentContainer.setAttribute("class", "w-full h-full bg-white flex flex-col");

    this.$title = new Title();

    this.$chatBox = document.createElement("div");
    this.$chatBox.setAttribute("class","flex-grow");

    

    this.$contentChat = document.createElement("div");
    this.$chatInput = document.createElement("input");
    this.$chatSend = document.createElement("div");
    this.$chatSend.textContent = "Send";
    this.$chatSend.setAttribute("class","mx-5 my-auto font-bold");
    this.$contentChat.setAttribute("class","pl-4 py-4 flex");
    this.$chatInput.setAttribute("class","bg-gray-100 h-10 w-full bottom-0 px-4 py-1 rounded-2xl focus:outline-none");
    this.$chatInput.placeholder = "Type your message here!"
  }

  setActiveConversation = (conversation) => {
    
  }

  // async setUpConversationListener() {
  //   this.$conversationList.$conversationListContent.innerHTML = "";

  //   const q = query(
  //     conversationRef,
  //     where("users", "array-contains", auth.currentUser.email)
  //   );

  //   onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         const conversationItem = new ConversationItem(change.doc.data());
  //         conversationItem.$itemContainer.addEventListener('focus', () => {
  //           conversationItem.$itemContainer.classList.add("bg-blue-200");
  //           this.$headerContent.textContent =  conversationItem.$itemName.textContent;
  //           this.$headerImg.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full inline-block my-auto");
  //         })
  //         conversationItem.$itemContainer.addEventListener('focusout', () => {
  //           conversationItem.$itemContainer.classList.remove("bg-blue-200");
  //           this.$headerContent.textContent = "";
  //           this.$headerImg.setAttribute("class","");
  //         })
  //         conversationItem.render(this.$conversationList.$conversationListContent);
  //       }
  //     });
  //   });
  // }


  render(container) {
    this.$contentChat.appendChild(this.$chatInput);
    this.$contentChat.appendChild(this.$chatSend);


    this.$title.render(this.$mainContainer)
    this.$contentContainer.appendChild(this.$chatBox);
    this.$contentContainer.appendChild(this.$contentChat);
    
    this.$conversationList.render(this.$mainContainer);
    this.$mainContainer.appendChild(this.$contentContainer);

    container.appendChild(this.$mainContainer);
  }
}
