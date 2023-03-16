const app = Vue.createApp({ // create/declare the vue app
     data(){ // returns an object
        return{
             myName:"Andres Mancilla",
             myAge: 24,
             pictureOnline: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1G1Us6X48FCQKk0Ku4QLuHUlPPMLFS82N89rpqfdl&s"
        };
    },
    methods: {
        addFiveYears(){
            return 5 + this.myAge;
        },
        calculateRandom(){
            return Math.random();
        }
    }

}); 

app.mount("#assignment");// mount app on div
   