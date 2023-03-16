function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const app = Vue.createApp({
  data(){
    return {
      numberOfClicks: 0
    }
  },
  methods:{
    incrementClickVal(){
      this.numberOfClicks++;
      console.log(this.numberOfClicks);
    }
  }
})

app.mount('#vueAppTest');