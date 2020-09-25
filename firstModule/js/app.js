const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

const router = new VueRouter({
    routes // short for `routes: routes`
})
  

let app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'El paco me la pela',
        sum: 3 + 6,
        img_pixa: "../images/tunerd.png",
        value: 5,
        isVisible: false,
        age_filter: 20,
        colors:["Blue", "Reed", "Green"],
        CopyArrayObjects:[],
        ArrayObjects: [
            {name: "Hugo", surname: "Vega", age:24},
            {name: "Sara", surname: "Cortes", age:24},
            {name: "Naruto", surname: "Uzumaki", age:18},
            {name: "Saske", surname: "Uchiha", age:20},
            {name: "Akame", surname: "Ga", age:19}
        ],
        content_html : "<h1>Hi </h1>",
        src: "../images/tunerd.png",
        text: "Image Description",
        numero: 13,
        v_model: "Holis V-Model",
        p_error: true
    },
    created: function(){
        this.CopyArrayObjects = this.ArrayObjects;
    },
    computed: {
        //a computed getter
        reversedMessage: function() {
            //this points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {

        filterPeople: function(){
            this.ArrayObjects = this.CopyArrayObjects;
            this.ArrayObjects = this.ArrayObjects.filter(
                person => {
                    return person.age > this.age_filter
                }
            )
        },
        filterColors: function(){
            this.colors = this.colors.filter(
                color => {
                    return color.length > 4
                })
        },
        calculateSum(value1, value2){
            return value1 + value2;
        },
        increment(){
            this.numero++;
        },
        decrement(){
            this.numero--;
        }
    },
    watch: {
        numero: function(val){
            console.log("watch: " + val)
        }
    }
}); 