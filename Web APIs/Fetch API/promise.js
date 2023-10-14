function fetchData() {
    const display = document.getElementById('demo');
    fetch('http://127.0.0.1:5500/Web%20APIs/Fetch%20API/text.txt')
        .then((res) => res.text())
        .then((data) => display.innerHTML = data)
}