var THREE = require('three')
var lineHeight = 22
var big = 0.7
var small = 0.5

module.exports = [
    
    {
        name: 'tonnes',
        panels: [ {
            origin: new THREE.Vector3(18, 10, 2),
            labels: [
                { text: 'Annual Russian oil spills', size: small },
                { text: '5 million tonnes', size: big, translation: [-2, -lineHeight, 0] },
            ]
        }, {
            origin: new THREE.Vector3(-20, 10, 2),
            width: 20,
            labels: [
                { text: 'Platform expected annual output', size: small },
                { text: '6.6 million tonnes', size: big, translation: [0, -lineHeight, 0] },
            ]
        } ]
    }
    
    /*{
        origin: new THREE.Vector3(10, 10, 18),
        labels: [
            { text: 'Top section made from retired rig', size: small },
            { text: 'Built in 1983 for use in the North sea', size: big, translation: [-2, -lineHeight, 0] },
        ]
    },
    {
        origin: new THREE.Vector3(-10, 10, -18),
        mirror: true,
        width: 20,
        labels: [
            { text: '18 years to construct', size: big },
            { text: '1995', size: small, translation: [0, -lineHeight, 0] },
            { text: '2013', size: small, translation: [125, -lineHeight, 0] },
            { text: 'Technologically obsolete', size: small, translation: [0, -lineHeight*2, 0] }
        ],
        shapes: [
            { points: '39.3,7.1 46.6,3.6 39.3,0 39.3,2.1 0,2.1 0,5.3 39.4,5.3',
                scale: [4, 4, 4],
                position: [-12, -1.7, 0]
            }
        ]
    }*/
]
