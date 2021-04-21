const navItems = [
    {
        name: "Item 1",
        children: [
            "Item 1.1",
            "Item 1.2",
            "Item 1.3"
        ]
    },
    {
        name: "Item 2",
        children: [
            "Item 2.1",
            "Item 2.2",
            "Item 2.3",
            "Item 2.4",
            "Item 2.5",
            "Item 2.6"]
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

window.onload = function () {

    for (let a of navItems) {

        let html = ""
        if (a.hasOwnProperty("children")) {
            for (let el of a.children) {
                html +=
                    `<span>${el}</span>`
            }
        }
        
        document.getElementsByClassName("menu")[0].innerHTML +=
            `<span>` + a.name +
            `<div class="sub_Navitems"></div>
            ${html}
            </span>`
    }
}
