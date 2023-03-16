
// dont forget to call the createApp method from the Vue class
const app = Vue.createApp({
    data(){ // function that returns an object
        return{ // count is a field of the data object being returned.
                // similar to Java objects where object details are referenced
                //  to as fields
            count: 0, // note that properties usually use the ":" syntax instead of
                      // the "=" sign
        }
    },
    methods:{ // object that contains functions
        add(valueToAdd){
            this.count = this.count + valueToAdd;
        }
    },
     computed:{ // note that naming convention can be whatever in the computed
                // property config
        result(){ // this data will be determined dynamically, its a property that
                  // is determined dynamically. Looks like the type is also 
                  // determined dynamically i.e. it's possible to return a number
                  // (ie 37) but instead will return string type to be consistent.
            console.log("Count in computed property is " + this.count)
            if(this.count > 37){ 
                return "Too much!"; 
            }
            else if(this.count < 37){
                return "Not there yet"; 
            }
            else{ 
                return "37"; 
            }
        }
     },
    watch:{
        // IMPORTANT: We can watch computed properties (can watch both regular and)
        // computed properties
        // Behind the scenes
        // IMPORTANT: Watchers need to be named after the fields of the object the 
        // returned by the data function
        // not used directly in template. use for behind the scence based off of
        // changing data
        result(){
            // preserve this reference while still in scope
            const that = this;
            console.log("Count in watcher is " + this.count)

            // Include time out function after result is computed
            // Remember that using the this keyword in the func setTimeout()
            // wont refer to the same this reference outside setTimeout()
            // Result must change in order for the setTimeout function to be 
            // triggered
            setTimeout(function(){ 
                // set count to 0
                that.count = 0;
            }, 5000); // set count to zero 5 seconds after result is changed
        }
    }
})

app.mount("#assignment"); // creating template here to use in our Vue app