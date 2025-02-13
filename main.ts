input.onButtonPressed(Button.A, function () {
    turn_on = 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    turn_on = 0
    basic.showIcon(IconNames.Yes)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.UntilDone)
})
let turn_on = 0
basic.showIcon(IconNames.Yes)
turn_on = 0
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    if (turn_on == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(1000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
