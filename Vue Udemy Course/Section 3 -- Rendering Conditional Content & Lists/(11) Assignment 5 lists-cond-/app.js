const app = Vue.createApp({
    // practice more
    // Spell Vue app components correctly
    // config components are named 'data','methods', 'computed', and 'watch'
    // when you get a rendering but instance not defined error,
    // it's because you didnt spell one of the config components right
    data(){
        return{
            task:'',
            taskList: [],
            showTaskList: true,
            buttonTitleHideList: 'Hide List',
            buttonTitleShowList: 'Show List'
        };
    },
    methods:{
        addTask(){
            this.taskList.push(this.task);
            this.task ='';
        },
        hideOrShow(){
            this.showTaskList = !this.showTaskList;
        }
    },
    computed:{
        buttonTitle(){
            return this.showTaskList ? 
                    this.buttonTitleHideList : this.buttonTitleShowList;
        }
    }
})

app.mount('#assignment')