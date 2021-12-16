export default class switchBox {
    $switchBoxContainer
    $switchBoxDescription
    $switchBoxLink

    constructor(desc,link) {
        this.$switchBoxContainer = document.createElement("div");
        this.$switchBoxContainer.setAttribute("class","rounded-2xl bg-blue-50 border-2 border-blue-100 w-1/4 p-6 my-8 mx-auto text-center flex flex-col")

        this.$switchBoxDescription = document.createElement("div");
        this.$switchBoxDescription.textContent = desc;

        this.$switchBoxLink = document.createElement("div");
        this.$switchBoxLink.textContent = "Click here!";
        this.$switchBoxLink.setAttribute("class","hover:text-blue-300 cursor-pointer")
    }
    render(container) {
        this.$switchBoxContainer.appendChild(this.$switchBoxDescription);
        this.$switchBoxContainer.appendChild(this.$switchBoxLink);
        container.appendChild(this.$switchBoxContainer);
    }
}