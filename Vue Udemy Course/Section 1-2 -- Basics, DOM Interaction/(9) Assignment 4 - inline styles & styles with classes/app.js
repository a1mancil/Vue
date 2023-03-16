const app = Vue.createApp({
    data(){
        return{
            myStyle: '',
            myBackgroundColor: '',
            hiddenOption: false,
            visibleOption: true,
        }
    },
    methods:{
        hideOrMakeVisible(){
            this.hiddenOption = !this.hiddenOption;
            this.visibleOption = !this.visibleOption;
        }
    },
    // remeber that it is "computed" NOT "compute".
    // remeber that computed properties bind data only not events
    computed:{
        determineStyle(){
            if(this.myStyle === "user1"){
                return {user1: true}
            }
            else if(this.myStyle === "user2"){
                return {user2: true}
            }
            // keep the default color of paragraph
        },
        visiblity(){ 
            return [{hidden:this.hiddenOption}, {visible:this.visibleOption}]
        },
        backgroundColorProp(){
            // dont parse through value, just assume for the learning objective that
            // the user will enter a value back ground color
            return this.myBackgroundColor;
        }
    }
})

app.mount("#assignment")