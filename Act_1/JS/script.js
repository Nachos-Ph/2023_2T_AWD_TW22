let ColorChanges = false;
let ColorChangeInterval;

function ColorChange() {
    const body = document.body;
    const container = document.querySelector('.container');
    const topSection = document.querySelector('.top');
    const headers = document.querySelectorAll('h2, h4');
    const lists = document.querySelectorAll('.text');

    if (ColorChanges) {
        clearInterval(ColorChangeInterval);
        ColorChanges = false;

        body.style.backgroundColor = "rgb(253, 243, 230)";
        body.style.color = "#161618";
        container = "rgb(252, 237, 215)";
        topSection = "rgb(252, 237, 215)";

        headers.forEach(header => {
            header.style.backgroundColor = "#f3f3f3";
            header.style.color = "#161618";
        });

        lists.forEach(text => {
            text.style.color = "#161618";
        });

    } else {
        ColorChangeInterval = setInterval(() => {
            const randomColor = () => Math.floor(Math.random() * 256);
            const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            const textColor = `rgb(${255 - randomColor()}, ${255 - randomColor()}, ${255 - randomColor()})`;

            body.style.backgroundColor = bgColor;
            body.style.color = textColor;
            container.style.backgroundColor = bgColor;
            topSection.style.backgroundColor = bgColor;
            
            headers.forEach(header => {
                header.style.backgroundColor = bgColor;
                header.style.color = textColor;
            });

            lists.forEach(text => {
                text.style.color = textColor;
            });

        }, 3000);
        ColorChanges = true;
    }
}
