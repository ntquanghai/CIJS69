export default class featureName {
    $featureNameBox
    $featureName

    constructor(ftName) {
        this.$featureNameBox = document.createElement("div");
        this.$featureName = document.createElement("div");
        this.$featureName.textContent = ftName;
        this.$featureName.setAttribute("class","text-base");
    }

    render(container) {
        this.$featureNameBox.appendChild(this.$featureName);
        container.appendChild(this.$featureNameBox);
    }
}