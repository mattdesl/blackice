var TweenMax = require('gsap')
var clamp = require('clamp')
var smoothstep = require('smoothstep')

var lastIndex = -1

module.exports = function(controller, labels) {
    var closeIndex = closest(controller, labels)

    // console.log(controller.theta)
    labels.forEach(function(label, i) {
        // setShowing(label, true)
        var visible = i===closeIndex
        if (visible && !label.showing) {
            animateInFeature(label)
        } else if (!visible && label.showing) {
            animateOutFeature(label)
        }
    })
}

module.exports.hideAll = function(features) {
    features.forEach(function(f) {
        setShowing(f, false)
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
}

function animateInFeature(feature) {
    feature.showing = true
    feature.fade = 0
    TweenMax.killTweensOf(feature)
    TweenMax.to(feature, 0.5, {
        fade: 1.0,
        ease: "easeOutQuad"
    })
}

function animateOutFeature(feature) {
    if (feature.animatingOut)
        return

    feature.animatingOut = true
    TweenMax.to(feature, 0.5, {
        fade: 0,
        ease: 'easeOutQuad',
        onComplete: hideFeature.bind(null, feature)
    })
}

function hideFeature(feature) {
    feature.animatingOut = false
    feature.showing = false
}