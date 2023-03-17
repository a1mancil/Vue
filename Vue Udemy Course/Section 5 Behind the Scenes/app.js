const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');


// Focusing on JS for a bit

let firstMessage = 'First Message!';
 
let firstLongMessage = firstMessage + ' YAY';

console.log(firstLongMessage); // console logs 'First Message! YAY'

// javascript by default is NOT reactive: ----------

// js CAN rewrite entire variables
firstMessage = 'Different first Message!';
firstLongMessage = 'YAAAAAAAAAAAAAAAAY';

console.log(firstMessage);     // console logs 'Different first Message!'
console.log(firstLongMessage); // console logs 'YAAAAAAAAAAAAAAAAY'

// js CANNOT rewrite a part of a variable
let secondMessage = 'Second Message!';
 
let secondLongMessage = secondMessage + ' YAY';

console.log(secondLongMessage); // console logs 'Second Message! YAY'

secondMessage = 'Changed first part of message!' 

console.log(secondLongMessage); // console logs 'Second Message! YAY'
                                // EXEPECTED 'Changed first part of message!  YAY'
                                // INSTEAD got 'Second Message! YAY'


// vue has built in mechanism to be aware when parts of the message changed. 


//      PROXIES LESSON

// Vue uses javascript proxies:
// just plain old js here, note that it's outside of the Vue object
const dataObject = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

// handler can set up 'traps' which proxies support
const handler = {
  // 'set' trapp
  // setter function is triggered whenever a data property of our 'dataObject'
  // object, is set to a new value on our proxy
  set(target, key, value){
    console.log(target); // the original object that was wrapped by proxy i.e. 'dataObject'
    console.log(key);    // data property name in 'dataObject' that was set to a new value
                         // i.e. 'message'
    console.log(value);  // value that was set from data property of 'dataObject' by
                         // proxy i.e. 'Message changed HELLOO!!!!!!!!!!!!!!!!!!!!!!'

    // change 'longMessage' if 'message' changes
    // check if key that is being set is the message property
    if( key === 'message' ){
      target.longMessage = value + ' World!'
    }
    target.message = value;

  }
};

// wrapper object with proxy
const proxy = new Proxy(dataObject, handler );

// proxy here wrapps 'dataObject' object and hence has access to 'message' property
// Conclusion: 
proxy.message = 'Message changed HELLOO!!!!!!!!!!!!!!!!!!!!!!'

console.log(proxy.longMessage);







