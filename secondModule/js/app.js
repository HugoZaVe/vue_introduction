/**
 * Slot -> mecanismo para reutilizar componentes
 */

const router = new VueRouter({
    base: "secondModule",
    routes:[{
        path:'/list_person',
        component: ListsPerson
    },
    {
        path:'/list_programing',
        component: ListsPrograming
    }
    ]

});

let app = new Vue ({
    router,
    el: '#app',
    mounted(){
        console.log(this.$route)
    }
});