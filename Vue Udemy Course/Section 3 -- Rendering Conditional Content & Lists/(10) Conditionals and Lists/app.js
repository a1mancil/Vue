const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      goal:''
     };
  },
  methods:{
    addGoal(){
      this.goals.push(this.goal);
      this.goal = '';
    },
    removeGoal(index){
      // splice add or removes elements from array
      // at index "index" remove one item. The second parameter
      // tells you how many items to remove
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');
