let neprestan = 0
input.onGesture(Gesture.FreeFall, function () {
    neprestan = 0
    while (neprestan == 0) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 5000, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
