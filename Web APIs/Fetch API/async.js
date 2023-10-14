async function fetchData() {
    const display = document.getElementById('demo');
    const respon = await fetch('http://127.0.0.1:5500/Web%20APIs/Fetch%20API/text.txt')
    const data = await respon.text();
    display.innerHTML = data;
}