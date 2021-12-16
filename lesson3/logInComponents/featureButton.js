export default class logButton {
    $logButton
    $buttonDetail 

    constructor(name) {
        this.$logButton = document.createElement("div");
        this.$logButton.setAttribute("class","relative flex-grow flex p-4");
        this.$buttonDetail = document.createElement("button");
        this.$buttonDetail.textContent = name;
        this.$buttonDetail.setAttribute("class","text-base bg-blue-100 pt-2 pr-5 pb-2 pl-5 m-auto rounded border border-blue-200")
    }

    render(container) {
        this.$logButton.appendChild(this.$buttonDetail);
        container.appendChild(this.$logButton);
    }
}