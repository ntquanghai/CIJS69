export default class Title {
    $headerContainer;
    $headerImg;
    $headerContent;

    constructor() {
        this.$headerContainer = document.createElement("div");
        this.$headerContainer.setAttribute("class", "h-20 border-b-2 p-4 flex");

        this.$headerImg = document.createElement("div");

        this.$headerContent = document.createElement("div");
        this.$headerContent.setAttribute("class","text-lg my-auto ml-4");
    }

    render(container) {
        this.$headerContainer.appendChild(this.$headerImg);
        this.$headerContainer.appendChild(this.$headerContent);
        container.appendChild(this.$headerContainer);
    }
}