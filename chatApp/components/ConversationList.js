import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";
import modalInput from "./modalInput.js";
import {
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
  getFirestore, addDoc, collection, query, where, getDoc, doc, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"
import Main from "./Main.js";

const auth = getAuth();
const db = getFirestore();
const conversationRef = collection(db, "conversations");

export default class ConversationList {
  $conversationListProfile
  $conversationListProfilePicture
  $coversationListProfileName
  $newConversationImgContainer;
  $newConversationImg;
  $newConversationButtonContainer;
  $createConversationModal;
  $conversationItem;
  $modalInput;
  $conversationListContainer;
  $conversationListContent;

  _onChangeActiveConversation;

  constructor(onChangeActiveConversation) {
    this._onChangeActiveConversation = onChangeActiveConversation;
    this.$conversationListContainer = document.createElement("div");
    this.$conversationListContainer.setAttribute(
      "class",
      "w-1/6 h-full bg-blue-100 pb-4 flex flex-col border-r-2 border-gray-300"
    );

    this.$conversationListProfile = document.createElement("div");
    this.$conversationListProfile.setAttribute("class","flex h-20 bg-blue-300 border-b-2 border-gray-300 p-4");

    this.$conversationListProfilePicture = document.createElement("div");
    this.$conversationListProfilePicture.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full my-auto");

    this.$conversationListProfileName = document.createElement("div");
    this.$conversationListProfileName.textContent = "Username";
    this.$conversationListProfileName.setAttribute("class","flex-grow ml-4 my-auto text-lg");

    this.$conversationListContent = document.createElement("div");

    this.$createConversationModal = new CreateNewConversationModal();

    this.$newConversationImgContainer = document.createElement("div");
    this.$newConversationImgContainer.setAttribute("class","inline-block m-auto");

    
    this.$newConversationImg = document.createElement("img");
    this.$newConversationImg.src = "./img/add.png";
    this.$newConversationImg.setAttribute("class","w-8 h-8");
    this.$newConversationImg.addEventListener("click", () => {
      this.$createConversationModal.openModal();
    });
    this.setUpConversationListener();
  }
  // setUpConversationListener() {
  //   this.$conversationListContent.innerHTML = "";

  //   const q = query(
  //     conversationRef,
  //     where("users", "array-contains", auth.currentUser.email)
  //   );

  //   onSnapshot(q, (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         const conversationItem = new ConversationItem(
  //           ...change.doc.data(),
  //           conversationId: change.doc.id,
  //           );
          
  //         conversationItem.$itemContainer.addEventListener("focus", () => {
  //           console.log(change.doc.data().name);
  //         })
  //         conversationItem.render(this.$conversationListContent);
  //       }
  //     });
  //   });
  // }

  setUpConversationListener() {
    this.$conversationListContent.innerHTML = "";
    const q = query(
      conversationRef,
      where("users", "array-contains", auth.currentUser.email)
    );

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const conversationItem = new ConversationItem({
              ...change.doc.data(),
              conversationId: change.doc.id,
            },
            ((conversation) => {
              this._onChangeActiveConversation(conversation);
            })
          );
          conversationItem.render(this.$conversationListContent);
        }
      });
    });
  }

  render(mainContainer) {
    this.$conversationListProfile.appendChild(this.$conversationListProfilePicture);
    this.$conversationListProfile.appendChild(this.$conversationListProfileName);
    this.$conversationListContainer.appendChild(this.$conversationListProfile);
    this.$conversationListContainer.appendChild(this.$conversationListContent);
        
    this.$conversationListProfile.appendChild(this.$newConversationImgContainer);
    this.$newConversationImgContainer.appendChild(this.$newConversationImg);
    this.$conversationListContainer.app;
    
    this.$createConversationModal.render(this.$conversationListContainer);
    

    mainContainer.appendChild(this.$conversationListContainer);
  }
  displayText = (text) => {

  }
}
