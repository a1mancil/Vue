const app = Vue.createApp({
    data: function(){
        return{
            myOutput:'',
            alertMessage: "Training for bronc riding to harvest spiritual fruit."
            + " It's what you become through the journey that really matters."
            + " Becoming a saint.",
            myConfirmedOutput:'' // if the user hits enter
        }
    },
    methods:{
        showAlert(){
            // It's what you become through the journey that really matters.
            // Becoming a saint.
            alert(this.alertMessage);
        },
        setOutput(event){ // access event handler payload
            this.myOutput = event.target.value;
        },
        setConfirmedOutput(){ // display myConfirmedOutput once the user hits enter
            this.myConfirmedOutput = this.myOutput;
        }
    }

})

app.mount('#assignment');