radio.onReceivedNumber(function (receivedNumber) {
    music.ringTone(262)
    if (receivedNumber == 1) {
        led.plot(receivedNumber % 5, Math.floor(receivedNumber / 5))
    }
})
radio.setGroup(43)
