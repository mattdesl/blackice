(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./test.js":[function(require,module,exports){
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
},{"./":"/projects/blackice/index.js","domready":"/projects/blackice/node_modules/domready/ready.js"}],"/projects/blackice/fonts/Exo2SemiBold.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={"pages":["Exo2SemiBold.png"],"chars":[{"id":32,"x":0,"y":0,"width":0,"height":0,"xoffset":0,"yoffset":33,"xadvance":7,"page":0,"chnl":0},{"id":41,"x":0,"y":0,"width":20,"height":41,"xoffset":-4,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":40,"x":20,"y":0,"width":19,"height":41,"xoffset":-3,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":166,"x":39,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":124,"x":52,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":125,"x":65,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":123,"x":83,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":36,"x":101,"y":0,"width":25,"height":39,"xoffset":-3,"yoffset":3,"xadvance":18,"page":0,"chnl":0},{"id":93,"x":126,"y":0,"width":17,"height":39,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":91,"x":143,"y":0,"width":17,"height":39,"xoffset":-2,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":81,"x":160,"y":0,"width":28,"height":39,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":182,"x":188,"y":0,"width":25,"height":38,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":167,"x":213,"y":0,"width":24,"height":38,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":106,"x":237,"y":0,"width":16,"height":38,"xoffset":-4,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":92,"x":253,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":47,"x":279,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":102,"x":305,"y":0,"width":23,"height":33,"xoffset":-4,"yoffset":5,"xadvance":13,"page":0,"chnl":0},{"id":169,"x":328,"y":0,"width":33,"height":32,"xoffset":-3,"yoffset":6,"xadvance":26,"page":0,"chnl":0},{"id":165,"x":361,"y":0,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":163,"x":390,"y":0,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":162,"x":415,"y":0,"width":23,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":161,"x":438,"y":0,"width":14,"height":32,"xoffset":-2,"yoffset":12,"xadvance":9,"page":0,"chnl":0},{"id":38,"x":452,"y":0,"width":32,"height":32,"xoffset":-3,"yoffset":6,"xadvance":25,"page":0,"chnl":0},{"id":35,"x":0,"y":41,"width":30,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":37,"x":30,"y":41,"width":36,"height":32,"xoffset":-3,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":63,"x":66,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":33,"x":90,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":48,"x":104,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":57,"x":130,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":56,"x":155,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":55,"x":181,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":54,"x":205,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":53,"x":231,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":52,"x":255,"y":41,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":51,"x":282,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":50,"x":307,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":49,"x":332,"y":41,"width":19,"height":32,"xoffset":-4,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":121,"x":351,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":113,"x":378,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":112,"x":403,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":108,"x":428,"y":41,"width":17,"height":32,"xoffset":-2,"yoffset":6,"xadvance":10,"page":0,"chnl":0},{"id":107,"x":445,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":105,"x":469,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":8,"page":0,"chnl":0},{"id":104,"x":483,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":103,"x":0,"y":73,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":100,"x":27,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":98,"x":52,"y":73,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":90,"x":77,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":89,"x":102,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":88,"x":130,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":87,"x":159,"y":73,"width":39,"height":32,"xoffset":-4,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":86,"x":198,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":85,"x":227,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":84,"x":254,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":83,"x":282,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":82,"x":307,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":80,"x":333,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":79,"x":359,"y":73,"width":28,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":78,"x":387,"y":73,"width":28,"height":32,"xoffset":-2,"yoffset":6,"xadvance":23,"page":0,"chnl":0},{"id":77,"x":415,"y":73,"width":34,"height":32,"xoffset":-2,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":76,"x":449,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":75,"x":473,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":74,"x":0,"y":105,"width":18,"height":32,"xoffset":-4,"yoffset":6,"xadvance":11,"page":0,"chnl":0},{"id":73,"x":18,"y":105,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":72,"x":32,"y":105,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":71,"x":59,"y":105,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":70,"x":86,"y":105,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":69,"x":110,"y":105,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":68,"x":134,"y":105,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":67,"x":161,"y":105,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":66,"x":187,"y":105,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":65,"x":213,"y":105,"width":30,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":64,"x":243,"y":105,"width":29,"height":31,"xoffset":-2,"yoffset":9,"xadvance":24,"page":0,"chnl":0},{"id":116,"x":272,"y":105,"width":22,"height":30,"xoffset":-4,"yoffset":8,"xadvance":13,"page":0,"chnl":0},{"id":59,"x":294,"y":105,"width":14,"height":29,"xoffset":-2,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":164,"x":308,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":9,"xadvance":19,"page":0,"chnl":0},{"id":122,"x":333,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":120,"x":357,"y":105,"width":26,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":119,"x":383,"y":105,"width":36,"height":26,"xoffset":-4,"yoffset":12,"xadvance":27,"page":0,"chnl":0},{"id":118,"x":419,"y":105,"width":27,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":117,"x":446,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":115,"x":470,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":114,"x":0,"y":137,"width":20,"height":26,"xoffset":-2,"yoffset":12,"xadvance":13,"page":0,"chnl":0},{"id":111,"x":20,"y":137,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":110,"x":45,"y":137,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":109,"x":69,"y":137,"width":33,"height":26,"xoffset":-2,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":101,"x":102,"y":137,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":99,"x":127,"y":137,"width":23,"height":26,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":97,"x":150,"y":137,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":177,"x":174,"y":137,"width":24,"height":25,"xoffset":-2,"yoffset":11,"xadvance":19,"page":0,"chnl":0},{"id":178,"x":198,"y":137,"width":21,"height":24,"xoffset":-3,"yoffset":3,"xadvance":14,"page":0,"chnl":0},{"id":43,"x":219,"y":137,"width":24,"height":24,"xoffset":-3,"yoffset":11,"xadvance":17,"page":0,"chnl":0},{"id":62,"x":243,"y":137,"width":23,"height":24,"xoffset":-2,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":60,"x":266,"y":137,"width":23,"height":24,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":58,"x":289,"y":137,"width":14,"height":24,"xoffset":-3,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":187,"x":303,"y":137,"width":23,"height":23,"xoffset":-3,"yoffset":14,"xadvance":16,"page":0,"chnl":0},{"id":185,"x":326,"y":137,"width":17,"height":23,"xoffset":-4,"yoffset":4,"xadvance":10,"page":0,"chnl":0},{"id":179,"x":343,"y":137,"width":20,"height":23,"xoffset":-3,"yoffset":4,"xadvance":13,"page":0,"chnl":0},{"id":174,"x":363,"y":137,"width":24,"height":23,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":171,"x":387,"y":137,"width":23,"height":23,"xoffset":-3,"yoffset":14,"xadvance":16,"page":0,"chnl":0},{"id":186,"x":410,"y":137,"width":21,"height":21,"xoffset":-3,"yoffset":9,"xadvance":14,"page":0,"chnl":0},{"id":199,"x":431,"y":137,"width":26,"height":40,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":253,"x":457,"y":137,"width":27,"height":39,"xoffset":-4,"yoffset":5,"xadvance":17,"page":0,"chnl":0},{"id":221,"x":0,"y":177,"width":28,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":19,"page":0,"chnl":0},{"id":219,"x":28,"y":177,"width":27,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":21,"page":0,"chnl":0},{"id":218,"x":55,"y":177,"width":27,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":21,"page":0,"chnl":0},{"id":217,"x":82,"y":177,"width":27,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":21,"page":0,"chnl":0},{"id":213,"x":109,"y":177,"width":28,"height":39,"xoffset":-3,"yoffset":-1,"xadvance":22,"page":0,"chnl":0},{"id":212,"x":137,"y":177,"width":28,"height":39,"xoffset":-3,"yoffset":-1,"xadvance":22,"page":0,"chnl":0},{"id":206,"x":165,"y":177,"width":24,"height":39,"xoffset":-6,"yoffset":-1,"xadvance":9,"page":0,"chnl":0},{"id":205,"x":189,"y":177,"width":18,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":9,"page":0,"chnl":0},{"id":204,"x":207,"y":177,"width":19,"height":39,"xoffset":-6,"yoffset":-1,"xadvance":9,"page":0,"chnl":0},{"id":202,"x":226,"y":177,"width":24,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":18,"page":0,"chnl":0},{"id":201,"x":250,"y":177,"width":24,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":18,"page":0,"chnl":0},{"id":200,"x":274,"y":177,"width":24,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":18,"page":0,"chnl":0},{"id":197,"x":298,"y":177,"width":30,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":20,"page":0,"chnl":0},{"id":193,"x":328,"y":177,"width":30,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":20,"page":0,"chnl":0},{"id":192,"x":358,"y":177,"width":30,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":20,"page":0,"chnl":0},{"id":255,"x":388,"y":177,"width":27,"height":38,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":254,"x":415,"y":177,"width":25,"height":38,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":220,"x":440,"y":177,"width":27,"height":38,"xoffset":-2,"yoffset":0,"xadvance":21,"page":0,"chnl":0},{"id":214,"x":467,"y":177,"width":28,"height":38,"xoffset":-3,"yoffset":0,"xadvance":22,"page":0,"chnl":0},{"id":211,"x":0,"y":216,"width":28,"height":38,"xoffset":-3,"yoffset":0,"xadvance":22,"page":0,"chnl":0},{"id":210,"x":28,"y":216,"width":28,"height":38,"xoffset":-3,"yoffset":0,"xadvance":22,"page":0,"chnl":0},{"id":209,"x":56,"y":216,"width":28,"height":38,"xoffset":-2,"yoffset":0,"xadvance":23,"page":0,"chnl":0},{"id":207,"x":84,"y":216,"width":18,"height":38,"xoffset":-4,"yoffset":0,"xadvance":9,"page":0,"chnl":0},{"id":203,"x":102,"y":216,"width":24,"height":38,"xoffset":-2,"yoffset":0,"xadvance":18,"page":0,"chnl":0},{"id":196,"x":126,"y":216,"width":30,"height":38,"xoffset":-4,"yoffset":0,"xadvance":20,"page":0,"chnl":0},{"id":195,"x":156,"y":216,"width":30,"height":38,"xoffset":-4,"yoffset":0,"xadvance":20,"page":0,"chnl":0},{"id":194,"x":186,"y":216,"width":30,"height":38,"xoffset":-4,"yoffset":0,"xadvance":20,"page":0,"chnl":0},{"id":216,"x":216,"y":216,"width":28,"height":35,"xoffset":-3,"yoffset":5,"xadvance":22,"page":0,"chnl":0},{"id":251,"x":244,"y":216,"width":24,"height":34,"xoffset":-2,"yoffset":4,"xadvance":19,"page":0,"chnl":0},{"id":250,"x":268,"y":216,"width":24,"height":34,"xoffset":-2,"yoffset":4,"xadvance":19,"page":0,"chnl":0},{"id":249,"x":292,"y":216,"width":24,"height":34,"xoffset":-2,"yoffset":4,"xadvance":19,"page":0,"chnl":0},{"id":237,"x":316,"y":216,"width":18,"height":34,"xoffset":-3,"yoffset":4,"xadvance":9,"page":0,"chnl":0},{"id":236,"x":334,"y":216,"width":19,"height":34,"xoffset":-6,"yoffset":4,"xadvance":9,"page":0,"chnl":0},{"id":231,"x":353,"y":216,"width":23,"height":34,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":229,"x":376,"y":216,"width":24,"height":34,"xoffset":-3,"yoffset":4,"xadvance":18,"page":0,"chnl":0},{"id":244,"x":400,"y":216,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":243,"x":425,"y":216,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":242,"x":450,"y":216,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":238,"x":475,"y":216,"width":22,"height":33,"xoffset":-6,"yoffset":5,"xadvance":9,"page":0,"chnl":0},{"id":234,"x":0,"y":254,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":233,"x":25,"y":254,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":232,"x":50,"y":254,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":226,"x":75,"y":254,"width":24,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":225,"x":99,"y":254,"width":24,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":224,"x":123,"y":254,"width":24,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":223,"x":147,"y":254,"width":31,"height":33,"xoffset":-4,"yoffset":5,"xadvance":22,"page":0,"chnl":0},{"id":252,"x":178,"y":254,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":246,"x":202,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":245,"x":227,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":241,"x":252,"y":254,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":240,"x":276,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":239,"x":301,"y":254,"width":19,"height":32,"xoffset":-5,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":235,"x":320,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":228,"x":345,"y":254,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":227,"x":369,"y":254,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":222,"x":393,"y":254,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":208,"x":418,"y":254,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":198,"x":447,"y":254,"width":39,"height":32,"xoffset":-5,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":191,"x":486,"y":254,"width":24,"height":32,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":190,"x":0,"y":287,"width":38,"height":32,"xoffset":-3,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":189,"x":38,"y":287,"width":37,"height":32,"xoffset":-4,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":188,"x":75,"y":287,"width":37,"height":32,"xoffset":-4,"yoffset":6,"xadvance":28,"page":0,"chnl":0},{"id":248,"x":112,"y":287,"width":25,"height":31,"xoffset":-3,"yoffset":10,"xadvance":18,"page":0,"chnl":0},{"id":247,"x":137,"y":287,"width":25,"height":26,"xoffset":-3,"yoffset":10,"xadvance":18,"page":0,"chnl":0},{"id":230,"x":162,"y":287,"width":35,"height":26,"xoffset":-3,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":215,"x":197,"y":287,"width":23,"height":22,"xoffset":-3,"yoffset":13,"xadvance":16,"page":0,"chnl":0},{"id":170,"x":220,"y":287,"width":21,"height":21,"xoffset":-3,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":42,"x":241,"y":287,"width":21,"height":21,"xoffset":-3,"yoffset":6,"xadvance":14,"page":0,"chnl":0},{"id":61,"x":262,"y":287,"width":24,"height":20,"xoffset":-2,"yoffset":13,"xadvance":19,"page":0,"chnl":0},{"id":94,"x":286,"y":287,"width":23,"height":19,"xoffset":-4,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":44,"x":309,"y":287,"width":14,"height":19,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":176,"x":323,"y":287,"width":18,"height":18,"xoffset":-3,"yoffset":7,"xadvance":11,"page":0,"chnl":0},{"id":180,"x":341,"y":287,"width":18,"height":17,"xoffset":-3,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":172,"x":359,"y":287,"width":24,"height":17,"xoffset":-2,"yoffset":17,"xadvance":19,"page":0,"chnl":0},{"id":39,"x":383,"y":287,"width":13,"height":17,"xoffset":-3,"yoffset":6,"xadvance":7,"page":0,"chnl":0},{"id":96,"x":396,"y":287,"width":18,"height":17,"xoffset":-4,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":34,"x":414,"y":287,"width":18,"height":17,"xoffset":-3,"yoffset":6,"xadvance":12,"page":0,"chnl":0},{"id":184,"x":432,"y":287,"width":16,"height":16,"xoffset":-4,"yoffset":30,"xadvance":8,"page":0,"chnl":0},{"id":183,"x":448,"y":287,"width":13,"height":14,"xoffset":-2,"yoffset":18,"xadvance":8,"page":0,"chnl":0},{"id":175,"x":461,"y":287,"width":20,"height":14,"xoffset":-3,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":168,"x":481,"y":287,"width":19,"height":14,"xoffset":-2,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":126,"x":0,"y":319,"width":22,"height":14,"xoffset":-2,"yoffset":17,"xadvance":17,"page":0,"chnl":0},{"id":46,"x":22,"y":319,"width":14,"height":14,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":173,"x":36,"y":319,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0},{"id":95,"x":55,"y":319,"width":24,"height":13,"xoffset":-2,"yoffset":28,"xadvance":18,"page":0,"chnl":0},{"id":45,"x":79,"y":319,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0}],"kernings":[],"info":{"face":"Exo 2 Semi Bold","size":32,"bold":0,"italic":0,"charset":"","unicode":0,"stretchH":100,"smooth":1,"aa":1,"padding":[4,4,4,4],"spacing":[-8,-8]},"common":{"lineHeight":40,"base":33,"scaleW":512,"scaleH":512,"pages":1,"packed":0}}
},{}],"/projects/blackice/index.js":[function(require,module,exports){
(function (global){
require('raf.js')

var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var Renderer = require('./lib/renderer')
var createFont = require('./lib/create-font')
var xtend = require('xtend')
var getContext = require('webgl-context')
var noop = function(){}

module.exports = function(opt) {
    opt = opt||{}
    var app = require('canvas-app')(render, xtend({
        context: 'webgl',
        contextAttributes: { antialias: false, alpha: false },
        retina: true,
        onResize: handleResize
    }, opt))

    
    var renderer

    app.load = function(cb) {
        cb = cb || noop
        var gl = app.context
        createFont(gl, function(err, font) {
            renderer = Renderer({
                gl: gl, 
                width: app.width, 
                height: app.height,
                font: font
            })
            cb(err)
        })
    }

    return app

    function render(gl, width, height, dt) {
        if (renderer)
            renderer.draw(dt)
    }

    function handleResize(width, height) {
        if (renderer)
            renderer.resize(width, height)
    }

    function setupSmoothTex(gl, t) {
        t.minFilter = gl.LINEAR_MIPMAP_LINEAR
        t.magFilter = gl.LINEAR

        var ext = (gl.getExtension('EXT_texture_filter_anisotropic') 
                        || gl.getExtension("MOZ_EXT_texture_filter_anisotropic"));
        if (ext) {
            var maxAnistrophy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(16, maxAnistrophy));
        }

        t.generateMipmap()
    }

    function setupNearestTex(gl, t) {
        t.minFilter = t.magFilter = gl.NEAREST
    }
}

module.exports.setup = function(cb) {
    cb = cb || noop
    var gl = getContext()
    if (!gl) {
        fallback()
        cb(new Error('no WebGL supported'))
    } else {
        cb(null)
    } 
}

function fallback() {
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
}

function center(el) {
    el.style.position = 'absolute'
    el.style.top = '0'
    el.style.left = '0'
    el.style.left = '0'
    el.style.bottom = '0'
    el.style.margin = 'auto'
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/create-font":"/projects/blackice/lib/create-font.js","./lib/renderer":"/projects/blackice/lib/renderer.js","canvas-app":"/projects/blackice/node_modules/canvas-app/index.js","raf.js":"/projects/blackice/node_modules/raf.js/raf.js","webgl-context":"/projects/blackice/node_modules/webgl-context/index.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/lib/RigScene.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var inherits = require('inherits')
var mixes = require('mixes')
var Base = THREE.Scene

var YOFF = 2.5

function RigScene(opt) {
    if (!(this instanceof RigScene))
        return new RigScene(opt)
    Base.call(this)
    this.fog = new THREE.FogExp2( 0x0b0516, 0.00015 );


    // var box = new THREE.Mesh(
    //     new THREE.BoxGeometry(20, 20, 10),
    //     new THREE.MeshBasicMaterial({ color: 0xaaaaaa, wireframe: false })
    // )

    // this.add(box)


    this.time = 0
    this.cubeMap = null
    this.updateMaterial()

    var loader = new THREE.OBJMTLLoader()
    loader.load('model/PrirazlomnayaUnwrappedFinal.obj', 'model/PrirazlomnayaUnwrappedFinal.mtl', function(object, materials) {
        var s = 0.325
        console.log(object, materials)
        object.scale.set(s,s,s)
        object.position.y -= YOFF
        this.mesh = object

        this.mesh.traverse(function(obj) {
            if (obj instanceof THREE.Mesh) {
                obj.castShadow = true
                obj.receiveShadow = true
                obj.material.shininess = 1
                obj.material.emissive = new THREE.Color('rgb(130,130,130)')
                if (obj.material.map) {
                    obj.material.transparent = true
                }
                // console.log(obj.material.uniforms)
            }
        })

        this.add(object)
    }.bind(this))
    

    // var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    // var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    // var torusKnot = new THREE.Mesh( geometry, material );
    // this.add( torusKnot );
    // torusKnot.castShadow = true
    // torusKnot.receiveShadow = true

    this.lights = [
        [ new THREE.Vector3(-10, 20, -20), 1 ],
        [ new THREE.Vector3(15, 10, 15), 0.5 ]
    ].map(function(args, i) {
        var light = new THREE.DirectionalLight( 0xddf4fd, args[1] )
        light.position.copy(args[0])
        light.castShadow = true
        light.shadowMapWidth = 1024
        light.shadowMapHeight = 1024
        light.shadowCameraNear = 1
        light.shadowCameraFar = 100

        // light.helper = new THREE.DirectionalLightHelper(light, 4)
        // this.add(light.helper)
        this.add(light)
        return light
    },this)
}

inherits(RigScene, Base)

mixes(RigScene, {

    updateMaterial: function() {
        this.material = new THREE.MeshLambertMaterial({
            color: 0xaaaaaa,
            reflectivity: 0.4,
            envMap: this.cubeMap
        })

    },

    update: function(dt) {
        this.time += Math.min(dt, 30)/1000
        var m = this.mesh
        if (!m)
            return
        var anim = Math.sin(this.time)

        // this.lights.forEach(function(light) { light.helper.update() })
        // m.position.y = YOFF + anim*0.2
        // m.position.x = Math.sin(this.time*0.1)*0.05
        // m.position.z = Math.sin(this.time*0.2)*0.1
        // m.rotation.x = anim*0.03
        // m.rotation.y = Math.sin(this.time*Math.cos(this.time*0.1))*0.005
    }
})

module.exports = RigScene
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js","mixes":"/projects/blackice/node_modules/mixes/index.js"}],"/projects/blackice/lib/TextPass.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null);
var EffectComposer = require("three-effectcomposer")(THREE);
var inherits = require("inherits");
var Base = EffectComposer.RenderPass;
var plucker = require("plucker");
var number = require("as-number");
var TextElement = require("three-sdf-text")(THREE);
var xtend = require("xtend");
var UNIT_SCALE = 0.1;
var SCALE = [UNIT_SCALE, UNIT_SCALE, UNIT_SCALE];

var mat4 = {
    scale: require("gl-mat4/scale"),
    identity: require("gl-mat4/identity"),
    multiply: require("gl-mat4/multiply"),
    translate: require("gl-mat4/translate")
};

var setVec3 = require("gl-vec3/set");
var tmpVec3 = [0, 0, 0];
var pluckPanels = plucker("panels");
var glslify = require("glslify");
var createSDFShader = require("glslify/adapter.js")("\n#define GLSLIFY 1\n\nattribute vec4 position;\nattribute vec4 color;\nattribute vec2 texcoord0;\nuniform mat4 projection;\nuniform mat4 view;\nuniform mat4 model;\nvarying vec4 v_col;\nvarying vec2 v_tex0;\nvarying float animOffset;\nvoid main() {\n  gl_Position = projection * view * model * position;\n  v_col = color;\n  v_tex0 = texcoord0;\n  gl_PointSize = 1.0;\n  animOffset = position.x / 100.0;\n}", "\n#define GLSLIFY 1\n\n#ifdef GL_ES\n\nprecision mediump float;\n#endif\n\nvarying vec4 v_col;\nvarying vec2 v_tex0;\nvarying float animOffset;\nuniform sampler2D texture0;\nuniform sampler2D texture1;\nuniform float smoothing;\nuniform float fade;\nconst vec2 shadowOffset = vec2(-1.0 / 512.0);\nconst vec4 glowColor = vec4(vec3(0.1), 1.0);\nconst float glowMin = 0.4;\nconst float glowMax = 0.8;\nvoid main() {\n  float anim = fade * animOffset;\n  anim = clamp(mix(anim, 1.0, fade * fade), 0.0, 1.0);\n  vec4 smoothColor = vec4(0.0);\n  vec4 texColor = texture2D(texture0, v_tex0);\n  float dst = texColor.a;\n  float smoothAmt = mix(1.5, smoothing, anim);\n  float alpha = smoothstep(0.5 - smoothAmt, 0.5 + smoothAmt, dst);\n  vec4 base = v_col * vec4(alpha);\n  float glowDst = texture2D(texture0, v_tex0 + shadowOffset).a;\n  vec4 glow = glowColor * smoothstep(glowMin, glowMax, glowDst);\n  float mask = 1.0 - alpha;\n  gl_FragColor = mix(vec4(0.0), base, anim);\n  if(gl_FragColor.a < 0.1)\n    discard;\n  \n}", [{"name":"projection","type":"mat4"},{"name":"view","type":"mat4"},{"name":"model","type":"mat4"},{"name":"texture0","type":"sampler2D"},{"name":"texture1","type":"sampler2D"},{"name":"smoothing","type":"float"},{"name":"fade","type":"float"}], [{"name":"position","type":"vec4"},{"name":"color","type":"vec4"},{"name":"texcoord0","type":"vec2"}]);
var sdfShader;

function TextPass(opt) {
    if (!(this instanceof TextPass))
        return new TextPass(opt);

    opt = opt || {};
    var renderer = opt.renderer;
    var camera = opt.camera;
    var scene = opt.scene;
    Base.call(this, scene, camera);
    var font = opt.font;

    if (!sdfShader)
        sdfShader = createSDFShader(renderer.getContext());

    this.groups = (opt.groups || []).map(createGroups(renderer, font));
    window.groups = this.groups;
}

function createGroups(renderer, font) {
    return function(group, groupIndex) {
        group.elements = group.panels.map(function(panel, index) {
            var side = (index === 0 ? 1 : -1);

            return panel.labels.map(function(label) {
                return createElement(label, side, renderer, font);
            });
        }).reduce(function(prev, b) {
            return prev.concat(b);
        }, []);

        group._opacity = 1;
        group.fade = 1;
        group.showing = true;
        group.animatingOut = false;

        Object.defineProperty(group, "opacity", {
            get: function() {
                return group._opacity;
            },

            set: function(val) {
                group._opacity = val;

                group.elements.forEach(function(e) {
                    e.text.opacity = val;
                });

                group.panels.forEach(function(p) {
                    p.container.visible = val > 0.01;

                    p.shapes.forEach(function(shape) {
                        shape.material.opacity = val;
                        shape.visible = val > 0.01;
                    });
                });
            }
        });

        return group;
    };
}

function createElement(label, side, renderer, font) {
    var textOpt = xtend(label, {
        font: font,
        textures: font.textures,
        shader: sdfShader
    });

    var textEl = TextElement(renderer, textOpt);

    return xtend(label, {
        text: textEl,
        side: side
    });
}

function renderElement(camera, e, fade) {
    e.object3d.updateMatrixWorld(true);
    var transform = e.text.transform;
    mat4.identity(transform);
    mat4.scale(transform, transform, SCALE);
    setVec3(tmpVec3, e.translation[0], e.translation[1], e.translation[2]);
    mat4.translate(transform, transform, tmpVec3);
    setVec3(tmpVec3, e.size, e.size, e.size);
    mat4.scale(transform, transform, tmpVec3);
    e.text.shader.bind();
    e.text.shader.uniforms.fade = fade;
    e.text.draw(camera, e.object3d);
}

inherits(TextPass, Base);

TextPass.prototype.render = function(renderer, writeBuffer, readBuffer, delta) {
    Base.prototype.render.call(this, renderer, writeBuffer, readBuffer, delta);
    var camera = this.camera;

    this.groups.forEach(function(g) {
        g.elements.forEach(function(e) {
            if (!g.showing)
                return;

            renderElement(camera, e, g.fade);
        });
    });

    renderer.resetGLState();
};

module.exports = TextPass;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"as-number":"/projects/blackice/node_modules/as-number/index.js","gl-mat4/identity":"/projects/blackice/node_modules/gl-mat4/identity.js","gl-mat4/multiply":"/projects/blackice/node_modules/gl-mat4/multiply.js","gl-mat4/scale":"/projects/blackice/node_modules/gl-mat4/scale.js","gl-mat4/translate":"/projects/blackice/node_modules/gl-mat4/translate.js","gl-vec3/set":"/projects/blackice/node_modules/gl-vec3/set.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/adapter.js":"/projects/blackice/node_modules/glslify/adapter.js","inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js","plucker":"/projects/blackice/node_modules/plucker/index.js","three-effectcomposer":"/projects/blackice/node_modules/three-effectcomposer/index.js","three-sdf-text":"/projects/blackice/node_modules/three-sdf-text/index.js","xtend":"/projects/blackice/node_modules/xtend/immutable.js"}],"/projects/blackice/lib/animate-labels.js":[function(require,module,exports){
(function (global){
var TweenMax = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)
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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"clamp":"/projects/blackice/node_modules/clamp/index.js","smoothstep":"/projects/blackice/node_modules/smoothstep/index.js"}],"/projects/blackice/lib/create-font.js":[function(require,module,exports){
var Font = require('../fonts/Exo2SemiBold.json')
var fontImage = 'fonts/Exo2SemiBold.png'
var img = require('img')
var createTexture = require('gl-texture2d')

module.exports = function(gl, cb) {
    img(fontImage, function(err, res) {
        if (err) {
            cb(err)
            return
        }

        Font.textures = [res].map(function(i) {
            var t = createTexture(gl, i)

            t.minFilter = gl.LINEAR_MIPMAP_LINEAR
            t.magFilter = gl.LINEAR

            var ext = (gl.getExtension('EXT_texture_filter_anisotropic') 
                            || gl.getExtension("MOZ_EXT_texture_filter_anisotropic"));
            if (ext) {
                var maxAnistrophy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                gl.texParameterf(gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(16, maxAnistrophy));
            }

            t.generateMipmap()
            return t
        })
        
        cb(null, Font)
    })
}
},{"../fonts/Exo2SemiBold.json":"/projects/blackice/fonts/Exo2SemiBold.json","gl-texture2d":"/projects/blackice/node_modules/gl-texture2d/texture.js","img":"/projects/blackice/node_modules/img/index.js"}],"/projects/blackice/lib/create-text-pass.js":[function(require,module,exports){
(function (global){
var TextPass = require('./TextPass')
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var xtend = require('xtend')
// var getSVG = require('./get-svg')
// var getPoly = require('./get-polygon')
var Complex = require('three-simplicial-complex')(THREE)
var mobile = require('./is-mobile')

var UNIT_SCALE = 0.1

var data = require('./text-data')

module.exports = function(opt) {
    var groups = createGroups()
    
    groups.forEach(function(group) {
        // var len = 100
        // var dir = new THREE.Vector3(Math.cos(group.theta), 0, Math.sin(group.theta))
        // var arrow = new THREE.ArrowHelper(dir, new THREE.Vector3(), len)
        // opt.scene.add(arrow)

        group.panels.forEach(function(panel) {
            opt.scene.add(panel.container)
        })
    })

    return TextPass(xtend(opt, {
        groups: groups
    }))
}

function createGroups() {
    return data.map(function(group, i, list) {
        var theta = i/(list.length+1) * Math.PI * 2
        group = xtend(group, {
            panels: group.panels.map(function(panel, index) {
                return createPanel(panel, index, theta)
            }),
            theta: theta
        })
        return group
    })
}

function createPanel(data, index, rotation) {
    var container = new THREE.Object3D()
    var mirror = index === 1

    var radius = mobile ? 18 : 20
    if (mirror) {
        rotation += Math.PI*2
        radius *= -1
    }

    //make text perpendicular to theta rotation
    // rotation -= Math.PI/2 

    container.position.set(
        Math.cos(rotation) * radius,
        15,
        Math.sin(rotation) * radius
    )
    

    // container.position.copy(data.origin)

    var pos = container.position
    var dir = pos.clone().sub(new THREE.Vector3(0,pos.y,0)).normalize()

    var rotOff = 0//Math.PI/10 * (mirror ? -1 : 1)

    var dx = pos.x,
        dz = pos.z,
        theta = -Math.atan2(dz, dx) - rotOff
    // container.rotation.y = theta
    container.rotation.y = theta
    container.rotation.x = 0
    
    if (mirror) {
        container.scale.x *= -1
    }

    var labels = data.labels.map(function(label) {
        var obj = new THREE.Object3D()
        container.add(obj)
        if (mirror)
            obj.position.x = -data.width||0
        return xtend({ size: 1, translation: [0, 0, 0] }, label, { 
            object3d: obj, 
            // theta: theta
        })
    })

    var shapes = []
    // var shapes = (data.shapes||[]).map(function(shape) {
    //     var complex = shape.path ? getSVG(shape.path) : getPoly(shape.points)
    //     var geo = Complex(complex)
    //     var mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ 
    //         color: 0xffffff,
    //         side: THREE.DoubleSide,
    //         opacity: 1,
    //         transparent: true
    //     }))
        
    //     if (shape.position) mesh.position.fromArray(shape.position)
    //     if (shape.scale) mesh.scale.fromArray(shape.scale)

    //     container.add(mesh)
    //     return mesh
    // })

    return {
        labels: labels,
        shapes: shapes,
        container: container
    }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./TextPass":"/projects/blackice/lib/TextPass.js","./is-mobile":"/projects/blackice/lib/is-mobile.js","./text-data":"/projects/blackice/lib/text-data.js","three-simplicial-complex":"/projects/blackice/node_modules/three-simplicial-complex/index.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/lib/is-mobile.js":[function(require,module,exports){
var deviceType = require('ua-device-type')
module.exports = /(phone)|(tablet)/i.test(deviceType(navigator.userAgent))
},{"ua-device-type":"/projects/blackice/node_modules/ua-device-type/index.js"}],"/projects/blackice/lib/renderer.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)

var RigScene = require('./RigScene')
var OrbitController = require('./three-orbit-camera')(THREE)
var Effects = require('./setup-effects')

var TweenMax = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)
var animateLabels = require('./animate-labels')
var hideLabels = animateLabels.hideAll

var clamp = require('clamp')
var pluck = require('plucker')
var number = require('as-number')
var smoothstep = require('smoothstep')
var lerp = require('lerp')
var unlerp = require('unlerp')
var mobile = require('./is-mobile')

module.exports = function(opt) {
    opt = opt||{}

    var Font = opt.font

    if (!Font || !Font.textures)
        throw new Error('must specify font with textures')


    var renderer,
        scene,
        textPass,
        camera,
        controller,
        features,
        water,
        effects,
        labels = [],
        time = 0

    if (!opt.gl)
        throw new Error('must specify GL context')

    setup(opt.gl, opt.width||0, opt.height||0)

    function draw(dt) {
        time +=  Math.min(dt, 30) / 1000
        // renderer.resetAttributes()
        renderer.resetGLState()

        water.material.uniforms.time.value = time * 0.1
        water.render()

        controller.update()
        
        scene.update(dt)
        if (effects)
            effects.render(dt)
        else {
            textPass.render(renderer)
        }

        animateLabels(controller, labels)

        var t = unlerp(0.6, 1.4, controller.phi)
        t = smoothstep(1.5, 0.95, t)
        var range = clamp(t, 0, 1)
        water.alpha = range||0
    }

    function setup(gl, width, height) {
        renderer = new THREE.WebGLRenderer({ 
            canvas: gl.canvas,
            antialias: false,
            alpha: false
        })
        renderer.setClearColor(0xffffff, 0)
        renderer.shadowMapType = THREE.BasicShadowMap
        // renderer.shadowMapEnabled = true

        opt.fov = number(opt.fov, 50)
        camera = new THREE.PerspectiveCamera(opt.fov, width/height, 0.5, 20000)
        camera.position.fromArray(mobile 
                ? [-80, 38, -80]
                : [-60, 38, -40])
        camera.lookAt(new THREE.Vector3())

        controller = new OrbitController(camera)
        controller.userPan = false
        controller.userPanSpeed = 0.0
        controller.zoomSpeed = 0.1
        controller.rotateSpeed = 0.2
        controller.minDistance = 30
        controller.maxDistance = 200.0
        controller.maxPolarAngle = 90 * Math.PI/180
        controller.minPolarAngle = 40 * Math.PI/180
        controller.center.set( 0, 5, 0 )
        scene = RigScene()

        require('./setup-floor')(scene)

        water = require('./setup-water')(renderer, camera, scene)
        
        scene.cubeMap = water.cubeMap
        scene.updateMaterial()

        var pass = require('./create-text-pass')({
            renderer: renderer,
            scene: scene,
            camera: camera,
            font: Font
        })

        textPass = pass
        labels = pass.groups

        effects = Effects({
            renderer: renderer,
            scene: scene,
            camera: camera,
            width: width,
            blur: false,
            height: height,
            renderPass: pass
        })

        hideLabels(labels)
    }

    function handleResize(width, height) {
        renderer.setSize(width, height)
        camera.aspect = width/height
        camera.updateProjectionMatrix()

        if (effects)
            effects.resize(width, height)
    }

    return {
        draw: draw,
        resize: handleResize
    }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./RigScene":"/projects/blackice/lib/RigScene.js","./animate-labels":"/projects/blackice/lib/animate-labels.js","./create-text-pass":"/projects/blackice/lib/create-text-pass.js","./is-mobile":"/projects/blackice/lib/is-mobile.js","./setup-effects":"/projects/blackice/lib/setup-effects.js","./setup-floor":"/projects/blackice/lib/setup-floor.js","./setup-water":"/projects/blackice/lib/setup-water.js","./three-orbit-camera":"/projects/blackice/lib/three-orbit-camera/index.js","as-number":"/projects/blackice/node_modules/as-number/index.js","clamp":"/projects/blackice/node_modules/clamp/index.js","lerp":"/projects/blackice/node_modules/lerp/index.js","plucker":"/projects/blackice/node_modules/plucker/index.js","smoothstep":"/projects/blackice/node_modules/smoothstep/index.js","unlerp":"/projects/blackice/node_modules/unlerp/index.js"}],"/projects/blackice/lib/setup-effects.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var EffectComposer = require('three-effectcomposer')(THREE)
var createFXAA = require('three-shader-fxaa')(THREE)
var createBlur = require('./shaders/blur')
var createLens = require('./shaders/lens')
var createEmpty = require('./shaders/pass')
// var TextPass = require('./TextPass')

module.exports = Effects

function Effects(opt) {
    if (!(this instanceof Effects)) 
        return new Effects(opt)
    opt = opt||{}

    var parameters = { 
        minFilter: THREE.LinearFilter, 
        magFilter: THREE.LinearFilter, 
        format: THREE.RGBFormat, 
        stencilBuffer: false 
    }
    var width = opt.width
    var height = opt.height
    var renderTarget = new THREE.WebGLRenderTarget(width, height, parameters);

    this.composer = new EffectComposer(opt.renderer, renderTarget)
    this.composer.addPass(opt.renderPass)
    
    this.shaders = []
    this.noiseDelay = 33
    this.noiseTime = 0

    // this.shaders.push(new EffectComposer.ShaderPass(createEmpty()))


    var fxaaShader = new EffectComposer.ShaderPass(createFXAA())
    this.shaders.push(fxaaShader)

    if (opt.blur !== false) {
        var blur = createBlur()
        var iterations = 1;
        for (var i=0; i<iterations; i++) {
            var r = (i+1)*2;

            var horiz = new EffectComposer.ShaderPass( blur );
            horiz.uniforms.radius.value = r
            horiz.uniforms.strength.value = 1
            horiz.uniforms.dir.value.set(1,0)

            var vert = new EffectComposer.ShaderPass( blur );
            vert.uniforms.radius.value = r
            vert.uniforms.strength.value = 1
            vert.uniforms.dir.value.set(0,1)

            this.shaders.push(horiz, vert)
        }
    }

    var lensPass = new EffectComposer.ShaderPass(createLens())
    this.shaders.push(lensPass)

    //default values to avoid div by zero
    lensPass.uniforms.overlayResolution.value.set(1, 1)
    lensPass.uniforms.tLookup.value = loadTexture('img/lookup.png', { 
        generateMipmaps: false,
        filter: THREE.LinearFilter 
    })
    lensPass.uniforms.tOverlay.value = loadTexture('img/dust.jpg', {
        generateMipmaps: false,
        filter: THREE.LinearFilter
    }, function(err, tex) {
        lensPass.uniforms.overlayResolution.value.set(tex.image.width, tex.image.height)
    })

    this.shaders.forEach(function(pass, i, self) {
        this.composer.addPass(pass)
        if (i === self.length-1)
            pass.renderToScreen = true
    }, this)  
    if (opt.width && opt.height) 
        this.resize(opt.width, opt.height)
}


function loadTexture(path, opt, cb) {
    if (typeof opt === 'function') {
        cb = opt
        opt = {}
    }

    return THREE.ImageUtils.loadTexture(path, undefined, function(tex) {
        if (opt.filter) tex.minFilter = tex.magFilter = opt.filter
        if (opt.wrap) tex.wrapS = tex.wrapT = opt.wrap
        tex.generateMipmaps = opt.generateMipmaps
        if (typeof cb === 'function') 
            cb(null, tex)
    })
}

require('mixes')(Effects, {

    render: function(dt) {
        this.noiseTime += dt
        if (this.noiseTime > this.noiseDelay) {
            this.noiseTime = 0
            this.shaders.forEach(function(pass) {
                if (pass.uniforms.tick)
                    pass.uniforms.tick.value += 0.005
            })
        }

        this.composer.render()
    },

    resize: function(width, height) {
        width *= 2
        height *= 2
        this.composer.setSize(width, height)
        this.shaders.forEach(function(pass) {
            var dpr = 1
            // var dpr = (window.devicePixelRatio||1)
            if (pass.uniforms.resolution)
                pass.uniforms.resolution.value.set(width*dpr, height*dpr)
            
        })
    }
})
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./shaders/blur":"/projects/blackice/lib/shaders/blur.js","./shaders/lens":"/projects/blackice/lib/shaders/lens.js","./shaders/pass":"/projects/blackice/lib/shaders/pass.js","mixes":"/projects/blackice/node_modules/mixes/index.js","three-effectcomposer":"/projects/blackice/node_modules/three-effectcomposer/index.js","three-shader-fxaa":"/projects/blackice/node_modules/three-shader-fxaa/index.js"}],"/projects/blackice/lib/setup-floor.js":[function(require,module,exports){
(function (global){
var random = require('randf')
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var smoothstep = require('smoothstep')
var lerp = require('lerp')

module.exports = function(scene) {
    var geo = new THREE.PlaneGeometry(100, 100, 40, 40)
    var vec2 = new THREE.Vector2()
    geo.vertices.forEach(function(v) {
        var len = vec2.set(v.x, v.y).length() / 50
        var slen = smoothstep(0.4, 1.0, len)
        v.z = random(10, 40) * slen 

        slen = smoothstep(0.7, 1.0, len)
        var base = smoothstep(0.2, 0.0, len)*0.5
        slen += base

        v.z += random(-10, 5) * base

        var L = slen//lerp(0.9, 1.0, slen)
        var color = new THREE.Color(L, L, L)
        geo.colors.push(color)
    })

    geo.faces.forEach(function(face) {
        face.vertexColors[0] = geo.colors[face.a]
        face.vertexColors[1] = geo.colors[face.b]
        face.vertexColors[2] = geo.colors[face.c]
    })

    var tex = THREE.ImageUtils.loadTexture('img/snow.jpg')
    tex.repeat.set(1, 1)
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping

    var mat = new THREE.MeshBasicMaterial({ 
        map: tex,
        vertexColors: THREE.VertexColors 
        // color: "rgb(150,150,150)"
    })
    var mesh = new THREE.Mesh(geo, mat)
    mesh.rotation.x = -Math.PI/2
    mesh.position.y = -30
    var stretch = 10
    mesh.scale.x = mesh.scale.y = stretch
    scene.add(mesh)

    window.floor = mesh
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"lerp":"/projects/blackice/node_modules/lerp/index.js","randf":"/projects/blackice/node_modules/randf/index.js","smoothstep":"/projects/blackice/node_modules/smoothstep/index.js"}],"/projects/blackice/lib/setup-water.js":[function(require,module,exports){
var cubeShader = {

    uniforms: THREE.UniformsUtils.merge( [
        { "tCube": { type: "t", value: null },
        "tFlip": { type: "f", value: - 1 } },
        THREE.UniformsLib[ "fog" ]
    ] ),

    vertexShader: [

        "varying vec3 vWorldPosition;",

        THREE.ShaderChunk[ "logdepthbuf_pars_vertex" ],

        "void main() {",

        "   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
        "   vWorldPosition = worldPosition.xyz;",

        "   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

            THREE.ShaderChunk[ "logdepthbuf_vertex" ],

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform samplerCube tCube;",
        "uniform float tFlip;",

        "varying vec3 vWorldPosition;",
        THREE.ShaderChunk[ "logdepthbuf_pars_fragment" ],
        THREE.ShaderChunk[ "fog_pars_fragment" ],
        "void main() {",
        "   gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
            THREE.ShaderChunk[ "logdepthbuf_fragment" ],
            THREE.ShaderChunk[ "fog_fragment" ],
        "}"

    ].join("\n")

}
module.exports = function(renderer, camera, scene) {
    var light = new THREE.HemisphereLight(0xbbe9ff, 0x080820, 1)
    light.position.set(-1, 1, -1)
    scene.add(light)

    var waterNormals = new THREE.ImageUtils.loadTexture('img/waternormals5.jpg')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping

    var water = new THREE.Water(renderer, camera, scene, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: waterNormals,
        alpha: 0.9,
        sunDirection: light.position.clone().normalize(),
        sunColor: 0xffffff,
        waterColor: 0x020d15,
        distortionScale: 80.0,
    })

    var mirrorMesh = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(5000, 5000),
        water.material
    )

    mirrorMesh.add(water)
    mirrorMesh.rotation.x = -Math.PI * 0.5
    scene.add(mirrorMesh)


    // load skybox

    var cubeMap = new THREE.CubeTexture([])
    cubeMap.format = THREE.RGBFormat
    cubeMap.flipY = false

    var loader = new THREE.ImageLoader()
    loader.load('img/cloudy_night2.jpg', function(image) {

        var getSide = function(x, y) {

            var size = 1024

            var canvas = document.createElement('canvas')
            canvas.width = size
            canvas.height = size

            var context = canvas.getContext('2d')
            context.drawImage(image, -x * size, -y * size)

            return canvas

        }

        cubeMap.images[0] = getSide(2, 1) // px
        cubeMap.images[1] = getSide(0, 1) // nx
        cubeMap.images[2] = getSide(1, 0) // py
        cubeMap.images[3] = getSide(1, 2) // ny
        cubeMap.images[4] = getSide(1, 1) // pz
        cubeMap.images[5] = getSide(3, 1) // nz
        cubeMap.needsUpdate = true

    })

    cubeShader.uniforms.tCube.value = cubeMap

    var skyBoxMaterial = new THREE.ShaderMaterial({
        fragmentShader: cubeShader.fragmentShader,
        vertexShader: cubeShader.vertexShader,
        uniforms: cubeShader.uniforms,
        // depthWrite: false,
        side: THREE.BackSide,
        fog: true,
    })

    var skyBox = new THREE.Mesh(
        new THREE.BoxGeometry(5000, 5000, 5000),
        skyBoxMaterial
    )
    
    water.cubeMap = cubeMap

    scene.add(skyBox)
    return water
}
},{}],"/projects/blackice/lib/shaders/blur.js":[function(require,module,exports){
var glslify = require("glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform float radius;\nuniform vec2 dir;\nuniform float strength;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvec4 a_x_blur(sampler2D tex, vec2 uv, vec2 blur, vec2 direction) {\n  vec4 sum = vec4(0.0);\n  sum += texture2D(tex, vec2(uv.x - 4.0 * blur.x * direction.x, uv.y - 4.0 * blur.y * direction.y)) * 0.0162162162;\n  sum += texture2D(tex, vec2(uv.x - 3.0 * blur.x * direction.x, uv.y - 3.0 * blur.y * direction.y)) * 0.0540540541;\n  sum += texture2D(tex, vec2(uv.x - 2.0 * blur.x * direction.x, uv.y - 2.0 * blur.y * direction.y)) * 0.1216216216;\n  sum += texture2D(tex, vec2(uv.x - 1.0 * blur.x * direction.x, uv.y - 1.0 * blur.y * direction.y)) * 0.1945945946;\n  sum += texture2D(tex, vec2(uv.x, uv.y)) * 0.2270270270;\n  sum += texture2D(tex, vec2(uv.x + 1.0 * blur.x * direction.x, uv.y + 1.0 * blur.y * direction.y)) * 0.1945945946;\n  sum += texture2D(tex, vec2(uv.x + 2.0 * blur.x * direction.x, uv.y + 2.0 * blur.y * direction.y)) * 0.1216216216;\n  sum += texture2D(tex, vec2(uv.x + 3.0 * blur.x * direction.x, uv.y + 3.0 * blur.y * direction.y)) * 0.0540540541;\n  sum += texture2D(tex, vec2(uv.x + 4.0 * blur.x * direction.x, uv.y + 4.0 * blur.y * direction.y)) * 0.0162162162;\n  return sum;\n}\nvoid main() {\n  vec2 blurAmt = vec2(radius) / resolution;\n  vec4 sum = a_x_blur(tDiffuse, vUv, blurAmt, dir);\n  vec2 p = (gl_FragCoord.xy / resolution.xy - 0.5);\n  p.x *= resolution.x / resolution.y;\n  float len = smoothstep(0.5, 1.2, length(p));\n  vec3 orig = texture2D(tDiffuse, vUv).rgb;\n  gl_FragColor.rgb = mix(orig, sum.rgb, len + 0.1);\n  gl_FragColor.a = 1.0;\n}", [{"name":"resolution","type":"vec2"},{"name":"radius","type":"float"},{"name":"dir","type":"vec2"},{"name":"strength","type":"float"},{"name":"tDiffuse","type":"sampler2D"}], []);
module.exports = require("./create")(source);
},{"./create":"/projects/blackice/lib/shaders/create.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js"}],"/projects/blackice/lib/shaders/create.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var threeify = require('three-glslify')(THREE)
var xtend = require('xtend') 
 
module.exports = function(source) {
    return function(opt) {
        return xtend(threeify(source), opt)
    }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"three-glslify":"/projects/blackice/node_modules/three-glslify/index.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/lib/shaders/lens.js":[function(require,module,exports){
var glslify = require("glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nuniform vec2 overlayResolution;\nuniform vec2 resolution;\nvarying vec2 vUv;\nvarying vec2 overlayUV;\nvoid main() {\n  vUv = uv;\n  float aspect = overlayResolution.x / overlayResolution.y;\n  float ratio = resolution.x / resolution.y;\n  overlayUV = uv;\n  float tAspect = overlayResolution.x / overlayResolution.y;\n  float pAspect = resolution.x / resolution.y;\n  overlayUV = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform float tick;\nuniform sampler2D tDiffuse;\nuniform sampler2D tLookup;\nuniform sampler2D tOverlay;\nvarying vec2 vUv;\nvarying vec2 overlayUV;\nhighp float a_x_random(vec2 co) {\n  highp float a = 12.9898;\n  highp float b = 78.233;\n  highp float c = 43758.5453;\n  highp float dt = dot(co.xy, vec2(a, b));\n  highp float sn = mod(dt, 3.14);\n  return fract(sin(sn) * c);\n}\nvec3 b_x_blendOverlay(vec3 base, vec3 blend) {\n  return vec3(base.r < 0.5 ? (2.0 * base.r * blend.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r)), base.g < 0.5 ? (2.0 * base.g * blend.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g)), base.b < 0.5 ? (2.0 * base.b * blend.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b)));\n}\nfloat c_x_luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\nfloat c_x_luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n#define LUT_FLIP_Y\n\nvec4 e_x_lookup(in vec4 textureColor, in sampler2D lookupTable) {\n  \n  #ifndef LUT_NO_CLAMP\n  textureColor = clamp(textureColor, 0.0, 1.0);\n  #endif\n  mediump float blueColor = textureColor.b * 63.0;\n  mediump vec2 quad1;\n  quad1.y = floor(floor(blueColor) / 8.0);\n  quad1.x = floor(blueColor) - (quad1.y * 8.0);\n  mediump vec2 quad2;\n  quad2.y = floor(ceil(blueColor) / 8.0);\n  quad2.x = ceil(blueColor) - (quad2.y * 8.0);\n  highp vec2 texPos1;\n  texPos1.x = (quad1.x * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.r);\n  texPos1.y = (quad1.y * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.g);\n  #ifdef LUT_FLIP_Y\n  texPos1.y = 1.0 - texPos1.y;\n  #endif\n  highp vec2 texPos2;\n  texPos2.x = (quad2.x * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.r);\n  texPos2.y = (quad2.y * 0.125) + 0.5 / 512.0 + ((0.125 - 1.0 / 512.0) * textureColor.g);\n  #ifdef LUT_FLIP_Y\n  texPos2.y = 1.0 - texPos2.y;\n  #endif\n  lowp vec4 newColor1 = texture2D(lookupTable, texPos1);\n  lowp vec4 newColor2 = texture2D(lookupTable, texPos2);\n  lowp vec4 newColor = mix(newColor1, newColor2, fract(blueColor));\n  return newColor;\n}\nvoid main() {\n  vec3 texColor = texture2D(tDiffuse, vUv).rgb;\n  float luminance = c_x_luma(texColor);\n  float noiseMap = smoothstep(luminance, 0.5, 0.0);\n  vec2 tUv = vUv + tick;\n  vec3 noise = vec3(a_x_random(tUv), a_x_random(tUv * 1.5), a_x_random(tUv * 0.5));\n  vec3 noiseColor = mix(noise, vec3(0.5), noiseMap);\n  vec3 color = mix(texColor, b_x_blendOverlay(texColor, noise), 0.15);\n  vec3 corrected = e_x_lookup(vec4(color, 1.0), tLookup).rgb;\n  color = mix(color, corrected, 0.9);\n  gl_FragColor = vec4(color, 1.0);\n  vec4 scratches = texture2D(tOverlay, overlayUV);\n  vec3 scratchBlend = gl_FragColor.rgb + scratches.rgb;\n  float center = smoothstep(0.0, 0.6, length(vUv - 0.5));\n  float dirtMap = smoothstep(0.1, 0.4, luminance * center);\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, scratchBlend, dirtMap);\n}", [{"name":"overlayResolution","type":"vec2"},{"name":"resolution","type":"vec2"},{"name":"tick","type":"float"},{"name":"tDiffuse","type":"sampler2D"},{"name":"tLookup","type":"sampler2D"},{"name":"tOverlay","type":"sampler2D"}], []);
module.exports = require("./create")(source);
},{"./create":"/projects/blackice/lib/shaders/create.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js"}],"/projects/blackice/lib/shaders/pass.js":[function(require,module,exports){
var glslify = require("glslify");
var source = require("glslify/simple-adapter.js")("\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}", "\n#define GLSLIFY 1\n\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\n  gl_FragColor = texture2D(tDiffuse, vUv);\n}", [{"name":"tDiffuse","type":"sampler2D"}], []);
module.exports = require("./create")(source);
},{"./create":"/projects/blackice/lib/shaders/create.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/simple-adapter.js":"/projects/blackice/node_modules/glslify/simple-adapter.js"}],"/projects/blackice/lib/text-data.js":[function(require,module,exports){
(function (global){
var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./is-mobile":"/projects/blackice/lib/is-mobile.js"}],"/projects/blackice/lib/three-orbit-camera/index.js":[function(require,module,exports){
(function (global){
var inherits = require('inherits')
var TweenMax = (typeof window !== "undefined" ? window.TweenMax : typeof global !== "undefined" ? global.TweenMax : null)

module.exports = function(THREE) {
    if (!THREE.MOUSE)
        THREE.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };

    /**
     * @author qiao / https://github.com/qiao
     * @author mrdoob / http://mrdoob.com
     * @author alteredq / http://alteredqualia.com/
     * @author WestLangley / http://github.com/WestLangley
     * @author erich666 / http://erichaines.com
     */
    /*global THREE, console */

    // This set of controls performs orbiting, dollying (zooming), and panning. It maintains
    // the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
    // supported.
    //
    //    Orbit - left mouse / touch: one finger move
    //    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
    //    Pan - right mouse, or arrow keys / touch: three finter swipe
    //
    // This is a drop-in replacement for (most) TrackballControls used in examples.
    // That is, include this js file and wherever you see:
    //      controls = new THREE.TrackballControls( camera );
    //      controls.target.z = 150;
    // Simple substitute "OrbitControls" and the control should work as-is.

    function OrbitControls( object, domElement ) {

        this.object = object;
        this.domElement = ( domElement !== undefined ) ? domElement : document;

        // API

        // Set to false to disable this control
        this.enabled = true;

        // "target" sets the location of focus, where the control orbits around
        // and where it pans with respect to.
        this.target = new THREE.Vector3();

        // center is old, deprecated; use "target" instead
        this.center = this.target;

        // This option actually enables dollying in and out; left as "zoom" for
        // backwards compatibility
        this.noZoom = false;
        this.zoomSpeed = 1.0;

        // Limits to how far you can dolly in and out
        this.minDistance = 0;
        this.maxDistance = Infinity;

        // Set to true to disable this control
        this.noRotate = false;
        this.rotateSpeed = 1.0;

        // Set to true to disable this control
        this.noPan = false;
        this.keyPanSpeed = 7.0; // pixels moved per arrow key push

        // Set to true to automatically rotate around the target
        this.autoRotate = false;
        this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

        // How far you can orbit vertically, upper and lower limits.
        // Range is 0 to Math.PI radians.
        this.minPolarAngle = 0; // radians
        this.maxPolarAngle = Math.PI; // radians

        // Set to true to disable use of the keys
        this.noKeys = false;

        this.phi = 0
        this.theta = 0 

        // The four arrow keys
        this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

        this.constrainDelta = { x: 0, y: 0 };

        ////////////
        // internals

        var scope = this;

        var EPS = 0.000001;

        var rotateStart = new THREE.Vector2();
        var rotateEnd = new THREE.Vector2();
        var rotateDelta = new THREE.Vector2();

        var panStart = new THREE.Vector2();
        var panEnd = new THREE.Vector2();
        var panDelta = new THREE.Vector2();
        var panOffset = new THREE.Vector3();

        var offset = new THREE.Vector3();

        var dollyStart = new THREE.Vector2();
        var dollyEnd = new THREE.Vector2();
        var dollyDelta = new THREE.Vector2();

        var phiDelta = 0;
        var thetaDelta = 0;
        var scale = 1;
        var pan = new THREE.Vector3();

        var lastPosition = new THREE.Vector3();

        var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

        var state = STATE.NONE;

        // for reset

        this.target0 = this.target.clone();
        this.position0 = this.object.position.clone();

        // so camera.up is the orbit axis

        var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
        var quatInverse = quat.clone().inverse();

        // events

        var changeEvent = { type: 'change' };
        var startEvent = { type: 'start'};
        var endEvent = { type: 'end'};

        this.rotateLeft = function ( angle ) {

            if ( angle === undefined ) {

                angle = getAutoRotationAngle();

            }

            thetaDelta -= angle;

        };

        this.rotateUp = function ( angle ) {

            if ( angle === undefined ) {

                angle = getAutoRotationAngle();

            }

            phiDelta -= angle;

        };

        // pass in distance in world space to move left
        this.panLeft = function ( distance ) {

            var te = this.object.matrix.elements;

            // get X column of matrix
            panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
            panOffset.multiplyScalar( - distance );
            
            pan.add( panOffset );

        };

        // pass in distance in world space to move up
        this.panUp = function ( distance ) {

            var te = this.object.matrix.elements;

            // get Y column of matrix
            panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
            panOffset.multiplyScalar( distance );
            
            pan.add( panOffset );

        };
        
        // pass in x,y of change desired in pixel space,
        // right and down are positive
        this.pan = function ( deltaX, deltaY ) {

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if ( scope.object.fov !== undefined ) {

                // perspective
                var position = scope.object.position;
                var offset = position.clone().sub( scope.target );
                var targetDistance = offset.length();

                // half of the fov is center to top of screen
                targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

                // we actually don't use screenWidth, since perspective camera is fixed to screen height
                scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
                scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

            } else if ( scope.object.top !== undefined ) {

                // orthographic
                scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
                scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

            } else {

                // camera neither orthographic or perspective
                console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

            }

        };

        this.dollyIn = function ( dollyScale ) {

            if ( dollyScale === undefined ) {

                dollyScale = getZoomScale();

            }

            scale /= dollyScale;

        };

        this.dollyOut = function ( dollyScale ) {

            if ( dollyScale === undefined ) {

                dollyScale = getZoomScale();

            }

            scale *= dollyScale;

        };

        this.update = function () {

            var position = this.object.position;

            // // rotating across whole screen goes 360 degrees around
            scope.rotateLeft( 2 * Math.PI * scope.constrainDelta.x / window.innerWidth * scope.rotateSpeed );

            // // rotating up and down along whole screen attempts to go 360, but limited to 180
            scope.rotateUp( 2 * Math.PI * scope.constrainDelta.y / window.innerHeight * scope.rotateSpeed );

            offset.copy( position ).sub( this.target );

            // rotate offset to "y-axis-is-up" space
            offset.applyQuaternion( quat );

            // angle from z-axis around y-axis

            var theta = Math.atan2( offset.x, offset.z );

            // angle from y-axis

            var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

            if ( this.autoRotate ) {

                this.rotateLeft( getAutoRotationAngle() );

            }

            theta += thetaDelta;
            phi += phiDelta;

            // restrict phi to be between desired limits
            phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

            // restrict phi to be betwee EPS and PI-EPS
            phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

            var radius = offset.length() * scale;

            // restrict radius to be between desired limits
            radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
            
            // move target to panned location
            this.target.add( pan );

            scope.phi = phi
            scope.theta = theta

            offset.x = radius * Math.sin( phi ) * Math.sin( theta );
            offset.y = radius * Math.cos( phi );
            offset.z = radius * Math.sin( phi ) * Math.cos( theta );

            // rotate offset back to "camera-up-vector-is-up" space
            offset.applyQuaternion( quatInverse );

            position.copy( this.target ).add( offset );

            this.object.lookAt( this.target );

            thetaDelta = 0;
            phiDelta = 0;
            scale = 1;
            pan.set( 0, 0, 0 );

            if ( lastPosition.distanceToSquared( this.object.position ) > EPS ) {

                this.dispatchEvent( changeEvent );

                lastPosition.copy( this.object.position );

            }

        };


        this.reset = function () {

            state = STATE.NONE;

            this.target.copy( this.target0 );
            this.object.position.copy( this.position0 );

            this.update();

        };

        function getAutoRotationAngle() {

            return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

        }

        function getZoomScale() {

            return Math.pow( 0.95, scope.zoomSpeed );

        }

        function onMouseDown( event ) {

            if ( scope.enabled === false ) return;
            event.preventDefault();

            if ( event.button === 0 ) {
                if ( scope.noRotate === true ) return;

                state = STATE.ROTATE;

                rotateStart.set( event.clientX, event.clientY );

            } else if ( event.button === 1 ) {
                if ( scope.noZoom === true ) return;

                state = STATE.DOLLY;

                dollyStart.set( event.clientX, event.clientY );

            } else if ( event.button === 2 ) {
                if ( scope.noPan === true ) return;

                state = STATE.PAN;

                panStart.set( event.clientX, event.clientY );

            }

            scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
            scope.domElement.addEventListener( 'mouseup', onMouseUp, false );
            scope.dispatchEvent( startEvent );

        }

        function onMouseMove( event ) {

            if ( scope.enabled === false ) return;

            event.preventDefault();

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if ( state === STATE.ROTATE ) {

                if ( scope.noRotate === true ) return;

                rotateEnd.set( event.clientX, event.clientY );
                rotateDelta.subVectors( rotateEnd, rotateStart );

                scope.constrainDelta.x = rotateDelta.x;
                scope.constrainDelta.y = rotateDelta.y;
                
                TweenMax.killTweensOf(scope.constrainDelta);
                TweenMax.to(scope.constrainDelta, 0.50, {
                    x: 0,
                    y: 0,
                    ease: 'easeOutQuad',
                    delay: 0.0
                });

                rotateStart.copy( rotateEnd );

            } else if ( state === STATE.DOLLY ) {

                if ( scope.noZoom === true ) return;

                dollyEnd.set( event.clientX, event.clientY );
                dollyDelta.subVectors( dollyEnd, dollyStart );

                if ( dollyDelta.y > 0 ) {

                    scope.dollyIn();

                } else {

                    scope.dollyOut();

                }

                dollyStart.copy( dollyEnd );

            } else if ( state === STATE.PAN ) {

                if ( scope.noPan === true ) return;

                panEnd.set( event.clientX, event.clientY );
                panDelta.subVectors( panEnd, panStart );
                
                scope.pan( panDelta.x, panDelta.y );

                panStart.copy( panEnd );

            }

            scope.update();

        }

        function onMouseUp( /* event */ ) {

            if ( scope.enabled === false ) return;

            scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
            scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );
            scope.dispatchEvent( endEvent );
            state = STATE.NONE;

        }

        function onMouseWheel( event ) {

            if ( scope.enabled === false || scope.noZoom === true ) return;

            event.preventDefault();
            event.stopPropagation();

            var delta = 0;

            if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

                delta = event.wheelDelta;

            } else if ( event.detail !== undefined ) { // Firefox

                delta = - event.detail;

            }

            if ( delta > 0 ) {

                scope.dollyOut();

            } else {

                scope.dollyIn();

            }

            scope.update();
            scope.dispatchEvent( startEvent );
            scope.dispatchEvent( endEvent );

        }

        function onKeyDown( event ) {

            if ( scope.enabled === false || scope.noKeys === true || scope.noPan === true ) return;
            
            switch ( event.keyCode ) {

                case scope.keys.UP:
                    scope.pan( 0, scope.keyPanSpeed );
                    scope.update();
                    break;

                case scope.keys.BOTTOM:
                    scope.pan( 0, - scope.keyPanSpeed );
                    scope.update();
                    break;

                case scope.keys.LEFT:
                    scope.pan( scope.keyPanSpeed, 0 );
                    scope.update();
                    break;

                case scope.keys.RIGHT:
                    scope.pan( - scope.keyPanSpeed, 0 );
                    scope.update();
                    break;

            }

        }

        function touchstart( event ) {

            if ( scope.enabled === false ) return;

            switch ( event.touches.length ) {

                case 1: // one-fingered touch: rotate

                    if ( scope.noRotate === true ) return;

                    state = STATE.TOUCH_ROTATE;

                    rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    break;

                case 2: // two-fingered touch: dolly

                    if ( scope.noZoom === true ) return;

                    state = STATE.TOUCH_DOLLY;

                    var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                    var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                    var distance = Math.sqrt( dx * dx + dy * dy );
                    dollyStart.set( 0, distance );
                    break;

                case 3: // three-fingered touch: pan

                    if ( scope.noPan === true ) return;

                    state = STATE.TOUCH_PAN;

                    panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    break;

                default:

                    state = STATE.NONE;

            }

            scope.dispatchEvent( startEvent );

        }

        function touchmove( event ) {

            if ( scope.enabled === false ) return;

            event.preventDefault();
            event.stopPropagation();

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            switch ( event.touches.length ) {

                case 1: // one-fingered touch: rotate

                    if ( scope.noRotate === true ) return;
                    if ( state !== STATE.TOUCH_ROTATE ) return;

                    rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    rotateDelta.subVectors( rotateEnd, rotateStart );

                    // // rotating across whole screen goes 360 degrees around
                    // scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
                    // // rotating up and down along whole screen attempts to go 360, but limited to 180
                    // scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

                    // rotateStart.copy( rotateEnd );


                    scope.constrainDelta.x = rotateDelta.x;
                    scope.constrainDelta.y = rotateDelta.y;
                    
                    TweenMax.killTweensOf(scope.constrainDelta);
                    TweenMax.to(scope.constrainDelta, 0.45, {
                        x: 0,
                        y: 0,
                        ease: 'easeOutQuad',
                        delay: 0.0
                    });

                    rotateStart.copy( rotateEnd );

                    scope.update();
                    break;

                case 2: // two-fingered touch: dolly

                    if ( scope.noZoom === true ) return;
                    if ( state !== STATE.TOUCH_DOLLY ) return;

                    var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
                    var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
                    var distance = Math.sqrt( dx * dx + dy * dy );

                    dollyEnd.set( 0, distance );
                    dollyDelta.subVectors( dollyEnd, dollyStart );

                    if ( dollyDelta.y > 0 ) {

                        scope.dollyOut();

                    } else {

                        scope.dollyIn();

                    }

                    dollyStart.copy( dollyEnd );

                    scope.update();
                    break;

                case 3: // three-fingered touch: pan

                    if ( scope.noPan === true ) return;
                    if ( state !== STATE.TOUCH_PAN ) return;

                    panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
                    panDelta.subVectors( panEnd, panStart );
                    
                    scope.pan( panDelta.x, panDelta.y );

                    panStart.copy( panEnd );

                    scope.update();
                    break;

                default:

                    state = STATE.NONE;

            }

        }

        function touchend( /* event */ ) {

            if ( scope.enabled === false ) return;

            scope.dispatchEvent( endEvent );
            state = STATE.NONE;

        }

        this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
        this.domElement.addEventListener( 'mousedown', onMouseDown, false );
        this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
        this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

        this.domElement.addEventListener( 'touchstart', touchstart, false );
        this.domElement.addEventListener( 'touchend', touchend, false );
        this.domElement.addEventListener( 'touchmove', touchmove, false );

        window.addEventListener( 'keydown', onKeyDown, false );

        // force an update at start
        this.update();

    };

    inherits(OrbitControls, THREE.EventDispatcher)
    return OrbitControls
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js"}],"/projects/blackice/node_modules/as-number/index.js":[function(require,module,exports){
module.exports = function numtype(num, def) {
	return typeof num === 'number'
		? num 
		: (typeof def === 'number' ? def : 0)
}
},{}],"/projects/blackice/node_modules/browserify/node_modules/buffer/index.js":[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","ieee754":"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","is-array":"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js"}],"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],"/projects/blackice/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js":[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],"/projects/blackice/node_modules/canvas-app/index.js":[function(require,module,exports){
var isGL = require('is-webgl-context');
var getGL = require('webgl-context');
var debounce = require('debounce');
var addEvent = require('add-event-listener');

function isCanvasContext(obj) {
    var ctx2d = typeof CanvasRenderingContext2D !== 'undefined' && obj instanceof CanvasRenderingContext2D;
    return obj && (ctx2d || isGL(obj));
}

function CanvasApp(render, options) {
    if (!(this instanceof CanvasApp))
        return new CanvasApp(render, options);

    //allow options to be passed as first argument
    if (typeof render === 'object' && render) {
        options = render;
        render = null;
    }

    render = typeof render === 'function' ? render : options.onRender;

    options = options||{};
    options.retina = typeof options.retina === "boolean" ? options.retina : true;
    
    var hasWidth = typeof options.width === "number", 
        hasHeight = typeof options.height === "number";

    //if either width or height is specified, don't auto-resize to the window...
    if (hasWidth || hasHeight) 
        options.ignoreResize = true;

    options.width = hasWidth ? options.width : window.innerWidth;
    options.height = hasHeight ? options.height : window.innerHeight;

    var DPR = options.retina ? (window.devicePixelRatio||1) : 1; 

    //setup the canvas
    var canvas,
        context,
        attribs = options.contextAttributes||{};

    this.isWebGL = false;

    //if user provided a context object
    if (isCanvasContext(options.context)) {
        context = options.context;
        canvas = context.canvas;
    }

    //otherwise allow for a string to set one up
    if (!canvas)
        canvas = options.canvas || document.createElement("canvas");

    canvas.width = options.width * DPR;
    canvas.height = options.height * DPR;

    if (!context) {
        if (options.context === "webgl" || options.context === "experimental-webgl") {
            context = getGL({ canvas: canvas, attributes: attribs });
            if (!context) {
                throw "WebGL Context Not Supported -- try enabling it or using a different browser";
            }
        } else {
            context = canvas.getContext(options.context||"2d", attribs);
        }
    }

    this.isWebGL = isGL(context);

    if (options.retina) {
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    }

    this.running = false;
    this.width = options.width;
    this.height = options.height;
    this.canvas = canvas;
    this.context = context;
    this.onResize = options.onResize;
    this._DPR = DPR;
    this._retina = options.retina;
    this._once = options.once;
    this._ignoreResize = options.ignoreResize;
    this._lastFrame = null;
    this._then = Date.now();
    this.maxDeltaTime = typeof options.maxDeltaTime === 'number' ? options.maxDeltaTime : 1000/24;

    //FPS counter
    this.fps = 60;
    this._frames = 0;
    this._prevTime = this._then;

    if (!this._ignoreResize) {
        options.resizeDebounce = typeof options.resizeDebounce === 'number'
                    ? options.resizeDebounce : 50;
        addEvent(window, "resize", debounce(function() {
            this.resize(window.innerWidth, window.innerHeight);
        }.bind(this), options.resizeDebounce, false));

        addEvent(window, "orientationchange", function() {
            this.resize(window.innerWidth, window.innerHeight);
        }.bind(this));
    }

    if (typeof render === "function") {
        this.onRender = render.bind(this);   
    } else {
        //dummy render function
        this.onRender = function (context, width, height, dt) { };
    }

    this.renderOnce = function() {
        var now = Date.now();
        var dt = Math.min(this.maxDeltaTime, (now-this._then));

        this._frames++;
        if (now > this._prevTime + 1000) {
            this.fps = Math.round((this._frames * 1000) / (now - this._prevTime));

            this._prevTime = now;
            this._frames = 0;
        }

        if (!this.isWebGL) {
            this.context.save();
            this.context.scale(this._DPR, this._DPR);
        } else {
            this.context.viewport(0, 0, this.width * this._DPR, this.height * this._DPR);
        }
        
        this.onRender(this.context, this.width, this.height, dt);

        if (!this.isWebGL)
            this.context.restore();

        this._then = now;
    };

    this._renderHandler = function() {
        if (!this.running) 
            return;
        
        if (!this._once) {
            this._lastFrame = requestAnimationFrame(this._renderHandler);
        }

        this.renderOnce();
    }.bind(this);

    if (typeof options.onReady === "function") {
        options.onReady.call(this, context, this.width, this.height);
    }
}

Object.defineProperty(CanvasApp.prototype, 'retinaEnabled', {

    set: function(v) {
        this._retina = v;
        this._DPR = this._retina ? (window.devicePixelRatio||1) : 1;
        this.resize(this.width, this.height);
    },

    get: function() {
        return this._retina;
    }
});

Object.defineProperty(CanvasApp.prototype, 'deviceWidth', {

    get: function() {
        return this.width * this._DPR;
    }
});

Object.defineProperty(CanvasApp.prototype, 'deviceHeight', {

    get: function() {
        return this.height * this._DPR;
    }
});

CanvasApp.prototype.resetFPS = function() {
    this._frames = 0;
    this._prevTime = Date.now();
    this._then = this._prevTime;
    this.fps = 60;
};

CanvasApp.prototype.start = function() {
    if (this.running)
        return;
    
    if (this._lastFrame) 
        cancelAnimationFrame(this._lastFrame);

    //reset FPS counter
    this.resetFPS();

    this.running = true;
    this._lastFrame = requestAnimationFrame(this._renderHandler);
};

CanvasApp.prototype.stop = function() {
    if (this._lastFrame) {
        cancelAnimationFrame(this._lastFrame);
        this._lastFrame = null;
    }
    this.running = false;
};

CanvasApp.prototype.resize = function(width, height) {
    var canvas = this.canvas;

    this.width = width;
    this.height = height;
    canvas.width = this.width * this._DPR;
    canvas.height = this.height * this._DPR;

    if (this._retina) {
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';
    }

    if (this._once)
        requestAnimationFrame(this._renderHandler);
    if (typeof this.onResize === "function")
        this.onResize(this.width, this.height);
};

module.exports = CanvasApp;
},{"add-event-listener":"/projects/blackice/node_modules/canvas-app/node_modules/add-event-listener/index.js","debounce":"/projects/blackice/node_modules/canvas-app/node_modules/debounce/index.js","is-webgl-context":"/projects/blackice/node_modules/canvas-app/node_modules/is-webgl-context/index.js","webgl-context":"/projects/blackice/node_modules/canvas-app/node_modules/webgl-context/index.js"}],"/projects/blackice/node_modules/canvas-app/node_modules/add-event-listener/index.js":[function(require,module,exports){
addEventListener.removeEventListener = removeEventListener
addEventListener.addEventListener = addEventListener

module.exports = addEventListener

var Events = null

function addEventListener(el, eventName, listener, useCapture) {
  Events = Events || (
    document.addEventListener ?
    {add: stdAttach, rm: stdDetach} :
    {add: oldIEAttach, rm: oldIEDetach}
  )
  
  return Events.add(el, eventName, listener, useCapture)
}

function removeEventListener(el, eventName, listener, useCapture) {
  Events = Events || (
    document.addEventListener ?
    {add: stdAttach, rm: stdDetach} :
    {add: oldIEAttach, rm: oldIEDetach}
  )
  
  return Events.rm(el, eventName, listener, useCapture)
}

function stdAttach(el, eventName, listener, useCapture) {
  el.addEventListener(eventName, listener, useCapture)
}

function stdDetach(el, eventName, listener, useCapture) {
  el.removeEventListener(eventName, listener, useCapture)
}

function oldIEAttach(el, eventName, listener, useCapture) {
  if(useCapture) {
    throw new Error('cannot useCapture in oldIE')
  }

  el.attachEvent('on' + eventName, listener)
}

function oldIEDetach(el, eventName, listener, useCapture) {
  el.detachEvent('on' + eventName, listener)
}

},{}],"/projects/blackice/node_modules/canvas-app/node_modules/debounce/index.js":[function(require,module,exports){

/**
 * Module dependencies.
 */

var now = require('date-now');

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

},{"date-now":"/projects/blackice/node_modules/canvas-app/node_modules/debounce/node_modules/date-now/index.js"}],"/projects/blackice/node_modules/canvas-app/node_modules/debounce/node_modules/date-now/index.js":[function(require,module,exports){
module.exports = Date.now || now

function now() {
    return new Date().getTime()
}

},{}],"/projects/blackice/node_modules/canvas-app/node_modules/is-webgl-context/index.js":[function(require,module,exports){
module.exports = function(ctx) {
	if (!ctx) return false
	var gl = ctx
	//compatibility with Chrome WebGL Inspector Addon
	if (typeof ctx.rawgl !== 'undefined')
		gl = ctx.rawgl
	if (typeof WebGLRenderingContext !== 'undefined' && gl instanceof WebGLRenderingContext)
		return true
	return false
}
},{}],"/projects/blackice/node_modules/canvas-app/node_modules/webgl-context/index.js":[function(require,module,exports){
module.exports = function(opts) {
    opts = opts||{};
    var canvas = opts.canvas || document.createElement("canvas");
    if (typeof opts.width === "number")
        canvas.width = opts.width;
    if (typeof opts.height === "number")
        canvas.height = opts.height;
    
    var attribs = (opts.attributes || opts.attribs || {});
    try {
        gl = (canvas.getContext('webgl', attribs) || canvas.getContext('experimental-webgl', attribs));
    } catch (e) {
        gl = null;
    }
    return gl;
};
},{}],"/projects/blackice/node_modules/clamp/index.js":[function(require,module,exports){
module.exports = clamp

function clamp(value, min, max) {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}

},{}],"/projects/blackice/node_modules/domready/ready.js":[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? fn() : fns.push(fn)
  }

});

},{}],"/projects/blackice/node_modules/dup/dup.js":[function(require,module,exports){
"use strict"

function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe
},{}],"/projects/blackice/node_modules/gl-mat4/create.js":[function(require,module,exports){
module.exports = create;

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new Float32Array(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/identity.js":[function(require,module,exports){
module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/multiply.js":[function(require,module,exports){
module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/scale.js":[function(require,module,exports){
module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],"/projects/blackice/node_modules/gl-mat4/translate.js":[function(require,module,exports){
module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};
},{}],"/projects/blackice/node_modules/gl-shader-core/lib/create-attributes.js":[function(require,module,exports){
'use strict'

module.exports = createAttributeWrapper

//Shader attribute class
function ShaderAttribute(gl, program, location, dimension, name, constFunc, relink) {
  this._gl = gl
  this._program = program
  this._location = location
  this._dimension = dimension
  this._name = name
  this._constFunc = constFunc
  this._relink = relink
}

var proto = ShaderAttribute.prototype

proto.pointer = function setAttribPointer(type, normalized, stride, offset) {
  var gl = this._gl
  gl.vertexAttribPointer(this._location, this._dimension, type||gl.FLOAT, !!normalized, stride||0, offset||0)
  this._gl.enableVertexAttribArray(this._location)
}

Object.defineProperty(proto, 'location', {
  get: function() {
    return this._location
  }
  , set: function(v) {
    if(v !== this._location) {
      this._location = v
      this._gl.bindAttribLocation(this._program, v, this._name)
      this._gl.linkProgram(this._program)
      this._relink()
    }
  }
})


//Adds a vector attribute to obj
function addVectorAttribute(gl, program, location, dimension, obj, name, doLink) {
  var constFuncArgs = [ 'gl', 'v' ]
  var varNames = []
  for(var i=0; i<dimension; ++i) {
    constFuncArgs.push('x'+i)
    varNames.push('x'+i)
  }
  constFuncArgs.push([
    'if(x0.length===void 0){return gl.vertexAttrib', dimension, 'f(v,', varNames.join(), ')}else{return gl.vertexAttrib', dimension, 'fv(v,x0)}'
  ].join(''))
  var constFunc = Function.apply(undefined, constFuncArgs)
  var attr = new ShaderAttribute(gl, program, location, dimension, name, constFunc, doLink)
  Object.defineProperty(obj, name, {
    set: function(x) {
      gl.disableVertexAttribArray(attr._location)
      constFunc(gl, attr._location, x)
      return x
    }
    , get: function() {
      return attr
    }
    , enumerable: true
  })
}

//Create shims for attributes
function createAttributeWrapper(gl, program, attributes, doLink) {
  var obj = {}
  for(var i=0, n=attributes.length; i<n; ++i) {
    var a = attributes[i]
    var name = a.name
    var type = a.type
    var location = gl.getAttribLocation(program, name)
    
    switch(type) {
      case 'bool':
      case 'int':
      case 'float':
        addVectorAttribute(gl, program, location, 1, obj, name, doLink)
      break
      
      default:
        if(type.indexOf('vec') >= 0) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type for attribute ' + name + ': ' + type)
          }
          addVectorAttribute(gl, program, location, d, obj, name, doLink)
        } else {
          throw new Error('gl-shader: Unknown data type for attribute ' + name + ': ' + type)
        }
      break
    }
  }
  return obj
}
},{}],"/projects/blackice/node_modules/gl-shader-core/lib/create-uniforms.js":[function(require,module,exports){
'use strict'

var dup = require('dup')
var coallesceUniforms = require('./reflect')

module.exports = createUniformWrapper

//Binds a function and returns a value
function identity(x) {
  var c = new Function('y', 'return function(){return y}')
  return c(x)
}

//Create shims for uniforms
function createUniformWrapper(gl, program, uniforms, locations) {

  function makeGetter(index) {
    var proc = new Function('gl', 'prog', 'locations', 
      'return function(){return gl.getUniform(prog,locations[' + index + '])}') 
    return proc(gl, program, locations)
  }

  function makePropSetter(path, index, type) {
    switch(type) {
      case 'bool':
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 'gl.uniform1i(locations[' + index + '],obj' + path + ')'
      case 'float':
        return 'gl.uniform1f(locations[' + index + '],obj' + path + ')'
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type')
          }
          switch(type.charAt(0)) {
            case 'b':
            case 'i':
              return 'gl.uniform' + d + 'iv(locations[' + index + '],obj' + path + ')'
            case 'v':
              return 'gl.uniform' + d + 'fv(locations[' + index + '],obj' + path + ')'
            default:
              throw new Error('gl-shader: Unrecognized data type for vector ' + name + ': ' + type)
          }
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return 'gl.uniformMatrix' + d + 'fv(locations[' + index + '],false,obj' + path + ')'
        } else {
          throw new Error('gl-shader: Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function enumerateIndices(prefix, type) {
    if(typeof type !== 'object') {
      return [ [prefix, type] ]
    }
    var indices = []
    for(var id in type) {
      var prop = type[id]
      var tprefix = prefix
      if(parseInt(id) + '' === id) {
        tprefix += '[' + id + ']'
      } else {
        tprefix += '.' + id
      }
      if(typeof prop === 'object') {
        indices.push.apply(indices, enumerateIndices(tprefix, prop))
      } else {
        indices.push([tprefix, prop])
      }
    }
    return indices
  }

  function makeSetter(type) {
    var code = [ 'return function updateProperty(obj){' ]
    var indices = enumerateIndices('', type)
    for(var i=0; i<indices.length; ++i) {
      var item = indices[i]
      var path = item[0]
      var idx  = item[1]
      if(locations[idx]) {
        code.push(makePropSetter(path, idx, uniforms[idx].type))
      }
    }
    code.push('return obj}')
    var proc = new Function('gl', 'prog', 'locations', code.join('\n'))
    return proc(gl, program, locations)
  }

  function defaultValue(type) {
    switch(type) {
      case 'bool':
        return false
      case 'int':
      case 'sampler2D':
      case 'samplerCube':
        return 0
      case 'float':
        return 0.0
      default:
        var vidx = type.indexOf('vec')
        if(0 <= vidx && vidx <= 1 && type.length === 4 + vidx) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid data type')
          }
          if(type.charAt(0) === 'b') {
            return dup(d, false)
          }
          return dup(d)
        } else if(type.indexOf('mat') === 0 && type.length === 4) {
          var d = type.charCodeAt(type.length-1) - 48
          if(d < 2 || d > 4) {
            throw new Error('gl-shader: Invalid uniform dimension type for matrix ' + name + ': ' + type)
          }
          return dup([d,d])
        } else {
          throw new Error('gl-shader: Unknown uniform data type for ' + name + ': ' + type)
        }
      break
    }
  }

  function storeProperty(obj, prop, type) {
    if(typeof type === 'object') {
      var child = processObject(type)
      Object.defineProperty(obj, prop, {
        get: identity(child),
        set: makeSetter(type),
        enumerable: true,
        configurable: false
      })
    } else {
      if(locations[type]) {
        Object.defineProperty(obj, prop, {
          get: makeGetter(type),
          set: makeSetter(type),
          enumerable: true,
          configurable: false
        })
      } else {
        obj[prop] = defaultValue(uniforms[type].type)
      }
    }
  }

  function processObject(obj) {
    var result
    if(Array.isArray(obj)) {
      result = new Array(obj.length)
      for(var i=0; i<obj.length; ++i) {
        storeProperty(result, i, obj[i])
      }
    } else {
      result = {}
      for(var id in obj) {
        storeProperty(result, id, obj[id])
      }
    }
    return result
  }

  //Return data
  var coallesced = coallesceUniforms(uniforms, true)
  return {
    get: identity(processObject(coallesced)),
    set: makeSetter(coallesced),
    enumerable: true,
    configurable: true
  }
}

},{"./reflect":"/projects/blackice/node_modules/gl-shader-core/lib/reflect.js","dup":"/projects/blackice/node_modules/dup/dup.js"}],"/projects/blackice/node_modules/gl-shader-core/lib/reflect.js":[function(require,module,exports){
'use strict'

module.exports = makeReflectTypes

//Construct type info for reflection.
//
// This iterates over the flattened list of uniform type values and smashes them into a JSON object.
//
// The leaves of the resulting object are either indices or type strings representing primitive glslify types
function makeReflectTypes(uniforms, useIndex) {
  var obj = {}
  for(var i=0; i<uniforms.length; ++i) {
    var n = uniforms[i].name
    var parts = n.split(".")
    var o = obj
    for(var j=0; j<parts.length; ++j) {
      var x = parts[j].split("[")
      if(x.length > 1) {
        if(!(x[0] in o)) {
          o[x[0]] = []
        }
        o = o[x[0]]
        for(var k=1; k<x.length; ++k) {
          var y = parseInt(x[k])
          if(k<x.length-1 || j<parts.length-1) {
            if(!(y in o)) {
              if(k < x.length-1) {
                o[y] = []
              } else {
                o[y] = {}
              }
            }
            o = o[y]
          } else {
            if(useIndex) {
              o[y] = i
            } else {
              o[y] = uniforms[i].type
            }
          }
        }
      } else if(j < parts.length-1) {
        if(!(x[0] in o)) {
          o[x[0]] = {}
        }
        o = o[x[0]]
      } else {
        if(useIndex) {
          o[x[0]] = i
        } else {
          o[x[0]] = uniforms[i].type
        }
      }
    }
  }
  return obj
}
},{}],"/projects/blackice/node_modules/gl-shader-core/shader-core.js":[function(require,module,exports){
'use strict'

var createUniformWrapper = require('./lib/create-uniforms')
var createAttributeWrapper = require('./lib/create-attributes')
var makeReflect = require('./lib/reflect')

//Shader object
function Shader(gl, prog, vertShader, fragShader) {
  this.gl = gl
  this.handle = prog
  this.attributes = null
  this.uniforms = null
  this.types = null
  this.vertexShader = vertShader
  this.fragmentShader = fragShader
}

//Binds the shader
Shader.prototype.bind = function() {
  this.gl.useProgram(this.handle)
}

//Destroy shader, release resources
Shader.prototype.dispose = function() {
  var gl = this.gl
  gl.deleteShader(this.vertexShader)
  gl.deleteShader(this.fragmentShader)
  gl.deleteProgram(this.handle)
}

Shader.prototype.updateExports = function(uniforms, attributes) {
  var locations = new Array(uniforms.length)
  var program = this.handle
  var gl = this.gl

  var doLink = relinkUniforms.bind(void 0,
    gl,
    program,
    locations,
    uniforms
  )
  doLink()

  this.types = {
    uniforms: makeReflect(uniforms),
    attributes: makeReflect(attributes)
  }

  this.attributes = createAttributeWrapper(
    gl,
    program,
    attributes,
    doLink
  )

  Object.defineProperty(this, 'uniforms', createUniformWrapper(
    gl,
    program,
    uniforms,
    locations
  ))
}

//Relinks all uniforms
function relinkUniforms(gl, program, locations, uniforms) {
  for(var i=0; i<uniforms.length; ++i) {
    locations[i] = gl.getUniformLocation(program, uniforms[i].name)
  }
}

//Compiles and links a shader program with the given attribute and vertex list
function createShader(
    gl
  , vertSource
  , fragSource
  , uniforms
  , attributes) {
  
  //Compile vertex shader
  var vertShader = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vertShader, vertSource)
  gl.compileShader(vertShader)
  if(!gl.getShaderParameter(vertShader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(vertShader)
    console.error('gl-shader: Error compling vertex shader:', errLog)
    throw new Error('gl-shader: Error compiling vertex shader:' + errLog)
  }
  
  //Compile fragment shader
  var fragShader = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fragShader, fragSource)
  gl.compileShader(fragShader)
  if(!gl.getShaderParameter(fragShader, gl.COMPILE_STATUS)) {
    var errLog = gl.getShaderInfoLog(fragShader)
    console.error('gl-shader: Error compiling fragment shader:', errLog)
    throw new Error('gl-shader: Error compiling fragment shader:' + errLog)
  }
  
  //Link program
  var program = gl.createProgram()
  gl.attachShader(program, fragShader)
  gl.attachShader(program, vertShader)

  //Optional default attriubte locations
  attributes.forEach(function(a) {
    if (typeof a.location === 'number') 
      gl.bindAttribLocation(program, a.location, a.name)
  })

  gl.linkProgram(program)
  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    var errLog = gl.getProgramInfoLog(program)
    console.error('gl-shader: Error linking shader program:', errLog)
    throw new Error('gl-shader: Error linking shader program:' + errLog)
  }
  
  //Return final linked shader object
  var shader = new Shader(
    gl,
    program,
    vertShader,
    fragShader
  )
  shader.updateExports(uniforms, attributes)

  return shader
}

module.exports = createShader

},{"./lib/create-attributes":"/projects/blackice/node_modules/gl-shader-core/lib/create-attributes.js","./lib/create-uniforms":"/projects/blackice/node_modules/gl-shader-core/lib/create-uniforms.js","./lib/reflect":"/projects/blackice/node_modules/gl-shader-core/lib/reflect.js"}],"/projects/blackice/node_modules/gl-sprite-text/index.js":[function(require,module,exports){
var Base = require('fontpath-simple-renderer')
var inherits = require('inherits')
var bmfont2fontpath = require('fontpath-bmfont')
var texcoord = require('texcoord')
var xtend = require('xtend')
var createTexture = require('gl-texture2d')

var Batch = require('gl-sprite-batch')

var tmpPos = [0, 0],
    tmpShape = [0, 0],
    tmp1 = [0, 0],
    tmp2 = [0, 0]
var DEFAULT_TEXCOORD = [0, 0, 1, 1]
var maxInitialCapacity = 500

function texcoordGlyph(glyph, atlas, out) {
    tmp1[0] = glyph.x
    tmp1[1] = glyph.y
    tmp2[0] = glyph.width
    tmp2[1] = glyph.height
    return texcoord(tmp1, tmp2, atlas, out)
}

function TextRenderer(gl, opt) {
    if (!(this instanceof TextRenderer))
        return new TextRenderer(gl, opt)
    opt = opt||{}

    if (!opt.font) 
        throw new Error('must specify bmfont at creation time')

    //if the font has Image/ndarray array
    if (!opt.textures && Array.isArray(opt.font.images)) {
        opt.textures = opt.font.images.map(function(img) {
            return createTexture(gl, img)
        })
    }

    opt.font = bmfont2fontpath(opt.font)

    Base.call(this, opt)

    this.textures = opt.textures || []
    this.gl = gl
    if (!gl)
        throw new Error("must specify gl context")
    
    //assume text will be used dynamically 
    if (typeof opt.dynamic !== 'boolean')
        opt.dynamic = true

    var batch = opt.batch
    if (!batch)
        this.defaultBatch = Batch(gl, opt)
    this.batch = batch || this.defaultBatch

    if (typeof opt.wrapWidth !== 'number')
        this.layout()
}

inherits(TextRenderer, Base)

TextRenderer.prototype.dispose = function(textures) {
    if (this.defaultBatch)
        this.defaultBatch.dispose()
    if (textures) {
        this.textures.forEach(function(t) {
            if (typeof t.dispose === 'function')
                t.dispose()
        })
    }
    return this
}

TextRenderer.prototype.uncache = function() {
    this._cache = false
    this.batch.clear()
    return this
}

TextRenderer.prototype.cache = function(x, y, start, end) {
    // if (this.underline || this.font.pages.length > 1)
    //     throw new Error('currently cached text does not support underlines or multiple texture pages')
    
    this._cache = true
    this.batch.ensureCapacity(this.text.length)
    this.batch.clear()
    this._build(x, y, start, end)
    return this
}

TextRenderer.prototype.draw = function(shader, x, y, start, end) {
    var batch = this.batch
    batch.bind(shader)

    //if we're drawing dynamically
    if (!this._cache) {
        batch.clear()
        this._build(x, y, start, end)
    }
    
    batch.draw()
    batch.unbind()
    return this
}

TextRenderer.prototype._build = function(x, y, start, end) {
    var result = this.render(x, y, start, end)

    var batch = this.batch
    var i = 0
    
    //underlines currently not supported with cache()
    if (!this._cache) {
        batch.texcoord = DEFAULT_TEXCOORD
        batch.texture = null

        for (i = 0; i < result.underlines.length; i++) {
            var underline = result.underlines[i]
            batch.position = underline.position
            batch.shape = underline.size
            batch.push()
        }
    }

    //now draw our glyphs into the batch...
    for (i = 0; i < result.glyphs.length; i++) {
        var g = result.glyphs[i]
        this._drawGlyph(batch, g)
    }
}

TextRenderer.prototype._drawGlyph = function(batch, data) {
    //... we could sort these by texture page to reduce draws
    var glyph = data.glyph
    var img = this.textures[glyph.page]
    tmpPos[0] = data.position[0]+glyph.hbx
    tmpPos[1] = data.position[1]+glyph.hby - this.font.descender
    tmpShape[0] = glyph.width * data.scale[0]
    tmpShape[1] = glyph.height * data.scale[1]
    
    batch.texture = img
    texcoordGlyph(glyph, img && img.shape, batch.texcoord)
    batch.position = tmpPos
    batch.shape = tmpShape
    batch.push()
}

module.exports = TextRenderer
},{"fontpath-bmfont":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-bmfont/index.js","fontpath-simple-renderer":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/index.js","gl-sprite-batch":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js","gl-texture2d":"/projects/blackice/node_modules/gl-texture2d/texture.js","inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js","texcoord":"/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-bmfont/index.js":[function(require,module,exports){
function glyph(data) {
    return {
        page: data.page,
        hbx: data.xoffset,
        hby: data.yoffset,
        width: data.width,
        height: data.height,
        xoff: data.xadvance,
        x: data.x,
        y: data.y
    }
}

function glyphs(chars) {
    var out = {}
    chars.forEach(function(c) {
        out[String.fromCharCode(c.id)] = glyph(c)
    })
    return out
}

module.exports = function(bmfont) {
    return {
        pages: bmfont.pages,
        resolution: 72,
        size: bmfont.info.size,
        units_per_EM: 1,
        bitmap: true,
        family_name: bmfont.info.face,
        height: bmfont.common.lineHeight,
        descender: bmfont.common.base,
        ascender: bmfont.common.base,
        glyphs: glyphs(bmfont.chars),
        kerning: bmfont.kernings.map(function(k) {
            return [String.fromCharCode(k.first),String.fromCharCode(k.second),k.amount]
        })
    }
}
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/index.js":[function(require,module,exports){
var Base = require('fontpath-renderer')
var inherits = require('inherits')

//TODO: Eventually lots of this code will just replace fontpath-renderer...

function FontpathRenderer(options) {
    if (!(this instanceof FontpathRenderer))
        return new FontpathRenderer(options)
    Base.call(this, options)

    this.data = {
        glyphs: [],
        underlines: []
    }
}

inherits(FontpathRenderer, Base)

FontpathRenderer.prototype.renderGlyph = function(i, glyph, scale, x, y) {
    this.data.glyphs.push(new Glyph(i, glyph, 
                this.text.charCodeAt(i), 
                [ scale, this.font.bitmap ? scale : -scale ],
                [ x, y ]))
}

FontpathRenderer.prototype.renderUnderline = function(x, y, width, height) {
    this.data.underlines.push(new Underline(
        [ x, y ],
        [ width, height ]
    ))
}

FontpathRenderer.prototype.render = function(x, y, start, end) {
    //new data for result
    this.data.glyphs.length = 0
    this.data.underlines.length = 0
    Base.prototype.render.call(this, x, y, start, end)
    return this.data
}

function Glyph(index, glyph, charCode, scale, position) {
    this.glyph = glyph
    this.index = index
    this.charCode = charCode
    this.position = position
    this.scale = scale
}

function Underline(position, size) {
    this.position = position
    this.size = size
}

module.exports = FontpathRenderer
},{"fontpath-renderer":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/index.js","inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/index.js":[function(require,module,exports){
var GlyphIterator = require('fontpath-glyph-iterator');
var WordWrap = require('fontpath-wordwrap');

var tmpBounds = { x: 0, y: 0, width: 0, height: 0, glyphs: 0 };

function TextRenderer(options) {
    if (!(this instanceof TextRenderer))
        return new TextRenderer(options);
    options = options||{}

    this.iterator = new GlyphIterator(options.font, options.fontSize);
    this.wordwrap = new WordWrap();

    this.align = 'left';
    this.underline = false;

    this.underlineThickness = undefined;
    this.underlinePosition = undefined;
    this._text = "";

    if (typeof options.align === 'string')
        this.align = options.align;
    if (typeof options.underline === 'boolean')
        this.underline = options.underline;
    if (typeof options.underlineThickness === 'number')
        this.underlineThickness = options.underlineThickness;
    if (typeof options.underlinePosition === 'number')
        this.underlinePosition = options.underlinePosition;
    if (typeof options.text === 'string')
        this.text = options.text;
    if (typeof options.lineHeight === 'number')
        this.lineHeight = options.lineHeight;
    if (typeof options.letterSpacing === 'number')
        this.letterSpacing = options.letterSpacing;
    if (typeof options.wrapMode === 'string')
        this.wordwrap.mode = options.wrapMode;
    if (typeof options.wrapWidth === 'number')
        this.layout(options.wrapWidth);
}

//Internally we will use integers to avoid string comparison for each glyph
var LEFT_ALIGN = 0, CENTER_ALIGN = 1, RIGHT_ALIGN = 2;
var ALIGN_ARRAY = [
    'left', 
    'center', 
    'right'
];
    
Object.defineProperties(TextRenderer.prototype, {
    /**
     * If the new font differs from the last, the text layout is cleared
     * and placed onto a single line. Users must manually re-layout the text 
     * for word wrapping.
     */
    "font": {
        get: function() {
            return this.iterator.font;
        },
        set: function(val) {
            var oldFont = this.iterator.font;
            this.iterator.font = val;
            if (oldFont !== this.iterator.font)
                this.clearLayout();
        },
    },

    /**
     * If the new font size differs from the last, the text layout is cleared
     * and placed onto a single line. Users must manually re-layout the text 
     * for word wrapping.
     */
    "fontSize": {
        get: function() {
            return this.iterator.fontSize;
        },
        set: function(val) {
            var oldSize = this.iterator.fontSize;

            this.iterator.fontSize = val;

            if (oldSize !== this.iterator.fontSize)
                this.clearLayout();
        },
    },
    "lineHeight": {
        get: function() {
            return this.iterator.lineHeight;
        },
        set: function(val) {
            this.iterator.lineHeight = val;
        },
    },
    "letterSpacing": {
         get: function() {
            return this.iterator.letterSpacing;
        },
        set: function(val) {
            this.iterator.letterSpacing = val;
        },
    },

    /**
     * If the new text is different from the last, the layout (i.e. word-wrapping)
     * is cleared and the result is a single line of text (similar to HTML5 canvas text
     * rendering).
     * 
     * The text then needs to be re-wordwrapped with a call to `layout()`.
     */
    "text": {
        get: function() {
            return this._text;
        },

        set: function(text) {
            text = text||"";

            var old = this._text;
            this._text = text;
            this.wordwrap.text = this.text;

            if (this._text !== old) 
                this.clearLayout();
        }
    }
});

/**
 * Clears the text layout and word-wrapping, placing all of it on a single line.
 */
TextRenderer.prototype.clearLayout = function() {
    this.wordwrap.text = this.text;
    this.wordwrap.empty();

    if (this.iterator.font) //font might not have been passed at constructor
        this.wordwrap.clearLayout(this.iterator);
};

/**
 * Calls the word wrapper to layout the current text string,
 * based on the wrap width and any current wordwrapping options.
 *
 * This is called when the text is changed. 
 * 
 * @return {[type]} [description]
 */
TextRenderer.prototype.layout = function(wrapWidth) {
    this.wordwrap.text = this.text;
    this.wordwrap.empty();
    this.wordwrap.layout(this.iterator, wrapWidth);
};

/**
 * "Renders" this glyph at the given location. This may involve filling
 * a VBO with vertex data, or it may be a direct call to draw a bitmap glyph
 * or shape outline.
 * @return {[type]} [description]
 */
TextRenderer.prototype.renderGlyph = function() {

};

TextRenderer.prototype.renderUnderline = function() {

};

/**
 * Returns the bounds of the current text layout. 
 *
 * The height does not extend past the baseline of the
 * last line; unless `includeUnderline` is true, in which
 * case the underline's position and height is included
 * in the calculation. 
 *
 * The bounding y position is offset so that the box has an upper-left
 * origin, for parity with HTML5 canvas rendering.
 * 
 * @param {Boolean} includeUnderline whether to include the underline in the calculation, default false
 * @param {Object} out an optional {width, height} object for re-use
 * @return {Object} a size with { width, height } properties
 */
TextRenderer.prototype.getBounds = function (includeUnderline, out) {
    if (!out)
        out = { x: 0, y: 0, width: 0, height: 0 };

    var wordwrapper = this.wordwrap;
    var itr = this.iterator;

    //tighten the bounding box around the first line..
    var firstLineHeight = 0;
    if (wordwrapper.lines.length > 0) {
        var firstLine = wordwrapper.lines[0];
        itr.getBounds(this.text, firstLine.start, firstLine.end, undefined, tmpBounds);
        firstLineHeight = tmpBounds.height;
    }

    out.width = wordwrapper.getMaxLineWidth();   
    out.height = Math.max(0, wordwrapper.lines.length-1) * itr.getLineGap() + firstLineHeight;

    out.x = 0;
    out.y = -out.height;

    if (includeUnderline) {
        var underlineHeight = this.computeUnderlineHeight();
        var underlinePosition = this.computeUnderlinePosition();
        var underlineOff = underlinePosition+underlineHeight/2;
        out.height += underlineOff;
    }

    return out;
};

/**
 * Computes the scaled underline height as pixels, based on 
 * the explicit `underlineHeight` (in pixels). If `underlineHeight` is
 * undefined or null, it will try to use the font's non-zero underline height, 
 * otherwise default to 1/8 of the font's EM square.
 * 
 * @return {Number} the pixel height of the underline 
 */
TextRenderer.prototype.computeUnderlineHeight = function () {
    var font = this.font;
    var scale = this.iterator.fontScale;
    if (this.underlineThickness===0||this.underlineThickness) {
        return this.underlineThickness; 
    } else if (font.underline_thickness) {
        return font.underline_thickness * scale; 
    } else if (font.bitmap)
        return font.size/8;
    else
        return (font.units_per_EM/8)*scale;
};

/**
 * Computes the scaled underline height as pixels, based on 
 * the explicit `underlinePosition` (in pixels). If `underlinePosition` is
 * undefined or null, it will try to use the font's non-zero underline position, 
 * otherwise default to 1/4 of the font's EM square.
 *
 * This is the Y offset from the text baseline to the center of the underline 
 * bar, in pixels. It is generally a positive value.
 * 
 * @return {Number} the pixel position of the underline 
 */
TextRenderer.prototype.computeUnderlinePosition = function () {
    var font = this.font;
    var scale = this.iterator.fontScale;
        
    if (this.underlinePosition===0||this.underlinePosition) {
        return this.underlinePosition; 
    } else if (font.underline_position) {
        return -font.underline_position * scale; 
    } else if (font.bitmap) {
        return font.size/4;
    } else {
        return (font.units_per_EM/4)*scale;
    }
};

/**
 * Gets the descent of the current font (assumes its size 
 * is already set). This is an absolute (positive) value.
 * 
 * @return {[type]} [description]
 */
TextRenderer.prototype.getDescender = function () {
    return Math.abs(this.iterator.fontScale * this.iterator.font.descender);
};

/**
 * Gets the descent of the current font (assumes its size 
 * is already set). This is an absolute (positive) value.
 * 
 * @return {[type]} [description]
 */
TextRenderer.prototype.getAscender = function () {
    return Math.abs(this.iterator.fontScale * this.iterator.font.ascender);
};

//Signals for subclasses to optionally implmeent
//This may be useful to stop/start paths with different fills
TextRenderer.prototype.onBegin = function() { }
TextRenderer.prototype.onEnd = function() { }
TextRenderer.prototype.onBeginLine = function(lineIndex) { }
TextRenderer.prototype.onEndLine = function(lineIndex) { }

/**
 * Renders the current text layout, where lower-left is 
 * the origin. Multiple lines will be positioned above the
 * origin.
 */
TextRenderer.prototype.render = function (x, y, start, end) {
    x = x||0;
    y = y||0;

    var text = this.text;
    var wordwrapper = this.wordwrap;

    //if we have nothing to draw
    if (!text || wordwrapper.lines.length === 0)
        return;

    //default start/end params
    start = start||0;
    end = typeof end === "number" ? end : text.length;

    var itr = this.iterator;
    var scale = itr.fontScale;
    var font = itr.font;
    var underline = this.underline;

    //used for alignment...
    var maxLineWidth = wordwrapper.getMaxLineWidth();
    
    y -= Math.max(0, wordwrapper.lines.length-1) * itr.getLineGap();


    //use numbers to avoid str compare for each glyph
    var alignType = ALIGN_ARRAY.indexOf(this.align||"");
    if (alignType===-1)
        alignType = LEFT_ALIGN;

    var underlineX = 0;
    var underlineStartX = 0;
    var underlineY = 0;
    var underlineWidth = 0;

    var underlineStarted = false;

    //Try to use user-specified underline settings, otherwise use the font if possible,
    //otherwise just use a rough default based on EM square.    
    var underlinePos = this.computeUnderlinePosition();
    var underlineHeight = this.computeUnderlineHeight();

    this.onBegin();
    
    //set the origin and pen position
    itr.begin(x, y);
    for (var k=0; k<wordwrapper.lines.length; k++) {
        var line = wordwrapper.lines[k];
        underlineStarted = false;

        var lastAdvance = 0;

        var lineX = itr.pen.x;
        var lineY = itr.pen.y;

        this.onBeginLine(k);

        //TODO: use multiple Nodes inside a single line
        //a node will have attributes like font, size, color, 
        //letter-spacing, underline, etc.
        //This will affect the line height, as it will have to be the max of all nodes.

        for (var i=line.start; i<line.end; i++) {
            var chr = text.charAt(i);

            //Step the iterator, moving forward based on kerning from last char
            var glyph = itr.step(text, i);

            if (!glyph)
                continue;

            //within desired range
            if (i >= start && i < end) {
                var tx = itr.pen.x;
                var ty = itr.pen.y;

                if (alignType === CENTER_ALIGN) {
                    tx += (maxLineWidth-line.width)/2;
                } else if (alignType === RIGHT_ALIGN) {
                    tx += (maxLineWidth-line.width);
                }

                if (!underlineStarted) {
                    underlineX = tx;
                    underlineStartX = tx;
                    underlineY = ty + underlinePos;
                    underlineWidth = 0;
                    underlineStarted = true;
                } else {
                    underlineWidth = tx - underlineStartX;
                }

                this.renderGlyph(i, glyph, scale, tx, ty);
            }

            //Advance the iterator to the next glyph in the string
            var newAdvance = itr.advance(glyph);

            if (i >= start && i < end)
                lastAdvance = newAdvance;
        }

        this.onEndLine(k);

        if (underline) {
            underlineWidth += lastAdvance;
            this.renderUnderline(underlineX, underlineY-underlineHeight/2, underlineWidth, underlineHeight);
        }
        
        //Steps down a line...
        if (k < wordwrapper.lines.length-1) {
            itr.advanceLine();
        }
    }

    //finish the iterator...
    itr.end();
    this.onEnd();
};

module.exports = TextRenderer;
},{"fontpath-glyph-iterator":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-glyph-iterator/index.js","fontpath-wordwrap":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-wordwrap/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-glyph-iterator/index.js":[function(require,module,exports){
var util = require('fontpath-util');

var DEFAULT_TAB_WIDTH = 4;

function GlyphIterator(font, fontSize) {
    this._fontSize = undefined;
    this._fontScale = undefined;
    this._font = undefined;
    this.fontScale = 1.0;
    this.kerning = true;
    this.letterSpacing = 0;
    this.lineHeight = undefined;
    
    this.fontSize = typeof fontSize === 'number'
            ? fontSize
            : (font ? font.size : undefined);
    this.font = font;

    //Number of spaces for a tab character
    this.tabWidth = DEFAULT_TAB_WIDTH;
    this._tabGlyph = null;

    this.origin = { x: 0, y: 0 };
    this.pen = { x: 0, y: 0 };
}

Object.defineProperty(GlyphIterator.prototype, "font", {
    get: function() {
        return this._font;
    },

    set: function(font) {
        this._font = font;

        //Determine the new scaling factor...
        if (font) {
            this.fontScale = util.getPxScale(font, this.fontSize);

            //Updates the tab glyph
            this.tabWidth = this._tabWidth;
        }
    },
});

//There might be a better way of handling tab width using FreeType ? 
Object.defineProperty(GlyphIterator.prototype, "tabWidth", {

    get: function() {
        return this._tabWidth;
    },

    set: function(val) {
        this._tabWidth = val===0 || val ? val : DEFAULT_TAB_WIDTH;
        this._tabGlyph = {};

        var spaceGlyph = this.font ? this.font.glyphs[" "] : null;
        if (spaceGlyph) {
            this._tabGlyph = {};
            for (var k in spaceGlyph) {
                this._tabGlyph[k] = spaceGlyph[k];
            }
            if (this._tabGlyph.xoff)
                this._tabGlyph.xoff *= this._tabWidth;
        }
    },
});

Object.defineProperty(GlyphIterator.prototype, "fontSize", {
    get: function() {
        if (typeof this._fontSize !== 'number')
            return this.font.bitmap 
                ? this.font.size 
                : util.pointToPixel(this.font.size)
        return this._fontSize;
    },

    set: function(val) {
        this._fontSize = val;

        //If the font is already set, determine the new scaling factor
        if (this._font) {
            this.fontScale = util.getPxScale(this._font, this._fontSize);
        }
    },
});

GlyphIterator.prototype.getKerning = function(left, right) {
    var font = this.font;

    if (!font || !font.kerning)
        return 0;

    var table = this.kerningTable;

    for (var i=0; i<font.kerning.length; i++) {
        var k = font.kerning[i];
        if (k[0] === left && k[1] === right) 
            return k[2];
    }
    return 0;
};

GlyphIterator.prototype.begin = function(x, y) {
    this.origin.x = x||0;
    this.origin.y = y||0;

    this.pen.x = this.origin.x;
    this.pen.y = this.origin.y;
};

GlyphIterator.prototype.end = function() {
    //.. mainly for consistency with begin()
    //Might be useful later on
};

GlyphIterator.prototype.getLineGap = function() {
    //Line height handling is a mess in browsers.
    //Maybe the best solution is to encourage users to 
    //specify pixel line heights if they want to match browser standards,
    //otherwise it's unreasonable to expect the line gaps to line up exactly
    //across all browsers. Example of the disaster:
    //http://lists.w3.org/Archives/Public/www-style/2008Jan/0413.html

    //For reference, some baseline-to-baseline calculations:
    //http://www.microsoft.com/typography/otspec/recom.htm
    //freetype.org/freetype2/docs/reference/ft2-base_interface.html
    //http://www.freetype.org/freetype2/docs/glyphs/glyphs-3.html

    //Unfortunately none of these are producing line-heights that avoid overlapping
    //or resemble browser rendering in any way. 

    // If CSS uses 1em or 1, the browser offsets the line by the 
    // font's pixel size. If an exact pixel line-height is specified,
    // the browser will use that + a computed "linegap." 
    // If 'auto' is specified for line-height, the calculations seem
    // much more complex and browser/platform dependent (not included here).
    
    var font = this.font,
        scale = this.fontScale;
    var gap = (font.height - font.ascender + Math.abs(font.descender)) * scale;    
    var lineHeight = this.lineHeight;
    
    lineHeight = (lineHeight===0||lineHeight) 
            ? (lineHeight + gap)
            : this.fontSize;
    return lineHeight;
};

GlyphIterator.prototype.translate = function(x, y) {
    this.origin.x += x||0;
    this.origin.y += y||0;

    this.pen.x += x||0;
    this.pen.y += y||0;
};

GlyphIterator.prototype.step = function(text, index) {
    var scale = this.fontScale,
        font = this._font;

    var chr = text.charAt(index); 

    if (chr === '\t' && this._tabGlyph) {
        return this._tabGlyph;
    }

    //Skip missing characters...
    if (!(chr in font.glyphs))
        return;
    
    var glyph = font.glyphs[chr];

    //If we have a char to the left, determine its kerning
    if (index > 0 && this.kerning) {
        var kern = this.getKerning(text.charAt(index-1), chr);
        this.pen.x += (kern*scale);
    }

    return glyph;
};

GlyphIterator.prototype.advanceLine = function() {
    this.pen.y += this.getLineGap();
    this.pen.x = this.origin.x;
};

/**
 * Called after step. 
 */
GlyphIterator.prototype.advance = function(glyph) {
    var advance = (glyph.xoff * this.fontScale);
    // Advance to next pen position
    this.pen.x += advance + this.letterSpacing;
    return advance;
};

/**
 * This is a utility function that provides the bounds of the given
 * text (from start and end positions) as if they were laid out horizontally,
 * left to right.
 *
 * For convenience, this will not alter the current pen and origin positions.
 * This way it can be utilized inside a glyph iteration (i.e. for rendering).
 *
 * If `availableWidth` is specified, this will break before reaching the specified
 * pixel width, to ensure that all glyphs will fit inside the bounds. 
 *
 * The return object also includes a `glyphs` property, which is the number of glyphs
 * that are visible within the returned bounds. 
 *
 * If `out` is specified (an object with x, y, width, height, and glyph properties),
 * it will be re-used. Otherwise a new object is created.
 * 
 * @param {String} text the text to check
 * @param {Number} start the start position, defaults to 0
 * @param {Number} end the end position, exclusive, defaults to text length
 * @param {Number} availableWidth the width before stopping the bound check
 * @param {Object} out an object to re-use for the return value
 * @return {Object} the bounds and glyph count {x,y,width,height,glyphs}
 */
GlyphIterator.prototype.getBounds = function(text, start, end, availableWidth, out) {
    if (!out)
        out = { x:0, y:0, width: 0, height: 0, glyphs: 0 };

    var checkWidth = availableWidth===0||availableWidth;

    start = start||0;
    end = end===0||end ? end : text.length;

    var maxHeight = 0;

    out.x = 0;
    out.y = 0;
    out.glyphs = 0;

    var oldPenX = this.pen.x,
        oldPenY = this.pen.y,
        oldOriginX = this.origin.x,
        oldOriginY = this.origin.y;


    var font = this.font;
    this.begin();
    for (var i=start; i<end; i++) {
        var chr = text.charAt(i);

        //step the iterator
        var glyph = this.step(text, i);

        //if the glyph is valid, we can advance past it and calculate new height
        if (glyph) {
            var height = (glyph.height)*this.fontScale;

            out.y = Math.max(out.y, this.fontScale*(glyph.height-glyph.hby));

            maxHeight = Math.max(maxHeight, height);
            var lastAdvance = this.advance(glyph);

            //if we're past the available width
            var newWidth = this.pen.x - this.origin.x;
            if (checkWidth && (newWidth - availableWidth > 0.001)) {
                this.pen.x -= lastAdvance;
                break;
            }

            out.glyphs++;
        }
    }
    this.end();

    out.width = this.pen.x - this.origin.x;
    out.height = maxHeight;

    this.pen.x = oldPenX;
    this.pen.y = oldPenY;
    this.origin.x = oldOriginX;
    this.origin.y = oldOriginY;

    return out;
};

module.exports = GlyphIterator;
},{"fontpath-util":"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-util/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-util/index.js":[function(require,module,exports){
// module.exports.pointsToPixels = function(pointSize, resolution) {
// 	resolution = typeof resolution === "number" ? resolution : 72;
// 	return pointSize * resolution / 72;
// };

// module.exports.coordToPixel = function(coord, pixelSize, emSize) {
// 	emSize = typeof emSize === "number" ? emSize : 2048;
// 	return coord * pixelSize / emSize;
// };

/**
 * Converts a pt size to px size, namely useful for matching
 * size with CSS styles. If no DPI is specified, 96 is assumed
 * (as it leads to correct rendering in all browsers).
 * 
 * @param  {Number} fontSize the desired font size in points
 * @param  {Number} dpi      the expected DPI, generally 96 for browsers
 * @return {Number}          the rounded pixel font size
 */
module.exports.pointToPixel = function(fontSize, dpi) {
    dpi = dpi||dpi===0 ? dpi : 96;
    fontSize = fontSize * dpi / 72;
    return Math.round(fontSize);
};

/**
 * For the given font and (pixel) font size, this method returns the
 * scale that will need to be applied to EM units (i.e. font paths) 
 * to have the font render at the expected size (i.e. to match the browser).
 *
 * If no font size is specified, we will use the default font size (which is in points)
 * and convert it to pixels. 
 * 
 * @param  {Font} font     a font object from the fontpath tool
 * @param  {Number} fontSize the desired font size, defaults to the font's default size
 * @return {Number} returns the scale for this font size         
 */
module.exports.getPxScale = function(font, fontSize) {
    if (font.bitmap)
        return 1.0;

    //If no fontSize is specified, it will just fall back to using the font's own size with 96 DPI.
    fontSize = typeof fontSize === "number" ? fontSize : this.pointToPixel(font.size);

    //Takes in a font size in PIXELS and gives us the expected scaling factor
    var sz = font.units_per_EM/64;
    sz = (sz/font.size * fontSize);

    return ((font.resolution * 1/72 * sz) / font.units_per_EM);
};

/**
 * For the given font and (point) font size, this method returns the
 * scale that will need to be applied to EM units (i.e. font paths) 
 * to have the font render at the expected size (i.e. to match the browser).
 * 
 * If no font size is specified, we will use the default font size.
 * 
 * @param  {Font} font       a font object from the fontpath tool
 * @param  {Number} fontSize the desired font size, defaults to the font's default size
 * @return {Number}          the scale for this font size
 */
module.exports.getPtScale = function(font, fontSize) {
    fontSize = typeof fontSize === "number" ? fontSize : font.size;
    fontSize = this.pointToPixel(fontSize);
    return this.getPxScale(font, fontSize);
};

},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/fontpath-simple-renderer/node_modules/fontpath-renderer/node_modules/fontpath-wordwrap/index.js":[function(require,module,exports){
var tmpBounds = { x: 0, y: 0, width: 0, height: 0, glyphs: 0 };

function isWhitespace(chr) {
	return chr===' '
		|| chr==='\n'
		|| chr==='\r'
		|| chr==='\t';
}

function idxOf(text, chr, start, end) {
	var idx = text.indexOf(chr, start);
	if (idx === -1 || idx > end)
		return end;
	return idx;
}

function WordWrap(text) {
	/**
	 * The text being operated on.
	 * @param {String} text
	 */
	this.text = text||"";

	/**
	 * An array of lines representing the state of this word wrapper.
	 * @param {Array} lines
	 */
	this.lines = [];

	/** 
	 * The newline character to break on, default '\n'
	 * @param {String} newline
	 */
	this.newline = '\n';

	/**
	 * Whether to clip non-breaking text (nowrap and pre)
	 * if the wrapWidth is too small. 
	 *  
	 * @param {Boolean} clip
	 */
	this.clip = false;

	/**
	 * The mode for wordwrapping: 'pre', 'normal', or 'nowrap'.
	 *
	 * You can also use the `PRE`, `NORMAL`, and `NOWRAP` constants
	 * in `WordWrap.Mode`.
	 * 
	 * @param {String} mode
	 */
	this.mode = WordWrap.Mode.NORMAL;
}

WordWrap.Mode = {
	PRE: 'pre',       //whitespace isn't collapsed
	NORMAL: 'normal', //whitespace is collapsed
	NOWRAP: 'nowrap'  //only break on '\n'
};

/**
 * Clears any multi-line layout by placing all the text in a single Line object.
 * 
 * @param {GlyphIterator} iterator the iterator to use 
 * @method  clearLayout
 */
WordWrap.prototype.clearLayout = function(iterator) {
	this.lines.length = 0;
	
	if (this.text.length > 0) {
		iterator.getBounds(this.text, 0, this.text.length, undefined, tmpBounds);
		
		var line = new WordWrap.Line(0, this.text.length, tmpBounds.width);
		this.lines.push(line);
	}
};

/**
 * Resets the word wrapper by emptying all current lines.
 * @method  empty
 */
WordWrap.prototype.empty = function() {
	this.lines.length = 0;
};

/**
 * Word-wraps the given text into multiple lines.
 * @param  {[type]} iterator [description]
 * @param  {[type]} width    [description]
 * @param  {[type]} start    [description]
 * @param  {[type]} end      [description]
 * @return {[type]}          [description]
 */
WordWrap.prototype.layout = function(iterator, wrapWidth, start, end) {
	var text = this.text;

	var lines = this.lines;

	start = Math.max(0, start||0);
	end = (end===0||end) ? end : text.length;

	iterator.begin();

	//default wrap width...
	wrapWidth = (wrapWidth===0 || wrapWidth) ? wrapWidth : Number.MAX_VALUE;

	//<pre> mode just uses a simple algorithm...
	if (this.mode === WordWrap.Mode.PRE) {
		var lineStart = start;
		for (var i=start; i<end; i++) {
			var chr = text.charAt(i);

			//If we've reached a newline, then step down a line
			//Or if we've reached the EOF
			if ( chr === this.newline || i===end-1) {
				var availableWidth = this.clip ? wrapWidth : undefined;
				iterator.getBounds(text, lineStart, i+1, availableWidth, tmpBounds);
				lines.push( new WordWrap.Line(lineStart, lineStart+tmpBounds.glyphs, tmpBounds.width) );
				lineStart = i+1;
			}
		}
	} 
	//'normal' mode uses LibGDX's word wrapping algorithm:
	//https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/BitmapFontCache.java
	else {
		//if 'nowrap' is specified, we only wrap on newline chars
		
		var testWidth = wrapWidth;
		if (this.mode === WordWrap.Mode.NOWRAP) {
			testWidth = Number.MAX_VALUE;
		}

		while (start < end) {
			//get next newline position
			var newLine = idxOf(text, this.newline, start, end);

			//eat whitespace at start of line
			while (start < newLine) {
				if (!isWhitespace( text.charAt(start) ))
					break;
				start++;
			}

			//determine visible # of glyphs for the available width
			iterator.getBounds(text, start, newLine, testWidth, tmpBounds)

			var lineEnd = start + tmpBounds.glyphs;
			var nextStart = lineEnd + this.newline.length;

			//if we had to cut the line before the next newline...
			if (lineEnd < newLine) {
				//find char to break on
				while (lineEnd > start) {
					if (isWhitespace(text.charAt(lineEnd)))
						break;
					lineEnd--;
				}
				if (lineEnd === start) {
					if (nextStart > start + this.newline.length) nextStart--;
					lineEnd = nextStart; // If no characters to break, show all.
				} else {
					nextStart = lineEnd;
					//eat whitespace at end of line
					while (lineEnd > start) {
						if (!isWhitespace(text.charAt(lineEnd - this.newline.length)))
							break;
						lineEnd--;
					}
				}
			}

			if (lineEnd > start) {
				//to clip, use the original wrap width (unaltered by mode)
				var availableWidth = this.clip ? wrapWidth : undefined;
				iterator.getBounds(text, start, lineEnd, availableWidth, tmpBounds);
				var lineWidth = tmpBounds.width;

				var rLineEnd = this.clip ? start+tmpBounds.glyphs : lineEnd;
				lines.push( new WordWrap.Line(start, rLineEnd, lineWidth) );
			}
			start = nextStart;

		}
	}

	iterator.end();
};

/**
 * A convenience method to return the maximum width of all current lines.
 * This is useful for aligning blocks of text.
 *
 * @method  getMaxLineWidth
 * @return {Number} the maximum width of all lines
 */
WordWrap.prototype.getMaxLineWidth = function() {
	var maxWidth = 0;
	for (var i=0; i<this.lines.length; i++) {
		var line = this.lines[i];
		maxWidth = Math.max(line.width, maxWidth);
	}
	return maxWidth;
};

/**
 * The Line object holds the start and end indices into the string,
 * and the width as computed by GlyphIterator.
 * 
 * @class  WordWrap.Line
 * @param {Number} start the start index, inclusive
 * @param {Number} end   the end index, exclusive
 * @param {Number} width the computed width of this line
 */
WordWrap.Line = function(start, end, width) {
	this.start = start;
	this.end = end;
	this.width = width;
};

module.exports = WordWrap;
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/common.js":[function(require,module,exports){
var createVAO = require('gl-aliased-vao') //TODO: improve this with gl-vao
var createBuffer = require('gl-buffer')

module.exports.floatsPerVertex = 5

function createIndices(capacity) {
    var numIndices = capacity * 6
    var indices = new Uint16Array(numIndices)

    for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
        indices[i + 0] = j + 0
        indices[i + 1] = j + 1
        indices[i + 2] = j + 2
        indices[i + 3] = j + 0
        indices[i + 4] = j + 2
        indices[i + 5] = j + 3
    }
    return indices
}

module.exports.mixins = {

    create: function create(opt) {
        opt = opt||{}
        this.clear()

        //dispose before building...
        if (this.vao)
            this.dispose()

        var capacity = typeof opt.capacity === 'number' ? opt.capacity : 100

        // 65535 is max index, so 65535 / 6 = 10922.
        if (capacity > 10922)
            throw new Error("Can't have more than 10922 quads per batch: " + capacity)

        this._capacity = capacity

        //the total number of floats in our batch
        var numVerts = capacity * 4 * module.exports.floatsPerVertex

        this.vertices = new Float32Array(numVerts)
        this.indices = createIndices(capacity)

        var gl = this.gl
        var usage = opt.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW
        this.vertexBuffer = createBuffer(gl, this.vertices, gl.ARRAY_BUFFER, usage)
        this.indexBuffer = createBuffer(gl, this.indices, gl.ELEMENT_ARRAY_BUFFER, gl.STATIC_DRAW)

        var stride = 5 * 4
        this.vao = createVAO(gl, [{ //position XY
            name: 'position',
            buffer: this.vertexBuffer,
            size: 2,
            stride: stride
        }, { //texcoord UV
            name: 'texcoord0',
            buffer: this.vertexBuffer,
            size: 2,
            offset: 2 * 4,
            stride: stride
        }, { //color (packed) C
            name: 'color',
            buffer: this.vertexBuffer,
            size: 4,
            stride: stride,
            offset: 4 * 4,
            type: gl.UNSIGNED_BYTE,
            normalized: true
        }], this.indexBuffer)
        return this
    },

    ensureCapacity: function(capacity) {
        if (this.capacity < capacity)
            this.create({ capacity: capacity })
        return this
    }
}
},{"gl-aliased-vao":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/index.js","gl-buffer":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/buffer.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/index.js":[function(require,module,exports){
var colorToFloat = require('./pack-rgba-float')
var mixes = require('mixes')
var premult = require('premultiplied-rgba')
var WhiteTex = require('gl-white-texture')

var vertNumFloats = require('./common').floatsPerVertex

//Temporary arrays to avoid GC thrashing
var position = [0, 0],
    shape = [0, 0],
    texcoord = [0, 0, 0, 0],
    color = [0, 0, 0, 0]

var tmp4 = [0, 0, 0, 0],
    rotOrigin = [0, 0],
    tmp2 = [0, 0]

function SpriteBatch(gl, opt) {
    if (!(this instanceof SpriteBatch))
        return new SpriteBatch(gl, opt)
    if (!gl)
        throw new Error("must specify gl context")
    this.gl = gl
    opt = opt || {}
    
    this._bound = false
    this.idx = 0

    //no transform means identity
    this.transform = null

    //white texture is akin to "no texture" (without switching shaders)
    this._defaultTexture = opt.defaultTexture || WhiteTex(gl)
    this._ownsDefault = !opt.defaultTexture
    this._lastTexture = this._defaultTexture
    this._texture = this._defaultTexture
    this.texture = null

    this.mode = typeof opt.mode === 'number' ? opt.mode : gl.TRIANGLES
    this.premultiplied = opt.premultiplied || false

    this._dirty = true
    this.create(opt)

    //set default attributes
    this.defaults()
}

//mix in create() and ensureCapacity() functions
mixes(SpriteBatch, require('./common').mixins)

mixes(SpriteBatch, {

    capacity: {
        get: function() {
            return this._capacity
        }
    },

    texture: {
        get: function() {
            return this._texture
        },

        set: function(tex) {
            this._texture = tex || this._defaultTexture
        }
    },

    dispose: function() {
        if (this.vertexBuffer)
            this.vertexBuffer.dispose()
        if (this.indexBuffer)
            this.indexBuffer.dispose()
        if (this.vao)
            this.vao.dispose()
        if (this._ownsDefault)
            this._defaultTexture.dispose()
    },

    clear: function() {
        this.idx = 0
        return this
    },

    bind: function(shader) {
        shader.bind()
        this.vao.bind(shader)
        this._bound = true
    },

    unbind: function() {
        this.vao.unbind()
        this._bound = false
    },

    defaults: function() {
        this.position = copy2(position, 0, 0)
        this.texcoord = copy4(texcoord, 0, 0, 1, 1)
        this.color = copy4(color, 1, 1, 1, 1)
        this.shape = copy2(shape, 0, 0)
        return this
    },

    push: function(sprite) {
        //if we are defining attributes on the fly
        if (sprite) {
            this.texture = sprite.texture
            this.position = sprite.position || copy2(position, 0, 0)
            this.texcoord = sprite.texcoord || copy4(texcoord, 0, 0, 1, 1)
            this.color = sprite.color || copy4(color, 1, 1, 1, 1)
            this.shape = sprite.shape || copy2(shape, 0, 0)
        }

        if (this.texture !== this._lastTexture) {
            //new texture, flush previous data
            if (this._bound)
                this.flush()
            this._lastTexture = this.texture
        } else if (this.idx === this.vertices.length) {
            //if we AREN'T bound, we need to stop pushing vertex data!
            if (!this._bound)
                return this

            //if we ARE bound, we can flush the batch and continue drawing
            this.flush()
        }

        this._dirty = true

        //get RGBA components and pack into a single float
        var colorRGBA = this.premultiplied ? premult(this.color, tmp4) : this.color
        var c = colorToFloat(colorRGBA)

        var u1 = this.texcoord[0],
            v1 = this.texcoord[1],
            u2 = this.texcoord[2],
            v2 = this.texcoord[3]

        var x = this.position[0],
            y = this.position[1],
            width = this.shape[0],
            height = this.shape[1]

        this._vert(x, y, u1, v1, c)
        this._vert(x+width, y, u2, v1, c)
        this._vert(x+width, y+height, u2, v2, c)
        this._vert(x, y+height, u1, v2, c)
        
        return this
    },

    _vert: function(x1, y1, u1, v1, c) {
        var idx = this.idx,
            verts = this.vertices,
            transform = this.transform

        if (transform) {
            var x = x1, y = y1
            x1 = transform[0] * x + transform[4] * y + transform[12]
            y1 = transform[1] * x + transform[5] * y + transform[13]
        }

        //xy
        verts[idx++] = x1
        verts[idx++] = y1
        //uv
        verts[idx++] = u1
        verts[idx++] = v1
        //color
        verts[idx++] = c
        this.idx = idx
    },

    flush: function() {
        this.draw()
        return this.clear()
    },

    draw: function() {
        //If we've reached a new texture or capacity
        //while not bound, then we will just clear the batch
        //to zero and draw nothing
        if (this.idx === 0 || !this._bound)
            return this

        var gl = this.gl
        
        if (this._dirty) {
            var view = this.vertices.subarray(0, this.idx)
            this.vertexBuffer.update(view, 0)
            this._dirty = false
        }

        if (this._lastTexture)
            this._lastTexture.bind()
        this._lastTexture = this.texture

        var sprites = (this.idx / (vertNumFloats * 4))
        if (sprites > 0)
            this.vao.draw(this.mode, sprites * 6, 0)
        return this
    },
})

module.exports = SpriteBatch

//TODO: will use modular gl-matrix for these...
function copy2(out, x, y) {
    out[0] = x
    out[1] = y
    return out
}

function copy4(out, x, y, z, w) {
    out[0] = x
    out[1] = y
    out[2] = z
    out[3] = w
    return out
}

function copyVec2(out, vec) {
    return copy2(out, vec[0], vec[1])
}

function transformMat4(out, a, m) {
    var x = a[0], 
        y = a[1]
    out[0] = m[0] * x + m[4] * y + m[12]
    out[1] = m[1] * x + m[5] * y + m[13]
    return out
}
},{"./common":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/common.js","./pack-rgba-float":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/pack-rgba-float.js","gl-white-texture":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/index.js","mixes":"/projects/blackice/node_modules/mixes/index.js","premultiplied-rgba":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/premultiplied-rgba/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/index.js":[function(require,module,exports){
var createVAOEmulated = require("./lib/vao-emulated.js")

function createVAO(gl, attributes, elements, elementsType) {
  var vao = createVAOEmulated(gl)
  vao.update(attributes, elements, elementsType)
  return vao
}

module.exports = createVAO
},{"./lib/vao-emulated.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/vao-emulated.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/do-bind.js":[function(require,module,exports){
function getAttributeLocation(name, shader) {
    if (!name)
        return null
    var attr = shader.attributes
    if (attr[name]) 
        return attr[name].location
    return null
}

var nattribs = null
var bound = null

function doBind(gl, elements, attributes, shader) {
    if (elements) {
        elements.bind()
    } else {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)
    }
    if (nattribs === null) {
      nattribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS) | 0
      bound = new Array(nattribs)
    }

    if (attributes) {
        if (attributes.length > nattribs) {
            throw new Error("gl-vao: Too many vertex attributes")
        }

        var lastBound = null

        for (i=0; i<nattribs; i++)
          bound[i] = false

        //now bind aliased attributes
        for (i=0; i<attributes.length; i++) {
            var attrib = attributes[i]
            var loc = getAttributeLocation(attrib.name, shader)
            if (loc === null)
                continue

            bound[loc] = true

            if(attrib.buffer) {
              var buffer = attrib.buffer
              var size = attrib.size || 4
              var type = attrib.type || gl.FLOAT
              var normalized = !!attrib.normalized
              var stride = attrib.stride || 0
              var offset = attrib.offset || 0
              if (lastBound !== buffer) {
                buffer.bind()
                lastBound = buffer
              }
              gl.enableVertexAttribArray(loc)
              gl.vertexAttribPointer(loc, size, type, normalized, stride, offset)
            } else {
              if(typeof attrib === "number") {
                gl.vertexAttrib1f(loc, attrib)
              } else if(attrib.length === 1) {
                gl.vertexAttrib1f(loc, attrib[0])
              } else if(attrib.length === 2) {
                gl.vertexAttrib2f(loc, attrib[0], attrib[1])
              } else if(attrib.length === 3) {
                gl.vertexAttrib3f(loc, attrib[0], attrib[1], attrib[2])
              } else if(attrib.length === 4) {
                gl.vertexAttrib4f(loc, attrib[0], attrib[1], attrib[2], attrib[3])
              } else {
                throw new Error("gl-vao: Invalid vertex attribute")
              }
              gl.disableVertexAttribArray(loc)
            }

        }
        
        for (i=0; i<nattribs; i++) {
          if (!bound[i])
            gl.disableVertexAttribArray(i)
        }
    } else {
      gl.bindBuffer(gl.ARRAY_BUFFER, null)
      for(var i=0; i<nattribs; ++i) {
        gl.disableVertexAttribArray(i)
      }
    }
}

module.exports = doBind
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/vao-emulated.js":[function(require,module,exports){
var bindAttribs = require("./do-bind.js")

function VAOEmulated(gl) {
  this.gl = gl
  this._elements = null
  this._attributes = null
  this._elementsType = gl.UNSIGNED_SHORT
}

VAOEmulated.prototype.bind = function(shader) {
  if (!shader)
    throw new Error('must associate shader with vertex array')
  bindAttribs(this.gl, this._elements, this._attributes, shader)
}

VAOEmulated.prototype.update = function(attributes, elements, elementsType) {
  this._elements = elements
  this._attributes = attributes
  this._elementsType = elementsType || this.gl.UNSIGNED_SHORT
}

VAOEmulated.prototype.dispose = function() { }
VAOEmulated.prototype.unbind = function() {
  bindAttribs(this.gl)
}

VAOEmulated.prototype.draw = function(mode, count, offset) {
  offset = offset || 0
  var gl = this.gl
  if(this._elements) {
    gl.drawElements(mode, count, this._elementsType, offset)
  } else {
    gl.drawArrays(mode, offset, count)
  }
}

function createVAOEmulated(gl) {
  return new VAOEmulated(gl)
}

module.exports = createVAOEmulated
},{"./do-bind.js":"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-aliased-vao/lib/do-bind.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-buffer/buffer.js":[function(require,module,exports){
"use strict"

var pool = require("typedarray-pool")
var ops = require("ndarray-ops")
var ndarray = require("ndarray")
var webglew = require("webglew")

var SUPPORTED_TYPES = [
  "uint8",
  "uint8_clamped",
  "uint16",
  "uint32",
  "int8",
  "int16",
  "int32",
  "float32" ]

function GLBuffer(gl, type, handle, length, usage) {
  this.gl = gl
  this.type = type
  this.handle = handle
  this.length = length
  this.usage = usage
}

var proto = GLBuffer.prototype

proto.bind = function() {
  this.gl.bindBuffer(this.type, this.handle)
}

proto.unbind = function() {
  this.gl.bindBuffer(this.type, null)
}

proto.dispose = function() {
  this.gl.deleteBuffer(this.handle)
}

function updateTypeArray(gl, type, len, usage, data, offset) {
  var dataLen = data.length * data.BYTES_PER_ELEMENT 
  if(offset < 0) {
    gl.bufferData(type, data, usage)
    return dataLen
  }
  if(dataLen + offset > len) {
    throw new Error("gl-buffer: If resizing buffer, must not specify offset")
  }
  gl.bufferSubData(type, offset, data)
  return len
}

function makeScratchTypeArray(array, dtype) {
  var res = pool.malloc(array.length, dtype)
  var n = array.length
  for(var i=0; i<n; ++i) {
    res[i] = array[i]
  }
  return res
}

function isPacked(shape, stride) {
  var n = 1
  for(var i=stride.length-1; i>=0; --i) {
    if(stride[i] !== n) {
      return false
    }
    n *= shape[i]
  }
  return true
}

proto.update = function(array, offset) {
  if(typeof offset !== "number") {
    offset = -1
  }
  this.bind()
  if(typeof array === "object" && typeof array.shape !== "undefined") { //ndarray
    var dtype = array.dtype
    if(SUPPORTED_TYPES.indexOf(dtype) < 0) {
      dtype = "float32"
    }
    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      var wgl = webglew(this.gl)
      var ext = wgl.OES_element_index_uint
      if(ext && dtype !== "uint16") {
        dtype = "uint32"
      } else {
        dtype = "uint16"
      }
    }
    if(dtype === array.dtype && isPacked(array.shape, array.stride)) {
      if(array.offset === 0 && array.data.length === array.shape[0]) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data, offset)
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array.data.subarray(array.offset, array.shape[0]), offset)
      }
    } else {
      var tmp = pool.malloc(array.size, dtype)
      var ndt = ndarray(tmp, array.shape)
      ops.assign(ndt, array)
      if(offset < 0) {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp, offset)  
      } else {
        this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, tmp.subarray(0, array.size), offset)  
      }
      pool.free(tmp)
    }
  } else if(Array.isArray(array)) { //Vanilla array
    var t
    if(this.type === this.gl.ELEMENT_ARRAY_BUFFER) {
      t = makeScratchTypeArray(array, "uint16")
    } else {
      t = makeScratchTypeArray(array, "float32")
    }
    if(offset < 0) {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t, offset)
    } else {
      this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, t.subarray(0, array.length), offset)
    }
    pool.free(t)
  } else if(typeof array === "object" && typeof array.length === "number") { //Typed array
    this.length = updateTypeArray(this.gl, this.type, this.length, this.usage, array, offset)
  } else if(typeof array === "number" || array === undefined) { //Number/default
    if(offset >= 0) {
      throw new Error("gl-buffer: Cannot specify offset when resizing buffer")
    }
    array = array | 0
    if(array <= 0) {
      array = 1
    }
    this.gl.bufferData(this.type, array|0, this.usage)
    this.length = array
  } else { //Error, case should not happen
    throw new Error("gl-buffer: Invalid data type")
  }
}

function createBuffer(gl, data, type, usage) {
  webglew(gl)
  type = type || gl.ARRAY_BUFFER
  usage = usage || gl.DYNAMIC_DRAW
  if(type !== gl.ARRAY_BUFFER && type !== gl.ELEMENT_ARRAY_BUFFER) {
    throw new Error("gl-buffer: Invalid type for webgl buffer, must be either gl.ARRAY_BUFFER or gl.ELEMENT_ARRAY_BUFFER")
  }
  if(usage !== gl.DYNAMIC_DRAW && usage !== gl.STATIC_DRAW && usage !== gl.STREAM_DRAW) {
    throw new Error("gl-buffer: Invalid usage for buffer, must be either gl.DYNAMIC_DRAW, gl.STATIC_DRAW or gl.STREAM_DRAW")
  }
  var handle = gl.createBuffer()
  var result = new GLBuffer(gl, type, handle, 0, usage)
  result.update(data)
  return result
}

module.exports = createBuffer
},{"ndarray":"/projects/blackice/node_modules/ndarray/ndarray.js","ndarray-ops":"/projects/blackice/node_modules/ndarray-ops/ndarray-ops.js","typedarray-pool":"/projects/blackice/node_modules/typedarray-pool/pool.js","webglew":"/projects/blackice/node_modules/webglew/webglew.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/gl-white-texture/index.js":[function(require,module,exports){
var create = require('gl-texture2d')
var ndarray = require('ndarray')

module.exports = function(gl) {
    //fill an array with 0xff
    var data = Array.apply(null, new Array(16))
            .map(Number.prototype.valueOf, 0xFF);
    //create a 2D ndarray
    var array = ndarray(new Uint8Array(data), [2, 2, 4])
    return create(gl, array)
}
},{"gl-texture2d":"/projects/blackice/node_modules/gl-texture2d/texture.js","ndarray":"/projects/blackice/node_modules/ndarray/ndarray.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/node_modules/premultiplied-rgba/index.js":[function(require,module,exports){
function premultiply(rgba, out) {
	if (!out || typeof out === 'number')
		out = [0,0,0,0]
	out[0] = rgba[0] * rgba[3]
	out[1] = rgba[1] * rgba[3]
	out[2] = rgba[2] * rgba[3]
	out[3] = rgba[3]
	return out
}
module.exports = premultiply
},{}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/gl-sprite-batch/pack-rgba-float.js":[function(require,module,exports){
var packColor = require('number-util').colorToFloat

module.exports = function colorToFloat(rgba) {
    return packColor(
        ~~(rgba[0] * 255),
        ~~(rgba[1] * 255),
        ~~(rgba[2] * 255),
        ~~(rgba[3] * 255)
    )
}
},{"number-util":"/projects/blackice/node_modules/number-util/index.js"}],"/projects/blackice/node_modules/gl-sprite-text/node_modules/texcoord/index.js":[function(require,module,exports){
module.exports = function texcoord(position, shape, texShape, out) {
    if (!out)
        out = [0, 0, 1, 1]

    position = position || [0, 0]
    shape = shape || [1, 1]

    texShape = texShape || shape

    var invWidth = 1 / texShape[0]
    var invHeight = 1 / texShape[1]
    var x = position[0],
        y = position[1],
        w = shape[0],
        h = shape[1]

    out[0] = x * invWidth
    out[1] = y * invHeight
    out[2] = (x + w) * invWidth
    out[3] = (y + h) * invHeight
    return out
}
},{}],"/projects/blackice/node_modules/gl-texture2d/texture.js":[function(require,module,exports){
'use strict'

var ndarray = require('ndarray')
var ops     = require('ndarray-ops')
var pool    = require('typedarray-pool')
var webglew = require('webglew')

module.exports = createTexture2D

var linearTypes = null
var filterTypes = null
var wrapTypes   = null

function lazyInitLinearTypes(gl) {
  linearTypes = [
    gl.LINEAR,
    gl.NEAREST_MIPMAP_LINEAR,
    gl.LINEAR_MIPMAP_NEAREST,
    gl.LINEAR_MIPMAP_NEAREST
  ]
  filterTypes = [
    gl.NEAREST,
    gl.LINEAR,
    gl.NEAREST_MIPMAP_NEAREST,
    gl.NEAREST_MIPMAP_LINEAR,
    gl.LINEAR_MIPMAP_NEAREST,
    gl.LINEAR_MIPMAP_LINEAR
  ]
  wrapTypes = [
    gl.REPEAT,
    gl.CLAMP_TO_EDGE,
    gl.MIRRORED_REPEAT
  ]
}

var convertFloatToUint8 = function(out, inp) {
  ops.muls(out, inp, 255.0)
}

function reshapeTexture(tex, w, h) {
  var gl = tex.gl
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(w < 0 || w > maxSize || h < 0 || h > maxSize) {
    throw new Error('gl-texture2d: Invalid texture size')
  }
  tex._shape = [w, h]
  tex.bind()
  gl.texImage2D(gl.TEXTURE_2D, 0, tex.format, w, h, 0, tex.format, tex.type, null)
  tex._mipLevels = [0]
  return tex
}

function Texture2D(gl, handle, width, height, format, type) {
  this.gl = gl
  this.handle = handle
  this.format = format
  this.type = type
  this._shape = [width, height]
  this._mipLevels = [0]
  this._magFilter = gl.NEAREST
  this._minFilter = gl.NEAREST
  this._wrapS = gl.CLAMP_TO_EDGE
  this._wrapT = gl.CLAMP_TO_EDGE
  this._anisoSamples = 1

  var parent = this
  var wrapVector = [this._wrapS, this._wrapT]
  Object.defineProperties(wrapVector, [
    {
      get: function() {
        return parent._wrapS
      },
      set: function(v) {
        return parent.wrapS = v
      }
    },
    {
      get: function() {
        return parent._wrapT
      },
      set: function(v) {
        return parent.wrapT = v
      }
    }
  ])
  this._wrapVector = wrapVector

  var shapeVector = [this._shape[0], this._shape[1]]
  Object.defineProperties(shapeVector, [
    {
      get: function() {
        return parent._shape[0]
      },
      set: function(v) {
        return parent.width = v
      }
    },
    {
      get: function() {
        return parent._shape[1]
      },
      set: function(v) {
        return parent.height = v
      }
    }
  ])
  this._shapeVector = shapeVector
}

var proto = Texture2D.prototype

Object.defineProperties(proto, {
  minFilter: {
    get: function() {
      return this._minFilter
    },
    set: function(v) {
      this.bind()
      var gl = this.gl
      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
        if(!webglew(gl).texture_float_linear) {
          v = gl.NEAREST
        }
      }
      if(filterTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown filter mode ' + v)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, v)
      return this._minFilter = v
    }
  },
  magFilter: {
    get: function() {
      return this._magFilter
    },
    set: function(v) {
      this.bind()
      var gl = this.gl
      if(this.type === gl.FLOAT && linearTypes.indexOf(v) >= 0) {
        if(!webglew(gl).texture_float_linear) {
          v = gl.NEAREST
        }
      }
      if(filterTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown filter mode ' + v)
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, v)
      return this._magFilter = v
    }
  },
  mipSamples: {
    get: function() {
      return this._anisoSamples
    },
    set: function(i) {
      var psamples = this._anisoSamples
      this._anisoSamples = Math.max(i, 1)|0
      if(psamples !== this._anisoSamples) {
        var ext = webglew(this.gl).EXT_texture_filter_anisotropic
        if(ext) {
          this.gl.texParameterf(this.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, this._anisoSamples)
        }
      }
      return this._anisoSamples
    }
  },
  wrapS: {
    get: function() {
      return this._wrapS
    },
    set: function(v) {
      this.bind()
      if(wrapTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, v)
      return this._wrapS = v
    }
  },
  wrapT: {
    get: function() {
      return this._wrapT
    },
    set: function(v) {
      this.bind()
      if(wrapTypes.indexOf(v) < 0) {
        throw new Error('gl-texture2d: Unknown wrap mode ' + v)
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, v)
      return this._wrapT = v
    }
  },
  wrap: {
    get: function() {
      return this._wrapVector
    },
    set: function(v) {
      if(!Array.isArray(v)) {
        v = [v,v]
      }
      if(v.length !== 2) {
        throw new Error('gl-texture2d: Must specify wrap mode for rows and columns')
      }
      for(var i=0; i<2; ++i) {
        if(wrapTypes.indexOf(v[i]) < 0) {
          throw new Error('gl-texture2d: Unknown wrap mode ' + v)
        }
      }
      this._wrapS = v[0]
      this._wrapT = v[1]

      var gl = this.gl
      this.bind()
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._wrapS)
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._wrapT)

      return v
    }
  },
  shape: {
    get: function() {
      return this._shapeVector
    }, 
    set: function(x) {
      if(!Array.isArray(x)) {
        x = [x|0,x|0]
      } else {
        if(x.length !== 2) {
          throw new Error('gl-texture2d: Invalid texture shape')
        }
      }
      reshapeTexture(this, x[0]|0, x[1]|0)
      return [x[0]|0, x[1]|0]
    }
  },
  width: {
    get: function() {
      return this._shape[0]
    },
    set: function(w) {
      w = w|0
      reshapeTexture(this, w, this._shape[1])
      return w
    }
  },
  height: {
    get: function() {
      return this._shape[1]
    },
    set: function(h) {
      h = h|0
      reshapeTexture(this, this._shape[0], h)
      return h
    }
  }
})

proto.bind = function(unit) {
  var gl = this.gl
  if(unit !== undefined) {
    gl.activeTexture(gl.TEXTURE0 + (unit|0))
  }
  gl.bindTexture(gl.TEXTURE_2D, this.handle)
  if(unit !== undefined) {
    return (unit|0)
  }
  return gl.getParameter(gl.ACTIVE_TEXTURE) - gl.TEXTURE0
}

proto.dispose = function() {
  this.gl.deleteTexture(this.handle)
}

proto.generateMipmap = function() {
  this.bind()
  this.gl.generateMipmap(this.gl.TEXTURE_2D)
  
  //Update mip levels
  var l = Math.min(this._shape[0], this._shape[1])
  for(var i=0; l>0; ++i, l>>>=1) {
    if(this._mipLevels.indexOf(i) < 0) {
      this._mipLevels.push(i)
    }
  }
}

proto.setPixels = function(data, x_off, y_off, mip_level) {
  var gl = this.gl
  this.bind()
  if(Array.isArray(x_off)) {
    mip_level = y_off
    y_off = x_off[1]|0
    x_off = x_off[0]|0
  } else {
    x_off = x_off || 0
    y_off = y_off || 0
  }
  mip_level = mip_level || 0
  if(data instanceof HTMLCanvasElement ||
     data instanceof ImageData ||
     data instanceof HTMLImageElement ||
     data instanceof HTMLVideoElement) {
    var needsMip = this._mipLevels.indexOf(mip_level) < 0
    if(needsMip) {
      gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, data)
      this._mipLevels.push(mip_level)
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, this.format, this.type, data)
    }
  } else if(data.shape && data.stride && data.data) {
    if(data.shape.length < 2 ||
       x_off + data.shape[1] > this._shape[1]>>>mip_level ||
       y_off + data.shape[0] > this._shape[0]>>>mip_level ||
       x_off < 0 ||
       y_off < 0) {
      throw new Error('gl-texture2d: Texture dimensions are out of bounds')
    }
    texSubImageArray(gl, x_off, y_off, mip_level, this.format, this.type, this._mipLevels, data)
  } else {
    throw new Error('gl-texture2d: Unsupported data type')
  }
}


function isPacked(shape, stride) {
  if(shape.length === 3) {
    return  (stride[2] === 1) && 
            (stride[1] === shape[0]*shape[2]) &&
            (stride[0] === shape[2])
  }
  return  (stride[0] === 1) && 
          (stride[1] === shape[0])
}

function texSubImageArray(gl, x_off, y_off, mip_level, cformat, ctype, mipLevels, array) {
  var dtype = array.dtype
  var shape = array.shape.slice()
  if(shape.length < 2 || shape.length > 3) {
    throw new Error('gl-texture2d: Invalid ndarray, must be 2d or 3d')
  }
  var type = 0, format = 0
  var packed = isPacked(shape, array.stride.slice())
  if(dtype === 'float32') {
    type = gl.FLOAT
  } else if(dtype === 'float64') {
    type = gl.FLOAT
    packed = false
    dtype = 'float32'
  } else if(dtype === 'uint8') {
    type = gl.UNSIGNED_BYTE
  } else {
    type = gl.UNSIGNED_BYTE
    packed = false
    dtype = 'uint8'
  }
  var channels = 1
  if(shape.length === 2) {
    format = gl.LUMINANCE
    shape = [shape[0], shape[1], 1]
    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
  } else if(shape.length === 3) {
    if(shape[2] === 1) {
      format = gl.ALPHA
    } else if(shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA
    } else if(shape[2] === 3) {
      format = gl.RGB
    } else if(shape[2] === 4) {
      format = gl.RGBA
    } else {
      throw new Error('gl-texture2d: Invalid shape for pixel coords')
    }
    channels = shape[2]
  } else {
    throw new Error('gl-texture2d: Invalid shape for texture')
  }
  //For 1-channel textures allow conversion between formats
  if((format  === gl.LUMINANCE || format  === gl.ALPHA) &&
     (cformat === gl.LUMINANCE || cformat === gl.ALPHA)) {
    format = cformat
  }
  if(format !== cformat) {
    throw new Error('gl-texture2d: Incompatible texture format for setPixels')
  }
  var size = array.size
  var needsMip = mipLevels.indexOf(mip_level) < 0
  if(needsMip) {
    mipLevels.push(mip_level)
  }
  if(type === ctype && packed) {
    //Array data types are compatible, can directly copy into texture
    if(array.offset === 0 && array.data.length === size) {
      if(needsMip) {
        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data)
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data)
      }
    } else {
      if(needsMip) {
        gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, array.data.subarray(array.offset, array.offset+size))
      } else {
        gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, array.data.subarray(array.offset, array.offset+size))
      }
    }
  } else {
    //Need to do type conversion to pack data into buffer
    var pack_buffer
    if(ctype === gl.FLOAT) {
      pack_buffer = pool.mallocFloat32(size)
    } else {
      pack_buffer = pool.mallocUint8(size)
    }
    var pack_view = ndarray(pack_buffer, shape, [shape[2], shape[2]*shape[0], 1])
    if(type === gl.FLOAT && ctype === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(pack_view, array)
    } else {
      ops.assign(pack_view, array)
    }
    if(needsMip) {
      gl.texImage2D(gl.TEXTURE_2D, mip_level, cformat, shape[0], shape[1], 0, cformat, ctype, pack_buffer.subarray(0, size))
    } else {
      gl.texSubImage2D(gl.TEXTURE_2D, mip_level, x_off, y_off, shape[0], shape[1], cformat, ctype, pack_buffer.subarray(0, size))
    }
    if(ctype === gl.FLOAT) {
      pool.freeFloat32(pack_buffer)
    } else {
      pool.freeUint8(pack_buffer)
    }
  }
}

function initTexture(gl) {
  var tex = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, tex)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  return tex
}

function createTextureShape(gl, width, height, format, type) {
  var maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(width < 0 || width > maxTextureSize || height < 0 || height  > maxTextureSize) {
    throw new Error('gl-texture2d: Invalid texture shape')
  }
  if(type === gl.FLOAT && !webglew(gl).texture_float) {
    throw new Error('gl-texture2d: Floating point textures not supported on this platform')
  }
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, 0, format, type, null)
  return new Texture2D(gl, tex, width, height, format, type)
}

function createTextureDOM(gl, element, format, type) {
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, format, type, element)
  return new Texture2D(gl, tex, element.width|0, element.height|0, format, type)
}

//Creates a texture from an ndarray
function createTextureArray(gl, array) {
  var dtype = array.dtype
  var shape = array.shape.slice()
  var maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE)
  if(shape[0] < 0 || shape[0] > maxSize || shape[1] < 0 || shape[1] > maxSize) {
    throw new Error('gl-texture2d: Invalid texture size')
  }
  var packed = isPacked(shape, array.stride.slice())
  var type = 0
  if(dtype === 'float32') {
    type = gl.FLOAT
  } else if(dtype === 'float64') {
    type = gl.FLOAT
    packed = false
    dtype = 'float32'
  } else if(dtype === 'uint8') {
    type = gl.UNSIGNED_BYTE
  } else {
    type = gl.UNSIGNED_BYTE
    packed = false
    dtype = 'uint8'
  }
  var format = 0
  if(shape.length === 2) {
    format = gl.LUMINANCE
    shape = [shape[0], shape[1], 1]
    array = ndarray(array.data, shape, [array.stride[0], array.stride[1], 1], array.offset)
  } else if(shape.length === 3) {
    if(shape[2] === 1) {
      format = gl.ALPHA
    } else if(shape[2] === 2) {
      format = gl.LUMINANCE_ALPHA
    } else if(shape[2] === 3) {
      format = gl.RGB
    } else if(shape[2] === 4) {
      format = gl.RGBA
    } else {
      throw new Error('gl-texture2d: Invalid shape for pixel coords')
    }
  } else {
    throw new Error('gl-texture2d: Invalid shape for texture')
  }
  if(type === gl.FLOAT && !webglew(gl).texture_float) {
    type = gl.UNSIGNED_BYTE
    packed = false
  }
  var buffer, buf_store
  var size = array.size
  if(!packed) {
    var stride = [shape[2], shape[2]*shape[0], 1]
    buf_store = pool.malloc(size, dtype)
    var buf_array = ndarray(buf_store, shape, stride, 0)
    if((dtype === 'float32' || dtype === 'float64') && type === gl.UNSIGNED_BYTE) {
      convertFloatToUint8(buf_array, array)
    } else {
      ops.assign(buf_array, array)
    }
    buffer = buf_store.subarray(0, size)
  } else if (array.offset === 0 && array.data.length === size) {
    buffer = array.data
  } else {
    buffer = array.data.subarray(array.offset, array.offset + size)
  }
  var tex = initTexture(gl)
  gl.texImage2D(gl.TEXTURE_2D, 0, format, shape[0], shape[1], 0, format, type, buffer)
  if(!packed) {
    pool.free(buf_store)
  }
  return new Texture2D(gl, tex, shape[0], shape[1], format, type)
}

function createTexture2D(gl) {
  if(arguments.length <= 1) {
    throw new Error('gl-texture2d: Missing arguments for texture2d constructor')
  }
  if(!linearTypes) {
    lazyInitLinearTypes(gl)
  }
  if(typeof arguments[1] === 'number') {
    return createTextureShape(gl, arguments[1], arguments[2], arguments[3]||gl.RGBA, arguments[4]||gl.UNSIGNED_BYTE)
  }
  if(Array.isArray(arguments[1])) {
    return createTextureShape(gl, arguments[1][0]|0, arguments[1][1]|0, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
  }
  if(typeof arguments[1] === 'object') {
    var obj = arguments[1]
    if(obj instanceof HTMLCanvasElement ||
       obj instanceof HTMLImageElement ||
       obj instanceof HTMLVideoElement ||
       obj instanceof ImageData) {
      return createTextureDOM(gl, obj, arguments[2]||gl.RGBA, arguments[3]||gl.UNSIGNED_BYTE)
    } else if(obj.shape && obj.data && obj.stride) {
      return createTextureArray(gl, obj)
    }
  }
  throw new Error('gl-texture2d: Invalid arguments for texture2d constructor')
}

},{"ndarray":"/projects/blackice/node_modules/ndarray/ndarray.js","ndarray-ops":"/projects/blackice/node_modules/ndarray-ops/ndarray-ops.js","typedarray-pool":"/projects/blackice/node_modules/typedarray-pool/pool.js","webglew":"/projects/blackice/node_modules/webglew/webglew.js"}],"/projects/blackice/node_modules/gl-vec3/set.js":[function(require,module,exports){
module.exports = set;

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}
},{}],"/projects/blackice/node_modules/glslify/adapter.js":[function(require,module,exports){
module.exports = programify

var shader = require('gl-shader-core')

function programify(vertex, fragment, uniforms, attributes) {
  return function(gl) {
    return shader(gl, vertex, fragment, uniforms, attributes)
  }
}

},{"gl-shader-core":"/projects/blackice/node_modules/gl-shader-core/shader-core.js"}],"/projects/blackice/node_modules/glslify/browser.js":[function(require,module,exports){
module.exports = noop

function noop() {
  throw new Error(
      'You should bundle your code ' +
      'using `glslify` as a transform.'
  )
}

},{}],"/projects/blackice/node_modules/glslify/simple-adapter.js":[function(require,module,exports){
module.exports = programify

function programify(vertex, fragment, uniforms, attributes) {
  return {
    vertex: vertex, 
    fragment: fragment,
    uniforms: uniforms, 
    attributes: attributes
  };
}

},{}],"/projects/blackice/node_modules/img/index.js":[function(require,module,exports){
module.exports = img;

function img (src, opt, callback) {
  if (typeof opt === 'function') {
    callback = opt
    opt = null
  }


  var el = document.createElement('img');
  var locked;

  el.onload = function () {
    if (locked) return;
    locked = true;

    callback && callback(undefined, el);
  };

  el.onerror = function (err) {
    if (locked) return;
    locked = true;

    callback && callback(new Error('Unable to load "' + src + '"'), el);
  };
  
  if (opt && opt.crossOrigin)
    el.crossOrigin = opt.crossOrigin;

  el.src = src;

  return el;
}

},{}],"/projects/blackice/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/projects/blackice/node_modules/lerp/index.js":[function(require,module,exports){
function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}
module.exports = lerp
},{}],"/projects/blackice/node_modules/mixes/index.js":[function(require,module,exports){
var xtend = require('xtend')

var defaults = {
	enumerable: true,
	configurable: true
}

function mix(obj, entries) {
	for (var k in entries) {
		if (!entries.hasOwnProperty(k))
			continue
		var f = entries[k]
		if (typeof f === 'function') {
			obj[k] = f
		} else if (f && typeof f === 'object') {
			var def = xtend(defaults, f)
			Object.defineProperty(obj, k, def);
		}
	}
}

module.exports = function mixes(ctor, entries) {
	mix(ctor.prototype, entries)
}

module.exports.mix = mix
},{"xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/node_modules/ndarray-ops/ndarray-ops.js":[function(require,module,exports){
"use strict"

var compile = require("cwise-compiler")

var EmptyProc = {
  body: "",
  args: [],
  thisVars: [],
  localVars: []
}

function fixup(x) {
  if(!x) {
    return EmptyProc
  }
  for(var i=0; i<x.args.length; ++i) {
    var a = x.args[i]
    if(i === 0) {
      x.args[i] = {name: a, lvalue:true, rvalue: !!x.rvalue, count:x.count||1 }
    } else {
      x.args[i] = {name: a, lvalue:false, rvalue:true, count: 1}
    }
  }
  if(!x.thisVars) {
    x.thisVars = []
  }
  if(!x.localVars) {
    x.localVars = []
  }
  return x
}

function pcompile(user_args) {
  return compile({
    args:     user_args.args,
    pre:      fixup(user_args.pre),
    body:     fixup(user_args.body),
    post:     fixup(user_args.proc),
    funcName: user_args.funcName
  })
}

function makeOp(user_args) {
  var args = []
  for(var i=0; i<user_args.args.length; ++i) {
    args.push("a"+i)
  }
  var wrapper = new Function("P", [
    "return function ", user_args.funcName, "_ndarrayops(", args.join(","), ") {P(", args.join(","), ");return a0}"
  ].join(""))
  return wrapper(pcompile(user_args))
}

var assign_ops = {
  add:  "+",
  sub:  "-",
  mul:  "*",
  div:  "/",
  mod:  "%",
  band: "&",
  bor:  "|",
  bxor: "^",
  lshift: "<<",
  rshift: ">>",
  rrshift: ">>>"
}
;(function(){
  for(var id in assign_ops) {
    var op = assign_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a","b","c"],
             body: "a=b"+op+"c"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array","array"],
      body: {args:["a","b"],
             body:"a"+op+"=b"},
      rvalue: true,
      funcName: id+"eq"
    })
    exports[id+"s"] = makeOp({
      args: ["array", "array", "scalar"],
      body: {args:["a","b","s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"seq"] = makeOp({
      args: ["array","scalar"],
      body: {args:["a","s"],
             body:"a"+op+"=s"},
      rvalue: true,
      funcName: id+"seq"
    })
  }
})();

var unary_ops = {
  not: "!",
  bnot: "~",
  neg: "-",
  recip: "1.0/"
}
;(function(){
  for(var id in unary_ops) {
    var op = unary_ops[id]
    exports[id] = makeOp({
      args: ["array", "array"],
      body: {args:["a","b"],
             body:"a="+op+"b"},
      funcName: id
    })
    exports[id+"eq"] = makeOp({
      args: ["array"],
      body: {args:["a"],
             body:"a="+op+"a"},
      rvalue: true,
      count: 2,
      funcName: id+"eq"
    })
  }
})();

var binary_ops = {
  and: "&&",
  or: "||",
  eq: "===",
  neq: "!==",
  lt: "<",
  gt: ">",
  leq: "<=",
  geq: ">="
}
;(function() {
  for(var id in binary_ops) {
    var op = binary_ops[id]
    exports[id] = makeOp({
      args: ["array","array","array"],
      body: {args:["a", "b", "c"],
             body:"a=b"+op+"c"},
      funcName: id
    })
    exports[id+"s"] = makeOp({
      args: ["array","array","scalar"],
      body: {args:["a", "b", "s"],
             body:"a=b"+op+"s"},
      funcName: id+"s"
    })
    exports[id+"eq"] = makeOp({
      args: ["array", "array"],
      body: {args:["a", "b"],
             body:"a=a"+op+"b"},
      rvalue:true,
      count:2,
      funcName: id+"eq"
    })
    exports[id+"seq"] = makeOp({
      args: ["array", "scalar"],
      body: {args:["a","s"],
             body:"a=a"+op+"s"},
      rvalue:true,
      count:2,
      funcName: id+"seq"
    })
  }
})();

var math_unary = [
  "abs",
  "acos",
  "asin",
  "atan",
  "ceil",
  "cos",
  "exp",
  "floor",
  "log",
  "round",
  "sin",
  "sqrt",
  "tan"
]
;(function() {
  for(var i=0; i<math_unary.length; ++i) {
    var f = math_unary[i]
    exports[f] = makeOp({
                    args: ["array", "array"],
                    pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                    body: {args:["a","b"], body:"a=this_f(b)", thisVars:["this_f"]},
                    funcName: f
                  })
    exports[f+"eq"] = makeOp({
                      args: ["array"],
                      pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                      body: {args: ["a"], body:"a=this_f(a)", thisVars:["this_f"]},
                      rvalue: true,
                      count: 2,
                      funcName: f+"eq"
                    })
  }
})();

var math_comm = [
  "max",
  "min",
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_comm.length; ++i) {
    var f= math_comm[i]
    exports[f] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f
                })
    exports[f+"s"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(b,c)", thisVars:["this_f"]},
                  funcName: f+"s"
                  })
    exports[f+"eq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"eq"
                  })
    exports[f+"seq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(a,b)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"seq"
                  })
  }
})();

var math_noncomm = [
  "atan2",
  "pow"
]
;(function(){
  for(var i=0; i<math_noncomm.length; ++i) {
    var f= math_noncomm[i]
    exports[f+"op"] = makeOp({
                  args:["array", "array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"op"
                })
    exports[f+"ops"] = makeOp({
                  args:["array", "array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b","c"], body:"a=this_f(c,b)", thisVars:["this_f"]},
                  funcName: f+"ops"
                  })
    exports[f+"opeq"] = makeOp({ args:["array", "array"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue: true,
                  count: 2,
                  funcName: f+"opeq"
                  })
    exports[f+"opseq"] = makeOp({ args:["array", "scalar"],
                  pre: {args:[], body:"this_f=Math."+f, thisVars:["this_f"]},
                  body: {args:["a","b"], body:"a=this_f(b,a)", thisVars:["this_f"]},
                  rvalue:true,
                  count:2,
                  funcName: f+"opseq"
                  })
  }
})();

exports.any = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "if(a){return true}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return false"},
  funcName: "any"
})

exports.all = compile({
  args:["array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1}], body: "if(!x){return false}", localVars: [], thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "all"
})

exports.sum = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s+=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "sum"
})

exports.prod = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=1"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:1}], body: "this_s*=a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "prod"
})

exports.norm2squared = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm2squared"
})
  
exports.norm2 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:2}], body: "this_s+=a*a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return Math.sqrt(this_s)"},
  funcName: "norm2"
})
  

exports.norminf = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:4}], body:"if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norminf"
})

exports.norm1 = compile({
  args:["array"],
  pre: {args:[], localVars:[], thisVars:["this_s"], body:"this_s=0"},
  body: {args:[{name:"a", lvalue:false, rvalue:true, count:3}], body: "this_s+=a<0?-a:a", localVars: [], thisVars: ["this_s"]},
  post: {args:[], localVars:[], thisVars:["this_s"], body:"return this_s"},
  funcName: "norm1"
})

exports.sup = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=-Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.inf = compile({
  args: [ "array" ],
  pre:
   { body: "this_h=Infinity",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] },
  body:
   { body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
     args: [{"name":"_inline_1_arg0_","lvalue":false,"rvalue":true,"count":2} ],
     thisVars: [ "this_h" ],
     localVars: [] },
  post:
   { body: "return this_h",
     args: [],
     thisVars: [ "this_h" ],
     localVars: [] }
 })

exports.argmin = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})

exports.argmax = compile({
  args:["index","array","shape"],
  pre:{
    body:"{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
    args:[
      {name:"_inline_0_arg0_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg1_",lvalue:false,rvalue:false,count:0},
      {name:"_inline_0_arg2_",lvalue:false,rvalue:true,count:1}
      ],
    thisVars:["this_i","this_v"],
    localVars:[]},
  body:{
    body:"{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
    args:[
      {name:"_inline_1_arg0_",lvalue:false,rvalue:true,count:2},
      {name:"_inline_1_arg1_",lvalue:false,rvalue:true,count:2}],
    thisVars:["this_i","this_v"],
    localVars:["_inline_1_k"]},
  post:{
    body:"{return this_i}",
    args:[],
    thisVars:["this_i"],
    localVars:[]}
})  

exports.random = makeOp({
  args: ["array"],
  pre: {args:[], body:"this_f=Math.random", thisVars:["this_f"]},
  body: {args: ["a"], body:"a=this_f()", thisVars:["this_f"]},
  funcName: "random"
})

exports.assign = makeOp({
  args:["array", "array"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assign" })

exports.assigns = makeOp({
  args:["array", "scalar"],
  body: {args:["a", "b"], body:"a=b"},
  funcName: "assigns" })


exports.equals = compile({
  args:["array", "array"],
  pre: EmptyProc,
  body: {args:[{name:"x", lvalue:false, rvalue:true, count:1},
               {name:"y", lvalue:false, rvalue:true, count:1}], 
        body: "if(x!==y){return false}", 
        localVars: [], 
        thisVars: []},
  post: {args:[], localVars:[], thisVars:[], body:"return true"},
  funcName: "equals"
})



},{"cwise-compiler":"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/compiler.js"}],"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/compiler.js":[function(require,module,exports){
"use strict"

var createThunk = require("./lib/thunk.js")

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()
  
  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array") {
      proc.arrayArgs.push(i)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }
  
  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }
  
  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug
  
  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"
  
  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

module.exports = compileCwise

},{"./lib/thunk.js":"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/thunk.js"}],"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/compile.js":[function(require,module,exports){
"use strict"

var uniq = require("uniq")

function innerFill(order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , has_index = proc.indexArgs.length>0
    , code = []
    , vars = []
    , idx=0, pidx=0, i, j
  for(i=0; i<dimension; ++i) {
    vars.push(["i",i,"=0"].join(""))
  }
  //Compute scan deltas
  for(j=0; j<nargs; ++j) {
    for(i=0; i<dimension; ++i) {
      pidx = idx
      idx = order[i]
      if(i === 0) {
        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
      } else {
        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
      }
    }
  }
  code.push("var " + vars.join(","))
  //Scan loop
  for(i=dimension-1; i>=0; --i) {
    idx = order[i]
    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
  }
  //Push body of inner loop
  code.push(body)
  //Advance scan pointers
  for(i=0; i<dimension; ++i) {
    pidx = idx
    idx = order[i]
    for(j=0; j<nargs; ++j) {
      code.push(["p",j,"+=d",j,"s",i].join(""))
    }
    if(has_index) {
      if(i > 0) {
        code.push(["index[",pidx,"]-=s",pidx].join(""))
      }
      code.push(["++index[",idx,"]"].join(""))
    }
    code.push("}")
  }
  return code.join("\n")
}

function outerFill(matched, order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , blockSize = proc.blockSize
    , has_index = proc.indexArgs.length > 0
    , code = []
  for(var i=0; i<nargs; ++i) {
    code.push(["var offset",i,"=p",i].join(""))
  }
  //Generate matched loops
  for(var i=matched; i<dimension; ++i) {
    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join(""))
    code.push(["if(j",i,"<",blockSize,"){"].join(""))
    code.push(["s",order[i],"=j",i].join(""))
    code.push(["j",i,"=0"].join(""))
    code.push(["}else{s",order[i],"=",blockSize].join(""))
    code.push(["j",i,"-=",blockSize,"}"].join(""))
    if(has_index) {
      code.push(["index[",order[i],"]=j",i].join(""))
    }
  }
  for(var i=0; i<nargs; ++i) {
    var indexStr = ["offset"+i]
    for(var j=matched; j<dimension; ++j) {
      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
    }
    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
  }
  code.push(innerFill(order, proc, body))
  for(var i=matched; i<dimension; ++i) {
    code.push("}")
  }
  return code.join("\n")
}

//Count the number of compatible inner orders
function countMatches(orders) {
  var matched = 0, dimension = orders[0].length
  while(matched < dimension) {
    for(var j=1; j<orders.length; ++j) {
      if(orders[j][matched] !== orders[0][matched]) {
        return matched
      }
    }
    ++matched
  }
  return matched
}

//Processes a block according to the given data types
function processBlock(block, proc, dtypes) {
  var code = block.body
  var pre = []
  var post = []
  for(var i=0; i<block.args.length; ++i) {
    var carg = block.args[i]
    if(carg.count <= 0) {
      continue
    }
    var re = new RegExp(carg.name, "g")
    var ptrStr = ""
    var arrNum = proc.arrayArgs.indexOf(i)
    switch(proc.argTypes[i]) {
      case "offset":
        var offArgIndex = proc.offsetArgIndex.indexOf(i)
        var offArg = proc.offsetArgs[offArgIndex]
        arrNum = offArg.array
        ptrStr = "+q" + offArgIndex
      case "array":
        ptrStr = "p" + arrNum + ptrStr
        var localStr = "l" + i
        var arrStr = "a" + arrNum
        if(carg.count === 1) {
          if(dtypes[arrNum] === "generic") {
            if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join(""))
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }
          } else {
            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
          }
        } else if(dtypes[arrNum] === "generic") {
          pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join(""))
          code = code.replace(re, localStr)
          if(carg.lvalue) {
            post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
          }
        } else {
          pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join(""))
          code = code.replace(re, localStr)
          if(carg.lvalue) {
            post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
          }
        }
      break
      case "scalar":
        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
      break
      case "index":
        code = code.replace(re, "index")
      break
      case "shape":
        code = code.replace(re, "shape")
      break
    }
  }
  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
}

function typeSummary(dtypes) {
  var summary = new Array(dtypes.length)
  var allEqual = true
  for(var i=0; i<dtypes.length; ++i) {
    var t = dtypes[i]
    var digits = t.match(/\d+/)
    if(!digits) {
      digits = ""
    } else {
      digits = digits[0]
    }
    if(t.charAt(0) === 0) {
      summary[i] = "u" + t.charAt(1) + digits
    } else {
      summary[i] = t.charAt(0) + digits
    }
    if(i > 0) {
      allEqual = allEqual && summary[i] === summary[i-1]
    }
  }
  if(allEqual) {
    return summary[0]
  }
  return summary.join("")
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {

  //Compute dimension
  var dimension = typesig[1].length|0
  var orders = new Array(proc.arrayArgs.length)
  var dtypes = new Array(proc.arrayArgs.length)

  //First create arguments for procedure
  var arglist = ["SS"]
  var code = ["'use strict'"]
  var vars = []
  
  for(var j=0; j<dimension; ++j) {
    vars.push(["s", j, "=SS[", j, "]"].join(""))
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    arglist.push("a"+i)
    arglist.push("t"+i)
    arglist.push("p"+i)
    dtypes[i] = typesig[2*i]
    orders[i] = typesig[2*i+1]
    
    for(var j=0; j<dimension; ++j) {
      vars.push(["t",i,"p",j,"=t",i,"[",j,"]"].join(""))
    }
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    arglist.push("Y" + i)
  }
  if(proc.shapeArgs.length > 0) {
    vars.push("shape=SS.slice(0)")
  }
  if(proc.indexArgs.length > 0) {
    var zeros = new Array(dimension)
    for(var i=0; i<dimension; ++i) {
      zeros[i] = "0"
    }
    vars.push(["index=[", zeros.join(","), "]"].join(""))
  }
  for(var i=0; i<proc.offsetArgs.length; ++i) {
    var off_arg = proc.offsetArgs[i]
    var init_string = []
    for(var j=0; j<off_arg.offset.length; ++j) {
      if(off_arg.offset[j] === 0) {
        continue
      } else if(off_arg.offset[j] === 1) {
        init_string.push(["t", off_arg.array, "p", j].join(""))      
      } else {
        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
      }
    }
    if(init_string.length === 0) {
      vars.push("q" + i + "=0")
    } else {
      vars.push(["q", i, "=", init_string.join("+")].join(""))
    }
  }

  //Prepare this variables
  var thisVars = uniq([].concat(proc.pre.thisVars)
                      .concat(proc.body.thisVars)
                      .concat(proc.post.thisVars))
  vars = vars.concat(thisVars)
  code.push("var " + vars.join(","))
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    code.push("p"+i+"|=0")
  }
  
  //Inline prelude
  if(proc.pre.body.length > 3) {
    code.push(processBlock(proc.pre, proc, dtypes))
  }

  //Process body
  var body = processBlock(proc.body, proc, dtypes)
  var matched = countMatches(orders)
  if(matched < dimension) {
    code.push(outerFill(matched, orders[0], proc, body))
  } else {
    code.push(innerFill(orders[0], proc, body))
  }

  //Inline epilog
  if(proc.post.body.length > 3) {
    code.push(processBlock(proc.post, proc, dtypes))
  }
  
  if(proc.debug) {
    console.log("Generated cwise routine for ", typesig, ":\n\n", code.join("\n"))
  }
  
  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
  return f()
}
module.exports = generateCWiseOp
},{"uniq":"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/node_modules/uniq/uniq.js"}],"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/thunk.js":[function(require,module,exports){
"use strict"

var compile = require("./compile.js")

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"
  
  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape"].join("")]
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))
  
  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("Generated thunk:", code.join("\n"))
  }
  
  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

module.exports = createThunk

},{"./compile.js":"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/lib/compile.js"}],"/projects/blackice/node_modules/ndarray-ops/node_modules/cwise-compiler/node_modules/uniq/uniq.js":[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}],"/projects/blackice/node_modules/ndarray/ndarray.js":[function(require,module,exports){
(function (Buffer){
var iota = require("iota-array")

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")
var hasBuffer       = ((typeof Buffer) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")
  
  if(dimension === -1) {
    //Special case for trivial arrays
    var code = 
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]
    
  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)
  
  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }
  
  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }
  
  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }
  
  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")
  
  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")
  
  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")
  
  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")
  
  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")
    
  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(hasBuffer) {
    if(Buffer.isBuffer(data)) {
      return "buffer"
    }
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor
}).call(this,require("buffer").Buffer)

},{"buffer":"/projects/blackice/node_modules/browserify/node_modules/buffer/index.js","iota-array":"/projects/blackice/node_modules/ndarray/node_modules/iota-array/iota.js"}],"/projects/blackice/node_modules/ndarray/node_modules/iota-array/iota.js":[function(require,module,exports){
"use strict"

function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota
},{}],"/projects/blackice/node_modules/number-util/index.js":[function(require,module,exports){
var int8 = new Int8Array(4);
var int32 = new Int32Array(int8.buffer, 0, 1);
var float32 = new Float32Array(int8.buffer, 0, 1);

/**
 * A singleton for number utilities. 
 * @class NumberUtil
 */
var NumberUtil = function() {

};


/**
 * Returns a float representation of the given int bits. ArrayBuffer
 * is used for the conversion.
 *
 * @method  intBitsToFloat
 * @static
 * @param  {Number} i the int to cast
 * @return {Number}   the float
 */
NumberUtil.intBitsToFloat = function(i) {
	int32[0] = i;
	return float32[0];
};

/**
 * Returns the int bits from the given float. ArrayBuffer is used
 * for the conversion.
 *
 * @method  floatToIntBits
 * @static
 * @param  {Number} f the float to cast
 * @return {Number}   the int bits
 */
NumberUtil.floatToIntBits = function(f) {
	float32[0] = f;
	return int32[0];
};

/**
 * Encodes ABGR int as a float, with slight precision loss.
 *
 * @method  intToFloatColor
 * @static
 * @param {Number} value an ABGR packed integer
 */
NumberUtil.intToFloatColor = function(value) {
	return NumberUtil.intBitsToFloat( value & 0xfeffffff );
};

/**
 * Returns a float encoded ABGR value from the given RGBA
 * bytes (0 - 255). Useful for saving bandwidth in vertex data.
 *
 * @method  colorToFloat
 * @static
 * @param {Number} r the Red byte (0 - 255)
 * @param {Number} g the Green byte (0 - 255)
 * @param {Number} b the Blue byte (0 - 255)
 * @param {Number} a the Alpha byte (0 - 255)
 * @return {Float32}  a Float32 of the RGBA color
 */
NumberUtil.colorToFloat = function(r, g, b, a) {
	var bits = (a << 24 | b << 16 | g << 8 | r);
	return NumberUtil.intToFloatColor(bits);
};

/**
 * Returns true if the number is a power-of-two.
 *
 * @method  isPowerOfTwo
 * @param  {Number}  n the number to test
 * @return {Boolean}   true if power-of-two
 */
NumberUtil.isPowerOfTwo = function(n) {
	return (n & (n - 1)) === 0;
};

/**
 * Returns the next highest power-of-two from the specified number. 
 * 
 * @param  {Number} n the number to test
 * @return {Number}   the next highest power of two
 */
NumberUtil.nextPowerOfTwo = function(n) {
	n--;
	n |= n >> 1;
	n |= n >> 2;
	n |= n >> 4;
	n |= n >> 8;
	n |= n >> 16;
	return n+1;
};

module.exports = NumberUtil;
},{}],"/projects/blackice/node_modules/plucker/index.js":[function(require,module,exports){
module.exports = plucker

function plucker(path, object) {
  return arguments.length >= 2
    ? pluck(path)(object)
    : pluck(path)
}

function pluck(path) {
  path = typeof path === 'string'
    ? String(path).trim().split('.')
    : path

  if (path.length < 2) {
    path = path[0]
    return pluckSingle
  } else {
    var l = path.length
    return pluckPath
  }

  function pluckSingle(object) {
    return object[path]
  }

  function pluckPath(object) {
    for (var i = 0; i < l; i++) {
      if (typeof object === 'undefined') break

      object = object[path[i]]
    }

    return object
  }
}

},{}],"/projects/blackice/node_modules/raf.js/raf.js":[function(require,module,exports){
/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

(function(window) {
	var lastTime = 0,
		vendors = ['webkit', 'moz'],
		requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		i = vendors.length;

	// try to un-prefix existing raf
	while (--i >= 0 && !requestAnimationFrame) {
		requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
	}

	// polyfill with setTimeout fallback
	// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
	if (!requestAnimationFrame || !cancelAnimationFrame) {
		requestAnimationFrame = function(callback) {
			var now = +new Date(), nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};

		cancelAnimationFrame = clearTimeout;
	}

	// export to window
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
}(window));

},{}],"/projects/blackice/node_modules/randf/index.js":[function(require,module,exports){
function random(start, end) {
    var n0 = typeof start === 'number',
        n1 = typeof end === 'number'

    if (n0 && !n1) {
        end = start
        start = 0
    } else if (!n0 && !n1) {
        start = 0
        end = 1
    }
    return start + Math.random() * (end - start)
}

module.exports = random
},{}],"/projects/blackice/node_modules/smoothstep/index.js":[function(require,module,exports){
module.exports = function smoothstep (min, max, value) {
  var x = Math.max(0, Math.min(1, (value-min)/(max-min)));
  return x*x*(3 - 2*x);
};

},{}],"/projects/blackice/node_modules/three-effectcomposer/index.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  var CopyShader = EffectComposer.CopyShader = require('three-copyshader')
    , RenderPass = EffectComposer.RenderPass = require('./lib/renderpass')(THREE)
    , ShaderPass = EffectComposer.ShaderPass = require('./lib/shaderpass')(THREE, EffectComposer)
    , MaskPass = EffectComposer.MaskPass = require('./lib/maskpass')(THREE)
    , ClearMaskPass = EffectComposer.ClearMaskPass = require('./lib/clearmaskpass')(THREE)

  function EffectComposer( renderer, renderTarget ) {
    this.renderer = renderer;

    if ( renderTarget === undefined ) {
      var width = window.innerWidth || 1;
      var height = window.innerHeight || 1;
      var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

      renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );
    }

    this.renderTarget1 = renderTarget;
    this.renderTarget2 = renderTarget.clone();

    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;

    this.passes = [];

    this.copyPass = new ShaderPass( CopyShader );
  };

  EffectComposer.prototype = {
    swapBuffers: function() {

      var tmp = this.readBuffer;
      this.readBuffer = this.writeBuffer;
      this.writeBuffer = tmp;

    },

    addPass: function ( pass ) {

      this.passes.push( pass );

    },

    insertPass: function ( pass, index ) {

      this.passes.splice( index, 0, pass );

    },

    render: function ( delta ) {

      this.writeBuffer = this.renderTarget1;
      this.readBuffer = this.renderTarget2;

      var maskActive = false;

      var pass, i, il = this.passes.length;

      for ( i = 0; i < il; i ++ ) {

        pass = this.passes[ i ];

        if ( !pass.enabled ) continue;

        pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

        if ( pass.needsSwap ) {

          if ( maskActive ) {

            var context = this.renderer.context;

            context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

            this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

            context.stencilFunc( context.EQUAL, 1, 0xffffffff );

          }

          this.swapBuffers();

        }

        if ( pass instanceof MaskPass ) {

          maskActive = true;

        } else if ( pass instanceof ClearMaskPass ) {

          maskActive = false;

        }

      }

    },

    reset: function ( renderTarget ) {

      if ( renderTarget === undefined ) {

        renderTarget = this.renderTarget1.clone();

        renderTarget.width = window.innerWidth;
        renderTarget.height = window.innerHeight;

      }

      this.renderTarget1 = renderTarget;
      this.renderTarget2 = renderTarget.clone();

      this.writeBuffer = this.renderTarget1;
      this.readBuffer = this.renderTarget2;

    },

    setSize: function ( width, height ) {

      var renderTarget = this.renderTarget1.clone();

      renderTarget.width = width;
      renderTarget.height = height;

      this.reset( renderTarget );

    }

  };

  // shared ortho camera

  EffectComposer.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );

  EffectComposer.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );

  EffectComposer.scene = new THREE.Scene();
  EffectComposer.scene.add( EffectComposer.quad );

  return EffectComposer
};
},{"./lib/clearmaskpass":"/projects/blackice/node_modules/three-effectcomposer/lib/clearmaskpass.js","./lib/maskpass":"/projects/blackice/node_modules/three-effectcomposer/lib/maskpass.js","./lib/renderpass":"/projects/blackice/node_modules/three-effectcomposer/lib/renderpass.js","./lib/shaderpass":"/projects/blackice/node_modules/three-effectcomposer/lib/shaderpass.js","three-copyshader":"/projects/blackice/node_modules/three-effectcomposer/node_modules/three-copyshader/index.js"}],"/projects/blackice/node_modules/three-effectcomposer/lib/clearmaskpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  function ClearMaskPass() {
    if (!(this instanceof ClearMaskPass)) return new ClearMaskPass(scene, camera);
    this.enabled = true;
  };

  ClearMaskPass.prototype = {
    render: function ( renderer, writeBuffer, readBuffer, delta ) {
      var context = renderer.context;
      context.disable( context.STENCIL_TEST );
    }
  };

  return ClearMaskPass
};
},{}],"/projects/blackice/node_modules/three-effectcomposer/lib/maskpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  function MaskPass( scene, camera ) {
    if (!(this instanceof MaskPass)) return new MaskPass(scene, camera);

    this.scene = scene;
    this.camera = camera;

    this.enabled = true;
    this.clear = true;
    this.needsSwap = false;

    this.inverse = false;
  };

  MaskPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

      var context = renderer.context;

      // don't update color or depth

      context.colorMask( false, false, false, false );
      context.depthMask( false );

      // set up stencil

      var writeValue, clearValue;

      if ( this.inverse ) {

        writeValue = 0;
        clearValue = 1;

      } else {

        writeValue = 1;
        clearValue = 0;

      }

      context.enable( context.STENCIL_TEST );
      context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
      context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
      context.clearStencil( clearValue );

      // draw into the stencil buffer

      renderer.render( this.scene, this.camera, readBuffer, this.clear );
      renderer.render( this.scene, this.camera, writeBuffer, this.clear );

      // re-enable update of color and depth

      context.colorMask( true, true, true, true );
      context.depthMask( true );

      // only render where stencil is set to 1

      context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
      context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

    }

  };

  return MaskPass
};

},{}],"/projects/blackice/node_modules/three-effectcomposer/lib/renderpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE) {
  function RenderPass( scene, camera, overrideMaterial, clearColor, clearAlpha ) {
    if (!(this instanceof RenderPass)) return new RenderPass(scene, camera, overrideMaterial, clearColor, clearAlpha);

    this.scene = scene;
    this.camera = camera;

    this.overrideMaterial = overrideMaterial;

    this.clearColor = clearColor;
    this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

    this.oldClearColor = new THREE.Color();
    this.oldClearAlpha = 1;

    this.enabled = true;
    this.clear = true;
    this.needsSwap = false;

  };

  RenderPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

      this.scene.overrideMaterial = this.overrideMaterial;

      if ( this.clearColor ) {

        this.oldClearColor.copy( renderer.getClearColor() );
        this.oldClearAlpha = renderer.getClearAlpha();

        renderer.setClearColor( this.clearColor, this.clearAlpha );

      }

      renderer.render( this.scene, this.camera, readBuffer, this.clear );

      if ( this.clearColor ) {

        renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

      }

      this.scene.overrideMaterial = null;

    }

  };

  return RenderPass;

};

},{}],"/projects/blackice/node_modules/three-effectcomposer/lib/shaderpass.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 */

module.exports = function(THREE, EffectComposer) {
  function ShaderPass( shader, textureID ) {
    if (!(this instanceof ShaderPass)) return new ShaderPass(shader, textureID);

    this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

    this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

    this.material = new THREE.ShaderMaterial( {

      uniforms: this.uniforms,
      vertexShader: shader.vertexShader,
      fragmentShader: shader.fragmentShader

    } );

    this.renderToScreen = false;

    this.enabled = true;
    this.needsSwap = true;
    this.clear = false;

  };

  ShaderPass.prototype = {

    render: function ( renderer, writeBuffer, readBuffer, delta ) {

      if ( this.uniforms[ this.textureID ] ) {

        this.uniforms[ this.textureID ].value = readBuffer;

      }

      EffectComposer.quad.material = this.material;

      if ( this.renderToScreen ) {

        renderer.render( EffectComposer.scene, EffectComposer.camera );

      } else {

        renderer.render( EffectComposer.scene, EffectComposer.camera, writeBuffer, this.clear );

      }

    }

  };

  return ShaderPass;

};
},{}],"/projects/blackice/node_modules/three-effectcomposer/node_modules/three-copyshader/index.js":[function(require,module,exports){
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

module.exports = {
  uniforms: {
    "tDiffuse": { type: "t", value: null },
    "opacity":  { type: "f", value: 1.0 }
  },
  vertexShader: [
    "varying vec2 vUv;",

    "void main() {",

      "vUv = uv;",
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

    "}"
  ].join("\n"),
  fragmentShader: [
    "uniform float opacity;",

    "uniform sampler2D tDiffuse;",

    "varying vec2 vUv;",

    "void main() {",

      "vec4 texel = texture2D( tDiffuse, vUv );",
      "gl_FragColor = opacity * texel;",

    "}"
  ].join("\n")
};

},{}],"/projects/blackice/node_modules/three-glslify/index.js":[function(require,module,exports){
var createTypes = require('./types')


module.exports = function(THREE) {

    var types = createTypes(THREE) 

    return function create(glShader, opts) {
        opts = opts||{}

        if (typeof opts.colors === 'string')
            opts.colors = [opts.colors]
        
        var tUniforms = types( glShader.uniforms, opts.colors )
        var tAttribs = types( glShader.attributes, opts.colors )
            
        //clear the attribute arrays
        for (var k in tAttribs) {
            tAttribs[k].value = []
        }

        return {
            vertexShader: glShader.vertex,
            fragmentShader: glShader.fragment,
            uniforms: tUniforms,
            attributes: tAttribs
        }
    }
}
},{"./types":"/projects/blackice/node_modules/three-glslify/types.js"}],"/projects/blackice/node_modules/three-glslify/types.js":[function(require,module,exports){
var typeMap = {
    'int': 'i',
    'float': 'f',
    'ivec2': 'i2',
    'ivec3': 'i3',
    'ivec4': 'i4',
    'vec2': 'v2',
    'vec3': 'v3',
    'vec4': 'v4',
    'mat4': 'm4',
    'mat3': 'm3',
    'sampler2D': 't',
    'samplerCube': 't'
}

function create(THREE) {
    function newInstance(type, isArray) {
        switch (type) {
            case 'float': 
            case 'int':
                return 0
            case 'vec2':
            case 'ivec2':
                return new THREE.Vector2()
            case 'vec3':
            case 'ivec3':
                return new THREE.Vector3()
            case 'vec4':
            case 'ivec4':
                return new THREE.Vector4()
            case 'mat4':
                return new THREE.Matrix4()
            case 'mat3':
                return new THREE.Matrix3()
            case 'samplerCube':
            case 'sampler2D':
                return new THREE.Texture()
            default:
                return undefined
        }
    }

    function defaultValue(type, isArray, arrayLen) {
        if (isArray) {
            //ThreeJS flattens ivec3 type
            //(we don't support 'fv' type)
            if (type === 'ivec3')
                arrayLen *= 3
            var ar = new Array(arrayLen)
            for (var i=0; i<ar.length; i++)
                ar[i] = newInstance(type, isArray)
            return ar
        }  
        return newInstance(type)
    }

    function getType(type, isArray) {
        if (!isArray)
            return typeMap[type]

        if (type === 'int')
            return 'iv1'
        else if (type === 'float')
            return 'fv1'
        else
            return typeMap[type]+'v'
    }

    return function setupUniforms(glUniforms, colorNames) {
        if (!Array.isArray(colorNames))
            colorNames = Array.prototype.slice.call(arguments, 1)

        var result = {}
        var arrays = {}

        //map uniform types
        glUniforms.forEach(function(uniform) {
            var name = uniform.name
            var isArray = /(.+)\[[0-9]+\]/.exec(name)

            //special case: colors...
            if (colorNames && colorNames.indexOf(name) !== -1) {
                if (isArray)
                    throw new Error("array of color uniforms not supported")
                if (uniform.type !== 'vec3')
                    throw new Error("ThreeJS expects vec3 for Color uniforms") 
                result[name] = {
                    type: 'c',
                    value: new THREE.Color()
                }
                return
            }

            if (isArray) {
                name = isArray[1]
                if (name in arrays) 
                    arrays[name].count++ 
                else
                    arrays[name] = { count: 1, type: uniform.type }
            }
            result[name] = { 
                type: getType(uniform.type, isArray), 
                value: isArray ? null : defaultValue(uniform.type) 
            }
        })

        //now clean up any array values
        for (var k in result) {
            var u = result[k]
            if (k in arrays) { //is an array
                var a = arrays[k]
                u.value = defaultValue(a.type, true, a.count)
            }
        }
        return result
    }
}

module.exports = create
},{}],"/projects/blackice/node_modules/three-sdf-text/index.js":[function(require,module,exports){
module.exports = require('./lib/renderer')
},{"./lib/renderer":"/projects/blackice/node_modules/three-sdf-text/lib/renderer.js"}],"/projects/blackice/node_modules/three-sdf-text/lib/renderer.js":[function(require,module,exports){
var createText = require('gl-sprite-text')
var mat4 = {
    create: require('gl-mat4/create'),
    scale: require('gl-mat4/scale'),
    multiply: require('gl-mat4/multiply')
}

var modelTransform = mat4.create()
var flip = mat4.create()
mat4.scale(flip, flip, [1, -1, 1])

var WrapTexture = require('./texture-wrap')
var number = require('as-number')
var xtend = require('xtend')

var createShader = require('gl-shader-core')


//nasty temp hack until #971 is fixed
var vertex = 'attribute vec4 position;\nattribute vec4 color;\nattribute vec2 texcoord0;\n\nuniform mat4 projection;\nuniform mat4 view;\nuniform mat4 model;\n\nvarying vec4 v_col;\nvarying vec2 v_tex0;\n\nvoid main() {\n gl_Position = projection * view * model * position;\n v_col = color;\n v_tex0 = texcoord0;\n gl_PointSize = 1.0;\n}'
var fragment = '#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec4 v_col;\nvarying vec2 v_tex0;\nuniform sampler2D texture0;\n\nuniform float smoothing;\n// = 1.0/32.0;\n\n// drop shadow computed in fragment shader\nvoid main() {\n vec4 texColor = texture2D(texture0, v_tex0);\n\n float dst = texColor.a;\n float alpha = smoothstep(0.5 - smoothing, 0.5 + smoothing, dst);\n vec4 base = v_col * vec4(alpha);\n\n gl_FragColor = base;\n if (gl_FragColor.a<0.1)\n discard;\n}'

var uniforms = [
        { type: 'float', name: 'smoothing' },
        { type: 'sampler2D', name: 'texture0' },
        { type: 'mat4', name: 'projection' },
        { type: 'mat4', name: 'view' },
        { type: 'mat4', name: 'model' }        
    ],
    attributes = [
        { type: 'vec4', name: 'position' },
        { type: 'vec4', name: 'color' },
        { type: 'vec2', name: 'texcoord0' }
    ]



function copyColor(out, color, opacity) {
    out[0] = color.r
    out[1] = color.g 
    out[2] = color.b 
    out[3] = opacity
}

module.exports = function(THREE) {
    var sharedShader

    function TextRenderer(renderer, opt) {
        if (!(this instanceof TextRenderer))
            return new TextRenderer(renderer, opt)
        opt=opt||{}

        var gl = renderer.getContext()
        this.gl = gl
        this.color = new THREE.Color()
        if (opt.color !== null && typeof opt.color !== 'undefined')
            this.color.set(opt.color)
        this.opacity = number(opt.opacity, 1.0)

        //if no textures are given, presume they are base64 packed
        //into the Font object (like with bmfont-lato)
        var textOpts = xtend(opt)
        if (textOpts.textures) {
            textOpts.textures = textOpts.textures.map(function(tex) {
                // return require('gl-texture2d')(gl, tex.image)
                if (tex instanceof THREE.Texture)
                    return WrapTexture(renderer, tex)
                return tex
            })
        }
        
        this.element = createText(gl, textOpts)
        this.transform = mat4.create()

        if (!sharedShader && !opt.shader)
            sharedShader = createShader(gl, vertex, fragment, uniforms, attributes)
        this.shader = opt.shader || sharedShader
        this.shader.bind()

        this.padding = number(opt.padding, 0)

        var s = number(opt.smoothing, 1.0/32.0)
        this.shader.uniforms.smoothing = s
        this.shader.uniforms.texture0 = 0
    }

    TextRenderer.prototype.draw = function(camera, object) {
        var gl = this.gl

        if (!object.visible)
            return

        if (!this.element.textures || this.element.textures.length === 0)
            return

        gl.enable(gl.BLEND)
        // gl.bindFramebuffer(gl.FRAMEBUFFER, null)

        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)

        // gl.frontFace( gl.CCW )    
        gl.enable(gl.CULL_FACE)
        // gl.cullFace( gl.FRONT )
        gl.colorMask(true, true, true, true)
        gl.disable(gl.STENCIL_TEST)
        gl.activeTexture(gl.TEXTURE0)
        gl.depthMask(true)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

        this.shader.bind()
        this.element.textures[0].bind(0)

        // gl.colorMask(true, true, true, true)

        gl.cullFace(gl.FRONT)

        mat4.multiply(modelTransform, object.matrixWorld.elements, this.transform)
        mat4.multiply(modelTransform, modelTransform, flip)

        this.shader.bind()
        this.shader.uniforms.projection = camera.projectionMatrix.elements
        this.shader.uniforms.view = camera.matrixWorldInverse.elements
        this.shader.uniforms.model = modelTransform
            
        copyColor(this.element.batch.color, this.color, this.opacity)
        this.element.draw(this.shader, this.padding, this.padding)

        gl.cullFace( gl.BACK )
    }


    return TextRenderer
}
},{"./texture-wrap":"/projects/blackice/node_modules/three-sdf-text/lib/texture-wrap.js","as-number":"/projects/blackice/node_modules/as-number/index.js","gl-mat4/create":"/projects/blackice/node_modules/gl-mat4/create.js","gl-mat4/multiply":"/projects/blackice/node_modules/gl-mat4/multiply.js","gl-mat4/scale":"/projects/blackice/node_modules/gl-mat4/scale.js","gl-shader-core":"/projects/blackice/node_modules/gl-shader-core/shader-core.js","gl-sprite-text":"/projects/blackice/node_modules/gl-sprite-text/index.js","xtend":"/projects/blackice/node_modules/xtend/immutable.js"}],"/projects/blackice/node_modules/three-sdf-text/lib/texture-wrap.js":[function(require,module,exports){
// in time this will be replaced with a solution
// that better supported ThreeJS Texture objects


function TextureWrap(renderer, tex) {
    if (!(this instanceof TextureWrap))
        return new TextureWrap(renderer, tex)
    this.renderer = renderer
    this.texture = tex
    this._shape = [0, 0]
}

TextureWrap.prototype.bind = function(unit) {
    updateSize(this._shape, this.texture)


    var gl = this.renderer.getContext()
    this.renderer.setTexture(this.texture, unit|0)
    
    gl.bindTexture(gl.TEXTURE_2D, this.texture.__webglTexture)
}

Object.defineProperty(TextureWrap.prototype, "shape", {

    get: function() {
        updateSize(this._shape, this.texture)
        return this._shape
    }
})

function updateSize(shape, texture) {
    shape[0] = (texture.image && texture.image.width)  |0
    shape[1] = (texture.image && texture.image.height) |0
}

module.exports = TextureWrap
},{}],"/projects/blackice/node_modules/three-shader-fxaa/compiled.js":[function(require,module,exports){
module.exports = {"vertex":"\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\nuniform vec2 resolution;\nvoid a_x_texcoords(vec2 fragCoord, vec2 resolution, out vec2 v_rgbNW, out vec2 v_rgbNE, out vec2 v_rgbSW, out vec2 v_rgbSE, out vec2 v_rgbM) {\n  vec2 inverseVP = 1.0 / resolution.xy;\n  v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n  v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n  v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n  v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n  v_rgbM = vec2(fragCoord * inverseVP);\n}\nvoid main() {\n  vUv = uv;\n  vec2 fragCoord = uv * resolution;\n  a_x_texcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}","fragment":"\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\nuniform vec2 resolution;\nuniform sampler2D tDiffuse;\n#ifndef FXAA_REDUCE_MIN\n\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n\n#endif\n\n#ifndef FXAA_REDUCE_MUL\n\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n\n#endif\n\n#ifndef FXAA_SPAN_MAX\n\n#define FXAA_SPAN_MAX     8.0\n\n#endif\n\nvec4 a_x_fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution, vec2 v_rgbNW, vec2 v_rgbNE, vec2 v_rgbSW, vec2 v_rgbSE, vec2 v_rgbM) {\n  vec4 color;\n  mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n  vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n  vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n  vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n  vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n  vec4 texColor = texture2D(tex, v_rgbM);\n  vec3 rgbM = texColor.xyz;\n  vec3 luma = vec3(0.299, 0.587, 0.114);\n  float lumaNW = dot(rgbNW, luma);\n  float lumaNE = dot(rgbNE, luma);\n  float lumaSW = dot(rgbSW, luma);\n  float lumaSE = dot(rgbSE, luma);\n  float lumaM = dot(rgbM, luma);\n  float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n  float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n  mediump vec2 dir;\n  dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n  dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n  float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n  float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n  dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) * inverseVP;\n  vec3 rgbA = 0.5 * (texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz + texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n  vec3 rgbB = rgbA * 0.5 + 0.25 * (texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz + texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n  float lumaB = dot(rgbB, luma);\n  if((lumaB < lumaMin) || (lumaB > lumaMax))\n    color = vec4(rgbA, texColor.a);\n  else\n    color = vec4(rgbB, texColor.a);\n  return color;\n}\nvoid main() {\n  vec2 fragCoord = vUv * resolution;\n  gl_FragColor = a_x_fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}","uniforms":[{"name":"resolution","type":"vec2"},{"name":"resolution","type":"vec2"},{"name":"tDiffuse","type":"sampler2D"}],"attributes":[]}
},{}],"/projects/blackice/node_modules/three-shader-fxaa/index.js":[function(require,module,exports){
// var glslify = require('glslify')
var threeify = require('three-glslify')

// var source = glslify({
//     vertex: './vert.glsl',
//     fragment: './frag.glsl',
//     sourceOnly: true
// })

var source = require('./compiled')

module.exports = function(THREE) {
    var createShader = threeify(THREE)
    return function() {
        return createShader(source)
    }
}
},{"./compiled":"/projects/blackice/node_modules/three-shader-fxaa/compiled.js","three-glslify":"/projects/blackice/node_modules/three-glslify/index.js"}],"/projects/blackice/node_modules/three-simplicial-complex/index.js":[function(require,module,exports){
var inherits = require('inherits')

module.exports = function(THREE) {

    function Complex(mesh) {
        if (!(this instanceof Complex))
            return new Complex(mesh)
        THREE.Geometry.call(this)
        this.dynamic = true

        if (mesh)
            this.update(mesh)
    }

    inherits(Complex, THREE.Geometry)

    //may expose these in next version
    Complex.prototype._updatePositions = function(positions) {
        for (var i=0; i<positions.length; i++) {
            var pos = positions[i]
            if (i > this.vertices.length-1)
                this.vertices.push(new THREE.Vector3().fromArray(pos))
            else 
                this.vertices[i].fromArray(pos)
        }
        this.vertices.length = positions.length
        this.verticesNeedUpdate = true
    }

    Complex.prototype._updateCells = function(cells) {
        for (var i=0; i<cells.length; i++) {
            var face = cells[i]
            if (i > this.faces.length-1)
                this.faces.push(new THREE.Face3(face[0], face[1], face[2]))
            else {
                var tf = this.faces[i]
                tf.a = face[0]
                tf.b = face[1]
                tf.c = face[2]
            }
        }

        this.faces.length = cells.length
        this.elementsNeedUpdate = true
    }

    Complex.prototype.update = function(mesh) {
        this._updatePositions(mesh.positions)
        this._updateCells(mesh.cells)
    }

    return Complex
}
},{"inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js"}],"/projects/blackice/node_modules/typedarray-pool/node_modules/bit-twiddle/twiddle.js":[function(require,module,exports){
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use strict"; "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}


},{}],"/projects/blackice/node_modules/typedarray-pool/pool.js":[function(require,module,exports){
(function (global,Buffer){
'use strict'

var bits = require('bit-twiddle')
var dup = require('dup')

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8   : dup([32, 0])
    , UINT16  : dup([32, 0])
    , UINT32  : dup([32, 0])
    , INT8    : dup([32, 0])
    , INT16   : dup([32, 0])
    , INT32   : dup([32, 0])
    , FLOAT   : dup([32, 0])
    , DOUBLE  : dup([32, 0])
    , DATA    : dup([32, 0])
    , UINT8C  : dup([32, 0])
    , BUFFER  : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(Buffer.isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'buffer':
        return mallocBuffer(n)
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

function mallocBuffer(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var cache = BUFFER[log_n]
  if(cache.length > 0) {
    return cache.pop()
  }
  return new Buffer(n)
}
exports.mallocBuffer = mallocBuffer

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)

},{"bit-twiddle":"/projects/blackice/node_modules/typedarray-pool/node_modules/bit-twiddle/twiddle.js","buffer":"/projects/blackice/node_modules/browserify/node_modules/buffer/index.js","dup":"/projects/blackice/node_modules/dup/dup.js"}],"/projects/blackice/node_modules/ua-device-type/index.js":[function(require,module,exports){
/*
* ua-device-type
* special thanks to rguerreiro author of https://github.com/rguerreiro/express-device
* who tracked down the device matching code from https://github.com/bjankord/Categorizr
* i needed to use this without using express. its a small lib so i bundled it up for all to enjoy.
*/


var defaultOptions = {
  emptyUserAgentDeviceType: 'desktop',
  unknownUserAgentDeviceType: 'phone',
  botUserAgentDeviceType: 'bot'
};

var devices = {
  tv:"tv",
  tablet:"tablet",
  phone:"phone",
  desktop:"desktop",
  bot:"bot"
}


module.exports = function(ua,options){
  options = options||{};        

  if (!ua || ua === '') {
    // No user agent.
    return options.emptyUserAgentDeviceType||devices.desktop;
  }

  if (ua.match(/GoogleTV|SmartTV|Internet TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i)) {
    // if user agent is a smart TV - http://goo.gl/FocDk
    return devices.tv;
  } else if (ua.match(/Xbox|PLAYSTATION 3|Wii/i)) {
    // if user agent is a TV Based Gaming Console
    return devices.tv;
  } else if (ua.match(/iP(a|ro)d/i) || (ua.match(/tablet/i) && !ua.match(/RX-34/i)) || ua.match(/FOLIO/i)) {
    // if user agent is a Tablet
    return devices.tablet;
  } else if (ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC Magic|HTCX06HT|Nexus One|SC-02B|fone 945/i)) {
    // if user agent is an Android Tablet
    return devices.tablet;
  } else if (ua.match(/Kindle/i) || (ua.match(/Mac OS/i) && ua.match(/Silk/i))) {
    // if user agent is a Kindle or Kindle Fire
    return devices.tablet;
  } else if (ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || (ua.match(/MB511/i) && ua.match(/RUTEM/i))) {
    // if user agent is a pre Android 3.0 Tablet
    return devices.tablet;
  } else if (ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google Wireless Transcoder/i)) {
    // if user agent is unique mobile User Agent
    return devices.phone;
  } else if (ua.match(/Opera/i) && ua.match(/Windows NT 5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i)) {
    // if user agent is an odd Opera User Agent - http://goo.gl/nK90K
    return devices.phone;
  } else if ((ua.match(/Windows (NT|XP|ME|9)/) && !ua.match(/Phone/i)) && !ua.match(/Bot|Spider|ia_archiver|NewsGator/i) || ua.match(/Win( ?9|NT)/i)) {
    // if user agent is Windows Desktop
    return devices.desktop;
  } else if (ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i)) {
    // if agent is Mac Desktop
    return devices.desktop;
  } else if (ua.match(/Linux/i) && ua.match(/X11/i) && !ua.match(/Charlotte/i)) {
    // if user agent is a Linux Desktop
    return devices.desktop;
  } else if (ua.match(/CrOS/)) {
    // if user agent is a Chrome Book
    return devices.desktop;
  } else if (ua.match(/Solaris|SunOS|BSD/i)) {
    // if user agent is a Solaris, SunOS, BSD Desktop
    return devices.desktop;
  } else if (ua.match(/curl|Bot|B-O-T|Crawler|Spider|Spyder|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|Charlotte|NewsGator|TinEye|Cerberian|SearchSight|Zao|Scrubby|Qseero|PycURL|Pompos|oegp|SBIder|yoogliFetchAgent|yacy|webcollage|VYU2|voyager|updated|truwoGPS|StackRambler|Sqworm|silk|semanticdiscovery|ScoutJet|Nymesis|NetResearchServer|MVAClient|mogimogi|Mnogosearch|Arachmo|Accoona|holmes|htdig|ichiro|webis|LinkWalker|lwp-trivial/i) && !ua.match(/mobile|Playstation/i)) {
    // if user agent is a BOT/Crawler/Spider
    return options.botUserAgentDeviceType||devices.bot;
  } else {
    // Otherwise assume it is a mobile Device
    return options.unknownUserAgentDeviceType||devices.phone;
  }
}

module.exports.devices = devices;
module.exports.defaultOptions = defaultOptions;

},{}],"/projects/blackice/node_modules/unlerp/index.js":[function(require,module,exports){
module.exports = function range(min, max, value) {
  return (value - min) / (max - min)
}
},{}],"/projects/blackice/node_modules/webgl-context/index.js":[function(require,module,exports){
module.exports = function(opts) {
    if (typeof document === 'undefined')
        return null //for terminal
    opts = opts||{}
    var canvas = opts.canvas || document.createElement("canvas")
    if (typeof opts.width === "number")
        canvas.width = opts.width
    if (typeof opts.height === "number")
        canvas.height = opts.height

    var attribs = opts
    var gl
    try {
        gl = (canvas.getContext('webgl', attribs) || canvas.getContext('experimental-webgl', attribs))
    } catch (e) {
        gl = null
    }
    return (gl || null) //ensure null on fail
}
},{}],"/projects/blackice/node_modules/webglew/node_modules/weak-map/weak-map.js":[function(require,module,exports){
// Copyright (C) 2011 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Install a leaky WeakMap emulation on platforms that
 * don't provide a built-in one.
 *
 * <p>Assumes that an ES5 platform where, if {@code WeakMap} is
 * already present, then it conforms to the anticipated ES6
 * specification. To run this file on an ES5 or almost ES5
 * implementation where the {@code WeakMap} specification does not
 * quite conform, run <code>repairES5.js</code> first.
 *
 * <p>Even though WeakMapModule is not global, the linter thinks it
 * is, which is why it is in the overrides list below.
 *
 * <p>NOTE: Before using this WeakMap emulation in a non-SES
 * environment, see the note below about hiddenRecord.
 *
 * @author Mark S. Miller
 * @requires crypto, ArrayBuffer, Uint8Array, navigator, console
 * @overrides WeakMap, ses, Proxy
 * @overrides WeakMapModule
 */

/**
 * This {@code WeakMap} emulation is observably equivalent to the
 * ES-Harmony WeakMap, but with leakier garbage collection properties.
 *
 * <p>As with true WeakMaps, in this emulation, a key does not
 * retain maps indexed by that key and (crucially) a map does not
 * retain the keys it indexes. A map by itself also does not retain
 * the values associated with that map.
 *
 * <p>However, the values associated with a key in some map are
 * retained so long as that key is retained and those associations are
 * not overridden. For example, when used to support membranes, all
 * values exported from a given membrane will live for the lifetime
 * they would have had in the absence of an interposed membrane. Even
 * when the membrane is revoked, all objects that would have been
 * reachable in the absence of revocation will still be reachable, as
 * far as the GC can tell, even though they will no longer be relevant
 * to ongoing computation.
 *
 * <p>The API implemented here is approximately the API as implemented
 * in FF6.0a1 and agreed to by MarkM, Andreas Gal, and Dave Herman,
 * rather than the offially approved proposal page. TODO(erights):
 * upgrade the ecmascript WeakMap proposal page to explain this API
 * change and present to EcmaScript committee for their approval.
 *
 * <p>The first difference between the emulation here and that in
 * FF6.0a1 is the presence of non enumerable {@code get___, has___,
 * set___, and delete___} methods on WeakMap instances to represent
 * what would be the hidden internal properties of a primitive
 * implementation. Whereas the FF6.0a1 WeakMap.prototype methods
 * require their {@code this} to be a genuine WeakMap instance (i.e.,
 * an object of {@code [[Class]]} "WeakMap}), since there is nothing
 * unforgeable about the pseudo-internal method names used here,
 * nothing prevents these emulated prototype methods from being
 * applied to non-WeakMaps with pseudo-internal methods of the same
 * names.
 *
 * <p>Another difference is that our emulated {@code
 * WeakMap.prototype} is not itself a WeakMap. A problem with the
 * current FF6.0a1 API is that WeakMap.prototype is itself a WeakMap
 * providing ambient mutability and an ambient communications
 * channel. Thus, if a WeakMap is already present and has this
 * problem, repairES5.js wraps it in a safe wrappper in order to
 * prevent access to this channel. (See
 * PATCH_MUTABLE_FROZEN_WEAKMAP_PROTO in repairES5.js).
 */

/**
 * If this is a full <a href=
 * "http://code.google.com/p/es-lab/wiki/SecureableES5"
 * >secureable ES5</a> platform and the ES-Harmony {@code WeakMap} is
 * absent, install an approximate emulation.
 *
 * <p>If WeakMap is present but cannot store some objects, use our approximate
 * emulation as a wrapper.
 *
 * <p>If this is almost a secureable ES5 platform, then WeakMap.js
 * should be run after repairES5.js.
 *
 * <p>See {@code WeakMap} for documentation of the garbage collection
 * properties of this WeakMap emulation.
 */
(function WeakMapModule() {
  "use strict";

  if (typeof ses !== 'undefined' && ses.ok && !ses.ok()) {
    // already too broken, so give up
    return;
  }

  /**
   * In some cases (current Firefox), we must make a choice betweeen a
   * WeakMap which is capable of using all varieties of host objects as
   * keys and one which is capable of safely using proxies as keys. See
   * comments below about HostWeakMap and DoubleWeakMap for details.
   *
   * This function (which is a global, not exposed to guests) marks a
   * WeakMap as permitted to do what is necessary to index all host
   * objects, at the cost of making it unsafe for proxies.
   *
   * Do not apply this function to anything which is not a genuine
   * fresh WeakMap.
   */
  function weakMapPermitHostObjects(map) {
    // identity of function used as a secret -- good enough and cheap
    if (map.permitHostObjects___) {
      map.permitHostObjects___(weakMapPermitHostObjects);
    }
  }
  if (typeof ses !== 'undefined') {
    ses.weakMapPermitHostObjects = weakMapPermitHostObjects;
  }

  // IE 11 has no Proxy but has a broken WeakMap such that we need to patch
  // it using DoubleWeakMap; this flag tells DoubleWeakMap so.
  var doubleWeakMapCheckSilentFailure = false;

  // Check if there is already a good-enough WeakMap implementation, and if so
  // exit without replacing it.
  if (typeof WeakMap === 'function') {
    var HostWeakMap = WeakMap;
    // There is a WeakMap -- is it good enough?
    if (typeof navigator !== 'undefined' &&
        /Firefox/.test(navigator.userAgent)) {
      // We're now *assuming not*, because as of this writing (2013-05-06)
      // Firefox's WeakMaps have a miscellany of objects they won't accept, and
      // we don't want to make an exhaustive list, and testing for just one
      // will be a problem if that one is fixed alone (as they did for Event).

      // If there is a platform that we *can* reliably test on, here's how to
      // do it:
      //  var problematic = ... ;
      //  var testHostMap = new HostWeakMap();
      //  try {
      //    testHostMap.set(problematic, 1);  // Firefox 20 will throw here
      //    if (testHostMap.get(problematic) === 1) {
      //      return;
      //    }
      //  } catch (e) {}

    } else {
      // IE 11 bug: WeakMaps silently fail to store frozen objects.
      var testMap = new HostWeakMap();
      var testObject = Object.freeze({});
      testMap.set(testObject, 1);
      if (testMap.get(testObject) !== 1) {
        doubleWeakMapCheckSilentFailure = true;
        // Fall through to installing our WeakMap.
      } else {
        module.exports = WeakMap;
        return;
      }
    }
  }

  var hop = Object.prototype.hasOwnProperty;
  var gopn = Object.getOwnPropertyNames;
  var defProp = Object.defineProperty;
  var isExtensible = Object.isExtensible;

  /**
   * Security depends on HIDDEN_NAME being both <i>unguessable</i> and
   * <i>undiscoverable</i> by untrusted code.
   *
   * <p>Given the known weaknesses of Math.random() on existing
   * browsers, it does not generate unguessability we can be confident
   * of.
   *
   * <p>It is the monkey patching logic in this file that is intended
   * to ensure undiscoverability. The basic idea is that there are
   * three fundamental means of discovering properties of an object:
   * The for/in loop, Object.keys(), and Object.getOwnPropertyNames(),
   * as well as some proposed ES6 extensions that appear on our
   * whitelist. The first two only discover enumerable properties, and
   * we only use HIDDEN_NAME to name a non-enumerable property, so the
   * only remaining threat should be getOwnPropertyNames and some
   * proposed ES6 extensions that appear on our whitelist. We monkey
   * patch them to remove HIDDEN_NAME from the list of properties they
   * returns.
   *
   * <p>TODO(erights): On a platform with built-in Proxies, proxies
   * could be used to trap and thereby discover the HIDDEN_NAME, so we
   * need to monkey patch Proxy.create, Proxy.createFunction, etc, in
   * order to wrap the provided handler with the real handler which
   * filters out all traps using HIDDEN_NAME.
   *
   * <p>TODO(erights): Revisit Mike Stay's suggestion that we use an
   * encapsulated function at a not-necessarily-secret name, which
   * uses the Stiegler shared-state rights amplification pattern to
   * reveal the associated value only to the WeakMap in which this key
   * is associated with that value. Since only the key retains the
   * function, the function can also remember the key without causing
   * leakage of the key, so this doesn't violate our general gc
   * goals. In addition, because the name need not be a guarded
   * secret, we could efficiently handle cross-frame frozen keys.
   */
  var HIDDEN_NAME_PREFIX = 'weakmap:';
  var HIDDEN_NAME = HIDDEN_NAME_PREFIX + 'ident:' + Math.random() + '___';

  if (typeof crypto !== 'undefined' &&
      typeof crypto.getRandomValues === 'function' &&
      typeof ArrayBuffer === 'function' &&
      typeof Uint8Array === 'function') {
    var ab = new ArrayBuffer(25);
    var u8s = new Uint8Array(ab);
    crypto.getRandomValues(u8s);
    HIDDEN_NAME = HIDDEN_NAME_PREFIX + 'rand:' +
      Array.prototype.map.call(u8s, function(u8) {
        return (u8 % 36).toString(36);
      }).join('') + '___';
  }

  function isNotHiddenName(name) {
    return !(
        name.substr(0, HIDDEN_NAME_PREFIX.length) == HIDDEN_NAME_PREFIX &&
        name.substr(name.length - 3) === '___');
  }

  /**
   * Monkey patch getOwnPropertyNames to avoid revealing the
   * HIDDEN_NAME.
   *
   * <p>The ES5.1 spec requires each name to appear only once, but as
   * of this writing, this requirement is controversial for ES6, so we
   * made this code robust against this case. If the resulting extra
   * search turns out to be expensive, we can probably relax this once
   * ES6 is adequately supported on all major browsers, iff no browser
   * versions we support at that time have relaxed this constraint
   * without providing built-in ES6 WeakMaps.
   */
  defProp(Object, 'getOwnPropertyNames', {
    value: function fakeGetOwnPropertyNames(obj) {
      return gopn(obj).filter(isNotHiddenName);
    }
  });

  /**
   * getPropertyNames is not in ES5 but it is proposed for ES6 and
   * does appear in our whitelist, so we need to clean it too.
   */
  if ('getPropertyNames' in Object) {
    var originalGetPropertyNames = Object.getPropertyNames;
    defProp(Object, 'getPropertyNames', {
      value: function fakeGetPropertyNames(obj) {
        return originalGetPropertyNames(obj).filter(isNotHiddenName);
      }
    });
  }

  /**
   * <p>To treat objects as identity-keys with reasonable efficiency
   * on ES5 by itself (i.e., without any object-keyed collections), we
   * need to add a hidden property to such key objects when we
   * can. This raises several issues:
   * <ul>
   * <li>Arranging to add this property to objects before we lose the
   *     chance, and
   * <li>Hiding the existence of this new property from most
   *     JavaScript code.
   * <li>Preventing <i>certification theft</i>, where one object is
   *     created falsely claiming to be the key of an association
   *     actually keyed by another object.
   * <li>Preventing <i>value theft</i>, where untrusted code with
   *     access to a key object but not a weak map nevertheless
   *     obtains access to the value associated with that key in that
   *     weak map.
   * </ul>
   * We do so by
   * <ul>
   * <li>Making the name of the hidden property unguessable, so "[]"
   *     indexing, which we cannot intercept, cannot be used to access
   *     a property without knowing the name.
   * <li>Making the hidden property non-enumerable, so we need not
   *     worry about for-in loops or {@code Object.keys},
   * <li>monkey patching those reflective methods that would
   *     prevent extensions, to add this hidden property first,
   * <li>monkey patching those methods that would reveal this
   *     hidden property.
   * </ul>
   * Unfortunately, because of same-origin iframes, we cannot reliably
   * add this hidden property before an object becomes
   * non-extensible. Instead, if we encounter a non-extensible object
   * without a hidden record that we can detect (whether or not it has
   * a hidden record stored under a name secret to us), then we just
   * use the key object itself to represent its identity in a brute
   * force leaky map stored in the weak map, losing all the advantages
   * of weakness for these.
   */
  function getHiddenRecord(key) {
    if (key !== Object(key)) {
      throw new TypeError('Not an object: ' + key);
    }
    var hiddenRecord = key[HIDDEN_NAME];
    if (hiddenRecord && hiddenRecord.key === key) { return hiddenRecord; }
    if (!isExtensible(key)) {
      // Weak map must brute force, as explained in doc-comment above.
      return void 0;
    }

    // The hiddenRecord and the key point directly at each other, via
    // the "key" and HIDDEN_NAME properties respectively. The key
    // field is for quickly verifying that this hidden record is an
    // own property, not a hidden record from up the prototype chain.
    //
    // NOTE: Because this WeakMap emulation is meant only for systems like
    // SES where Object.prototype is frozen without any numeric
    // properties, it is ok to use an object literal for the hiddenRecord.
    // This has two advantages:
    // * It is much faster in a performance critical place
    // * It avoids relying on Object.create(null), which had been
    //   problematic on Chrome 28.0.1480.0. See
    //   https://code.google.com/p/google-caja/issues/detail?id=1687
    hiddenRecord = { key: key };

    // When using this WeakMap emulation on platforms where
    // Object.prototype might not be frozen and Object.create(null) is
    // reliable, use the following two commented out lines instead.
    // hiddenRecord = Object.create(null);
    // hiddenRecord.key = key;

    // Please contact us if you need this to work on platforms where
    // Object.prototype might not be frozen and
    // Object.create(null) might not be reliable.

    try {
      defProp(key, HIDDEN_NAME, {
        value: hiddenRecord,
        writable: false,
        enumerable: false,
        configurable: false
      });
      return hiddenRecord;
    } catch (error) {
      // Under some circumstances, isExtensible seems to misreport whether
      // the HIDDEN_NAME can be defined.
      // The circumstances have not been isolated, but at least affect
      // Node.js v0.10.26 on TravisCI / Linux, but not the same version of
      // Node.js on OS X.
      return void 0;
    }
  }

  /**
   * Monkey patch operations that would make their argument
   * non-extensible.
   *
   * <p>The monkey patched versions throw a TypeError if their
   * argument is not an object, so it should only be done to functions
   * that should throw a TypeError anyway if their argument is not an
   * object.
   */
  (function(){
    var oldFreeze = Object.freeze;
    defProp(Object, 'freeze', {
      value: function identifyingFreeze(obj) {
        getHiddenRecord(obj);
        return oldFreeze(obj);
      }
    });
    var oldSeal = Object.seal;
    defProp(Object, 'seal', {
      value: function identifyingSeal(obj) {
        getHiddenRecord(obj);
        return oldSeal(obj);
      }
    });
    var oldPreventExtensions = Object.preventExtensions;
    defProp(Object, 'preventExtensions', {
      value: function identifyingPreventExtensions(obj) {
        getHiddenRecord(obj);
        return oldPreventExtensions(obj);
      }
    });
  })();

  function constFunc(func) {
    func.prototype = null;
    return Object.freeze(func);
  }

  var calledAsFunctionWarningDone = false;
  function calledAsFunctionWarning() {
    // Future ES6 WeakMap is currently (2013-09-10) expected to reject WeakMap()
    // but we used to permit it and do it ourselves, so warn only.
    if (!calledAsFunctionWarningDone && typeof console !== 'undefined') {
      calledAsFunctionWarningDone = true;
      console.warn('WeakMap should be invoked as new WeakMap(), not ' +
          'WeakMap(). This will be an error in the future.');
    }
  }

  var nextId = 0;

  var OurWeakMap = function() {
    if (!(this instanceof OurWeakMap)) {  // approximate test for new ...()
      calledAsFunctionWarning();
    }

    // We are currently (12/25/2012) never encountering any prematurely
    // non-extensible keys.
    var keys = []; // brute force for prematurely non-extensible keys.
    var values = []; // brute force for corresponding values.
    var id = nextId++;

    function get___(key, opt_default) {
      var index;
      var hiddenRecord = getHiddenRecord(key);
      if (hiddenRecord) {
        return id in hiddenRecord ? hiddenRecord[id] : opt_default;
      } else {
        index = keys.indexOf(key);
        return index >= 0 ? values[index] : opt_default;
      }
    }

    function has___(key) {
      var hiddenRecord = getHiddenRecord(key);
      if (hiddenRecord) {
        return id in hiddenRecord;
      } else {
        return keys.indexOf(key) >= 0;
      }
    }

    function set___(key, value) {
      var index;
      var hiddenRecord = getHiddenRecord(key);
      if (hiddenRecord) {
        hiddenRecord[id] = value;
      } else {
        index = keys.indexOf(key);
        if (index >= 0) {
          values[index] = value;
        } else {
          // Since some browsers preemptively terminate slow turns but
          // then continue computing with presumably corrupted heap
          // state, we here defensively get keys.length first and then
          // use it to update both the values and keys arrays, keeping
          // them in sync.
          index = keys.length;
          values[index] = value;
          // If we crash here, values will be one longer than keys.
          keys[index] = key;
        }
      }
      return this;
    }

    function delete___(key) {
      var hiddenRecord = getHiddenRecord(key);
      var index, lastIndex;
      if (hiddenRecord) {
        return id in hiddenRecord && delete hiddenRecord[id];
      } else {
        index = keys.indexOf(key);
        if (index < 0) {
          return false;
        }
        // Since some browsers preemptively terminate slow turns but
        // then continue computing with potentially corrupted heap
        // state, we here defensively get keys.length first and then use
        // it to update both the keys and the values array, keeping
        // them in sync. We update the two with an order of assignments,
        // such that any prefix of these assignments will preserve the
        // key/value correspondence, either before or after the delete.
        // Note that this needs to work correctly when index === lastIndex.
        lastIndex = keys.length - 1;
        keys[index] = void 0;
        // If we crash here, there's a void 0 in the keys array, but
        // no operation will cause a "keys.indexOf(void 0)", since
        // getHiddenRecord(void 0) will always throw an error first.
        values[index] = values[lastIndex];
        // If we crash here, values[index] cannot be found here,
        // because keys[index] is void 0.
        keys[index] = keys[lastIndex];
        // If index === lastIndex and we crash here, then keys[index]
        // is still void 0, since the aliasing killed the previous key.
        keys.length = lastIndex;
        // If we crash here, keys will be one shorter than values.
        values.length = lastIndex;
        return true;
      }
    }

    return Object.create(OurWeakMap.prototype, {
      get___:    { value: constFunc(get___) },
      has___:    { value: constFunc(has___) },
      set___:    { value: constFunc(set___) },
      delete___: { value: constFunc(delete___) }
    });
  };

  OurWeakMap.prototype = Object.create(Object.prototype, {
    get: {
      /**
       * Return the value most recently associated with key, or
       * opt_default if none.
       */
      value: function get(key, opt_default) {
        return this.get___(key, opt_default);
      },
      writable: true,
      configurable: true
    },

    has: {
      /**
       * Is there a value associated with key in this WeakMap?
       */
      value: function has(key) {
        return this.has___(key);
      },
      writable: true,
      configurable: true
    },

    set: {
      /**
       * Associate value with key in this WeakMap, overwriting any
       * previous association if present.
       */
      value: function set(key, value) {
        return this.set___(key, value);
      },
      writable: true,
      configurable: true
    },

    'delete': {
      /**
       * Remove any association for key in this WeakMap, returning
       * whether there was one.
       *
       * <p>Note that the boolean return here does not work like the
       * {@code delete} operator. The {@code delete} operator returns
       * whether the deletion succeeds at bringing about a state in
       * which the deleted property is absent. The {@code delete}
       * operator therefore returns true if the property was already
       * absent, whereas this {@code delete} method returns false if
       * the association was already absent.
       */
      value: function remove(key) {
        return this.delete___(key);
      },
      writable: true,
      configurable: true
    }
  });

  if (typeof HostWeakMap === 'function') {
    (function() {
      // If we got here, then the platform has a WeakMap but we are concerned
      // that it may refuse to store some key types. Therefore, make a map
      // implementation which makes use of both as possible.

      // In this mode we are always using double maps, so we are not proxy-safe.
      // This combination does not occur in any known browser, but we had best
      // be safe.
      if (doubleWeakMapCheckSilentFailure && typeof Proxy !== 'undefined') {
        Proxy = undefined;
      }

      function DoubleWeakMap() {
        if (!(this instanceof OurWeakMap)) {  // approximate test for new ...()
          calledAsFunctionWarning();
        }

        // Preferable, truly weak map.
        var hmap = new HostWeakMap();

        // Our hidden-property-based pseudo-weak-map. Lazily initialized in the
        // 'set' implementation; thus we can avoid performing extra lookups if
        // we know all entries actually stored are entered in 'hmap'.
        var omap = undefined;

        // Hidden-property maps are not compatible with proxies because proxies
        // can observe the hidden name and either accidentally expose it or fail
        // to allow the hidden property to be set. Therefore, we do not allow
        // arbitrary WeakMaps to switch to using hidden properties, but only
        // those which need the ability, and unprivileged code is not allowed
        // to set the flag.
        //
        // (Except in doubleWeakMapCheckSilentFailure mode in which case we
        // disable proxies.)
        var enableSwitching = false;

        function dget(key, opt_default) {
          if (omap) {
            return hmap.has(key) ? hmap.get(key)
                : omap.get___(key, opt_default);
          } else {
            return hmap.get(key, opt_default);
          }
        }

        function dhas(key) {
          return hmap.has(key) || (omap ? omap.has___(key) : false);
        }

        var dset;
        if (doubleWeakMapCheckSilentFailure) {
          dset = function(key, value) {
            hmap.set(key, value);
            if (!hmap.has(key)) {
              if (!omap) { omap = new OurWeakMap(); }
              omap.set(key, value);
            }
            return this;
          };
        } else {
          dset = function(key, value) {
            if (enableSwitching) {
              try {
                hmap.set(key, value);
              } catch (e) {
                if (!omap) { omap = new OurWeakMap(); }
                omap.set___(key, value);
              }
            } else {
              hmap.set(key, value);
            }
            return this;
          };
        }

        function ddelete(key) {
          var result = !!hmap['delete'](key);
          if (omap) { return omap.delete___(key) || result; }
          return result;
        }

        return Object.create(OurWeakMap.prototype, {
          get___:    { value: constFunc(dget) },
          has___:    { value: constFunc(dhas) },
          set___:    { value: constFunc(dset) },
          delete___: { value: constFunc(ddelete) },
          permitHostObjects___: { value: constFunc(function(token) {
            if (token === weakMapPermitHostObjects) {
              enableSwitching = true;
            } else {
              throw new Error('bogus call to permitHostObjects___');
            }
          })}
        });
      }
      DoubleWeakMap.prototype = OurWeakMap.prototype;
      module.exports = DoubleWeakMap;

      // define .constructor to hide OurWeakMap ctor
      Object.defineProperty(WeakMap.prototype, 'constructor', {
        value: WeakMap,
        enumerable: false,  // as default .constructor is
        configurable: true,
        writable: true
      });
    })();
  } else {
    // There is no host WeakMap, so we must use the emulation.

    // Emulated WeakMaps are incompatible with native proxies (because proxies
    // can observe the hidden name), so we must disable Proxy usage (in
    // ArrayLike and Domado, currently).
    if (typeof Proxy !== 'undefined') {
      Proxy = undefined;
    }

    module.exports = OurWeakMap;
  }
})();

},{}],"/projects/blackice/node_modules/webglew/webglew.js":[function(require,module,exports){
'use strict'

var weakMap = typeof WeakMap === 'undefined' ? require('weak-map') : WeakMap

var WebGLEWStruct = new weakMap()

function baseName(ext_name) {
  return ext_name.replace(/^[A-Z]+_/, '')
}

function initWebGLEW(gl) {
  var struct = WebGLEWStruct.get(gl)
  if(struct) {
    return struct
  }
  var extensions = {}
  var supported = gl.getSupportedExtensions()
  for(var i=0; i<supported.length; ++i) {
    var extName = supported[i]

    //Skip MOZ_ extensions
    if(extName.indexOf('MOZ_') === 0) {
      continue
    }
    var ext = gl.getExtension(supported[i])
    if(!ext) {
      continue
    }
    while(true) {
      extensions[extName] = ext
      var base = baseName(extName)
      if(base === extName) {
        break
      }
      extName = base
    }
  }
  WebGLEWStruct.set(gl, extensions)
  return extensions
}
module.exports = initWebGLEW
},{"weak-map":"/projects/blackice/node_modules/webglew/node_modules/weak-map/weak-map.js"}],"/projects/blackice/node_modules/xtend/has-keys.js":[function(require,module,exports){
module.exports = hasKeys

function hasKeys(source) {
    return source !== null &&
        (typeof source === "object" ||
        typeof source === "function")
}

},{}],"/projects/blackice/node_modules/xtend/immutable.js":[function(require,module,exports){
module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],"/projects/blackice/node_modules/xtend/index.js":[function(require,module,exports){
var Keys = require("object-keys")
var hasKeys = require("./has-keys")

module.exports = extend

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        if (!hasKeys(source)) {
            continue
        }

        var keys = Keys(source)

        for (var j = 0; j < keys.length; j++) {
            var name = keys[j]
            target[name] = source[name]
        }
    }

    return target
}

},{"./has-keys":"/projects/blackice/node_modules/xtend/has-keys.js","object-keys":"/projects/blackice/node_modules/xtend/node_modules/object-keys/index.js"}],"/projects/blackice/node_modules/xtend/node_modules/object-keys/foreach.js":[function(require,module,exports){
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var isFunction = function (fn) {
	var isFunc = (typeof fn === 'function' && !(fn instanceof RegExp)) || toString.call(fn) === '[object Function]';
	if (!isFunc && typeof window !== 'undefined') {
		isFunc = fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt;
	}
	return isFunc;
};

module.exports = function forEach(obj, fn) {
	if (!isFunction(fn)) {
		throw new TypeError('iterator must be a function');
	}
	var i, k,
		isString = typeof obj === 'string',
		l = obj.length,
		context = arguments.length > 2 ? arguments[2] : null;
	if (l === +l) {
		for (i = 0; i < l; i++) {
			if (context === null) {
				fn(isString ? obj.charAt(i) : obj[i], i, obj);
			} else {
				fn.call(context, isString ? obj.charAt(i) : obj[i], i, obj);
			}
		}
	} else {
		for (k in obj) {
			if (hasOwn.call(obj, k)) {
				if (context === null) {
					fn(obj[k], k, obj);
				} else {
					fn.call(context, obj[k], k, obj);
				}
			}
		}
	}
};


},{}],"/projects/blackice/node_modules/xtend/node_modules/object-keys/index.js":[function(require,module,exports){
module.exports = Object.keys || require('./shim');


},{"./shim":"/projects/blackice/node_modules/xtend/node_modules/object-keys/shim.js"}],"/projects/blackice/node_modules/xtend/node_modules/object-keys/isArguments.js":[function(require,module,exports){
var toString = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toString.call(value);
	var isArguments = str === '[object Arguments]';
	if (!isArguments) {
		isArguments = str !== '[object Array]'
			&& value !== null
			&& typeof value === 'object'
			&& typeof value.length === 'number'
			&& value.length >= 0
			&& toString.call(value.callee) === '[object Function]';
	}
	return isArguments;
};


},{}],"/projects/blackice/node_modules/xtend/node_modules/object-keys/shim.js":[function(require,module,exports){
(function () {
	"use strict";

	// modified from https://github.com/kriskowal/es5-shim
	var has = Object.prototype.hasOwnProperty,
		toString = Object.prototype.toString,
		forEach = require('./foreach'),
		isArgs = require('./isArguments'),
		hasDontEnumBug = !({'toString': null}).propertyIsEnumerable('toString'),
		hasProtoEnumBug = (function () {}).propertyIsEnumerable('prototype'),
		dontEnums = [
			"toString",
			"toLocaleString",
			"valueOf",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"constructor"
		],
		keysShim;

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object',
			isFunction = toString.call(object) === '[object Function]',
			isArguments = isArgs(object),
			theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError("Object.keys called on a non-object");
		}

		if (isArguments) {
			forEach(object, function (value) {
				theKeys.push(value);
			});
		} else {
			var name,
				skipProto = hasProtoEnumBug && isFunction;

			for (name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(name);
				}
			}
		}

		if (hasDontEnumBug) {
			var ctor = object.constructor,
				skipConstructor = ctor && ctor.prototype === object;

			forEach(dontEnums, function (dontEnum) {
				if (!(skipConstructor && dontEnum === 'constructor') && has.call(object, dontEnum)) {
					theKeys.push(dontEnum);
				}
			});
		}
		return theKeys;
	};

	module.exports = keysShim;
}());


},{"./foreach":"/projects/blackice/node_modules/xtend/node_modules/object-keys/foreach.js","./isArguments":"/projects/blackice/node_modules/xtend/node_modules/object-keys/isArguments.js"}]},{},["./test.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZXN0LmpzIiwiZm9udHMvRXhvMlNlbWlCb2xkLmpzb24iLCJpbmRleC5qcyIsImxpYi9SaWdTY2VuZS5qcyIsImxpYi9UZXh0UGFzcy5qcyIsImxpYi9hbmltYXRlLWxhYmVscy5qcyIsImxpYi9jcmVhdGUtZm9udC5qcyIsImxpYi9jcmVhdGUtdGV4dC1wYXNzLmpzIiwibGliL2lzLW1vYmlsZS5qcyIsImxpYi9yZW5kZXJlci5qcyIsImxpYi9zZXR1cC1lZmZlY3RzLmpzIiwibGliL3NldHVwLWZsb29yLmpzIiwibGliL3NldHVwLXdhdGVyLmpzIiwibGliL3NoYWRlcnMvYmx1ci5qcyIsImxpYi9zaGFkZXJzL2NyZWF0ZS5qcyIsImxpYi9zaGFkZXJzL2xlbnMuanMiLCJsaWIvc2hhZGVycy9wYXNzLmpzIiwibGliL3RleHQtZGF0YS5qcyIsImxpYi90aHJlZS1vcmJpdC1jYW1lcmEvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYXMtbnVtYmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzLWFycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvYWRkLWV2ZW50LWxpc3RlbmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2RlYm91bmNlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2RlYm91bmNlL25vZGVfbW9kdWxlcy9kYXRlLW5vdy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtYXBwL25vZGVfbW9kdWxlcy9pcy13ZWJnbC1jb250ZXh0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL3dlYmdsLWNvbnRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2xhbXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiLCJub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvbGliL2NyZWF0ZS11bmlmb3Jtcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvcmVmbGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9zaGFkZXItY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtYm1mb250L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXNpbXBsZS1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtcmVuZGVyZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXNpbXBsZS1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLWdseXBoLWl0ZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC11dGlsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC13b3Jkd3JhcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL2NvbW1vbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWFsaWFzZWQtdmFvL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWFsaWFzZWQtdmFvL2xpYi9kby1iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWFsaWFzZWQtdmFvL2xpYi92YW8tZW11bGF0ZWQuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL2J1ZmZlci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL3ByZW11bHRpcGxpZWQtcmdiYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL3BhY2stcmdiYS1mbG9hdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvdGV4Y29vcmQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL3RleHR1cmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL2ltZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2xlcnAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbmRhcnJheS1vcHMuanMiLCJub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbm9kZV9tb2R1bGVzL2N3aXNlLWNvbXBpbGVyL2NvbXBpbGVyLmpzIiwibm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvY29tcGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbGliL3RodW5rLmpzIiwibm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9ub2RlX21vZHVsZXMvdW5pcS91bmlxLmpzIiwibm9kZV9tb2R1bGVzL25kYXJyYXkvbmRhcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZGFycmF5L25vZGVfbW9kdWxlcy9pb3RhLWFycmF5L2lvdGEuanMiLCJub2RlX21vZHVsZXMvbnVtYmVyLXV0aWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGx1Y2tlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYWYuanMvcmFmLmpzIiwibm9kZV9tb2R1bGVzL3JhbmRmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Ntb290aHN0ZXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL2NsZWFybWFza3Bhc3MuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL21hc2twYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9yZW5kZXJwYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9zaGFkZXJwYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL25vZGVfbW9kdWxlcy90aHJlZS1jb3B5c2hhZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWdsc2xpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZ2xzbGlmeS90eXBlcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zZGYtdGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zZGYtdGV4dC9saWIvcmVuZGVyZXIuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtc2RmLXRleHQvbGliL3RleHR1cmUtd3JhcC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaGFkZXItZnhhYS9jb21waWxlZC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaGFkZXItZnhhYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaW1wbGljaWFsLWNvbXBsZXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdHlwZWRhcnJheS1wb29sL25vZGVfbW9kdWxlcy9iaXQtdHdpZGRsZS90d2lkZGxlLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL3VhLWRldmljZS10eXBlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3VubGVycC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy93ZWJnbC1jb250ZXh0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3dlYmdsZXcvbm9kZV9tb2R1bGVzL3dlYWstbWFwL3dlYWstbWFwLmpzIiwibm9kZV9tb2R1bGVzL3dlYmdsZXcvd2ViZ2xldy5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9oYXMta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9pbW11dGFibGUuanMiLCJub2RlX21vZHVsZXMveHRlbmQvaW5kZXguanMiLCJub2RlX21vZHVsZXMveHRlbmQvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2ZvcmVhY2guanMiLCJub2RlX21vZHVsZXMveHRlbmQvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3h0ZW5kL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvc2hpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBOzs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3BIQTtBQUNBOzs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSEE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOzs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDenFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5aUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGJsYWNraWNlID0gcmVxdWlyZSgnLi8nKVxuXG5yZXF1aXJlKCdkb21yZWFkeScpKGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luID0gJzAnXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJ1xuXG4gICAgYmxhY2tpY2Uuc2V0dXAoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gV2ViR0wgc3VwcG9ydGVkXCIsIGVycilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdlYmdsKClcbiAgICB9KVxufSlcblxuXG5mdW5jdGlvbiB3ZWJnbCgpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcbiAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcylcblxuICAgIHZhciBhcHAgPSBibGFja2ljZSh7IFxuICAgICAgICBjYW52YXM6IGNhbnZhc1xuICAgIH0pXG5cbiAgICBhcHAubG9hZChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICBhcHAuc3RhcnQoKVxuICAgIH0pXG59IiwibW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9e1wicGFnZXNcIjpbXCJFeG8yU2VtaUJvbGQucG5nXCJdLFwiY2hhcnNcIjpbe1wiaWRcIjozMixcInhcIjowLFwieVwiOjAsXCJ3aWR0aFwiOjAsXCJoZWlnaHRcIjowLFwieG9mZnNldFwiOjAsXCJ5b2Zmc2V0XCI6MzMsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQxLFwieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6MjAsXCJoZWlnaHRcIjo0MSxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDAsXCJ4XCI6MjAsXCJ5XCI6MCxcIndpZHRoXCI6MTksXCJoZWlnaHRcIjo0MSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTY2LFwieFwiOjM5LFwieVwiOjAsXCJ3aWR0aFwiOjEzLFwiaGVpZ2h0XCI6NDAsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTI0LFwieFwiOjUyLFwieVwiOjAsXCJ3aWR0aFwiOjEzLFwiaGVpZ2h0XCI6NDAsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTI1LFwieFwiOjY1LFwieVwiOjAsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6NDAsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMyxcInhcIjo4MyxcInlcIjowLFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozNixcInhcIjoxMDEsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTMsXCJ4XCI6MTI2LFwieVwiOjAsXCJ3aWR0aFwiOjE3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkxLFwieFwiOjE0MyxcInlcIjowLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MSxcInhcIjoxNjAsXCJ5XCI6MCxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTgyLFwieFwiOjE4OCxcInlcIjowLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNjcsXCJ4XCI6MjEzLFwieVwiOjAsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwNixcInhcIjoyMzcsXCJ5XCI6MCxcIndpZHRoXCI6MTYsXCJoZWlnaHRcIjozOCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5MixcInhcIjoyNTMsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDcsXCJ4XCI6Mjc5LFwieVwiOjAsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzQsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMixcInhcIjozMDUsXCJ5XCI6MCxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTY5LFwieFwiOjMyOCxcInlcIjowLFwid2lkdGhcIjozMyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI2LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNjUsXCJ4XCI6MzYxLFwieVwiOjAsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE2MyxcInhcIjozOTAsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTYyLFwieFwiOjQxNSxcInlcIjowLFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE2LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNjEsXCJ4XCI6NDM4LFwieVwiOjAsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM4LFwieFwiOjQ1MixcInlcIjowLFwid2lkdGhcIjozMixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI1LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozNSxcInhcIjowLFwieVwiOjQxLFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozNyxcInhcIjozMCxcInlcIjo0MSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjMsXCJ4XCI6NjYsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjMzLFwieFwiOjkwLFwieVwiOjQxLFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ4LFwieFwiOjEwNCxcInlcIjo0MSxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTcsXCJ4XCI6MTMwLFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1NixcInhcIjoxNTUsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU1LFwieFwiOjE4MSxcInlcIjo0MSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTQsXCJ4XCI6MjA1LFwieVwiOjQxLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MyxcInhcIjoyMzEsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUyLFwieFwiOjI1NSxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTEsXCJ4XCI6MjgyLFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MCxcInhcIjozMDcsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ5LFwieFwiOjMzMixcInlcIjo0MSxcIndpZHRoXCI6MTksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIxLFwieFwiOjM1MSxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMyxcInhcIjozNzgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTIsXCJ4XCI6NDAzLFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA4LFwieFwiOjQyOCxcInlcIjo0MSxcIndpZHRoXCI6MTcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA3LFwieFwiOjQ0NSxcInlcIjo0MSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA1LFwieFwiOjQ2OSxcInlcIjo0MSxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDQsXCJ4XCI6NDgzLFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDMsXCJ4XCI6MCxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMCxcInhcIjoyNyxcInlcIjo3MyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTgsXCJ4XCI6NTIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkwLFwieFwiOjc3LFwieVwiOjczLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4OSxcInhcIjoxMDIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg4LFwieFwiOjEzMCxcInlcIjo3MyxcIndpZHRoXCI6MjksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODcsXCJ4XCI6MTU5LFwieVwiOjczLFwid2lkdGhcIjozOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjMxLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4NixcInhcIjoxOTgsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg1LFwieFwiOjIyNyxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODQsXCJ4XCI6MjU0LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MyxcInhcIjoyODIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjgyLFwieFwiOjMwNyxcInlcIjo3MyxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODAsXCJ4XCI6MzMzLFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3OSxcInhcIjozNTksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc4LFwieFwiOjM4NyxcInlcIjo3MyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzcsXCJ4XCI6NDE1LFwieVwiOjczLFwid2lkdGhcIjozNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NixcInhcIjo0NDksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc1LFwieFwiOjQ3MyxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzQsXCJ4XCI6MCxcInlcIjoxMDUsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjczLFwieFwiOjE4LFwieVwiOjEwNSxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3MixcInhcIjozMixcInlcIjoxMDUsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjcxLFwieFwiOjU5LFwieVwiOjEwNSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzAsXCJ4XCI6ODYsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OSxcInhcIjoxMTAsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OCxcInhcIjoxMzQsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIxLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NyxcInhcIjoxNjEsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NixcInhcIjoxODcsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NSxcInhcIjoyMTMsXCJ5XCI6MTA1LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NCxcInhcIjoyNDMsXCJ5XCI6MTA1LFwid2lkdGhcIjoyOSxcImhlaWdodFwiOjMxLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjksXCJ4YWR2YW5jZVwiOjI0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTYsXCJ4XCI6MjcyLFwieVwiOjEwNSxcIndpZHRoXCI6MjIsXCJoZWlnaHRcIjozMCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo4LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTksXCJ4XCI6Mjk0LFwieVwiOjEwNSxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjoyOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxNCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTY0LFwieFwiOjMwOCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMixcInhcIjozMzMsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIwLFwieFwiOjM1NyxcInlcIjoxMDUsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTksXCJ4XCI6MzgzLFwieVwiOjEwNSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExOCxcInhcIjo0MTksXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTE3LFwieFwiOjQ0NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTUsXCJ4XCI6NDcwLFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNCxcInhcIjowLFwieVwiOjEzNyxcIndpZHRoXCI6MjAsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMSxcInhcIjoyMCxcInlcIjoxMzcsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTAsXCJ4XCI6NDUsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA5LFwieFwiOjY5LFwieVwiOjEzNyxcIndpZHRoXCI6MzMsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMSxcInhcIjoxMDIsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTksXCJ4XCI6MTI3LFwieVwiOjEzNyxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk3LFwieFwiOjE1MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNzcsXCJ4XCI6MTc0LFwieVwiOjEzNyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMSxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3OCxcInhcIjoxOTgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMSxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjMsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0MyxcInhcIjoyMTksXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjExLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjIsXCJ4XCI6MjQzLFwieVwiOjEzNyxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjoyNCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjYwLFwieFwiOjI2NixcInlcIjoxMzcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1OCxcInhcIjoyODksXCJ5XCI6MTM3LFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjE0LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxODcsXCJ4XCI6MzAzLFwieVwiOjEzNyxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjoyMyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxNCxcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE4NSxcInhcIjozMjYsXCJ5XCI6MTM3LFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjIzLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjEwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNzksXCJ4XCI6MzQzLFwieVwiOjEzNyxcIndpZHRoXCI6MjAsXCJoZWlnaHRcIjoyMyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTc0LFwieFwiOjM2MyxcInlcIjoxMzcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3MSxcInhcIjozODcsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjIzLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjE0LFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTg2LFwieFwiOjQxMCxcInlcIjoxMzcsXCJ3aWR0aFwiOjIxLFwiaGVpZ2h0XCI6MjEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MTQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5OSxcInhcIjo0MzEsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNixcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNTMsXCJ4XCI6NDU3LFwieVwiOjEzNyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjIxLFwieFwiOjAsXCJ5XCI6MTc3LFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjE5LFwieFwiOjI4LFwieVwiOjE3NyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxOCxcInhcIjo1NSxcInlcIjoxNzcsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjIxLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMTcsXCJ4XCI6ODIsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjEzLFwieFwiOjEwOSxcInlcIjoxNzcsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMTIsXCJ4XCI6MTM3LFwieVwiOjE3NyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwNixcInhcIjoxNjUsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi02LFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMDUsXCJ4XCI6MTg5LFwieVwiOjE3NyxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjA0LFwieFwiOjIwNyxcInlcIjoxNzcsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTYsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwMixcInhcIjoyMjYsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjAxLFwieFwiOjI1MCxcInlcIjoxNzcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMDAsXCJ4XCI6Mjc0LFwieVwiOjE3NyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5NyxcInhcIjoyOTgsXCJ5XCI6MTc3LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTkzLFwieFwiOjMyOCxcInlcIjoxNzcsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxOTIsXCJ4XCI6MzU4LFwieVwiOjE3NyxcIndpZHRoXCI6MzAsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI1NSxcInhcIjozODgsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNTQsXCJ4XCI6NDE1LFwieVwiOjE3NyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjIwLFwieFwiOjQ0MCxcInlcIjoxNzcsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxNCxcInhcIjo0NjcsXCJ5XCI6MTc3LFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjAsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMTEsXCJ4XCI6MCxcInlcIjoyMTYsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxMCxcInhcIjoyOCxcInlcIjoyMTYsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwOSxcInhcIjo1NixcInlcIjoyMTYsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwNyxcInhcIjo4NCxcInlcIjoyMTYsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjAzLFwieFwiOjEwMixcInlcIjoyMTYsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5NixcInhcIjoxMjYsXCJ5XCI6MjE2LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjAsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxOTUsXCJ4XCI6MTU2LFwieVwiOjIxNixcIndpZHRoXCI6MzAsXCJoZWlnaHRcIjozOCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjowLFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTk0LFwieFwiOjE4NixcInlcIjoyMTYsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxNixcInhcIjoyMTYsXCJ5XCI6MjE2LFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjM1LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNTEsXCJ4XCI6MjQ0LFwieVwiOjIxNixcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjUwLFwieFwiOjI2OCxcInlcIjoyMTYsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzQsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0OSxcInhcIjoyOTIsXCJ5XCI6MjE2LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzcsXCJ4XCI6MzE2LFwieVwiOjIxNixcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzYsXCJ4XCI6MzM0LFwieVwiOjIxNixcIndpZHRoXCI6MTksXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNixcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzEsXCJ4XCI6MzUzLFwieVwiOjIxNixcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyOSxcInhcIjozNzYsXCJ5XCI6MjE2LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNDQsXCJ4XCI6NDAwLFwieVwiOjIxNixcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjQzLFwieFwiOjQyNSxcInlcIjoyMTYsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0MixcInhcIjo0NTAsXCJ5XCI6MjE2LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzgsXCJ4XCI6NDc1LFwieVwiOjIxNixcIndpZHRoXCI6MjIsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotNixcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzQsXCJ4XCI6MCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIzMyxcInhcIjoyNSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIzMixcInhcIjo1MCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNixcInhcIjo3NSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNSxcInhcIjo5OSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNCxcInhcIjoxMjMsXCJ5XCI6MjU0LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMjMsXCJ4XCI6MTQ3LFwieVwiOjI1NCxcIndpZHRoXCI6MzEsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjUyLFwieFwiOjE3OCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0NixcInhcIjoyMDIsXCJ5XCI6MjU0LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNDUsXCJ4XCI6MjI3LFwieVwiOjI1NCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjQxLFwieFwiOjI1MixcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0MCxcInhcIjoyNzYsXCJ5XCI6MjU0LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzksXCJ4XCI6MzAxLFwieVwiOjI1NCxcIndpZHRoXCI6MTksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNSxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzUsXCJ4XCI6MzIwLFwieVwiOjI1NCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjI4LFwieFwiOjM0NSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNyxcInhcIjozNjksXCJ5XCI6MjU0LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMjIsXCJ4XCI6MzkzLFwieVwiOjI1NCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjA4LFwieFwiOjQxOCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5OCxcInhcIjo0NDcsXCJ5XCI6MjU0LFwid2lkdGhcIjozOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi01LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxOTEsXCJ4XCI6NDg2LFwieVwiOjI1NCxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5MCxcInhcIjowLFwieVwiOjI4NyxcIndpZHRoXCI6MzgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjozMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTg5LFwieFwiOjM4LFwieVwiOjI4NyxcIndpZHRoXCI6MzcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTg4LFwieFwiOjc1LFwieVwiOjI4NyxcIndpZHRoXCI6MzcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjQ4LFwieFwiOjExMixcInlcIjoyODcsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTAsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNDcsXCJ4XCI6MTM3LFwieVwiOjI4NyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIzMCxcInhcIjoxNjIsXCJ5XCI6Mjg3LFwid2lkdGhcIjozNSxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjE1LFwieFwiOjE5NyxcInlcIjoyODcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTMsXCJ4YWR2YW5jZVwiOjE2LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNzAsXCJ4XCI6MjIwLFwieVwiOjI4NyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo4LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDIsXCJ4XCI6MjQxLFwieVwiOjI4NyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjEsXCJ4XCI6MjYyLFwieVwiOjI4NyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyMCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMyxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk0LFwieFwiOjI4NixcInlcIjoyODcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MTksXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6OCxcInhhZHZhbmNlXCI6MTQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ0LFwieFwiOjMwOSxcInlcIjoyODcsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MTksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MjQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3NixcInhcIjozMjMsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjE4LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjcsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxODAsXCJ4XCI6MzQxLFwieVwiOjI4NyxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjoxNyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTcyLFwieFwiOjM1OSxcInlcIjoyODcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTcsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOSxcInhcIjozODMsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjE3LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk2LFwieFwiOjM5NixcInlcIjoyODcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM0LFwieFwiOjQxNCxcInlcIjoyODcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE4NCxcInhcIjo0MzIsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxNixcImhlaWdodFwiOjE2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjMwLFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxODMsXCJ4XCI6NDQ4LFwieVwiOjI4NyxcIndpZHRoXCI6MTMsXCJoZWlnaHRcIjoxNCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxOCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTc1LFwieFwiOjQ2MSxcInlcIjoyODcsXCJ3aWR0aFwiOjIwLFwiaGVpZ2h0XCI6MTQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE2OCxcInhcIjo0ODEsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxOSxcImhlaWdodFwiOjE0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjYsXCJ4XCI6MCxcInlcIjozMTksXCJ3aWR0aFwiOjIyLFwiaGVpZ2h0XCI6MTQsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTcsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NixcInhcIjoyMixcInlcIjozMTksXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MTQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MjQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3MyxcInhcIjozNixcInlcIjozMTksXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5NSxcInhcIjo1NSxcInlcIjozMTksXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MjgsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NSxcInhcIjo3OSxcInlcIjozMTksXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH1dLFwia2VybmluZ3NcIjpbXSxcImluZm9cIjp7XCJmYWNlXCI6XCJFeG8gMiBTZW1pIEJvbGRcIixcInNpemVcIjozMixcImJvbGRcIjowLFwiaXRhbGljXCI6MCxcImNoYXJzZXRcIjpcIlwiLFwidW5pY29kZVwiOjAsXCJzdHJldGNoSFwiOjEwMCxcInNtb290aFwiOjEsXCJhYVwiOjEsXCJwYWRkaW5nXCI6WzQsNCw0LDRdLFwic3BhY2luZ1wiOlstOCwtOF19LFwiY29tbW9uXCI6e1wibGluZUhlaWdodFwiOjQwLFwiYmFzZVwiOjMzLFwic2NhbGVXXCI6NTEyLFwic2NhbGVIXCI6NTEyLFwicGFnZXNcIjoxLFwicGFja2VkXCI6MH19IiwicmVxdWlyZSgncmFmLmpzJylcblxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGliL3JlbmRlcmVyJylcbnZhciBjcmVhdGVGb250ID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWZvbnQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGdldENvbnRleHQgPSByZXF1aXJlKCd3ZWJnbC1jb250ZXh0JylcbnZhciBub29wID0gZnVuY3Rpb24oKXt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0KSB7XG4gICAgb3B0ID0gb3B0fHx7fVxuICAgIHZhciBhcHAgPSByZXF1aXJlKCdjYW52YXMtYXBwJykocmVuZGVyLCB4dGVuZCh7XG4gICAgICAgIGNvbnRleHQ6ICd3ZWJnbCcsXG4gICAgICAgIGNvbnRleHRBdHRyaWJ1dGVzOiB7IGFudGlhbGlhczogZmFsc2UsIGFscGhhOiBmYWxzZSB9LFxuICAgICAgICByZXRpbmE6IHRydWUsXG4gICAgICAgIG9uUmVzaXplOiBoYW5kbGVSZXNpemVcbiAgICB9LCBvcHQpKVxuXG4gICAgXG4gICAgdmFyIHJlbmRlcmVyXG5cbiAgICBhcHAubG9hZCA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgIGNiID0gY2IgfHwgbm9vcFxuICAgICAgICB2YXIgZ2wgPSBhcHAuY29udGV4dFxuICAgICAgICBjcmVhdGVGb250KGdsLCBmdW5jdGlvbihlcnIsIGZvbnQpIHtcbiAgICAgICAgICAgIHJlbmRlcmVyID0gUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIGdsOiBnbCwgXG4gICAgICAgICAgICAgICAgd2lkdGg6IGFwcC53aWR0aCwgXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhcHAuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGZvbnQ6IGZvbnRcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjYihlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGFwcFxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKGdsLCB3aWR0aCwgaGVpZ2h0LCBkdCkge1xuICAgICAgICBpZiAocmVuZGVyZXIpXG4gICAgICAgICAgICByZW5kZXJlci5kcmF3KGR0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIGlmIChyZW5kZXJlcilcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwU21vb3RoVGV4KGdsLCB0KSB7XG4gICAgICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgdC5tYWdGaWx0ZXIgPSBnbC5MSU5FQVJcblxuICAgICAgICB2YXIgZXh0ID0gKGdsLmdldEV4dGVuc2lvbignRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljJykgXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICAgICAgaWYgKGV4dCkge1xuICAgICAgICAgICAgdmFyIG1heEFuaXN0cm9waHkgPSBnbC5nZXRQYXJhbWV0ZXIoZXh0Lk1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG4gICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQuZ2VuZXJhdGVNaXBtYXAoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwTmVhcmVzdFRleChnbCwgdCkge1xuICAgICAgICB0Lm1pbkZpbHRlciA9IHQubWFnRmlsdGVyID0gZ2wuTkVBUkVTVFxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuc2V0dXAgPSBmdW5jdGlvbihjYikge1xuICAgIGNiID0gY2IgfHwgbm9vcFxuICAgIHZhciBnbCA9IGdldENvbnRleHQoKVxuICAgIGlmICghZ2wpIHtcbiAgICAgICAgZmFsbGJhY2soKVxuICAgICAgICBjYihuZXcgRXJyb3IoJ25vIFdlYkdMIHN1cHBvcnRlZCcpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKG51bGwpXG4gICAgfSBcbn1cblxuZnVuY3Rpb24gZmFsbGJhY2soKSB7XG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpXG4gICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZylcbiAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHBhcmVudC5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgICAgICBwYXJlbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG4gICAgICAgIHBhcmVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgcGFyZW50LnN0eWxlLnRvcCA9IHBhcmVudC5zdHlsZS5sZWZ0ID0gJzAnXG4gICAgICAgIHBhcmVudC5zdHlsZVsndGV4dC1hbGlnbiddID0gJ2NlbnRlcidcblxuICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSAnU29ycnksIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYkdMISdcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcbiAgICAgICAgdGV4dC5zdHlsZVsnbWFyZ2luLXRvcCddID0gJzI1JSdcbiAgICAgICAgdGV4dC5zdHlsZVsnZm9udC1mYW1pbHknXSA9ICdIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnXG4gICAgICAgIHRleHQuc3R5bGVbJ2ZvbnQtc2l6ZSddID0gJzI2cHgnXG5cbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRleHQpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocGFyZW50KVxuICAgIH1cbiAgICBpbWcuc3JjID0gJ2ltZy9uby13ZWJnbC5qcGcnXG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaW1nLnN0eWxlLm9wYWNpdHkgPSAnMC41J1xuICAgIGNlbnRlcihpbWcpXG59XG5cbmZ1bmN0aW9uIGNlbnRlcihlbCkge1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgIGVsLnN0eWxlLnRvcCA9ICcwJ1xuICAgIGVsLnN0eWxlLmxlZnQgPSAnMCdcbiAgICBlbC5zdHlsZS5sZWZ0ID0gJzAnXG4gICAgZWwuc3R5bGUuYm90dG9tID0gJzAnXG4gICAgZWwuc3R5bGUubWFyZ2luID0gJ2F1dG8nXG59IiwidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBCYXNlID0gVEhSRUUuU2NlbmVcblxudmFyIFlPRkYgPSAyLjVcblxuZnVuY3Rpb24gUmlnU2NlbmUob3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJpZ1NjZW5lKSlcbiAgICAgICAgcmV0dXJuIG5ldyBSaWdTY2VuZShvcHQpXG4gICAgQmFzZS5jYWxsKHRoaXMpXG4gICAgdGhpcy5mb2cgPSBuZXcgVEhSRUUuRm9nRXhwMiggMHgwYjA1MTYsIDAuMDAwMTUgKTtcblxuXG4gICAgLy8gdmFyIGJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgIC8vICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMjAsIDIwLCAxMCksXG4gICAgLy8gICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGFhYWFhYSwgd2lyZWZyYW1lOiBmYWxzZSB9KVxuICAgIC8vIClcblxuICAgIC8vIHRoaXMuYWRkKGJveClcblxuXG4gICAgdGhpcy50aW1lID0gMFxuICAgIHRoaXMuY3ViZU1hcCA9IG51bGxcbiAgICB0aGlzLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTVRMTG9hZGVyKClcbiAgICBsb2FkZXIubG9hZCgnbW9kZWwvUHJpcmF6bG9tbmF5YVVud3JhcHBlZEZpbmFsLm9iaicsICdtb2RlbC9QcmlyYXpsb21uYXlhVW53cmFwcGVkRmluYWwubXRsJywgZnVuY3Rpb24ob2JqZWN0LCBtYXRlcmlhbHMpIHtcbiAgICAgICAgdmFyIHMgPSAwLjMyNVxuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QsIG1hdGVyaWFscylcbiAgICAgICAgb2JqZWN0LnNjYWxlLnNldChzLHMscylcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgLT0gWU9GRlxuICAgICAgICB0aGlzLm1lc2ggPSBvYmplY3RcblxuICAgICAgICB0aGlzLm1lc2gudHJhdmVyc2UoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAgICAgICAgIG9iai5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIG9iai5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIG9iai5tYXRlcmlhbC5zaGluaW5lc3MgPSAxXG4gICAgICAgICAgICAgICAgb2JqLm1hdGVyaWFsLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKCdyZ2IoMTMwLDEzMCwxMzApJylcbiAgICAgICAgICAgICAgICBpZiAob2JqLm1hdGVyaWFsLm1hcCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai5tYXRlcmlhbC51bmlmb3JtcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZChvYmplY3QpXG4gICAgfS5iaW5kKHRoaXMpKVxuICAgIFxuXG4gICAgLy8gdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KCAxMCwgMywgMTAwLCAxNiApO1xuICAgIC8vIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZmZmMDAgfSApO1xuICAgIC8vIHZhciB0b3J1c0tub3QgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgLy8gdGhpcy5hZGQoIHRvcnVzS25vdCApO1xuICAgIC8vIHRvcnVzS25vdC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgIC8vIHRvcnVzS25vdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuXG4gICAgdGhpcy5saWdodHMgPSBbXG4gICAgICAgIFsgbmV3IFRIUkVFLlZlY3RvcjMoLTEwLCAyMCwgLTIwKSwgMSBdLFxuICAgICAgICBbIG5ldyBUSFJFRS5WZWN0b3IzKDE1LCAxMCwgMTUpLCAwLjUgXVxuICAgIF0ubWFwKGZ1bmN0aW9uKGFyZ3MsIGkpIHtcbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZGRmNGZkLCBhcmdzWzFdIClcbiAgICAgICAgbGlnaHQucG9zaXRpb24uY29weShhcmdzWzBdKVxuICAgICAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgICAgICBsaWdodC5zaGFkb3dNYXBXaWR0aCA9IDEwMjRcbiAgICAgICAgbGlnaHQuc2hhZG93TWFwSGVpZ2h0ID0gMTAyNFxuICAgICAgICBsaWdodC5zaGFkb3dDYW1lcmFOZWFyID0gMVxuICAgICAgICBsaWdodC5zaGFkb3dDYW1lcmFGYXIgPSAxMDBcblxuICAgICAgICAvLyBsaWdodC5oZWxwZXIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodEhlbHBlcihsaWdodCwgNClcbiAgICAgICAgLy8gdGhpcy5hZGQobGlnaHQuaGVscGVyKVxuICAgICAgICB0aGlzLmFkZChsaWdodClcbiAgICAgICAgcmV0dXJuIGxpZ2h0XG4gICAgfSx0aGlzKVxufVxuXG5pbmhlcml0cyhSaWdTY2VuZSwgQmFzZSlcblxubWl4ZXMoUmlnU2NlbmUsIHtcblxuICAgIHVwZGF0ZU1hdGVyaWFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGFhYWFhYSxcbiAgICAgICAgICAgIHJlZmxlY3Rpdml0eTogMC40LFxuICAgICAgICAgICAgZW52TWFwOiB0aGlzLmN1YmVNYXBcbiAgICAgICAgfSlcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGR0KSB7XG4gICAgICAgIHRoaXMudGltZSArPSBNYXRoLm1pbihkdCwgMzApLzEwMDBcbiAgICAgICAgdmFyIG0gPSB0aGlzLm1lc2hcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIHZhciBhbmltID0gTWF0aC5zaW4odGhpcy50aW1lKVxuXG4gICAgICAgIC8vIHRoaXMubGlnaHRzLmZvckVhY2goZnVuY3Rpb24obGlnaHQpIHsgbGlnaHQuaGVscGVyLnVwZGF0ZSgpIH0pXG4gICAgICAgIC8vIG0ucG9zaXRpb24ueSA9IFlPRkYgKyBhbmltKjAuMlxuICAgICAgICAvLyBtLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnRpbWUqMC4xKSowLjA1XG4gICAgICAgIC8vIG0ucG9zaXRpb24ueiA9IE1hdGguc2luKHRoaXMudGltZSowLjIpKjAuMVxuICAgICAgICAvLyBtLnJvdGF0aW9uLnggPSBhbmltKjAuMDNcbiAgICAgICAgLy8gbS5yb3RhdGlvbi55ID0gTWF0aC5zaW4odGhpcy50aW1lKk1hdGguY29zKHRoaXMudGltZSowLjEpKSowLjAwNVxuICAgIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmlnU2NlbmUiLCJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKTtcbnZhciBFZmZlY3RDb21wb3NlciA9IHJlcXVpcmUoXCJ0aHJlZS1lZmZlY3Rjb21wb3NlclwiKShUSFJFRSk7XG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiaW5oZXJpdHNcIik7XG52YXIgQmFzZSA9IEVmZmVjdENvbXBvc2VyLlJlbmRlclBhc3M7XG52YXIgcGx1Y2tlciA9IHJlcXVpcmUoXCJwbHVja2VyXCIpO1xudmFyIG51bWJlciA9IHJlcXVpcmUoXCJhcy1udW1iZXJcIik7XG52YXIgVGV4dEVsZW1lbnQgPSByZXF1aXJlKFwidGhyZWUtc2RmLXRleHRcIikoVEhSRUUpO1xudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpO1xudmFyIFVOSVRfU0NBTEUgPSAwLjE7XG52YXIgU0NBTEUgPSBbVU5JVF9TQ0FMRSwgVU5JVF9TQ0FMRSwgVU5JVF9TQ0FMRV07XG5cbnZhciBtYXQ0ID0ge1xuICAgIHNjYWxlOiByZXF1aXJlKFwiZ2wtbWF0NC9zY2FsZVwiKSxcbiAgICBpZGVudGl0eTogcmVxdWlyZShcImdsLW1hdDQvaWRlbnRpdHlcIiksXG4gICAgbXVsdGlwbHk6IHJlcXVpcmUoXCJnbC1tYXQ0L211bHRpcGx5XCIpLFxuICAgIHRyYW5zbGF0ZTogcmVxdWlyZShcImdsLW1hdDQvdHJhbnNsYXRlXCIpXG59O1xuXG52YXIgc2V0VmVjMyA9IHJlcXVpcmUoXCJnbC12ZWMzL3NldFwiKTtcbnZhciB0bXBWZWMzID0gWzAsIDAsIDBdO1xudmFyIHBsdWNrUGFuZWxzID0gcGx1Y2tlcihcInBhbmVsc1wiKTtcbnZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgY3JlYXRlU0RGU2hhZGVyID0gcmVxdWlyZShcImdsc2xpZnkvYWRhcHRlci5qc1wiKShcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzQgY29sb3I7XFxuYXR0cmlidXRlIHZlYzIgdGV4Y29vcmQwO1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcbnVuaWZvcm0gbWF0NCB2aWV3O1xcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG52YXJ5aW5nIGZsb2F0IGFuaW1PZmZzZXQ7XFxudm9pZCBtYWluKCkge1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogcG9zaXRpb247XFxuICB2X2NvbCA9IGNvbG9yO1xcbiAgdl90ZXgwID0gdGV4Y29vcmQwO1xcbiAgZ2xfUG9pbnRTaXplID0gMS4wO1xcbiAgYW5pbU9mZnNldCA9IHBvc2l0aW9uLnggLyAxMDAuMDtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4jaWZkZWYgR0xfRVNcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG52YXJ5aW5nIGZsb2F0IGFuaW1PZmZzZXQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTE7XFxudW5pZm9ybSBmbG9hdCBzbW9vdGhpbmc7XFxudW5pZm9ybSBmbG9hdCBmYWRlO1xcbmNvbnN0IHZlYzIgc2hhZG93T2Zmc2V0ID0gdmVjMigtMS4wIC8gNTEyLjApO1xcbmNvbnN0IHZlYzQgZ2xvd0NvbG9yID0gdmVjNCh2ZWMzKDAuMSksIDEuMCk7XFxuY29uc3QgZmxvYXQgZ2xvd01pbiA9IDAuNDtcXG5jb25zdCBmbG9hdCBnbG93TWF4ID0gMC44O1xcbnZvaWQgbWFpbigpIHtcXG4gIGZsb2F0IGFuaW0gPSBmYWRlICogYW5pbU9mZnNldDtcXG4gIGFuaW0gPSBjbGFtcChtaXgoYW5pbSwgMS4wLCBmYWRlICogZmFkZSksIDAuMCwgMS4wKTtcXG4gIHZlYzQgc21vb3RoQ29sb3IgPSB2ZWM0KDAuMCk7XFxuICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUwLCB2X3RleDApO1xcbiAgZmxvYXQgZHN0ID0gdGV4Q29sb3IuYTtcXG4gIGZsb2F0IHNtb290aEFtdCA9IG1peCgxLjUsIHNtb290aGluZywgYW5pbSk7XFxuICBmbG9hdCBhbHBoYSA9IHNtb290aHN0ZXAoMC41IC0gc21vb3RoQW10LCAwLjUgKyBzbW9vdGhBbXQsIGRzdCk7XFxuICB2ZWM0IGJhc2UgPSB2X2NvbCAqIHZlYzQoYWxwaGEpO1xcbiAgZmxvYXQgZ2xvd0RzdCA9IHRleHR1cmUyRCh0ZXh0dXJlMCwgdl90ZXgwICsgc2hhZG93T2Zmc2V0KS5hO1xcbiAgdmVjNCBnbG93ID0gZ2xvd0NvbG9yICogc21vb3Roc3RlcChnbG93TWluLCBnbG93TWF4LCBnbG93RHN0KTtcXG4gIGZsb2F0IG1hc2sgPSAxLjAgLSBhbHBoYTtcXG4gIGdsX0ZyYWdDb2xvciA9IG1peCh2ZWM0KDAuMCksIGJhc2UsIGFuaW0pO1xcbiAgaWYoZ2xfRnJhZ0NvbG9yLmEgPCAwLjEpXFxuICAgIGRpc2NhcmQ7XFxuICBcXG59XCIsIFt7XCJuYW1lXCI6XCJwcm9qZWN0aW9uXCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcInZpZXdcIixcInR5cGVcIjpcIm1hdDRcIn0se1wibmFtZVwiOlwibW9kZWxcIixcInR5cGVcIjpcIm1hdDRcIn0se1wibmFtZVwiOlwidGV4dHVyZTBcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJ0ZXh0dXJlMVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInNtb290aGluZ1wiLFwidHlwZVwiOlwiZmxvYXRcIn0se1wibmFtZVwiOlwiZmFkZVwiLFwidHlwZVwiOlwiZmxvYXRcIn1dLCBbe1wibmFtZVwiOlwicG9zaXRpb25cIixcInR5cGVcIjpcInZlYzRcIn0se1wibmFtZVwiOlwiY29sb3JcIixcInR5cGVcIjpcInZlYzRcIn0se1wibmFtZVwiOlwidGV4Y29vcmQwXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9XSk7XG52YXIgc2RmU2hhZGVyO1xuXG5mdW5jdGlvbiBUZXh0UGFzcyhvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFBhc3MpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRQYXNzKG9wdCk7XG5cbiAgICBvcHQgPSBvcHQgfHwge307XG4gICAgdmFyIHJlbmRlcmVyID0gb3B0LnJlbmRlcmVyO1xuICAgIHZhciBjYW1lcmEgPSBvcHQuY2FtZXJhO1xuICAgIHZhciBzY2VuZSA9IG9wdC5zY2VuZTtcbiAgICBCYXNlLmNhbGwodGhpcywgc2NlbmUsIGNhbWVyYSk7XG4gICAgdmFyIGZvbnQgPSBvcHQuZm9udDtcblxuICAgIGlmICghc2RmU2hhZGVyKVxuICAgICAgICBzZGZTaGFkZXIgPSBjcmVhdGVTREZTaGFkZXIocmVuZGVyZXIuZ2V0Q29udGV4dCgpKTtcblxuICAgIHRoaXMuZ3JvdXBzID0gKG9wdC5ncm91cHMgfHwgW10pLm1hcChjcmVhdGVHcm91cHMocmVuZGVyZXIsIGZvbnQpKTtcbiAgICB3aW5kb3cuZ3JvdXBzID0gdGhpcy5ncm91cHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwcyhyZW5kZXJlciwgZm9udCkge1xuICAgIHJldHVybiBmdW5jdGlvbihncm91cCwgZ3JvdXBJbmRleCkge1xuICAgICAgICBncm91cC5lbGVtZW50cyA9IGdyb3VwLnBhbmVscy5tYXAoZnVuY3Rpb24ocGFuZWwsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc2lkZSA9IChpbmRleCA9PT0gMCA/IDEgOiAtMSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYW5lbC5sYWJlbHMubWFwKGZ1bmN0aW9uKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobGFiZWwsIHNpZGUsIHJlbmRlcmVyLCBmb250KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgYikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYuY29uY2F0KGIpO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgZ3JvdXAuX29wYWNpdHkgPSAxO1xuICAgICAgICBncm91cC5mYWRlID0gMTtcbiAgICAgICAgZ3JvdXAuc2hvd2luZyA9IHRydWU7XG4gICAgICAgIGdyb3VwLmFuaW1hdGluZ091dCA9IGZhbHNlO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShncm91cCwgXCJvcGFjaXR5XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwLl9vcGFjaXR5O1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICBncm91cC5fb3BhY2l0eSA9IHZhbDtcblxuICAgICAgICAgICAgICAgIGdyb3VwLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnRleHQub3BhY2l0eSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdyb3VwLnBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcC5jb250YWluZXIudmlzaWJsZSA9IHZhbCA+IDAuMDE7XG5cbiAgICAgICAgICAgICAgICAgICAgcC5zaGFwZXMuZm9yRWFjaChmdW5jdGlvbihzaGFwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUubWF0ZXJpYWwub3BhY2l0eSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnZpc2libGUgPSB2YWwgPiAwLjAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobGFiZWwsIHNpZGUsIHJlbmRlcmVyLCBmb250KSB7XG4gICAgdmFyIHRleHRPcHQgPSB4dGVuZChsYWJlbCwge1xuICAgICAgICBmb250OiBmb250LFxuICAgICAgICB0ZXh0dXJlczogZm9udC50ZXh0dXJlcyxcbiAgICAgICAgc2hhZGVyOiBzZGZTaGFkZXJcbiAgICB9KTtcblxuICAgIHZhciB0ZXh0RWwgPSBUZXh0RWxlbWVudChyZW5kZXJlciwgdGV4dE9wdCk7XG5cbiAgICByZXR1cm4geHRlbmQobGFiZWwsIHtcbiAgICAgICAgdGV4dDogdGV4dEVsLFxuICAgICAgICBzaWRlOiBzaWRlXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoY2FtZXJhLCBlLCBmYWRlKSB7XG4gICAgZS5vYmplY3QzZC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcbiAgICB2YXIgdHJhbnNmb3JtID0gZS50ZXh0LnRyYW5zZm9ybTtcbiAgICBtYXQ0LmlkZW50aXR5KHRyYW5zZm9ybSk7XG4gICAgbWF0NC5zY2FsZSh0cmFuc2Zvcm0sIHRyYW5zZm9ybSwgU0NBTEUpO1xuICAgIHNldFZlYzModG1wVmVjMywgZS50cmFuc2xhdGlvblswXSwgZS50cmFuc2xhdGlvblsxXSwgZS50cmFuc2xhdGlvblsyXSk7XG4gICAgbWF0NC50cmFuc2xhdGUodHJhbnNmb3JtLCB0cmFuc2Zvcm0sIHRtcFZlYzMpO1xuICAgIHNldFZlYzModG1wVmVjMywgZS5zaXplLCBlLnNpemUsIGUuc2l6ZSk7XG4gICAgbWF0NC5zY2FsZSh0cmFuc2Zvcm0sIHRyYW5zZm9ybSwgdG1wVmVjMyk7XG4gICAgZS50ZXh0LnNoYWRlci5iaW5kKCk7XG4gICAgZS50ZXh0LnNoYWRlci51bmlmb3Jtcy5mYWRlID0gZmFkZTtcbiAgICBlLnRleHQuZHJhdyhjYW1lcmEsIGUub2JqZWN0M2QpO1xufVxuXG5pbmhlcml0cyhUZXh0UGFzcywgQmFzZSk7XG5cblRleHRQYXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihyZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhKSB7XG4gICAgQmFzZS5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcywgcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSk7XG4gICAgdmFyIGNhbWVyYSA9IHRoaXMuY2FtZXJhO1xuXG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnKSB7XG4gICAgICAgIGcuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoIWcuc2hvd2luZylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHJlbmRlckVsZW1lbnQoY2FtZXJhLCBlLCBnLmZhZGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLnJlc2V0R0xTdGF0ZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0UGFzczsiLCJ2YXIgVHdlZW5NYXggPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxudmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxudmFyIHNtb290aHN0ZXAgPSByZXF1aXJlKCdzbW9vdGhzdGVwJylcblxudmFyIGxhc3RJbmRleCA9IC0xXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udHJvbGxlciwgbGFiZWxzKSB7XG4gICAgdmFyIGNsb3NlSW5kZXggPSBjbG9zZXN0KGNvbnRyb2xsZXIsIGxhYmVscylcblxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRyb2xsZXIudGhldGEpXG4gICAgbGFiZWxzLmZvckVhY2goZnVuY3Rpb24obGFiZWwsIGkpIHtcbiAgICAgICAgLy8gc2V0U2hvd2luZyhsYWJlbCwgdHJ1ZSlcbiAgICAgICAgdmFyIHZpc2libGUgPSBpPT09Y2xvc2VJbmRleFxuICAgICAgICBpZiAodmlzaWJsZSAmJiAhbGFiZWwuc2hvd2luZykge1xuICAgICAgICAgICAgYW5pbWF0ZUluRmVhdHVyZShsYWJlbClcbiAgICAgICAgfSBlbHNlIGlmICghdmlzaWJsZSAmJiBsYWJlbC5zaG93aW5nKSB7XG4gICAgICAgICAgICBhbmltYXRlT3V0RmVhdHVyZShsYWJlbClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzLmhpZGVBbGwgPSBmdW5jdGlvbihmZWF0dXJlcykge1xuICAgIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24oZikge1xuICAgICAgICBzZXRTaG93aW5nKGYsIGZhbHNlKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3RhbmNlKGNvbnRyb2xsZXIsIGxhYmVsKSB7XG4gICAgLy9zaWduZWQgZGlzdGFuY2VcbiAgICB2YXIgeCA9IC1sYWJlbC50aGV0YSwgXG4gICAgICAgIHkgPSBjb250cm9sbGVyLnRoZXRhXG5cbiAgICB2YXIgYWJkaXN0ID0gTWF0aC5hYnMoeCAtIHkpXG4gICAgcmV0dXJuIE1hdGgubWluKCgyICogTWF0aC5QSSkgLSBhYmRpc3QsIGFiZGlzdClcblxufVxuXG5mdW5jdGlvbiBjbG9zZXN0KGNvbnRyb2xsZXIsIGxhYmVscykge1xuICAgIHZhciBtaW5EaXN0ID0gTnVtYmVyLk1BWF9WQUxVRVxuICAgIHZhciByZXQgPSAtMVxuICAgIGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uKGxhYmVsLCBpbmRleCkge1xuICAgICAgICB2YXIgZGlzdCA9IGRpc3RhbmNlKGNvbnRyb2xsZXIsIGxhYmVsKVxuICAgICAgICBcbiAgICAgICAgaWYgKGRpc3QgPCBtaW5EaXN0KSB7XG4gICAgICAgICAgICBtaW5EaXN0ID0gZGlzdFxuICAgICAgICAgICAgcmV0ID0gaW5kZXhcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBzZXRTaG93aW5nKGZlYXR1cmUsIHNob3dpbmcpIHtcbiAgICBmZWF0dXJlLnNob3dpbmcgPSBzaG93aW5nXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVJbkZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGZlYXR1cmUuc2hvd2luZyA9IHRydWVcbiAgICBmZWF0dXJlLmZhZGUgPSAwXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKGZlYXR1cmUpXG4gICAgVHdlZW5NYXgudG8oZmVhdHVyZSwgMC41LCB7XG4gICAgICAgIGZhZGU6IDEuMCxcbiAgICAgICAgZWFzZTogXCJlYXNlT3V0UXVhZFwiXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZU91dEZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGlmIChmZWF0dXJlLmFuaW1hdGluZ091dClcbiAgICAgICAgcmV0dXJuXG5cbiAgICBmZWF0dXJlLmFuaW1hdGluZ091dCA9IHRydWVcbiAgICBUd2Vlbk1heC50byhmZWF0dXJlLCAwLjUsIHtcbiAgICAgICAgZmFkZTogMCxcbiAgICAgICAgZWFzZTogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgb25Db21wbGV0ZTogaGlkZUZlYXR1cmUuYmluZChudWxsLCBmZWF0dXJlKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhpZGVGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICBmZWF0dXJlLmFuaW1hdGluZ091dCA9IGZhbHNlXG4gICAgZmVhdHVyZS5zaG93aW5nID0gZmFsc2Vcbn0iLCJ2YXIgRm9udCA9IHJlcXVpcmUoJy4uL2ZvbnRzL0V4bzJTZW1pQm9sZC5qc29uJylcbnZhciBmb250SW1hZ2UgPSAnZm9udHMvRXhvMlNlbWlCb2xkLnBuZydcbnZhciBpbWcgPSByZXF1aXJlKCdpbWcnKVxudmFyIGNyZWF0ZVRleHR1cmUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsLCBjYikge1xuICAgIGltZyhmb250SW1hZ2UsIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNiKGVycilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgRm9udC50ZXh0dXJlcyA9IFtyZXNdLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRleHR1cmUoZ2wsIGkpXG5cbiAgICAgICAgICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgICAgIHQubWFnRmlsdGVyID0gZ2wuTElORUFSXG5cbiAgICAgICAgICAgIHZhciBleHQgPSAoZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4QW5pc3Ryb3BoeSA9IGdsLmdldFBhcmFtZXRlcihleHQuTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5nZW5lcmF0ZU1pcG1hcCgpXG4gICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2IobnVsbCwgRm9udClcbiAgICB9KVxufSIsInZhciBUZXh0UGFzcyA9IHJlcXVpcmUoJy4vVGV4dFBhc3MnKVxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbi8vIHZhciBnZXRTVkcgPSByZXF1aXJlKCcuL2dldC1zdmcnKVxuLy8gdmFyIGdldFBvbHkgPSByZXF1aXJlKCcuL2dldC1wb2x5Z29uJylcbnZhciBDb21wbGV4ID0gcmVxdWlyZSgndGhyZWUtc2ltcGxpY2lhbC1jb21wbGV4JykoVEhSRUUpXG52YXIgbW9iaWxlID0gcmVxdWlyZSgnLi9pcy1tb2JpbGUnKVxuXG52YXIgVU5JVF9TQ0FMRSA9IDAuMVxuXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vdGV4dC1kYXRhJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHQpIHtcbiAgICB2YXIgZ3JvdXBzID0gY3JlYXRlR3JvdXBzKClcbiAgICBcbiAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgICAvLyB2YXIgbGVuID0gMTAwXG4gICAgICAgIC8vIHZhciBkaXIgPSBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLmNvcyhncm91cC50aGV0YSksIDAsIE1hdGguc2luKGdyb3VwLnRoZXRhKSlcbiAgICAgICAgLy8gdmFyIGFycm93ID0gbmV3IFRIUkVFLkFycm93SGVscGVyKGRpciwgbmV3IFRIUkVFLlZlY3RvcjMoKSwgbGVuKVxuICAgICAgICAvLyBvcHQuc2NlbmUuYWRkKGFycm93KVxuXG4gICAgICAgIGdyb3VwLnBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHBhbmVsKSB7XG4gICAgICAgICAgICBvcHQuc2NlbmUuYWRkKHBhbmVsLmNvbnRhaW5lcilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIFRleHRQYXNzKHh0ZW5kKG9wdCwge1xuICAgICAgICBncm91cHM6IGdyb3Vwc1xuICAgIH0pKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cHMoKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGdyb3VwLCBpLCBsaXN0KSB7XG4gICAgICAgIHZhciB0aGV0YSA9IGkvKGxpc3QubGVuZ3RoKzEpICogTWF0aC5QSSAqIDJcbiAgICAgICAgZ3JvdXAgPSB4dGVuZChncm91cCwge1xuICAgICAgICAgICAgcGFuZWxzOiBncm91cC5wYW5lbHMubWFwKGZ1bmN0aW9uKHBhbmVsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYW5lbChwYW5lbCwgaW5kZXgsIHRoZXRhKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGV0YTogdGhldGFcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFuZWwoZGF0YSwgaW5kZXgsIHJvdGF0aW9uKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpXG4gICAgdmFyIG1pcnJvciA9IGluZGV4ID09PSAxXG5cbiAgICB2YXIgcmFkaXVzID0gbW9iaWxlID8gMTggOiAyMFxuICAgIGlmIChtaXJyb3IpIHtcbiAgICAgICAgcm90YXRpb24gKz0gTWF0aC5QSSoyXG4gICAgICAgIHJhZGl1cyAqPSAtMVxuICAgIH1cblxuICAgIC8vbWFrZSB0ZXh0IHBlcnBlbmRpY3VsYXIgdG8gdGhldGEgcm90YXRpb25cbiAgICAvLyByb3RhdGlvbiAtPSBNYXRoLlBJLzIgXG5cbiAgICBjb250YWluZXIucG9zaXRpb24uc2V0KFxuICAgICAgICBNYXRoLmNvcyhyb3RhdGlvbikgKiByYWRpdXMsXG4gICAgICAgIDE1LFxuICAgICAgICBNYXRoLnNpbihyb3RhdGlvbikgKiByYWRpdXNcbiAgICApXG4gICAgXG5cbiAgICAvLyBjb250YWluZXIucG9zaXRpb24uY29weShkYXRhLm9yaWdpbilcblxuICAgIHZhciBwb3MgPSBjb250YWluZXIucG9zaXRpb25cbiAgICB2YXIgZGlyID0gcG9zLmNsb25lKCkuc3ViKG5ldyBUSFJFRS5WZWN0b3IzKDAscG9zLnksMCkpLm5vcm1hbGl6ZSgpXG5cbiAgICB2YXIgcm90T2ZmID0gMC8vTWF0aC5QSS8xMCAqIChtaXJyb3IgPyAtMSA6IDEpXG5cbiAgICB2YXIgZHggPSBwb3MueCxcbiAgICAgICAgZHogPSBwb3MueixcbiAgICAgICAgdGhldGEgPSAtTWF0aC5hdGFuMihkeiwgZHgpIC0gcm90T2ZmXG4gICAgLy8gY29udGFpbmVyLnJvdGF0aW9uLnkgPSB0aGV0YVxuICAgIGNvbnRhaW5lci5yb3RhdGlvbi55ID0gdGhldGFcbiAgICBjb250YWluZXIucm90YXRpb24ueCA9IDBcbiAgICBcbiAgICBpZiAobWlycm9yKSB7XG4gICAgICAgIGNvbnRhaW5lci5zY2FsZS54ICo9IC0xXG4gICAgfVxuXG4gICAgdmFyIGxhYmVscyA9IGRhdGEubGFiZWxzLm1hcChmdW5jdGlvbihsYWJlbCkge1xuICAgICAgICB2YXIgb2JqID0gbmV3IFRIUkVFLk9iamVjdDNEKClcbiAgICAgICAgY29udGFpbmVyLmFkZChvYmopXG4gICAgICAgIGlmIChtaXJyb3IpXG4gICAgICAgICAgICBvYmoucG9zaXRpb24ueCA9IC1kYXRhLndpZHRofHwwXG4gICAgICAgIHJldHVybiB4dGVuZCh7IHNpemU6IDEsIHRyYW5zbGF0aW9uOiBbMCwgMCwgMF0gfSwgbGFiZWwsIHsgXG4gICAgICAgICAgICBvYmplY3QzZDogb2JqLCBcbiAgICAgICAgICAgIC8vIHRoZXRhOiB0aGV0YVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICB2YXIgc2hhcGVzID0gW11cbiAgICAvLyB2YXIgc2hhcGVzID0gKGRhdGEuc2hhcGVzfHxbXSkubWFwKGZ1bmN0aW9uKHNoYXBlKSB7XG4gICAgLy8gICAgIHZhciBjb21wbGV4ID0gc2hhcGUucGF0aCA/IGdldFNWRyhzaGFwZS5wYXRoKSA6IGdldFBvbHkoc2hhcGUucG9pbnRzKVxuICAgIC8vICAgICB2YXIgZ2VvID0gQ29tcGxleChjb21wbGV4KVxuICAgIC8vICAgICB2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgXG4gICAgLy8gICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgLy8gICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgIC8vICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAvLyAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG4gICAgLy8gICAgIH0pKVxuICAgICAgICBcbiAgICAvLyAgICAgaWYgKHNoYXBlLnBvc2l0aW9uKSBtZXNoLnBvc2l0aW9uLmZyb21BcnJheShzaGFwZS5wb3NpdGlvbilcbiAgICAvLyAgICAgaWYgKHNoYXBlLnNjYWxlKSBtZXNoLnNjYWxlLmZyb21BcnJheShzaGFwZS5zY2FsZSlcblxuICAgIC8vICAgICBjb250YWluZXIuYWRkKG1lc2gpXG4gICAgLy8gICAgIHJldHVybiBtZXNoXG4gICAgLy8gfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBzaGFwZXM6IHNoYXBlcyxcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgICB9XG59IiwidmFyIGRldmljZVR5cGUgPSByZXF1aXJlKCd1YS1kZXZpY2UtdHlwZScpXG5tb2R1bGUuZXhwb3J0cyA9IC8ocGhvbmUpfCh0YWJsZXQpL2kudGVzdChkZXZpY2VUeXBlKG5hdmlnYXRvci51c2VyQWdlbnQpKSIsInZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG5cbnZhciBSaWdTY2VuZSA9IHJlcXVpcmUoJy4vUmlnU2NlbmUnKVxudmFyIE9yYml0Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vdGhyZWUtb3JiaXQtY2FtZXJhJykoVEhSRUUpXG52YXIgRWZmZWN0cyA9IHJlcXVpcmUoJy4vc2V0dXAtZWZmZWN0cycpXG5cbnZhciBUd2Vlbk1heCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlR3ZWVuTWF4IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5Ud2Vlbk1heCA6IG51bGwpXG52YXIgYW5pbWF0ZUxhYmVscyA9IHJlcXVpcmUoJy4vYW5pbWF0ZS1sYWJlbHMnKVxudmFyIGhpZGVMYWJlbHMgPSBhbmltYXRlTGFiZWxzLmhpZGVBbGxcblxudmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxudmFyIHBsdWNrID0gcmVxdWlyZSgncGx1Y2tlcicpXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJylcbnZhciBzbW9vdGhzdGVwID0gcmVxdWlyZSgnc21vb3Roc3RlcCcpXG52YXIgbGVycCA9IHJlcXVpcmUoJ2xlcnAnKVxudmFyIHVubGVycCA9IHJlcXVpcmUoJ3VubGVycCcpXG52YXIgbW9iaWxlID0gcmVxdWlyZSgnLi9pcy1tb2JpbGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdCkge1xuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIHZhciBGb250ID0gb3B0LmZvbnRcblxuICAgIGlmICghRm9udCB8fCAhRm9udC50ZXh0dXJlcylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgZm9udCB3aXRoIHRleHR1cmVzJylcblxuXG4gICAgdmFyIHJlbmRlcmVyLFxuICAgICAgICBzY2VuZSxcbiAgICAgICAgdGV4dFBhc3MsXG4gICAgICAgIGNhbWVyYSxcbiAgICAgICAgY29udHJvbGxlcixcbiAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgIHdhdGVyLFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBsYWJlbHMgPSBbXSxcbiAgICAgICAgdGltZSA9IDBcblxuICAgIGlmICghb3B0LmdsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc3BlY2lmeSBHTCBjb250ZXh0JylcblxuICAgIHNldHVwKG9wdC5nbCwgb3B0LndpZHRofHwwLCBvcHQuaGVpZ2h0fHwwKVxuXG4gICAgZnVuY3Rpb24gZHJhdyhkdCkge1xuICAgICAgICB0aW1lICs9ICBNYXRoLm1pbihkdCwgMzApIC8gMTAwMFxuICAgICAgICAvLyByZW5kZXJlci5yZXNldEF0dHJpYnV0ZXMoKVxuICAgICAgICByZW5kZXJlci5yZXNldEdMU3RhdGUoKVxuXG4gICAgICAgIHdhdGVyLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0aW1lICogMC4xXG4gICAgICAgIHdhdGVyLnJlbmRlcigpXG5cbiAgICAgICAgY29udHJvbGxlci51cGRhdGUoKVxuICAgICAgICBcbiAgICAgICAgc2NlbmUudXBkYXRlKGR0KVxuICAgICAgICBpZiAoZWZmZWN0cylcbiAgICAgICAgICAgIGVmZmVjdHMucmVuZGVyKGR0KVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRleHRQYXNzLnJlbmRlcihyZW5kZXJlcilcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGVMYWJlbHMoY29udHJvbGxlciwgbGFiZWxzKVxuXG4gICAgICAgIHZhciB0ID0gdW5sZXJwKDAuNiwgMS40LCBjb250cm9sbGVyLnBoaSlcbiAgICAgICAgdCA9IHNtb290aHN0ZXAoMS41LCAwLjk1LCB0KVxuICAgICAgICB2YXIgcmFuZ2UgPSBjbGFtcCh0LCAwLCAxKVxuICAgICAgICB3YXRlci5hbHBoYSA9IHJhbmdlfHwwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoZ2wsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IFxuICAgICAgICAgICAgY2FudmFzOiBnbC5jYW52YXMsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgICAgICAgYWxwaGE6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDApXG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcFR5cGUgPSBUSFJFRS5CYXNpY1NoYWRvd01hcFxuICAgICAgICAvLyByZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZVxuXG4gICAgICAgIG9wdC5mb3YgPSBudW1iZXIob3B0LmZvdiwgNTApXG4gICAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShvcHQuZm92LCB3aWR0aC9oZWlnaHQsIDAuNSwgMjAwMDApXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5mcm9tQXJyYXkobW9iaWxlIFxuICAgICAgICAgICAgICAgID8gWy04MCwgMzgsIC04MF1cbiAgICAgICAgICAgICAgICA6IFstNjAsIDM4LCAtNDBdKVxuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpXG5cbiAgICAgICAgY29udHJvbGxlciA9IG5ldyBPcmJpdENvbnRyb2xsZXIoY2FtZXJhKVxuICAgICAgICBjb250cm9sbGVyLnVzZXJQYW4gPSBmYWxzZVxuICAgICAgICBjb250cm9sbGVyLnVzZXJQYW5TcGVlZCA9IDAuMFxuICAgICAgICBjb250cm9sbGVyLnpvb21TcGVlZCA9IDAuMVxuICAgICAgICBjb250cm9sbGVyLnJvdGF0ZVNwZWVkID0gMC4yXG4gICAgICAgIGNvbnRyb2xsZXIubWluRGlzdGFuY2UgPSAzMFxuICAgICAgICBjb250cm9sbGVyLm1heERpc3RhbmNlID0gMjAwLjBcbiAgICAgICAgY29udHJvbGxlci5tYXhQb2xhckFuZ2xlID0gOTAgKiBNYXRoLlBJLzE4MFxuICAgICAgICBjb250cm9sbGVyLm1pblBvbGFyQW5nbGUgPSA0MCAqIE1hdGguUEkvMTgwXG4gICAgICAgIGNvbnRyb2xsZXIuY2VudGVyLnNldCggMCwgNSwgMCApXG4gICAgICAgIHNjZW5lID0gUmlnU2NlbmUoKVxuXG4gICAgICAgIHJlcXVpcmUoJy4vc2V0dXAtZmxvb3InKShzY2VuZSlcblxuICAgICAgICB3YXRlciA9IHJlcXVpcmUoJy4vc2V0dXAtd2F0ZXInKShyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSlcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmN1YmVNYXAgPSB3YXRlci5jdWJlTWFwXG4gICAgICAgIHNjZW5lLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgICAgICB2YXIgcGFzcyA9IHJlcXVpcmUoJy4vY3JlYXRlLXRleHQtcGFzcycpKHtcbiAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlcixcbiAgICAgICAgICAgIHNjZW5lOiBzY2VuZSxcbiAgICAgICAgICAgIGNhbWVyYTogY2FtZXJhLFxuICAgICAgICAgICAgZm9udDogRm9udFxuICAgICAgICB9KVxuXG4gICAgICAgIHRleHRQYXNzID0gcGFzc1xuICAgICAgICBsYWJlbHMgPSBwYXNzLmdyb3Vwc1xuXG4gICAgICAgIGVmZmVjdHMgPSBFZmZlY3RzKHtcbiAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlcixcbiAgICAgICAgICAgIHNjZW5lOiBzY2VuZSxcbiAgICAgICAgICAgIGNhbWVyYTogY2FtZXJhLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgYmx1cjogZmFsc2UsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIHJlbmRlclBhc3M6IHBhc3NcbiAgICAgICAgfSlcblxuICAgICAgICBoaWRlTGFiZWxzKGxhYmVscylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aWR0aC9oZWlnaHRcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKVxuXG4gICAgICAgIGlmIChlZmZlY3RzKVxuICAgICAgICAgICAgZWZmZWN0cy5yZXNpemUod2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3OiBkcmF3LFxuICAgICAgICByZXNpemU6IGhhbmRsZVJlc2l6ZVxuICAgIH1cbn0iLCJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIEVmZmVjdENvbXBvc2VyID0gcmVxdWlyZSgndGhyZWUtZWZmZWN0Y29tcG9zZXInKShUSFJFRSlcbnZhciBjcmVhdGVGWEFBID0gcmVxdWlyZSgndGhyZWUtc2hhZGVyLWZ4YWEnKShUSFJFRSlcbnZhciBjcmVhdGVCbHVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2JsdXInKVxudmFyIGNyZWF0ZUxlbnMgPSByZXF1aXJlKCcuL3NoYWRlcnMvbGVucycpXG52YXIgY3JlYXRlRW1wdHkgPSByZXF1aXJlKCcuL3NoYWRlcnMvcGFzcycpXG4vLyB2YXIgVGV4dFBhc3MgPSByZXF1aXJlKCcuL1RleHRQYXNzJylcblxubW9kdWxlLmV4cG9ydHMgPSBFZmZlY3RzXG5cbmZ1bmN0aW9uIEVmZmVjdHMob3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVmZmVjdHMpKSBcbiAgICAgICAgcmV0dXJuIG5ldyBFZmZlY3RzKG9wdClcbiAgICBvcHQgPSBvcHR8fHt9XG5cbiAgICB2YXIgcGFyYW1ldGVycyA9IHsgXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIFxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgXG4gICAgICAgIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIFxuICAgIH1cbiAgICB2YXIgd2lkdGggPSBvcHQud2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gb3B0LmhlaWdodFxuICAgIHZhciByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKG9wdC5yZW5kZXJlciwgcmVuZGVyVGFyZ2V0KVxuICAgIHRoaXMuY29tcG9zZXIuYWRkUGFzcyhvcHQucmVuZGVyUGFzcylcbiAgICBcbiAgICB0aGlzLnNoYWRlcnMgPSBbXVxuICAgIHRoaXMubm9pc2VEZWxheSA9IDMzXG4gICAgdGhpcy5ub2lzZVRpbWUgPSAwXG5cbiAgICAvLyB0aGlzLnNoYWRlcnMucHVzaChuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVFbXB0eSgpKSlcblxuXG4gICAgdmFyIGZ4YWFTaGFkZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVGWEFBKCkpXG4gICAgdGhpcy5zaGFkZXJzLnB1c2goZnhhYVNoYWRlcilcblxuICAgIGlmIChvcHQuYmx1ciAhPT0gZmFsc2UpIHtcbiAgICAgICAgdmFyIGJsdXIgPSBjcmVhdGVCbHVyKClcbiAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAxO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8aXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IChpKzEpKjI7XG5cbiAgICAgICAgICAgIHZhciBob3JpeiA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKCBibHVyICk7XG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5yYWRpdXMudmFsdWUgPSByXG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5zdHJlbmd0aC52YWx1ZSA9IDFcbiAgICAgICAgICAgIGhvcml6LnVuaWZvcm1zLmRpci52YWx1ZS5zZXQoMSwwKVxuXG4gICAgICAgICAgICB2YXIgdmVydCA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKCBibHVyICk7XG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLnJhZGl1cy52YWx1ZSA9IHJcbiAgICAgICAgICAgIHZlcnQudW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSAxXG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLmRpci52YWx1ZS5zZXQoMCwxKVxuXG4gICAgICAgICAgICB0aGlzLnNoYWRlcnMucHVzaChob3JpeiwgdmVydClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsZW5zUGFzcyA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKGNyZWF0ZUxlbnMoKSlcbiAgICB0aGlzLnNoYWRlcnMucHVzaChsZW5zUGFzcylcblxuICAgIC8vZGVmYXVsdCB2YWx1ZXMgdG8gYXZvaWQgZGl2IGJ5IHplcm9cbiAgICBsZW5zUGFzcy51bmlmb3Jtcy5vdmVybGF5UmVzb2x1dGlvbi52YWx1ZS5zZXQoMSwgMSlcbiAgICBsZW5zUGFzcy51bmlmb3Jtcy50TG9va3VwLnZhbHVlID0gbG9hZFRleHR1cmUoJ2ltZy9sb29rdXAucG5nJywgeyBcbiAgICAgICAgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIgXG4gICAgfSlcbiAgICBsZW5zUGFzcy51bmlmb3Jtcy50T3ZlcmxheS52YWx1ZSA9IGxvYWRUZXh0dXJlKCdpbWcvZHVzdC5qcGcnLCB7XG4gICAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2UsXG4gICAgICAgIGZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyXG4gICAgfSwgZnVuY3Rpb24oZXJyLCB0ZXgpIHtcbiAgICAgICAgbGVuc1Bhc3MudW5pZm9ybXMub3ZlcmxheVJlc29sdXRpb24udmFsdWUuc2V0KHRleC5pbWFnZS53aWR0aCwgdGV4LmltYWdlLmhlaWdodClcbiAgICB9KVxuXG4gICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcywgaSwgc2VsZikge1xuICAgICAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocGFzcylcbiAgICAgICAgaWYgKGkgPT09IHNlbGYubGVuZ3RoLTEpXG4gICAgICAgICAgICBwYXNzLnJlbmRlclRvU2NyZWVuID0gdHJ1ZVxuICAgIH0sIHRoaXMpICBcbiAgICBpZiAob3B0LndpZHRoICYmIG9wdC5oZWlnaHQpIFxuICAgICAgICB0aGlzLnJlc2l6ZShvcHQud2lkdGgsIG9wdC5oZWlnaHQpXG59XG5cblxuZnVuY3Rpb24gbG9hZFRleHR1cmUocGF0aCwgb3B0LCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiID0gb3B0XG4gICAgICAgIG9wdCA9IHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUocGF0aCwgdW5kZWZpbmVkLCBmdW5jdGlvbih0ZXgpIHtcbiAgICAgICAgaWYgKG9wdC5maWx0ZXIpIHRleC5taW5GaWx0ZXIgPSB0ZXgubWFnRmlsdGVyID0gb3B0LmZpbHRlclxuICAgICAgICBpZiAob3B0LndyYXApIHRleC53cmFwUyA9IHRleC53cmFwVCA9IG9wdC53cmFwXG4gICAgICAgIHRleC5nZW5lcmF0ZU1pcG1hcHMgPSBvcHQuZ2VuZXJhdGVNaXBtYXBzXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIFxuICAgICAgICAgICAgY2IobnVsbCwgdGV4KVxuICAgIH0pXG59XG5cbnJlcXVpcmUoJ21peGVzJykoRWZmZWN0cywge1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbihkdCkge1xuICAgICAgICB0aGlzLm5vaXNlVGltZSArPSBkdFxuICAgICAgICBpZiAodGhpcy5ub2lzZVRpbWUgPiB0aGlzLm5vaXNlRGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMubm9pc2VUaW1lID0gMFxuICAgICAgICAgICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcykge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzLnVuaWZvcm1zLnRpY2spXG4gICAgICAgICAgICAgICAgICAgIHBhc3MudW5pZm9ybXMudGljay52YWx1ZSArPSAwLjAwNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9zZXIucmVuZGVyKClcbiAgICB9LFxuXG4gICAgcmVzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoICo9IDJcbiAgICAgICAgaGVpZ2h0ICo9IDJcbiAgICAgICAgdGhpcy5jb21wb3Nlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIHRoaXMuc2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhc3MpIHtcbiAgICAgICAgICAgIHZhciBkcHIgPSAxXG4gICAgICAgICAgICAvLyB2YXIgZHByID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKVxuICAgICAgICAgICAgaWYgKHBhc3MudW5pZm9ybXMucmVzb2x1dGlvbilcbiAgICAgICAgICAgICAgICBwYXNzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHdpZHRoKmRwciwgaGVpZ2h0KmRwcilcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn0pIiwidmFyIHJhbmRvbSA9IHJlcXVpcmUoJ3JhbmRmJylcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgc21vb3Roc3RlcCA9IHJlcXVpcmUoJ3Ntb290aHN0ZXAnKVxudmFyIGxlcnAgPSByZXF1aXJlKCdsZXJwJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzY2VuZSkge1xuICAgIHZhciBnZW8gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxMDAsIDEwMCwgNDAsIDQwKVxuICAgIHZhciB2ZWMyID0gbmV3IFRIUkVFLlZlY3RvcjIoKVxuICAgIGdlby52ZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdmFyIGxlbiA9IHZlYzIuc2V0KHYueCwgdi55KS5sZW5ndGgoKSAvIDUwXG4gICAgICAgIHZhciBzbGVuID0gc21vb3Roc3RlcCgwLjQsIDEuMCwgbGVuKVxuICAgICAgICB2LnogPSByYW5kb20oMTAsIDQwKSAqIHNsZW4gXG5cbiAgICAgICAgc2xlbiA9IHNtb290aHN0ZXAoMC43LCAxLjAsIGxlbilcbiAgICAgICAgdmFyIGJhc2UgPSBzbW9vdGhzdGVwKDAuMiwgMC4wLCBsZW4pKjAuNVxuICAgICAgICBzbGVuICs9IGJhc2VcblxuICAgICAgICB2LnogKz0gcmFuZG9tKC0xMCwgNSkgKiBiYXNlXG5cbiAgICAgICAgdmFyIEwgPSBzbGVuLy9sZXJwKDAuOSwgMS4wLCBzbGVuKVxuICAgICAgICB2YXIgY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoTCwgTCwgTClcbiAgICAgICAgZ2VvLmNvbG9ycy5wdXNoKGNvbG9yKVxuICAgIH0pXG5cbiAgICBnZW8uZmFjZXMuZm9yRWFjaChmdW5jdGlvbihmYWNlKSB7XG4gICAgICAgIGZhY2UudmVydGV4Q29sb3JzWzBdID0gZ2VvLmNvbG9yc1tmYWNlLmFdXG4gICAgICAgIGZhY2UudmVydGV4Q29sb3JzWzFdID0gZ2VvLmNvbG9yc1tmYWNlLmJdXG4gICAgICAgIGZhY2UudmVydGV4Q29sb3JzWzJdID0gZ2VvLmNvbG9yc1tmYWNlLmNdXG4gICAgfSlcblxuICAgIHZhciB0ZXggPSBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCdpbWcvc25vdy5qcGcnKVxuICAgIHRleC5yZXBlYXQuc2V0KDEsIDEpXG4gICAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmdcblxuICAgIHZhciBtYXQgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBcbiAgICAgICAgbWFwOiB0ZXgsXG4gICAgICAgIHZlcnRleENvbG9yczogVEhSRUUuVmVydGV4Q29sb3JzIFxuICAgICAgICAvLyBjb2xvcjogXCJyZ2IoMTUwLDE1MCwxNTApXCJcbiAgICB9KVxuICAgIHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXQpXG4gICAgbWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkvMlxuICAgIG1lc2gucG9zaXRpb24ueSA9IC0zMFxuICAgIHZhciBzdHJldGNoID0gMTBcbiAgICBtZXNoLnNjYWxlLnggPSBtZXNoLnNjYWxlLnkgPSBzdHJldGNoXG4gICAgc2NlbmUuYWRkKG1lc2gpXG5cbiAgICB3aW5kb3cuZmxvb3IgPSBtZXNoXG59IiwidmFyIGN1YmVTaGFkZXIgPSB7XG5cbiAgICB1bmlmb3JtczogVEhSRUUuVW5pZm9ybXNVdGlscy5tZXJnZSggW1xuICAgICAgICB7IFwidEN1YmVcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcbiAgICAgICAgXCJ0RmxpcFwiOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogLSAxIH0gfSxcbiAgICAgICAgVEhSRUUuVW5pZm9ybXNMaWJbIFwiZm9nXCIgXVxuICAgIF0gKSxcblxuICAgIHZlcnRleFNoYWRlcjogW1xuXG4gICAgICAgIFwidmFyeWluZyB2ZWMzIHZXb3JsZFBvc2l0aW9uO1wiLFxuXG4gICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX3BhcnNfdmVydGV4XCIgXSxcblxuICAgICAgICBcInZvaWQgbWFpbigpIHtcIixcblxuICAgICAgICBcIiAgIHZlYzQgd29ybGRQb3NpdGlvbiA9IG1vZGVsTWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxuICAgICAgICBcIiAgIHZXb3JsZFBvc2l0aW9uID0gd29ybGRQb3NpdGlvbi54eXo7XCIsXG5cbiAgICAgICAgXCIgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXG5cbiAgICAgICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX3ZlcnRleFwiIF0sXG5cbiAgICAgICAgXCJ9XCJcblxuICAgIF0uam9pbihcIlxcblwiKSxcblxuICAgIGZyYWdtZW50U2hhZGVyOiBbXG5cbiAgICAgICAgXCJ1bmlmb3JtIHNhbXBsZXJDdWJlIHRDdWJlO1wiLFxuICAgICAgICBcInVuaWZvcm0gZmxvYXQgdEZsaXA7XCIsXG5cbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XCIsXG4gICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX3BhcnNfZnJhZ21lbnRcIiBdLFxuICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJmb2dfcGFyc19mcmFnbWVudFwiIF0sXG4gICAgICAgIFwidm9pZCBtYWluKCkge1wiLFxuICAgICAgICBcIiAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmVDdWJlKCB0Q3ViZSwgdmVjMyggdEZsaXAgKiB2V29ybGRQb3NpdGlvbi54LCB2V29ybGRQb3NpdGlvbi55eiApICk7XCIsXG4gICAgICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJsb2dkZXB0aGJ1Zl9mcmFnbWVudFwiIF0sXG4gICAgICAgICAgICBUSFJFRS5TaGFkZXJDaHVua1sgXCJmb2dfZnJhZ21lbnRcIiBdLFxuICAgICAgICBcIn1cIlxuXG4gICAgXS5qb2luKFwiXFxuXCIpXG5cbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVuZGVyZXIsIGNhbWVyYSwgc2NlbmUpIHtcbiAgICB2YXIgbGlnaHQgPSBuZXcgVEhSRUUuSGVtaXNwaGVyZUxpZ2h0KDB4YmJlOWZmLCAweDA4MDgyMCwgMSlcbiAgICBsaWdodC5wb3NpdGlvbi5zZXQoLTEsIDEsIC0xKVxuICAgIHNjZW5lLmFkZChsaWdodClcblxuICAgIHZhciB3YXRlck5vcm1hbHMgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnaW1nL3dhdGVybm9ybWFsczUuanBnJylcbiAgICB3YXRlck5vcm1hbHMud3JhcFMgPSB3YXRlck5vcm1hbHMud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZ1xuXG4gICAgdmFyIHdhdGVyID0gbmV3IFRIUkVFLldhdGVyKHJlbmRlcmVyLCBjYW1lcmEsIHNjZW5lLCB7XG4gICAgICAgIHRleHR1cmVXaWR0aDogNTEyLFxuICAgICAgICB0ZXh0dXJlSGVpZ2h0OiA1MTIsXG4gICAgICAgIHdhdGVyTm9ybWFsczogd2F0ZXJOb3JtYWxzLFxuICAgICAgICBhbHBoYTogMC45LFxuICAgICAgICBzdW5EaXJlY3Rpb246IGxpZ2h0LnBvc2l0aW9uLmNsb25lKCkubm9ybWFsaXplKCksXG4gICAgICAgIHN1bkNvbG9yOiAweGZmZmZmZixcbiAgICAgICAgd2F0ZXJDb2xvcjogMHgwMjBkMTUsXG4gICAgICAgIGRpc3RvcnRpb25TY2FsZTogODAuMCxcbiAgICB9KVxuXG4gICAgdmFyIG1pcnJvck1lc2ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNTAwMCwgNTAwMCksXG4gICAgICAgIHdhdGVyLm1hdGVyaWFsXG4gICAgKVxuXG4gICAgbWlycm9yTWVzaC5hZGQod2F0ZXIpXG4gICAgbWlycm9yTWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkgKiAwLjVcbiAgICBzY2VuZS5hZGQobWlycm9yTWVzaClcblxuXG4gICAgLy8gbG9hZCBza3lib3hcblxuICAgIHZhciBjdWJlTWFwID0gbmV3IFRIUkVFLkN1YmVUZXh0dXJlKFtdKVxuICAgIGN1YmVNYXAuZm9ybWF0ID0gVEhSRUUuUkdCRm9ybWF0XG4gICAgY3ViZU1hcC5mbGlwWSA9IGZhbHNlXG5cbiAgICB2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKClcbiAgICBsb2FkZXIubG9hZCgnaW1nL2Nsb3VkeV9uaWdodDIuanBnJywgZnVuY3Rpb24oaW1hZ2UpIHtcblxuICAgICAgICB2YXIgZ2V0U2lkZSA9IGZ1bmN0aW9uKHgsIHkpIHtcblxuICAgICAgICAgICAgdmFyIHNpemUgPSAxMDI0XG5cbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gc2l6ZVxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHNpemVcblxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIC14ICogc2l6ZSwgLXkgKiBzaXplKVxuXG4gICAgICAgICAgICByZXR1cm4gY2FudmFzXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzBdID0gZ2V0U2lkZSgyLCAxKSAvLyBweFxuICAgICAgICBjdWJlTWFwLmltYWdlc1sxXSA9IGdldFNpZGUoMCwgMSkgLy8gbnhcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbMl0gPSBnZXRTaWRlKDEsIDApIC8vIHB5XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzNdID0gZ2V0U2lkZSgxLCAyKSAvLyBueVxuICAgICAgICBjdWJlTWFwLmltYWdlc1s0XSA9IGdldFNpZGUoMSwgMSkgLy8gcHpcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbNV0gPSBnZXRTaWRlKDMsIDEpIC8vIG56XG4gICAgICAgIGN1YmVNYXAubmVlZHNVcGRhdGUgPSB0cnVlXG5cbiAgICB9KVxuXG4gICAgY3ViZVNoYWRlci51bmlmb3Jtcy50Q3ViZS52YWx1ZSA9IGN1YmVNYXBcblxuICAgIHZhciBza3lCb3hNYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBjdWJlU2hhZGVyLmZyYWdtZW50U2hhZGVyLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGN1YmVTaGFkZXIudmVydGV4U2hhZGVyLFxuICAgICAgICB1bmlmb3JtczogY3ViZVNoYWRlci51bmlmb3JtcyxcbiAgICAgICAgLy8gZGVwdGhXcml0ZTogZmFsc2UsXG4gICAgICAgIHNpZGU6IFRIUkVFLkJhY2tTaWRlLFxuICAgICAgICBmb2c6IHRydWUsXG4gICAgfSlcblxuICAgIHZhciBza3lCb3ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgbmV3IFRIUkVFLkJveEdlb21ldHJ5KDUwMDAsIDUwMDAsIDUwMDApLFxuICAgICAgICBza3lCb3hNYXRlcmlhbFxuICAgIClcbiAgICBcbiAgICB3YXRlci5jdWJlTWFwID0gY3ViZU1hcFxuXG4gICAgc2NlbmUuYWRkKHNreUJveClcbiAgICByZXR1cm4gd2F0ZXJcbn0iLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHJhZGl1cztcXG51bmlmb3JtIHZlYzIgZGlyO1xcbnVuaWZvcm0gZmxvYXQgc3RyZW5ndGg7XFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG52ZWM0IGFfeF9ibHVyKHNhbXBsZXIyRCB0ZXgsIHZlYzIgdXYsIHZlYzIgYmx1ciwgdmVjMiBkaXJlY3Rpb24pIHtcXG4gIHZlYzQgc3VtID0gdmVjNCgwLjApO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDQuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gNC4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDE2MjE2MjE2MjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAzLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDMuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjA1NDA1NDA1NDE7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMi4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAyLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xMjE2MjE2MjE2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDEuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMS4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTk0NTk0NTk0NjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LngsIHV2LnkpKSAqIDAuMjI3MDI3MDI3MDtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAxLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDEuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjE5NDU5NDU5NDY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMi4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAyLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xMjE2MjE2MjE2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDMuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMy4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDU0MDU0MDU0MTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyA0LjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDQuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjAxNjIxNjIxNjI7XFxuICByZXR1cm4gc3VtO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICB2ZWMyIGJsdXJBbXQgPSB2ZWMyKHJhZGl1cykgLyByZXNvbHV0aW9uO1xcbiAgdmVjNCBzdW0gPSBhX3hfYmx1cih0RGlmZnVzZSwgdlV2LCBibHVyQW10LCBkaXIpO1xcbiAgdmVjMiBwID0gKGdsX0ZyYWdDb29yZC54eSAvIHJlc29sdXRpb24ueHkgLSAwLjUpO1xcbiAgcC54ICo9IHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueTtcXG4gIGZsb2F0IGxlbiA9IHNtb290aHN0ZXAoMC41LCAxLjIsIGxlbmd0aChwKSk7XFxuICB2ZWMzIG9yaWcgPSB0ZXh0dXJlMkQodERpZmZ1c2UsIHZVdikucmdiO1xcbiAgZ2xfRnJhZ0NvbG9yLnJnYiA9IG1peChvcmlnLCBzdW0ucmdiLCBsZW4gKyAwLjEpO1xcbiAgZ2xfRnJhZ0NvbG9yLmEgPSAxLjA7XFxufVwiLCBbe1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJyYWRpdXNcIixcInR5cGVcIjpcImZsb2F0XCJ9LHtcIm5hbWVcIjpcImRpclwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJzdHJlbmd0aFwiLFwidHlwZVwiOlwiZmxvYXRcIn0se1wibmFtZVwiOlwidERpZmZ1c2VcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifV0sIFtdKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY3JlYXRlXCIpKHNvdXJjZSk7IiwidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciB0aHJlZWlmeSA9IHJlcXVpcmUoJ3RocmVlLWdsc2xpZnknKShUSFJFRSlcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJykgXG4gXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvcHQpIHtcbiAgICAgICAgcmV0dXJuIHh0ZW5kKHRocmVlaWZ5KHNvdXJjZSksIG9wdClcbiAgICB9XG59IiwidmFyIGdsc2xpZnkgPSByZXF1aXJlKFwiZ2xzbGlmeVwiKTtcbnZhciBzb3VyY2UgPSByZXF1aXJlKFwiZ2xzbGlmeS9zaW1wbGUtYWRhcHRlci5qc1wiKShcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSB2ZWMyIG92ZXJsYXlSZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyB2ZWMyIG92ZXJsYXlVVjtcXG52b2lkIG1haW4oKSB7XFxuICB2VXYgPSB1djtcXG4gIGZsb2F0IGFzcGVjdCA9IG92ZXJsYXlSZXNvbHV0aW9uLnggLyBvdmVybGF5UmVzb2x1dGlvbi55O1xcbiAgZmxvYXQgcmF0aW8gPSByZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnk7XFxuICBvdmVybGF5VVYgPSB1djtcXG4gIGZsb2F0IHRBc3BlY3QgPSBvdmVybGF5UmVzb2x1dGlvbi54IC8gb3ZlcmxheVJlc29sdXRpb24ueTtcXG4gIGZsb2F0IHBBc3BlY3QgPSByZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnk7XFxuICBvdmVybGF5VVYgPSB1djtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiLCBcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSBmbG9hdCB0aWNrO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRMb29rdXA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdE92ZXJsYXk7XFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgb3ZlcmxheVVWO1xcbmhpZ2hwIGZsb2F0IGFfeF9yYW5kb20odmVjMiBjbykge1xcbiAgaGlnaHAgZmxvYXQgYSA9IDEyLjk4OTg7XFxuICBoaWdocCBmbG9hdCBiID0gNzguMjMzO1xcbiAgaGlnaHAgZmxvYXQgYyA9IDQzNzU4LjU0NTM7XFxuICBoaWdocCBmbG9hdCBkdCA9IGRvdChjby54eSwgdmVjMihhLCBiKSk7XFxuICBoaWdocCBmbG9hdCBzbiA9IG1vZChkdCwgMy4xNCk7XFxuICByZXR1cm4gZnJhY3Qoc2luKHNuKSAqIGMpO1xcbn1cXG52ZWMzIGJfeF9ibGVuZE92ZXJsYXkodmVjMyBiYXNlLCB2ZWMzIGJsZW5kKSB7XFxuICByZXR1cm4gdmVjMyhiYXNlLnIgPCAwLjUgPyAoMi4wICogYmFzZS5yICogYmxlbmQucikgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UucikgKiAoMS4wIC0gYmxlbmQucikpLCBiYXNlLmcgPCAwLjUgPyAoMi4wICogYmFzZS5nICogYmxlbmQuZykgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UuZykgKiAoMS4wIC0gYmxlbmQuZykpLCBiYXNlLmIgPCAwLjUgPyAoMi4wICogYmFzZS5iICogYmxlbmQuYikgOiAoMS4wIC0gMi4wICogKDEuMCAtIGJhc2UuYikgKiAoMS4wIC0gYmxlbmQuYikpKTtcXG59XFxuZmxvYXQgY194X2x1bWEodmVjMyBjb2xvcikge1xcbiAgcmV0dXJuIGRvdChjb2xvciwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XFxufVxcbmZsb2F0IGNfeF9sdW1hKHZlYzQgY29sb3IpIHtcXG4gIHJldHVybiBkb3QoY29sb3IucmdiLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTtcXG59XFxuI2RlZmluZSBMVVRfRkxJUF9ZXFxuXFxudmVjNCBlX3hfbG9va3VwKGluIHZlYzQgdGV4dHVyZUNvbG9yLCBpbiBzYW1wbGVyMkQgbG9va3VwVGFibGUpIHtcXG4gIFxcbiAgI2lmbmRlZiBMVVRfTk9fQ0xBTVBcXG4gIHRleHR1cmVDb2xvciA9IGNsYW1wKHRleHR1cmVDb2xvciwgMC4wLCAxLjApO1xcbiAgI2VuZGlmXFxuICBtZWRpdW1wIGZsb2F0IGJsdWVDb2xvciA9IHRleHR1cmVDb2xvci5iICogNjMuMDtcXG4gIG1lZGl1bXAgdmVjMiBxdWFkMTtcXG4gIHF1YWQxLnkgPSBmbG9vcihmbG9vcihibHVlQ29sb3IpIC8gOC4wKTtcXG4gIHF1YWQxLnggPSBmbG9vcihibHVlQ29sb3IpIC0gKHF1YWQxLnkgKiA4LjApO1xcbiAgbWVkaXVtcCB2ZWMyIHF1YWQyO1xcbiAgcXVhZDIueSA9IGZsb29yKGNlaWwoYmx1ZUNvbG9yKSAvIDguMCk7XFxuICBxdWFkMi54ID0gY2VpbChibHVlQ29sb3IpIC0gKHF1YWQyLnkgKiA4LjApO1xcbiAgaGlnaHAgdmVjMiB0ZXhQb3MxO1xcbiAgdGV4UG9zMS54ID0gKHF1YWQxLnggKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3Iucik7XFxuICB0ZXhQb3MxLnkgPSAocXVhZDEueSAqIDAuMTI1KSArIDAuNSAvIDUxMi4wICsgKCgwLjEyNSAtIDEuMCAvIDUxMi4wKSAqIHRleHR1cmVDb2xvci5nKTtcXG4gICNpZmRlZiBMVVRfRkxJUF9ZXFxuICB0ZXhQb3MxLnkgPSAxLjAgLSB0ZXhQb3MxLnk7XFxuICAjZW5kaWZcXG4gIGhpZ2hwIHZlYzIgdGV4UG9zMjtcXG4gIHRleFBvczIueCA9IChxdWFkMi54ICogMC4xMjUpICsgMC41IC8gNTEyLjAgKyAoKDAuMTI1IC0gMS4wIC8gNTEyLjApICogdGV4dHVyZUNvbG9yLnIpO1xcbiAgdGV4UG9zMi55ID0gKHF1YWQyLnkgKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3IuZyk7XFxuICAjaWZkZWYgTFVUX0ZMSVBfWVxcbiAgdGV4UG9zMi55ID0gMS4wIC0gdGV4UG9zMi55O1xcbiAgI2VuZGlmXFxuICBsb3dwIHZlYzQgbmV3Q29sb3IxID0gdGV4dHVyZTJEKGxvb2t1cFRhYmxlLCB0ZXhQb3MxKTtcXG4gIGxvd3AgdmVjNCBuZXdDb2xvcjIgPSB0ZXh0dXJlMkQobG9va3VwVGFibGUsIHRleFBvczIpO1xcbiAgbG93cCB2ZWM0IG5ld0NvbG9yID0gbWl4KG5ld0NvbG9yMSwgbmV3Q29sb3IyLCBmcmFjdChibHVlQ29sb3IpKTtcXG4gIHJldHVybiBuZXdDb2xvcjtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdmVjMyB0ZXhDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XFxuICBmbG9hdCBsdW1pbmFuY2UgPSBjX3hfbHVtYSh0ZXhDb2xvcik7XFxuICBmbG9hdCBub2lzZU1hcCA9IHNtb290aHN0ZXAobHVtaW5hbmNlLCAwLjUsIDAuMCk7XFxuICB2ZWMyIHRVdiA9IHZVdiArIHRpY2s7XFxuICB2ZWMzIG5vaXNlID0gdmVjMyhhX3hfcmFuZG9tKHRVdiksIGFfeF9yYW5kb20odFV2ICogMS41KSwgYV94X3JhbmRvbSh0VXYgKiAwLjUpKTtcXG4gIHZlYzMgbm9pc2VDb2xvciA9IG1peChub2lzZSwgdmVjMygwLjUpLCBub2lzZU1hcCk7XFxuICB2ZWMzIGNvbG9yID0gbWl4KHRleENvbG9yLCBiX3hfYmxlbmRPdmVybGF5KHRleENvbG9yLCBub2lzZSksIDAuMTUpO1xcbiAgdmVjMyBjb3JyZWN0ZWQgPSBlX3hfbG9va3VwKHZlYzQoY29sb3IsIDEuMCksIHRMb29rdXApLnJnYjtcXG4gIGNvbG9yID0gbWl4KGNvbG9yLCBjb3JyZWN0ZWQsIDAuOSk7XFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCAxLjApO1xcbiAgdmVjNCBzY3JhdGNoZXMgPSB0ZXh0dXJlMkQodE92ZXJsYXksIG92ZXJsYXlVVik7XFxuICB2ZWMzIHNjcmF0Y2hCbGVuZCA9IGdsX0ZyYWdDb2xvci5yZ2IgKyBzY3JhdGNoZXMucmdiO1xcbiAgZmxvYXQgY2VudGVyID0gc21vb3Roc3RlcCgwLjAsIDAuNiwgbGVuZ3RoKHZVdiAtIDAuNSkpO1xcbiAgZmxvYXQgZGlydE1hcCA9IHNtb290aHN0ZXAoMC4xLCAwLjQsIGx1bWluYW5jZSAqIGNlbnRlcik7XFxuICBnbF9GcmFnQ29sb3IucmdiID0gbWl4KGdsX0ZyYWdDb2xvci5yZ2IsIHNjcmF0Y2hCbGVuZCwgZGlydE1hcCk7XFxufVwiLCBbe1wibmFtZVwiOlwib3ZlcmxheVJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJ0aWNrXCIsXCJ0eXBlXCI6XCJmbG9hdFwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInRMb29rdXBcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJ0T3ZlcmxheVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG4gIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KTtcXG59XCIsIFt7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIG1vYmlsZSA9IHJlcXVpcmUoJy4vaXMtbW9iaWxlJylcblxudmFyIGxpbmVIZWlnaHQgPSAyMlxudmFyIGJpZyA9IDAuN1xudmFyIHNtYWxsID0gMC41XG52YXIgcGFuZWxXaWR0aCA9IDIwXG5cbnZhciBtb2JpbGVTY2FsZSA9IG1vYmlsZSA/IDAuOCA6IDFcbmJpZyAqPSBtb2JpbGVTY2FsZVxuc21hbGwgKj0gbW9iaWxlU2NhbGVcbnBhbmVsV2lkdGggKj0gbW9iaWxlU2NhbGVcbmxpbmVIZWlnaHQgKj0gbW9iaWxlU2NhbGVcblxubW9kdWxlLmV4cG9ydHMgPSBbXG4gICAgXG4gICAge1xuICAgICAgICBuYW1lOiAndG9ubmVzJyxcbiAgICAgICAgcGFuZWxzOiBbIHtcbiAgICAgICAgICAgIC8vIG9yaWdpbjogbmV3IFRIUkVFLlZlY3RvcjMoMTgsIDEwLCAyKSxcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJzUgbWlsbGlvbiB0b25uZXMnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdlc3RpbWF0ZWQgb2lsIHNwaWx0IGluIFJ1c3NpYSBlYWNoIHllYXInLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFstMiwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBvcmlnaW46IG5ldyBUSFJFRS5WZWN0b3IzKC0yMCwgMTAsIDIpLFxuICAgICAgICAgICAgd2lkdGg6IHBhbmVsV2lkdGgsXG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICc2IG1pbGxpb24gdG9ubmVzJywgc2l6ZTogYmlnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnZXhwZWN0ZWQgeWVhcmx5IG91dHB1dCBvZiB0aGlzIHBsYXRmb3JtJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0gXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3RvcCcsXG4gICAgICAgIHBhbmVsczogWyB7XG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdUZWNobm9sb2dpY2FsbHkgb3V0ZGF0ZWQnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICd1c2luZyBzZWNvbmRoYW5kIGNvbXBvbmVudHMnLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHBhbmVsV2lkdGgsXG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICckMy4yIGJpbGxpb24gb3ZlciBidWRnZXQnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICcxOCB5ZWFycyB0byBjb25zdHJ1Y3QnLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICduYXR1cmUnLFxuICAgICAgICBwYW5lbHM6IFsge1xuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnNTAga20gZnJvbSBOYXR1cmUgcmVzZXJ2ZScsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0xlc3MgdGhhbiAyMGhycyBmb3Igb2lsIHRvIHJlYWNoJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFdpZHRoLFxuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQ3J1Y2lhbCBicmVlZGluZyBncm91bmRzJywgc2l6ZTogYmlnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnZm9yIHdhbHJ1cywgd2hhbGVzICYgcG9sYXIgYmVhcnMnLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdyZXNwb25zZScsXG4gICAgICAgIHBhbmVsczogWyB7XG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdMYXJnZSBzY2FsZSBzcGlsbCBlcXVpcG1lbnQgJywgc2l6ZTogYmlnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnMTAwMGttICgzIGRheXMgc2FpbGluZykgYXdheScsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWzAsIC1saW5lSGVpZ2h0LCAwXSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogcGFuZWxXaWR0aCoxLjUsXG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICcxNSBidWNrZXRzIGFuZCAzIGF4ZXMnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdpbmNsdWRlZCBpbiBwcmV2aW91cyByZXNwb25zZSBwbGFuJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0gXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnc3BpbGwnLFxuICAgICAgICBwYW5lbHM6IFsge1xuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQXJjdGljIE9pbCBzcGlsbHMnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdhcmUgY2xvc2UgdG8gaW1wb3NzaWJsZSB0byBjbGVhbiB1cCcsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWzAsIC1saW5lSGVpZ2h0LCAwXSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogcGFuZWxXaWR0aCxcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ09mZnNob3JlIGRyaWxsaW5nIGZvciBhcmN0aWMgb2lsJywgc2l6ZTogYmlnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnc3BpbGxzIGFyZSB2aXJ0dWFsbHkgaW5ldml0YWJsZScsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWzAsIC1saW5lSGVpZ2h0LCAwXSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9IF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3dlYXRoZXInLFxuICAgICAgICBwYW5lbHM6IFsge1xuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnQXMgY29sZCBhcyAtNTDCsGMgLyAxMjLCsGYnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICd0d28gdGhpcmRzIG9mIHRoZSB5ZWFyIHN1cnJvdW5kZWQgYnkgaWNlJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFdpZHRoLFxuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnUGxhZ3VlZCBieSBiYWQgd2VhdGhlcicsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ3dhdmVzIGFzIGhpZ2ggYXMgMTJtJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0gXVxuICAgIH0sXG5dXG4iLCJ2YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgVHdlZW5NYXggPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gICAgaWYgKCFUSFJFRS5NT1VTRSlcbiAgICAgICAgVEhSRUUuTU9VU0UgPSB7IExFRlQ6IDAsIE1JRERMRTogMSwgUklHSFQ6IDIgfTtcblxuICAgIC8qKlxuICAgICAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gICAgICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICAgICAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gICAgICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gICAgICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICAgICAqL1xuICAgIC8qZ2xvYmFsIFRIUkVFLCBjb25zb2xlICovXG5cbiAgICAvLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy4gSXQgbWFpbnRhaW5zXG4gICAgLy8gdGhlIFwidXBcIiBkaXJlY3Rpb24gYXMgK1ksIHVubGlrZSB0aGUgVHJhY2tiYWxsQ29udHJvbHMuIFRvdWNoIG9uIHRhYmxldCBhbmQgcGhvbmVzIGlzXG4gICAgLy8gc3VwcG9ydGVkLlxuICAgIC8vXG4gICAgLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuICAgIC8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4gICAgLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIGEgZHJvcC1pbiByZXBsYWNlbWVudCBmb3IgKG1vc3QpIFRyYWNrYmFsbENvbnRyb2xzIHVzZWQgaW4gZXhhbXBsZXMuXG4gICAgLy8gVGhhdCBpcywgaW5jbHVkZSB0aGlzIGpzIGZpbGUgYW5kIHdoZXJldmVyIHlvdSBzZWU6XG4gICAgLy8gICAgICBjb250cm9scyA9IG5ldyBUSFJFRS5UcmFja2JhbGxDb250cm9scyggY2FtZXJhICk7XG4gICAgLy8gICAgICBjb250cm9scy50YXJnZXQueiA9IDE1MDtcbiAgICAvLyBTaW1wbGUgc3Vic3RpdHV0ZSBcIk9yYml0Q29udHJvbHNcIiBhbmQgdGhlIGNvbnRyb2wgc2hvdWxkIHdvcmsgYXMtaXMuXG5cbiAgICBmdW5jdGlvbiBPcmJpdENvbnRyb2xzKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cbiAgICAgICAgLy8gQVBJXG5cbiAgICAgICAgLy8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIGNvbnRyb2wgb3JiaXRzIGFyb3VuZFxuICAgICAgICAvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICAvLyBjZW50ZXIgaXMgb2xkLCBkZXByZWNhdGVkOyB1c2UgXCJ0YXJnZXRcIiBpbnN0ZWFkXG4gICAgICAgIHRoaXMuY2VudGVyID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgLy8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvclxuICAgICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICB0aGlzLm5vWm9vbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuICAgICAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXRcbiAgICAgICAgdGhpcy5taW5EaXN0YW5jZSA9IDA7XG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgICAgICB0aGlzLm5vUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICAgICAgdGhpcy5ub1BhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcbiAgICAgICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG4gICAgICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuICAgICAgICAvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cbiAgICAgICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuICAgICAgICB0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cbiAgICAgICAgLy8gU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcbiAgICAgICAgdGhpcy5ub0tleXMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBoaSA9IDBcbiAgICAgICAgdGhpcy50aGV0YSA9IDAgXG5cbiAgICAgICAgLy8gVGhlIGZvdXIgYXJyb3cga2V5c1xuICAgICAgICB0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG4gICAgICAgIHRoaXMuY29uc3RyYWluRGVsdGEgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICAvLy8vLy8vLy8vLy9cbiAgICAgICAgLy8gaW50ZXJuYWxzXG5cbiAgICAgICAgdmFyIHNjb3BlID0gdGhpcztcblxuICAgICAgICB2YXIgRVBTID0gMC4wMDAwMDE7XG5cbiAgICAgICAgdmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAgICAgdmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG4gICAgICAgIHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG4gICAgICAgIHZhciBwaGlEZWx0YSA9IDA7XG4gICAgICAgIHZhciB0aGV0YURlbHRhID0gMDtcbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgdmFyIHBhbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIFNUQVRFID0geyBOT05FIDogLTEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cbiAgICAgICAgdmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAvLyBmb3IgcmVzZXRcblxuICAgICAgICB0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cbiAgICAgICAgLy8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cbiAgICAgICAgdmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG4gICAgICAgIHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cbiAgICAgICAgLy8gZXZlbnRzXG5cbiAgICAgICAgdmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuICAgICAgICB2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0J307XG4gICAgICAgIHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCd9O1xuXG4gICAgICAgIHRoaXMucm90YXRlTGVmdCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGV0YURlbHRhIC09IGFuZ2xlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb3RhdGVVcCA9IGZ1bmN0aW9uICggYW5nbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggYW5nbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGFuZ2xlID0gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwaGlEZWx0YSAtPSBhbmdsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSBsZWZ0XG4gICAgICAgIHRoaXMucGFuTGVmdCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cbiAgICAgICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAgICAgLy8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDAgXSwgdGVbIDEgXSwgdGVbIDIgXSApO1xuICAgICAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhbi5hZGQoIHBhbk9mZnNldCApO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIHVwXG4gICAgICAgIHRoaXMucGFuVXAgPSBmdW5jdGlvbiAoIGRpc3RhbmNlICkge1xuXG4gICAgICAgICAgICB2YXIgdGUgPSB0aGlzLm9iamVjdC5tYXRyaXguZWxlbWVudHM7XG5cbiAgICAgICAgICAgIC8vIGdldCBZIGNvbHVtbiBvZiBtYXRyaXhcbiAgICAgICAgICAgIHBhbk9mZnNldC5zZXQoIHRlWyA0IF0sIHRlWyA1IF0sIHRlWyA2IF0gKTtcbiAgICAgICAgICAgIHBhbk9mZnNldC5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIHBhc3MgaW4geCx5IG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxuICAgICAgICAvLyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcbiAgICAgICAgdGhpcy5wYW4gPSBmdW5jdGlvbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5vYmplY3QuZm92ICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuICAgICAgICAgICAgICAgIC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuICAgICAgICAgICAgICAgIHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcbiAgICAgICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QudG9wICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBvcnRob2dyYXBoaWNcbiAgICAgICAgICAgICAgICBzY29wZS5wYW5MZWZ0KCBkZWx0YVggKiAoc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQpIC8gZWxlbWVudC5jbGllbnRXaWR0aCApO1xuICAgICAgICAgICAgICAgIHNjb3BlLnBhblVwKCBkZWx0YVkgKiAoc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20pIC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBvciBwZXJzcGVjdGl2ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZG9sbHlPdXQgPSBmdW5jdGlvbiAoIGRvbGx5U2NhbGUgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9sbHlTY2FsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgZG9sbHlTY2FsZSA9IGdldFpvb21TY2FsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gdGhpcy5vYmplY3QucG9zaXRpb247XG5cbiAgICAgICAgICAgIC8vIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogc2NvcGUuY29uc3RyYWluRGVsdGEueCAvIHdpbmRvdy5pbm5lcldpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgLy8gLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG4gICAgICAgICAgICBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiBzY29wZS5jb25zdHJhaW5EZWx0YS55IC8gd2luZG93LmlubmVySGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgb2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCB0aGlzLnRhcmdldCApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2VcbiAgICAgICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuICAgICAgICAgICAgLy8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXG4gICAgICAgICAgICB2YXIgdGhldGEgPSBNYXRoLmF0YW4yKCBvZmZzZXQueCwgb2Zmc2V0LnogKTtcblxuICAgICAgICAgICAgLy8gYW5nbGUgZnJvbSB5LWF4aXNcblxuICAgICAgICAgICAgdmFyIHBoaSA9IE1hdGguYXRhbjIoIE1hdGguc3FydCggb2Zmc2V0LnggKiBvZmZzZXQueCArIG9mZnNldC56ICogb2Zmc2V0LnogKSwgb2Zmc2V0LnkgKTtcblxuICAgICAgICAgICAgaWYgKCB0aGlzLmF1dG9Sb3RhdGUgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGV0YSArPSB0aGV0YURlbHRhO1xuICAgICAgICAgICAgcGhpICs9IHBoaURlbHRhO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICAgICAgcGhpID0gTWF0aC5tYXgoIHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHRoaXMubWF4UG9sYXJBbmdsZSwgcGhpICkgKTtcblxuICAgICAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZSBFUFMgYW5kIFBJLUVQU1xuICAgICAgICAgICAgcGhpID0gTWF0aC5tYXgoIEVQUywgTWF0aC5taW4oIE1hdGguUEkgLSBFUFMsIHBoaSApICk7XG5cbiAgICAgICAgICAgIHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcblxuICAgICAgICAgICAgLy8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcbiAgICAgICAgICAgIHJhZGl1cyA9IE1hdGgubWF4KCB0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggdGhpcy5tYXhEaXN0YW5jZSwgcmFkaXVzICkgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5hZGQoIHBhbiApO1xuXG4gICAgICAgICAgICBzY29wZS5waGkgPSBwaGlcbiAgICAgICAgICAgIHNjb3BlLnRoZXRhID0gdGhldGFcblxuICAgICAgICAgICAgb2Zmc2V0LnggPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLnNpbiggdGhldGEgKTtcbiAgICAgICAgICAgIG9mZnNldC55ID0gcmFkaXVzICogTWF0aC5jb3MoIHBoaSApO1xuICAgICAgICAgICAgb2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbiggcGhpICkgKiBNYXRoLmNvcyggdGhldGEgKTtcblxuICAgICAgICAgICAgLy8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG4gICAgICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG4gICAgICAgICAgICBwb3NpdGlvbi5jb3B5KCB0aGlzLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cbiAgICAgICAgICAgIHRoaXMub2JqZWN0Lmxvb2tBdCggdGhpcy50YXJnZXQgKTtcblxuICAgICAgICAgICAgdGhldGFEZWx0YSA9IDA7XG4gICAgICAgICAgICBwaGlEZWx0YSA9IDA7XG4gICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICBwYW4uc2V0KCAwLCAwLCAwICk7XG5cbiAgICAgICAgICAgIGlmICggbGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCB0aGlzLm9iamVjdC5wb3NpdGlvbiApID4gRVBTICkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG4gICAgICAgICAgICAgICAgbGFzdFBvc2l0aW9uLmNvcHkoIHRoaXMub2JqZWN0LnBvc2l0aW9uICk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5jb3B5KCB0aGlzLnRhcmdldDAgKTtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHRoaXMucG9zaXRpb24wICk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuICAgICAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cbiAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSAxICkge1xuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5ET0xMWTtcblxuICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gMiApIHtcbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5QQU47XG5cbiAgICAgICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICByb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG4gICAgICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuY29uc3RyYWluRGVsdGEueCA9IHJvdGF0ZURlbHRhLng7XG4gICAgICAgICAgICAgICAgc2NvcGUuY29uc3RyYWluRGVsdGEueSA9IHJvdGF0ZURlbHRhLnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHNjb3BlLmNvbnN0cmFpbkRlbHRhKTtcbiAgICAgICAgICAgICAgICBUd2Vlbk1heC50byhzY29wZS5jb25zdHJhaW5EZWx0YSwgMC41MCwge1xuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogMC4wXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlJbigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cbiAgICAgICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVVwKCAvKiBldmVudCAqLyApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcbiAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgICAgdmFyIGRlbHRhID0gMDtcblxuICAgICAgICAgICAgaWYgKCBldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQgKSB7IC8vIFdlYktpdCAvIE9wZXJhIC8gRXhwbG9yZXIgOVxuXG4gICAgICAgICAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5kZXRhaWwgIT09IHVuZGVmaW5lZCApIHsgLy8gRmlyZWZveFxuXG4gICAgICAgICAgICAgICAgZGVsdGEgPSAtIGV2ZW50LmRldGFpbDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIGRlbHRhID4gMCApIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vS2V5cyA9PT0gdHJ1ZSB8fCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLkxFRlQ6XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHRvdWNoc3RhcnQoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG4gICAgICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG91Y2htb3ZlKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgc3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjb3BlLnJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICAvLyAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NvcGUucm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnN0cmFpbkRlbHRhLnggPSByb3RhdGVEZWx0YS54O1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5jb25zdHJhaW5EZWx0YS55ID0gcm90YXRlRGVsdGEueTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LmtpbGxUd2VlbnNPZihzY29wZS5jb25zdHJhaW5EZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHNjb3BlLmNvbnN0cmFpbkRlbHRhLCAwLjQ1LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMC4wXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcbiAgICAgICAgICAgICAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlPdXQoKTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgICAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG91Y2hlbmQoIC8qIGV2ZW50ICovICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXdoZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApOyAvLyBmaXJlZm94XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgZmFsc2UgKTtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIHRvdWNoZW5kLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIHRvdWNobW92ZSwgZmFsc2UgKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cbiAgICAgICAgLy8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB9O1xuXG4gICAgaW5oZXJpdHMoT3JiaXRDb250cm9scywgVEhSRUUuRXZlbnREaXNwYXRjaGVyKVxuICAgIHJldHVybiBPcmJpdENvbnRyb2xzXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBudW10eXBlKG51bSwgZGVmKSB7XG5cdHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJ1xuXHRcdD8gbnVtIFxuXHRcdDogKHR5cGVvZiBkZWYgPT09ICdudW1iZXInID8gZGVmIDogMClcbn0iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXMtYXJyYXknKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTIgLy8gbm90IHVzZWQgYnkgdGhpcyBpbXBsZW1lbnRhdGlvblxuXG52YXIga01heExlbmd0aCA9IDB4M2ZmZmZmZmZcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgIHRvIGBmYWxzZWAgc28gdGhleSB3aWxsXG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCB3aWxsIHdvcmsgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IChmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigwKVxuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgYXJyLmZvbyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH1cbiAgICByZXR1cm4gNDIgPT09IGFyci5mb28oKSAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBuZXcgVWludDhBcnJheSgxKS5zdWJhcnJheSgxLCAxKS5ieXRlTGVuZ3RoID09PSAwIC8vIGllMTAgaGFzIGJyb2tlbiBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBzdWJqZWN0ID4gMCA/IHN1YmplY3QgPj4+IDAgOiAwXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGVuY29kaW5nID09PSAnYmFzZTY0JylcbiAgICAgIHN1YmplY3QgPSBiYXNlNjRjbGVhbihzdWJqZWN0KVxuICAgIGxlbmd0aCA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN1YmplY3QsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIHN1YmplY3QgIT09IG51bGwpIHsgLy8gYXNzdW1lIG9iamVjdCBpcyBhcnJheS1saWtlXG4gICAgaWYgKHN1YmplY3QudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShzdWJqZWN0LmRhdGEpKVxuICAgICAgc3ViamVjdCA9IHN1YmplY3QuZGF0YVxuICAgIGxlbmd0aCA9ICtzdWJqZWN0Lmxlbmd0aCA+IDAgPyBNYXRoLmZsb29yKCtzdWJqZWN0Lmxlbmd0aCkgOiAwXG4gIH0gZWxzZVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ211c3Qgc3RhcnQgd2l0aCBudW1iZXIsIGJ1ZmZlciwgYXJyYXkgb3Igc3RyaW5nJylcblxuICBpZiAodGhpcy5sZW5ndGggPiBrTWF4TGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSAoKHN1YmplY3RbaV0gJSAyNTYpICsgMjU2KSAlIDI1NlxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW4gJiYgYVtpXSA9PT0gYltpXTsgaSsrKSB7fVxuICBpZiAoaSAhPT0gbGVuKSB7XG4gICAgeCA9IGFbaV1cbiAgICB5ID0gYltpXVxuICB9XG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiAobGlzdCwgdG90YWxMZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVc2FnZTogQnVmZmVyLmNvbmNhdChsaXN0WywgbGVuZ3RoXSknKVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKDApXG4gIH0gZWxzZSBpZiAobGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKHRvdGFsTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICB0b3RhbExlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxMZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcih0b3RhbExlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICBpdGVtLmNvcHkoYnVmLCBwb3MpXG4gICAgcG9zICs9IGl0ZW0ubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggPj4+IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8vIHByZS1zZXQgZm9yIHZhbHVlcyB0aGF0IG1heSBleGlzdCBpbiB0aGUgZnV0dXJlXG5CdWZmZXIucHJvdG90eXBlLmxlbmd0aCA9IHVuZGVmaW5lZFxuQnVmZmVyLnByb3RvdHlwZS5wYXJlbnQgPSB1bmRlZmluZWRcblxuLy8gdG9TdHJpbmcoZW5jb2RpbmcsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID09PSBJbmZpbml0eSA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcbiAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKGVuZCA8PSBzdGFydCkgcmV0dXJuICcnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gYmluYXJ5U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKVxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYikge1xuICBpZighQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heClcbiAgICAgIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuLy8gYGdldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLmdldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMucmVhZFVJbnQ4KG9mZnNldClcbn1cblxuLy8gYHNldGAgd2lsbCBiZSByZW1vdmVkIGluIE5vZGUgMC4xMytcbkJ1ZmZlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHYsIG9mZnNldCkge1xuICBjb25zb2xlLmxvZygnLnNldCgpIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB1c2luZyBhcnJheSBpbmRleGVzIGluc3RlYWQuJylcbiAgcmV0dXJuIHRoaXMud3JpdGVVSW50OCh2LCBvZmZzZXQpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKGJ5dGUpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoLCAyKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKVxuICAgICAgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KVxuICAgIGVuZCA9IHN0YXJ0XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5fYXVnbWVudCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpKVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgdmFyIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyBpKyspIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgICByZXR1cm4gbmV3QnVmXG4gIH1cbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSlcbiAgICByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2J1ZmZlciBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgaWYgKHRhcmdldF9zdGFydCA8IDAgfHwgdGFyZ2V0X3N0YXJ0ID49IHRhcmdldC5sZW5ndGgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAoZW5kIDwgc3RhcnQpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgICAgcmV0dXJuIChuZXcgQnVmZmVyKHRoaXMpKS5idWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJ1ZiA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1Zi5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5jb25zdHJ1Y3RvciA9IEJ1ZmZlclxuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuZXF1YWxzID0gQlAuZXF1YWxzXG4gIGFyci5jb21wYXJlID0gQlAuY29tcGFyZVxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtel0vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpIHtcbiAgICAgIGJ5dGVBcnJheS5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCwgdW5pdFNpemUpIHtcbiAgaWYgKHVuaXRTaXplKSBsZW5ndGggLT0gbGVuZ3RoICUgdW5pdFNpemU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoKGkgKyBvZmZzZXQgPj0gZHN0Lmxlbmd0aCkgfHwgKGkgPj0gc3JjLmxlbmd0aCkpXG4gICAgICBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGRlY29kZVV0ZjhDaGFyIChzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhGRkZEKSAvLyBVVEYgOCBpbnZhbGlkIGNoYXJcbiAgfVxufVxuIiwidmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG4iLCJ2YXIgaXNHTCA9IHJlcXVpcmUoJ2lzLXdlYmdsLWNvbnRleHQnKTtcbnZhciBnZXRHTCA9IHJlcXVpcmUoJ3dlYmdsLWNvbnRleHQnKTtcbnZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJ2RlYm91bmNlJyk7XG52YXIgYWRkRXZlbnQgPSByZXF1aXJlKCdhZGQtZXZlbnQtbGlzdGVuZXInKTtcblxuZnVuY3Rpb24gaXNDYW52YXNDb250ZXh0KG9iaikge1xuICAgIHZhciBjdHgyZCA9IHR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgIT09ICd1bmRlZmluZWQnICYmIG9iaiBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICByZXR1cm4gb2JqICYmIChjdHgyZCB8fCBpc0dMKG9iaikpO1xufVxuXG5mdW5jdGlvbiBDYW52YXNBcHAocmVuZGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENhbnZhc0FwcCkpXG4gICAgICAgIHJldHVybiBuZXcgQ2FudmFzQXBwKHJlbmRlciwgb3B0aW9ucyk7XG5cbiAgICAvL2FsbG93IG9wdGlvbnMgdG8gYmUgcGFzc2VkIGFzIGZpcnN0IGFyZ3VtZW50XG4gICAgaWYgKHR5cGVvZiByZW5kZXIgPT09ICdvYmplY3QnICYmIHJlbmRlcikge1xuICAgICAgICBvcHRpb25zID0gcmVuZGVyO1xuICAgICAgICByZW5kZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlciA9IHR5cGVvZiByZW5kZXIgPT09ICdmdW5jdGlvbicgPyByZW5kZXIgOiBvcHRpb25zLm9uUmVuZGVyO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnN8fHt9O1xuICAgIG9wdGlvbnMucmV0aW5hID0gdHlwZW9mIG9wdGlvbnMucmV0aW5hID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMucmV0aW5hIDogdHJ1ZTtcbiAgICBcbiAgICB2YXIgaGFzV2lkdGggPSB0eXBlb2Ygb3B0aW9ucy53aWR0aCA9PT0gXCJudW1iZXJcIiwgXG4gICAgICAgIGhhc0hlaWdodCA9IHR5cGVvZiBvcHRpb25zLmhlaWdodCA9PT0gXCJudW1iZXJcIjtcblxuICAgIC8vaWYgZWl0aGVyIHdpZHRoIG9yIGhlaWdodCBpcyBzcGVjaWZpZWQsIGRvbid0IGF1dG8tcmVzaXplIHRvIHRoZSB3aW5kb3cuLi5cbiAgICBpZiAoaGFzV2lkdGggfHwgaGFzSGVpZ2h0KSBcbiAgICAgICAgb3B0aW9ucy5pZ25vcmVSZXNpemUgPSB0cnVlO1xuXG4gICAgb3B0aW9ucy53aWR0aCA9IGhhc1dpZHRoID8gb3B0aW9ucy53aWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIG9wdGlvbnMuaGVpZ2h0ID0gaGFzSGVpZ2h0ID8gb3B0aW9ucy5oZWlnaHQgOiB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB2YXIgRFBSID0gb3B0aW9ucy5yZXRpbmEgPyAod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpIDogMTsgXG5cbiAgICAvL3NldHVwIHRoZSBjYW52YXNcbiAgICB2YXIgY2FudmFzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBhdHRyaWJzID0gb3B0aW9ucy5jb250ZXh0QXR0cmlidXRlc3x8e307XG5cbiAgICB0aGlzLmlzV2ViR0wgPSBmYWxzZTtcblxuICAgIC8vaWYgdXNlciBwcm92aWRlZCBhIGNvbnRleHQgb2JqZWN0XG4gICAgaWYgKGlzQ2FudmFzQ29udGV4dChvcHRpb25zLmNvbnRleHQpKSB7XG4gICAgICAgIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQ7XG4gICAgICAgIGNhbnZhcyA9IGNvbnRleHQuY2FudmFzO1xuICAgIH1cblxuICAgIC8vb3RoZXJ3aXNlIGFsbG93IGZvciBhIHN0cmluZyB0byBzZXQgb25lIHVwXG4gICAgaWYgKCFjYW52YXMpXG4gICAgICAgIGNhbnZhcyA9IG9wdGlvbnMuY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cbiAgICBjYW52YXMud2lkdGggPSBvcHRpb25zLndpZHRoICogRFBSO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodCAqIERQUjtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jb250ZXh0ID09PSBcIndlYmdsXCIgfHwgb3B0aW9ucy5jb250ZXh0ID09PSBcImV4cGVyaW1lbnRhbC13ZWJnbFwiKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gZ2V0R0woeyBjYW52YXM6IGNhbnZhcywgYXR0cmlidXRlczogYXR0cmlicyB9KTtcbiAgICAgICAgICAgIGlmICghY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHRocm93IFwiV2ViR0wgQ29udGV4dCBOb3QgU3VwcG9ydGVkIC0tIHRyeSBlbmFibGluZyBpdCBvciB1c2luZyBhIGRpZmZlcmVudCBicm93c2VyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQob3B0aW9ucy5jb250ZXh0fHxcIjJkXCIsIGF0dHJpYnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc1dlYkdMID0gaXNHTChjb250ZXh0KTtcblxuICAgIGlmIChvcHRpb25zLnJldGluYSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5vblJlc2l6ZSA9IG9wdGlvbnMub25SZXNpemU7XG4gICAgdGhpcy5fRFBSID0gRFBSO1xuICAgIHRoaXMuX3JldGluYSA9IG9wdGlvbnMucmV0aW5hO1xuICAgIHRoaXMuX29uY2UgPSBvcHRpb25zLm9uY2U7XG4gICAgdGhpcy5faWdub3JlUmVzaXplID0gb3B0aW9ucy5pZ25vcmVSZXNpemU7XG4gICAgdGhpcy5fbGFzdEZyYW1lID0gbnVsbDtcbiAgICB0aGlzLl90aGVuID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm1heERlbHRhVGltZSA9IHR5cGVvZiBvcHRpb25zLm1heERlbHRhVGltZSA9PT0gJ251bWJlcicgPyBvcHRpb25zLm1heERlbHRhVGltZSA6IDEwMDAvMjQ7XG5cbiAgICAvL0ZQUyBjb3VudGVyXG4gICAgdGhpcy5mcHMgPSA2MDtcbiAgICB0aGlzLl9mcmFtZXMgPSAwO1xuICAgIHRoaXMuX3ByZXZUaW1lID0gdGhpcy5fdGhlbjtcblxuICAgIGlmICghdGhpcy5faWdub3JlUmVzaXplKSB7XG4gICAgICAgIG9wdGlvbnMucmVzaXplRGVib3VuY2UgPSB0eXBlb2Ygb3B0aW9ucy5yZXNpemVEZWJvdW5jZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLnJlc2l6ZURlYm91bmNlIDogNTA7XG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJyZXNpemVcIiwgZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCBvcHRpb25zLnJlc2l6ZURlYm91bmNlLCBmYWxzZSkpO1xuXG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJvcmllbnRhdGlvbmNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IHJlbmRlci5iaW5kKHRoaXMpOyAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vZHVtbXkgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgIHRoaXMub25SZW5kZXIgPSBmdW5jdGlvbiAoY29udGV4dCwgd2lkdGgsIGhlaWdodCwgZHQpIHsgfTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlck9uY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBkdCA9IE1hdGgubWluKHRoaXMubWF4RGVsdGFUaW1lLCAobm93LXRoaXMuX3RoZW4pKTtcblxuICAgICAgICB0aGlzLl9mcmFtZXMrKztcbiAgICAgICAgaWYgKG5vdyA+IHRoaXMuX3ByZXZUaW1lICsgMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5mcHMgPSBNYXRoLnJvdW5kKCh0aGlzLl9mcmFtZXMgKiAxMDAwKSAvIChub3cgLSB0aGlzLl9wcmV2VGltZSkpO1xuXG4gICAgICAgICAgICB0aGlzLl9wcmV2VGltZSA9IG5vdztcbiAgICAgICAgICAgIHRoaXMuX2ZyYW1lcyA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNXZWJHTCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLl9EUFIsIHRoaXMuX0RQUik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQudmlld3BvcnQoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMuX0RQUiwgdGhpcy5oZWlnaHQgKiB0aGlzLl9EUFIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uUmVuZGVyKHRoaXMuY29udGV4dCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIGR0KTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNXZWJHTClcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAgICAgdGhpcy5fdGhlbiA9IG5vdztcbiAgICB9O1xuXG4gICAgdGhpcy5fcmVuZGVySGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykgXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICBpZiAoIXRoaXMuX29uY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZW5kZXJIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVuZGVyT25jZSgpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vblJlYWR5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgb3B0aW9ucy5vblJlYWR5LmNhbGwodGhpcywgY29udGV4dCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbnZhc0FwcC5wcm90b3R5cGUsICdyZXRpbmFFbmFibGVkJywge1xuXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHRoaXMuX3JldGluYSA9IHY7XG4gICAgICAgIHRoaXMuX0RQUiA9IHRoaXMuX3JldGluYSA/ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkgOiAxO1xuICAgICAgICB0aGlzLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXRpbmE7XG4gICAgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYW52YXNBcHAucHJvdG90eXBlLCAnZGV2aWNlV2lkdGgnLCB7XG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuX0RQUjtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbnZhc0FwcC5wcm90b3R5cGUsICdkZXZpY2VIZWlnaHQnLCB7XG5cbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQgKiB0aGlzLl9EUFI7XG4gICAgfVxufSk7XG5cbkNhbnZhc0FwcC5wcm90b3R5cGUucmVzZXRGUFMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9mcmFtZXMgPSAwO1xuICAgIHRoaXMuX3ByZXZUaW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLl90aGVuID0gdGhpcy5fcHJldlRpbWU7XG4gICAgdGhpcy5mcHMgPSA2MDtcbn07XG5cbkNhbnZhc0FwcC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKVxuICAgICAgICByZXR1cm47XG4gICAgXG4gICAgaWYgKHRoaXMuX2xhc3RGcmFtZSkgXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xhc3RGcmFtZSk7XG5cbiAgICAvL3Jlc2V0IEZQUyBjb3VudGVyXG4gICAgdGhpcy5yZXNldEZQUygpO1xuXG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9sYXN0RnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmVuZGVySGFuZGxlcik7XG59O1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGFzdEZyYW1lKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX2xhc3RGcmFtZSk7XG4gICAgICAgIHRoaXMuX2xhc3RGcmFtZSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xufTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIGNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLl9EUFI7XG4gICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5fRFBSO1xuXG4gICAgaWYgKHRoaXMuX3JldGluYSkge1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb25jZSlcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlbmRlckhhbmRsZXIpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5vblJlc2l6ZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICB0aGlzLm9uUmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzQXBwOyIsImFkZEV2ZW50TGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXJcbmFkZEV2ZW50TGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJcblxubW9kdWxlLmV4cG9ydHMgPSBhZGRFdmVudExpc3RlbmVyXG5cbnZhciBFdmVudHMgPSBudWxsXG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgRXZlbnRzID0gRXZlbnRzIHx8IChcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID9cbiAgICB7YWRkOiBzdGRBdHRhY2gsIHJtOiBzdGREZXRhY2h9IDpcbiAgICB7YWRkOiBvbGRJRUF0dGFjaCwgcm06IG9sZElFRGV0YWNofVxuICApXG4gIFxuICByZXR1cm4gRXZlbnRzLmFkZChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBFdmVudHMgPSBFdmVudHMgfHwgKFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgP1xuICAgIHthZGQ6IHN0ZEF0dGFjaCwgcm06IHN0ZERldGFjaH0gOlxuICAgIHthZGQ6IG9sZElFQXR0YWNoLCBybTogb2xkSUVEZXRhY2h9XG4gIClcbiAgXG4gIHJldHVybiBFdmVudHMucm0oZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpXG59XG5cbmZ1bmN0aW9uIHN0ZEF0dGFjaChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpXG59XG5cbmZ1bmN0aW9uIHN0ZERldGFjaChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpXG59XG5cbmZ1bmN0aW9uIG9sZElFQXR0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGlmKHVzZUNhcHR1cmUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCB1c2VDYXB0dXJlIGluIG9sZElFJylcbiAgfVxuXG4gIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKVxufVxuXG5mdW5jdGlvbiBvbGRJRURldGFjaChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBlbC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lcilcbn1cbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBub3cgPSByZXF1aXJlKCdkYXRlLW5vdycpO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgYXMgbG9uZyBhcyBpdCBjb250aW51ZXMgdG8gYmUgaW52b2tlZCwgd2lsbCBub3RcbiAqIGJlIHRyaWdnZXJlZC4gVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGl0IHN0b3BzIGJlaW5nIGNhbGxlZCBmb3JcbiAqIE4gbWlsbGlzZWNvbmRzLiBJZiBgaW1tZWRpYXRlYCBpcyBwYXNzZWQsIHRyaWdnZXIgdGhlIGZ1bmN0aW9uIG9uIHRoZVxuICogbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAqXG4gKiBAc291cmNlIHVuZGVyc2NvcmUuanNcbiAqIEBzZWUgaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vMjAwOS8wMy8yMC9kZWJvdW5jaW5nLWphdmFzY3JpcHQtbWV0aG9kcy9cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIHdyYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0IGluIG1zIChgMTAwYClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0byBleGVjdXRlIGF0IHRoZSBiZWdpbm5pbmcgKGBmYWxzZWApXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKXtcbiAgdmFyIHRpbWVvdXQsIGFyZ3MsIGNvbnRleHQsIHRpbWVzdGFtcCwgcmVzdWx0O1xuICBpZiAobnVsbCA9PSB3YWl0KSB3YWl0ID0gMTAwO1xuXG4gIGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgIHZhciBsYXN0ID0gbm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+IDApIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aW1lc3RhbXAgPSBub3coKTtcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gRGF0ZS5ub3cgfHwgbm93XG5cbmZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY3R4KSB7XG5cdGlmICghY3R4KSByZXR1cm4gZmFsc2Vcblx0dmFyIGdsID0gY3R4XG5cdC8vY29tcGF0aWJpbGl0eSB3aXRoIENocm9tZSBXZWJHTCBJbnNwZWN0b3IgQWRkb25cblx0aWYgKHR5cGVvZiBjdHgucmF3Z2wgIT09ICd1bmRlZmluZWQnKVxuXHRcdGdsID0gY3R4LnJhd2dsXG5cdGlmICh0eXBlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0ICE9PSAndW5kZWZpbmVkJyAmJiBnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dClcblx0XHRyZXR1cm4gdHJ1ZVxuXHRyZXR1cm4gZmFsc2Vcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0c3x8e307XG4gICAgdmFyIGNhbnZhcyA9IG9wdHMuY2FudmFzIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgaWYgKHR5cGVvZiBvcHRzLndpZHRoID09PSBcIm51bWJlclwiKVxuICAgICAgICBjYW52YXMud2lkdGggPSBvcHRzLndpZHRoO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5oZWlnaHQgPT09IFwibnVtYmVyXCIpXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBvcHRzLmhlaWdodDtcbiAgICBcbiAgICB2YXIgYXR0cmlicyA9IChvcHRzLmF0dHJpYnV0ZXMgfHwgb3B0cy5hdHRyaWJzIHx8IHt9KTtcbiAgICB0cnkge1xuICAgICAgICBnbCA9IChjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCBhdHRyaWJzKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgYXR0cmlicykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZ2wgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZ2w7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhbXBcblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gPCBtYXhcbiAgICA/ICh2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWUpXG4gICAgOiAodmFsdWUgPCBtYXggPyBtYXggOiB2YWx1ZSA+IG1pbiA/IG1pbiA6IHZhbHVlKVxufVxuIiwiLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JykgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKVxuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKVxuICAgIGxvYWRlZCA9IDFcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgbGlzdGVuZXIoKVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBmbigpIDogZm5zLnB1c2goZm4pXG4gIH1cblxufSk7XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgaSkge1xuICB2YXIgYyA9IGNvdW50W2ldfDBcbiAgaWYoYyA8PSAwKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShjKSwgalxuICBpZihpID09PSBjb3VudC5sZW5ndGgtMSkge1xuICAgIGZvcihqPTA7IGo8YzsgKytqKSB7XG4gICAgICByZXN1bHRbal0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3Ioaj0wOyBqPGM7ICsraikge1xuICAgICAgcmVzdWx0W2pdID0gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIGkrMSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBkdXBlX251bWJlcihjb3VudCwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCwgaVxuICByZXN1bHQgPSBuZXcgQXJyYXkoY291bnQpXG4gIGZvcihpPTA7IGk8Y291bnQ7ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IHZhbHVlXG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBkdXBlKGNvdW50LCB2YWx1ZSkge1xuICBpZih0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YWx1ZSA9IDBcbiAgfVxuICBzd2l0Y2godHlwZW9mIGNvdW50KSB7XG4gICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgaWYoY291bnQgPiAwKSB7XG4gICAgICAgIHJldHVybiBkdXBlX251bWJlcihjb3VudHwwLCB2YWx1ZSlcbiAgICAgIH1cbiAgICBicmVha1xuICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgIGlmKHR5cGVvZiAoY291bnQubGVuZ3RoKSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gZHVwZV9hcnJheShjb3VudCwgdmFsdWUsIDApXG4gICAgICB9XG4gICAgYnJlYWtcbiAgfVxuICByZXR1cm4gW11cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkdXBlIiwibW9kdWxlLmV4cG9ydHMgPSBjcmVhdGU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIHZhciBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG5cbi8qKlxuICogU2V0IGEgbWF0NCB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gICAgb3V0WzBdID0gMTtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs1XSA9IDE7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTBdID0gMTtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgICBvdXRbMTVdID0gMTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IG11bHRpcGx5O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7bWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gICAgdmFyIGEwMCA9IGFbMF0sIGEwMSA9IGFbMV0sIGEwMiA9IGFbMl0sIGEwMyA9IGFbM10sXG4gICAgICAgIGExMCA9IGFbNF0sIGExMSA9IGFbNV0sIGExMiA9IGFbNl0sIGExMyA9IGFbN10sXG4gICAgICAgIGEyMCA9IGFbOF0sIGEyMSA9IGFbOV0sIGEyMiA9IGFbMTBdLCBhMjMgPSBhWzExXSxcbiAgICAgICAgYTMwID0gYVsxMl0sIGEzMSA9IGFbMTNdLCBhMzIgPSBhWzE0XSwgYTMzID0gYVsxNV07XG5cbiAgICAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcbiAgICB2YXIgYjAgID0gYlswXSwgYjEgPSBiWzFdLCBiMiA9IGJbMl0sIGIzID0gYlszXTsgIFxuICAgIG91dFswXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzJdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFszXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls0XTsgYjEgPSBiWzVdOyBiMiA9IGJbNl07IGIzID0gYls3XTtcbiAgICBvdXRbNF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzVdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFs2XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbN10gPSBiMCphMDMgKyBiMSphMTMgKyBiMiphMjMgKyBiMyphMzM7XG5cbiAgICBiMCA9IGJbOF07IGIxID0gYls5XTsgYjIgPSBiWzEwXTsgYjMgPSBiWzExXTtcbiAgICBvdXRbOF0gPSBiMCphMDAgKyBiMSphMTAgKyBiMiphMjAgKyBiMyphMzA7XG4gICAgb3V0WzldID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxMF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzExXSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYlsxMl07IGIxID0gYlsxM107IGIyID0gYlsxNF07IGIzID0gYlsxNV07XG4gICAgb3V0WzEyXSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbMTNdID0gYjAqYTAxICsgYjEqYTExICsgYjIqYTIxICsgYjMqYTMxO1xuICAgIG91dFsxNF0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzE1XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHNjYWxlO1xuXG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0NCBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjM1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHt2ZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cbmZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICAgIHZhciB4ID0gdlswXSwgeSA9IHZbMV0sIHogPSB2WzJdO1xuXG4gICAgb3V0WzBdID0gYVswXSAqIHg7XG4gICAgb3V0WzFdID0gYVsxXSAqIHg7XG4gICAgb3V0WzJdID0gYVsyXSAqIHg7XG4gICAgb3V0WzNdID0gYVszXSAqIHg7XG4gICAgb3V0WzRdID0gYVs0XSAqIHk7XG4gICAgb3V0WzVdID0gYVs1XSAqIHk7XG4gICAgb3V0WzZdID0gYVs2XSAqIHk7XG4gICAgb3V0WzddID0gYVs3XSAqIHk7XG4gICAgb3V0WzhdID0gYVs4XSAqIHo7XG4gICAgb3V0WzldID0gYVs5XSAqIHo7XG4gICAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgICByZXR1cm4gb3V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRyYW5zbGF0ZTtcblxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHttYXQ0fSBhIHRoZSBtYXRyaXggdG8gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiB0cmFuc2xhdGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl0sXG4gICAgICAgIGEwMCwgYTAxLCBhMDIsIGEwMyxcbiAgICAgICAgYTEwLCBhMTEsIGExMiwgYTEzLFxuICAgICAgICBhMjAsIGEyMSwgYTIyLCBhMjM7XG5cbiAgICBpZiAoYSA9PT0gb3V0KSB7XG4gICAgICAgIG91dFsxMl0gPSBhWzBdICogeCArIGFbNF0gKiB5ICsgYVs4XSAqIHogKyBhWzEyXTtcbiAgICAgICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgICAgICBvdXRbMTRdID0gYVsyXSAqIHggKyBhWzZdICogeSArIGFbMTBdICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYVszXSAqIHggKyBhWzddICogeSArIGFbMTFdICogeiArIGFbMTVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGEwMCA9IGFbMF07IGEwMSA9IGFbMV07IGEwMiA9IGFbMl07IGEwMyA9IGFbM107XG4gICAgICAgIGExMCA9IGFbNF07IGExMSA9IGFbNV07IGExMiA9IGFbNl07IGExMyA9IGFbN107XG4gICAgICAgIGEyMCA9IGFbOF07IGEyMSA9IGFbOV07IGEyMiA9IGFbMTBdOyBhMjMgPSBhWzExXTtcblxuICAgICAgICBvdXRbMF0gPSBhMDA7IG91dFsxXSA9IGEwMTsgb3V0WzJdID0gYTAyOyBvdXRbM10gPSBhMDM7XG4gICAgICAgIG91dFs0XSA9IGExMDsgb3V0WzVdID0gYTExOyBvdXRbNl0gPSBhMTI7IG91dFs3XSA9IGExMztcbiAgICAgICAgb3V0WzhdID0gYTIwOyBvdXRbOV0gPSBhMjE7IG91dFsxMF0gPSBhMjI7IG91dFsxMV0gPSBhMjM7XG5cbiAgICAgICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYTAxICogeCArIGExMSAqIHkgKyBhMjEgKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhMDIgKiB4ICsgYTEyICogeSArIGEyMiAqIHogKyBhWzE0XTtcbiAgICAgICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59OyIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUF0dHJpYnV0ZVdyYXBwZXJcblxuLy9TaGFkZXIgYXR0cmlidXRlIGNsYXNzXG5mdW5jdGlvbiBTaGFkZXJBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkaW1lbnNpb24sIG5hbWUsIGNvbnN0RnVuYywgcmVsaW5rKSB7XG4gIHRoaXMuX2dsID0gZ2xcbiAgdGhpcy5fcHJvZ3JhbSA9IHByb2dyYW1cbiAgdGhpcy5fbG9jYXRpb24gPSBsb2NhdGlvblxuICB0aGlzLl9kaW1lbnNpb24gPSBkaW1lbnNpb25cbiAgdGhpcy5fbmFtZSA9IG5hbWVcbiAgdGhpcy5fY29uc3RGdW5jID0gY29uc3RGdW5jXG4gIHRoaXMuX3JlbGluayA9IHJlbGlua1xufVxuXG52YXIgcHJvdG8gPSBTaGFkZXJBdHRyaWJ1dGUucHJvdG90eXBlXG5cbnByb3RvLnBvaW50ZXIgPSBmdW5jdGlvbiBzZXRBdHRyaWJQb2ludGVyKHR5cGUsIG5vcm1hbGl6ZWQsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gIHZhciBnbCA9IHRoaXMuX2dsXG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5fbG9jYXRpb24sIHRoaXMuX2RpbWVuc2lvbiwgdHlwZXx8Z2wuRkxPQVQsICEhbm9ybWFsaXplZCwgc3RyaWRlfHwwLCBvZmZzZXR8fDApXG4gIHRoaXMuX2dsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuX2xvY2F0aW9uKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdsb2NhdGlvbicsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb25cbiAgfVxuICAsIHNldDogZnVuY3Rpb24odikge1xuICAgIGlmKHYgIT09IHRoaXMuX2xvY2F0aW9uKSB7XG4gICAgICB0aGlzLl9sb2NhdGlvbiA9IHZcbiAgICAgIHRoaXMuX2dsLmJpbmRBdHRyaWJMb2NhdGlvbih0aGlzLl9wcm9ncmFtLCB2LCB0aGlzLl9uYW1lKVxuICAgICAgdGhpcy5fZ2wubGlua1Byb2dyYW0odGhpcy5fcHJvZ3JhbSlcbiAgICAgIHRoaXMuX3JlbGluaygpXG4gICAgfVxuICB9XG59KVxuXG5cbi8vQWRkcyBhIHZlY3RvciBhdHRyaWJ1dGUgdG8gb2JqXG5mdW5jdGlvbiBhZGRWZWN0b3JBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkaW1lbnNpb24sIG9iaiwgbmFtZSwgZG9MaW5rKSB7XG4gIHZhciBjb25zdEZ1bmNBcmdzID0gWyAnZ2wnLCAndicgXVxuICB2YXIgdmFyTmFtZXMgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvbnN0RnVuY0FyZ3MucHVzaCgneCcraSlcbiAgICB2YXJOYW1lcy5wdXNoKCd4JytpKVxuICB9XG4gIGNvbnN0RnVuY0FyZ3MucHVzaChbXG4gICAgJ2lmKHgwLmxlbmd0aD09PXZvaWQgMCl7cmV0dXJuIGdsLnZlcnRleEF0dHJpYicsIGRpbWVuc2lvbiwgJ2YodiwnLCB2YXJOYW1lcy5qb2luKCksICcpfWVsc2V7cmV0dXJuIGdsLnZlcnRleEF0dHJpYicsIGRpbWVuc2lvbiwgJ2Z2KHYseDApfSdcbiAgXS5qb2luKCcnKSlcbiAgdmFyIGNvbnN0RnVuYyA9IEZ1bmN0aW9uLmFwcGx5KHVuZGVmaW5lZCwgY29uc3RGdW5jQXJncylcbiAgdmFyIGF0dHIgPSBuZXcgU2hhZGVyQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgZGltZW5zaW9uLCBuYW1lLCBjb25zdEZ1bmMsIGRvTGluaylcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgIHNldDogZnVuY3Rpb24oeCkge1xuICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHIuX2xvY2F0aW9uKVxuICAgICAgY29uc3RGdW5jKGdsLCBhdHRyLl9sb2NhdGlvbiwgeClcbiAgICAgIHJldHVybiB4XG4gICAgfVxuICAgICwgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhdHRyXG4gICAgfVxuICAgICwgZW51bWVyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vL0NyZWF0ZSBzaGltcyBmb3IgYXR0cmlidXRlc1xuZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlV3JhcHBlcihnbCwgcHJvZ3JhbSwgYXR0cmlidXRlcywgZG9MaW5rKSB7XG4gIHZhciBvYmogPSB7fVxuICBmb3IodmFyIGk9MCwgbj1hdHRyaWJ1dGVzLmxlbmd0aDsgaTxuOyArK2kpIHtcbiAgICB2YXIgYSA9IGF0dHJpYnV0ZXNbaV1cbiAgICB2YXIgbmFtZSA9IGEubmFtZVxuICAgIHZhciB0eXBlID0gYS50eXBlXG4gICAgdmFyIGxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSlcbiAgICBcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCAxLCBvYmosIG5hbWUsIGRvTGluaylcbiAgICAgIGJyZWFrXG4gICAgICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmKHR5cGUuaW5kZXhPZigndmVjJykgPj0gMCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlIGZvciBhdHRyaWJ1dGUgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYWRkVmVjdG9yQXR0cmlidXRlKGdsLCBwcm9ncmFtLCBsb2NhdGlvbiwgZCwgb2JqLCBuYW1lLCBkb0xpbmspXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gZGF0YSB0eXBlIGZvciBhdHRyaWJ1dGUgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZHVwID0gcmVxdWlyZSgnZHVwJylcbnZhciBjb2FsbGVzY2VVbmlmb3JtcyA9IHJlcXVpcmUoJy4vcmVmbGVjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVW5pZm9ybVdyYXBwZXJcblxuLy9CaW5kcyBhIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGEgdmFsdWVcbmZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgdmFyIGMgPSBuZXcgRnVuY3Rpb24oJ3knLCAncmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHl9JylcbiAgcmV0dXJuIGMoeClcbn1cblxuLy9DcmVhdGUgc2hpbXMgZm9yIHVuaWZvcm1zXG5mdW5jdGlvbiBjcmVhdGVVbmlmb3JtV3JhcHBlcihnbCwgcHJvZ3JhbSwgdW5pZm9ybXMsIGxvY2F0aW9ucykge1xuXG4gIGZ1bmN0aW9uIG1ha2VHZXR0ZXIoaW5kZXgpIHtcbiAgICB2YXIgcHJvYyA9IG5ldyBGdW5jdGlvbignZ2wnLCAncHJvZycsICdsb2NhdGlvbnMnLCBcbiAgICAgICdyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZ2wuZ2V0VW5pZm9ybShwcm9nLGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSl9JykgXG4gICAgcmV0dXJuIHByb2MoZ2wsIHByb2dyYW0sIGxvY2F0aW9ucylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VQcm9wU2V0dGVyKHBhdGgsIGluZGV4LCB0eXBlKSB7XG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2Jvb2wnOlxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgIHJldHVybiAnZ2wudW5pZm9ybTFpKGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgY2FzZSAnZmxvYXQnOlxuICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0xZihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2aWR4ID0gdHlwZS5pbmRleE9mKCd2ZWMnKVxuICAgICAgICBpZigwIDw9IHZpZHggJiYgdmlkeCA8PSAxICYmIHR5cGUubGVuZ3RoID09PSA0ICsgdmlkeCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlJylcbiAgICAgICAgICB9XG4gICAgICAgICAgc3dpdGNoKHR5cGUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICBjYXNlICdiJzpcbiAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0nICsgZCArICdpdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm0nICsgZCArICdmdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBVbnJlY29nbml6ZWQgZGF0YSB0eXBlIGZvciB2ZWN0b3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZih0eXBlLmluZGV4T2YoJ21hdCcpID09PSAwICYmIHR5cGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCB1bmlmb3JtIGRpbWVuc2lvbiB0eXBlIGZvciBtYXRyaXggJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtTWF0cml4JyArIGQgKyAnZnYobG9jYXRpb25zWycgKyBpbmRleCArICddLGZhbHNlLG9iaicgKyBwYXRoICsgJyknXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gdW5pZm9ybSBkYXRhIHR5cGUgZm9yICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZW51bWVyYXRlSW5kaWNlcyhwcmVmaXgsIHR5cGUpIHtcbiAgICBpZih0eXBlb2YgdHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBbIFtwcmVmaXgsIHR5cGVdIF1cbiAgICB9XG4gICAgdmFyIGluZGljZXMgPSBbXVxuICAgIGZvcih2YXIgaWQgaW4gdHlwZSkge1xuICAgICAgdmFyIHByb3AgPSB0eXBlW2lkXVxuICAgICAgdmFyIHRwcmVmaXggPSBwcmVmaXhcbiAgICAgIGlmKHBhcnNlSW50KGlkKSArICcnID09PSBpZCkge1xuICAgICAgICB0cHJlZml4ICs9ICdbJyArIGlkICsgJ10nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cHJlZml4ICs9ICcuJyArIGlkXG4gICAgICB9XG4gICAgICBpZih0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaW5kaWNlcy5wdXNoLmFwcGx5KGluZGljZXMsIGVudW1lcmF0ZUluZGljZXModHByZWZpeCwgcHJvcCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2VzLnB1c2goW3RwcmVmaXgsIHByb3BdKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVNldHRlcih0eXBlKSB7XG4gICAgdmFyIGNvZGUgPSBbICdyZXR1cm4gZnVuY3Rpb24gdXBkYXRlUHJvcGVydHkob2JqKXsnIF1cbiAgICB2YXIgaW5kaWNlcyA9IGVudW1lcmF0ZUluZGljZXMoJycsIHR5cGUpXG4gICAgZm9yKHZhciBpPTA7IGk8aW5kaWNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGl0ZW0gPSBpbmRpY2VzW2ldXG4gICAgICB2YXIgcGF0aCA9IGl0ZW1bMF1cbiAgICAgIHZhciBpZHggID0gaXRlbVsxXVxuICAgICAgaWYobG9jYXRpb25zW2lkeF0pIHtcbiAgICAgICAgY29kZS5wdXNoKG1ha2VQcm9wU2V0dGVyKHBhdGgsIGlkeCwgdW5pZm9ybXNbaWR4XS50eXBlKSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29kZS5wdXNoKCdyZXR1cm4gb2JqfScpXG4gICAgdmFyIHByb2MgPSBuZXcgRnVuY3Rpb24oJ2dsJywgJ3Byb2cnLCAnbG9jYXRpb25zJywgY29kZS5qb2luKCdcXG4nKSlcbiAgICByZXR1cm4gcHJvYyhnbCwgcHJvZ3JhbSwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgY2FzZSAnaW50JzpcbiAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICBjYXNlICdzYW1wbGVyQ3ViZSc6XG4gICAgICAgIHJldHVybiAwXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAwLjBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2aWR4ID0gdHlwZS5pbmRleE9mKCd2ZWMnKVxuICAgICAgICBpZigwIDw9IHZpZHggJiYgdmlkeCA8PSAxICYmIHR5cGUubGVuZ3RoID09PSA0ICsgdmlkeCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgZGF0YSB0eXBlJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYodHlwZS5jaGFyQXQoMCkgPT09ICdiJykge1xuICAgICAgICAgICAgcmV0dXJuIGR1cChkLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGR1cChkKVxuICAgICAgICB9IGVsc2UgaWYodHlwZS5pbmRleE9mKCdtYXQnKSA9PT0gMCAmJiB0eXBlLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgIHZhciBkID0gdHlwZS5jaGFyQ29kZUF0KHR5cGUubGVuZ3RoLTEpIC0gNDhcbiAgICAgICAgICBpZihkIDwgMiB8fCBkID4gNCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEludmFsaWQgdW5pZm9ybSBkaW1lbnNpb24gdHlwZSBmb3IgbWF0cml4ICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBkdXAoW2QsZF0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVua25vd24gdW5pZm9ybSBkYXRhIHR5cGUgZm9yICcgKyBuYW1lICsgJzogJyArIHR5cGUpXG4gICAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RvcmVQcm9wZXJ0eShvYmosIHByb3AsIHR5cGUpIHtcbiAgICBpZih0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBjaGlsZCA9IHByb2Nlc3NPYmplY3QodHlwZSlcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgZ2V0OiBpZGVudGl0eShjaGlsZCksXG4gICAgICAgIHNldDogbWFrZVNldHRlcih0eXBlKSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWYobG9jYXRpb25zW3R5cGVdKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgICAgICBnZXQ6IG1ha2VHZXR0ZXIodHlwZSksXG4gICAgICAgICAgc2V0OiBtYWtlU2V0dGVyKHR5cGUpLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW3Byb3BdID0gZGVmYXVsdFZhbHVlKHVuaWZvcm1zW3R5cGVdLnR5cGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc09iamVjdChvYmopIHtcbiAgICB2YXIgcmVzdWx0XG4gICAgaWYoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICByZXN1bHQgPSBuZXcgQXJyYXkob2JqLmxlbmd0aClcbiAgICAgIGZvcih2YXIgaT0wOyBpPG9iai5sZW5ndGg7ICsraSkge1xuICAgICAgICBzdG9yZVByb3BlcnR5KHJlc3VsdCwgaSwgb2JqW2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB7fVxuICAgICAgZm9yKHZhciBpZCBpbiBvYmopIHtcbiAgICAgICAgc3RvcmVQcm9wZXJ0eShyZXN1bHQsIGlkLCBvYmpbaWRdKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvL1JldHVybiBkYXRhXG4gIHZhciBjb2FsbGVzY2VkID0gY29hbGxlc2NlVW5pZm9ybXModW5pZm9ybXMsIHRydWUpXG4gIHJldHVybiB7XG4gICAgZ2V0OiBpZGVudGl0eShwcm9jZXNzT2JqZWN0KGNvYWxsZXNjZWQpKSxcbiAgICBzZXQ6IG1ha2VTZXR0ZXIoY29hbGxlc2NlZCksXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZVJlZmxlY3RUeXBlc1xuXG4vL0NvbnN0cnVjdCB0eXBlIGluZm8gZm9yIHJlZmxlY3Rpb24uXG4vL1xuLy8gVGhpcyBpdGVyYXRlcyBvdmVyIHRoZSBmbGF0dGVuZWQgbGlzdCBvZiB1bmlmb3JtIHR5cGUgdmFsdWVzIGFuZCBzbWFzaGVzIHRoZW0gaW50byBhIEpTT04gb2JqZWN0LlxuLy9cbi8vIFRoZSBsZWF2ZXMgb2YgdGhlIHJlc3VsdGluZyBvYmplY3QgYXJlIGVpdGhlciBpbmRpY2VzIG9yIHR5cGUgc3RyaW5ncyByZXByZXNlbnRpbmcgcHJpbWl0aXZlIGdsc2xpZnkgdHlwZXNcbmZ1bmN0aW9uIG1ha2VSZWZsZWN0VHlwZXModW5pZm9ybXMsIHVzZUluZGV4KSB7XG4gIHZhciBvYmogPSB7fVxuICBmb3IodmFyIGk9MDsgaTx1bmlmb3Jtcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBuID0gdW5pZm9ybXNbaV0ubmFtZVxuICAgIHZhciBwYXJ0cyA9IG4uc3BsaXQoXCIuXCIpXG4gICAgdmFyIG8gPSBvYmpcbiAgICBmb3IodmFyIGo9MDsgajxwYXJ0cy5sZW5ndGg7ICsraikge1xuICAgICAgdmFyIHggPSBwYXJ0c1tqXS5zcGxpdChcIltcIilcbiAgICAgIGlmKHgubGVuZ3RoID4gMSkge1xuICAgICAgICBpZighKHhbMF0gaW4gbykpIHtcbiAgICAgICAgICBvW3hbMF1dID0gW11cbiAgICAgICAgfVxuICAgICAgICBvID0gb1t4WzBdXVxuICAgICAgICBmb3IodmFyIGs9MTsgazx4Lmxlbmd0aDsgKytrKSB7XG4gICAgICAgICAgdmFyIHkgPSBwYXJzZUludCh4W2tdKVxuICAgICAgICAgIGlmKGs8eC5sZW5ndGgtMSB8fCBqPHBhcnRzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICBpZighKHkgaW4gbykpIHtcbiAgICAgICAgICAgICAgaWYoayA8IHgubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICBvW3ldID0gW11cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvW3ldID0ge31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IG9beV1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYodXNlSW5kZXgpIHtcbiAgICAgICAgICAgICAgb1t5XSA9IGlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9beV0gPSB1bmlmb3Jtc1tpXS50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYoaiA8IHBhcnRzLmxlbmd0aC0xKSB7XG4gICAgICAgIGlmKCEoeFswXSBpbiBvKSkge1xuICAgICAgICAgIG9beFswXV0gPSB7fVxuICAgICAgICB9XG4gICAgICAgIG8gPSBvW3hbMF1dXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih1c2VJbmRleCkge1xuICAgICAgICAgIG9beFswXV0gPSBpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb1t4WzBdXSA9IHVuaWZvcm1zW2ldLnR5cGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGVVbmlmb3JtV3JhcHBlciA9IHJlcXVpcmUoJy4vbGliL2NyZWF0ZS11bmlmb3JtcycpXG52YXIgY3JlYXRlQXR0cmlidXRlV3JhcHBlciA9IHJlcXVpcmUoJy4vbGliL2NyZWF0ZS1hdHRyaWJ1dGVzJylcbnZhciBtYWtlUmVmbGVjdCA9IHJlcXVpcmUoJy4vbGliL3JlZmxlY3QnKVxuXG4vL1NoYWRlciBvYmplY3RcbmZ1bmN0aW9uIFNoYWRlcihnbCwgcHJvZywgdmVydFNoYWRlciwgZnJhZ1NoYWRlcikge1xuICB0aGlzLmdsID0gZ2xcbiAgdGhpcy5oYW5kbGUgPSBwcm9nXG4gIHRoaXMuYXR0cmlidXRlcyA9IG51bGxcbiAgdGhpcy51bmlmb3JtcyA9IG51bGxcbiAgdGhpcy50eXBlcyA9IG51bGxcbiAgdGhpcy52ZXJ0ZXhTaGFkZXIgPSB2ZXJ0U2hhZGVyXG4gIHRoaXMuZnJhZ21lbnRTaGFkZXIgPSBmcmFnU2hhZGVyXG59XG5cbi8vQmluZHMgdGhlIHNoYWRlclxuU2hhZGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmhhbmRsZSlcbn1cblxuLy9EZXN0cm95IHNoYWRlciwgcmVsZWFzZSByZXNvdXJjZXNcblNoYWRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIGdsLmRlbGV0ZVNoYWRlcih0aGlzLnZlcnRleFNoYWRlcilcbiAgZ2wuZGVsZXRlU2hhZGVyKHRoaXMuZnJhZ21lbnRTaGFkZXIpXG4gIGdsLmRlbGV0ZVByb2dyYW0odGhpcy5oYW5kbGUpXG59XG5cblNoYWRlci5wcm90b3R5cGUudXBkYXRlRXhwb3J0cyA9IGZ1bmN0aW9uKHVuaWZvcm1zLCBhdHRyaWJ1dGVzKSB7XG4gIHZhciBsb2NhdGlvbnMgPSBuZXcgQXJyYXkodW5pZm9ybXMubGVuZ3RoKVxuICB2YXIgcHJvZ3JhbSA9IHRoaXMuaGFuZGxlXG4gIHZhciBnbCA9IHRoaXMuZ2xcblxuICB2YXIgZG9MaW5rID0gcmVsaW5rVW5pZm9ybXMuYmluZCh2b2lkIDAsXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICBsb2NhdGlvbnMsXG4gICAgdW5pZm9ybXNcbiAgKVxuICBkb0xpbmsoKVxuXG4gIHRoaXMudHlwZXMgPSB7XG4gICAgdW5pZm9ybXM6IG1ha2VSZWZsZWN0KHVuaWZvcm1zKSxcbiAgICBhdHRyaWJ1dGVzOiBtYWtlUmVmbGVjdChhdHRyaWJ1dGVzKVxuICB9XG5cbiAgdGhpcy5hdHRyaWJ1dGVzID0gY3JlYXRlQXR0cmlidXRlV3JhcHBlcihcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIGF0dHJpYnV0ZXMsXG4gICAgZG9MaW5rXG4gIClcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3VuaWZvcm1zJywgY3JlYXRlVW5pZm9ybVdyYXBwZXIoXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICB1bmlmb3JtcyxcbiAgICBsb2NhdGlvbnNcbiAgKSlcbn1cblxuLy9SZWxpbmtzIGFsbCB1bmlmb3Jtc1xuZnVuY3Rpb24gcmVsaW5rVW5pZm9ybXMoZ2wsIHByb2dyYW0sIGxvY2F0aW9ucywgdW5pZm9ybXMpIHtcbiAgZm9yKHZhciBpPTA7IGk8dW5pZm9ybXMubGVuZ3RoOyArK2kpIHtcbiAgICBsb2NhdGlvbnNbaV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgdW5pZm9ybXNbaV0ubmFtZSlcbiAgfVxufVxuXG4vL0NvbXBpbGVzIGFuZCBsaW5rcyBhIHNoYWRlciBwcm9ncmFtIHdpdGggdGhlIGdpdmVuIGF0dHJpYnV0ZSBhbmQgdmVydGV4IGxpc3RcbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihcbiAgICBnbFxuICAsIHZlcnRTb3VyY2VcbiAgLCBmcmFnU291cmNlXG4gICwgdW5pZm9ybXNcbiAgLCBhdHRyaWJ1dGVzKSB7XG4gIFxuICAvL0NvbXBpbGUgdmVydGV4IHNoYWRlclxuICB2YXIgdmVydFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5WRVJURVhfU0hBREVSKVxuICBnbC5zaGFkZXJTb3VyY2UodmVydFNoYWRlciwgdmVydFNvdXJjZSlcbiAgZ2wuY29tcGlsZVNoYWRlcih2ZXJ0U2hhZGVyKVxuICBpZighZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHZlcnRTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHZlcnRTaGFkZXIpXG4gICAgY29uc29sZS5lcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21wbGluZyB2ZXJ0ZXggc2hhZGVyOicsIGVyckxvZylcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGlsaW5nIHZlcnRleCBzaGFkZXI6JyArIGVyckxvZylcbiAgfVxuICBcbiAgLy9Db21waWxlIGZyYWdtZW50IHNoYWRlclxuICB2YXIgZnJhZ1NoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihnbC5GUkFHTUVOVF9TSEFERVIpXG4gIGdsLnNoYWRlclNvdXJjZShmcmFnU2hhZGVyLCBmcmFnU291cmNlKVxuICBnbC5jb21waWxlU2hhZGVyKGZyYWdTaGFkZXIpXG4gIGlmKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZnJhZ1NoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgdmFyIGVyckxvZyA9IGdsLmdldFNoYWRlckluZm9Mb2coZnJhZ1NoYWRlcilcbiAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXI6JywgZXJyTG9nKVxuICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21waWxpbmcgZnJhZ21lbnQgc2hhZGVyOicgKyBlcnJMb2cpXG4gIH1cbiAgXG4gIC8vTGluayBwcm9ncmFtXG4gIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnU2hhZGVyKVxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydFNoYWRlcilcblxuICAvL09wdGlvbmFsIGRlZmF1bHQgYXR0cml1YnRlIGxvY2F0aW9uc1xuICBhdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24oYSkge1xuICAgIGlmICh0eXBlb2YgYS5sb2NhdGlvbiA9PT0gJ251bWJlcicpIFxuICAgICAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGEubG9jYXRpb24sIGEubmFtZSlcbiAgfSlcblxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxuICBpZighZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSlcbiAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGxpbmtpbmcgc2hhZGVyIHByb2dyYW06JywgZXJyTG9nKVxuICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBFcnJvciBsaW5raW5nIHNoYWRlciBwcm9ncmFtOicgKyBlcnJMb2cpXG4gIH1cbiAgXG4gIC8vUmV0dXJuIGZpbmFsIGxpbmtlZCBzaGFkZXIgb2JqZWN0XG4gIHZhciBzaGFkZXIgPSBuZXcgU2hhZGVyKFxuICAgIGdsLFxuICAgIHByb2dyYW0sXG4gICAgdmVydFNoYWRlcixcbiAgICBmcmFnU2hhZGVyXG4gIClcbiAgc2hhZGVyLnVwZGF0ZUV4cG9ydHModW5pZm9ybXMsIGF0dHJpYnV0ZXMpXG5cbiAgcmV0dXJuIHNoYWRlclxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNoYWRlclxuIiwidmFyIEJhc2UgPSByZXF1aXJlKCdmb250cGF0aC1zaW1wbGUtcmVuZGVyZXInKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxudmFyIGJtZm9udDJmb250cGF0aCA9IHJlcXVpcmUoJ2ZvbnRwYXRoLWJtZm9udCcpXG52YXIgdGV4Y29vcmQgPSByZXF1aXJlKCd0ZXhjb29yZCcpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgY3JlYXRlVGV4dHVyZSA9IHJlcXVpcmUoJ2dsLXRleHR1cmUyZCcpXG5cbnZhciBCYXRjaCA9IHJlcXVpcmUoJ2dsLXNwcml0ZS1iYXRjaCcpXG5cbnZhciB0bXBQb3MgPSBbMCwgMF0sXG4gICAgdG1wU2hhcGUgPSBbMCwgMF0sXG4gICAgdG1wMSA9IFswLCAwXSxcbiAgICB0bXAyID0gWzAsIDBdXG52YXIgREVGQVVMVF9URVhDT09SRCA9IFswLCAwLCAxLCAxXVxudmFyIG1heEluaXRpYWxDYXBhY2l0eSA9IDUwMFxuXG5mdW5jdGlvbiB0ZXhjb29yZEdseXBoKGdseXBoLCBhdGxhcywgb3V0KSB7XG4gICAgdG1wMVswXSA9IGdseXBoLnhcbiAgICB0bXAxWzFdID0gZ2x5cGgueVxuICAgIHRtcDJbMF0gPSBnbHlwaC53aWR0aFxuICAgIHRtcDJbMV0gPSBnbHlwaC5oZWlnaHRcbiAgICByZXR1cm4gdGV4Y29vcmQodG1wMSwgdG1wMiwgYXRsYXMsIG91dClcbn1cblxuZnVuY3Rpb24gVGV4dFJlbmRlcmVyKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0UmVuZGVyZXIoZ2wsIG9wdClcbiAgICBvcHQgPSBvcHR8fHt9XG5cbiAgICBpZiAoIW9wdC5mb250KSBcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgYm1mb250IGF0IGNyZWF0aW9uIHRpbWUnKVxuXG4gICAgLy9pZiB0aGUgZm9udCBoYXMgSW1hZ2UvbmRhcnJheSBhcnJheVxuICAgIGlmICghb3B0LnRleHR1cmVzICYmIEFycmF5LmlzQXJyYXkob3B0LmZvbnQuaW1hZ2VzKSkge1xuICAgICAgICBvcHQudGV4dHVyZXMgPSBvcHQuZm9udC5pbWFnZXMubWFwKGZ1bmN0aW9uKGltZykge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVRleHR1cmUoZ2wsIGltZylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvcHQuZm9udCA9IGJtZm9udDJmb250cGF0aChvcHQuZm9udClcblxuICAgIEJhc2UuY2FsbCh0aGlzLCBvcHQpXG5cbiAgICB0aGlzLnRleHR1cmVzID0gb3B0LnRleHR1cmVzIHx8IFtdXG4gICAgdGhpcy5nbCA9IGdsXG4gICAgaWYgKCFnbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibXVzdCBzcGVjaWZ5IGdsIGNvbnRleHRcIilcbiAgICBcbiAgICAvL2Fzc3VtZSB0ZXh0IHdpbGwgYmUgdXNlZCBkeW5hbWljYWxseSBcbiAgICBpZiAodHlwZW9mIG9wdC5keW5hbWljICE9PSAnYm9vbGVhbicpXG4gICAgICAgIG9wdC5keW5hbWljID0gdHJ1ZVxuXG4gICAgdmFyIGJhdGNoID0gb3B0LmJhdGNoXG4gICAgaWYgKCFiYXRjaClcbiAgICAgICAgdGhpcy5kZWZhdWx0QmF0Y2ggPSBCYXRjaChnbCwgb3B0KVxuICAgIHRoaXMuYmF0Y2ggPSBiYXRjaCB8fCB0aGlzLmRlZmF1bHRCYXRjaFxuXG4gICAgaWYgKHR5cGVvZiBvcHQud3JhcFdpZHRoICE9PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy5sYXlvdXQoKVxufVxuXG5pbmhlcml0cyhUZXh0UmVuZGVyZXIsIEJhc2UpXG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uKHRleHR1cmVzKSB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdEJhdGNoKVxuICAgICAgICB0aGlzLmRlZmF1bHRCYXRjaC5kaXNwb3NlKClcbiAgICBpZiAodGV4dHVyZXMpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlcy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdC5kaXNwb3NlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHQuZGlzcG9zZSgpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUudW5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2NhY2hlID0gZmFsc2VcbiAgICB0aGlzLmJhdGNoLmNsZWFyKClcbiAgICByZXR1cm4gdGhpc1xufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24oeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIC8vIGlmICh0aGlzLnVuZGVybGluZSB8fCB0aGlzLmZvbnQucGFnZXMubGVuZ3RoID4gMSlcbiAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKCdjdXJyZW50bHkgY2FjaGVkIHRleHQgZG9lcyBub3Qgc3VwcG9ydCB1bmRlcmxpbmVzIG9yIG11bHRpcGxlIHRleHR1cmUgcGFnZXMnKVxuICAgIFxuICAgIHRoaXMuX2NhY2hlID0gdHJ1ZVxuICAgIHRoaXMuYmF0Y2guZW5zdXJlQ2FwYWNpdHkodGhpcy50ZXh0Lmxlbmd0aClcbiAgICB0aGlzLmJhdGNoLmNsZWFyKClcbiAgICB0aGlzLl9idWlsZCh4LCB5LCBzdGFydCwgZW5kKVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKHNoYWRlciwgeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIHZhciBiYXRjaCA9IHRoaXMuYmF0Y2hcbiAgICBiYXRjaC5iaW5kKHNoYWRlcilcblxuICAgIC8vaWYgd2UncmUgZHJhd2luZyBkeW5hbWljYWxseVxuICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgYmF0Y2guY2xlYXIoKVxuICAgICAgICB0aGlzLl9idWlsZCh4LCB5LCBzdGFydCwgZW5kKVxuICAgIH1cbiAgICBcbiAgICBiYXRjaC5kcmF3KClcbiAgICBiYXRjaC51bmJpbmQoKVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuX2J1aWxkID0gZnVuY3Rpb24oeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnJlbmRlcih4LCB5LCBzdGFydCwgZW5kKVxuXG4gICAgdmFyIGJhdGNoID0gdGhpcy5iYXRjaFxuICAgIHZhciBpID0gMFxuICAgIFxuICAgIC8vdW5kZXJsaW5lcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCB3aXRoIGNhY2hlKClcbiAgICBpZiAoIXRoaXMuX2NhY2hlKSB7XG4gICAgICAgIGJhdGNoLnRleGNvb3JkID0gREVGQVVMVF9URVhDT09SRFxuICAgICAgICBiYXRjaC50ZXh0dXJlID0gbnVsbFxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQudW5kZXJsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHVuZGVybGluZSA9IHJlc3VsdC51bmRlcmxpbmVzW2ldXG4gICAgICAgICAgICBiYXRjaC5wb3NpdGlvbiA9IHVuZGVybGluZS5wb3NpdGlvblxuICAgICAgICAgICAgYmF0Y2guc2hhcGUgPSB1bmRlcmxpbmUuc2l6ZVxuICAgICAgICAgICAgYmF0Y2gucHVzaCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL25vdyBkcmF3IG91ciBnbHlwaHMgaW50byB0aGUgYmF0Y2guLi5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcmVzdWx0LmdseXBocy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZyA9IHJlc3VsdC5nbHlwaHNbaV1cbiAgICAgICAgdGhpcy5fZHJhd0dseXBoKGJhdGNoLCBnKVxuICAgIH1cbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5fZHJhd0dseXBoID0gZnVuY3Rpb24oYmF0Y2gsIGRhdGEpIHtcbiAgICAvLy4uLiB3ZSBjb3VsZCBzb3J0IHRoZXNlIGJ5IHRleHR1cmUgcGFnZSB0byByZWR1Y2UgZHJhd3NcbiAgICB2YXIgZ2x5cGggPSBkYXRhLmdseXBoXG4gICAgdmFyIGltZyA9IHRoaXMudGV4dHVyZXNbZ2x5cGgucGFnZV1cbiAgICB0bXBQb3NbMF0gPSBkYXRhLnBvc2l0aW9uWzBdK2dseXBoLmhieFxuICAgIHRtcFBvc1sxXSA9IGRhdGEucG9zaXRpb25bMV0rZ2x5cGguaGJ5IC0gdGhpcy5mb250LmRlc2NlbmRlclxuICAgIHRtcFNoYXBlWzBdID0gZ2x5cGgud2lkdGggKiBkYXRhLnNjYWxlWzBdXG4gICAgdG1wU2hhcGVbMV0gPSBnbHlwaC5oZWlnaHQgKiBkYXRhLnNjYWxlWzFdXG4gICAgXG4gICAgYmF0Y2gudGV4dHVyZSA9IGltZ1xuICAgIHRleGNvb3JkR2x5cGgoZ2x5cGgsIGltZyAmJiBpbWcuc2hhcGUsIGJhdGNoLnRleGNvb3JkKVxuICAgIGJhdGNoLnBvc2l0aW9uID0gdG1wUG9zXG4gICAgYmF0Y2guc2hhcGUgPSB0bXBTaGFwZVxuICAgIGJhdGNoLnB1c2goKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRSZW5kZXJlciIsImZ1bmN0aW9uIGdseXBoKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlOiBkYXRhLnBhZ2UsXG4gICAgICAgIGhieDogZGF0YS54b2Zmc2V0LFxuICAgICAgICBoYnk6IGRhdGEueW9mZnNldCxcbiAgICAgICAgd2lkdGg6IGRhdGEud2lkdGgsXG4gICAgICAgIGhlaWdodDogZGF0YS5oZWlnaHQsXG4gICAgICAgIHhvZmY6IGRhdGEueGFkdmFuY2UsXG4gICAgICAgIHg6IGRhdGEueCxcbiAgICAgICAgeTogZGF0YS55XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnbHlwaHMoY2hhcnMpIHtcbiAgICB2YXIgb3V0ID0ge31cbiAgICBjaGFycy5mb3JFYWNoKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgb3V0W1N0cmluZy5mcm9tQ2hhckNvZGUoYy5pZCldID0gZ2x5cGgoYylcbiAgICB9KVxuICAgIHJldHVybiBvdXRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihibWZvbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlczogYm1mb250LnBhZ2VzLFxuICAgICAgICByZXNvbHV0aW9uOiA3MixcbiAgICAgICAgc2l6ZTogYm1mb250LmluZm8uc2l6ZSxcbiAgICAgICAgdW5pdHNfcGVyX0VNOiAxLFxuICAgICAgICBiaXRtYXA6IHRydWUsXG4gICAgICAgIGZhbWlseV9uYW1lOiBibWZvbnQuaW5mby5mYWNlLFxuICAgICAgICBoZWlnaHQ6IGJtZm9udC5jb21tb24ubGluZUhlaWdodCxcbiAgICAgICAgZGVzY2VuZGVyOiBibWZvbnQuY29tbW9uLmJhc2UsXG4gICAgICAgIGFzY2VuZGVyOiBibWZvbnQuY29tbW9uLmJhc2UsXG4gICAgICAgIGdseXBoczogZ2x5cGhzKGJtZm9udC5jaGFycyksXG4gICAgICAgIGtlcm5pbmc6IGJtZm9udC5rZXJuaW5ncy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgcmV0dXJuIFtTdHJpbmcuZnJvbUNoYXJDb2RlKGsuZmlyc3QpLFN0cmluZy5mcm9tQ2hhckNvZGUoay5zZWNvbmQpLGsuYW1vdW50XVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJ2YXIgQmFzZSA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXJlbmRlcmVyJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxuLy9UT0RPOiBFdmVudHVhbGx5IGxvdHMgb2YgdGhpcyBjb2RlIHdpbGwganVzdCByZXBsYWNlIGZvbnRwYXRoLXJlbmRlcmVyLi4uXG5cbmZ1bmN0aW9uIEZvbnRwYXRoUmVuZGVyZXIob3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBGb250cGF0aFJlbmRlcmVyKSlcbiAgICAgICAgcmV0dXJuIG5ldyBGb250cGF0aFJlbmRlcmVyKG9wdGlvbnMpXG4gICAgQmFzZS5jYWxsKHRoaXMsIG9wdGlvbnMpXG5cbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgIGdseXBoczogW10sXG4gICAgICAgIHVuZGVybGluZXM6IFtdXG4gICAgfVxufVxuXG5pbmhlcml0cyhGb250cGF0aFJlbmRlcmVyLCBCYXNlKVxuXG5Gb250cGF0aFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJHbHlwaCA9IGZ1bmN0aW9uKGksIGdseXBoLCBzY2FsZSwgeCwgeSkge1xuICAgIHRoaXMuZGF0YS5nbHlwaHMucHVzaChuZXcgR2x5cGgoaSwgZ2x5cGgsIFxuICAgICAgICAgICAgICAgIHRoaXMudGV4dC5jaGFyQ29kZUF0KGkpLCBcbiAgICAgICAgICAgICAgICBbIHNjYWxlLCB0aGlzLmZvbnQuYml0bWFwID8gc2NhbGUgOiAtc2NhbGUgXSxcbiAgICAgICAgICAgICAgICBbIHgsIHkgXSkpXG59XG5cbkZvbnRwYXRoUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclVuZGVybGluZSA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICB0aGlzLmRhdGEudW5kZXJsaW5lcy5wdXNoKG5ldyBVbmRlcmxpbmUoXG4gICAgICAgIFsgeCwgeSBdLFxuICAgICAgICBbIHdpZHRoLCBoZWlnaHQgXVxuICAgICkpXG59XG5cbkZvbnRwYXRoUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKHgsIHksIHN0YXJ0LCBlbmQpIHtcbiAgICAvL25ldyBkYXRhIGZvciByZXN1bHRcbiAgICB0aGlzLmRhdGEuZ2x5cGhzLmxlbmd0aCA9IDBcbiAgICB0aGlzLmRhdGEudW5kZXJsaW5lcy5sZW5ndGggPSAwXG4gICAgQmFzZS5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcywgeCwgeSwgc3RhcnQsIGVuZClcbiAgICByZXR1cm4gdGhpcy5kYXRhXG59XG5cbmZ1bmN0aW9uIEdseXBoKGluZGV4LCBnbHlwaCwgY2hhckNvZGUsIHNjYWxlLCBwb3NpdGlvbikge1xuICAgIHRoaXMuZ2x5cGggPSBnbHlwaFxuICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgIHRoaXMuY2hhckNvZGUgPSBjaGFyQ29kZVxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2NhbGUgPSBzY2FsZVxufVxuXG5mdW5jdGlvbiBVbmRlcmxpbmUocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9udHBhdGhSZW5kZXJlciIsInZhciBHbHlwaEl0ZXJhdG9yID0gcmVxdWlyZSgnZm9udHBhdGgtZ2x5cGgtaXRlcmF0b3InKTtcbnZhciBXb3JkV3JhcCA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXdvcmR3cmFwJyk7XG5cbnZhciB0bXBCb3VuZHMgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsIGdseXBoczogMCB9O1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIob3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXh0UmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRSZW5kZXJlcihvcHRpb25zKTtcbiAgICBvcHRpb25zID0gb3B0aW9uc3x8e31cblxuICAgIHRoaXMuaXRlcmF0b3IgPSBuZXcgR2x5cGhJdGVyYXRvcihvcHRpb25zLmZvbnQsIG9wdGlvbnMuZm9udFNpemUpO1xuICAgIHRoaXMud29yZHdyYXAgPSBuZXcgV29yZFdyYXAoKTtcblxuICAgIHRoaXMuYWxpZ24gPSAnbGVmdCc7XG4gICAgdGhpcy51bmRlcmxpbmUgPSBmYWxzZTtcblxuICAgIHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudW5kZXJsaW5lUG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGV4dCA9IFwiXCI7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWxpZ24gPT09ICdzdHJpbmcnKVxuICAgICAgICB0aGlzLmFsaWduID0gb3B0aW9ucy5hbGlnbjtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudW5kZXJsaW5lID09PSAnYm9vbGVhbicpXG4gICAgICAgIHRoaXMudW5kZXJsaW5lID0gb3B0aW9ucy51bmRlcmxpbmU7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVuZGVybGluZVRoaWNrbmVzcyA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzID0gb3B0aW9ucy51bmRlcmxpbmVUaGlja25lc3M7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnVuZGVybGluZVBvc2l0aW9uID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy51bmRlcmxpbmVQb3NpdGlvbiA9IG9wdGlvbnMudW5kZXJsaW5lUG9zaXRpb247XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRleHQgPT09ICdzdHJpbmcnKVxuICAgICAgICB0aGlzLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbmVIZWlnaHQgPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxpbmVIZWlnaHQgPSBvcHRpb25zLmxpbmVIZWlnaHQ7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmxldHRlclNwYWNpbmcgPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxldHRlclNwYWNpbmcgPSBvcHRpb25zLmxldHRlclNwYWNpbmc7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyYXBNb2RlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGhpcy53b3Jkd3JhcC5tb2RlID0gb3B0aW9ucy53cmFwTW9kZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JhcFdpZHRoID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy5sYXlvdXQob3B0aW9ucy53cmFwV2lkdGgpO1xufVxuXG4vL0ludGVybmFsbHkgd2Ugd2lsbCB1c2UgaW50ZWdlcnMgdG8gYXZvaWQgc3RyaW5nIGNvbXBhcmlzb24gZm9yIGVhY2ggZ2x5cGhcbnZhciBMRUZUX0FMSUdOID0gMCwgQ0VOVEVSX0FMSUdOID0gMSwgUklHSFRfQUxJR04gPSAyO1xudmFyIEFMSUdOX0FSUkFZID0gW1xuICAgICdsZWZ0JywgXG4gICAgJ2NlbnRlcicsIFxuICAgICdyaWdodCdcbl07XG4gICAgXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhUZXh0UmVuZGVyZXIucHJvdG90eXBlLCB7XG4gICAgLyoqXG4gICAgICogSWYgdGhlIG5ldyBmb250IGRpZmZlcnMgZnJvbSB0aGUgbGFzdCwgdGhlIHRleHQgbGF5b3V0IGlzIGNsZWFyZWRcbiAgICAgKiBhbmQgcGxhY2VkIG9udG8gYSBzaW5nbGUgbGluZS4gVXNlcnMgbXVzdCBtYW51YWxseSByZS1sYXlvdXQgdGhlIHRleHQgXG4gICAgICogZm9yIHdvcmQgd3JhcHBpbmcuXG4gICAgICovXG4gICAgXCJmb250XCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmZvbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB2YXIgb2xkRm9udCA9IHRoaXMuaXRlcmF0b3IuZm9udDtcbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IuZm9udCA9IHZhbDtcbiAgICAgICAgICAgIGlmIChvbGRGb250ICE9PSB0aGlzLml0ZXJhdG9yLmZvbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbmV3IGZvbnQgc2l6ZSBkaWZmZXJzIGZyb20gdGhlIGxhc3QsIHRoZSB0ZXh0IGxheW91dCBpcyBjbGVhcmVkXG4gICAgICogYW5kIHBsYWNlZCBvbnRvIGEgc2luZ2xlIGxpbmUuIFVzZXJzIG11c3QgbWFudWFsbHkgcmUtbGF5b3V0IHRoZSB0ZXh0IFxuICAgICAqIGZvciB3b3JkIHdyYXBwaW5nLlxuICAgICAqL1xuICAgIFwiZm9udFNpemVcIjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuZm9udFNpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB2YXIgb2xkU2l6ZSA9IHRoaXMuaXRlcmF0b3IuZm9udFNpemU7XG5cbiAgICAgICAgICAgIHRoaXMuaXRlcmF0b3IuZm9udFNpemUgPSB2YWw7XG5cbiAgICAgICAgICAgIGlmIChvbGRTaXplICE9PSB0aGlzLml0ZXJhdG9yLmZvbnRTaXplKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXlvdXQoKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIFwibGluZUhlaWdodFwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5saW5lSGVpZ2h0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5saW5lSGVpZ2h0ID0gdmFsO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJsZXR0ZXJTcGFjaW5nXCI6IHtcbiAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5sZXR0ZXJTcGFjaW5nO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5sZXR0ZXJTcGFjaW5nID0gdmFsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbmV3IHRleHQgaXMgZGlmZmVyZW50IGZyb20gdGhlIGxhc3QsIHRoZSBsYXlvdXQgKGkuZS4gd29yZC13cmFwcGluZylcbiAgICAgKiBpcyBjbGVhcmVkIGFuZCB0aGUgcmVzdWx0IGlzIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCAoc2ltaWxhciB0byBIVE1MNSBjYW52YXMgdGV4dFxuICAgICAqIHJlbmRlcmluZykuXG4gICAgICogXG4gICAgICogVGhlIHRleHQgdGhlbiBuZWVkcyB0byBiZSByZS13b3Jkd3JhcHBlZCB3aXRoIGEgY2FsbCB0byBgbGF5b3V0KClgLlxuICAgICAqL1xuICAgIFwidGV4dFwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0fHxcIlwiO1xuXG4gICAgICAgICAgICB2YXIgb2xkID0gdGhpcy5fdGV4dDtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgICAgICAgICAgdGhpcy53b3Jkd3JhcC50ZXh0ID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fdGV4dCAhPT0gb2xkKSBcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIHRleHQgbGF5b3V0IGFuZCB3b3JkLXdyYXBwaW5nLCBwbGFjaW5nIGFsbCBvZiBpdCBvbiBhIHNpbmdsZSBsaW5lLlxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNsZWFyTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy53b3Jkd3JhcC50ZXh0ID0gdGhpcy50ZXh0O1xuICAgIHRoaXMud29yZHdyYXAuZW1wdHkoKTtcblxuICAgIGlmICh0aGlzLml0ZXJhdG9yLmZvbnQpIC8vZm9udCBtaWdodCBub3QgaGF2ZSBiZWVuIHBhc3NlZCBhdCBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLndvcmR3cmFwLmNsZWFyTGF5b3V0KHRoaXMuaXRlcmF0b3IpO1xufTtcblxuLyoqXG4gKiBDYWxscyB0aGUgd29yZCB3cmFwcGVyIHRvIGxheW91dCB0aGUgY3VycmVudCB0ZXh0IHN0cmluZyxcbiAqIGJhc2VkIG9uIHRoZSB3cmFwIHdpZHRoIGFuZCBhbnkgY3VycmVudCB3b3Jkd3JhcHBpbmcgb3B0aW9ucy5cbiAqXG4gKiBUaGlzIGlzIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGlzIGNoYW5nZWQuIFxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbih3cmFwV2lkdGgpIHtcbiAgICB0aGlzLndvcmR3cmFwLnRleHQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy53b3Jkd3JhcC5lbXB0eSgpO1xuICAgIHRoaXMud29yZHdyYXAubGF5b3V0KHRoaXMuaXRlcmF0b3IsIHdyYXBXaWR0aCk7XG59O1xuXG4vKipcbiAqIFwiUmVuZGVyc1wiIHRoaXMgZ2x5cGggYXQgdGhlIGdpdmVuIGxvY2F0aW9uLiBUaGlzIG1heSBpbnZvbHZlIGZpbGxpbmdcbiAqIGEgVkJPIHdpdGggdmVydGV4IGRhdGEsIG9yIGl0IG1heSBiZSBhIGRpcmVjdCBjYWxsIHRvIGRyYXcgYSBiaXRtYXAgZ2x5cGhcbiAqIG9yIHNoYXBlIG91dGxpbmUuXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXJHbHlwaCA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlclVuZGVybGluZSA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGJvdW5kcyBvZiB0aGUgY3VycmVudCB0ZXh0IGxheW91dC4gXG4gKlxuICogVGhlIGhlaWdodCBkb2VzIG5vdCBleHRlbmQgcGFzdCB0aGUgYmFzZWxpbmUgb2YgdGhlXG4gKiBsYXN0IGxpbmU7IHVubGVzcyBgaW5jbHVkZVVuZGVybGluZWAgaXMgdHJ1ZSwgaW4gd2hpY2hcbiAqIGNhc2UgdGhlIHVuZGVybGluZSdzIHBvc2l0aW9uIGFuZCBoZWlnaHQgaXMgaW5jbHVkZWRcbiAqIGluIHRoZSBjYWxjdWxhdGlvbi4gXG4gKlxuICogVGhlIGJvdW5kaW5nIHkgcG9zaXRpb24gaXMgb2Zmc2V0IHNvIHRoYXQgdGhlIGJveCBoYXMgYW4gdXBwZXItbGVmdFxuICogb3JpZ2luLCBmb3IgcGFyaXR5IHdpdGggSFRNTDUgY2FudmFzIHJlbmRlcmluZy5cbiAqIFxuICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlVW5kZXJsaW5lIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgdW5kZXJsaW5lIGluIHRoZSBjYWxjdWxhdGlvbiwgZGVmYXVsdCBmYWxzZVxuICogQHBhcmFtIHtPYmplY3R9IG91dCBhbiBvcHRpb25hbCB7d2lkdGgsIGhlaWdodH0gb2JqZWN0IGZvciByZS11c2VcbiAqIEByZXR1cm4ge09iamVjdH0gYSBzaXplIHdpdGggeyB3aWR0aCwgaGVpZ2h0IH0gcHJvcGVydGllc1xuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uIChpbmNsdWRlVW5kZXJsaW5lLCBvdXQpIHtcbiAgICBpZiAoIW91dClcbiAgICAgICAgb3V0ID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG5cbiAgICB2YXIgd29yZHdyYXBwZXIgPSB0aGlzLndvcmR3cmFwO1xuICAgIHZhciBpdHIgPSB0aGlzLml0ZXJhdG9yO1xuXG4gICAgLy90aWdodGVuIHRoZSBib3VuZGluZyBib3ggYXJvdW5kIHRoZSBmaXJzdCBsaW5lLi5cbiAgICB2YXIgZmlyc3RMaW5lSGVpZ2h0ID0gMDtcbiAgICBpZiAod29yZHdyYXBwZXIubGluZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgZmlyc3RMaW5lID0gd29yZHdyYXBwZXIubGluZXNbMF07XG4gICAgICAgIGl0ci5nZXRCb3VuZHModGhpcy50ZXh0LCBmaXJzdExpbmUuc3RhcnQsIGZpcnN0TGluZS5lbmQsIHVuZGVmaW5lZCwgdG1wQm91bmRzKTtcbiAgICAgICAgZmlyc3RMaW5lSGVpZ2h0ID0gdG1wQm91bmRzLmhlaWdodDtcbiAgICB9XG5cbiAgICBvdXQud2lkdGggPSB3b3Jkd3JhcHBlci5nZXRNYXhMaW5lV2lkdGgoKTsgICBcbiAgICBvdXQuaGVpZ2h0ID0gTWF0aC5tYXgoMCwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoLTEpICogaXRyLmdldExpbmVHYXAoKSArIGZpcnN0TGluZUhlaWdodDtcblxuICAgIG91dC54ID0gMDtcbiAgICBvdXQueSA9IC1vdXQuaGVpZ2h0O1xuXG4gICAgaWYgKGluY2x1ZGVVbmRlcmxpbmUpIHtcbiAgICAgICAgdmFyIHVuZGVybGluZUhlaWdodCA9IHRoaXMuY29tcHV0ZVVuZGVybGluZUhlaWdodCgpO1xuICAgICAgICB2YXIgdW5kZXJsaW5lUG9zaXRpb24gPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVQb3NpdGlvbigpO1xuICAgICAgICB2YXIgdW5kZXJsaW5lT2ZmID0gdW5kZXJsaW5lUG9zaXRpb24rdW5kZXJsaW5lSGVpZ2h0LzI7XG4gICAgICAgIG91dC5oZWlnaHQgKz0gdW5kZXJsaW5lT2ZmO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzY2FsZWQgdW5kZXJsaW5lIGhlaWdodCBhcyBwaXhlbHMsIGJhc2VkIG9uIFxuICogdGhlIGV4cGxpY2l0IGB1bmRlcmxpbmVIZWlnaHRgIChpbiBwaXhlbHMpLiBJZiBgdW5kZXJsaW5lSGVpZ2h0YCBpc1xuICogdW5kZWZpbmVkIG9yIG51bGwsIGl0IHdpbGwgdHJ5IHRvIHVzZSB0aGUgZm9udCdzIG5vbi16ZXJvIHVuZGVybGluZSBoZWlnaHQsIFxuICogb3RoZXJ3aXNlIGRlZmF1bHQgdG8gMS84IG9mIHRoZSBmb250J3MgRU0gc3F1YXJlLlxuICogXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBwaXhlbCBoZWlnaHQgb2YgdGhlIHVuZGVybGluZSBcbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jb21wdXRlVW5kZXJsaW5lSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuICAgIHZhciBzY2FsZSA9IHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlO1xuICAgIGlmICh0aGlzLnVuZGVybGluZVRoaWNrbmVzcz09PTB8fHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuZGVybGluZVRoaWNrbmVzczsgXG4gICAgfSBlbHNlIGlmIChmb250LnVuZGVybGluZV90aGlja25lc3MpIHtcbiAgICAgICAgcmV0dXJuIGZvbnQudW5kZXJsaW5lX3RoaWNrbmVzcyAqIHNjYWxlOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQuYml0bWFwKVxuICAgICAgICByZXR1cm4gZm9udC5zaXplLzg7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gKGZvbnQudW5pdHNfcGVyX0VNLzgpKnNjYWxlO1xufTtcblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgc2NhbGVkIHVuZGVybGluZSBoZWlnaHQgYXMgcGl4ZWxzLCBiYXNlZCBvbiBcbiAqIHRoZSBleHBsaWNpdCBgdW5kZXJsaW5lUG9zaXRpb25gIChpbiBwaXhlbHMpLiBJZiBgdW5kZXJsaW5lUG9zaXRpb25gIGlzXG4gKiB1bmRlZmluZWQgb3IgbnVsbCwgaXQgd2lsbCB0cnkgdG8gdXNlIHRoZSBmb250J3Mgbm9uLXplcm8gdW5kZXJsaW5lIHBvc2l0aW9uLCBcbiAqIG90aGVyd2lzZSBkZWZhdWx0IHRvIDEvNCBvZiB0aGUgZm9udCdzIEVNIHNxdWFyZS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBZIG9mZnNldCBmcm9tIHRoZSB0ZXh0IGJhc2VsaW5lIHRvIHRoZSBjZW50ZXIgb2YgdGhlIHVuZGVybGluZSBcbiAqIGJhciwgaW4gcGl4ZWxzLiBJdCBpcyBnZW5lcmFsbHkgYSBwb3NpdGl2ZSB2YWx1ZS5cbiAqIFxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIHVuZGVybGluZSBcbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jb21wdXRlVW5kZXJsaW5lUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG4gICAgdmFyIHNjYWxlID0gdGhpcy5pdGVyYXRvci5mb250U2NhbGU7XG4gICAgICAgIFxuICAgIGlmICh0aGlzLnVuZGVybGluZVBvc2l0aW9uPT09MHx8dGhpcy51bmRlcmxpbmVQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy51bmRlcmxpbmVQb3NpdGlvbjsgXG4gICAgfSBlbHNlIGlmIChmb250LnVuZGVybGluZV9wb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gLWZvbnQudW5kZXJsaW5lX3Bvc2l0aW9uICogc2NhbGU7IFxuICAgIH0gZWxzZSBpZiAoZm9udC5iaXRtYXApIHtcbiAgICAgICAgcmV0dXJuIGZvbnQuc2l6ZS80O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoZm9udC51bml0c19wZXJfRU0vNCkqc2NhbGU7XG4gICAgfVxufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkZXNjZW50IG9mIHRoZSBjdXJyZW50IGZvbnQgKGFzc3VtZXMgaXRzIHNpemUgXG4gKiBpcyBhbHJlYWR5IHNldCkuIFRoaXMgaXMgYW4gYWJzb2x1dGUgKHBvc2l0aXZlKSB2YWx1ZS5cbiAqIFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZ2V0RGVzY2VuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNYXRoLmFicyh0aGlzLml0ZXJhdG9yLmZvbnRTY2FsZSAqIHRoaXMuaXRlcmF0b3IuZm9udC5kZXNjZW5kZXIpO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkZXNjZW50IG9mIHRoZSBjdXJyZW50IGZvbnQgKGFzc3VtZXMgaXRzIHNpemUgXG4gKiBpcyBhbHJlYWR5IHNldCkuIFRoaXMgaXMgYW4gYWJzb2x1dGUgKHBvc2l0aXZlKSB2YWx1ZS5cbiAqIFxuICogQHJldHVybiB7W3R5cGVdfSBbZGVzY3JpcHRpb25dXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZ2V0QXNjZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlICogdGhpcy5pdGVyYXRvci5mb250LmFzY2VuZGVyKTtcbn07XG5cbi8vU2lnbmFscyBmb3Igc3ViY2xhc3NlcyB0byBvcHRpb25hbGx5IGltcGxtZWVudFxuLy9UaGlzIG1heSBiZSB1c2VmdWwgdG8gc3RvcC9zdGFydCBwYXRocyB3aXRoIGRpZmZlcmVudCBmaWxsc1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkJlZ2luID0gZnVuY3Rpb24oKSB7IH1cblRleHRSZW5kZXJlci5wcm90b3R5cGUub25FbmQgPSBmdW5jdGlvbigpIHsgfVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkJlZ2luTGluZSA9IGZ1bmN0aW9uKGxpbmVJbmRleCkgeyB9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uRW5kTGluZSA9IGZ1bmN0aW9uKGxpbmVJbmRleCkgeyB9XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY3VycmVudCB0ZXh0IGxheW91dCwgd2hlcmUgbG93ZXItbGVmdCBpcyBcbiAqIHRoZSBvcmlnaW4uIE11bHRpcGxlIGxpbmVzIHdpbGwgYmUgcG9zaXRpb25lZCBhYm92ZSB0aGVcbiAqIG9yaWdpbi5cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIHggPSB4fHwwO1xuICAgIHkgPSB5fHwwO1xuXG4gICAgdmFyIHRleHQgPSB0aGlzLnRleHQ7XG4gICAgdmFyIHdvcmR3cmFwcGVyID0gdGhpcy53b3Jkd3JhcDtcblxuICAgIC8vaWYgd2UgaGF2ZSBub3RoaW5nIHRvIGRyYXdcbiAgICBpZiAoIXRleHQgfHwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoID09PSAwKVxuICAgICAgICByZXR1cm47XG5cbiAgICAvL2RlZmF1bHQgc3RhcnQvZW5kIHBhcmFtc1xuICAgIHN0YXJ0ID0gc3RhcnR8fDA7XG4gICAgZW5kID0gdHlwZW9mIGVuZCA9PT0gXCJudW1iZXJcIiA/IGVuZCA6IHRleHQubGVuZ3RoO1xuXG4gICAgdmFyIGl0ciA9IHRoaXMuaXRlcmF0b3I7XG4gICAgdmFyIHNjYWxlID0gaXRyLmZvbnRTY2FsZTtcbiAgICB2YXIgZm9udCA9IGl0ci5mb250O1xuICAgIHZhciB1bmRlcmxpbmUgPSB0aGlzLnVuZGVybGluZTtcblxuICAgIC8vdXNlZCBmb3IgYWxpZ25tZW50Li4uXG4gICAgdmFyIG1heExpbmVXaWR0aCA9IHdvcmR3cmFwcGVyLmdldE1heExpbmVXaWR0aCgpO1xuICAgIFxuICAgIHkgLT0gTWF0aC5tYXgoMCwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoLTEpICogaXRyLmdldExpbmVHYXAoKTtcblxuXG4gICAgLy91c2UgbnVtYmVycyB0byBhdm9pZCBzdHIgY29tcGFyZSBmb3IgZWFjaCBnbHlwaFxuICAgIHZhciBhbGlnblR5cGUgPSBBTElHTl9BUlJBWS5pbmRleE9mKHRoaXMuYWxpZ258fFwiXCIpO1xuICAgIGlmIChhbGlnblR5cGU9PT0tMSlcbiAgICAgICAgYWxpZ25UeXBlID0gTEVGVF9BTElHTjtcblxuICAgIHZhciB1bmRlcmxpbmVYID0gMDtcbiAgICB2YXIgdW5kZXJsaW5lU3RhcnRYID0gMDtcbiAgICB2YXIgdW5kZXJsaW5lWSA9IDA7XG4gICAgdmFyIHVuZGVybGluZVdpZHRoID0gMDtcblxuICAgIHZhciB1bmRlcmxpbmVTdGFydGVkID0gZmFsc2U7XG5cbiAgICAvL1RyeSB0byB1c2UgdXNlci1zcGVjaWZpZWQgdW5kZXJsaW5lIHNldHRpbmdzLCBvdGhlcndpc2UgdXNlIHRoZSBmb250IGlmIHBvc3NpYmxlLFxuICAgIC8vb3RoZXJ3aXNlIGp1c3QgdXNlIGEgcm91Z2ggZGVmYXVsdCBiYXNlZCBvbiBFTSBzcXVhcmUuICAgIFxuICAgIHZhciB1bmRlcmxpbmVQb3MgPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVQb3NpdGlvbigpO1xuICAgIHZhciB1bmRlcmxpbmVIZWlnaHQgPSB0aGlzLmNvbXB1dGVVbmRlcmxpbmVIZWlnaHQoKTtcblxuICAgIHRoaXMub25CZWdpbigpO1xuICAgIFxuICAgIC8vc2V0IHRoZSBvcmlnaW4gYW5kIHBlbiBwb3NpdGlvblxuICAgIGl0ci5iZWdpbih4LCB5KTtcbiAgICBmb3IgKHZhciBrPTA7IGs8d29yZHdyYXBwZXIubGluZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSB3b3Jkd3JhcHBlci5saW5lc1trXTtcbiAgICAgICAgdW5kZXJsaW5lU3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBsYXN0QWR2YW5jZSA9IDA7XG5cbiAgICAgICAgdmFyIGxpbmVYID0gaXRyLnBlbi54O1xuICAgICAgICB2YXIgbGluZVkgPSBpdHIucGVuLnk7XG5cbiAgICAgICAgdGhpcy5vbkJlZ2luTGluZShrKTtcblxuICAgICAgICAvL1RPRE86IHVzZSBtdWx0aXBsZSBOb2RlcyBpbnNpZGUgYSBzaW5nbGUgbGluZVxuICAgICAgICAvL2Egbm9kZSB3aWxsIGhhdmUgYXR0cmlidXRlcyBsaWtlIGZvbnQsIHNpemUsIGNvbG9yLCBcbiAgICAgICAgLy9sZXR0ZXItc3BhY2luZywgdW5kZXJsaW5lLCBldGMuXG4gICAgICAgIC8vVGhpcyB3aWxsIGFmZmVjdCB0aGUgbGluZSBoZWlnaHQsIGFzIGl0IHdpbGwgaGF2ZSB0byBiZSB0aGUgbWF4IG9mIGFsbCBub2Rlcy5cblxuICAgICAgICBmb3IgKHZhciBpPWxpbmUuc3RhcnQ7IGk8bGluZS5lbmQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNociA9IHRleHQuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAvL1N0ZXAgdGhlIGl0ZXJhdG9yLCBtb3ZpbmcgZm9yd2FyZCBiYXNlZCBvbiBrZXJuaW5nIGZyb20gbGFzdCBjaGFyXG4gICAgICAgICAgICB2YXIgZ2x5cGggPSBpdHIuc3RlcCh0ZXh0LCBpKTtcblxuICAgICAgICAgICAgaWYgKCFnbHlwaClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy93aXRoaW4gZGVzaXJlZCByYW5nZVxuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnQgJiYgaSA8IGVuZCkge1xuICAgICAgICAgICAgICAgIHZhciB0eCA9IGl0ci5wZW4ueDtcbiAgICAgICAgICAgICAgICB2YXIgdHkgPSBpdHIucGVuLnk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxpZ25UeXBlID09PSBDRU5URVJfQUxJR04pIHtcbiAgICAgICAgICAgICAgICAgICAgdHggKz0gKG1heExpbmVXaWR0aC1saW5lLndpZHRoKS8yO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxpZ25UeXBlID09PSBSSUdIVF9BTElHTikge1xuICAgICAgICAgICAgICAgICAgICB0eCArPSAobWF4TGluZVdpZHRoLWxpbmUud2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdW5kZXJsaW5lU3RhcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVYID0gdHg7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVN0YXJ0WCA9IHR4O1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVZID0gdHkgKyB1bmRlcmxpbmVQb3M7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lU3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lV2lkdGggPSB0eCAtIHVuZGVybGluZVN0YXJ0WDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckdseXBoKGksIGdseXBoLCBzY2FsZSwgdHgsIHR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9BZHZhbmNlIHRoZSBpdGVyYXRvciB0byB0aGUgbmV4dCBnbHlwaCBpbiB0aGUgc3RyaW5nXG4gICAgICAgICAgICB2YXIgbmV3QWR2YW5jZSA9IGl0ci5hZHZhbmNlKGdseXBoKTtcblxuICAgICAgICAgICAgaWYgKGkgPj0gc3RhcnQgJiYgaSA8IGVuZClcbiAgICAgICAgICAgICAgICBsYXN0QWR2YW5jZSA9IG5ld0FkdmFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uRW5kTGluZShrKTtcblxuICAgICAgICBpZiAodW5kZXJsaW5lKSB7XG4gICAgICAgICAgICB1bmRlcmxpbmVXaWR0aCArPSBsYXN0QWR2YW5jZTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVW5kZXJsaW5lKHVuZGVybGluZVgsIHVuZGVybGluZVktdW5kZXJsaW5lSGVpZ2h0LzIsIHVuZGVybGluZVdpZHRoLCB1bmRlcmxpbmVIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL1N0ZXBzIGRvd24gYSBsaW5lLi4uXG4gICAgICAgIGlmIChrIDwgd29yZHdyYXBwZXIubGluZXMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIGl0ci5hZHZhbmNlTGluZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9maW5pc2ggdGhlIGl0ZXJhdG9yLi4uXG4gICAgaXRyLmVuZCgpO1xuICAgIHRoaXMub25FbmQoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFJlbmRlcmVyOyIsInZhciB1dGlsID0gcmVxdWlyZSgnZm9udHBhdGgtdXRpbCcpO1xuXG52YXIgREVGQVVMVF9UQUJfV0lEVEggPSA0O1xuXG5mdW5jdGlvbiBHbHlwaEl0ZXJhdG9yKGZvbnQsIGZvbnRTaXplKSB7XG4gICAgdGhpcy5fZm9udFNpemUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZm9udFNjYWxlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2ZvbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5mb250U2NhbGUgPSAxLjA7XG4gICAgdGhpcy5rZXJuaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxldHRlclNwYWNpbmcgPSAwO1xuICAgIHRoaXMubGluZUhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICBcbiAgICB0aGlzLmZvbnRTaXplID0gdHlwZW9mIGZvbnRTaXplID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgPyBmb250U2l6ZVxuICAgICAgICAgICAgOiAoZm9udCA/IGZvbnQuc2l6ZSA6IHVuZGVmaW5lZCk7XG4gICAgdGhpcy5mb250ID0gZm9udDtcblxuICAgIC8vTnVtYmVyIG9mIHNwYWNlcyBmb3IgYSB0YWIgY2hhcmFjdGVyXG4gICAgdGhpcy50YWJXaWR0aCA9IERFRkFVTFRfVEFCX1dJRFRIO1xuICAgIHRoaXMuX3RhYkdseXBoID0gbnVsbDtcblxuICAgIHRoaXMub3JpZ2luID0geyB4OiAwLCB5OiAwIH07XG4gICAgdGhpcy5wZW4gPSB7IHg6IDAsIHk6IDAgfTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdseXBoSXRlcmF0b3IucHJvdG90eXBlLCBcImZvbnRcIiwge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb250O1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKGZvbnQpIHtcbiAgICAgICAgdGhpcy5fZm9udCA9IGZvbnQ7XG5cbiAgICAgICAgLy9EZXRlcm1pbmUgdGhlIG5ldyBzY2FsaW5nIGZhY3Rvci4uLlxuICAgICAgICBpZiAoZm9udCkge1xuICAgICAgICAgICAgdGhpcy5mb250U2NhbGUgPSB1dGlsLmdldFB4U2NhbGUoZm9udCwgdGhpcy5mb250U2l6ZSk7XG5cbiAgICAgICAgICAgIC8vVXBkYXRlcyB0aGUgdGFiIGdseXBoXG4gICAgICAgICAgICB0aGlzLnRhYldpZHRoID0gdGhpcy5fdGFiV2lkdGg7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbi8vVGhlcmUgbWlnaHQgYmUgYSBiZXR0ZXIgd2F5IG9mIGhhbmRsaW5nIHRhYiB3aWR0aCB1c2luZyBGcmVlVHlwZSA/IFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdseXBoSXRlcmF0b3IucHJvdG90eXBlLCBcInRhYldpZHRoXCIsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWJXaWR0aDtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy5fdGFiV2lkdGggPSB2YWw9PT0wIHx8IHZhbCA/IHZhbCA6IERFRkFVTFRfVEFCX1dJRFRIO1xuICAgICAgICB0aGlzLl90YWJHbHlwaCA9IHt9O1xuXG4gICAgICAgIHZhciBzcGFjZUdseXBoID0gdGhpcy5mb250ID8gdGhpcy5mb250LmdseXBoc1tcIiBcIl0gOiBudWxsO1xuICAgICAgICBpZiAoc3BhY2VHbHlwaCkge1xuICAgICAgICAgICAgdGhpcy5fdGFiR2x5cGggPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gc3BhY2VHbHlwaCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhYkdseXBoW2tdID0gc3BhY2VHbHlwaFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl90YWJHbHlwaC54b2ZmKVxuICAgICAgICAgICAgICAgIHRoaXMuX3RhYkdseXBoLnhvZmYgKj0gdGhpcy5fdGFiV2lkdGg7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShHbHlwaEl0ZXJhdG9yLnByb3RvdHlwZSwgXCJmb250U2l6ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb250U2l6ZSAhPT0gJ251bWJlcicpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb250LmJpdG1hcCBcbiAgICAgICAgICAgICAgICA/IHRoaXMuZm9udC5zaXplIFxuICAgICAgICAgICAgICAgIDogdXRpbC5wb2ludFRvUGl4ZWwodGhpcy5mb250LnNpemUpXG4gICAgICAgIHJldHVybiB0aGlzLl9mb250U2l6ZTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgdGhpcy5fZm9udFNpemUgPSB2YWw7XG5cbiAgICAgICAgLy9JZiB0aGUgZm9udCBpcyBhbHJlYWR5IHNldCwgZGV0ZXJtaW5lIHRoZSBuZXcgc2NhbGluZyBmYWN0b3JcbiAgICAgICAgaWYgKHRoaXMuX2ZvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udFNjYWxlID0gdXRpbC5nZXRQeFNjYWxlKHRoaXMuX2ZvbnQsIHRoaXMuX2ZvbnRTaXplKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZ2V0S2VybmluZyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG5cbiAgICBpZiAoIWZvbnQgfHwgIWZvbnQua2VybmluZylcbiAgICAgICAgcmV0dXJuIDA7XG5cbiAgICB2YXIgdGFibGUgPSB0aGlzLmtlcm5pbmdUYWJsZTtcblxuICAgIGZvciAodmFyIGk9MDsgaTxmb250Lmtlcm5pbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGsgPSBmb250Lmtlcm5pbmdbaV07XG4gICAgICAgIGlmIChrWzBdID09PSBsZWZ0ICYmIGtbMV0gPT09IHJpZ2h0KSBcbiAgICAgICAgICAgIHJldHVybiBrWzJdO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luLnggPSB4fHwwO1xuICAgIHRoaXMub3JpZ2luLnkgPSB5fHwwO1xuXG4gICAgdGhpcy5wZW4ueCA9IHRoaXMub3JpZ2luLng7XG4gICAgdGhpcy5wZW4ueSA9IHRoaXMub3JpZ2luLnk7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbigpIHtcbiAgICAvLy4uIG1haW5seSBmb3IgY29uc2lzdGVuY3kgd2l0aCBiZWdpbigpXG4gICAgLy9NaWdodCBiZSB1c2VmdWwgbGF0ZXIgb25cbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmdldExpbmVHYXAgPSBmdW5jdGlvbigpIHtcbiAgICAvL0xpbmUgaGVpZ2h0IGhhbmRsaW5nIGlzIGEgbWVzcyBpbiBicm93c2Vycy5cbiAgICAvL01heWJlIHRoZSBiZXN0IHNvbHV0aW9uIGlzIHRvIGVuY291cmFnZSB1c2VycyB0byBcbiAgICAvL3NwZWNpZnkgcGl4ZWwgbGluZSBoZWlnaHRzIGlmIHRoZXkgd2FudCB0byBtYXRjaCBicm93c2VyIHN0YW5kYXJkcyxcbiAgICAvL290aGVyd2lzZSBpdCdzIHVucmVhc29uYWJsZSB0byBleHBlY3QgdGhlIGxpbmUgZ2FwcyB0byBsaW5lIHVwIGV4YWN0bHlcbiAgICAvL2Fjcm9zcyBhbGwgYnJvd3NlcnMuIEV4YW1wbGUgb2YgdGhlIGRpc2FzdGVyOlxuICAgIC8vaHR0cDovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN0eWxlLzIwMDhKYW4vMDQxMy5odG1sXG5cbiAgICAvL0ZvciByZWZlcmVuY2UsIHNvbWUgYmFzZWxpbmUtdG8tYmFzZWxpbmUgY2FsY3VsYXRpb25zOlxuICAgIC8vaHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3R5cG9ncmFwaHkvb3RzcGVjL3JlY29tLmh0bVxuICAgIC8vZnJlZXR5cGUub3JnL2ZyZWV0eXBlMi9kb2NzL3JlZmVyZW5jZS9mdDItYmFzZV9pbnRlcmZhY2UuaHRtbFxuICAgIC8vaHR0cDovL3d3dy5mcmVldHlwZS5vcmcvZnJlZXR5cGUyL2RvY3MvZ2x5cGhzL2dseXBocy0zLmh0bWxcblxuICAgIC8vVW5mb3J0dW5hdGVseSBub25lIG9mIHRoZXNlIGFyZSBwcm9kdWNpbmcgbGluZS1oZWlnaHRzIHRoYXQgYXZvaWQgb3ZlcmxhcHBpbmdcbiAgICAvL29yIHJlc2VtYmxlIGJyb3dzZXIgcmVuZGVyaW5nIGluIGFueSB3YXkuIFxuXG4gICAgLy8gSWYgQ1NTIHVzZXMgMWVtIG9yIDEsIHRoZSBicm93c2VyIG9mZnNldHMgdGhlIGxpbmUgYnkgdGhlIFxuICAgIC8vIGZvbnQncyBwaXhlbCBzaXplLiBJZiBhbiBleGFjdCBwaXhlbCBsaW5lLWhlaWdodCBpcyBzcGVjaWZpZWQsXG4gICAgLy8gdGhlIGJyb3dzZXIgd2lsbCB1c2UgdGhhdCArIGEgY29tcHV0ZWQgXCJsaW5lZ2FwLlwiIFxuICAgIC8vIElmICdhdXRvJyBpcyBzcGVjaWZpZWQgZm9yIGxpbmUtaGVpZ2h0LCB0aGUgY2FsY3VsYXRpb25zIHNlZW1cbiAgICAvLyBtdWNoIG1vcmUgY29tcGxleCBhbmQgYnJvd3Nlci9wbGF0Zm9ybSBkZXBlbmRlbnQgKG5vdCBpbmNsdWRlZCBoZXJlKS5cbiAgICBcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udCxcbiAgICAgICAgc2NhbGUgPSB0aGlzLmZvbnRTY2FsZTtcbiAgICB2YXIgZ2FwID0gKGZvbnQuaGVpZ2h0IC0gZm9udC5hc2NlbmRlciArIE1hdGguYWJzKGZvbnQuZGVzY2VuZGVyKSkgKiBzY2FsZTsgICAgXG4gICAgdmFyIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgXG4gICAgbGluZUhlaWdodCA9IChsaW5lSGVpZ2h0PT09MHx8bGluZUhlaWdodCkgXG4gICAgICAgICAgICA/IChsaW5lSGVpZ2h0ICsgZ2FwKVxuICAgICAgICAgICAgOiB0aGlzLmZvbnRTaXplO1xuICAgIHJldHVybiBsaW5lSGVpZ2h0O1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIHRoaXMub3JpZ2luLnggKz0geHx8MDtcbiAgICB0aGlzLm9yaWdpbi55ICs9IHl8fDA7XG5cbiAgICB0aGlzLnBlbi54ICs9IHh8fDA7XG4gICAgdGhpcy5wZW4ueSArPSB5fHwwO1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKHRleHQsIGluZGV4KSB7XG4gICAgdmFyIHNjYWxlID0gdGhpcy5mb250U2NhbGUsXG4gICAgICAgIGZvbnQgPSB0aGlzLl9mb250O1xuXG4gICAgdmFyIGNociA9IHRleHQuY2hhckF0KGluZGV4KTsgXG5cbiAgICBpZiAoY2hyID09PSAnXFx0JyAmJiB0aGlzLl90YWJHbHlwaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGFiR2x5cGg7XG4gICAgfVxuXG4gICAgLy9Ta2lwIG1pc3NpbmcgY2hhcmFjdGVycy4uLlxuICAgIGlmICghKGNociBpbiBmb250LmdseXBocykpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICB2YXIgZ2x5cGggPSBmb250LmdseXBoc1tjaHJdO1xuXG4gICAgLy9JZiB3ZSBoYXZlIGEgY2hhciB0byB0aGUgbGVmdCwgZGV0ZXJtaW5lIGl0cyBrZXJuaW5nXG4gICAgaWYgKGluZGV4ID4gMCAmJiB0aGlzLmtlcm5pbmcpIHtcbiAgICAgICAgdmFyIGtlcm4gPSB0aGlzLmdldEtlcm5pbmcodGV4dC5jaGFyQXQoaW5kZXgtMSksIGNocik7XG4gICAgICAgIHRoaXMucGVuLnggKz0gKGtlcm4qc2NhbGUpO1xuICAgIH1cblxuICAgIHJldHVybiBnbHlwaDtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmFkdmFuY2VMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wZW4ueSArPSB0aGlzLmdldExpbmVHYXAoKTtcbiAgICB0aGlzLnBlbi54ID0gdGhpcy5vcmlnaW4ueDtcbn07XG5cbi8qKlxuICogQ2FsbGVkIGFmdGVyIHN0ZXAuIFxuICovXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5hZHZhbmNlID0gZnVuY3Rpb24oZ2x5cGgpIHtcbiAgICB2YXIgYWR2YW5jZSA9IChnbHlwaC54b2ZmICogdGhpcy5mb250U2NhbGUpO1xuICAgIC8vIEFkdmFuY2UgdG8gbmV4dCBwZW4gcG9zaXRpb25cbiAgICB0aGlzLnBlbi54ICs9IGFkdmFuY2UgKyB0aGlzLmxldHRlclNwYWNpbmc7XG4gICAgcmV0dXJuIGFkdmFuY2U7XG59O1xuXG4vKipcbiAqIFRoaXMgaXMgYSB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIGJvdW5kcyBvZiB0aGUgZ2l2ZW5cbiAqIHRleHQgKGZyb20gc3RhcnQgYW5kIGVuZCBwb3NpdGlvbnMpIGFzIGlmIHRoZXkgd2VyZSBsYWlkIG91dCBob3Jpem9udGFsbHksXG4gKiBsZWZ0IHRvIHJpZ2h0LlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgdGhpcyB3aWxsIG5vdCBhbHRlciB0aGUgY3VycmVudCBwZW4gYW5kIG9yaWdpbiBwb3NpdGlvbnMuXG4gKiBUaGlzIHdheSBpdCBjYW4gYmUgdXRpbGl6ZWQgaW5zaWRlIGEgZ2x5cGggaXRlcmF0aW9uIChpLmUuIGZvciByZW5kZXJpbmcpLlxuICpcbiAqIElmIGBhdmFpbGFibGVXaWR0aGAgaXMgc3BlY2lmaWVkLCB0aGlzIHdpbGwgYnJlYWsgYmVmb3JlIHJlYWNoaW5nIHRoZSBzcGVjaWZpZWRcbiAqIHBpeGVsIHdpZHRoLCB0byBlbnN1cmUgdGhhdCBhbGwgZ2x5cGhzIHdpbGwgZml0IGluc2lkZSB0aGUgYm91bmRzLiBcbiAqXG4gKiBUaGUgcmV0dXJuIG9iamVjdCBhbHNvIGluY2x1ZGVzIGEgYGdseXBoc2AgcHJvcGVydHksIHdoaWNoIGlzIHRoZSBudW1iZXIgb2YgZ2x5cGhzXG4gKiB0aGF0IGFyZSB2aXNpYmxlIHdpdGhpbiB0aGUgcmV0dXJuZWQgYm91bmRzLiBcbiAqXG4gKiBJZiBgb3V0YCBpcyBzcGVjaWZpZWQgKGFuIG9iamVjdCB3aXRoIHgsIHksIHdpZHRoLCBoZWlnaHQsIGFuZCBnbHlwaCBwcm9wZXJ0aWVzKSxcbiAqIGl0IHdpbGwgYmUgcmUtdXNlZC4gT3RoZXJ3aXNlIGEgbmV3IG9iamVjdCBpcyBjcmVhdGVkLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dCB0aGUgdGV4dCB0byBjaGVja1xuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IHRoZSBzdGFydCBwb3NpdGlvbiwgZGVmYXVsdHMgdG8gMFxuICogQHBhcmFtIHtOdW1iZXJ9IGVuZCB0aGUgZW5kIHBvc2l0aW9uLCBleGNsdXNpdmUsIGRlZmF1bHRzIHRvIHRleHQgbGVuZ3RoXG4gKiBAcGFyYW0ge051bWJlcn0gYXZhaWxhYmxlV2lkdGggdGhlIHdpZHRoIGJlZm9yZSBzdG9wcGluZyB0aGUgYm91bmQgY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBvdXQgYW4gb2JqZWN0IHRvIHJlLXVzZSBmb3IgdGhlIHJldHVybiB2YWx1ZVxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgYm91bmRzIGFuZCBnbHlwaCBjb3VudCB7eCx5LHdpZHRoLGhlaWdodCxnbHlwaHN9XG4gKi9cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmdldEJvdW5kcyA9IGZ1bmN0aW9uKHRleHQsIHN0YXJ0LCBlbmQsIGF2YWlsYWJsZVdpZHRoLCBvdXQpIHtcbiAgICBpZiAoIW91dClcbiAgICAgICAgb3V0ID0geyB4OjAsIHk6MCwgd2lkdGg6IDAsIGhlaWdodDogMCwgZ2x5cGhzOiAwIH07XG5cbiAgICB2YXIgY2hlY2tXaWR0aCA9IGF2YWlsYWJsZVdpZHRoPT09MHx8YXZhaWxhYmxlV2lkdGg7XG5cbiAgICBzdGFydCA9IHN0YXJ0fHwwO1xuICAgIGVuZCA9IGVuZD09PTB8fGVuZCA/IGVuZCA6IHRleHQubGVuZ3RoO1xuXG4gICAgdmFyIG1heEhlaWdodCA9IDA7XG5cbiAgICBvdXQueCA9IDA7XG4gICAgb3V0LnkgPSAwO1xuICAgIG91dC5nbHlwaHMgPSAwO1xuXG4gICAgdmFyIG9sZFBlblggPSB0aGlzLnBlbi54LFxuICAgICAgICBvbGRQZW5ZID0gdGhpcy5wZW4ueSxcbiAgICAgICAgb2xkT3JpZ2luWCA9IHRoaXMub3JpZ2luLngsXG4gICAgICAgIG9sZE9yaWdpblkgPSB0aGlzLm9yaWdpbi55O1xuXG5cbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcbiAgICB0aGlzLmJlZ2luKCk7XG4gICAgZm9yICh2YXIgaT1zdGFydDsgaTxlbmQ7IGkrKykge1xuICAgICAgICB2YXIgY2hyID0gdGV4dC5jaGFyQXQoaSk7XG5cbiAgICAgICAgLy9zdGVwIHRoZSBpdGVyYXRvclxuICAgICAgICB2YXIgZ2x5cGggPSB0aGlzLnN0ZXAodGV4dCwgaSk7XG5cbiAgICAgICAgLy9pZiB0aGUgZ2x5cGggaXMgdmFsaWQsIHdlIGNhbiBhZHZhbmNlIHBhc3QgaXQgYW5kIGNhbGN1bGF0ZSBuZXcgaGVpZ2h0XG4gICAgICAgIGlmIChnbHlwaCkge1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IChnbHlwaC5oZWlnaHQpKnRoaXMuZm9udFNjYWxlO1xuXG4gICAgICAgICAgICBvdXQueSA9IE1hdGgubWF4KG91dC55LCB0aGlzLmZvbnRTY2FsZSooZ2x5cGguaGVpZ2h0LWdseXBoLmhieSkpO1xuXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBNYXRoLm1heChtYXhIZWlnaHQsIGhlaWdodCk7XG4gICAgICAgICAgICB2YXIgbGFzdEFkdmFuY2UgPSB0aGlzLmFkdmFuY2UoZ2x5cGgpO1xuXG4gICAgICAgICAgICAvL2lmIHdlJ3JlIHBhc3QgdGhlIGF2YWlsYWJsZSB3aWR0aFxuICAgICAgICAgICAgdmFyIG5ld1dpZHRoID0gdGhpcy5wZW4ueCAtIHRoaXMub3JpZ2luLng7XG4gICAgICAgICAgICBpZiAoY2hlY2tXaWR0aCAmJiAobmV3V2lkdGggLSBhdmFpbGFibGVXaWR0aCA+IDAuMDAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVuLnggLT0gbGFzdEFkdmFuY2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG91dC5nbHlwaHMrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmVuZCgpO1xuXG4gICAgb3V0LndpZHRoID0gdGhpcy5wZW4ueCAtIHRoaXMub3JpZ2luLng7XG4gICAgb3V0LmhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIHRoaXMucGVuLnggPSBvbGRQZW5YO1xuICAgIHRoaXMucGVuLnkgPSBvbGRQZW5ZO1xuICAgIHRoaXMub3JpZ2luLnggPSBvbGRPcmlnaW5YO1xuICAgIHRoaXMub3JpZ2luLnkgPSBvbGRPcmlnaW5ZO1xuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2x5cGhJdGVyYXRvcjsiLCIvLyBtb2R1bGUuZXhwb3J0cy5wb2ludHNUb1BpeGVscyA9IGZ1bmN0aW9uKHBvaW50U2l6ZSwgcmVzb2x1dGlvbikge1xuLy8gXHRyZXNvbHV0aW9uID0gdHlwZW9mIHJlc29sdXRpb24gPT09IFwibnVtYmVyXCIgPyByZXNvbHV0aW9uIDogNzI7XG4vLyBcdHJldHVybiBwb2ludFNpemUgKiByZXNvbHV0aW9uIC8gNzI7XG4vLyB9O1xuXG4vLyBtb2R1bGUuZXhwb3J0cy5jb29yZFRvUGl4ZWwgPSBmdW5jdGlvbihjb29yZCwgcGl4ZWxTaXplLCBlbVNpemUpIHtcbi8vIFx0ZW1TaXplID0gdHlwZW9mIGVtU2l6ZSA9PT0gXCJudW1iZXJcIiA/IGVtU2l6ZSA6IDIwNDg7XG4vLyBcdHJldHVybiBjb29yZCAqIHBpeGVsU2l6ZSAvIGVtU2l6ZTtcbi8vIH07XG5cbi8qKlxuICogQ29udmVydHMgYSBwdCBzaXplIHRvIHB4IHNpemUsIG5hbWVseSB1c2VmdWwgZm9yIG1hdGNoaW5nXG4gKiBzaXplIHdpdGggQ1NTIHN0eWxlcy4gSWYgbm8gRFBJIGlzIHNwZWNpZmllZCwgOTYgaXMgYXNzdW1lZFxuICogKGFzIGl0IGxlYWRzIHRvIGNvcnJlY3QgcmVuZGVyaW5nIGluIGFsbCBicm93c2VycykuXG4gKiBcbiAqIEBwYXJhbSAge051bWJlcn0gZm9udFNpemUgdGhlIGRlc2lyZWQgZm9udCBzaXplIGluIHBvaW50c1xuICogQHBhcmFtICB7TnVtYmVyfSBkcGkgICAgICB0aGUgZXhwZWN0ZWQgRFBJLCBnZW5lcmFsbHkgOTYgZm9yIGJyb3dzZXJzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgIHRoZSByb3VuZGVkIHBpeGVsIGZvbnQgc2l6ZVxuICovXG5tb2R1bGUuZXhwb3J0cy5wb2ludFRvUGl4ZWwgPSBmdW5jdGlvbihmb250U2l6ZSwgZHBpKSB7XG4gICAgZHBpID0gZHBpfHxkcGk9PT0wID8gZHBpIDogOTY7XG4gICAgZm9udFNpemUgPSBmb250U2l6ZSAqIGRwaSAvIDcyO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZvbnRTaXplKTtcbn07XG5cbi8qKlxuICogRm9yIHRoZSBnaXZlbiBmb250IGFuZCAocGl4ZWwpIGZvbnQgc2l6ZSwgdGhpcyBtZXRob2QgcmV0dXJucyB0aGVcbiAqIHNjYWxlIHRoYXQgd2lsbCBuZWVkIHRvIGJlIGFwcGxpZWQgdG8gRU0gdW5pdHMgKGkuZS4gZm9udCBwYXRocykgXG4gKiB0byBoYXZlIHRoZSBmb250IHJlbmRlciBhdCB0aGUgZXhwZWN0ZWQgc2l6ZSAoaS5lLiB0byBtYXRjaCB0aGUgYnJvd3NlcikuXG4gKlxuICogSWYgbm8gZm9udCBzaXplIGlzIHNwZWNpZmllZCwgd2Ugd2lsbCB1c2UgdGhlIGRlZmF1bHQgZm9udCBzaXplICh3aGljaCBpcyBpbiBwb2ludHMpXG4gKiBhbmQgY29udmVydCBpdCB0byBwaXhlbHMuIFxuICogXG4gKiBAcGFyYW0gIHtGb250fSBmb250ICAgICBhIGZvbnQgb2JqZWN0IGZyb20gdGhlIGZvbnRwYXRoIHRvb2xcbiAqIEBwYXJhbSAge051bWJlcn0gZm9udFNpemUgdGhlIGRlc2lyZWQgZm9udCBzaXplLCBkZWZhdWx0cyB0byB0aGUgZm9udCdzIGRlZmF1bHQgc2l6ZVxuICogQHJldHVybiB7TnVtYmVyfSByZXR1cm5zIHRoZSBzY2FsZSBmb3IgdGhpcyBmb250IHNpemUgICAgICAgICBcbiAqL1xubW9kdWxlLmV4cG9ydHMuZ2V0UHhTY2FsZSA9IGZ1bmN0aW9uKGZvbnQsIGZvbnRTaXplKSB7XG4gICAgaWYgKGZvbnQuYml0bWFwKVxuICAgICAgICByZXR1cm4gMS4wO1xuXG4gICAgLy9JZiBubyBmb250U2l6ZSBpcyBzcGVjaWZpZWQsIGl0IHdpbGwganVzdCBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGZvbnQncyBvd24gc2l6ZSB3aXRoIDk2IERQSS5cbiAgICBmb250U2l6ZSA9IHR5cGVvZiBmb250U2l6ZSA9PT0gXCJudW1iZXJcIiA/IGZvbnRTaXplIDogdGhpcy5wb2ludFRvUGl4ZWwoZm9udC5zaXplKTtcblxuICAgIC8vVGFrZXMgaW4gYSBmb250IHNpemUgaW4gUElYRUxTIGFuZCBnaXZlcyB1cyB0aGUgZXhwZWN0ZWQgc2NhbGluZyBmYWN0b3JcbiAgICB2YXIgc3ogPSBmb250LnVuaXRzX3Blcl9FTS82NDtcbiAgICBzeiA9IChzei9mb250LnNpemUgKiBmb250U2l6ZSk7XG5cbiAgICByZXR1cm4gKChmb250LnJlc29sdXRpb24gKiAxLzcyICogc3opIC8gZm9udC51bml0c19wZXJfRU0pO1xufTtcblxuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIGZvbnQgYW5kIChwb2ludCkgZm9udCBzaXplLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZVxuICogc2NhbGUgdGhhdCB3aWxsIG5lZWQgdG8gYmUgYXBwbGllZCB0byBFTSB1bml0cyAoaS5lLiBmb250IHBhdGhzKSBcbiAqIHRvIGhhdmUgdGhlIGZvbnQgcmVuZGVyIGF0IHRoZSBleHBlY3RlZCBzaXplIChpLmUuIHRvIG1hdGNoIHRoZSBicm93c2VyKS5cbiAqIFxuICogSWYgbm8gZm9udCBzaXplIGlzIHNwZWNpZmllZCwgd2Ugd2lsbCB1c2UgdGhlIGRlZmF1bHQgZm9udCBzaXplLlxuICogXG4gKiBAcGFyYW0gIHtGb250fSBmb250ICAgICAgIGEgZm9udCBvYmplY3QgZnJvbSB0aGUgZm9udHBhdGggdG9vbFxuICogQHBhcmFtICB7TnVtYmVyfSBmb250U2l6ZSB0aGUgZGVzaXJlZCBmb250IHNpemUsIGRlZmF1bHRzIHRvIHRoZSBmb250J3MgZGVmYXVsdCBzaXplXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgIHRoZSBzY2FsZSBmb3IgdGhpcyBmb250IHNpemVcbiAqL1xubW9kdWxlLmV4cG9ydHMuZ2V0UHRTY2FsZSA9IGZ1bmN0aW9uKGZvbnQsIGZvbnRTaXplKSB7XG4gICAgZm9udFNpemUgPSB0eXBlb2YgZm9udFNpemUgPT09IFwibnVtYmVyXCIgPyBmb250U2l6ZSA6IGZvbnQuc2l6ZTtcbiAgICBmb250U2l6ZSA9IHRoaXMucG9pbnRUb1BpeGVsKGZvbnRTaXplKTtcbiAgICByZXR1cm4gdGhpcy5nZXRQeFNjYWxlKGZvbnQsIGZvbnRTaXplKTtcbn07XG4iLCJ2YXIgdG1wQm91bmRzID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwLCBnbHlwaHM6IDAgfTtcblxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGNocikge1xuXHRyZXR1cm4gY2hyPT09JyAnXG5cdFx0fHwgY2hyPT09J1xcbidcblx0XHR8fCBjaHI9PT0nXFxyJ1xuXHRcdHx8IGNocj09PSdcXHQnO1xufVxuXG5mdW5jdGlvbiBpZHhPZih0ZXh0LCBjaHIsIHN0YXJ0LCBlbmQpIHtcblx0dmFyIGlkeCA9IHRleHQuaW5kZXhPZihjaHIsIHN0YXJ0KTtcblx0aWYgKGlkeCA9PT0gLTEgfHwgaWR4ID4gZW5kKVxuXHRcdHJldHVybiBlbmQ7XG5cdHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIFdvcmRXcmFwKHRleHQpIHtcblx0LyoqXG5cdCAqIFRoZSB0ZXh0IGJlaW5nIG9wZXJhdGVkIG9uLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuXHQgKi9cblx0dGhpcy50ZXh0ID0gdGV4dHx8XCJcIjtcblxuXHQvKipcblx0ICogQW4gYXJyYXkgb2YgbGluZXMgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBvZiB0aGlzIHdvcmQgd3JhcHBlci5cblx0ICogQHBhcmFtIHtBcnJheX0gbGluZXNcblx0ICovXG5cdHRoaXMubGluZXMgPSBbXTtcblxuXHQvKiogXG5cdCAqIFRoZSBuZXdsaW5lIGNoYXJhY3RlciB0byBicmVhayBvbiwgZGVmYXVsdCAnXFxuJ1xuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmV3bGluZVxuXHQgKi9cblx0dGhpcy5uZXdsaW5lID0gJ1xcbic7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdG8gY2xpcCBub24tYnJlYWtpbmcgdGV4dCAobm93cmFwIGFuZCBwcmUpXG5cdCAqIGlmIHRoZSB3cmFwV2lkdGggaXMgdG9vIHNtYWxsLiBcblx0ICogIFxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNsaXBcblx0ICovXG5cdHRoaXMuY2xpcCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBUaGUgbW9kZSBmb3Igd29yZHdyYXBwaW5nOiAncHJlJywgJ25vcm1hbCcsIG9yICdub3dyYXAnLlxuXHQgKlxuXHQgKiBZb3UgY2FuIGFsc28gdXNlIHRoZSBgUFJFYCwgYE5PUk1BTGAsIGFuZCBgTk9XUkFQYCBjb25zdGFudHNcblx0ICogaW4gYFdvcmRXcmFwLk1vZGVgLlxuXHQgKiBcblx0ICogQHBhcmFtIHtTdHJpbmd9IG1vZGVcblx0ICovXG5cdHRoaXMubW9kZSA9IFdvcmRXcmFwLk1vZGUuTk9STUFMO1xufVxuXG5Xb3JkV3JhcC5Nb2RlID0ge1xuXHRQUkU6ICdwcmUnLCAgICAgICAvL3doaXRlc3BhY2UgaXNuJ3QgY29sbGFwc2VkXG5cdE5PUk1BTDogJ25vcm1hbCcsIC8vd2hpdGVzcGFjZSBpcyBjb2xsYXBzZWRcblx0Tk9XUkFQOiAnbm93cmFwJyAgLy9vbmx5IGJyZWFrIG9uICdcXG4nXG59O1xuXG4vKipcbiAqIENsZWFycyBhbnkgbXVsdGktbGluZSBsYXlvdXQgYnkgcGxhY2luZyBhbGwgdGhlIHRleHQgaW4gYSBzaW5nbGUgTGluZSBvYmplY3QuXG4gKiBcbiAqIEBwYXJhbSB7R2x5cGhJdGVyYXRvcn0gaXRlcmF0b3IgdGhlIGl0ZXJhdG9yIHRvIHVzZSBcbiAqIEBtZXRob2QgIGNsZWFyTGF5b3V0XG4gKi9cbldvcmRXcmFwLnByb3RvdHlwZS5jbGVhckxheW91dCA9IGZ1bmN0aW9uKGl0ZXJhdG9yKSB7XG5cdHRoaXMubGluZXMubGVuZ3RoID0gMDtcblx0XG5cdGlmICh0aGlzLnRleHQubGVuZ3RoID4gMCkge1xuXHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0aGlzLnRleHQsIDAsIHRoaXMudGV4dC5sZW5ndGgsIHVuZGVmaW5lZCwgdG1wQm91bmRzKTtcblx0XHRcblx0XHR2YXIgbGluZSA9IG5ldyBXb3JkV3JhcC5MaW5lKDAsIHRoaXMudGV4dC5sZW5ndGgsIHRtcEJvdW5kcy53aWR0aCk7XG5cdFx0dGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuXHR9XG59O1xuXG4vKipcbiAqIFJlc2V0cyB0aGUgd29yZCB3cmFwcGVyIGJ5IGVtcHR5aW5nIGFsbCBjdXJyZW50IGxpbmVzLlxuICogQG1ldGhvZCAgZW1wdHlcbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMubGluZXMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogV29yZC13cmFwcyB0aGUgZ2l2ZW4gdGV4dCBpbnRvIG11bHRpcGxlIGxpbmVzLlxuICogQHBhcmFtICB7W3R5cGVdfSBpdGVyYXRvciBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IHdpZHRoICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gc3RhcnQgICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBlbmQgICAgICBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCB3cmFwV2lkdGgsIHN0YXJ0LCBlbmQpIHtcblx0dmFyIHRleHQgPSB0aGlzLnRleHQ7XG5cblx0dmFyIGxpbmVzID0gdGhpcy5saW5lcztcblxuXHRzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0fHwwKTtcblx0ZW5kID0gKGVuZD09PTB8fGVuZCkgPyBlbmQgOiB0ZXh0Lmxlbmd0aDtcblxuXHRpdGVyYXRvci5iZWdpbigpO1xuXG5cdC8vZGVmYXVsdCB3cmFwIHdpZHRoLi4uXG5cdHdyYXBXaWR0aCA9ICh3cmFwV2lkdGg9PT0wIHx8IHdyYXBXaWR0aCkgPyB3cmFwV2lkdGggOiBOdW1iZXIuTUFYX1ZBTFVFO1xuXG5cdC8vPHByZT4gbW9kZSBqdXN0IHVzZXMgYSBzaW1wbGUgYWxnb3JpdGhtLi4uXG5cdGlmICh0aGlzLm1vZGUgPT09IFdvcmRXcmFwLk1vZGUuUFJFKSB7XG5cdFx0dmFyIGxpbmVTdGFydCA9IHN0YXJ0O1xuXHRcdGZvciAodmFyIGk9c3RhcnQ7IGk8ZW5kOyBpKyspIHtcblx0XHRcdHZhciBjaHIgPSB0ZXh0LmNoYXJBdChpKTtcblxuXHRcdFx0Ly9JZiB3ZSd2ZSByZWFjaGVkIGEgbmV3bGluZSwgdGhlbiBzdGVwIGRvd24gYSBsaW5lXG5cdFx0XHQvL09yIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIEVPRlxuXHRcdFx0aWYgKCBjaHIgPT09IHRoaXMubmV3bGluZSB8fCBpPT09ZW5kLTEpIHtcblx0XHRcdFx0dmFyIGF2YWlsYWJsZVdpZHRoID0gdGhpcy5jbGlwID8gd3JhcFdpZHRoIDogdW5kZWZpbmVkO1xuXHRcdFx0XHRpdGVyYXRvci5nZXRCb3VuZHModGV4dCwgbGluZVN0YXJ0LCBpKzEsIGF2YWlsYWJsZVdpZHRoLCB0bXBCb3VuZHMpO1xuXHRcdFx0XHRsaW5lcy5wdXNoKCBuZXcgV29yZFdyYXAuTGluZShsaW5lU3RhcnQsIGxpbmVTdGFydCt0bXBCb3VuZHMuZ2x5cGhzLCB0bXBCb3VuZHMud2lkdGgpICk7XG5cdFx0XHRcdGxpbmVTdGFydCA9IGkrMTtcblx0XHRcdH1cblx0XHR9XG5cdH0gXG5cdC8vJ25vcm1hbCcgbW9kZSB1c2VzIExpYkdEWCdzIHdvcmQgd3JhcHBpbmcgYWxnb3JpdGhtOlxuXHQvL2h0dHBzOi8vZ2l0aHViLmNvbS9saWJnZHgvbGliZ2R4L2Jsb2IvbWFzdGVyL2dkeC9zcmMvY29tL2JhZGxvZ2ljL2dkeC9ncmFwaGljcy9nMmQvQml0bWFwRm9udENhY2hlLmphdmFcblx0ZWxzZSB7XG5cdFx0Ly9pZiAnbm93cmFwJyBpcyBzcGVjaWZpZWQsIHdlIG9ubHkgd3JhcCBvbiBuZXdsaW5lIGNoYXJzXG5cdFx0XG5cdFx0dmFyIHRlc3RXaWR0aCA9IHdyYXBXaWR0aDtcblx0XHRpZiAodGhpcy5tb2RlID09PSBXb3JkV3JhcC5Nb2RlLk5PV1JBUCkge1xuXHRcdFx0dGVzdFdpZHRoID0gTnVtYmVyLk1BWF9WQUxVRTtcblx0XHR9XG5cblx0XHR3aGlsZSAoc3RhcnQgPCBlbmQpIHtcblx0XHRcdC8vZ2V0IG5leHQgbmV3bGluZSBwb3NpdGlvblxuXHRcdFx0dmFyIG5ld0xpbmUgPSBpZHhPZih0ZXh0LCB0aGlzLm5ld2xpbmUsIHN0YXJ0LCBlbmQpO1xuXG5cdFx0XHQvL2VhdCB3aGl0ZXNwYWNlIGF0IHN0YXJ0IG9mIGxpbmVcblx0XHRcdHdoaWxlIChzdGFydCA8IG5ld0xpbmUpIHtcblx0XHRcdFx0aWYgKCFpc1doaXRlc3BhY2UoIHRleHQuY2hhckF0KHN0YXJ0KSApKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRzdGFydCsrO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2RldGVybWluZSB2aXNpYmxlICMgb2YgZ2x5cGhzIGZvciB0aGUgYXZhaWxhYmxlIHdpZHRoXG5cdFx0XHRpdGVyYXRvci5nZXRCb3VuZHModGV4dCwgc3RhcnQsIG5ld0xpbmUsIHRlc3RXaWR0aCwgdG1wQm91bmRzKVxuXG5cdFx0XHR2YXIgbGluZUVuZCA9IHN0YXJ0ICsgdG1wQm91bmRzLmdseXBocztcblx0XHRcdHZhciBuZXh0U3RhcnQgPSBsaW5lRW5kICsgdGhpcy5uZXdsaW5lLmxlbmd0aDtcblxuXHRcdFx0Ly9pZiB3ZSBoYWQgdG8gY3V0IHRoZSBsaW5lIGJlZm9yZSB0aGUgbmV4dCBuZXdsaW5lLi4uXG5cdFx0XHRpZiAobGluZUVuZCA8IG5ld0xpbmUpIHtcblx0XHRcdFx0Ly9maW5kIGNoYXIgdG8gYnJlYWsgb25cblx0XHRcdFx0d2hpbGUgKGxpbmVFbmQgPiBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChpc1doaXRlc3BhY2UodGV4dC5jaGFyQXQobGluZUVuZCkpKVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0bGluZUVuZC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChsaW5lRW5kID09PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChuZXh0U3RhcnQgPiBzdGFydCArIHRoaXMubmV3bGluZS5sZW5ndGgpIG5leHRTdGFydC0tO1xuXHRcdFx0XHRcdGxpbmVFbmQgPSBuZXh0U3RhcnQ7IC8vIElmIG5vIGNoYXJhY3RlcnMgdG8gYnJlYWssIHNob3cgYWxsLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG5leHRTdGFydCA9IGxpbmVFbmQ7XG5cdFx0XHRcdFx0Ly9lYXQgd2hpdGVzcGFjZSBhdCBlbmQgb2YgbGluZVxuXHRcdFx0XHRcdHdoaWxlIChsaW5lRW5kID4gc3RhcnQpIHtcblx0XHRcdFx0XHRcdGlmICghaXNXaGl0ZXNwYWNlKHRleHQuY2hhckF0KGxpbmVFbmQgLSB0aGlzLm5ld2xpbmUubGVuZ3RoKSkpXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0bGluZUVuZC0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobGluZUVuZCA+IHN0YXJ0KSB7XG5cdFx0XHRcdC8vdG8gY2xpcCwgdXNlIHRoZSBvcmlnaW5hbCB3cmFwIHdpZHRoICh1bmFsdGVyZWQgYnkgbW9kZSlcblx0XHRcdFx0dmFyIGF2YWlsYWJsZVdpZHRoID0gdGhpcy5jbGlwID8gd3JhcFdpZHRoIDogdW5kZWZpbmVkO1xuXHRcdFx0XHRpdGVyYXRvci5nZXRCb3VuZHModGV4dCwgc3RhcnQsIGxpbmVFbmQsIGF2YWlsYWJsZVdpZHRoLCB0bXBCb3VuZHMpO1xuXHRcdFx0XHR2YXIgbGluZVdpZHRoID0gdG1wQm91bmRzLndpZHRoO1xuXG5cdFx0XHRcdHZhciByTGluZUVuZCA9IHRoaXMuY2xpcCA/IHN0YXJ0K3RtcEJvdW5kcy5nbHlwaHMgOiBsaW5lRW5kO1xuXHRcdFx0XHRsaW5lcy5wdXNoKCBuZXcgV29yZFdyYXAuTGluZShzdGFydCwgckxpbmVFbmQsIGxpbmVXaWR0aCkgKTtcblx0XHRcdH1cblx0XHRcdHN0YXJ0ID0gbmV4dFN0YXJ0O1xuXG5cdFx0fVxuXHR9XG5cblx0aXRlcmF0b3IuZW5kKCk7XG59O1xuXG4vKipcbiAqIEEgY29udmVuaWVuY2UgbWV0aG9kIHRvIHJldHVybiB0aGUgbWF4aW11bSB3aWR0aCBvZiBhbGwgY3VycmVudCBsaW5lcy5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBhbGlnbmluZyBibG9ja3Mgb2YgdGV4dC5cbiAqXG4gKiBAbWV0aG9kICBnZXRNYXhMaW5lV2lkdGhcbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIG1heGltdW0gd2lkdGggb2YgYWxsIGxpbmVzXG4gKi9cbldvcmRXcmFwLnByb3RvdHlwZS5nZXRNYXhMaW5lV2lkdGggPSBmdW5jdGlvbigpIHtcblx0dmFyIG1heFdpZHRoID0gMDtcblx0Zm9yICh2YXIgaT0wOyBpPHRoaXMubGluZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgbGluZSA9IHRoaXMubGluZXNbaV07XG5cdFx0bWF4V2lkdGggPSBNYXRoLm1heChsaW5lLndpZHRoLCBtYXhXaWR0aCk7XG5cdH1cblx0cmV0dXJuIG1heFdpZHRoO1xufTtcblxuLyoqXG4gKiBUaGUgTGluZSBvYmplY3QgaG9sZHMgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBpbnRvIHRoZSBzdHJpbmcsXG4gKiBhbmQgdGhlIHdpZHRoIGFzIGNvbXB1dGVkIGJ5IEdseXBoSXRlcmF0b3IuXG4gKiBcbiAqIEBjbGFzcyAgV29yZFdyYXAuTGluZVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IHRoZSBzdGFydCBpbmRleCwgaW5jbHVzaXZlXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kICAgdGhlIGVuZCBpbmRleCwgZXhjbHVzaXZlXG4gKiBAcGFyYW0ge051bWJlcn0gd2lkdGggdGhlIGNvbXB1dGVkIHdpZHRoIG9mIHRoaXMgbGluZVxuICovXG5Xb3JkV3JhcC5MaW5lID0gZnVuY3Rpb24oc3RhcnQsIGVuZCwgd2lkdGgpIHtcblx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHR0aGlzLmVuZCA9IGVuZDtcblx0dGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JkV3JhcDsiLCJ2YXIgY3JlYXRlVkFPID0gcmVxdWlyZSgnZ2wtYWxpYXNlZC12YW8nKSAvL1RPRE86IGltcHJvdmUgdGhpcyB3aXRoIGdsLXZhb1xudmFyIGNyZWF0ZUJ1ZmZlciA9IHJlcXVpcmUoJ2dsLWJ1ZmZlcicpXG5cbm1vZHVsZS5leHBvcnRzLmZsb2F0c1BlclZlcnRleCA9IDVcblxuZnVuY3Rpb24gY3JlYXRlSW5kaWNlcyhjYXBhY2l0eSkge1xuICAgIHZhciBudW1JbmRpY2VzID0gY2FwYWNpdHkgKiA2XG4gICAgdmFyIGluZGljZXMgPSBuZXcgVWludDE2QXJyYXkobnVtSW5kaWNlcylcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIGluZGljZXNbaSArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1tpICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW2kgKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbaSArIDNdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1tpICsgNF0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW2kgKyA1XSA9IGogKyAzXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cbm1vZHVsZS5leHBvcnRzLm1peGlucyA9IHtcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKG9wdCkge1xuICAgICAgICBvcHQgPSBvcHR8fHt9XG4gICAgICAgIHRoaXMuY2xlYXIoKVxuXG4gICAgICAgIC8vZGlzcG9zZSBiZWZvcmUgYnVpbGRpbmcuLi5cbiAgICAgICAgaWYgKHRoaXMudmFvKVxuICAgICAgICAgICAgdGhpcy5kaXNwb3NlKClcblxuICAgICAgICB2YXIgY2FwYWNpdHkgPSB0eXBlb2Ygb3B0LmNhcGFjaXR5ID09PSAnbnVtYmVyJyA/IG9wdC5jYXBhY2l0eSA6IDEwMFxuXG4gICAgICAgIC8vIDY1NTM1IGlzIG1heCBpbmRleCwgc28gNjU1MzUgLyA2ID0gMTA5MjIuXG4gICAgICAgIGlmIChjYXBhY2l0eSA+IDEwOTIyKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgaGF2ZSBtb3JlIHRoYW4gMTA5MjIgcXVhZHMgcGVyIGJhdGNoOiBcIiArIGNhcGFjaXR5KVxuXG4gICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHlcblxuICAgICAgICAvL3RoZSB0b3RhbCBudW1iZXIgb2YgZmxvYXRzIGluIG91ciBiYXRjaFxuICAgICAgICB2YXIgbnVtVmVydHMgPSBjYXBhY2l0eSAqIDQgKiBtb2R1bGUuZXhwb3J0cy5mbG9hdHNQZXJWZXJ0ZXhcblxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShudW1WZXJ0cylcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyhjYXBhY2l0eSlcblxuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICAgIHZhciB1c2FnZSA9IG9wdC5keW5hbWljID8gZ2wuRFlOQU1JQ19EUkFXIDogZ2wuU1RBVElDX0RSQVdcbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBjcmVhdGVCdWZmZXIoZ2wsIHRoaXMudmVydGljZXMsIGdsLkFSUkFZX0JVRkZFUiwgdXNhZ2UpXG4gICAgICAgIHRoaXMuaW5kZXhCdWZmZXIgPSBjcmVhdGVCdWZmZXIoZ2wsIHRoaXMuaW5kaWNlcywgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIGdsLlNUQVRJQ19EUkFXKVxuXG4gICAgICAgIHZhciBzdHJpZGUgPSA1ICogNFxuICAgICAgICB0aGlzLnZhbyA9IGNyZWF0ZVZBTyhnbCwgW3sgLy9wb3NpdGlvbiBYWVxuICAgICAgICAgICAgbmFtZTogJ3Bvc2l0aW9uJyxcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52ZXJ0ZXhCdWZmZXIsXG4gICAgICAgICAgICBzaXplOiAyLFxuICAgICAgICAgICAgc3RyaWRlOiBzdHJpZGVcbiAgICAgICAgfSwgeyAvL3RleGNvb3JkIFVWXG4gICAgICAgICAgICBuYW1lOiAndGV4Y29vcmQwJyxcbiAgICAgICAgICAgIGJ1ZmZlcjogdGhpcy52ZXJ0ZXhCdWZmZXIsXG4gICAgICAgICAgICBzaXplOiAyLFxuICAgICAgICAgICAgb2Zmc2V0OiAyICogNCxcbiAgICAgICAgICAgIHN0cmlkZTogc3RyaWRlXG4gICAgICAgIH0sIHsgLy9jb2xvciAocGFja2VkKSBDXG4gICAgICAgICAgICBuYW1lOiAnY29sb3InLFxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIHNpemU6IDQsXG4gICAgICAgICAgICBzdHJpZGU6IHN0cmlkZSxcbiAgICAgICAgICAgIG9mZnNldDogNCAqIDQsXG4gICAgICAgICAgICB0eXBlOiBnbC5VTlNJR05FRF9CWVRFLFxuICAgICAgICAgICAgbm9ybWFsaXplZDogdHJ1ZVxuICAgICAgICB9XSwgdGhpcy5pbmRleEJ1ZmZlcilcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgZW5zdXJlQ2FwYWNpdHk6IGZ1bmN0aW9uKGNhcGFjaXR5KSB7XG4gICAgICAgIGlmICh0aGlzLmNhcGFjaXR5IDwgY2FwYWNpdHkpXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZSh7IGNhcGFjaXR5OiBjYXBhY2l0eSB9KVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn0iLCJ2YXIgY29sb3JUb0Zsb2F0ID0gcmVxdWlyZSgnLi9wYWNrLXJnYmEtZmxvYXQnKVxudmFyIG1peGVzID0gcmVxdWlyZSgnbWl4ZXMnKVxudmFyIHByZW11bHQgPSByZXF1aXJlKCdwcmVtdWx0aXBsaWVkLXJnYmEnKVxudmFyIFdoaXRlVGV4ID0gcmVxdWlyZSgnZ2wtd2hpdGUtdGV4dHVyZScpXG5cbnZhciB2ZXJ0TnVtRmxvYXRzID0gcmVxdWlyZSgnLi9jb21tb24nKS5mbG9hdHNQZXJWZXJ0ZXhcblxuLy9UZW1wb3JhcnkgYXJyYXlzIHRvIGF2b2lkIEdDIHRocmFzaGluZ1xudmFyIHBvc2l0aW9uID0gWzAsIDBdLFxuICAgIHNoYXBlID0gWzAsIDBdLFxuICAgIHRleGNvb3JkID0gWzAsIDAsIDAsIDBdLFxuICAgIGNvbG9yID0gWzAsIDAsIDAsIDBdXG5cbnZhciB0bXA0ID0gWzAsIDAsIDAsIDBdLFxuICAgIHJvdE9yaWdpbiA9IFswLCAwXSxcbiAgICB0bXAyID0gWzAsIDBdXG5cbmZ1bmN0aW9uIFNwcml0ZUJhdGNoKGdsLCBvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3ByaXRlQmF0Y2gpKVxuICAgICAgICByZXR1cm4gbmV3IFNwcml0ZUJhdGNoKGdsLCBvcHQpXG4gICAgaWYgKCFnbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibXVzdCBzcGVjaWZ5IGdsIGNvbnRleHRcIilcbiAgICB0aGlzLmdsID0gZ2xcbiAgICBvcHQgPSBvcHQgfHwge31cbiAgICBcbiAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgdGhpcy5pZHggPSAwXG5cbiAgICAvL25vIHRyYW5zZm9ybSBtZWFucyBpZGVudGl0eVxuICAgIHRoaXMudHJhbnNmb3JtID0gbnVsbFxuXG4gICAgLy93aGl0ZSB0ZXh0dXJlIGlzIGFraW4gdG8gXCJubyB0ZXh0dXJlXCIgKHdpdGhvdXQgc3dpdGNoaW5nIHNoYWRlcnMpXG4gICAgdGhpcy5fZGVmYXVsdFRleHR1cmUgPSBvcHQuZGVmYXVsdFRleHR1cmUgfHwgV2hpdGVUZXgoZ2wpXG4gICAgdGhpcy5fb3duc0RlZmF1bHQgPSAhb3B0LmRlZmF1bHRUZXh0dXJlXG4gICAgdGhpcy5fbGFzdFRleHR1cmUgPSB0aGlzLl9kZWZhdWx0VGV4dHVyZVxuICAgIHRoaXMuX3RleHR1cmUgPSB0aGlzLl9kZWZhdWx0VGV4dHVyZVxuICAgIHRoaXMudGV4dHVyZSA9IG51bGxcblxuICAgIHRoaXMubW9kZSA9IHR5cGVvZiBvcHQubW9kZSA9PT0gJ251bWJlcicgPyBvcHQubW9kZSA6IGdsLlRSSUFOR0xFU1xuICAgIHRoaXMucHJlbXVsdGlwbGllZCA9IG9wdC5wcmVtdWx0aXBsaWVkIHx8IGZhbHNlXG5cbiAgICB0aGlzLl9kaXJ0eSA9IHRydWVcbiAgICB0aGlzLmNyZWF0ZShvcHQpXG5cbiAgICAvL3NldCBkZWZhdWx0IGF0dHJpYnV0ZXNcbiAgICB0aGlzLmRlZmF1bHRzKClcbn1cblxuLy9taXggaW4gY3JlYXRlKCkgYW5kIGVuc3VyZUNhcGFjaXR5KCkgZnVuY3Rpb25zXG5taXhlcyhTcHJpdGVCYXRjaCwgcmVxdWlyZSgnLi9jb21tb24nKS5taXhpbnMpXG5cbm1peGVzKFNwcml0ZUJhdGNoLCB7XG5cbiAgICBjYXBhY2l0eToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcGFjaXR5XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdGV4dHVyZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmVcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHRleCkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dHVyZSA9IHRleCB8fCB0aGlzLl9kZWZhdWx0VGV4dHVyZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy52ZXJ0ZXhCdWZmZXIpXG4gICAgICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlci5kaXNwb3NlKClcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhCdWZmZXIpXG4gICAgICAgICAgICB0aGlzLmluZGV4QnVmZmVyLmRpc3Bvc2UoKVxuICAgICAgICBpZiAodGhpcy52YW8pXG4gICAgICAgICAgICB0aGlzLnZhby5kaXNwb3NlKClcbiAgICAgICAgaWYgKHRoaXMuX293bnNEZWZhdWx0KVxuICAgICAgICAgICAgdGhpcy5fZGVmYXVsdFRleHR1cmUuZGlzcG9zZSgpXG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pZHggPSAwXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIGJpbmQ6IGZ1bmN0aW9uKHNoYWRlcikge1xuICAgICAgICBzaGFkZXIuYmluZCgpXG4gICAgICAgIHRoaXMudmFvLmJpbmQoc2hhZGVyKVxuICAgICAgICB0aGlzLl9ib3VuZCA9IHRydWVcbiAgICB9LFxuXG4gICAgdW5iaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy52YW8udW5iaW5kKClcbiAgICAgICAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICAgIH0sXG5cbiAgICBkZWZhdWx0czogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBjb3B5Mihwb3NpdGlvbiwgMCwgMClcbiAgICAgICAgdGhpcy50ZXhjb29yZCA9IGNvcHk0KHRleGNvb3JkLCAwLCAwLCAxLCAxKVxuICAgICAgICB0aGlzLmNvbG9yID0gY29weTQoY29sb3IsIDEsIDEsIDEsIDEpXG4gICAgICAgIHRoaXMuc2hhcGUgPSBjb3B5MihzaGFwZSwgMCwgMClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgcHVzaDogZnVuY3Rpb24oc3ByaXRlKSB7XG4gICAgICAgIC8vaWYgd2UgYXJlIGRlZmluaW5nIGF0dHJpYnV0ZXMgb24gdGhlIGZseVxuICAgICAgICBpZiAoc3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBzcHJpdGUudGV4dHVyZVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHNwcml0ZS5wb3NpdGlvbiB8fCBjb3B5Mihwb3NpdGlvbiwgMCwgMClcbiAgICAgICAgICAgIHRoaXMudGV4Y29vcmQgPSBzcHJpdGUudGV4Y29vcmQgfHwgY29weTQodGV4Y29vcmQsIDAsIDAsIDEsIDEpXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gc3ByaXRlLmNvbG9yIHx8IGNvcHk0KGNvbG9yLCAxLCAxLCAxLCAxKVxuICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNwcml0ZS5zaGFwZSB8fCBjb3B5MihzaGFwZSwgMCwgMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUgIT09IHRoaXMuX2xhc3RUZXh0dXJlKSB7XG4gICAgICAgICAgICAvL25ldyB0ZXh0dXJlLCBmbHVzaCBwcmV2aW91cyBkYXRhXG4gICAgICAgICAgICBpZiAodGhpcy5fYm91bmQpXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVzaCgpXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGV4dHVyZSA9IHRoaXMudGV4dHVyZVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaWR4ID09PSB0aGlzLnZlcnRpY2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy9pZiB3ZSBBUkVOJ1QgYm91bmQsIHdlIG5lZWQgdG8gc3RvcCBwdXNoaW5nIHZlcnRleCBkYXRhIVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9ib3VuZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1xuXG4gICAgICAgICAgICAvL2lmIHdlIEFSRSBib3VuZCwgd2UgY2FuIGZsdXNoIHRoZSBiYXRjaCBhbmQgY29udGludWUgZHJhd2luZ1xuICAgICAgICAgICAgdGhpcy5mbHVzaCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWVcblxuICAgICAgICAvL2dldCBSR0JBIGNvbXBvbmVudHMgYW5kIHBhY2sgaW50byBhIHNpbmdsZSBmbG9hdFxuICAgICAgICB2YXIgY29sb3JSR0JBID0gdGhpcy5wcmVtdWx0aXBsaWVkID8gcHJlbXVsdCh0aGlzLmNvbG9yLCB0bXA0KSA6IHRoaXMuY29sb3JcbiAgICAgICAgdmFyIGMgPSBjb2xvclRvRmxvYXQoY29sb3JSR0JBKVxuXG4gICAgICAgIHZhciB1MSA9IHRoaXMudGV4Y29vcmRbMF0sXG4gICAgICAgICAgICB2MSA9IHRoaXMudGV4Y29vcmRbMV0sXG4gICAgICAgICAgICB1MiA9IHRoaXMudGV4Y29vcmRbMl0sXG4gICAgICAgICAgICB2MiA9IHRoaXMudGV4Y29vcmRbM11cblxuICAgICAgICB2YXIgeCA9IHRoaXMucG9zaXRpb25bMF0sXG4gICAgICAgICAgICB5ID0gdGhpcy5wb3NpdGlvblsxXSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zaGFwZVswXSxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuc2hhcGVbMV1cblxuICAgICAgICB0aGlzLl92ZXJ0KHgsIHksIHUxLCB2MSwgYylcbiAgICAgICAgdGhpcy5fdmVydCh4K3dpZHRoLCB5LCB1MiwgdjEsIGMpXG4gICAgICAgIHRoaXMuX3ZlcnQoeCt3aWR0aCwgeStoZWlnaHQsIHUyLCB2MiwgYylcbiAgICAgICAgdGhpcy5fdmVydCh4LCB5K2hlaWdodCwgdTEsIHYyLCBjKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgX3ZlcnQ6IGZ1bmN0aW9uKHgxLCB5MSwgdTEsIHYxLCBjKSB7XG4gICAgICAgIHZhciBpZHggPSB0aGlzLmlkeCxcbiAgICAgICAgICAgIHZlcnRzID0gdGhpcy52ZXJ0aWNlcyxcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtXG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdmFyIHggPSB4MSwgeSA9IHkxXG4gICAgICAgICAgICB4MSA9IHRyYW5zZm9ybVswXSAqIHggKyB0cmFuc2Zvcm1bNF0gKiB5ICsgdHJhbnNmb3JtWzEyXVxuICAgICAgICAgICAgeTEgPSB0cmFuc2Zvcm1bMV0gKiB4ICsgdHJhbnNmb3JtWzVdICogeSArIHRyYW5zZm9ybVsxM11cbiAgICAgICAgfVxuXG4gICAgICAgIC8veHlcbiAgICAgICAgdmVydHNbaWR4KytdID0geDFcbiAgICAgICAgdmVydHNbaWR4KytdID0geTFcbiAgICAgICAgLy91dlxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB1MVxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB2MVxuICAgICAgICAvL2NvbG9yXG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IGNcbiAgICAgICAgdGhpcy5pZHggPSBpZHhcbiAgICB9LFxuXG4gICAgZmx1c2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcigpXG4gICAgfSxcblxuICAgIGRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL0lmIHdlJ3ZlIHJlYWNoZWQgYSBuZXcgdGV4dHVyZSBvciBjYXBhY2l0eVxuICAgICAgICAvL3doaWxlIG5vdCBib3VuZCwgdGhlbiB3ZSB3aWxsIGp1c3QgY2xlYXIgdGhlIGJhdGNoXG4gICAgICAgIC8vdG8gemVybyBhbmQgZHJhdyBub3RoaW5nXG4gICAgICAgIGlmICh0aGlzLmlkeCA9PT0gMCB8fCAhdGhpcy5fYm91bmQpXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9kaXJ0eSkge1xuICAgICAgICAgICAgdmFyIHZpZXcgPSB0aGlzLnZlcnRpY2VzLnN1YmFycmF5KDAsIHRoaXMuaWR4KVxuICAgICAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIudXBkYXRlKHZpZXcsIDApXG4gICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbGFzdFRleHR1cmUpXG4gICAgICAgICAgICB0aGlzLl9sYXN0VGV4dHVyZS5iaW5kKClcbiAgICAgICAgdGhpcy5fbGFzdFRleHR1cmUgPSB0aGlzLnRleHR1cmVcblxuICAgICAgICB2YXIgc3ByaXRlcyA9ICh0aGlzLmlkeCAvICh2ZXJ0TnVtRmxvYXRzICogNCkpXG4gICAgICAgIGlmIChzcHJpdGVzID4gMClcbiAgICAgICAgICAgIHRoaXMudmFvLmRyYXcodGhpcy5tb2RlLCBzcHJpdGVzICogNiwgMClcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBTcHJpdGVCYXRjaFxuXG4vL1RPRE86IHdpbGwgdXNlIG1vZHVsYXIgZ2wtbWF0cml4IGZvciB0aGVzZS4uLlxuZnVuY3Rpb24gY29weTIob3V0LCB4LCB5KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIGNvcHk0KG91dCwgeCwgeSwgeiwgdykge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIG91dFszXSA9IHdcbiAgICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIGNvcHlWZWMyKG91dCwgdmVjKSB7XG4gICAgcmV0dXJuIGNvcHkyKG91dCwgdmVjWzBdLCB2ZWNbMV0pXG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gICAgdmFyIHggPSBhWzBdLCBcbiAgICAgICAgeSA9IGFbMV1cbiAgICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVsxMl1cbiAgICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVsxM11cbiAgICByZXR1cm4gb3V0XG59IiwidmFyIGNyZWF0ZVZBT0VtdWxhdGVkID0gcmVxdWlyZShcIi4vbGliL3Zhby1lbXVsYXRlZC5qc1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVWQU8oZ2wsIGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpIHtcbiAgdmFyIHZhbyA9IGNyZWF0ZVZBT0VtdWxhdGVkKGdsKVxuICB2YW8udXBkYXRlKGF0dHJpYnV0ZXMsIGVsZW1lbnRzLCBlbGVtZW50c1R5cGUpXG4gIHJldHVybiB2YW9cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVWQU8iLCJmdW5jdGlvbiBnZXRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lLCBzaGFkZXIpIHtcbiAgICBpZiAoIW5hbWUpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgdmFyIGF0dHIgPSBzaGFkZXIuYXR0cmlidXRlc1xuICAgIGlmIChhdHRyW25hbWVdKSBcbiAgICAgICAgcmV0dXJuIGF0dHJbbmFtZV0ubG9jYXRpb25cbiAgICByZXR1cm4gbnVsbFxufVxuXG52YXIgbmF0dHJpYnMgPSBudWxsXG52YXIgYm91bmQgPSBudWxsXG5cbmZ1bmN0aW9uIGRvQmluZChnbCwgZWxlbWVudHMsIGF0dHJpYnV0ZXMsIHNoYWRlcikge1xuICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICBlbGVtZW50cy5iaW5kKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBudWxsKVxuICAgIH1cbiAgICBpZiAobmF0dHJpYnMgPT09IG51bGwpIHtcbiAgICAgIG5hdHRyaWJzID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9WRVJURVhfQVRUUklCUykgfCAwXG4gICAgICBib3VuZCA9IG5ldyBBcnJheShuYXR0cmlicylcbiAgICB9XG5cbiAgICBpZiAoYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiBuYXR0cmlicykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtdmFvOiBUb28gbWFueSB2ZXJ0ZXggYXR0cmlidXRlc1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhc3RCb3VuZCA9IG51bGxcblxuICAgICAgICBmb3IgKGk9MDsgaTxuYXR0cmliczsgaSsrKVxuICAgICAgICAgIGJvdW5kW2ldID0gZmFsc2VcblxuICAgICAgICAvL25vdyBiaW5kIGFsaWFzZWQgYXR0cmlidXRlc1xuICAgICAgICBmb3IgKGk9MDsgaTxhdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmliID0gYXR0cmlidXRlc1tpXVxuICAgICAgICAgICAgdmFyIGxvYyA9IGdldEF0dHJpYnV0ZUxvY2F0aW9uKGF0dHJpYi5uYW1lLCBzaGFkZXIpXG4gICAgICAgICAgICBpZiAobG9jID09PSBudWxsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG5cbiAgICAgICAgICAgIGJvdW5kW2xvY10gPSB0cnVlXG5cbiAgICAgICAgICAgIGlmKGF0dHJpYi5idWZmZXIpIHtcbiAgICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGF0dHJpYi5idWZmZXJcbiAgICAgICAgICAgICAgdmFyIHNpemUgPSBhdHRyaWIuc2l6ZSB8fCA0XG4gICAgICAgICAgICAgIHZhciB0eXBlID0gYXR0cmliLnR5cGUgfHwgZ2wuRkxPQVRcbiAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWQgPSAhIWF0dHJpYi5ub3JtYWxpemVkXG4gICAgICAgICAgICAgIHZhciBzdHJpZGUgPSBhdHRyaWIuc3RyaWRlIHx8IDBcbiAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGF0dHJpYi5vZmZzZXQgfHwgMFxuICAgICAgICAgICAgICBpZiAobGFzdEJvdW5kICE9PSBidWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIuYmluZCgpXG4gICAgICAgICAgICAgICAgbGFzdEJvdW5kID0gYnVmZmVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGxvYywgc2l6ZSwgdHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZih0eXBlb2YgYXR0cmliID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliMWYobG9jLCBhdHRyaWIpXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliMWYobG9jLCBhdHRyaWJbMF0pXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliMmYobG9jLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIzZihsb2MsIGF0dHJpYlswXSwgYXR0cmliWzFdLCBhdHRyaWJbMl0pXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihhdHRyaWIubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliNGYobG9jLCBhdHRyaWJbMF0sIGF0dHJpYlsxXSwgYXR0cmliWzJdLCBhdHRyaWJbM10pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtdmFvOiBJbnZhbGlkIHZlcnRleCBhdHRyaWJ1dGVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkobG9jKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAoaT0wOyBpPG5hdHRyaWJzOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWJvdW5kW2ldKVxuICAgICAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpXG4gICAgICBmb3IodmFyIGk9MDsgaTxuYXR0cmliczsgKytpKSB7XG4gICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShpKVxuICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb0JpbmQiLCJ2YXIgYmluZEF0dHJpYnMgPSByZXF1aXJlKFwiLi9kby1iaW5kLmpzXCIpXG5cbmZ1bmN0aW9uIFZBT0VtdWxhdGVkKGdsKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLl9lbGVtZW50cyA9IG51bGxcbiAgdGhpcy5fYXR0cmlidXRlcyA9IG51bGxcbiAgdGhpcy5fZWxlbWVudHNUeXBlID0gZ2wuVU5TSUdORURfU0hPUlRcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihzaGFkZXIpIHtcbiAgaWYgKCFzaGFkZXIpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IGFzc29jaWF0ZSBzaGFkZXIgd2l0aCB2ZXJ0ZXggYXJyYXknKVxuICBiaW5kQXR0cmlicyh0aGlzLmdsLCB0aGlzLl9lbGVtZW50cywgdGhpcy5fYXR0cmlidXRlcywgc2hhZGVyKVxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oYXR0cmlidXRlcywgZWxlbWVudHMsIGVsZW1lbnRzVHlwZSkge1xuICB0aGlzLl9lbGVtZW50cyA9IGVsZW1lbnRzXG4gIHRoaXMuX2F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzXG4gIHRoaXMuX2VsZW1lbnRzVHlwZSA9IGVsZW1lbnRzVHlwZSB8fCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JUXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7IH1cblZBT0VtdWxhdGVkLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgYmluZEF0dHJpYnModGhpcy5nbClcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihtb2RlLCBjb3VudCwgb2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8fCAwXG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgaWYodGhpcy5fZWxlbWVudHMpIHtcbiAgICBnbC5kcmF3RWxlbWVudHMobW9kZSwgY291bnQsIHRoaXMuX2VsZW1lbnRzVHlwZSwgb2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGdsLmRyYXdBcnJheXMobW9kZSwgb2Zmc2V0LCBjb3VudClcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVWQU9FbXVsYXRlZChnbCkge1xuICByZXR1cm4gbmV3IFZBT0VtdWxhdGVkKGdsKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVZBT0VtdWxhdGVkIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHBvb2wgPSByZXF1aXJlKFwidHlwZWRhcnJheS1wb29sXCIpXG52YXIgb3BzID0gcmVxdWlyZShcIm5kYXJyYXktb3BzXCIpXG52YXIgbmRhcnJheSA9IHJlcXVpcmUoXCJuZGFycmF5XCIpXG52YXIgd2ViZ2xldyA9IHJlcXVpcmUoXCJ3ZWJnbGV3XCIpXG5cbnZhciBTVVBQT1JURURfVFlQRVMgPSBbXG4gIFwidWludDhcIixcbiAgXCJ1aW50OF9jbGFtcGVkXCIsXG4gIFwidWludDE2XCIsXG4gIFwidWludDMyXCIsXG4gIFwiaW50OFwiLFxuICBcImludDE2XCIsXG4gIFwiaW50MzJcIixcbiAgXCJmbG9hdDMyXCIgXVxuXG5mdW5jdGlvbiBHTEJ1ZmZlcihnbCwgdHlwZSwgaGFuZGxlLCBsZW5ndGgsIHVzYWdlKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuaGFuZGxlID0gaGFuZGxlXG4gIHRoaXMubGVuZ3RoID0gbGVuZ3RoXG4gIHRoaXMudXNhZ2UgPSB1c2FnZVxufVxuXG52YXIgcHJvdG8gPSBHTEJ1ZmZlci5wcm90b3R5cGVcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmJpbmRCdWZmZXIodGhpcy50eXBlLCB0aGlzLmhhbmRsZSlcbn1cblxucHJvdG8udW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLnR5cGUsIG51bGwpXG59XG5cbnByb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC5kZWxldGVCdWZmZXIodGhpcy5oYW5kbGUpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVR5cGVBcnJheShnbCwgdHlwZSwgbGVuLCB1c2FnZSwgZGF0YSwgb2Zmc2V0KSB7XG4gIHZhciBkYXRhTGVuID0gZGF0YS5sZW5ndGggKiBkYXRhLkJZVEVTX1BFUl9FTEVNRU5UIFxuICBpZihvZmZzZXQgPCAwKSB7XG4gICAgZ2wuYnVmZmVyRGF0YSh0eXBlLCBkYXRhLCB1c2FnZSlcbiAgICByZXR1cm4gZGF0YUxlblxuICB9XG4gIGlmKGRhdGFMZW4gKyBvZmZzZXQgPiBsZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IElmIHJlc2l6aW5nIGJ1ZmZlciwgbXVzdCBub3Qgc3BlY2lmeSBvZmZzZXRcIilcbiAgfVxuICBnbC5idWZmZXJTdWJEYXRhKHR5cGUsIG9mZnNldCwgZGF0YSlcbiAgcmV0dXJuIGxlblxufVxuXG5mdW5jdGlvbiBtYWtlU2NyYXRjaFR5cGVBcnJheShhcnJheSwgZHR5cGUpIHtcbiAgdmFyIHJlcyA9IHBvb2wubWFsbG9jKGFycmF5Lmxlbmd0aCwgZHR5cGUpXG4gIHZhciBuID0gYXJyYXkubGVuZ3RoXG4gIGZvcih2YXIgaT0wOyBpPG47ICsraSkge1xuICAgIHJlc1tpXSA9IGFycmF5W2ldXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBpc1BhY2tlZChzaGFwZSwgc3RyaWRlKSB7XG4gIHZhciBuID0gMVxuICBmb3IodmFyIGk9c3RyaWRlLmxlbmd0aC0xOyBpPj0wOyAtLWkpIHtcbiAgICBpZihzdHJpZGVbaV0gIT09IG4pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBuICo9IHNoYXBlW2ldXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxucHJvdG8udXBkYXRlID0gZnVuY3Rpb24oYXJyYXksIG9mZnNldCkge1xuICBpZih0eXBlb2Ygb2Zmc2V0ICE9PSBcIm51bWJlclwiKSB7XG4gICAgb2Zmc2V0ID0gLTFcbiAgfVxuICB0aGlzLmJpbmQoKVxuICBpZih0eXBlb2YgYXJyYXkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGFycmF5LnNoYXBlICE9PSBcInVuZGVmaW5lZFwiKSB7IC8vbmRhcnJheVxuICAgIHZhciBkdHlwZSA9IGFycmF5LmR0eXBlXG4gICAgaWYoU1VQUE9SVEVEX1RZUEVTLmluZGV4T2YoZHR5cGUpIDwgMCkge1xuICAgICAgZHR5cGUgPSBcImZsb2F0MzJcIlxuICAgIH1cbiAgICBpZih0aGlzLnR5cGUgPT09IHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICAgIHZhciB3Z2wgPSB3ZWJnbGV3KHRoaXMuZ2wpXG4gICAgICB2YXIgZXh0ID0gd2dsLk9FU19lbGVtZW50X2luZGV4X3VpbnRcbiAgICAgIGlmKGV4dCAmJiBkdHlwZSAhPT0gXCJ1aW50MTZcIikge1xuICAgICAgICBkdHlwZSA9IFwidWludDMyXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR0eXBlID0gXCJ1aW50MTZcIlxuICAgICAgfVxuICAgIH1cbiAgICBpZihkdHlwZSA9PT0gYXJyYXkuZHR5cGUgJiYgaXNQYWNrZWQoYXJyYXkuc2hhcGUsIGFycmF5LnN0cmlkZSkpIHtcbiAgICAgIGlmKGFycmF5Lm9mZnNldCA9PT0gMCAmJiBhcnJheS5kYXRhLmxlbmd0aCA9PT0gYXJyYXkuc2hhcGVbMF0pIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgYXJyYXkuZGF0YSwgb2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5LnNoYXBlWzBdKSwgb2Zmc2V0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdG1wID0gcG9vbC5tYWxsb2MoYXJyYXkuc2l6ZSwgZHR5cGUpXG4gICAgICB2YXIgbmR0ID0gbmRhcnJheSh0bXAsIGFycmF5LnNoYXBlKVxuICAgICAgb3BzLmFzc2lnbihuZHQsIGFycmF5KVxuICAgICAgaWYob2Zmc2V0IDwgMCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0bXAsIG9mZnNldCkgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgdG1wLnN1YmFycmF5KDAsIGFycmF5LnNpemUpLCBvZmZzZXQpICBcbiAgICAgIH1cbiAgICAgIHBvb2wuZnJlZSh0bXApXG4gICAgfVxuICB9IGVsc2UgaWYoQXJyYXkuaXNBcnJheShhcnJheSkpIHsgLy9WYW5pbGxhIGFycmF5XG4gICAgdmFyIHRcbiAgICBpZih0aGlzLnR5cGUgPT09IHRoaXMuZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICAgIHQgPSBtYWtlU2NyYXRjaFR5cGVBcnJheShhcnJheSwgXCJ1aW50MTZcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdCA9IG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBcImZsb2F0MzJcIilcbiAgICB9XG4gICAgaWYob2Zmc2V0IDwgMCkge1xuICAgICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgdCwgb2Zmc2V0KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0LnN1YmFycmF5KDAsIGFycmF5Lmxlbmd0aCksIG9mZnNldClcbiAgICB9XG4gICAgcG9vbC5mcmVlKHQpXG4gIH0gZWxzZSBpZih0eXBlb2YgYXJyYXkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGFycmF5Lmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyAvL1R5cGVkIGFycmF5XG4gICAgdGhpcy5sZW5ndGggPSB1cGRhdGVUeXBlQXJyYXkodGhpcy5nbCwgdGhpcy50eXBlLCB0aGlzLmxlbmd0aCwgdGhpcy51c2FnZSwgYXJyYXksIG9mZnNldClcbiAgfSBlbHNlIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJudW1iZXJcIiB8fCBhcnJheSA9PT0gdW5kZWZpbmVkKSB7IC8vTnVtYmVyL2RlZmF1bHRcbiAgICBpZihvZmZzZXQgPj0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBDYW5ub3Qgc3BlY2lmeSBvZmZzZXQgd2hlbiByZXNpemluZyBidWZmZXJcIilcbiAgICB9XG4gICAgYXJyYXkgPSBhcnJheSB8IDBcbiAgICBpZihhcnJheSA8PSAwKSB7XG4gICAgICBhcnJheSA9IDFcbiAgICB9XG4gICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMudHlwZSwgYXJyYXl8MCwgdGhpcy51c2FnZSlcbiAgICB0aGlzLmxlbmd0aCA9IGFycmF5XG4gIH0gZWxzZSB7IC8vRXJyb3IsIGNhc2Ugc2hvdWxkIG5vdCBoYXBwZW5cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgZGF0YSB0eXBlXCIpXG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGdsLCBkYXRhLCB0eXBlLCB1c2FnZSkge1xuICB3ZWJnbGV3KGdsKVxuICB0eXBlID0gdHlwZSB8fCBnbC5BUlJBWV9CVUZGRVJcbiAgdXNhZ2UgPSB1c2FnZSB8fCBnbC5EWU5BTUlDX0RSQVdcbiAgaWYodHlwZSAhPT0gZ2wuQVJSQVlfQlVGRkVSICYmIHR5cGUgIT09IGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBJbnZhbGlkIHR5cGUgZm9yIHdlYmdsIGJ1ZmZlciwgbXVzdCBiZSBlaXRoZXIgZ2wuQVJSQVlfQlVGRkVSIG9yIGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSXCIpXG4gIH1cbiAgaWYodXNhZ2UgIT09IGdsLkRZTkFNSUNfRFJBVyAmJiB1c2FnZSAhPT0gZ2wuU1RBVElDX0RSQVcgJiYgdXNhZ2UgIT09IGdsLlNUUkVBTV9EUkFXKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2wtYnVmZmVyOiBJbnZhbGlkIHVzYWdlIGZvciBidWZmZXIsIG11c3QgYmUgZWl0aGVyIGdsLkRZTkFNSUNfRFJBVywgZ2wuU1RBVElDX0RSQVcgb3IgZ2wuU1RSRUFNX0RSQVdcIilcbiAgfVxuICB2YXIgaGFuZGxlID0gZ2wuY3JlYXRlQnVmZmVyKClcbiAgdmFyIHJlc3VsdCA9IG5ldyBHTEJ1ZmZlcihnbCwgdHlwZSwgaGFuZGxlLCAwLCB1c2FnZSlcbiAgcmVzdWx0LnVwZGF0ZShkYXRhKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQnVmZmVyIiwidmFyIGNyZWF0ZSA9IHJlcXVpcmUoJ2dsLXRleHR1cmUyZCcpXG52YXIgbmRhcnJheSA9IHJlcXVpcmUoJ25kYXJyYXknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsKSB7XG4gICAgLy9maWxsIGFuIGFycmF5IHdpdGggMHhmZlxuICAgIHZhciBkYXRhID0gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KDE2KSlcbiAgICAgICAgICAgIC5tYXAoTnVtYmVyLnByb3RvdHlwZS52YWx1ZU9mLCAweEZGKTtcbiAgICAvL2NyZWF0ZSBhIDJEIG5kYXJyYXlcbiAgICB2YXIgYXJyYXkgPSBuZGFycmF5KG5ldyBVaW50OEFycmF5KGRhdGEpLCBbMiwgMiwgNF0pXG4gICAgcmV0dXJuIGNyZWF0ZShnbCwgYXJyYXkpXG59IiwiZnVuY3Rpb24gcHJlbXVsdGlwbHkocmdiYSwgb3V0KSB7XG5cdGlmICghb3V0IHx8IHR5cGVvZiBvdXQgPT09ICdudW1iZXInKVxuXHRcdG91dCA9IFswLDAsMCwwXVxuXHRvdXRbMF0gPSByZ2JhWzBdICogcmdiYVszXVxuXHRvdXRbMV0gPSByZ2JhWzFdICogcmdiYVszXVxuXHRvdXRbMl0gPSByZ2JhWzJdICogcmdiYVszXVxuXHRvdXRbM10gPSByZ2JhWzNdXG5cdHJldHVybiBvdXRcbn1cbm1vZHVsZS5leHBvcnRzID0gcHJlbXVsdGlwbHkiLCJ2YXIgcGFja0NvbG9yID0gcmVxdWlyZSgnbnVtYmVyLXV0aWwnKS5jb2xvclRvRmxvYXRcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb2xvclRvRmxvYXQocmdiYSkge1xuICAgIHJldHVybiBwYWNrQ29sb3IoXG4gICAgICAgIH5+KHJnYmFbMF0gKiAyNTUpLFxuICAgICAgICB+fihyZ2JhWzFdICogMjU1KSxcbiAgICAgICAgfn4ocmdiYVsyXSAqIDI1NSksXG4gICAgICAgIH5+KHJnYmFbM10gKiAyNTUpXG4gICAgKVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdGV4Y29vcmQocG9zaXRpb24sIHNoYXBlLCB0ZXhTaGFwZSwgb3V0KSB7XG4gICAgaWYgKCFvdXQpXG4gICAgICAgIG91dCA9IFswLCAwLCAxLCAxXVxuXG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCBbMCwgMF1cbiAgICBzaGFwZSA9IHNoYXBlIHx8IFsxLCAxXVxuXG4gICAgdGV4U2hhcGUgPSB0ZXhTaGFwZSB8fCBzaGFwZVxuXG4gICAgdmFyIGludldpZHRoID0gMSAvIHRleFNoYXBlWzBdXG4gICAgdmFyIGludkhlaWdodCA9IDEgLyB0ZXhTaGFwZVsxXVxuICAgIHZhciB4ID0gcG9zaXRpb25bMF0sXG4gICAgICAgIHkgPSBwb3NpdGlvblsxXSxcbiAgICAgICAgdyA9IHNoYXBlWzBdLFxuICAgICAgICBoID0gc2hhcGVbMV1cblxuICAgIG91dFswXSA9IHggKiBpbnZXaWR0aFxuICAgIG91dFsxXSA9IHkgKiBpbnZIZWlnaHRcbiAgICBvdXRbMl0gPSAoeCArIHcpICogaW52V2lkdGhcbiAgICBvdXRbM10gPSAoeSArIGgpICogaW52SGVpZ2h0XG4gICAgcmV0dXJuIG91dFxufSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbmRhcnJheSA9IHJlcXVpcmUoJ25kYXJyYXknKVxudmFyIG9wcyAgICAgPSByZXF1aXJlKCduZGFycmF5LW9wcycpXG52YXIgcG9vbCAgICA9IHJlcXVpcmUoJ3R5cGVkYXJyYXktcG9vbCcpXG52YXIgd2ViZ2xldyA9IHJlcXVpcmUoJ3dlYmdsZXcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRleHR1cmUyRFxuXG52YXIgbGluZWFyVHlwZXMgPSBudWxsXG52YXIgZmlsdGVyVHlwZXMgPSBudWxsXG52YXIgd3JhcFR5cGVzICAgPSBudWxsXG5cbmZ1bmN0aW9uIGxhenlJbml0TGluZWFyVHlwZXMoZ2wpIHtcbiAgbGluZWFyVHlwZXMgPSBbXG4gICAgZ2wuTElORUFSLFxuICAgIGdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUixcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNUXG4gIF1cbiAgZmlsdGVyVHlwZXMgPSBbXG4gICAgZ2wuTkVBUkVTVCxcbiAgICBnbC5MSU5FQVIsXG4gICAgZ2wuTkVBUkVTVF9NSVBNQVBfTkVBUkVTVCxcbiAgICBnbC5ORUFSRVNUX01JUE1BUF9MSU5FQVIsXG4gICAgZ2wuTElORUFSX01JUE1BUF9ORUFSRVNULFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXG4gIF1cbiAgd3JhcFR5cGVzID0gW1xuICAgIGdsLlJFUEVBVCxcbiAgICBnbC5DTEFNUF9UT19FREdFLFxuICAgIGdsLk1JUlJPUkVEX1JFUEVBVFxuICBdXG59XG5cbnZhciBjb252ZXJ0RmxvYXRUb1VpbnQ4ID0gZnVuY3Rpb24ob3V0LCBpbnApIHtcbiAgb3BzLm11bHMob3V0LCBpbnAsIDI1NS4wKVxufVxuXG5mdW5jdGlvbiByZXNoYXBlVGV4dHVyZSh0ZXgsIHcsIGgpIHtcbiAgdmFyIGdsID0gdGV4LmdsXG4gIHZhciBtYXhTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHcgPCAwIHx8IHcgPiBtYXhTaXplIHx8IGggPCAwIHx8IGggPiBtYXhTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaXplJylcbiAgfVxuICB0ZXguX3NoYXBlID0gW3csIGhdXG4gIHRleC5iaW5kKClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCB0ZXguZm9ybWF0LCB3LCBoLCAwLCB0ZXguZm9ybWF0LCB0ZXgudHlwZSwgbnVsbClcbiAgdGV4Ll9taXBMZXZlbHMgPSBbMF1cbiAgcmV0dXJuIHRleFxufVxuXG5mdW5jdGlvbiBUZXh0dXJlMkQoZ2wsIGhhbmRsZSwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLmhhbmRsZSA9IGhhbmRsZVxuICB0aGlzLmZvcm1hdCA9IGZvcm1hdFxuICB0aGlzLnR5cGUgPSB0eXBlXG4gIHRoaXMuX3NoYXBlID0gW3dpZHRoLCBoZWlnaHRdXG4gIHRoaXMuX21pcExldmVscyA9IFswXVxuICB0aGlzLl9tYWdGaWx0ZXIgPSBnbC5ORUFSRVNUXG4gIHRoaXMuX21pbkZpbHRlciA9IGdsLk5FQVJFU1RcbiAgdGhpcy5fd3JhcFMgPSBnbC5DTEFNUF9UT19FREdFXG4gIHRoaXMuX3dyYXBUID0gZ2wuQ0xBTVBfVE9fRURHRVxuICB0aGlzLl9hbmlzb1NhbXBsZXMgPSAxXG5cbiAgdmFyIHBhcmVudCA9IHRoaXNcbiAgdmFyIHdyYXBWZWN0b3IgPSBbdGhpcy5fd3JhcFMsIHRoaXMuX3dyYXBUXVxuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3cmFwVmVjdG9yLCBbXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fd3JhcFNcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53cmFwUyA9IHZcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuX3dyYXBUXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQud3JhcFQgPSB2XG4gICAgICB9XG4gICAgfVxuICBdKVxuICB0aGlzLl93cmFwVmVjdG9yID0gd3JhcFZlY3RvclxuXG4gIHZhciBzaGFwZVZlY3RvciA9IFt0aGlzLl9zaGFwZVswXSwgdGhpcy5fc2hhcGVbMV1dXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHNoYXBlVmVjdG9yLCBbXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fc2hhcGVbMF1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53aWR0aCA9IHZcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuX3NoYXBlWzFdXG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQuaGVpZ2h0ID0gdlxuICAgICAgfVxuICAgIH1cbiAgXSlcbiAgdGhpcy5fc2hhcGVWZWN0b3IgPSBzaGFwZVZlY3RvclxufVxuXG52YXIgcHJvdG8gPSBUZXh0dXJlMkQucHJvdG90eXBlXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHByb3RvLCB7XG4gIG1pbkZpbHRlcjoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWluRmlsdGVyXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICBpZih0aGlzLnR5cGUgPT09IGdsLkZMT0FUICYmIGxpbmVhclR5cGVzLmluZGV4T2YodikgPj0gMCkge1xuICAgICAgICBpZighd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdF9saW5lYXIpIHtcbiAgICAgICAgICB2ID0gZ2wuTkVBUkVTVFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihmaWx0ZXJUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biBmaWx0ZXIgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX21pbkZpbHRlciA9IHZcbiAgICB9XG4gIH0sXG4gIG1hZ0ZpbHRlcjoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFnRmlsdGVyXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICBpZih0aGlzLnR5cGUgPT09IGdsLkZMT0FUICYmIGxpbmVhclR5cGVzLmluZGV4T2YodikgPj0gMCkge1xuICAgICAgICBpZighd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdF9saW5lYXIpIHtcbiAgICAgICAgICB2ID0gZ2wuTkVBUkVTVFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZihmaWx0ZXJUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biBmaWx0ZXIgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX21hZ0ZpbHRlciA9IHZcbiAgICB9XG4gIH0sXG4gIG1pcFNhbXBsZXM6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihpKSB7XG4gICAgICB2YXIgcHNhbXBsZXMgPSB0aGlzLl9hbmlzb1NhbXBsZXNcbiAgICAgIHRoaXMuX2FuaXNvU2FtcGxlcyA9IE1hdGgubWF4KGksIDEpfDBcbiAgICAgIGlmKHBzYW1wbGVzICE9PSB0aGlzLl9hbmlzb1NhbXBsZXMpIHtcbiAgICAgICAgdmFyIGV4dCA9IHdlYmdsZXcodGhpcy5nbCkuRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXG4gICAgICAgIGlmKGV4dCkge1xuICAgICAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyZih0aGlzLmdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgdGhpcy5fYW5pc29TYW1wbGVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fYW5pc29TYW1wbGVzXG4gICAgfVxuICB9LFxuICB3cmFwUzoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFNcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIGlmKHdyYXBUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biB3cmFwIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9TLCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBTID0gdlxuICAgIH1cbiAgfSxcbiAgd3JhcFQ6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBUXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICBpZih3cmFwVHlwZXMuaW5kZXhPZih2KSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gd3JhcCBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJpKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5nbC5URVhUVVJFX1dSQVBfVCwgdilcbiAgICAgIHJldHVybiB0aGlzLl93cmFwVCA9IHZcbiAgICB9XG4gIH0sXG4gIHdyYXA6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBWZWN0b3JcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgdiA9IFt2LHZdXG4gICAgICB9XG4gICAgICBpZih2Lmxlbmd0aCAhPT0gMikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogTXVzdCBzcGVjaWZ5IHdyYXAgbW9kZSBmb3Igcm93cyBhbmQgY29sdW1ucycpXG4gICAgICB9XG4gICAgICBmb3IodmFyIGk9MDsgaTwyOyArK2kpIHtcbiAgICAgICAgaWYod3JhcFR5cGVzLmluZGV4T2YodltpXSkgPCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVua25vd24gd3JhcCBtb2RlICcgKyB2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl93cmFwUyA9IHZbMF1cbiAgICAgIHRoaXMuX3dyYXBUID0gdlsxXVxuXG4gICAgICB2YXIgZ2wgPSB0aGlzLmdsXG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgdGhpcy5fd3JhcFMpXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCB0aGlzLl93cmFwVClcblxuICAgICAgcmV0dXJuIHZcbiAgICB9XG4gIH0sXG4gIHNoYXBlOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaGFwZVZlY3RvclxuICAgIH0sIFxuICAgIHNldDogZnVuY3Rpb24oeCkge1xuICAgICAgaWYoIUFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICAgICAgeCA9IFt4fDAseHwwXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYoeC5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNoYXBlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgeFswXXwwLCB4WzFdfDApXG4gICAgICByZXR1cm4gW3hbMF18MCwgeFsxXXwwXVxuICAgIH1cbiAgfSxcbiAgd2lkdGg6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlWzBdXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHcpIHtcbiAgICAgIHcgPSB3fDBcbiAgICAgIHJlc2hhcGVUZXh0dXJlKHRoaXMsIHcsIHRoaXMuX3NoYXBlWzFdKVxuICAgICAgcmV0dXJuIHdcbiAgICB9XG4gIH0sXG4gIGhlaWdodDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVbMV1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24oaCkge1xuICAgICAgaCA9IGh8MFxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgdGhpcy5fc2hhcGVbMF0sIGgpXG4gICAgICByZXR1cm4gaFxuICAgIH1cbiAgfVxufSlcblxucHJvdG8uYmluZCA9IGZ1bmN0aW9uKHVuaXQpIHtcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBpZih1bml0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwICsgKHVuaXR8MCkpXG4gIH1cbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy5oYW5kbGUpXG4gIGlmKHVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAodW5pdHwwKVxuICB9XG4gIHJldHVybiBnbC5nZXRQYXJhbWV0ZXIoZ2wuQUNUSVZFX1RFWFRVUkUpIC0gZ2wuVEVYVFVSRTBcbn1cblxucHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5oYW5kbGUpXG59XG5cbnByb3RvLmdlbmVyYXRlTWlwbWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYmluZCgpXG4gIHRoaXMuZ2wuZ2VuZXJhdGVNaXBtYXAodGhpcy5nbC5URVhUVVJFXzJEKVxuICBcbiAgLy9VcGRhdGUgbWlwIGxldmVsc1xuICB2YXIgbCA9IE1hdGgubWluKHRoaXMuX3NoYXBlWzBdLCB0aGlzLl9zaGFwZVsxXSlcbiAgZm9yKHZhciBpPTA7IGw+MDsgKytpLCBsPj4+PTEpIHtcbiAgICBpZih0aGlzLl9taXBMZXZlbHMuaW5kZXhPZihpKSA8IDApIHtcbiAgICAgIHRoaXMuX21pcExldmVscy5wdXNoKGkpXG4gICAgfVxuICB9XG59XG5cbnByb3RvLnNldFBpeGVscyA9IGZ1bmN0aW9uKGRhdGEsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsKSB7XG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgdGhpcy5iaW5kKClcbiAgaWYoQXJyYXkuaXNBcnJheSh4X29mZikpIHtcbiAgICBtaXBfbGV2ZWwgPSB5X29mZlxuICAgIHlfb2ZmID0geF9vZmZbMV18MFxuICAgIHhfb2ZmID0geF9vZmZbMF18MFxuICB9IGVsc2Uge1xuICAgIHhfb2ZmID0geF9vZmYgfHwgMFxuICAgIHlfb2ZmID0geV9vZmYgfHwgMFxuICB9XG4gIG1pcF9sZXZlbCA9IG1pcF9sZXZlbCB8fCAwXG4gIGlmKGRhdGEgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fFxuICAgICBkYXRhIGluc3RhbmNlb2YgSW1hZ2VEYXRhIHx8XG4gICAgIGRhdGEgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8XG4gICAgIGRhdGEgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgdmFyIG5lZWRzTWlwID0gdGhpcy5fbWlwTGV2ZWxzLmluZGV4T2YobWlwX2xldmVsKSA8IDBcbiAgICBpZihuZWVkc01pcCkge1xuICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCB0aGlzLmZvcm1hdCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgZGF0YSlcbiAgICAgIHRoaXMuX21pcExldmVscy5wdXNoKG1pcF9sZXZlbClcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgZGF0YSlcbiAgICB9XG4gIH0gZWxzZSBpZihkYXRhLnNoYXBlICYmIGRhdGEuc3RyaWRlICYmIGRhdGEuZGF0YSkge1xuICAgIGlmKGRhdGEuc2hhcGUubGVuZ3RoIDwgMiB8fFxuICAgICAgIHhfb2ZmICsgZGF0YS5zaGFwZVsxXSA+IHRoaXMuX3NoYXBlWzFdPj4+bWlwX2xldmVsIHx8XG4gICAgICAgeV9vZmYgKyBkYXRhLnNoYXBlWzBdID4gdGhpcy5fc2hhcGVbMF0+Pj5taXBfbGV2ZWwgfHxcbiAgICAgICB4X29mZiA8IDAgfHxcbiAgICAgICB5X29mZiA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBUZXh0dXJlIGRpbWVuc2lvbnMgYXJlIG91dCBvZiBib3VuZHMnKVxuICAgIH1cbiAgICB0ZXhTdWJJbWFnZUFycmF5KGdsLCB4X29mZiwgeV9vZmYsIG1pcF9sZXZlbCwgdGhpcy5mb3JtYXQsIHRoaXMudHlwZSwgdGhpcy5fbWlwTGV2ZWxzLCBkYXRhKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbnN1cHBvcnRlZCBkYXRhIHR5cGUnKVxuICB9XG59XG5cblxuZnVuY3Rpb24gaXNQYWNrZWQoc2hhcGUsIHN0cmlkZSkge1xuICBpZihzaGFwZS5sZW5ndGggPT09IDMpIHtcbiAgICByZXR1cm4gIChzdHJpZGVbMl0gPT09IDEpICYmIFxuICAgICAgICAgICAgKHN0cmlkZVsxXSA9PT0gc2hhcGVbMF0qc2hhcGVbMl0pICYmXG4gICAgICAgICAgICAoc3RyaWRlWzBdID09PSBzaGFwZVsyXSlcbiAgfVxuICByZXR1cm4gIChzdHJpZGVbMF0gPT09IDEpICYmIFxuICAgICAgICAgIChzdHJpZGVbMV0gPT09IHNoYXBlWzBdKVxufVxuXG5mdW5jdGlvbiB0ZXhTdWJJbWFnZUFycmF5KGdsLCB4X29mZiwgeV9vZmYsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgY3R5cGUsIG1pcExldmVscywgYXJyYXkpIHtcbiAgdmFyIGR0eXBlID0gYXJyYXkuZHR5cGVcbiAgdmFyIHNoYXBlID0gYXJyYXkuc2hhcGUuc2xpY2UoKVxuICBpZihzaGFwZS5sZW5ndGggPCAyIHx8IHNoYXBlLmxlbmd0aCA+IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBuZGFycmF5LCBtdXN0IGJlIDJkIG9yIDNkJylcbiAgfVxuICB2YXIgdHlwZSA9IDAsIGZvcm1hdCA9IDBcbiAgdmFyIHBhY2tlZCA9IGlzUGFja2VkKHNoYXBlLCBhcnJheS5zdHJpZGUuc2xpY2UoKSlcbiAgaWYoZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICB9IGVsc2UgaWYoZHR5cGUgPT09ICdmbG9hdDY0Jykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAnZmxvYXQzMidcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAndWludDgnKSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAndWludDgnXG4gIH1cbiAgdmFyIGNoYW5uZWxzID0gMVxuICBpZihzaGFwZS5sZW5ndGggPT09IDIpIHtcbiAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VcbiAgICBzaGFwZSA9IFtzaGFwZVswXSwgc2hhcGVbMV0sIDFdXG4gICAgYXJyYXkgPSBuZGFycmF5KGFycmF5LmRhdGEsIHNoYXBlLCBbYXJyYXkuc3RyaWRlWzBdLCBhcnJheS5zdHJpZGVbMV0sIDFdLCBhcnJheS5vZmZzZXQpXG4gIH0gZWxzZSBpZihzaGFwZS5sZW5ndGggPT09IDMpIHtcbiAgICBpZihzaGFwZVsyXSA9PT0gMSkge1xuICAgICAgZm9ybWF0ID0gZ2wuQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDIpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRV9BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMykge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSA0KSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JBXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHNoYXBlIGZvciBwaXhlbCBjb29yZHMnKVxuICAgIH1cbiAgICBjaGFubmVscyA9IHNoYXBlWzJdXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHRleHR1cmUnKVxuICB9XG4gIC8vRm9yIDEtY2hhbm5lbCB0ZXh0dXJlcyBhbGxvdyBjb252ZXJzaW9uIGJldHdlZW4gZm9ybWF0c1xuICBpZigoZm9ybWF0ICA9PT0gZ2wuTFVNSU5BTkNFIHx8IGZvcm1hdCAgPT09IGdsLkFMUEhBKSAmJlxuICAgICAoY2Zvcm1hdCA9PT0gZ2wuTFVNSU5BTkNFIHx8IGNmb3JtYXQgPT09IGdsLkFMUEhBKSkge1xuICAgIGZvcm1hdCA9IGNmb3JtYXRcbiAgfVxuICBpZihmb3JtYXQgIT09IGNmb3JtYXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW5jb21wYXRpYmxlIHRleHR1cmUgZm9ybWF0IGZvciBzZXRQaXhlbHMnKVxuICB9XG4gIHZhciBzaXplID0gYXJyYXkuc2l6ZVxuICB2YXIgbmVlZHNNaXAgPSBtaXBMZXZlbHMuaW5kZXhPZihtaXBfbGV2ZWwpIDwgMFxuICBpZihuZWVkc01pcCkge1xuICAgIG1pcExldmVscy5wdXNoKG1pcF9sZXZlbClcbiAgfVxuICBpZih0eXBlID09PSBjdHlwZSAmJiBwYWNrZWQpIHtcbiAgICAvL0FycmF5IGRhdGEgdHlwZXMgYXJlIGNvbXBhdGlibGUsIGNhbiBkaXJlY3RseSBjb3B5IGludG8gdGV4dHVyZVxuICAgIGlmKGFycmF5Lm9mZnNldCA9PT0gMCAmJiBhcnJheS5kYXRhLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgICAgaWYobmVlZHNNaXApIHtcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIGNmb3JtYXQsIHNoYXBlWzBdLCBzaGFwZVsxXSwgMCwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgeF9vZmYsIHlfb2ZmLCBzaGFwZVswXSwgc2hhcGVbMV0sIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihuZWVkc01pcCkge1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCtzaXplKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEuc3ViYXJyYXkoYXJyYXkub2Zmc2V0LCBhcnJheS5vZmZzZXQrc2l6ZSkpXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vTmVlZCB0byBkbyB0eXBlIGNvbnZlcnNpb24gdG8gcGFjayBkYXRhIGludG8gYnVmZmVyXG4gICAgdmFyIHBhY2tfYnVmZmVyXG4gICAgaWYoY3R5cGUgPT09IGdsLkZMT0FUKSB7XG4gICAgICBwYWNrX2J1ZmZlciA9IHBvb2wubWFsbG9jRmxvYXQzMihzaXplKVxuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrX2J1ZmZlciA9IHBvb2wubWFsbG9jVWludDgoc2l6ZSlcbiAgICB9XG4gICAgdmFyIHBhY2tfdmlldyA9IG5kYXJyYXkocGFja19idWZmZXIsIHNoYXBlLCBbc2hhcGVbMl0sIHNoYXBlWzJdKnNoYXBlWzBdLCAxXSlcbiAgICBpZih0eXBlID09PSBnbC5GTE9BVCAmJiBjdHlwZSA9PT0gZ2wuVU5TSUdORURfQllURSkge1xuICAgICAgY29udmVydEZsb2F0VG9VaW50OChwYWNrX3ZpZXcsIGFycmF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHMuYXNzaWduKHBhY2tfdmlldywgYXJyYXkpXG4gICAgfVxuICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgcGFja19idWZmZXIuc3ViYXJyYXkoMCwgc2l6ZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIHBhY2tfYnVmZmVyLnN1YmFycmF5KDAsIHNpemUpKVxuICAgIH1cbiAgICBpZihjdHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHBvb2wuZnJlZUZsb2F0MzIocGFja19idWZmZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvb2wuZnJlZVVpbnQ4KHBhY2tfYnVmZmVyKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0VGV4dHVyZShnbCkge1xuICB2YXIgdGV4ID0gZ2wuY3JlYXRlVGV4dHVyZSgpXG4gIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleClcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLk5FQVJFU1QpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NQUdfRklMVEVSLCBnbC5ORUFSRVNUKVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKVxuICByZXR1cm4gdGV4XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVTaGFwZShnbCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0LCB0eXBlKSB7XG4gIHZhciBtYXhUZXh0dXJlU2l6ZSA9IGdsLmdldFBhcmFtZXRlcihnbC5NQVhfVEVYVFVSRV9TSVpFKVxuICBpZih3aWR0aCA8IDAgfHwgd2lkdGggPiBtYXhUZXh0dXJlU2l6ZSB8fCBoZWlnaHQgPCAwIHx8IGhlaWdodCAgPiBtYXhUZXh0dXJlU2l6ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2hhcGUnKVxuICB9XG4gIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmICF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEZsb2F0aW5nIHBvaW50IHRleHR1cmVzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBwbGF0Zm9ybScpXG4gIH1cbiAgdmFyIHRleCA9IGluaXRUZXh0dXJlKGdsKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGZvcm1hdCwgd2lkdGgsIGhlaWdodCwgMCwgZm9ybWF0LCB0eXBlLCBudWxsKVxuICByZXR1cm4gbmV3IFRleHR1cmUyRChnbCwgdGV4LCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHR1cmVET00oZ2wsIGVsZW1lbnQsIGZvcm1hdCwgdHlwZSkge1xuICB2YXIgdGV4ID0gaW5pdFRleHR1cmUoZ2wpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCBmb3JtYXQsIHR5cGUsIGVsZW1lbnQpXG4gIHJldHVybiBuZXcgVGV4dHVyZTJEKGdsLCB0ZXgsIGVsZW1lbnQud2lkdGh8MCwgZWxlbWVudC5oZWlnaHR8MCwgZm9ybWF0LCB0eXBlKVxufVxuXG4vL0NyZWF0ZXMgYSB0ZXh0dXJlIGZyb20gYW4gbmRhcnJheVxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZUFycmF5KGdsLCBhcnJheSkge1xuICB2YXIgZHR5cGUgPSBhcnJheS5kdHlwZVxuICB2YXIgc2hhcGUgPSBhcnJheS5zaGFwZS5zbGljZSgpXG4gIHZhciBtYXhTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHNoYXBlWzBdIDwgMCB8fCBzaGFwZVswXSA+IG1heFNpemUgfHwgc2hhcGVbMV0gPCAwIHx8IHNoYXBlWzFdID4gbWF4U2l6ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2l6ZScpXG4gIH1cbiAgdmFyIHBhY2tlZCA9IGlzUGFja2VkKHNoYXBlLCBhcnJheS5zdHJpZGUuc2xpY2UoKSlcbiAgdmFyIHR5cGUgPSAwXG4gIGlmKGR0eXBlID09PSAnZmxvYXQzMicpIHtcbiAgICB0eXBlID0gZ2wuRkxPQVRcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAnZmxvYXQ2NCcpIHtcbiAgICB0eXBlID0gZ2wuRkxPQVRcbiAgICBwYWNrZWQgPSBmYWxzZVxuICAgIGR0eXBlID0gJ2Zsb2F0MzInXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ3VpbnQ4Jykge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gIH0gZWxzZSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgICBwYWNrZWQgPSBmYWxzZVxuICAgIGR0eXBlID0gJ3VpbnQ4J1xuICB9XG4gIHZhciBmb3JtYXQgPSAwXG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRVxuICAgIHNoYXBlID0gW3NoYXBlWzBdLCBzaGFwZVsxXSwgMV1cbiAgICBhcnJheSA9IG5kYXJyYXkoYXJyYXkuZGF0YSwgc2hhcGUsIFthcnJheS5zdHJpZGVbMF0sIGFycmF5LnN0cmlkZVsxXSwgMV0sIGFycmF5Lm9mZnNldClcbiAgfSBlbHNlIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIGlmKHNoYXBlWzJdID09PSAxKSB7XG4gICAgICBmb3JtYXQgPSBnbC5BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMikge1xuICAgICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFX0FMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAzKSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDQpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQkFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHBpeGVsIGNvb3JkcycpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHNoYXBlIGZvciB0ZXh0dXJlJylcbiAgfVxuICBpZih0eXBlID09PSBnbC5GTE9BVCAmJiAhd2ViZ2xldyhnbCkudGV4dHVyZV9mbG9hdCkge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gICAgcGFja2VkID0gZmFsc2VcbiAgfVxuICB2YXIgYnVmZmVyLCBidWZfc3RvcmVcbiAgdmFyIHNpemUgPSBhcnJheS5zaXplXG4gIGlmKCFwYWNrZWQpIHtcbiAgICB2YXIgc3RyaWRlID0gW3NoYXBlWzJdLCBzaGFwZVsyXSpzaGFwZVswXSwgMV1cbiAgICBidWZfc3RvcmUgPSBwb29sLm1hbGxvYyhzaXplLCBkdHlwZSlcbiAgICB2YXIgYnVmX2FycmF5ID0gbmRhcnJheShidWZfc3RvcmUsIHNoYXBlLCBzdHJpZGUsIDApXG4gICAgaWYoKGR0eXBlID09PSAnZmxvYXQzMicgfHwgZHR5cGUgPT09ICdmbG9hdDY0JykgJiYgdHlwZSA9PT0gZ2wuVU5TSUdORURfQllURSkge1xuICAgICAgY29udmVydEZsb2F0VG9VaW50OChidWZfYXJyYXksIGFycmF5KVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHMuYXNzaWduKGJ1Zl9hcnJheSwgYXJyYXkpXG4gICAgfVxuICAgIGJ1ZmZlciA9IGJ1Zl9zdG9yZS5zdWJhcnJheSgwLCBzaXplKVxuICB9IGVsc2UgaWYgKGFycmF5Lm9mZnNldCA9PT0gMCAmJiBhcnJheS5kYXRhLmxlbmd0aCA9PT0gc2l6ZSkge1xuICAgIGJ1ZmZlciA9IGFycmF5LmRhdGFcbiAgfSBlbHNlIHtcbiAgICBidWZmZXIgPSBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkub2Zmc2V0ICsgc2l6ZSlcbiAgfVxuICB2YXIgdGV4ID0gaW5pdFRleHR1cmUoZ2wpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGZvcm1hdCwgdHlwZSwgYnVmZmVyKVxuICBpZighcGFja2VkKSB7XG4gICAgcG9vbC5mcmVlKGJ1Zl9zdG9yZSlcbiAgfVxuICByZXR1cm4gbmV3IFRleHR1cmUyRChnbCwgdGV4LCBzaGFwZVswXSwgc2hhcGVbMV0sIGZvcm1hdCwgdHlwZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZTJEKGdsKSB7XG4gIGlmKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBNaXNzaW5nIGFyZ3VtZW50cyBmb3IgdGV4dHVyZTJkIGNvbnN0cnVjdG9yJylcbiAgfVxuICBpZighbGluZWFyVHlwZXMpIHtcbiAgICBsYXp5SW5pdExpbmVhclR5cGVzKGdsKVxuICB9XG4gIGlmKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVTaGFwZShnbCwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXXx8Z2wuUkdCQSwgYXJndW1lbnRzWzRdfHxnbC5VTlNJR05FRF9CWVRFKVxuICB9XG4gIGlmKEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzFdKSkge1xuICAgIHJldHVybiBjcmVhdGVUZXh0dXJlU2hhcGUoZ2wsIGFyZ3VtZW50c1sxXVswXXwwLCBhcmd1bWVudHNbMV1bMV18MCwgYXJndW1lbnRzWzJdfHxnbC5SR0JBLCBhcmd1bWVudHNbM118fGdsLlVOU0lHTkVEX0JZVEUpXG4gIH1cbiAgaWYodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzWzFdXG4gICAgaWYob2JqIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQgfHxcbiAgICAgICBvYmogaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8XG4gICAgICAgb2JqIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCB8fFxuICAgICAgIG9iaiBpbnN0YW5jZW9mIEltYWdlRGF0YSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVET00oZ2wsIG9iaiwgYXJndW1lbnRzWzJdfHxnbC5SR0JBLCBhcmd1bWVudHNbM118fGdsLlVOU0lHTkVEX0JZVEUpXG4gICAgfSBlbHNlIGlmKG9iai5zaGFwZSAmJiBvYmouZGF0YSAmJiBvYmouc3RyaWRlKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZUFycmF5KGdsLCBvYmopXG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIGFyZ3VtZW50cyBmb3IgdGV4dHVyZTJkIGNvbnN0cnVjdG9yJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gc2V0O1xuXG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cbmZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIG91dFsyXSA9IHpcbiAgICByZXR1cm4gb3V0XG59IiwibW9kdWxlLmV4cG9ydHMgPSBwcm9ncmFtaWZ5XG5cbnZhciBzaGFkZXIgPSByZXF1aXJlKCdnbC1zaGFkZXItY29yZScpXG5cbmZ1bmN0aW9uIHByb2dyYW1pZnkodmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGdsKSB7XG4gICAgcmV0dXJuIHNoYWRlcihnbCwgdmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gbm9vcFxuXG5mdW5jdGlvbiBub29wKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnWW91IHNob3VsZCBidW5kbGUgeW91ciBjb2RlICcgK1xuICAgICAgJ3VzaW5nIGBnbHNsaWZ5YCBhcyBhIHRyYW5zZm9ybS4nXG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcHJvZ3JhbWlmeVxuXG5mdW5jdGlvbiBwcm9ncmFtaWZ5KHZlcnRleCwgZnJhZ21lbnQsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiB7XG4gICAgdmVydGV4OiB2ZXJ0ZXgsIFxuICAgIGZyYWdtZW50OiBmcmFnbWVudCxcbiAgICB1bmlmb3JtczogdW5pZm9ybXMsIFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW1nO1xuXG5mdW5jdGlvbiBpbWcgKHNyYywgb3B0LCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gb3B0XG4gICAgb3B0ID0gbnVsbFxuICB9XG5cblxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdmFyIGxvY2tlZDtcblxuICBlbC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxvY2tlZCkgcmV0dXJuO1xuICAgIGxvY2tlZCA9IHRydWU7XG5cbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh1bmRlZmluZWQsIGVsKTtcbiAgfTtcblxuICBlbC5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChsb2NrZWQpIHJldHVybjtcbiAgICBsb2NrZWQgPSB0cnVlO1xuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobmV3IEVycm9yKCdVbmFibGUgdG8gbG9hZCBcIicgKyBzcmMgKyAnXCInKSwgZWwpO1xuICB9O1xuICBcbiAgaWYgKG9wdCAmJiBvcHQuY3Jvc3NPcmlnaW4pXG4gICAgZWwuY3Jvc3NPcmlnaW4gPSBvcHQuY3Jvc3NPcmlnaW47XG5cbiAgZWwuc3JjID0gc3JjO1xuXG4gIHJldHVybiBlbDtcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiZnVuY3Rpb24gbGVycCh2MCwgdjEsIHQpIHtcbiAgICByZXR1cm4gdjAqKDEtdCkrdjEqdFxufVxubW9kdWxlLmV4cG9ydHMgPSBsZXJwIiwidmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxuXG52YXIgZGVmYXVsdHMgPSB7XG5cdGVudW1lcmFibGU6IHRydWUsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufVxuXG5mdW5jdGlvbiBtaXgob2JqLCBlbnRyaWVzKSB7XG5cdGZvciAodmFyIGsgaW4gZW50cmllcykge1xuXHRcdGlmICghZW50cmllcy5oYXNPd25Qcm9wZXJ0eShrKSlcblx0XHRcdGNvbnRpbnVlXG5cdFx0dmFyIGYgPSBlbnRyaWVzW2tdXG5cdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRvYmpba10gPSBmXG5cdFx0fSBlbHNlIGlmIChmICYmIHR5cGVvZiBmID09PSAnb2JqZWN0Jykge1xuXHRcdFx0dmFyIGRlZiA9IHh0ZW5kKGRlZmF1bHRzLCBmKVxuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgaywgZGVmKTtcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtaXhlcyhjdG9yLCBlbnRyaWVzKSB7XG5cdG1peChjdG9yLnByb3RvdHlwZSwgZW50cmllcylcbn1cblxubW9kdWxlLmV4cG9ydHMubWl4ID0gbWl4IiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIGNvbXBpbGUgPSByZXF1aXJlKFwiY3dpc2UtY29tcGlsZXJcIilcblxudmFyIEVtcHR5UHJvYyA9IHtcbiAgYm9keTogXCJcIixcbiAgYXJnczogW10sXG4gIHRoaXNWYXJzOiBbXSxcbiAgbG9jYWxWYXJzOiBbXVxufVxuXG5mdW5jdGlvbiBmaXh1cCh4KSB7XG4gIGlmKCF4KSB7XG4gICAgcmV0dXJuIEVtcHR5UHJvY1xuICB9XG4gIGZvcih2YXIgaT0wOyBpPHguYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhID0geC5hcmdzW2ldXG4gICAgaWYoaSA9PT0gMCkge1xuICAgICAgeC5hcmdzW2ldID0ge25hbWU6IGEsIGx2YWx1ZTp0cnVlLCBydmFsdWU6ICEheC5ydmFsdWUsIGNvdW50OnguY291bnR8fDEgfVxuICAgIH0gZWxzZSB7XG4gICAgICB4LmFyZ3NbaV0gPSB7bmFtZTogYSwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6IDF9XG4gICAgfVxuICB9XG4gIGlmKCF4LnRoaXNWYXJzKSB7XG4gICAgeC50aGlzVmFycyA9IFtdXG4gIH1cbiAgaWYoIXgubG9jYWxWYXJzKSB7XG4gICAgeC5sb2NhbFZhcnMgPSBbXVxuICB9XG4gIHJldHVybiB4XG59XG5cbmZ1bmN0aW9uIHBjb21waWxlKHVzZXJfYXJncykge1xuICByZXR1cm4gY29tcGlsZSh7XG4gICAgYXJnczogICAgIHVzZXJfYXJncy5hcmdzLFxuICAgIHByZTogICAgICBmaXh1cCh1c2VyX2FyZ3MucHJlKSxcbiAgICBib2R5OiAgICAgZml4dXAodXNlcl9hcmdzLmJvZHkpLFxuICAgIHBvc3Q6ICAgICBmaXh1cCh1c2VyX2FyZ3MucHJvYyksXG4gICAgZnVuY05hbWU6IHVzZXJfYXJncy5mdW5jTmFtZVxuICB9KVxufVxuXG5mdW5jdGlvbiBtYWtlT3AodXNlcl9hcmdzKSB7XG4gIHZhciBhcmdzID0gW11cbiAgZm9yKHZhciBpPTA7IGk8dXNlcl9hcmdzLmFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICBhcmdzLnB1c2goXCJhXCIraSlcbiAgfVxuICB2YXIgd3JhcHBlciA9IG5ldyBGdW5jdGlvbihcIlBcIiwgW1xuICAgIFwicmV0dXJuIGZ1bmN0aW9uIFwiLCB1c2VyX2FyZ3MuZnVuY05hbWUsIFwiX25kYXJyYXlvcHMoXCIsIGFyZ3Muam9pbihcIixcIiksIFwiKSB7UChcIiwgYXJncy5qb2luKFwiLFwiKSwgXCIpO3JldHVybiBhMH1cIlxuICBdLmpvaW4oXCJcIikpXG4gIHJldHVybiB3cmFwcGVyKHBjb21waWxlKHVzZXJfYXJncykpXG59XG5cbnZhciBhc3NpZ25fb3BzID0ge1xuICBhZGQ6ICBcIitcIixcbiAgc3ViOiAgXCItXCIsXG4gIG11bDogIFwiKlwiLFxuICBkaXY6ICBcIi9cIixcbiAgbW9kOiAgXCIlXCIsXG4gIGJhbmQ6IFwiJlwiLFxuICBib3I6ICBcInxcIixcbiAgYnhvcjogXCJeXCIsXG4gIGxzaGlmdDogXCI8PFwiLFxuICByc2hpZnQ6IFwiPj5cIixcbiAgcnJzaGlmdDogXCI+Pj5cIlxufVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGlkIGluIGFzc2lnbl9vcHMpIHtcbiAgICB2YXIgb3AgPSBhc3NpZ25fb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLFxuICAgICAgICAgICAgIGJvZHk6IFwiYT1iXCIrb3ArXCJjXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYVwiK29wK1wiPWJcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJzXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkK1wic1wiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic2VxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhXCIrb3ArXCI9c1wifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNlcVwiXG4gICAgfSlcbiAgfVxufSkoKTtcblxudmFyIHVuYXJ5X29wcyA9IHtcbiAgbm90OiBcIiFcIixcbiAgYm5vdDogXCJ+XCIsXG4gIG5lZzogXCItXCIsXG4gIHJlY2lwOiBcIjEuMC9cIlxufVxuOyhmdW5jdGlvbigpe1xuICBmb3IodmFyIGlkIGluIHVuYXJ5X29wcykge1xuICAgIHZhciBvcCA9IHVuYXJ5X29wc1tpZF1cbiAgICBleHBvcnRzW2lkXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1cIitvcCtcImJcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9XCIrb3ArXCJhXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgY291bnQ6IDIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgfVxufSkoKTtcblxudmFyIGJpbmFyeV9vcHMgPSB7XG4gIGFuZDogXCImJlwiLFxuICBvcjogXCJ8fFwiLFxuICBlcTogXCI9PT1cIixcbiAgbmVxOiBcIiE9PVwiLFxuICBsdDogXCI8XCIsXG4gIGd0OiBcIj5cIixcbiAgbGVxOiBcIjw9XCIsXG4gIGdlcTogXCI+PVwiXG59XG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGlkIGluIGJpbmFyeV9vcHMpIHtcbiAgICB2YXIgb3AgPSBiaW5hcnlfb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiLCBcImNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YlwiK29wK1wiY1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiLCBcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YlwiK29wK1wic1wifSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1hXCIrb3ArXCJiXCJ9LFxuICAgICAgcnZhbHVlOnRydWUsXG4gICAgICBjb3VudDoyLFxuICAgICAgZnVuY05hbWU6IGlkK1wiZXFcIlxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcInNlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImE9YVwiK29wK1wic1wifSxcbiAgICAgIHJ2YWx1ZTp0cnVlLFxuICAgICAgY291bnQ6MixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcInNlcVwiXG4gICAgfSlcbiAgfVxufSkoKTtcblxudmFyIG1hdGhfdW5hcnkgPSBbXG4gIFwiYWJzXCIsXG4gIFwiYWNvc1wiLFxuICBcImFzaW5cIixcbiAgXCJhdGFuXCIsXG4gIFwiY2VpbFwiLFxuICBcImNvc1wiLFxuICBcImV4cFwiLFxuICBcImZsb29yXCIsXG4gIFwibG9nXCIsXG4gIFwicm91bmRcIixcbiAgXCJzaW5cIixcbiAgXCJzcXJ0XCIsXG4gIFwidGFuXCJcbl1cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaT0wOyBpPG1hdGhfdW5hcnkubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZiA9IG1hdGhfdW5hcnlbaV1cbiAgICBleHBvcnRzW2ZdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICAgICAgYXJnczogW1wiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6IFtcImFcIl0sIGJvZHk6XCJhPXRoaXNfZihhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcImVxXCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgfVxufSkoKTtcblxudmFyIG1hdGhfY29tbSA9IFtcbiAgXCJtYXhcIixcbiAgXCJtaW5cIixcbiAgXCJhdGFuMlwiLFxuICBcInBvd1wiXG5dXG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaT0wOyBpPG1hdGhfY29tbS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmPSBtYXRoX2NvbW1baV1cbiAgICBleHBvcnRzW2ZdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYixjKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGZcbiAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcInNcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYixjKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJzXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wiZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihhLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wiZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJzZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYSxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOnRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDoyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJzZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgfVxufSkoKTtcblxudmFyIG1hdGhfbm9uY29tbSA9IFtcbiAgXCJhdGFuMlwiLFxuICBcInBvd1wiXG5dXG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaT0wOyBpPG1hdGhfbm9uY29tbS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmPSBtYXRoX25vbmNvbW1baV1cbiAgICBleHBvcnRzW2YrXCJvcFwiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGMsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wib3BzXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiLFwiY1wiXSwgYm9keTpcImE9dGhpc19mKGMsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wib3BzXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wib3BlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIsYSlcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcGVxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wib3BzZXFcIl0gPSBtYWtlT3AoeyBhcmdzOltcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYixhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOnRydWUsXG4gICAgICAgICAgICAgICAgICBjb3VudDoyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcHNlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG5leHBvcnRzLmFueSA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwiaWYoYSl7cmV0dXJuIHRydWV9XCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIGZhbHNlXCJ9LFxuICBmdW5jTmFtZTogXCJhbnlcIlxufSlcblxuZXhwb3J0cy5hbGwgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcInhcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcImlmKCF4KXtyZXR1cm4gZmFsc2V9XCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIHRydWVcIn0sXG4gIGZ1bmNOYW1lOiBcImFsbFwiXG59KVxuXG5leHBvcnRzLnN1bSA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJ0aGlzX3MrPWFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcInN1bVwiXG59KVxuXG5leHBvcnRzLnByb2QgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MVwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwidGhpc19zKj1hXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJwcm9kXCJcbn0pXG5cbmV4cG9ydHMubm9ybTJzcXVhcmVkID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6Mn1dLCBib2R5OiBcInRoaXNfcys9YSphXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtMnNxdWFyZWRcIlxufSlcbiAgXG5leHBvcnRzLm5vcm0yID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6Mn1dLCBib2R5OiBcInRoaXNfcys9YSphXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gTWF0aC5zcXJ0KHRoaXNfcylcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0yXCJcbn0pXG4gIFxuXG5leHBvcnRzLm5vcm1pbmYgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDo0fV0sIGJvZHk6XCJpZigtYT50aGlzX3Mpe3RoaXNfcz0tYX1lbHNlIGlmKGE+dGhpc19zKXt0aGlzX3M9YX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm1pbmZcIlxufSlcblxuZXhwb3J0cy5ub3JtMSA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjN9XSwgYm9keTogXCJ0aGlzX3MrPWE8MD8tYTphXCIsIGxvY2FsVmFyczogW10sIHRoaXNWYXJzOiBbXCJ0aGlzX3NcIl19LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJyZXR1cm4gdGhpc19zXCJ9LFxuICBmdW5jTmFtZTogXCJub3JtMVwiXG59KVxuXG5leHBvcnRzLnN1cCA9IGNvbXBpbGUoe1xuICBhcmdzOiBbIFwiYXJyYXlcIiBdLFxuICBwcmU6XG4gICB7IGJvZHk6IFwidGhpc19oPS1JbmZpbml0eVwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIGJvZHk6XG4gICB7IGJvZHk6IFwiaWYoX2lubGluZV8xX2FyZzBfPnRoaXNfaCl0aGlzX2g9X2lubGluZV8xX2FyZzBfXCIsXG4gICAgIGFyZ3M6IFt7XCJuYW1lXCI6XCJfaW5saW5lXzFfYXJnMF9cIixcImx2YWx1ZVwiOmZhbHNlLFwicnZhbHVlXCI6dHJ1ZSxcImNvdW50XCI6Mn0gXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH0sXG4gIHBvc3Q6XG4gICB7IGJvZHk6IFwicmV0dXJuIHRoaXNfaFwiLFxuICAgICBhcmdzOiBbXSxcbiAgICAgdGhpc1ZhcnM6IFsgXCJ0aGlzX2hcIiBdLFxuICAgICBsb2NhbFZhcnM6IFtdIH1cbiB9KVxuXG5leHBvcnRzLmluZiA9IGNvbXBpbGUoe1xuICBhcmdzOiBbIFwiYXJyYXlcIiBdLFxuICBwcmU6XG4gICB7IGJvZHk6IFwidGhpc19oPUluZmluaXR5XCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgYm9keTpcbiAgIHsgYm9keTogXCJpZihfaW5saW5lXzFfYXJnMF88dGhpc19oKXRoaXNfaD1faW5saW5lXzFfYXJnMF9cIixcbiAgICAgYXJnczogW3tcIm5hbWVcIjpcIl9pbmxpbmVfMV9hcmcwX1wiLFwibHZhbHVlXCI6ZmFsc2UsXCJydmFsdWVcIjp0cnVlLFwiY291bnRcIjoyfSBdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgcG9zdDpcbiAgIHsgYm9keTogXCJyZXR1cm4gdGhpc19oXCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfVxuIH0pXG5cbmV4cG9ydHMuYXJnbWluID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiaW5kZXhcIixcImFycmF5XCIsXCJzaGFwZVwiXSxcbiAgcHJlOntcbiAgICBib2R5Olwie3RoaXNfdj1JbmZpbml0eTt0aGlzX2k9X2lubGluZV8wX2FyZzJfLnNsaWNlKDApfVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMl9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6MX1cbiAgICAgIF0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltdfSxcbiAgYm9keTp7XG4gICAgYm9keTpcIntpZihfaW5saW5lXzFfYXJnMV88dGhpc192KXt0aGlzX3Y9X2lubGluZV8xX2FyZzFfO2Zvcih2YXIgX2lubGluZV8xX2s9MDtfaW5saW5lXzFfazxfaW5saW5lXzFfYXJnMF8ubGVuZ3RoOysrX2lubGluZV8xX2spe3RoaXNfaVtfaW5saW5lXzFfa109X2lubGluZV8xX2FyZzBfW19pbmxpbmVfMV9rXX19fVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfV0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltcIl9pbmxpbmVfMV9rXCJdfSxcbiAgcG9zdDp7XG4gICAgYm9keTpcIntyZXR1cm4gdGhpc19pfVwiLFxuICAgIGFyZ3M6W10sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCJdLFxuICAgIGxvY2FsVmFyczpbXX1cbn0pXG5cbmV4cG9ydHMuYXJnbWF4ID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiaW5kZXhcIixcImFycmF5XCIsXCJzaGFwZVwiXSxcbiAgcHJlOntcbiAgICBib2R5Olwie3RoaXNfdj0tSW5maW5pdHk7dGhpc19pPV9pbmxpbmVfMF9hcmcyXy5zbGljZSgwKX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTpmYWxzZSxjb3VudDowfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8wX2FyZzJfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjF9XG4gICAgICBdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXX0sXG4gIGJvZHk6e1xuICAgIGJvZHk6XCJ7aWYoX2lubGluZV8xX2FyZzFfPnRoaXNfdil7dGhpc192PV9pbmxpbmVfMV9hcmcxXztmb3IodmFyIF9pbmxpbmVfMV9rPTA7X2lubGluZV8xX2s8X2lubGluZV8xX2FyZzBfLmxlbmd0aDsrK19pbmxpbmVfMV9rKXt0aGlzX2lbX2lubGluZV8xX2tdPV9pbmxpbmVfMV9hcmcwX1tfaW5saW5lXzFfa119fX1cIixcbiAgICBhcmdzOltcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzBfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn1dLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiLFwidGhpc192XCJdLFxuICAgIGxvY2FsVmFyczpbXCJfaW5saW5lXzFfa1wiXX0sXG4gIHBvc3Q6e1xuICAgIGJvZHk6XCJ7cmV0dXJuIHRoaXNfaX1cIixcbiAgICBhcmdzOltdLFxuICAgIHRoaXNWYXJzOltcInRoaXNfaVwiXSxcbiAgICBsb2NhbFZhcnM6W119XG59KSAgXG5cbmV4cG9ydHMucmFuZG9tID0gbWFrZU9wKHtcbiAgYXJnczogW1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5yYW5kb21cIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgYm9keToge2FyZ3M6IFtcImFcIl0sIGJvZHk6XCJhPXRoaXNfZigpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gIGZ1bmNOYW1lOiBcInJhbmRvbVwiXG59KVxuXG5leHBvcnRzLmFzc2lnbiA9IG1ha2VPcCh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sIGJvZHk6XCJhPWJcIn0sXG4gIGZ1bmNOYW1lOiBcImFzc2lnblwiIH0pXG5cbmV4cG9ydHMuYXNzaWducyA9IG1ha2VPcCh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLCBib2R5OlwiYT1iXCJ9LFxuICBmdW5jTmFtZTogXCJhc3NpZ25zXCIgfSlcblxuXG5leHBvcnRzLmVxdWFscyA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJ4XCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9LFxuICAgICAgICAgICAgICAge25hbWU6XCJ5XCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgXG4gICAgICAgIGJvZHk6IFwiaWYoeCE9PXkpe3JldHVybiBmYWxzZX1cIiwgXG4gICAgICAgIGxvY2FsVmFyczogW10sIFxuICAgICAgICB0aGlzVmFyczogW119LFxuICBwb3N0OiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXSwgYm9keTpcInJldHVybiB0cnVlXCJ9LFxuICBmdW5jTmFtZTogXCJlcXVhbHNcIlxufSlcblxuXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY3JlYXRlVGh1bmsgPSByZXF1aXJlKFwiLi9saWIvdGh1bmsuanNcIilcblxuZnVuY3Rpb24gUHJvY2VkdXJlKCkge1xuICB0aGlzLmFyZ1R5cGVzID0gW11cbiAgdGhpcy5zaGltQXJncyA9IFtdXG4gIHRoaXMuYXJyYXlBcmdzID0gW11cbiAgdGhpcy5zY2FsYXJBcmdzID0gW11cbiAgdGhpcy5vZmZzZXRBcmdzID0gW11cbiAgdGhpcy5vZmZzZXRBcmdJbmRleCA9IFtdXG4gIHRoaXMuaW5kZXhBcmdzID0gW11cbiAgdGhpcy5zaGFwZUFyZ3MgPSBbXVxuICB0aGlzLmZ1bmNOYW1lID0gXCJcIlxuICB0aGlzLnByZSA9IG51bGxcbiAgdGhpcy5ib2R5ID0gbnVsbFxuICB0aGlzLnBvc3QgPSBudWxsXG4gIHRoaXMuZGVidWcgPSBmYWxzZVxufVxuXG5mdW5jdGlvbiBjb21waWxlQ3dpc2UodXNlcl9hcmdzKSB7XG4gIC8vQ3JlYXRlIHByb2NlZHVyZVxuICB2YXIgcHJvYyA9IG5ldyBQcm9jZWR1cmUoKVxuICBcbiAgLy9QYXJzZSBibG9ja3NcbiAgcHJvYy5wcmUgICAgPSB1c2VyX2FyZ3MucHJlXG4gIHByb2MuYm9keSAgID0gdXNlcl9hcmdzLmJvZHlcbiAgcHJvYy5wb3N0ICAgPSB1c2VyX2FyZ3MucG9zdFxuXG4gIC8vUGFyc2UgYXJndW1lbnRzXG4gIHZhciBwcm9jX2FyZ3MgPSB1c2VyX2FyZ3MuYXJncy5zbGljZSgwKVxuICBwcm9jLmFyZ1R5cGVzID0gcHJvY19hcmdzXG4gIGZvcih2YXIgaT0wOyBpPHByb2NfYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBhcmdfdHlwZSA9IHByb2NfYXJnc1tpXVxuICAgIGlmKGFyZ190eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgIHByb2MuYXJyYXlBcmdzLnB1c2goaSlcbiAgICAgIHByb2Muc2hpbUFyZ3MucHVzaChcImFycmF5XCIgKyBpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0uY291bnQ+MCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgYXJnc1wiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MucG9zdC5hcmdzLmxlbmd0aCAmJiBwcm9jLnBvc3QuYXJnc1tpXS5jb3VudD4wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgYXJnc1wiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJzY2FsYXJcIikge1xuICAgICAgcHJvYy5zY2FsYXJBcmdzLnB1c2goaSlcbiAgICAgIHByb2Muc2hpbUFyZ3MucHVzaChcInNjYWxhclwiICsgaSlcbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwiaW5kZXhcIikge1xuICAgICAgcHJvYy5pbmRleEFyZ3MucHVzaChpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0uY291bnQgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBpbmRleFwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MuYm9keS5hcmdzLmxlbmd0aCAmJiBwcm9jLmJvZHkuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IGJvZHkoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmNvdW50ID4gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcInNoYXBlXCIpIHtcbiAgICAgIHByb2Muc2hhcGVBcmdzLnB1c2goaSlcbiAgICAgIGlmKGkgPCBwcm9jLnByZS5hcmdzLmxlbmd0aCAmJiBwcm9jLnByZS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcHJlKCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgICAgaWYoaSA8IHByb2MuYm9keS5hcmdzLmxlbmd0aCAmJiBwcm9jLmJvZHkuYXJnc1tpXS5sdmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IGJvZHkoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogcG9zdCgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYodHlwZW9mIGFyZ190eXBlID09PSBcIm9iamVjdFwiICYmIGFyZ190eXBlLm9mZnNldCkge1xuICAgICAgcHJvYy5hcmdUeXBlc1tpXSA9IFwib2Zmc2V0XCJcbiAgICAgIHByb2Mub2Zmc2V0QXJncy5wdXNoKHsgYXJyYXk6IGFyZ190eXBlLmFycmF5LCBvZmZzZXQ6YXJnX3R5cGUub2Zmc2V0IH0pXG4gICAgICBwcm9jLm9mZnNldEFyZ0luZGV4LnB1c2goaSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFVua25vd24gYXJndW1lbnQgdHlwZSBcIiArIHByb2NfYXJnc1tpXSlcbiAgICB9XG4gIH1cbiAgXG4gIC8vTWFrZSBzdXJlIGF0IGxlYXN0IG9uZSBhcnJheSBhcmd1bWVudCB3YXMgc3BlY2lmaWVkXG4gIGlmKHByb2MuYXJyYXlBcmdzLmxlbmd0aCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IE5vIGFycmF5IGFyZ3VtZW50cyBzcGVjaWZpZWRcIilcbiAgfVxuICBcbiAgLy9NYWtlIHN1cmUgYXJndW1lbnRzIGFyZSBjb3JyZWN0XG4gIGlmKHByb2MucHJlLmFyZ3MubGVuZ3RoID4gcHJvY19hcmdzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBUb28gbWFueSBhcmd1bWVudHMgaW4gcHJlKCkgYmxvY2tcIilcbiAgfVxuICBpZihwcm9jLmJvZHkuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBib2R5KCkgYmxvY2tcIilcbiAgfVxuICBpZihwcm9jLnBvc3QuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBwb3N0KCkgYmxvY2tcIilcbiAgfVxuXG4gIC8vQ2hlY2sgZGVidWcgZmxhZ1xuICBwcm9jLmRlYnVnID0gISF1c2VyX2FyZ3MucHJpbnRDb2RlIHx8ICEhdXNlcl9hcmdzLmRlYnVnXG4gIFxuICAvL1JldHJpZXZlIG5hbWVcbiAgcHJvYy5mdW5jTmFtZSA9IHVzZXJfYXJncy5mdW5jTmFtZSB8fCBcImN3aXNlXCJcbiAgXG4gIC8vUmVhZCBpbiBibG9jayBzaXplXG4gIHByb2MuYmxvY2tTaXplID0gdXNlcl9hcmdzLmJsb2NrU2l6ZSB8fCA2NFxuXG4gIHJldHVybiBjcmVhdGVUaHVuayhwcm9jKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBpbGVDd2lzZVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxudmFyIHVuaXEgPSByZXF1aXJlKFwidW5pcVwiKVxuXG5mdW5jdGlvbiBpbm5lckZpbGwob3JkZXIsIHByb2MsIGJvZHkpIHtcbiAgdmFyIGRpbWVuc2lvbiA9IG9yZGVyLmxlbmd0aFxuICAgICwgbmFyZ3MgPSBwcm9jLmFycmF5QXJncy5sZW5ndGhcbiAgICAsIGhhc19pbmRleCA9IHByb2MuaW5kZXhBcmdzLmxlbmd0aD4wXG4gICAgLCBjb2RlID0gW11cbiAgICAsIHZhcnMgPSBbXVxuICAgICwgaWR4PTAsIHBpZHg9MCwgaSwgalxuICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgdmFycy5wdXNoKFtcImlcIixpLFwiPTBcIl0uam9pbihcIlwiKSlcbiAgfVxuICAvL0NvbXB1dGUgc2NhbiBkZWx0YXNcbiAgZm9yKGo9MDsgajxuYXJnczsgKytqKSB7XG4gICAgZm9yKGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgcGlkeCA9IGlkeFxuICAgICAgaWR4ID0gb3JkZXJbaV1cbiAgICAgIGlmKGkgPT09IDApIHtcbiAgICAgICAgdmFycy5wdXNoKFtcImRcIixqLFwic1wiLGksXCI9dFwiLGosXCJwXCIsaWR4XS5qb2luKFwiXCIpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFycy5wdXNoKFtcImRcIixqLFwic1wiLGksXCI9KHRcIixqLFwicFwiLGlkeCxcIi1zXCIscGlkeCxcIip0XCIsaixcInBcIixwaWR4LFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICAvL1NjYW4gbG9vcFxuICBmb3IoaT1kaW1lbnNpb24tMTsgaT49MDsgLS1pKSB7XG4gICAgaWR4ID0gb3JkZXJbaV1cbiAgICBjb2RlLnB1c2goW1wiZm9yKGlcIixpLFwiPTA7aVwiLGksXCI8c1wiLGlkeCxcIjsrK2lcIixpLFwiKXtcIl0uam9pbihcIlwiKSlcbiAgfVxuICAvL1B1c2ggYm9keSBvZiBpbm5lciBsb29wXG4gIGNvZGUucHVzaChib2R5KVxuICAvL0FkdmFuY2Ugc2NhbiBwb2ludGVyc1xuICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgcGlkeCA9IGlkeFxuICAgIGlkeCA9IG9yZGVyW2ldXG4gICAgZm9yKGo9MDsgajxuYXJnczsgKytqKSB7XG4gICAgICBjb2RlLnB1c2goW1wicFwiLGosXCIrPWRcIixqLFwic1wiLGldLmpvaW4oXCJcIikpXG4gICAgfVxuICAgIGlmKGhhc19pbmRleCkge1xuICAgICAgaWYoaSA+IDApIHtcbiAgICAgICAgY29kZS5wdXNoKFtcImluZGV4W1wiLHBpZHgsXCJdLT1zXCIscGlkeF0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICAgIGNvZGUucHVzaChbXCIrK2luZGV4W1wiLGlkeCxcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFwifVwiKVxuICB9XG4gIHJldHVybiBjb2RlLmpvaW4oXCJcXG5cIilcbn1cblxuZnVuY3Rpb24gb3V0ZXJGaWxsKG1hdGNoZWQsIG9yZGVyLCBwcm9jLCBib2R5KSB7XG4gIHZhciBkaW1lbnNpb24gPSBvcmRlci5sZW5ndGhcbiAgICAsIG5hcmdzID0gcHJvYy5hcnJheUFyZ3MubGVuZ3RoXG4gICAgLCBibG9ja1NpemUgPSBwcm9jLmJsb2NrU2l6ZVxuICAgICwgaGFzX2luZGV4ID0gcHJvYy5pbmRleEFyZ3MubGVuZ3RoID4gMFxuICAgICwgY29kZSA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPG5hcmdzOyArK2kpIHtcbiAgICBjb2RlLnB1c2goW1widmFyIG9mZnNldFwiLGksXCI9cFwiLGldLmpvaW4oXCJcIikpXG4gIH1cbiAgLy9HZW5lcmF0ZSBtYXRjaGVkIGxvb3BzXG4gIGZvcih2YXIgaT1tYXRjaGVkOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFtcImZvcih2YXIgalwiK2krXCI9U1NbXCIsIG9yZGVyW2ldLCBcIl18MDtqXCIsIGksIFwiPjA7KXtcIl0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wiaWYoalwiLGksXCI8XCIsYmxvY2tTaXplLFwiKXtcIl0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wic1wiLG9yZGVyW2ldLFwiPWpcIixpXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJqXCIsaSxcIj0wXCJdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcIn1lbHNle3NcIixvcmRlcltpXSxcIj1cIixibG9ja1NpemVdLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcImpcIixpLFwiLT1cIixibG9ja1NpemUsXCJ9XCJdLmpvaW4oXCJcIikpXG4gICAgaWYoaGFzX2luZGV4KSB7XG4gICAgICBjb2RlLnB1c2goW1wiaW5kZXhbXCIsb3JkZXJbaV0sXCJdPWpcIixpXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgfVxuICBmb3IodmFyIGk9MDsgaTxuYXJnczsgKytpKSB7XG4gICAgdmFyIGluZGV4U3RyID0gW1wib2Zmc2V0XCIraV1cbiAgICBmb3IodmFyIGo9bWF0Y2hlZDsgajxkaW1lbnNpb247ICsraikge1xuICAgICAgaW5kZXhTdHIucHVzaChbXCJqXCIsaixcIip0XCIsaSxcInBcIixvcmRlcltqXV0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgY29kZS5wdXNoKFtcInBcIixpLFwiPShcIixpbmRleFN0ci5qb2luKFwiK1wiKSxcIilcIl0uam9pbihcIlwiKSlcbiAgfVxuICBjb2RlLnB1c2goaW5uZXJGaWxsKG9yZGVyLCBwcm9jLCBib2R5KSlcbiAgZm9yKHZhciBpPW1hdGNoZWQ7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJ9XCIpXG4gIH1cbiAgcmV0dXJuIGNvZGUuam9pbihcIlxcblwiKVxufVxuXG4vL0NvdW50IHRoZSBudW1iZXIgb2YgY29tcGF0aWJsZSBpbm5lciBvcmRlcnNcbmZ1bmN0aW9uIGNvdW50TWF0Y2hlcyhvcmRlcnMpIHtcbiAgdmFyIG1hdGNoZWQgPSAwLCBkaW1lbnNpb24gPSBvcmRlcnNbMF0ubGVuZ3RoXG4gIHdoaWxlKG1hdGNoZWQgPCBkaW1lbnNpb24pIHtcbiAgICBmb3IodmFyIGo9MTsgajxvcmRlcnMubGVuZ3RoOyArK2opIHtcbiAgICAgIGlmKG9yZGVyc1tqXVttYXRjaGVkXSAhPT0gb3JkZXJzWzBdW21hdGNoZWRdKSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVkXG4gICAgICB9XG4gICAgfVxuICAgICsrbWF0Y2hlZFxuICB9XG4gIHJldHVybiBtYXRjaGVkXG59XG5cbi8vUHJvY2Vzc2VzIGEgYmxvY2sgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBkYXRhIHR5cGVzXG5mdW5jdGlvbiBwcm9jZXNzQmxvY2soYmxvY2ssIHByb2MsIGR0eXBlcykge1xuICB2YXIgY29kZSA9IGJsb2NrLmJvZHlcbiAgdmFyIHByZSA9IFtdXG4gIHZhciBwb3N0ID0gW11cbiAgZm9yKHZhciBpPTA7IGk8YmxvY2suYXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBjYXJnID0gYmxvY2suYXJnc1tpXVxuICAgIGlmKGNhcmcuY291bnQgPD0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChjYXJnLm5hbWUsIFwiZ1wiKVxuICAgIHZhciBwdHJTdHIgPSBcIlwiXG4gICAgdmFyIGFyck51bSA9IHByb2MuYXJyYXlBcmdzLmluZGV4T2YoaSlcbiAgICBzd2l0Y2gocHJvYy5hcmdUeXBlc1tpXSkge1xuICAgICAgY2FzZSBcIm9mZnNldFwiOlxuICAgICAgICB2YXIgb2ZmQXJnSW5kZXggPSBwcm9jLm9mZnNldEFyZ0luZGV4LmluZGV4T2YoaSlcbiAgICAgICAgdmFyIG9mZkFyZyA9IHByb2Mub2Zmc2V0QXJnc1tvZmZBcmdJbmRleF1cbiAgICAgICAgYXJyTnVtID0gb2ZmQXJnLmFycmF5XG4gICAgICAgIHB0clN0ciA9IFwiK3FcIiArIG9mZkFyZ0luZGV4XG4gICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgcHRyU3RyID0gXCJwXCIgKyBhcnJOdW0gKyBwdHJTdHJcbiAgICAgICAgdmFyIGxvY2FsU3RyID0gXCJsXCIgKyBpXG4gICAgICAgIHZhciBhcnJTdHIgPSBcImFcIiArIGFyck51bVxuICAgICAgICBpZihjYXJnLmNvdW50ID09PSAxKSB7XG4gICAgICAgICAgaWYoZHR5cGVzW2Fyck51bV0gPT09IFwiZ2VuZXJpY1wiKSB7XG4gICAgICAgICAgICBpZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCIuc2V0KFwiLCBwdHJTdHIsIFwiLFwiLCBsb2NhbFN0cixcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFthcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgW2FyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoZHR5cGVzW2Fyck51bV0gPT09IFwiZ2VuZXJpY1wiKSB7XG4gICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIGxvY2FsU3RyKVxuICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICBwb3N0LnB1c2goW2FyclN0ciwgXCIuc2V0KFwiLCBwdHJTdHIsIFwiLFwiLCBsb2NhbFN0cixcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJlLnB1c2goW1widmFyIFwiLCBsb2NhbFN0ciwgXCI9XCIsIGFyclN0ciwgXCJbXCIsIHB0clN0ciwgXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl09XCIsIGxvY2FsU3RyXS5qb2luKFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzY2FsYXJcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJZXCIgKyBwcm9jLnNjYWxhckFyZ3MuaW5kZXhPZihpKSlcbiAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiaW5kZXhcIjpcbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgXCJpbmRleFwiKVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJzaGFwZVwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcInNoYXBlXCIpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gW3ByZS5qb2luKFwiXFxuXCIpLCBjb2RlLCBwb3N0LmpvaW4oXCJcXG5cIildLmpvaW4oXCJcXG5cIikudHJpbSgpXG59XG5cbmZ1bmN0aW9uIHR5cGVTdW1tYXJ5KGR0eXBlcykge1xuICB2YXIgc3VtbWFyeSA9IG5ldyBBcnJheShkdHlwZXMubGVuZ3RoKVxuICB2YXIgYWxsRXF1YWwgPSB0cnVlXG4gIGZvcih2YXIgaT0wOyBpPGR0eXBlcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciB0ID0gZHR5cGVzW2ldXG4gICAgdmFyIGRpZ2l0cyA9IHQubWF0Y2goL1xcZCsvKVxuICAgIGlmKCFkaWdpdHMpIHtcbiAgICAgIGRpZ2l0cyA9IFwiXCJcbiAgICB9IGVsc2Uge1xuICAgICAgZGlnaXRzID0gZGlnaXRzWzBdXG4gICAgfVxuICAgIGlmKHQuY2hhckF0KDApID09PSAwKSB7XG4gICAgICBzdW1tYXJ5W2ldID0gXCJ1XCIgKyB0LmNoYXJBdCgxKSArIGRpZ2l0c1xuICAgIH0gZWxzZSB7XG4gICAgICBzdW1tYXJ5W2ldID0gdC5jaGFyQXQoMCkgKyBkaWdpdHNcbiAgICB9XG4gICAgaWYoaSA+IDApIHtcbiAgICAgIGFsbEVxdWFsID0gYWxsRXF1YWwgJiYgc3VtbWFyeVtpXSA9PT0gc3VtbWFyeVtpLTFdXG4gICAgfVxuICB9XG4gIGlmKGFsbEVxdWFsKSB7XG4gICAgcmV0dXJuIHN1bW1hcnlbMF1cbiAgfVxuICByZXR1cm4gc3VtbWFyeS5qb2luKFwiXCIpXG59XG5cbi8vR2VuZXJhdGVzIGEgY3dpc2Ugb3BlcmF0b3JcbmZ1bmN0aW9uIGdlbmVyYXRlQ1dpc2VPcChwcm9jLCB0eXBlc2lnKSB7XG5cbiAgLy9Db21wdXRlIGRpbWVuc2lvblxuICB2YXIgZGltZW5zaW9uID0gdHlwZXNpZ1sxXS5sZW5ndGh8MFxuICB2YXIgb3JkZXJzID0gbmV3IEFycmF5KHByb2MuYXJyYXlBcmdzLmxlbmd0aClcbiAgdmFyIGR0eXBlcyA9IG5ldyBBcnJheShwcm9jLmFycmF5QXJncy5sZW5ndGgpXG5cbiAgLy9GaXJzdCBjcmVhdGUgYXJndW1lbnRzIGZvciBwcm9jZWR1cmVcbiAgdmFyIGFyZ2xpc3QgPSBbXCJTU1wiXVxuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiXVxuICB2YXIgdmFycyA9IFtdXG4gIFxuICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikge1xuICAgIHZhcnMucHVzaChbXCJzXCIsIGosIFwiPVNTW1wiLCBqLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgfVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ2xpc3QucHVzaChcImFcIitpKVxuICAgIGFyZ2xpc3QucHVzaChcInRcIitpKVxuICAgIGFyZ2xpc3QucHVzaChcInBcIitpKVxuICAgIGR0eXBlc1tpXSA9IHR5cGVzaWdbMippXVxuICAgIG9yZGVyc1tpXSA9IHR5cGVzaWdbMippKzFdXG4gICAgXG4gICAgZm9yKHZhciBqPTA7IGo8ZGltZW5zaW9uOyArK2opIHtcbiAgICAgIHZhcnMucHVzaChbXCJ0XCIsaSxcInBcIixqLFwiPXRcIixpLFwiW1wiLGosXCJdXCJdLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Muc2NhbGFyQXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ2xpc3QucHVzaChcIllcIiArIGkpXG4gIH1cbiAgaWYocHJvYy5zaGFwZUFyZ3MubGVuZ3RoID4gMCkge1xuICAgIHZhcnMucHVzaChcInNoYXBlPVNTLnNsaWNlKDApXCIpXG4gIH1cbiAgaWYocHJvYy5pbmRleEFyZ3MubGVuZ3RoID4gMCkge1xuICAgIHZhciB6ZXJvcyA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gICAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICAgIHplcm9zW2ldID0gXCIwXCJcbiAgICB9XG4gICAgdmFycy5wdXNoKFtcImluZGV4PVtcIiwgemVyb3Muam9pbihcIixcIiksIFwiXVwiXS5qb2luKFwiXCIpKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Mub2Zmc2V0QXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBvZmZfYXJnID0gcHJvYy5vZmZzZXRBcmdzW2ldXG4gICAgdmFyIGluaXRfc3RyaW5nID0gW11cbiAgICBmb3IodmFyIGo9MDsgajxvZmZfYXJnLm9mZnNldC5sZW5ndGg7ICsraikge1xuICAgICAgaWYob2ZmX2FyZy5vZmZzZXRbal0gPT09IDApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH0gZWxzZSBpZihvZmZfYXJnLm9mZnNldFtqXSA9PT0gMSkge1xuICAgICAgICBpbml0X3N0cmluZy5wdXNoKFtcInRcIiwgb2ZmX2FyZy5hcnJheSwgXCJwXCIsIGpdLmpvaW4oXCJcIikpICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0X3N0cmluZy5wdXNoKFtvZmZfYXJnLm9mZnNldFtqXSwgXCIqdFwiLCBvZmZfYXJnLmFycmF5LCBcInBcIiwgal0uam9pbihcIlwiKSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoaW5pdF9zdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXJzLnB1c2goXCJxXCIgKyBpICsgXCI9MFwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXJzLnB1c2goW1wicVwiLCBpLCBcIj1cIiwgaW5pdF9zdHJpbmcuam9pbihcIitcIildLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG5cbiAgLy9QcmVwYXJlIHRoaXMgdmFyaWFibGVzXG4gIHZhciB0aGlzVmFycyA9IHVuaXEoW10uY29uY2F0KHByb2MucHJlLnRoaXNWYXJzKVxuICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocHJvYy5ib2R5LnRoaXNWYXJzKVxuICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQocHJvYy5wb3N0LnRoaXNWYXJzKSlcbiAgdmFycyA9IHZhcnMuY29uY2F0KHRoaXNWYXJzKVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIGNvZGUucHVzaChcInBcIitpK1wifD0wXCIpXG4gIH1cbiAgXG4gIC8vSW5saW5lIHByZWx1ZGVcbiAgaWYocHJvYy5wcmUuYm9keS5sZW5ndGggPiAzKSB7XG4gICAgY29kZS5wdXNoKHByb2Nlc3NCbG9jayhwcm9jLnByZSwgcHJvYywgZHR5cGVzKSlcbiAgfVxuXG4gIC8vUHJvY2VzcyBib2R5XG4gIHZhciBib2R5ID0gcHJvY2Vzc0Jsb2NrKHByb2MuYm9keSwgcHJvYywgZHR5cGVzKVxuICB2YXIgbWF0Y2hlZCA9IGNvdW50TWF0Y2hlcyhvcmRlcnMpXG4gIGlmKG1hdGNoZWQgPCBkaW1lbnNpb24pIHtcbiAgICBjb2RlLnB1c2gob3V0ZXJGaWxsKG1hdGNoZWQsIG9yZGVyc1swXSwgcHJvYywgYm9keSkpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKGlubmVyRmlsbChvcmRlcnNbMF0sIHByb2MsIGJvZHkpKVxuICB9XG5cbiAgLy9JbmxpbmUgZXBpbG9nXG4gIGlmKHByb2MucG9zdC5ib2R5Lmxlbmd0aCA+IDMpIHtcbiAgICBjb2RlLnB1c2gocHJvY2Vzc0Jsb2NrKHByb2MucG9zdCwgcHJvYywgZHR5cGVzKSlcbiAgfVxuICBcbiAgaWYocHJvYy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGN3aXNlIHJvdXRpbmUgZm9yIFwiLCB0eXBlc2lnLCBcIjpcXG5cXG5cIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICB9XG4gIFxuICB2YXIgbG9vcE5hbWUgPSBbKHByb2MuZnVuY05hbWV8fFwidW5uYW1lZFwiKSwgXCJfY3dpc2VfbG9vcF9cIiwgb3JkZXJzWzBdLmpvaW4oXCJzXCIpLFwibVwiLG1hdGNoZWQsdHlwZVN1bW1hcnkoZHR5cGVzKV0uam9pbihcIlwiKVxuICB2YXIgZiA9IG5ldyBGdW5jdGlvbihbXCJmdW5jdGlvbiBcIixsb29wTmFtZSxcIihcIiwgYXJnbGlzdC5qb2luKFwiLFwiKSxcIil7XCIsIGNvZGUuam9pbihcIlxcblwiKSxcIn0gcmV0dXJuIFwiLCBsb29wTmFtZV0uam9pbihcIlwiKSlcbiAgcmV0dXJuIGYoKVxufVxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZUNXaXNlT3AiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY29tcGlsZSA9IHJlcXVpcmUoXCIuL2NvbXBpbGUuanNcIilcblxuZnVuY3Rpb24gY3JlYXRlVGh1bmsocHJvYykge1xuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiLCBcInZhciBDQUNIRUQ9e31cIl1cbiAgdmFyIHZhcnMgPSBbXVxuICB2YXIgdGh1bmtOYW1lID0gcHJvYy5mdW5jTmFtZSArIFwiX2N3aXNlX3RodW5rXCJcbiAgXG4gIC8vQnVpbGQgdGh1bmtcbiAgY29kZS5wdXNoKFtcInJldHVybiBmdW5jdGlvbiBcIiwgdGh1bmtOYW1lLCBcIihcIiwgcHJvYy5zaGltQXJncy5qb2luKFwiLFwiKSwgXCIpe1wiXS5qb2luKFwiXCIpKVxuICB2YXIgdHlwZXNpZyA9IFtdXG4gIHZhciBzdHJpbmdfdHlwZXNpZyA9IFtdXG4gIHZhciBwcm9jX2FyZ3MgPSBbW1wiYXJyYXlcIixwcm9jLmFycmF5QXJnc1swXSxcIi5zaGFwZVwiXS5qb2luKFwiXCIpXVxuICBmb3IodmFyIGk9MDsgaTxwcm9jLmFycmF5QXJncy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBqID0gcHJvYy5hcnJheUFyZ3NbaV1cbiAgICB2YXJzLnB1c2goW1widFwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5kdHlwZSxcIixcbiAgICAgICAgICAgICAgIFwiclwiLCBqLCBcIj1hcnJheVwiLCBqLCBcIi5vcmRlclwiXS5qb2luKFwiXCIpKVxuICAgIHR5cGVzaWcucHVzaChcInRcIiArIGopXG4gICAgdHlwZXNpZy5wdXNoKFwiclwiICsgailcbiAgICBzdHJpbmdfdHlwZXNpZy5wdXNoKFwidFwiK2opXG4gICAgc3RyaW5nX3R5cGVzaWcucHVzaChcInJcIitqK1wiLmpvaW4oKVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5kYXRhXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLnN0cmlkZVwiKVxuICAgIHByb2NfYXJncy5wdXNoKFwiYXJyYXlcIiArIGogKyBcIi5vZmZzZXR8MFwiKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2Muc2NhbGFyQXJncy5sZW5ndGg7ICsraSkge1xuICAgIHByb2NfYXJncy5wdXNoKFwic2NhbGFyXCIgKyBwcm9jLnNjYWxhckFyZ3NbaV0pXG4gIH1cbiAgdmFycy5wdXNoKFtcInR5cGU9W1wiLCBzdHJpbmdfdHlwZXNpZy5qb2luKFwiLFwiKSwgXCJdLmpvaW4oKVwiXS5qb2luKFwiXCIpKVxuICB2YXJzLnB1c2goXCJwcm9jPUNBQ0hFRFt0eXBlXVwiKVxuICBjb2RlLnB1c2goXCJ2YXIgXCIgKyB2YXJzLmpvaW4oXCIsXCIpKVxuICBcbiAgY29kZS5wdXNoKFtcImlmKCFwcm9jKXtcIixcbiAgICAgICAgICAgICBcIkNBQ0hFRFt0eXBlXT1wcm9jPWNvbXBpbGUoW1wiLCB0eXBlc2lnLmpvaW4oXCIsXCIpLCBcIl0pfVwiLFxuICAgICAgICAgICAgIFwicmV0dXJuIHByb2MoXCIsIHByb2NfYXJncy5qb2luKFwiLFwiKSwgXCIpfVwiXS5qb2luKFwiXCIpKVxuXG4gIGlmKHByb2MuZGVidWcpIHtcbiAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCB0aHVuazpcIiwgY29kZS5qb2luKFwiXFxuXCIpKVxuICB9XG4gIFxuICAvL0NvbXBpbGUgdGh1bmtcbiAgdmFyIHRodW5rID0gbmV3IEZ1bmN0aW9uKFwiY29tcGlsZVwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIHJldHVybiB0aHVuayhjb21waWxlLmJpbmQodW5kZWZpbmVkLCBwcm9jKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVUaHVua1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gdW5pcXVlX3ByZWQobGlzdCwgY29tcGFyZSkge1xuICB2YXIgcHRyID0gMVxuICAgICwgbGVuID0gbGlzdC5sZW5ndGhcbiAgICAsIGE9bGlzdFswXSwgYj1saXN0WzBdXG4gIGZvcih2YXIgaT0xOyBpPGxlbjsgKytpKSB7XG4gICAgYiA9IGFcbiAgICBhID0gbGlzdFtpXVxuICAgIGlmKGNvbXBhcmUoYSwgYikpIHtcbiAgICAgIGlmKGkgPT09IHB0cikge1xuICAgICAgICBwdHIrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGlzdFtwdHIrK10gPSBhXG4gICAgfVxuICB9XG4gIGxpc3QubGVuZ3RoID0gcHRyXG4gIHJldHVybiBsaXN0XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZV9lcShsaXN0KSB7XG4gIHZhciBwdHIgPSAxXG4gICAgLCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgICwgYT1saXN0WzBdLCBiID0gbGlzdFswXVxuICBmb3IodmFyIGk9MTsgaTxsZW47ICsraSwgYj1hKSB7XG4gICAgYiA9IGFcbiAgICBhID0gbGlzdFtpXVxuICAgIGlmKGEgIT09IGIpIHtcbiAgICAgIGlmKGkgPT09IHB0cikge1xuICAgICAgICBwdHIrK1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgbGlzdFtwdHIrK10gPSBhXG4gICAgfVxuICB9XG4gIGxpc3QubGVuZ3RoID0gcHRyXG4gIHJldHVybiBsaXN0XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZShsaXN0LCBjb21wYXJlLCBzb3J0ZWQpIHtcbiAgaWYobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIGlmKGNvbXBhcmUpIHtcbiAgICBpZighc29ydGVkKSB7XG4gICAgICBsaXN0LnNvcnQoY29tcGFyZSlcbiAgICB9XG4gICAgcmV0dXJuIHVuaXF1ZV9wcmVkKGxpc3QsIGNvbXBhcmUpXG4gIH1cbiAgaWYoIXNvcnRlZCkge1xuICAgIGxpc3Quc29ydCgpXG4gIH1cbiAgcmV0dXJuIHVuaXF1ZV9lcShsaXN0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXF1ZVxuIiwidmFyIGlvdGEgPSByZXF1aXJlKFwiaW90YS1hcnJheVwiKVxuXG52YXIgaGFzVHlwZWRBcnJheXMgID0gKCh0eXBlb2YgRmxvYXQ2NEFycmF5KSAhPT0gXCJ1bmRlZmluZWRcIilcbnZhciBoYXNCdWZmZXIgICAgICAgPSAoKHR5cGVvZiBCdWZmZXIpICE9PSBcInVuZGVmaW5lZFwiKVxuXG5mdW5jdGlvbiBjb21wYXJlMXN0KGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gLSBiWzBdXG59XG5cbmZ1bmN0aW9uIG9yZGVyKCkge1xuICB2YXIgc3RyaWRlID0gdGhpcy5zdHJpZGVcbiAgdmFyIHRlcm1zID0gbmV3IEFycmF5KHN0cmlkZS5sZW5ndGgpXG4gIHZhciBpXG4gIGZvcihpPTA7IGk8dGVybXMubGVuZ3RoOyArK2kpIHtcbiAgICB0ZXJtc1tpXSA9IFtNYXRoLmFicyhzdHJpZGVbaV0pLCBpXVxuICB9XG4gIHRlcm1zLnNvcnQoY29tcGFyZTFzdClcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0ZXJtcy5sZW5ndGgpXG4gIGZvcihpPTA7IGk8cmVzdWx0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gdGVybXNbaV1bMV1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVDb25zdHJ1Y3RvcihkdHlwZSwgZGltZW5zaW9uKSB7XG4gIHZhciBjbGFzc05hbWUgPSBbXCJWaWV3XCIsIGRpbWVuc2lvbiwgXCJkXCIsIGR0eXBlXS5qb2luKFwiXCIpXG4gIGlmKGRpbWVuc2lvbiA8IDApIHtcbiAgICBjbGFzc05hbWUgPSBcIlZpZXdfTmlsXCIgKyBkdHlwZVxuICB9XG4gIHZhciB1c2VHZXR0ZXJzID0gKGR0eXBlID09PSBcImdlbmVyaWNcIilcbiAgXG4gIGlmKGRpbWVuc2lvbiA9PT0gLTEpIHtcbiAgICAvL1NwZWNpYWwgY2FzZSBmb3IgdHJpdmlhbCBhcnJheXNcbiAgICB2YXIgY29kZSA9IFxuICAgICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSl7dGhpcy5kYXRhPWE7fTtcXFxudmFyIHByb3RvPVwiK2NsYXNzTmFtZStcIi5wcm90b3R5cGU7XFxcbnByb3RvLmR0eXBlPSdcIitkdHlwZStcIic7XFxcbnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIC0xfTtcXFxucHJvdG8uc2l6ZT0wO1xcXG5wcm90by5kaW1lbnNpb249LTE7XFxcbnByb3RvLnNoYXBlPXByb3RvLnN0cmlkZT1wcm90by5vcmRlcj1bXTtcXFxucHJvdG8ubG89cHJvdG8uaGk9cHJvdG8udHJhbnNwb3NlPXByb3RvLnN0ZXA9XFxcbmZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhKTt9O1xcXG5wcm90by5nZXQ9cHJvdG8uc2V0PWZ1bmN0aW9uKCl7fTtcXFxucHJvdG8ucGljaz1mdW5jdGlvbigpe3JldHVybiBudWxsfTtcXFxucmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF9cIitjbGFzc05hbWUrXCIoYSl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoYSk7fVwiXG4gICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihjb2RlKVxuICAgIHJldHVybiBwcm9jZWR1cmUoKVxuICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAwKSB7XG4gICAgLy9TcGVjaWFsIGNhc2UgZm9yIDBkIGFycmF5c1xuICAgIHZhciBjb2RlID1cbiAgICAgIFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiKGEsZCkge1xcXG50aGlzLmRhdGEgPSBhO1xcXG50aGlzLm9mZnNldCA9IGRcXFxufTtcXFxudmFyIHByb3RvPVwiK2NsYXNzTmFtZStcIi5wcm90b3R5cGU7XFxcbnByb3RvLmR0eXBlPSdcIitkdHlwZStcIic7XFxcbnByb3RvLmluZGV4PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub2Zmc2V0fTtcXFxucHJvdG8uZGltZW5zaW9uPTA7XFxcbnByb3RvLnNpemU9MTtcXFxucHJvdG8uc2hhcGU9XFxcbnByb3RvLnN0cmlkZT1cXFxucHJvdG8ub3JkZXI9W107XFxcbnByb3RvLmxvPVxcXG5wcm90by5oaT1cXFxucHJvdG8udHJhbnNwb3NlPVxcXG5wcm90by5zdGVwPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9jb3B5KCkge1xcXG5yZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsdGhpcy5vZmZzZXQpXFxcbn07XFxcbnByb3RvLnBpY2s9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3BpY2soKXtcXFxucmV0dXJuIFRyaXZpYWxBcnJheSh0aGlzLmRhdGEpO1xcXG59O1xcXG5wcm90by52YWx1ZU9mPXByb3RvLmdldD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfZ2V0KCl7XFxcbnJldHVybiBcIisodXNlR2V0dGVycyA/IFwidGhpcy5kYXRhLmdldCh0aGlzLm9mZnNldClcIiA6IFwidGhpcy5kYXRhW3RoaXMub2Zmc2V0XVwiKStcblwifTtcXFxucHJvdG8uc2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zZXQodil7XFxcbnJldHVybiBcIisodXNlR2V0dGVycyA/IFwidGhpcy5kYXRhLnNldCh0aGlzLm9mZnNldCx2KVwiIDogXCJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdPXZcIikrXCJcXFxufTtcXFxucmV0dXJuIGZ1bmN0aW9uIGNvbnN0cnVjdF9cIitjbGFzc05hbWUrXCIoYSxiLGMsZCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoYSxkKX1cIlxuICAgIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oXCJUcml2aWFsQXJyYXlcIiwgY29kZSlcbiAgICByZXR1cm4gcHJvY2VkdXJlKENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdWzBdKVxuICB9XG5cbiAgdmFyIGNvZGUgPSBbXCIndXNlIHN0cmljdCdcIl1cbiAgICBcbiAgLy9DcmVhdGUgY29uc3RydWN0b3IgZm9yIHZpZXdcbiAgdmFyIGluZGljZXMgPSBpb3RhKGRpbWVuc2lvbilcbiAgdmFyIGFyZ3MgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImlcIitpIH0pXG4gIHZhciBpbmRleF9zdHIgPSBcInRoaXMub2Zmc2V0K1wiICsgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgICByZXR1cm4gXCJ0aGlzLnN0cmlkZVtcIiArIGkgKyBcIl0qaVwiICsgaVxuICAgICAgfSkuam9pbihcIitcIilcbiAgdmFyIHNoYXBlQXJnID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiK2lcbiAgICB9KS5qb2luKFwiLFwiKVxuICB2YXIgc3RyaWRlQXJnID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKVxuICBjb2RlLnB1c2goXG4gICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSxcIiArIHNoYXBlQXJnICsgXCIsXCIgKyBzdHJpZGVBcmcgKyBcIixkKXt0aGlzLmRhdGE9YVwiLFxuICAgICAgXCJ0aGlzLnNoYXBlPVtcIiArIHNoYXBlQXJnICsgXCJdXCIsXG4gICAgICBcInRoaXMuc3RyaWRlPVtcIiArIHN0cmlkZUFyZyArIFwiXVwiLFxuICAgICAgXCJ0aGlzLm9mZnNldD1kfDB9XCIsXG4gICAgXCJ2YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZVwiLFxuICAgIFwicHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJ1wiLFxuICAgIFwicHJvdG8uZGltZW5zaW9uPVwiK2RpbWVuc2lvbilcbiAgXG4gIC8vdmlldy5zaXplOlxuICBjb2RlLnB1c2goXCJPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sJ3NpemUnLHtnZXQ6ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NpemUoKXtcXFxucmV0dXJuIFwiK2luZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwidGhpcy5zaGFwZVtcIitpK1wiXVwiIH0pLmpvaW4oXCIqXCIpLFxuXCJ9fSlcIilcblxuICAvL3ZpZXcub3JkZXI6XG4gIGlmKGRpbWVuc2lvbiA9PT0gMSkge1xuICAgIGNvZGUucHVzaChcInByb3RvLm9yZGVyPVswXVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnb3JkZXInLHtnZXQ6XCIpXG4gICAgaWYoZGltZW5zaW9uIDwgNCkge1xuICAgICAgY29kZS5wdXNoKFwiZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX29yZGVyKCl7XCIpXG4gICAgICBpZihkaW1lbnNpb24gPT09IDIpIHtcbiAgICAgICAgY29kZS5wdXNoKFwicmV0dXJuIChNYXRoLmFicyh0aGlzLnN0cmlkZVswXSk+TWF0aC5hYnModGhpcy5zdHJpZGVbMV0pKT9bMSwwXTpbMCwxXX19KVwiKVxuICAgICAgfSBlbHNlIGlmKGRpbWVuc2lvbiA9PT0gMykge1xuICAgICAgICBjb2RlLnB1c2goXG5cInZhciBzMD1NYXRoLmFicyh0aGlzLnN0cmlkZVswXSksczE9TWF0aC5hYnModGhpcy5zdHJpZGVbMV0pLHMyPU1hdGguYWJzKHRoaXMuc3RyaWRlWzJdKTtcXFxuaWYoczA+czEpe1xcXG5pZihzMT5zMil7XFxcbnJldHVybiBbMiwxLDBdO1xcXG59ZWxzZSBpZihzMD5zMil7XFxcbnJldHVybiBbMSwyLDBdO1xcXG59ZWxzZXtcXFxucmV0dXJuIFsxLDAsMl07XFxcbn1cXFxufWVsc2UgaWYoczA+czIpe1xcXG5yZXR1cm4gWzIsMCwxXTtcXFxufWVsc2UgaWYoczI+czEpe1xcXG5yZXR1cm4gWzAsMSwyXTtcXFxufWVsc2V7XFxcbnJldHVybiBbMCwyLDFdO1xcXG59fX0pXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvZGUucHVzaChcIk9SREVSfSlcIilcbiAgICB9XG4gIH1cbiAgXG4gIC8vdmlldy5zZXQoaTAsIC4uLiwgdik6XG4gIGNvZGUucHVzaChcblwicHJvdG8uc2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zZXQoXCIrYXJncy5qb2luKFwiLFwiKStcIix2KXtcIilcbiAgaWYodXNlR2V0dGVycykge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGEuc2V0KFwiK2luZGV4X3N0citcIix2KX1cIilcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhW1wiK2luZGV4X3N0citcIl09dn1cIilcbiAgfVxuICBcbiAgLy92aWV3LmdldChpMCwgLi4uKTpcbiAgY29kZS5wdXNoKFwicHJvdG8uZ2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9nZXQoXCIrYXJncy5qb2luKFwiLFwiKStcIil7XCIpXG4gIGlmKHVzZUdldHRlcnMpIHtcbiAgICBjb2RlLnB1c2goXCJyZXR1cm4gdGhpcy5kYXRhLmdldChcIitpbmRleF9zdHIrXCIpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXX1cIilcbiAgfVxuICBcbiAgLy92aWV3LmluZGV4OlxuICBjb2RlLnB1c2goXG4gICAgXCJwcm90by5pbmRleD1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfaW5kZXgoXCIsIGFyZ3Muam9pbigpLCBcIil7cmV0dXJuIFwiK2luZGV4X3N0citcIn1cIilcblxuICAvL3ZpZXcuaGkoKTpcbiAgY29kZS5wdXNoKFwicHJvdG8uaGk9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2hpKFwiK2FyZ3Muam9pbihcIixcIikrXCIpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gW1wiKHR5cGVvZiBpXCIsaSxcIiE9PSdudW1iZXInfHxpXCIsaSxcIjwwKT90aGlzLnNoYXBlW1wiLCBpLCBcIl06aVwiLCBpLFwifDBcIl0uam9pbihcIlwiKVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcInRoaXMuc3RyaWRlW1wiK2kgKyBcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLHRoaXMub2Zmc2V0KX1cIilcbiAgXG4gIC8vdmlldy5sbygpOlxuICB2YXIgYV92YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJhXCIraStcIj10aGlzLnNoYXBlW1wiK2krXCJdXCIgfSlcbiAgdmFyIGNfdmFycyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwiY1wiK2krXCI9dGhpcy5zdHJpZGVbXCIraStcIl1cIiB9KVxuICBjb2RlLnB1c2goXCJwcm90by5sbz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfbG8oXCIrYXJncy5qb2luKFwiLFwiKStcIil7dmFyIGI9dGhpcy5vZmZzZXQsZD0wLFwiK2FfdmFycy5qb2luKFwiLFwiKStcIixcIitjX3ZhcnMuam9pbihcIixcIikpXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29kZS5wdXNoKFxuXCJpZih0eXBlb2YgaVwiK2krXCI9PT0nbnVtYmVyJyYmaVwiK2krXCI+PTApe1xcXG5kPWlcIitpK1wifDA7XFxcbmIrPWNcIitpK1wiKmQ7XFxcbmFcIitpK1wiLT1kfVwiKVxuICB9XG4gIGNvZGUucHVzaChcInJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImNcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsYil9XCIpXG4gIFxuICAvL3ZpZXcuc3RlcCgpOlxuICBjb2RlLnB1c2goXCJwcm90by5zdGVwPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9zdGVwKFwiK2FyZ3Muam9pbihcIixcIikrXCIpe3ZhciBcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIraStcIj10aGlzLnNoYXBlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIraStcIj10aGlzLnN0cmlkZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsYz10aGlzLm9mZnNldCxkPTAsY2VpbD1NYXRoLmNlaWxcIilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInKXtcXFxuZD1pXCIraStcInwwO1xcXG5pZihkPDApe1xcXG5jKz1iXCIraStcIiooYVwiK2krXCItMSk7XFxcbmFcIitpK1wiPWNlaWwoLWFcIitpK1wiL2QpXFxcbn1lbHNle1xcXG5hXCIraStcIj1jZWlsKGFcIitpK1wiL2QpXFxcbn1cXFxuYlwiK2krXCIqPWRcXFxufVwiKVxuICB9XG4gIGNvZGUucHVzaChcInJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJhXCIgKyBpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiYlwiICsgaVxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLGMpfVwiKVxuICBcbiAgLy92aWV3LnRyYW5zcG9zZSgpOlxuICB2YXIgdFNoYXBlID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgdmFyIHRTdHJpZGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIHRTaGFwZVtpXSA9IFwiYVtpXCIraStcIl1cIlxuICAgIHRTdHJpZGVbaV0gPSBcImJbaVwiK2krXCJdXCJcbiAgfVxuICBjb2RlLnB1c2goXCJwcm90by50cmFuc3Bvc2U9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3RyYW5zcG9zZShcIithcmdzK1wiKXtcIitcbiAgICBhcmdzLm1hcChmdW5jdGlvbihuLGlkeCkgeyByZXR1cm4gbiArIFwiPShcIiArIG4gKyBcIj09PXVuZGVmaW5lZD9cIiArIGlkeCArIFwiOlwiICsgbiArIFwifDApXCJ9KS5qb2luKFwiO1wiKSxcbiAgICBcInZhciBhPXRoaXMuc2hhcGUsYj10aGlzLnN0cmlkZTtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEsXCIrdFNoYXBlLmpvaW4oXCIsXCIpK1wiLFwiK3RTdHJpZGUuam9pbihcIixcIikrXCIsdGhpcy5vZmZzZXQpfVwiKVxuICBcbiAgLy92aWV3LnBpY2soKTpcbiAgY29kZS5wdXNoKFwicHJvdG8ucGljaz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfcGljayhcIithcmdzK1wiKXt2YXIgYT1bXSxiPVtdLGM9dGhpcy5vZmZzZXRcIilcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXCJpZih0eXBlb2YgaVwiK2krXCI9PT0nbnVtYmVyJyYmaVwiK2krXCI+PTApe2M9KGMrdGhpcy5zdHJpZGVbXCIraStcIl0qaVwiK2krXCIpfDB9ZWxzZXthLnB1c2godGhpcy5zaGFwZVtcIitpK1wiXSk7Yi5wdXNoKHRoaXMuc3RyaWRlW1wiK2krXCJdKX1cIilcbiAgfVxuICBjb2RlLnB1c2goXCJ2YXIgY3Rvcj1DVE9SX0xJU1RbYS5sZW5ndGgrMV07cmV0dXJuIGN0b3IodGhpcy5kYXRhLGEsYixjKX1cIilcbiAgICBcbiAgLy9BZGQgcmV0dXJuIHN0YXRlbWVudFxuICBjb2RlLnB1c2goXCJyZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihkYXRhLHNoYXBlLHN0cmlkZSxvZmZzZXQpe3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKGRhdGEsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwic2hhcGVbXCIraStcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcInN0cmlkZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsb2Zmc2V0KX1cIilcblxuICAvL0NvbXBpbGUgcHJvY2VkdXJlXG4gIHZhciBwcm9jZWR1cmUgPSBuZXcgRnVuY3Rpb24oXCJDVE9SX0xJU1RcIiwgXCJPUkRFUlwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV0sIG9yZGVyKVxufVxuXG5mdW5jdGlvbiBhcnJheURUeXBlKGRhdGEpIHtcbiAgaWYoaGFzQnVmZmVyKSB7XG4gICAgaWYoQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSB7XG4gICAgICByZXR1cm4gXCJidWZmZXJcIlxuICAgIH1cbiAgfVxuICBpZihoYXNUeXBlZEFycmF5cykge1xuICAgIHN3aXRjaChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZGF0YSkpIHtcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEZsb2F0NjRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxvYXQ2NFwiXG4gICAgICBjYXNlIFwiW29iamVjdCBGbG9hdDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImZsb2F0MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50OEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJpbnQ4XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDE2QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDE2XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEludDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQ4QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQ4XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQxNkFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50MTZcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDMyQXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDhfY2xhbXBlZFwiXG4gICAgfVxuICB9XG4gIGlmKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gXCJhcnJheVwiXG4gIH1cbiAgcmV0dXJuIFwiZ2VuZXJpY1wiXG59XG5cbnZhciBDQUNIRURfQ09OU1RSVUNUT1JTID0ge1xuICBcImZsb2F0MzJcIjpbXSxcbiAgXCJmbG9hdDY0XCI6W10sXG4gIFwiaW50OFwiOltdLFxuICBcImludDE2XCI6W10sXG4gIFwiaW50MzJcIjpbXSxcbiAgXCJ1aW50OFwiOltdLFxuICBcInVpbnQxNlwiOltdLFxuICBcInVpbnQzMlwiOltdLFxuICBcImFycmF5XCI6W10sXG4gIFwidWludDhfY2xhbXBlZFwiOltdLFxuICBcImJ1ZmZlclwiOltdLFxuICBcImdlbmVyaWNcIjpbXVxufVxuXG47KGZ1bmN0aW9uKCkge1xuICBmb3IodmFyIGlkIGluIENBQ0hFRF9DT05TVFJVQ1RPUlMpIHtcbiAgICBDQUNIRURfQ09OU1RSVUNUT1JTW2lkXS5wdXNoKGNvbXBpbGVDb25zdHJ1Y3RvcihpZCwgLTEpKVxuICB9XG59KTtcblxuZnVuY3Rpb24gd3JhcHBlZE5EQXJyYXlDdG9yKGRhdGEsIHNoYXBlLCBzdHJpZGUsIG9mZnNldCkge1xuICBpZihkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY3RvciA9IENBQ0hFRF9DT05TVFJVQ1RPUlMuYXJyYXlbMF1cbiAgICByZXR1cm4gY3RvcihbXSlcbiAgfSBlbHNlIGlmKHR5cGVvZiBkYXRhID09PSBcIm51bWJlclwiKSB7XG4gICAgZGF0YSA9IFtkYXRhXVxuICB9XG4gIGlmKHNoYXBlID09PSB1bmRlZmluZWQpIHtcbiAgICBzaGFwZSA9IFsgZGF0YS5sZW5ndGggXVxuICB9XG4gIHZhciBkID0gc2hhcGUubGVuZ3RoXG4gIGlmKHN0cmlkZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RyaWRlID0gbmV3IEFycmF5KGQpXG4gICAgZm9yKHZhciBpPWQtMSwgc3o9MTsgaT49MDsgLS1pKSB7XG4gICAgICBzdHJpZGVbaV0gPSBzelxuICAgICAgc3ogKj0gc2hhcGVbaV1cbiAgICB9XG4gIH1cbiAgaWYob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBvZmZzZXQgPSAwXG4gICAgZm9yKHZhciBpPTA7IGk8ZDsgKytpKSB7XG4gICAgICBpZihzdHJpZGVbaV0gPCAwKSB7XG4gICAgICAgIG9mZnNldCAtPSAoc2hhcGVbaV0tMSkqc3RyaWRlW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBkdHlwZSA9IGFycmF5RFR5cGUoZGF0YSlcbiAgdmFyIGN0b3JfbGlzdCA9IENBQ0hFRF9DT05TVFJVQ1RPUlNbZHR5cGVdXG4gIHdoaWxlKGN0b3JfbGlzdC5sZW5ndGggPD0gZCsxKSB7XG4gICAgY3Rvcl9saXN0LnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBjdG9yX2xpc3QubGVuZ3RoLTEpKVxuICB9XG4gIHZhciBjdG9yID0gY3Rvcl9saXN0W2QrMV1cbiAgcmV0dXJuIGN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdyYXBwZWROREFycmF5Q3RvciIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGlvdGEobikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KG4pXG4gIGZvcih2YXIgaT0wOyBpPG47ICsraSkge1xuICAgIHJlc3VsdFtpXSA9IGlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW90YSIsInZhciBpbnQ4ID0gbmV3IEludDhBcnJheSg0KTtcbnZhciBpbnQzMiA9IG5ldyBJbnQzMkFycmF5KGludDguYnVmZmVyLCAwLCAxKTtcbnZhciBmbG9hdDMyID0gbmV3IEZsb2F0MzJBcnJheShpbnQ4LmJ1ZmZlciwgMCwgMSk7XG5cbi8qKlxuICogQSBzaW5nbGV0b24gZm9yIG51bWJlciB1dGlsaXRpZXMuIFxuICogQGNsYXNzIE51bWJlclV0aWxcbiAqL1xudmFyIE51bWJlclV0aWwgPSBmdW5jdGlvbigpIHtcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmbG9hdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gaW50IGJpdHMuIEFycmF5QnVmZmVyXG4gKiBpcyB1c2VkIGZvciB0aGUgY29udmVyc2lvbi5cbiAqXG4gKiBAbWV0aG9kICBpbnRCaXRzVG9GbG9hdFxuICogQHN0YXRpY1xuICogQHBhcmFtICB7TnVtYmVyfSBpIHRoZSBpbnQgdG8gY2FzdFxuICogQHJldHVybiB7TnVtYmVyfSAgIHRoZSBmbG9hdFxuICovXG5OdW1iZXJVdGlsLmludEJpdHNUb0Zsb2F0ID0gZnVuY3Rpb24oaSkge1xuXHRpbnQzMlswXSA9IGk7XG5cdHJldHVybiBmbG9hdDMyWzBdO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnQgYml0cyBmcm9tIHRoZSBnaXZlbiBmbG9hdC4gQXJyYXlCdWZmZXIgaXMgdXNlZFxuICogZm9yIHRoZSBjb252ZXJzaW9uLlxuICpcbiAqIEBtZXRob2QgIGZsb2F0VG9JbnRCaXRzXG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGYgdGhlIGZsb2F0IHRvIGNhc3RcbiAqIEByZXR1cm4ge051bWJlcn0gICB0aGUgaW50IGJpdHNcbiAqL1xuTnVtYmVyVXRpbC5mbG9hdFRvSW50Qml0cyA9IGZ1bmN0aW9uKGYpIHtcblx0ZmxvYXQzMlswXSA9IGY7XG5cdHJldHVybiBpbnQzMlswXTtcbn07XG5cbi8qKlxuICogRW5jb2RlcyBBQkdSIGludCBhcyBhIGZsb2F0LCB3aXRoIHNsaWdodCBwcmVjaXNpb24gbG9zcy5cbiAqXG4gKiBAbWV0aG9kICBpbnRUb0Zsb2F0Q29sb3JcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBhbiBBQkdSIHBhY2tlZCBpbnRlZ2VyXG4gKi9cbk51bWJlclV0aWwuaW50VG9GbG9hdENvbG9yID0gZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuIE51bWJlclV0aWwuaW50Qml0c1RvRmxvYXQoIHZhbHVlICYgMHhmZWZmZmZmZiApO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZmxvYXQgZW5jb2RlZCBBQkdSIHZhbHVlIGZyb20gdGhlIGdpdmVuIFJHQkFcbiAqIGJ5dGVzICgwIC0gMjU1KS4gVXNlZnVsIGZvciBzYXZpbmcgYmFuZHdpZHRoIGluIHZlcnRleCBkYXRhLlxuICpcbiAqIEBtZXRob2QgIGNvbG9yVG9GbG9hdFxuICogQHN0YXRpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHIgdGhlIFJlZCBieXRlICgwIC0gMjU1KVxuICogQHBhcmFtIHtOdW1iZXJ9IGcgdGhlIEdyZWVuIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcGFyYW0ge051bWJlcn0gYiB0aGUgQmx1ZSBieXRlICgwIC0gMjU1KVxuICogQHBhcmFtIHtOdW1iZXJ9IGEgdGhlIEFscGhhIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcmV0dXJuIHtGbG9hdDMyfSAgYSBGbG9hdDMyIG9mIHRoZSBSR0JBIGNvbG9yXG4gKi9cbk51bWJlclV0aWwuY29sb3JUb0Zsb2F0ID0gZnVuY3Rpb24ociwgZywgYiwgYSkge1xuXHR2YXIgYml0cyA9IChhIDw8IDI0IHwgYiA8PCAxNiB8IGcgPDwgOCB8IHIpO1xuXHRyZXR1cm4gTnVtYmVyVXRpbC5pbnRUb0Zsb2F0Q29sb3IoYml0cyk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbnVtYmVyIGlzIGEgcG93ZXItb2YtdHdvLlxuICpcbiAqIEBtZXRob2QgIGlzUG93ZXJPZlR3b1xuICogQHBhcmFtICB7TnVtYmVyfSAgbiB0aGUgbnVtYmVyIHRvIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgdHJ1ZSBpZiBwb3dlci1vZi10d29cbiAqL1xuTnVtYmVyVXRpbC5pc1Bvd2VyT2ZUd28gPSBmdW5jdGlvbihuKSB7XG5cdHJldHVybiAobiAmIChuIC0gMSkpID09PSAwO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGhpZ2hlc3QgcG93ZXItb2YtdHdvIGZyb20gdGhlIHNwZWNpZmllZCBudW1iZXIuIFxuICogXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG4gdGhlIG51bWJlciB0byB0ZXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgdGhlIG5leHQgaGlnaGVzdCBwb3dlciBvZiB0d29cbiAqL1xuTnVtYmVyVXRpbC5uZXh0UG93ZXJPZlR3byA9IGZ1bmN0aW9uKG4pIHtcblx0bi0tO1xuXHRuIHw9IG4gPj4gMTtcblx0biB8PSBuID4+IDI7XG5cdG4gfD0gbiA+PiA0O1xuXHRuIHw9IG4gPj4gODtcblx0biB8PSBuID4+IDE2O1xuXHRyZXR1cm4gbisxO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1iZXJVdGlsOyIsIm1vZHVsZS5leHBvcnRzID0gcGx1Y2tlclxuXG5mdW5jdGlvbiBwbHVja2VyKHBhdGgsIG9iamVjdCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+PSAyXG4gICAgPyBwbHVjayhwYXRoKShvYmplY3QpXG4gICAgOiBwbHVjayhwYXRoKVxufVxuXG5mdW5jdGlvbiBwbHVjayhwYXRoKSB7XG4gIHBhdGggPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZydcbiAgICA/IFN0cmluZyhwYXRoKS50cmltKCkuc3BsaXQoJy4nKVxuICAgIDogcGF0aFxuXG4gIGlmIChwYXRoLmxlbmd0aCA8IDIpIHtcbiAgICBwYXRoID0gcGF0aFswXVxuICAgIHJldHVybiBwbHVja1NpbmdsZVxuICB9IGVsc2Uge1xuICAgIHZhciBsID0gcGF0aC5sZW5ndGhcbiAgICByZXR1cm4gcGx1Y2tQYXRoXG4gIH1cblxuICBmdW5jdGlvbiBwbHVja1NpbmdsZShvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0W3BhdGhdXG4gIH1cblxuICBmdW5jdGlvbiBwbHVja1BhdGgob2JqZWN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJykgYnJlYWtcblxuICAgICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaV1dXG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdFxuICB9XG59XG4iLCIvKlxyXG4gKiByYWYuanNcclxuICogaHR0cHM6Ly9naXRodWIuY29tL25ncnltYW4vcmFmLmpzXHJcbiAqXHJcbiAqIG9yaWdpbmFsIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXJcclxuICogaW5zcGlyZWQgZnJvbSBwYXVsX2lyaXNoIGdpc3QgYW5kIHBvc3RcclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzIG5ncnltYW5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG4gKi9cclxuXHJcbihmdW5jdGlvbih3aW5kb3cpIHtcclxuXHR2YXIgbGFzdFRpbWUgPSAwLFxyXG5cdFx0dmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddLFxyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxyXG5cdFx0aSA9IHZlbmRvcnMubGVuZ3RoO1xyXG5cclxuXHQvLyB0cnkgdG8gdW4tcHJlZml4IGV4aXN0aW5nIHJhZlxyXG5cdHdoaWxlICgtLWkgPj0gMCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXTtcclxuXHR9XHJcblxyXG5cdC8vIHBvbHlmaWxsIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xyXG5cdC8vIGhlYXZpbHkgaW5zcGlyZWQgZnJvbSBAZGFyaXVzIGdpc3QgbW9kOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvMTU3OTY3MSNjb21tZW50LTgzNzk0NVxyXG5cdGlmICghcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICFjYW5jZWxBbmltYXRpb25GcmFtZSkge1xyXG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdFx0dmFyIG5vdyA9ICtuZXcgRGF0ZSgpLCBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XHJcblx0XHRcdHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xyXG5cdFx0XHR9LCBuZXh0VGltZSAtIG5vdyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xyXG5cdH1cclxuXHJcblx0Ly8gZXhwb3J0IHRvIHdpbmRvd1xyXG5cdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XHJcblx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2FuY2VsQW5pbWF0aW9uRnJhbWU7XHJcbn0od2luZG93KSk7XHJcbiIsImZ1bmN0aW9uIHJhbmRvbShzdGFydCwgZW5kKSB7XG4gICAgdmFyIG4wID0gdHlwZW9mIHN0YXJ0ID09PSAnbnVtYmVyJyxcbiAgICAgICAgbjEgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xuXG4gICAgaWYgKG4wICYmICFuMSkge1xuICAgICAgICBlbmQgPSBzdGFydFxuICAgICAgICBzdGFydCA9IDBcbiAgICB9IGVsc2UgaWYgKCFuMCAmJiAhbjEpIHtcbiAgICAgICAgc3RhcnQgPSAwXG4gICAgICAgIGVuZCA9IDFcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0ICsgTWF0aC5yYW5kb20oKSAqIChlbmQgLSBzdGFydClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByYW5kb20iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNtb290aHN0ZXAgKG1pbiwgbWF4LCB2YWx1ZSkge1xuICB2YXIgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICh2YWx1ZS1taW4pLyhtYXgtbWluKSkpO1xuICByZXR1cm4geCp4KigzIC0gMip4KTtcbn07XG4iLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICB2YXIgQ29weVNoYWRlciA9IEVmZmVjdENvbXBvc2VyLkNvcHlTaGFkZXIgPSByZXF1aXJlKCd0aHJlZS1jb3B5c2hhZGVyJylcbiAgICAsIFJlbmRlclBhc3MgPSBFZmZlY3RDb21wb3Nlci5SZW5kZXJQYXNzID0gcmVxdWlyZSgnLi9saWIvcmVuZGVycGFzcycpKFRIUkVFKVxuICAgICwgU2hhZGVyUGFzcyA9IEVmZmVjdENvbXBvc2VyLlNoYWRlclBhc3MgPSByZXF1aXJlKCcuL2xpYi9zaGFkZXJwYXNzJykoVEhSRUUsIEVmZmVjdENvbXBvc2VyKVxuICAgICwgTWFza1Bhc3MgPSBFZmZlY3RDb21wb3Nlci5NYXNrUGFzcyA9IHJlcXVpcmUoJy4vbGliL21hc2twYXNzJykoVEhSRUUpXG4gICAgLCBDbGVhck1hc2tQYXNzID0gRWZmZWN0Q29tcG9zZXIuQ2xlYXJNYXNrUGFzcyA9IHJlcXVpcmUoJy4vbGliL2NsZWFybWFza3Bhc3MnKShUSFJFRSlcblxuICBmdW5jdGlvbiBFZmZlY3RDb21wb3NlciggcmVuZGVyZXIsIHJlbmRlclRhcmdldCApIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICBpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgdmFyIHdpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgMTtcbiAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMTtcbiAgICAgIHZhciBwYXJhbWV0ZXJzID0geyBtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIGZvcm1hdDogVEhSRUUuUkdCRm9ybWF0LCBzdGVuY2lsQnVmZmVyOiBmYWxzZSB9O1xuXG4gICAgICByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHdpZHRoLCBoZWlnaHQsIHBhcmFtZXRlcnMgKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XG4gICAgdGhpcy5yZW5kZXJUYXJnZXQyID0gcmVuZGVyVGFyZ2V0LmNsb25lKCk7XG5cbiAgICB0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xuICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcblxuICAgIHRoaXMucGFzc2VzID0gW107XG5cbiAgICB0aGlzLmNvcHlQYXNzID0gbmV3IFNoYWRlclBhc3MoIENvcHlTaGFkZXIgKTtcbiAgfTtcblxuICBFZmZlY3RDb21wb3Nlci5wcm90b3R5cGUgPSB7XG4gICAgc3dhcEJ1ZmZlcnM6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgdG1wID0gdGhpcy5yZWFkQnVmZmVyO1xuICAgICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy53cml0ZUJ1ZmZlcjtcbiAgICAgIHRoaXMud3JpdGVCdWZmZXIgPSB0bXA7XG5cbiAgICB9LFxuXG4gICAgYWRkUGFzczogZnVuY3Rpb24gKCBwYXNzICkge1xuXG4gICAgICB0aGlzLnBhc3Nlcy5wdXNoKCBwYXNzICk7XG5cbiAgICB9LFxuXG4gICAgaW5zZXJ0UGFzczogZnVuY3Rpb24gKCBwYXNzLCBpbmRleCApIHtcblxuICAgICAgdGhpcy5wYXNzZXMuc3BsaWNlKCBpbmRleCwgMCwgcGFzcyApO1xuXG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCBkZWx0YSApIHtcblxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcbiAgICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcblxuICAgICAgdmFyIG1hc2tBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgdmFyIHBhc3MsIGksIGlsID0gdGhpcy5wYXNzZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKCBpID0gMDsgaSA8IGlsOyBpICsrICkge1xuXG4gICAgICAgIHBhc3MgPSB0aGlzLnBhc3Nlc1sgaSBdO1xuXG4gICAgICAgIGlmICggIXBhc3MuZW5hYmxlZCApIGNvbnRpbnVlO1xuXG4gICAgICAgIHBhc3MucmVuZGVyKCB0aGlzLnJlbmRlcmVyLCB0aGlzLndyaXRlQnVmZmVyLCB0aGlzLnJlYWRCdWZmZXIsIGRlbHRhLCBtYXNrQWN0aXZlICk7XG5cbiAgICAgICAgaWYgKCBwYXNzLm5lZWRzU3dhcCApIHtcblxuICAgICAgICAgIGlmICggbWFza0FjdGl2ZSApIHtcblxuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLnJlbmRlcmVyLmNvbnRleHQ7XG5cbiAgICAgICAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuTk9URVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTtcblxuICAgICAgICAgICAgdGhpcy5jb3B5UGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEgKTtcblxuICAgICAgICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zd2FwQnVmZmVycygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHBhc3MgaW5zdGFuY2VvZiBNYXNrUGFzcyApIHtcblxuICAgICAgICAgIG1hc2tBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIHBhc3MgaW5zdGFuY2VvZiBDbGVhck1hc2tQYXNzICkge1xuXG4gICAgICAgICAgbWFza0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfSxcblxuICAgIHJlc2V0OiBmdW5jdGlvbiAoIHJlbmRlclRhcmdldCApIHtcblxuICAgICAgaWYgKCByZW5kZXJUYXJnZXQgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcblxuICAgICAgICByZW5kZXJUYXJnZXQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgcmVuZGVyVGFyZ2V0LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbmRlclRhcmdldDEgPSByZW5kZXJUYXJnZXQ7XG4gICAgICB0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcblxuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MTtcbiAgICAgIHRoaXMucmVhZEJ1ZmZlciA9IHRoaXMucmVuZGVyVGFyZ2V0MjtcblxuICAgIH0sXG5cbiAgICBzZXRTaXplOiBmdW5jdGlvbiAoIHdpZHRoLCBoZWlnaHQgKSB7XG5cbiAgICAgIHZhciByZW5kZXJUYXJnZXQgPSB0aGlzLnJlbmRlclRhcmdldDEuY2xvbmUoKTtcblxuICAgICAgcmVuZGVyVGFyZ2V0LndpZHRoID0gd2lkdGg7XG4gICAgICByZW5kZXJUYXJnZXQuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICB0aGlzLnJlc2V0KCByZW5kZXJUYXJnZXQgKTtcblxuICAgIH1cblxuICB9O1xuXG4gIC8vIHNoYXJlZCBvcnRobyBjYW1lcmFcblxuICBFZmZlY3RDb21wb3Nlci5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtMSwgMSwgMSwgLTEsIDAsIDEgKTtcblxuICBFZmZlY3RDb21wb3Nlci5xdWFkID0gbmV3IFRIUkVFLk1lc2goIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KCAyLCAyICksIG51bGwgKTtcblxuICBFZmZlY3RDb21wb3Nlci5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBFZmZlY3RDb21wb3Nlci5zY2VuZS5hZGQoIEVmZmVjdENvbXBvc2VyLnF1YWQgKTtcblxuICByZXR1cm4gRWZmZWN0Q29tcG9zZXJcbn07IiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgZnVuY3Rpb24gQ2xlYXJNYXNrUGFzcygpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2xlYXJNYXNrUGFzcykpIHJldHVybiBuZXcgQ2xlYXJNYXNrUGFzcyhzY2VuZSwgY2FtZXJhKTtcbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICB9O1xuXG4gIENsZWFyTWFza1Bhc3MucHJvdG90eXBlID0ge1xuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xuICAgICAgY29udGV4dC5kaXNhYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ2xlYXJNYXNrUGFzc1xufTsiLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICBmdW5jdGlvbiBNYXNrUGFzcyggc2NlbmUsIGNhbWVyYSApIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFza1Bhc3MpKSByZXR1cm4gbmV3IE1hc2tQYXNzKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xuXG4gICAgdGhpcy5pbnZlcnNlID0gZmFsc2U7XG4gIH07XG5cbiAgTWFza1Bhc3MucHJvdG90eXBlID0ge1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XG5cbiAgICAgIHZhciBjb250ZXh0ID0gcmVuZGVyZXIuY29udGV4dDtcblxuICAgICAgLy8gZG9uJ3QgdXBkYXRlIGNvbG9yIG9yIGRlcHRoXG5cbiAgICAgIGNvbnRleHQuY29sb3JNYXNrKCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSApO1xuICAgICAgY29udGV4dC5kZXB0aE1hc2soIGZhbHNlICk7XG5cbiAgICAgIC8vIHNldCB1cCBzdGVuY2lsXG5cbiAgICAgIHZhciB3cml0ZVZhbHVlLCBjbGVhclZhbHVlO1xuXG4gICAgICBpZiAoIHRoaXMuaW52ZXJzZSApIHtcblxuICAgICAgICB3cml0ZVZhbHVlID0gMDtcbiAgICAgICAgY2xlYXJWYWx1ZSA9IDE7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgd3JpdGVWYWx1ZSA9IDE7XG4gICAgICAgIGNsZWFyVmFsdWUgPSAwO1xuXG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQuZW5hYmxlKCBjb250ZXh0LlNURU5DSUxfVEVTVCApO1xuICAgICAgY29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuUkVQTEFDRSwgY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UgKTtcbiAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuQUxXQVlTLCB3cml0ZVZhbHVlLCAweGZmZmZmZmZmICk7XG4gICAgICBjb250ZXh0LmNsZWFyU3RlbmNpbCggY2xlYXJWYWx1ZSApO1xuXG4gICAgICAvLyBkcmF3IGludG8gdGhlIHN0ZW5jaWwgYnVmZmVyXG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcbiAgICAgIHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XG5cbiAgICAgIC8vIHJlLWVuYWJsZSB1cGRhdGUgb2YgY29sb3IgYW5kIGRlcHRoXG5cbiAgICAgIGNvbnRleHQuY29sb3JNYXNrKCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlICk7XG4gICAgICBjb250ZXh0LmRlcHRoTWFzayggdHJ1ZSApO1xuXG4gICAgICAvLyBvbmx5IHJlbmRlciB3aGVyZSBzdGVuY2lsIGlzIHNldCB0byAxXG5cbiAgICAgIGNvbnRleHQuc3RlbmNpbEZ1bmMoIGNvbnRleHQuRVFVQUwsIDEsIDB4ZmZmZmZmZmYgKTsgIC8vIGRyYXcgaWYgPT0gMVxuICAgICAgY29udGV4dC5zdGVuY2lsT3AoIGNvbnRleHQuS0VFUCwgY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAgKTtcblxuICAgIH1cblxuICB9O1xuXG4gIHJldHVybiBNYXNrUGFzc1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIGZ1bmN0aW9uIFJlbmRlclBhc3MoIHNjZW5lLCBjYW1lcmEsIG92ZXJyaWRlTWF0ZXJpYWwsIGNsZWFyQ29sb3IsIGNsZWFyQWxwaGEgKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJlbmRlclBhc3MpKSByZXR1cm4gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSk7XG5cbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLm92ZXJyaWRlTWF0ZXJpYWwgPSBvdmVycmlkZU1hdGVyaWFsO1xuXG4gICAgdGhpcy5jbGVhckNvbG9yID0gY2xlYXJDb2xvcjtcbiAgICB0aGlzLmNsZWFyQWxwaGEgPSAoIGNsZWFyQWxwaGEgIT09IHVuZGVmaW5lZCApID8gY2xlYXJBbHBoYSA6IDE7XG5cbiAgICB0aGlzLm9sZENsZWFyQ29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICB0aGlzLm9sZENsZWFyQWxwaGEgPSAxO1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzU3dhcCA9IGZhbHNlO1xuXG4gIH07XG5cbiAgUmVuZGVyUGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcblxuICAgICAgdGhpcy5zY2VuZS5vdmVycmlkZU1hdGVyaWFsID0gdGhpcy5vdmVycmlkZU1hdGVyaWFsO1xuXG4gICAgICBpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcblxuICAgICAgICB0aGlzLm9sZENsZWFyQ29sb3IuY29weSggcmVuZGVyZXIuZ2V0Q2xlYXJDb2xvcigpICk7XG4gICAgICAgIHRoaXMub2xkQ2xlYXJBbHBoYSA9IHJlbmRlcmVyLmdldENsZWFyQWxwaGEoKTtcblxuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLmNsZWFyQ29sb3IsIHRoaXMuY2xlYXJBbHBoYSApO1xuXG4gICAgICB9XG5cbiAgICAgIHJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHJlYWRCdWZmZXIsIHRoaXMuY2xlYXIgKTtcblxuICAgICAgaWYgKCB0aGlzLmNsZWFyQ29sb3IgKSB7XG5cbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggdGhpcy5vbGRDbGVhckNvbG9yLCB0aGlzLm9sZENsZWFyQWxwaGEgKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIFJlbmRlclBhc3M7XG5cbn07XG4iLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSwgRWZmZWN0Q29tcG9zZXIpIHtcbiAgZnVuY3Rpb24gU2hhZGVyUGFzcyggc2hhZGVyLCB0ZXh0dXJlSUQgKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNoYWRlclBhc3MpKSByZXR1cm4gbmV3IFNoYWRlclBhc3Moc2hhZGVyLCB0ZXh0dXJlSUQpO1xuXG4gICAgdGhpcy50ZXh0dXJlSUQgPSAoIHRleHR1cmVJRCAhPT0gdW5kZWZpbmVkICkgPyB0ZXh0dXJlSUQgOiBcInREaWZmdXNlXCI7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0gVEhSRUUuVW5pZm9ybXNVdGlscy5jbG9uZSggc2hhZGVyLnVuaWZvcm1zICk7XG5cbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG5cbiAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgdmVydGV4U2hhZGVyOiBzaGFkZXIudmVydGV4U2hhZGVyLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IHNoYWRlci5mcmFnbWVudFNoYWRlclxuXG4gICAgfSApO1xuXG4gICAgdGhpcy5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlO1xuXG4gICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLm5lZWRzU3dhcCA9IHRydWU7XG4gICAgdGhpcy5jbGVhciA9IGZhbHNlO1xuXG4gIH07XG5cbiAgU2hhZGVyUGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcblxuICAgICAgaWYgKCB0aGlzLnVuaWZvcm1zWyB0aGlzLnRleHR1cmVJRCBdICkge1xuXG4gICAgICAgIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0udmFsdWUgPSByZWFkQnVmZmVyO1xuXG4gICAgICB9XG5cbiAgICAgIEVmZmVjdENvbXBvc2VyLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xuXG4gICAgICBpZiAoIHRoaXMucmVuZGVyVG9TY3JlZW4gKSB7XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBFZmZlY3RDb21wb3Nlci5zY2VuZSwgRWZmZWN0Q29tcG9zZXIuY2FtZXJhICk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKCBFZmZlY3RDb21wb3Nlci5zY2VuZSwgRWZmZWN0Q29tcG9zZXIuY2FtZXJhLCB3cml0ZUJ1ZmZlciwgdGhpcy5jbGVhciApO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gU2hhZGVyUGFzcztcblxufTsiLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKlxuICogRnVsbC1zY3JlZW4gdGV4dHVyZWQgcXVhZCBzaGFkZXJcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdW5pZm9ybXM6IHtcbiAgICBcInREaWZmdXNlXCI6IHsgdHlwZTogXCJ0XCIsIHZhbHVlOiBudWxsIH0sXG4gICAgXCJvcGFjaXR5XCI6ICB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH1cbiAgfSxcbiAgdmVydGV4U2hhZGVyOiBbXG4gICAgXCJ2YXJ5aW5nIHZlYzIgdlV2O1wiLFxuXG4gICAgXCJ2b2lkIG1haW4oKSB7XCIsXG5cbiAgICAgIFwidlV2ID0gdXY7XCIsXG4gICAgICBcImdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcblxuICAgIFwifVwiXG4gIF0uam9pbihcIlxcblwiKSxcbiAgZnJhZ21lbnRTaGFkZXI6IFtcbiAgICBcInVuaWZvcm0gZmxvYXQgb3BhY2l0eTtcIixcblxuICAgIFwidW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XCIsXG5cbiAgICBcInZhcnlpbmcgdmVjMiB2VXY7XCIsXG5cbiAgICBcInZvaWQgbWFpbigpIHtcIixcblxuICAgICAgXCJ2ZWM0IHRleGVsID0gdGV4dHVyZTJEKCB0RGlmZnVzZSwgdlV2ICk7XCIsXG4gICAgICBcImdsX0ZyYWdDb2xvciA9IG9wYWNpdHkgKiB0ZXhlbDtcIixcblxuICAgIFwifVwiXG4gIF0uam9pbihcIlxcblwiKVxufTtcbiIsInZhciBjcmVhdGVUeXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcblxuICAgIHZhciB0eXBlcyA9IGNyZWF0ZVR5cGVzKFRIUkVFKSBcblxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGUoZ2xTaGFkZXIsIG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IG9wdHN8fHt9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzLmNvbG9ycyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBvcHRzLmNvbG9ycyA9IFtvcHRzLmNvbG9yc11cbiAgICAgICAgXG4gICAgICAgIHZhciB0VW5pZm9ybXMgPSB0eXBlcyggZ2xTaGFkZXIudW5pZm9ybXMsIG9wdHMuY29sb3JzIClcbiAgICAgICAgdmFyIHRBdHRyaWJzID0gdHlwZXMoIGdsU2hhZGVyLmF0dHJpYnV0ZXMsIG9wdHMuY29sb3JzIClcbiAgICAgICAgICAgIFxuICAgICAgICAvL2NsZWFyIHRoZSBhdHRyaWJ1dGUgYXJyYXlzXG4gICAgICAgIGZvciAodmFyIGsgaW4gdEF0dHJpYnMpIHtcbiAgICAgICAgICAgIHRBdHRyaWJzW2tdLnZhbHVlID0gW11cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGdsU2hhZGVyLnZlcnRleCxcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBnbFNoYWRlci5mcmFnbWVudCxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB0VW5pZm9ybXMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0QXR0cmlic1xuICAgICAgICB9XG4gICAgfVxufSIsInZhciB0eXBlTWFwID0ge1xuICAgICdpbnQnOiAnaScsXG4gICAgJ2Zsb2F0JzogJ2YnLFxuICAgICdpdmVjMic6ICdpMicsXG4gICAgJ2l2ZWMzJzogJ2kzJyxcbiAgICAnaXZlYzQnOiAnaTQnLFxuICAgICd2ZWMyJzogJ3YyJyxcbiAgICAndmVjMyc6ICd2MycsXG4gICAgJ3ZlYzQnOiAndjQnLFxuICAgICdtYXQ0JzogJ200JyxcbiAgICAnbWF0Myc6ICdtMycsXG4gICAgJ3NhbXBsZXIyRCc6ICd0JyxcbiAgICAnc2FtcGxlckN1YmUnOiAndCdcbn1cblxuZnVuY3Rpb24gY3JlYXRlKFRIUkVFKSB7XG4gICAgZnVuY3Rpb24gbmV3SW5zdGFuY2UodHlwZSwgaXNBcnJheSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Zsb2F0JzogXG4gICAgICAgICAgICBjYXNlICdpbnQnOlxuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICBjYXNlICd2ZWMyJzpcbiAgICAgICAgICAgIGNhc2UgJ2l2ZWMyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjIoKVxuICAgICAgICAgICAgY2FzZSAndmVjMyc6XG4gICAgICAgICAgICBjYXNlICdpdmVjMyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3IzKClcbiAgICAgICAgICAgIGNhc2UgJ3ZlYzQnOlxuICAgICAgICAgICAgY2FzZSAnaXZlYzQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yNCgpXG4gICAgICAgICAgICBjYXNlICdtYXQ0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKVxuICAgICAgICAgICAgY2FzZSAnbWF0Myc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXgzKClcbiAgICAgICAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgICAgIGNhc2UgJ3NhbXBsZXIyRCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5UZXh0dXJlKClcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVmYXVsdFZhbHVlKHR5cGUsIGlzQXJyYXksIGFycmF5TGVuKSB7XG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAvL1RocmVlSlMgZmxhdHRlbnMgaXZlYzMgdHlwZVxuICAgICAgICAgICAgLy8od2UgZG9uJ3Qgc3VwcG9ydCAnZnYnIHR5cGUpXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2l2ZWMzJylcbiAgICAgICAgICAgICAgICBhcnJheUxlbiAqPSAzXG4gICAgICAgICAgICB2YXIgYXIgPSBuZXcgQXJyYXkoYXJyYXlMZW4pXG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8YXIubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgYXJbaV0gPSBuZXdJbnN0YW5jZSh0eXBlLCBpc0FycmF5KVxuICAgICAgICAgICAgcmV0dXJuIGFyXG4gICAgICAgIH0gIFxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2UodHlwZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUeXBlKHR5cGUsIGlzQXJyYXkpIHtcbiAgICAgICAgaWYgKCFpc0FycmF5KVxuICAgICAgICAgICAgcmV0dXJuIHR5cGVNYXBbdHlwZV1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2ludCcpXG4gICAgICAgICAgICByZXR1cm4gJ2l2MSdcbiAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2Zsb2F0JylcbiAgICAgICAgICAgIHJldHVybiAnZnYxJ1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdHlwZU1hcFt0eXBlXSsndidcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gc2V0dXBVbmlmb3JtcyhnbFVuaWZvcm1zLCBjb2xvck5hbWVzKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjb2xvck5hbWVzKSlcbiAgICAgICAgICAgIGNvbG9yTmFtZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9XG4gICAgICAgIHZhciBhcnJheXMgPSB7fVxuXG4gICAgICAgIC8vbWFwIHVuaWZvcm0gdHlwZXNcbiAgICAgICAgZ2xVbmlmb3Jtcy5mb3JFYWNoKGZ1bmN0aW9uKHVuaWZvcm0pIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gdW5pZm9ybS5uYW1lXG4gICAgICAgICAgICB2YXIgaXNBcnJheSA9IC8oLispXFxbWzAtOV0rXFxdLy5leGVjKG5hbWUpXG5cbiAgICAgICAgICAgIC8vc3BlY2lhbCBjYXNlOiBjb2xvcnMuLi5cbiAgICAgICAgICAgIGlmIChjb2xvck5hbWVzICYmIGNvbG9yTmFtZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheSlcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXJyYXkgb2YgY29sb3IgdW5pZm9ybXMgbm90IHN1cHBvcnRlZFwiKVxuICAgICAgICAgICAgICAgIGlmICh1bmlmb3JtLnR5cGUgIT09ICd2ZWMzJylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhyZWVKUyBleHBlY3RzIHZlYzMgZm9yIENvbG9yIHVuaWZvcm1zXCIpIFxuICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2MnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGlzQXJyYXlbMV1cbiAgICAgICAgICAgICAgICBpZiAobmFtZSBpbiBhcnJheXMpIFxuICAgICAgICAgICAgICAgICAgICBhcnJheXNbbmFtZV0uY291bnQrKyBcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGFycmF5c1tuYW1lXSA9IHsgY291bnQ6IDEsIHR5cGU6IHVuaWZvcm0udHlwZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB7IFxuICAgICAgICAgICAgICAgIHR5cGU6IGdldFR5cGUodW5pZm9ybS50eXBlLCBpc0FycmF5KSwgXG4gICAgICAgICAgICAgICAgdmFsdWU6IGlzQXJyYXkgPyBudWxsIDogZGVmYXVsdFZhbHVlKHVuaWZvcm0udHlwZSkgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9ub3cgY2xlYW4gdXAgYW55IGFycmF5IHZhbHVlc1xuICAgICAgICBmb3IgKHZhciBrIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIHUgPSByZXN1bHRba11cbiAgICAgICAgICAgIGlmIChrIGluIGFycmF5cykgeyAvL2lzIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhcnJheXNba11cbiAgICAgICAgICAgICAgICB1LnZhbHVlID0gZGVmYXVsdFZhbHVlKGEudHlwZSwgdHJ1ZSwgYS5jb3VudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcmVuZGVyZXInKSIsInZhciBjcmVhdGVUZXh0ID0gcmVxdWlyZSgnZ2wtc3ByaXRlLXRleHQnKVxudmFyIG1hdDQgPSB7XG4gICAgY3JlYXRlOiByZXF1aXJlKCdnbC1tYXQ0L2NyZWF0ZScpLFxuICAgIHNjYWxlOiByZXF1aXJlKCdnbC1tYXQ0L3NjYWxlJyksXG4gICAgbXVsdGlwbHk6IHJlcXVpcmUoJ2dsLW1hdDQvbXVsdGlwbHknKVxufVxuXG52YXIgbW9kZWxUcmFuc2Zvcm0gPSBtYXQ0LmNyZWF0ZSgpXG52YXIgZmxpcCA9IG1hdDQuY3JlYXRlKClcbm1hdDQuc2NhbGUoZmxpcCwgZmxpcCwgWzEsIC0xLCAxXSlcblxudmFyIFdyYXBUZXh0dXJlID0gcmVxdWlyZSgnLi90ZXh0dXJlLXdyYXAnKVxudmFyIG51bWJlciA9IHJlcXVpcmUoJ2FzLW51bWJlcicpXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG5cbnZhciBjcmVhdGVTaGFkZXIgPSByZXF1aXJlKCdnbC1zaGFkZXItY29yZScpXG5cblxuLy9uYXN0eSB0ZW1wIGhhY2sgdW50aWwgIzk3MSBpcyBmaXhlZFxudmFyIHZlcnRleCA9ICdhdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjNCBjb2xvcjtcXG5hdHRyaWJ1dGUgdmVjMiB0ZXhjb29yZDA7XFxuXFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IG1vZGVsO1xcblxcbnZhcnlpbmcgdmVjNCB2X2NvbDtcXG52YXJ5aW5nIHZlYzIgdl90ZXgwO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogcG9zaXRpb247XFxuIHZfY29sID0gY29sb3I7XFxuIHZfdGV4MCA9IHRleGNvb3JkMDtcXG4gZ2xfUG9pbnRTaXplID0gMS4wO1xcbn0nXG52YXIgZnJhZ21lbnQgPSAnI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxudmFyeWluZyB2ZWM0IHZfY29sO1xcbnZhcnlpbmcgdmVjMiB2X3RleDA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTA7XFxuXFxudW5pZm9ybSBmbG9hdCBzbW9vdGhpbmc7XFxuLy8gPSAxLjAvMzIuMDtcXG5cXG4vLyBkcm9wIHNoYWRvdyBjb21wdXRlZCBpbiBmcmFnbWVudCBzaGFkZXJcXG52b2lkIG1haW4oKSB7XFxuIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZTAsIHZfdGV4MCk7XFxuXFxuIGZsb2F0IGRzdCA9IHRleENvbG9yLmE7XFxuIGZsb2F0IGFscGhhID0gc21vb3Roc3RlcCgwLjUgLSBzbW9vdGhpbmcsIDAuNSArIHNtb290aGluZywgZHN0KTtcXG4gdmVjNCBiYXNlID0gdl9jb2wgKiB2ZWM0KGFscGhhKTtcXG5cXG4gZ2xfRnJhZ0NvbG9yID0gYmFzZTtcXG4gaWYgKGdsX0ZyYWdDb2xvci5hPDAuMSlcXG4gZGlzY2FyZDtcXG59J1xuXG52YXIgdW5pZm9ybXMgPSBbXG4gICAgICAgIHsgdHlwZTogJ2Zsb2F0JywgbmFtZTogJ3Ntb290aGluZycgfSxcbiAgICAgICAgeyB0eXBlOiAnc2FtcGxlcjJEJywgbmFtZTogJ3RleHR1cmUwJyB9LFxuICAgICAgICB7IHR5cGU6ICdtYXQ0JywgbmFtZTogJ3Byb2plY3Rpb24nIH0sXG4gICAgICAgIHsgdHlwZTogJ21hdDQnLCBuYW1lOiAndmlldycgfSxcbiAgICAgICAgeyB0eXBlOiAnbWF0NCcsIG5hbWU6ICdtb2RlbCcgfSAgICAgICAgXG4gICAgXSxcbiAgICBhdHRyaWJ1dGVzID0gW1xuICAgICAgICB7IHR5cGU6ICd2ZWM0JywgbmFtZTogJ3Bvc2l0aW9uJyB9LFxuICAgICAgICB7IHR5cGU6ICd2ZWM0JywgbmFtZTogJ2NvbG9yJyB9LFxuICAgICAgICB7IHR5cGU6ICd2ZWMyJywgbmFtZTogJ3RleGNvb3JkMCcgfVxuICAgIF1cblxuXG5cbmZ1bmN0aW9uIGNvcHlDb2xvcihvdXQsIGNvbG9yLCBvcGFjaXR5KSB7XG4gICAgb3V0WzBdID0gY29sb3IuclxuICAgIG91dFsxXSA9IGNvbG9yLmcgXG4gICAgb3V0WzJdID0gY29sb3IuYiBcbiAgICBvdXRbM10gPSBvcGFjaXR5XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgICB2YXIgc2hhcmVkU2hhZGVyXG5cbiAgICBmdW5jdGlvbiBUZXh0UmVuZGVyZXIocmVuZGVyZXIsIG9wdCkge1xuICAgICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFJlbmRlcmVyKSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgVGV4dFJlbmRlcmVyKHJlbmRlcmVyLCBvcHQpXG4gICAgICAgIG9wdD1vcHR8fHt9XG5cbiAgICAgICAgdmFyIGdsID0gcmVuZGVyZXIuZ2V0Q29udGV4dCgpXG4gICAgICAgIHRoaXMuZ2wgPSBnbFxuICAgICAgICB0aGlzLmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKClcbiAgICAgICAgaWYgKG9wdC5jb2xvciAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0LmNvbG9yICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHRoaXMuY29sb3Iuc2V0KG9wdC5jb2xvcilcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbnVtYmVyKG9wdC5vcGFjaXR5LCAxLjApXG5cbiAgICAgICAgLy9pZiBubyB0ZXh0dXJlcyBhcmUgZ2l2ZW4sIHByZXN1bWUgdGhleSBhcmUgYmFzZTY0IHBhY2tlZFxuICAgICAgICAvL2ludG8gdGhlIEZvbnQgb2JqZWN0IChsaWtlIHdpdGggYm1mb250LWxhdG8pXG4gICAgICAgIHZhciB0ZXh0T3B0cyA9IHh0ZW5kKG9wdClcbiAgICAgICAgaWYgKHRleHRPcHRzLnRleHR1cmVzKSB7XG4gICAgICAgICAgICB0ZXh0T3B0cy50ZXh0dXJlcyA9IHRleHRPcHRzLnRleHR1cmVzLm1hcChmdW5jdGlvbih0ZXgpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVxdWlyZSgnZ2wtdGV4dHVyZTJkJykoZ2wsIHRleC5pbWFnZSlcbiAgICAgICAgICAgICAgICBpZiAodGV4IGluc3RhbmNlb2YgVEhSRUUuVGV4dHVyZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdyYXBUZXh0dXJlKHJlbmRlcmVyLCB0ZXgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY3JlYXRlVGV4dChnbCwgdGV4dE9wdHMpXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbWF0NC5jcmVhdGUoKVxuXG4gICAgICAgIGlmICghc2hhcmVkU2hhZGVyICYmICFvcHQuc2hhZGVyKVxuICAgICAgICAgICAgc2hhcmVkU2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCB2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcylcbiAgICAgICAgdGhpcy5zaGFkZXIgPSBvcHQuc2hhZGVyIHx8IHNoYXJlZFNoYWRlclxuICAgICAgICB0aGlzLnNoYWRlci5iaW5kKClcblxuICAgICAgICB0aGlzLnBhZGRpbmcgPSBudW1iZXIob3B0LnBhZGRpbmcsIDApXG5cbiAgICAgICAgdmFyIHMgPSBudW1iZXIob3B0LnNtb290aGluZywgMS4wLzMyLjApXG4gICAgICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnNtb290aGluZyA9IHNcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMudGV4dHVyZTAgPSAwXG4gICAgfVxuXG4gICAgVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY2FtZXJhLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbFxuXG4gICAgICAgIGlmICghb2JqZWN0LnZpc2libGUpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC50ZXh0dXJlcyB8fCB0aGlzLmVsZW1lbnQudGV4dHVyZXMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgZ2wuZW5hYmxlKGdsLkJMRU5EKVxuICAgICAgICAvLyBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIG51bGwpXG5cbiAgICAgICAgZ2wuZW5hYmxlKGdsLkRFUFRIX1RFU1QpXG4gICAgICAgIGdsLmRlcHRoRnVuYyhnbC5MRVFVQUwpXG5cbiAgICAgICAgLy8gZ2wuZnJvbnRGYWNlKCBnbC5DQ1cgKSAgICBcbiAgICAgICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSlcbiAgICAgICAgLy8gZ2wuY3VsbEZhY2UoIGdsLkZST05UIClcbiAgICAgICAgZ2wuY29sb3JNYXNrKHRydWUsIHRydWUsIHRydWUsIHRydWUpXG4gICAgICAgIGdsLmRpc2FibGUoZ2wuU1RFTkNJTF9URVNUKVxuICAgICAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKVxuICAgICAgICBnbC5kZXB0aE1hc2sodHJ1ZSlcbiAgICAgICAgZ2wuYmxlbmRGdW5jKGdsLlNSQ19BTFBIQSwgZ2wuT05FX01JTlVTX1NSQ19BTFBIQSlcblxuICAgICAgICB0aGlzLnNoYWRlci5iaW5kKClcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHR1cmVzWzBdLmJpbmQoMClcblxuICAgICAgICAvLyBnbC5jb2xvck1hc2sodHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSlcblxuICAgICAgICBnbC5jdWxsRmFjZShnbC5GUk9OVClcblxuICAgICAgICBtYXQ0Lm11bHRpcGx5KG1vZGVsVHJhbnNmb3JtLCBvYmplY3QubWF0cml4V29ybGQuZWxlbWVudHMsIHRoaXMudHJhbnNmb3JtKVxuICAgICAgICBtYXQ0Lm11bHRpcGx5KG1vZGVsVHJhbnNmb3JtLCBtb2RlbFRyYW5zZm9ybSwgZmxpcClcblxuICAgICAgICB0aGlzLnNoYWRlci5iaW5kKClcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMucHJvamVjdGlvbiA9IGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4LmVsZW1lbnRzXG4gICAgICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLnZpZXcgPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlLmVsZW1lbnRzXG4gICAgICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLm1vZGVsID0gbW9kZWxUcmFuc2Zvcm1cbiAgICAgICAgICAgIFxuICAgICAgICBjb3B5Q29sb3IodGhpcy5lbGVtZW50LmJhdGNoLmNvbG9yLCB0aGlzLmNvbG9yLCB0aGlzLm9wYWNpdHkpXG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmF3KHRoaXMuc2hhZGVyLCB0aGlzLnBhZGRpbmcsIHRoaXMucGFkZGluZylcblxuICAgICAgICBnbC5jdWxsRmFjZSggZ2wuQkFDSyApXG4gICAgfVxuXG5cbiAgICByZXR1cm4gVGV4dFJlbmRlcmVyXG59IiwiLy8gaW4gdGltZSB0aGlzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhIHNvbHV0aW9uXG4vLyB0aGF0IGJldHRlciBzdXBwb3J0ZWQgVGhyZWVKUyBUZXh0dXJlIG9iamVjdHNcblxuXG5mdW5jdGlvbiBUZXh0dXJlV3JhcChyZW5kZXJlciwgdGV4KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRleHR1cmVXcmFwKSlcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0dXJlV3JhcChyZW5kZXJlciwgdGV4KVxuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlclxuICAgIHRoaXMudGV4dHVyZSA9IHRleFxuICAgIHRoaXMuX3NoYXBlID0gWzAsIDBdXG59XG5cblRleHR1cmVXcmFwLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24odW5pdCkge1xuICAgIHVwZGF0ZVNpemUodGhpcy5fc2hhcGUsIHRoaXMudGV4dHVyZSlcblxuXG4gICAgdmFyIGdsID0gdGhpcy5yZW5kZXJlci5nZXRDb250ZXh0KClcbiAgICB0aGlzLnJlbmRlcmVyLnNldFRleHR1cmUodGhpcy50ZXh0dXJlLCB1bml0fDApXG4gICAgXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlLl9fd2ViZ2xUZXh0dXJlKVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVGV4dHVyZVdyYXAucHJvdG90eXBlLCBcInNoYXBlXCIsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHVwZGF0ZVNpemUodGhpcy5fc2hhcGUsIHRoaXMudGV4dHVyZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlXG4gICAgfVxufSlcblxuZnVuY3Rpb24gdXBkYXRlU2l6ZShzaGFwZSwgdGV4dHVyZSkge1xuICAgIHNoYXBlWzBdID0gKHRleHR1cmUuaW1hZ2UgJiYgdGV4dHVyZS5pbWFnZS53aWR0aCkgIHwwXG4gICAgc2hhcGVbMV0gPSAodGV4dHVyZS5pbWFnZSAmJiB0ZXh0dXJlLmltYWdlLmhlaWdodCkgfDBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlV3JhcCIsIm1vZHVsZS5leHBvcnRzID0ge1widmVydGV4XCI6XCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyB2ZWMyIHZfcmdiTlc7XFxudmFyeWluZyB2ZWMyIHZfcmdiTkU7XFxudmFyeWluZyB2ZWMyIHZfcmdiU1c7XFxudmFyeWluZyB2ZWMyIHZfcmdiU0U7XFxudmFyeWluZyB2ZWMyIHZfcmdiTTtcXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG52b2lkIGFfeF90ZXhjb29yZHModmVjMiBmcmFnQ29vcmQsIHZlYzIgcmVzb2x1dGlvbiwgb3V0IHZlYzIgdl9yZ2JOVywgb3V0IHZlYzIgdl9yZ2JORSwgb3V0IHZlYzIgdl9yZ2JTVywgb3V0IHZlYzIgdl9yZ2JTRSwgb3V0IHZlYzIgdl9yZ2JNKSB7XFxuICB2ZWMyIGludmVyc2VWUCA9IDEuMCAvIHJlc29sdXRpb24ueHk7XFxuICB2X3JnYk5XID0gKGZyYWdDb29yZCArIHZlYzIoLTEuMCwgLTEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JORSA9IChmcmFnQ29vcmQgKyB2ZWMyKDEuMCwgLTEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JTVyA9IChmcmFnQ29vcmQgKyB2ZWMyKC0xLjAsIDEuMCkpICogaW52ZXJzZVZQO1xcbiAgdl9yZ2JTRSA9IChmcmFnQ29vcmQgKyB2ZWMyKDEuMCwgMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYk0gPSB2ZWMyKGZyYWdDb29yZCAqIGludmVyc2VWUCk7XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgdmVjMiBmcmFnQ29vcmQgPSB1diAqIHJlc29sdXRpb247XFxuICBhX3hfdGV4Y29vcmRzKGZyYWdDb29yZCwgcmVzb2x1dGlvbiwgdl9yZ2JOVywgdl9yZ2JORSwgdl9yZ2JTVywgdl9yZ2JTRSwgdl9yZ2JNKTtcXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiLFwiZnJhZ21lbnRcIjpcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JOVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JORTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTRTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JNO1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbiNpZm5kZWYgRlhBQV9SRURVQ0VfTUlOXFxuXFxuI2RlZmluZSBGWEFBX1JFRFVDRV9NSU4gICAoMS4wLyAxMjguMClcXG5cXG4jZW5kaWZcXG5cXG4jaWZuZGVmIEZYQUFfUkVEVUNFX01VTFxcblxcbiNkZWZpbmUgRlhBQV9SRURVQ0VfTVVMICAgKDEuMCAvIDguMClcXG5cXG4jZW5kaWZcXG5cXG4jaWZuZGVmIEZYQUFfU1BBTl9NQVhcXG5cXG4jZGVmaW5lIEZYQUFfU1BBTl9NQVggICAgIDguMFxcblxcbiNlbmRpZlxcblxcbnZlYzQgYV94X2Z4YWEoc2FtcGxlcjJEIHRleCwgdmVjMiBmcmFnQ29vcmQsIHZlYzIgcmVzb2x1dGlvbiwgdmVjMiB2X3JnYk5XLCB2ZWMyIHZfcmdiTkUsIHZlYzIgdl9yZ2JTVywgdmVjMiB2X3JnYlNFLCB2ZWMyIHZfcmdiTSkge1xcbiAgdmVjNCBjb2xvcjtcXG4gIG1lZGl1bXAgdmVjMiBpbnZlcnNlVlAgPSB2ZWMyKDEuMCAvIHJlc29sdXRpb24ueCwgMS4wIC8gcmVzb2x1dGlvbi55KTtcXG4gIHZlYzMgcmdiTlcgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYk5XKS54eXo7XFxuICB2ZWMzIHJnYk5FID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JORSkueHl6O1xcbiAgdmVjMyByZ2JTVyA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiU1cpLnh5ejtcXG4gIHZlYzMgcmdiU0UgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYlNFKS54eXo7XFxuICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JNKTtcXG4gIHZlYzMgcmdiTSA9IHRleENvbG9yLnh5ejtcXG4gIHZlYzMgbHVtYSA9IHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCk7XFxuICBmbG9hdCBsdW1hTlcgPSBkb3QocmdiTlcsIGx1bWEpO1xcbiAgZmxvYXQgbHVtYU5FID0gZG90KHJnYk5FLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFTVyA9IGRvdChyZ2JTVywgbHVtYSk7XFxuICBmbG9hdCBsdW1hU0UgPSBkb3QocmdiU0UsIGx1bWEpO1xcbiAgZmxvYXQgbHVtYU0gPSBkb3QocmdiTSwgbHVtYSk7XFxuICBmbG9hdCBsdW1hTWluID0gbWluKGx1bWFNLCBtaW4obWluKGx1bWFOVywgbHVtYU5FKSwgbWluKGx1bWFTVywgbHVtYVNFKSkpO1xcbiAgZmxvYXQgbHVtYU1heCA9IG1heChsdW1hTSwgbWF4KG1heChsdW1hTlcsIGx1bWFORSksIG1heChsdW1hU1csIGx1bWFTRSkpKTtcXG4gIG1lZGl1bXAgdmVjMiBkaXI7XFxuICBkaXIueCA9IC0oKGx1bWFOVyArIGx1bWFORSkgLSAobHVtYVNXICsgbHVtYVNFKSk7XFxuICBkaXIueSA9ICgobHVtYU5XICsgbHVtYVNXKSAtIChsdW1hTkUgKyBsdW1hU0UpKTtcXG4gIGZsb2F0IGRpclJlZHVjZSA9IG1heCgobHVtYU5XICsgbHVtYU5FICsgbHVtYVNXICsgbHVtYVNFKSAqICgwLjI1ICogRlhBQV9SRURVQ0VfTVVMKSwgRlhBQV9SRURVQ0VfTUlOKTtcXG4gIGZsb2F0IHJjcERpck1pbiA9IDEuMCAvIChtaW4oYWJzKGRpci54KSwgYWJzKGRpci55KSkgKyBkaXJSZWR1Y2UpO1xcbiAgZGlyID0gbWluKHZlYzIoRlhBQV9TUEFOX01BWCwgRlhBQV9TUEFOX01BWCksIG1heCh2ZWMyKC1GWEFBX1NQQU5fTUFYLCAtRlhBQV9TUEFOX01BWCksIGRpciAqIHJjcERpck1pbikpICogaW52ZXJzZVZQO1xcbiAgdmVjMyByZ2JBID0gMC41ICogKHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqICgxLjAgLyAzLjAgLSAwLjUpKS54eXogKyB0ZXh0dXJlMkQodGV4LCBmcmFnQ29vcmQgKiBpbnZlcnNlVlAgKyBkaXIgKiAoMi4wIC8gMy4wIC0gMC41KSkueHl6KTtcXG4gIHZlYzMgcmdiQiA9IHJnYkEgKiAwLjUgKyAwLjI1ICogKHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqIC0wLjUpLnh5eiArIHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqIDAuNSkueHl6KTtcXG4gIGZsb2F0IGx1bWFCID0gZG90KHJnYkIsIGx1bWEpO1xcbiAgaWYoKGx1bWFCIDwgbHVtYU1pbikgfHwgKGx1bWFCID4gbHVtYU1heCkpXFxuICAgIGNvbG9yID0gdmVjNChyZ2JBLCB0ZXhDb2xvci5hKTtcXG4gIGVsc2VcXG4gICAgY29sb3IgPSB2ZWM0KHJnYkIsIHRleENvbG9yLmEpO1xcbiAgcmV0dXJuIGNvbG9yO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICB2ZWMyIGZyYWdDb29yZCA9IHZVdiAqIHJlc29sdXRpb247XFxuICBnbF9GcmFnQ29sb3IgPSBhX3hfZnhhYSh0RGlmZnVzZSwgZnJhZ0Nvb3JkLCByZXNvbHV0aW9uLCB2X3JnYk5XLCB2X3JnYk5FLCB2X3JnYlNXLCB2X3JnYlNFLCB2X3JnYk0pO1xcbn1cIixcInVuaWZvcm1zXCI6W3tcIm5hbWVcIjpcInJlc29sdXRpb25cIixcInR5cGVcIjpcInZlYzJcIn0se1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSxcImF0dHJpYnV0ZXNcIjpbXX0iLCIvLyB2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoJ2dsc2xpZnknKVxudmFyIHRocmVlaWZ5ID0gcmVxdWlyZSgndGhyZWUtZ2xzbGlmeScpXG5cbi8vIHZhciBzb3VyY2UgPSBnbHNsaWZ5KHtcbi8vICAgICB2ZXJ0ZXg6ICcuL3ZlcnQuZ2xzbCcsXG4vLyAgICAgZnJhZ21lbnQ6ICcuL2ZyYWcuZ2xzbCcsXG4vLyAgICAgc291cmNlT25seTogdHJ1ZVxuLy8gfSlcblxudmFyIHNvdXJjZSA9IHJlcXVpcmUoJy4vY29tcGlsZWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gICAgdmFyIGNyZWF0ZVNoYWRlciA9IHRocmVlaWZ5KFRIUkVFKVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVNoYWRlcihzb3VyY2UpXG4gICAgfVxufSIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuXG4gICAgZnVuY3Rpb24gQ29tcGxleChtZXNoKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wbGV4KSlcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29tcGxleChtZXNoKVxuICAgICAgICBUSFJFRS5HZW9tZXRyeS5jYWxsKHRoaXMpXG4gICAgICAgIHRoaXMuZHluYW1pYyA9IHRydWVcblxuICAgICAgICBpZiAobWVzaClcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKG1lc2gpXG4gICAgfVxuXG4gICAgaW5oZXJpdHMoQ29tcGxleCwgVEhSRUUuR2VvbWV0cnkpXG5cbiAgICAvL21heSBleHBvc2UgdGhlc2UgaW4gbmV4dCB2ZXJzaW9uXG4gICAgQ29tcGxleC5wcm90b3R5cGUuX3VwZGF0ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uKHBvc2l0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8cG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG9zID0gcG9zaXRpb25zW2ldXG4gICAgICAgICAgICBpZiAoaSA+IHRoaXMudmVydGljZXMubGVuZ3RoLTEpXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKG5ldyBUSFJFRS5WZWN0b3IzKCkuZnJvbUFycmF5KHBvcykpXG4gICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXNbaV0uZnJvbUFycmF5KHBvcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZlcnRpY2VzLmxlbmd0aCA9IHBvc2l0aW9ucy5sZW5ndGhcbiAgICAgICAgdGhpcy52ZXJ0aWNlc05lZWRVcGRhdGUgPSB0cnVlXG4gICAgfVxuXG4gICAgQ29tcGxleC5wcm90b3R5cGUuX3VwZGF0ZUNlbGxzID0gZnVuY3Rpb24oY2VsbHMpIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZmFjZSA9IGNlbGxzW2ldXG4gICAgICAgICAgICBpZiAoaSA+IHRoaXMuZmFjZXMubGVuZ3RoLTEpXG4gICAgICAgICAgICAgICAgdGhpcy5mYWNlcy5wdXNoKG5ldyBUSFJFRS5GYWNlMyhmYWNlWzBdLCBmYWNlWzFdLCBmYWNlWzJdKSlcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0ZiA9IHRoaXMuZmFjZXNbaV1cbiAgICAgICAgICAgICAgICB0Zi5hID0gZmFjZVswXVxuICAgICAgICAgICAgICAgIHRmLmIgPSBmYWNlWzFdXG4gICAgICAgICAgICAgICAgdGYuYyA9IGZhY2VbMl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmFjZXMubGVuZ3RoID0gY2VsbHMubGVuZ3RoXG4gICAgICAgIHRoaXMuZWxlbWVudHNOZWVkVXBkYXRlID0gdHJ1ZVxuICAgIH1cblxuICAgIENvbXBsZXgucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKG1lc2gpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb25zKG1lc2gucG9zaXRpb25zKVxuICAgICAgICB0aGlzLl91cGRhdGVDZWxscyhtZXNoLmNlbGxzKVxuICAgIH1cblxuICAgIHJldHVybiBDb21wbGV4XG59IiwiLyoqXG4gKiBCaXQgdHdpZGRsaW5nIGhhY2tzIGZvciBKYXZhU2NyaXB0LlxuICpcbiAqIEF1dGhvcjogTWlrb2xhIEx5c2Vua29cbiAqXG4gKiBQb3J0ZWQgZnJvbSBTdGFuZm9yZCBiaXQgdHdpZGRsaW5nIGhhY2sgbGlicmFyeTpcbiAqICAgIGh0dHA6Ly9ncmFwaGljcy5zdGFuZm9yZC5lZHUvfnNlYW5kZXIvYml0aGFja3MuaHRtbFxuICovXG5cblwidXNlIHN0cmljdFwiOyBcInVzZSByZXN0cmljdFwiO1xuXG4vL051bWJlciBvZiBiaXRzIGluIGFuIGludGVnZXJcbnZhciBJTlRfQklUUyA9IDMyO1xuXG4vL0NvbnN0YW50c1xuZXhwb3J0cy5JTlRfQklUUyAgPSBJTlRfQklUUztcbmV4cG9ydHMuSU5UX01BWCAgID0gIDB4N2ZmZmZmZmY7XG5leHBvcnRzLklOVF9NSU4gICA9IC0xPDwoSU5UX0JJVFMtMSk7XG5cbi8vUmV0dXJucyAtMSwgMCwgKzEgZGVwZW5kaW5nIG9uIHNpZ24gb2YgeFxuZXhwb3J0cy5zaWduID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gKHYgPiAwKSAtICh2IDwgMCk7XG59XG5cbi8vQ29tcHV0ZXMgYWJzb2x1dGUgdmFsdWUgb2YgaW50ZWdlclxuZXhwb3J0cy5hYnMgPSBmdW5jdGlvbih2KSB7XG4gIHZhciBtYXNrID0gdiA+PiAoSU5UX0JJVFMtMSk7XG4gIHJldHVybiAodiBeIG1hc2spIC0gbWFzaztcbn1cblxuLy9Db21wdXRlcyBtaW5pbXVtIG9mIGludGVnZXJzIHggYW5kIHlcbmV4cG9ydHMubWluID0gZnVuY3Rpb24oeCwgeSkge1xuICByZXR1cm4geSBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xufVxuXG4vL0NvbXB1dGVzIG1heGltdW0gb2YgaW50ZWdlcnMgeCBhbmQgeVxuZXhwb3J0cy5tYXggPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB4IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG59XG5cbi8vQ2hlY2tzIGlmIGEgbnVtYmVyIGlzIGEgcG93ZXIgb2YgdHdvXG5leHBvcnRzLmlzUG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICEodiAmICh2LTEpKSAmJiAoISF2KTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAyIG9mIHZcbmV4cG9ydHMubG9nMiA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIHIsIHNoaWZ0O1xuICByID0gICAgICh2ID4gMHhGRkZGKSA8PCA0OyB2ID4+Pj0gcjtcbiAgc2hpZnQgPSAodiA+IDB4RkYgICkgPDwgMzsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICBzaGlmdCA9ICh2ID4gMHhGICAgKSA8PCAyOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHNoaWZ0ID0gKHYgPiAweDMgICApIDw8IDE7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgcmV0dXJuIHIgfCAodiA+PiAxKTtcbn1cblxuLy9Db21wdXRlcyBsb2cgYmFzZSAxMCBvZiB2XG5leHBvcnRzLmxvZzEwID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gICh2ID49IDEwMDAwMDAwMDApID8gOSA6ICh2ID49IDEwMDAwMDAwMCkgPyA4IDogKHYgPj0gMTAwMDAwMDApID8gNyA6XG4gICAgICAgICAgKHYgPj0gMTAwMDAwMCkgPyA2IDogKHYgPj0gMTAwMDAwKSA/IDUgOiAodiA+PSAxMDAwMCkgPyA0IDpcbiAgICAgICAgICAodiA+PSAxMDAwKSA/IDMgOiAodiA+PSAxMDApID8gMiA6ICh2ID49IDEwKSA/IDEgOiAwO1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgYml0c1xuZXhwb3J0cy5wb3BDb3VudCA9IGZ1bmN0aW9uKHYpIHtcbiAgdiA9IHYgLSAoKHYgPj4+IDEpICYgMHg1NTU1NTU1NSk7XG4gIHYgPSAodiAmIDB4MzMzMzMzMzMpICsgKCh2ID4+PiAyKSAmIDB4MzMzMzMzMzMpO1xuICByZXR1cm4gKCh2ICsgKHYgPj4+IDQpICYgMHhGMEYwRjBGKSAqIDB4MTAxMDEwMSkgPj4+IDI0O1xufVxuXG4vL0NvdW50cyBudW1iZXIgb2YgdHJhaWxpbmcgemVyb3NcbmZ1bmN0aW9uIGNvdW50VHJhaWxpbmdaZXJvcyh2KSB7XG4gIHZhciBjID0gMzI7XG4gIHYgJj0gLXY7XG4gIGlmICh2KSBjLS07XG4gIGlmICh2ICYgMHgwMDAwRkZGRikgYyAtPSAxNjtcbiAgaWYgKHYgJiAweDAwRkYwMEZGKSBjIC09IDg7XG4gIGlmICh2ICYgMHgwRjBGMEYwRikgYyAtPSA0O1xuICBpZiAodiAmIDB4MzMzMzMzMzMpIGMgLT0gMjtcbiAgaWYgKHYgJiAweDU1NTU1NTU1KSBjIC09IDE7XG4gIHJldHVybiBjO1xufVxuZXhwb3J0cy5jb3VudFRyYWlsaW5nWmVyb3MgPSBjb3VudFRyYWlsaW5nWmVyb3M7XG5cbi8vUm91bmRzIHRvIG5leHQgcG93ZXIgb2YgMlxuZXhwb3J0cy5uZXh0UG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgdiArPSB2ID09PSAwO1xuICAtLXY7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgKyAxO1xufVxuXG4vL1JvdW5kcyBkb3duIHRvIHByZXZpb3VzIHBvd2VyIG9mIDJcbmV4cG9ydHMucHJldlBvdzIgPSBmdW5jdGlvbih2KSB7XG4gIHYgfD0gdiA+Pj4gMTtcbiAgdiB8PSB2ID4+PiAyO1xuICB2IHw9IHYgPj4+IDQ7XG4gIHYgfD0gdiA+Pj4gODtcbiAgdiB8PSB2ID4+PiAxNjtcbiAgcmV0dXJuIHYgLSAodj4+PjEpO1xufVxuXG4vL0NvbXB1dGVzIHBhcml0eSBvZiB3b3JkXG5leHBvcnRzLnBhcml0eSA9IGZ1bmN0aW9uKHYpIHtcbiAgdiBePSB2ID4+PiAxNjtcbiAgdiBePSB2ID4+PiA4O1xuICB2IF49IHYgPj4+IDQ7XG4gIHYgJj0gMHhmO1xuICByZXR1cm4gKDB4Njk5NiA+Pj4gdikgJiAxO1xufVxuXG52YXIgUkVWRVJTRV9UQUJMRSA9IG5ldyBBcnJheSgyNTYpO1xuXG4oZnVuY3Rpb24odGFiKSB7XG4gIGZvcih2YXIgaT0wOyBpPDI1NjsgKytpKSB7XG4gICAgdmFyIHYgPSBpLCByID0gaSwgcyA9IDc7XG4gICAgZm9yICh2ID4+Pj0gMTsgdjsgdiA+Pj49IDEpIHtcbiAgICAgIHIgPDw9IDE7XG4gICAgICByIHw9IHYgJiAxO1xuICAgICAgLS1zO1xuICAgIH1cbiAgICB0YWJbaV0gPSAociA8PCBzKSAmIDB4ZmY7XG4gIH1cbn0pKFJFVkVSU0VfVEFCTEUpO1xuXG4vL1JldmVyc2UgYml0cyBpbiBhIDMyIGJpdCB3b3JkXG5leHBvcnRzLnJldmVyc2UgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAgKFJFVkVSU0VfVEFCTEVbIHYgICAgICAgICAmIDB4ZmZdIDw8IDI0KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDgpICAmIDB4ZmZdIDw8IDE2KSB8XG4gICAgICAgICAgKFJFVkVSU0VfVEFCTEVbKHYgPj4+IDE2KSAmIDB4ZmZdIDw8IDgpICB8XG4gICAgICAgICAgIFJFVkVSU0VfVEFCTEVbKHYgPj4+IDI0KSAmIDB4ZmZdO1xufVxuXG4vL0ludGVybGVhdmUgYml0cyBvZiAyIGNvb3JkaW5hdGVzIHdpdGggMTYgYml0cy4gIFVzZWZ1bCBmb3IgZmFzdCBxdWFkdHJlZSBjb2Rlc1xuZXhwb3J0cy5pbnRlcmxlYXZlMiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgeCAmPSAweEZGRkY7XG4gIHggPSAoeCB8ICh4IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHggPSAoeCB8ICh4IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHggPSAoeCB8ICh4IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHggPSAoeCB8ICh4IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgeSAmPSAweEZGRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDgpKSAmIDB4MDBGRjAwRkY7XG4gIHkgPSAoeSB8ICh5IDw8IDQpKSAmIDB4MEYwRjBGMEY7XG4gIHkgPSAoeSB8ICh5IDw8IDIpKSAmIDB4MzMzMzMzMzM7XG4gIHkgPSAoeSB8ICh5IDw8IDEpKSAmIDB4NTU1NTU1NTU7XG5cbiAgcmV0dXJuIHggfCAoeSA8PCAxKTtcbn1cblxuLy9FeHRyYWN0cyB0aGUgbnRoIGludGVybGVhdmVkIGNvbXBvbmVudFxuZXhwb3J0cy5kZWludGVybGVhdmUyID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICYgMHg1NTU1NTU1NTtcbiAgdiA9ICh2IHwgKHYgPj4+IDEpKSAgJiAweDMzMzMzMzMzO1xuICB2ID0gKHYgfCAodiA+Pj4gMikpICAmIDB4MEYwRjBGMEY7XG4gIHYgPSAodiB8ICh2ID4+PiA0KSkgICYgMHgwMEZGMDBGRjtcbiAgdiA9ICh2IHwgKHYgPj4+IDE2KSkgJiAweDAwMEZGRkY7XG4gIHJldHVybiAodiA8PCAxNikgPj4gMTY7XG59XG5cblxuLy9JbnRlcmxlYXZlIGJpdHMgb2YgMyBjb29yZGluYXRlcywgZWFjaCB3aXRoIDEwIGJpdHMuICBVc2VmdWwgZm9yIGZhc3Qgb2N0cmVlIGNvZGVzXG5leHBvcnRzLmludGVybGVhdmUzID0gZnVuY3Rpb24oeCwgeSwgeikge1xuICB4ICY9IDB4M0ZGO1xuICB4ICA9ICh4IHwgKHg8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB4ICA9ICh4IHwgKHg8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHggID0gKHggfCAoeDw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHggID0gKHggfCAoeDw8MikpICAmIDEyMjcxMzM1MTM7XG5cbiAgeSAmPSAweDNGRjtcbiAgeSAgPSAoeSB8ICh5PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeSAgPSAoeSB8ICh5PDw4KSkgICYgMjUxNzE5Njk1O1xuICB5ICA9ICh5IHwgKHk8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB5ICA9ICh5IHwgKHk8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICB4IHw9ICh5IDw8IDEpO1xuICBcbiAgeiAmPSAweDNGRjtcbiAgeiAgPSAoeiB8ICh6PDwxNikpICYgNDI3ODE5MDMzNTtcbiAgeiAgPSAoeiB8ICh6PDw4KSkgICYgMjUxNzE5Njk1O1xuICB6ICA9ICh6IHwgKHo8PDQpKSAgJiAzMjcyMzU2MDM1O1xuICB6ICA9ICh6IHwgKHo8PDIpKSAgJiAxMjI3MTMzNTEzO1xuICBcbiAgcmV0dXJuIHggfCAoeiA8PCAyKTtcbn1cblxuLy9FeHRyYWN0cyBudGggaW50ZXJsZWF2ZWQgY29tcG9uZW50IG9mIGEgMy10dXBsZVxuZXhwb3J0cy5kZWludGVybGVhdmUzID0gZnVuY3Rpb24odiwgbikge1xuICB2ID0gKHYgPj4+IG4pICAgICAgICYgMTIyNzEzMzUxMztcbiAgdiA9ICh2IHwgKHY+Pj4yKSkgICAmIDMyNzIzNTYwMzU7XG4gIHYgPSAodiB8ICh2Pj4+NCkpICAgJiAyNTE3MTk2OTU7XG4gIHYgPSAodiB8ICh2Pj4+OCkpICAgJiA0Mjc4MTkwMzM1O1xuICB2ID0gKHYgfCAodj4+PjE2KSkgICYgMHgzRkY7XG4gIHJldHVybiAodjw8MjIpPj4yMjtcbn1cblxuLy9Db21wdXRlcyBuZXh0IGNvbWJpbmF0aW9uIGluIGNvbGV4aWNvZ3JhcGhpYyBvcmRlciAodGhpcyBpcyBtaXN0YWtlbmx5IGNhbGxlZCBuZXh0UGVybXV0YXRpb24gb24gdGhlIGJpdCB0d2lkZGxpbmcgaGFja3MgcGFnZSlcbmV4cG9ydHMubmV4dENvbWJpbmF0aW9uID0gZnVuY3Rpb24odikge1xuICB2YXIgdCA9IHYgfCAodiAtIDEpO1xuICByZXR1cm4gKHQgKyAxKSB8ICgoKH50ICYgLX50KSAtIDEpID4+PiAoY291bnRUcmFpbGluZ1plcm9zKHYpICsgMSkpO1xufVxuXG4iLCIndXNlIHN0cmljdCdcblxudmFyIGJpdHMgPSByZXF1aXJlKCdiaXQtdHdpZGRsZScpXG52YXIgZHVwID0gcmVxdWlyZSgnZHVwJylcblxuLy9MZWdhY3kgcG9vbCBzdXBwb3J0XG5pZighZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MKSB7XG4gIGdsb2JhbC5fX1RZUEVEQVJSQVlfUE9PTCA9IHtcbiAgICAgIFVJTlQ4ICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQxNiAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQzMiAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDggICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDE2ICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIElOVDMyICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIEZMT0FUICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIERPVUJMRSAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIERBVEEgICAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIFVJTlQ4QyAgOiBkdXAoWzMyLCAwXSlcbiAgICAsIEJVRkZFUiAgOiBkdXAoWzMyLCAwXSlcbiAgfVxufVxuXG52YXIgaGFzVWludDhDID0gKHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSkgIT09ICd1bmRlZmluZWQnXG52YXIgUE9PTCA9IGdsb2JhbC5fX1RZUEVEQVJSQVlfUE9PTFxuXG4vL1VwZ3JhZGUgcG9vbFxuaWYoIVBPT0wuVUlOVDhDKSB7XG4gIFBPT0wuVUlOVDhDID0gZHVwKFszMiwgMF0pXG59XG5pZighUE9PTC5CVUZGRVIpIHtcbiAgUE9PTC5CVUZGRVIgPSBkdXAoWzMyLCAwXSlcbn1cblxuLy9OZXcgdGVjaG5pcXVlOiBPbmx5IGFsbG9jYXRlIGZyb20gQXJyYXlCdWZmZXJWaWV3IGFuZCBCdWZmZXJcbnZhciBEQVRBICAgID0gUE9PTC5EQVRBXG4gICwgQlVGRkVSICA9IFBPT0wuQlVGRkVSXG5cbmV4cG9ydHMuZnJlZSA9IGZ1bmN0aW9uIGZyZWUoYXJyYXkpIHtcbiAgaWYoQnVmZmVyLmlzQnVmZmVyKGFycmF5KSkge1xuICAgIEJVRkZFUltiaXRzLmxvZzIoYXJyYXkubGVuZ3RoKV0ucHVzaChhcnJheSlcbiAgfSBlbHNlIHtcbiAgICBpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyYXkpICE9PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgICBhcnJheSA9IGFycmF5LmJ1ZmZlclxuICAgIH1cbiAgICBpZighYXJyYXkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgbiA9IGFycmF5Lmxlbmd0aCB8fCBhcnJheS5ieXRlTGVuZ3RoXG4gICAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pfDBcbiAgICBEQVRBW2xvZ19uXS5wdXNoKGFycmF5KVxuICB9XG59XG5cbmZ1bmN0aW9uIGZyZWVBcnJheUJ1ZmZlcihidWZmZXIpIHtcbiAgaWYoIWJ1ZmZlcikge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gYnVmZmVyLmxlbmd0aCB8fCBidWZmZXIuYnl0ZUxlbmd0aFxuICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobilcbiAgREFUQVtsb2dfbl0ucHVzaChidWZmZXIpXG59XG5cbmZ1bmN0aW9uIGZyZWVUeXBlZEFycmF5KGFycmF5KSB7XG4gIGZyZWVBcnJheUJ1ZmZlcihhcnJheS5idWZmZXIpXG59XG5cbmV4cG9ydHMuZnJlZVVpbnQ4ID1cbmV4cG9ydHMuZnJlZVVpbnQxNiA9XG5leHBvcnRzLmZyZWVVaW50MzIgPVxuZXhwb3J0cy5mcmVlSW50OCA9XG5leHBvcnRzLmZyZWVJbnQxNiA9XG5leHBvcnRzLmZyZWVJbnQzMiA9XG5leHBvcnRzLmZyZWVGbG9hdDMyID0gXG5leHBvcnRzLmZyZWVGbG9hdCA9XG5leHBvcnRzLmZyZWVGbG9hdDY0ID0gXG5leHBvcnRzLmZyZWVEb3VibGUgPSBcbmV4cG9ydHMuZnJlZVVpbnQ4Q2xhbXBlZCA9IFxuZXhwb3J0cy5mcmVlRGF0YVZpZXcgPSBmcmVlVHlwZWRBcnJheVxuXG5leHBvcnRzLmZyZWVBcnJheUJ1ZmZlciA9IGZyZWVBcnJheUJ1ZmZlclxuXG5leHBvcnRzLmZyZWVCdWZmZXIgPSBmdW5jdGlvbiBmcmVlQnVmZmVyKGFycmF5KSB7XG4gIEJVRkZFUltiaXRzLmxvZzIoYXJyYXkubGVuZ3RoKV0ucHVzaChhcnJheSlcbn1cblxuZXhwb3J0cy5tYWxsb2MgPSBmdW5jdGlvbiBtYWxsb2MobiwgZHR5cGUpIHtcbiAgaWYoZHR5cGUgPT09IHVuZGVmaW5lZCB8fCBkdHlwZSA9PT0gJ2FycmF5YnVmZmVyJykge1xuICAgIHJldHVybiBtYWxsb2NBcnJheUJ1ZmZlcihuKVxuICB9IGVsc2Uge1xuICAgIHN3aXRjaChkdHlwZSkge1xuICAgICAgY2FzZSAndWludDgnOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDgobilcbiAgICAgIGNhc2UgJ3VpbnQxNic6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50MTYobilcbiAgICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50MzIobilcbiAgICAgIGNhc2UgJ2ludDgnOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50OChuKVxuICAgICAgY2FzZSAnaW50MTYnOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50MTYobilcbiAgICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0ludDMyKG4pXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0Zsb2F0KG4pXG4gICAgICBjYXNlICdkb3VibGUnOlxuICAgICAgY2FzZSAnZmxvYXQ2NCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NEb3VibGUobilcbiAgICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgICByZXR1cm4gbWFsbG9jVWludDhDbGFtcGVkKG4pXG4gICAgICBjYXNlICdidWZmZXInOlxuICAgICAgICByZXR1cm4gbWFsbG9jQnVmZmVyKG4pXG4gICAgICBjYXNlICdkYXRhJzpcbiAgICAgIGNhc2UgJ2RhdGF2aWV3JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0RhdGFWaWV3KG4pXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbmZ1bmN0aW9uIG1hbGxvY0FycmF5QnVmZmVyKG4pIHtcbiAgdmFyIG4gPSBiaXRzLm5leHRQb3cyKG4pXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICB2YXIgZCA9IERBVEFbbG9nX25dXG4gIGlmKGQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkLnBvcCgpXG4gIH1cbiAgcmV0dXJuIG5ldyBBcnJheUJ1ZmZlcihuKVxufVxuZXhwb3J0cy5tYWxsb2NBcnJheUJ1ZmZlciA9IG1hbGxvY0FycmF5QnVmZmVyXG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQ4KG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50OCA9IG1hbGxvY1VpbnQ4XG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQxNihuKSB7XG4gIHJldHVybiBuZXcgVWludDE2QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoMipuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDE2ID0gbWFsbG9jVWludDE2XG5cbmZ1bmN0aW9uIG1hbGxvY1VpbnQzMihuKSB7XG4gIHJldHVybiBuZXcgVWludDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jVWludDMyID0gbWFsbG9jVWludDMyXG5cbmZ1bmN0aW9uIG1hbGxvY0ludDgobikge1xuICByZXR1cm4gbmV3IEludDhBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50OCA9IG1hbGxvY0ludDhcblxuZnVuY3Rpb24gbWFsbG9jSW50MTYobikge1xuICByZXR1cm4gbmV3IEludDE2QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoMipuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jSW50MTYgPSBtYWxsb2NJbnQxNlxuXG5mdW5jdGlvbiBtYWxsb2NJbnQzMihuKSB7XG4gIHJldHVybiBuZXcgSW50MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQzMiA9IG1hbGxvY0ludDMyXG5cbmZ1bmN0aW9uIG1hbGxvY0Zsb2F0KG4pIHtcbiAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkobWFsbG9jQXJyYXlCdWZmZXIoNCpuKSwgMCwgbilcbn1cbmV4cG9ydHMubWFsbG9jRmxvYXQzMiA9IGV4cG9ydHMubWFsbG9jRmxvYXQgPSBtYWxsb2NGbG9hdFxuXG5mdW5jdGlvbiBtYWxsb2NEb3VibGUobikge1xuICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig4Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NGbG9hdDY0ID0gZXhwb3J0cy5tYWxsb2NEb3VibGUgPSBtYWxsb2NEb3VibGVcblxuZnVuY3Rpb24gbWFsbG9jVWludDhDbGFtcGVkKG4pIHtcbiAgaWYoaGFzVWludDhDKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShtYWxsb2NBcnJheUJ1ZmZlcihuKSwgMCwgbilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWFsbG9jVWludDgobilcbiAgfVxufVxuZXhwb3J0cy5tYWxsb2NVaW50OENsYW1wZWQgPSBtYWxsb2NVaW50OENsYW1wZWRcblxuZnVuY3Rpb24gbWFsbG9jRGF0YVZpZXcobikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NEYXRhVmlldyA9IG1hbGxvY0RhdGFWaWV3XG5cbmZ1bmN0aW9uIG1hbGxvY0J1ZmZlcihuKSB7XG4gIG4gPSBiaXRzLm5leHRQb3cyKG4pXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICB2YXIgY2FjaGUgPSBCVUZGRVJbbG9nX25dXG4gIGlmKGNhY2hlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gY2FjaGUucG9wKClcbiAgfVxuICByZXR1cm4gbmV3IEJ1ZmZlcihuKVxufVxuZXhwb3J0cy5tYWxsb2NCdWZmZXIgPSBtYWxsb2NCdWZmZXJcblxuZXhwb3J0cy5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSgpIHtcbiAgZm9yKHZhciBpPTA7IGk8MzI7ICsraSkge1xuICAgIFBPT0wuVUlOVDhbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDE2W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQzMltpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5JTlQ4W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDE2W2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDMyW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLkZMT0FUW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLkRPVUJMRVtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5VSU5UOENbaV0ubGVuZ3RoID0gMFxuICAgIERBVEFbaV0ubGVuZ3RoID0gMFxuICAgIEJVRkZFUltpXS5sZW5ndGggPSAwXG4gIH1cbn0iLCIvKlxuKiB1YS1kZXZpY2UtdHlwZVxuKiBzcGVjaWFsIHRoYW5rcyB0byByZ3VlcnJlaXJvIGF1dGhvciBvZiBodHRwczovL2dpdGh1Yi5jb20vcmd1ZXJyZWlyby9leHByZXNzLWRldmljZVxuKiB3aG8gdHJhY2tlZCBkb3duIHRoZSBkZXZpY2UgbWF0Y2hpbmcgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9iamFua29yZC9DYXRlZ29yaXpyXG4qIGkgbmVlZGVkIHRvIHVzZSB0aGlzIHdpdGhvdXQgdXNpbmcgZXhwcmVzcy4gaXRzIGEgc21hbGwgbGliIHNvIGkgYnVuZGxlZCBpdCB1cCBmb3IgYWxsIHRvIGVuam95LlxuKi9cblxuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGVtcHR5VXNlckFnZW50RGV2aWNlVHlwZTogJ2Rlc2t0b3AnLFxuICB1bmtub3duVXNlckFnZW50RGV2aWNlVHlwZTogJ3Bob25lJyxcbiAgYm90VXNlckFnZW50RGV2aWNlVHlwZTogJ2JvdCdcbn07XG5cbnZhciBkZXZpY2VzID0ge1xuICB0djpcInR2XCIsXG4gIHRhYmxldDpcInRhYmxldFwiLFxuICBwaG9uZTpcInBob25lXCIsXG4gIGRlc2t0b3A6XCJkZXNrdG9wXCIsXG4gIGJvdDpcImJvdFwiXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1YSxvcHRpb25zKXtcbiAgb3B0aW9ucyA9IG9wdGlvbnN8fHt9OyAgICAgICAgXG5cbiAgaWYgKCF1YSB8fCB1YSA9PT0gJycpIHtcbiAgICAvLyBObyB1c2VyIGFnZW50LlxuICAgIHJldHVybiBvcHRpb25zLmVtcHR5VXNlckFnZW50RGV2aWNlVHlwZXx8ZGV2aWNlcy5kZXNrdG9wO1xuICB9XG5cbiAgaWYgKHVhLm1hdGNoKC9Hb29nbGVUVnxTbWFydFRWfEludGVybmV0IFRWfE5ldENhc3R8TkVUVFZ8QXBwbGVUVnxib3hlZXxLeWxvfFJva3V8RExOQURPQ3xDRVxcLUhUTUwvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgc21hcnQgVFYgLSBodHRwOi8vZ29vLmdsL0ZvY0RrXG4gICAgcmV0dXJuIGRldmljZXMudHY7XG4gIH0gZWxzZSBpZiAodWEubWF0Y2goL1hib3h8UExBWVNUQVRJT04gM3xXaWkvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgVFYgQmFzZWQgR2FtaW5nIENvbnNvbGVcbiAgICByZXR1cm4gZGV2aWNlcy50djtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvaVAoYXxybylkL2kpIHx8ICh1YS5tYXRjaCgvdGFibGV0L2kpICYmICF1YS5tYXRjaCgvUlgtMzQvaSkpIHx8IHVhLm1hdGNoKC9GT0xJTy9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgYSBUYWJsZXRcbiAgICByZXR1cm4gZGV2aWNlcy50YWJsZXQ7XG4gIH0gZWxzZSBpZiAodWEubWF0Y2goL0xpbnV4L2kpICYmIHVhLm1hdGNoKC9BbmRyb2lkL2kpICYmICF1YS5tYXRjaCgvRmVubmVjfG1vYml8SFRDIE1hZ2ljfEhUQ1gwNkhUfE5leHVzIE9uZXxTQy0wMkJ8Zm9uZSA5NDUvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGFuIEFuZHJvaWQgVGFibGV0XG4gICAgcmV0dXJuIGRldmljZXMudGFibGV0O1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9LaW5kbGUvaSkgfHwgKHVhLm1hdGNoKC9NYWMgT1MvaSkgJiYgdWEubWF0Y2goL1NpbGsvaSkpKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhIEtpbmRsZSBvciBLaW5kbGUgRmlyZVxuICAgIHJldHVybiBkZXZpY2VzLnRhYmxldDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvR1QtUDEwfFNDLTAxQ3xTSFctTTE4MFN8U0dILVQ4NDl8U0NILUk4MDB8U0hXLU0xODBMfFNQSC1QMTAwfFNHSC1JOTg3fHp0MTgwfEhUQyggRmx5ZXJ8X0ZseWVyKXxTcHJpbnQgQVRQNTF8Vmlld1BhZDd8cGFuZGlnaXRhbChzcHJub3ZhfG5vdmEpfElkZW9zIFM3fERlbGwgU3RyZWFrIDd8QWR2ZW50IFZlZ2F8QTEwMUlUfEE3MEJIVHxNSUQ3MDE1fE5leHQyfG5vb2svaSkgfHwgKHVhLm1hdGNoKC9NQjUxMS9pKSAmJiB1YS5tYXRjaCgvUlVURU0vaSkpKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhIHByZSBBbmRyb2lkIDMuMCBUYWJsZXRcbiAgICByZXR1cm4gZGV2aWNlcy50YWJsZXQ7XG4gIH0gZWxzZSBpZiAodWEubWF0Y2goL0JPTFR8RmVubmVjfElyaXN8TWFlbW98TWluaW1vfE1vYml8bW93c2VyfE5ldEZyb250fE5vdmFycmF8UHJpc218UlgtMzR8U2t5ZmlyZXxUZWFyfFhWNjg3NXxYVjY5NzV8R29vZ2xlIFdpcmVsZXNzIFRyYW5zY29kZXIvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIHVuaXF1ZSBtb2JpbGUgVXNlciBBZ2VudFxuICAgIHJldHVybiBkZXZpY2VzLnBob25lO1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9PcGVyYS9pKSAmJiB1YS5tYXRjaCgvV2luZG93cyBOVCA1L2kpICYmIHVhLm1hdGNoKC9IVEN8WGRhfE1pbml8VmFyaW98U0FNU1VOR1xcLUdUXFwtaTgwMDB8U0FNU1VOR1xcLVNHSFxcLWk5L2kpKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhbiBvZGQgT3BlcmEgVXNlciBBZ2VudCAtIGh0dHA6Ly9nb28uZ2wvbks5MEtcbiAgICByZXR1cm4gZGV2aWNlcy5waG9uZTtcbiAgfSBlbHNlIGlmICgodWEubWF0Y2goL1dpbmRvd3MgKE5UfFhQfE1FfDkpLykgJiYgIXVhLm1hdGNoKC9QaG9uZS9pKSkgJiYgIXVhLm1hdGNoKC9Cb3R8U3BpZGVyfGlhX2FyY2hpdmVyfE5ld3NHYXRvci9pKSB8fCB1YS5tYXRjaCgvV2luKCA/OXxOVCkvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIFdpbmRvd3MgRGVza3RvcFxuICAgIHJldHVybiBkZXZpY2VzLmRlc2t0b3A7XG4gIH0gZWxzZSBpZiAodWEubWF0Y2goL01hY2ludG9zaHxQb3dlclBDL2kpICYmICF1YS5tYXRjaCgvU2lsay9pKSkge1xuICAgIC8vIGlmIGFnZW50IGlzIE1hYyBEZXNrdG9wXG4gICAgcmV0dXJuIGRldmljZXMuZGVza3RvcDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvTGludXgvaSkgJiYgdWEubWF0Y2goL1gxMS9pKSAmJiAhdWEubWF0Y2goL0NoYXJsb3R0ZS9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgYSBMaW51eCBEZXNrdG9wXG4gICAgcmV0dXJuIGRldmljZXMuZGVza3RvcDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvQ3JPUy8pKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhIENocm9tZSBCb29rXG4gICAgcmV0dXJuIGRldmljZXMuZGVza3RvcDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvU29sYXJpc3xTdW5PU3xCU0QvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgU29sYXJpcywgU3VuT1MsIEJTRCBEZXNrdG9wXG4gICAgcmV0dXJuIGRldmljZXMuZGVza3RvcDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvY3VybHxCb3R8Qi1PLVR8Q3Jhd2xlcnxTcGlkZXJ8U3B5ZGVyfFlhaG9vfGlhX2FyY2hpdmVyfENvdmFyaW8tSURTfGZpbmRsaW5rc3xEYXRhcGFya1NlYXJjaHxsYXJiaW58TWVkaWFwYXJ0bmVycy1Hb29nbGV8TkctU2VhcmNofFNuYXBweXxUZW9tYXxKZWV2ZXN8Q2hhcmxvdHRlfE5ld3NHYXRvcnxUaW5FeWV8Q2VyYmVyaWFufFNlYXJjaFNpZ2h0fFphb3xTY3J1YmJ5fFFzZWVyb3xQeWNVUkx8UG9tcG9zfG9lZ3B8U0JJZGVyfHlvb2dsaUZldGNoQWdlbnR8eWFjeXx3ZWJjb2xsYWdlfFZZVTJ8dm95YWdlcnx1cGRhdGVkfHRydXdvR1BTfFN0YWNrUmFtYmxlcnxTcXdvcm18c2lsa3xzZW1hbnRpY2Rpc2NvdmVyeXxTY291dEpldHxOeW1lc2lzfE5ldFJlc2VhcmNoU2VydmVyfE1WQUNsaWVudHxtb2dpbW9naXxNbm9nb3NlYXJjaHxBcmFjaG1vfEFjY29vbmF8aG9sbWVzfGh0ZGlnfGljaGlyb3x3ZWJpc3xMaW5rV2Fsa2VyfGx3cC10cml2aWFsL2kpICYmICF1YS5tYXRjaCgvbW9iaWxlfFBsYXlzdGF0aW9uL2kpKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhIEJPVC9DcmF3bGVyL1NwaWRlclxuICAgIHJldHVybiBvcHRpb25zLmJvdFVzZXJBZ2VudERldmljZVR5cGV8fGRldmljZXMuYm90O1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSBhc3N1bWUgaXQgaXMgYSBtb2JpbGUgRGV2aWNlXG4gICAgcmV0dXJuIG9wdGlvbnMudW5rbm93blVzZXJBZ2VudERldmljZVR5cGV8fGRldmljZXMucGhvbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuZGV2aWNlcyA9IGRldmljZXM7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByYW5nZShtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm4gbnVsbCAvL2ZvciB0ZXJtaW5hbFxuICAgIG9wdHMgPSBvcHRzfHx7fVxuICAgIHZhciBjYW52YXMgPSBvcHRzLmNhbnZhcyB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpXG4gICAgaWYgKHR5cGVvZiBvcHRzLndpZHRoID09PSBcIm51bWJlclwiKVxuICAgICAgICBjYW52YXMud2lkdGggPSBvcHRzLndpZHRoXG4gICAgaWYgKHR5cGVvZiBvcHRzLmhlaWdodCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG9wdHMuaGVpZ2h0XG5cbiAgICB2YXIgYXR0cmlicyA9IG9wdHNcbiAgICB2YXIgZ2xcbiAgICB0cnkge1xuICAgICAgICBnbCA9IChjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnLCBhdHRyaWJzKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJywgYXR0cmlicykpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBnbCA9IG51bGxcbiAgICB9XG4gICAgcmV0dXJuIChnbCB8fCBudWxsKSAvL2Vuc3VyZSBudWxsIG9uIGZhaWxcbn0iLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTEgR29vZ2xlIEluYy5cbi8vXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuLy8geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4vLyBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEluc3RhbGwgYSBsZWFreSBXZWFrTWFwIGVtdWxhdGlvbiBvbiBwbGF0Zm9ybXMgdGhhdFxuICogZG9uJ3QgcHJvdmlkZSBhIGJ1aWx0LWluIG9uZS5cbiAqXG4gKiA8cD5Bc3N1bWVzIHRoYXQgYW4gRVM1IHBsYXRmb3JtIHdoZXJlLCBpZiB7QGNvZGUgV2Vha01hcH0gaXNcbiAqIGFscmVhZHkgcHJlc2VudCwgdGhlbiBpdCBjb25mb3JtcyB0byB0aGUgYW50aWNpcGF0ZWQgRVM2XG4gKiBzcGVjaWZpY2F0aW9uLiBUbyBydW4gdGhpcyBmaWxlIG9uIGFuIEVTNSBvciBhbG1vc3QgRVM1XG4gKiBpbXBsZW1lbnRhdGlvbiB3aGVyZSB0aGUge0Bjb2RlIFdlYWtNYXB9IHNwZWNpZmljYXRpb24gZG9lcyBub3RcbiAqIHF1aXRlIGNvbmZvcm0sIHJ1biA8Y29kZT5yZXBhaXJFUzUuanM8L2NvZGU+IGZpcnN0LlxuICpcbiAqIDxwPkV2ZW4gdGhvdWdoIFdlYWtNYXBNb2R1bGUgaXMgbm90IGdsb2JhbCwgdGhlIGxpbnRlciB0aGlua3MgaXRcbiAqIGlzLCB3aGljaCBpcyB3aHkgaXQgaXMgaW4gdGhlIG92ZXJyaWRlcyBsaXN0IGJlbG93LlxuICpcbiAqIDxwPk5PVEU6IEJlZm9yZSB1c2luZyB0aGlzIFdlYWtNYXAgZW11bGF0aW9uIGluIGEgbm9uLVNFU1xuICogZW52aXJvbm1lbnQsIHNlZSB0aGUgbm90ZSBiZWxvdyBhYm91dCBoaWRkZW5SZWNvcmQuXG4gKlxuICogQGF1dGhvciBNYXJrIFMuIE1pbGxlclxuICogQHJlcXVpcmVzIGNyeXB0bywgQXJyYXlCdWZmZXIsIFVpbnQ4QXJyYXksIG5hdmlnYXRvciwgY29uc29sZVxuICogQG92ZXJyaWRlcyBXZWFrTWFwLCBzZXMsIFByb3h5XG4gKiBAb3ZlcnJpZGVzIFdlYWtNYXBNb2R1bGVcbiAqL1xuXG4vKipcbiAqIFRoaXMge0Bjb2RlIFdlYWtNYXB9IGVtdWxhdGlvbiBpcyBvYnNlcnZhYmx5IGVxdWl2YWxlbnQgdG8gdGhlXG4gKiBFUy1IYXJtb255IFdlYWtNYXAsIGJ1dCB3aXRoIGxlYWtpZXIgZ2FyYmFnZSBjb2xsZWN0aW9uIHByb3BlcnRpZXMuXG4gKlxuICogPHA+QXMgd2l0aCB0cnVlIFdlYWtNYXBzLCBpbiB0aGlzIGVtdWxhdGlvbiwgYSBrZXkgZG9lcyBub3RcbiAqIHJldGFpbiBtYXBzIGluZGV4ZWQgYnkgdGhhdCBrZXkgYW5kIChjcnVjaWFsbHkpIGEgbWFwIGRvZXMgbm90XG4gKiByZXRhaW4gdGhlIGtleXMgaXQgaW5kZXhlcy4gQSBtYXAgYnkgaXRzZWxmIGFsc28gZG9lcyBub3QgcmV0YWluXG4gKiB0aGUgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCB0aGF0IG1hcC5cbiAqXG4gKiA8cD5Ib3dldmVyLCB0aGUgdmFsdWVzIGFzc29jaWF0ZWQgd2l0aCBhIGtleSBpbiBzb21lIG1hcCBhcmVcbiAqIHJldGFpbmVkIHNvIGxvbmcgYXMgdGhhdCBrZXkgaXMgcmV0YWluZWQgYW5kIHRob3NlIGFzc29jaWF0aW9ucyBhcmVcbiAqIG5vdCBvdmVycmlkZGVuLiBGb3IgZXhhbXBsZSwgd2hlbiB1c2VkIHRvIHN1cHBvcnQgbWVtYnJhbmVzLCBhbGxcbiAqIHZhbHVlcyBleHBvcnRlZCBmcm9tIGEgZ2l2ZW4gbWVtYnJhbmUgd2lsbCBsaXZlIGZvciB0aGUgbGlmZXRpbWVcbiAqIHRoZXkgd291bGQgaGF2ZSBoYWQgaW4gdGhlIGFic2VuY2Ugb2YgYW4gaW50ZXJwb3NlZCBtZW1icmFuZS4gRXZlblxuICogd2hlbiB0aGUgbWVtYnJhbmUgaXMgcmV2b2tlZCwgYWxsIG9iamVjdHMgdGhhdCB3b3VsZCBoYXZlIGJlZW5cbiAqIHJlYWNoYWJsZSBpbiB0aGUgYWJzZW5jZSBvZiByZXZvY2F0aW9uIHdpbGwgc3RpbGwgYmUgcmVhY2hhYmxlLCBhc1xuICogZmFyIGFzIHRoZSBHQyBjYW4gdGVsbCwgZXZlbiB0aG91Z2ggdGhleSB3aWxsIG5vIGxvbmdlciBiZSByZWxldmFudFxuICogdG8gb25nb2luZyBjb21wdXRhdGlvbi5cbiAqXG4gKiA8cD5UaGUgQVBJIGltcGxlbWVudGVkIGhlcmUgaXMgYXBwcm94aW1hdGVseSB0aGUgQVBJIGFzIGltcGxlbWVudGVkXG4gKiBpbiBGRjYuMGExIGFuZCBhZ3JlZWQgdG8gYnkgTWFya00sIEFuZHJlYXMgR2FsLCBhbmQgRGF2ZSBIZXJtYW4sXG4gKiByYXRoZXIgdGhhbiB0aGUgb2ZmaWFsbHkgYXBwcm92ZWQgcHJvcG9zYWwgcGFnZS4gVE9ETyhlcmlnaHRzKTpcbiAqIHVwZ3JhZGUgdGhlIGVjbWFzY3JpcHQgV2Vha01hcCBwcm9wb3NhbCBwYWdlIHRvIGV4cGxhaW4gdGhpcyBBUElcbiAqIGNoYW5nZSBhbmQgcHJlc2VudCB0byBFY21hU2NyaXB0IGNvbW1pdHRlZSBmb3IgdGhlaXIgYXBwcm92YWwuXG4gKlxuICogPHA+VGhlIGZpcnN0IGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgZW11bGF0aW9uIGhlcmUgYW5kIHRoYXQgaW5cbiAqIEZGNi4wYTEgaXMgdGhlIHByZXNlbmNlIG9mIG5vbiBlbnVtZXJhYmxlIHtAY29kZSBnZXRfX18sIGhhc19fXyxcbiAqIHNldF9fXywgYW5kIGRlbGV0ZV9fX30gbWV0aG9kcyBvbiBXZWFrTWFwIGluc3RhbmNlcyB0byByZXByZXNlbnRcbiAqIHdoYXQgd291bGQgYmUgdGhlIGhpZGRlbiBpbnRlcm5hbCBwcm9wZXJ0aWVzIG9mIGEgcHJpbWl0aXZlXG4gKiBpbXBsZW1lbnRhdGlvbi4gV2hlcmVhcyB0aGUgRkY2LjBhMSBXZWFrTWFwLnByb3RvdHlwZSBtZXRob2RzXG4gKiByZXF1aXJlIHRoZWlyIHtAY29kZSB0aGlzfSB0byBiZSBhIGdlbnVpbmUgV2Vha01hcCBpbnN0YW5jZSAoaS5lLixcbiAqIGFuIG9iamVjdCBvZiB7QGNvZGUgW1tDbGFzc11dfSBcIldlYWtNYXB9KSwgc2luY2UgdGhlcmUgaXMgbm90aGluZ1xuICogdW5mb3JnZWFibGUgYWJvdXQgdGhlIHBzZXVkby1pbnRlcm5hbCBtZXRob2QgbmFtZXMgdXNlZCBoZXJlLFxuICogbm90aGluZyBwcmV2ZW50cyB0aGVzZSBlbXVsYXRlZCBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIGJlaW5nXG4gKiBhcHBsaWVkIHRvIG5vbi1XZWFrTWFwcyB3aXRoIHBzZXVkby1pbnRlcm5hbCBtZXRob2RzIG9mIHRoZSBzYW1lXG4gKiBuYW1lcy5cbiAqXG4gKiA8cD5Bbm90aGVyIGRpZmZlcmVuY2UgaXMgdGhhdCBvdXIgZW11bGF0ZWQge0Bjb2RlXG4gKiBXZWFrTWFwLnByb3RvdHlwZX0gaXMgbm90IGl0c2VsZiBhIFdlYWtNYXAuIEEgcHJvYmxlbSB3aXRoIHRoZVxuICogY3VycmVudCBGRjYuMGExIEFQSSBpcyB0aGF0IFdlYWtNYXAucHJvdG90eXBlIGlzIGl0c2VsZiBhIFdlYWtNYXBcbiAqIHByb3ZpZGluZyBhbWJpZW50IG11dGFiaWxpdHkgYW5kIGFuIGFtYmllbnQgY29tbXVuaWNhdGlvbnNcbiAqIGNoYW5uZWwuIFRodXMsIGlmIGEgV2Vha01hcCBpcyBhbHJlYWR5IHByZXNlbnQgYW5kIGhhcyB0aGlzXG4gKiBwcm9ibGVtLCByZXBhaXJFUzUuanMgd3JhcHMgaXQgaW4gYSBzYWZlIHdyYXBwcGVyIGluIG9yZGVyIHRvXG4gKiBwcmV2ZW50IGFjY2VzcyB0byB0aGlzIGNoYW5uZWwuIChTZWVcbiAqIFBBVENIX01VVEFCTEVfRlJPWkVOX1dFQUtNQVBfUFJPVE8gaW4gcmVwYWlyRVM1LmpzKS5cbiAqL1xuXG4vKipcbiAqIElmIHRoaXMgaXMgYSBmdWxsIDxhIGhyZWY9XG4gKiBcImh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9lcy1sYWIvd2lraS9TZWN1cmVhYmxlRVM1XCJcbiAqID5zZWN1cmVhYmxlIEVTNTwvYT4gcGxhdGZvcm0gYW5kIHRoZSBFUy1IYXJtb255IHtAY29kZSBXZWFrTWFwfSBpc1xuICogYWJzZW50LCBpbnN0YWxsIGFuIGFwcHJveGltYXRlIGVtdWxhdGlvbi5cbiAqXG4gKiA8cD5JZiBXZWFrTWFwIGlzIHByZXNlbnQgYnV0IGNhbm5vdCBzdG9yZSBzb21lIG9iamVjdHMsIHVzZSBvdXIgYXBwcm94aW1hdGVcbiAqIGVtdWxhdGlvbiBhcyBhIHdyYXBwZXIuXG4gKlxuICogPHA+SWYgdGhpcyBpcyBhbG1vc3QgYSBzZWN1cmVhYmxlIEVTNSBwbGF0Zm9ybSwgdGhlbiBXZWFrTWFwLmpzXG4gKiBzaG91bGQgYmUgcnVuIGFmdGVyIHJlcGFpckVTNS5qcy5cbiAqXG4gKiA8cD5TZWUge0Bjb2RlIFdlYWtNYXB9IGZvciBkb2N1bWVudGF0aW9uIG9mIHRoZSBnYXJiYWdlIGNvbGxlY3Rpb25cbiAqIHByb3BlcnRpZXMgb2YgdGhpcyBXZWFrTWFwIGVtdWxhdGlvbi5cbiAqL1xuKGZ1bmN0aW9uIFdlYWtNYXBNb2R1bGUoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICh0eXBlb2Ygc2VzICE9PSAndW5kZWZpbmVkJyAmJiBzZXMub2sgJiYgIXNlcy5vaygpKSB7XG4gICAgLy8gYWxyZWFkeSB0b28gYnJva2VuLCBzbyBnaXZlIHVwXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEluIHNvbWUgY2FzZXMgKGN1cnJlbnQgRmlyZWZveCksIHdlIG11c3QgbWFrZSBhIGNob2ljZSBiZXR3ZWVlbiBhXG4gICAqIFdlYWtNYXAgd2hpY2ggaXMgY2FwYWJsZSBvZiB1c2luZyBhbGwgdmFyaWV0aWVzIG9mIGhvc3Qgb2JqZWN0cyBhc1xuICAgKiBrZXlzIGFuZCBvbmUgd2hpY2ggaXMgY2FwYWJsZSBvZiBzYWZlbHkgdXNpbmcgcHJveGllcyBhcyBrZXlzLiBTZWVcbiAgICogY29tbWVudHMgYmVsb3cgYWJvdXQgSG9zdFdlYWtNYXAgYW5kIERvdWJsZVdlYWtNYXAgZm9yIGRldGFpbHMuXG4gICAqXG4gICAqIFRoaXMgZnVuY3Rpb24gKHdoaWNoIGlzIGEgZ2xvYmFsLCBub3QgZXhwb3NlZCB0byBndWVzdHMpIG1hcmtzIGFcbiAgICogV2Vha01hcCBhcyBwZXJtaXR0ZWQgdG8gZG8gd2hhdCBpcyBuZWNlc3NhcnkgdG8gaW5kZXggYWxsIGhvc3RcbiAgICogb2JqZWN0cywgYXQgdGhlIGNvc3Qgb2YgbWFraW5nIGl0IHVuc2FmZSBmb3IgcHJveGllcy5cbiAgICpcbiAgICogRG8gbm90IGFwcGx5IHRoaXMgZnVuY3Rpb24gdG8gYW55dGhpbmcgd2hpY2ggaXMgbm90IGEgZ2VudWluZVxuICAgKiBmcmVzaCBXZWFrTWFwLlxuICAgKi9cbiAgZnVuY3Rpb24gd2Vha01hcFBlcm1pdEhvc3RPYmplY3RzKG1hcCkge1xuICAgIC8vIGlkZW50aXR5IG9mIGZ1bmN0aW9uIHVzZWQgYXMgYSBzZWNyZXQgLS0gZ29vZCBlbm91Z2ggYW5kIGNoZWFwXG4gICAgaWYgKG1hcC5wZXJtaXRIb3N0T2JqZWN0c19fXykge1xuICAgICAgbWFwLnBlcm1pdEhvc3RPYmplY3RzX19fKHdlYWtNYXBQZXJtaXRIb3N0T2JqZWN0cyk7XG4gICAgfVxuICB9XG4gIGlmICh0eXBlb2Ygc2VzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHNlcy53ZWFrTWFwUGVybWl0SG9zdE9iamVjdHMgPSB3ZWFrTWFwUGVybWl0SG9zdE9iamVjdHM7XG4gIH1cblxuICAvLyBJRSAxMSBoYXMgbm8gUHJveHkgYnV0IGhhcyBhIGJyb2tlbiBXZWFrTWFwIHN1Y2ggdGhhdCB3ZSBuZWVkIHRvIHBhdGNoXG4gIC8vIGl0IHVzaW5nIERvdWJsZVdlYWtNYXA7IHRoaXMgZmxhZyB0ZWxscyBEb3VibGVXZWFrTWFwIHNvLlxuICB2YXIgZG91YmxlV2Vha01hcENoZWNrU2lsZW50RmFpbHVyZSA9IGZhbHNlO1xuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgYSBnb29kLWVub3VnaCBXZWFrTWFwIGltcGxlbWVudGF0aW9uLCBhbmQgaWYgc29cbiAgLy8gZXhpdCB3aXRob3V0IHJlcGxhY2luZyBpdC5cbiAgaWYgKHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIEhvc3RXZWFrTWFwID0gV2Vha01hcDtcbiAgICAvLyBUaGVyZSBpcyBhIFdlYWtNYXAgLS0gaXMgaXQgZ29vZCBlbm91Z2g/XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAvLyBXZSdyZSBub3cgKmFzc3VtaW5nIG5vdCosIGJlY2F1c2UgYXMgb2YgdGhpcyB3cml0aW5nICgyMDEzLTA1LTA2KVxuICAgICAgLy8gRmlyZWZveCdzIFdlYWtNYXBzIGhhdmUgYSBtaXNjZWxsYW55IG9mIG9iamVjdHMgdGhleSB3b24ndCBhY2NlcHQsIGFuZFxuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBtYWtlIGFuIGV4aGF1c3RpdmUgbGlzdCwgYW5kIHRlc3RpbmcgZm9yIGp1c3Qgb25lXG4gICAgICAvLyB3aWxsIGJlIGEgcHJvYmxlbSBpZiB0aGF0IG9uZSBpcyBmaXhlZCBhbG9uZSAoYXMgdGhleSBkaWQgZm9yIEV2ZW50KS5cblxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBwbGF0Zm9ybSB0aGF0IHdlICpjYW4qIHJlbGlhYmx5IHRlc3Qgb24sIGhlcmUncyBob3cgdG9cbiAgICAgIC8vIGRvIGl0OlxuICAgICAgLy8gIHZhciBwcm9ibGVtYXRpYyA9IC4uLiA7XG4gICAgICAvLyAgdmFyIHRlc3RIb3N0TWFwID0gbmV3IEhvc3RXZWFrTWFwKCk7XG4gICAgICAvLyAgdHJ5IHtcbiAgICAgIC8vICAgIHRlc3RIb3N0TWFwLnNldChwcm9ibGVtYXRpYywgMSk7ICAvLyBGaXJlZm94IDIwIHdpbGwgdGhyb3cgaGVyZVxuICAgICAgLy8gICAgaWYgKHRlc3RIb3N0TWFwLmdldChwcm9ibGVtYXRpYykgPT09IDEpIHtcbiAgICAgIC8vICAgICAgcmV0dXJuO1xuICAgICAgLy8gICAgfVxuICAgICAgLy8gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSUUgMTEgYnVnOiBXZWFrTWFwcyBzaWxlbnRseSBmYWlsIHRvIHN0b3JlIGZyb3plbiBvYmplY3RzLlxuICAgICAgdmFyIHRlc3RNYXAgPSBuZXcgSG9zdFdlYWtNYXAoKTtcbiAgICAgIHZhciB0ZXN0T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgICB0ZXN0TWFwLnNldCh0ZXN0T2JqZWN0LCAxKTtcbiAgICAgIGlmICh0ZXN0TWFwLmdldCh0ZXN0T2JqZWN0KSAhPT0gMSkge1xuICAgICAgICBkb3VibGVXZWFrTWFwQ2hlY2tTaWxlbnRGYWlsdXJlID0gdHJ1ZTtcbiAgICAgICAgLy8gRmFsbCB0aHJvdWdoIHRvIGluc3RhbGxpbmcgb3VyIFdlYWtNYXAuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaG9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGdvcG4gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgdmFyIGRlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gIHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG4gIC8qKlxuICAgKiBTZWN1cml0eSBkZXBlbmRzIG9uIEhJRERFTl9OQU1FIGJlaW5nIGJvdGggPGk+dW5ndWVzc2FibGU8L2k+IGFuZFxuICAgKiA8aT51bmRpc2NvdmVyYWJsZTwvaT4gYnkgdW50cnVzdGVkIGNvZGUuXG4gICAqXG4gICAqIDxwPkdpdmVuIHRoZSBrbm93biB3ZWFrbmVzc2VzIG9mIE1hdGgucmFuZG9tKCkgb24gZXhpc3RpbmdcbiAgICogYnJvd3NlcnMsIGl0IGRvZXMgbm90IGdlbmVyYXRlIHVuZ3Vlc3NhYmlsaXR5IHdlIGNhbiBiZSBjb25maWRlbnRcbiAgICogb2YuXG4gICAqXG4gICAqIDxwPkl0IGlzIHRoZSBtb25rZXkgcGF0Y2hpbmcgbG9naWMgaW4gdGhpcyBmaWxlIHRoYXQgaXMgaW50ZW5kZWRcbiAgICogdG8gZW5zdXJlIHVuZGlzY292ZXJhYmlsaXR5LiBUaGUgYmFzaWMgaWRlYSBpcyB0aGF0IHRoZXJlIGFyZVxuICAgKiB0aHJlZSBmdW5kYW1lbnRhbCBtZWFucyBvZiBkaXNjb3ZlcmluZyBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdDpcbiAgICogVGhlIGZvci9pbiBsb29wLCBPYmplY3Qua2V5cygpLCBhbmQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoKSxcbiAgICogYXMgd2VsbCBhcyBzb21lIHByb3Bvc2VkIEVTNiBleHRlbnNpb25zIHRoYXQgYXBwZWFyIG9uIG91clxuICAgKiB3aGl0ZWxpc3QuIFRoZSBmaXJzdCB0d28gb25seSBkaXNjb3ZlciBlbnVtZXJhYmxlIHByb3BlcnRpZXMsIGFuZFxuICAgKiB3ZSBvbmx5IHVzZSBISURERU5fTkFNRSB0byBuYW1lIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHksIHNvIHRoZVxuICAgKiBvbmx5IHJlbWFpbmluZyB0aHJlYXQgc2hvdWxkIGJlIGdldE93blByb3BlcnR5TmFtZXMgYW5kIHNvbWVcbiAgICogcHJvcG9zZWQgRVM2IGV4dGVuc2lvbnMgdGhhdCBhcHBlYXIgb24gb3VyIHdoaXRlbGlzdC4gV2UgbW9ua2V5XG4gICAqIHBhdGNoIHRoZW0gdG8gcmVtb3ZlIEhJRERFTl9OQU1FIGZyb20gdGhlIGxpc3Qgb2YgcHJvcGVydGllcyB0aGV5XG4gICAqIHJldHVybnMuXG4gICAqXG4gICAqIDxwPlRPRE8oZXJpZ2h0cyk6IE9uIGEgcGxhdGZvcm0gd2l0aCBidWlsdC1pbiBQcm94aWVzLCBwcm94aWVzXG4gICAqIGNvdWxkIGJlIHVzZWQgdG8gdHJhcCBhbmQgdGhlcmVieSBkaXNjb3ZlciB0aGUgSElEREVOX05BTUUsIHNvIHdlXG4gICAqIG5lZWQgdG8gbW9ua2V5IHBhdGNoIFByb3h5LmNyZWF0ZSwgUHJveHkuY3JlYXRlRnVuY3Rpb24sIGV0YywgaW5cbiAgICogb3JkZXIgdG8gd3JhcCB0aGUgcHJvdmlkZWQgaGFuZGxlciB3aXRoIHRoZSByZWFsIGhhbmRsZXIgd2hpY2hcbiAgICogZmlsdGVycyBvdXQgYWxsIHRyYXBzIHVzaW5nIEhJRERFTl9OQU1FLlxuICAgKlxuICAgKiA8cD5UT0RPKGVyaWdodHMpOiBSZXZpc2l0IE1pa2UgU3RheSdzIHN1Z2dlc3Rpb24gdGhhdCB3ZSB1c2UgYW5cbiAgICogZW5jYXBzdWxhdGVkIGZ1bmN0aW9uIGF0IGEgbm90LW5lY2Vzc2FyaWx5LXNlY3JldCBuYW1lLCB3aGljaFxuICAgKiB1c2VzIHRoZSBTdGllZ2xlciBzaGFyZWQtc3RhdGUgcmlnaHRzIGFtcGxpZmljYXRpb24gcGF0dGVybiB0b1xuICAgKiByZXZlYWwgdGhlIGFzc29jaWF0ZWQgdmFsdWUgb25seSB0byB0aGUgV2Vha01hcCBpbiB3aGljaCB0aGlzIGtleVxuICAgKiBpcyBhc3NvY2lhdGVkIHdpdGggdGhhdCB2YWx1ZS4gU2luY2Ugb25seSB0aGUga2V5IHJldGFpbnMgdGhlXG4gICAqIGZ1bmN0aW9uLCB0aGUgZnVuY3Rpb24gY2FuIGFsc28gcmVtZW1iZXIgdGhlIGtleSB3aXRob3V0IGNhdXNpbmdcbiAgICogbGVha2FnZSBvZiB0aGUga2V5LCBzbyB0aGlzIGRvZXNuJ3QgdmlvbGF0ZSBvdXIgZ2VuZXJhbCBnY1xuICAgKiBnb2Fscy4gSW4gYWRkaXRpb24sIGJlY2F1c2UgdGhlIG5hbWUgbmVlZCBub3QgYmUgYSBndWFyZGVkXG4gICAqIHNlY3JldCwgd2UgY291bGQgZWZmaWNpZW50bHkgaGFuZGxlIGNyb3NzLWZyYW1lIGZyb3plbiBrZXlzLlxuICAgKi9cbiAgdmFyIEhJRERFTl9OQU1FX1BSRUZJWCA9ICd3ZWFrbWFwOic7XG4gIHZhciBISURERU5fTkFNRSA9IEhJRERFTl9OQU1FX1BSRUZJWCArICdpZGVudDonICsgTWF0aC5yYW5kb20oKSArICdfX18nO1xuXG4gIGlmICh0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYWIgPSBuZXcgQXJyYXlCdWZmZXIoMjUpO1xuICAgIHZhciB1OHMgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh1OHMpO1xuICAgIEhJRERFTl9OQU1FID0gSElEREVOX05BTUVfUFJFRklYICsgJ3JhbmQ6JyArXG4gICAgICBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwodThzLCBmdW5jdGlvbih1OCkge1xuICAgICAgICByZXR1cm4gKHU4ICUgMzYpLnRvU3RyaW5nKDM2KTtcbiAgICAgIH0pLmpvaW4oJycpICsgJ19fXyc7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vdEhpZGRlbk5hbWUobmFtZSkge1xuICAgIHJldHVybiAhKFxuICAgICAgICBuYW1lLnN1YnN0cigwLCBISURERU5fTkFNRV9QUkVGSVgubGVuZ3RoKSA9PSBISURERU5fTkFNRV9QUkVGSVggJiZcbiAgICAgICAgbmFtZS5zdWJzdHIobmFtZS5sZW5ndGggLSAzKSA9PT0gJ19fXycpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vbmtleSBwYXRjaCBnZXRPd25Qcm9wZXJ0eU5hbWVzIHRvIGF2b2lkIHJldmVhbGluZyB0aGVcbiAgICogSElEREVOX05BTUUuXG4gICAqXG4gICAqIDxwPlRoZSBFUzUuMSBzcGVjIHJlcXVpcmVzIGVhY2ggbmFtZSB0byBhcHBlYXIgb25seSBvbmNlLCBidXQgYXNcbiAgICogb2YgdGhpcyB3cml0aW5nLCB0aGlzIHJlcXVpcmVtZW50IGlzIGNvbnRyb3ZlcnNpYWwgZm9yIEVTNiwgc28gd2VcbiAgICogbWFkZSB0aGlzIGNvZGUgcm9idXN0IGFnYWluc3QgdGhpcyBjYXNlLiBJZiB0aGUgcmVzdWx0aW5nIGV4dHJhXG4gICAqIHNlYXJjaCB0dXJucyBvdXQgdG8gYmUgZXhwZW5zaXZlLCB3ZSBjYW4gcHJvYmFibHkgcmVsYXggdGhpcyBvbmNlXG4gICAqIEVTNiBpcyBhZGVxdWF0ZWx5IHN1cHBvcnRlZCBvbiBhbGwgbWFqb3IgYnJvd3NlcnMsIGlmZiBubyBicm93c2VyXG4gICAqIHZlcnNpb25zIHdlIHN1cHBvcnQgYXQgdGhhdCB0aW1lIGhhdmUgcmVsYXhlZCB0aGlzIGNvbnN0cmFpbnRcbiAgICogd2l0aG91dCBwcm92aWRpbmcgYnVpbHQtaW4gRVM2IFdlYWtNYXBzLlxuICAgKi9cbiAgZGVmUHJvcChPYmplY3QsICdnZXRPd25Qcm9wZXJ0eU5hbWVzJywge1xuICAgIHZhbHVlOiBmdW5jdGlvbiBmYWtlR2V0T3duUHJvcGVydHlOYW1lcyhvYmopIHtcbiAgICAgIHJldHVybiBnb3BuKG9iaikuZmlsdGVyKGlzTm90SGlkZGVuTmFtZSk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogZ2V0UHJvcGVydHlOYW1lcyBpcyBub3QgaW4gRVM1IGJ1dCBpdCBpcyBwcm9wb3NlZCBmb3IgRVM2IGFuZFxuICAgKiBkb2VzIGFwcGVhciBpbiBvdXIgd2hpdGVsaXN0LCBzbyB3ZSBuZWVkIHRvIGNsZWFuIGl0IHRvby5cbiAgICovXG4gIGlmICgnZ2V0UHJvcGVydHlOYW1lcycgaW4gT2JqZWN0KSB7XG4gICAgdmFyIG9yaWdpbmFsR2V0UHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRQcm9wZXJ0eU5hbWVzO1xuICAgIGRlZlByb3AoT2JqZWN0LCAnZ2V0UHJvcGVydHlOYW1lcycsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBmYWtlR2V0UHJvcGVydHlOYW1lcyhvYmopIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsR2V0UHJvcGVydHlOYW1lcyhvYmopLmZpbHRlcihpc05vdEhpZGRlbk5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIDxwPlRvIHRyZWF0IG9iamVjdHMgYXMgaWRlbnRpdHkta2V5cyB3aXRoIHJlYXNvbmFibGUgZWZmaWNpZW5jeVxuICAgKiBvbiBFUzUgYnkgaXRzZWxmIChpLmUuLCB3aXRob3V0IGFueSBvYmplY3Qta2V5ZWQgY29sbGVjdGlvbnMpLCB3ZVxuICAgKiBuZWVkIHRvIGFkZCBhIGhpZGRlbiBwcm9wZXJ0eSB0byBzdWNoIGtleSBvYmplY3RzIHdoZW4gd2VcbiAgICogY2FuLiBUaGlzIHJhaXNlcyBzZXZlcmFsIGlzc3VlczpcbiAgICogPHVsPlxuICAgKiA8bGk+QXJyYW5naW5nIHRvIGFkZCB0aGlzIHByb3BlcnR5IHRvIG9iamVjdHMgYmVmb3JlIHdlIGxvc2UgdGhlXG4gICAqICAgICBjaGFuY2UsIGFuZFxuICAgKiA8bGk+SGlkaW5nIHRoZSBleGlzdGVuY2Ugb2YgdGhpcyBuZXcgcHJvcGVydHkgZnJvbSBtb3N0XG4gICAqICAgICBKYXZhU2NyaXB0IGNvZGUuXG4gICAqIDxsaT5QcmV2ZW50aW5nIDxpPmNlcnRpZmljYXRpb24gdGhlZnQ8L2k+LCB3aGVyZSBvbmUgb2JqZWN0IGlzXG4gICAqICAgICBjcmVhdGVkIGZhbHNlbHkgY2xhaW1pbmcgdG8gYmUgdGhlIGtleSBvZiBhbiBhc3NvY2lhdGlvblxuICAgKiAgICAgYWN0dWFsbHkga2V5ZWQgYnkgYW5vdGhlciBvYmplY3QuXG4gICAqIDxsaT5QcmV2ZW50aW5nIDxpPnZhbHVlIHRoZWZ0PC9pPiwgd2hlcmUgdW50cnVzdGVkIGNvZGUgd2l0aFxuICAgKiAgICAgYWNjZXNzIHRvIGEga2V5IG9iamVjdCBidXQgbm90IGEgd2VhayBtYXAgbmV2ZXJ0aGVsZXNzXG4gICAqICAgICBvYnRhaW5zIGFjY2VzcyB0byB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIHRoYXQga2V5IGluIHRoYXRcbiAgICogICAgIHdlYWsgbWFwLlxuICAgKiA8L3VsPlxuICAgKiBXZSBkbyBzbyBieVxuICAgKiA8dWw+XG4gICAqIDxsaT5NYWtpbmcgdGhlIG5hbWUgb2YgdGhlIGhpZGRlbiBwcm9wZXJ0eSB1bmd1ZXNzYWJsZSwgc28gXCJbXVwiXG4gICAqICAgICBpbmRleGluZywgd2hpY2ggd2UgY2Fubm90IGludGVyY2VwdCwgY2Fubm90IGJlIHVzZWQgdG8gYWNjZXNzXG4gICAqICAgICBhIHByb3BlcnR5IHdpdGhvdXQga25vd2luZyB0aGUgbmFtZS5cbiAgICogPGxpPk1ha2luZyB0aGUgaGlkZGVuIHByb3BlcnR5IG5vbi1lbnVtZXJhYmxlLCBzbyB3ZSBuZWVkIG5vdFxuICAgKiAgICAgd29ycnkgYWJvdXQgZm9yLWluIGxvb3BzIG9yIHtAY29kZSBPYmplY3Qua2V5c30sXG4gICAqIDxsaT5tb25rZXkgcGF0Y2hpbmcgdGhvc2UgcmVmbGVjdGl2ZSBtZXRob2RzIHRoYXQgd291bGRcbiAgICogICAgIHByZXZlbnQgZXh0ZW5zaW9ucywgdG8gYWRkIHRoaXMgaGlkZGVuIHByb3BlcnR5IGZpcnN0LFxuICAgKiA8bGk+bW9ua2V5IHBhdGNoaW5nIHRob3NlIG1ldGhvZHMgdGhhdCB3b3VsZCByZXZlYWwgdGhpc1xuICAgKiAgICAgaGlkZGVuIHByb3BlcnR5LlxuICAgKiA8L3VsPlxuICAgKiBVbmZvcnR1bmF0ZWx5LCBiZWNhdXNlIG9mIHNhbWUtb3JpZ2luIGlmcmFtZXMsIHdlIGNhbm5vdCByZWxpYWJseVxuICAgKiBhZGQgdGhpcyBoaWRkZW4gcHJvcGVydHkgYmVmb3JlIGFuIG9iamVjdCBiZWNvbWVzXG4gICAqIG5vbi1leHRlbnNpYmxlLiBJbnN0ZWFkLCBpZiB3ZSBlbmNvdW50ZXIgYSBub24tZXh0ZW5zaWJsZSBvYmplY3RcbiAgICogd2l0aG91dCBhIGhpZGRlbiByZWNvcmQgdGhhdCB3ZSBjYW4gZGV0ZWN0ICh3aGV0aGVyIG9yIG5vdCBpdCBoYXNcbiAgICogYSBoaWRkZW4gcmVjb3JkIHN0b3JlZCB1bmRlciBhIG5hbWUgc2VjcmV0IHRvIHVzKSwgdGhlbiB3ZSBqdXN0XG4gICAqIHVzZSB0aGUga2V5IG9iamVjdCBpdHNlbGYgdG8gcmVwcmVzZW50IGl0cyBpZGVudGl0eSBpbiBhIGJydXRlXG4gICAqIGZvcmNlIGxlYWt5IG1hcCBzdG9yZWQgaW4gdGhlIHdlYWsgbWFwLCBsb3NpbmcgYWxsIHRoZSBhZHZhbnRhZ2VzXG4gICAqIG9mIHdlYWtuZXNzIGZvciB0aGVzZS5cbiAgICovXG4gIGZ1bmN0aW9uIGdldEhpZGRlblJlY29yZChrZXkpIHtcbiAgICBpZiAoa2V5ICE9PSBPYmplY3Qoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTm90IGFuIG9iamVjdDogJyArIGtleSk7XG4gICAgfVxuICAgIHZhciBoaWRkZW5SZWNvcmQgPSBrZXlbSElEREVOX05BTUVdO1xuICAgIGlmIChoaWRkZW5SZWNvcmQgJiYgaGlkZGVuUmVjb3JkLmtleSA9PT0ga2V5KSB7IHJldHVybiBoaWRkZW5SZWNvcmQ7IH1cbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShrZXkpKSB7XG4gICAgICAvLyBXZWFrIG1hcCBtdXN0IGJydXRlIGZvcmNlLCBhcyBleHBsYWluZWQgaW4gZG9jLWNvbW1lbnQgYWJvdmUuXG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIC8vIFRoZSBoaWRkZW5SZWNvcmQgYW5kIHRoZSBrZXkgcG9pbnQgZGlyZWN0bHkgYXQgZWFjaCBvdGhlciwgdmlhXG4gICAgLy8gdGhlIFwia2V5XCIgYW5kIEhJRERFTl9OQU1FIHByb3BlcnRpZXMgcmVzcGVjdGl2ZWx5LiBUaGUga2V5XG4gICAgLy8gZmllbGQgaXMgZm9yIHF1aWNrbHkgdmVyaWZ5aW5nIHRoYXQgdGhpcyBoaWRkZW4gcmVjb3JkIGlzIGFuXG4gICAgLy8gb3duIHByb3BlcnR5LCBub3QgYSBoaWRkZW4gcmVjb3JkIGZyb20gdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cbiAgICAvL1xuICAgIC8vIE5PVEU6IEJlY2F1c2UgdGhpcyBXZWFrTWFwIGVtdWxhdGlvbiBpcyBtZWFudCBvbmx5IGZvciBzeXN0ZW1zIGxpa2VcbiAgICAvLyBTRVMgd2hlcmUgT2JqZWN0LnByb3RvdHlwZSBpcyBmcm96ZW4gd2l0aG91dCBhbnkgbnVtZXJpY1xuICAgIC8vIHByb3BlcnRpZXMsIGl0IGlzIG9rIHRvIHVzZSBhbiBvYmplY3QgbGl0ZXJhbCBmb3IgdGhlIGhpZGRlblJlY29yZC5cbiAgICAvLyBUaGlzIGhhcyB0d28gYWR2YW50YWdlczpcbiAgICAvLyAqIEl0IGlzIG11Y2ggZmFzdGVyIGluIGEgcGVyZm9ybWFuY2UgY3JpdGljYWwgcGxhY2VcbiAgICAvLyAqIEl0IGF2b2lkcyByZWx5aW5nIG9uIE9iamVjdC5jcmVhdGUobnVsbCksIHdoaWNoIGhhZCBiZWVuXG4gICAgLy8gICBwcm9ibGVtYXRpYyBvbiBDaHJvbWUgMjguMC4xNDgwLjAuIFNlZVxuICAgIC8vICAgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtY2FqYS9pc3N1ZXMvZGV0YWlsP2lkPTE2ODdcbiAgICBoaWRkZW5SZWNvcmQgPSB7IGtleToga2V5IH07XG5cbiAgICAvLyBXaGVuIHVzaW5nIHRoaXMgV2Vha01hcCBlbXVsYXRpb24gb24gcGxhdGZvcm1zIHdoZXJlXG4gICAgLy8gT2JqZWN0LnByb3RvdHlwZSBtaWdodCBub3QgYmUgZnJvemVuIGFuZCBPYmplY3QuY3JlYXRlKG51bGwpIGlzXG4gICAgLy8gcmVsaWFibGUsIHVzZSB0aGUgZm9sbG93aW5nIHR3byBjb21tZW50ZWQgb3V0IGxpbmVzIGluc3RlYWQuXG4gICAgLy8gaGlkZGVuUmVjb3JkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAvLyBoaWRkZW5SZWNvcmQua2V5ID0ga2V5O1xuXG4gICAgLy8gUGxlYXNlIGNvbnRhY3QgdXMgaWYgeW91IG5lZWQgdGhpcyB0byB3b3JrIG9uIHBsYXRmb3JtcyB3aGVyZVxuICAgIC8vIE9iamVjdC5wcm90b3R5cGUgbWlnaHQgbm90IGJlIGZyb3plbiBhbmRcbiAgICAvLyBPYmplY3QuY3JlYXRlKG51bGwpIG1pZ2h0IG5vdCBiZSByZWxpYWJsZS5cblxuICAgIHRyeSB7XG4gICAgICBkZWZQcm9wKGtleSwgSElEREVOX05BTUUsIHtcbiAgICAgICAgdmFsdWU6IGhpZGRlblJlY29yZCxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGlkZGVuUmVjb3JkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBVbmRlciBzb21lIGNpcmN1bXN0YW5jZXMsIGlzRXh0ZW5zaWJsZSBzZWVtcyB0byBtaXNyZXBvcnQgd2hldGhlclxuICAgICAgLy8gdGhlIEhJRERFTl9OQU1FIGNhbiBiZSBkZWZpbmVkLlxuICAgICAgLy8gVGhlIGNpcmN1bXN0YW5jZXMgaGF2ZSBub3QgYmVlbiBpc29sYXRlZCwgYnV0IGF0IGxlYXN0IGFmZmVjdFxuICAgICAgLy8gTm9kZS5qcyB2MC4xMC4yNiBvbiBUcmF2aXNDSSAvIExpbnV4LCBidXQgbm90IHRoZSBzYW1lIHZlcnNpb24gb2ZcbiAgICAgIC8vIE5vZGUuanMgb24gT1MgWC5cbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1vbmtleSBwYXRjaCBvcGVyYXRpb25zIHRoYXQgd291bGQgbWFrZSB0aGVpciBhcmd1bWVudFxuICAgKiBub24tZXh0ZW5zaWJsZS5cbiAgICpcbiAgICogPHA+VGhlIG1vbmtleSBwYXRjaGVkIHZlcnNpb25zIHRocm93IGEgVHlwZUVycm9yIGlmIHRoZWlyXG4gICAqIGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QsIHNvIGl0IHNob3VsZCBvbmx5IGJlIGRvbmUgdG8gZnVuY3Rpb25zXG4gICAqIHRoYXQgc2hvdWxkIHRocm93IGEgVHlwZUVycm9yIGFueXdheSBpZiB0aGVpciBhcmd1bWVudCBpcyBub3QgYW5cbiAgICogb2JqZWN0LlxuICAgKi9cbiAgKGZ1bmN0aW9uKCl7XG4gICAgdmFyIG9sZEZyZWV6ZSA9IE9iamVjdC5mcmVlemU7XG4gICAgZGVmUHJvcChPYmplY3QsICdmcmVlemUnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaWRlbnRpZnlpbmdGcmVlemUob2JqKSB7XG4gICAgICAgIGdldEhpZGRlblJlY29yZChvYmopO1xuICAgICAgICByZXR1cm4gb2xkRnJlZXplKG9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIG9sZFNlYWwgPSBPYmplY3Quc2VhbDtcbiAgICBkZWZQcm9wKE9iamVjdCwgJ3NlYWwnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaWRlbnRpZnlpbmdTZWFsKG9iaikge1xuICAgICAgICBnZXRIaWRkZW5SZWNvcmQob2JqKTtcbiAgICAgICAgcmV0dXJuIG9sZFNlYWwob2JqKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgb2xkUHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG4gICAgZGVmUHJvcChPYmplY3QsICdwcmV2ZW50RXh0ZW5zaW9ucycsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpZGVudGlmeWluZ1ByZXZlbnRFeHRlbnNpb25zKG9iaikge1xuICAgICAgICBnZXRIaWRkZW5SZWNvcmQob2JqKTtcbiAgICAgICAgcmV0dXJuIG9sZFByZXZlbnRFeHRlbnNpb25zKG9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgZnVuY3Rpb24gY29uc3RGdW5jKGZ1bmMpIHtcbiAgICBmdW5jLnByb3RvdHlwZSA9IG51bGw7XG4gICAgcmV0dXJuIE9iamVjdC5mcmVlemUoZnVuYyk7XG4gIH1cblxuICB2YXIgY2FsbGVkQXNGdW5jdGlvbldhcm5pbmdEb25lID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nKCkge1xuICAgIC8vIEZ1dHVyZSBFUzYgV2Vha01hcCBpcyBjdXJyZW50bHkgKDIwMTMtMDktMTApIGV4cGVjdGVkIHRvIHJlamVjdCBXZWFrTWFwKClcbiAgICAvLyBidXQgd2UgdXNlZCB0byBwZXJtaXQgaXQgYW5kIGRvIGl0IG91cnNlbHZlcywgc28gd2FybiBvbmx5LlxuICAgIGlmICghY2FsbGVkQXNGdW5jdGlvbldhcm5pbmdEb25lICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY2FsbGVkQXNGdW5jdGlvbldhcm5pbmdEb25lID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUud2FybignV2Vha01hcCBzaG91bGQgYmUgaW52b2tlZCBhcyBuZXcgV2Vha01hcCgpLCBub3QgJyArXG4gICAgICAgICAgJ1dlYWtNYXAoKS4gVGhpcyB3aWxsIGJlIGFuIGVycm9yIGluIHRoZSBmdXR1cmUuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG5leHRJZCA9IDA7XG5cbiAgdmFyIE91cldlYWtNYXAgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgT3VyV2Vha01hcCkpIHsgIC8vIGFwcHJveGltYXRlIHRlc3QgZm9yIG5ldyAuLi4oKVxuICAgICAgY2FsbGVkQXNGdW5jdGlvbldhcm5pbmcoKTtcbiAgICB9XG5cbiAgICAvLyBXZSBhcmUgY3VycmVudGx5ICgxMi8yNS8yMDEyKSBuZXZlciBlbmNvdW50ZXJpbmcgYW55IHByZW1hdHVyZWx5XG4gICAgLy8gbm9uLWV4dGVuc2libGUga2V5cy5cbiAgICB2YXIga2V5cyA9IFtdOyAvLyBicnV0ZSBmb3JjZSBmb3IgcHJlbWF0dXJlbHkgbm9uLWV4dGVuc2libGUga2V5cy5cbiAgICB2YXIgdmFsdWVzID0gW107IC8vIGJydXRlIGZvcmNlIGZvciBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAgICB2YXIgaWQgPSBuZXh0SWQrKztcblxuICAgIGZ1bmN0aW9uIGdldF9fXyhrZXksIG9wdF9kZWZhdWx0KSB7XG4gICAgICB2YXIgaW5kZXg7XG4gICAgICB2YXIgaGlkZGVuUmVjb3JkID0gZ2V0SGlkZGVuUmVjb3JkKGtleSk7XG4gICAgICBpZiAoaGlkZGVuUmVjb3JkKSB7XG4gICAgICAgIHJldHVybiBpZCBpbiBoaWRkZW5SZWNvcmQgPyBoaWRkZW5SZWNvcmRbaWRdIDogb3B0X2RlZmF1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCA/IHZhbHVlc1tpbmRleF0gOiBvcHRfZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNfX18oa2V5KSB7XG4gICAgICB2YXIgaGlkZGVuUmVjb3JkID0gZ2V0SGlkZGVuUmVjb3JkKGtleSk7XG4gICAgICBpZiAoaGlkZGVuUmVjb3JkKSB7XG4gICAgICAgIHJldHVybiBpZCBpbiBoaWRkZW5SZWNvcmQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga2V5cy5pbmRleE9mKGtleSkgPj0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRfX18oa2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgdmFyIGhpZGRlblJlY29yZCA9IGdldEhpZGRlblJlY29yZChrZXkpO1xuICAgICAgaWYgKGhpZGRlblJlY29yZCkge1xuICAgICAgICBoaWRkZW5SZWNvcmRbaWRdID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleCA9IGtleXMuaW5kZXhPZihrZXkpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTaW5jZSBzb21lIGJyb3dzZXJzIHByZWVtcHRpdmVseSB0ZXJtaW5hdGUgc2xvdyB0dXJucyBidXRcbiAgICAgICAgICAvLyB0aGVuIGNvbnRpbnVlIGNvbXB1dGluZyB3aXRoIHByZXN1bWFibHkgY29ycnVwdGVkIGhlYXBcbiAgICAgICAgICAvLyBzdGF0ZSwgd2UgaGVyZSBkZWZlbnNpdmVseSBnZXQga2V5cy5sZW5ndGggZmlyc3QgYW5kIHRoZW5cbiAgICAgICAgICAvLyB1c2UgaXQgdG8gdXBkYXRlIGJvdGggdGhlIHZhbHVlcyBhbmQga2V5cyBhcnJheXMsIGtlZXBpbmdcbiAgICAgICAgICAvLyB0aGVtIGluIHN5bmMuXG4gICAgICAgICAgaW5kZXggPSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLy8gSWYgd2UgY3Jhc2ggaGVyZSwgdmFsdWVzIHdpbGwgYmUgb25lIGxvbmdlciB0aGFuIGtleXMuXG4gICAgICAgICAga2V5c1tpbmRleF0gPSBrZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZV9fXyhrZXkpIHtcbiAgICAgIHZhciBoaWRkZW5SZWNvcmQgPSBnZXRIaWRkZW5SZWNvcmQoa2V5KTtcbiAgICAgIHZhciBpbmRleCwgbGFzdEluZGV4O1xuICAgICAgaWYgKGhpZGRlblJlY29yZCkge1xuICAgICAgICByZXR1cm4gaWQgaW4gaGlkZGVuUmVjb3JkICYmIGRlbGV0ZSBoaWRkZW5SZWNvcmRbaWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTaW5jZSBzb21lIGJyb3dzZXJzIHByZWVtcHRpdmVseSB0ZXJtaW5hdGUgc2xvdyB0dXJucyBidXRcbiAgICAgICAgLy8gdGhlbiBjb250aW51ZSBjb21wdXRpbmcgd2l0aCBwb3RlbnRpYWxseSBjb3JydXB0ZWQgaGVhcFxuICAgICAgICAvLyBzdGF0ZSwgd2UgaGVyZSBkZWZlbnNpdmVseSBnZXQga2V5cy5sZW5ndGggZmlyc3QgYW5kIHRoZW4gdXNlXG4gICAgICAgIC8vIGl0IHRvIHVwZGF0ZSBib3RoIHRoZSBrZXlzIGFuZCB0aGUgdmFsdWVzIGFycmF5LCBrZWVwaW5nXG4gICAgICAgIC8vIHRoZW0gaW4gc3luYy4gV2UgdXBkYXRlIHRoZSB0d28gd2l0aCBhbiBvcmRlciBvZiBhc3NpZ25tZW50cyxcbiAgICAgICAgLy8gc3VjaCB0aGF0IGFueSBwcmVmaXggb2YgdGhlc2UgYXNzaWdubWVudHMgd2lsbCBwcmVzZXJ2ZSB0aGVcbiAgICAgICAgLy8ga2V5L3ZhbHVlIGNvcnJlc3BvbmRlbmNlLCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSBkZWxldGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIG5lZWRzIHRvIHdvcmsgY29ycmVjdGx5IHdoZW4gaW5kZXggPT09IGxhc3RJbmRleC5cbiAgICAgICAgbGFzdEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuICAgICAgICBrZXlzW2luZGV4XSA9IHZvaWQgMDtcbiAgICAgICAgLy8gSWYgd2UgY3Jhc2ggaGVyZSwgdGhlcmUncyBhIHZvaWQgMCBpbiB0aGUga2V5cyBhcnJheSwgYnV0XG4gICAgICAgIC8vIG5vIG9wZXJhdGlvbiB3aWxsIGNhdXNlIGEgXCJrZXlzLmluZGV4T2Yodm9pZCAwKVwiLCBzaW5jZVxuICAgICAgICAvLyBnZXRIaWRkZW5SZWNvcmQodm9pZCAwKSB3aWxsIGFsd2F5cyB0aHJvdyBhbiBlcnJvciBmaXJzdC5cbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlc1tsYXN0SW5kZXhdO1xuICAgICAgICAvLyBJZiB3ZSBjcmFzaCBoZXJlLCB2YWx1ZXNbaW5kZXhdIGNhbm5vdCBiZSBmb3VuZCBoZXJlLFxuICAgICAgICAvLyBiZWNhdXNlIGtleXNbaW5kZXhdIGlzIHZvaWQgMC5cbiAgICAgICAga2V5c1tpbmRleF0gPSBrZXlzW2xhc3RJbmRleF07XG4gICAgICAgIC8vIElmIGluZGV4ID09PSBsYXN0SW5kZXggYW5kIHdlIGNyYXNoIGhlcmUsIHRoZW4ga2V5c1tpbmRleF1cbiAgICAgICAgLy8gaXMgc3RpbGwgdm9pZCAwLCBzaW5jZSB0aGUgYWxpYXNpbmcga2lsbGVkIHRoZSBwcmV2aW91cyBrZXkuXG4gICAgICAgIGtleXMubGVuZ3RoID0gbGFzdEluZGV4O1xuICAgICAgICAvLyBJZiB3ZSBjcmFzaCBoZXJlLCBrZXlzIHdpbGwgYmUgb25lIHNob3J0ZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgIHZhbHVlcy5sZW5ndGggPSBsYXN0SW5kZXg7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKE91cldlYWtNYXAucHJvdG90eXBlLCB7XG4gICAgICBnZXRfX186ICAgIHsgdmFsdWU6IGNvbnN0RnVuYyhnZXRfX18pIH0sXG4gICAgICBoYXNfX186ICAgIHsgdmFsdWU6IGNvbnN0RnVuYyhoYXNfX18pIH0sXG4gICAgICBzZXRfX186ICAgIHsgdmFsdWU6IGNvbnN0RnVuYyhzZXRfX18pIH0sXG4gICAgICBkZWxldGVfX186IHsgdmFsdWU6IGNvbnN0RnVuYyhkZWxldGVfX18pIH1cbiAgICB9KTtcbiAgfTtcblxuICBPdXJXZWFrTWFwLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoT2JqZWN0LnByb3RvdHlwZSwge1xuICAgIGdldDoge1xuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm4gdGhlIHZhbHVlIG1vc3QgcmVjZW50bHkgYXNzb2NpYXRlZCB3aXRoIGtleSwgb3JcbiAgICAgICAqIG9wdF9kZWZhdWx0IGlmIG5vbmUuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQoa2V5LCBvcHRfZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRfX18oa2V5LCBvcHRfZGVmYXVsdCk7XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgaGFzOiB7XG4gICAgICAvKipcbiAgICAgICAqIElzIHRoZXJlIGEgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGtleSBpbiB0aGlzIFdlYWtNYXA/XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc19fXyhrZXkpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIHNldDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBc3NvY2lhdGUgdmFsdWUgd2l0aCBrZXkgaW4gdGhpcyBXZWFrTWFwLCBvdmVyd3JpdGluZyBhbnlcbiAgICAgICAqIHByZXZpb3VzIGFzc29jaWF0aW9uIGlmIHByZXNlbnQuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRfX18oa2V5LCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9LFxuXG4gICAgJ2RlbGV0ZSc6IHtcbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIGFueSBhc3NvY2lhdGlvbiBmb3Iga2V5IGluIHRoaXMgV2Vha01hcCwgcmV0dXJuaW5nXG4gICAgICAgKiB3aGV0aGVyIHRoZXJlIHdhcyBvbmUuXG4gICAgICAgKlxuICAgICAgICogPHA+Tm90ZSB0aGF0IHRoZSBib29sZWFuIHJldHVybiBoZXJlIGRvZXMgbm90IHdvcmsgbGlrZSB0aGVcbiAgICAgICAqIHtAY29kZSBkZWxldGV9IG9wZXJhdG9yLiBUaGUge0Bjb2RlIGRlbGV0ZX0gb3BlcmF0b3IgcmV0dXJuc1xuICAgICAgICogd2hldGhlciB0aGUgZGVsZXRpb24gc3VjY2VlZHMgYXQgYnJpbmdpbmcgYWJvdXQgYSBzdGF0ZSBpblxuICAgICAgICogd2hpY2ggdGhlIGRlbGV0ZWQgcHJvcGVydHkgaXMgYWJzZW50LiBUaGUge0Bjb2RlIGRlbGV0ZX1cbiAgICAgICAqIG9wZXJhdG9yIHRoZXJlZm9yZSByZXR1cm5zIHRydWUgaWYgdGhlIHByb3BlcnR5IHdhcyBhbHJlYWR5XG4gICAgICAgKiBhYnNlbnQsIHdoZXJlYXMgdGhpcyB7QGNvZGUgZGVsZXRlfSBtZXRob2QgcmV0dXJucyBmYWxzZSBpZlxuICAgICAgICogdGhlIGFzc29jaWF0aW9uIHdhcyBhbHJlYWR5IGFic2VudC5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlX19fKGtleSk7XG4gICAgICB9LFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0eXBlb2YgSG9zdFdlYWtNYXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBJZiB3ZSBnb3QgaGVyZSwgdGhlbiB0aGUgcGxhdGZvcm0gaGFzIGEgV2Vha01hcCBidXQgd2UgYXJlIGNvbmNlcm5lZFxuICAgICAgLy8gdGhhdCBpdCBtYXkgcmVmdXNlIHRvIHN0b3JlIHNvbWUga2V5IHR5cGVzLiBUaGVyZWZvcmUsIG1ha2UgYSBtYXBcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIHdoaWNoIG1ha2VzIHVzZSBvZiBib3RoIGFzIHBvc3NpYmxlLlxuXG4gICAgICAvLyBJbiB0aGlzIG1vZGUgd2UgYXJlIGFsd2F5cyB1c2luZyBkb3VibGUgbWFwcywgc28gd2UgYXJlIG5vdCBwcm94eS1zYWZlLlxuICAgICAgLy8gVGhpcyBjb21iaW5hdGlvbiBkb2VzIG5vdCBvY2N1ciBpbiBhbnkga25vd24gYnJvd3NlciwgYnV0IHdlIGhhZCBiZXN0XG4gICAgICAvLyBiZSBzYWZlLlxuICAgICAgaWYgKGRvdWJsZVdlYWtNYXBDaGVja1NpbGVudEZhaWx1cmUgJiYgdHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBQcm94eSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gRG91YmxlV2Vha01hcCgpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE91cldlYWtNYXApKSB7ICAvLyBhcHByb3hpbWF0ZSB0ZXN0IGZvciBuZXcgLi4uKClcbiAgICAgICAgICBjYWxsZWRBc0Z1bmN0aW9uV2FybmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlZmVyYWJsZSwgdHJ1bHkgd2VhayBtYXAuXG4gICAgICAgIHZhciBobWFwID0gbmV3IEhvc3RXZWFrTWFwKCk7XG5cbiAgICAgICAgLy8gT3VyIGhpZGRlbi1wcm9wZXJ0eS1iYXNlZCBwc2V1ZG8td2Vhay1tYXAuIExhemlseSBpbml0aWFsaXplZCBpbiB0aGVcbiAgICAgICAgLy8gJ3NldCcgaW1wbGVtZW50YXRpb247IHRodXMgd2UgY2FuIGF2b2lkIHBlcmZvcm1pbmcgZXh0cmEgbG9va3VwcyBpZlxuICAgICAgICAvLyB3ZSBrbm93IGFsbCBlbnRyaWVzIGFjdHVhbGx5IHN0b3JlZCBhcmUgZW50ZXJlZCBpbiAnaG1hcCcuXG4gICAgICAgIHZhciBvbWFwID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIEhpZGRlbi1wcm9wZXJ0eSBtYXBzIGFyZSBub3QgY29tcGF0aWJsZSB3aXRoIHByb3hpZXMgYmVjYXVzZSBwcm94aWVzXG4gICAgICAgIC8vIGNhbiBvYnNlcnZlIHRoZSBoaWRkZW4gbmFtZSBhbmQgZWl0aGVyIGFjY2lkZW50YWxseSBleHBvc2UgaXQgb3IgZmFpbFxuICAgICAgICAvLyB0byBhbGxvdyB0aGUgaGlkZGVuIHByb3BlcnR5IHRvIGJlIHNldC4gVGhlcmVmb3JlLCB3ZSBkbyBub3QgYWxsb3dcbiAgICAgICAgLy8gYXJiaXRyYXJ5IFdlYWtNYXBzIHRvIHN3aXRjaCB0byB1c2luZyBoaWRkZW4gcHJvcGVydGllcywgYnV0IG9ubHlcbiAgICAgICAgLy8gdGhvc2Ugd2hpY2ggbmVlZCB0aGUgYWJpbGl0eSwgYW5kIHVucHJpdmlsZWdlZCBjb2RlIGlzIG5vdCBhbGxvd2VkXG4gICAgICAgIC8vIHRvIHNldCB0aGUgZmxhZy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gKEV4Y2VwdCBpbiBkb3VibGVXZWFrTWFwQ2hlY2tTaWxlbnRGYWlsdXJlIG1vZGUgaW4gd2hpY2ggY2FzZSB3ZVxuICAgICAgICAvLyBkaXNhYmxlIHByb3hpZXMuKVxuICAgICAgICB2YXIgZW5hYmxlU3dpdGNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgZnVuY3Rpb24gZGdldChrZXksIG9wdF9kZWZhdWx0KSB7XG4gICAgICAgICAgaWYgKG9tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBobWFwLmhhcyhrZXkpID8gaG1hcC5nZXQoa2V5KVxuICAgICAgICAgICAgICAgIDogb21hcC5nZXRfX18oa2V5LCBvcHRfZGVmYXVsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBobWFwLmdldChrZXksIG9wdF9kZWZhdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkaGFzKGtleSkge1xuICAgICAgICAgIHJldHVybiBobWFwLmhhcyhrZXkpIHx8IChvbWFwID8gb21hcC5oYXNfX18oa2V5KSA6IGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkc2V0O1xuICAgICAgICBpZiAoZG91YmxlV2Vha01hcENoZWNrU2lsZW50RmFpbHVyZSkge1xuICAgICAgICAgIGRzZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBobWFwLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGlmICghaG1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICBpZiAoIW9tYXApIHsgb21hcCA9IG5ldyBPdXJXZWFrTWFwKCk7IH1cbiAgICAgICAgICAgICAgb21hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRzZXQgPSBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlU3dpdGNoaW5nKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9tYXApIHsgb21hcCA9IG5ldyBPdXJXZWFrTWFwKCk7IH1cbiAgICAgICAgICAgICAgICBvbWFwLnNldF9fXyhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGRlbGV0ZShrZXkpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gISFobWFwWydkZWxldGUnXShrZXkpO1xuICAgICAgICAgIGlmIChvbWFwKSB7IHJldHVybiBvbWFwLmRlbGV0ZV9fXyhrZXkpIHx8IHJlc3VsdDsgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShPdXJXZWFrTWFwLnByb3RvdHlwZSwge1xuICAgICAgICAgIGdldF9fXzogICAgeyB2YWx1ZTogY29uc3RGdW5jKGRnZXQpIH0sXG4gICAgICAgICAgaGFzX19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoZGhhcykgfSxcbiAgICAgICAgICBzZXRfX186ICAgIHsgdmFsdWU6IGNvbnN0RnVuYyhkc2V0KSB9LFxuICAgICAgICAgIGRlbGV0ZV9fXzogeyB2YWx1ZTogY29uc3RGdW5jKGRkZWxldGUpIH0sXG4gICAgICAgICAgcGVybWl0SG9zdE9iamVjdHNfX186IHsgdmFsdWU6IGNvbnN0RnVuYyhmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgaWYgKHRva2VuID09PSB3ZWFrTWFwUGVybWl0SG9zdE9iamVjdHMpIHtcbiAgICAgICAgICAgICAgZW5hYmxlU3dpdGNoaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYm9ndXMgY2FsbCB0byBwZXJtaXRIb3N0T2JqZWN0c19fXycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIERvdWJsZVdlYWtNYXAucHJvdG90eXBlID0gT3VyV2Vha01hcC5wcm90b3R5cGU7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IERvdWJsZVdlYWtNYXA7XG5cbiAgICAgIC8vIGRlZmluZSAuY29uc3RydWN0b3IgdG8gaGlkZSBPdXJXZWFrTWFwIGN0b3JcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXZWFrTWFwLnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywge1xuICAgICAgICB2YWx1ZTogV2Vha01hcCxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsICAvLyBhcyBkZWZhdWx0IC5jb25zdHJ1Y3RvciBpc1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRoZXJlIGlzIG5vIGhvc3QgV2Vha01hcCwgc28gd2UgbXVzdCB1c2UgdGhlIGVtdWxhdGlvbi5cblxuICAgIC8vIEVtdWxhdGVkIFdlYWtNYXBzIGFyZSBpbmNvbXBhdGlibGUgd2l0aCBuYXRpdmUgcHJveGllcyAoYmVjYXVzZSBwcm94aWVzXG4gICAgLy8gY2FuIG9ic2VydmUgdGhlIGhpZGRlbiBuYW1lKSwgc28gd2UgbXVzdCBkaXNhYmxlIFByb3h5IHVzYWdlIChpblxuICAgIC8vIEFycmF5TGlrZSBhbmQgRG9tYWRvLCBjdXJyZW50bHkpLlxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBQcm94eSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IE91cldlYWtNYXA7XG4gIH1cbn0pKCk7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCd3ZWFrLW1hcCcpIDogV2Vha01hcFxuXG52YXIgV2ViR0xFV1N0cnVjdCA9IG5ldyB3ZWFrTWFwKClcblxuZnVuY3Rpb24gYmFzZU5hbWUoZXh0X25hbWUpIHtcbiAgcmV0dXJuIGV4dF9uYW1lLnJlcGxhY2UoL15bQS1aXStfLywgJycpXG59XG5cbmZ1bmN0aW9uIGluaXRXZWJHTEVXKGdsKSB7XG4gIHZhciBzdHJ1Y3QgPSBXZWJHTEVXU3RydWN0LmdldChnbClcbiAgaWYoc3RydWN0KSB7XG4gICAgcmV0dXJuIHN0cnVjdFxuICB9XG4gIHZhciBleHRlbnNpb25zID0ge31cbiAgdmFyIHN1cHBvcnRlZCA9IGdsLmdldFN1cHBvcnRlZEV4dGVuc2lvbnMoKVxuICBmb3IodmFyIGk9MDsgaTxzdXBwb3J0ZWQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgZXh0TmFtZSA9IHN1cHBvcnRlZFtpXVxuXG4gICAgLy9Ta2lwIE1PWl8gZXh0ZW5zaW9uc1xuICAgIGlmKGV4dE5hbWUuaW5kZXhPZignTU9aXycpID09PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB2YXIgZXh0ID0gZ2wuZ2V0RXh0ZW5zaW9uKHN1cHBvcnRlZFtpXSlcbiAgICBpZighZXh0KSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICBleHRlbnNpb25zW2V4dE5hbWVdID0gZXh0XG4gICAgICB2YXIgYmFzZSA9IGJhc2VOYW1lKGV4dE5hbWUpXG4gICAgICBpZihiYXNlID09PSBleHROYW1lKSB7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBleHROYW1lID0gYmFzZVxuICAgIH1cbiAgfVxuICBXZWJHTEVXU3RydWN0LnNldChnbCwgZXh0ZW5zaW9ucylcbiAgcmV0dXJuIGV4dGVuc2lvbnNcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5pdFdlYkdMRVciLCJtb2R1bGUuZXhwb3J0cyA9IGhhc0tleXNcblxuZnVuY3Rpb24gaGFzS2V5cyhzb3VyY2UpIHtcbiAgICByZXR1cm4gc291cmNlICE9PSBudWxsICYmXG4gICAgICAgICh0eXBlb2Ygc291cmNlID09PSBcIm9iamVjdFwiIHx8XG4gICAgICAgIHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIilcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgS2V5cyA9IHJlcXVpcmUoXCJvYmplY3Qta2V5c1wiKVxudmFyIGhhc0tleXMgPSByZXF1aXJlKFwiLi9oYXMta2V5c1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgaWYgKCFoYXNLZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IEtleXMoc291cmNlKVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBrZXlzW2pdXG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBzb3VyY2VbbmFtZV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIGlzRnVuYyA9ICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgIShmbiBpbnN0YW5jZW9mIFJlZ0V4cCkpIHx8IHRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRpZiAoIWlzRnVuYyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlzRnVuYyA9IGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fCBmbiA9PT0gd2luZG93LmFsZXJ0IHx8IGZuID09PSB3aW5kb3cuY29uZmlybSB8fCBmbiA9PT0gd2luZG93LnByb21wdDtcblx0fVxuXHRyZXR1cm4gaXNGdW5jO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcblx0aWYgKCFpc0Z1bmN0aW9uKGZuKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdHZhciBpLCBrLFxuXHRcdGlzU3RyaW5nID0gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycsXG5cdFx0bCA9IG9iai5sZW5ndGgsXG5cdFx0Y29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0aWYgKGwgPT09ICtsKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0aWYgKGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0Zm4oaXNTdHJpbmcgPyBvYmouY2hhckF0KGkpIDogb2JqW2ldLCBpLCBvYmopO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm4uY2FsbChjb250ZXh0LCBpc1N0cmluZyA/IG9iai5jaGFyQXQoaSkgOiBvYmpbaV0sIGksIG9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAoayBpbiBvYmopIHtcblx0XHRcdGlmIChoYXNPd24uY2FsbChvYmosIGspKSB7XG5cdFx0XHRcdGlmIChjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Zm4ob2JqW2tdLCBrLCBvYmopO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZuLmNhbGwoY29udGV4dCwgb2JqW2tdLCBrLCBvYmopO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IHJlcXVpcmUoJy4vc2hpbScpO1xuXG4iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0cmluZy5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJndW1lbnRzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3VtZW50cykge1xuXHRcdGlzQXJndW1lbnRzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nXG5cdFx0XHQmJiB2YWx1ZSAhPT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuXHRcdFx0JiYgdHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcidcblx0XHRcdCYmIHZhbHVlLmxlbmd0aCA+PSAwXG5cdFx0XHQmJiB0b1N0cmluZy5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJndW1lbnRzO1xufTtcblxuIiwiKGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuXHRcdHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0XHRmb3JFYWNoID0gcmVxdWlyZSgnLi9mb3JlYWNoJyksXG5cdFx0aXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuXHRcdGhhc0RvbnRFbnVtQnVnID0gISh7J3RvU3RyaW5nJzogbnVsbH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxuXHRcdGhhc1Byb3RvRW51bUJ1ZyA9IChmdW5jdGlvbiAoKSB7fSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3Byb3RvdHlwZScpLFxuXHRcdGRvbnRFbnVtcyA9IFtcblx0XHRcdFwidG9TdHJpbmdcIixcblx0XHRcdFwidG9Mb2NhbGVTdHJpbmdcIixcblx0XHRcdFwidmFsdWVPZlwiLFxuXHRcdFx0XCJoYXNPd25Qcm9wZXJ0eVwiLFxuXHRcdFx0XCJpc1Byb3RvdHlwZU9mXCIsXG5cdFx0XHRcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXG5cdFx0XHRcImNvbnN0cnVjdG9yXCJcblx0XHRdLFxuXHRcdGtleXNTaGltO1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcsXG5cdFx0XHRpc0Z1bmN0aW9uID0gdG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nLFxuXHRcdFx0aXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KSxcblx0XHRcdHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdFwiKTtcblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMpIHtcblx0XHRcdGZvckVhY2gob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbmFtZSxcblx0XHRcdFx0c2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cblx0XHRcdGZvciAobmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKG5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgY3RvciA9IG9iamVjdC5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0c2tpcENvbnN0cnVjdG9yID0gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0O1xuXG5cdFx0XHRmb3JFYWNoKGRvbnRFbnVtcywgZnVuY3Rpb24gKGRvbnRFbnVtKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbn0oKSk7XG5cbiJdfQ==
