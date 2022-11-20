controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . f 9 9 9 9 f . . . . 
        . . . . . f 9 6 6 6 6 9 f . . . 
        . f f f f f f 6 6 6 f f . . . . 
        . f 4 4 4 4 4 4 8 8 5 . . . . . 
        . f f f f f f 6 6 6 f f . . . . 
        . . . . . f 9 6 6 6 6 9 f . . . 
        . . . . . . f 9 9 9 9 f . . . . 
        . . . . . . . f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, VIKINGO, 0, -50)
    VIKINGO.startEffect(effects.bubbles, 200)
    projectile.follow(VELA)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Triangle,
    254,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
info.onCountdownEnd(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(true, effects.clouds)
    VELA.destroy(effects.fire, 500)
})
let VELA: Sprite = null
let projectile: Sprite = null
let VIKINGO: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    999999999999999999999999999999999f999999999999999999999999999999999999999f999999999999999999999999999999999999999999f9999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    9999999999999999999f99999999999999999f99999999999999999999999999999f999999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999f9999999999999999999999999999999f9999999999999999999999999999999999999f9999999999999999999999999999999999999f999999999999999999999999999999999999999999
    999999999f9999999999999999999999999999999f9999999999999999999999999999999999999f9999999999999999999999999999999999999f999999999999999999999999999999999999999999
    999999999f9999999999999999999999999999999f9999999999999999999999999999999999999f9999999999999999999999999999999999999f999999999999999999999999999999999999999999
    999999999f9999999999999999999999999999999f9999999999999999999999999999999999999f9999999999999999999999999999999999999f999999999999999999999999999999999999999999
    999999999f9999999999999999999999999999999f9999999999999999999999999999999999999f9999999999999999999999999999999999999f999999999999999999999999999999999999999999
    999999999f9999999999999999999999999999999f9999999999999999999999999999999999999f9999999999999999999999999999999999999f999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999f9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999999999f9999999999999999999999
    999999999999999999999f9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999999999f9999999999999999999999
    999999999999999999999f9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999999999f9999999999999999999999
    999999999999999999999f9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999999999f9999999999999999999999
    999999999999999999999f9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999999999f9999999999999999999999
    999999999999999999999f9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999999999f9999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999f999999f999999999999999
    999999999f999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999999999999999f999999999999999
    999999999f999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999999999999999f999999999999999
    999999999f999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999999999999999f999999999999999
    999999999f999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999999999999999f999999999999999
    999999999f999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999999999999999f999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999999999999
    999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999999999999
    999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999999999999
    999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999999999999
    999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999999999999
    999999999991999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999999999999f999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    99999999f99999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    99999999f99999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    99999999f99999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    99999999f99999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    99999999f99999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9
    99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeef99999999999999999999999
    99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeef99999999999999999999999
    99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeef99999999999999999999999
    99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeef99999999999999999999999
    99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeef99999999999999999999999
    99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeef99999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999f99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    999999999f99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    999999999f99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    999999999f99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    999999999f99999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef999999999999999999999
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeef9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeef9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeef9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeef9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeef9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeef999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999
    999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999
    999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999
    999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999
    999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999
    999999999f99999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef9999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999f9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999f9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999f9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999f9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999f9999999999999
    999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999f9999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999f9999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999
    99999999f9999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999
    99999999f9999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999
    99999999f9999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999
    99999999f9999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999
    99999999f9999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    9999999999999999f9999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999
    9999999999999999f9999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999
    9999999999999999f9999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999
    9999999999999999f9999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999
    9999999999999999f9999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999
    9999999999999999f9999999999999999999999999999999999feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef99999999999999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999999999999f99999999999999999999999f999999999999999999999999999999999f99999999999999999999999999999999999999f99999999999999999999999999f99999999999999
    999999999999999999999f99999999999999999999999f999999999999999999999999999999999f99999999999999999999999999999999999999f99999999999999999999999999f99999999999999
    999999999999999999999f99999999999999999999999f999999999999999999999999999999999f99999999999999999999999999999999999999f99999999999999999999999999f99999999999999
    999999999999999999999f99999999999999999999999f999999999999999999999999999999999f99999999999999999999999999999999999999f99999999999999999999999999f99999999999999
    999999999999999999999f99999999999999999999999f999999999999999999999999999999999f99999999999999999999999999999999999999f99999999999999999999999999f99999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99999999f99999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999999999999999999999f999999999999999999999
    99999999f99999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999999999999999999999f999999999999999999999
    99999999f99999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999999999999999999999f999999999999999999999
    99999999f99999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999999999999999999999f999999999999999999999
    99999999f99999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999999999999999999999f999999999999999999999
    99999999f99999999999999999999f9999999999999999999999999999f99999999999999999999999999999999999999f9999999999999999999999999999999999999999f999999999999999999999
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    999999999999f99999999999999999999f9999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999f9999999999999999999999999999999999999
    999999999999f99999999999999999999f9999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999f9999999999999999999999999999999999999
    999999999999f99999999999999999999f9999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999f9999999999999999999999999999999999999
    999999999999f99999999999999999999f9999999999999999999999999999999999999999999999f99999999999999999999999999999999999999999f9999999999999999999999999999999999999
    999999999999f99999999999999999999f9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999f9999999999999999999999999999999999999
    `)
VIKINGO = sprites.create(img`
    .......ffff...........
    .....fffbbfff.........
    ....fffeeeefff........
    ...fffbbbbbbfff.......
    ...fbbeeeeeebff.......
    ...feeffffffeef.......
    ...ffff4444ffff..4ffd.
    ..ff4dddddddd4ff.fecd.
    ..ff4dffddffd4ff.fecd.
    ..f444dd44dd444f.ffcd.
    .fff4444dd4444feee....
    .feff44444444feede....
    .fdf.ffffffff.edde....
    .fef.f888888f.eeee....
    .fff.f88ee88f.........
    .....feeeeeef.........
    .....ffffffff.........
    ......................
    ......................
    ......................
    ......................
    ......................
    `, SpriteKind.Player)
controller.moveSprite(VIKINGO, 70, 70)
VIKINGO.setBounceOnWall(true)
VIKINGO.setPosition(78, 88)
music.magicWand.playUntilDone()
info.setLife(5)
info.startCountdown(60)
game.onUpdate(function () {
    VELA.setVelocity(52, 0)
    VELA.setPosition(100, 101)
})
game.onUpdateInterval(2000, function () {
    info.setScore(10)
    for (let index = 0; index < 8; index++) {
        VELA = sprites.create(img`
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . 5 4 5 . . . . . . . 
            . . . . . 5 5 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 5 4 2 4 5 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . . . 1 1 1 1 1 1 d . . . . . 
            . . . . 1 1 1 1 1 1 d . . . . . 
            . . . . 1 1 1 1 1 d d . . . . . 
            . . . . 1 1 1 1 d d d . . . . . 
            . . . . 1 1 1 d d d d . . . . . 
            . . . . d 1 d d d d d . . . . . 
            . . . . d 1 d d d d d . . . . . 
            . . . . d d d d d d d . . . . . 
            . . . . d d d d d d d . . . . . 
            `, SpriteKind.Enemy)
    }
    VELA.setVelocity(51, 0)
    VELA.setPosition(0, 76)
})
forever(function () {
    music.playMelody("D F E G A F E C ", 110)
})
