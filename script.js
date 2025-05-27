function handleSubmit(event) {
    event.preventDefault(); // 阻止表單跳轉或重新整理頁面

    const name = document.getElementById("name").value;
    const messageBox = document.getElementById("message-box");

    // 顯示訊息
    messageBox.textContent = `很抱歉，${name}！其實這只是按好玩的`;
    messageBox.style.display = "block";

    // 5秒後隱藏訊息
    setTimeout(() => {
        messageBox.style.display = "none";
    }, 5000);

    // 清空表單欄位
    event.target.reset();
}

window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
});