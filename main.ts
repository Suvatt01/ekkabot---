radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 255)
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        rekabit.runMotor(MotorChannel.All, MotorDirection.Backward, 255)
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        rekabit.brakeMotor(MotorChannel.All)
    }
    if (receivedNumber == 4) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 106)
    }
    if (receivedNumber == 5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        rekabit.runMotor(MotorChannel.All, MotorDirection.Backward, 106)
    }
    if (receivedNumber == 6) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 255)
        rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 100)
    }
    if (receivedNumber == 7) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 100)
        rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 255)
    }
})
input.onButtonPressed(Button.A, function () {
    rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 255)
})
input.onGesture(Gesture.TiltLeft, function () {
    rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 255)
    rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 100)
})
input.onButtonPressed(Button.AB, function () {
    rekabit.brakeMotor(MotorChannel.M1)
})
input.onButtonPressed(Button.B, function () {
    rekabit.runMotor(MotorChannel.All, MotorDirection.Backward, 255)
})
input.onGesture(Gesture.TiltRight, function () {
    rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 100)
    rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 255)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    rekabitRgbStick.showRainbow()
})
basic.showString("EKKABOT!")
display.rotateTo(display.Direction.LogoToRight)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . # # # .
        # . # . #
        . # . # .
        . # # # .
        `)
    basic.clearScreen()
    led.stopAnimation()
})
