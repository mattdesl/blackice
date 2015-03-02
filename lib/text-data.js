var THREE = require('three')
var mobile = require('./is-mobile')

var lineHeight = 22
var big = 0.7
var small = 0.5
var panelWidth = 20

var mobileScale = mobile ? 0.8 : 1
big *= mobileScale
small *= mobileScale
panelWidth *= mobileScale
lineHeight *= mobileScale

module.exports = [
    
    {
        name: 'tonnes',
        panels: [ {
            // origin: new THREE.Vector3(18, 10, 2),
            labels: [
                { text: '5 million tonnes', size: big },
                { text: 'estimated oil spilt in Russia each year', size: small, translation: [-2, -lineHeight, 0] },
            ]
        }, 
        {
            // origin: new THREE.Vector3(-20, 10, 2),
            width: panelWidth,
            labels: [
                { text: '6 million tonnes', size: big },
                { text: 'expected yearly output of this platform', size: small, translation: [0, -lineHeight, 0] },
            ]
        } 
        ]
    },
    {
        name: 'top',
        panels: [ {
            labels: [
                { text: 'Technologically outdated', size: big },
                { text: 'using secondhand components', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: '$3.2 billion over budget', size: big },
                { text: '18 years to construct', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'nature',
        panels: [ {
            labels: [
                { text: '50 km from Nature reserve', size: big },
                { text: 'Less than 20hrs for oil to reach', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: 'Crucial breeding grounds', size: big },
                { text: 'for walrus, whales & polar bears', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'response',
        panels: [ {
            labels: [
                { text: 'Large scale spill equipment ', size: big },
                { text: '1000km (3 days sailing) away', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth*1.5,
            labels: [
                { text: '15 buckets and 3 axes', size: big },
                { text: 'included in previous response plan', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'spill',
        panels: [ {
            labels: [
                { text: 'Arctic Oil spills', size: big },
                { text: 'are close to impossible to clean up', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: 'Offshore drilling for arctic oil', size: big },
                { text: 'spills are virtually inevitable', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'weather',
        panels: [ {
            labels: [
                { text: 'As cold as -50°c / 122°f', size: big },
                { text: 'two thirds of the year surrounded by ice', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: 'Plagued by bad weather', size: big },
                { text: 'waves as high as 12m', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
]
