/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Joos
 * Created on: Dec 1
 * This program communicates with another microbit if something is too close
*/

basic.showIcon(IconNames.Happy)
radio.setGroup(1)
let objectDistance = 0

//getting distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    objectDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (objectDistance <= 10) {
        radio.sendString("Too close!")
    }
    basic.pause (750)
})

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})