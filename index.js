// Project Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// Set canvas size to full
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Gravity 
gravity = 0.5   

// Create a player class
class Player {

    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 25
        this.height = 25
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        }
        else {
            this.velocity.y = 0
        }
    }
}

// Create a platform



// Create a player object
const player = new Player()

// Create keys
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

// Animate object (recursive)
function animate() {

    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

    // right
    if (keys.right.pressed) {
        player.velocity.x = 5
    }
    else if (keys.left.pressed) {
        player.velocity.x = -5
    }
    else {
        player.velocity.x = 0
    }

}

animate()

// Key pressed
window.addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 65:
            // console.log('left')
            keys.left.pressed = true
            break
        case 83:
            // console.log('down')
            keys.down.pressed = true
            break
        case 68:
            // console.log('right')
            keys.right.pressed = true
            break
        case 87:
            // console.log('up')
            player.velocity.y -= 10
            break
    }
})

// Key lifted
window.addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 65:
            // console.log('left')
            keys.left.pressed = false
            break
        case 83:
            // console.log('down')
            keys.down.pressed = false
            break
        case 68:
            // console.log('right')
            keys.right.pressed = false
            break
        case 87:
            // console.log('up')
            player.velocity.y -= 10
            break
    }
})