import customTextField from "./customTextField.js";
import featureName from "./featureName.js";

export default class accInfoBox {
    $accInfoBox
    $boxName
    $boxInput

    constructor(boxName,inputType,inputPlaceHolder) {
        this.$accInfoBox = document.createElement("div");

        this.$boxName = new featureName(boxName);
        this.$boxInput = new customTextField(inputType,inputPlaceHolder);
    }
    render(container) {
        this.$boxName.render(this.$accInfoBox);
        this.$boxInput.render(this.$accInfoBox);
        container.appendChild(this.$accInfoBox);
    }
}