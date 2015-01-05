var TweenMax = require('gsap')
var clamp = require('clamp')
var smoothstep = require('smoothstep')

module.exports = function(controller, labels) {

    var closeIndex = closest(controller, labels)
    // console.log(controller.theta)
    labels.forEach(function(label, i) {
        var min = 30 * Math.PI/180
        var dist = distance(controller, label)
        var alpha = 1.0 - clamp(dist / min, 0, 1)
        label.opacity = alpha



        label.opacity = i === closeIndex //smoothstep(0.0, 0.5, alpha)

        // if (dist < min) {
        //     if (!f.showing) 
        //         animateInFeature(f)
        // } else {
        //     if (f.showing) 
        //         animateOutFeature(f)
        // }
    })
}

function distance(controller, label) {
    //signed distance
    var x = -label.theta, 
        y = controller.theta

    var abdist = Math.abs(x - y)
    return Math.min((2 * Math.PI) - abdist, abdist)

}

function closest(controller, labels) {
    var minDist = Number.MAX_VALUE
    var ret = -1
    labels.forEach(function(label, index) {
        var dist = distance(controller, label)
        
        if (dist < minDist) {
            minDist = dist
            ret = index
        }
    })
    return ret
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