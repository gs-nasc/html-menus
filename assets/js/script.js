const theme = {
    toggle: () => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    }
};

document.getElementById("changeTheme").addEventListener("click", () => {
    theme.toggle();
});
