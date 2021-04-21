const navItems = [
    {
        name: "Item 1"
    },
    {
        name: "Item 2"
    },
    {
        name: "Item 3"
    },
    {
        name: "Item 4"
    },
    {
        name: "Item 5"
    },
];

// function create() {
//     let html = "";
//     for (i = 0; i < navItems.length; i++) {
//         html +=
//             `<span>${navItems[i].name}</span>`
//     }
//     document.getElementsByClassName("menu")[0].innerHTML = html
// }
// create();

window.onload = function(){
    for(let a of navItems ){
        // document.getElementsByClassName("menu").innerHTML +=  `<span>${a.name}</span>`
        for(let el of document.getElementsByClassName("menu")){
            el.innerHTML += `<span>${a.name}</span>`
        }

    }
}