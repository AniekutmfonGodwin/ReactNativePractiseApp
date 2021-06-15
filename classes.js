


class PowerBank{
    constructor(length,name,height,width,chargingPort,powerLevel){
            this.length = length
            this.height = height
            this.name = name
            this.width = width
            this.chargingPort = chargingPort
            this.powerLevel = powerLevel

//                 console.log("this is called")

    }


    
    powerIn(){

            console.log("power bank charging .level",this.powerLevel)

    }


    powerOut(){
            this.yourName()
         console.log("phone has been pluged")
    }

    yourName(){
            console.log("my name is ",this.name)
    }



}



class NewPowerBank extends PowerBank{
    
    powerIn(){

            console.log("power bank charging .level",this.powerLevel)

    }
}



/**
 * javascript classes for mobile phone
 */