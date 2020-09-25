Vue.component('list-alert-default', {
    props: {
        //message: String
        message: {
            type: String,
            default: "Body"
        }
    },
    template: `
    <div class="alert alert-warning" role="alert">
        {{message}}
    </div>
    `
});