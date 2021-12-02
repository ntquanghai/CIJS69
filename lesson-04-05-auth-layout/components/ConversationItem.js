export default class ConversationItem {
  $itemContainer
  $itemProfilePicture
  $itemTxt

  constructor(name) {
  }

  render(conversationsContainer) {
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("class","text-base flex p-4");

    const itemProfilePicture = document.createElement("div");
    itemProfilePicture.setAttribute("class","w-12 h-12 bg-gray-100 rounded-full inline-block m-auto");


    const itemName = document.createElement("div");
    itemName.setAttribute("class","flex-grow ml-4 my-auto");
    itemName.textContent = "conversationItem";

    itemContainer.appendChild(itemProfilePicture);
    itemContainer.appendChild(itemName);
    conversationsContainer.appendChild(itemContainer);
  }
}
