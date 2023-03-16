function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            // health
            playerHealth: 100,
            monsterHealth: 100,
            // restrict special attack, only allow every 3rd round
            currentRound:0,
            winner: null,
            // there are objects in this array
            logMessages: []
        }
    },
    watch:{
        playerHealth(value){
            if(value <=0 && this.monsterHealth <= 0){
                // draw
                this.winner = 'draw';
            }
            else if(value <=0 && this.monsterHealth >=0){
                // player lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if(value <=0 && this.playerHealth <= 0){
                // draw
                this.winner = 'draw';
            }
            else if(value <=0 && this.playerHealth >=0){
                // monster lost
                this.winner = 'player';
            }
        }
    },
    methods: {
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        addLogMessage(who, what, value){
            // unshift adds something to the begining of the array
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },
        attackMonster(){
            this.currentRound++;
            // attack value between 5-12
            const attackValue = getRandomValue(5,12);
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','attack', attackValue);
            // using the this keyword to invoke methods that are part of the object
            this.attackPlayer();
        },
        attackPlayer(){
            // attack value between 5-12
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster','attack', attackValue);
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth  -= attackValue;
            this.addLogMessage('player','attack', attackValue);
            this.attackPlayer();
            
        },
        healPlayer(){
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
               this.playerHealth = 100; 
            }
            else{
                this.playerHealth += healValue;
            }
            this.addLogMessage('player','heal', healValue);
            this.attackPlayer();
        },
        surrender(){
            this.winner = 'monster';
        }

    },
    computed: {
        monsterHealthBar(){
            if(this.monsterHealthBar < 0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        playerHealthBar(){
            if(this.monsterHealthBar < 0){
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        },
        // have special attack every 3 rounds
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    }
})

app.mount('#game')