const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      someText:''
    };
  },

  methods:{
    add(numParam){ // using the parameter numParam makes the code 
                   // below more dynamic. Note we are overriding the
                   // built in "event" argument
      this.counter = this.counter + numParam;
    },
    reduce(numParam){
      this.counter = this.counter - numParam;
    },
    setSomeText(event){
      // Built in Event Handler argument/payload is a Vanilla JS feature.
      // If we open up the counsel we can see that
      // the page is being rerendered only in the 
      // part that we interacted with, nothing else, 
      // hence better preformance.
      this.someText = event.target.value;
    },
    setFullName(event, lastName){
      this.name = event.target.value + lastName;
    },
    submitForm(event){
      //event.preventDefault(); // built in JS method. Tells the browser that form
                                // should not be submitted, prevents the browser 
                                // default an http request being sent after the
                                // button has been hit
      alert('Submitted!');
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
