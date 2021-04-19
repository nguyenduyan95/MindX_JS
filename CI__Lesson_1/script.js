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

widown.onload = function(){
    for (let a of navItems) {
       document.getElementsByClassName("menu")[0].innerhtml += `<span> a.name </span> ` 
    }
}