// Important: there are "data properties" and computed properties. data properties
//            are properties which are declared once the app starts. "computed
//            properties" are those properties which are made from data properties.

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      //fullName:'',
      lastName:''
    };
  },
  methods: {
    //  We dont need the setName method anymore because we replaced v-bind:value
    //  and v-on:input with v-model. So setting the value of name is already handled
    //  by v-model
    //setName(event, lastName) { // ommit the last name for now
    //  this.name = event.target.value;
    //},
    //  Dont want to use outputFullname() method below because it will always 
    //  execute anytime any page behavior or update is triggered
    // outputFullname(){
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Mancilla'
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name ='';
    }
  },
  // you have to chose this name "computed":
  computed:{
    // Calculate value dynamically:
    // methods will be called and executed as property. Use like a data property 
    // not a method.

    // IMPORTANT: Name computed properties as you would name your data above.
    // However data properties and computed properties CANNOT be named the same,
    // since they are different properties. DO NOT call a computed property, 
    // just point at it, Vue will call it. Point at it like a data property. 
    // Use them like variables not functions. 
    // Technically methods live in the computed clause but will not be used as
    // methods

    // If you only want to recalculate a value when a dependency changes use 
    // computed properties. Below is using less code than using two watch methods,
    // name() and lastName()
    fullName(){
      if(this.name === '' || this.lastName === ''){
            return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  // Executes when one of the dependencies changed
  // anytime a data property or computed value property is triggered
  watch:{
    //  whenever name changes, the watcher method will reexecute
    //  Vue passes the latest value of the computed property or data as the first
    //  argument of watcher methods.

    //  Can also have access to the old value as the second parameter 
    //  e.g. name(latestValue, oldValue){}
    // name(latestValue){
    //   //update fullname whenever the name changes
    //   if(latestValue ===''){
    //     this.fullName ='';
    //   }
    //   else{
    //     this.fullName = latestValue + ' ' + this.lastName;
    //   }
    // },
    // lastName(latestValue){
    //   //update fullname whenever the name changes
    //   if(latestValue ===''){
    //     this.fullName ='';
    //   }
    //   else{
    //     this.fullName = this.name + ' ' + latestValue;
    //   }
    // }

    //  Good example of using a watcher: When count is 50, reset it
    //  running logic that updates data property
    // counter(value){
    //   if(value > 50){
    //     this.counter = 0;
    //   }
    // }

    // When count is 50, a timer starts that will last 2000 milliseconds, then after
    // timer is finished will reset counter
    counter(value){
      if(value > 50){
        const that = this;     // this outside setTimeout() refers to something 
        setTimeout(function(){ // different than this inside setTimeout()
          that.counter = 0;    // so preserve this instance outside to use inside
        }, 2000);              // of method. 2 second delay = 2000 milliseconds
      }
    }
  }
});

app.mount('#events');
