let app = new Vue({
    el: '#app',
    data: {
        message: 'El paco me la pela',
        sum: 3 + 6,
        value: 5,
        isVisible: false,
        colors:["Blue", "Reed", "Green"],
        content_html : "<h1>Hi </h1>",
        src: "../images/tunerd.png",
        text: "Image Description",
        numero: 13,
        v_model: "Holis V-Model",
        p_error: true
    },
    computed: {
        //a computed getter
        reversedMessage: function() {
            //this points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
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