const app = Vue.createApp({
    data(){
        return{
            // can set up any key value pairs in this object
            courseGoalA:'finished the course and learn vue :)',
            courseGoalB:'almosted finished the course and learn vue :)',
            courseGoalC:'<h2>almosted finished the course and learn vue :)</h2>',
            vueLink: 'https://duckduckgo.com/'
        };
    }, // Vue will look for this keyword. or can write data: function(){}
    methods:{ // methods is a reserved name like data, however every item NEEDS to be a method
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < .5){
                return this.courseGoalA; // vue does magic, puts data in vue app instance and can access data
            }                            // The "this" keyword refers to a global vue instance
            else{
                return this.courseGoalB;
            }
        },
        outputHTML(){
            return this.courseGoalC;
        }
    }
});

// let vue know what part of html code should be controlled by vue app

app.mount('#user-goal'); // string in mount() function should be a css selector
// now can use vue features to interact with the section of html that has been mounted by with our Vue app