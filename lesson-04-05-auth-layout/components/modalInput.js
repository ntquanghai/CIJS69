export default class modalInput {
    $modalInputContainer
    $modalTxt
    $modalInput
    
    constructor(name,placeholder) {
      this.$modalInputContainer = document.createElement("div");
      this.$modalInputContainer.setAttribute("class","flex mb-4");
  
      this.$modalTxt = document.createElement("div");
      this.$modalTxt.setAttribute("class","mr-2");
      this.$modalTxt.textContent = name+":";
  
      this.$modalInput = document.createElement("input");
      this.$modalInput.setAttribute("class","flex-grow px-2 rounded focus:outline-none");
      this.$modalInput.placeholder = placeholder;
  
      this.$modalInputContainer.appendChild(this.$modalTxt);
      this.$modalInputContainer.appendChild(this.$modalInput);
    }
    render(container) {
      container.appendChild(this.$modalInputContainer)
    }
  }