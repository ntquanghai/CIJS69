class registerBox {
    $textContainer
    $tConDetail
    $txt
    $hTxt

    constructor() {
        this.$textContainer = document.createElement("div");
        this.$textContainer.style.backgroundColor = "rgba(254, 242, 242)";
        this.$textContainer.style.width = "400px";
        this.$textContainer.style.height = "100px";
        this.$textContainer.style.padding = "10px";
        this.$textContainer.style.borderRadius = "10px";
        this.$textContainer.style.position = "fixed";
        this.$textContainer.style.left = "50%";
        this.$textContainer.style.top = "520px";
        this.$textContainer.style.transform = "translate(-50%, -50%)";
        this.$textContainer.style.display = "flex";
        this.$tConDetail = document.createElement("div");
        this.$tConDetail.style.margin = "auto";
        this.$txt = document.createElement("div");
        this.$txt.style.textAlign = "center";
        this.$hTxt = document.createElement("div");
        this.$hTxt.style.textAlign = "center";
        this.$txt.textContent = "You don't have an account?"
        this.$hTxt.textContent = "Sign up here!"
    }
    render() {
        this.$tConDetail.appendChild(this.$txt);
        this.$tConDetail.appendChild(this.$hTxt);
        this.$textContainer.appendChild(this.$tConDetail);
        return this.$textContainer;
    }

}

class namePage{ 
    $nameBox
    $name

    constructor(name) {
        this.$nameBox = document.createElement("div");
        this.$nameBox.style.position = "relative";
        this.$name = document.createElement("div");
        this.$name.textContent = name;
        this.$name.style.width = "100%";
        this.$name.style.position = "absolute";
        this.$name.style.fontSize = "28px";
        this.$name.style.textAlign = "center";
        this.$name.style.bottom = "0%";
    }
    render() {
        this.$nameBox.appendChild(this.$name);
        return this.$nameBox;
    }
}

class featureName {
    $featureName

    constructor(ftName) {
        this.$featureName = document.createElement("div");
        this.$featureName.textContent = ftName;
        this.$featureName.style.fontSize = "15px";
    }

    render() {
        return this.$featureName;
    }
}

class customTextField{
    $inputField

    constructor(type, placeholderTxt) {
        this.$inputField = document.createElement("input");
        this.$inputField.type = type;
        this.$inputField.placeholder = placeholderTxt;
        this.$inputField.style.fontSize = "14px";
        this.$inputField.style.padding = "6px";
        this.$inputField.style.margin = "12px 0px 12px 0px";
        this.$inputField.style.border = "1px solid rgba(229, 231, 235)"
        this.$inputField.style.borderRadius = "4px";
    }

    render() {
        return this.$inputField;
    }
}

class logButton {
    $logButton
    $buttonDetail 

    constructor(name) {
        this.$logButton = document.createElement("div");
        this.$logButton.style.position = "relative";
        this.$logButton.style.flexGrow = "1";
        this.$logButton.style.display = "flex";
        this.$buttonDetail = document.createElement("button");
        this.$buttonDetail.textContent = name;
        this.$buttonDetail.style.fontSize = "15px";
        this.$buttonDetail.style.backgroundColor = "rgba(254, 226, 226)";
        this.$buttonDetail.style.padding = "8px 20px 8px 20px";
        this.$buttonDetail.style.margin = "auto";
        this.$buttonDetail.style.border = "1px solid rgba(254, 202, 202)"
        this.$buttonDetail.style.borderRadius = "4px";
    }

    render() {
        this.$logButton.appendChild(this.$buttonDetail);
        return this.$logButton;
    }
}

class forgotPasswordTxt {
    $divTxt
    $txt 
    constructor() {
        this.$divTxt = document.createElement("div");
        this.$txt =document.createElement("div");
        this.$txt.textContent = "Forgot your password?";
    }
}


const signInTxt = new namePage("SIGN IN");
const userTxt = new featureName("Username or Email");
const userInput = new customTextField("email","");
const pwTxt = new featureName("Password");
const pwInput = new customTextField("password","");
const cfPwTxt = new featureName("Confirm password");
const cfPwInput = new customTextField("password","");
const signInButton = new logButton("Sign in");


signInTxt.$nameBox.style.height = "100px";

document.getElementById("her").style.width = "400px";
document.getElementById("her").style.height = "364px";
document.getElementById("her").style.top = "300px";


document.getElementById("app").appendChild(signInTxt.render());
document.getElementById("her").appendChild(userTxt.render());
document.getElementById("her").appendChild(userInput.render());
document.getElementById("her").appendChild(pwTxt.render());
document.getElementById("her").appendChild(pwInput.render());
document.getElementById("her").appendChild(cfPwTxt.render());
document.getElementById("her").appendChild(cfPwInput.render());
document.getElementById("her").appendChild(signInButton.render());

document.getElementById("app").style.backgroundColor = "rgb(249, 247, 247)";