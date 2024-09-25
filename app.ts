import inquirer from "inquirer"

class Player{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIecrease() {
        this.fuel = 100
    }   
}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter Your Name:"
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your Opponent",
        choices: ["Fighter", "Gun Point", "Blast"]
    }
])

let player1 = new Player(player.name)
let opponent1 = new Opponent(opponent.select)

do{
    if (opponent.select == "Fighter") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let number = Math.random() * 2
            if(number > 0){
                player1.fuelDecrease()
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(player1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                    
                }
            }
            if(number <= 0){
                opponent1.fuelDecrease()
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(player1.fuel <= 0) {
                    console.log("You Win");
                    process.exit()
            }
        }
    }
         if(ask.opt == "Drink Portion"){
             player1.fuelDecrease()
             console.log(`You Drink Health Portion Your Fuel Is ${player1.fuel}`);
        }
        if(ask.opt == "Run For Your Life.."){
            console.log("AYou Loose, Better Luck Next Time");
            process.exit()
        
         }
    }

    // Gun Point
    if (opponent.select == "Gun Point") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let number = Math.random() * 2
            if(number > 0){
                player1.fuelDecrease()
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(player1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                    
                }
            }
            if(number <= 0){
                opponent1.fuelDecrease()
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(player1.fuel <= 0) {
                    console.log("You Win");
                    process.exit()
            }
        }
    }
         if(ask.opt == "Drink Portion"){
             player1.fuelDecrease()
             console.log(`You Drink Health Portion Your Fuel Is ${player1.fuel}`);
        }
        if(ask.opt == "Run For Your Life.."){
            console.log("AYou Loose, Better Luck Next Time");
            process.exit()
        
         }
    }

    //Blast
    if (opponent.select == "Blast") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            }
        ]);
        if(ask.opt == "Attack"){
            let number = Math.random() * 2
            if(number > 0){
                player1.fuelDecrease()
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(player1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time");
                    process.exit()
                    
                }
            }
            if(number <= 0){
                opponent1.fuelDecrease()
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if(player1.fuel <= 0) {
                    console.log("You Win");
                    process.exit()
            }
        }
    }
         if(ask.opt == "Drink Portion"){
             player1.fuelDecrease()
             console.log(`You Drink Health Portion Your Fuel Is ${player1.fuel}`);
        }
        if(ask.opt == "Run For Your Life.."){
            console.log("AYou Loose, Better Luck Next Time");
            process.exit()
        
         }
    }
}
while(true)