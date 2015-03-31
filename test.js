var blackice = require('./')
var getContext = require('webgl-context')

require('domready')(function() {
    document.body.style.margin = '0'
    document.body.style.overflow = 'hidden'
    document.body.style.background = 'black'

    var gl = getContext()
    if (!gl) {
        var img = new Image()
        img.onload = function() {
            document.body.appendChild(img)
            var parent = document.createElement('div')
            parent.style.width = '100%'
            parent.style.height = '100%'
            parent.style.position = 'absolute'
            parent.style.top = parent.style.left = '0'
            parent.style['text-align'] = 'center'

            var text = document.createElement('div')
            text.textContent = 'Sorry, your browser does not support WebGL!'
            text.style.color = 'white'
            text.style['margin-top'] = '25%'
            text.style['font-family'] = 'Helvetica, sans-serif'
            text.style['font-size'] = '26px'

            parent.appendChild(text)
            document.body.appendChild(parent)
        }
        img.src = 'img/no-webgl.jpg'
        img.style.width = '100%'
        img.style.opacity = '0.5'
        center(img)
        

    } else {
        webgl()
    } 
})

function center(el) {
    el.style.position = 'absolute'
    el.style.top = '0'
    el.style.left = '0'
    el.style.left = '0'
    el.style.bottom = '0'
    el.style.margin = 'auto'
}

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