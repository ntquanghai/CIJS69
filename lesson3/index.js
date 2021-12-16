import registerMain from "./logInComponents/Register.js";
import logInMain from "./logInComponents/Login.js"

class Main {
    activeScreen
    container

    constructor(container) {
        this.container = container;
        this.activateScreen();
    }

    activateScreen() {
        const signIn = new logInMain();
        this.setActiveScreen(signIn);
    }


    setActiveScreen(screen) {
        if (this.activeScreen !== undefined) {
          this.container.innerHTML = "";
        }
        this.activeScreen = screen;
        this.activeScreen.render(this.container);
      }
}

const app = new Main(document.getElementById("app"));

document.getElementById("app").setAttribute("class","bg-white");

export default app;
