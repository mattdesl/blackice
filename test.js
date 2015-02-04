var blackice = require('./')

require('domready')(function() {
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'

    //your canvas...
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
})