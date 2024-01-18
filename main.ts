radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    led.plot(receivedNumber % 5, Math.floor(receivedNumber / 5))
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(43)
basic.showIcon(IconNames.Heart)
