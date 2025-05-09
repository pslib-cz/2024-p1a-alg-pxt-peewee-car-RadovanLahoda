basic.forever(function () {
    if (RecievedNumber === 1) {
        PCAmotor.MotorRun(PCAmotor.Motors.M1, 200)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -200)
    }
})
let RecievedNumber = radio.receiveNumber()