radio.setGroup(123)
radio.setFrequencyBand(48)
radio.setTransmitSerialNumber(true)
//Sensory
type data = {
    centro: number;
    levo: number;
    pravo: number;
}
type IRC = {
    centro: DigitalPin;
    levo: DigitalPin;
    pravo: DigitalPin;
}
const IR: IRC = {
    centro: DigitalPin.P15,
    levo: DigitalPin.P14,
    pravo: DigitalPin.P13
}
//Ostatní Bs
radio.setGroup(123)
radio.setFrequencyBand(48)
radio.setTransmitSerialNumber(true)
let x = 0
let y = 0
let a = 0
const stripLenght: number = 36;
let pasek = neopixel.create(DigitalPin.P0, stripLenght, NeoPixelMode.RGB)
let p = 0
let o = 125
let pokus = false
let dil = 0
let kocka = 0
let cocka = 0
let trpaslik = false
let kousek3 = 0
let oves = 0
let uhel = 0
let uzel = 0
//Sensory
let dataPackage: data;
const datas: data = {
    centro: pins.digitalReadPin(IR.centro),
    levo: pins.digitalReadPin(IR.pravo),
    pravo: pins.digitalReadPin(IR.levo)
}
//Bs

basic.forever(function () {
    radio.onReceivedString(function (ReceivedString) {
        let dilek = ReceivedString.split(',')
        let kousek3 = parseInt(dilek[0])
        let cocka = parseInt(dilek[1])
        let kocka = parseInt(dilek[2])
        let uhel = parseInt(dilek[3])
        basic.pause(10)
        if (kousek3 == radio.receivedPacket(RadioPacketProperty.SerialNumber)) {
            let x = kocka / 5
            if (x >= 255) {
                x = 250
            }
            if (x*25 <= -255) {
                x = x*5
            }
            if (kocka >= -25 && kocka <= 25) {
                x = 0
            }
            PCAmotor.MotorRun(PCAmotor.Motors.M1, (x-y)*2.1)
            console.log([x,y])
        }
        if (kousek3 == -207736456) {
            let y = cocka / 5
            if (y >= 255) {
                y = 250
            }
            if (y*25 <= -255) {
                y = y*5
            }
            if (cocka>= -25 && cocka <= 25) {
                y = 0
            }
            PCAmotor.MotorRun(PCAmotor.Motors.M4, (y - x/2) * 2)
            o += 5
            p += 5
            pasek.showRainbow(o, p)
            pasek.show()
            basic.pause(10)
            console.log([x, y])
        }
        if (o >= 350) {
            o = -0
        }
        if (p >= 350) {
            p = -0
        }
    }) 
})
