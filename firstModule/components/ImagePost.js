//const vueRouter = require("../js/vue-router");

Vue.component('img-post', {
    template: '<img :src="imgPost()" :alt="title" :title="title">',
    props: {
        url: String
    },
    data: function(){
        return {
            title: "Image Title"
        }
    },
    methods: {
        imgPost(){
            if(this.url != ""){
                return this.url;
            }
            return "../images/tunerd.png";
        }
    }
});