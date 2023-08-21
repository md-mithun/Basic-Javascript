let day="";
switch (new Date().getDay()) {
    case 0:
        day='sun';
        break;
    case 1:
        day='mon';
        break;
    case 2:
        day='tue';
        break;
    case 3:
        day='wed';
        break;
    case 4:
        day='thus';
        break;
    case 5:
        day='fri';
        break;
    case 6:
        day='sat';
        break;

    default:
        day="haha "
        break;
}
console.log((day+"day").toUpperCase());