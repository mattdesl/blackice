var blackice = require('./')

require('domready')(function() {
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'
    document.body.style.background = 'black'

    blackice.setup(function(err) {
        if (err) {
            console.log("No WebGL supported", err)
            return
        }
        webgl()
    })
})

function webgl() {
    var canvas = document.createElement('canvas')
    canvas.style.display = 'block'
    document.body.appendChild(canvas)

    var app = blackice({ 
        canvas: canvas
    })

    app.load(function(err) {
        if (err)
            console.error(err)
        app.start()
    })
}