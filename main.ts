input.onButtonPressed(Button.A, function () {
    Vstup = "" + Vstup + "A"
})
input.onGesture(Gesture.ThreeG, function () {
    neprestan = 0
    basic.showIcon(IconNames.Angry)
    while (neprestan == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    Vstup = "" + Vstup + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let neprestan = 0
let Vstup = ""
let Heslo = "ABAB"
basic.forever(function () {
    if (Heslo == Vstup) {
        control.reset()
    }
})
