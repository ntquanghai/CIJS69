let isPause = false;
localStorage.clear();
function changeText() {
    localStorage.setItem("sec",0);
    localStorage.setItem("secDisplay",0);
    localStorage.setItem("minDisplay",0);
    localStorage.setItem("hrDisplay",0);
    document.getElementById("start").style.color = "gray";
    document. getElementById("start"). disabled = true;
    textTime();
}

function timeChange() 
{
    let secDisplay = localStorage.getItem("secDisplay");
    let minDisplay = localStorage.getItem("minDisplay");
    let hrDisplay = localStorage.getItem("hrDisplay");
    secDisplay++;
    localStorage.setItem("secDisplay",secDisplay);
        if(secDisplay < 60) {
            if(secDisplay < 10) {
                document.getElementById("txt--sec").innerText = "0" + localStorage.getItem("secDisplay");
            }
            else {
                document.getElementById("txt--sec").innerText = localStorage.getItem("secDisplay");
            }
        }
        else if(secDisplay == 60) {
            document.getElementById("txt--sec").innerText = "00";
            minDisplay++
            localStorage.setItem("secDisplay",0);
            localStorage.setItem("minDisplay",minDisplay);  
            if(minDisplay < 60) {
                if(minDisplay < 10) {
                    document.getElementById("txt--min").innerText = "0" + minDisplay + ":";
                }
                else {
                    document.getElementById("txt--min").innerText = minDisplay + ":";
                }
            }
            else if (minDisplay == 60){
                document.getElementById("txt--min").innerText = "00:";
                hrDisplay++
                localStorage.setItem("minDisplay",0);
                localStorage.setItem("hrDisplay",hrDisplay);
                if(hrDisplay < 60) {
                    if(hrDisplay < 10) {
                        document.getElementById("txt--hr").innerText = "0" + hrDisplay + ":";
                    }
                    else {
                        document.getElementById("txt--hr").innerText = hrDisplay + ":";
                    }
                }
            }
        }
};

function textTime() {
    let startFunc = setInterval(() => timeChange(),1000);
    document.getElementById("pause").onclick = function() {
        clearInterval(startFunc);
        document.getElementById("pause").style.display = "none";
        document.getElementById("resume").style.display = "inline-block";
    }
    document.getElementById("stop").onclick = function() {
        clearInterval(startFunc);
        localStorage.clear();
        document. getElementById("start"). disabled = false;
        document.getElementById("start").style.color = "black";
        document.getElementById("txt--sec").innerText = "00";
        document.getElementById("txt--min").innerText = "00:";
        document.getElementById("txt--hr").innerText = "00:";
    }
    document.getElementById("resume").onclick = function() {
        startFunc = setInterval(() => timeChange(),1000);
        document.getElementById("resume").style.display = "none";
        document.getElementById("pause").style.display = "inline-block";
    }
}
