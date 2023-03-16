const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods:{
        boxSelected(box){
            if(box ==='A'){
                // If value of this.boxASelected is set to true then 
                // the deselect feature won't be available.
                // By negating the logic, deselecting is acheived
                this.boxASelected = !this.boxASelected;
            }
            else if(box ==='B'){
                this.boxBSelected = !this.boxBSelected;
            }
            else if(box ==='C'){
                this.boxCSelected = !this.boxCSelected;
            }
        }
    },
    computed:{
        // note that after pasting logic we had in html
        // you need the this keyword 
        boxAClasses(){
            return {active: this.boxASelected};
        },
        // commented out because used array of classes in the html
        boxBClasses(){
           return {active: this.boxBSelected};
        },
        boxCClasses(){
            return {active: this.boxCSelected};
        }
    }
})

app.mount("#styling");