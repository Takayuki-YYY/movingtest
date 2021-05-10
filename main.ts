let 横位置 = 2
let 縦位置 = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(input.acceleration(Dimension.X) / 500 + 2, input.acceleration(Dimension.Y) / 500 + 2)
})
