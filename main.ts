controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bigTurkey.vy = -300
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`cage`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency17`)
    freeTurkeys = sprites.create(turkey_imgs.lil, SpriteKind.Rescued)
    tiles.placeOnTile(freeTurkeys, location)
    freeTurkeys.follow(bigTurkey)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile16, function (sprite, location) {
    carnival.onGameOverExpanded(carnival.WinTypes.Score)
})
let freeTurkeys: Sprite = null
let bigTurkey: Sprite = null
bigTurkey = sprites.create(turkey_imgs.player, SpriteKind.Player)
controller.moveSprite(bigTurkey, 100, 0)
bigTurkey.ay = 500
scene.cameraFollowSprite(bigTurkey)
tiles.placeOnRandomTile(bigTurkey, assets.tile`start`)
carnival.startTimer()
