const ListsPerson = {
    name: "Lists",
    template: `
    <div>
        <list-alert></list-alert>
        <ul>
            <li v-for="person in people">{{person}}</li>
        </ul>
    </div>`,
    data: function() {
        return {
            people:["Hugo", "Sara", "Natalia", "Rogelio"]
        }
    }
}