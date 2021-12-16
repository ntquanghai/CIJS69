export default class namePage{ 
    $nameBox
    $name

    constructor(name) {
        this.$nameBox = document.createElement("div");
        this.$nameBox.setAttribute("class","relative");

        this.$name = document.createElement("div");
        this.$name.setAttribute("class","w-full inline-block p-16 text-3xl text-center bottom-0")
        this.$name.textContent = name;
    }
    render(container) {
        this.$nameBox.appendChild(this.$name);
        container.appendChild(this.$nameBox);
    }
}