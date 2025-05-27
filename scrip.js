function handleSubmit(event) {
    event.preventDefault(); // 防止表單實際送出
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    alert(`謝謝你，${name}！我們已收到你的訊息：\n\n"${message}"`);
}