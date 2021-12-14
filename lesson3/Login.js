import customTextField from "./customTextField.js"
import featureName from "./featureName.js"
import namePage from "./namePage.js"
import logButton from "./featureButton.js"
import accInfoBox from "./accInfoBox.js"
import switchBox from "./switchBox.js"
import app from "./index.js"
import registerMain from "./Register.js"

export default class logInMain {
    $mainContainer
    $registerBoxContainer
    $namePage
    $textContainer

    $userBox

    $pwBox

    $cfpwBox

    $forgotPwBox
    $forgotPwTxt

    $logInBox

    $switchBox

    constructor() {
        this.$mainContainer = document.createElement("div");
        this.$mainContainer.setAttribute("class","flex flex-col")

        this.$namePage = new namePage("SIGN IN");


        this.$registerBoxContainer = document.createElement("form");
        this.$registerBoxContainer.setAttribute("class","w-1/4 h-2/5 flex flex-col pt-8 pl-8 pr-8 pb-4 m-auto rounded-2xl bg-blue-50 border-2 border-blue-100")

        this.$userBox = new accInfoBox("Username or Email","email","")
        this.$pwBox = new accInfoBox("Password","password","");
        this.$pwBox.$boxName.$featureNameBox.setAttribute("class","flex");


        this.$forgotPwBox = document.createElement("div");
        this.$forgotPwTxt = document.createElement("p");
        this.$forgotPwTxt.setAttribute("class","text-sm");
        this.$forgotPwBox.setAttribute("class","text-right hover:text-blue-300 cursor-pointer flex-grow text-right my-auto")
        this.$forgotPwTxt.textContent = "Forgot your password?"

        this.$logInBox = new logButton("Sign Up");

        this.$switchBox = new switchBox("Haven't got an account?");
        this.$switchBox.$switchBoxLink.addEventListener("click", () => 
            this.toRegister()
        )
        this.$registerBoxContainer.addEventListener("submit", () => {
            console.log("hadfgasdf");
        })

    }
    toRegister() {
        const registerScreen = new registerMain();
        app.setActiveScreen(registerScreen);
    }

    render(container) {
        this.$namePage.render(this.$mainContainer);
        this.$mainContainer.appendChild(this.$registerBoxContainer)

        this.$userBox.render(this.$registerBoxContainer);
        this.$pwBox.render(this.$registerBoxContainer);
        
        this.$forgotPwBox.appendChild(this.$forgotPwTxt);
        this.$pwBox.$boxName.$featureNameBox.appendChild(this.$forgotPwBox);
        this.$logInBox.render(this.$registerBoxContainer);

        this.$switchBox.render(this.$mainContainer);

        container.appendChild(this.$mainContainer);
    }
}