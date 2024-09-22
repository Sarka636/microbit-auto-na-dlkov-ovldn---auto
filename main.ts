radio.onReceivedValue(function (name, value) {
    if (name == "angle") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, value)
    } else if (name == "speed") {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, value)
    }
})
radio.setGroup(1)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 180)
basic.showIcon(IconNames.Heart)
