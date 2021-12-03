import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";
import modalInput from "./modalInput.js";

export default class ConversationList {
  $conversationListProfile
  $conversationListProfilePicture
  $coversationListProfileName
  $conversationItem;
  $newConversationImgContainer;
  $newConversationImg;
  $newConversationButtonContainer;
  $createConversationModal;
  $conversationItem;
  $modalInput;

  constructor() {
    this.$conversationListProfile = document.createElement("div");
    this.$conversationListProfile.setAttribute("class","flex h-20 bg-blue-300 border-b-2 border-gray-300 p-4");

    this.$conversationListProfilePicture = document.createElement("div");
    this.$conversationListProfilePicture.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full my-auto");

    this.$conversationListProfileName = document.createElement("div");
    this.$conversationListProfileName.textContent = "Username";
    this.$conversationListProfileName.setAttribute("class","flex-grow ml-4 my-auto text-lg");

    this.$conversationItem = new ConversationItem();
    this.$createConversationModal = new CreateNewConversationModal();

    this.$newConversationImgContainer = document.createElement("div");
    this.$newConversationImgContainer.setAttribute("class","inline-block m-auto");
    
    this.$newConversationImg = document.createElement("img");
    this.$newConversationImg.src = "./img/add.png";
    this.$newConversationImg.setAttribute("class","w-8 h-8");
    this.$newConversationImg.addEventListener("click", () => {
      this.$createConversationModal.openModal();
    });
  }

  render(mainContainer) {
    const conversationListContainer = document.createElement("div");
    conversationListContainer.setAttribute(
      "class",
      "w-1/6 h-full bg-blue-100 pb-4 flex flex-col border-r-2 border-gray-300"
    );
    this.$conversationListProfile.appendChild(this.$conversationListProfilePicture);
    this.$conversationListProfile.appendChild(this.$conversationListProfileName);
    conversationListContainer.appendChild(this.$conversationListProfile);
    
    this.$conversationListProfile.appendChild(this.$newConversationImgContainer);
    this.$newConversationImgContainer.appendChild(this.$newConversationImg);
    conversationListContainer.app;
    
    this.$createConversationModal.render(conversationListContainer);
    this.$conversationItem.render(conversationListContainer);

    mainContainer.appendChild(conversationListContainer);
  }
}
