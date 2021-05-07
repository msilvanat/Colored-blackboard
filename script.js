window.onload = () => {
    let mouseClicked = false;
    let container = document.getElementById("container");
    for (let i = 0; i < 400; i++) {
        let div = document.createElement("div");
        div.className = "color";

        div.onmouseover = () => {
            if (mouseClicked) {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = "#" + randomColor;
            }
        }

        container.appendChild(div);
    }

    container.onmousedown = () => {
        mouseClicked = true;
    }

    container.onmouseup = () => {
        mouseClicked = false;
    }


}