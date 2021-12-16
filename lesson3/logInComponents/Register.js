import customTextField from "./customTextField.js"
import featureName from "./featureName.js"
import namePage from "./namePage.js"
import logButton from "./featureButton.js"
import accInfoBox from "./accInfoBox.js"
import switchBox from "./switchBox.js"
import logInMain from "./Login.js"
import app from "../index.js"

export default class registerMain {
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

        this.$namePage = new namePage("SIGN UP");


        this.$registerBoxContainer = document.createElement("form");
        this.$registerBoxContainer.setAttribute("class","w-1/4 h-2/5 flex flex-col pt-8 pl-8 pr-8 pb-4 m-auto rounded-2xl bg-blue-50 border-2 border-blue-100")

        this.$userBox = new accInfoBox("Username or Email","email","")
        this.$pwBox = new accInfoBox("Password","password","");
        this.$cfpwBox = new accInfoBox("Confirm your password", "password","");

        // this.$forgotPwBox = document.createElement("div");
        // this.$forgotPwTxt = document.createElement("p");
        // this.$forgotPwBox.setAttribute("class","text-right my-2 hover:text-red-300 cursor-pointer")
        // this.$forgotPwTxt.textContent = "Forgot your password?"

        this.$logInBox = new logButton("Sign Up");

        this.$switchBox = new switchBox("Already have an account?");
        this.$switchBox.$switchBoxLink.addEventListener("click", () => 
            this.toLogin() 
        )
        this.$switchBox.$switchBoxLink.addEventListener("submit", () => {
            console.log("hadfgasdf");
        })
    }
    toLogin() {
        const loginScreen = new logInMain();
        app.setActiveScreen(loginScreen);
    }

    render(container) {
        this.$namePage.render(this.$mainContainer);
        this.$mainContainer.appendChild(this.$registerBoxContainer)

        this.$userBox.render(this.$registerBoxContainer);
        this.$pwBox.render(this.$registerBoxContainer);
        this.$cfpwBox.render(this.$registerBoxContainer);

        // this.$forgotPwBox.appendChild(this.$forgotPwTxt);
        // this.$registerBoxContainer.appendChild(this.$forgotPwBox);
        this.$logInBox.render(this.$registerBoxContainer);

        this.$switchBox.render(this.$mainContainer);

        container.appendChild(this.$mainContainer);
    }
}
