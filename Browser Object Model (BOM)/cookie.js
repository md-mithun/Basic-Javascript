window.onload = () => {
    checkCookie();
}
function setCookie(cname, cvalue, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000))//24 hours 60 minutes, 60 second,1000 milisecond
    const expires = 'expires=' + date.toUTCString();
    //expires=Wed, 11 Oct 2023 14:55:31 GMT
    c = cname + '=' + cvalue + ';' + expires + ';path=/';
    document.cookie = c;
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.trimStart(1);
        }
        if (c.indexOf(name) == 0) {
            // console.log((c.substring(name.length, c.length)));
            return (c.substring(name.length, c.length));
        }
    }
    return ''
}
function checkCookie() {
    let user = getCookie("name");
    if (getCookie('name')) {
        console.log("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("name", user, 5);
        }
    }
}