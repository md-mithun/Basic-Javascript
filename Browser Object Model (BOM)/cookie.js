window.onload = () => {
    checkCookie();
}

function setCookie(cname, cvalue, days) {
    let d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${cname}=${cvalue}; expires=${d.toUTCString()}; path=/`;
}

function getCookie(cname) {
    let cookies = document.cookie.split(';');
    // console.log(cookies);// ['name=Mithun', ' fname=Maryaam']
    let newCname = `${cname}=`;
    for (const x of cookies) {
        let c = x;
        while (c.charAt(0) == ' ') {
            c = c.trimStart(1);
        }
        if (c.indexOf(newCname) == 0) {
            return c.substring(newCname.length, c.length);

        }
    }
}

function checkCookie() {
    if (getCookie('name')) {
        alert(`!Welcome back ${getCookie('name')}`);
    } else {
        let user = prompt('Enter your name: ');
        setCookie('name', user, 1);
    }
}