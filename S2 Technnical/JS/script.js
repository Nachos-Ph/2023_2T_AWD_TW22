const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const box = document.getElementById("box");
const colors = {
    Monday: "#800080",
    Tuesday: "#ffc0cb",
    Wednesday: "#0000ff",
    Thursday: "#008000",
    Friday: "#ffff00",
    Saturday: "#ffa500",
    Sunday: "#ff0000"
};

days.forEach(day => {
    document.getElementById(day).addEventListener("click", () => {
        box.style.bottom = "0";
        box.style.backgroundColor = colors[day];
    });
});