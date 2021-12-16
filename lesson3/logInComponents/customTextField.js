export default class customTextField{
    $inputField

    constructor(type, placeholderTxt) {
        this.$inputField = document.createElement("input");
        this.$inputField.type = type;
        this.$inputField.placeholder = placeholderTxt;
        this.$inputField.setAttribute("class","text-sm p-0.5 my-2 border border-red-100 rounded w-full")
    }

    render(container) {
        container.appendChild(this.$inputField);
    }
}