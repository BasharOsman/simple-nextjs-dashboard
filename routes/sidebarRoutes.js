const routes = [
    {
        title: "Home",
        icon: "fas fa-home",
        type: "link",
        component:"home"
    },
    {
        title: "Tables",
        icon: "fas fa-table",
        type: "dropdown",
        itemsList:[
            {
                title: "Users",
                icon: "fas fa-users",
                type: "link",
                component:"users"
            },
            {
                title: "Articles",
                icon: "far fa-newspaper",
                type: "link",
                component:"articles"
            
            },
        ]
    },
    {
        title: "Tests",
        icon: "fas fa-table",
        type: "dropdown",
        itemsList:[
            {
                title: "Users",
                icon: "fas fa-users",
                type: "link",
                component:"users"
            },
            {
                title: "Articles",
                icon: "far fa-newspaper",
                type: "link",
                component:"articles"
            
            },
        ]
    },
    {
        title: "Chert",
        icon: "fas fa-chart-line",
        type: "link",
        component:"chert"
    },
    {
        title: "Setting",
        icon: "fas fa-cog",
        type: "link",
        component:"setting"
    },
    {
        title: "About",
        icon: "far fa-question-circle",
        type: "link",
        component:"about"
    },

]

export default routes;