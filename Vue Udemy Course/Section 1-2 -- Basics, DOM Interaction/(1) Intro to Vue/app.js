// in Vue we declare the desire end result, not how we get there. 
// Vue uses HTML attributes to connect HTML code to data and logic managed in the Vue app
// This is a declarative approach NOT an imperative approach. So this means that we are declare code that describes our end goal
// rather than writing every step necessary to get to our goal
Vue.createApp({
    data(){
        return{
            goals: [],
            enteredValue:'' // establish connection in the html
        };
    }, //must be called data or can be written as "data:"
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = ''; // Vue will reach out to teh DOM and make the required updates. 
                                    // will clear the search bar
        }
    }
}).mount('#app'); // need to know what part of the page should be controlled with this app


// Vanilla JS Approach: used imperative aproach, did every single step

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl)
//     inputEl.value = ''; // makes the search field blank
// }

// buttonEl.addEventListener('click', addGoal);