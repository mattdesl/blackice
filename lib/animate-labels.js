var TweenMax = require('gsap')
var clamp = require('clamp')
var smoothstep = require('smoothstep')

module.exports = function(controller, labels) {
    // labels.forEach(function(f) {
        // var min = 90 * Math.PI/180

        // //signed distance
        // var x = f.theta, 
        //     y = controller.theta

        // if (f.mirror)
        //     x += Math.PI

        // var abdist = Math.abs(x - y)
        // var dist = Math.min((2 * Math.PI) - abdist, abdist)

        // var alpha = 1.0 - clamp(dist / min, 0, 1)
        // f.text.opacity = smoothstep(0.0, 0.25, alpha)

        // if (dist < min) {
        //     if (!f.showing) 
        //         animateInFeature(f)
        // } else {
        //     if (f.showing) 
        //         animateOutFeature(f)
        // }
    // })
}


function setShowing(feature, showing) {
    feature.showing = showing
    feature.object3d.visible = showing
}

function animateInFeature(feature) {
    feature.showing = true
    feature.fade = 0
    // TweenMax.to(feature.object.scale, 1.0, {
    //     y: 1.0,
    //     ease: "easeOutExpo"
    // })
    TweenMax.killTweensOf(feature)
    TweenMax.to(feature, 1, {
        fade: 1.0,
        ease: "easeOutQuart"
    })
}

function animateOutFeature(feature) {
    if (feature.animatingOut)
        return

    feature.animatingOut = true
    TweenMax.to(feature, 1.0, {
        fade: 0,
        onComplete: hideFeature.bind(null, feature)
    })
}

function hideFeature(feature) {
    feature.animatingOut = false
    feature.showing = false
}