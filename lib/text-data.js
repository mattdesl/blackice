var THREE = require('three')
var lineHeight = 22
var big = 0.7
var small = 0.5

var panelWidth = 20
module.exports = [
    
    {
        name: 'tonnes',
        panels: [ {
            // origin: new THREE.Vector3(18, 10, 2),
            labels: [
                { text: 'each year Russia spills', size: small },
                { text: '5 million tonnes of oil', size: big, translation: [-2, -lineHeight, 0] },
            ]
        }, 
        {
            // origin: new THREE.Vector3(-20, 10, 2),
            width: panelWidth,
            labels: [
                { text: 'expected yearly output', size: small },
                { text: '6.6 million tonnes of oil', size: big, translation: [0, -lineHeight, 0] },
            ]
        } 
        ]
    },
    {
        name: 'top',
        panels: [ {
            labels: [
                { text: 'technologically obsolete', size: big },
                { text: 'physically unsafe', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: '18 years to construct', size: big },
                { text: 'using secondhand materials', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'nature',
        panels: [ {
            labels: [
                { text: '16hrs for oil spill to reach', size: big },
                { text: 'nature reserve 50km away', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: 'crucial breeding grounds', size: big },
                { text: 'for walrus, whales & polar bears', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'response',
        panels: [ {
            labels: [
                { text: 'large scale spill equipment', size: big },
                { text: '1000km (3 days sailing) away', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth*1.5,
            labels: [
                { text: 'previous response plan included', size: big },
                { text: '15 buckets and 3 axes', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'spill',
        panels: [ {
            labels: [
                { text: 'impossible to clean up', size: big },
                { text: 'an arctic oil spill', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: 'oil spills are inevitable', size: big },
                { text: 'response plan not public', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
    {
        name: 'weather',
        panels: [ {
            labels: [
                { text: 'as cold as -50c / 122f', size: big },
                { text: 'iced in 8 months per year', size: small, translation: [0, -lineHeight, 0] },
            ]
        },
        {
            width: panelWidth,
            labels: [
                { text: 'plagued by bad weather', size: big },
                { text: 'waves reach up to 12m', size: small, translation: [0, -lineHeight, 0] },
            ]
        } ]
    },
]
