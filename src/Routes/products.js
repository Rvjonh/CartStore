import Assets from './../Assets/AssetsDispatcher';

const products = [
    {
        id : "F01",
        category: "flags",
        img : Assets["EN"],
        name : "United States Flag",
        price : "100",
    },
    {
        id : "T01",
        category: "things",
        img : Assets["bookshell"],
        name : "bookshell",
        price : "56",
    },
    {
        id : "F02",
        category: "flags",
        img : Assets["ES"],
        name : "Spain Flag",
        price : "100",
    },
    {
        id : "F03",
        category: "flags",
        img : Assets["FR"],
        name : "France Flag",
        price : "100",
    },
    {
        id : "F04",
        category: "flags",
        img : Assets["ZH"],
        name : "Chinese Flag",
        price : "100",
    },
    {
        id : "F05",
        category: "flags",
        img : Assets["IT"],
        name : "Italy Flag",
        price : "100",
    },
    {
        id : "F06",
        category: "flags",
        img : Assets["HI"],
        name : "Hindi Flag",
        price : "100",
    },
    {
        id : "C01",
        category: "clothes",
        img : Assets["costume1"],
        name : "Costume HALO 4",
        price : "100",
    },
    {
        id : "C02",
        category: "clothes",
        img : Assets["costume2"],
        name : "Costume Astronate",
        price : "100",
    },
]

export { products };