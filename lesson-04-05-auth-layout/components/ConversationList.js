import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";
import modalInput from "./modalInput.js";

export default class ConversationList {
  $conversationListProfile
  $conversationListProfilePicture
  $coversationListProfileName
  $conversationItem;
  $newConversationButton;
  $newConversationImg;
  $newConversationButtonContainer;
  $createConversationModal;
  $conversationItem;
  $modalInput;

  constructor() {
    this.$conversationListProfile = document.createElement("div");
    this.$conversationListProfile.setAttribute("class","flex h-20 bg-red-500 border-b-2 border-gray-300 p-4");

    this.$conversationListProfilePicture = document.createElement("div");
    this.$conversationListProfilePicture.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full my-auto");

    this.$conversationListProfileName = document.createElement("div");
    this.$conversationListProfileName.textContent = "Username";
    this.$conversationListProfileName.setAttribute("class","flex-grow ml-4 my-auto text-base font-bold");

    this.$conversationItem = new ConversationItem();
    this.$createConversationModal = new CreateNewConversationModal();

    this.$newConversationButtonContainer = document.createElement("div");
    this.$newConversationButtonContainer.setAttribute("class","w-full relative h-12 mt-4 mb-4 flex px-4");
    
    this.$newConversationImg = document.createElement("img");
    this.$newConversationImg.src = "./img/add-user.png";
    this.$newConversationImg.setAttribute("class","inline-block w-8 h-8 m-auto");

    this.$newConversationButton = document.createElement("button");
    this.$newConversationButton.textContent = "NEW CONVERSATION";
    this.$newConversationButton.setAttribute(
      "class",
      "bg-transparent text-base m-auto block h-full rounded"
    );
    this.$newConversationButton.addEventListener("click", () => {
      this.$createConversationModal.openModal();
    });
  }

  render(mainContainer) {
    const conversationListContainer = document.createElement("div");
    conversationListContainer.setAttribute(
      "class",
      "w-1/6 h-full bg-red-200 pb-4 flex flex-col border-r-2 border-gray-300"
    );
    this.$conversationListProfile.appendChild(this.$conversationListProfilePicture);
    this.$conversationListProfile.appendChild(this.$conversationListProfileName);
    conversationListContainer.appendChild(this.$conversationListProfile);
    
    this.$newConversationButtonContainer.appendChild(this.$newConversationImg);
    this.$newConversationButtonContainer.appendChild(this.$newConversationButton);
    conversationListContainer.appendChild(this.$newConversationButtonContainer);
    conversationListContainer.app;
    
    this.$createConversationModal.render(conversationListContainer);
    this.$conversationItem.render(conversationListContainer);

    mainContainer.appendChild(conversationListContainer);
  }
}
