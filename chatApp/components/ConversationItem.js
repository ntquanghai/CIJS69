import { auth, db, conversationRef } from "../constants/index.js"
import Main from "./Main.js"
export default class ConversationItem {
  $itemContainer
  $itemProfilePicture
  $itemName
  conversation
  _onChange;

  constructor(nameData, onChange) {
    this._onChange = onChange;
    this.conversation = nameData;
    this.$itemContainer = document.createElement("div");
    this.$itemContainer.tabIndex = 0;
    this.$itemContainer.setAttribute("class","text-base flex p-4");

    this.$itemProfilePicture = document.createElement("div");
    this.$itemProfilePicture.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full inline-block m-auto");

    this.$itemName = document.createElement("div");
    this.$itemName.setAttribute("class","flex-grow ml-4 my-auto");
    this.$itemName.textContent = this.conversation.name;
  }

  render(conversationsContainer) {
    this.$itemContainer.appendChild(this.$itemProfilePicture);
    this.$itemContainer.appendChild(this.$itemName);
    conversationsContainer.appendChild(this.$itemContainer);
  }
}
