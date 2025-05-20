radio.setGroup(123)
radio.setTransmitSerialNumber(true)
let x = 0
let y = 0
let a = 0
const stripLenght: number = 36;
let pasek = neopixel.create(DigitalPin.P0, stripLenght, NeoPixelMode.RGB)
let p = 0
let o = 125
 
basic.forever(function(){
    radio.onReceivedValue(function(name, value){
        if (name === 'X'){
            let x = value/5
            if (x >= 255){
                x = 250
            }
            if (x <= -255){
                x = -250
            }
            if (x >= -25 && x <= 25){
                x = 0
            }
            PCAmotor.MotorRun(PCAmotor.Motors.M1, (x-y)*2)
        }
        if (name === 'Y'){
            let y = value/5
            if (y >= 255){
                y = 250
            }
            if (y <= -255){
                y = -250
            }
            if (y >= -25 && y <= 25) {
                y = 0
            }
            PCAmotor.MotorRun(PCAmotor.Motors.M4,(y-x/2)*2)
            o += 5
            p += 5
            basic.pause(20)
            pasek.showRainbow(o, p)
            pasek.show()
        }
        if (o >= 350){
            o = -0
        }
        if (p >= 350){
            p = -0
        }
    })
})
