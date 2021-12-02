import InputGroup from "./InputGroup.js";
import modalInput from "./modalInput.js";

export default class CreateNewConversationModal {
  $modalContainer;
  _visible = false;
  $modalName;
  $modalInputBox;
  $modalInput;
  $modalButtons;
  $modalCloseContainer;
  $modalCancelButton;
  $modalCreateButton;
  constructor() {
    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "modal fixed w-1/3 h-1/2 hidden top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-red-500 pt-4 flex flex-col rounded-md border-2"
    );
    this.$modalName = document.createElement("div");
    this.$modalName.textContent = "Add new conversation:"
    this.$modalName.setAttribute("class","text-base px-4 pb-4 border-b border-gray-400 font-bold");

    this.$modalContainer.appendChild(this.$modalName);

    this.$modalInputBox = document.createElement("div");
    this.$modalInputBox.setAttribute("class","px-4 h-4/5 bg-red-100 pt-4");

    this.$modalContainer.appendChild(this.$modalInputBox);

    this.$modalButtons = document.createElement("div");


    this.$modalButtons.setAttribute("class","flex-grow border-t border-gray-400 flex justify-end");

    this.$modalCloseContainer = document.createElement("div");
    this.$modalCloseContainer.setAttribute("class","justify-end py-3 px-4");

    this.$modalCancelButton = document.createElement("button");
    this.$modalCancelButton.textContent = "Cancel";
    this.$modalCancelButton.setAttribute("class","bg-white p-1 mr-4 rounded");
    this.$modalCancelButton.addEventListener("click", () => {
      this.openModal();
    })

    this.$modalCreateButton = document.createElement("button");
    this.$modalCreateButton.textContent = "Create";
    this.$modalCreateButton.setAttribute("class","bg-white p-1 rounded");

    this.$modalCloseContainer.appendChild(this.$modalCancelButton);
    this.$modalCloseContainer.appendChild(this.$modalCreateButton);
    this.$modalButtons.appendChild(this.$modalCloseContainer);

    this.$modalContainer.appendChild(this.$modalButtons);

    this.$modalInput = new modalInput("Conversation name","");

    this.$modalInput.render(this.$modalInputBox);
  }

  openModal() {
    this._visible = !this._visible;
    if (this._visible) {
      this.$modalContainer.classList.remove("hidden");
      this.$modalContainer.classList.add("block");
    } else {
      this.$modalContainer.classList.remove("block");
      this.$modalContainer.classList.add("hidden");
    }
  }

  render(conversationListContainer) {
    conversationListContainer.appendChild(this.$modalContainer);
  }
}
