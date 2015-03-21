(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./test.js":[function(require,module,exports){
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
},{"./":"/projects/blackice/index.js","domready":"/projects/blackice/node_modules/domready/ready.js"}],"/projects/blackice/fonts/Exo2SemiBold.json":[function(require,module,exports){
module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports=module.exports={"pages":["Exo2SemiBold.png"],"chars":[{"id":32,"x":0,"y":0,"width":0,"height":0,"xoffset":0,"yoffset":33,"xadvance":7,"page":0,"chnl":0},{"id":41,"x":0,"y":0,"width":20,"height":41,"xoffset":-4,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":40,"x":20,"y":0,"width":19,"height":41,"xoffset":-3,"yoffset":3,"xadvance":12,"page":0,"chnl":0},{"id":166,"x":39,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":124,"x":52,"y":0,"width":13,"height":40,"xoffset":-2,"yoffset":3,"xadvance":8,"page":0,"chnl":0},{"id":125,"x":65,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":123,"x":83,"y":0,"width":18,"height":40,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":36,"x":101,"y":0,"width":25,"height":39,"xoffset":-3,"yoffset":3,"xadvance":18,"page":0,"chnl":0},{"id":93,"x":126,"y":0,"width":17,"height":39,"xoffset":-3,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":91,"x":143,"y":0,"width":17,"height":39,"xoffset":-2,"yoffset":4,"xadvance":11,"page":0,"chnl":0},{"id":81,"x":160,"y":0,"width":28,"height":39,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":182,"x":188,"y":0,"width":25,"height":38,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":167,"x":213,"y":0,"width":24,"height":38,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":106,"x":237,"y":0,"width":16,"height":38,"xoffset":-4,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":92,"x":253,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":47,"x":279,"y":0,"width":26,"height":34,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":102,"x":305,"y":0,"width":23,"height":33,"xoffset":-4,"yoffset":5,"xadvance":13,"page":0,"chnl":0},{"id":169,"x":328,"y":0,"width":33,"height":32,"xoffset":-3,"yoffset":6,"xadvance":26,"page":0,"chnl":0},{"id":165,"x":361,"y":0,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":163,"x":390,"y":0,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":162,"x":415,"y":0,"width":23,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":161,"x":438,"y":0,"width":14,"height":32,"xoffset":-2,"yoffset":12,"xadvance":9,"page":0,"chnl":0},{"id":38,"x":452,"y":0,"width":32,"height":32,"xoffset":-3,"yoffset":6,"xadvance":25,"page":0,"chnl":0},{"id":35,"x":0,"y":41,"width":30,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":37,"x":30,"y":41,"width":36,"height":32,"xoffset":-3,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":63,"x":66,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":16,"page":0,"chnl":0},{"id":33,"x":90,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":48,"x":104,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":57,"x":130,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":56,"x":155,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":55,"x":181,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":54,"x":205,"y":41,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":53,"x":231,"y":41,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":52,"x":255,"y":41,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":51,"x":282,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":50,"x":307,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":49,"x":332,"y":41,"width":19,"height":32,"xoffset":-4,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":121,"x":351,"y":41,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":113,"x":378,"y":41,"width":25,"height":32,"xoffset":-3,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":112,"x":403,"y":41,"width":25,"height":32,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":108,"x":428,"y":41,"width":17,"height":32,"xoffset":-2,"yoffset":6,"xadvance":10,"page":0,"chnl":0},{"id":107,"x":445,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":105,"x":469,"y":41,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":8,"page":0,"chnl":0},{"id":104,"x":483,"y":41,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":103,"x":0,"y":73,"width":27,"height":32,"xoffset":-4,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":100,"x":27,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":98,"x":52,"y":73,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":90,"x":77,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":89,"x":102,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":88,"x":130,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":87,"x":159,"y":73,"width":39,"height":32,"xoffset":-4,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":86,"x":198,"y":73,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":85,"x":227,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":84,"x":254,"y":73,"width":28,"height":32,"xoffset":-4,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":83,"x":282,"y":73,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":82,"x":307,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":80,"x":333,"y":73,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":79,"x":359,"y":73,"width":28,"height":32,"xoffset":-3,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":78,"x":387,"y":73,"width":28,"height":32,"xoffset":-2,"yoffset":6,"xadvance":23,"page":0,"chnl":0},{"id":77,"x":415,"y":73,"width":34,"height":32,"xoffset":-2,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":76,"x":449,"y":73,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":75,"x":473,"y":73,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":74,"x":0,"y":105,"width":18,"height":32,"xoffset":-4,"yoffset":6,"xadvance":11,"page":0,"chnl":0},{"id":73,"x":18,"y":105,"width":14,"height":32,"xoffset":-2,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":72,"x":32,"y":105,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":71,"x":59,"y":105,"width":27,"height":32,"xoffset":-3,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":70,"x":86,"y":105,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":69,"x":110,"y":105,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":68,"x":134,"y":105,"width":27,"height":32,"xoffset":-2,"yoffset":6,"xadvance":21,"page":0,"chnl":0},{"id":67,"x":161,"y":105,"width":26,"height":32,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":66,"x":187,"y":105,"width":26,"height":32,"xoffset":-2,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":65,"x":213,"y":105,"width":30,"height":32,"xoffset":-4,"yoffset":6,"xadvance":20,"page":0,"chnl":0},{"id":64,"x":243,"y":105,"width":29,"height":31,"xoffset":-2,"yoffset":9,"xadvance":24,"page":0,"chnl":0},{"id":116,"x":272,"y":105,"width":22,"height":30,"xoffset":-4,"yoffset":8,"xadvance":13,"page":0,"chnl":0},{"id":59,"x":294,"y":105,"width":14,"height":29,"xoffset":-2,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":164,"x":308,"y":105,"width":25,"height":26,"xoffset":-3,"yoffset":9,"xadvance":19,"page":0,"chnl":0},{"id":122,"x":333,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":120,"x":357,"y":105,"width":26,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":119,"x":383,"y":105,"width":36,"height":26,"xoffset":-4,"yoffset":12,"xadvance":27,"page":0,"chnl":0},{"id":118,"x":419,"y":105,"width":27,"height":26,"xoffset":-4,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":117,"x":446,"y":105,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":115,"x":470,"y":105,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":114,"x":0,"y":137,"width":20,"height":26,"xoffset":-2,"yoffset":12,"xadvance":13,"page":0,"chnl":0},{"id":111,"x":20,"y":137,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":110,"x":45,"y":137,"width":24,"height":26,"xoffset":-2,"yoffset":12,"xadvance":19,"page":0,"chnl":0},{"id":109,"x":69,"y":137,"width":33,"height":26,"xoffset":-2,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":101,"x":102,"y":137,"width":25,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":99,"x":127,"y":137,"width":23,"height":26,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":97,"x":150,"y":137,"width":24,"height":26,"xoffset":-3,"yoffset":12,"xadvance":18,"page":0,"chnl":0},{"id":177,"x":174,"y":137,"width":24,"height":25,"xoffset":-2,"yoffset":11,"xadvance":19,"page":0,"chnl":0},{"id":178,"x":198,"y":137,"width":21,"height":24,"xoffset":-3,"yoffset":3,"xadvance":14,"page":0,"chnl":0},{"id":43,"x":219,"y":137,"width":24,"height":24,"xoffset":-3,"yoffset":11,"xadvance":17,"page":0,"chnl":0},{"id":62,"x":243,"y":137,"width":23,"height":24,"xoffset":-2,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":60,"x":266,"y":137,"width":23,"height":24,"xoffset":-3,"yoffset":12,"xadvance":17,"page":0,"chnl":0},{"id":58,"x":289,"y":137,"width":14,"height":24,"xoffset":-3,"yoffset":14,"xadvance":8,"page":0,"chnl":0},{"id":187,"x":303,"y":137,"width":23,"height":23,"xoffset":-3,"yoffset":14,"xadvance":16,"page":0,"chnl":0},{"id":185,"x":326,"y":137,"width":17,"height":23,"xoffset":-4,"yoffset":4,"xadvance":10,"page":0,"chnl":0},{"id":179,"x":343,"y":137,"width":20,"height":23,"xoffset":-3,"yoffset":4,"xadvance":13,"page":0,"chnl":0},{"id":174,"x":363,"y":137,"width":24,"height":23,"xoffset":-3,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":171,"x":387,"y":137,"width":23,"height":23,"xoffset":-3,"yoffset":14,"xadvance":16,"page":0,"chnl":0},{"id":186,"x":410,"y":137,"width":21,"height":21,"xoffset":-3,"yoffset":9,"xadvance":14,"page":0,"chnl":0},{"id":199,"x":431,"y":137,"width":26,"height":40,"xoffset":-3,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":253,"x":457,"y":137,"width":27,"height":39,"xoffset":-4,"yoffset":5,"xadvance":17,"page":0,"chnl":0},{"id":221,"x":0,"y":177,"width":28,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":19,"page":0,"chnl":0},{"id":219,"x":28,"y":177,"width":27,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":21,"page":0,"chnl":0},{"id":218,"x":55,"y":177,"width":27,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":21,"page":0,"chnl":0},{"id":217,"x":82,"y":177,"width":27,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":21,"page":0,"chnl":0},{"id":213,"x":109,"y":177,"width":28,"height":39,"xoffset":-3,"yoffset":-1,"xadvance":22,"page":0,"chnl":0},{"id":212,"x":137,"y":177,"width":28,"height":39,"xoffset":-3,"yoffset":-1,"xadvance":22,"page":0,"chnl":0},{"id":206,"x":165,"y":177,"width":24,"height":39,"xoffset":-6,"yoffset":-1,"xadvance":9,"page":0,"chnl":0},{"id":205,"x":189,"y":177,"width":18,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":9,"page":0,"chnl":0},{"id":204,"x":207,"y":177,"width":19,"height":39,"xoffset":-6,"yoffset":-1,"xadvance":9,"page":0,"chnl":0},{"id":202,"x":226,"y":177,"width":24,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":18,"page":0,"chnl":0},{"id":201,"x":250,"y":177,"width":24,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":18,"page":0,"chnl":0},{"id":200,"x":274,"y":177,"width":24,"height":39,"xoffset":-2,"yoffset":-1,"xadvance":18,"page":0,"chnl":0},{"id":197,"x":298,"y":177,"width":30,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":20,"page":0,"chnl":0},{"id":193,"x":328,"y":177,"width":30,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":20,"page":0,"chnl":0},{"id":192,"x":358,"y":177,"width":30,"height":39,"xoffset":-4,"yoffset":-1,"xadvance":20,"page":0,"chnl":0},{"id":255,"x":388,"y":177,"width":27,"height":38,"xoffset":-4,"yoffset":6,"xadvance":17,"page":0,"chnl":0},{"id":254,"x":415,"y":177,"width":25,"height":38,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":220,"x":440,"y":177,"width":27,"height":38,"xoffset":-2,"yoffset":0,"xadvance":21,"page":0,"chnl":0},{"id":214,"x":467,"y":177,"width":28,"height":38,"xoffset":-3,"yoffset":0,"xadvance":22,"page":0,"chnl":0},{"id":211,"x":0,"y":216,"width":28,"height":38,"xoffset":-3,"yoffset":0,"xadvance":22,"page":0,"chnl":0},{"id":210,"x":28,"y":216,"width":28,"height":38,"xoffset":-3,"yoffset":0,"xadvance":22,"page":0,"chnl":0},{"id":209,"x":56,"y":216,"width":28,"height":38,"xoffset":-2,"yoffset":0,"xadvance":23,"page":0,"chnl":0},{"id":207,"x":84,"y":216,"width":18,"height":38,"xoffset":-4,"yoffset":0,"xadvance":9,"page":0,"chnl":0},{"id":203,"x":102,"y":216,"width":24,"height":38,"xoffset":-2,"yoffset":0,"xadvance":18,"page":0,"chnl":0},{"id":196,"x":126,"y":216,"width":30,"height":38,"xoffset":-4,"yoffset":0,"xadvance":20,"page":0,"chnl":0},{"id":195,"x":156,"y":216,"width":30,"height":38,"xoffset":-4,"yoffset":0,"xadvance":20,"page":0,"chnl":0},{"id":194,"x":186,"y":216,"width":30,"height":38,"xoffset":-4,"yoffset":0,"xadvance":20,"page":0,"chnl":0},{"id":216,"x":216,"y":216,"width":28,"height":35,"xoffset":-3,"yoffset":5,"xadvance":22,"page":0,"chnl":0},{"id":251,"x":244,"y":216,"width":24,"height":34,"xoffset":-2,"yoffset":4,"xadvance":19,"page":0,"chnl":0},{"id":250,"x":268,"y":216,"width":24,"height":34,"xoffset":-2,"yoffset":4,"xadvance":19,"page":0,"chnl":0},{"id":249,"x":292,"y":216,"width":24,"height":34,"xoffset":-2,"yoffset":4,"xadvance":19,"page":0,"chnl":0},{"id":237,"x":316,"y":216,"width":18,"height":34,"xoffset":-3,"yoffset":4,"xadvance":9,"page":0,"chnl":0},{"id":236,"x":334,"y":216,"width":19,"height":34,"xoffset":-6,"yoffset":4,"xadvance":9,"page":0,"chnl":0},{"id":231,"x":353,"y":216,"width":23,"height":34,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":229,"x":376,"y":216,"width":24,"height":34,"xoffset":-3,"yoffset":4,"xadvance":18,"page":0,"chnl":0},{"id":244,"x":400,"y":216,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":243,"x":425,"y":216,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":242,"x":450,"y":216,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":238,"x":475,"y":216,"width":22,"height":33,"xoffset":-6,"yoffset":5,"xadvance":9,"page":0,"chnl":0},{"id":234,"x":0,"y":254,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":233,"x":25,"y":254,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":232,"x":50,"y":254,"width":25,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":226,"x":75,"y":254,"width":24,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":225,"x":99,"y":254,"width":24,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":224,"x":123,"y":254,"width":24,"height":33,"xoffset":-3,"yoffset":5,"xadvance":18,"page":0,"chnl":0},{"id":223,"x":147,"y":254,"width":31,"height":33,"xoffset":-4,"yoffset":5,"xadvance":22,"page":0,"chnl":0},{"id":252,"x":178,"y":254,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":246,"x":202,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":245,"x":227,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":241,"x":252,"y":254,"width":24,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":240,"x":276,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":239,"x":301,"y":254,"width":19,"height":32,"xoffset":-5,"yoffset":6,"xadvance":9,"page":0,"chnl":0},{"id":235,"x":320,"y":254,"width":25,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":228,"x":345,"y":254,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":227,"x":369,"y":254,"width":24,"height":32,"xoffset":-3,"yoffset":6,"xadvance":18,"page":0,"chnl":0},{"id":222,"x":393,"y":254,"width":25,"height":32,"xoffset":-2,"yoffset":6,"xadvance":19,"page":0,"chnl":0},{"id":208,"x":418,"y":254,"width":29,"height":32,"xoffset":-4,"yoffset":6,"xadvance":22,"page":0,"chnl":0},{"id":198,"x":447,"y":254,"width":39,"height":32,"xoffset":-5,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":191,"x":486,"y":254,"width":24,"height":32,"xoffset":-3,"yoffset":12,"xadvance":16,"page":0,"chnl":0},{"id":190,"x":0,"y":287,"width":38,"height":32,"xoffset":-3,"yoffset":6,"xadvance":31,"page":0,"chnl":0},{"id":189,"x":38,"y":287,"width":37,"height":32,"xoffset":-4,"yoffset":6,"xadvance":29,"page":0,"chnl":0},{"id":188,"x":75,"y":287,"width":37,"height":32,"xoffset":-4,"yoffset":6,"xadvance":28,"page":0,"chnl":0},{"id":248,"x":112,"y":287,"width":25,"height":31,"xoffset":-3,"yoffset":10,"xadvance":18,"page":0,"chnl":0},{"id":247,"x":137,"y":287,"width":25,"height":26,"xoffset":-3,"yoffset":10,"xadvance":18,"page":0,"chnl":0},{"id":230,"x":162,"y":287,"width":35,"height":26,"xoffset":-3,"yoffset":12,"xadvance":28,"page":0,"chnl":0},{"id":215,"x":197,"y":287,"width":23,"height":22,"xoffset":-3,"yoffset":13,"xadvance":16,"page":0,"chnl":0},{"id":170,"x":220,"y":287,"width":21,"height":21,"xoffset":-3,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":42,"x":241,"y":287,"width":21,"height":21,"xoffset":-3,"yoffset":6,"xadvance":14,"page":0,"chnl":0},{"id":61,"x":262,"y":287,"width":24,"height":20,"xoffset":-2,"yoffset":13,"xadvance":19,"page":0,"chnl":0},{"id":94,"x":286,"y":287,"width":23,"height":19,"xoffset":-4,"yoffset":8,"xadvance":14,"page":0,"chnl":0},{"id":44,"x":309,"y":287,"width":14,"height":19,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":176,"x":323,"y":287,"width":18,"height":18,"xoffset":-3,"yoffset":7,"xadvance":11,"page":0,"chnl":0},{"id":180,"x":341,"y":287,"width":18,"height":17,"xoffset":-3,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":172,"x":359,"y":287,"width":24,"height":17,"xoffset":-2,"yoffset":17,"xadvance":19,"page":0,"chnl":0},{"id":39,"x":383,"y":287,"width":13,"height":17,"xoffset":-3,"yoffset":6,"xadvance":7,"page":0,"chnl":0},{"id":96,"x":396,"y":287,"width":18,"height":17,"xoffset":-4,"yoffset":5,"xadvance":11,"page":0,"chnl":0},{"id":34,"x":414,"y":287,"width":18,"height":17,"xoffset":-3,"yoffset":6,"xadvance":12,"page":0,"chnl":0},{"id":184,"x":432,"y":287,"width":16,"height":16,"xoffset":-4,"yoffset":30,"xadvance":8,"page":0,"chnl":0},{"id":183,"x":448,"y":287,"width":13,"height":14,"xoffset":-2,"yoffset":18,"xadvance":8,"page":0,"chnl":0},{"id":175,"x":461,"y":287,"width":20,"height":14,"xoffset":-3,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":168,"x":481,"y":287,"width":19,"height":14,"xoffset":-2,"yoffset":6,"xadvance":13,"page":0,"chnl":0},{"id":126,"x":0,"y":319,"width":22,"height":14,"xoffset":-2,"yoffset":17,"xadvance":17,"page":0,"chnl":0},{"id":46,"x":22,"y":319,"width":14,"height":14,"xoffset":-3,"yoffset":24,"xadvance":8,"page":0,"chnl":0},{"id":173,"x":36,"y":319,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0},{"id":95,"x":55,"y":319,"width":24,"height":13,"xoffset":-2,"yoffset":28,"xadvance":18,"page":0,"chnl":0},{"id":45,"x":79,"y":319,"width":19,"height":13,"xoffset":-2,"yoffset":18,"xadvance":14,"page":0,"chnl":0}],"kernings":[],"info":{"face":"Exo 2 Semi Bold","size":32,"bold":0,"italic":0,"charset":"","unicode":0,"stretchH":100,"smooth":1,"aa":1,"padding":[4,4,4,4],"spacing":[-8,-8]},"common":{"lineHeight":40,"base":33,"scaleW":512,"scaleH":512,"pages":1,"packed":0}}
},{}],"/projects/blackice/index.js":[function(require,module,exports){
(function (global){
require('raf.js')

var THREE = (typeof window !== "undefined" ? window.THREE : typeof global !== "undefined" ? global.THREE : null)
var Renderer = require('./lib/renderer')
var createFont = require('./lib/create-font')
var xtend = require('xtend')

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
        cb = cb || function() {}
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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/create-font":"/projects/blackice/lib/create-font.js","./lib/renderer":"/projects/blackice/lib/renderer.js","canvas-app":"/projects/blackice/node_modules/canvas-app/index.js","raf.js":"/projects/blackice/node_modules/raf.js/raf.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/lib/RigScene.js":[function(require,module,exports){
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
    renderer.resetAttributes();
};

module.exports = TextPass;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"as-number":"/projects/blackice/node_modules/as-number/index.js","gl-mat4/identity":"/projects/blackice/node_modules/gl-mat4/identity.js","gl-mat4/multiply":"/projects/blackice/node_modules/gl-mat4/multiply.js","gl-mat4/scale":"/projects/blackice/node_modules/gl-mat4/scale.js","gl-mat4/translate":"/projects/blackice/node_modules/gl-mat4/translate.js","gl-vec3/set":"/projects/blackice/node_modules/gl-vec3/set.js","glslify":"/projects/blackice/node_modules/glslify/browser.js","glslify/adapter.js":"/projects/blackice/node_modules/glslify/adapter.js","inherits":"/projects/blackice/node_modules/inherits/inherits_browser.js","plucker":"/projects/blackice/node_modules/plucker/index.js","three-effectcomposer":"/projects/blackice/node_modules/three-effectcomposer/index.js","three-sdf-text":"/projects/blackice/node_modules/three-sdf-text/index.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/lib/animate-labels.js":[function(require,module,exports){
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
        renderer.resetAttributes()
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
},{"./texture-wrap":"/projects/blackice/node_modules/three-sdf-text/lib/texture-wrap.js","as-number":"/projects/blackice/node_modules/as-number/index.js","gl-mat4/create":"/projects/blackice/node_modules/gl-mat4/create.js","gl-mat4/multiply":"/projects/blackice/node_modules/gl-mat4/multiply.js","gl-mat4/scale":"/projects/blackice/node_modules/gl-mat4/scale.js","gl-shader-core":"/projects/blackice/node_modules/gl-shader-core/shader-core.js","gl-sprite-text":"/projects/blackice/node_modules/gl-sprite-text/index.js","xtend":"/projects/blackice/node_modules/xtend/index.js"}],"/projects/blackice/node_modules/three-sdf-text/lib/texture-wrap.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZXN0LmpzIiwiZm9udHMvRXhvMlNlbWlCb2xkLmpzb24iLCJpbmRleC5qcyIsImxpYi9SaWdTY2VuZS5qcyIsImxpYi9UZXh0UGFzcy5qcyIsImxpYi9hbmltYXRlLWxhYmVscy5qcyIsImxpYi9jcmVhdGUtZm9udC5qcyIsImxpYi9jcmVhdGUtdGV4dC1wYXNzLmpzIiwibGliL2lzLW1vYmlsZS5qcyIsImxpYi9yZW5kZXJlci5qcyIsImxpYi9zZXR1cC1lZmZlY3RzLmpzIiwibGliL3NldHVwLWZsb29yLmpzIiwibGliL3NldHVwLXdhdGVyLmpzIiwibGliL3NoYWRlcnMvYmx1ci5qcyIsImxpYi9zaGFkZXJzL2NyZWF0ZS5qcyIsImxpYi9zaGFkZXJzL2xlbnMuanMiLCJsaWIvc2hhZGVycy9wYXNzLmpzIiwibGliL3RleHQtZGF0YS5qcyIsImxpYi90aHJlZS1vcmJpdC1jYW1lcmEvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYXMtbnVtYmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2lzLWFycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2FudmFzLWFwcC9ub2RlX21vZHVsZXMvYWRkLWV2ZW50LWxpc3RlbmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2RlYm91bmNlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL2RlYm91bmNlL25vZGVfbW9kdWxlcy9kYXRlLW5vdy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jYW52YXMtYXBwL25vZGVfbW9kdWxlcy9pcy13ZWJnbC1jb250ZXh0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2NhbnZhcy1hcHAvbm9kZV9tb2R1bGVzL3dlYmdsLWNvbnRleHQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2xhbXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiLCJub2RlX21vZHVsZXMvZHVwL2R1cC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL2dsLW1hdDQvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvZ2wtbWF0NC9zY2FsZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1tYXQ0L3RyYW5zbGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvY3JlYXRlLWF0dHJpYnV0ZXMuanMiLCJub2RlX21vZHVsZXMvZ2wtc2hhZGVyLWNvcmUvbGliL2NyZWF0ZS11bmlmb3Jtcy5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9saWIvcmVmbGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zaGFkZXItY29yZS9zaGFkZXItY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZm9udHBhdGgtYm1mb250L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXNpbXBsZS1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtcmVuZGVyZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXNpbXBsZS1yZW5kZXJlci9ub2RlX21vZHVsZXMvZm9udHBhdGgtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLWdseXBoLWl0ZXJhdG9yL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC11dGlsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9mb250cGF0aC1zaW1wbGUtcmVuZGVyZXIvbm9kZV9tb2R1bGVzL2ZvbnRwYXRoLXJlbmRlcmVyL25vZGVfbW9kdWxlcy9mb250cGF0aC13b3Jkd3JhcC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL2NvbW1vbi5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWFsaWFzZWQtdmFvL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWFsaWFzZWQtdmFvL2xpYi9kby1iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL2dsLWFsaWFzZWQtdmFvL2xpYi92YW8tZW11bGF0ZWQuanMiLCJub2RlX21vZHVsZXMvZ2wtc3ByaXRlLXRleHQvbm9kZV9tb2R1bGVzL2dsLXNwcml0ZS1iYXRjaC9ub2RlX21vZHVsZXMvZ2wtYnVmZmVyL2J1ZmZlci5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL25vZGVfbW9kdWxlcy9nbC13aGl0ZS10ZXh0dXJlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dsLXNwcml0ZS10ZXh0L25vZGVfbW9kdWxlcy9nbC1zcHJpdGUtYmF0Y2gvbm9kZV9tb2R1bGVzL3ByZW11bHRpcGxpZWQtcmdiYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvZ2wtc3ByaXRlLWJhdGNoL3BhY2stcmdiYS1mbG9hdC5qcyIsIm5vZGVfbW9kdWxlcy9nbC1zcHJpdGUtdGV4dC9ub2RlX21vZHVsZXMvdGV4Y29vcmQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ2wtdGV4dHVyZTJkL3RleHR1cmUuanMiLCJub2RlX21vZHVsZXMvZ2wtdmVjMy9zZXQuanMiLCJub2RlX21vZHVsZXMvZ2xzbGlmeS9hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL2dsc2xpZnkvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9nbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzIiwibm9kZV9tb2R1bGVzL2ltZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2xlcnAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWl4ZXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbmRhcnJheS1vcHMuanMiLCJub2RlX21vZHVsZXMvbmRhcnJheS1vcHMvbm9kZV9tb2R1bGVzL2N3aXNlLWNvbXBpbGVyL2NvbXBpbGVyLmpzIiwibm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9saWIvY29tcGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9uZGFycmF5LW9wcy9ub2RlX21vZHVsZXMvY3dpc2UtY29tcGlsZXIvbGliL3RodW5rLmpzIiwibm9kZV9tb2R1bGVzL25kYXJyYXktb3BzL25vZGVfbW9kdWxlcy9jd2lzZS1jb21waWxlci9ub2RlX21vZHVsZXMvdW5pcS91bmlxLmpzIiwibm9kZV9tb2R1bGVzL25kYXJyYXkvbmRhcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9uZGFycmF5L25vZGVfbW9kdWxlcy9pb3RhLWFycmF5L2lvdGEuanMiLCJub2RlX21vZHVsZXMvbnVtYmVyLXV0aWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcGx1Y2tlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYWYuanMvcmFmLmpzIiwibm9kZV9tb2R1bGVzL3JhbmRmL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Ntb290aHN0ZXAvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL2NsZWFybWFza3Bhc3MuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZWZmZWN0Y29tcG9zZXIvbGliL21hc2twYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9yZW5kZXJwYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL2xpYi9zaGFkZXJwYXNzLmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWVmZmVjdGNvbXBvc2VyL25vZGVfbW9kdWxlcy90aHJlZS1jb3B5c2hhZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3RocmVlLWdsc2xpZnkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGhyZWUtZ2xzbGlmeS90eXBlcy5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zZGYtdGV4dC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zZGYtdGV4dC9saWIvcmVuZGVyZXIuanMiLCJub2RlX21vZHVsZXMvdGhyZWUtc2RmLXRleHQvbGliL3RleHR1cmUtd3JhcC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaGFkZXItZnhhYS9jb21waWxlZC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaGFkZXItZnhhYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90aHJlZS1zaW1wbGljaWFsLWNvbXBsZXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdHlwZWRhcnJheS1wb29sL25vZGVfbW9kdWxlcy9iaXQtdHdpZGRsZS90d2lkZGxlLmpzIiwibm9kZV9tb2R1bGVzL3R5cGVkYXJyYXktcG9vbC9wb29sLmpzIiwibm9kZV9tb2R1bGVzL3VhLWRldmljZS10eXBlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3VubGVycC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy93ZWJnbGV3L25vZGVfbW9kdWxlcy93ZWFrLW1hcC93ZWFrLW1hcC5qcyIsIm5vZGVfbW9kdWxlcy93ZWJnbGV3L3dlYmdsZXcuanMiLCJub2RlX21vZHVsZXMveHRlbmQvaGFzLWtleXMuanMiLCJub2RlX21vZHVsZXMveHRlbmQvaW5kZXguanMiLCJub2RlX21vZHVsZXMveHRlbmQvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2ZvcmVhY2guanMiLCJub2RlX21vZHVsZXMveHRlbmQvbm9kZV9tb2R1bGVzL29iamVjdC1rZXlzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3h0ZW5kL25vZGVfbW9kdWxlcy9vYmplY3Qta2V5cy9pc0FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy94dGVuZC9ub2RlX21vZHVsZXMvb2JqZWN0LWtleXMvc2hpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDdklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEhBO0FBQ0E7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0hBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDUkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3pxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNWhDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDelJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN2NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN4VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBibGFja2ljZSA9IHJlcXVpcmUoJy4vJylcblxucmVxdWlyZSgnZG9tcmVhZHknKShmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpbiA9ICcwJ1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuXG4gICAgLy95b3VyIGNhbnZhcy4uLlxuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKVxuXG4gICAgdmFyIGFwcCA9IGJsYWNraWNlKHsgXG4gICAgICAgIGNhbnZhczogY2FudmFzXG4gICAgfSlcblxuICAgIGFwcC5sb2FkKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIGFwcC5zdGFydCgpXG4gICAgfSlcbn0pIiwibW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9e1wicGFnZXNcIjpbXCJFeG8yU2VtaUJvbGQucG5nXCJdLFwiY2hhcnNcIjpbe1wiaWRcIjozMixcInhcIjowLFwieVwiOjAsXCJ3aWR0aFwiOjAsXCJoZWlnaHRcIjowLFwieG9mZnNldFwiOjAsXCJ5b2Zmc2V0XCI6MzMsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQxLFwieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6MjAsXCJoZWlnaHRcIjo0MSxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDAsXCJ4XCI6MjAsXCJ5XCI6MCxcIndpZHRoXCI6MTksXCJoZWlnaHRcIjo0MSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTY2LFwieFwiOjM5LFwieVwiOjAsXCJ3aWR0aFwiOjEzLFwiaGVpZ2h0XCI6NDAsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTI0LFwieFwiOjUyLFwieVwiOjAsXCJ3aWR0aFwiOjEzLFwiaGVpZ2h0XCI6NDAsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MyxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTI1LFwieFwiOjY1LFwieVwiOjAsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6NDAsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMyxcInhcIjo4MyxcInlcIjowLFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozNixcInhcIjoxMDEsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjozLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTMsXCJ4XCI6MTI2LFwieVwiOjAsXCJ3aWR0aFwiOjE3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkxLFwieFwiOjE0MyxcInlcIjowLFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MSxcInhcIjoxNjAsXCJ5XCI6MCxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTgyLFwieFwiOjE4OCxcInlcIjowLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNjcsXCJ4XCI6MjEzLFwieVwiOjAsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwNixcInhcIjoyMzcsXCJ5XCI6MCxcIndpZHRoXCI6MTYsXCJoZWlnaHRcIjozOCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5MixcInhcIjoyNTMsXCJ5XCI6MCxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDcsXCJ4XCI6Mjc5LFwieVwiOjAsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzQsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMixcInhcIjozMDUsXCJ5XCI6MCxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTY5LFwieFwiOjMyOCxcInlcIjowLFwid2lkdGhcIjozMyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI2LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNjUsXCJ4XCI6MzYxLFwieVwiOjAsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE2MyxcInhcIjozOTAsXCJ5XCI6MCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTYyLFwieFwiOjQxNSxcInlcIjowLFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE2LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNjEsXCJ4XCI6NDM4LFwieVwiOjAsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM4LFwieFwiOjQ1MixcInlcIjowLFwid2lkdGhcIjozMixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI1LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozNSxcInhcIjowLFwieVwiOjQxLFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozNyxcInhcIjozMCxcInlcIjo0MSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjMsXCJ4XCI6NjYsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjMzLFwieFwiOjkwLFwieVwiOjQxLFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ4LFwieFwiOjEwNCxcInlcIjo0MSxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTcsXCJ4XCI6MTMwLFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1NixcInhcIjoxNTUsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjU1LFwieFwiOjE4MSxcInlcIjo0MSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTQsXCJ4XCI6MjA1LFwieVwiOjQxLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MyxcInhcIjoyMzEsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjUyLFwieFwiOjI1NSxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTEsXCJ4XCI6MjgyLFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1MCxcInhcIjozMDcsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ5LFwieFwiOjMzMixcInlcIjo0MSxcIndpZHRoXCI6MTksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIxLFwieFwiOjM1MSxcInlcIjo0MSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMyxcInhcIjozNzgsXCJ5XCI6NDEsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTIsXCJ4XCI6NDAzLFwieVwiOjQxLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA4LFwieFwiOjQyOCxcInlcIjo0MSxcIndpZHRoXCI6MTcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA3LFwieFwiOjQ0NSxcInlcIjo0MSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA1LFwieFwiOjQ2OSxcInlcIjo0MSxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDQsXCJ4XCI6NDgzLFwieVwiOjQxLFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMDMsXCJ4XCI6MCxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMCxcInhcIjoyNyxcInlcIjo3MyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTgsXCJ4XCI6NTIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjkwLFwieFwiOjc3LFwieVwiOjczLFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4OSxcInhcIjoxMDIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg4LFwieFwiOjEzMCxcInlcIjo3MyxcIndpZHRoXCI6MjksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODcsXCJ4XCI6MTU5LFwieVwiOjczLFwid2lkdGhcIjozOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjMxLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4NixcInhcIjoxOTgsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjg1LFwieFwiOjIyNyxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODQsXCJ4XCI6MjU0LFwieVwiOjczLFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo4MyxcInhcIjoyODIsXCJ5XCI6NzMsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjgyLFwieFwiOjMwNyxcInlcIjo3MyxcIndpZHRoXCI6MjYsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6ODAsXCJ4XCI6MzMzLFwieVwiOjczLFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3OSxcInhcIjozNTksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc4LFwieFwiOjM4NyxcInlcIjo3MyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzcsXCJ4XCI6NDE1LFwieVwiOjczLFwid2lkdGhcIjozNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3NixcInhcIjo0NDksXCJ5XCI6NzMsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjc1LFwieFwiOjQ3MyxcInlcIjo3MyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzQsXCJ4XCI6MCxcInlcIjoxMDUsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjczLFwieFwiOjE4LFwieVwiOjEwNSxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo3MixcInhcIjozMixcInlcIjoxMDUsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjcxLFwieFwiOjU5LFwieVwiOjEwNSxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NzAsXCJ4XCI6ODYsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OSxcInhcIjoxMTAsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2OCxcInhcIjoxMzQsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIxLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NyxcInhcIjoxNjEsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NixcInhcIjoxODcsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNixcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NSxcInhcIjoyMTMsXCJ5XCI6MTA1LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo2NCxcInhcIjoyNDMsXCJ5XCI6MTA1LFwid2lkdGhcIjoyOSxcImhlaWdodFwiOjMxLFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjksXCJ4YWR2YW5jZVwiOjI0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTYsXCJ4XCI6MjcyLFwieVwiOjEwNSxcIndpZHRoXCI6MjIsXCJoZWlnaHRcIjozMCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo4LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NTksXCJ4XCI6Mjk0LFwieVwiOjEwNSxcIndpZHRoXCI6MTQsXCJoZWlnaHRcIjoyOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxNCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTY0LFwieFwiOjMwOCxcInlcIjoxMDUsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEyMixcInhcIjozMzMsXCJ5XCI6MTA1LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTIwLFwieFwiOjM1NyxcInlcIjoxMDUsXCJ3aWR0aFwiOjI2LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTksXCJ4XCI6MzgzLFwieVwiOjEwNSxcIndpZHRoXCI6MzYsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExOCxcInhcIjo0MTksXCJ5XCI6MTA1LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTE3LFwieFwiOjQ0NixcInlcIjoxMDUsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTUsXCJ4XCI6NDcwLFwieVwiOjEwNSxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExNCxcInhcIjowLFwieVwiOjEzNyxcIndpZHRoXCI6MjAsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjExMSxcInhcIjoyMCxcInlcIjoxMzcsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMTAsXCJ4XCI6NDUsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTA5LFwieFwiOjY5LFwieVwiOjEzNyxcIndpZHRoXCI6MzMsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjEwMSxcInhcIjoxMDIsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6OTksXCJ4XCI6MTI3LFwieVwiOjEzNyxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk3LFwieFwiOjE1MCxcInlcIjoxMzcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjYsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNzcsXCJ4XCI6MTc0LFwieVwiOjEzNyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyNSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMSxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3OCxcInhcIjoxOTgsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMSxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjMsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0MyxcInhcIjoyMTksXCJ5XCI6MTM3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjExLFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjIsXCJ4XCI6MjQzLFwieVwiOjEzNyxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjoyNCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjYwLFwieFwiOjI2NixcInlcIjoxMzcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTIsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo1OCxcInhcIjoyODksXCJ5XCI6MTM3LFwid2lkdGhcIjoxNCxcImhlaWdodFwiOjI0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjE0LFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxODcsXCJ4XCI6MzAzLFwieVwiOjEzNyxcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjoyMyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxNCxcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE4NSxcInhcIjozMjYsXCJ5XCI6MTM3LFwid2lkdGhcIjoxNyxcImhlaWdodFwiOjIzLFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjEwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNzksXCJ4XCI6MzQzLFwieVwiOjEzNyxcIndpZHRoXCI6MjAsXCJoZWlnaHRcIjoyMyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxMyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTc0LFwieFwiOjM2MyxcInlcIjoxMzcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MjMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3MSxcInhcIjozODcsXCJ5XCI6MTM3LFwid2lkdGhcIjoyMyxcImhlaWdodFwiOjIzLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjE0LFwieGFkdmFuY2VcIjoxNixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTg2LFwieFwiOjQxMCxcInlcIjoxMzcsXCJ3aWR0aFwiOjIxLFwiaGVpZ2h0XCI6MjEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6OSxcInhhZHZhbmNlXCI6MTQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5OSxcInhcIjo0MzEsXCJ5XCI6MTM3LFwid2lkdGhcIjoyNixcImhlaWdodFwiOjQwLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNTMsXCJ4XCI6NDU3LFwieVwiOjEzNyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxNyxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjIxLFwieFwiOjAsXCJ5XCI6MTc3LFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjE5LFwieFwiOjI4LFwieVwiOjE3NyxcIndpZHRoXCI6MjcsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxOCxcInhcIjo1NSxcInlcIjoxNzcsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjIxLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMTcsXCJ4XCI6ODIsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoyMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjEzLFwieFwiOjEwOSxcInlcIjoxNzcsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMTIsXCJ4XCI6MTM3LFwieVwiOjE3NyxcIndpZHRoXCI6MjgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwNixcInhcIjoxNjUsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi02LFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMDUsXCJ4XCI6MTg5LFwieVwiOjE3NyxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjA0LFwieFwiOjIwNyxcInlcIjoxNzcsXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTYsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwMixcInhcIjoyMjYsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjAxLFwieFwiOjI1MCxcInlcIjoxNzcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMDAsXCJ4XCI6Mjc0LFwieVwiOjE3NyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5NyxcInhcIjoyOTgsXCJ5XCI6MTc3LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjM5LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOi0xLFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTkzLFwieFwiOjMyOCxcInlcIjoxNzcsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzksXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6LTEsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxOTIsXCJ4XCI6MzU4LFwieVwiOjE3NyxcIndpZHRoXCI6MzAsXCJoZWlnaHRcIjozOSxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjotMSxcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI1NSxcInhcIjozODgsXCJ5XCI6MTc3LFwid2lkdGhcIjoyNyxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNTQsXCJ4XCI6NDE1LFwieVwiOjE3NyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozOCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjIwLFwieFwiOjQ0MCxcInlcIjoxNzcsXCJ3aWR0aFwiOjI3LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxNCxcInhcIjo0NjcsXCJ5XCI6MTc3LFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjAsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMTEsXCJ4XCI6MCxcInlcIjoyMTYsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxMCxcInhcIjoyOCxcInlcIjoyMTYsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwOSxcInhcIjo1NixcInlcIjoyMTYsXCJ3aWR0aFwiOjI4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIwNyxcInhcIjo4NCxcInlcIjoyMTYsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6OSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjAzLFwieFwiOjEwMixcInlcIjoyMTYsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5NixcInhcIjoxMjYsXCJ5XCI6MjE2LFwid2lkdGhcIjozMCxcImhlaWdodFwiOjM4LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjAsXCJ4YWR2YW5jZVwiOjIwLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxOTUsXCJ4XCI6MTU2LFwieVwiOjIxNixcIndpZHRoXCI6MzAsXCJoZWlnaHRcIjozOCxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjowLFwieGFkdmFuY2VcIjoyMCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTk0LFwieFwiOjE4NixcInlcIjoyMTYsXCJ3aWR0aFwiOjMwLFwiaGVpZ2h0XCI6MzgsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6MCxcInhhZHZhbmNlXCI6MjAsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIxNixcInhcIjoyMTYsXCJ5XCI6MjE2LFwid2lkdGhcIjoyOCxcImhlaWdodFwiOjM1LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjIyLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNTEsXCJ4XCI6MjQ0LFwieVwiOjIxNixcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjUwLFwieFwiOjI2OCxcInlcIjoyMTYsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzQsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NCxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0OSxcInhcIjoyOTIsXCJ5XCI6MjE2LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzcsXCJ4XCI6MzE2LFwieVwiOjIxNixcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzYsXCJ4XCI6MzM0LFwieVwiOjIxNixcIndpZHRoXCI6MTksXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotNixcInlvZmZzZXRcIjo0LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzEsXCJ4XCI6MzUzLFwieVwiOjIxNixcIndpZHRoXCI6MjMsXCJoZWlnaHRcIjozNCxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyOSxcInhcIjozNzYsXCJ5XCI6MjE2LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjM0LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjQsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNDQsXCJ4XCI6NDAwLFwieVwiOjIxNixcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjQzLFwieFwiOjQyNSxcInlcIjoyMTYsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0MixcInhcIjo0NTAsXCJ5XCI6MjE2LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzgsXCJ4XCI6NDc1LFwieVwiOjIxNixcIndpZHRoXCI6MjIsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotNixcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzQsXCJ4XCI6MCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIzMyxcInhcIjoyNSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIzMixcInhcIjo1MCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNixcInhcIjo3NSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNSxcInhcIjo5OSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzMsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNCxcInhcIjoxMjMsXCJ5XCI6MjU0LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMzLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjUsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMjMsXCJ4XCI6MTQ3LFwieVwiOjI1NCxcIndpZHRoXCI6MzEsXCJoZWlnaHRcIjozMyxcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoyMixcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjUyLFwieFwiOjE3OCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0NixcInhcIjoyMDIsXCJ5XCI6MjU0LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNDUsXCJ4XCI6MjI3LFwieVwiOjI1NCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjQxLFwieFwiOjI1MixcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjI0MCxcInhcIjoyNzYsXCJ5XCI6MjU0LFwid2lkdGhcIjoyNSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzksXCJ4XCI6MzAxLFwieVwiOjI1NCxcIndpZHRoXCI6MTksXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNSxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjo5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMzUsXCJ4XCI6MzIwLFwieVwiOjI1NCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjI4LFwieFwiOjM0NSxcInlcIjoyNTQsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIyNyxcInhcIjozNjksXCJ5XCI6MjU0LFwid2lkdGhcIjoyNCxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyMjIsXCJ4XCI6MzkzLFwieVwiOjI1NCxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjA4LFwieFwiOjQxOCxcInlcIjoyNTQsXCJ3aWR0aFwiOjI5LFwiaGVpZ2h0XCI6MzIsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MjIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5OCxcInhcIjo0NDcsXCJ5XCI6MjU0LFwid2lkdGhcIjozOSxcImhlaWdodFwiOjMyLFwieG9mZnNldFwiOi01LFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjI5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxOTEsXCJ4XCI6NDg2LFwieVwiOjI1NCxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMixcInhhZHZhbmNlXCI6MTYsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE5MCxcInhcIjowLFwieVwiOjI4NyxcIndpZHRoXCI6MzgsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjozMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTg5LFwieFwiOjM4LFwieVwiOjI4NyxcIndpZHRoXCI6MzcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyOSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTg4LFwieFwiOjc1LFwieVwiOjI4NyxcIndpZHRoXCI6MzcsXCJoZWlnaHRcIjozMixcInhvZmZzZXRcIjotNCxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjQ4LFwieFwiOjExMixcInlcIjoyODcsXCJ3aWR0aFwiOjI1LFwiaGVpZ2h0XCI6MzEsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTAsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoyNDcsXCJ4XCI6MTM3LFwieVwiOjI4NyxcIndpZHRoXCI6MjUsXCJoZWlnaHRcIjoyNixcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjoxMCxcInhhZHZhbmNlXCI6MTgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjIzMCxcInhcIjoxNjIsXCJ5XCI6Mjg3LFwid2lkdGhcIjozNSxcImhlaWdodFwiOjI2LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjEyLFwieGFkdmFuY2VcIjoyOCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MjE1LFwieFwiOjE5NyxcInlcIjoyODcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MjIsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MTMsXCJ4YWR2YW5jZVwiOjE2LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxNzAsXCJ4XCI6MjIwLFwieVwiOjI4NyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo4LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NDIsXCJ4XCI6MjQxLFwieVwiOjI4NyxcIndpZHRoXCI6MjEsXCJoZWlnaHRcIjoyMSxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo2LFwieGFkdmFuY2VcIjoxNCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6NjEsXCJ4XCI6MjYyLFwieVwiOjI4NyxcIndpZHRoXCI6MjQsXCJoZWlnaHRcIjoyMCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxMyxcInhhZHZhbmNlXCI6MTksXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk0LFwieFwiOjI4NixcInlcIjoyODcsXCJ3aWR0aFwiOjIzLFwiaGVpZ2h0XCI6MTksXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6OCxcInhhZHZhbmNlXCI6MTQsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjQ0LFwieFwiOjMwOSxcInlcIjoyODcsXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MTksXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MjQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3NixcInhcIjozMjMsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxOCxcImhlaWdodFwiOjE4LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjcsXCJ4YWR2YW5jZVwiOjExLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxODAsXCJ4XCI6MzQxLFwieVwiOjI4NyxcIndpZHRoXCI6MTgsXCJoZWlnaHRcIjoxNyxcInhvZmZzZXRcIjotMyxcInlvZmZzZXRcIjo1LFwieGFkdmFuY2VcIjoxMSxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTcyLFwieFwiOjM1OSxcInlcIjoyODcsXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTcsXCJ4YWR2YW5jZVwiOjE5LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjozOSxcInhcIjozODMsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxMyxcImhlaWdodFwiOjE3LFwieG9mZnNldFwiOi0zLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjcsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjk2LFwieFwiOjM5NixcInlcIjoyODcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTQsXCJ5b2Zmc2V0XCI6NSxcInhhZHZhbmNlXCI6MTEsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjM0LFwieFwiOjQxNCxcInlcIjoyODcsXCJ3aWR0aFwiOjE4LFwiaGVpZ2h0XCI6MTcsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTIsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE4NCxcInhcIjo0MzIsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxNixcImhlaWdodFwiOjE2LFwieG9mZnNldFwiOi00LFwieW9mZnNldFwiOjMwLFwieGFkdmFuY2VcIjo4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxODMsXCJ4XCI6NDQ4LFwieVwiOjI4NyxcIndpZHRoXCI6MTMsXCJoZWlnaHRcIjoxNCxcInhvZmZzZXRcIjotMixcInlvZmZzZXRcIjoxOCxcInhhZHZhbmNlXCI6OCxcInBhZ2VcIjowLFwiY2hubFwiOjB9LHtcImlkXCI6MTc1LFwieFwiOjQ2MSxcInlcIjoyODcsXCJ3aWR0aFwiOjIwLFwiaGVpZ2h0XCI6MTQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6NixcInhhZHZhbmNlXCI6MTMsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE2OCxcInhcIjo0ODEsXCJ5XCI6Mjg3LFwid2lkdGhcIjoxOSxcImhlaWdodFwiOjE0LFwieG9mZnNldFwiOi0yLFwieW9mZnNldFwiOjYsXCJ4YWR2YW5jZVwiOjEzLFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjoxMjYsXCJ4XCI6MCxcInlcIjozMTksXCJ3aWR0aFwiOjIyLFwiaGVpZ2h0XCI6MTQsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTcsXCJ4YWR2YW5jZVwiOjE3LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NixcInhcIjoyMixcInlcIjozMTksXCJ3aWR0aFwiOjE0LFwiaGVpZ2h0XCI6MTQsXCJ4b2Zmc2V0XCI6LTMsXCJ5b2Zmc2V0XCI6MjQsXCJ4YWR2YW5jZVwiOjgsXCJwYWdlXCI6MCxcImNobmxcIjowfSx7XCJpZFwiOjE3MyxcInhcIjozNixcInlcIjozMTksXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo5NSxcInhcIjo1NSxcInlcIjozMTksXCJ3aWR0aFwiOjI0LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MjgsXCJ4YWR2YW5jZVwiOjE4LFwicGFnZVwiOjAsXCJjaG5sXCI6MH0se1wiaWRcIjo0NSxcInhcIjo3OSxcInlcIjozMTksXCJ3aWR0aFwiOjE5LFwiaGVpZ2h0XCI6MTMsXCJ4b2Zmc2V0XCI6LTIsXCJ5b2Zmc2V0XCI6MTgsXCJ4YWR2YW5jZVwiOjE0LFwicGFnZVwiOjAsXCJjaG5sXCI6MH1dLFwia2VybmluZ3NcIjpbXSxcImluZm9cIjp7XCJmYWNlXCI6XCJFeG8gMiBTZW1pIEJvbGRcIixcInNpemVcIjozMixcImJvbGRcIjowLFwiaXRhbGljXCI6MCxcImNoYXJzZXRcIjpcIlwiLFwidW5pY29kZVwiOjAsXCJzdHJldGNoSFwiOjEwMCxcInNtb290aFwiOjEsXCJhYVwiOjEsXCJwYWRkaW5nXCI6WzQsNCw0LDRdLFwic3BhY2luZ1wiOlstOCwtOF19LFwiY29tbW9uXCI6e1wibGluZUhlaWdodFwiOjQwLFwiYmFzZVwiOjMzLFwic2NhbGVXXCI6NTEyLFwic2NhbGVIXCI6NTEyLFwicGFnZXNcIjoxLFwicGFja2VkXCI6MH19IiwicmVxdWlyZSgncmFmLmpzJylcblxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBSZW5kZXJlciA9IHJlcXVpcmUoJy4vbGliL3JlbmRlcmVyJylcbnZhciBjcmVhdGVGb250ID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWZvbnQnKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdCkge1xuICAgIG9wdCA9IG9wdHx8e31cbiAgICB2YXIgYXBwID0gcmVxdWlyZSgnY2FudmFzLWFwcCcpKHJlbmRlciwgeHRlbmQoe1xuICAgICAgICBjb250ZXh0OiAnd2ViZ2wnLFxuICAgICAgICBjb250ZXh0QXR0cmlidXRlczogeyBhbnRpYWxpYXM6IGZhbHNlLCBhbHBoYTogZmFsc2UgfSxcbiAgICAgICAgcmV0aW5hOiB0cnVlLFxuICAgICAgICBvblJlc2l6ZTogaGFuZGxlUmVzaXplXG4gICAgfSwgb3B0KSlcblxuICAgIFxuICAgIHZhciByZW5kZXJlclxuXG4gICAgYXBwLmxvYWQgPSBmdW5jdGlvbihjYikge1xuICAgICAgICBjYiA9IGNiIHx8IGZ1bmN0aW9uKCkge31cbiAgICAgICAgdmFyIGdsID0gYXBwLmNvbnRleHRcbiAgICAgICAgY3JlYXRlRm9udChnbCwgZnVuY3Rpb24oZXJyLCBmb250KSB7XG4gICAgICAgICAgICByZW5kZXJlciA9IFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBnbDogZ2wsIFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhcHAud2lkdGgsIFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXBwLmhlaWdodCxcbiAgICAgICAgICAgICAgICBmb250OiBmb250XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY2IoZXJyKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBhcHBcblxuICAgIGZ1bmN0aW9uIHJlbmRlcihnbCwgd2lkdGgsIGhlaWdodCwgZHQpIHtcbiAgICAgICAgaWYgKHJlbmRlcmVyKVxuICAgICAgICAgICAgcmVuZGVyZXIuZHJhdyhkdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICBpZiAocmVuZGVyZXIpXG4gICAgICAgICAgICByZW5kZXJlci5yZXNpemUod2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cFNtb290aFRleChnbCwgdCkge1xuICAgICAgICB0Lm1pbkZpbHRlciA9IGdsLkxJTkVBUl9NSVBNQVBfTElORUFSXG4gICAgICAgIHQubWFnRmlsdGVyID0gZ2wuTElORUFSXG5cbiAgICAgICAgdmFyIGV4dCA9IChnbC5nZXRFeHRlbnNpb24oJ0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpYycpIFxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgZ2wuZ2V0RXh0ZW5zaW9uKFwiTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiKSk7XG4gICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgIHZhciBtYXhBbmlzdHJvcGh5ID0gZ2wuZ2V0UGFyYW1ldGVyKGV4dC5NQVhfVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQpO1xuICAgICAgICAgICAgZ2wudGV4UGFyYW1ldGVyZihnbC5URVhUVVJFXzJELCBleHQuVEVYVFVSRV9NQVhfQU5JU09UUk9QWV9FWFQsIE1hdGgubWluKDE2LCBtYXhBbmlzdHJvcGh5KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0LmdlbmVyYXRlTWlwbWFwKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cE5lYXJlc3RUZXgoZ2wsIHQpIHtcbiAgICAgICAgdC5taW5GaWx0ZXIgPSB0Lm1hZ0ZpbHRlciA9IGdsLk5FQVJFU1RcbiAgICB9XG59IiwidmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBtaXhlcyA9IHJlcXVpcmUoJ21peGVzJylcbnZhciBCYXNlID0gVEhSRUUuU2NlbmVcblxudmFyIFlPRkYgPSAyLjVcblxuZnVuY3Rpb24gUmlnU2NlbmUob3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJpZ1NjZW5lKSlcbiAgICAgICAgcmV0dXJuIG5ldyBSaWdTY2VuZShvcHQpXG4gICAgQmFzZS5jYWxsKHRoaXMpXG4gICAgdGhpcy5mb2cgPSBuZXcgVEhSRUUuRm9nRXhwMiggMHgwYjA1MTYsIDAuMDAwMTUgKTtcblxuXG4gICAgLy8gdmFyIGJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgIC8vICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMjAsIDIwLCAxMCksXG4gICAgLy8gICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGFhYWFhYSwgd2lyZWZyYW1lOiBmYWxzZSB9KVxuICAgIC8vIClcblxuICAgIC8vIHRoaXMuYWRkKGJveClcblxuXG4gICAgdGhpcy50aW1lID0gMFxuICAgIHRoaXMuY3ViZU1hcCA9IG51bGxcbiAgICB0aGlzLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuT0JKTVRMTG9hZGVyKClcbiAgICBsb2FkZXIubG9hZCgnbW9kZWwvUHJpcmF6bG9tbmF5YVVud3JhcHBlZEZpbmFsLm9iaicsICdtb2RlbC9QcmlyYXpsb21uYXlhVW53cmFwcGVkRmluYWwubXRsJywgZnVuY3Rpb24ob2JqZWN0LCBtYXRlcmlhbHMpIHtcbiAgICAgICAgdmFyIHMgPSAwLjMyNVxuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QsIG1hdGVyaWFscylcbiAgICAgICAgb2JqZWN0LnNjYWxlLnNldChzLHMscylcbiAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnkgLT0gWU9GRlxuICAgICAgICB0aGlzLm1lc2ggPSBvYmplY3RcblxuICAgICAgICB0aGlzLm1lc2gudHJhdmVyc2UoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgVEhSRUUuTWVzaCkge1xuICAgICAgICAgICAgICAgIG9iai5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIG9iai5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuICAgICAgICAgICAgICAgIG9iai5tYXRlcmlhbC5zaGluaW5lc3MgPSAxXG4gICAgICAgICAgICAgICAgb2JqLm1hdGVyaWFsLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKCdyZ2IoMTMwLDEzMCwxMzApJylcbiAgICAgICAgICAgICAgICBpZiAob2JqLm1hdGVyaWFsLm1hcCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iai5tYXRlcmlhbC51bmlmb3JtcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZChvYmplY3QpXG4gICAgfS5iaW5kKHRoaXMpKVxuICAgIFxuXG4gICAgLy8gdmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KCAxMCwgMywgMTAwLCAxNiApO1xuICAgIC8vIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHhmZmZmMDAgfSApO1xuICAgIC8vIHZhciB0b3J1c0tub3QgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgLy8gdGhpcy5hZGQoIHRvcnVzS25vdCApO1xuICAgIC8vIHRvcnVzS25vdC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgIC8vIHRvcnVzS25vdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZVxuXG4gICAgdGhpcy5saWdodHMgPSBbXG4gICAgICAgIFsgbmV3IFRIUkVFLlZlY3RvcjMoLTEwLCAyMCwgLTIwKSwgMSBdLFxuICAgICAgICBbIG5ldyBUSFJFRS5WZWN0b3IzKDE1LCAxMCwgMTUpLCAwLjUgXVxuICAgIF0ubWFwKGZ1bmN0aW9uKGFyZ3MsIGkpIHtcbiAgICAgICAgdmFyIGxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZGRmNGZkLCBhcmdzWzFdIClcbiAgICAgICAgbGlnaHQucG9zaXRpb24uY29weShhcmdzWzBdKVxuICAgICAgICBsaWdodC5jYXN0U2hhZG93ID0gdHJ1ZVxuICAgICAgICBsaWdodC5zaGFkb3dNYXBXaWR0aCA9IDEwMjRcbiAgICAgICAgbGlnaHQuc2hhZG93TWFwSGVpZ2h0ID0gMTAyNFxuICAgICAgICBsaWdodC5zaGFkb3dDYW1lcmFOZWFyID0gMVxuICAgICAgICBsaWdodC5zaGFkb3dDYW1lcmFGYXIgPSAxMDBcblxuICAgICAgICAvLyBsaWdodC5oZWxwZXIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodEhlbHBlcihsaWdodCwgNClcbiAgICAgICAgLy8gdGhpcy5hZGQobGlnaHQuaGVscGVyKVxuICAgICAgICB0aGlzLmFkZChsaWdodClcbiAgICAgICAgcmV0dXJuIGxpZ2h0XG4gICAgfSx0aGlzKVxufVxuXG5pbmhlcml0cyhSaWdTY2VuZSwgQmFzZSlcblxubWl4ZXMoUmlnU2NlbmUsIHtcblxuICAgIHVwZGF0ZU1hdGVyaWFsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGNvbG9yOiAweGFhYWFhYSxcbiAgICAgICAgICAgIHJlZmxlY3Rpdml0eTogMC40LFxuICAgICAgICAgICAgZW52TWFwOiB0aGlzLmN1YmVNYXBcbiAgICAgICAgfSlcblxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uKGR0KSB7XG4gICAgICAgIHRoaXMudGltZSArPSBNYXRoLm1pbihkdCwgMzApLzEwMDBcbiAgICAgICAgdmFyIG0gPSB0aGlzLm1lc2hcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIHZhciBhbmltID0gTWF0aC5zaW4odGhpcy50aW1lKVxuXG4gICAgICAgIC8vIHRoaXMubGlnaHRzLmZvckVhY2goZnVuY3Rpb24obGlnaHQpIHsgbGlnaHQuaGVscGVyLnVwZGF0ZSgpIH0pXG4gICAgICAgIC8vIG0ucG9zaXRpb24ueSA9IFlPRkYgKyBhbmltKjAuMlxuICAgICAgICAvLyBtLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnRpbWUqMC4xKSowLjA1XG4gICAgICAgIC8vIG0ucG9zaXRpb24ueiA9IE1hdGguc2luKHRoaXMudGltZSowLjIpKjAuMVxuICAgICAgICAvLyBtLnJvdGF0aW9uLnggPSBhbmltKjAuMDNcbiAgICAgICAgLy8gbS5yb3RhdGlvbi55ID0gTWF0aC5zaW4odGhpcy50aW1lKk1hdGguY29zKHRoaXMudGltZSowLjEpKSowLjAwNVxuICAgIH1cbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmlnU2NlbmUiLCJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKTtcbnZhciBFZmZlY3RDb21wb3NlciA9IHJlcXVpcmUoXCJ0aHJlZS1lZmZlY3Rjb21wb3NlclwiKShUSFJFRSk7XG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKFwiaW5oZXJpdHNcIik7XG52YXIgQmFzZSA9IEVmZmVjdENvbXBvc2VyLlJlbmRlclBhc3M7XG52YXIgcGx1Y2tlciA9IHJlcXVpcmUoXCJwbHVja2VyXCIpO1xudmFyIG51bWJlciA9IHJlcXVpcmUoXCJhcy1udW1iZXJcIik7XG52YXIgVGV4dEVsZW1lbnQgPSByZXF1aXJlKFwidGhyZWUtc2RmLXRleHRcIikoVEhSRUUpO1xudmFyIHh0ZW5kID0gcmVxdWlyZShcInh0ZW5kXCIpO1xudmFyIFVOSVRfU0NBTEUgPSAwLjE7XG52YXIgU0NBTEUgPSBbVU5JVF9TQ0FMRSwgVU5JVF9TQ0FMRSwgVU5JVF9TQ0FMRV07XG5cbnZhciBtYXQ0ID0ge1xuICAgIHNjYWxlOiByZXF1aXJlKFwiZ2wtbWF0NC9zY2FsZVwiKSxcbiAgICBpZGVudGl0eTogcmVxdWlyZShcImdsLW1hdDQvaWRlbnRpdHlcIiksXG4gICAgbXVsdGlwbHk6IHJlcXVpcmUoXCJnbC1tYXQ0L211bHRpcGx5XCIpLFxuICAgIHRyYW5zbGF0ZTogcmVxdWlyZShcImdsLW1hdDQvdHJhbnNsYXRlXCIpXG59O1xuXG52YXIgc2V0VmVjMyA9IHJlcXVpcmUoXCJnbC12ZWMzL3NldFwiKTtcbnZhciB0bXBWZWMzID0gWzAsIDAsIDBdO1xudmFyIHBsdWNrUGFuZWxzID0gcGx1Y2tlcihcInBhbmVsc1wiKTtcbnZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgY3JlYXRlU0RGU2hhZGVyID0gcmVxdWlyZShcImdsc2xpZnkvYWRhcHRlci5qc1wiKShcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzQgY29sb3I7XFxuYXR0cmlidXRlIHZlYzIgdGV4Y29vcmQwO1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcbnVuaWZvcm0gbWF0NCB2aWV3O1xcbnVuaWZvcm0gbWF0NCBtb2RlbDtcXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG52YXJ5aW5nIGZsb2F0IGFuaW1PZmZzZXQ7XFxudm9pZCBtYWluKCkge1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIG1vZGVsICogcG9zaXRpb247XFxuICB2X2NvbCA9IGNvbG9yO1xcbiAgdl90ZXgwID0gdGV4Y29vcmQwO1xcbiAgZ2xfUG9pbnRTaXplID0gMS4wO1xcbiAgYW5pbU9mZnNldCA9IHBvc2l0aW9uLnggLyAxMDAuMDtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4jaWZkZWYgR0xfRVNcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG52YXJ5aW5nIGZsb2F0IGFuaW1PZmZzZXQ7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTA7XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTE7XFxudW5pZm9ybSBmbG9hdCBzbW9vdGhpbmc7XFxudW5pZm9ybSBmbG9hdCBmYWRlO1xcbmNvbnN0IHZlYzIgc2hhZG93T2Zmc2V0ID0gdmVjMigtMS4wIC8gNTEyLjApO1xcbmNvbnN0IHZlYzQgZ2xvd0NvbG9yID0gdmVjNCh2ZWMzKDAuMSksIDEuMCk7XFxuY29uc3QgZmxvYXQgZ2xvd01pbiA9IDAuNDtcXG5jb25zdCBmbG9hdCBnbG93TWF4ID0gMC44O1xcbnZvaWQgbWFpbigpIHtcXG4gIGZsb2F0IGFuaW0gPSBmYWRlICogYW5pbU9mZnNldDtcXG4gIGFuaW0gPSBjbGFtcChtaXgoYW5pbSwgMS4wLCBmYWRlICogZmFkZSksIDAuMCwgMS4wKTtcXG4gIHZlYzQgc21vb3RoQ29sb3IgPSB2ZWM0KDAuMCk7XFxuICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUwLCB2X3RleDApO1xcbiAgZmxvYXQgZHN0ID0gdGV4Q29sb3IuYTtcXG4gIGZsb2F0IHNtb290aEFtdCA9IG1peCgxLjUsIHNtb290aGluZywgYW5pbSk7XFxuICBmbG9hdCBhbHBoYSA9IHNtb290aHN0ZXAoMC41IC0gc21vb3RoQW10LCAwLjUgKyBzbW9vdGhBbXQsIGRzdCk7XFxuICB2ZWM0IGJhc2UgPSB2X2NvbCAqIHZlYzQoYWxwaGEpO1xcbiAgZmxvYXQgZ2xvd0RzdCA9IHRleHR1cmUyRCh0ZXh0dXJlMCwgdl90ZXgwICsgc2hhZG93T2Zmc2V0KS5hO1xcbiAgdmVjNCBnbG93ID0gZ2xvd0NvbG9yICogc21vb3Roc3RlcChnbG93TWluLCBnbG93TWF4LCBnbG93RHN0KTtcXG4gIGZsb2F0IG1hc2sgPSAxLjAgLSBhbHBoYTtcXG4gIGdsX0ZyYWdDb2xvciA9IG1peCh2ZWM0KDAuMCksIGJhc2UsIGFuaW0pO1xcbiAgaWYoZ2xfRnJhZ0NvbG9yLmEgPCAwLjEpXFxuICAgIGRpc2NhcmQ7XFxuICBcXG59XCIsIFt7XCJuYW1lXCI6XCJwcm9qZWN0aW9uXCIsXCJ0eXBlXCI6XCJtYXQ0XCJ9LHtcIm5hbWVcIjpcInZpZXdcIixcInR5cGVcIjpcIm1hdDRcIn0se1wibmFtZVwiOlwibW9kZWxcIixcInR5cGVcIjpcIm1hdDRcIn0se1wibmFtZVwiOlwidGV4dHVyZTBcIixcInR5cGVcIjpcInNhbXBsZXIyRFwifSx7XCJuYW1lXCI6XCJ0ZXh0dXJlMVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInNtb290aGluZ1wiLFwidHlwZVwiOlwiZmxvYXRcIn0se1wibmFtZVwiOlwiZmFkZVwiLFwidHlwZVwiOlwiZmxvYXRcIn1dLCBbe1wibmFtZVwiOlwicG9zaXRpb25cIixcInR5cGVcIjpcInZlYzRcIn0se1wibmFtZVwiOlwiY29sb3JcIixcInR5cGVcIjpcInZlYzRcIn0se1wibmFtZVwiOlwidGV4Y29vcmQwXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9XSk7XG52YXIgc2RmU2hhZGVyO1xuXG5mdW5jdGlvbiBUZXh0UGFzcyhvcHQpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dFBhc3MpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRQYXNzKG9wdCk7XG5cbiAgICBvcHQgPSBvcHQgfHwge307XG4gICAgdmFyIHJlbmRlcmVyID0gb3B0LnJlbmRlcmVyO1xuICAgIHZhciBjYW1lcmEgPSBvcHQuY2FtZXJhO1xuICAgIHZhciBzY2VuZSA9IG9wdC5zY2VuZTtcbiAgICBCYXNlLmNhbGwodGhpcywgc2NlbmUsIGNhbWVyYSk7XG4gICAgdmFyIGZvbnQgPSBvcHQuZm9udDtcblxuICAgIGlmICghc2RmU2hhZGVyKVxuICAgICAgICBzZGZTaGFkZXIgPSBjcmVhdGVTREZTaGFkZXIocmVuZGVyZXIuZ2V0Q29udGV4dCgpKTtcblxuICAgIHRoaXMuZ3JvdXBzID0gKG9wdC5ncm91cHMgfHwgW10pLm1hcChjcmVhdGVHcm91cHMocmVuZGVyZXIsIGZvbnQpKTtcbiAgICB3aW5kb3cuZ3JvdXBzID0gdGhpcy5ncm91cHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwcyhyZW5kZXJlciwgZm9udCkge1xuICAgIHJldHVybiBmdW5jdGlvbihncm91cCwgZ3JvdXBJbmRleCkge1xuICAgICAgICBncm91cC5lbGVtZW50cyA9IGdyb3VwLnBhbmVscy5tYXAoZnVuY3Rpb24ocGFuZWwsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgc2lkZSA9IChpbmRleCA9PT0gMCA/IDEgOiAtMSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYW5lbC5sYWJlbHMubWFwKGZ1bmN0aW9uKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobGFiZWwsIHNpZGUsIHJlbmRlcmVyLCBmb250KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgYikge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYuY29uY2F0KGIpO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICAgICAgZ3JvdXAuX29wYWNpdHkgPSAxO1xuICAgICAgICBncm91cC5mYWRlID0gMTtcbiAgICAgICAgZ3JvdXAuc2hvd2luZyA9IHRydWU7XG4gICAgICAgIGdyb3VwLmFuaW1hdGluZ091dCA9IGZhbHNlO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShncm91cCwgXCJvcGFjaXR5XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdyb3VwLl9vcGFjaXR5O1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICBncm91cC5fb3BhY2l0eSA9IHZhbDtcblxuICAgICAgICAgICAgICAgIGdyb3VwLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnRleHQub3BhY2l0eSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdyb3VwLnBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcC5jb250YWluZXIudmlzaWJsZSA9IHZhbCA+IDAuMDE7XG5cbiAgICAgICAgICAgICAgICAgICAgcC5zaGFwZXMuZm9yRWFjaChmdW5jdGlvbihzaGFwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGUubWF0ZXJpYWwub3BhY2l0eSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlLnZpc2libGUgPSB2YWwgPiAwLjAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobGFiZWwsIHNpZGUsIHJlbmRlcmVyLCBmb250KSB7XG4gICAgdmFyIHRleHRPcHQgPSB4dGVuZChsYWJlbCwge1xuICAgICAgICBmb250OiBmb250LFxuICAgICAgICB0ZXh0dXJlczogZm9udC50ZXh0dXJlcyxcbiAgICAgICAgc2hhZGVyOiBzZGZTaGFkZXJcbiAgICB9KTtcblxuICAgIHZhciB0ZXh0RWwgPSBUZXh0RWxlbWVudChyZW5kZXJlciwgdGV4dE9wdCk7XG5cbiAgICByZXR1cm4geHRlbmQobGFiZWwsIHtcbiAgICAgICAgdGV4dDogdGV4dEVsLFxuICAgICAgICBzaWRlOiBzaWRlXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckVsZW1lbnQoY2FtZXJhLCBlLCBmYWRlKSB7XG4gICAgZS5vYmplY3QzZC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcbiAgICB2YXIgdHJhbnNmb3JtID0gZS50ZXh0LnRyYW5zZm9ybTtcbiAgICBtYXQ0LmlkZW50aXR5KHRyYW5zZm9ybSk7XG4gICAgbWF0NC5zY2FsZSh0cmFuc2Zvcm0sIHRyYW5zZm9ybSwgU0NBTEUpO1xuICAgIHNldFZlYzModG1wVmVjMywgZS50cmFuc2xhdGlvblswXSwgZS50cmFuc2xhdGlvblsxXSwgZS50cmFuc2xhdGlvblsyXSk7XG4gICAgbWF0NC50cmFuc2xhdGUodHJhbnNmb3JtLCB0cmFuc2Zvcm0sIHRtcFZlYzMpO1xuICAgIHNldFZlYzModG1wVmVjMywgZS5zaXplLCBlLnNpemUsIGUuc2l6ZSk7XG4gICAgbWF0NC5zY2FsZSh0cmFuc2Zvcm0sIHRyYW5zZm9ybSwgdG1wVmVjMyk7XG4gICAgZS50ZXh0LnNoYWRlci5iaW5kKCk7XG4gICAgZS50ZXh0LnNoYWRlci51bmlmb3Jtcy5mYWRlID0gZmFkZTtcbiAgICBlLnRleHQuZHJhdyhjYW1lcmEsIGUub2JqZWN0M2QpO1xufVxuXG5pbmhlcml0cyhUZXh0UGFzcywgQmFzZSk7XG5cblRleHRQYXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbihyZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhKSB7XG4gICAgQmFzZS5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcywgcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSk7XG4gICAgdmFyIGNhbWVyYSA9IHRoaXMuY2FtZXJhO1xuXG4gICAgdGhpcy5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihnKSB7XG4gICAgICAgIGcuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoIWcuc2hvd2luZylcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHJlbmRlckVsZW1lbnQoY2FtZXJhLCBlLCBnLmZhZGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlbmRlcmVyLnJlc2V0R0xTdGF0ZSgpO1xuICAgIHJlbmRlcmVyLnJlc2V0QXR0cmlidXRlcygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0UGFzczsiLCJ2YXIgVHdlZW5NYXggPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5Ud2Vlbk1heCA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVHdlZW5NYXggOiBudWxsKVxudmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxudmFyIHNtb290aHN0ZXAgPSByZXF1aXJlKCdzbW9vdGhzdGVwJylcblxudmFyIGxhc3RJbmRleCA9IC0xXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udHJvbGxlciwgbGFiZWxzKSB7XG4gICAgdmFyIGNsb3NlSW5kZXggPSBjbG9zZXN0KGNvbnRyb2xsZXIsIGxhYmVscylcblxuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRyb2xsZXIudGhldGEpXG4gICAgbGFiZWxzLmZvckVhY2goZnVuY3Rpb24obGFiZWwsIGkpIHtcbiAgICAgICAgLy8gc2V0U2hvd2luZyhsYWJlbCwgdHJ1ZSlcbiAgICAgICAgdmFyIHZpc2libGUgPSBpPT09Y2xvc2VJbmRleFxuICAgICAgICBpZiAodmlzaWJsZSAmJiAhbGFiZWwuc2hvd2luZykge1xuICAgICAgICAgICAgYW5pbWF0ZUluRmVhdHVyZShsYWJlbClcbiAgICAgICAgfSBlbHNlIGlmICghdmlzaWJsZSAmJiBsYWJlbC5zaG93aW5nKSB7XG4gICAgICAgICAgICBhbmltYXRlT3V0RmVhdHVyZShsYWJlbClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzLmhpZGVBbGwgPSBmdW5jdGlvbihmZWF0dXJlcykge1xuICAgIGZlYXR1cmVzLmZvckVhY2goZnVuY3Rpb24oZikge1xuICAgICAgICBzZXRTaG93aW5nKGYsIGZhbHNlKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3RhbmNlKGNvbnRyb2xsZXIsIGxhYmVsKSB7XG4gICAgLy9zaWduZWQgZGlzdGFuY2VcbiAgICB2YXIgeCA9IC1sYWJlbC50aGV0YSwgXG4gICAgICAgIHkgPSBjb250cm9sbGVyLnRoZXRhXG5cbiAgICB2YXIgYWJkaXN0ID0gTWF0aC5hYnMoeCAtIHkpXG4gICAgcmV0dXJuIE1hdGgubWluKCgyICogTWF0aC5QSSkgLSBhYmRpc3QsIGFiZGlzdClcblxufVxuXG5mdW5jdGlvbiBjbG9zZXN0KGNvbnRyb2xsZXIsIGxhYmVscykge1xuICAgIHZhciBtaW5EaXN0ID0gTnVtYmVyLk1BWF9WQUxVRVxuICAgIHZhciByZXQgPSAtMVxuICAgIGxhYmVscy5mb3JFYWNoKGZ1bmN0aW9uKGxhYmVsLCBpbmRleCkge1xuICAgICAgICB2YXIgZGlzdCA9IGRpc3RhbmNlKGNvbnRyb2xsZXIsIGxhYmVsKVxuICAgICAgICBcbiAgICAgICAgaWYgKGRpc3QgPCBtaW5EaXN0KSB7XG4gICAgICAgICAgICBtaW5EaXN0ID0gZGlzdFxuICAgICAgICAgICAgcmV0ID0gaW5kZXhcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBzZXRTaG93aW5nKGZlYXR1cmUsIHNob3dpbmcpIHtcbiAgICBmZWF0dXJlLnNob3dpbmcgPSBzaG93aW5nXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVJbkZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGZlYXR1cmUuc2hvd2luZyA9IHRydWVcbiAgICBmZWF0dXJlLmZhZGUgPSAwXG4gICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKGZlYXR1cmUpXG4gICAgVHdlZW5NYXgudG8oZmVhdHVyZSwgMC41LCB7XG4gICAgICAgIGZhZGU6IDEuMCxcbiAgICAgICAgZWFzZTogXCJlYXNlT3V0UXVhZFwiXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZU91dEZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGlmIChmZWF0dXJlLmFuaW1hdGluZ091dClcbiAgICAgICAgcmV0dXJuXG5cbiAgICBmZWF0dXJlLmFuaW1hdGluZ091dCA9IHRydWVcbiAgICBUd2Vlbk1heC50byhmZWF0dXJlLCAwLjUsIHtcbiAgICAgICAgZmFkZTogMCxcbiAgICAgICAgZWFzZTogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgb25Db21wbGV0ZTogaGlkZUZlYXR1cmUuYmluZChudWxsLCBmZWF0dXJlKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGhpZGVGZWF0dXJlKGZlYXR1cmUpIHtcbiAgICBmZWF0dXJlLmFuaW1hdGluZ091dCA9IGZhbHNlXG4gICAgZmVhdHVyZS5zaG93aW5nID0gZmFsc2Vcbn0iLCJ2YXIgRm9udCA9IHJlcXVpcmUoJy4uL2ZvbnRzL0V4bzJTZW1pQm9sZC5qc29uJylcbnZhciBmb250SW1hZ2UgPSAnZm9udHMvRXhvMlNlbWlCb2xkLnBuZydcbnZhciBpbWcgPSByZXF1aXJlKCdpbWcnKVxudmFyIGNyZWF0ZVRleHR1cmUgPSByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGdsLCBjYikge1xuICAgIGltZyhmb250SW1hZ2UsIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNiKGVycilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgRm9udC50ZXh0dXJlcyA9IFtyZXNdLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IGNyZWF0ZVRleHR1cmUoZ2wsIGkpXG5cbiAgICAgICAgICAgIHQubWluRmlsdGVyID0gZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgICAgICAgICAgIHQubWFnRmlsdGVyID0gZ2wuTElORUFSXG5cbiAgICAgICAgICAgIHZhciBleHQgPSAoZ2wuZ2V0RXh0ZW5zaW9uKCdFWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWMnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBnbC5nZXRFeHRlbnNpb24oXCJNT1pfRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCIpKTtcbiAgICAgICAgICAgIGlmIChleHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4QW5pc3Ryb3BoeSA9IGdsLmdldFBhcmFtZXRlcihleHQuTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhUKTtcbiAgICAgICAgICAgICAgICBnbC50ZXhQYXJhbWV0ZXJmKGdsLlRFWFRVUkVfMkQsIGV4dC5URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgTWF0aC5taW4oMTYsIG1heEFuaXN0cm9waHkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5nZW5lcmF0ZU1pcG1hcCgpXG4gICAgICAgICAgICByZXR1cm4gdFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgY2IobnVsbCwgRm9udClcbiAgICB9KVxufSIsInZhciBUZXh0UGFzcyA9IHJlcXVpcmUoJy4vVGV4dFBhc3MnKVxudmFyIFRIUkVFID0gKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cuVEhSRUUgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsLlRIUkVFIDogbnVsbClcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbi8vIHZhciBnZXRTVkcgPSByZXF1aXJlKCcuL2dldC1zdmcnKVxuLy8gdmFyIGdldFBvbHkgPSByZXF1aXJlKCcuL2dldC1wb2x5Z29uJylcbnZhciBDb21wbGV4ID0gcmVxdWlyZSgndGhyZWUtc2ltcGxpY2lhbC1jb21wbGV4JykoVEhSRUUpXG52YXIgbW9iaWxlID0gcmVxdWlyZSgnLi9pcy1tb2JpbGUnKVxuXG52YXIgVU5JVF9TQ0FMRSA9IDAuMVxuXG52YXIgZGF0YSA9IHJlcXVpcmUoJy4vdGV4dC1kYXRhJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHQpIHtcbiAgICB2YXIgZ3JvdXBzID0gY3JlYXRlR3JvdXBzKClcbiAgICBcbiAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgICAvLyB2YXIgbGVuID0gMTAwXG4gICAgICAgIC8vIHZhciBkaXIgPSBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLmNvcyhncm91cC50aGV0YSksIDAsIE1hdGguc2luKGdyb3VwLnRoZXRhKSlcbiAgICAgICAgLy8gdmFyIGFycm93ID0gbmV3IFRIUkVFLkFycm93SGVscGVyKGRpciwgbmV3IFRIUkVFLlZlY3RvcjMoKSwgbGVuKVxuICAgICAgICAvLyBvcHQuc2NlbmUuYWRkKGFycm93KVxuXG4gICAgICAgIGdyb3VwLnBhbmVscy5mb3JFYWNoKGZ1bmN0aW9uKHBhbmVsKSB7XG4gICAgICAgICAgICBvcHQuc2NlbmUuYWRkKHBhbmVsLmNvbnRhaW5lcilcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIFRleHRQYXNzKHh0ZW5kKG9wdCwge1xuICAgICAgICBncm91cHM6IGdyb3Vwc1xuICAgIH0pKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcm91cHMoKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uKGdyb3VwLCBpLCBsaXN0KSB7XG4gICAgICAgIHZhciB0aGV0YSA9IGkvKGxpc3QubGVuZ3RoKzEpICogTWF0aC5QSSAqIDJcbiAgICAgICAgZ3JvdXAgPSB4dGVuZChncm91cCwge1xuICAgICAgICAgICAgcGFuZWxzOiBncm91cC5wYW5lbHMubWFwKGZ1bmN0aW9uKHBhbmVsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVQYW5lbChwYW5lbCwgaW5kZXgsIHRoZXRhKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGV0YTogdGhldGFcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGdyb3VwXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGFuZWwoZGF0YSwgaW5kZXgsIHJvdGF0aW9uKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBUSFJFRS5PYmplY3QzRCgpXG4gICAgdmFyIG1pcnJvciA9IGluZGV4ID09PSAxXG5cbiAgICB2YXIgcmFkaXVzID0gbW9iaWxlID8gMTggOiAyMFxuICAgIGlmIChtaXJyb3IpIHtcbiAgICAgICAgcm90YXRpb24gKz0gTWF0aC5QSSoyXG4gICAgICAgIHJhZGl1cyAqPSAtMVxuICAgIH1cblxuICAgIC8vbWFrZSB0ZXh0IHBlcnBlbmRpY3VsYXIgdG8gdGhldGEgcm90YXRpb25cbiAgICAvLyByb3RhdGlvbiAtPSBNYXRoLlBJLzIgXG5cbiAgICBjb250YWluZXIucG9zaXRpb24uc2V0KFxuICAgICAgICBNYXRoLmNvcyhyb3RhdGlvbikgKiByYWRpdXMsXG4gICAgICAgIDE1LFxuICAgICAgICBNYXRoLnNpbihyb3RhdGlvbikgKiByYWRpdXNcbiAgICApXG4gICAgXG5cbiAgICAvLyBjb250YWluZXIucG9zaXRpb24uY29weShkYXRhLm9yaWdpbilcblxuICAgIHZhciBwb3MgPSBjb250YWluZXIucG9zaXRpb25cbiAgICB2YXIgZGlyID0gcG9zLmNsb25lKCkuc3ViKG5ldyBUSFJFRS5WZWN0b3IzKDAscG9zLnksMCkpLm5vcm1hbGl6ZSgpXG5cbiAgICB2YXIgcm90T2ZmID0gMC8vTWF0aC5QSS8xMCAqIChtaXJyb3IgPyAtMSA6IDEpXG5cbiAgICB2YXIgZHggPSBwb3MueCxcbiAgICAgICAgZHogPSBwb3MueixcbiAgICAgICAgdGhldGEgPSAtTWF0aC5hdGFuMihkeiwgZHgpIC0gcm90T2ZmXG4gICAgLy8gY29udGFpbmVyLnJvdGF0aW9uLnkgPSB0aGV0YVxuICAgIGNvbnRhaW5lci5yb3RhdGlvbi55ID0gdGhldGFcbiAgICBjb250YWluZXIucm90YXRpb24ueCA9IDBcbiAgICBcbiAgICBpZiAobWlycm9yKSB7XG4gICAgICAgIGNvbnRhaW5lci5zY2FsZS54ICo9IC0xXG4gICAgfVxuXG4gICAgdmFyIGxhYmVscyA9IGRhdGEubGFiZWxzLm1hcChmdW5jdGlvbihsYWJlbCkge1xuICAgICAgICB2YXIgb2JqID0gbmV3IFRIUkVFLk9iamVjdDNEKClcbiAgICAgICAgY29udGFpbmVyLmFkZChvYmopXG4gICAgICAgIGlmIChtaXJyb3IpXG4gICAgICAgICAgICBvYmoucG9zaXRpb24ueCA9IC1kYXRhLndpZHRofHwwXG4gICAgICAgIHJldHVybiB4dGVuZCh7IHNpemU6IDEsIHRyYW5zbGF0aW9uOiBbMCwgMCwgMF0gfSwgbGFiZWwsIHsgXG4gICAgICAgICAgICBvYmplY3QzZDogb2JqLCBcbiAgICAgICAgICAgIC8vIHRoZXRhOiB0aGV0YVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICB2YXIgc2hhcGVzID0gW11cbiAgICAvLyB2YXIgc2hhcGVzID0gKGRhdGEuc2hhcGVzfHxbXSkubWFwKGZ1bmN0aW9uKHNoYXBlKSB7XG4gICAgLy8gICAgIHZhciBjb21wbGV4ID0gc2hhcGUucGF0aCA/IGdldFNWRyhzaGFwZS5wYXRoKSA6IGdldFBvbHkoc2hhcGUucG9pbnRzKVxuICAgIC8vICAgICB2YXIgZ2VvID0gQ29tcGxleChjb21wbGV4KVxuICAgIC8vICAgICB2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgXG4gICAgLy8gICAgICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgLy8gICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgIC8vICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAvLyAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXG4gICAgLy8gICAgIH0pKVxuICAgICAgICBcbiAgICAvLyAgICAgaWYgKHNoYXBlLnBvc2l0aW9uKSBtZXNoLnBvc2l0aW9uLmZyb21BcnJheShzaGFwZS5wb3NpdGlvbilcbiAgICAvLyAgICAgaWYgKHNoYXBlLnNjYWxlKSBtZXNoLnNjYWxlLmZyb21BcnJheShzaGFwZS5zY2FsZSlcblxuICAgIC8vICAgICBjb250YWluZXIuYWRkKG1lc2gpXG4gICAgLy8gICAgIHJldHVybiBtZXNoXG4gICAgLy8gfSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBzaGFwZXM6IHNoYXBlcyxcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJcbiAgICB9XG59IiwidmFyIGRldmljZVR5cGUgPSByZXF1aXJlKCd1YS1kZXZpY2UtdHlwZScpXG5tb2R1bGUuZXhwb3J0cyA9IC8ocGhvbmUpfCh0YWJsZXQpL2kudGVzdChkZXZpY2VUeXBlKG5hdmlnYXRvci51c2VyQWdlbnQpKSIsInZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG5cbnZhciBSaWdTY2VuZSA9IHJlcXVpcmUoJy4vUmlnU2NlbmUnKVxudmFyIE9yYml0Q29udHJvbGxlciA9IHJlcXVpcmUoJy4vdGhyZWUtb3JiaXQtY2FtZXJhJykoVEhSRUUpXG52YXIgRWZmZWN0cyA9IHJlcXVpcmUoJy4vc2V0dXAtZWZmZWN0cycpXG5cbnZhciBUd2Vlbk1heCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlR3ZWVuTWF4IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5Ud2Vlbk1heCA6IG51bGwpXG52YXIgYW5pbWF0ZUxhYmVscyA9IHJlcXVpcmUoJy4vYW5pbWF0ZS1sYWJlbHMnKVxudmFyIGhpZGVMYWJlbHMgPSBhbmltYXRlTGFiZWxzLmhpZGVBbGxcblxudmFyIGNsYW1wID0gcmVxdWlyZSgnY2xhbXAnKVxudmFyIHBsdWNrID0gcmVxdWlyZSgncGx1Y2tlcicpXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJylcbnZhciBzbW9vdGhzdGVwID0gcmVxdWlyZSgnc21vb3Roc3RlcCcpXG52YXIgbGVycCA9IHJlcXVpcmUoJ2xlcnAnKVxudmFyIHVubGVycCA9IHJlcXVpcmUoJ3VubGVycCcpXG52YXIgbW9iaWxlID0gcmVxdWlyZSgnLi9pcy1tb2JpbGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdCkge1xuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIHZhciBGb250ID0gb3B0LmZvbnRcblxuICAgIGlmICghRm9udCB8fCAhRm9udC50ZXh0dXJlcylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNwZWNpZnkgZm9udCB3aXRoIHRleHR1cmVzJylcblxuXG4gICAgdmFyIHJlbmRlcmVyLFxuICAgICAgICBzY2VuZSxcbiAgICAgICAgdGV4dFBhc3MsXG4gICAgICAgIGNhbWVyYSxcbiAgICAgICAgY29udHJvbGxlcixcbiAgICAgICAgZmVhdHVyZXMsXG4gICAgICAgIHdhdGVyLFxuICAgICAgICBlZmZlY3RzLFxuICAgICAgICBsYWJlbHMgPSBbXSxcbiAgICAgICAgdGltZSA9IDBcblxuICAgIGlmICghb3B0LmdsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc3BlY2lmeSBHTCBjb250ZXh0JylcblxuICAgIHNldHVwKG9wdC5nbCwgb3B0LndpZHRofHwwLCBvcHQuaGVpZ2h0fHwwKVxuXG4gICAgZnVuY3Rpb24gZHJhdyhkdCkge1xuICAgICAgICB0aW1lICs9ICBNYXRoLm1pbihkdCwgMzApIC8gMTAwMFxuICAgICAgICByZW5kZXJlci5yZXNldEF0dHJpYnV0ZXMoKVxuICAgICAgICByZW5kZXJlci5yZXNldEdMU3RhdGUoKVxuXG4gICAgICAgIHdhdGVyLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0aW1lICogMC4xXG4gICAgICAgIHdhdGVyLnJlbmRlcigpXG5cbiAgICAgICAgY29udHJvbGxlci51cGRhdGUoKVxuICAgICAgICBcbiAgICAgICAgc2NlbmUudXBkYXRlKGR0KVxuICAgICAgICBpZiAoZWZmZWN0cylcbiAgICAgICAgICAgIGVmZmVjdHMucmVuZGVyKGR0KVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRleHRQYXNzLnJlbmRlcihyZW5kZXJlcilcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGVMYWJlbHMoY29udHJvbGxlciwgbGFiZWxzKVxuXG4gICAgICAgIHZhciB0ID0gdW5sZXJwKDAuNiwgMS40LCBjb250cm9sbGVyLnBoaSlcbiAgICAgICAgdCA9IHNtb290aHN0ZXAoMS41LCAwLjk1LCB0KVxuICAgICAgICB2YXIgcmFuZ2UgPSBjbGFtcCh0LCAwLCAxKVxuICAgICAgICB3YXRlci5hbHBoYSA9IHJhbmdlfHwwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXAoZ2wsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IFxuICAgICAgICAgICAgY2FudmFzOiBnbC5jYW52YXMsXG4gICAgICAgICAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgICAgICAgICAgYWxwaGE6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDApXG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcFR5cGUgPSBUSFJFRS5CYXNpY1NoYWRvd01hcFxuICAgICAgICAvLyByZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZVxuXG4gICAgICAgIG9wdC5mb3YgPSBudW1iZXIob3B0LmZvdiwgNTApXG4gICAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShvcHQuZm92LCB3aWR0aC9oZWlnaHQsIDAuNSwgMjAwMDApXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5mcm9tQXJyYXkobW9iaWxlIFxuICAgICAgICAgICAgICAgID8gWy04MCwgMzgsIC04MF1cbiAgICAgICAgICAgICAgICA6IFstNjAsIDM4LCAtNDBdKVxuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKCkpXG5cbiAgICAgICAgY29udHJvbGxlciA9IG5ldyBPcmJpdENvbnRyb2xsZXIoY2FtZXJhKVxuICAgICAgICBjb250cm9sbGVyLnVzZXJQYW4gPSBmYWxzZVxuICAgICAgICBjb250cm9sbGVyLnVzZXJQYW5TcGVlZCA9IDAuMFxuICAgICAgICBjb250cm9sbGVyLnpvb21TcGVlZCA9IDAuMVxuICAgICAgICBjb250cm9sbGVyLnJvdGF0ZVNwZWVkID0gMC4yXG4gICAgICAgIGNvbnRyb2xsZXIubWluRGlzdGFuY2UgPSAzMFxuICAgICAgICBjb250cm9sbGVyLm1heERpc3RhbmNlID0gMjAwLjBcbiAgICAgICAgY29udHJvbGxlci5tYXhQb2xhckFuZ2xlID0gOTAgKiBNYXRoLlBJLzE4MFxuICAgICAgICBjb250cm9sbGVyLm1pblBvbGFyQW5nbGUgPSA0MCAqIE1hdGguUEkvMTgwXG4gICAgICAgIGNvbnRyb2xsZXIuY2VudGVyLnNldCggMCwgNSwgMCApXG4gICAgICAgIHNjZW5lID0gUmlnU2NlbmUoKVxuXG4gICAgICAgIHJlcXVpcmUoJy4vc2V0dXAtZmxvb3InKShzY2VuZSlcblxuICAgICAgICB3YXRlciA9IHJlcXVpcmUoJy4vc2V0dXAtd2F0ZXInKShyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSlcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmN1YmVNYXAgPSB3YXRlci5jdWJlTWFwXG4gICAgICAgIHNjZW5lLnVwZGF0ZU1hdGVyaWFsKClcblxuICAgICAgICB2YXIgcGFzcyA9IHJlcXVpcmUoJy4vY3JlYXRlLXRleHQtcGFzcycpKHtcbiAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlcixcbiAgICAgICAgICAgIHNjZW5lOiBzY2VuZSxcbiAgICAgICAgICAgIGNhbWVyYTogY2FtZXJhLFxuICAgICAgICAgICAgZm9udDogRm9udFxuICAgICAgICB9KVxuXG4gICAgICAgIHRleHRQYXNzID0gcGFzc1xuICAgICAgICBsYWJlbHMgPSBwYXNzLmdyb3Vwc1xuXG4gICAgICAgIGVmZmVjdHMgPSBFZmZlY3RzKHtcbiAgICAgICAgICAgIHJlbmRlcmVyOiByZW5kZXJlcixcbiAgICAgICAgICAgIHNjZW5lOiBzY2VuZSxcbiAgICAgICAgICAgIGNhbWVyYTogY2FtZXJhLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgYmx1cjogZmFsc2UsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIHJlbmRlclBhc3M6IHBhc3NcbiAgICAgICAgfSlcblxuICAgICAgICBoaWRlTGFiZWxzKGxhYmVscylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aWR0aC9oZWlnaHRcbiAgICAgICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKVxuXG4gICAgICAgIGlmIChlZmZlY3RzKVxuICAgICAgICAgICAgZWZmZWN0cy5yZXNpemUod2lkdGgsIGhlaWdodClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkcmF3OiBkcmF3LFxuICAgICAgICByZXNpemU6IGhhbmRsZVJlc2l6ZVxuICAgIH1cbn0iLCJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIEVmZmVjdENvbXBvc2VyID0gcmVxdWlyZSgndGhyZWUtZWZmZWN0Y29tcG9zZXInKShUSFJFRSlcbnZhciBjcmVhdGVGWEFBID0gcmVxdWlyZSgndGhyZWUtc2hhZGVyLWZ4YWEnKShUSFJFRSlcbnZhciBjcmVhdGVCbHVyID0gcmVxdWlyZSgnLi9zaGFkZXJzL2JsdXInKVxudmFyIGNyZWF0ZUxlbnMgPSByZXF1aXJlKCcuL3NoYWRlcnMvbGVucycpXG52YXIgY3JlYXRlRW1wdHkgPSByZXF1aXJlKCcuL3NoYWRlcnMvcGFzcycpXG4vLyB2YXIgVGV4dFBhc3MgPSByZXF1aXJlKCcuL1RleHRQYXNzJylcblxubW9kdWxlLmV4cG9ydHMgPSBFZmZlY3RzXG5cbmZ1bmN0aW9uIEVmZmVjdHMob3B0KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEVmZmVjdHMpKSBcbiAgICAgICAgcmV0dXJuIG5ldyBFZmZlY3RzKG9wdClcbiAgICBvcHQgPSBvcHR8fHt9XG5cbiAgICB2YXIgcGFyYW1ldGVycyA9IHsgXG4gICAgICAgIG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBcbiAgICAgICAgbWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsIFxuICAgICAgICBmb3JtYXQ6IFRIUkVFLlJHQkZvcm1hdCwgXG4gICAgICAgIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIFxuICAgIH1cbiAgICB2YXIgd2lkdGggPSBvcHQud2lkdGhcbiAgICB2YXIgaGVpZ2h0ID0gb3B0LmhlaWdodFxuICAgIHZhciByZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQod2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyk7XG5cbiAgICB0aGlzLmNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKG9wdC5yZW5kZXJlciwgcmVuZGVyVGFyZ2V0KVxuICAgIHRoaXMuY29tcG9zZXIuYWRkUGFzcyhvcHQucmVuZGVyUGFzcylcbiAgICBcbiAgICB0aGlzLnNoYWRlcnMgPSBbXVxuICAgIHRoaXMubm9pc2VEZWxheSA9IDMzXG4gICAgdGhpcy5ub2lzZVRpbWUgPSAwXG5cbiAgICAvLyB0aGlzLnNoYWRlcnMucHVzaChuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVFbXB0eSgpKSlcblxuXG4gICAgdmFyIGZ4YWFTaGFkZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyhjcmVhdGVGWEFBKCkpXG4gICAgdGhpcy5zaGFkZXJzLnB1c2goZnhhYVNoYWRlcilcblxuICAgIGlmIChvcHQuYmx1ciAhPT0gZmFsc2UpIHtcbiAgICAgICAgdmFyIGJsdXIgPSBjcmVhdGVCbHVyKClcbiAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSAxO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8aXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgciA9IChpKzEpKjI7XG5cbiAgICAgICAgICAgIHZhciBob3JpeiA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKCBibHVyICk7XG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5yYWRpdXMudmFsdWUgPSByXG4gICAgICAgICAgICBob3Jpei51bmlmb3Jtcy5zdHJlbmd0aC52YWx1ZSA9IDFcbiAgICAgICAgICAgIGhvcml6LnVuaWZvcm1zLmRpci52YWx1ZS5zZXQoMSwwKVxuXG4gICAgICAgICAgICB2YXIgdmVydCA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKCBibHVyICk7XG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLnJhZGl1cy52YWx1ZSA9IHJcbiAgICAgICAgICAgIHZlcnQudW5pZm9ybXMuc3RyZW5ndGgudmFsdWUgPSAxXG4gICAgICAgICAgICB2ZXJ0LnVuaWZvcm1zLmRpci52YWx1ZS5zZXQoMCwxKVxuXG4gICAgICAgICAgICB0aGlzLnNoYWRlcnMucHVzaChob3JpeiwgdmVydClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsZW5zUGFzcyA9IG5ldyBFZmZlY3RDb21wb3Nlci5TaGFkZXJQYXNzKGNyZWF0ZUxlbnMoKSlcbiAgICB0aGlzLnNoYWRlcnMucHVzaChsZW5zUGFzcylcblxuICAgIC8vZGVmYXVsdCB2YWx1ZXMgdG8gYXZvaWQgZGl2IGJ5IHplcm9cbiAgICBsZW5zUGFzcy51bmlmb3Jtcy5vdmVybGF5UmVzb2x1dGlvbi52YWx1ZS5zZXQoMSwgMSlcbiAgICBsZW5zUGFzcy51bmlmb3Jtcy50TG9va3VwLnZhbHVlID0gbG9hZFRleHR1cmUoJ2ltZy9sb29rdXAucG5nJywgeyBcbiAgICAgICAgZ2VuZXJhdGVNaXBtYXBzOiBmYWxzZSxcbiAgICAgICAgZmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIgXG4gICAgfSlcbiAgICBsZW5zUGFzcy51bmlmb3Jtcy50T3ZlcmxheS52YWx1ZSA9IGxvYWRUZXh0dXJlKCdpbWcvZHVzdC5qcGcnLCB7XG4gICAgICAgIGdlbmVyYXRlTWlwbWFwczogZmFsc2UsXG4gICAgICAgIGZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyXG4gICAgfSwgZnVuY3Rpb24oZXJyLCB0ZXgpIHtcbiAgICAgICAgbGVuc1Bhc3MudW5pZm9ybXMub3ZlcmxheVJlc29sdXRpb24udmFsdWUuc2V0KHRleC5pbWFnZS53aWR0aCwgdGV4LmltYWdlLmhlaWdodClcbiAgICB9KVxuXG4gICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcywgaSwgc2VsZikge1xuICAgICAgICB0aGlzLmNvbXBvc2VyLmFkZFBhc3MocGFzcylcbiAgICAgICAgaWYgKGkgPT09IHNlbGYubGVuZ3RoLTEpXG4gICAgICAgICAgICBwYXNzLnJlbmRlclRvU2NyZWVuID0gdHJ1ZVxuICAgIH0sIHRoaXMpICBcbiAgICBpZiAob3B0LndpZHRoICYmIG9wdC5oZWlnaHQpIFxuICAgICAgICB0aGlzLnJlc2l6ZShvcHQud2lkdGgsIG9wdC5oZWlnaHQpXG59XG5cblxuZnVuY3Rpb24gbG9hZFRleHR1cmUocGF0aCwgb3B0LCBjYikge1xuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNiID0gb3B0XG4gICAgICAgIG9wdCA9IHt9XG4gICAgfVxuXG4gICAgcmV0dXJuIFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUocGF0aCwgdW5kZWZpbmVkLCBmdW5jdGlvbih0ZXgpIHtcbiAgICAgICAgaWYgKG9wdC5maWx0ZXIpIHRleC5taW5GaWx0ZXIgPSB0ZXgubWFnRmlsdGVyID0gb3B0LmZpbHRlclxuICAgICAgICBpZiAob3B0LndyYXApIHRleC53cmFwUyA9IHRleC53cmFwVCA9IG9wdC53cmFwXG4gICAgICAgIHRleC5nZW5lcmF0ZU1pcG1hcHMgPSBvcHQuZ2VuZXJhdGVNaXBtYXBzXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIFxuICAgICAgICAgICAgY2IobnVsbCwgdGV4KVxuICAgIH0pXG59XG5cbnJlcXVpcmUoJ21peGVzJykoRWZmZWN0cywge1xuXG4gICAgcmVuZGVyOiBmdW5jdGlvbihkdCkge1xuICAgICAgICB0aGlzLm5vaXNlVGltZSArPSBkdFxuICAgICAgICBpZiAodGhpcy5ub2lzZVRpbWUgPiB0aGlzLm5vaXNlRGVsYXkpIHtcbiAgICAgICAgICAgIHRoaXMubm9pc2VUaW1lID0gMFxuICAgICAgICAgICAgdGhpcy5zaGFkZXJzLmZvckVhY2goZnVuY3Rpb24ocGFzcykge1xuICAgICAgICAgICAgICAgIGlmIChwYXNzLnVuaWZvcm1zLnRpY2spXG4gICAgICAgICAgICAgICAgICAgIHBhc3MudW5pZm9ybXMudGljay52YWx1ZSArPSAwLjAwNVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9zZXIucmVuZGVyKClcbiAgICB9LFxuXG4gICAgcmVzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoICo9IDJcbiAgICAgICAgaGVpZ2h0ICo9IDJcbiAgICAgICAgdGhpcy5jb21wb3Nlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIHRoaXMuc2hhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHBhc3MpIHtcbiAgICAgICAgICAgIHZhciBkcHIgPSAxXG4gICAgICAgICAgICAvLyB2YXIgZHByID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKVxuICAgICAgICAgICAgaWYgKHBhc3MudW5pZm9ybXMucmVzb2x1dGlvbilcbiAgICAgICAgICAgICAgICBwYXNzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHdpZHRoKmRwciwgaGVpZ2h0KmRwcilcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn0pIiwidmFyIHJhbmRvbSA9IHJlcXVpcmUoJ3JhbmRmJylcbnZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgc21vb3Roc3RlcCA9IHJlcXVpcmUoJ3Ntb290aHN0ZXAnKVxudmFyIGxlcnAgPSByZXF1aXJlKCdsZXJwJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzY2VuZSkge1xuICAgIHZhciBnZW8gPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxMDAsIDEwMCwgNDAsIDQwKVxuICAgIHZhciB2ZWMyID0gbmV3IFRIUkVFLlZlY3RvcjIoKVxuICAgIGdlby52ZXJ0aWNlcy5mb3JFYWNoKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdmFyIGxlbiA9IHZlYzIuc2V0KHYueCwgdi55KS5sZW5ndGgoKSAvIDUwXG4gICAgICAgIHZhciBzbGVuID0gc21vb3Roc3RlcCgwLjQsIDEuMCwgbGVuKVxuICAgICAgICB2LnogPSByYW5kb20oMTAsIDQwKSAqIHNsZW4gXG5cbiAgICAgICAgc2xlbiA9IHNtb290aHN0ZXAoMC43LCAxLjAsIGxlbilcbiAgICAgICAgdmFyIGJhc2UgPSBzbW9vdGhzdGVwKDAuMiwgMC4wLCBsZW4pKjAuNVxuICAgICAgICBzbGVuICs9IGJhc2VcblxuICAgICAgICB2YXIgTCA9IHNsZW4vL2xlcnAoMC45LCAxLjAsIHNsZW4pXG4gICAgICAgIHZhciBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcihMLCBMLCBMKVxuICAgICAgICBnZW8uY29sb3JzLnB1c2goY29sb3IpXG4gICAgfSlcblxuICAgIGdlby5mYWNlcy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2UpIHtcbiAgICAgICAgZmFjZS52ZXJ0ZXhDb2xvcnNbMF0gPSBnZW8uY29sb3JzW2ZhY2UuYV1cbiAgICAgICAgZmFjZS52ZXJ0ZXhDb2xvcnNbMV0gPSBnZW8uY29sb3JzW2ZhY2UuYl1cbiAgICAgICAgZmFjZS52ZXJ0ZXhDb2xvcnNbMl0gPSBnZW8uY29sb3JzW2ZhY2UuY11cbiAgICB9KVxuXG4gICAgdmFyIHRleCA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJ2ltZy9zbm93LmpwZycpXG4gICAgdGV4LnJlcGVhdC5zZXQoMSwgMSlcbiAgICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZ1xuXG4gICAgdmFyIG1hdCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IFxuICAgICAgICBtYXA6IHRleCxcbiAgICAgICAgdmVydGV4Q29sb3JzOiBUSFJFRS5WZXJ0ZXhDb2xvcnMgXG4gICAgICAgIC8vIGNvbG9yOiBcInJnYigxNTAsMTUwLDE1MClcIlxuICAgIH0pXG4gICAgdmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdClcbiAgICBtZXNoLnJvdGF0aW9uLnggPSAtTWF0aC5QSS8yXG4gICAgbWVzaC5wb3NpdGlvbi55ID0gLTMwXG4gICAgdmFyIHN0cmV0Y2ggPSAxMFxuICAgIG1lc2guc2NhbGUueCA9IG1lc2guc2NhbGUueSA9IHN0cmV0Y2hcbiAgICBzY2VuZS5hZGQobWVzaClcblxuICAgIHdpbmRvdy5mbG9vciA9IG1lc2hcbn0iLCJ2YXIgY3ViZVNoYWRlciA9IHtcblxuICAgIHVuaWZvcm1zOiBUSFJFRS5Vbmlmb3Jtc1V0aWxzLm1lcmdlKCBbXG4gICAgICAgIHsgXCJ0Q3ViZVwiOiB7IHR5cGU6IFwidFwiLCB2YWx1ZTogbnVsbCB9LFxuICAgICAgICBcInRGbGlwXCI6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiAtIDEgfSB9LFxuICAgICAgICBUSFJFRS5Vbmlmb3Jtc0xpYlsgXCJmb2dcIiBdXG4gICAgXSApLFxuXG4gICAgdmVydGV4U2hhZGVyOiBbXG5cbiAgICAgICAgXCJ2YXJ5aW5nIHZlYzMgdldvcmxkUG9zaXRpb247XCIsXG5cbiAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfcGFyc192ZXJ0ZXhcIiBdLFxuXG4gICAgICAgIFwidm9pZCBtYWluKCkge1wiLFxuXG4gICAgICAgIFwiICAgdmVjNCB3b3JsZFBvc2l0aW9uID0gbW9kZWxNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XCIsXG4gICAgICAgIFwiICAgdldvcmxkUG9zaXRpb24gPSB3b3JsZFBvc2l0aW9uLnh5ejtcIixcblxuICAgICAgICBcIiAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcIixcblxuICAgICAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfdmVydGV4XCIgXSxcblxuICAgICAgICBcIn1cIlxuXG4gICAgXS5qb2luKFwiXFxuXCIpLFxuXG4gICAgZnJhZ21lbnRTaGFkZXI6IFtcblxuICAgICAgICBcInVuaWZvcm0gc2FtcGxlckN1YmUgdEN1YmU7XCIsXG4gICAgICAgIFwidW5pZm9ybSBmbG9hdCB0RmxpcDtcIixcblxuICAgICAgICBcInZhcnlpbmcgdmVjMyB2V29ybGRQb3NpdGlvbjtcIixcbiAgICAgICAgVEhSRUUuU2hhZGVyQ2h1bmtbIFwibG9nZGVwdGhidWZfcGFyc19mcmFnbWVudFwiIF0sXG4gICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImZvZ19wYXJzX2ZyYWdtZW50XCIgXSxcbiAgICAgICAgXCJ2b2lkIG1haW4oKSB7XCIsXG4gICAgICAgIFwiICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZUN1YmUoIHRDdWJlLCB2ZWMzKCB0RmxpcCAqIHZXb3JsZFBvc2l0aW9uLngsIHZXb3JsZFBvc2l0aW9uLnl6ICkgKTtcIixcbiAgICAgICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImxvZ2RlcHRoYnVmX2ZyYWdtZW50XCIgXSxcbiAgICAgICAgICAgIFRIUkVFLlNoYWRlckNodW5rWyBcImZvZ19mcmFnbWVudFwiIF0sXG4gICAgICAgIFwifVwiXG5cbiAgICBdLmpvaW4oXCJcXG5cIilcblxufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZW5kZXJlciwgY2FtZXJhLCBzY2VuZSkge1xuICAgIHZhciBsaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoMHhiYmU5ZmYsIDB4MDgwODIwLCAxKVxuICAgIGxpZ2h0LnBvc2l0aW9uLnNldCgtMSwgMSwgLTEpXG4gICAgc2NlbmUuYWRkKGxpZ2h0KVxuXG4gICAgdmFyIHdhdGVyTm9ybWFscyA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCdpbWcvd2F0ZXJub3JtYWxzNS5qcGcnKVxuICAgIHdhdGVyTm9ybWFscy53cmFwUyA9IHdhdGVyTm9ybWFscy53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nXG5cbiAgICB2YXIgd2F0ZXIgPSBuZXcgVEhSRUUuV2F0ZXIocmVuZGVyZXIsIGNhbWVyYSwgc2NlbmUsIHtcbiAgICAgICAgdGV4dHVyZVdpZHRoOiA1MTIsXG4gICAgICAgIHRleHR1cmVIZWlnaHQ6IDUxMixcbiAgICAgICAgd2F0ZXJOb3JtYWxzOiB3YXRlck5vcm1hbHMsXG4gICAgICAgIGFscGhhOiAwLjksXG4gICAgICAgIHN1bkRpcmVjdGlvbjogbGlnaHQucG9zaXRpb24uY2xvbmUoKS5ub3JtYWxpemUoKSxcbiAgICAgICAgc3VuQ29sb3I6IDB4ZmZmZmZmLFxuICAgICAgICB3YXRlckNvbG9yOiAweDAyMGQxNSxcbiAgICAgICAgZGlzdG9ydGlvblNjYWxlOiA4MC4wLFxuICAgIH0pXG5cbiAgICB2YXIgbWlycm9yTWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1MDAwLCA1MDAwKSxcbiAgICAgICAgd2F0ZXIubWF0ZXJpYWxcbiAgICApXG5cbiAgICBtaXJyb3JNZXNoLmFkZCh3YXRlcilcbiAgICBtaXJyb3JNZXNoLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAqIDAuNVxuICAgIHNjZW5lLmFkZChtaXJyb3JNZXNoKVxuXG5cbiAgICAvLyBsb2FkIHNreWJveFxuXG4gICAgdmFyIGN1YmVNYXAgPSBuZXcgVEhSRUUuQ3ViZVRleHR1cmUoW10pXG4gICAgY3ViZU1hcC5mb3JtYXQgPSBUSFJFRS5SR0JGb3JtYXRcbiAgICBjdWJlTWFwLmZsaXBZID0gZmFsc2VcblxuICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKVxuICAgIGxvYWRlci5sb2FkKCdpbWcvY2xvdWR5X25pZ2h0Mi5qcGcnLCBmdW5jdGlvbihpbWFnZSkge1xuXG4gICAgICAgIHZhciBnZXRTaWRlID0gZnVuY3Rpb24oeCwgeSkge1xuXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IDEwMjRcblxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBzaXplXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc2l6ZVxuXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgLXggKiBzaXplLCAteSAqIHNpemUpXG5cbiAgICAgICAgICAgIHJldHVybiBjYW52YXNcblxuICAgICAgICB9XG5cbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbMF0gPSBnZXRTaWRlKDIsIDEpIC8vIHB4XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzFdID0gZ2V0U2lkZSgwLCAxKSAvLyBueFxuICAgICAgICBjdWJlTWFwLmltYWdlc1syXSA9IGdldFNpZGUoMSwgMCkgLy8gcHlcbiAgICAgICAgY3ViZU1hcC5pbWFnZXNbM10gPSBnZXRTaWRlKDEsIDIpIC8vIG55XG4gICAgICAgIGN1YmVNYXAuaW1hZ2VzWzRdID0gZ2V0U2lkZSgxLCAxKSAvLyBwelxuICAgICAgICBjdWJlTWFwLmltYWdlc1s1XSA9IGdldFNpZGUoMywgMSkgLy8gbnpcbiAgICAgICAgY3ViZU1hcC5uZWVkc1VwZGF0ZSA9IHRydWVcblxuICAgIH0pXG5cbiAgICBjdWJlU2hhZGVyLnVuaWZvcm1zLnRDdWJlLnZhbHVlID0gY3ViZU1hcFxuXG4gICAgdmFyIHNreUJveE1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGN1YmVTaGFkZXIuZnJhZ21lbnRTaGFkZXIsXG4gICAgICAgIHZlcnRleFNoYWRlcjogY3ViZVNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICAgIHVuaWZvcm1zOiBjdWJlU2hhZGVyLnVuaWZvcm1zLFxuICAgICAgICAvLyBkZXB0aFdyaXRlOiBmYWxzZSxcbiAgICAgICAgc2lkZTogVEhSRUUuQmFja1NpZGUsXG4gICAgICAgIGZvZzogdHJ1ZSxcbiAgICB9KVxuXG4gICAgdmFyIHNreUJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNTAwMCwgNTAwMCwgNTAwMCksXG4gICAgICAgIHNreUJveE1hdGVyaWFsXG4gICAgKVxuICAgIFxuICAgIHdhdGVyLmN1YmVNYXAgPSBjdWJlTWFwXG5cbiAgICBzY2VuZS5hZGQoc2t5Qm94KVxuICAgIHJldHVybiB3YXRlclxufSIsInZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgc291cmNlID0gcmVxdWlyZShcImdsc2xpZnkvc2ltcGxlLWFkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgcmFkaXVzO1xcbnVuaWZvcm0gdmVjMiBkaXI7XFxudW5pZm9ybSBmbG9hdCBzdHJlbmd0aDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZlYzQgYV94X2JsdXIoc2FtcGxlcjJEIHRleCwgdmVjMiB1diwgdmVjMiBibHVyLCB2ZWMyIGRpcmVjdGlvbikge1xcbiAgdmVjNCBzdW0gPSB2ZWM0KDAuMCk7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gNC4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSA0LjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wMTYyMTYyMTYyO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCAtIDMuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55IC0gMy4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDU0MDU0MDU0MTtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggLSAyLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSAtIDIuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjEyMTYyMTYyMTY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54IC0gMS4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgLSAxLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4xOTQ1OTQ1OTQ2O1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCwgdXYueSkpICogMC4yMjcwMjcwMjcwO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDEuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgMS4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMTk0NTk0NTk0NjtcXG4gIHN1bSArPSB0ZXh0dXJlMkQodGV4LCB2ZWMyKHV2LnggKyAyLjAgKiBibHVyLnggKiBkaXJlY3Rpb24ueCwgdXYueSArIDIuMCAqIGJsdXIueSAqIGRpcmVjdGlvbi55KSkgKiAwLjEyMTYyMTYyMTY7XFxuICBzdW0gKz0gdGV4dHVyZTJEKHRleCwgdmVjMih1di54ICsgMy4wICogYmx1ci54ICogZGlyZWN0aW9uLngsIHV2LnkgKyAzLjAgKiBibHVyLnkgKiBkaXJlY3Rpb24ueSkpICogMC4wNTQwNTQwNTQxO1xcbiAgc3VtICs9IHRleHR1cmUyRCh0ZXgsIHZlYzIodXYueCArIDQuMCAqIGJsdXIueCAqIGRpcmVjdGlvbi54LCB1di55ICsgNC4wICogYmx1ci55ICogZGlyZWN0aW9uLnkpKSAqIDAuMDE2MjE2MjE2MjtcXG4gIHJldHVybiBzdW07XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZlYzIgYmx1ckFtdCA9IHZlYzIocmFkaXVzKSAvIHJlc29sdXRpb247XFxuICB2ZWM0IHN1bSA9IGFfeF9ibHVyKHREaWZmdXNlLCB2VXYsIGJsdXJBbXQsIGRpcik7XFxuICB2ZWMyIHAgPSAoZ2xfRnJhZ0Nvb3JkLnh5IC8gcmVzb2x1dGlvbi54eSAtIDAuNSk7XFxuICBwLnggKj0gcmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55O1xcbiAgZmxvYXQgbGVuID0gc21vb3Roc3RlcCgwLjUsIDEuMiwgbGVuZ3RoKHApKTtcXG4gIHZlYzMgb3JpZyA9IHRleHR1cmUyRCh0RGlmZnVzZSwgdlV2KS5yZ2I7XFxuICBnbF9GcmFnQ29sb3IucmdiID0gbWl4KG9yaWcsIHN1bS5yZ2IsIGxlbiArIDAuMSk7XFxuICBnbF9GcmFnQ29sb3IuYSA9IDEuMDtcXG59XCIsIFt7XCJuYW1lXCI6XCJyZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInJhZGl1c1wiLFwidHlwZVwiOlwiZmxvYXRcIn0se1wibmFtZVwiOlwiZGlyXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInN0cmVuZ3RoXCIsXCJ0eXBlXCI6XCJmbG9hdFwifSx7XCJuYW1lXCI6XCJ0RGlmZnVzZVwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9XSwgW10pO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9jcmVhdGVcIikoc291cmNlKTsiLCJ2YXIgVEhSRUUgPSAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5USFJFRSA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwuVEhSRUUgOiBudWxsKVxudmFyIHRocmVlaWZ5ID0gcmVxdWlyZSgndGhyZWUtZ2xzbGlmeScpKFRIUkVFKVxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKSBcbiBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9wdCkge1xuICAgICAgICByZXR1cm4geHRlbmQodGhyZWVpZnkoc291cmNlKSwgb3B0KVxuICAgIH1cbn0iLCJ2YXIgZ2xzbGlmeSA9IHJlcXVpcmUoXCJnbHNsaWZ5XCIpO1xudmFyIHNvdXJjZSA9IHJlcXVpcmUoXCJnbHNsaWZ5L3NpbXBsZS1hZGFwdGVyLmpzXCIpKFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgb3ZlcmxheVJlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgb3ZlcmxheVVWO1xcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZmxvYXQgYXNwZWN0ID0gb3ZlcmxheVJlc29sdXRpb24ueCAvIG92ZXJsYXlSZXNvbHV0aW9uLnk7XFxuICBmbG9hdCByYXRpbyA9IHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueTtcXG4gIG92ZXJsYXlVViA9IHV2O1xcbiAgZmxvYXQgdEFzcGVjdCA9IG92ZXJsYXlSZXNvbHV0aW9uLnggLyBvdmVybGF5UmVzb2x1dGlvbi55O1xcbiAgZmxvYXQgcEFzcGVjdCA9IHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueTtcXG4gIG92ZXJsYXlVViA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsIFwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHRpY2s7XFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxudW5pZm9ybSBzYW1wbGVyMkQgdExvb2t1cDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0T3ZlcmxheTtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgdmVjMiBvdmVybGF5VVY7XFxuaGlnaHAgZmxvYXQgYV94X3JhbmRvbSh2ZWMyIGNvKSB7XFxuICBoaWdocCBmbG9hdCBhID0gMTIuOTg5ODtcXG4gIGhpZ2hwIGZsb2F0IGIgPSA3OC4yMzM7XFxuICBoaWdocCBmbG9hdCBjID0gNDM3NTguNTQ1MztcXG4gIGhpZ2hwIGZsb2F0IGR0ID0gZG90KGNvLnh5LCB2ZWMyKGEsIGIpKTtcXG4gIGhpZ2hwIGZsb2F0IHNuID0gbW9kKGR0LCAzLjE0KTtcXG4gIHJldHVybiBmcmFjdChzaW4oc24pICogYyk7XFxufVxcbnZlYzMgYl94X2JsZW5kT3ZlcmxheSh2ZWMzIGJhc2UsIHZlYzMgYmxlbmQpIHtcXG4gIHJldHVybiB2ZWMzKGJhc2UuciA8IDAuNSA/ICgyLjAgKiBiYXNlLnIgKiBibGVuZC5yKSA6ICgxLjAgLSAyLjAgKiAoMS4wIC0gYmFzZS5yKSAqICgxLjAgLSBibGVuZC5yKSksIGJhc2UuZyA8IDAuNSA/ICgyLjAgKiBiYXNlLmcgKiBibGVuZC5nKSA6ICgxLjAgLSAyLjAgKiAoMS4wIC0gYmFzZS5nKSAqICgxLjAgLSBibGVuZC5nKSksIGJhc2UuYiA8IDAuNSA/ICgyLjAgKiBiYXNlLmIgKiBibGVuZC5iKSA6ICgxLjAgLSAyLjAgKiAoMS4wIC0gYmFzZS5iKSAqICgxLjAgLSBibGVuZC5iKSkpO1xcbn1cXG5mbG9hdCBjX3hfbHVtYSh2ZWMzIGNvbG9yKSB7XFxuICByZXR1cm4gZG90KGNvbG9yLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTtcXG59XFxuZmxvYXQgY194X2x1bWEodmVjNCBjb2xvcikge1xcbiAgcmV0dXJuIGRvdChjb2xvci5yZ2IsIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xcbn1cXG4jZGVmaW5lIExVVF9GTElQX1lcXG5cXG52ZWM0IGVfeF9sb29rdXAoaW4gdmVjNCB0ZXh0dXJlQ29sb3IsIGluIHNhbXBsZXIyRCBsb29rdXBUYWJsZSkge1xcbiAgXFxuICAjaWZuZGVmIExVVF9OT19DTEFNUFxcbiAgdGV4dHVyZUNvbG9yID0gY2xhbXAodGV4dHVyZUNvbG9yLCAwLjAsIDEuMCk7XFxuICAjZW5kaWZcXG4gIG1lZGl1bXAgZmxvYXQgYmx1ZUNvbG9yID0gdGV4dHVyZUNvbG9yLmIgKiA2My4wO1xcbiAgbWVkaXVtcCB2ZWMyIHF1YWQxO1xcbiAgcXVhZDEueSA9IGZsb29yKGZsb29yKGJsdWVDb2xvcikgLyA4LjApO1xcbiAgcXVhZDEueCA9IGZsb29yKGJsdWVDb2xvcikgLSAocXVhZDEueSAqIDguMCk7XFxuICBtZWRpdW1wIHZlYzIgcXVhZDI7XFxuICBxdWFkMi55ID0gZmxvb3IoY2VpbChibHVlQ29sb3IpIC8gOC4wKTtcXG4gIHF1YWQyLnggPSBjZWlsKGJsdWVDb2xvcikgLSAocXVhZDIueSAqIDguMCk7XFxuICBoaWdocCB2ZWMyIHRleFBvczE7XFxuICB0ZXhQb3MxLnggPSAocXVhZDEueCAqIDAuMTI1KSArIDAuNSAvIDUxMi4wICsgKCgwLjEyNSAtIDEuMCAvIDUxMi4wKSAqIHRleHR1cmVDb2xvci5yKTtcXG4gIHRleFBvczEueSA9IChxdWFkMS55ICogMC4xMjUpICsgMC41IC8gNTEyLjAgKyAoKDAuMTI1IC0gMS4wIC8gNTEyLjApICogdGV4dHVyZUNvbG9yLmcpO1xcbiAgI2lmZGVmIExVVF9GTElQX1lcXG4gIHRleFBvczEueSA9IDEuMCAtIHRleFBvczEueTtcXG4gICNlbmRpZlxcbiAgaGlnaHAgdmVjMiB0ZXhQb3MyO1xcbiAgdGV4UG9zMi54ID0gKHF1YWQyLnggKiAwLjEyNSkgKyAwLjUgLyA1MTIuMCArICgoMC4xMjUgLSAxLjAgLyA1MTIuMCkgKiB0ZXh0dXJlQ29sb3Iucik7XFxuICB0ZXhQb3MyLnkgPSAocXVhZDIueSAqIDAuMTI1KSArIDAuNSAvIDUxMi4wICsgKCgwLjEyNSAtIDEuMCAvIDUxMi4wKSAqIHRleHR1cmVDb2xvci5nKTtcXG4gICNpZmRlZiBMVVRfRkxJUF9ZXFxuICB0ZXhQb3MyLnkgPSAxLjAgLSB0ZXhQb3MyLnk7XFxuICAjZW5kaWZcXG4gIGxvd3AgdmVjNCBuZXdDb2xvcjEgPSB0ZXh0dXJlMkQobG9va3VwVGFibGUsIHRleFBvczEpO1xcbiAgbG93cCB2ZWM0IG5ld0NvbG9yMiA9IHRleHR1cmUyRChsb29rdXBUYWJsZSwgdGV4UG9zMik7XFxuICBsb3dwIHZlYzQgbmV3Q29sb3IgPSBtaXgobmV3Q29sb3IxLCBuZXdDb2xvcjIsIGZyYWN0KGJsdWVDb2xvcikpO1xcbiAgcmV0dXJuIG5ld0NvbG9yO1xcbn1cXG52b2lkIG1haW4oKSB7XFxuICB2ZWMzIHRleENvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpLnJnYjtcXG4gIGZsb2F0IGx1bWluYW5jZSA9IGNfeF9sdW1hKHRleENvbG9yKTtcXG4gIGZsb2F0IG5vaXNlTWFwID0gc21vb3Roc3RlcChsdW1pbmFuY2UsIDAuNSwgMC4wKTtcXG4gIHZlYzIgdFV2ID0gdlV2ICsgdGljaztcXG4gIHZlYzMgbm9pc2UgPSB2ZWMzKGFfeF9yYW5kb20odFV2KSwgYV94X3JhbmRvbSh0VXYgKiAxLjUpLCBhX3hfcmFuZG9tKHRVdiAqIDAuNSkpO1xcbiAgdmVjMyBub2lzZUNvbG9yID0gbWl4KG5vaXNlLCB2ZWMzKDAuNSksIG5vaXNlTWFwKTtcXG4gIHZlYzMgY29sb3IgPSBtaXgodGV4Q29sb3IsIGJfeF9ibGVuZE92ZXJsYXkodGV4Q29sb3IsIG5vaXNlKSwgMC4xNSk7XFxuICB2ZWMzIGNvcnJlY3RlZCA9IGVfeF9sb29rdXAodmVjNChjb2xvciwgMS4wKSwgdExvb2t1cCkucmdiO1xcbiAgY29sb3IgPSBtaXgoY29sb3IsIGNvcnJlY3RlZCwgMC45KTtcXG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIDEuMCk7XFxuICB2ZWM0IHNjcmF0Y2hlcyA9IHRleHR1cmUyRCh0T3ZlcmxheSwgb3ZlcmxheVVWKTtcXG4gIHZlYzMgc2NyYXRjaEJsZW5kID0gZ2xfRnJhZ0NvbG9yLnJnYiArIHNjcmF0Y2hlcy5yZ2I7XFxuICBmbG9hdCBjZW50ZXIgPSBzbW9vdGhzdGVwKDAuMCwgMC42LCBsZW5ndGgodlV2IC0gMC41KSk7XFxuICBmbG9hdCBkaXJ0TWFwID0gc21vb3Roc3RlcCgwLjEsIDAuNCwgbHVtaW5hbmNlICogY2VudGVyKTtcXG4gIGdsX0ZyYWdDb2xvci5yZ2IgPSBtaXgoZ2xfRnJhZ0NvbG9yLnJnYiwgc2NyYXRjaEJsZW5kLCBkaXJ0TWFwKTtcXG59XCIsIFt7XCJuYW1lXCI6XCJvdmVybGF5UmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJyZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInRpY2tcIixcInR5cGVcIjpcImZsb2F0XCJ9LHtcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn0se1wibmFtZVwiOlwidExvb2t1cFwiLFwidHlwZVwiOlwic2FtcGxlcjJEXCJ9LHtcIm5hbWVcIjpcInRPdmVybGF5XCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn1dLCBbXSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKShzb3VyY2UpOyIsInZhciBnbHNsaWZ5ID0gcmVxdWlyZShcImdsc2xpZnlcIik7XG52YXIgc291cmNlID0gcmVxdWlyZShcImdsc2xpZnkvc2ltcGxlLWFkYXB0ZXIuanNcIikoXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIiwgXCJcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gc2FtcGxlcjJEIHREaWZmdXNlO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudm9pZCBtYWluKCkge1xcbiAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHREaWZmdXNlLCB2VXYpO1xcbn1cIiwgW3tcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn1dLCBbXSk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKShzb3VyY2UpOyIsInZhciBUSFJFRSA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlRIUkVFIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5USFJFRSA6IG51bGwpXG52YXIgbW9iaWxlID0gcmVxdWlyZSgnLi9pcy1tb2JpbGUnKVxuXG52YXIgbGluZUhlaWdodCA9IDIyXG52YXIgYmlnID0gMC43XG52YXIgc21hbGwgPSAwLjVcbnZhciBwYW5lbFdpZHRoID0gMjBcblxudmFyIG1vYmlsZVNjYWxlID0gbW9iaWxlID8gMC44IDogMVxuYmlnICo9IG1vYmlsZVNjYWxlXG5zbWFsbCAqPSBtb2JpbGVTY2FsZVxucGFuZWxXaWR0aCAqPSBtb2JpbGVTY2FsZVxubGluZUhlaWdodCAqPSBtb2JpbGVTY2FsZVxuXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgICBcbiAgICB7XG4gICAgICAgIG5hbWU6ICd0b25uZXMnLFxuICAgICAgICBwYW5lbHM6IFsge1xuICAgICAgICAgICAgLy8gb3JpZ2luOiBuZXcgVEhSRUUuVmVjdG9yMygxOCwgMTAsIDIpLFxuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnNSBtaWxsaW9uIHRvbm5lcycsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ2VzdGltYXRlZCBvaWwgc3BpbHQgaW4gUnVzc2lhIGVhY2ggeWVhcicsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWy0yLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwgXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIG9yaWdpbjogbmV3IFRIUkVFLlZlY3RvcjMoLTIwLCAxMCwgMiksXG4gICAgICAgICAgICB3aWR0aDogcGFuZWxXaWR0aCxcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJzYgbWlsbGlvbiB0b25uZXMnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdleHBlY3RlZCB5ZWFybHkgb3V0cHV0IG9mIHRoaXMgcGxhdGZvcm0nLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBcbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAndG9wJyxcbiAgICAgICAgcGFuZWxzOiBbIHtcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ1RlY2hub2xvZ2ljYWxseSBvdXRkYXRlZCcsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ3VzaW5nIHNlY29uZGhhbmQgY29tcG9uZW50cycsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWzAsIC1saW5lSGVpZ2h0LCAwXSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogcGFuZWxXaWR0aCxcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJyQzLjIgYmlsbGlvbiBvdmVyIGJ1ZGdldCcsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJzE4IHllYXJzIHRvIGNvbnN0cnVjdCcsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWzAsIC1saW5lSGVpZ2h0LCAwXSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9IF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ25hdHVyZScsXG4gICAgICAgIHBhbmVsczogWyB7XG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICc1MCBrbSBmcm9tIE5hdHVyZSByZXNlcnZlJywgc2l6ZTogYmlnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnTGVzcyB0aGFuIDIwaHJzIGZvciBvaWwgdG8gcmVhY2gnLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHBhbmVsV2lkdGgsXG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdDcnVjaWFsIGJyZWVkaW5nIGdyb3VuZHMnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdmb3Igd2FscnVzLCB3aGFsZXMgJiBwb2xhciBiZWFycycsIHNpemU6IHNtYWxsLCB0cmFuc2xhdGlvbjogWzAsIC1saW5lSGVpZ2h0LCAwXSB9LFxuICAgICAgICAgICAgXVxuICAgICAgICB9IF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3Jlc3BvbnNlJyxcbiAgICAgICAgcGFuZWxzOiBbIHtcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJ0xhcmdlIHNjYWxlIHNwaWxsIGVxdWlwbWVudCAnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICcxMDAwa20gKDMgZGF5cyBzYWlsaW5nKSBhd2F5Jywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFdpZHRoKjEuNSxcbiAgICAgICAgICAgIGxhYmVsczogW1xuICAgICAgICAgICAgICAgIHsgdGV4dDogJzE1IGJ1Y2tldHMgYW5kIDMgYXhlcycsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ2luY2x1ZGVkIGluIHByZXZpb3VzIHJlc3BvbnNlIHBsYW4nLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdzcGlsbCcsXG4gICAgICAgIHBhbmVsczogWyB7XG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdBcmN0aWMgT2lsIHNwaWxscycsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ2FyZSBjbG9zZSB0byBpbXBvc3NpYmxlIHRvIGNsZWFuIHVwJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFdpZHRoLFxuICAgICAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnT2Zmc2hvcmUgZHJpbGxpbmcgZm9yIGFyY3RpYyBvaWwnLCBzaXplOiBiaWcgfSxcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdzcGlsbHMgYXJlIHZpcnR1YWxseSBpbmV2aXRhYmxlJywgc2l6ZTogc21hbGwsIHRyYW5zbGF0aW9uOiBbMCwgLWxpbmVIZWlnaHQsIDBdIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgIH0gXVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnd2VhdGhlcicsXG4gICAgICAgIHBhbmVsczogWyB7XG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdBcyBjb2xkIGFzIC01MMKwYyAvIDEyMsKwZicsIHNpemU6IGJpZyB9LFxuICAgICAgICAgICAgICAgIHsgdGV4dDogJ3R3byB0aGlyZHMgb2YgdGhlIHllYXIgc3Vycm91bmRlZCBieSBpY2UnLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHBhbmVsV2lkdGgsXG4gICAgICAgICAgICBsYWJlbHM6IFtcbiAgICAgICAgICAgICAgICB7IHRleHQ6ICdQbGFndWVkIGJ5IGJhZCB3ZWF0aGVyJywgc2l6ZTogYmlnIH0sXG4gICAgICAgICAgICAgICAgeyB0ZXh0OiAnd2F2ZXMgYXMgaGlnaCBhcyAxMm0nLCBzaXplOiBzbWFsbCwgdHJhbnNsYXRpb246IFswLCAtbGluZUhlaWdodCwgMF0gfSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSBdXG4gICAgfSxcbl1cbiIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciBUd2Vlbk1heCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LlR3ZWVuTWF4IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbC5Ud2Vlbk1heCA6IG51bGwpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgICBpZiAoIVRIUkVFLk1PVVNFKVxuICAgICAgICBUSFJFRS5NT1VTRSA9IHsgTEVGVDogMCwgTUlERExFOiAxLCBSSUdIVDogMiB9O1xuXG4gICAgLyoqXG4gICAgICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAgICAgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gICAgICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAgICAgKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAgICAgKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gICAgICovXG4gICAgLypnbG9iYWwgVEhSRUUsIGNvbnNvbGUgKi9cblxuICAgIC8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLiBJdCBtYWludGFpbnNcbiAgICAvLyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBhcyArWSwgdW5saWtlIHRoZSBUcmFja2JhbGxDb250cm9scy4gVG91Y2ggb24gdGFibGV0IGFuZCBwaG9uZXMgaXNcbiAgICAvLyBzdXBwb3J0ZWQuXG4gICAgLy9cbiAgICAvLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4gICAgLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbiAgICAvLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcbiAgICAvL1xuICAgIC8vIFRoaXMgaXMgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvciAobW9zdCkgVHJhY2tiYWxsQ29udHJvbHMgdXNlZCBpbiBleGFtcGxlcy5cbiAgICAvLyBUaGF0IGlzLCBpbmNsdWRlIHRoaXMganMgZmlsZSBhbmQgd2hlcmV2ZXIgeW91IHNlZTpcbiAgICAvLyAgICAgIGNvbnRyb2xzID0gbmV3IFRIUkVFLlRyYWNrYmFsbENvbnRyb2xzKCBjYW1lcmEgKTtcbiAgICAvLyAgICAgIGNvbnRyb2xzLnRhcmdldC56ID0gMTUwO1xuICAgIC8vIFNpbXBsZSBzdWJzdGl0dXRlIFwiT3JiaXRDb250cm9sc1wiIGFuZCB0aGUgY29udHJvbCBzaG91bGQgd29yayBhcy1pcy5cblxuICAgIGZ1bmN0aW9uIE9yYml0Q29udHJvbHMoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuICAgICAgICAvLyBBUElcblxuICAgICAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgY29udHJvbCBvcmJpdHMgYXJvdW5kXG4gICAgICAgIC8vIGFuZCB3aGVyZSBpdCBwYW5zIHdpdGggcmVzcGVjdCB0by5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG4gICAgICAgIC8vIGNlbnRlciBpcyBvbGQsIGRlcHJlY2F0ZWQ7IHVzZSBcInRhcmdldFwiIGluc3RlYWRcbiAgICAgICAgdGhpcy5jZW50ZXIgPSB0aGlzLnRhcmdldDtcblxuICAgICAgICAvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHRoaXMubm9ab29tID0gZmFsc2U7XG4gICAgICAgIHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG4gICAgICAgIC8vIExpbWl0cyB0byBob3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dFxuICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gMDtcbiAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG4gICAgICAgIC8vIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG4gICAgICAgIHRoaXMubm9Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuICAgICAgICB0aGlzLm5vUGFuID0gZmFsc2U7XG4gICAgICAgIHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7IC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuICAgICAgICB0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cbiAgICAgICAgLy8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG4gICAgICAgIC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuICAgICAgICB0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG4gICAgICAgIHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuICAgICAgICAvLyBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuICAgICAgICB0aGlzLm5vS2V5cyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucGhpID0gMFxuICAgICAgICB0aGlzLnRoZXRhID0gMCBcblxuICAgICAgICAvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG4gICAgICAgIHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cbiAgICAgICAgdGhpcy5jb25zdHJhaW5EZWx0YSA9IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIC8vLy8vLy8vLy8vL1xuICAgICAgICAvLyBpbnRlcm5hbHNcblxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzO1xuXG4gICAgICAgIHZhciBFUFMgPSAwLjAwMDAwMTtcblxuICAgICAgICB2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuICAgICAgICB2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbiAgICAgICAgdmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cbiAgICAgICAgdmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuICAgICAgICB2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cbiAgICAgICAgdmFyIHBoaURlbHRhID0gMDtcbiAgICAgICAgdmFyIHRoZXRhRGVsdGEgPSAwO1xuICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICB2YXIgcGFuID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuICAgICAgICB2YXIgU1RBVEUgPSB7IE5PTkUgOiAtMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuICAgICAgICB2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIC8vIGZvciByZXNldFxuXG4gICAgICAgIHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblxuICAgICAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblxuICAgICAgICB2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcbiAgICAgICAgdmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuICAgICAgICAvLyBldmVudHNcblxuICAgICAgICB2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG4gICAgICAgIHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnfTtcbiAgICAgICAgdmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJ307XG5cbiAgICAgICAgdGhpcy5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZXRhRGVsdGEgLT0gYW5nbGU7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdGF0ZVVwID0gZnVuY3Rpb24gKCBhbmdsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBhbmdsZSA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBnZXRBdXRvUm90YXRpb25BbmdsZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBoaURlbHRhIC09IGFuZ2xlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIGxlZnRcbiAgICAgICAgdGhpcy5wYW5MZWZ0ID0gZnVuY3Rpb24gKCBkaXN0YW5jZSApIHtcblxuICAgICAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xuXG4gICAgICAgICAgICAvLyBnZXQgWCBjb2x1bW4gb2YgbWF0cml4XG4gICAgICAgICAgICBwYW5PZmZzZXQuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICk7XG4gICAgICAgICAgICBwYW5PZmZzZXQubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGFuLmFkZCggcGFuT2Zmc2V0ICk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBwYXNzIGluIGRpc3RhbmNlIGluIHdvcmxkIHNwYWNlIHRvIG1vdmUgdXBcbiAgICAgICAgdGhpcy5wYW5VcCA9IGZ1bmN0aW9uICggZGlzdGFuY2UgKSB7XG5cbiAgICAgICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcblxuICAgICAgICAgICAgLy8gZ2V0IFkgY29sdW1uIG9mIG1hdHJpeFxuICAgICAgICAgICAgcGFuT2Zmc2V0LnNldCggdGVbIDQgXSwgdGVbIDUgXSwgdGVbIDYgXSApO1xuICAgICAgICAgICAgcGFuT2Zmc2V0Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYW4uYWRkKCBwYW5PZmZzZXQgKTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gcGFzcyBpbiB4LHkgb2YgY2hhbmdlIGRlc2lyZWQgaW4gcGl4ZWwgc3BhY2UsXG4gICAgICAgIC8vIHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuICAgICAgICB0aGlzLnBhbiA9IGZ1bmN0aW9uICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLm9iamVjdC5mb3YgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIC8vIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb3NpdGlvbi5jbG9uZSgpLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG4gICAgICAgICAgICAgICAgdGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG4gICAgICAgICAgICAgICAgLy8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuICAgICAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG4gICAgICAgICAgICAgICAgc2NvcGUucGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdC50b3AgIT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIC8vIG9ydGhvZ3JhcGhpY1xuICAgICAgICAgICAgICAgIHNjb3BlLnBhbkxlZnQoIGRlbHRhWCAqIChzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCkgLyBlbGVtZW50LmNsaWVudFdpZHRoICk7XG4gICAgICAgICAgICAgICAgc2NvcGUucGFuVXAoIGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBlbGVtZW50LmNsaWVudEhlaWdodCApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG9yIHBlcnNwZWN0aXZlXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb2xseUluID0gZnVuY3Rpb24gKCBkb2xseVNjYWxlICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvbGx5U2NhbGUgPT09IHVuZGVmaW5lZCApIHtcblxuICAgICAgICAgICAgICAgIGRvbGx5U2NhbGUgPSBnZXRab29tU2NhbGUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb2xseU91dCA9IGZ1bmN0aW9uICggZG9sbHlTY2FsZSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2xseVNjYWxlID09PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBkb2xseVNjYWxlID0gZ2V0Wm9vbVNjYWxlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcblxuICAgICAgICAgICAgLy8gLy8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuICAgICAgICAgICAgc2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiBzY29wZS5jb25zdHJhaW5EZWx0YS54IC8gd2luZG93LmlubmVyV2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICAvLyAvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcbiAgICAgICAgICAgIHNjb3BlLnJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHNjb3BlLmNvbnN0cmFpbkRlbHRhLnkgLyB3aW5kb3cuaW5uZXJIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICBvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHRoaXMudGFyZ2V0ICk7XG5cbiAgICAgICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuICAgICAgICAgICAgb2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cbiAgICAgICAgICAgIHZhciB0aGV0YSA9IE1hdGguYXRhbjIoIG9mZnNldC54LCBvZmZzZXQueiApO1xuXG4gICAgICAgICAgICAvLyBhbmdsZSBmcm9tIHktYXhpc1xuXG4gICAgICAgICAgICB2YXIgcGhpID0gTWF0aC5hdGFuMiggTWF0aC5zcXJ0KCBvZmZzZXQueCAqIG9mZnNldC54ICsgb2Zmc2V0LnogKiBvZmZzZXQueiApLCBvZmZzZXQueSApO1xuXG4gICAgICAgICAgICBpZiAoIHRoaXMuYXV0b1JvdGF0ZSApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoZXRhICs9IHRoZXRhRGVsdGE7XG4gICAgICAgICAgICBwaGkgKz0gcGhpRGVsdGE7XG5cbiAgICAgICAgICAgIC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG4gICAgICAgICAgICBwaGkgPSBNYXRoLm1heCggdGhpcy5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggdGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkgKSApO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlIEVQUyBhbmQgUEktRVBTXG4gICAgICAgICAgICBwaGkgPSBNYXRoLm1heCggRVBTLCBNYXRoLm1pbiggTWF0aC5QSSAtIEVQUywgcGhpICkgKTtcblxuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IG9mZnNldC5sZW5ndGgoKSAqIHNjYWxlO1xuXG4gICAgICAgICAgICAvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuICAgICAgICAgICAgcmFkaXVzID0gTWF0aC5tYXgoIHRoaXMubWluRGlzdGFuY2UsIE1hdGgubWluKCB0aGlzLm1heERpc3RhbmNlLCByYWRpdXMgKSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmFkZCggcGFuICk7XG5cbiAgICAgICAgICAgIHNjb3BlLnBoaSA9IHBoaVxuICAgICAgICAgICAgc2NvcGUudGhldGEgPSB0aGV0YVxuXG4gICAgICAgICAgICBvZmZzZXQueCA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguc2luKCB0aGV0YSApO1xuICAgICAgICAgICAgb2Zmc2V0LnkgPSByYWRpdXMgKiBNYXRoLmNvcyggcGhpICk7XG4gICAgICAgICAgICBvZmZzZXQueiA9IHJhZGl1cyAqIE1hdGguc2luKCBwaGkgKSAqIE1hdGguY29zKCB0aGV0YSApO1xuXG4gICAgICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2VcbiAgICAgICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cbiAgICAgICAgICAgIHBvc2l0aW9uLmNvcHkoIHRoaXMudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuICAgICAgICAgICAgdGhpcy5vYmplY3QubG9va0F0KCB0aGlzLnRhcmdldCApO1xuXG4gICAgICAgICAgICB0aGV0YURlbHRhID0gMDtcbiAgICAgICAgICAgIHBoaURlbHRhID0gMDtcbiAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgICAgIHBhbi5zZXQoIDAsIDAsIDAgKTtcblxuICAgICAgICAgICAgaWYgKCBsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHRoaXMub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cbiAgICAgICAgICAgICAgICBsYXN0UG9zaXRpb24uY29weSggdGhpcy5vYmplY3QucG9zaXRpb24gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LmNvcHkoIHRoaXMudGFyZ2V0MCApO1xuICAgICAgICAgICAgdGhpcy5vYmplY3QucG9zaXRpb24uY29weSggdGhpcy5wb3NpdGlvbjAgKTtcblxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuICAgICAgICAgICAgaWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGlmICggZXZlbnQuYnV0dG9uID09PSAwICkge1xuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuICAgICAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IDEgKSB7XG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG4gICAgICAgICAgICAgICAgZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSAyICkge1xuICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlBBTjtcblxuICAgICAgICAgICAgICAgIHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuICAgICAgICAgICAgc2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1JvdGF0ZSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcbiAgICAgICAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICBzY29wZS5jb25zdHJhaW5EZWx0YS54ID0gcm90YXRlRGVsdGEueDtcbiAgICAgICAgICAgICAgICBzY29wZS5jb25zdHJhaW5EZWx0YS55ID0gcm90YXRlRGVsdGEueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBUd2Vlbk1heC5raWxsVHdlZW5zT2Yoc2NvcGUuY29uc3RyYWluRGVsdGEpO1xuICAgICAgICAgICAgICAgIFR3ZWVuTWF4LnRvKHNjb3BlLmNvbnN0cmFpbkRlbHRhLCAwLjUwLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLjBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuICAgICAgICAgICAgICAgIGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseUluKCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5T3V0KCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgcGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuICAgICAgICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuICAgICAgICAgICAgICAgIHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlVXAoIC8qIGV2ZW50ICovICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcbiAgICAgICAgICAgIHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG4gICAgICAgICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLm5vWm9vbSA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICB2YXIgZGVsdGEgPSAwO1xuXG4gICAgICAgICAgICBpZiAoIGV2ZW50LndoZWVsRGVsdGEgIT09IHVuZGVmaW5lZCApIHsgLy8gV2ViS2l0IC8gT3BlcmEgLyBFeHBsb3JlciA5XG5cbiAgICAgICAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGE7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGV2ZW50LmRldGFpbCAhPT0gdW5kZWZpbmVkICkgeyAvLyBGaXJlZm94XG5cbiAgICAgICAgICAgICAgICBkZWx0YSA9IC0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggZGVsdGEgPiAwICkge1xuXG4gICAgICAgICAgICAgICAgc2NvcGUuZG9sbHlPdXQoKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUubm9LZXlzID09PSB0cnVlIHx8IHNjb3BlLm5vUGFuID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY29wZS5rZXlzLlVQOlxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG91Y2hzdGFydCggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9Sb3RhdGUgPT09IHRydWUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cbiAgICAgICAgICAgICAgICAgICAgcm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9ab29tID09PSB0cnVlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcbiAgICAgICAgICAgICAgICAgICAgZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1BhbiA9PT0gdHJ1ZSApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuICAgICAgICAgICAgICAgICAgICBwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0b3VjaG1vdmUoIGV2ZW50ICkge1xuXG4gICAgICAgICAgICBpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIHNjb3BlLm5vUm90YXRlID09PSB0cnVlICkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgcm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcbiAgICAgICAgICAgICAgICAgICAgcm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcbiAgICAgICAgICAgICAgICAgICAgLy8gc2NvcGUucm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuICAgICAgICAgICAgICAgICAgICAvLyBzY29wZS5yb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY29uc3RyYWluRGVsdGEueCA9IHJvdGF0ZURlbHRhLng7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnN0cmFpbkRlbHRhLnkgPSByb3RhdGVEZWx0YS55O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgVHdlZW5NYXgua2lsbFR3ZWVuc09mKHNjb3BlLmNvbnN0cmFpbkRlbHRhKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW5NYXgudG8oc2NvcGUuY29uc3RyYWluRGVsdGEsIDAuNDUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiAwLjBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBzY29wZS5ub1pvb20gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuICAgICAgICAgICAgICAgICAgICBkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5kb2xseU91dCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmRvbGx5SW4oKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICggc2NvcGUubm9QYW4gPT09IHRydWUgKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICBwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuICAgICAgICAgICAgICAgICAgICBwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuICAgICAgICAgICAgICAgICAgICBwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuICAgICAgICAgICAgICAgICAgICBzY29wZS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB0b3VjaGVuZCggLyogZXZlbnQgKi8gKSB7XG5cbiAgICAgICAgICAgIGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cbiAgICAgICAgICAgIHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG4gICAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBmdW5jdGlvbiAoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB9LCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7IC8vIGZpcmVmb3hcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCBmYWxzZSApO1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgdG91Y2hlbmQsIGZhbHNlICk7XG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgdG91Y2htb3ZlLCBmYWxzZSApO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuICAgICAgICAvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcblxuICAgIH07XG5cbiAgICBpbmhlcml0cyhPcmJpdENvbnRyb2xzLCBUSFJFRS5FdmVudERpc3BhdGNoZXIpXG4gICAgcmV0dXJuIE9yYml0Q29udHJvbHNcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG51bXR5cGUobnVtLCBkZWYpIHtcblx0cmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInXG5cdFx0PyBudW0gXG5cdFx0OiAodHlwZW9mIGRlZiA9PT0gJ251bWJlcicgPyBkZWYgOiAwKVxufSIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpcy1hcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciBrTWF4TGVuZ3RoID0gMHgzZmZmZmZmZlxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqIC0gSW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLlxuICogICBGaXJlZm94IDQtMjkgbGFja2VkIHN1cHBvcnQsIGZpeGVkIGluIEZpcmVmb3ggMzArLlxuICogICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuICpcbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5IHdpbGxcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IHdpbGwgd29yayBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIG5ldyBVaW50OEFycmF5KDEpLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IHN1YmplY3QgPiAwID8gc3ViamVjdCA+Pj4gMCA6IDBcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnKVxuICAgICAgc3ViamVjdCA9IGJhc2U2NGNsZWFuKHN1YmplY3QpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgc3ViamVjdCAhPT0gbnVsbCkgeyAvLyBhc3N1bWUgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgICBpZiAoc3ViamVjdC50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KHN1YmplY3QuZGF0YSkpXG4gICAgICBzdWJqZWN0ID0gc3ViamVjdC5kYXRhXG4gICAgbGVuZ3RoID0gK3N1YmplY3QubGVuZ3RoID4gMCA/IE1hdGguZmxvb3IoK3N1YmplY3QubGVuZ3RoKSA6IDBcbiAgfSBlbHNlXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcnKVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IGtNYXhMZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9ICgoc3ViamVjdFtpXSAlIDI1NikgKyAyNTYpICUgMjU2XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbiAmJiBhW2ldID09PSBiW2ldOyBpKyspIHt9XG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3RbLCBsZW5ndGhdKScpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCA+Pj4gMVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLy8gcHJlLXNldCBmb3IgdmFsdWVzIHRoYXQgbWF5IGV4aXN0IGluIHRoZSBmdXR1cmVcbkJ1ZmZlci5wcm90b3R5cGUubGVuZ3RoID0gdW5kZWZpbmVkXG5CdWZmZXIucHJvdG90eXBlLnBhcmVudCA9IHVuZGVmaW5lZFxuXG4vLyB0b1N0cmluZyhlbmNvZGluZywgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPT09IEluZmluaXR5ID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KVxuICAgICAgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4oYnl0ZSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgsIDIpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IGJpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlbjtcbiAgICBpZiAoc3RhcnQgPCAwKVxuICAgICAgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApXG4gICAgICBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpXG4gICAgZW5kID0gc3RhcnRcblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKVxuICAgIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYnVmZmVyIG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBpZiAodGFyZ2V0X3N0YXJ0IDwgMCB8fCB0YXJnZXRfc3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gdXRmOFRvQnl0ZXModmFsdWUudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLmNvbnN0cnVjdG9yID0gQnVmZmVyXG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS16XS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3Rikge1xuICAgICAgYnl0ZUFycmF5LnB1c2goYilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKykge1xuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoLCB1bml0U2l6ZSkge1xuICBpZiAodW5pdFNpemUpIGxlbmd0aCAtPSBsZW5ndGggJSB1bml0U2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG4iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iLCJcbi8qKlxuICogaXNBcnJheVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiB0b1N0cmluZ1xuICovXG5cbnZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBgdmFsYFxuICogaXMgYW4gYXJyYXkuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgaXNBcnJheShbXSk7XG4gKiAgICAgICAgLy8gPiB0cnVlXG4gKiAgICAgICAgaXNBcnJheShhcmd1bWVudHMpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqICAgICAgICBpc0FycmF5KCcnKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKlxuICogQHBhcmFtIHttaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiAhISB2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PSBzdHIuY2FsbCh2YWwpO1xufTtcbiIsInZhciBpc0dMID0gcmVxdWlyZSgnaXMtd2ViZ2wtY29udGV4dCcpO1xudmFyIGdldEdMID0gcmVxdWlyZSgnd2ViZ2wtY29udGV4dCcpO1xudmFyIGRlYm91bmNlID0gcmVxdWlyZSgnZGVib3VuY2UnKTtcbnZhciBhZGRFdmVudCA9IHJlcXVpcmUoJ2FkZC1ldmVudC1saXN0ZW5lcicpO1xuXG5mdW5jdGlvbiBpc0NhbnZhc0NvbnRleHQob2JqKSB7XG4gICAgdmFyIGN0eDJkID0gdHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHJldHVybiBvYmogJiYgKGN0eDJkIHx8IGlzR0wob2JqKSk7XG59XG5cbmZ1bmN0aW9uIENhbnZhc0FwcChyZW5kZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2FudmFzQXBwKSlcbiAgICAgICAgcmV0dXJuIG5ldyBDYW52YXNBcHAocmVuZGVyLCBvcHRpb25zKTtcblxuICAgIC8vYWxsb3cgb3B0aW9ucyB0byBiZSBwYXNzZWQgYXMgZmlyc3QgYXJndW1lbnRcbiAgICBpZiAodHlwZW9mIHJlbmRlciA9PT0gJ29iamVjdCcgJiYgcmVuZGVyKSB7XG4gICAgICAgIG9wdGlvbnMgPSByZW5kZXI7XG4gICAgICAgIHJlbmRlciA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVuZGVyID0gdHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJyA/IHJlbmRlciA6IG9wdGlvbnMub25SZW5kZXI7XG5cbiAgICBvcHRpb25zID0gb3B0aW9uc3x8e307XG4gICAgb3B0aW9ucy5yZXRpbmEgPSB0eXBlb2Ygb3B0aW9ucy5yZXRpbmEgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5yZXRpbmEgOiB0cnVlO1xuICAgIFxuICAgIHZhciBoYXNXaWR0aCA9IHR5cGVvZiBvcHRpb25zLndpZHRoID09PSBcIm51bWJlclwiLCBcbiAgICAgICAgaGFzSGVpZ2h0ID0gdHlwZW9mIG9wdGlvbnMuaGVpZ2h0ID09PSBcIm51bWJlclwiO1xuXG4gICAgLy9pZiBlaXRoZXIgd2lkdGggb3IgaGVpZ2h0IGlzIHNwZWNpZmllZCwgZG9uJ3QgYXV0by1yZXNpemUgdG8gdGhlIHdpbmRvdy4uLlxuICAgIGlmIChoYXNXaWR0aCB8fCBoYXNIZWlnaHQpIFxuICAgICAgICBvcHRpb25zLmlnbm9yZVJlc2l6ZSA9IHRydWU7XG5cbiAgICBvcHRpb25zLndpZHRoID0gaGFzV2lkdGggPyBvcHRpb25zLndpZHRoIDogd2luZG93LmlubmVyV2lkdGg7XG4gICAgb3B0aW9ucy5oZWlnaHQgPSBoYXNIZWlnaHQgPyBvcHRpb25zLmhlaWdodCA6IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHZhciBEUFIgPSBvcHRpb25zLnJldGluYSA/ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MSkgOiAxOyBcblxuICAgIC8vc2V0dXAgdGhlIGNhbnZhc1xuICAgIHZhciBjYW52YXMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGF0dHJpYnMgPSBvcHRpb25zLmNvbnRleHRBdHRyaWJ1dGVzfHx7fTtcblxuICAgIHRoaXMuaXNXZWJHTCA9IGZhbHNlO1xuXG4gICAgLy9pZiB1c2VyIHByb3ZpZGVkIGEgY29udGV4dCBvYmplY3RcbiAgICBpZiAoaXNDYW52YXNDb250ZXh0KG9wdGlvbnMuY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dDtcbiAgICAgICAgY2FudmFzID0gY29udGV4dC5jYW52YXM7XG4gICAgfVxuXG4gICAgLy9vdGhlcndpc2UgYWxsb3cgZm9yIGEgc3RyaW5nIHRvIHNldCBvbmUgdXBcbiAgICBpZiAoIWNhbnZhcylcbiAgICAgICAgY2FudmFzID0gb3B0aW9ucy5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBEUFI7XG4gICAgY2FudmFzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICogRFBSO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRleHQgPT09IFwid2ViZ2xcIiB8fCBvcHRpb25zLmNvbnRleHQgPT09IFwiZXhwZXJpbWVudGFsLXdlYmdsXCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBnZXRHTCh7IGNhbnZhczogY2FudmFzLCBhdHRyaWJ1dGVzOiBhdHRyaWJzIH0pO1xuICAgICAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgXCJXZWJHTCBDb250ZXh0IE5vdCBTdXBwb3J0ZWQgLS0gdHJ5IGVuYWJsaW5nIGl0IG9yIHVzaW5nIGEgZGlmZmVyZW50IGJyb3dzZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChvcHRpb25zLmNvbnRleHR8fFwiMmRcIiwgYXR0cmlicyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlzV2ViR0wgPSBpc0dMKGNvbnRleHQpO1xuXG4gICAgaWYgKG9wdGlvbnMucmV0aW5hKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKyAncHgnO1xuICAgIH1cblxuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm9uUmVzaXplID0gb3B0aW9ucy5vblJlc2l6ZTtcbiAgICB0aGlzLl9EUFIgPSBEUFI7XG4gICAgdGhpcy5fcmV0aW5hID0gb3B0aW9ucy5yZXRpbmE7XG4gICAgdGhpcy5fb25jZSA9IG9wdGlvbnMub25jZTtcbiAgICB0aGlzLl9pZ25vcmVSZXNpemUgPSBvcHRpb25zLmlnbm9yZVJlc2l6ZTtcbiAgICB0aGlzLl9sYXN0RnJhbWUgPSBudWxsO1xuICAgIHRoaXMuX3RoZW4gPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubWF4RGVsdGFUaW1lID0gdHlwZW9mIG9wdGlvbnMubWF4RGVsdGFUaW1lID09PSAnbnVtYmVyJyA/IG9wdGlvbnMubWF4RGVsdGFUaW1lIDogMTAwMC8yNDtcblxuICAgIC8vRlBTIGNvdW50ZXJcbiAgICB0aGlzLmZwcyA9IDYwO1xuICAgIHRoaXMuX2ZyYW1lcyA9IDA7XG4gICAgdGhpcy5fcHJldlRpbWUgPSB0aGlzLl90aGVuO1xuXG4gICAgaWYgKCF0aGlzLl9pZ25vcmVSZXNpemUpIHtcbiAgICAgICAgb3B0aW9ucy5yZXNpemVEZWJvdW5jZSA9IHR5cGVvZiBvcHRpb25zLnJlc2l6ZURlYm91bmNlID09PSAnbnVtYmVyJ1xuICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbnMucmVzaXplRGVib3VuY2UgOiA1MDtcbiAgICAgICAgYWRkRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCBkZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIG9wdGlvbnMucmVzaXplRGVib3VuY2UsIGZhbHNlKSk7XG5cbiAgICAgICAgYWRkRXZlbnQod2luZG93LCBcIm9yaWVudGF0aW9uY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aGlzLm9uUmVuZGVyID0gcmVuZGVyLmJpbmQodGhpcyk7ICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9kdW1teSByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgdGhpcy5vblJlbmRlciA9IGZ1bmN0aW9uIChjb250ZXh0LCB3aWR0aCwgaGVpZ2h0LCBkdCkgeyB9O1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyT25jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdmFyIGR0ID0gTWF0aC5taW4odGhpcy5tYXhEZWx0YVRpbWUsIChub3ctdGhpcy5fdGhlbikpO1xuXG4gICAgICAgIHRoaXMuX2ZyYW1lcysrO1xuICAgICAgICBpZiAobm93ID4gdGhpcy5fcHJldlRpbWUgKyAxMDAwKSB7XG4gICAgICAgICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoKHRoaXMuX2ZyYW1lcyAqIDEwMDApIC8gKG5vdyAtIHRoaXMuX3ByZXZUaW1lKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ByZXZUaW1lID0gbm93O1xuICAgICAgICAgICAgdGhpcy5fZnJhbWVzID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc1dlYkdMKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuX0RQUiwgdGhpcy5fRFBSKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC52aWV3cG9ydCgwLCAwLCB0aGlzLndpZHRoICogdGhpcy5fRFBSLCB0aGlzLmhlaWdodCAqIHRoaXMuX0RQUik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMub25SZW5kZXIodGhpcy5jb250ZXh0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgZHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc1dlYkdMKVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcblxuICAgICAgICB0aGlzLl90aGVuID0gbm93O1xuICAgIH07XG5cbiAgICB0aGlzLl9yZW5kZXJIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5fb25jZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFzdEZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlbmRlckhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJPbmNlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uUmVhZHkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvcHRpb25zLm9uUmVhZHkuY2FsbCh0aGlzLCBjb250ZXh0LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzQXBwLnByb3RvdHlwZSwgJ3JldGluYUVuYWJsZWQnLCB7XG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdGhpcy5fcmV0aW5hID0gdjtcbiAgICAgICAgdGhpcy5fRFBSID0gdGhpcy5fcmV0aW5hID8gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSA6IDE7XG4gICAgICAgIHRoaXMucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JldGluYTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENhbnZhc0FwcC5wcm90b3R5cGUsICdkZXZpY2VXaWR0aCcsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5fRFBSO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ2FudmFzQXBwLnByb3RvdHlwZSwgJ2RldmljZUhlaWdodCcsIHtcblxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMuX0RQUjtcbiAgICB9XG59KTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5yZXNldEZQUyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZyYW1lcyA9IDA7XG4gICAgdGhpcy5fcHJldlRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuX3RoZW4gPSB0aGlzLl9wcmV2VGltZTtcbiAgICB0aGlzLmZwcyA9IDYwO1xufTtcblxuQ2FudmFzQXBwLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBcbiAgICBpZiAodGhpcy5fbGFzdEZyYW1lKSBcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGFzdEZyYW1lKTtcblxuICAgIC8vcmVzZXQgRlBTIGNvdW50ZXJcbiAgICB0aGlzLnJlc2V0RlBTKCk7XG5cbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuX2xhc3RGcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9yZW5kZXJIYW5kbGVyKTtcbn07XG5cbkNhbnZhc0FwcC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9sYXN0RnJhbWUpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fbGFzdEZyYW1lKTtcbiAgICAgICAgdGhpcy5fbGFzdEZyYW1lID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG59O1xuXG5DYW52YXNBcHAucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuX0RQUjtcbiAgICBjYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLl9EUFI7XG5cbiAgICBpZiAodGhpcy5fcmV0aW5hKSB7XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xuICAgICAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyAncHgnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vbmNlKVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fcmVuZGVySGFuZGxlcik7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9uUmVzaXplID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRoaXMub25SZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNBcHA7IiwiYWRkRXZlbnRMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lclxuYWRkRXZlbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lclxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEV2ZW50TGlzdGVuZXJcblxudmFyIEV2ZW50cyA9IG51bGxcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICBFdmVudHMgPSBFdmVudHMgfHwgKFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIgP1xuICAgIHthZGQ6IHN0ZEF0dGFjaCwgcm06IHN0ZERldGFjaH0gOlxuICAgIHthZGQ6IG9sZElFQXR0YWNoLCBybTogb2xkSUVEZXRhY2h9XG4gIClcbiAgXG4gIHJldHVybiBFdmVudHMuYWRkKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIEV2ZW50cyA9IEV2ZW50cyB8fCAoXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciA/XG4gICAge2FkZDogc3RkQXR0YWNoLCBybTogc3RkRGV0YWNofSA6XG4gICAge2FkZDogb2xkSUVBdHRhY2gsIHJtOiBvbGRJRURldGFjaH1cbiAgKVxuICBcbiAgcmV0dXJuIEV2ZW50cy5ybShlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gc3RkQXR0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gc3RkRGV0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSlcbn1cblxuZnVuY3Rpb24gb2xkSUVBdHRhY2goZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgaWYodXNlQ2FwdHVyZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHVzZUNhcHR1cmUgaW4gb2xkSUUnKVxuICB9XG5cbiAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpXG59XG5cbmZ1bmN0aW9uIG9sZElFRGV0YWNoKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKVxufVxuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIG5vdyA9IHJlcXVpcmUoJ2RhdGUtbm93Jyk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuICogYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuICogTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4gKiBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuICpcbiAqIEBzb3VyY2UgdW5kZXJzY29yZS5qc1xuICogQHNlZSBodHRwOi8vdW5zY3JpcHRhYmxlLmNvbS8yMDA5LzAzLzIwL2RlYm91bmNpbmctamF2YXNjcmlwdC1tZXRob2RzL1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gd3JhcFxuICogQHBhcmFtIHtOdW1iZXJ9IHRpbWVvdXQgaW4gbXMgKGAxMDBgKVxuICogQHBhcmFtIHtCb29sZWFufSB3aGV0aGVyIHRvIGV4ZWN1dGUgYXQgdGhlIGJlZ2lubmluZyAoYGZhbHNlYClcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBub3coKSAtIHRpbWVzdGFtcDtcblxuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID4gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHRpbWVzdGFtcCA9IG5vdygpO1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGlmICghdGltZW91dCkgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBEYXRlLm5vdyB8fCBub3dcblxuZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjdHgpIHtcblx0aWYgKCFjdHgpIHJldHVybiBmYWxzZVxuXHR2YXIgZ2wgPSBjdHhcblx0Ly9jb21wYXRpYmlsaXR5IHdpdGggQ2hyb21lIFdlYkdMIEluc3BlY3RvciBBZGRvblxuXHRpZiAodHlwZW9mIGN0eC5yYXdnbCAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0Z2wgPSBjdHgucmF3Z2xcblx0aWYgKHR5cGVvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgIT09ICd1bmRlZmluZWQnICYmIGdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KVxuXHRcdHJldHVybiB0cnVlXG5cdHJldHVybiBmYWxzZVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0cykge1xuICAgIG9wdHMgPSBvcHRzfHx7fTtcbiAgICB2YXIgY2FudmFzID0gb3B0cy5jYW52YXMgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBpZiAodHlwZW9mIG9wdHMud2lkdGggPT09IFwibnVtYmVyXCIpXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdHMud2lkdGg7XG4gICAgaWYgKHR5cGVvZiBvcHRzLmhlaWdodCA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IG9wdHMuaGVpZ2h0O1xuICAgIFxuICAgIHZhciBhdHRyaWJzID0gKG9wdHMuYXR0cmlidXRlcyB8fCBvcHRzLmF0dHJpYnMgfHwge30pO1xuICAgIHRyeSB7XG4gICAgICAgIGdsID0gKGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcsIGF0dHJpYnMpIHx8IGNhbnZhcy5nZXRDb250ZXh0KCdleHBlcmltZW50YWwtd2ViZ2wnLCBhdHRyaWJzKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBnbCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBnbDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFtcFxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiA8IG1heFxuICAgID8gKHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZSlcbiAgICA6ICh2YWx1ZSA8IG1heCA/IG1heCA6IHZhbHVlID4gbWluID8gbWluIDogdmFsdWUpXG59XG4iLCIvKiFcbiAgKiBkb21yZWFkeSAoYykgRHVzdGluIERpYXogMjAxNCAtIExpY2Vuc2UgTUlUXG4gICovXG4hZnVuY3Rpb24gKG5hbWUsIGRlZmluaXRpb24pIHtcblxuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSB0aGlzW25hbWVdID0gZGVmaW5pdGlvbigpXG5cbn0oJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBmbnMgPSBbXSwgbGlzdGVuZXJcbiAgICAsIGRvYyA9IGRvY3VtZW50XG4gICAgLCBoYWNrID0gZG9jLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbFxuICAgICwgZG9tQ29udGVudExvYWRlZCA9ICdET01Db250ZW50TG9hZGVkJ1xuICAgICwgbG9hZGVkID0gKGhhY2sgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoZG9jLnJlYWR5U3RhdGUpXG5cblxuICBpZiAoIWxvYWRlZClcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoZG9tQ29udGVudExvYWRlZCwgbGlzdGVuZXIpXG4gICAgbG9hZGVkID0gMVxuICAgIHdoaWxlIChsaXN0ZW5lciA9IGZucy5zaGlmdCgpKSBsaXN0ZW5lcigpXG4gIH0pXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIGxvYWRlZCA/IGZuKCkgOiBmbnMucHVzaChmbilcbiAgfVxuXG59KTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmZ1bmN0aW9uIGR1cGVfYXJyYXkoY291bnQsIHZhbHVlLCBpKSB7XG4gIHZhciBjID0gY291bnRbaV18MFxuICBpZihjIDw9IDApIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGMpLCBqXG4gIGlmKGkgPT09IGNvdW50Lmxlbmd0aC0xKSB7XG4gICAgZm9yKGo9MDsgajxjOyArK2opIHtcbiAgICAgIHJlc3VsdFtqXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvcihqPTA7IGo8YzsgKytqKSB7XG4gICAgICByZXN1bHRbal0gPSBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgaSsxKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGR1cGVfbnVtYmVyKGNvdW50LCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0LCBpXG4gIHJlc3VsdCA9IG5ldyBBcnJheShjb3VudClcbiAgZm9yKGk9MDsgaTxjb3VudDsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gdmFsdWVcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGR1cGUoY291bnQsIHZhbHVlKSB7XG4gIGlmKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhbHVlID0gMFxuICB9XG4gIHN3aXRjaCh0eXBlb2YgY291bnQpIHtcbiAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICBpZihjb3VudCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGR1cGVfbnVtYmVyKGNvdW50fDAsIHZhbHVlKVxuICAgICAgfVxuICAgIGJyZWFrXG4gICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgaWYodHlwZW9mIChjb3VudC5sZW5ndGgpID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBkdXBlX2FycmF5KGNvdW50LCB2YWx1ZSwgMClcbiAgICAgIH1cbiAgICBicmVha1xuICB9XG4gIHJldHVybiBbXVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGR1cGUiLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGlkZW50aXR5IG1hdDRcbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgdmFyIG91dCA9IG5ldyBGbG9hdDMyQXJyYXkoMTYpO1xuICAgIG91dFswXSA9IDE7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzRdID0gMDtcbiAgICBvdXRbNV0gPSAxO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzEwXSA9IDE7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gICAgb3V0WzE1XSA9IDE7XG4gICAgcmV0dXJuIG91dDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcblxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgICBvdXRbMF0gPSAxO1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzVdID0gMTtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gICAgb3V0WzhdID0gMDtcbiAgICBvdXRbOV0gPSAwO1xuICAgIG91dFsxMF0gPSAxO1xuICAgIG91dFsxMV0gPSAwO1xuICAgIG91dFsxMl0gPSAwO1xuICAgIG91dFsxM10gPSAwO1xuICAgIG91dFsxNF0gPSAwO1xuICAgIG91dFsxNV0gPSAxO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gbXVsdGlwbHk7XG5cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NCdzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHttYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5mdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgICB2YXIgYTAwID0gYVswXSwgYTAxID0gYVsxXSwgYTAyID0gYVsyXSwgYTAzID0gYVszXSxcbiAgICAgICAgYTEwID0gYVs0XSwgYTExID0gYVs1XSwgYTEyID0gYVs2XSwgYTEzID0gYVs3XSxcbiAgICAgICAgYTIwID0gYVs4XSwgYTIxID0gYVs5XSwgYTIyID0gYVsxMF0sIGEyMyA9IGFbMTFdLFxuICAgICAgICBhMzAgPSBhWzEyXSwgYTMxID0gYVsxM10sIGEzMiA9IGFbMTRdLCBhMzMgPSBhWzE1XTtcblxuICAgIC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuICAgIHZhciBiMCAgPSBiWzBdLCBiMSA9IGJbMV0sIGIyID0gYlsyXSwgYjMgPSBiWzNdOyAgXG4gICAgb3V0WzBdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxXSA9IGIwKmEwMSArIGIxKmExMSArIGIyKmEyMSArIGIzKmEzMTtcbiAgICBvdXRbMl0gPSBiMCphMDIgKyBiMSphMTIgKyBiMiphMjIgKyBiMyphMzI7XG4gICAgb3V0WzNdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzRdOyBiMSA9IGJbNV07IGIyID0gYls2XTsgYjMgPSBiWzddO1xuICAgIG91dFs0XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbNV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzZdID0gYjAqYTAyICsgYjEqYTEyICsgYjIqYTIyICsgYjMqYTMyO1xuICAgIG91dFs3XSA9IGIwKmEwMyArIGIxKmExMyArIGIyKmEyMyArIGIzKmEzMztcblxuICAgIGIwID0gYls4XTsgYjEgPSBiWzldOyBiMiA9IGJbMTBdOyBiMyA9IGJbMTFdO1xuICAgIG91dFs4XSA9IGIwKmEwMCArIGIxKmExMCArIGIyKmEyMCArIGIzKmEzMDtcbiAgICBvdXRbOV0gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzEwXSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTFdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuXG4gICAgYjAgPSBiWzEyXTsgYjEgPSBiWzEzXTsgYjIgPSBiWzE0XTsgYjMgPSBiWzE1XTtcbiAgICBvdXRbMTJdID0gYjAqYTAwICsgYjEqYTEwICsgYjIqYTIwICsgYjMqYTMwO1xuICAgIG91dFsxM10gPSBiMCphMDEgKyBiMSphMTEgKyBiMiphMjEgKyBiMyphMzE7XG4gICAgb3V0WzE0XSA9IGIwKmEwMiArIGIxKmExMiArIGIyKmEyMiArIGIzKmEzMjtcbiAgICBvdXRbMTVdID0gYjAqYTAzICsgYjEqYTEzICsgYjIqYTIzICsgYjMqYTMzO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gc2NhbGU7XG5cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7bWF0NH0gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge3ZlYzN9IHYgdGhlIHZlYzMgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICoqL1xuZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gICAgdmFyIHggPSB2WzBdLCB5ID0gdlsxXSwgeiA9IHZbMl07XG5cbiAgICBvdXRbMF0gPSBhWzBdICogeDtcbiAgICBvdXRbMV0gPSBhWzFdICogeDtcbiAgICBvdXRbMl0gPSBhWzJdICogeDtcbiAgICBvdXRbM10gPSBhWzNdICogeDtcbiAgICBvdXRbNF0gPSBhWzRdICogeTtcbiAgICBvdXRbNV0gPSBhWzVdICogeTtcbiAgICBvdXRbNl0gPSBhWzZdICogeTtcbiAgICBvdXRbN10gPSBhWzddICogeTtcbiAgICBvdXRbOF0gPSBhWzhdICogejtcbiAgICBvdXRbOV0gPSBhWzldICogejtcbiAgICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICAgIG91dFsxMV0gPSBhWzExXSAqIHo7XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICAgIHJldHVybiBvdXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJhbnNsYXRlO1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBhIG1hdDQgYnkgdGhlIGdpdmVuIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge21hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7dmVjM30gdiB2ZWN0b3IgdG8gdHJhbnNsYXRlIGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cbmZ1bmN0aW9uIHRyYW5zbGF0ZShvdXQsIGEsIHYpIHtcbiAgICB2YXIgeCA9IHZbMF0sIHkgPSB2WzFdLCB6ID0gdlsyXSxcbiAgICAgICAgYTAwLCBhMDEsIGEwMiwgYTAzLFxuICAgICAgICBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgIGEyMCwgYTIxLCBhMjIsIGEyMztcblxuICAgIGlmIChhID09PSBvdXQpIHtcbiAgICAgICAgb3V0WzEyXSA9IGFbMF0gKiB4ICsgYVs0XSAqIHkgKyBhWzhdICogeiArIGFbMTJdO1xuICAgICAgICBvdXRbMTNdID0gYVsxXSAqIHggKyBhWzVdICogeSArIGFbOV0gKiB6ICsgYVsxM107XG4gICAgICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgICAgIG91dFsxNV0gPSBhWzNdICogeCArIGFbN10gKiB5ICsgYVsxMV0gKiB6ICsgYVsxNV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYTAwID0gYVswXTsgYTAxID0gYVsxXTsgYTAyID0gYVsyXTsgYTAzID0gYVszXTtcbiAgICAgICAgYTEwID0gYVs0XTsgYTExID0gYVs1XTsgYTEyID0gYVs2XTsgYTEzID0gYVs3XTtcbiAgICAgICAgYTIwID0gYVs4XTsgYTIxID0gYVs5XTsgYTIyID0gYVsxMF07IGEyMyA9IGFbMTFdO1xuXG4gICAgICAgIG91dFswXSA9IGEwMDsgb3V0WzFdID0gYTAxOyBvdXRbMl0gPSBhMDI7IG91dFszXSA9IGEwMztcbiAgICAgICAgb3V0WzRdID0gYTEwOyBvdXRbNV0gPSBhMTE7IG91dFs2XSA9IGExMjsgb3V0WzddID0gYTEzO1xuICAgICAgICBvdXRbOF0gPSBhMjA7IG91dFs5XSA9IGEyMTsgb3V0WzEwXSA9IGEyMjsgb3V0WzExXSA9IGEyMztcblxuICAgICAgICBvdXRbMTJdID0gYTAwICogeCArIGExMCAqIHkgKyBhMjAgKiB6ICsgYVsxMl07XG4gICAgICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICAgICAgb3V0WzE0XSA9IGEwMiAqIHggKyBhMTIgKiB5ICsgYTIyICogeiArIGFbMTRdO1xuICAgICAgICBvdXRbMTVdID0gYTAzICogeCArIGExMyAqIHkgKyBhMjMgKiB6ICsgYVsxNV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXR0cmlidXRlV3JhcHBlclxuXG4vL1NoYWRlciBhdHRyaWJ1dGUgY2xhc3NcbmZ1bmN0aW9uIFNoYWRlckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIGRpbWVuc2lvbiwgbmFtZSwgY29uc3RGdW5jLCByZWxpbmspIHtcbiAgdGhpcy5fZ2wgPSBnbFxuICB0aGlzLl9wcm9ncmFtID0gcHJvZ3JhbVxuICB0aGlzLl9sb2NhdGlvbiA9IGxvY2F0aW9uXG4gIHRoaXMuX2RpbWVuc2lvbiA9IGRpbWVuc2lvblxuICB0aGlzLl9uYW1lID0gbmFtZVxuICB0aGlzLl9jb25zdEZ1bmMgPSBjb25zdEZ1bmNcbiAgdGhpcy5fcmVsaW5rID0gcmVsaW5rXG59XG5cbnZhciBwcm90byA9IFNoYWRlckF0dHJpYnV0ZS5wcm90b3R5cGVcblxucHJvdG8ucG9pbnRlciA9IGZ1bmN0aW9uIHNldEF0dHJpYlBvaW50ZXIodHlwZSwgbm9ybWFsaXplZCwgc3RyaWRlLCBvZmZzZXQpIHtcbiAgdmFyIGdsID0gdGhpcy5fZ2xcbiAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLl9sb2NhdGlvbiwgdGhpcy5fZGltZW5zaW9uLCB0eXBlfHxnbC5GTE9BVCwgISFub3JtYWxpemVkLCBzdHJpZGV8fDAsIG9mZnNldHx8MClcbiAgdGhpcy5fZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5fbG9jYXRpb24pXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2xvY2F0aW9uJywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvblxuICB9XG4gICwgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgaWYodiAhPT0gdGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gdlxuICAgICAgdGhpcy5fZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHRoaXMuX3Byb2dyYW0sIHYsIHRoaXMuX25hbWUpXG4gICAgICB0aGlzLl9nbC5saW5rUHJvZ3JhbSh0aGlzLl9wcm9ncmFtKVxuICAgICAgdGhpcy5fcmVsaW5rKClcbiAgICB9XG4gIH1cbn0pXG5cblxuLy9BZGRzIGEgdmVjdG9yIGF0dHJpYnV0ZSB0byBvYmpcbmZ1bmN0aW9uIGFkZFZlY3RvckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIGRpbWVuc2lvbiwgb2JqLCBuYW1lLCBkb0xpbmspIHtcbiAgdmFyIGNvbnN0RnVuY0FyZ3MgPSBbICdnbCcsICd2JyBdXG4gIHZhciB2YXJOYW1lcyA9IFtdXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgY29uc3RGdW5jQXJncy5wdXNoKCd4JytpKVxuICAgIHZhck5hbWVzLnB1c2goJ3gnK2kpXG4gIH1cbiAgY29uc3RGdW5jQXJncy5wdXNoKFtcbiAgICAnaWYoeDAubGVuZ3RoPT09dm9pZCAwKXtyZXR1cm4gZ2wudmVydGV4QXR0cmliJywgZGltZW5zaW9uLCAnZih2LCcsIHZhck5hbWVzLmpvaW4oKSwgJyl9ZWxzZXtyZXR1cm4gZ2wudmVydGV4QXR0cmliJywgZGltZW5zaW9uLCAnZnYodix4MCl9J1xuICBdLmpvaW4oJycpKVxuICB2YXIgY29uc3RGdW5jID0gRnVuY3Rpb24uYXBwbHkodW5kZWZpbmVkLCBjb25zdEZ1bmNBcmdzKVxuICB2YXIgYXR0ciA9IG5ldyBTaGFkZXJBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkaW1lbnNpb24sIG5hbWUsIGNvbnN0RnVuYywgZG9MaW5rKVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgc2V0OiBmdW5jdGlvbih4KSB7XG4gICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoYXR0ci5fbG9jYXRpb24pXG4gICAgICBjb25zdEZ1bmMoZ2wsIGF0dHIuX2xvY2F0aW9uLCB4KVxuICAgICAgcmV0dXJuIHhcbiAgICB9XG4gICAgLCBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGF0dHJcbiAgICB9XG4gICAgLCBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pXG59XG5cbi8vQ3JlYXRlIHNoaW1zIGZvciBhdHRyaWJ1dGVzXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyKGdsLCBwcm9ncmFtLCBhdHRyaWJ1dGVzLCBkb0xpbmspIHtcbiAgdmFyIG9iaiA9IHt9XG4gIGZvcih2YXIgaT0wLCBuPWF0dHJpYnV0ZXMubGVuZ3RoOyBpPG47ICsraSkge1xuICAgIHZhciBhID0gYXR0cmlidXRlc1tpXVxuICAgIHZhciBuYW1lID0gYS5uYW1lXG4gICAgdmFyIHR5cGUgPSBhLnR5cGVcbiAgICB2YXIgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBuYW1lKVxuICAgIFxuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgIGNhc2UgJ2ludCc6XG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIGFkZFZlY3RvckF0dHJpYnV0ZShnbCwgcHJvZ3JhbSwgbG9jYXRpb24sIDEsIG9iaiwgbmFtZSwgZG9MaW5rKVxuICAgICAgYnJlYWtcbiAgICAgIFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYodHlwZS5pbmRleE9mKCd2ZWMnKSA+PSAwKSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBhZGRWZWN0b3JBdHRyaWJ1dGUoZ2wsIHByb2dyYW0sIGxvY2F0aW9uLCBkLCBvYmosIG5hbWUsIGRvTGluaylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biBkYXRhIHR5cGUgZm9yIGF0dHJpYnV0ZSAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBkdXAgPSByZXF1aXJlKCdkdXAnKVxudmFyIGNvYWxsZXNjZVVuaWZvcm1zID0gcmVxdWlyZSgnLi9yZWZsZWN0JylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVVbmlmb3JtV3JhcHBlclxuXG4vL0JpbmRzIGEgZnVuY3Rpb24gYW5kIHJldHVybnMgYSB2YWx1ZVxuZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICB2YXIgYyA9IG5ldyBGdW5jdGlvbigneScsICdyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4geX0nKVxuICByZXR1cm4gYyh4KVxufVxuXG4vL0NyZWF0ZSBzaGltcyBmb3IgdW5pZm9ybXNcbmZ1bmN0aW9uIGNyZWF0ZVVuaWZvcm1XcmFwcGVyKGdsLCBwcm9ncmFtLCB1bmlmb3JtcywgbG9jYXRpb25zKSB7XG5cbiAgZnVuY3Rpb24gbWFrZUdldHRlcihpbmRleCkge1xuICAgIHZhciBwcm9jID0gbmV3IEZ1bmN0aW9uKCdnbCcsICdwcm9nJywgJ2xvY2F0aW9ucycsIFxuICAgICAgJ3JldHVybiBmdW5jdGlvbigpe3JldHVybiBnbC5nZXRVbmlmb3JtKHByb2csbG9jYXRpb25zWycgKyBpbmRleCArICddKX0nKSBcbiAgICByZXR1cm4gcHJvYyhnbCwgcHJvZ3JhbSwgbG9jYXRpb25zKVxuICB9XG5cbiAgZnVuY3Rpb24gbWFrZVByb3BTZXR0ZXIocGF0aCwgaW5kZXgsIHR5cGUpIHtcbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAnYm9vbCc6XG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgcmV0dXJuICdnbC51bmlmb3JtMWkobG9jYXRpb25zWycgKyBpbmRleCArICddLG9iaicgKyBwYXRoICsgJyknXG4gICAgICBjYXNlICdmbG9hdCc6XG4gICAgICAgIHJldHVybiAnZ2wudW5pZm9ybTFmKGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHZpZHggPSB0eXBlLmluZGV4T2YoJ3ZlYycpXG4gICAgICAgIGlmKDAgPD0gdmlkeCAmJiB2aWR4IDw9IDEgJiYgdHlwZS5sZW5ndGggPT09IDQgKyB2aWR4KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2godHlwZS5jaGFyQXQoMCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2InOlxuICAgICAgICAgICAgY2FzZSAnaSc6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2l2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgIHJldHVybiAnZ2wudW5pZm9ybScgKyBkICsgJ2Z2KGxvY2F0aW9uc1snICsgaW5kZXggKyAnXSxvYmonICsgcGF0aCArICcpJ1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IFVucmVjb2duaXplZCBkYXRhIHR5cGUgZm9yIHZlY3RvciAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHR5cGUuaW5kZXhPZignbWF0JykgPT09IDAgJiYgdHlwZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICB2YXIgZCA9IHR5cGUuY2hhckNvZGVBdCh0eXBlLmxlbmd0aC0xKSAtIDQ4XG4gICAgICAgICAgaWYoZCA8IDIgfHwgZCA+IDQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBJbnZhbGlkIHVuaWZvcm0gZGltZW5zaW9uIHR5cGUgZm9yIG1hdHJpeCAnICsgbmFtZSArICc6ICcgKyB0eXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2dsLnVuaWZvcm1NYXRyaXgnICsgZCArICdmdihsb2NhdGlvbnNbJyArIGluZGV4ICsgJ10sZmFsc2Usb2JqJyArIHBhdGggKyAnKSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biB1bmlmb3JtIGRhdGEgdHlwZSBmb3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlbnVtZXJhdGVJbmRpY2VzKHByZWZpeCwgdHlwZSkge1xuICAgIGlmKHR5cGVvZiB0eXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIFsgW3ByZWZpeCwgdHlwZV0gXVxuICAgIH1cbiAgICB2YXIgaW5kaWNlcyA9IFtdXG4gICAgZm9yKHZhciBpZCBpbiB0eXBlKSB7XG4gICAgICB2YXIgcHJvcCA9IHR5cGVbaWRdXG4gICAgICB2YXIgdHByZWZpeCA9IHByZWZpeFxuICAgICAgaWYocGFyc2VJbnQoaWQpICsgJycgPT09IGlkKSB7XG4gICAgICAgIHRwcmVmaXggKz0gJ1snICsgaWQgKyAnXSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRwcmVmaXggKz0gJy4nICsgaWRcbiAgICAgIH1cbiAgICAgIGlmKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpbmRpY2VzLnB1c2guYXBwbHkoaW5kaWNlcywgZW51bWVyYXRlSW5kaWNlcyh0cHJlZml4LCBwcm9wKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGljZXMucHVzaChbdHByZWZpeCwgcHJvcF0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG4gIH1cblxuICBmdW5jdGlvbiBtYWtlU2V0dGVyKHR5cGUpIHtcbiAgICB2YXIgY29kZSA9IFsgJ3JldHVybiBmdW5jdGlvbiB1cGRhdGVQcm9wZXJ0eShvYmopeycgXVxuICAgIHZhciBpbmRpY2VzID0gZW51bWVyYXRlSW5kaWNlcygnJywgdHlwZSlcbiAgICBmb3IodmFyIGk9MDsgaTxpbmRpY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIgaXRlbSA9IGluZGljZXNbaV1cbiAgICAgIHZhciBwYXRoID0gaXRlbVswXVxuICAgICAgdmFyIGlkeCAgPSBpdGVtWzFdXG4gICAgICBpZihsb2NhdGlvbnNbaWR4XSkge1xuICAgICAgICBjb2RlLnB1c2gobWFrZVByb3BTZXR0ZXIocGF0aCwgaWR4LCB1bmlmb3Jtc1tpZHhdLnR5cGUpKVxuICAgICAgfVxuICAgIH1cbiAgICBjb2RlLnB1c2goJ3JldHVybiBvYmp9JylcbiAgICB2YXIgcHJvYyA9IG5ldyBGdW5jdGlvbignZ2wnLCAncHJvZycsICdsb2NhdGlvbnMnLCBjb2RlLmpvaW4oJ1xcbicpKVxuICAgIHJldHVybiBwcm9jKGdsLCBwcm9ncmFtLCBsb2NhdGlvbnMpXG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHlwZSkge1xuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlICdib29sJzpcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBjYXNlICdpbnQnOlxuICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgIGNhc2UgJ3NhbXBsZXJDdWJlJzpcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgICAgcmV0dXJuIDAuMFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHZpZHggPSB0eXBlLmluZGV4T2YoJ3ZlYycpXG4gICAgICAgIGlmKDAgPD0gdmlkeCAmJiB2aWR4IDw9IDEgJiYgdHlwZS5sZW5ndGggPT09IDQgKyB2aWR4KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCBkYXRhIHR5cGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZih0eXBlLmNoYXJBdCgwKSA9PT0gJ2InKSB7XG4gICAgICAgICAgICByZXR1cm4gZHVwKGQsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZHVwKGQpXG4gICAgICAgIH0gZWxzZSBpZih0eXBlLmluZGV4T2YoJ21hdCcpID09PSAwICYmIHR5cGUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgdmFyIGQgPSB0eXBlLmNoYXJDb2RlQXQodHlwZS5sZW5ndGgtMSkgLSA0OFxuICAgICAgICAgIGlmKGQgPCAyIHx8IGQgPiA0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogSW52YWxpZCB1bmlmb3JtIGRpbWVuc2lvbiB0eXBlIGZvciBtYXRyaXggJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGR1cChbZCxkXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXNoYWRlcjogVW5rbm93biB1bmlmb3JtIGRhdGEgdHlwZSBmb3IgJyArIG5hbWUgKyAnOiAnICsgdHlwZSlcbiAgICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdG9yZVByb3BlcnR5KG9iaiwgcHJvcCwgdHlwZSkge1xuICAgIGlmKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkID0gcHJvY2Vzc09iamVjdCh0eXBlKVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICBnZXQ6IGlkZW50aXR5KGNoaWxkKSxcbiAgICAgICAgc2V0OiBtYWtlU2V0dGVyKHR5cGUpLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihsb2NhdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwge1xuICAgICAgICAgIGdldDogbWFrZUdldHRlcih0eXBlKSxcbiAgICAgICAgICBzZXQ6IG1ha2VTZXR0ZXIodHlwZSksXG4gICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbcHJvcF0gPSBkZWZhdWx0VmFsdWUodW5pZm9ybXNbdHlwZV0udHlwZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzT2JqZWN0KG9iaikge1xuICAgIHZhciByZXN1bHRcbiAgICBpZihBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShvYmoubGVuZ3RoKVxuICAgICAgZm9yKHZhciBpPTA7IGk8b2JqLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHN0b3JlUHJvcGVydHkocmVzdWx0LCBpLCBvYmpbaV0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHt9XG4gICAgICBmb3IodmFyIGlkIGluIG9iaikge1xuICAgICAgICBzdG9yZVByb3BlcnR5KHJlc3VsdCwgaWQsIG9ialtpZF0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vUmV0dXJuIGRhdGFcbiAgdmFyIGNvYWxsZXNjZWQgPSBjb2FsbGVzY2VVbmlmb3Jtcyh1bmlmb3JtcywgdHJ1ZSlcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGlkZW50aXR5KHByb2Nlc3NPYmplY3QoY29hbGxlc2NlZCkpLFxuICAgIHNldDogbWFrZVNldHRlcihjb2FsbGVzY2VkKSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlUmVmbGVjdFR5cGVzXG5cbi8vQ29uc3RydWN0IHR5cGUgaW5mbyBmb3IgcmVmbGVjdGlvbi5cbi8vXG4vLyBUaGlzIGl0ZXJhdGVzIG92ZXIgdGhlIGZsYXR0ZW5lZCBsaXN0IG9mIHVuaWZvcm0gdHlwZSB2YWx1ZXMgYW5kIHNtYXNoZXMgdGhlbSBpbnRvIGEgSlNPTiBvYmplY3QuXG4vL1xuLy8gVGhlIGxlYXZlcyBvZiB0aGUgcmVzdWx0aW5nIG9iamVjdCBhcmUgZWl0aGVyIGluZGljZXMgb3IgdHlwZSBzdHJpbmdzIHJlcHJlc2VudGluZyBwcmltaXRpdmUgZ2xzbGlmeSB0eXBlc1xuZnVuY3Rpb24gbWFrZVJlZmxlY3RUeXBlcyh1bmlmb3JtcywgdXNlSW5kZXgpIHtcbiAgdmFyIG9iaiA9IHt9XG4gIGZvcih2YXIgaT0wOyBpPHVuaWZvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIG4gPSB1bmlmb3Jtc1tpXS5uYW1lXG4gICAgdmFyIHBhcnRzID0gbi5zcGxpdChcIi5cIilcbiAgICB2YXIgbyA9IG9ialxuICAgIGZvcih2YXIgaj0wOyBqPHBhcnRzLmxlbmd0aDsgKytqKSB7XG4gICAgICB2YXIgeCA9IHBhcnRzW2pdLnNwbGl0KFwiW1wiKVxuICAgICAgaWYoeC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmKCEoeFswXSBpbiBvKSkge1xuICAgICAgICAgIG9beFswXV0gPSBbXVxuICAgICAgICB9XG4gICAgICAgIG8gPSBvW3hbMF1dXG4gICAgICAgIGZvcih2YXIgaz0xOyBrPHgubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICB2YXIgeSA9IHBhcnNlSW50KHhba10pXG4gICAgICAgICAgaWYoazx4Lmxlbmd0aC0xIHx8IGo8cGFydHMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgIGlmKCEoeSBpbiBvKSkge1xuICAgICAgICAgICAgICBpZihrIDwgeC5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgIG9beV0gPSBbXVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9beV0gPSB7fVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvID0gb1t5XVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZih1c2VJbmRleCkge1xuICAgICAgICAgICAgICBvW3ldID0gaVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb1t5XSA9IHVuaWZvcm1zW2ldLnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihqIDwgcGFydHMubGVuZ3RoLTEpIHtcbiAgICAgICAgaWYoISh4WzBdIGluIG8pKSB7XG4gICAgICAgICAgb1t4WzBdXSA9IHt9XG4gICAgICAgIH1cbiAgICAgICAgbyA9IG9beFswXV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmKHVzZUluZGV4KSB7XG4gICAgICAgICAgb1t4WzBdXSA9IGlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvW3hbMF1dID0gdW5pZm9ybXNbaV0udHlwZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn0iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZVVuaWZvcm1XcmFwcGVyID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLXVuaWZvcm1zJylcbnZhciBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyID0gcmVxdWlyZSgnLi9saWIvY3JlYXRlLWF0dHJpYnV0ZXMnKVxudmFyIG1ha2VSZWZsZWN0ID0gcmVxdWlyZSgnLi9saWIvcmVmbGVjdCcpXG5cbi8vU2hhZGVyIG9iamVjdFxuZnVuY3Rpb24gU2hhZGVyKGdsLCBwcm9nLCB2ZXJ0U2hhZGVyLCBmcmFnU2hhZGVyKSB7XG4gIHRoaXMuZ2wgPSBnbFxuICB0aGlzLmhhbmRsZSA9IHByb2dcbiAgdGhpcy5hdHRyaWJ1dGVzID0gbnVsbFxuICB0aGlzLnVuaWZvcm1zID0gbnVsbFxuICB0aGlzLnR5cGVzID0gbnVsbFxuICB0aGlzLnZlcnRleFNoYWRlciA9IHZlcnRTaGFkZXJcbiAgdGhpcy5mcmFnbWVudFNoYWRlciA9IGZyYWdTaGFkZXJcbn1cblxuLy9CaW5kcyB0aGUgc2hhZGVyXG5TaGFkZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaGFuZGxlKVxufVxuXG4vL0Rlc3Ryb3kgc2hhZGVyLCByZWxlYXNlIHJlc291cmNlc1xuU2hhZGVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBnbCA9IHRoaXMuZ2xcbiAgZ2wuZGVsZXRlU2hhZGVyKHRoaXMudmVydGV4U2hhZGVyKVxuICBnbC5kZWxldGVTaGFkZXIodGhpcy5mcmFnbWVudFNoYWRlcilcbiAgZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLmhhbmRsZSlcbn1cblxuU2hhZGVyLnByb3RvdHlwZS51cGRhdGVFeHBvcnRzID0gZnVuY3Rpb24odW5pZm9ybXMsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGxvY2F0aW9ucyA9IG5ldyBBcnJheSh1bmlmb3Jtcy5sZW5ndGgpXG4gIHZhciBwcm9ncmFtID0gdGhpcy5oYW5kbGVcbiAgdmFyIGdsID0gdGhpcy5nbFxuXG4gIHZhciBkb0xpbmsgPSByZWxpbmtVbmlmb3Jtcy5iaW5kKHZvaWQgMCxcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIGxvY2F0aW9ucyxcbiAgICB1bmlmb3Jtc1xuICApXG4gIGRvTGluaygpXG5cbiAgdGhpcy50eXBlcyA9IHtcbiAgICB1bmlmb3JtczogbWFrZVJlZmxlY3QodW5pZm9ybXMpLFxuICAgIGF0dHJpYnV0ZXM6IG1ha2VSZWZsZWN0KGF0dHJpYnV0ZXMpXG4gIH1cblxuICB0aGlzLmF0dHJpYnV0ZXMgPSBjcmVhdGVBdHRyaWJ1dGVXcmFwcGVyKFxuICAgIGdsLFxuICAgIHByb2dyYW0sXG4gICAgYXR0cmlidXRlcyxcbiAgICBkb0xpbmtcbiAgKVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndW5pZm9ybXMnLCBjcmVhdGVVbmlmb3JtV3JhcHBlcihcbiAgICBnbCxcbiAgICBwcm9ncmFtLFxuICAgIHVuaWZvcm1zLFxuICAgIGxvY2F0aW9uc1xuICApKVxufVxuXG4vL1JlbGlua3MgYWxsIHVuaWZvcm1zXG5mdW5jdGlvbiByZWxpbmtVbmlmb3JtcyhnbCwgcHJvZ3JhbSwgbG9jYXRpb25zLCB1bmlmb3Jtcykge1xuICBmb3IodmFyIGk9MDsgaTx1bmlmb3Jtcy5sZW5ndGg7ICsraSkge1xuICAgIGxvY2F0aW9uc1tpXSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCB1bmlmb3Jtc1tpXS5uYW1lKVxuICB9XG59XG5cbi8vQ29tcGlsZXMgYW5kIGxpbmtzIGEgc2hhZGVyIHByb2dyYW0gd2l0aCB0aGUgZ2l2ZW4gYXR0cmlidXRlIGFuZCB2ZXJ0ZXggbGlzdFxuZnVuY3Rpb24gY3JlYXRlU2hhZGVyKFxuICAgIGdsXG4gICwgdmVydFNvdXJjZVxuICAsIGZyYWdTb3VyY2VcbiAgLCB1bmlmb3Jtc1xuICAsIGF0dHJpYnV0ZXMpIHtcbiAgXG4gIC8vQ29tcGlsZSB2ZXJ0ZXggc2hhZGVyXG4gIHZhciB2ZXJ0U2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLlZFUlRFWF9TSEFERVIpXG4gIGdsLnNoYWRlclNvdXJjZSh2ZXJ0U2hhZGVyLCB2ZXJ0U291cmNlKVxuICBnbC5jb21waWxlU2hhZGVyKHZlcnRTaGFkZXIpXG4gIGlmKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodmVydFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgdmFyIGVyckxvZyA9IGdsLmdldFNoYWRlckluZm9Mb2codmVydFNoYWRlcilcbiAgICBjb25zb2xlLmVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBsaW5nIHZlcnRleCBzaGFkZXI6JywgZXJyTG9nKVxuICAgIHRocm93IG5ldyBFcnJvcignZ2wtc2hhZGVyOiBFcnJvciBjb21waWxpbmcgdmVydGV4IHNoYWRlcjonICsgZXJyTG9nKVxuICB9XG4gIFxuICAvL0NvbXBpbGUgZnJhZ21lbnQgc2hhZGVyXG4gIHZhciBmcmFnU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKGdsLkZSQUdNRU5UX1NIQURFUilcbiAgZ2wuc2hhZGVyU291cmNlKGZyYWdTaGFkZXIsIGZyYWdTb3VyY2UpXG4gIGdsLmNvbXBpbGVTaGFkZXIoZnJhZ1NoYWRlcilcbiAgaWYoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcmFnU2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICB2YXIgZXJyTG9nID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnU2hhZGVyKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgY29tcGlsaW5nIGZyYWdtZW50IHNoYWRlcjonLCBlcnJMb2cpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGNvbXBpbGluZyBmcmFnbWVudCBzaGFkZXI6JyArIGVyckxvZylcbiAgfVxuICBcbiAgLy9MaW5rIHByb2dyYW1cbiAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKClcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdTaGFkZXIpXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0U2hhZGVyKVxuXG4gIC8vT3B0aW9uYWwgZGVmYXVsdCBhdHRyaXVidGUgbG9jYXRpb25zXG4gIGF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbihhKSB7XG4gICAgaWYgKHR5cGVvZiBhLmxvY2F0aW9uID09PSAnbnVtYmVyJykgXG4gICAgICBnbC5iaW5kQXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgYS5sb2NhdGlvbiwgYS5uYW1lKVxuICB9KVxuXG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pXG4gIGlmKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgIHZhciBlcnJMb2cgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKVxuICAgIGNvbnNvbGUuZXJyb3IoJ2dsLXNoYWRlcjogRXJyb3IgbGlua2luZyBzaGFkZXIgcHJvZ3JhbTonLCBlcnJMb2cpXG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC1zaGFkZXI6IEVycm9yIGxpbmtpbmcgc2hhZGVyIHByb2dyYW06JyArIGVyckxvZylcbiAgfVxuICBcbiAgLy9SZXR1cm4gZmluYWwgbGlua2VkIHNoYWRlciBvYmplY3RcbiAgdmFyIHNoYWRlciA9IG5ldyBTaGFkZXIoXG4gICAgZ2wsXG4gICAgcHJvZ3JhbSxcbiAgICB2ZXJ0U2hhZGVyLFxuICAgIGZyYWdTaGFkZXJcbiAgKVxuICBzaGFkZXIudXBkYXRlRXhwb3J0cyh1bmlmb3JtcywgYXR0cmlidXRlcylcblxuICByZXR1cm4gc2hhZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2hhZGVyXG4iLCJ2YXIgQmFzZSA9IHJlcXVpcmUoJ2ZvbnRwYXRoLXNpbXBsZS1yZW5kZXJlcicpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgYm1mb250MmZvbnRwYXRoID0gcmVxdWlyZSgnZm9udHBhdGgtYm1mb250JylcbnZhciB0ZXhjb29yZCA9IHJlcXVpcmUoJ3RleGNvb3JkJylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBjcmVhdGVUZXh0dXJlID0gcmVxdWlyZSgnZ2wtdGV4dHVyZTJkJylcblxudmFyIEJhdGNoID0gcmVxdWlyZSgnZ2wtc3ByaXRlLWJhdGNoJylcblxudmFyIHRtcFBvcyA9IFswLCAwXSxcbiAgICB0bXBTaGFwZSA9IFswLCAwXSxcbiAgICB0bXAxID0gWzAsIDBdLFxuICAgIHRtcDIgPSBbMCwgMF1cbnZhciBERUZBVUxUX1RFWENPT1JEID0gWzAsIDAsIDEsIDFdXG52YXIgbWF4SW5pdGlhbENhcGFjaXR5ID0gNTAwXG5cbmZ1bmN0aW9uIHRleGNvb3JkR2x5cGgoZ2x5cGgsIGF0bGFzLCBvdXQpIHtcbiAgICB0bXAxWzBdID0gZ2x5cGgueFxuICAgIHRtcDFbMV0gPSBnbHlwaC55XG4gICAgdG1wMlswXSA9IGdseXBoLndpZHRoXG4gICAgdG1wMlsxXSA9IGdseXBoLmhlaWdodFxuICAgIHJldHVybiB0ZXhjb29yZCh0bXAxLCB0bXAyLCBhdGxhcywgb3V0KVxufVxuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIoZ2wsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXh0UmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IFRleHRSZW5kZXJlcihnbCwgb3B0KVxuICAgIG9wdCA9IG9wdHx8e31cblxuICAgIGlmICghb3B0LmZvbnQpIFxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3Qgc3BlY2lmeSBibWZvbnQgYXQgY3JlYXRpb24gdGltZScpXG5cbiAgICAvL2lmIHRoZSBmb250IGhhcyBJbWFnZS9uZGFycmF5IGFycmF5XG4gICAgaWYgKCFvcHQudGV4dHVyZXMgJiYgQXJyYXkuaXNBcnJheShvcHQuZm9udC5pbWFnZXMpKSB7XG4gICAgICAgIG9wdC50ZXh0dXJlcyA9IG9wdC5mb250LmltYWdlcy5tYXAoZnVuY3Rpb24oaW1nKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZShnbCwgaW1nKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9wdC5mb250ID0gYm1mb250MmZvbnRwYXRoKG9wdC5mb250KVxuXG4gICAgQmFzZS5jYWxsKHRoaXMsIG9wdClcblxuICAgIHRoaXMudGV4dHVyZXMgPSBvcHQudGV4dHVyZXMgfHwgW11cbiAgICB0aGlzLmdsID0gZ2xcbiAgICBpZiAoIWdsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHNwZWNpZnkgZ2wgY29udGV4dFwiKVxuICAgIFxuICAgIC8vYXNzdW1lIHRleHQgd2lsbCBiZSB1c2VkIGR5bmFtaWNhbGx5IFxuICAgIGlmICh0eXBlb2Ygb3B0LmR5bmFtaWMgIT09ICdib29sZWFuJylcbiAgICAgICAgb3B0LmR5bmFtaWMgPSB0cnVlXG5cbiAgICB2YXIgYmF0Y2ggPSBvcHQuYmF0Y2hcbiAgICBpZiAoIWJhdGNoKVxuICAgICAgICB0aGlzLmRlZmF1bHRCYXRjaCA9IEJhdGNoKGdsLCBvcHQpXG4gICAgdGhpcy5iYXRjaCA9IGJhdGNoIHx8IHRoaXMuZGVmYXVsdEJhdGNoXG5cbiAgICBpZiAodHlwZW9mIG9wdC53cmFwV2lkdGggIT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxheW91dCgpXG59XG5cbmluaGVyaXRzKFRleHRSZW5kZXJlciwgQmFzZSlcblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24odGV4dHVyZXMpIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0QmF0Y2gpXG4gICAgICAgIHRoaXMuZGVmYXVsdEJhdGNoLmRpc3Bvc2UoKVxuICAgIGlmICh0ZXh0dXJlcykge1xuICAgICAgICB0aGlzLnRleHR1cmVzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0LmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgdC5kaXNwb3NlKClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS51bmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY2FjaGUgPSBmYWxzZVxuICAgIHRoaXMuYmF0Y2guY2xlYXIoKVxuICAgIHJldHVybiB0aGlzXG59XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbih4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgLy8gaWYgKHRoaXMudW5kZXJsaW5lIHx8IHRoaXMuZm9udC5wYWdlcy5sZW5ndGggPiAxKVxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N1cnJlbnRseSBjYWNoZWQgdGV4dCBkb2VzIG5vdCBzdXBwb3J0IHVuZGVybGluZXMgb3IgbXVsdGlwbGUgdGV4dHVyZSBwYWdlcycpXG4gICAgXG4gICAgdGhpcy5fY2FjaGUgPSB0cnVlXG4gICAgdGhpcy5iYXRjaC5lbnN1cmVDYXBhY2l0eSh0aGlzLnRleHQubGVuZ3RoKVxuICAgIHRoaXMuYmF0Y2guY2xlYXIoKVxuICAgIHRoaXMuX2J1aWxkKHgsIHksIHN0YXJ0LCBlbmQpXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oc2hhZGVyLCB4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIGJhdGNoID0gdGhpcy5iYXRjaFxuICAgIGJhdGNoLmJpbmQoc2hhZGVyKVxuXG4gICAgLy9pZiB3ZSdyZSBkcmF3aW5nIGR5bmFtaWNhbGx5XG4gICAgaWYgKCF0aGlzLl9jYWNoZSkge1xuICAgICAgICBiYXRjaC5jbGVhcigpXG4gICAgICAgIHRoaXMuX2J1aWxkKHgsIHksIHN0YXJ0LCBlbmQpXG4gICAgfVxuICAgIFxuICAgIGJhdGNoLmRyYXcoKVxuICAgIGJhdGNoLnVuYmluZCgpXG4gICAgcmV0dXJuIHRoaXNcbn1cblxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5fYnVpbGQgPSBmdW5jdGlvbih4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucmVuZGVyKHgsIHksIHN0YXJ0LCBlbmQpXG5cbiAgICB2YXIgYmF0Y2ggPSB0aGlzLmJhdGNoXG4gICAgdmFyIGkgPSAwXG4gICAgXG4gICAgLy91bmRlcmxpbmVzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIHdpdGggY2FjaGUoKVxuICAgIGlmICghdGhpcy5fY2FjaGUpIHtcbiAgICAgICAgYmF0Y2gudGV4Y29vcmQgPSBERUZBVUxUX1RFWENPT1JEXG4gICAgICAgIGJhdGNoLnRleHR1cmUgPSBudWxsXG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlc3VsdC51bmRlcmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdW5kZXJsaW5lID0gcmVzdWx0LnVuZGVybGluZXNbaV1cbiAgICAgICAgICAgIGJhdGNoLnBvc2l0aW9uID0gdW5kZXJsaW5lLnBvc2l0aW9uXG4gICAgICAgICAgICBiYXRjaC5zaGFwZSA9IHVuZGVybGluZS5zaXplXG4gICAgICAgICAgICBiYXRjaC5wdXNoKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbm93IGRyYXcgb3VyIGdseXBocyBpbnRvIHRoZSBiYXRjaC4uLlxuICAgIGZvciAoaSA9IDA7IGkgPCByZXN1bHQuZ2x5cGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBnID0gcmVzdWx0LmdseXBoc1tpXVxuICAgICAgICB0aGlzLl9kcmF3R2x5cGgoYmF0Y2gsIGcpXG4gICAgfVxufVxuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLl9kcmF3R2x5cGggPSBmdW5jdGlvbihiYXRjaCwgZGF0YSkge1xuICAgIC8vLi4uIHdlIGNvdWxkIHNvcnQgdGhlc2UgYnkgdGV4dHVyZSBwYWdlIHRvIHJlZHVjZSBkcmF3c1xuICAgIHZhciBnbHlwaCA9IGRhdGEuZ2x5cGhcbiAgICB2YXIgaW1nID0gdGhpcy50ZXh0dXJlc1tnbHlwaC5wYWdlXVxuICAgIHRtcFBvc1swXSA9IGRhdGEucG9zaXRpb25bMF0rZ2x5cGguaGJ4XG4gICAgdG1wUG9zWzFdID0gZGF0YS5wb3NpdGlvblsxXStnbHlwaC5oYnkgLSB0aGlzLmZvbnQuZGVzY2VuZGVyXG4gICAgdG1wU2hhcGVbMF0gPSBnbHlwaC53aWR0aCAqIGRhdGEuc2NhbGVbMF1cbiAgICB0bXBTaGFwZVsxXSA9IGdseXBoLmhlaWdodCAqIGRhdGEuc2NhbGVbMV1cbiAgICBcbiAgICBiYXRjaC50ZXh0dXJlID0gaW1nXG4gICAgdGV4Y29vcmRHbHlwaChnbHlwaCwgaW1nICYmIGltZy5zaGFwZSwgYmF0Y2gudGV4Y29vcmQpXG4gICAgYmF0Y2gucG9zaXRpb24gPSB0bXBQb3NcbiAgICBiYXRjaC5zaGFwZSA9IHRtcFNoYXBlXG4gICAgYmF0Y2gucHVzaCgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dFJlbmRlcmVyIiwiZnVuY3Rpb24gZ2x5cGgoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2U6IGRhdGEucGFnZSxcbiAgICAgICAgaGJ4OiBkYXRhLnhvZmZzZXQsXG4gICAgICAgIGhieTogZGF0YS55b2Zmc2V0LFxuICAgICAgICB3aWR0aDogZGF0YS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkYXRhLmhlaWdodCxcbiAgICAgICAgeG9mZjogZGF0YS54YWR2YW5jZSxcbiAgICAgICAgeDogZGF0YS54LFxuICAgICAgICB5OiBkYXRhLnlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdseXBocyhjaGFycykge1xuICAgIHZhciBvdXQgPSB7fVxuICAgIGNoYXJzLmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgICAgICBvdXRbU3RyaW5nLmZyb21DaGFyQ29kZShjLmlkKV0gPSBnbHlwaChjKVxuICAgIH0pXG4gICAgcmV0dXJuIG91dFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJtZm9udCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VzOiBibWZvbnQucGFnZXMsXG4gICAgICAgIHJlc29sdXRpb246IDcyLFxuICAgICAgICBzaXplOiBibWZvbnQuaW5mby5zaXplLFxuICAgICAgICB1bml0c19wZXJfRU06IDEsXG4gICAgICAgIGJpdG1hcDogdHJ1ZSxcbiAgICAgICAgZmFtaWx5X25hbWU6IGJtZm9udC5pbmZvLmZhY2UsXG4gICAgICAgIGhlaWdodDogYm1mb250LmNvbW1vbi5saW5lSGVpZ2h0LFxuICAgICAgICBkZXNjZW5kZXI6IGJtZm9udC5jb21tb24uYmFzZSxcbiAgICAgICAgYXNjZW5kZXI6IGJtZm9udC5jb21tb24uYmFzZSxcbiAgICAgICAgZ2x5cGhzOiBnbHlwaHMoYm1mb250LmNoYXJzKSxcbiAgICAgICAga2VybmluZzogYm1mb250Lmtlcm5pbmdzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICByZXR1cm4gW1N0cmluZy5mcm9tQ2hhckNvZGUoay5maXJzdCksU3RyaW5nLmZyb21DaGFyQ29kZShrLnNlY29uZCksay5hbW91bnRdXG4gICAgICAgIH0pXG4gICAgfVxufSIsInZhciBCYXNlID0gcmVxdWlyZSgnZm9udHBhdGgtcmVuZGVyZXInKVxudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG4vL1RPRE86IEV2ZW50dWFsbHkgbG90cyBvZiB0aGlzIGNvZGUgd2lsbCBqdXN0IHJlcGxhY2UgZm9udHBhdGgtcmVuZGVyZXIuLi5cblxuZnVuY3Rpb24gRm9udHBhdGhSZW5kZXJlcihvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEZvbnRwYXRoUmVuZGVyZXIpKVxuICAgICAgICByZXR1cm4gbmV3IEZvbnRwYXRoUmVuZGVyZXIob3B0aW9ucylcbiAgICBCYXNlLmNhbGwodGhpcywgb3B0aW9ucylcblxuICAgIHRoaXMuZGF0YSA9IHtcbiAgICAgICAgZ2x5cGhzOiBbXSxcbiAgICAgICAgdW5kZXJsaW5lczogW11cbiAgICB9XG59XG5cbmluaGVyaXRzKEZvbnRwYXRoUmVuZGVyZXIsIEJhc2UpXG5cbkZvbnRwYXRoUmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckdseXBoID0gZnVuY3Rpb24oaSwgZ2x5cGgsIHNjYWxlLCB4LCB5KSB7XG4gICAgdGhpcy5kYXRhLmdseXBocy5wdXNoKG5ldyBHbHlwaChpLCBnbHlwaCwgXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0LmNoYXJDb2RlQXQoaSksIFxuICAgICAgICAgICAgICAgIFsgc2NhbGUsIHRoaXMuZm9udC5iaXRtYXAgPyBzY2FsZSA6IC1zY2FsZSBdLFxuICAgICAgICAgICAgICAgIFsgeCwgeSBdKSlcbn1cblxuRm9udHBhdGhSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyVW5kZXJsaW5lID0gZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuZGF0YS51bmRlcmxpbmVzLnB1c2gobmV3IFVuZGVybGluZShcbiAgICAgICAgWyB4LCB5IF0sXG4gICAgICAgIFsgd2lkdGgsIGhlaWdodCBdXG4gICAgKSlcbn1cblxuRm9udHBhdGhSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oeCwgeSwgc3RhcnQsIGVuZCkge1xuICAgIC8vbmV3IGRhdGEgZm9yIHJlc3VsdFxuICAgIHRoaXMuZGF0YS5nbHlwaHMubGVuZ3RoID0gMFxuICAgIHRoaXMuZGF0YS51bmRlcmxpbmVzLmxlbmd0aCA9IDBcbiAgICBCYXNlLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzLCB4LCB5LCBzdGFydCwgZW5kKVxuICAgIHJldHVybiB0aGlzLmRhdGFcbn1cblxuZnVuY3Rpb24gR2x5cGgoaW5kZXgsIGdseXBoLCBjaGFyQ29kZSwgc2NhbGUsIHBvc2l0aW9uKSB7XG4gICAgdGhpcy5nbHlwaCA9IGdseXBoXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XG4gICAgdGhpcy5jaGFyQ29kZSA9IGNoYXJDb2RlXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlXG59XG5cbmZ1bmN0aW9uIFVuZGVybGluZShwb3NpdGlvbiwgc2l6ZSkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIHRoaXMuc2l6ZSA9IHNpemVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb250cGF0aFJlbmRlcmVyIiwidmFyIEdseXBoSXRlcmF0b3IgPSByZXF1aXJlKCdmb250cGF0aC1nbHlwaC1pdGVyYXRvcicpO1xudmFyIFdvcmRXcmFwID0gcmVxdWlyZSgnZm9udHBhdGgtd29yZHdyYXAnKTtcblxudmFyIHRtcEJvdW5kcyA9IHsgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCwgZ2x5cGhzOiAwIH07XG5cbmZ1bmN0aW9uIFRleHRSZW5kZXJlcihvcHRpb25zKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRleHRSZW5kZXJlcikpXG4gICAgICAgIHJldHVybiBuZXcgVGV4dFJlbmRlcmVyKG9wdGlvbnMpO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zfHx7fVxuXG4gICAgdGhpcy5pdGVyYXRvciA9IG5ldyBHbHlwaEl0ZXJhdG9yKG9wdGlvbnMuZm9udCwgb3B0aW9ucy5mb250U2l6ZSk7XG4gICAgdGhpcy53b3Jkd3JhcCA9IG5ldyBXb3JkV3JhcCgpO1xuXG4gICAgdGhpcy5hbGlnbiA9ICdsZWZ0JztcbiAgICB0aGlzLnVuZGVybGluZSA9IGZhbHNlO1xuXG4gICAgdGhpcy51bmRlcmxpbmVUaGlja25lc3MgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51bmRlcmxpbmVQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl90ZXh0ID0gXCJcIjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hbGlnbiA9PT0gJ3N0cmluZycpXG4gICAgICAgIHRoaXMuYWxpZ24gPSBvcHRpb25zLmFsaWduO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy51bmRlcmxpbmUgPT09ICdib29sZWFuJylcbiAgICAgICAgdGhpcy51bmRlcmxpbmUgPSBvcHRpb25zLnVuZGVybGluZTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudW5kZXJsaW5lVGhpY2tuZXNzID09PSAnbnVtYmVyJylcbiAgICAgICAgdGhpcy51bmRlcmxpbmVUaGlja25lc3MgPSBvcHRpb25zLnVuZGVybGluZVRoaWNrbmVzcztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudW5kZXJsaW5lUG9zaXRpb24gPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLnVuZGVybGluZVBvc2l0aW9uID0gb3B0aW9ucy51bmRlcmxpbmVQb3NpdGlvbjtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudGV4dCA9PT0gJ3N0cmluZycpXG4gICAgICAgIHRoaXMudGV4dCA9IG9wdGlvbnMudGV4dDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubGluZUhlaWdodCA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMubGluZUhlaWdodCA9IG9wdGlvbnMubGluZUhlaWdodDtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMubGV0dGVyU3BhY2luZyA9PT0gJ251bWJlcicpXG4gICAgICAgIHRoaXMubGV0dGVyU3BhY2luZyA9IG9wdGlvbnMubGV0dGVyU3BhY2luZztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JhcE1vZGUgPT09ICdzdHJpbmcnKVxuICAgICAgICB0aGlzLndvcmR3cmFwLm1vZGUgPSBvcHRpb25zLndyYXBNb2RlO1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cmFwV2lkdGggPT09ICdudW1iZXInKVxuICAgICAgICB0aGlzLmxheW91dChvcHRpb25zLndyYXBXaWR0aCk7XG59XG5cbi8vSW50ZXJuYWxseSB3ZSB3aWxsIHVzZSBpbnRlZ2VycyB0byBhdm9pZCBzdHJpbmcgY29tcGFyaXNvbiBmb3IgZWFjaCBnbHlwaFxudmFyIExFRlRfQUxJR04gPSAwLCBDRU5URVJfQUxJR04gPSAxLCBSSUdIVF9BTElHTiA9IDI7XG52YXIgQUxJR05fQVJSQVkgPSBbXG4gICAgJ2xlZnQnLCBcbiAgICAnY2VudGVyJywgXG4gICAgJ3JpZ2h0J1xuXTtcbiAgICBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFRleHRSZW5kZXJlci5wcm90b3R5cGUsIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgbmV3IGZvbnQgZGlmZmVycyBmcm9tIHRoZSBsYXN0LCB0aGUgdGV4dCBsYXlvdXQgaXMgY2xlYXJlZFxuICAgICAqIGFuZCBwbGFjZWQgb250byBhIHNpbmdsZSBsaW5lLiBVc2VycyBtdXN0IG1hbnVhbGx5IHJlLWxheW91dCB0aGUgdGV4dCBcbiAgICAgKiBmb3Igd29yZCB3cmFwcGluZy5cbiAgICAgKi9cbiAgICBcImZvbnRcIjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlcmF0b3IuZm9udDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHZhciBvbGRGb250ID0gdGhpcy5pdGVyYXRvci5mb250O1xuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5mb250ID0gdmFsO1xuICAgICAgICAgICAgaWYgKG9sZEZvbnQgIT09IHRoaXMuaXRlcmF0b3IuZm9udClcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTGF5b3V0KCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBuZXcgZm9udCBzaXplIGRpZmZlcnMgZnJvbSB0aGUgbGFzdCwgdGhlIHRleHQgbGF5b3V0IGlzIGNsZWFyZWRcbiAgICAgKiBhbmQgcGxhY2VkIG9udG8gYSBzaW5nbGUgbGluZS4gVXNlcnMgbXVzdCBtYW51YWxseSByZS1sYXlvdXQgdGhlIHRleHQgXG4gICAgICogZm9yIHdvcmQgd3JhcHBpbmcuXG4gICAgICovXG4gICAgXCJmb250U2l6ZVwiOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVyYXRvci5mb250U2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHZhciBvbGRTaXplID0gdGhpcy5pdGVyYXRvci5mb250U2l6ZTtcblxuICAgICAgICAgICAgdGhpcy5pdGVyYXRvci5mb250U2l6ZSA9IHZhbDtcblxuICAgICAgICAgICAgaWYgKG9sZFNpemUgIT09IHRoaXMuaXRlcmF0b3IuZm9udFNpemUpXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckxheW91dCgpO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJsaW5lSGVpZ2h0XCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmxpbmVIZWlnaHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yLmxpbmVIZWlnaHQgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBcImxldHRlclNwYWNpbmdcIjoge1xuICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZXJhdG9yLmxldHRlclNwYWNpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICB0aGlzLml0ZXJhdG9yLmxldHRlclNwYWNpbmcgPSB2YWw7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBuZXcgdGV4dCBpcyBkaWZmZXJlbnQgZnJvbSB0aGUgbGFzdCwgdGhlIGxheW91dCAoaS5lLiB3b3JkLXdyYXBwaW5nKVxuICAgICAqIGlzIGNsZWFyZWQgYW5kIHRoZSByZXN1bHQgaXMgYSBzaW5nbGUgbGluZSBvZiB0ZXh0IChzaW1pbGFyIHRvIEhUTUw1IGNhbnZhcyB0ZXh0XG4gICAgICogcmVuZGVyaW5nKS5cbiAgICAgKiBcbiAgICAgKiBUaGUgdGV4dCB0aGVuIG5lZWRzIHRvIGJlIHJlLXdvcmR3cmFwcGVkIHdpdGggYSBjYWxsIHRvIGBsYXlvdXQoKWAuXG4gICAgICovXG4gICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHR8fFwiXCI7XG5cbiAgICAgICAgICAgIHZhciBvbGQgPSB0aGlzLl90ZXh0O1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgICAgICAgICB0aGlzLndvcmR3cmFwLnRleHQgPSB0aGlzLnRleHQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl90ZXh0ICE9PSBvbGQpIFxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJMYXlvdXQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vKipcbiAqIENsZWFycyB0aGUgdGV4dCBsYXlvdXQgYW5kIHdvcmQtd3JhcHBpbmcsIHBsYWNpbmcgYWxsIG9mIGl0IG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY2xlYXJMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLndvcmR3cmFwLnRleHQgPSB0aGlzLnRleHQ7XG4gICAgdGhpcy53b3Jkd3JhcC5lbXB0eSgpO1xuXG4gICAgaWYgKHRoaXMuaXRlcmF0b3IuZm9udCkgLy9mb250IG1pZ2h0IG5vdCBoYXZlIGJlZW4gcGFzc2VkIGF0IGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMud29yZHdyYXAuY2xlYXJMYXlvdXQodGhpcy5pdGVyYXRvcik7XG59O1xuXG4vKipcbiAqIENhbGxzIHRoZSB3b3JkIHdyYXBwZXIgdG8gbGF5b3V0IHRoZSBjdXJyZW50IHRleHQgc3RyaW5nLFxuICogYmFzZWQgb24gdGhlIHdyYXAgd2lkdGggYW5kIGFueSBjdXJyZW50IHdvcmR3cmFwcGluZyBvcHRpb25zLlxuICpcbiAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gdGhlIHRleHQgaXMgY2hhbmdlZC4gXG4gKiBcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uKHdyYXBXaWR0aCkge1xuICAgIHRoaXMud29yZHdyYXAudGV4dCA9IHRoaXMudGV4dDtcbiAgICB0aGlzLndvcmR3cmFwLmVtcHR5KCk7XG4gICAgdGhpcy53b3Jkd3JhcC5sYXlvdXQodGhpcy5pdGVyYXRvciwgd3JhcFdpZHRoKTtcbn07XG5cbi8qKlxuICogXCJSZW5kZXJzXCIgdGhpcyBnbHlwaCBhdCB0aGUgZ2l2ZW4gbG9jYXRpb24uIFRoaXMgbWF5IGludm9sdmUgZmlsbGluZ1xuICogYSBWQk8gd2l0aCB2ZXJ0ZXggZGF0YSwgb3IgaXQgbWF5IGJlIGEgZGlyZWN0IGNhbGwgdG8gZHJhdyBhIGJpdG1hcCBnbHlwaFxuICogb3Igc2hhcGUgb3V0bGluZS5cbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlckdseXBoID0gZnVuY3Rpb24oKSB7XG5cbn07XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyVW5kZXJsaW5lID0gZnVuY3Rpb24oKSB7XG5cbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYm91bmRzIG9mIHRoZSBjdXJyZW50IHRleHQgbGF5b3V0LiBcbiAqXG4gKiBUaGUgaGVpZ2h0IGRvZXMgbm90IGV4dGVuZCBwYXN0IHRoZSBiYXNlbGluZSBvZiB0aGVcbiAqIGxhc3QgbGluZTsgdW5sZXNzIGBpbmNsdWRlVW5kZXJsaW5lYCBpcyB0cnVlLCBpbiB3aGljaFxuICogY2FzZSB0aGUgdW5kZXJsaW5lJ3MgcG9zaXRpb24gYW5kIGhlaWdodCBpcyBpbmNsdWRlZFxuICogaW4gdGhlIGNhbGN1bGF0aW9uLiBcbiAqXG4gKiBUaGUgYm91bmRpbmcgeSBwb3NpdGlvbiBpcyBvZmZzZXQgc28gdGhhdCB0aGUgYm94IGhhcyBhbiB1cHBlci1sZWZ0XG4gKiBvcmlnaW4sIGZvciBwYXJpdHkgd2l0aCBIVE1MNSBjYW52YXMgcmVuZGVyaW5nLlxuICogXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluY2x1ZGVVbmRlcmxpbmUgd2hldGhlciB0byBpbmNsdWRlIHRoZSB1bmRlcmxpbmUgaW4gdGhlIGNhbGN1bGF0aW9uLCBkZWZhdWx0IGZhbHNlXG4gKiBAcGFyYW0ge09iamVjdH0gb3V0IGFuIG9wdGlvbmFsIHt3aWR0aCwgaGVpZ2h0fSBvYmplY3QgZm9yIHJlLXVzZVxuICogQHJldHVybiB7T2JqZWN0fSBhIHNpemUgd2l0aCB7IHdpZHRoLCBoZWlnaHQgfSBwcm9wZXJ0aWVzXG4gKi9cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKGluY2x1ZGVVbmRlcmxpbmUsIG91dCkge1xuICAgIGlmICghb3V0KVxuICAgICAgICBvdXQgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcblxuICAgIHZhciB3b3Jkd3JhcHBlciA9IHRoaXMud29yZHdyYXA7XG4gICAgdmFyIGl0ciA9IHRoaXMuaXRlcmF0b3I7XG5cbiAgICAvL3RpZ2h0ZW4gdGhlIGJvdW5kaW5nIGJveCBhcm91bmQgdGhlIGZpcnN0IGxpbmUuLlxuICAgIHZhciBmaXJzdExpbmVIZWlnaHQgPSAwO1xuICAgIGlmICh3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBmaXJzdExpbmUgPSB3b3Jkd3JhcHBlci5saW5lc1swXTtcbiAgICAgICAgaXRyLmdldEJvdW5kcyh0aGlzLnRleHQsIGZpcnN0TGluZS5zdGFydCwgZmlyc3RMaW5lLmVuZCwgdW5kZWZpbmVkLCB0bXBCb3VuZHMpO1xuICAgICAgICBmaXJzdExpbmVIZWlnaHQgPSB0bXBCb3VuZHMuaGVpZ2h0O1xuICAgIH1cblxuICAgIG91dC53aWR0aCA9IHdvcmR3cmFwcGVyLmdldE1heExpbmVXaWR0aCgpOyAgIFxuICAgIG91dC5oZWlnaHQgPSBNYXRoLm1heCgwLCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGgtMSkgKiBpdHIuZ2V0TGluZUdhcCgpICsgZmlyc3RMaW5lSGVpZ2h0O1xuXG4gICAgb3V0LnggPSAwO1xuICAgIG91dC55ID0gLW91dC5oZWlnaHQ7XG5cbiAgICBpZiAoaW5jbHVkZVVuZGVybGluZSkge1xuICAgICAgICB2YXIgdW5kZXJsaW5lSGVpZ2h0ID0gdGhpcy5jb21wdXRlVW5kZXJsaW5lSGVpZ2h0KCk7XG4gICAgICAgIHZhciB1bmRlcmxpbmVQb3NpdGlvbiA9IHRoaXMuY29tcHV0ZVVuZGVybGluZVBvc2l0aW9uKCk7XG4gICAgICAgIHZhciB1bmRlcmxpbmVPZmYgPSB1bmRlcmxpbmVQb3NpdGlvbit1bmRlcmxpbmVIZWlnaHQvMjtcbiAgICAgICAgb3V0LmhlaWdodCArPSB1bmRlcmxpbmVPZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHNjYWxlZCB1bmRlcmxpbmUgaGVpZ2h0IGFzIHBpeGVscywgYmFzZWQgb24gXG4gKiB0aGUgZXhwbGljaXQgYHVuZGVybGluZUhlaWdodGAgKGluIHBpeGVscykuIElmIGB1bmRlcmxpbmVIZWlnaHRgIGlzXG4gKiB1bmRlZmluZWQgb3IgbnVsbCwgaXQgd2lsbCB0cnkgdG8gdXNlIHRoZSBmb250J3Mgbm9uLXplcm8gdW5kZXJsaW5lIGhlaWdodCwgXG4gKiBvdGhlcndpc2UgZGVmYXVsdCB0byAxLzggb2YgdGhlIGZvbnQncyBFTSBzcXVhcmUuXG4gKiBcbiAqIEByZXR1cm4ge051bWJlcn0gdGhlIHBpeGVsIGhlaWdodCBvZiB0aGUgdW5kZXJsaW5lIFxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNvbXB1dGVVbmRlcmxpbmVIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQ7XG4gICAgdmFyIHNjYWxlID0gdGhpcy5pdGVyYXRvci5mb250U2NhbGU7XG4gICAgaWYgKHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzPT09MHx8dGhpcy51bmRlcmxpbmVUaGlja25lc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudW5kZXJsaW5lVGhpY2tuZXNzOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQudW5kZXJsaW5lX3RoaWNrbmVzcykge1xuICAgICAgICByZXR1cm4gZm9udC51bmRlcmxpbmVfdGhpY2tuZXNzICogc2NhbGU7IFxuICAgIH0gZWxzZSBpZiAoZm9udC5iaXRtYXApXG4gICAgICAgIHJldHVybiBmb250LnNpemUvODtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiAoZm9udC51bml0c19wZXJfRU0vOCkqc2NhbGU7XG59O1xuXG4vKipcbiAqIENvbXB1dGVzIHRoZSBzY2FsZWQgdW5kZXJsaW5lIGhlaWdodCBhcyBwaXhlbHMsIGJhc2VkIG9uIFxuICogdGhlIGV4cGxpY2l0IGB1bmRlcmxpbmVQb3NpdGlvbmAgKGluIHBpeGVscykuIElmIGB1bmRlcmxpbmVQb3NpdGlvbmAgaXNcbiAqIHVuZGVmaW5lZCBvciBudWxsLCBpdCB3aWxsIHRyeSB0byB1c2UgdGhlIGZvbnQncyBub24temVybyB1bmRlcmxpbmUgcG9zaXRpb24sIFxuICogb3RoZXJ3aXNlIGRlZmF1bHQgdG8gMS80IG9mIHRoZSBmb250J3MgRU0gc3F1YXJlLlxuICpcbiAqIFRoaXMgaXMgdGhlIFkgb2Zmc2V0IGZyb20gdGhlIHRleHQgYmFzZWxpbmUgdG8gdGhlIGNlbnRlciBvZiB0aGUgdW5kZXJsaW5lIFxuICogYmFyLCBpbiBwaXhlbHMuIEl0IGlzIGdlbmVyYWxseSBhIHBvc2l0aXZlIHZhbHVlLlxuICogXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBwaXhlbCBwb3NpdGlvbiBvZiB0aGUgdW5kZXJsaW5lIFxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmNvbXB1dGVVbmRlcmxpbmVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcbiAgICB2YXIgc2NhbGUgPSB0aGlzLml0ZXJhdG9yLmZvbnRTY2FsZTtcbiAgICAgICAgXG4gICAgaWYgKHRoaXMudW5kZXJsaW5lUG9zaXRpb249PT0wfHx0aGlzLnVuZGVybGluZVBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVuZGVybGluZVBvc2l0aW9uOyBcbiAgICB9IGVsc2UgaWYgKGZvbnQudW5kZXJsaW5lX3Bvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiAtZm9udC51bmRlcmxpbmVfcG9zaXRpb24gKiBzY2FsZTsgXG4gICAgfSBlbHNlIGlmIChmb250LmJpdG1hcCkge1xuICAgICAgICByZXR1cm4gZm9udC5zaXplLzQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChmb250LnVuaXRzX3Blcl9FTS80KSpzY2FsZTtcbiAgICB9XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRlc2NlbnQgb2YgdGhlIGN1cnJlbnQgZm9udCAoYXNzdW1lcyBpdHMgc2l6ZSBcbiAqIGlzIGFscmVhZHkgc2V0KS4gVGhpcyBpcyBhbiBhYnNvbHV0ZSAocG9zaXRpdmUpIHZhbHVlLlxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5nZXREZXNjZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKHRoaXMuaXRlcmF0b3IuZm9udFNjYWxlICogdGhpcy5pdGVyYXRvci5mb250LmRlc2NlbmRlcik7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGRlc2NlbnQgb2YgdGhlIGN1cnJlbnQgZm9udCAoYXNzdW1lcyBpdHMgc2l6ZSBcbiAqIGlzIGFscmVhZHkgc2V0KS4gVGhpcyBpcyBhbiBhYnNvbHV0ZSAocG9zaXRpdmUpIHZhbHVlLlxuICogXG4gKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cbiAqL1xuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5nZXRBc2NlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTWF0aC5hYnModGhpcy5pdGVyYXRvci5mb250U2NhbGUgKiB0aGlzLml0ZXJhdG9yLmZvbnQuYXNjZW5kZXIpO1xufTtcblxuLy9TaWduYWxzIGZvciBzdWJjbGFzc2VzIHRvIG9wdGlvbmFsbHkgaW1wbG1lZW50XG4vL1RoaXMgbWF5IGJlIHVzZWZ1bCB0byBzdG9wL3N0YXJ0IHBhdGhzIHdpdGggZGlmZmVyZW50IGZpbGxzXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uQmVnaW4gPSBmdW5jdGlvbigpIHsgfVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5vbkVuZCA9IGZ1bmN0aW9uKCkgeyB9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLm9uQmVnaW5MaW5lID0gZnVuY3Rpb24obGluZUluZGV4KSB7IH1cblRleHRSZW5kZXJlci5wcm90b3R5cGUub25FbmRMaW5lID0gZnVuY3Rpb24obGluZUluZGV4KSB7IH1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjdXJyZW50IHRleHQgbGF5b3V0LCB3aGVyZSBsb3dlci1sZWZ0IGlzIFxuICogdGhlIG9yaWdpbi4gTXVsdGlwbGUgbGluZXMgd2lsbCBiZSBwb3NpdGlvbmVkIGFib3ZlIHRoZVxuICogb3JpZ2luLlxuICovXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICh4LCB5LCBzdGFydCwgZW5kKSB7XG4gICAgeCA9IHh8fDA7XG4gICAgeSA9IHl8fDA7XG5cbiAgICB2YXIgdGV4dCA9IHRoaXMudGV4dDtcbiAgICB2YXIgd29yZHdyYXBwZXIgPSB0aGlzLndvcmR3cmFwO1xuXG4gICAgLy9pZiB3ZSBoYXZlIG5vdGhpbmcgdG8gZHJhd1xuICAgIGlmICghdGV4dCB8fCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybjtcblxuICAgIC8vZGVmYXVsdCBzdGFydC9lbmQgcGFyYW1zXG4gICAgc3RhcnQgPSBzdGFydHx8MDtcbiAgICBlbmQgPSB0eXBlb2YgZW5kID09PSBcIm51bWJlclwiID8gZW5kIDogdGV4dC5sZW5ndGg7XG5cbiAgICB2YXIgaXRyID0gdGhpcy5pdGVyYXRvcjtcbiAgICB2YXIgc2NhbGUgPSBpdHIuZm9udFNjYWxlO1xuICAgIHZhciBmb250ID0gaXRyLmZvbnQ7XG4gICAgdmFyIHVuZGVybGluZSA9IHRoaXMudW5kZXJsaW5lO1xuXG4gICAgLy91c2VkIGZvciBhbGlnbm1lbnQuLi5cbiAgICB2YXIgbWF4TGluZVdpZHRoID0gd29yZHdyYXBwZXIuZ2V0TWF4TGluZVdpZHRoKCk7XG4gICAgXG4gICAgeSAtPSBNYXRoLm1heCgwLCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGgtMSkgKiBpdHIuZ2V0TGluZUdhcCgpO1xuXG5cbiAgICAvL3VzZSBudW1iZXJzIHRvIGF2b2lkIHN0ciBjb21wYXJlIGZvciBlYWNoIGdseXBoXG4gICAgdmFyIGFsaWduVHlwZSA9IEFMSUdOX0FSUkFZLmluZGV4T2YodGhpcy5hbGlnbnx8XCJcIik7XG4gICAgaWYgKGFsaWduVHlwZT09PS0xKVxuICAgICAgICBhbGlnblR5cGUgPSBMRUZUX0FMSUdOO1xuXG4gICAgdmFyIHVuZGVybGluZVggPSAwO1xuICAgIHZhciB1bmRlcmxpbmVTdGFydFggPSAwO1xuICAgIHZhciB1bmRlcmxpbmVZID0gMDtcbiAgICB2YXIgdW5kZXJsaW5lV2lkdGggPSAwO1xuXG4gICAgdmFyIHVuZGVybGluZVN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIC8vVHJ5IHRvIHVzZSB1c2VyLXNwZWNpZmllZCB1bmRlcmxpbmUgc2V0dGluZ3MsIG90aGVyd2lzZSB1c2UgdGhlIGZvbnQgaWYgcG9zc2libGUsXG4gICAgLy9vdGhlcndpc2UganVzdCB1c2UgYSByb3VnaCBkZWZhdWx0IGJhc2VkIG9uIEVNIHNxdWFyZS4gICAgXG4gICAgdmFyIHVuZGVybGluZVBvcyA9IHRoaXMuY29tcHV0ZVVuZGVybGluZVBvc2l0aW9uKCk7XG4gICAgdmFyIHVuZGVybGluZUhlaWdodCA9IHRoaXMuY29tcHV0ZVVuZGVybGluZUhlaWdodCgpO1xuXG4gICAgdGhpcy5vbkJlZ2luKCk7XG4gICAgXG4gICAgLy9zZXQgdGhlIG9yaWdpbiBhbmQgcGVuIHBvc2l0aW9uXG4gICAgaXRyLmJlZ2luKHgsIHkpO1xuICAgIGZvciAodmFyIGs9MDsgazx3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgbGluZSA9IHdvcmR3cmFwcGVyLmxpbmVzW2tdO1xuICAgICAgICB1bmRlcmxpbmVTdGFydGVkID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIGxhc3RBZHZhbmNlID0gMDtcblxuICAgICAgICB2YXIgbGluZVggPSBpdHIucGVuLng7XG4gICAgICAgIHZhciBsaW5lWSA9IGl0ci5wZW4ueTtcblxuICAgICAgICB0aGlzLm9uQmVnaW5MaW5lKGspO1xuXG4gICAgICAgIC8vVE9ETzogdXNlIG11bHRpcGxlIE5vZGVzIGluc2lkZSBhIHNpbmdsZSBsaW5lXG4gICAgICAgIC8vYSBub2RlIHdpbGwgaGF2ZSBhdHRyaWJ1dGVzIGxpa2UgZm9udCwgc2l6ZSwgY29sb3IsIFxuICAgICAgICAvL2xldHRlci1zcGFjaW5nLCB1bmRlcmxpbmUsIGV0Yy5cbiAgICAgICAgLy9UaGlzIHdpbGwgYWZmZWN0IHRoZSBsaW5lIGhlaWdodCwgYXMgaXQgd2lsbCBoYXZlIHRvIGJlIHRoZSBtYXggb2YgYWxsIG5vZGVzLlxuXG4gICAgICAgIGZvciAodmFyIGk9bGluZS5zdGFydDsgaTxsaW5lLmVuZDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hyID0gdGV4dC5jaGFyQXQoaSk7XG5cbiAgICAgICAgICAgIC8vU3RlcCB0aGUgaXRlcmF0b3IsIG1vdmluZyBmb3J3YXJkIGJhc2VkIG9uIGtlcm5pbmcgZnJvbSBsYXN0IGNoYXJcbiAgICAgICAgICAgIHZhciBnbHlwaCA9IGl0ci5zdGVwKHRleHQsIGkpO1xuXG4gICAgICAgICAgICBpZiAoIWdseXBoKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvL3dpdGhpbiBkZXNpcmVkIHJhbmdlXG4gICAgICAgICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR4ID0gaXRyLnBlbi54O1xuICAgICAgICAgICAgICAgIHZhciB0eSA9IGl0ci5wZW4ueTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGlnblR5cGUgPT09IENFTlRFUl9BTElHTikge1xuICAgICAgICAgICAgICAgICAgICB0eCArPSAobWF4TGluZVdpZHRoLWxpbmUud2lkdGgpLzI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbGlnblR5cGUgPT09IFJJR0hUX0FMSUdOKSB7XG4gICAgICAgICAgICAgICAgICAgIHR4ICs9IChtYXhMaW5lV2lkdGgtbGluZS53aWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF1bmRlcmxpbmVTdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVggPSB0eDtcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lU3RhcnRYID0gdHg7XG4gICAgICAgICAgICAgICAgICAgIHVuZGVybGluZVkgPSB0eSArIHVuZGVybGluZVBvcztcbiAgICAgICAgICAgICAgICAgICAgdW5kZXJsaW5lV2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmVXaWR0aCA9IHR4IC0gdW5kZXJsaW5lU3RhcnRYO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyR2x5cGgoaSwgZ2x5cGgsIHNjYWxlLCB0eCwgdHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL0FkdmFuY2UgdGhlIGl0ZXJhdG9yIHRvIHRoZSBuZXh0IGdseXBoIGluIHRoZSBzdHJpbmdcbiAgICAgICAgICAgIHZhciBuZXdBZHZhbmNlID0gaXRyLmFkdmFuY2UoZ2x5cGgpO1xuXG4gICAgICAgICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDwgZW5kKVxuICAgICAgICAgICAgICAgIGxhc3RBZHZhbmNlID0gbmV3QWR2YW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25FbmRMaW5lKGspO1xuXG4gICAgICAgIGlmICh1bmRlcmxpbmUpIHtcbiAgICAgICAgICAgIHVuZGVybGluZVdpZHRoICs9IGxhc3RBZHZhbmNlO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJVbmRlcmxpbmUodW5kZXJsaW5lWCwgdW5kZXJsaW5lWS11bmRlcmxpbmVIZWlnaHQvMiwgdW5kZXJsaW5lV2lkdGgsIHVuZGVybGluZUhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vU3RlcHMgZG93biBhIGxpbmUuLi5cbiAgICAgICAgaWYgKGsgPCB3b3Jkd3JhcHBlci5saW5lcy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgaXRyLmFkdmFuY2VMaW5lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2ZpbmlzaCB0aGUgaXRlcmF0b3IuLi5cbiAgICBpdHIuZW5kKCk7XG4gICAgdGhpcy5vbkVuZCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0UmVuZGVyZXI7IiwidmFyIHV0aWwgPSByZXF1aXJlKCdmb250cGF0aC11dGlsJyk7XG5cbnZhciBERUZBVUxUX1RBQl9XSURUSCA9IDQ7XG5cbmZ1bmN0aW9uIEdseXBoSXRlcmF0b3IoZm9udCwgZm9udFNpemUpIHtcbiAgICB0aGlzLl9mb250U2l6ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mb250U2NhbGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZm9udCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmZvbnRTY2FsZSA9IDEuMDtcbiAgICB0aGlzLmtlcm5pbmcgPSB0cnVlO1xuICAgIHRoaXMubGV0dGVyU3BhY2luZyA9IDA7XG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgIFxuICAgIHRoaXMuZm9udFNpemUgPSB0eXBlb2YgZm9udFNpemUgPT09ICdudW1iZXInXG4gICAgICAgICAgICA/IGZvbnRTaXplXG4gICAgICAgICAgICA6IChmb250ID8gZm9udC5zaXplIDogdW5kZWZpbmVkKTtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuXG4gICAgLy9OdW1iZXIgb2Ygc3BhY2VzIGZvciBhIHRhYiBjaGFyYWN0ZXJcbiAgICB0aGlzLnRhYldpZHRoID0gREVGQVVMVF9UQUJfV0lEVEg7XG4gICAgdGhpcy5fdGFiR2x5cGggPSBudWxsO1xuXG4gICAgdGhpcy5vcmlnaW4gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICB0aGlzLnBlbiA9IHsgeDogMCwgeTogMCB9O1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR2x5cGhJdGVyYXRvci5wcm90b3R5cGUsIFwiZm9udFwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnQ7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24oZm9udCkge1xuICAgICAgICB0aGlzLl9mb250ID0gZm9udDtcblxuICAgICAgICAvL0RldGVybWluZSB0aGUgbmV3IHNjYWxpbmcgZmFjdG9yLi4uXG4gICAgICAgIGlmIChmb250KSB7XG4gICAgICAgICAgICB0aGlzLmZvbnRTY2FsZSA9IHV0aWwuZ2V0UHhTY2FsZShmb250LCB0aGlzLmZvbnRTaXplKTtcblxuICAgICAgICAgICAgLy9VcGRhdGVzIHRoZSB0YWIgZ2x5cGhcbiAgICAgICAgICAgIHRoaXMudGFiV2lkdGggPSB0aGlzLl90YWJXaWR0aDtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuLy9UaGVyZSBtaWdodCBiZSBhIGJldHRlciB3YXkgb2YgaGFuZGxpbmcgdGFiIHdpZHRoIHVzaW5nIEZyZWVUeXBlID8gXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoR2x5cGhJdGVyYXRvci5wcm90b3R5cGUsIFwidGFiV2lkdGhcIiwge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhYldpZHRoO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB0aGlzLl90YWJXaWR0aCA9IHZhbD09PTAgfHwgdmFsID8gdmFsIDogREVGQVVMVF9UQUJfV0lEVEg7XG4gICAgICAgIHRoaXMuX3RhYkdseXBoID0ge307XG5cbiAgICAgICAgdmFyIHNwYWNlR2x5cGggPSB0aGlzLmZvbnQgPyB0aGlzLmZvbnQuZ2x5cGhzW1wiIFwiXSA6IG51bGw7XG4gICAgICAgIGlmIChzcGFjZUdseXBoKSB7XG4gICAgICAgICAgICB0aGlzLl90YWJHbHlwaCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBzcGFjZUdseXBoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFiR2x5cGhba10gPSBzcGFjZUdseXBoW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX3RhYkdseXBoLnhvZmYpXG4gICAgICAgICAgICAgICAgdGhpcy5fdGFiR2x5cGgueG9mZiAqPSB0aGlzLl90YWJXaWR0aDtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEdseXBoSXRlcmF0b3IucHJvdG90eXBlLCBcImZvbnRTaXplXCIsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2ZvbnRTaXplICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvbnQuYml0bWFwIFxuICAgICAgICAgICAgICAgID8gdGhpcy5mb250LnNpemUgXG4gICAgICAgICAgICAgICAgOiB1dGlsLnBvaW50VG9QaXhlbCh0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRTaXplO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICB0aGlzLl9mb250U2l6ZSA9IHZhbDtcblxuICAgICAgICAvL0lmIHRoZSBmb250IGlzIGFscmVhZHkgc2V0LCBkZXRlcm1pbmUgdGhlIG5ldyBzY2FsaW5nIGZhY3RvclxuICAgICAgICBpZiAodGhpcy5fZm9udCkge1xuICAgICAgICAgICAgdGhpcy5mb250U2NhbGUgPSB1dGlsLmdldFB4U2NhbGUodGhpcy5fZm9udCwgdGhpcy5fZm9udFNpemUpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5nZXRLZXJuaW5nID0gZnVuY3Rpb24obGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgZm9udCA9IHRoaXMuZm9udDtcblxuICAgIGlmICghZm9udCB8fCAhZm9udC5rZXJuaW5nKVxuICAgICAgICByZXR1cm4gMDtcblxuICAgIHZhciB0YWJsZSA9IHRoaXMua2VybmluZ1RhYmxlO1xuXG4gICAgZm9yICh2YXIgaT0wOyBpPGZvbnQua2VybmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgayA9IGZvbnQua2VybmluZ1tpXTtcbiAgICAgICAgaWYgKGtbMF0gPT09IGxlZnQgJiYga1sxXSA9PT0gcmlnaHQpIFxuICAgICAgICAgICAgcmV0dXJuIGtbMl07XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuYmVnaW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5vcmlnaW4ueCA9IHh8fDA7XG4gICAgdGhpcy5vcmlnaW4ueSA9IHl8fDA7XG5cbiAgICB0aGlzLnBlbi54ID0gdGhpcy5vcmlnaW4ueDtcbiAgICB0aGlzLnBlbi55ID0gdGhpcy5vcmlnaW4ueTtcbn07XG5cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vLi4gbWFpbmx5IGZvciBjb25zaXN0ZW5jeSB3aXRoIGJlZ2luKClcbiAgICAvL01pZ2h0IGJlIHVzZWZ1bCBsYXRlciBvblxufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZ2V0TGluZUdhcCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vTGluZSBoZWlnaHQgaGFuZGxpbmcgaXMgYSBtZXNzIGluIGJyb3dzZXJzLlxuICAgIC8vTWF5YmUgdGhlIGJlc3Qgc29sdXRpb24gaXMgdG8gZW5jb3VyYWdlIHVzZXJzIHRvIFxuICAgIC8vc3BlY2lmeSBwaXhlbCBsaW5lIGhlaWdodHMgaWYgdGhleSB3YW50IHRvIG1hdGNoIGJyb3dzZXIgc3RhbmRhcmRzLFxuICAgIC8vb3RoZXJ3aXNlIGl0J3MgdW5yZWFzb25hYmxlIHRvIGV4cGVjdCB0aGUgbGluZSBnYXBzIHRvIGxpbmUgdXAgZXhhY3RseVxuICAgIC8vYWNyb3NzIGFsbCBicm93c2Vycy4gRXhhbXBsZSBvZiB0aGUgZGlzYXN0ZXI6XG4gICAgLy9odHRwOi8vbGlzdHMudzMub3JnL0FyY2hpdmVzL1B1YmxpYy93d3ctc3R5bGUvMjAwOEphbi8wNDEzLmh0bWxcblxuICAgIC8vRm9yIHJlZmVyZW5jZSwgc29tZSBiYXNlbGluZS10by1iYXNlbGluZSBjYWxjdWxhdGlvbnM6XG4gICAgLy9odHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vdHlwb2dyYXBoeS9vdHNwZWMvcmVjb20uaHRtXG4gICAgLy9mcmVldHlwZS5vcmcvZnJlZXR5cGUyL2RvY3MvcmVmZXJlbmNlL2Z0Mi1iYXNlX2ludGVyZmFjZS5odG1sXG4gICAgLy9odHRwOi8vd3d3LmZyZWV0eXBlLm9yZy9mcmVldHlwZTIvZG9jcy9nbHlwaHMvZ2x5cGhzLTMuaHRtbFxuXG4gICAgLy9VbmZvcnR1bmF0ZWx5IG5vbmUgb2YgdGhlc2UgYXJlIHByb2R1Y2luZyBsaW5lLWhlaWdodHMgdGhhdCBhdm9pZCBvdmVybGFwcGluZ1xuICAgIC8vb3IgcmVzZW1ibGUgYnJvd3NlciByZW5kZXJpbmcgaW4gYW55IHdheS4gXG5cbiAgICAvLyBJZiBDU1MgdXNlcyAxZW0gb3IgMSwgdGhlIGJyb3dzZXIgb2Zmc2V0cyB0aGUgbGluZSBieSB0aGUgXG4gICAgLy8gZm9udCdzIHBpeGVsIHNpemUuIElmIGFuIGV4YWN0IHBpeGVsIGxpbmUtaGVpZ2h0IGlzIHNwZWNpZmllZCxcbiAgICAvLyB0aGUgYnJvd3NlciB3aWxsIHVzZSB0aGF0ICsgYSBjb21wdXRlZCBcImxpbmVnYXAuXCIgXG4gICAgLy8gSWYgJ2F1dG8nIGlzIHNwZWNpZmllZCBmb3IgbGluZS1oZWlnaHQsIHRoZSBjYWxjdWxhdGlvbnMgc2VlbVxuICAgIC8vIG11Y2ggbW9yZSBjb21wbGV4IGFuZCBicm93c2VyL3BsYXRmb3JtIGRlcGVuZGVudCAobm90IGluY2x1ZGVkIGhlcmUpLlxuICAgIFxuICAgIHZhciBmb250ID0gdGhpcy5mb250LFxuICAgICAgICBzY2FsZSA9IHRoaXMuZm9udFNjYWxlO1xuICAgIHZhciBnYXAgPSAoZm9udC5oZWlnaHQgLSBmb250LmFzY2VuZGVyICsgTWF0aC5hYnMoZm9udC5kZXNjZW5kZXIpKSAqIHNjYWxlOyAgICBcbiAgICB2YXIgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcbiAgICBcbiAgICBsaW5lSGVpZ2h0ID0gKGxpbmVIZWlnaHQ9PT0wfHxsaW5lSGVpZ2h0KSBcbiAgICAgICAgICAgID8gKGxpbmVIZWlnaHQgKyBnYXApXG4gICAgICAgICAgICA6IHRoaXMuZm9udFNpemU7XG4gICAgcmV0dXJuIGxpbmVIZWlnaHQ7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgdGhpcy5vcmlnaW4ueCArPSB4fHwwO1xuICAgIHRoaXMub3JpZ2luLnkgKz0geXx8MDtcblxuICAgIHRoaXMucGVuLnggKz0geHx8MDtcbiAgICB0aGlzLnBlbi55ICs9IHl8fDA7XG59O1xuXG5HbHlwaEl0ZXJhdG9yLnByb3RvdHlwZS5zdGVwID0gZnVuY3Rpb24odGV4dCwgaW5kZXgpIHtcbiAgICB2YXIgc2NhbGUgPSB0aGlzLmZvbnRTY2FsZSxcbiAgICAgICAgZm9udCA9IHRoaXMuX2ZvbnQ7XG5cbiAgICB2YXIgY2hyID0gdGV4dC5jaGFyQXQoaW5kZXgpOyBcblxuICAgIGlmIChjaHIgPT09ICdcXHQnICYmIHRoaXMuX3RhYkdseXBoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90YWJHbHlwaDtcbiAgICB9XG5cbiAgICAvL1NraXAgbWlzc2luZyBjaGFyYWN0ZXJzLi4uXG4gICAgaWYgKCEoY2hyIGluIGZvbnQuZ2x5cGhzKSlcbiAgICAgICAgcmV0dXJuO1xuICAgIFxuICAgIHZhciBnbHlwaCA9IGZvbnQuZ2x5cGhzW2Nocl07XG5cbiAgICAvL0lmIHdlIGhhdmUgYSBjaGFyIHRvIHRoZSBsZWZ0LCBkZXRlcm1pbmUgaXRzIGtlcm5pbmdcbiAgICBpZiAoaW5kZXggPiAwICYmIHRoaXMua2VybmluZykge1xuICAgICAgICB2YXIga2VybiA9IHRoaXMuZ2V0S2VybmluZyh0ZXh0LmNoYXJBdChpbmRleC0xKSwgY2hyKTtcbiAgICAgICAgdGhpcy5wZW4ueCArPSAoa2VybipzY2FsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdseXBoO1xufTtcblxuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuYWR2YW5jZUxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBlbi55ICs9IHRoaXMuZ2V0TGluZUdhcCgpO1xuICAgIHRoaXMucGVuLnggPSB0aGlzLm9yaWdpbi54O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgYWZ0ZXIgc3RlcC4gXG4gKi9cbkdseXBoSXRlcmF0b3IucHJvdG90eXBlLmFkdmFuY2UgPSBmdW5jdGlvbihnbHlwaCkge1xuICAgIHZhciBhZHZhbmNlID0gKGdseXBoLnhvZmYgKiB0aGlzLmZvbnRTY2FsZSk7XG4gICAgLy8gQWR2YW5jZSB0byBuZXh0IHBlbiBwb3NpdGlvblxuICAgIHRoaXMucGVuLnggKz0gYWR2YW5jZSArIHRoaXMubGV0dGVyU3BhY2luZztcbiAgICByZXR1cm4gYWR2YW5jZTtcbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyB0aGUgYm91bmRzIG9mIHRoZSBnaXZlblxuICogdGV4dCAoZnJvbSBzdGFydCBhbmQgZW5kIHBvc2l0aW9ucykgYXMgaWYgdGhleSB3ZXJlIGxhaWQgb3V0IGhvcml6b250YWxseSxcbiAqIGxlZnQgdG8gcmlnaHQuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB0aGlzIHdpbGwgbm90IGFsdGVyIHRoZSBjdXJyZW50IHBlbiBhbmQgb3JpZ2luIHBvc2l0aW9ucy5cbiAqIFRoaXMgd2F5IGl0IGNhbiBiZSB1dGlsaXplZCBpbnNpZGUgYSBnbHlwaCBpdGVyYXRpb24gKGkuZS4gZm9yIHJlbmRlcmluZykuXG4gKlxuICogSWYgYGF2YWlsYWJsZVdpZHRoYCBpcyBzcGVjaWZpZWQsIHRoaXMgd2lsbCBicmVhayBiZWZvcmUgcmVhY2hpbmcgdGhlIHNwZWNpZmllZFxuICogcGl4ZWwgd2lkdGgsIHRvIGVuc3VyZSB0aGF0IGFsbCBnbHlwaHMgd2lsbCBmaXQgaW5zaWRlIHRoZSBib3VuZHMuIFxuICpcbiAqIFRoZSByZXR1cm4gb2JqZWN0IGFsc28gaW5jbHVkZXMgYSBgZ2x5cGhzYCBwcm9wZXJ0eSwgd2hpY2ggaXMgdGhlIG51bWJlciBvZiBnbHlwaHNcbiAqIHRoYXQgYXJlIHZpc2libGUgd2l0aGluIHRoZSByZXR1cm5lZCBib3VuZHMuIFxuICpcbiAqIElmIGBvdXRgIGlzIHNwZWNpZmllZCAoYW4gb2JqZWN0IHdpdGggeCwgeSwgd2lkdGgsIGhlaWdodCwgYW5kIGdseXBoIHByb3BlcnRpZXMpLFxuICogaXQgd2lsbCBiZSByZS11c2VkLiBPdGhlcndpc2UgYSBuZXcgb2JqZWN0IGlzIGNyZWF0ZWQuXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0IHRoZSB0ZXh0IHRvIGNoZWNrXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgdGhlIHN0YXJ0IHBvc2l0aW9uLCBkZWZhdWx0cyB0byAwXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kIHRoZSBlbmQgcG9zaXRpb24sIGV4Y2x1c2l2ZSwgZGVmYXVsdHMgdG8gdGV4dCBsZW5ndGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBhdmFpbGFibGVXaWR0aCB0aGUgd2lkdGggYmVmb3JlIHN0b3BwaW5nIHRoZSBib3VuZCBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IG91dCBhbiBvYmplY3QgdG8gcmUtdXNlIGZvciB0aGUgcmV0dXJuIHZhbHVlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBib3VuZHMgYW5kIGdseXBoIGNvdW50IHt4LHksd2lkdGgsaGVpZ2h0LGdseXBoc31cbiAqL1xuR2x5cGhJdGVyYXRvci5wcm90b3R5cGUuZ2V0Qm91bmRzID0gZnVuY3Rpb24odGV4dCwgc3RhcnQsIGVuZCwgYXZhaWxhYmxlV2lkdGgsIG91dCkge1xuICAgIGlmICghb3V0KVxuICAgICAgICBvdXQgPSB7IHg6MCwgeTowLCB3aWR0aDogMCwgaGVpZ2h0OiAwLCBnbHlwaHM6IDAgfTtcblxuICAgIHZhciBjaGVja1dpZHRoID0gYXZhaWxhYmxlV2lkdGg9PT0wfHxhdmFpbGFibGVXaWR0aDtcblxuICAgIHN0YXJ0ID0gc3RhcnR8fDA7XG4gICAgZW5kID0gZW5kPT09MHx8ZW5kID8gZW5kIDogdGV4dC5sZW5ndGg7XG5cbiAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcblxuICAgIG91dC54ID0gMDtcbiAgICBvdXQueSA9IDA7XG4gICAgb3V0LmdseXBocyA9IDA7XG5cbiAgICB2YXIgb2xkUGVuWCA9IHRoaXMucGVuLngsXG4gICAgICAgIG9sZFBlblkgPSB0aGlzLnBlbi55LFxuICAgICAgICBvbGRPcmlnaW5YID0gdGhpcy5vcmlnaW4ueCxcbiAgICAgICAgb2xkT3JpZ2luWSA9IHRoaXMub3JpZ2luLnk7XG5cblxuICAgIHZhciBmb250ID0gdGhpcy5mb250O1xuICAgIHRoaXMuYmVnaW4oKTtcbiAgICBmb3IgKHZhciBpPXN0YXJ0OyBpPGVuZDsgaSsrKSB7XG4gICAgICAgIHZhciBjaHIgPSB0ZXh0LmNoYXJBdChpKTtcblxuICAgICAgICAvL3N0ZXAgdGhlIGl0ZXJhdG9yXG4gICAgICAgIHZhciBnbHlwaCA9IHRoaXMuc3RlcCh0ZXh0LCBpKTtcblxuICAgICAgICAvL2lmIHRoZSBnbHlwaCBpcyB2YWxpZCwgd2UgY2FuIGFkdmFuY2UgcGFzdCBpdCBhbmQgY2FsY3VsYXRlIG5ldyBoZWlnaHRcbiAgICAgICAgaWYgKGdseXBoKSB7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gKGdseXBoLmhlaWdodCkqdGhpcy5mb250U2NhbGU7XG5cbiAgICAgICAgICAgIG91dC55ID0gTWF0aC5tYXgob3V0LnksIHRoaXMuZm9udFNjYWxlKihnbHlwaC5oZWlnaHQtZ2x5cGguaGJ5KSk7XG5cbiAgICAgICAgICAgIG1heEhlaWdodCA9IE1hdGgubWF4KG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBsYXN0QWR2YW5jZSA9IHRoaXMuYWR2YW5jZShnbHlwaCk7XG5cbiAgICAgICAgICAgIC8vaWYgd2UncmUgcGFzdCB0aGUgYXZhaWxhYmxlIHdpZHRoXG4gICAgICAgICAgICB2YXIgbmV3V2lkdGggPSB0aGlzLnBlbi54IC0gdGhpcy5vcmlnaW4ueDtcbiAgICAgICAgICAgIGlmIChjaGVja1dpZHRoICYmIChuZXdXaWR0aCAtIGF2YWlsYWJsZVdpZHRoID4gMC4wMDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZW4ueCAtPSBsYXN0QWR2YW5jZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0LmdseXBocysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMuZW5kKCk7XG5cbiAgICBvdXQud2lkdGggPSB0aGlzLnBlbi54IC0gdGhpcy5vcmlnaW4ueDtcbiAgICBvdXQuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgdGhpcy5wZW4ueCA9IG9sZFBlblg7XG4gICAgdGhpcy5wZW4ueSA9IG9sZFBlblk7XG4gICAgdGhpcy5vcmlnaW4ueCA9IG9sZE9yaWdpblg7XG4gICAgdGhpcy5vcmlnaW4ueSA9IG9sZE9yaWdpblk7XG5cbiAgICByZXR1cm4gb3V0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBHbHlwaEl0ZXJhdG9yOyIsIi8vIG1vZHVsZS5leHBvcnRzLnBvaW50c1RvUGl4ZWxzID0gZnVuY3Rpb24ocG9pbnRTaXplLCByZXNvbHV0aW9uKSB7XG4vLyBcdHJlc29sdXRpb24gPSB0eXBlb2YgcmVzb2x1dGlvbiA9PT0gXCJudW1iZXJcIiA/IHJlc29sdXRpb24gOiA3Mjtcbi8vIFx0cmV0dXJuIHBvaW50U2l6ZSAqIHJlc29sdXRpb24gLyA3Mjtcbi8vIH07XG5cbi8vIG1vZHVsZS5leHBvcnRzLmNvb3JkVG9QaXhlbCA9IGZ1bmN0aW9uKGNvb3JkLCBwaXhlbFNpemUsIGVtU2l6ZSkge1xuLy8gXHRlbVNpemUgPSB0eXBlb2YgZW1TaXplID09PSBcIm51bWJlclwiID8gZW1TaXplIDogMjA0ODtcbi8vIFx0cmV0dXJuIGNvb3JkICogcGl4ZWxTaXplIC8gZW1TaXplO1xuLy8gfTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHB0IHNpemUgdG8gcHggc2l6ZSwgbmFtZWx5IHVzZWZ1bCBmb3IgbWF0Y2hpbmdcbiAqIHNpemUgd2l0aCBDU1Mgc3R5bGVzLiBJZiBubyBEUEkgaXMgc3BlY2lmaWVkLCA5NiBpcyBhc3N1bWVkXG4gKiAoYXMgaXQgbGVhZHMgdG8gY29ycmVjdCByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzKS5cbiAqIFxuICogQHBhcmFtICB7TnVtYmVyfSBmb250U2l6ZSB0aGUgZGVzaXJlZCBmb250IHNpemUgaW4gcG9pbnRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRwaSAgICAgIHRoZSBleHBlY3RlZCBEUEksIGdlbmVyYWxseSA5NiBmb3IgYnJvd3NlcnNcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgdGhlIHJvdW5kZWQgcGl4ZWwgZm9udCBzaXplXG4gKi9cbm1vZHVsZS5leHBvcnRzLnBvaW50VG9QaXhlbCA9IGZ1bmN0aW9uKGZvbnRTaXplLCBkcGkpIHtcbiAgICBkcGkgPSBkcGl8fGRwaT09PTAgPyBkcGkgOiA5NjtcbiAgICBmb250U2l6ZSA9IGZvbnRTaXplICogZHBpIC8gNzI7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZm9udFNpemUpO1xufTtcblxuLyoqXG4gKiBGb3IgdGhlIGdpdmVuIGZvbnQgYW5kIChwaXhlbCkgZm9udCBzaXplLCB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZVxuICogc2NhbGUgdGhhdCB3aWxsIG5lZWQgdG8gYmUgYXBwbGllZCB0byBFTSB1bml0cyAoaS5lLiBmb250IHBhdGhzKSBcbiAqIHRvIGhhdmUgdGhlIGZvbnQgcmVuZGVyIGF0IHRoZSBleHBlY3RlZCBzaXplIChpLmUuIHRvIG1hdGNoIHRoZSBicm93c2VyKS5cbiAqXG4gKiBJZiBubyBmb250IHNpemUgaXMgc3BlY2lmaWVkLCB3ZSB3aWxsIHVzZSB0aGUgZGVmYXVsdCBmb250IHNpemUgKHdoaWNoIGlzIGluIHBvaW50cylcbiAqIGFuZCBjb252ZXJ0IGl0IHRvIHBpeGVscy4gXG4gKiBcbiAqIEBwYXJhbSAge0ZvbnR9IGZvbnQgICAgIGEgZm9udCBvYmplY3QgZnJvbSB0aGUgZm9udHBhdGggdG9vbFxuICogQHBhcmFtICB7TnVtYmVyfSBmb250U2l6ZSB0aGUgZGVzaXJlZCBmb250IHNpemUsIGRlZmF1bHRzIHRvIHRoZSBmb250J3MgZGVmYXVsdCBzaXplXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHJldHVybnMgdGhlIHNjYWxlIGZvciB0aGlzIGZvbnQgc2l6ZSAgICAgICAgIFxuICovXG5tb2R1bGUuZXhwb3J0cy5nZXRQeFNjYWxlID0gZnVuY3Rpb24oZm9udCwgZm9udFNpemUpIHtcbiAgICBpZiAoZm9udC5iaXRtYXApXG4gICAgICAgIHJldHVybiAxLjA7XG5cbiAgICAvL0lmIG5vIGZvbnRTaXplIGlzIHNwZWNpZmllZCwgaXQgd2lsbCBqdXN0IGZhbGwgYmFjayB0byB1c2luZyB0aGUgZm9udCdzIG93biBzaXplIHdpdGggOTYgRFBJLlxuICAgIGZvbnRTaXplID0gdHlwZW9mIGZvbnRTaXplID09PSBcIm51bWJlclwiID8gZm9udFNpemUgOiB0aGlzLnBvaW50VG9QaXhlbChmb250LnNpemUpO1xuXG4gICAgLy9UYWtlcyBpbiBhIGZvbnQgc2l6ZSBpbiBQSVhFTFMgYW5kIGdpdmVzIHVzIHRoZSBleHBlY3RlZCBzY2FsaW5nIGZhY3RvclxuICAgIHZhciBzeiA9IGZvbnQudW5pdHNfcGVyX0VNLzY0O1xuICAgIHN6ID0gKHN6L2ZvbnQuc2l6ZSAqIGZvbnRTaXplKTtcblxuICAgIHJldHVybiAoKGZvbnQucmVzb2x1dGlvbiAqIDEvNzIgKiBzeikgLyBmb250LnVuaXRzX3Blcl9FTSk7XG59O1xuXG4vKipcbiAqIEZvciB0aGUgZ2l2ZW4gZm9udCBhbmQgKHBvaW50KSBmb250IHNpemUsIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlXG4gKiBzY2FsZSB0aGF0IHdpbGwgbmVlZCB0byBiZSBhcHBsaWVkIHRvIEVNIHVuaXRzIChpLmUuIGZvbnQgcGF0aHMpIFxuICogdG8gaGF2ZSB0aGUgZm9udCByZW5kZXIgYXQgdGhlIGV4cGVjdGVkIHNpemUgKGkuZS4gdG8gbWF0Y2ggdGhlIGJyb3dzZXIpLlxuICogXG4gKiBJZiBubyBmb250IHNpemUgaXMgc3BlY2lmaWVkLCB3ZSB3aWxsIHVzZSB0aGUgZGVmYXVsdCBmb250IHNpemUuXG4gKiBcbiAqIEBwYXJhbSAge0ZvbnR9IGZvbnQgICAgICAgYSBmb250IG9iamVjdCBmcm9tIHRoZSBmb250cGF0aCB0b29sXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGZvbnRTaXplIHRoZSBkZXNpcmVkIGZvbnQgc2l6ZSwgZGVmYXVsdHMgdG8gdGhlIGZvbnQncyBkZWZhdWx0IHNpemVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgdGhlIHNjYWxlIGZvciB0aGlzIGZvbnQgc2l6ZVxuICovXG5tb2R1bGUuZXhwb3J0cy5nZXRQdFNjYWxlID0gZnVuY3Rpb24oZm9udCwgZm9udFNpemUpIHtcbiAgICBmb250U2l6ZSA9IHR5cGVvZiBmb250U2l6ZSA9PT0gXCJudW1iZXJcIiA/IGZvbnRTaXplIDogZm9udC5zaXplO1xuICAgIGZvbnRTaXplID0gdGhpcy5wb2ludFRvUGl4ZWwoZm9udFNpemUpO1xuICAgIHJldHVybiB0aGlzLmdldFB4U2NhbGUoZm9udCwgZm9udFNpemUpO1xufTtcbiIsInZhciB0bXBCb3VuZHMgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAsIGdseXBoczogMCB9O1xuXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoY2hyKSB7XG5cdHJldHVybiBjaHI9PT0nICdcblx0XHR8fCBjaHI9PT0nXFxuJ1xuXHRcdHx8IGNocj09PSdcXHInXG5cdFx0fHwgY2hyPT09J1xcdCc7XG59XG5cbmZ1bmN0aW9uIGlkeE9mKHRleHQsIGNociwgc3RhcnQsIGVuZCkge1xuXHR2YXIgaWR4ID0gdGV4dC5pbmRleE9mKGNociwgc3RhcnQpO1xuXHRpZiAoaWR4ID09PSAtMSB8fCBpZHggPiBlbmQpXG5cdFx0cmV0dXJuIGVuZDtcblx0cmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gV29yZFdyYXAodGV4dCkge1xuXHQvKipcblx0ICogVGhlIHRleHQgYmVpbmcgb3BlcmF0ZWQgb24uXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHR0aGlzLnRleHQgPSB0ZXh0fHxcIlwiO1xuXG5cdC8qKlxuXHQgKiBBbiBhcnJheSBvZiBsaW5lcyByZXByZXNlbnRpbmcgdGhlIHN0YXRlIG9mIHRoaXMgd29yZCB3cmFwcGVyLlxuXHQgKiBAcGFyYW0ge0FycmF5fSBsaW5lc1xuXHQgKi9cblx0dGhpcy5saW5lcyA9IFtdO1xuXG5cdC8qKiBcblx0ICogVGhlIG5ld2xpbmUgY2hhcmFjdGVyIHRvIGJyZWFrIG9uLCBkZWZhdWx0ICdcXG4nXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuZXdsaW5lXG5cdCAqL1xuXHR0aGlzLm5ld2xpbmUgPSAnXFxuJztcblxuXHQvKipcblx0ICogV2hldGhlciB0byBjbGlwIG5vbi1icmVha2luZyB0ZXh0IChub3dyYXAgYW5kIHByZSlcblx0ICogaWYgdGhlIHdyYXBXaWR0aCBpcyB0b28gc21hbGwuIFxuXHQgKiAgXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xpcFxuXHQgKi9cblx0dGhpcy5jbGlwID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIFRoZSBtb2RlIGZvciB3b3Jkd3JhcHBpbmc6ICdwcmUnLCAnbm9ybWFsJywgb3IgJ25vd3JhcCcuXG5cdCAqXG5cdCAqIFlvdSBjYW4gYWxzbyB1c2UgdGhlIGBQUkVgLCBgTk9STUFMYCwgYW5kIGBOT1dSQVBgIGNvbnN0YW50c1xuXHQgKiBpbiBgV29yZFdyYXAuTW9kZWAuXG5cdCAqIFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbW9kZVxuXHQgKi9cblx0dGhpcy5tb2RlID0gV29yZFdyYXAuTW9kZS5OT1JNQUw7XG59XG5cbldvcmRXcmFwLk1vZGUgPSB7XG5cdFBSRTogJ3ByZScsICAgICAgIC8vd2hpdGVzcGFjZSBpc24ndCBjb2xsYXBzZWRcblx0Tk9STUFMOiAnbm9ybWFsJywgLy93aGl0ZXNwYWNlIGlzIGNvbGxhcHNlZFxuXHROT1dSQVA6ICdub3dyYXAnICAvL29ubHkgYnJlYWsgb24gJ1xcbidcbn07XG5cbi8qKlxuICogQ2xlYXJzIGFueSBtdWx0aS1saW5lIGxheW91dCBieSBwbGFjaW5nIGFsbCB0aGUgdGV4dCBpbiBhIHNpbmdsZSBMaW5lIG9iamVjdC5cbiAqIFxuICogQHBhcmFtIHtHbHlwaEl0ZXJhdG9yfSBpdGVyYXRvciB0aGUgaXRlcmF0b3IgdG8gdXNlIFxuICogQG1ldGhvZCAgY2xlYXJMYXlvdXRcbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmNsZWFyTGF5b3V0ID0gZnVuY3Rpb24oaXRlcmF0b3IpIHtcblx0dGhpcy5saW5lcy5sZW5ndGggPSAwO1xuXHRcblx0aWYgKHRoaXMudGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0aXRlcmF0b3IuZ2V0Qm91bmRzKHRoaXMudGV4dCwgMCwgdGhpcy50ZXh0Lmxlbmd0aCwgdW5kZWZpbmVkLCB0bXBCb3VuZHMpO1xuXHRcdFxuXHRcdHZhciBsaW5lID0gbmV3IFdvcmRXcmFwLkxpbmUoMCwgdGhpcy50ZXh0Lmxlbmd0aCwgdG1wQm91bmRzLndpZHRoKTtcblx0XHR0aGlzLmxpbmVzLnB1c2gobGluZSk7XG5cdH1cbn07XG5cbi8qKlxuICogUmVzZXRzIHRoZSB3b3JkIHdyYXBwZXIgYnkgZW1wdHlpbmcgYWxsIGN1cnJlbnQgbGluZXMuXG4gKiBAbWV0aG9kICBlbXB0eVxuICovXG5Xb3JkV3JhcC5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcblx0dGhpcy5saW5lcy5sZW5ndGggPSAwO1xufTtcblxuLyoqXG4gKiBXb3JkLXdyYXBzIHRoZSBnaXZlbiB0ZXh0IGludG8gbXVsdGlwbGUgbGluZXMuXG4gKiBAcGFyYW0gIHtbdHlwZV19IGl0ZXJhdG9yIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge1t0eXBlXX0gd2lkdGggICAgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7W3R5cGVdfSBzdGFydCAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtbdHlwZV19IGVuZCAgICAgIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5Xb3JkV3JhcC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24oaXRlcmF0b3IsIHdyYXBXaWR0aCwgc3RhcnQsIGVuZCkge1xuXHR2YXIgdGV4dCA9IHRoaXMudGV4dDtcblxuXHR2YXIgbGluZXMgPSB0aGlzLmxpbmVzO1xuXG5cdHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnR8fDApO1xuXHRlbmQgPSAoZW5kPT09MHx8ZW5kKSA/IGVuZCA6IHRleHQubGVuZ3RoO1xuXG5cdGl0ZXJhdG9yLmJlZ2luKCk7XG5cblx0Ly9kZWZhdWx0IHdyYXAgd2lkdGguLi5cblx0d3JhcFdpZHRoID0gKHdyYXBXaWR0aD09PTAgfHwgd3JhcFdpZHRoKSA/IHdyYXBXaWR0aCA6IE51bWJlci5NQVhfVkFMVUU7XG5cblx0Ly88cHJlPiBtb2RlIGp1c3QgdXNlcyBhIHNpbXBsZSBhbGdvcml0aG0uLi5cblx0aWYgKHRoaXMubW9kZSA9PT0gV29yZFdyYXAuTW9kZS5QUkUpIHtcblx0XHR2YXIgbGluZVN0YXJ0ID0gc3RhcnQ7XG5cdFx0Zm9yICh2YXIgaT1zdGFydDsgaTxlbmQ7IGkrKykge1xuXHRcdFx0dmFyIGNociA9IHRleHQuY2hhckF0KGkpO1xuXG5cdFx0XHQvL0lmIHdlJ3ZlIHJlYWNoZWQgYSBuZXdsaW5lLCB0aGVuIHN0ZXAgZG93biBhIGxpbmVcblx0XHRcdC8vT3IgaWYgd2UndmUgcmVhY2hlZCB0aGUgRU9GXG5cdFx0XHRpZiAoIGNociA9PT0gdGhpcy5uZXdsaW5lIHx8IGk9PT1lbmQtMSkge1xuXHRcdFx0XHR2YXIgYXZhaWxhYmxlV2lkdGggPSB0aGlzLmNsaXAgPyB3cmFwV2lkdGggOiB1bmRlZmluZWQ7XG5cdFx0XHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0ZXh0LCBsaW5lU3RhcnQsIGkrMSwgYXZhaWxhYmxlV2lkdGgsIHRtcEJvdW5kcyk7XG5cdFx0XHRcdGxpbmVzLnB1c2goIG5ldyBXb3JkV3JhcC5MaW5lKGxpbmVTdGFydCwgbGluZVN0YXJ0K3RtcEJvdW5kcy5nbHlwaHMsIHRtcEJvdW5kcy53aWR0aCkgKTtcblx0XHRcdFx0bGluZVN0YXJ0ID0gaSsxO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBcblx0Ly8nbm9ybWFsJyBtb2RlIHVzZXMgTGliR0RYJ3Mgd29yZCB3cmFwcGluZyBhbGdvcml0aG06XG5cdC8vaHR0cHM6Ly9naXRodWIuY29tL2xpYmdkeC9saWJnZHgvYmxvYi9tYXN0ZXIvZ2R4L3NyYy9jb20vYmFkbG9naWMvZ2R4L2dyYXBoaWNzL2cyZC9CaXRtYXBGb250Q2FjaGUuamF2YVxuXHRlbHNlIHtcblx0XHQvL2lmICdub3dyYXAnIGlzIHNwZWNpZmllZCwgd2Ugb25seSB3cmFwIG9uIG5ld2xpbmUgY2hhcnNcblx0XHRcblx0XHR2YXIgdGVzdFdpZHRoID0gd3JhcFdpZHRoO1xuXHRcdGlmICh0aGlzLm1vZGUgPT09IFdvcmRXcmFwLk1vZGUuTk9XUkFQKSB7XG5cdFx0XHR0ZXN0V2lkdGggPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXHRcdH1cblxuXHRcdHdoaWxlIChzdGFydCA8IGVuZCkge1xuXHRcdFx0Ly9nZXQgbmV4dCBuZXdsaW5lIHBvc2l0aW9uXG5cdFx0XHR2YXIgbmV3TGluZSA9IGlkeE9mKHRleHQsIHRoaXMubmV3bGluZSwgc3RhcnQsIGVuZCk7XG5cblx0XHRcdC8vZWF0IHdoaXRlc3BhY2UgYXQgc3RhcnQgb2YgbGluZVxuXHRcdFx0d2hpbGUgKHN0YXJ0IDwgbmV3TGluZSkge1xuXHRcdFx0XHRpZiAoIWlzV2hpdGVzcGFjZSggdGV4dC5jaGFyQXQoc3RhcnQpICkpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdHN0YXJ0Kys7XG5cdFx0XHR9XG5cblx0XHRcdC8vZGV0ZXJtaW5lIHZpc2libGUgIyBvZiBnbHlwaHMgZm9yIHRoZSBhdmFpbGFibGUgd2lkdGhcblx0XHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0ZXh0LCBzdGFydCwgbmV3TGluZSwgdGVzdFdpZHRoLCB0bXBCb3VuZHMpXG5cblx0XHRcdHZhciBsaW5lRW5kID0gc3RhcnQgKyB0bXBCb3VuZHMuZ2x5cGhzO1xuXHRcdFx0dmFyIG5leHRTdGFydCA9IGxpbmVFbmQgKyB0aGlzLm5ld2xpbmUubGVuZ3RoO1xuXG5cdFx0XHQvL2lmIHdlIGhhZCB0byBjdXQgdGhlIGxpbmUgYmVmb3JlIHRoZSBuZXh0IG5ld2xpbmUuLi5cblx0XHRcdGlmIChsaW5lRW5kIDwgbmV3TGluZSkge1xuXHRcdFx0XHQvL2ZpbmQgY2hhciB0byBicmVhayBvblxuXHRcdFx0XHR3aGlsZSAobGluZUVuZCA+IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKGlzV2hpdGVzcGFjZSh0ZXh0LmNoYXJBdChsaW5lRW5kKSkpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRsaW5lRW5kLS07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGxpbmVFbmQgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKG5leHRTdGFydCA+IHN0YXJ0ICsgdGhpcy5uZXdsaW5lLmxlbmd0aCkgbmV4dFN0YXJ0LS07XG5cdFx0XHRcdFx0bGluZUVuZCA9IG5leHRTdGFydDsgLy8gSWYgbm8gY2hhcmFjdGVycyB0byBicmVhaywgc2hvdyBhbGwuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bmV4dFN0YXJ0ID0gbGluZUVuZDtcblx0XHRcdFx0XHQvL2VhdCB3aGl0ZXNwYWNlIGF0IGVuZCBvZiBsaW5lXG5cdFx0XHRcdFx0d2hpbGUgKGxpbmVFbmQgPiBzdGFydCkge1xuXHRcdFx0XHRcdFx0aWYgKCFpc1doaXRlc3BhY2UodGV4dC5jaGFyQXQobGluZUVuZCAtIHRoaXMubmV3bGluZS5sZW5ndGgpKSlcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRsaW5lRW5kLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsaW5lRW5kID4gc3RhcnQpIHtcblx0XHRcdFx0Ly90byBjbGlwLCB1c2UgdGhlIG9yaWdpbmFsIHdyYXAgd2lkdGggKHVuYWx0ZXJlZCBieSBtb2RlKVxuXHRcdFx0XHR2YXIgYXZhaWxhYmxlV2lkdGggPSB0aGlzLmNsaXAgPyB3cmFwV2lkdGggOiB1bmRlZmluZWQ7XG5cdFx0XHRcdGl0ZXJhdG9yLmdldEJvdW5kcyh0ZXh0LCBzdGFydCwgbGluZUVuZCwgYXZhaWxhYmxlV2lkdGgsIHRtcEJvdW5kcyk7XG5cdFx0XHRcdHZhciBsaW5lV2lkdGggPSB0bXBCb3VuZHMud2lkdGg7XG5cblx0XHRcdFx0dmFyIHJMaW5lRW5kID0gdGhpcy5jbGlwID8gc3RhcnQrdG1wQm91bmRzLmdseXBocyA6IGxpbmVFbmQ7XG5cdFx0XHRcdGxpbmVzLnB1c2goIG5ldyBXb3JkV3JhcC5MaW5lKHN0YXJ0LCByTGluZUVuZCwgbGluZVdpZHRoKSApO1xuXHRcdFx0fVxuXHRcdFx0c3RhcnQgPSBuZXh0U3RhcnQ7XG5cblx0XHR9XG5cdH1cblxuXHRpdGVyYXRvci5lbmQoKTtcbn07XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBtZXRob2QgdG8gcmV0dXJuIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGFsbCBjdXJyZW50IGxpbmVzLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGFsaWduaW5nIGJsb2NrcyBvZiB0ZXh0LlxuICpcbiAqIEBtZXRob2QgIGdldE1heExpbmVXaWR0aFxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgbWF4aW11bSB3aWR0aCBvZiBhbGwgbGluZXNcbiAqL1xuV29yZFdyYXAucHJvdG90eXBlLmdldE1heExpbmVXaWR0aCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbWF4V2lkdGggPSAwO1xuXHRmb3IgKHZhciBpPTA7IGk8dGhpcy5saW5lcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBsaW5lID0gdGhpcy5saW5lc1tpXTtcblx0XHRtYXhXaWR0aCA9IE1hdGgubWF4KGxpbmUud2lkdGgsIG1heFdpZHRoKTtcblx0fVxuXHRyZXR1cm4gbWF4V2lkdGg7XG59O1xuXG4vKipcbiAqIFRoZSBMaW5lIG9iamVjdCBob2xkcyB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzIGludG8gdGhlIHN0cmluZyxcbiAqIGFuZCB0aGUgd2lkdGggYXMgY29tcHV0ZWQgYnkgR2x5cGhJdGVyYXRvci5cbiAqIFxuICogQGNsYXNzICBXb3JkV3JhcC5MaW5lXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnQgdGhlIHN0YXJ0IGluZGV4LCBpbmNsdXNpdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmQgICB0aGUgZW5kIGluZGV4LCBleGNsdXNpdmVcbiAqIEBwYXJhbSB7TnVtYmVyfSB3aWR0aCB0aGUgY29tcHV0ZWQgd2lkdGggb2YgdGhpcyBsaW5lXG4gKi9cbldvcmRXcmFwLkxpbmUgPSBmdW5jdGlvbihzdGFydCwgZW5kLCB3aWR0aCkge1xuXHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdHRoaXMuZW5kID0gZW5kO1xuXHR0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdvcmRXcmFwOyIsInZhciBjcmVhdGVWQU8gPSByZXF1aXJlKCdnbC1hbGlhc2VkLXZhbycpIC8vVE9ETzogaW1wcm92ZSB0aGlzIHdpdGggZ2wtdmFvXG52YXIgY3JlYXRlQnVmZmVyID0gcmVxdWlyZSgnZ2wtYnVmZmVyJylcblxubW9kdWxlLmV4cG9ydHMuZmxvYXRzUGVyVmVydGV4ID0gNVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRpY2VzKGNhcGFjaXR5KSB7XG4gICAgdmFyIG51bUluZGljZXMgPSBjYXBhY2l0eSAqIDZcbiAgICB2YXIgaW5kaWNlcyA9IG5ldyBVaW50MTZBcnJheShudW1JbmRpY2VzKVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpIHtcbiAgICAgICAgaW5kaWNlc1tpICsgMF0gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW2kgKyAxXSA9IGogKyAxXG4gICAgICAgIGluZGljZXNbaSArIDJdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1tpICsgM10gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW2kgKyA0XSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbaSArIDVdID0gaiArIDNcbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbn1cblxubW9kdWxlLmV4cG9ydHMubWl4aW5zID0ge1xuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiBjcmVhdGUob3B0KSB7XG4gICAgICAgIG9wdCA9IG9wdHx8e31cbiAgICAgICAgdGhpcy5jbGVhcigpXG5cbiAgICAgICAgLy9kaXNwb3NlIGJlZm9yZSBidWlsZGluZy4uLlxuICAgICAgICBpZiAodGhpcy52YW8pXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKVxuXG4gICAgICAgIHZhciBjYXBhY2l0eSA9IHR5cGVvZiBvcHQuY2FwYWNpdHkgPT09ICdudW1iZXInID8gb3B0LmNhcGFjaXR5IDogMTAwXG5cbiAgICAgICAgLy8gNjU1MzUgaXMgbWF4IGluZGV4LCBzbyA2NTUzNSAvIDYgPSAxMDkyMi5cbiAgICAgICAgaWYgKGNhcGFjaXR5ID4gMTA5MjIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBoYXZlIG1vcmUgdGhhbiAxMDkyMiBxdWFkcyBwZXIgYmF0Y2g6IFwiICsgY2FwYWNpdHkpXG5cbiAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eVxuXG4gICAgICAgIC8vdGhlIHRvdGFsIG51bWJlciBvZiBmbG9hdHMgaW4gb3VyIGJhdGNoXG4gICAgICAgIHZhciBudW1WZXJ0cyA9IGNhcGFjaXR5ICogNCAqIG1vZHVsZS5leHBvcnRzLmZsb2F0c1BlclZlcnRleFxuXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KG51bVZlcnRzKVxuICAgICAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKGNhcGFjaXR5KVxuXG4gICAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgICAgdmFyIHVzYWdlID0gb3B0LmR5bmFtaWMgPyBnbC5EWU5BTUlDX0RSQVcgOiBnbC5TVEFUSUNfRFJBV1xuICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlciA9IGNyZWF0ZUJ1ZmZlcihnbCwgdGhpcy52ZXJ0aWNlcywgZ2wuQVJSQVlfQlVGRkVSLCB1c2FnZSlcbiAgICAgICAgdGhpcy5pbmRleEJ1ZmZlciA9IGNyZWF0ZUJ1ZmZlcihnbCwgdGhpcy5pbmRpY2VzLCBnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgZ2wuU1RBVElDX0RSQVcpXG5cbiAgICAgICAgdmFyIHN0cmlkZSA9IDUgKiA0XG4gICAgICAgIHRoaXMudmFvID0gY3JlYXRlVkFPKGdsLCBbeyAvL3Bvc2l0aW9uIFhZXG4gICAgICAgICAgICBuYW1lOiAncG9zaXRpb24nLFxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIHNpemU6IDIsXG4gICAgICAgICAgICBzdHJpZGU6IHN0cmlkZVxuICAgICAgICB9LCB7IC8vdGV4Y29vcmQgVVZcbiAgICAgICAgICAgIG5hbWU6ICd0ZXhjb29yZDAnLFxuICAgICAgICAgICAgYnVmZmVyOiB0aGlzLnZlcnRleEJ1ZmZlcixcbiAgICAgICAgICAgIHNpemU6IDIsXG4gICAgICAgICAgICBvZmZzZXQ6IDIgKiA0LFxuICAgICAgICAgICAgc3RyaWRlOiBzdHJpZGVcbiAgICAgICAgfSwgeyAvL2NvbG9yIChwYWNrZWQpIENcbiAgICAgICAgICAgIG5hbWU6ICdjb2xvcicsXG4gICAgICAgICAgICBidWZmZXI6IHRoaXMudmVydGV4QnVmZmVyLFxuICAgICAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgICAgIHN0cmlkZTogc3RyaWRlLFxuICAgICAgICAgICAgb2Zmc2V0OiA0ICogNCxcbiAgICAgICAgICAgIHR5cGU6IGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgICAgICBub3JtYWxpemVkOiB0cnVlXG4gICAgICAgIH1dLCB0aGlzLmluZGV4QnVmZmVyKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBlbnN1cmVDYXBhY2l0eTogZnVuY3Rpb24oY2FwYWNpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FwYWNpdHkgPCBjYXBhY2l0eSlcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlKHsgY2FwYWNpdHk6IGNhcGFjaXR5IH0pXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufSIsInZhciBjb2xvclRvRmxvYXQgPSByZXF1aXJlKCcuL3BhY2stcmdiYS1mbG9hdCcpXG52YXIgbWl4ZXMgPSByZXF1aXJlKCdtaXhlcycpXG52YXIgcHJlbXVsdCA9IHJlcXVpcmUoJ3ByZW11bHRpcGxpZWQtcmdiYScpXG52YXIgV2hpdGVUZXggPSByZXF1aXJlKCdnbC13aGl0ZS10ZXh0dXJlJylcblxudmFyIHZlcnROdW1GbG9hdHMgPSByZXF1aXJlKCcuL2NvbW1vbicpLmZsb2F0c1BlclZlcnRleFxuXG4vL1RlbXBvcmFyeSBhcnJheXMgdG8gYXZvaWQgR0MgdGhyYXNoaW5nXG52YXIgcG9zaXRpb24gPSBbMCwgMF0sXG4gICAgc2hhcGUgPSBbMCwgMF0sXG4gICAgdGV4Y29vcmQgPSBbMCwgMCwgMCwgMF0sXG4gICAgY29sb3IgPSBbMCwgMCwgMCwgMF1cblxudmFyIHRtcDQgPSBbMCwgMCwgMCwgMF0sXG4gICAgcm90T3JpZ2luID0gWzAsIDBdLFxuICAgIHRtcDIgPSBbMCwgMF1cblxuZnVuY3Rpb24gU3ByaXRlQmF0Y2goZ2wsIG9wdCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTcHJpdGVCYXRjaCkpXG4gICAgICAgIHJldHVybiBuZXcgU3ByaXRlQmF0Y2goZ2wsIG9wdClcbiAgICBpZiAoIWdsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtdXN0IHNwZWNpZnkgZ2wgY29udGV4dFwiKVxuICAgIHRoaXMuZ2wgPSBnbFxuICAgIG9wdCA9IG9wdCB8fCB7fVxuICAgIFxuICAgIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgICB0aGlzLmlkeCA9IDBcblxuICAgIC8vbm8gdHJhbnNmb3JtIG1lYW5zIGlkZW50aXR5XG4gICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsXG5cbiAgICAvL3doaXRlIHRleHR1cmUgaXMgYWtpbiB0byBcIm5vIHRleHR1cmVcIiAod2l0aG91dCBzd2l0Y2hpbmcgc2hhZGVycylcbiAgICB0aGlzLl9kZWZhdWx0VGV4dHVyZSA9IG9wdC5kZWZhdWx0VGV4dHVyZSB8fCBXaGl0ZVRleChnbClcbiAgICB0aGlzLl9vd25zRGVmYXVsdCA9ICFvcHQuZGVmYXVsdFRleHR1cmVcbiAgICB0aGlzLl9sYXN0VGV4dHVyZSA9IHRoaXMuX2RlZmF1bHRUZXh0dXJlXG4gICAgdGhpcy5fdGV4dHVyZSA9IHRoaXMuX2RlZmF1bHRUZXh0dXJlXG4gICAgdGhpcy50ZXh0dXJlID0gbnVsbFxuXG4gICAgdGhpcy5tb2RlID0gdHlwZW9mIG9wdC5tb2RlID09PSAnbnVtYmVyJyA/IG9wdC5tb2RlIDogZ2wuVFJJQU5HTEVTXG4gICAgdGhpcy5wcmVtdWx0aXBsaWVkID0gb3B0LnByZW11bHRpcGxpZWQgfHwgZmFsc2VcblxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZVxuICAgIHRoaXMuY3JlYXRlKG9wdClcblxuICAgIC8vc2V0IGRlZmF1bHQgYXR0cmlidXRlc1xuICAgIHRoaXMuZGVmYXVsdHMoKVxufVxuXG4vL21peCBpbiBjcmVhdGUoKSBhbmQgZW5zdXJlQ2FwYWNpdHkoKSBmdW5jdGlvbnNcbm1peGVzKFNwcml0ZUJhdGNoLCByZXF1aXJlKCcuL2NvbW1vbicpLm1peGlucylcblxubWl4ZXMoU3ByaXRlQmF0Y2gsIHtcblxuICAgIGNhcGFjaXR5OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0ZXh0dXJlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dHVyZVxuICAgICAgICB9LFxuXG4gICAgICAgIHNldDogZnVuY3Rpb24odGV4KSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0dXJlID0gdGV4IHx8IHRoaXMuX2RlZmF1bHRUZXh0dXJlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGlzcG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnZlcnRleEJ1ZmZlcilcbiAgICAgICAgICAgIHRoaXMudmVydGV4QnVmZmVyLmRpc3Bvc2UoKVxuICAgICAgICBpZiAodGhpcy5pbmRleEJ1ZmZlcilcbiAgICAgICAgICAgIHRoaXMuaW5kZXhCdWZmZXIuZGlzcG9zZSgpXG4gICAgICAgIGlmICh0aGlzLnZhbylcbiAgICAgICAgICAgIHRoaXMudmFvLmRpc3Bvc2UoKVxuICAgICAgICBpZiAodGhpcy5fb3duc0RlZmF1bHQpXG4gICAgICAgICAgICB0aGlzLl9kZWZhdWx0VGV4dHVyZS5kaXNwb3NlKClcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlkeCA9IDBcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgYmluZDogZnVuY3Rpb24oc2hhZGVyKSB7XG4gICAgICAgIHNoYWRlci5iaW5kKClcbiAgICAgICAgdGhpcy52YW8uYmluZChzaGFkZXIpXG4gICAgICAgIHRoaXMuX2JvdW5kID0gdHJ1ZVxuICAgIH0sXG5cbiAgICB1bmJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnZhby51bmJpbmQoKVxuICAgICAgICB0aGlzLl9ib3VuZCA9IGZhbHNlXG4gICAgfSxcblxuICAgIGRlZmF1bHRzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGNvcHkyKHBvc2l0aW9uLCAwLCAwKVxuICAgICAgICB0aGlzLnRleGNvb3JkID0gY29weTQodGV4Y29vcmQsIDAsIDAsIDEsIDEpXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb3B5NChjb2xvciwgMSwgMSwgMSwgMSlcbiAgICAgICAgdGhpcy5zaGFwZSA9IGNvcHkyKHNoYXBlLCAwLCAwKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBwdXNoOiBmdW5jdGlvbihzcHJpdGUpIHtcbiAgICAgICAgLy9pZiB3ZSBhcmUgZGVmaW5pbmcgYXR0cmlidXRlcyBvbiB0aGUgZmx5XG4gICAgICAgIGlmIChzcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHNwcml0ZS50ZXh0dXJlXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gc3ByaXRlLnBvc2l0aW9uIHx8IGNvcHkyKHBvc2l0aW9uLCAwLCAwKVxuICAgICAgICAgICAgdGhpcy50ZXhjb29yZCA9IHNwcml0ZS50ZXhjb29yZCB8fCBjb3B5NCh0ZXhjb29yZCwgMCwgMCwgMSwgMSlcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBzcHJpdGUuY29sb3IgfHwgY29weTQoY29sb3IsIDEsIDEsIDEsIDEpXG4gICAgICAgICAgICB0aGlzLnNoYXBlID0gc3ByaXRlLnNoYXBlIHx8IGNvcHkyKHNoYXBlLCAwLCAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZSAhPT0gdGhpcy5fbGFzdFRleHR1cmUpIHtcbiAgICAgICAgICAgIC8vbmV3IHRleHR1cmUsIGZsdXNoIHByZXZpb3VzIGRhdGFcbiAgICAgICAgICAgIGlmICh0aGlzLl9ib3VuZClcbiAgICAgICAgICAgICAgICB0aGlzLmZsdXNoKClcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUZXh0dXJlID0gdGhpcy50ZXh0dXJlXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZHggPT09IHRoaXMudmVydGljZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvL2lmIHdlIEFSRU4nVCBib3VuZCwgd2UgbmVlZCB0byBzdG9wIHB1c2hpbmcgdmVydGV4IGRhdGEhXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2JvdW5kKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzXG5cbiAgICAgICAgICAgIC8vaWYgd2UgQVJFIGJvdW5kLCB3ZSBjYW4gZmx1c2ggdGhlIGJhdGNoIGFuZCBjb250aW51ZSBkcmF3aW5nXG4gICAgICAgICAgICB0aGlzLmZsdXNoKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZVxuXG4gICAgICAgIC8vZ2V0IFJHQkEgY29tcG9uZW50cyBhbmQgcGFjayBpbnRvIGEgc2luZ2xlIGZsb2F0XG4gICAgICAgIHZhciBjb2xvclJHQkEgPSB0aGlzLnByZW11bHRpcGxpZWQgPyBwcmVtdWx0KHRoaXMuY29sb3IsIHRtcDQpIDogdGhpcy5jb2xvclxuICAgICAgICB2YXIgYyA9IGNvbG9yVG9GbG9hdChjb2xvclJHQkEpXG5cbiAgICAgICAgdmFyIHUxID0gdGhpcy50ZXhjb29yZFswXSxcbiAgICAgICAgICAgIHYxID0gdGhpcy50ZXhjb29yZFsxXSxcbiAgICAgICAgICAgIHUyID0gdGhpcy50ZXhjb29yZFsyXSxcbiAgICAgICAgICAgIHYyID0gdGhpcy50ZXhjb29yZFszXVxuXG4gICAgICAgIHZhciB4ID0gdGhpcy5wb3NpdGlvblswXSxcbiAgICAgICAgICAgIHkgPSB0aGlzLnBvc2l0aW9uWzFdLFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNoYXBlWzBdLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaGFwZVsxXVxuXG4gICAgICAgIHRoaXMuX3ZlcnQoeCwgeSwgdTEsIHYxLCBjKVxuICAgICAgICB0aGlzLl92ZXJ0KHgrd2lkdGgsIHksIHUyLCB2MSwgYylcbiAgICAgICAgdGhpcy5fdmVydCh4K3dpZHRoLCB5K2hlaWdodCwgdTIsIHYyLCBjKVxuICAgICAgICB0aGlzLl92ZXJ0KHgsIHkraGVpZ2h0LCB1MSwgdjIsIGMpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICBfdmVydDogZnVuY3Rpb24oeDEsIHkxLCB1MSwgdjEsIGMpIHtcbiAgICAgICAgdmFyIGlkeCA9IHRoaXMuaWR4LFxuICAgICAgICAgICAgdmVydHMgPSB0aGlzLnZlcnRpY2VzLFxuICAgICAgICAgICAgdHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm1cblxuICAgICAgICBpZiAodHJhbnNmb3JtKSB7XG4gICAgICAgICAgICB2YXIgeCA9IHgxLCB5ID0geTFcbiAgICAgICAgICAgIHgxID0gdHJhbnNmb3JtWzBdICogeCArIHRyYW5zZm9ybVs0XSAqIHkgKyB0cmFuc2Zvcm1bMTJdXG4gICAgICAgICAgICB5MSA9IHRyYW5zZm9ybVsxXSAqIHggKyB0cmFuc2Zvcm1bNV0gKiB5ICsgdHJhbnNmb3JtWzEzXVxuICAgICAgICB9XG5cbiAgICAgICAgLy94eVxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB4MVxuICAgICAgICB2ZXJ0c1tpZHgrK10gPSB5MVxuICAgICAgICAvL3V2XG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IHUxXG4gICAgICAgIHZlcnRzW2lkeCsrXSA9IHYxXG4gICAgICAgIC8vY29sb3JcbiAgICAgICAgdmVydHNbaWR4KytdID0gY1xuICAgICAgICB0aGlzLmlkeCA9IGlkeFxuICAgIH0sXG5cbiAgICBmbHVzaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyKClcbiAgICB9LFxuXG4gICAgZHJhdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vSWYgd2UndmUgcmVhY2hlZCBhIG5ldyB0ZXh0dXJlIG9yIGNhcGFjaXR5XG4gICAgICAgIC8vd2hpbGUgbm90IGJvdW5kLCB0aGVuIHdlIHdpbGwganVzdCBjbGVhciB0aGUgYmF0Y2hcbiAgICAgICAgLy90byB6ZXJvIGFuZCBkcmF3IG5vdGhpbmdcbiAgICAgICAgaWYgKHRoaXMuaWR4ID09PSAwIHx8ICF0aGlzLl9ib3VuZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG5cbiAgICAgICAgdmFyIGdsID0gdGhpcy5nbFxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2RpcnR5KSB7XG4gICAgICAgICAgICB2YXIgdmlldyA9IHRoaXMudmVydGljZXMuc3ViYXJyYXkoMCwgdGhpcy5pZHgpXG4gICAgICAgICAgICB0aGlzLnZlcnRleEJ1ZmZlci51cGRhdGUodmlldywgMClcbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9sYXN0VGV4dHVyZSlcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUZXh0dXJlLmJpbmQoKVxuICAgICAgICB0aGlzLl9sYXN0VGV4dHVyZSA9IHRoaXMudGV4dHVyZVxuXG4gICAgICAgIHZhciBzcHJpdGVzID0gKHRoaXMuaWR4IC8gKHZlcnROdW1GbG9hdHMgKiA0KSlcbiAgICAgICAgaWYgKHNwcml0ZXMgPiAwKVxuICAgICAgICAgICAgdGhpcy52YW8uZHJhdyh0aGlzLm1vZGUsIHNwcml0ZXMgKiA2LCAwKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG59KVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwcml0ZUJhdGNoXG5cbi8vVE9ETzogd2lsbCB1c2UgbW9kdWxhciBnbC1tYXRyaXggZm9yIHRoZXNlLi4uXG5mdW5jdGlvbiBjb3B5MihvdXQsIHgsIHkpIHtcbiAgICBvdXRbMF0gPSB4XG4gICAgb3V0WzFdID0geVxuICAgIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gY29weTQob3V0LCB4LCB5LCB6LCB3KSB7XG4gICAgb3V0WzBdID0geFxuICAgIG91dFsxXSA9IHlcbiAgICBvdXRbMl0gPSB6XG4gICAgb3V0WzNdID0gd1xuICAgIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gY29weVZlYzIob3V0LCB2ZWMpIHtcbiAgICByZXR1cm4gY29weTIob3V0LCB2ZWNbMF0sIHZlY1sxXSlcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWF0NChvdXQsIGEsIG0pIHtcbiAgICB2YXIgeCA9IGFbMF0sIFxuICAgICAgICB5ID0gYVsxXVxuICAgIG91dFswXSA9IG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzEyXVxuICAgIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXVxuICAgIHJldHVybiBvdXRcbn0iLCJ2YXIgY3JlYXRlVkFPRW11bGF0ZWQgPSByZXF1aXJlKFwiLi9saWIvdmFvLWVtdWxhdGVkLmpzXCIpXG5cbmZ1bmN0aW9uIGNyZWF0ZVZBTyhnbCwgYXR0cmlidXRlcywgZWxlbWVudHMsIGVsZW1lbnRzVHlwZSkge1xuICB2YXIgdmFvID0gY3JlYXRlVkFPRW11bGF0ZWQoZ2wpXG4gIHZhby51cGRhdGUoYXR0cmlidXRlcywgZWxlbWVudHMsIGVsZW1lbnRzVHlwZSlcbiAgcmV0dXJuIHZhb1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVZBTyIsImZ1bmN0aW9uIGdldEF0dHJpYnV0ZUxvY2F0aW9uKG5hbWUsIHNoYWRlcikge1xuICAgIGlmICghbmFtZSlcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB2YXIgYXR0ciA9IHNoYWRlci5hdHRyaWJ1dGVzXG4gICAgaWYgKGF0dHJbbmFtZV0pIFxuICAgICAgICByZXR1cm4gYXR0cltuYW1lXS5sb2NhdGlvblxuICAgIHJldHVybiBudWxsXG59XG5cbnZhciBuYXR0cmlicyA9IG51bGxcbnZhciBib3VuZCA9IG51bGxcblxuZnVuY3Rpb24gZG9CaW5kKGdsLCBlbGVtZW50cywgYXR0cmlidXRlcywgc2hhZGVyKSB7XG4gICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgIGVsZW1lbnRzLmJpbmQoKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG51bGwpXG4gICAgfVxuICAgIGlmIChuYXR0cmlicyA9PT0gbnVsbCkge1xuICAgICAgbmF0dHJpYnMgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1ZFUlRFWF9BVFRSSUJTKSB8IDBcbiAgICAgIGJvdW5kID0gbmV3IEFycmF5KG5hdHRyaWJzKVxuICAgIH1cblxuICAgIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IG5hdHRyaWJzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC12YW86IFRvbyBtYW55IHZlcnRleCBhdHRyaWJ1dGVzXCIpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGFzdEJvdW5kID0gbnVsbFxuXG4gICAgICAgIGZvciAoaT0wOyBpPG5hdHRyaWJzOyBpKyspXG4gICAgICAgICAgYm91bmRbaV0gPSBmYWxzZVxuXG4gICAgICAgIC8vbm93IGJpbmQgYWxpYXNlZCBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciAoaT0wOyBpPGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWIgPSBhdHRyaWJ1dGVzW2ldXG4gICAgICAgICAgICB2YXIgbG9jID0gZ2V0QXR0cmlidXRlTG9jYXRpb24oYXR0cmliLm5hbWUsIHNoYWRlcilcbiAgICAgICAgICAgIGlmIChsb2MgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgY29udGludWVcblxuICAgICAgICAgICAgYm91bmRbbG9jXSA9IHRydWVcblxuICAgICAgICAgICAgaWYoYXR0cmliLmJ1ZmZlcikge1xuICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gYXR0cmliLmJ1ZmZlclxuICAgICAgICAgICAgICB2YXIgc2l6ZSA9IGF0dHJpYi5zaXplIHx8IDRcbiAgICAgICAgICAgICAgdmFyIHR5cGUgPSBhdHRyaWIudHlwZSB8fCBnbC5GTE9BVFxuICAgICAgICAgICAgICB2YXIgbm9ybWFsaXplZCA9ICEhYXR0cmliLm5vcm1hbGl6ZWRcbiAgICAgICAgICAgICAgdmFyIHN0cmlkZSA9IGF0dHJpYi5zdHJpZGUgfHwgMFxuICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gYXR0cmliLm9mZnNldCB8fCAwXG4gICAgICAgICAgICAgIGlmIChsYXN0Qm91bmQgIT09IGJ1ZmZlcikge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5iaW5kKClcbiAgICAgICAgICAgICAgICBsYXN0Qm91bmQgPSBidWZmZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2MpXG4gICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIobG9jLCBzaXplLCB0eXBlLCBub3JtYWxpemVkLCBzdHJpZGUsIG9mZnNldClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZiBhdHRyaWIgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIxZihsb2MsIGF0dHJpYilcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIxZihsb2MsIGF0dHJpYlswXSlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWIyZihsb2MsIGF0dHJpYlswXSwgYXR0cmliWzFdKVxuICAgICAgICAgICAgICB9IGVsc2UgaWYoYXR0cmliLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYjNmKGxvYywgYXR0cmliWzBdLCBhdHRyaWJbMV0sIGF0dHJpYlsyXSlcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHJpYi5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICBnbC52ZXJ0ZXhBdHRyaWI0Zihsb2MsIGF0dHJpYlswXSwgYXR0cmliWzFdLCBhdHRyaWJbMl0sIGF0dHJpYlszXSlcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC12YW86IEludmFsaWQgdmVydGV4IGF0dHJpYnV0ZVwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGdsLmRpc2FibGVWZXJ0ZXhBdHRyaWJBcnJheShsb2MpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChpPTA7IGk8bmF0dHJpYnM7IGkrKykge1xuICAgICAgICAgIGlmICghYm91bmRbaV0pXG4gICAgICAgICAgICBnbC5kaXNhYmxlVmVydGV4QXR0cmliQXJyYXkoaSlcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbClcbiAgICAgIGZvcih2YXIgaT0wOyBpPG5hdHRyaWJzOyArK2kpIHtcbiAgICAgICAgZ2wuZGlzYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpXG4gICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvQmluZCIsInZhciBiaW5kQXR0cmlicyA9IHJlcXVpcmUoXCIuL2RvLWJpbmQuanNcIilcblxuZnVuY3Rpb24gVkFPRW11bGF0ZWQoZ2wpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMuX2VsZW1lbnRzID0gbnVsbFxuICB0aGlzLl9hdHRyaWJ1dGVzID0gbnVsbFxuICB0aGlzLl9lbGVtZW50c1R5cGUgPSBnbC5VTlNJR05FRF9TSE9SVFxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKHNoYWRlcikge1xuICBpZiAoIXNoYWRlcilcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3QgYXNzb2NpYXRlIHNoYWRlciB3aXRoIHZlcnRleCBhcnJheScpXG4gIGJpbmRBdHRyaWJzKHRoaXMuZ2wsIHRoaXMuX2VsZW1lbnRzLCB0aGlzLl9hdHRyaWJ1dGVzLCBzaGFkZXIpXG59XG5cblZBT0VtdWxhdGVkLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihhdHRyaWJ1dGVzLCBlbGVtZW50cywgZWxlbWVudHNUeXBlKSB7XG4gIHRoaXMuX2VsZW1lbnRzID0gZWxlbWVudHNcbiAgdGhpcy5fYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNcbiAgdGhpcy5fZWxlbWVudHNUeXBlID0gZWxlbWVudHNUeXBlIHx8IHRoaXMuZ2wuVU5TSUdORURfU0hPUlRcbn1cblxuVkFPRW11bGF0ZWQucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgfVxuVkFPRW11bGF0ZWQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uKCkge1xuICBiaW5kQXR0cmlicyh0aGlzLmdsKVxufVxuXG5WQU9FbXVsYXRlZC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKG1vZGUsIGNvdW50LCBvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDBcbiAgdmFyIGdsID0gdGhpcy5nbFxuICBpZih0aGlzLl9lbGVtZW50cykge1xuICAgIGdsLmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdGhpcy5fZWxlbWVudHNUeXBlLCBvZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgZ2wuZHJhd0FycmF5cyhtb2RlLCBvZmZzZXQsIGNvdW50KVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZBT0VtdWxhdGVkKGdsKSB7XG4gIHJldHVybiBuZXcgVkFPRW11bGF0ZWQoZ2wpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVkFPRW11bGF0ZWQiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgcG9vbCA9IHJlcXVpcmUoXCJ0eXBlZGFycmF5LXBvb2xcIilcbnZhciBvcHMgPSByZXF1aXJlKFwibmRhcnJheS1vcHNcIilcbnZhciBuZGFycmF5ID0gcmVxdWlyZShcIm5kYXJyYXlcIilcbnZhciB3ZWJnbGV3ID0gcmVxdWlyZShcIndlYmdsZXdcIilcblxudmFyIFNVUFBPUlRFRF9UWVBFUyA9IFtcbiAgXCJ1aW50OFwiLFxuICBcInVpbnQ4X2NsYW1wZWRcIixcbiAgXCJ1aW50MTZcIixcbiAgXCJ1aW50MzJcIixcbiAgXCJpbnQ4XCIsXG4gIFwiaW50MTZcIixcbiAgXCJpbnQzMlwiLFxuICBcImZsb2F0MzJcIiBdXG5cbmZ1bmN0aW9uIEdMQnVmZmVyKGdsLCB0eXBlLCBoYW5kbGUsIGxlbmd0aCwgdXNhZ2UpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5oYW5kbGUgPSBoYW5kbGVcbiAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgdGhpcy51c2FnZSA9IHVzYWdlXG59XG5cbnZhciBwcm90byA9IEdMQnVmZmVyLnByb3RvdHlwZVxuXG5wcm90by5iaW5kID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLnR5cGUsIHRoaXMuaGFuZGxlKVxufVxuXG5wcm90by51bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5nbC5iaW5kQnVmZmVyKHRoaXMudHlwZSwgbnVsbClcbn1cblxucHJvdG8uZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmhhbmRsZSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlVHlwZUFycmF5KGdsLCB0eXBlLCBsZW4sIHVzYWdlLCBkYXRhLCBvZmZzZXQpIHtcbiAgdmFyIGRhdGFMZW4gPSBkYXRhLmxlbmd0aCAqIGRhdGEuQllURVNfUEVSX0VMRU1FTlQgXG4gIGlmKG9mZnNldCA8IDApIHtcbiAgICBnbC5idWZmZXJEYXRhKHR5cGUsIGRhdGEsIHVzYWdlKVxuICAgIHJldHVybiBkYXRhTGVuXG4gIH1cbiAgaWYoZGF0YUxlbiArIG9mZnNldCA+IGxlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSWYgcmVzaXppbmcgYnVmZmVyLCBtdXN0IG5vdCBzcGVjaWZ5IG9mZnNldFwiKVxuICB9XG4gIGdsLmJ1ZmZlclN1YkRhdGEodHlwZSwgb2Zmc2V0LCBkYXRhKVxuICByZXR1cm4gbGVuXG59XG5cbmZ1bmN0aW9uIG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBkdHlwZSkge1xuICB2YXIgcmVzID0gcG9vbC5tYWxsb2MoYXJyYXkubGVuZ3RoLCBkdHlwZSlcbiAgdmFyIG4gPSBhcnJheS5sZW5ndGhcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzW2ldID0gYXJyYXlbaV1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGlzUGFja2VkKHNoYXBlLCBzdHJpZGUpIHtcbiAgdmFyIG4gPSAxXG4gIGZvcih2YXIgaT1zdHJpZGUubGVuZ3RoLTE7IGk+PTA7IC0taSkge1xuICAgIGlmKHN0cmlkZVtpXSAhPT0gbikge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIG4gKj0gc2hhcGVbaV1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5wcm90by51cGRhdGUgPSBmdW5jdGlvbihhcnJheSwgb2Zmc2V0KSB7XG4gIGlmKHR5cGVvZiBvZmZzZXQgIT09IFwibnVtYmVyXCIpIHtcbiAgICBvZmZzZXQgPSAtMVxuICB9XG4gIHRoaXMuYmluZCgpXG4gIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJyYXkuc2hhcGUgIT09IFwidW5kZWZpbmVkXCIpIHsgLy9uZGFycmF5XG4gICAgdmFyIGR0eXBlID0gYXJyYXkuZHR5cGVcbiAgICBpZihTVVBQT1JURURfVFlQRVMuaW5kZXhPZihkdHlwZSkgPCAwKSB7XG4gICAgICBkdHlwZSA9IFwiZmxvYXQzMlwiXG4gICAgfVxuICAgIGlmKHRoaXMudHlwZSA9PT0gdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgICAgdmFyIHdnbCA9IHdlYmdsZXcodGhpcy5nbClcbiAgICAgIHZhciBleHQgPSB3Z2wuT0VTX2VsZW1lbnRfaW5kZXhfdWludFxuICAgICAgaWYoZXh0ICYmIGR0eXBlICE9PSBcInVpbnQxNlwiKSB7XG4gICAgICAgIGR0eXBlID0gXCJ1aW50MzJcIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHR5cGUgPSBcInVpbnQxNlwiXG4gICAgICB9XG4gICAgfVxuICAgIGlmKGR0eXBlID09PSBhcnJheS5kdHlwZSAmJiBpc1BhY2tlZChhcnJheS5zaGFwZSwgYXJyYXkuc3RyaWRlKSkge1xuICAgICAgaWYoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBhcnJheS5zaGFwZVswXSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheS5kYXRhLCBvZmZzZXQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkuc2hhcGVbMF0pLCBvZmZzZXQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0bXAgPSBwb29sLm1hbGxvYyhhcnJheS5zaXplLCBkdHlwZSlcbiAgICAgIHZhciBuZHQgPSBuZGFycmF5KHRtcCwgYXJyYXkuc2hhcGUpXG4gICAgICBvcHMuYXNzaWduKG5kdCwgYXJyYXkpXG4gICAgICBpZihvZmZzZXQgPCAwKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHRtcCwgb2Zmc2V0KSAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0bXAuc3ViYXJyYXkoMCwgYXJyYXkuc2l6ZSksIG9mZnNldCkgIFxuICAgICAgfVxuICAgICAgcG9vbC5mcmVlKHRtcClcbiAgICB9XG4gIH0gZWxzZSBpZihBcnJheS5pc0FycmF5KGFycmF5KSkgeyAvL1ZhbmlsbGEgYXJyYXlcbiAgICB2YXIgdFxuICAgIGlmKHRoaXMudHlwZSA9PT0gdGhpcy5nbC5FTEVNRU5UX0FSUkFZX0JVRkZFUikge1xuICAgICAgdCA9IG1ha2VTY3JhdGNoVHlwZUFycmF5KGFycmF5LCBcInVpbnQxNlwiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0ID0gbWFrZVNjcmF0Y2hUeXBlQXJyYXkoYXJyYXksIFwiZmxvYXQzMlwiKVxuICAgIH1cbiAgICBpZihvZmZzZXQgPCAwKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCB0LCBvZmZzZXQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gdXBkYXRlVHlwZUFycmF5KHRoaXMuZ2wsIHRoaXMudHlwZSwgdGhpcy5sZW5ndGgsIHRoaXMudXNhZ2UsIHQuc3ViYXJyYXkoMCwgYXJyYXkubGVuZ3RoKSwgb2Zmc2V0KVxuICAgIH1cbiAgICBwb29sLmZyZWUodClcbiAgfSBlbHNlIGlmKHR5cGVvZiBhcnJheSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYXJyYXkubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IC8vVHlwZWQgYXJyYXlcbiAgICB0aGlzLmxlbmd0aCA9IHVwZGF0ZVR5cGVBcnJheSh0aGlzLmdsLCB0aGlzLnR5cGUsIHRoaXMubGVuZ3RoLCB0aGlzLnVzYWdlLCBhcnJheSwgb2Zmc2V0KVxuICB9IGVsc2UgaWYodHlwZW9mIGFycmF5ID09PSBcIm51bWJlclwiIHx8IGFycmF5ID09PSB1bmRlZmluZWQpIHsgLy9OdW1iZXIvZGVmYXVsdFxuICAgIGlmKG9mZnNldCA+PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IENhbm5vdCBzcGVjaWZ5IG9mZnNldCB3aGVuIHJlc2l6aW5nIGJ1ZmZlclwiKVxuICAgIH1cbiAgICBhcnJheSA9IGFycmF5IHwgMFxuICAgIGlmKGFycmF5IDw9IDApIHtcbiAgICAgIGFycmF5ID0gMVxuICAgIH1cbiAgICB0aGlzLmdsLmJ1ZmZlckRhdGEodGhpcy50eXBlLCBhcnJheXwwLCB0aGlzLnVzYWdlKVxuICAgIHRoaXMubGVuZ3RoID0gYXJyYXlcbiAgfSBlbHNlIHsgLy9FcnJvciwgY2FzZSBzaG91bGQgbm90IGhhcHBlblxuICAgIHRocm93IG5ldyBFcnJvcihcImdsLWJ1ZmZlcjogSW52YWxpZCBkYXRhIHR5cGVcIilcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIoZ2wsIGRhdGEsIHR5cGUsIHVzYWdlKSB7XG4gIHdlYmdsZXcoZ2wpXG4gIHR5cGUgPSB0eXBlIHx8IGdsLkFSUkFZX0JVRkZFUlxuICB1c2FnZSA9IHVzYWdlIHx8IGdsLkRZTkFNSUNfRFJBV1xuICBpZih0eXBlICE9PSBnbC5BUlJBWV9CVUZGRVIgJiYgdHlwZSAhPT0gZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgdHlwZSBmb3Igd2ViZ2wgYnVmZmVyLCBtdXN0IGJlIGVpdGhlciBnbC5BUlJBWV9CVUZGRVIgb3IgZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVJcIilcbiAgfVxuICBpZih1c2FnZSAhPT0gZ2wuRFlOQU1JQ19EUkFXICYmIHVzYWdlICE9PSBnbC5TVEFUSUNfRFJBVyAmJiB1c2FnZSAhPT0gZ2wuU1RSRUFNX0RSQVcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnbC1idWZmZXI6IEludmFsaWQgdXNhZ2UgZm9yIGJ1ZmZlciwgbXVzdCBiZSBlaXRoZXIgZ2wuRFlOQU1JQ19EUkFXLCBnbC5TVEFUSUNfRFJBVyBvciBnbC5TVFJFQU1fRFJBV1wiKVxuICB9XG4gIHZhciBoYW5kbGUgPSBnbC5jcmVhdGVCdWZmZXIoKVxuICB2YXIgcmVzdWx0ID0gbmV3IEdMQnVmZmVyKGdsLCB0eXBlLCBoYW5kbGUsIDAsIHVzYWdlKVxuICByZXN1bHQudXBkYXRlKGRhdGEpXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCdWZmZXIiLCJ2YXIgY3JlYXRlID0gcmVxdWlyZSgnZ2wtdGV4dHVyZTJkJylcbnZhciBuZGFycmF5ID0gcmVxdWlyZSgnbmRhcnJheScpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZ2wpIHtcbiAgICAvL2ZpbGwgYW4gYXJyYXkgd2l0aCAweGZmXG4gICAgdmFyIGRhdGEgPSBBcnJheS5hcHBseShudWxsLCBuZXcgQXJyYXkoMTYpKVxuICAgICAgICAgICAgLm1hcChOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YsIDB4RkYpO1xuICAgIC8vY3JlYXRlIGEgMkQgbmRhcnJheVxuICAgIHZhciBhcnJheSA9IG5kYXJyYXkobmV3IFVpbnQ4QXJyYXkoZGF0YSksIFsyLCAyLCA0XSlcbiAgICByZXR1cm4gY3JlYXRlKGdsLCBhcnJheSlcbn0iLCJmdW5jdGlvbiBwcmVtdWx0aXBseShyZ2JhLCBvdXQpIHtcblx0aWYgKCFvdXQgfHwgdHlwZW9mIG91dCA9PT0gJ251bWJlcicpXG5cdFx0b3V0ID0gWzAsMCwwLDBdXG5cdG91dFswXSA9IHJnYmFbMF0gKiByZ2JhWzNdXG5cdG91dFsxXSA9IHJnYmFbMV0gKiByZ2JhWzNdXG5cdG91dFsyXSA9IHJnYmFbMl0gKiByZ2JhWzNdXG5cdG91dFszXSA9IHJnYmFbM11cblx0cmV0dXJuIG91dFxufVxubW9kdWxlLmV4cG9ydHMgPSBwcmVtdWx0aXBseSIsInZhciBwYWNrQ29sb3IgPSByZXF1aXJlKCdudW1iZXItdXRpbCcpLmNvbG9yVG9GbG9hdFxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbG9yVG9GbG9hdChyZ2JhKSB7XG4gICAgcmV0dXJuIHBhY2tDb2xvcihcbiAgICAgICAgfn4ocmdiYVswXSAqIDI1NSksXG4gICAgICAgIH5+KHJnYmFbMV0gKiAyNTUpLFxuICAgICAgICB+fihyZ2JhWzJdICogMjU1KSxcbiAgICAgICAgfn4ocmdiYVszXSAqIDI1NSlcbiAgICApXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0ZXhjb29yZChwb3NpdGlvbiwgc2hhcGUsIHRleFNoYXBlLCBvdXQpIHtcbiAgICBpZiAoIW91dClcbiAgICAgICAgb3V0ID0gWzAsIDAsIDEsIDFdXG5cbiAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IFswLCAwXVxuICAgIHNoYXBlID0gc2hhcGUgfHwgWzEsIDFdXG5cbiAgICB0ZXhTaGFwZSA9IHRleFNoYXBlIHx8IHNoYXBlXG5cbiAgICB2YXIgaW52V2lkdGggPSAxIC8gdGV4U2hhcGVbMF1cbiAgICB2YXIgaW52SGVpZ2h0ID0gMSAvIHRleFNoYXBlWzFdXG4gICAgdmFyIHggPSBwb3NpdGlvblswXSxcbiAgICAgICAgeSA9IHBvc2l0aW9uWzFdLFxuICAgICAgICB3ID0gc2hhcGVbMF0sXG4gICAgICAgIGggPSBzaGFwZVsxXVxuXG4gICAgb3V0WzBdID0geCAqIGludldpZHRoXG4gICAgb3V0WzFdID0geSAqIGludkhlaWdodFxuICAgIG91dFsyXSA9ICh4ICsgdykgKiBpbnZXaWR0aFxuICAgIG91dFszXSA9ICh5ICsgaCkgKiBpbnZIZWlnaHRcbiAgICByZXR1cm4gb3V0XG59IiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBuZGFycmF5ID0gcmVxdWlyZSgnbmRhcnJheScpXG52YXIgb3BzICAgICA9IHJlcXVpcmUoJ25kYXJyYXktb3BzJylcbnZhciBwb29sICAgID0gcmVxdWlyZSgndHlwZWRhcnJheS1wb29sJylcbnZhciB3ZWJnbGV3ID0gcmVxdWlyZSgnd2ViZ2xldycpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlVGV4dHVyZTJEXG5cbnZhciBsaW5lYXJUeXBlcyA9IG51bGxcbnZhciBmaWx0ZXJUeXBlcyA9IG51bGxcbnZhciB3cmFwVHlwZXMgICA9IG51bGxcblxuZnVuY3Rpb24gbGF6eUluaXRMaW5lYXJUeXBlcyhnbCkge1xuICBsaW5lYXJUeXBlcyA9IFtcbiAgICBnbC5MSU5FQVIsXG4gICAgZ2wuTkVBUkVTVF9NSVBNQVBfTElORUFSLFxuICAgIGdsLkxJTkVBUl9NSVBNQVBfTkVBUkVTVCxcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1RcbiAgXVxuICBmaWx0ZXJUeXBlcyA9IFtcbiAgICBnbC5ORUFSRVNULFxuICAgIGdsLkxJTkVBUixcbiAgICBnbC5ORUFSRVNUX01JUE1BUF9ORUFSRVNULFxuICAgIGdsLk5FQVJFU1RfTUlQTUFQX0xJTkVBUixcbiAgICBnbC5MSU5FQVJfTUlQTUFQX05FQVJFU1QsXG4gICAgZ2wuTElORUFSX01JUE1BUF9MSU5FQVJcbiAgXVxuICB3cmFwVHlwZXMgPSBbXG4gICAgZ2wuUkVQRUFULFxuICAgIGdsLkNMQU1QX1RPX0VER0UsXG4gICAgZ2wuTUlSUk9SRURfUkVQRUFUXG4gIF1cbn1cblxudmFyIGNvbnZlcnRGbG9hdFRvVWludDggPSBmdW5jdGlvbihvdXQsIGlucCkge1xuICBvcHMubXVscyhvdXQsIGlucCwgMjU1LjApXG59XG5cbmZ1bmN0aW9uIHJlc2hhcGVUZXh0dXJlKHRleCwgdywgaCkge1xuICB2YXIgZ2wgPSB0ZXguZ2xcbiAgdmFyIG1heFNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYodyA8IDAgfHwgdyA+IG1heFNpemUgfHwgaCA8IDAgfHwgaCA+IG1heFNpemUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCB0ZXh0dXJlIHNpemUnKVxuICB9XG4gIHRleC5fc2hhcGUgPSBbdywgaF1cbiAgdGV4LmJpbmQoKVxuICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIHRleC5mb3JtYXQsIHcsIGgsIDAsIHRleC5mb3JtYXQsIHRleC50eXBlLCBudWxsKVxuICB0ZXguX21pcExldmVscyA9IFswXVxuICByZXR1cm4gdGV4XG59XG5cbmZ1bmN0aW9uIFRleHR1cmUyRChnbCwgaGFuZGxlLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdGhpcy5nbCA9IGdsXG4gIHRoaXMuaGFuZGxlID0gaGFuZGxlXG4gIHRoaXMuZm9ybWF0ID0gZm9ybWF0XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5fc2hhcGUgPSBbd2lkdGgsIGhlaWdodF1cbiAgdGhpcy5fbWlwTGV2ZWxzID0gWzBdXG4gIHRoaXMuX21hZ0ZpbHRlciA9IGdsLk5FQVJFU1RcbiAgdGhpcy5fbWluRmlsdGVyID0gZ2wuTkVBUkVTVFxuICB0aGlzLl93cmFwUyA9IGdsLkNMQU1QX1RPX0VER0VcbiAgdGhpcy5fd3JhcFQgPSBnbC5DTEFNUF9UT19FREdFXG4gIHRoaXMuX2FuaXNvU2FtcGxlcyA9IDFcblxuICB2YXIgcGFyZW50ID0gdGhpc1xuICB2YXIgd3JhcFZlY3RvciA9IFt0aGlzLl93cmFwUywgdGhpcy5fd3JhcFRdXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHdyYXBWZWN0b3IsIFtcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll93cmFwU1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndyYXBTID0gdlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fd3JhcFRcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC53cmFwVCA9IHZcbiAgICAgIH1cbiAgICB9XG4gIF0pXG4gIHRoaXMuX3dyYXBWZWN0b3IgPSB3cmFwVmVjdG9yXG5cbiAgdmFyIHNoYXBlVmVjdG9yID0gW3RoaXMuX3NoYXBlWzBdLCB0aGlzLl9zaGFwZVsxXV1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc2hhcGVWZWN0b3IsIFtcbiAgICB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcGFyZW50Ll9zaGFwZVswXVxuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gcGFyZW50LndpZHRoID0gdlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fc2hhcGVbMV1cbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudC5oZWlnaHQgPSB2XG4gICAgICB9XG4gICAgfVxuICBdKVxuICB0aGlzLl9zaGFwZVZlY3RvciA9IHNoYXBlVmVjdG9yXG59XG5cbnZhciBwcm90byA9IFRleHR1cmUyRC5wcm90b3R5cGVcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMocHJvdG8sIHtcbiAgbWluRmlsdGVyOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9taW5GaWx0ZXJcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIGlmKHRoaXMudHlwZSA9PT0gZ2wuRkxPQVQgJiYgbGluZWFyVHlwZXMuaW5kZXhPZih2KSA+PSAwKSB7XG4gICAgICAgIGlmKCF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0X2xpbmVhcikge1xuICAgICAgICAgIHYgPSBnbC5ORUFSRVNUXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGZpbHRlclR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIGZpbHRlciBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fbWluRmlsdGVyID0gdlxuICAgIH1cbiAgfSxcbiAgbWFnRmlsdGVyOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tYWdGaWx0ZXJcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIGlmKHRoaXMudHlwZSA9PT0gZ2wuRkxPQVQgJiYgbGluZWFyVHlwZXMuaW5kZXhPZih2KSA+PSAwKSB7XG4gICAgICAgIGlmKCF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0X2xpbmVhcikge1xuICAgICAgICAgIHYgPSBnbC5ORUFSRVNUXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKGZpbHRlclR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIGZpbHRlciBtb2RlICcgKyB2KVxuICAgICAgfVxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fbWFnRmlsdGVyID0gdlxuICAgIH1cbiAgfSxcbiAgbWlwU2FtcGxlczoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYW5pc29TYW1wbGVzXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGkpIHtcbiAgICAgIHZhciBwc2FtcGxlcyA9IHRoaXMuX2FuaXNvU2FtcGxlc1xuICAgICAgdGhpcy5fYW5pc29TYW1wbGVzID0gTWF0aC5tYXgoaSwgMSl8MFxuICAgICAgaWYocHNhbXBsZXMgIT09IHRoaXMuX2FuaXNvU2FtcGxlcykge1xuICAgICAgICB2YXIgZXh0ID0gd2ViZ2xldyh0aGlzLmdsKS5FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcbiAgICAgICAgaWYoZXh0KSB7XG4gICAgICAgICAgdGhpcy5nbC50ZXhQYXJhbWV0ZXJmKHRoaXMuZ2wuVEVYVFVSRV8yRCwgZXh0LlRFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCB0aGlzLl9hbmlzb1NhbXBsZXMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9hbmlzb1NhbXBsZXNcbiAgICB9XG4gIH0sXG4gIHdyYXBTOiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl93cmFwU1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICB0aGlzLmJpbmQoKVxuICAgICAgaWYod3JhcFR5cGVzLmluZGV4T2YodikgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBVbmtub3duIHdyYXAgbW9kZSAnICsgdilcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2wudGV4UGFyYW1ldGVyaSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuZ2wuVEVYVFVSRV9XUkFQX1MsIHYpXG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFMgPSB2XG4gICAgfVxuICB9LFxuICB3cmFwVDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFRcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5iaW5kKClcbiAgICAgIGlmKHdyYXBUeXBlcy5pbmRleE9mKHYpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biB3cmFwIG1vZGUgJyArIHYpXG4gICAgICB9XG4gICAgICB0aGlzLmdsLnRleFBhcmFtZXRlcmkodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmdsLlRFWFRVUkVfV1JBUF9ULCB2KVxuICAgICAgcmV0dXJuIHRoaXMuX3dyYXBUID0gdlxuICAgIH1cbiAgfSxcbiAgd3JhcDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd3JhcFZlY3RvclxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbih2KSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgICB2ID0gW3Ysdl1cbiAgICAgIH1cbiAgICAgIGlmKHYubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBNdXN0IHNwZWNpZnkgd3JhcCBtb2RlIGZvciByb3dzIGFuZCBjb2x1bW5zJylcbiAgICAgIH1cbiAgICAgIGZvcih2YXIgaT0wOyBpPDI7ICsraSkge1xuICAgICAgICBpZih3cmFwVHlwZXMuaW5kZXhPZih2W2ldKSA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogVW5rbm93biB3cmFwIG1vZGUgJyArIHYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX3dyYXBTID0gdlswXVxuICAgICAgdGhpcy5fd3JhcFQgPSB2WzFdXG5cbiAgICAgIHZhciBnbCA9IHRoaXMuZ2xcbiAgICAgIHRoaXMuYmluZCgpXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCB0aGlzLl93cmFwUylcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIHRoaXMuX3dyYXBUKVxuXG4gICAgICByZXR1cm4gdlxuICAgIH1cbiAgfSxcbiAgc2hhcGU6IHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoYXBlVmVjdG9yXG4gICAgfSwgXG4gICAgc2V0OiBmdW5jdGlvbih4KSB7XG4gICAgICBpZighQXJyYXkuaXNBcnJheSh4KSkge1xuICAgICAgICB4ID0gW3h8MCx4fDBdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZih4Lmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIHRleHR1cmUgc2hhcGUnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXNoYXBlVGV4dHVyZSh0aGlzLCB4WzBdfDAsIHhbMV18MClcbiAgICAgIHJldHVybiBbeFswXXwwLCB4WzFdfDBdXG4gICAgfVxuICB9LFxuICB3aWR0aDoge1xuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2hhcGVbMF1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24odykge1xuICAgICAgdyA9IHd8MFxuICAgICAgcmVzaGFwZVRleHR1cmUodGhpcywgdywgdGhpcy5fc2hhcGVbMV0pXG4gICAgICByZXR1cm4gd1xuICAgIH1cbiAgfSxcbiAgaGVpZ2h0OiB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaGFwZVsxXVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbihoKSB7XG4gICAgICBoID0gaHwwXG4gICAgICByZXNoYXBlVGV4dHVyZSh0aGlzLCB0aGlzLl9zaGFwZVswXSwgaClcbiAgICAgIHJldHVybiBoXG4gICAgfVxuICB9XG59KVxuXG5wcm90by5iaW5kID0gZnVuY3Rpb24odW5pdCkge1xuICB2YXIgZ2wgPSB0aGlzLmdsXG4gIGlmKHVuaXQgIT09IHVuZGVmaW5lZCkge1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTAgKyAodW5pdHwwKSlcbiAgfVxuICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLmhhbmRsZSlcbiAgaWYodW5pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICh1bml0fDApXG4gIH1cbiAgcmV0dXJuIGdsLmdldFBhcmFtZXRlcihnbC5BQ1RJVkVfVEVYVFVSRSkgLSBnbC5URVhUVVJFMFxufVxuXG5wcm90by5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLmhhbmRsZSlcbn1cblxucHJvdG8uZ2VuZXJhdGVNaXBtYXAgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5iaW5kKClcbiAgdGhpcy5nbC5nZW5lcmF0ZU1pcG1hcCh0aGlzLmdsLlRFWFRVUkVfMkQpXG4gIFxuICAvL1VwZGF0ZSBtaXAgbGV2ZWxzXG4gIHZhciBsID0gTWF0aC5taW4odGhpcy5fc2hhcGVbMF0sIHRoaXMuX3NoYXBlWzFdKVxuICBmb3IodmFyIGk9MDsgbD4wOyArK2ksIGw+Pj49MSkge1xuICAgIGlmKHRoaXMuX21pcExldmVscy5pbmRleE9mKGkpIDwgMCkge1xuICAgICAgdGhpcy5fbWlwTGV2ZWxzLnB1c2goaSlcbiAgICB9XG4gIH1cbn1cblxucHJvdG8uc2V0UGl4ZWxzID0gZnVuY3Rpb24oZGF0YSwgeF9vZmYsIHlfb2ZmLCBtaXBfbGV2ZWwpIHtcbiAgdmFyIGdsID0gdGhpcy5nbFxuICB0aGlzLmJpbmQoKVxuICBpZihBcnJheS5pc0FycmF5KHhfb2ZmKSkge1xuICAgIG1pcF9sZXZlbCA9IHlfb2ZmXG4gICAgeV9vZmYgPSB4X29mZlsxXXwwXG4gICAgeF9vZmYgPSB4X29mZlswXXwwXG4gIH0gZWxzZSB7XG4gICAgeF9vZmYgPSB4X29mZiB8fCAwXG4gICAgeV9vZmYgPSB5X29mZiB8fCAwXG4gIH1cbiAgbWlwX2xldmVsID0gbWlwX2xldmVsIHx8IDBcbiAgaWYoZGF0YSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50IHx8XG4gICAgIGRhdGEgaW5zdGFuY2VvZiBJbWFnZURhdGEgfHxcbiAgICAgZGF0YSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHxcbiAgICAgZGF0YSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQpIHtcbiAgICB2YXIgbmVlZHNNaXAgPSB0aGlzLl9taXBMZXZlbHMuaW5kZXhPZihtaXBfbGV2ZWwpIDwgMFxuICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZm9ybWF0LCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBkYXRhKVxuICAgICAgdGhpcy5fbWlwTGV2ZWxzLnB1c2gobWlwX2xldmVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBnbC50ZXhTdWJJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgeF9vZmYsIHlfb2ZmLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCBkYXRhKVxuICAgIH1cbiAgfSBlbHNlIGlmKGRhdGEuc2hhcGUgJiYgZGF0YS5zdHJpZGUgJiYgZGF0YS5kYXRhKSB7XG4gICAgaWYoZGF0YS5zaGFwZS5sZW5ndGggPCAyIHx8XG4gICAgICAgeF9vZmYgKyBkYXRhLnNoYXBlWzFdID4gdGhpcy5fc2hhcGVbMV0+Pj5taXBfbGV2ZWwgfHxcbiAgICAgICB5X29mZiArIGRhdGEuc2hhcGVbMF0gPiB0aGlzLl9zaGFwZVswXT4+Pm1pcF9sZXZlbCB8fFxuICAgICAgIHhfb2ZmIDwgMCB8fFxuICAgICAgIHlfb2ZmIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFRleHR1cmUgZGltZW5zaW9ucyBhcmUgb3V0IG9mIGJvdW5kcycpXG4gICAgfVxuICAgIHRleFN1YkltYWdlQXJyYXkoZ2wsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsLCB0aGlzLmZvcm1hdCwgdGhpcy50eXBlLCB0aGlzLl9taXBMZXZlbHMsIGRhdGEpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IFVuc3VwcG9ydGVkIGRhdGEgdHlwZScpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBpc1BhY2tlZChzaGFwZSwgc3RyaWRlKSB7XG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiAgKHN0cmlkZVsyXSA9PT0gMSkgJiYgXG4gICAgICAgICAgICAoc3RyaWRlWzFdID09PSBzaGFwZVswXSpzaGFwZVsyXSkgJiZcbiAgICAgICAgICAgIChzdHJpZGVbMF0gPT09IHNoYXBlWzJdKVxuICB9XG4gIHJldHVybiAgKHN0cmlkZVswXSA9PT0gMSkgJiYgXG4gICAgICAgICAgKHN0cmlkZVsxXSA9PT0gc2hhcGVbMF0pXG59XG5cbmZ1bmN0aW9uIHRleFN1YkltYWdlQXJyYXkoZ2wsIHhfb2ZmLCB5X29mZiwgbWlwX2xldmVsLCBjZm9ybWF0LCBjdHlwZSwgbWlwTGV2ZWxzLCBhcnJheSkge1xuICB2YXIgZHR5cGUgPSBhcnJheS5kdHlwZVxuICB2YXIgc2hhcGUgPSBhcnJheS5zaGFwZS5zbGljZSgpXG4gIGlmKHNoYXBlLmxlbmd0aCA8IDIgfHwgc2hhcGUubGVuZ3RoID4gMykge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbnZhbGlkIG5kYXJyYXksIG11c3QgYmUgMmQgb3IgM2QnKVxuICB9XG4gIHZhciB0eXBlID0gMCwgZm9ybWF0ID0gMFxuICB2YXIgcGFja2VkID0gaXNQYWNrZWQoc2hhcGUsIGFycmF5LnN0cmlkZS5zbGljZSgpKVxuICBpZihkdHlwZSA9PT0gJ2Zsb2F0MzInKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gIH0gZWxzZSBpZihkdHlwZSA9PT0gJ2Zsb2F0NjQnKSB7XG4gICAgdHlwZSA9IGdsLkZMT0FUXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICdmbG9hdDMyJ1xuICB9IGVsc2UgaWYoZHR5cGUgPT09ICd1aW50OCcpIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICB9IGVsc2Uge1xuICAgIHR5cGUgPSBnbC5VTlNJR05FRF9CWVRFXG4gICAgcGFja2VkID0gZmFsc2VcbiAgICBkdHlwZSA9ICd1aW50OCdcbiAgfVxuICB2YXIgY2hhbm5lbHMgPSAxXG4gIGlmKHNoYXBlLmxlbmd0aCA9PT0gMikge1xuICAgIGZvcm1hdCA9IGdsLkxVTUlOQU5DRVxuICAgIHNoYXBlID0gW3NoYXBlWzBdLCBzaGFwZVsxXSwgMV1cbiAgICBhcnJheSA9IG5kYXJyYXkoYXJyYXkuZGF0YSwgc2hhcGUsIFthcnJheS5zdHJpZGVbMF0sIGFycmF5LnN0cmlkZVsxXSwgMV0sIGFycmF5Lm9mZnNldClcbiAgfSBlbHNlIGlmKHNoYXBlLmxlbmd0aCA9PT0gMykge1xuICAgIGlmKHNoYXBlWzJdID09PSAxKSB7XG4gICAgICBmb3JtYXQgPSBnbC5BTFBIQVxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gMikge1xuICAgICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFX0FMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAzKSB7XG4gICAgICBmb3JtYXQgPSBnbC5SR0JcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDQpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQkFcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHBpeGVsIGNvb3JkcycpXG4gICAgfVxuICAgIGNoYW5uZWxzID0gc2hhcGVbMl1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgdGV4dHVyZScpXG4gIH1cbiAgLy9Gb3IgMS1jaGFubmVsIHRleHR1cmVzIGFsbG93IGNvbnZlcnNpb24gYmV0d2VlbiBmb3JtYXRzXG4gIGlmKChmb3JtYXQgID09PSBnbC5MVU1JTkFOQ0UgfHwgZm9ybWF0ICA9PT0gZ2wuQUxQSEEpICYmXG4gICAgIChjZm9ybWF0ID09PSBnbC5MVU1JTkFOQ0UgfHwgY2Zvcm1hdCA9PT0gZ2wuQUxQSEEpKSB7XG4gICAgZm9ybWF0ID0gY2Zvcm1hdFxuICB9XG4gIGlmKGZvcm1hdCAhPT0gY2Zvcm1hdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignZ2wtdGV4dHVyZTJkOiBJbmNvbXBhdGlibGUgdGV4dHVyZSBmb3JtYXQgZm9yIHNldFBpeGVscycpXG4gIH1cbiAgdmFyIHNpemUgPSBhcnJheS5zaXplXG4gIHZhciBuZWVkc01pcCA9IG1pcExldmVscy5pbmRleE9mKG1pcF9sZXZlbCkgPCAwXG4gIGlmKG5lZWRzTWlwKSB7XG4gICAgbWlwTGV2ZWxzLnB1c2gobWlwX2xldmVsKVxuICB9XG4gIGlmKHR5cGUgPT09IGN0eXBlICYmIHBhY2tlZCkge1xuICAgIC8vQXJyYXkgZGF0YSB0eXBlcyBhcmUgY29tcGF0aWJsZSwgY2FuIGRpcmVjdGx5IGNvcHkgaW50byB0ZXh0dXJlXG4gICAgaWYoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBzaXplKSB7XG4gICAgICBpZihuZWVkc01pcCkge1xuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIG1pcF9sZXZlbCwgY2Zvcm1hdCwgc2hhcGVbMF0sIHNoYXBlWzFdLCAwLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdsLnRleFN1YkltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCB4X29mZiwgeV9vZmYsIHNoYXBlWzBdLCBzaGFwZVsxXSwgY2Zvcm1hdCwgY3R5cGUsIGFycmF5LmRhdGEpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKG5lZWRzTWlwKSB7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBhcnJheS5kYXRhLnN1YmFycmF5KGFycmF5Lm9mZnNldCwgYXJyYXkub2Zmc2V0K3NpemUpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgYXJyYXkuZGF0YS5zdWJhcnJheShhcnJheS5vZmZzZXQsIGFycmF5Lm9mZnNldCtzaXplKSlcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy9OZWVkIHRvIGRvIHR5cGUgY29udmVyc2lvbiB0byBwYWNrIGRhdGEgaW50byBidWZmZXJcbiAgICB2YXIgcGFja19idWZmZXJcbiAgICBpZihjdHlwZSA9PT0gZ2wuRkxPQVQpIHtcbiAgICAgIHBhY2tfYnVmZmVyID0gcG9vbC5tYWxsb2NGbG9hdDMyKHNpemUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhY2tfYnVmZmVyID0gcG9vbC5tYWxsb2NVaW50OChzaXplKVxuICAgIH1cbiAgICB2YXIgcGFja192aWV3ID0gbmRhcnJheShwYWNrX2J1ZmZlciwgc2hhcGUsIFtzaGFwZVsyXSwgc2hhcGVbMl0qc2hhcGVbMF0sIDFdKVxuICAgIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmIGN0eXBlID09PSBnbC5VTlNJR05FRF9CWVRFKSB7XG4gICAgICBjb252ZXJ0RmxvYXRUb1VpbnQ4KHBhY2tfdmlldywgYXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wcy5hc3NpZ24ocGFja192aWV3LCBhcnJheSlcbiAgICB9XG4gICAgaWYobmVlZHNNaXApIHtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgbWlwX2xldmVsLCBjZm9ybWF0LCBzaGFwZVswXSwgc2hhcGVbMV0sIDAsIGNmb3JtYXQsIGN0eXBlLCBwYWNrX2J1ZmZlci5zdWJhcnJheSgwLCBzaXplKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZ2wudGV4U3ViSW1hZ2UyRChnbC5URVhUVVJFXzJELCBtaXBfbGV2ZWwsIHhfb2ZmLCB5X29mZiwgc2hhcGVbMF0sIHNoYXBlWzFdLCBjZm9ybWF0LCBjdHlwZSwgcGFja19idWZmZXIuc3ViYXJyYXkoMCwgc2l6ZSkpXG4gICAgfVxuICAgIGlmKGN0eXBlID09PSBnbC5GTE9BVCkge1xuICAgICAgcG9vbC5mcmVlRmxvYXQzMihwYWNrX2J1ZmZlcilcbiAgICB9IGVsc2Uge1xuICAgICAgcG9vbC5mcmVlVWludDgocGFja19idWZmZXIpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRUZXh0dXJlKGdsKSB7XG4gIHZhciB0ZXggPSBnbC5jcmVhdGVUZXh0dXJlKClcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4KVxuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVClcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpXG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpXG4gIHJldHVybiB0ZXhcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQsIHR5cGUpIHtcbiAgdmFyIG1heFRleHR1cmVTaXplID0gZ2wuZ2V0UGFyYW1ldGVyKGdsLk1BWF9URVhUVVJFX1NJWkUpXG4gIGlmKHdpZHRoIDwgMCB8fCB3aWR0aCA+IG1heFRleHR1cmVTaXplIHx8IGhlaWdodCA8IDAgfHwgaGVpZ2h0ICA+IG1heFRleHR1cmVTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaGFwZScpXG4gIH1cbiAgaWYodHlwZSA9PT0gZ2wuRkxPQVQgJiYgIXdlYmdsZXcoZ2wpLnRleHR1cmVfZmxvYXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogRmxvYXRpbmcgcG9pbnQgdGV4dHVyZXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIHBsYXRmb3JtJylcbiAgfVxuICB2YXIgdGV4ID0gaW5pdFRleHR1cmUoZ2wpXG4gIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZm9ybWF0LCB3aWR0aCwgaGVpZ2h0LCAwLCBmb3JtYXQsIHR5cGUsIG51bGwpXG4gIHJldHVybiBuZXcgVGV4dHVyZTJEKGdsLCB0ZXgsIHdpZHRoLCBoZWlnaHQsIGZvcm1hdCwgdHlwZSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZURPTShnbCwgZWxlbWVudCwgZm9ybWF0LCB0eXBlKSB7XG4gIHZhciB0ZXggPSBpbml0VGV4dHVyZShnbClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIGZvcm1hdCwgdHlwZSwgZWxlbWVudClcbiAgcmV0dXJuIG5ldyBUZXh0dXJlMkQoZ2wsIHRleCwgZWxlbWVudC53aWR0aHwwLCBlbGVtZW50LmhlaWdodHwwLCBmb3JtYXQsIHR5cGUpXG59XG5cbi8vQ3JlYXRlcyBhIHRleHR1cmUgZnJvbSBhbiBuZGFycmF5XG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlQXJyYXkoZ2wsIGFycmF5KSB7XG4gIHZhciBkdHlwZSA9IGFycmF5LmR0eXBlXG4gIHZhciBzaGFwZSA9IGFycmF5LnNoYXBlLnNsaWNlKClcbiAgdmFyIG1heFNpemUgPSBnbC5nZXRQYXJhbWV0ZXIoZ2wuTUFYX1RFWFRVUkVfU0laRSlcbiAgaWYoc2hhcGVbMF0gPCAwIHx8IHNoYXBlWzBdID4gbWF4U2l6ZSB8fCBzaGFwZVsxXSA8IDAgfHwgc2hhcGVbMV0gPiBtYXhTaXplKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgdGV4dHVyZSBzaXplJylcbiAgfVxuICB2YXIgcGFja2VkID0gaXNQYWNrZWQoc2hhcGUsIGFycmF5LnN0cmlkZS5zbGljZSgpKVxuICB2YXIgdHlwZSA9IDBcbiAgaWYoZHR5cGUgPT09ICdmbG9hdDMyJykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICB9IGVsc2UgaWYoZHR5cGUgPT09ICdmbG9hdDY0Jykge1xuICAgIHR5cGUgPSBnbC5GTE9BVFxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAnZmxvYXQzMidcbiAgfSBlbHNlIGlmKGR0eXBlID09PSAndWludDgnKSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgfSBlbHNlIHtcbiAgICB0eXBlID0gZ2wuVU5TSUdORURfQllURVxuICAgIHBhY2tlZCA9IGZhbHNlXG4gICAgZHR5cGUgPSAndWludDgnXG4gIH1cbiAgdmFyIGZvcm1hdCA9IDBcbiAgaWYoc2hhcGUubGVuZ3RoID09PSAyKSB7XG4gICAgZm9ybWF0ID0gZ2wuTFVNSU5BTkNFXG4gICAgc2hhcGUgPSBbc2hhcGVbMF0sIHNoYXBlWzFdLCAxXVxuICAgIGFycmF5ID0gbmRhcnJheShhcnJheS5kYXRhLCBzaGFwZSwgW2FycmF5LnN0cmlkZVswXSwgYXJyYXkuc3RyaWRlWzFdLCAxXSwgYXJyYXkub2Zmc2V0KVxuICB9IGVsc2UgaWYoc2hhcGUubGVuZ3RoID09PSAzKSB7XG4gICAgaWYoc2hhcGVbMl0gPT09IDEpIHtcbiAgICAgIGZvcm1hdCA9IGdsLkFMUEhBXG4gICAgfSBlbHNlIGlmKHNoYXBlWzJdID09PSAyKSB7XG4gICAgICBmb3JtYXQgPSBnbC5MVU1JTkFOQ0VfQUxQSEFcbiAgICB9IGVsc2UgaWYoc2hhcGVbMl0gPT09IDMpIHtcbiAgICAgIGZvcm1hdCA9IGdsLlJHQlxuICAgIH0gZWxzZSBpZihzaGFwZVsyXSA9PT0gNCkge1xuICAgICAgZm9ybWF0ID0gZ2wuUkdCQVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dsLXRleHR1cmUyZDogSW52YWxpZCBzaGFwZSBmb3IgcGl4ZWwgY29vcmRzJylcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgc2hhcGUgZm9yIHRleHR1cmUnKVxuICB9XG4gIGlmKHR5cGUgPT09IGdsLkZMT0FUICYmICF3ZWJnbGV3KGdsKS50ZXh0dXJlX2Zsb2F0KSB7XG4gICAgdHlwZSA9IGdsLlVOU0lHTkVEX0JZVEVcbiAgICBwYWNrZWQgPSBmYWxzZVxuICB9XG4gIHZhciBidWZmZXIsIGJ1Zl9zdG9yZVxuICB2YXIgc2l6ZSA9IGFycmF5LnNpemVcbiAgaWYoIXBhY2tlZCkge1xuICAgIHZhciBzdHJpZGUgPSBbc2hhcGVbMl0sIHNoYXBlWzJdKnNoYXBlWzBdLCAxXVxuICAgIGJ1Zl9zdG9yZSA9IHBvb2wubWFsbG9jKHNpemUsIGR0eXBlKVxuICAgIHZhciBidWZfYXJyYXkgPSBuZGFycmF5KGJ1Zl9zdG9yZSwgc2hhcGUsIHN0cmlkZSwgMClcbiAgICBpZigoZHR5cGUgPT09ICdmbG9hdDMyJyB8fCBkdHlwZSA9PT0gJ2Zsb2F0NjQnKSAmJiB0eXBlID09PSBnbC5VTlNJR05FRF9CWVRFKSB7XG4gICAgICBjb252ZXJ0RmxvYXRUb1VpbnQ4KGJ1Zl9hcnJheSwgYXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9wcy5hc3NpZ24oYnVmX2FycmF5LCBhcnJheSlcbiAgICB9XG4gICAgYnVmZmVyID0gYnVmX3N0b3JlLnN1YmFycmF5KDAsIHNpemUpXG4gIH0gZWxzZSBpZiAoYXJyYXkub2Zmc2V0ID09PSAwICYmIGFycmF5LmRhdGEubGVuZ3RoID09PSBzaXplKSB7XG4gICAgYnVmZmVyID0gYXJyYXkuZGF0YVxuICB9IGVsc2Uge1xuICAgIGJ1ZmZlciA9IGFycmF5LmRhdGEuc3ViYXJyYXkoYXJyYXkub2Zmc2V0LCBhcnJheS5vZmZzZXQgKyBzaXplKVxuICB9XG4gIHZhciB0ZXggPSBpbml0VGV4dHVyZShnbClcbiAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBmb3JtYXQsIHNoYXBlWzBdLCBzaGFwZVsxXSwgMCwgZm9ybWF0LCB0eXBlLCBidWZmZXIpXG4gIGlmKCFwYWNrZWQpIHtcbiAgICBwb29sLmZyZWUoYnVmX3N0b3JlKVxuICB9XG4gIHJldHVybiBuZXcgVGV4dHVyZTJEKGdsLCB0ZXgsIHNoYXBlWzBdLCBzaGFwZVsxXSwgZm9ybWF0LCB0eXBlKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlMkQoZ2wpIHtcbiAgaWYoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IE1pc3NpbmcgYXJndW1lbnRzIGZvciB0ZXh0dXJlMmQgY29uc3RydWN0b3InKVxuICB9XG4gIGlmKCFsaW5lYXJUeXBlcykge1xuICAgIGxhenlJbml0TGluZWFyVHlwZXMoZ2wpXG4gIH1cbiAgaWYodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gY3JlYXRlVGV4dHVyZVNoYXBlKGdsLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSwgYXJndW1lbnRzWzNdfHxnbC5SR0JBLCBhcmd1bWVudHNbNF18fGdsLlVOU0lHTkVEX0JZVEUpXG4gIH1cbiAgaWYoQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMV0pKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVRleHR1cmVTaGFwZShnbCwgYXJndW1lbnRzWzFdWzBdfDAsIGFyZ3VtZW50c1sxXVsxXXwwLCBhcmd1bWVudHNbMl18fGdsLlJHQkEsIGFyZ3VtZW50c1szXXx8Z2wuVU5TSUdORURfQllURSlcbiAgfVxuICBpZih0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvYmogPSBhcmd1bWVudHNbMV1cbiAgICBpZihvYmogaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCB8fFxuICAgICAgIG9iaiBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHxcbiAgICAgICBvYmogaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50IHx8XG4gICAgICAgb2JqIGluc3RhbmNlb2YgSW1hZ2VEYXRhKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dHVyZURPTShnbCwgb2JqLCBhcmd1bWVudHNbMl18fGdsLlJHQkEsIGFyZ3VtZW50c1szXXx8Z2wuVU5TSUdORURfQllURSlcbiAgICB9IGVsc2UgaWYob2JqLnNoYXBlICYmIG9iai5kYXRhICYmIG9iai5zdHJpZGUpIHtcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0dXJlQXJyYXkoZ2wsIG9iailcbiAgICB9XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdnbC10ZXh0dXJlMmQ6IEludmFsaWQgYXJndW1lbnRzIGZvciB0ZXh0dXJlMmQgY29uc3RydWN0b3InKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBzZXQ7XG5cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuZnVuY3Rpb24gc2V0KG91dCwgeCwgeSwgeikge1xuICAgIG91dFswXSA9IHhcbiAgICBvdXRbMV0gPSB5XG4gICAgb3V0WzJdID0gelxuICAgIHJldHVybiBvdXRcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHByb2dyYW1pZnlcblxudmFyIHNoYWRlciA9IHJlcXVpcmUoJ2dsLXNoYWRlci1jb3JlJylcblxuZnVuY3Rpb24gcHJvZ3JhbWlmeSh2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcykge1xuICByZXR1cm4gZnVuY3Rpb24oZ2wpIHtcbiAgICByZXR1cm4gc2hhZGVyKGdsLCB2ZXJ0ZXgsIGZyYWdtZW50LCB1bmlmb3JtcywgYXR0cmlidXRlcylcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBub29wXG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdZb3Ugc2hvdWxkIGJ1bmRsZSB5b3VyIGNvZGUgJyArXG4gICAgICAndXNpbmcgYGdsc2xpZnlgIGFzIGEgdHJhbnNmb3JtLidcbiAgKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBwcm9ncmFtaWZ5XG5cbmZ1bmN0aW9uIHByb2dyYW1pZnkodmVydGV4LCBmcmFnbWVudCwgdW5pZm9ybXMsIGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB2ZXJ0ZXg6IHZlcnRleCwgXG4gICAgZnJhZ21lbnQ6IGZyYWdtZW50LFxuICAgIHVuaWZvcm1zOiB1bmlmb3JtcywgXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICB9O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpbWc7XG5cbmZ1bmN0aW9uIGltZyAoc3JjLCBvcHQsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBvcHRcbiAgICBvcHQgPSBudWxsXG4gIH1cblxuXG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB2YXIgbG9ja2VkO1xuXG4gIGVsLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9ja2VkKSByZXR1cm47XG4gICAgbG9ja2VkID0gdHJ1ZTtcblxuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHVuZGVmaW5lZCwgZWwpO1xuICB9O1xuXG4gIGVsLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGxvY2tlZCkgcmV0dXJuO1xuICAgIGxvY2tlZCA9IHRydWU7XG5cbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2FkIFwiJyArIHNyYyArICdcIicpLCBlbCk7XG4gIH07XG4gIFxuICBpZiAob3B0ICYmIG9wdC5jcm9zc09yaWdpbilcbiAgICBlbC5jcm9zc09yaWdpbiA9IG9wdC5jcm9zc09yaWdpbjtcblxuICBlbC5zcmMgPSBzcmM7XG5cbiAgcmV0dXJuIGVsO1xufVxuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJmdW5jdGlvbiBsZXJwKHYwLCB2MSwgdCkge1xuICAgIHJldHVybiB2MCooMS10KSt2MSp0XG59XG5tb2R1bGUuZXhwb3J0cyA9IGxlcnAiLCJ2YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59XG5cbmZ1bmN0aW9uIG1peChvYmosIGVudHJpZXMpIHtcblx0Zm9yICh2YXIgayBpbiBlbnRyaWVzKSB7XG5cdFx0aWYgKCFlbnRyaWVzLmhhc093blByb3BlcnR5KGspKVxuXHRcdFx0Y29udGludWVcblx0XHR2YXIgZiA9IGVudHJpZXNba11cblx0XHRpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdG9ialtrXSA9IGZcblx0XHR9IGVsc2UgaWYgKGYgJiYgdHlwZW9mIGYgPT09ICdvYmplY3QnKSB7XG5cdFx0XHR2YXIgZGVmID0geHRlbmQoZGVmYXVsdHMsIGYpXG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrLCBkZWYpO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1peGVzKGN0b3IsIGVudHJpZXMpIHtcblx0bWl4KGN0b3IucHJvdG90eXBlLCBlbnRyaWVzKVxufVxuXG5tb2R1bGUuZXhwb3J0cy5taXggPSBtaXgiLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgY29tcGlsZSA9IHJlcXVpcmUoXCJjd2lzZS1jb21waWxlclwiKVxuXG52YXIgRW1wdHlQcm9jID0ge1xuICBib2R5OiBcIlwiLFxuICBhcmdzOiBbXSxcbiAgdGhpc1ZhcnM6IFtdLFxuICBsb2NhbFZhcnM6IFtdXG59XG5cbmZ1bmN0aW9uIGZpeHVwKHgpIHtcbiAgaWYoIXgpIHtcbiAgICByZXR1cm4gRW1wdHlQcm9jXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8eC5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGEgPSB4LmFyZ3NbaV1cbiAgICBpZihpID09PSAwKSB7XG4gICAgICB4LmFyZ3NbaV0gPSB7bmFtZTogYSwgbHZhbHVlOnRydWUsIHJ2YWx1ZTogISF4LnJ2YWx1ZSwgY291bnQ6eC5jb3VudHx8MSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHguYXJnc1tpXSA9IHtuYW1lOiBhLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDogMX1cbiAgICB9XG4gIH1cbiAgaWYoIXgudGhpc1ZhcnMpIHtcbiAgICB4LnRoaXNWYXJzID0gW11cbiAgfVxuICBpZigheC5sb2NhbFZhcnMpIHtcbiAgICB4LmxvY2FsVmFycyA9IFtdXG4gIH1cbiAgcmV0dXJuIHhcbn1cblxuZnVuY3Rpb24gcGNvbXBpbGUodXNlcl9hcmdzKSB7XG4gIHJldHVybiBjb21waWxlKHtcbiAgICBhcmdzOiAgICAgdXNlcl9hcmdzLmFyZ3MsXG4gICAgcHJlOiAgICAgIGZpeHVwKHVzZXJfYXJncy5wcmUpLFxuICAgIGJvZHk6ICAgICBmaXh1cCh1c2VyX2FyZ3MuYm9keSksXG4gICAgcG9zdDogICAgIGZpeHVwKHVzZXJfYXJncy5wcm9jKSxcbiAgICBmdW5jTmFtZTogdXNlcl9hcmdzLmZ1bmNOYW1lXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG1ha2VPcCh1c2VyX2FyZ3MpIHtcbiAgdmFyIGFyZ3MgPSBbXVxuICBmb3IodmFyIGk9MDsgaTx1c2VyX2FyZ3MuYXJncy5sZW5ndGg7ICsraSkge1xuICAgIGFyZ3MucHVzaChcImFcIitpKVxuICB9XG4gIHZhciB3cmFwcGVyID0gbmV3IEZ1bmN0aW9uKFwiUFwiLCBbXG4gICAgXCJyZXR1cm4gZnVuY3Rpb24gXCIsIHVzZXJfYXJncy5mdW5jTmFtZSwgXCJfbmRhcnJheW9wcyhcIiwgYXJncy5qb2luKFwiLFwiKSwgXCIpIHtQKFwiLCBhcmdzLmpvaW4oXCIsXCIpLCBcIik7cmV0dXJuIGEwfVwiXG4gIF0uam9pbihcIlwiKSlcbiAgcmV0dXJuIHdyYXBwZXIocGNvbXBpbGUodXNlcl9hcmdzKSlcbn1cblxudmFyIGFzc2lnbl9vcHMgPSB7XG4gIGFkZDogIFwiK1wiLFxuICBzdWI6ICBcIi1cIixcbiAgbXVsOiAgXCIqXCIsXG4gIGRpdjogIFwiL1wiLFxuICBtb2Q6ICBcIiVcIixcbiAgYmFuZDogXCImXCIsXG4gIGJvcjogIFwifFwiLFxuICBieG9yOiBcIl5cIixcbiAgbHNoaWZ0OiBcIjw8XCIsXG4gIHJzaGlmdDogXCI+PlwiLFxuICBycnNoaWZ0OiBcIj4+PlwiXG59XG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaWQgaW4gYXNzaWduX29wcykge1xuICAgIHZhciBvcCA9IGFzc2lnbl9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sXG4gICAgICAgICAgICAgYm9keTogXCJhPWJcIitvcCtcImNcIn0sXG4gICAgICBmdW5jTmFtZTogaWRcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJlcVwiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhXCIrb3ArXCI9YlwifSxcbiAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJzXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWJcIitvcCtcInNcIn0sXG4gICAgICBmdW5jTmFtZTogaWQrXCJzXCJcbiAgICB9KVxuICAgIGV4cG9ydHNbaWQrXCJzZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIixcInNcIl0sXG4gICAgICAgICAgICAgYm9keTpcImFcIitvcCtcIj1zXCJ9LFxuICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgZnVuY05hbWU6IGlkK1wic2VxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgdW5hcnlfb3BzID0ge1xuICBub3Q6IFwiIVwiLFxuICBibm90OiBcIn5cIixcbiAgbmVnOiBcIi1cIixcbiAgcmVjaXA6IFwiMS4wL1wiXG59XG47KGZ1bmN0aW9uKCl7XG4gIGZvcih2YXIgaWQgaW4gdW5hcnlfb3BzKSB7XG4gICAgdmFyIG9wID0gdW5hcnlfb3BzW2lkXVxuICAgIGV4cG9ydHNbaWRdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPVwiK29wK1wiYlwifSxcbiAgICAgIGZ1bmNOYW1lOiBpZFxuICAgIH0pXG4gICAgZXhwb3J0c1tpZCtcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1cIitvcCtcImFcIn0sXG4gICAgICBydmFsdWU6IHRydWUsXG4gICAgICBjb3VudDogMixcbiAgICAgIGZ1bmNOYW1lOiBpZCtcImVxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgYmluYXJ5X29wcyA9IHtcbiAgYW5kOiBcIiYmXCIsXG4gIG9yOiBcInx8XCIsXG4gIGVxOiBcIj09PVwiLFxuICBuZXE6IFwiIT09XCIsXG4gIGx0OiBcIjxcIixcbiAgZ3Q6IFwiPlwiLFxuICBsZXE6IFwiPD1cIixcbiAgZ2VxOiBcIj49XCJcbn1cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaWQgaW4gYmluYXJ5X29wcykge1xuICAgIHZhciBvcCA9IGJpbmFyeV9vcHNbaWRdXG4gICAgZXhwb3J0c1tpZF0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIixcImFycmF5XCIsXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCIsIFwiY1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJjXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICBhcmdzOiBbXCJhcnJheVwiLFwiYXJyYXlcIixcInNjYWxhclwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCIsIFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1iXCIrb3ArXCJzXCJ9LFxuICAgICAgZnVuY05hbWU6IGlkK1wic1wiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wiZXFcIl0gPSBtYWtlT3Aoe1xuICAgICAgYXJnczogW1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgIGJvZHk6IHthcmdzOltcImFcIiwgXCJiXCJdLFxuICAgICAgICAgICAgIGJvZHk6XCJhPWFcIitvcCtcImJcIn0sXG4gICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgIGNvdW50OjIsXG4gICAgICBmdW5jTmFtZTogaWQrXCJlcVwiXG4gICAgfSlcbiAgICBleHBvcnRzW2lkK1wic2VxXCJdID0gbWFrZU9wKHtcbiAgICAgIGFyZ3M6IFtcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwic1wiXSxcbiAgICAgICAgICAgICBib2R5OlwiYT1hXCIrb3ArXCJzXCJ9LFxuICAgICAgcnZhbHVlOnRydWUsXG4gICAgICBjb3VudDoyLFxuICAgICAgZnVuY05hbWU6IGlkK1wic2VxXCJcbiAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF91bmFyeSA9IFtcbiAgXCJhYnNcIixcbiAgXCJhY29zXCIsXG4gIFwiYXNpblwiLFxuICBcImF0YW5cIixcbiAgXCJjZWlsXCIsXG4gIFwiY29zXCIsXG4gIFwiZXhwXCIsXG4gIFwiZmxvb3JcIixcbiAgXCJsb2dcIixcbiAgXCJyb3VuZFwiLFxuICBcInNpblwiLFxuICBcInNxcnRcIixcbiAgXCJ0YW5cIlxuXVxuOyhmdW5jdGlvbigpIHtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF91bmFyeS5sZW5ndGg7ICsraSkge1xuICAgIHZhciBmID0gbWF0aF91bmFyeVtpXVxuICAgIGV4cG9ydHNbZl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcImVxXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczogW1wiYVwiXSwgYm9keTpcImE9dGhpc19mKGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiBmK1wiZXFcIlxuICAgICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF9jb21tID0gW1xuICBcIm1heFwiLFxuICBcIm1pblwiLFxuICBcImF0YW4yXCIsXG4gIFwicG93XCJcbl1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF9jb21tLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGY9IG1hdGhfY29tbVtpXVxuICAgIGV4cG9ydHNbZl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwiYXJyYXlcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGMpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZlxuICAgICAgICAgICAgICAgIH0pXG4gICAgZXhwb3J0c1tmK1wic1wiXSA9IG1ha2VPcCh7XG4gICAgICAgICAgICAgICAgICBhcmdzOltcImFycmF5XCIsIFwiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIixcImNcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGMpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcInNcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgICAgICAgICAgICAgICAgIHByZToge2FyZ3M6W10sIGJvZHk6XCJ0aGlzX2Y9TWF0aC5cIitmLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgYm9keToge2FyZ3M6W1wiYVwiLFwiYlwiXSwgYm9keTpcImE9dGhpc19mKGEsYilcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIHJ2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OiAyLFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgIGV4cG9ydHNbZitcInNlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihhLGIpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OjIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcInNlcVwiXG4gICAgICAgICAgICAgICAgICB9KVxuICB9XG59KSgpO1xuXG52YXIgbWF0aF9ub25jb21tID0gW1xuICBcImF0YW4yXCIsXG4gIFwicG93XCJcbl1cbjsoZnVuY3Rpb24oKXtcbiAgZm9yKHZhciBpPTA7IGk8bWF0aF9ub25jb21tLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGY9IG1hdGhfbm9uY29tbVtpXVxuICAgIGV4cG9ydHNbZitcIm9wXCJdID0gbWFrZU9wKHtcbiAgICAgICAgICAgICAgICAgIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYyxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcHNcIl0gPSBtYWtlT3Aoe1xuICAgICAgICAgICAgICAgICAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCIsIFwic2NhbGFyXCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCIsXCJjXCJdLCBib2R5OlwiYT10aGlzX2YoYyxiKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgZnVuY05hbWU6IGYrXCJvcHNcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcGVxXCJdID0gbWFrZU9wKHsgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICAgICAgICAgICAgICAgICAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLlwiK2YsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBib2R5OiB7YXJnczpbXCJhXCIsXCJiXCJdLCBib2R5OlwiYT10aGlzX2YoYixhKVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICAgICAgICAgICAgICAgICAgcnZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY291bnQ6IDIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wZXFcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICBleHBvcnRzW2YrXCJvcHNlcVwiXSA9IG1ha2VPcCh7IGFyZ3M6W1wiYXJyYXlcIiwgXCJzY2FsYXJcIl0sXG4gICAgICAgICAgICAgICAgICBwcmU6IHthcmdzOltdLCBib2R5OlwidGhpc19mPU1hdGguXCIrZiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgICAgICAgICAgICAgICAgIGJvZHk6IHthcmdzOltcImFcIixcImJcIl0sIGJvZHk6XCJhPXRoaXNfZihiLGEpXCIsIHRoaXNWYXJzOltcInRoaXNfZlwiXX0sXG4gICAgICAgICAgICAgICAgICBydmFsdWU6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvdW50OjIsXG4gICAgICAgICAgICAgICAgICBmdW5jTmFtZTogZitcIm9wc2VxXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gIH1cbn0pKCk7XG5cbmV4cG9ydHMuYW55ID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZTogRW1wdHlQcm9jLFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJpZihhKXtyZXR1cm4gdHJ1ZX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gZmFsc2VcIn0sXG4gIGZ1bmNOYW1lOiBcImFueVwiXG59KVxuXG5leHBvcnRzLmFsbCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IEVtcHR5UHJvYyxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwieFwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoxfV0sIGJvZHk6IFwiaWYoIXgpe3JldHVybiBmYWxzZX1cIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W10sIGJvZHk6XCJyZXR1cm4gdHJ1ZVwifSxcbiAgZnVuY05hbWU6IFwiYWxsXCJcbn0pXG5cbmV4cG9ydHMuc3VtID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBib2R5OiBcInRoaXNfcys9YVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwic3VtXCJcbn0pXG5cbmV4cG9ydHMucHJvZCA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0xXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjF9XSwgYm9keTogXCJ0aGlzX3MqPWFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcInByb2RcIlxufSlcblxuZXhwb3J0cy5ub3JtMnNxdWFyZWQgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoyfV0sIGJvZHk6IFwidGhpc19zKz1hKmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0yc3F1YXJlZFwiXG59KVxuICBcbmV4cG9ydHMubm9ybTIgPSBjb21waWxlKHtcbiAgYXJnczpbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgbG9jYWxWYXJzOltdLCB0aGlzVmFyczpbXCJ0aGlzX3NcIl0sIGJvZHk6XCJ0aGlzX3M9MFwifSxcbiAgYm9keToge2FyZ3M6W3tuYW1lOlwiYVwiLCBsdmFsdWU6ZmFsc2UsIHJ2YWx1ZTp0cnVlLCBjb3VudDoyfV0sIGJvZHk6IFwidGhpc19zKz1hKmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiBNYXRoLnNxcnQodGhpc19zKVwifSxcbiAgZnVuY05hbWU6IFwibm9ybTJcIlxufSlcbiAgXG5cbmV4cG9ydHMubm9ybWluZiA9IGNvbXBpbGUoe1xuICBhcmdzOltcImFycmF5XCJdLFxuICBwcmU6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInRoaXNfcz0wXCJ9LFxuICBib2R5OiB7YXJnczpbe25hbWU6XCJhXCIsIGx2YWx1ZTpmYWxzZSwgcnZhbHVlOnRydWUsIGNvdW50OjR9XSwgYm9keTpcImlmKC1hPnRoaXNfcyl7dGhpc19zPS1hfWVsc2UgaWYoYT50aGlzX3Mpe3RoaXNfcz1hfVwiLCBsb2NhbFZhcnM6IFtdLCB0aGlzVmFyczogW1widGhpc19zXCJdfSxcbiAgcG9zdDoge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwicmV0dXJuIHRoaXNfc1wifSxcbiAgZnVuY05hbWU6IFwibm9ybWluZlwiXG59KVxuXG5leHBvcnRzLm5vcm0xID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIl0sXG4gIHByZToge2FyZ3M6W10sIGxvY2FsVmFyczpbXSwgdGhpc1ZhcnM6W1widGhpc19zXCJdLCBib2R5OlwidGhpc19zPTBcIn0sXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcImFcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6M31dLCBib2R5OiBcInRoaXNfcys9YTwwPy1hOmFcIiwgbG9jYWxWYXJzOiBbXSwgdGhpc1ZhcnM6IFtcInRoaXNfc1wiXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltcInRoaXNfc1wiXSwgYm9keTpcInJldHVybiB0aGlzX3NcIn0sXG4gIGZ1bmNOYW1lOiBcIm5vcm0xXCJcbn0pXG5cbmV4cG9ydHMuc3VwID0gY29tcGlsZSh7XG4gIGFyZ3M6IFsgXCJhcnJheVwiIF0sXG4gIHByZTpcbiAgIHsgYm9keTogXCJ0aGlzX2g9LUluZmluaXR5XCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgYm9keTpcbiAgIHsgYm9keTogXCJpZihfaW5saW5lXzFfYXJnMF8+dGhpc19oKXRoaXNfaD1faW5saW5lXzFfYXJnMF9cIixcbiAgICAgYXJnczogW3tcIm5hbWVcIjpcIl9pbmxpbmVfMV9hcmcwX1wiLFwibHZhbHVlXCI6ZmFsc2UsXCJydmFsdWVcIjp0cnVlLFwiY291bnRcIjoyfSBdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfSxcbiAgcG9zdDpcbiAgIHsgYm9keTogXCJyZXR1cm4gdGhpc19oXCIsXG4gICAgIGFyZ3M6IFtdLFxuICAgICB0aGlzVmFyczogWyBcInRoaXNfaFwiIF0sXG4gICAgIGxvY2FsVmFyczogW10gfVxuIH0pXG5cbmV4cG9ydHMuaW5mID0gY29tcGlsZSh7XG4gIGFyZ3M6IFsgXCJhcnJheVwiIF0sXG4gIHByZTpcbiAgIHsgYm9keTogXCJ0aGlzX2g9SW5maW5pdHlcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBib2R5OlxuICAgeyBib2R5OiBcImlmKF9pbmxpbmVfMV9hcmcwXzx0aGlzX2gpdGhpc19oPV9pbmxpbmVfMV9hcmcwX1wiLFxuICAgICBhcmdzOiBbe1wibmFtZVwiOlwiX2lubGluZV8xX2FyZzBfXCIsXCJsdmFsdWVcIjpmYWxzZSxcInJ2YWx1ZVwiOnRydWUsXCJjb3VudFwiOjJ9IF0sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9LFxuICBwb3N0OlxuICAgeyBib2R5OiBcInJldHVybiB0aGlzX2hcIixcbiAgICAgYXJnczogW10sXG4gICAgIHRoaXNWYXJzOiBbIFwidGhpc19oXCIgXSxcbiAgICAgbG9jYWxWYXJzOiBbXSB9XG4gfSlcblxuZXhwb3J0cy5hcmdtaW4gPSBjb21waWxlKHtcbiAgYXJnczpbXCJpbmRleFwiLFwiYXJyYXlcIixcInNoYXBlXCJdLFxuICBwcmU6e1xuICAgIGJvZHk6XCJ7dGhpc192PUluZmluaXR5O3RoaXNfaT1faW5saW5lXzBfYXJnMl8uc2xpY2UoMCl9XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6ZmFsc2UsY291bnQ6MH0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMF9hcmcyX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoxfVxuICAgICAgXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W119LFxuICBib2R5OntcbiAgICBib2R5Olwie2lmKF9pbmxpbmVfMV9hcmcxXzx0aGlzX3Ype3RoaXNfdj1faW5saW5lXzFfYXJnMV87Zm9yKHZhciBfaW5saW5lXzFfaz0wO19pbmxpbmVfMV9rPF9pbmxpbmVfMV9hcmcwXy5sZW5ndGg7KytfaW5saW5lXzFfayl7dGhpc19pW19pbmxpbmVfMV9rXT1faW5saW5lXzFfYXJnMF9bX2lubGluZV8xX2tdfX19XCIsXG4gICAgYXJnczpbXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcwX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfSxcbiAgICAgIHtuYW1lOlwiX2lubGluZV8xX2FyZzFfXCIsbHZhbHVlOmZhbHNlLHJ2YWx1ZTp0cnVlLGNvdW50OjJ9XSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIixcInRoaXNfdlwiXSxcbiAgICBsb2NhbFZhcnM6W1wiX2lubGluZV8xX2tcIl19LFxuICBwb3N0OntcbiAgICBib2R5Olwie3JldHVybiB0aGlzX2l9XCIsXG4gICAgYXJnczpbXSxcbiAgICB0aGlzVmFyczpbXCJ0aGlzX2lcIl0sXG4gICAgbG9jYWxWYXJzOltdfVxufSlcblxuZXhwb3J0cy5hcmdtYXggPSBjb21waWxlKHtcbiAgYXJnczpbXCJpbmRleFwiLFwiYXJyYXlcIixcInNoYXBlXCJdLFxuICBwcmU6e1xuICAgIGJvZHk6XCJ7dGhpc192PS1JbmZpbml0eTt0aGlzX2k9X2lubGluZV8wX2FyZzJfLnNsaWNlKDApfVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMV9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOmZhbHNlLGNvdW50OjB9LFxuICAgICAge25hbWU6XCJfaW5saW5lXzBfYXJnMl9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6MX1cbiAgICAgIF0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltdfSxcbiAgYm9keTp7XG4gICAgYm9keTpcIntpZihfaW5saW5lXzFfYXJnMV8+dGhpc192KXt0aGlzX3Y9X2lubGluZV8xX2FyZzFfO2Zvcih2YXIgX2lubGluZV8xX2s9MDtfaW5saW5lXzFfazxfaW5saW5lXzFfYXJnMF8ubGVuZ3RoOysrX2lubGluZV8xX2spe3RoaXNfaVtfaW5saW5lXzFfa109X2lubGluZV8xX2FyZzBfW19pbmxpbmVfMV9rXX19fVwiLFxuICAgIGFyZ3M6W1xuICAgICAge25hbWU6XCJfaW5saW5lXzFfYXJnMF9cIixsdmFsdWU6ZmFsc2UscnZhbHVlOnRydWUsY291bnQ6Mn0sXG4gICAgICB7bmFtZTpcIl9pbmxpbmVfMV9hcmcxX1wiLGx2YWx1ZTpmYWxzZSxydmFsdWU6dHJ1ZSxjb3VudDoyfV0sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCIsXCJ0aGlzX3ZcIl0sXG4gICAgbG9jYWxWYXJzOltcIl9pbmxpbmVfMV9rXCJdfSxcbiAgcG9zdDp7XG4gICAgYm9keTpcIntyZXR1cm4gdGhpc19pfVwiLFxuICAgIGFyZ3M6W10sXG4gICAgdGhpc1ZhcnM6W1widGhpc19pXCJdLFxuICAgIGxvY2FsVmFyczpbXX1cbn0pICBcblxuZXhwb3J0cy5yYW5kb20gPSBtYWtlT3Aoe1xuICBhcmdzOiBbXCJhcnJheVwiXSxcbiAgcHJlOiB7YXJnczpbXSwgYm9keTpcInRoaXNfZj1NYXRoLnJhbmRvbVwiLCB0aGlzVmFyczpbXCJ0aGlzX2ZcIl19LFxuICBib2R5OiB7YXJnczogW1wiYVwiXSwgYm9keTpcImE9dGhpc19mKClcIiwgdGhpc1ZhcnM6W1widGhpc19mXCJdfSxcbiAgZnVuY05hbWU6IFwicmFuZG9tXCJcbn0pXG5cbmV4cG9ydHMuYXNzaWduID0gbWFrZU9wKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcImFycmF5XCJdLFxuICBib2R5OiB7YXJnczpbXCJhXCIsIFwiYlwiXSwgYm9keTpcImE9YlwifSxcbiAgZnVuY05hbWU6IFwiYXNzaWduXCIgfSlcblxuZXhwb3J0cy5hc3NpZ25zID0gbWFrZU9wKHtcbiAgYXJnczpbXCJhcnJheVwiLCBcInNjYWxhclwiXSxcbiAgYm9keToge2FyZ3M6W1wiYVwiLCBcImJcIl0sIGJvZHk6XCJhPWJcIn0sXG4gIGZ1bmNOYW1lOiBcImFzc2lnbnNcIiB9KVxuXG5cbmV4cG9ydHMuZXF1YWxzID0gY29tcGlsZSh7XG4gIGFyZ3M6W1wiYXJyYXlcIiwgXCJhcnJheVwiXSxcbiAgcHJlOiBFbXB0eVByb2MsXG4gIGJvZHk6IHthcmdzOlt7bmFtZTpcInhcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX0sXG4gICAgICAgICAgICAgICB7bmFtZTpcInlcIiwgbHZhbHVlOmZhbHNlLCBydmFsdWU6dHJ1ZSwgY291bnQ6MX1dLCBcbiAgICAgICAgYm9keTogXCJpZih4IT09eSl7cmV0dXJuIGZhbHNlfVwiLCBcbiAgICAgICAgbG9jYWxWYXJzOiBbXSwgXG4gICAgICAgIHRoaXNWYXJzOiBbXX0sXG4gIHBvc3Q6IHthcmdzOltdLCBsb2NhbFZhcnM6W10sIHRoaXNWYXJzOltdLCBib2R5OlwicmV0dXJuIHRydWVcIn0sXG4gIGZ1bmNOYW1lOiBcImVxdWFsc1wiXG59KVxuXG5cbiIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjcmVhdGVUaHVuayA9IHJlcXVpcmUoXCIuL2xpYi90aHVuay5qc1wiKVxuXG5mdW5jdGlvbiBQcm9jZWR1cmUoKSB7XG4gIHRoaXMuYXJnVHlwZXMgPSBbXVxuICB0aGlzLnNoaW1BcmdzID0gW11cbiAgdGhpcy5hcnJheUFyZ3MgPSBbXVxuICB0aGlzLnNjYWxhckFyZ3MgPSBbXVxuICB0aGlzLm9mZnNldEFyZ3MgPSBbXVxuICB0aGlzLm9mZnNldEFyZ0luZGV4ID0gW11cbiAgdGhpcy5pbmRleEFyZ3MgPSBbXVxuICB0aGlzLnNoYXBlQXJncyA9IFtdXG4gIHRoaXMuZnVuY05hbWUgPSBcIlwiXG4gIHRoaXMucHJlID0gbnVsbFxuICB0aGlzLmJvZHkgPSBudWxsXG4gIHRoaXMucG9zdCA9IG51bGxcbiAgdGhpcy5kZWJ1ZyA9IGZhbHNlXG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVDd2lzZSh1c2VyX2FyZ3MpIHtcbiAgLy9DcmVhdGUgcHJvY2VkdXJlXG4gIHZhciBwcm9jID0gbmV3IFByb2NlZHVyZSgpXG4gIFxuICAvL1BhcnNlIGJsb2Nrc1xuICBwcm9jLnByZSAgICA9IHVzZXJfYXJncy5wcmVcbiAgcHJvYy5ib2R5ICAgPSB1c2VyX2FyZ3MuYm9keVxuICBwcm9jLnBvc3QgICA9IHVzZXJfYXJncy5wb3N0XG5cbiAgLy9QYXJzZSBhcmd1bWVudHNcbiAgdmFyIHByb2NfYXJncyA9IHVzZXJfYXJncy5hcmdzLnNsaWNlKDApXG4gIHByb2MuYXJnVHlwZXMgPSBwcm9jX2FyZ3NcbiAgZm9yKHZhciBpPTA7IGk8cHJvY19hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGFyZ190eXBlID0gcHJvY19hcmdzW2ldXG4gICAgaWYoYXJnX3R5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgcHJvYy5hcnJheUFyZ3MucHVzaChpKVxuICAgICAgcHJvYy5zaGltQXJncy5wdXNoKFwiYXJyYXlcIiArIGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5jb3VudD4wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBhcmdzXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5wb3N0LmFyZ3MubGVuZ3RoICYmIHByb2MucG9zdC5hcmdzW2ldLmNvdW50PjApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHBvc3QoKSBibG9jayBtYXkgbm90IHJlZmVyZW5jZSBhcnJheSBhcmdzXCIpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmKGFyZ190eXBlID09PSBcInNjYWxhclwiKSB7XG4gICAgICBwcm9jLnNjYWxhckFyZ3MucHVzaChpKVxuICAgICAgcHJvYy5zaGltQXJncy5wdXNoKFwic2NhbGFyXCIgKyBpKVxuICAgIH0gZWxzZSBpZihhcmdfdHlwZSA9PT0gXCJpbmRleFwiKSB7XG4gICAgICBwcm9jLmluZGV4QXJncy5wdXNoKGkpXG4gICAgICBpZihpIDwgcHJvYy5wcmUuYXJncy5sZW5ndGggJiYgcHJvYy5wcmUuYXJnc1tpXS5jb3VudCA+IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IHByZSgpIGJsb2NrIG1heSBub3QgcmVmZXJlbmNlIGFycmF5IGluZGV4XCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5ib2R5LmFyZ3MubGVuZ3RoICYmIHByb2MuYm9keS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogYm9keSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0uY291bnQgPiAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCByZWZlcmVuY2UgYXJyYXkgaW5kZXhcIilcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYoYXJnX3R5cGUgPT09IFwic2hhcGVcIikge1xuICAgICAgcHJvYy5zaGFwZUFyZ3MucHVzaChpKVxuICAgICAgaWYoaSA8IHByb2MucHJlLmFyZ3MubGVuZ3RoICYmIHByb2MucHJlLmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwcmUoKSBibG9jayBtYXkgbm90IHdyaXRlIHRvIGFycmF5IHNoYXBlXCIpXG4gICAgICB9XG4gICAgICBpZihpIDwgcHJvYy5ib2R5LmFyZ3MubGVuZ3RoICYmIHByb2MuYm9keS5hcmdzW2ldLmx2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogYm9keSgpIGJsb2NrIG1heSBub3Qgd3JpdGUgdG8gYXJyYXkgc2hhcGVcIilcbiAgICAgIH1cbiAgICAgIGlmKGkgPCBwcm9jLnBvc3QuYXJncy5sZW5ndGggJiYgcHJvYy5wb3N0LmFyZ3NbaV0ubHZhbHVlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImN3aXNlOiBwb3N0KCkgYmxvY2sgbWF5IG5vdCB3cml0ZSB0byBhcnJheSBzaGFwZVwiKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZih0eXBlb2YgYXJnX3R5cGUgPT09IFwib2JqZWN0XCIgJiYgYXJnX3R5cGUub2Zmc2V0KSB7XG4gICAgICBwcm9jLmFyZ1R5cGVzW2ldID0gXCJvZmZzZXRcIlxuICAgICAgcHJvYy5vZmZzZXRBcmdzLnB1c2goeyBhcnJheTogYXJnX3R5cGUuYXJyYXksIG9mZnNldDphcmdfdHlwZS5vZmZzZXQgfSlcbiAgICAgIHByb2Mub2Zmc2V0QXJnSW5kZXgucHVzaChpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVW5rbm93biBhcmd1bWVudCB0eXBlIFwiICsgcHJvY19hcmdzW2ldKVxuICAgIH1cbiAgfVxuICBcbiAgLy9NYWtlIHN1cmUgYXQgbGVhc3Qgb25lIGFycmF5IGFyZ3VtZW50IHdhcyBzcGVjaWZpZWRcbiAgaWYocHJvYy5hcnJheUFyZ3MubGVuZ3RoIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogTm8gYXJyYXkgYXJndW1lbnRzIHNwZWNpZmllZFwiKVxuICB9XG4gIFxuICAvL01ha2Ugc3VyZSBhcmd1bWVudHMgYXJlIGNvcnJlY3RcbiAgaWYocHJvYy5wcmUuYXJncy5sZW5ndGggPiBwcm9jX2FyZ3MubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3dpc2U6IFRvbyBtYW55IGFyZ3VtZW50cyBpbiBwcmUoKSBibG9ja1wiKVxuICB9XG4gIGlmKHByb2MuYm9keS5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIGJvZHkoKSBibG9ja1wiKVxuICB9XG4gIGlmKHByb2MucG9zdC5hcmdzLmxlbmd0aCA+IHByb2NfYXJncy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjd2lzZTogVG9vIG1hbnkgYXJndW1lbnRzIGluIHBvc3QoKSBibG9ja1wiKVxuICB9XG5cbiAgLy9DaGVjayBkZWJ1ZyBmbGFnXG4gIHByb2MuZGVidWcgPSAhIXVzZXJfYXJncy5wcmludENvZGUgfHwgISF1c2VyX2FyZ3MuZGVidWdcbiAgXG4gIC8vUmV0cmlldmUgbmFtZVxuICBwcm9jLmZ1bmNOYW1lID0gdXNlcl9hcmdzLmZ1bmNOYW1lIHx8IFwiY3dpc2VcIlxuICBcbiAgLy9SZWFkIGluIGJsb2NrIHNpemVcbiAgcHJvYy5ibG9ja1NpemUgPSB1c2VyX2FyZ3MuYmxvY2tTaXplIHx8IDY0XG5cbiAgcmV0dXJuIGNyZWF0ZVRodW5rKHByb2MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZUN3aXNlXG4iLCJcInVzZSBzdHJpY3RcIlxuXG52YXIgdW5pcSA9IHJlcXVpcmUoXCJ1bmlxXCIpXG5cbmZ1bmN0aW9uIGlubmVyRmlsbChvcmRlciwgcHJvYywgYm9keSkge1xuICB2YXIgZGltZW5zaW9uID0gb3JkZXIubGVuZ3RoXG4gICAgLCBuYXJncyA9IHByb2MuYXJyYXlBcmdzLmxlbmd0aFxuICAgICwgaGFzX2luZGV4ID0gcHJvYy5pbmRleEFyZ3MubGVuZ3RoPjBcbiAgICAsIGNvZGUgPSBbXVxuICAgICwgdmFycyA9IFtdXG4gICAgLCBpZHg9MCwgcGlkeD0wLCBpLCBqXG4gIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICB2YXJzLnB1c2goW1wiaVwiLGksXCI9MFwiXS5qb2luKFwiXCIpKVxuICB9XG4gIC8vQ29tcHV0ZSBzY2FuIGRlbHRhc1xuICBmb3Ioaj0wOyBqPG5hcmdzOyArK2opIHtcbiAgICBmb3IoaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgICBwaWR4ID0gaWR4XG4gICAgICBpZHggPSBvcmRlcltpXVxuICAgICAgaWYoaSA9PT0gMCkge1xuICAgICAgICB2YXJzLnB1c2goW1wiZFwiLGosXCJzXCIsaSxcIj10XCIsaixcInBcIixpZHhdLmpvaW4oXCJcIikpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJzLnB1c2goW1wiZFwiLGosXCJzXCIsaSxcIj0odFwiLGosXCJwXCIsaWR4LFwiLXNcIixwaWR4LFwiKnRcIixqLFwicFwiLHBpZHgsXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIC8vU2NhbiBsb29wXG4gIGZvcihpPWRpbWVuc2lvbi0xOyBpPj0wOyAtLWkpIHtcbiAgICBpZHggPSBvcmRlcltpXVxuICAgIGNvZGUucHVzaChbXCJmb3IoaVwiLGksXCI9MDtpXCIsaSxcIjxzXCIsaWR4LFwiOysraVwiLGksXCIpe1wiXS5qb2luKFwiXCIpKVxuICB9XG4gIC8vUHVzaCBib2R5IG9mIGlubmVyIGxvb3BcbiAgY29kZS5wdXNoKGJvZHkpXG4gIC8vQWR2YW5jZSBzY2FuIHBvaW50ZXJzXG4gIGZvcihpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBwaWR4ID0gaWR4XG4gICAgaWR4ID0gb3JkZXJbaV1cbiAgICBmb3Ioaj0wOyBqPG5hcmdzOyArK2opIHtcbiAgICAgIGNvZGUucHVzaChbXCJwXCIsaixcIis9ZFwiLGosXCJzXCIsaV0uam9pbihcIlwiKSlcbiAgICB9XG4gICAgaWYoaGFzX2luZGV4KSB7XG4gICAgICBpZihpID4gMCkge1xuICAgICAgICBjb2RlLnB1c2goW1wiaW5kZXhbXCIscGlkeCxcIl0tPXNcIixwaWR4XS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgICAgY29kZS5wdXNoKFtcIisraW5kZXhbXCIsaWR4LFwiXVwiXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBjb2RlLnB1c2goXCJ9XCIpXG4gIH1cbiAgcmV0dXJuIGNvZGUuam9pbihcIlxcblwiKVxufVxuXG5mdW5jdGlvbiBvdXRlckZpbGwobWF0Y2hlZCwgb3JkZXIsIHByb2MsIGJvZHkpIHtcbiAgdmFyIGRpbWVuc2lvbiA9IG9yZGVyLmxlbmd0aFxuICAgICwgbmFyZ3MgPSBwcm9jLmFycmF5QXJncy5sZW5ndGhcbiAgICAsIGJsb2NrU2l6ZSA9IHByb2MuYmxvY2tTaXplXG4gICAgLCBoYXNfaW5kZXggPSBwcm9jLmluZGV4QXJncy5sZW5ndGggPiAwXG4gICAgLCBjb2RlID0gW11cbiAgZm9yKHZhciBpPTA7IGk8bmFyZ3M7ICsraSkge1xuICAgIGNvZGUucHVzaChbXCJ2YXIgb2Zmc2V0XCIsaSxcIj1wXCIsaV0uam9pbihcIlwiKSlcbiAgfVxuICAvL0dlbmVyYXRlIG1hdGNoZWQgbG9vcHNcbiAgZm9yKHZhciBpPW1hdGNoZWQ7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goW1wiZm9yKHZhciBqXCIraStcIj1TU1tcIiwgb3JkZXJbaV0sIFwiXXwwO2pcIiwgaSwgXCI+MDspe1wiXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJpZihqXCIsaSxcIjxcIixibG9ja1NpemUsXCIpe1wiXS5qb2luKFwiXCIpKVxuICAgIGNvZGUucHVzaChbXCJzXCIsb3JkZXJbaV0sXCI9alwiLGldLmpvaW4oXCJcIikpXG4gICAgY29kZS5wdXNoKFtcImpcIixpLFwiPTBcIl0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wifWVsc2V7c1wiLG9yZGVyW2ldLFwiPVwiLGJsb2NrU2l6ZV0uam9pbihcIlwiKSlcbiAgICBjb2RlLnB1c2goW1wialwiLGksXCItPVwiLGJsb2NrU2l6ZSxcIn1cIl0uam9pbihcIlwiKSlcbiAgICBpZihoYXNfaW5kZXgpIHtcbiAgICAgIGNvZGUucHVzaChbXCJpbmRleFtcIixvcmRlcltpXSxcIl09alwiLGldLmpvaW4oXCJcIikpXG4gICAgfVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPG5hcmdzOyArK2kpIHtcbiAgICB2YXIgaW5kZXhTdHIgPSBbXCJvZmZzZXRcIitpXVxuICAgIGZvcih2YXIgaj1tYXRjaGVkOyBqPGRpbWVuc2lvbjsgKytqKSB7XG4gICAgICBpbmRleFN0ci5wdXNoKFtcImpcIixqLFwiKnRcIixpLFwicFwiLG9yZGVyW2pdXS5qb2luKFwiXCIpKVxuICAgIH1cbiAgICBjb2RlLnB1c2goW1wicFwiLGksXCI9KFwiLGluZGV4U3RyLmpvaW4oXCIrXCIpLFwiKVwiXS5qb2luKFwiXCIpKVxuICB9XG4gIGNvZGUucHVzaChpbm5lckZpbGwob3JkZXIsIHByb2MsIGJvZHkpKVxuICBmb3IodmFyIGk9bWF0Y2hlZDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcIn1cIilcbiAgfVxuICByZXR1cm4gY29kZS5qb2luKFwiXFxuXCIpXG59XG5cbi8vQ291bnQgdGhlIG51bWJlciBvZiBjb21wYXRpYmxlIGlubmVyIG9yZGVyc1xuZnVuY3Rpb24gY291bnRNYXRjaGVzKG9yZGVycykge1xuICB2YXIgbWF0Y2hlZCA9IDAsIGRpbWVuc2lvbiA9IG9yZGVyc1swXS5sZW5ndGhcbiAgd2hpbGUobWF0Y2hlZCA8IGRpbWVuc2lvbikge1xuICAgIGZvcih2YXIgaj0xOyBqPG9yZGVycy5sZW5ndGg7ICsraikge1xuICAgICAgaWYob3JkZXJzW2pdW21hdGNoZWRdICE9PSBvcmRlcnNbMF1bbWF0Y2hlZF0pIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZWRcbiAgICAgIH1cbiAgICB9XG4gICAgKyttYXRjaGVkXG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRcbn1cblxuLy9Qcm9jZXNzZXMgYSBibG9jayBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGRhdGEgdHlwZXNcbmZ1bmN0aW9uIHByb2Nlc3NCbG9jayhibG9jaywgcHJvYywgZHR5cGVzKSB7XG4gIHZhciBjb2RlID0gYmxvY2suYm9keVxuICB2YXIgcHJlID0gW11cbiAgdmFyIHBvc3QgPSBbXVxuICBmb3IodmFyIGk9MDsgaTxibG9jay5hcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGNhcmcgPSBibG9jay5hcmdzW2ldXG4gICAgaWYoY2FyZy5jb3VudCA8PSAwKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKGNhcmcubmFtZSwgXCJnXCIpXG4gICAgdmFyIHB0clN0ciA9IFwiXCJcbiAgICB2YXIgYXJyTnVtID0gcHJvYy5hcnJheUFyZ3MuaW5kZXhPZihpKVxuICAgIHN3aXRjaChwcm9jLmFyZ1R5cGVzW2ldKSB7XG4gICAgICBjYXNlIFwib2Zmc2V0XCI6XG4gICAgICAgIHZhciBvZmZBcmdJbmRleCA9IHByb2Mub2Zmc2V0QXJnSW5kZXguaW5kZXhPZihpKVxuICAgICAgICB2YXIgb2ZmQXJnID0gcHJvYy5vZmZzZXRBcmdzW29mZkFyZ0luZGV4XVxuICAgICAgICBhcnJOdW0gPSBvZmZBcmcuYXJyYXlcbiAgICAgICAgcHRyU3RyID0gXCIrcVwiICsgb2ZmQXJnSW5kZXhcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICBwdHJTdHIgPSBcInBcIiArIGFyck51bSArIHB0clN0clxuICAgICAgICB2YXIgbG9jYWxTdHIgPSBcImxcIiArIGlcbiAgICAgICAgdmFyIGFyclN0ciA9IFwiYVwiICsgYXJyTnVtXG4gICAgICAgIGlmKGNhcmcuY291bnQgPT09IDEpIHtcbiAgICAgICAgICBpZihkdHlwZXNbYXJyTnVtXSA9PT0gXCJnZW5lcmljXCIpIHtcbiAgICAgICAgICAgIGlmKGNhcmcubHZhbHVlKSB7XG4gICAgICAgICAgICAgIHByZS5wdXNoKFtcInZhciBcIiwgbG9jYWxTdHIsIFwiPVwiLCBhcnJTdHIsIFwiLmdldChcIiwgcHRyU3RyLCBcIilcIl0uam9pbihcIlwiKSlcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIi5zZXQoXCIsIHB0clN0ciwgXCIsXCIsIGxvY2FsU3RyLFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgW2FyclN0ciwgXCIuZ2V0KFwiLCBwdHJTdHIsIFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBbYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZihkdHlwZXNbYXJyTnVtXSA9PT0gXCJnZW5lcmljXCIpIHtcbiAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIi5nZXQoXCIsIHB0clN0ciwgXCIpXCJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZShyZSwgbG9jYWxTdHIpXG4gICAgICAgICAgaWYoY2FyZy5sdmFsdWUpIHtcbiAgICAgICAgICAgIHBvc3QucHVzaChbYXJyU3RyLCBcIi5zZXQoXCIsIHB0clN0ciwgXCIsXCIsIGxvY2FsU3RyLFwiKVwiXS5qb2luKFwiXCIpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmUucHVzaChbXCJ2YXIgXCIsIGxvY2FsU3RyLCBcIj1cIiwgYXJyU3RyLCBcIltcIiwgcHRyU3RyLCBcIl1cIl0uam9pbihcIlwiKSlcbiAgICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBsb2NhbFN0cilcbiAgICAgICAgICBpZihjYXJnLmx2YWx1ZSkge1xuICAgICAgICAgICAgcG9zdC5wdXNoKFthcnJTdHIsIFwiW1wiLCBwdHJTdHIsIFwiXT1cIiwgbG9jYWxTdHJdLmpvaW4oXCJcIikpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBicmVha1xuICAgICAgY2FzZSBcInNjYWxhclwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcIllcIiArIHByb2Muc2NhbGFyQXJncy5pbmRleE9mKGkpKVxuICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJpbmRleFwiOlxuICAgICAgICBjb2RlID0gY29kZS5yZXBsYWNlKHJlLCBcImluZGV4XCIpXG4gICAgICBicmVha1xuICAgICAgY2FzZSBcInNoYXBlXCI6XG4gICAgICAgIGNvZGUgPSBjb2RlLnJlcGxhY2UocmUsIFwic2hhcGVcIilcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG4gIHJldHVybiBbcHJlLmpvaW4oXCJcXG5cIiksIGNvZGUsIHBvc3Quam9pbihcIlxcblwiKV0uam9pbihcIlxcblwiKS50cmltKClcbn1cblxuZnVuY3Rpb24gdHlwZVN1bW1hcnkoZHR5cGVzKSB7XG4gIHZhciBzdW1tYXJ5ID0gbmV3IEFycmF5KGR0eXBlcy5sZW5ndGgpXG4gIHZhciBhbGxFcXVhbCA9IHRydWVcbiAgZm9yKHZhciBpPTA7IGk8ZHR5cGVzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHQgPSBkdHlwZXNbaV1cbiAgICB2YXIgZGlnaXRzID0gdC5tYXRjaCgvXFxkKy8pXG4gICAgaWYoIWRpZ2l0cykge1xuICAgICAgZGlnaXRzID0gXCJcIlxuICAgIH0gZWxzZSB7XG4gICAgICBkaWdpdHMgPSBkaWdpdHNbMF1cbiAgICB9XG4gICAgaWYodC5jaGFyQXQoMCkgPT09IDApIHtcbiAgICAgIHN1bW1hcnlbaV0gPSBcInVcIiArIHQuY2hhckF0KDEpICsgZGlnaXRzXG4gICAgfSBlbHNlIHtcbiAgICAgIHN1bW1hcnlbaV0gPSB0LmNoYXJBdCgwKSArIGRpZ2l0c1xuICAgIH1cbiAgICBpZihpID4gMCkge1xuICAgICAgYWxsRXF1YWwgPSBhbGxFcXVhbCAmJiBzdW1tYXJ5W2ldID09PSBzdW1tYXJ5W2ktMV1cbiAgICB9XG4gIH1cbiAgaWYoYWxsRXF1YWwpIHtcbiAgICByZXR1cm4gc3VtbWFyeVswXVxuICB9XG4gIHJldHVybiBzdW1tYXJ5LmpvaW4oXCJcIilcbn1cblxuLy9HZW5lcmF0ZXMgYSBjd2lzZSBvcGVyYXRvclxuZnVuY3Rpb24gZ2VuZXJhdGVDV2lzZU9wKHByb2MsIHR5cGVzaWcpIHtcblxuICAvL0NvbXB1dGUgZGltZW5zaW9uXG4gIHZhciBkaW1lbnNpb24gPSB0eXBlc2lnWzFdLmxlbmd0aHwwXG4gIHZhciBvcmRlcnMgPSBuZXcgQXJyYXkocHJvYy5hcnJheUFyZ3MubGVuZ3RoKVxuICB2YXIgZHR5cGVzID0gbmV3IEFycmF5KHByb2MuYXJyYXlBcmdzLmxlbmd0aClcblxuICAvL0ZpcnN0IGNyZWF0ZSBhcmd1bWVudHMgZm9yIHByb2NlZHVyZVxuICB2YXIgYXJnbGlzdCA9IFtcIlNTXCJdXG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCJdXG4gIHZhciB2YXJzID0gW11cbiAgXG4gIGZvcih2YXIgaj0wOyBqPGRpbWVuc2lvbjsgKytqKSB7XG4gICAgdmFycy5wdXNoKFtcInNcIiwgaiwgXCI9U1NbXCIsIGosIFwiXVwiXS5qb2luKFwiXCIpKVxuICB9XG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJnbGlzdC5wdXNoKFwiYVwiK2kpXG4gICAgYXJnbGlzdC5wdXNoKFwidFwiK2kpXG4gICAgYXJnbGlzdC5wdXNoKFwicFwiK2kpXG4gICAgZHR5cGVzW2ldID0gdHlwZXNpZ1syKmldXG4gICAgb3JkZXJzW2ldID0gdHlwZXNpZ1syKmkrMV1cbiAgICBcbiAgICBmb3IodmFyIGo9MDsgajxkaW1lbnNpb247ICsraikge1xuICAgICAgdmFycy5wdXNoKFtcInRcIixpLFwicFwiLGosXCI9dFwiLGksXCJbXCIsaixcIl1cIl0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5zY2FsYXJBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgYXJnbGlzdC5wdXNoKFwiWVwiICsgaSlcbiAgfVxuICBpZihwcm9jLnNoYXBlQXJncy5sZW5ndGggPiAwKSB7XG4gICAgdmFycy5wdXNoKFwic2hhcGU9U1Muc2xpY2UoMClcIilcbiAgfVxuICBpZihwcm9jLmluZGV4QXJncy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIHplcm9zID0gbmV3IEFycmF5KGRpbWVuc2lvbilcbiAgICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgICAgemVyb3NbaV0gPSBcIjBcIlxuICAgIH1cbiAgICB2YXJzLnB1c2goW1wiaW5kZXg9W1wiLCB6ZXJvcy5qb2luKFwiLFwiKSwgXCJdXCJdLmpvaW4oXCJcIikpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5vZmZzZXRBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIG9mZl9hcmcgPSBwcm9jLm9mZnNldEFyZ3NbaV1cbiAgICB2YXIgaW5pdF9zdHJpbmcgPSBbXVxuICAgIGZvcih2YXIgaj0wOyBqPG9mZl9hcmcub2Zmc2V0Lmxlbmd0aDsgKytqKSB7XG4gICAgICBpZihvZmZfYXJnLm9mZnNldFtqXSA9PT0gMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfSBlbHNlIGlmKG9mZl9hcmcub2Zmc2V0W2pdID09PSAxKSB7XG4gICAgICAgIGluaXRfc3RyaW5nLnB1c2goW1widFwiLCBvZmZfYXJnLmFycmF5LCBcInBcIiwgal0uam9pbihcIlwiKSkgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRfc3RyaW5nLnB1c2goW29mZl9hcmcub2Zmc2V0W2pdLCBcIip0XCIsIG9mZl9hcmcuYXJyYXksIFwicFwiLCBqXS5qb2luKFwiXCIpKVxuICAgICAgfVxuICAgIH1cbiAgICBpZihpbml0X3N0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhcnMucHVzaChcInFcIiArIGkgKyBcIj0wXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcnMucHVzaChbXCJxXCIsIGksIFwiPVwiLCBpbml0X3N0cmluZy5qb2luKFwiK1wiKV0uam9pbihcIlwiKSlcbiAgICB9XG4gIH1cblxuICAvL1ByZXBhcmUgdGhpcyB2YXJpYWJsZXNcbiAgdmFyIHRoaXNWYXJzID0gdW5pcShbXS5jb25jYXQocHJvYy5wcmUudGhpc1ZhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9jLmJvZHkudGhpc1ZhcnMpXG4gICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChwcm9jLnBvc3QudGhpc1ZhcnMpKVxuICB2YXJzID0gdmFycy5jb25jYXQodGhpc1ZhcnMpXG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgY29kZS5wdXNoKFwicFwiK2krXCJ8PTBcIilcbiAgfVxuICBcbiAgLy9JbmxpbmUgcHJlbHVkZVxuICBpZihwcm9jLnByZS5ib2R5Lmxlbmd0aCA+IDMpIHtcbiAgICBjb2RlLnB1c2gocHJvY2Vzc0Jsb2NrKHByb2MucHJlLCBwcm9jLCBkdHlwZXMpKVxuICB9XG5cbiAgLy9Qcm9jZXNzIGJvZHlcbiAgdmFyIGJvZHkgPSBwcm9jZXNzQmxvY2socHJvYy5ib2R5LCBwcm9jLCBkdHlwZXMpXG4gIHZhciBtYXRjaGVkID0gY291bnRNYXRjaGVzKG9yZGVycylcbiAgaWYobWF0Y2hlZCA8IGRpbWVuc2lvbikge1xuICAgIGNvZGUucHVzaChvdXRlckZpbGwobWF0Y2hlZCwgb3JkZXJzWzBdLCBwcm9jLCBib2R5KSlcbiAgfSBlbHNlIHtcbiAgICBjb2RlLnB1c2goaW5uZXJGaWxsKG9yZGVyc1swXSwgcHJvYywgYm9keSkpXG4gIH1cblxuICAvL0lubGluZSBlcGlsb2dcbiAgaWYocHJvYy5wb3N0LmJvZHkubGVuZ3RoID4gMykge1xuICAgIGNvZGUucHVzaChwcm9jZXNzQmxvY2socHJvYy5wb3N0LCBwcm9jLCBkdHlwZXMpKVxuICB9XG4gIFxuICBpZihwcm9jLmRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgY3dpc2Ugcm91dGluZSBmb3IgXCIsIHR5cGVzaWcsIFwiOlxcblxcblwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIH1cbiAgXG4gIHZhciBsb29wTmFtZSA9IFsocHJvYy5mdW5jTmFtZXx8XCJ1bm5hbWVkXCIpLCBcIl9jd2lzZV9sb29wX1wiLCBvcmRlcnNbMF0uam9pbihcInNcIiksXCJtXCIsbWF0Y2hlZCx0eXBlU3VtbWFyeShkdHlwZXMpXS5qb2luKFwiXCIpXG4gIHZhciBmID0gbmV3IEZ1bmN0aW9uKFtcImZ1bmN0aW9uIFwiLGxvb3BOYW1lLFwiKFwiLCBhcmdsaXN0LmpvaW4oXCIsXCIpLFwiKXtcIiwgY29kZS5qb2luKFwiXFxuXCIpLFwifSByZXR1cm4gXCIsIGxvb3BOYW1lXS5qb2luKFwiXCIpKVxuICByZXR1cm4gZigpXG59XG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlQ1dpc2VPcCIsIlwidXNlIHN0cmljdFwiXG5cbnZhciBjb21waWxlID0gcmVxdWlyZShcIi4vY29tcGlsZS5qc1wiKVxuXG5mdW5jdGlvbiBjcmVhdGVUaHVuayhwcm9jKSB7XG4gIHZhciBjb2RlID0gW1wiJ3VzZSBzdHJpY3QnXCIsIFwidmFyIENBQ0hFRD17fVwiXVxuICB2YXIgdmFycyA9IFtdXG4gIHZhciB0aHVua05hbWUgPSBwcm9jLmZ1bmNOYW1lICsgXCJfY3dpc2VfdGh1bmtcIlxuICBcbiAgLy9CdWlsZCB0aHVua1xuICBjb2RlLnB1c2goW1wicmV0dXJuIGZ1bmN0aW9uIFwiLCB0aHVua05hbWUsIFwiKFwiLCBwcm9jLnNoaW1BcmdzLmpvaW4oXCIsXCIpLCBcIil7XCJdLmpvaW4oXCJcIikpXG4gIHZhciB0eXBlc2lnID0gW11cbiAgdmFyIHN0cmluZ190eXBlc2lnID0gW11cbiAgdmFyIHByb2NfYXJncyA9IFtbXCJhcnJheVwiLHByb2MuYXJyYXlBcmdzWzBdLFwiLnNoYXBlXCJdLmpvaW4oXCJcIildXG4gIGZvcih2YXIgaT0wOyBpPHByb2MuYXJyYXlBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGogPSBwcm9jLmFycmF5QXJnc1tpXVxuICAgIHZhcnMucHVzaChbXCJ0XCIsIGosIFwiPWFycmF5XCIsIGosIFwiLmR0eXBlLFwiLFxuICAgICAgICAgICAgICAgXCJyXCIsIGosIFwiPWFycmF5XCIsIGosIFwiLm9yZGVyXCJdLmpvaW4oXCJcIikpXG4gICAgdHlwZXNpZy5wdXNoKFwidFwiICsgailcbiAgICB0eXBlc2lnLnB1c2goXCJyXCIgKyBqKVxuICAgIHN0cmluZ190eXBlc2lnLnB1c2goXCJ0XCIrailcbiAgICBzdHJpbmdfdHlwZXNpZy5wdXNoKFwiclwiK2orXCIuam9pbigpXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLmRhdGFcIilcbiAgICBwcm9jX2FyZ3MucHVzaChcImFycmF5XCIgKyBqICsgXCIuc3RyaWRlXCIpXG4gICAgcHJvY19hcmdzLnB1c2goXCJhcnJheVwiICsgaiArIFwiLm9mZnNldHwwXCIpXG4gIH1cbiAgZm9yKHZhciBpPTA7IGk8cHJvYy5zY2FsYXJBcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgcHJvY19hcmdzLnB1c2goXCJzY2FsYXJcIiArIHByb2Muc2NhbGFyQXJnc1tpXSlcbiAgfVxuICB2YXJzLnB1c2goW1widHlwZT1bXCIsIHN0cmluZ190eXBlc2lnLmpvaW4oXCIsXCIpLCBcIl0uam9pbigpXCJdLmpvaW4oXCJcIikpXG4gIHZhcnMucHVzaChcInByb2M9Q0FDSEVEW3R5cGVdXCIpXG4gIGNvZGUucHVzaChcInZhciBcIiArIHZhcnMuam9pbihcIixcIikpXG4gIFxuICBjb2RlLnB1c2goW1wiaWYoIXByb2Mpe1wiLFxuICAgICAgICAgICAgIFwiQ0FDSEVEW3R5cGVdPXByb2M9Y29tcGlsZShbXCIsIHR5cGVzaWcuam9pbihcIixcIiksIFwiXSl9XCIsXG4gICAgICAgICAgICAgXCJyZXR1cm4gcHJvYyhcIiwgcHJvY19hcmdzLmpvaW4oXCIsXCIpLCBcIil9XCJdLmpvaW4oXCJcIikpXG5cbiAgaWYocHJvYy5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIHRodW5rOlwiLCBjb2RlLmpvaW4oXCJcXG5cIikpXG4gIH1cbiAgXG4gIC8vQ29tcGlsZSB0aHVua1xuICB2YXIgdGh1bmsgPSBuZXcgRnVuY3Rpb24oXCJjb21waWxlXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgcmV0dXJuIHRodW5rKGNvbXBpbGUuYmluZCh1bmRlZmluZWQsIHByb2MpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVRodW5rXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5mdW5jdGlvbiB1bmlxdWVfcHJlZChsaXN0LCBjb21wYXJlKSB7XG4gIHZhciBwdHIgPSAxXG4gICAgLCBsZW4gPSBsaXN0Lmxlbmd0aFxuICAgICwgYT1saXN0WzBdLCBiPWxpc3RbMF1cbiAgZm9yKHZhciBpPTE7IGk8bGVuOyArK2kpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoY29tcGFyZShhLCBiKSkge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlX2VxKGxpc3QpIHtcbiAgdmFyIHB0ciA9IDFcbiAgICAsIGxlbiA9IGxpc3QubGVuZ3RoXG4gICAgLCBhPWxpc3RbMF0sIGIgPSBsaXN0WzBdXG4gIGZvcih2YXIgaT0xOyBpPGxlbjsgKytpLCBiPWEpIHtcbiAgICBiID0gYVxuICAgIGEgPSBsaXN0W2ldXG4gICAgaWYoYSAhPT0gYikge1xuICAgICAgaWYoaSA9PT0gcHRyKSB7XG4gICAgICAgIHB0cisrXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBsaXN0W3B0cisrXSA9IGFcbiAgICB9XG4gIH1cbiAgbGlzdC5sZW5ndGggPSBwdHJcbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gdW5pcXVlKGxpc3QsIGNvbXBhcmUsIHNvcnRlZCkge1xuICBpZihsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgaWYoY29tcGFyZSkge1xuICAgIGlmKCFzb3J0ZWQpIHtcbiAgICAgIGxpc3Quc29ydChjb21wYXJlKVxuICAgIH1cbiAgICByZXR1cm4gdW5pcXVlX3ByZWQobGlzdCwgY29tcGFyZSlcbiAgfVxuICBpZighc29ydGVkKSB7XG4gICAgbGlzdC5zb3J0KClcbiAgfVxuICByZXR1cm4gdW5pcXVlX2VxKGxpc3QpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcXVlXG4iLCJ2YXIgaW90YSA9IHJlcXVpcmUoXCJpb3RhLWFycmF5XCIpXG5cbnZhciBoYXNUeXBlZEFycmF5cyAgPSAoKHR5cGVvZiBGbG9hdDY0QXJyYXkpICE9PSBcInVuZGVmaW5lZFwiKVxudmFyIGhhc0J1ZmZlciAgICAgICA9ICgodHlwZW9mIEJ1ZmZlcikgIT09IFwidW5kZWZpbmVkXCIpXG5cbmZ1bmN0aW9uIGNvbXBhcmUxc3QoYSwgYikge1xuICByZXR1cm4gYVswXSAtIGJbMF1cbn1cblxuZnVuY3Rpb24gb3JkZXIoKSB7XG4gIHZhciBzdHJpZGUgPSB0aGlzLnN0cmlkZVxuICB2YXIgdGVybXMgPSBuZXcgQXJyYXkoc3RyaWRlLmxlbmd0aClcbiAgdmFyIGlcbiAgZm9yKGk9MDsgaTx0ZXJtcy5sZW5ndGg7ICsraSkge1xuICAgIHRlcm1zW2ldID0gW01hdGguYWJzKHN0cmlkZVtpXSksIGldXG4gIH1cbiAgdGVybXMuc29ydChjb21wYXJlMXN0KVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHRlcm1zLmxlbmd0aClcbiAgZm9yKGk9MDsgaTxyZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICByZXN1bHRbaV0gPSB0ZXJtc1tpXVsxXVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gY29tcGlsZUNvbnN0cnVjdG9yKGR0eXBlLCBkaW1lbnNpb24pIHtcbiAgdmFyIGNsYXNzTmFtZSA9IFtcIlZpZXdcIiwgZGltZW5zaW9uLCBcImRcIiwgZHR5cGVdLmpvaW4oXCJcIilcbiAgaWYoZGltZW5zaW9uIDwgMCkge1xuICAgIGNsYXNzTmFtZSA9IFwiVmlld19OaWxcIiArIGR0eXBlXG4gIH1cbiAgdmFyIHVzZUdldHRlcnMgPSAoZHR5cGUgPT09IFwiZ2VuZXJpY1wiKVxuICBcbiAgaWYoZGltZW5zaW9uID09PSAtMSkge1xuICAgIC8vU3BlY2lhbCBjYXNlIGZvciB0cml2aWFsIGFycmF5c1xuICAgIHZhciBjb2RlID0gXG4gICAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhKXt0aGlzLmRhdGE9YTt9O1xcXG52YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZTtcXFxucHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJztcXFxucHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gLTF9O1xcXG5wcm90by5zaXplPTA7XFxcbnByb3RvLmRpbWVuc2lvbj0tMTtcXFxucHJvdG8uc2hhcGU9cHJvdG8uc3RyaWRlPXByb3RvLm9yZGVyPVtdO1xcXG5wcm90by5sbz1wcm90by5oaT1wcm90by50cmFuc3Bvc2U9cHJvdG8uc3RlcD1cXFxuZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIih0aGlzLmRhdGEpO307XFxcbnByb3RvLmdldD1wcm90by5zZXQ9ZnVuY3Rpb24oKXt9O1xcXG5wcm90by5waWNrPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9O1xcXG5yZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihhKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihhKTt9XCJcbiAgICB2YXIgcHJvY2VkdXJlID0gbmV3IEZ1bmN0aW9uKGNvZGUpXG4gICAgcmV0dXJuIHByb2NlZHVyZSgpXG4gIH0gZWxzZSBpZihkaW1lbnNpb24gPT09IDApIHtcbiAgICAvL1NwZWNpYWwgY2FzZSBmb3IgMGQgYXJyYXlzXG4gICAgdmFyIGNvZGUgPVxuICAgICAgXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCIoYSxkKSB7XFxcbnRoaXMuZGF0YSA9IGE7XFxcbnRoaXMub2Zmc2V0ID0gZFxcXG59O1xcXG52YXIgcHJvdG89XCIrY2xhc3NOYW1lK1wiLnByb3RvdHlwZTtcXFxucHJvdG8uZHR5cGU9J1wiK2R0eXBlK1wiJztcXFxucHJvdG8uaW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vZmZzZXR9O1xcXG5wcm90by5kaW1lbnNpb249MDtcXFxucHJvdG8uc2l6ZT0xO1xcXG5wcm90by5zaGFwZT1cXFxucHJvdG8uc3RyaWRlPVxcXG5wcm90by5vcmRlcj1bXTtcXFxucHJvdG8ubG89XFxcbnByb3RvLmhpPVxcXG5wcm90by50cmFuc3Bvc2U9XFxcbnByb3RvLnN0ZXA9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2NvcHkoKSB7XFxcbnJldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSx0aGlzLm9mZnNldClcXFxufTtcXFxucHJvdG8ucGljaz1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfcGljaygpe1xcXG5yZXR1cm4gVHJpdmlhbEFycmF5KHRoaXMuZGF0YSk7XFxcbn07XFxcbnByb3RvLnZhbHVlT2Y9cHJvdG8uZ2V0PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9nZXQoKXtcXFxucmV0dXJuIFwiKyh1c2VHZXR0ZXJzID8gXCJ0aGlzLmRhdGEuZ2V0KHRoaXMub2Zmc2V0KVwiIDogXCJ0aGlzLmRhdGFbdGhpcy5vZmZzZXRdXCIpK1xuXCJ9O1xcXG5wcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldCh2KXtcXFxucmV0dXJuIFwiKyh1c2VHZXR0ZXJzID8gXCJ0aGlzLmRhdGEuc2V0KHRoaXMub2Zmc2V0LHYpXCIgOiBcInRoaXMuZGF0YVt0aGlzLm9mZnNldF09dlwiKStcIlxcXG59O1xcXG5yZXR1cm4gZnVuY3Rpb24gY29uc3RydWN0X1wiK2NsYXNzTmFtZStcIihhLGIsYyxkKXtyZXR1cm4gbmV3IFwiK2NsYXNzTmFtZStcIihhLGQpfVwiXG4gICAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihcIlRyaXZpYWxBcnJheVwiLCBjb2RlKVxuICAgIHJldHVybiBwcm9jZWR1cmUoQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1bMF0pXG4gIH1cblxuICB2YXIgY29kZSA9IFtcIid1c2Ugc3RyaWN0J1wiXVxuICAgIFxuICAvL0NyZWF0ZSBjb25zdHJ1Y3RvciBmb3Igdmlld1xuICB2YXIgaW5kaWNlcyA9IGlvdGEoZGltZW5zaW9uKVxuICB2YXIgYXJncyA9IGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHsgcmV0dXJuIFwiaVwiK2kgfSlcbiAgdmFyIGluZGV4X3N0ciA9IFwidGhpcy5vZmZzZXQrXCIgKyBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBcInRoaXMuc3RyaWRlW1wiICsgaSArIFwiXSppXCIgKyBpXG4gICAgICB9KS5qb2luKFwiK1wiKVxuICB2YXIgc2hhcGVBcmcgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpXG4gIHZhciBzdHJpZGVBcmcgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJjXCIraVxuICAgIH0pLmpvaW4oXCIsXCIpXG4gIGNvZGUucHVzaChcbiAgICBcImZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIihhLFwiICsgc2hhcGVBcmcgKyBcIixcIiArIHN0cmlkZUFyZyArIFwiLGQpe3RoaXMuZGF0YT1hXCIsXG4gICAgICBcInRoaXMuc2hhcGU9W1wiICsgc2hhcGVBcmcgKyBcIl1cIixcbiAgICAgIFwidGhpcy5zdHJpZGU9W1wiICsgc3RyaWRlQXJnICsgXCJdXCIsXG4gICAgICBcInRoaXMub2Zmc2V0PWR8MH1cIixcbiAgICBcInZhciBwcm90bz1cIitjbGFzc05hbWUrXCIucHJvdG90eXBlXCIsXG4gICAgXCJwcm90by5kdHlwZT0nXCIrZHR5cGUrXCInXCIsXG4gICAgXCJwcm90by5kaW1lbnNpb249XCIrZGltZW5zaW9uKVxuICBcbiAgLy92aWV3LnNpemU6XG4gIGNvZGUucHVzaChcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywnc2l6ZScse2dldDpmdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfc2l6ZSgpe1xcXG5yZXR1cm4gXCIraW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJ0aGlzLnNoYXBlW1wiK2krXCJdXCIgfSkuam9pbihcIipcIiksXG5cIn19KVwiKVxuXG4gIC8vdmlldy5vcmRlcjpcbiAgaWYoZGltZW5zaW9uID09PSAxKSB7XG4gICAgY29kZS5wdXNoKFwicHJvdG8ub3JkZXI9WzBdXCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCdvcmRlcicse2dldDpcIilcbiAgICBpZihkaW1lbnNpb24gPCA0KSB7XG4gICAgICBjb2RlLnB1c2goXCJmdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfb3JkZXIoKXtcIilcbiAgICAgIGlmKGRpbWVuc2lvbiA9PT0gMikge1xuICAgICAgICBjb2RlLnB1c2goXCJyZXR1cm4gKE1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKT5NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSkpP1sxLDBdOlswLDFdfX0pXCIpXG4gICAgICB9IGVsc2UgaWYoZGltZW5zaW9uID09PSAzKSB7XG4gICAgICAgIGNvZGUucHVzaChcblwidmFyIHMwPU1hdGguYWJzKHRoaXMuc3RyaWRlWzBdKSxzMT1NYXRoLmFicyh0aGlzLnN0cmlkZVsxXSksczI9TWF0aC5hYnModGhpcy5zdHJpZGVbMl0pO1xcXG5pZihzMD5zMSl7XFxcbmlmKHMxPnMyKXtcXFxucmV0dXJuIFsyLDEsMF07XFxcbn1lbHNlIGlmKHMwPnMyKXtcXFxucmV0dXJuIFsxLDIsMF07XFxcbn1lbHNle1xcXG5yZXR1cm4gWzEsMCwyXTtcXFxufVxcXG59ZWxzZSBpZihzMD5zMil7XFxcbnJldHVybiBbMiwwLDFdO1xcXG59ZWxzZSBpZihzMj5zMSl7XFxcbnJldHVybiBbMCwxLDJdO1xcXG59ZWxzZXtcXFxucmV0dXJuIFswLDIsMV07XFxcbn19fSlcIilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29kZS5wdXNoKFwiT1JERVJ9KVwiKVxuICAgIH1cbiAgfVxuICBcbiAgLy92aWV3LnNldChpMCwgLi4uLCB2KTpcbiAgY29kZS5wdXNoKFxuXCJwcm90by5zZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3NldChcIithcmdzLmpvaW4oXCIsXCIpK1wiLHYpe1wiKVxuICBpZih1c2VHZXR0ZXJzKSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YS5zZXQoXCIraW5kZXhfc3RyK1wiLHYpfVwiKVxuICB9IGVsc2Uge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGFbXCIraW5kZXhfc3RyK1wiXT12fVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuZ2V0KGkwLCAuLi4pOlxuICBjb2RlLnB1c2goXCJwcm90by5nZXQ9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX2dldChcIithcmdzLmpvaW4oXCIsXCIpK1wiKXtcIilcbiAgaWYodXNlR2V0dGVycykge1xuICAgIGNvZGUucHVzaChcInJldHVybiB0aGlzLmRhdGEuZ2V0KFwiK2luZGV4X3N0citcIil9XCIpXG4gIH0gZWxzZSB7XG4gICAgY29kZS5wdXNoKFwicmV0dXJuIHRoaXMuZGF0YVtcIitpbmRleF9zdHIrXCJdfVwiKVxuICB9XG4gIFxuICAvL3ZpZXcuaW5kZXg6XG4gIGNvZGUucHVzaChcbiAgICBcInByb3RvLmluZGV4PWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9pbmRleChcIiwgYXJncy5qb2luKCksIFwiKXtyZXR1cm4gXCIraW5kZXhfc3RyK1wifVwiKVxuXG4gIC8vdmlldy5oaSgpOlxuICBjb2RlLnB1c2goXCJwcm90by5oaT1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfaGkoXCIrYXJncy5qb2luKFwiLFwiKStcIil7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBbXCIodHlwZW9mIGlcIixpLFwiIT09J251bWJlcid8fGlcIixpLFwiPDApP3RoaXMuc2hhcGVbXCIsIGksIFwiXTppXCIsIGksXCJ8MFwiXS5qb2luKFwiXCIpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwidGhpcy5zdHJpZGVbXCIraSArIFwiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsdGhpcy5vZmZzZXQpfVwiKVxuICBcbiAgLy92aWV3LmxvKCk6XG4gIHZhciBhX3ZhcnMgPSBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7IHJldHVybiBcImFcIitpK1wiPXRoaXMuc2hhcGVbXCIraStcIl1cIiB9KVxuICB2YXIgY192YXJzID0gaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gXCJjXCIraStcIj10aGlzLnN0cmlkZVtcIitpK1wiXVwiIH0pXG4gIGNvZGUucHVzaChcInByb3RvLmxvPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9sbyhcIithcmdzLmpvaW4oXCIsXCIpK1wiKXt2YXIgYj10aGlzLm9mZnNldCxkPTAsXCIrYV92YXJzLmpvaW4oXCIsXCIpK1wiLFwiK2NfdmFycy5qb2luKFwiLFwiKSlcbiAgZm9yKHZhciBpPTA7IGk8ZGltZW5zaW9uOyArK2kpIHtcbiAgICBjb2RlLnB1c2goXG5cImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7XFxcbmQ9aVwiK2krXCJ8MDtcXFxuYis9Y1wiK2krXCIqZDtcXFxuYVwiK2krXCItPWR9XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwiY1wiK2lcbiAgICB9KS5qb2luKFwiLFwiKStcIixiKX1cIilcbiAgXG4gIC8vdmlldy5zdGVwKCk6XG4gIGNvZGUucHVzaChcInByb3RvLnN0ZXA9ZnVuY3Rpb24gXCIrY2xhc3NOYW1lK1wiX3N0ZXAoXCIrYXJncy5qb2luKFwiLFwiKStcIil7dmFyIFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIitpK1wiPXRoaXMuc2hhcGVbXCIraStcIl1cIlxuICAgIH0pLmpvaW4oXCIsXCIpK1wiLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImJcIitpK1wiPXRoaXMuc3RyaWRlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixjPXRoaXMub2Zmc2V0LGQ9MCxjZWlsPU1hdGguY2VpbFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcblwiaWYodHlwZW9mIGlcIitpK1wiPT09J251bWJlcicpe1xcXG5kPWlcIitpK1wifDA7XFxcbmlmKGQ8MCl7XFxcbmMrPWJcIitpK1wiKihhXCIraStcIi0xKTtcXFxuYVwiK2krXCI9Y2VpbCgtYVwiK2krXCIvZClcXFxufWVsc2V7XFxcbmFcIitpK1wiPWNlaWwoYVwiK2krXCIvZClcXFxufVxcXG5iXCIraStcIio9ZFxcXG59XCIpXG4gIH1cbiAgY29kZS5wdXNoKFwicmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIodGhpcy5kYXRhLFwiK1xuICAgIGluZGljZXMubWFwKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBcImFcIiArIGlcbiAgICB9KS5qb2luKFwiLFwiKStcIixcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJiXCIgKyBpXG4gICAgfSkuam9pbihcIixcIikrXCIsYyl9XCIpXG4gIFxuICAvL3ZpZXcudHJhbnNwb3NlKCk6XG4gIHZhciB0U2hhcGUgPSBuZXcgQXJyYXkoZGltZW5zaW9uKVxuICB2YXIgdFN0cmlkZSA9IG5ldyBBcnJheShkaW1lbnNpb24pXG4gIGZvcih2YXIgaT0wOyBpPGRpbWVuc2lvbjsgKytpKSB7XG4gICAgdFNoYXBlW2ldID0gXCJhW2lcIitpK1wiXVwiXG4gICAgdFN0cmlkZVtpXSA9IFwiYltpXCIraStcIl1cIlxuICB9XG4gIGNvZGUucHVzaChcInByb3RvLnRyYW5zcG9zZT1mdW5jdGlvbiBcIitjbGFzc05hbWUrXCJfdHJhbnNwb3NlKFwiK2FyZ3MrXCIpe1wiK1xuICAgIGFyZ3MubWFwKGZ1bmN0aW9uKG4saWR4KSB7IHJldHVybiBuICsgXCI9KFwiICsgbiArIFwiPT09dW5kZWZpbmVkP1wiICsgaWR4ICsgXCI6XCIgKyBuICsgXCJ8MClcIn0pLmpvaW4oXCI7XCIpLFxuICAgIFwidmFyIGE9dGhpcy5zaGFwZSxiPXRoaXMuc3RyaWRlO3JldHVybiBuZXcgXCIrY2xhc3NOYW1lK1wiKHRoaXMuZGF0YSxcIit0U2hhcGUuam9pbihcIixcIikrXCIsXCIrdFN0cmlkZS5qb2luKFwiLFwiKStcIix0aGlzLm9mZnNldCl9XCIpXG4gIFxuICAvL3ZpZXcucGljaygpOlxuICBjb2RlLnB1c2goXCJwcm90by5waWNrPWZ1bmN0aW9uIFwiK2NsYXNzTmFtZStcIl9waWNrKFwiK2FyZ3MrXCIpe3ZhciBhPVtdLGI9W10sYz10aGlzLm9mZnNldFwiKVxuICBmb3IodmFyIGk9MDsgaTxkaW1lbnNpb247ICsraSkge1xuICAgIGNvZGUucHVzaChcImlmKHR5cGVvZiBpXCIraStcIj09PSdudW1iZXInJiZpXCIraStcIj49MCl7Yz0oYyt0aGlzLnN0cmlkZVtcIitpK1wiXSppXCIraStcIil8MH1lbHNle2EucHVzaCh0aGlzLnNoYXBlW1wiK2krXCJdKTtiLnB1c2godGhpcy5zdHJpZGVbXCIraStcIl0pfVwiKVxuICB9XG4gIGNvZGUucHVzaChcInZhciBjdG9yPUNUT1JfTElTVFthLmxlbmd0aCsxXTtyZXR1cm4gY3Rvcih0aGlzLmRhdGEsYSxiLGMpfVwiKVxuICAgIFxuICAvL0FkZCByZXR1cm4gc3RhdGVtZW50XG4gIGNvZGUucHVzaChcInJldHVybiBmdW5jdGlvbiBjb25zdHJ1Y3RfXCIrY2xhc3NOYW1lK1wiKGRhdGEsc2hhcGUsc3RyaWRlLG9mZnNldCl7cmV0dXJuIG5ldyBcIitjbGFzc05hbWUrXCIoZGF0YSxcIitcbiAgICBpbmRpY2VzLm1hcChmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gXCJzaGFwZVtcIitpK1wiXVwiXG4gICAgfSkuam9pbihcIixcIikrXCIsXCIrXG4gICAgaW5kaWNlcy5tYXAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIFwic3RyaWRlW1wiK2krXCJdXCJcbiAgICB9KS5qb2luKFwiLFwiKStcIixvZmZzZXQpfVwiKVxuXG4gIC8vQ29tcGlsZSBwcm9jZWR1cmVcbiAgdmFyIHByb2NlZHVyZSA9IG5ldyBGdW5jdGlvbihcIkNUT1JfTElTVFwiLCBcIk9SREVSXCIsIGNvZGUuam9pbihcIlxcblwiKSlcbiAgcmV0dXJuIHByb2NlZHVyZShDQUNIRURfQ09OU1RSVUNUT1JTW2R0eXBlXSwgb3JkZXIpXG59XG5cbmZ1bmN0aW9uIGFycmF5RFR5cGUoZGF0YSkge1xuICBpZihoYXNCdWZmZXIpIHtcbiAgICBpZihCdWZmZXIuaXNCdWZmZXIoZGF0YSkpIHtcbiAgICAgIHJldHVybiBcImJ1ZmZlclwiXG4gICAgfVxuICB9XG4gIGlmKGhhc1R5cGVkQXJyYXlzKSB7XG4gICAgc3dpdGNoKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSkge1xuICAgICAgY2FzZSBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJmbG9hdDY0XCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IEZsb2F0MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiZmxvYXQzMlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBJbnQ4QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcImludDhcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50MTZBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50MTZcIlxuICAgICAgY2FzZSBcIltvYmplY3QgSW50MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwiaW50MzJcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDhBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDhcIlxuICAgICAgY2FzZSBcIltvYmplY3QgVWludDE2QXJyYXldXCI6XG4gICAgICAgIHJldHVybiBcInVpbnQxNlwiXG4gICAgICBjYXNlIFwiW29iamVjdCBVaW50MzJBcnJheV1cIjpcbiAgICAgICAgcmV0dXJuIFwidWludDMyXCJcbiAgICAgIGNhc2UgXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiOlxuICAgICAgICByZXR1cm4gXCJ1aW50OF9jbGFtcGVkXCJcbiAgICB9XG4gIH1cbiAgaWYoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgIHJldHVybiBcImFycmF5XCJcbiAgfVxuICByZXR1cm4gXCJnZW5lcmljXCJcbn1cblxudmFyIENBQ0hFRF9DT05TVFJVQ1RPUlMgPSB7XG4gIFwiZmxvYXQzMlwiOltdLFxuICBcImZsb2F0NjRcIjpbXSxcbiAgXCJpbnQ4XCI6W10sXG4gIFwiaW50MTZcIjpbXSxcbiAgXCJpbnQzMlwiOltdLFxuICBcInVpbnQ4XCI6W10sXG4gIFwidWludDE2XCI6W10sXG4gIFwidWludDMyXCI6W10sXG4gIFwiYXJyYXlcIjpbXSxcbiAgXCJ1aW50OF9jbGFtcGVkXCI6W10sXG4gIFwiYnVmZmVyXCI6W10sXG4gIFwiZ2VuZXJpY1wiOltdXG59XG5cbjsoZnVuY3Rpb24oKSB7XG4gIGZvcih2YXIgaWQgaW4gQ0FDSEVEX0NPTlNUUlVDVE9SUykge1xuICAgIENBQ0hFRF9DT05TVFJVQ1RPUlNbaWRdLnB1c2goY29tcGlsZUNvbnN0cnVjdG9yKGlkLCAtMSkpXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB3cmFwcGVkTkRBcnJheUN0b3IoZGF0YSwgc2hhcGUsIHN0cmlkZSwgb2Zmc2V0KSB7XG4gIGlmKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBjdG9yID0gQ0FDSEVEX0NPTlNUUlVDVE9SUy5hcnJheVswXVxuICAgIHJldHVybiBjdG9yKFtdKVxuICB9IGVsc2UgaWYodHlwZW9mIGRhdGEgPT09IFwibnVtYmVyXCIpIHtcbiAgICBkYXRhID0gW2RhdGFdXG4gIH1cbiAgaWYoc2hhcGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHNoYXBlID0gWyBkYXRhLmxlbmd0aCBdXG4gIH1cbiAgdmFyIGQgPSBzaGFwZS5sZW5ndGhcbiAgaWYoc3RyaWRlID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHJpZGUgPSBuZXcgQXJyYXkoZClcbiAgICBmb3IodmFyIGk9ZC0xLCBzej0xOyBpPj0wOyAtLWkpIHtcbiAgICAgIHN0cmlkZVtpXSA9IHN6XG4gICAgICBzeiAqPSBzaGFwZVtpXVxuICAgIH1cbiAgfVxuICBpZihvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIG9mZnNldCA9IDBcbiAgICBmb3IodmFyIGk9MDsgaTxkOyArK2kpIHtcbiAgICAgIGlmKHN0cmlkZVtpXSA8IDApIHtcbiAgICAgICAgb2Zmc2V0IC09IChzaGFwZVtpXS0xKSpzdHJpZGVbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIGR0eXBlID0gYXJyYXlEVHlwZShkYXRhKVxuICB2YXIgY3Rvcl9saXN0ID0gQ0FDSEVEX0NPTlNUUlVDVE9SU1tkdHlwZV1cbiAgd2hpbGUoY3Rvcl9saXN0Lmxlbmd0aCA8PSBkKzEpIHtcbiAgICBjdG9yX2xpc3QucHVzaChjb21waWxlQ29uc3RydWN0b3IoZHR5cGUsIGN0b3JfbGlzdC5sZW5ndGgtMSkpXG4gIH1cbiAgdmFyIGN0b3IgPSBjdG9yX2xpc3RbZCsxXVxuICByZXR1cm4gY3RvcihkYXRhLCBzaGFwZSwgc3RyaWRlLCBvZmZzZXQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlZE5EQXJyYXlDdG9yIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZnVuY3Rpb24gaW90YShuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobilcbiAgZm9yKHZhciBpPTA7IGk8bjsgKytpKSB7XG4gICAgcmVzdWx0W2ldID0gaVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpb3RhIiwidmFyIGludDggPSBuZXcgSW50OEFycmF5KDQpO1xudmFyIGludDMyID0gbmV3IEludDMyQXJyYXkoaW50OC5idWZmZXIsIDAsIDEpO1xudmFyIGZsb2F0MzIgPSBuZXcgRmxvYXQzMkFycmF5KGludDguYnVmZmVyLCAwLCAxKTtcblxuLyoqXG4gKiBBIHNpbmdsZXRvbiBmb3IgbnVtYmVyIHV0aWxpdGllcy4gXG4gKiBAY2xhc3MgTnVtYmVyVXRpbFxuICovXG52YXIgTnVtYmVyVXRpbCA9IGZ1bmN0aW9uKCkge1xuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZsb2F0IHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBpbnQgYml0cy4gQXJyYXlCdWZmZXJcbiAqIGlzIHVzZWQgZm9yIHRoZSBjb252ZXJzaW9uLlxuICpcbiAqIEBtZXRob2QgIGludEJpdHNUb0Zsb2F0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGkgdGhlIGludCB0byBjYXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgdGhlIGZsb2F0XG4gKi9cbk51bWJlclV0aWwuaW50Qml0c1RvRmxvYXQgPSBmdW5jdGlvbihpKSB7XG5cdGludDMyWzBdID0gaTtcblx0cmV0dXJuIGZsb2F0MzJbMF07XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGludCBiaXRzIGZyb20gdGhlIGdpdmVuIGZsb2F0LiBBcnJheUJ1ZmZlciBpcyB1c2VkXG4gKiBmb3IgdGhlIGNvbnZlcnNpb24uXG4gKlxuICogQG1ldGhvZCAgZmxvYXRUb0ludEJpdHNcbiAqIEBzdGF0aWNcbiAqIEBwYXJhbSAge051bWJlcn0gZiB0aGUgZmxvYXQgdG8gY2FzdFxuICogQHJldHVybiB7TnVtYmVyfSAgIHRoZSBpbnQgYml0c1xuICovXG5OdW1iZXJVdGlsLmZsb2F0VG9JbnRCaXRzID0gZnVuY3Rpb24oZikge1xuXHRmbG9hdDMyWzBdID0gZjtcblx0cmV0dXJuIGludDMyWzBdO1xufTtcblxuLyoqXG4gKiBFbmNvZGVzIEFCR1IgaW50IGFzIGEgZmxvYXQsIHdpdGggc2xpZ2h0IHByZWNpc2lvbiBsb3NzLlxuICpcbiAqIEBtZXRob2QgIGludFRvRmxvYXRDb2xvclxuICogQHN0YXRpY1xuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIGFuIEFCR1IgcGFja2VkIGludGVnZXJcbiAqL1xuTnVtYmVyVXRpbC5pbnRUb0Zsb2F0Q29sb3IgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gTnVtYmVyVXRpbC5pbnRCaXRzVG9GbG9hdCggdmFsdWUgJiAweGZlZmZmZmZmICk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBmbG9hdCBlbmNvZGVkIEFCR1IgdmFsdWUgZnJvbSB0aGUgZ2l2ZW4gUkdCQVxuICogYnl0ZXMgKDAgLSAyNTUpLiBVc2VmdWwgZm9yIHNhdmluZyBiYW5kd2lkdGggaW4gdmVydGV4IGRhdGEuXG4gKlxuICogQG1ldGhvZCAgY29sb3JUb0Zsb2F0XG4gKiBAc3RhdGljXG4gKiBAcGFyYW0ge051bWJlcn0gciB0aGUgUmVkIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcGFyYW0ge051bWJlcn0gZyB0aGUgR3JlZW4gYnl0ZSAoMCAtIDI1NSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBiIHRoZSBCbHVlIGJ5dGUgKDAgLSAyNTUpXG4gKiBAcGFyYW0ge051bWJlcn0gYSB0aGUgQWxwaGEgYnl0ZSAoMCAtIDI1NSlcbiAqIEByZXR1cm4ge0Zsb2F0MzJ9ICBhIEZsb2F0MzIgb2YgdGhlIFJHQkEgY29sb3JcbiAqL1xuTnVtYmVyVXRpbC5jb2xvclRvRmxvYXQgPSBmdW5jdGlvbihyLCBnLCBiLCBhKSB7XG5cdHZhciBiaXRzID0gKGEgPDwgMjQgfCBiIDw8IDE2IHwgZyA8PCA4IHwgcik7XG5cdHJldHVybiBOdW1iZXJVdGlsLmludFRvRmxvYXRDb2xvcihiaXRzKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBudW1iZXIgaXMgYSBwb3dlci1vZi10d28uXG4gKlxuICogQG1ldGhvZCAgaXNQb3dlck9mVHdvXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBuIHRoZSBudW1iZXIgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn0gICB0cnVlIGlmIHBvd2VyLW9mLXR3b1xuICovXG5OdW1iZXJVdGlsLmlzUG93ZXJPZlR3byA9IGZ1bmN0aW9uKG4pIHtcblx0cmV0dXJuIChuICYgKG4gLSAxKSkgPT09IDA7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgaGlnaGVzdCBwb3dlci1vZi10d28gZnJvbSB0aGUgc3BlY2lmaWVkIG51bWJlci4gXG4gKiBcbiAqIEBwYXJhbSAge051bWJlcn0gbiB0aGUgbnVtYmVyIHRvIHRlc3RcbiAqIEByZXR1cm4ge051bWJlcn0gICB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIHR3b1xuICovXG5OdW1iZXJVdGlsLm5leHRQb3dlck9mVHdvID0gZnVuY3Rpb24obikge1xuXHRuLS07XG5cdG4gfD0gbiA+PiAxO1xuXHRuIHw9IG4gPj4gMjtcblx0biB8PSBuID4+IDQ7XG5cdG4gfD0gbiA+PiA4O1xuXHRuIHw9IG4gPj4gMTY7XG5cdHJldHVybiBuKzE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWJlclV0aWw7IiwibW9kdWxlLmV4cG9ydHMgPSBwbHVja2VyXG5cbmZ1bmN0aW9uIHBsdWNrZXIocGF0aCwgb2JqZWN0KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID49IDJcbiAgICA/IHBsdWNrKHBhdGgpKG9iamVjdClcbiAgICA6IHBsdWNrKHBhdGgpXG59XG5cbmZ1bmN0aW9uIHBsdWNrKHBhdGgpIHtcbiAgcGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJ1xuICAgID8gU3RyaW5nKHBhdGgpLnRyaW0oKS5zcGxpdCgnLicpXG4gICAgOiBwYXRoXG5cbiAgaWYgKHBhdGgubGVuZ3RoIDwgMikge1xuICAgIHBhdGggPSBwYXRoWzBdXG4gICAgcmV0dXJuIHBsdWNrU2luZ2xlXG4gIH0gZWxzZSB7XG4gICAgdmFyIGwgPSBwYXRoLmxlbmd0aFxuICAgIHJldHVybiBwbHVja1BhdGhcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsdWNrU2luZ2xlKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3RbcGF0aF1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBsdWNrUGF0aChvYmplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnKSBicmVha1xuXG4gICAgICBvYmplY3QgPSBvYmplY3RbcGF0aFtpXV1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0XG4gIH1cbn1cbiIsIi8qXHJcbiAqIHJhZi5qc1xyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmdyeW1hbi9yYWYuanNcclxuICpcclxuICogb3JpZ2luYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlclxyXG4gKiBpbnNwaXJlZCBmcm9tIHBhdWxfaXJpc2ggZ2lzdCBhbmQgcG9zdFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgbmdyeW1hblxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdykge1xyXG5cdHZhciBsYXN0VGltZSA9IDAsXHJcblx0XHR2ZW5kb3JzID0gWyd3ZWJraXQnLCAnbW96J10sXHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLFxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUsXHJcblx0XHRpID0gdmVuZG9ycy5sZW5ndGg7XHJcblxyXG5cdC8vIHRyeSB0byB1bi1wcmVmaXggZXhpc3RpbmcgcmFmXHJcblx0d2hpbGUgKC0taSA+PSAwICYmICFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcclxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW2ldICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxBbmltYXRpb25GcmFtZSddO1xyXG5cdH1cclxuXHJcblx0Ly8gcG9seWZpbGwgd2l0aCBzZXRUaW1lb3V0IGZhbGxiYWNrXHJcblx0Ly8gaGVhdmlseSBpbnNwaXJlZCBmcm9tIEBkYXJpdXMgZ2lzdCBtb2Q6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxI2NvbW1lbnQtODM3OTQ1XHJcblx0aWYgKCFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIWNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XHJcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0XHR2YXIgbm93ID0gK25ldyBEYXRlKCksIG5leHRUaW1lID0gTWF0aC5tYXgobGFzdFRpbWUgKyAxNiwgbm93KTtcclxuXHRcdFx0cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2sobGFzdFRpbWUgPSBuZXh0VGltZSk7XHJcblx0XHRcdH0sIG5leHRUaW1lIC0gbm93KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XHJcblx0fVxyXG5cclxuXHQvLyBleHBvcnQgdG8gd2luZG93XHJcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZTtcclxuXHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjYW5jZWxBbmltYXRpb25GcmFtZTtcclxufSh3aW5kb3cpKTtcclxuIiwiZnVuY3Rpb24gcmFuZG9tKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgbjAgPSB0eXBlb2Ygc3RhcnQgPT09ICdudW1iZXInLFxuICAgICAgICBuMSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG5cbiAgICBpZiAobjAgJiYgIW4xKSB7XG4gICAgICAgIGVuZCA9IHN0YXJ0XG4gICAgICAgIHN0YXJ0ID0gMFxuICAgIH0gZWxzZSBpZiAoIW4wICYmICFuMSkge1xuICAgICAgICBzdGFydCA9IDBcbiAgICAgICAgZW5kID0gMVxuICAgIH1cbiAgICByZXR1cm4gc3RhcnQgKyBNYXRoLnJhbmRvbSgpICogKGVuZCAtIHN0YXJ0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc21vb3Roc3RlcCAobWluLCBtYXgsIHZhbHVlKSB7XG4gIHZhciB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHZhbHVlLW1pbikvKG1heC1taW4pKSk7XG4gIHJldHVybiB4KngqKDMgLSAyKngpO1xufTtcbiIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIHZhciBDb3B5U2hhZGVyID0gRWZmZWN0Q29tcG9zZXIuQ29weVNoYWRlciA9IHJlcXVpcmUoJ3RocmVlLWNvcHlzaGFkZXInKVxuICAgICwgUmVuZGVyUGFzcyA9IEVmZmVjdENvbXBvc2VyLlJlbmRlclBhc3MgPSByZXF1aXJlKCcuL2xpYi9yZW5kZXJwYXNzJykoVEhSRUUpXG4gICAgLCBTaGFkZXJQYXNzID0gRWZmZWN0Q29tcG9zZXIuU2hhZGVyUGFzcyA9IHJlcXVpcmUoJy4vbGliL3NoYWRlcnBhc3MnKShUSFJFRSwgRWZmZWN0Q29tcG9zZXIpXG4gICAgLCBNYXNrUGFzcyA9IEVmZmVjdENvbXBvc2VyLk1hc2tQYXNzID0gcmVxdWlyZSgnLi9saWIvbWFza3Bhc3MnKShUSFJFRSlcbiAgICAsIENsZWFyTWFza1Bhc3MgPSBFZmZlY3RDb21wb3Nlci5DbGVhck1hc2tQYXNzID0gcmVxdWlyZSgnLi9saWIvY2xlYXJtYXNrcGFzcycpKFRIUkVFKVxuXG4gIGZ1bmN0aW9uIEVmZmVjdENvbXBvc2VyKCByZW5kZXJlciwgcmVuZGVyVGFyZ2V0ICkge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblxuICAgIGlmICggcmVuZGVyVGFyZ2V0ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAxO1xuICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCAxO1xuICAgICAgdmFyIHBhcmFtZXRlcnMgPSB7IG1pbkZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLCBtYWdGaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlciwgZm9ybWF0OiBUSFJFRS5SR0JGb3JtYXQsIHN0ZW5jaWxCdWZmZXI6IGZhbHNlIH07XG5cbiAgICAgIHJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggd2lkdGgsIGhlaWdodCwgcGFyYW1ldGVycyApO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcbiAgICB0aGlzLnJlbmRlclRhcmdldDIgPSByZW5kZXJUYXJnZXQuY2xvbmUoKTtcblxuICAgIHRoaXMud3JpdGVCdWZmZXIgPSB0aGlzLnJlbmRlclRhcmdldDE7XG4gICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xuXG4gICAgdGhpcy5wYXNzZXMgPSBbXTtcblxuICAgIHRoaXMuY29weVBhc3MgPSBuZXcgU2hhZGVyUGFzcyggQ29weVNoYWRlciApO1xuICB9O1xuXG4gIEVmZmVjdENvbXBvc2VyLnByb3RvdHlwZSA9IHtcbiAgICBzd2FwQnVmZmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciB0bXAgPSB0aGlzLnJlYWRCdWZmZXI7XG4gICAgICB0aGlzLnJlYWRCdWZmZXIgPSB0aGlzLndyaXRlQnVmZmVyO1xuICAgICAgdGhpcy53cml0ZUJ1ZmZlciA9IHRtcDtcblxuICAgIH0sXG5cbiAgICBhZGRQYXNzOiBmdW5jdGlvbiAoIHBhc3MgKSB7XG5cbiAgICAgIHRoaXMucGFzc2VzLnB1c2goIHBhc3MgKTtcblxuICAgIH0sXG5cbiAgICBpbnNlcnRQYXNzOiBmdW5jdGlvbiAoIHBhc3MsIGluZGV4ICkge1xuXG4gICAgICB0aGlzLnBhc3Nlcy5zcGxpY2UoIGluZGV4LCAwLCBwYXNzICk7XG5cbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIGRlbHRhICkge1xuXG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xuICAgICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xuXG4gICAgICB2YXIgbWFza0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICB2YXIgcGFzcywgaSwgaWwgPSB0aGlzLnBhc3Nlcy5sZW5ndGg7XG5cbiAgICAgIGZvciAoIGkgPSAwOyBpIDwgaWw7IGkgKysgKSB7XG5cbiAgICAgICAgcGFzcyA9IHRoaXMucGFzc2VzWyBpIF07XG5cbiAgICAgICAgaWYgKCAhcGFzcy5lbmFibGVkICkgY29udGludWU7XG5cbiAgICAgICAgcGFzcy5yZW5kZXIoIHRoaXMucmVuZGVyZXIsIHRoaXMud3JpdGVCdWZmZXIsIHRoaXMucmVhZEJ1ZmZlciwgZGVsdGEsIG1hc2tBY3RpdmUgKTtcblxuICAgICAgICBpZiAoIHBhc3MubmVlZHNTd2FwICkge1xuXG4gICAgICAgICAgaWYgKCBtYXNrQWN0aXZlICkge1xuXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMucmVuZGVyZXIuY29udGV4dDtcblxuICAgICAgICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5OT1RFUVVBTCwgMSwgMHhmZmZmZmZmZiApO1xuXG4gICAgICAgICAgICB0aGlzLmNvcHlQYXNzLnJlbmRlciggdGhpcy5yZW5kZXJlciwgdGhpcy53cml0ZUJ1ZmZlciwgdGhpcy5yZWFkQnVmZmVyLCBkZWx0YSApO1xuXG4gICAgICAgICAgICBjb250ZXh0LnN0ZW5jaWxGdW5jKCBjb250ZXh0LkVRVUFMLCAxLCAweGZmZmZmZmZmICk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN3YXBCdWZmZXJzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcGFzcyBpbnN0YW5jZW9mIE1hc2tQYXNzICkge1xuXG4gICAgICAgICAgbWFza0FjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIGlmICggcGFzcyBpbnN0YW5jZW9mIENsZWFyTWFza1Bhc3MgKSB7XG5cbiAgICAgICAgICBtYXNrQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICggcmVuZGVyVGFyZ2V0ICkge1xuXG4gICAgICBpZiAoIHJlbmRlclRhcmdldCA9PT0gdW5kZWZpbmVkICkge1xuXG4gICAgICAgIHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xuXG4gICAgICAgIHJlbmRlclRhcmdldC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICByZW5kZXJUYXJnZXQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVuZGVyVGFyZ2V0MSA9IHJlbmRlclRhcmdldDtcbiAgICAgIHRoaXMucmVuZGVyVGFyZ2V0MiA9IHJlbmRlclRhcmdldC5jbG9uZSgpO1xuXG4gICAgICB0aGlzLndyaXRlQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQxO1xuICAgICAgdGhpcy5yZWFkQnVmZmVyID0gdGhpcy5yZW5kZXJUYXJnZXQyO1xuXG4gICAgfSxcblxuICAgIHNldFNpemU6IGZ1bmN0aW9uICggd2lkdGgsIGhlaWdodCApIHtcblxuICAgICAgdmFyIHJlbmRlclRhcmdldCA9IHRoaXMucmVuZGVyVGFyZ2V0MS5jbG9uZSgpO1xuXG4gICAgICByZW5kZXJUYXJnZXQud2lkdGggPSB3aWR0aDtcbiAgICAgIHJlbmRlclRhcmdldC5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgIHRoaXMucmVzZXQoIHJlbmRlclRhcmdldCApO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgLy8gc2hhcmVkIG9ydGhvIGNhbWVyYVxuXG4gIEVmZmVjdENvbXBvc2VyLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0xLCAxLCAxLCAtMSwgMCwgMSApO1xuXG4gIEVmZmVjdENvbXBvc2VyLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xuXG4gIEVmZmVjdENvbXBvc2VyLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gIEVmZmVjdENvbXBvc2VyLnNjZW5lLmFkZCggRWZmZWN0Q29tcG9zZXIucXVhZCApO1xuXG4gIHJldHVybiBFZmZlY3RDb21wb3NlclxufTsiLCIvKipcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICBmdW5jdGlvbiBDbGVhck1hc2tQYXNzKCkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDbGVhck1hc2tQYXNzKSkgcmV0dXJuIG5ldyBDbGVhck1hc2tQYXNzKHNjZW5lLCBjYW1lcmEpO1xuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG4gIH07XG5cbiAgQ2xlYXJNYXNrUGFzcy5wcm90b3R5cGUgPSB7XG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoIHJlbmRlcmVyLCB3cml0ZUJ1ZmZlciwgcmVhZEJ1ZmZlciwgZGVsdGEgKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHJlbmRlcmVyLmNvbnRleHQ7XG4gICAgICBjb250ZXh0LmRpc2FibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDbGVhck1hc2tQYXNzXG59OyIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG4gIGZ1bmN0aW9uIE1hc2tQYXNzKCBzY2VuZSwgY2FtZXJhICkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXNrUGFzcykpIHJldHVybiBuZXcgTWFza1Bhc3Moc2NlbmUsIGNhbWVyYSk7XG5cbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXIgPSB0cnVlO1xuICAgIHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XG5cbiAgICB0aGlzLmludmVyc2UgPSBmYWxzZTtcbiAgfTtcblxuICBNYXNrUGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uICggcmVuZGVyZXIsIHdyaXRlQnVmZmVyLCByZWFkQnVmZmVyLCBkZWx0YSApIHtcblxuICAgICAgdmFyIGNvbnRleHQgPSByZW5kZXJlci5jb250ZXh0O1xuXG4gICAgICAvLyBkb24ndCB1cGRhdGUgY29sb3Igb3IgZGVwdGhcblxuICAgICAgY29udGV4dC5jb2xvck1hc2soIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlICk7XG4gICAgICBjb250ZXh0LmRlcHRoTWFzayggZmFsc2UgKTtcblxuICAgICAgLy8gc2V0IHVwIHN0ZW5jaWxcblxuICAgICAgdmFyIHdyaXRlVmFsdWUsIGNsZWFyVmFsdWU7XG5cbiAgICAgIGlmICggdGhpcy5pbnZlcnNlICkge1xuXG4gICAgICAgIHdyaXRlVmFsdWUgPSAwO1xuICAgICAgICBjbGVhclZhbHVlID0gMTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB3cml0ZVZhbHVlID0gMTtcbiAgICAgICAgY2xlYXJWYWx1ZSA9IDA7XG5cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5lbmFibGUoIGNvbnRleHQuU1RFTkNJTF9URVNUICk7XG4gICAgICBjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5SRVBMQUNFLCBjb250ZXh0LlJFUExBQ0UsIGNvbnRleHQuUkVQTEFDRSApO1xuICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5BTFdBWVMsIHdyaXRlVmFsdWUsIDB4ZmZmZmZmZmYgKTtcbiAgICAgIGNvbnRleHQuY2xlYXJTdGVuY2lsKCBjbGVhclZhbHVlICk7XG5cbiAgICAgIC8vIGRyYXcgaW50byB0aGUgc3RlbmNpbCBidWZmZXJcblxuICAgICAgcmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xuICAgICAgcmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgd3JpdGVCdWZmZXIsIHRoaXMuY2xlYXIgKTtcblxuICAgICAgLy8gcmUtZW5hYmxlIHVwZGF0ZSBvZiBjb2xvciBhbmQgZGVwdGhcblxuICAgICAgY29udGV4dC5jb2xvck1hc2soIHRydWUsIHRydWUsIHRydWUsIHRydWUgKTtcbiAgICAgIGNvbnRleHQuZGVwdGhNYXNrKCB0cnVlICk7XG5cbiAgICAgIC8vIG9ubHkgcmVuZGVyIHdoZXJlIHN0ZW5jaWwgaXMgc2V0IHRvIDFcblxuICAgICAgY29udGV4dC5zdGVuY2lsRnVuYyggY29udGV4dC5FUVVBTCwgMSwgMHhmZmZmZmZmZiApOyAgLy8gZHJhdyBpZiA9PSAxXG4gICAgICBjb250ZXh0LnN0ZW5jaWxPcCggY29udGV4dC5LRUVQLCBjb250ZXh0LktFRVAsIGNvbnRleHQuS0VFUCApO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgcmV0dXJuIE1hc2tQYXNzXG59O1xuIiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgZnVuY3Rpb24gUmVuZGVyUGFzcyggc2NlbmUsIGNhbWVyYSwgb3ZlcnJpZGVNYXRlcmlhbCwgY2xlYXJDb2xvciwgY2xlYXJBbHBoYSApIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVuZGVyUGFzcykpIHJldHVybiBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhLCBvdmVycmlkZU1hdGVyaWFsLCBjbGVhckNvbG9yLCBjbGVhckFscGhhKTtcblxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcblxuICAgIHRoaXMub3ZlcnJpZGVNYXRlcmlhbCA9IG92ZXJyaWRlTWF0ZXJpYWw7XG5cbiAgICB0aGlzLmNsZWFyQ29sb3IgPSBjbGVhckNvbG9yO1xuICAgIHRoaXMuY2xlYXJBbHBoYSA9ICggY2xlYXJBbHBoYSAhPT0gdW5kZWZpbmVkICkgPyBjbGVhckFscGhhIDogMTtcblxuICAgIHRoaXMub2xkQ2xlYXJDb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIHRoaXMub2xkQ2xlYXJBbHBoYSA9IDE7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXIgPSB0cnVlO1xuICAgIHRoaXMubmVlZHNTd2FwID0gZmFsc2U7XG5cbiAgfTtcblxuICBSZW5kZXJQYXNzLnByb3RvdHlwZSA9IHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuXG4gICAgICB0aGlzLnNjZW5lLm92ZXJyaWRlTWF0ZXJpYWwgPSB0aGlzLm92ZXJyaWRlTWF0ZXJpYWw7XG5cbiAgICAgIGlmICggdGhpcy5jbGVhckNvbG9yICkge1xuXG4gICAgICAgIHRoaXMub2xkQ2xlYXJDb2xvci5jb3B5KCByZW5kZXJlci5nZXRDbGVhckNvbG9yKCkgKTtcbiAgICAgICAgdGhpcy5vbGRDbGVhckFscGhhID0gcmVuZGVyZXIuZ2V0Q2xlYXJBbHBoYSgpO1xuXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIHRoaXMuY2xlYXJDb2xvciwgdGhpcy5jbGVhckFscGhhICk7XG5cbiAgICAgIH1cblxuICAgICAgcmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSwgcmVhZEJ1ZmZlciwgdGhpcy5jbGVhciApO1xuXG4gICAgICBpZiAoIHRoaXMuY2xlYXJDb2xvciApIHtcblxuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKCB0aGlzLm9sZENsZWFyQ29sb3IsIHRoaXMub2xkQ2xlYXJBbHBoYSApO1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2NlbmUub3ZlcnJpZGVNYXRlcmlhbCA9IG51bGw7XG5cbiAgICB9XG5cbiAgfTtcblxuICByZXR1cm4gUmVuZGVyUGFzcztcblxufTtcbiIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFLCBFZmZlY3RDb21wb3Nlcikge1xuICBmdW5jdGlvbiBTaGFkZXJQYXNzKCBzaGFkZXIsIHRleHR1cmVJRCApIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU2hhZGVyUGFzcykpIHJldHVybiBuZXcgU2hhZGVyUGFzcyhzaGFkZXIsIHRleHR1cmVJRCk7XG5cbiAgICB0aGlzLnRleHR1cmVJRCA9ICggdGV4dHVyZUlEICE9PSB1bmRlZmluZWQgKSA/IHRleHR1cmVJRCA6IFwidERpZmZ1c2VcIjtcblxuICAgIHRoaXMudW5pZm9ybXMgPSBUSFJFRS5Vbmlmb3Jtc1V0aWxzLmNsb25lKCBzaGFkZXIudW5pZm9ybXMgKTtcblxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcblxuICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IHNoYWRlci52ZXJ0ZXhTaGFkZXIsXG4gICAgICBmcmFnbWVudFNoYWRlcjogc2hhZGVyLmZyYWdtZW50U2hhZGVyXG5cbiAgICB9ICk7XG5cbiAgICB0aGlzLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XG5cbiAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubmVlZHNTd2FwID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyID0gZmFsc2U7XG5cbiAgfTtcblxuICBTaGFkZXJQYXNzLnByb3RvdHlwZSA9IHtcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCByZW5kZXJlciwgd3JpdGVCdWZmZXIsIHJlYWRCdWZmZXIsIGRlbHRhICkge1xuXG4gICAgICBpZiAoIHRoaXMudW5pZm9ybXNbIHRoaXMudGV4dHVyZUlEIF0gKSB7XG5cbiAgICAgICAgdGhpcy51bmlmb3Jtc1sgdGhpcy50ZXh0dXJlSUQgXS52YWx1ZSA9IHJlYWRCdWZmZXI7XG5cbiAgICAgIH1cblxuICAgICAgRWZmZWN0Q29tcG9zZXIucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XG5cbiAgICAgIGlmICggdGhpcy5yZW5kZXJUb1NjcmVlbiApIHtcblxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIEVmZmVjdENvbXBvc2VyLnNjZW5lLCBFZmZlY3RDb21wb3Nlci5jYW1lcmEgKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIEVmZmVjdENvbXBvc2VyLnNjZW5lLCBFZmZlY3RDb21wb3Nlci5jYW1lcmEsIHdyaXRlQnVmZmVyLCB0aGlzLmNsZWFyICk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG4gIHJldHVybiBTaGFkZXJQYXNzO1xuXG59OyIsIi8qKlxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqXG4gKiBGdWxsLXNjcmVlbiB0ZXh0dXJlZCBxdWFkIHNoYWRlclxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1bmlmb3Jtczoge1xuICAgIFwidERpZmZ1c2VcIjogeyB0eXBlOiBcInRcIiwgdmFsdWU6IG51bGwgfSxcbiAgICBcIm9wYWNpdHlcIjogIHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfVxuICB9LFxuICB2ZXJ0ZXhTaGFkZXI6IFtcbiAgICBcInZhcnlpbmcgdmVjMiB2VXY7XCIsXG5cbiAgICBcInZvaWQgbWFpbigpIHtcIixcblxuICAgICAgXCJ2VXYgPSB1djtcIixcbiAgICAgIFwiZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1wiLFxuXG4gICAgXCJ9XCJcbiAgXS5qb2luKFwiXFxuXCIpLFxuICBmcmFnbWVudFNoYWRlcjogW1xuICAgIFwidW5pZm9ybSBmbG9hdCBvcGFjaXR5O1wiLFxuXG4gICAgXCJ1bmlmb3JtIHNhbXBsZXIyRCB0RGlmZnVzZTtcIixcblxuICAgIFwidmFyeWluZyB2ZWMyIHZVdjtcIixcblxuICAgIFwidm9pZCBtYWluKCkge1wiLFxuXG4gICAgICBcInZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQoIHREaWZmdXNlLCB2VXYgKTtcIixcbiAgICAgIFwiZ2xfRnJhZ0NvbG9yID0gb3BhY2l0eSAqIHRleGVsO1wiLFxuXG4gICAgXCJ9XCJcbiAgXS5qb2luKFwiXFxuXCIpXG59O1xuIiwidmFyIGNyZWF0ZVR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuXG4gICAgdmFyIHR5cGVzID0gY3JlYXRlVHlwZXMoVEhSRUUpIFxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZShnbFNoYWRlciwgb3B0cykge1xuICAgICAgICBvcHRzID0gb3B0c3x8e31cblxuICAgICAgICBpZiAodHlwZW9mIG9wdHMuY29sb3JzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIG9wdHMuY29sb3JzID0gW29wdHMuY29sb3JzXVxuICAgICAgICBcbiAgICAgICAgdmFyIHRVbmlmb3JtcyA9IHR5cGVzKCBnbFNoYWRlci51bmlmb3Jtcywgb3B0cy5jb2xvcnMgKVxuICAgICAgICB2YXIgdEF0dHJpYnMgPSB0eXBlcyggZ2xTaGFkZXIuYXR0cmlidXRlcywgb3B0cy5jb2xvcnMgKVxuICAgICAgICAgICAgXG4gICAgICAgIC8vY2xlYXIgdGhlIGF0dHJpYnV0ZSBhcnJheXNcbiAgICAgICAgZm9yICh2YXIgayBpbiB0QXR0cmlicykge1xuICAgICAgICAgICAgdEF0dHJpYnNba10udmFsdWUgPSBbXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogZ2xTaGFkZXIudmVydGV4LFxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdsU2hhZGVyLmZyYWdtZW50LFxuICAgICAgICAgICAgdW5pZm9ybXM6IHRVbmlmb3JtcyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRBdHRyaWJzXG4gICAgICAgIH1cbiAgICB9XG59IiwidmFyIHR5cGVNYXAgPSB7XG4gICAgJ2ludCc6ICdpJyxcbiAgICAnZmxvYXQnOiAnZicsXG4gICAgJ2l2ZWMyJzogJ2kyJyxcbiAgICAnaXZlYzMnOiAnaTMnLFxuICAgICdpdmVjNCc6ICdpNCcsXG4gICAgJ3ZlYzInOiAndjInLFxuICAgICd2ZWMzJzogJ3YzJyxcbiAgICAndmVjNCc6ICd2NCcsXG4gICAgJ21hdDQnOiAnbTQnLFxuICAgICdtYXQzJzogJ20zJyxcbiAgICAnc2FtcGxlcjJEJzogJ3QnLFxuICAgICdzYW1wbGVyQ3ViZSc6ICd0J1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoVEhSRUUpIHtcbiAgICBmdW5jdGlvbiBuZXdJbnN0YW5jZSh0eXBlLCBpc0FycmF5KSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZmxvYXQnOiBcbiAgICAgICAgICAgIGNhc2UgJ2ludCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIGNhc2UgJ3ZlYzInOlxuICAgICAgICAgICAgY2FzZSAnaXZlYzInOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMigpXG4gICAgICAgICAgICBjYXNlICd2ZWMzJzpcbiAgICAgICAgICAgIGNhc2UgJ2l2ZWMzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjMoKVxuICAgICAgICAgICAgY2FzZSAndmVjNCc6XG4gICAgICAgICAgICBjYXNlICdpdmVjNCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUSFJFRS5WZWN0b3I0KClcbiAgICAgICAgICAgIGNhc2UgJ21hdDQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpXG4gICAgICAgICAgICBjYXNlICdtYXQzJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDMoKVxuICAgICAgICAgICAgY2FzZSAnc2FtcGxlckN1YmUnOlxuICAgICAgICAgICAgY2FzZSAnc2FtcGxlcjJEJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRIUkVFLlRleHR1cmUoKVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0VmFsdWUodHlwZSwgaXNBcnJheSwgYXJyYXlMZW4pIHtcbiAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgIC8vVGhyZWVKUyBmbGF0dGVucyBpdmVjMyB0eXBlXG4gICAgICAgICAgICAvLyh3ZSBkb24ndCBzdXBwb3J0ICdmdicgdHlwZSlcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnaXZlYzMnKVxuICAgICAgICAgICAgICAgIGFycmF5TGVuICo9IDNcbiAgICAgICAgICAgIHZhciBhciA9IG5ldyBBcnJheShhcnJheUxlbilcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxhci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBhcltpXSA9IG5ld0luc3RhbmNlKHR5cGUsIGlzQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gYXJcbiAgICAgICAgfSAgXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZSh0eXBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFR5cGUodHlwZSwgaXNBcnJheSkge1xuICAgICAgICBpZiAoIWlzQXJyYXkpXG4gICAgICAgICAgICByZXR1cm4gdHlwZU1hcFt0eXBlXVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnaW50JylcbiAgICAgICAgICAgIHJldHVybiAnaXYxJ1xuICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnZmxvYXQnKVxuICAgICAgICAgICAgcmV0dXJuICdmdjEnXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0eXBlTWFwW3R5cGVdKyd2J1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBzZXR1cFVuaWZvcm1zKGdsVW5pZm9ybXMsIGNvbG9yTmFtZXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbG9yTmFtZXMpKVxuICAgICAgICAgICAgY29sb3JOYW1lcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICAgICAgICB2YXIgcmVzdWx0ID0ge31cbiAgICAgICAgdmFyIGFycmF5cyA9IHt9XG5cbiAgICAgICAgLy9tYXAgdW5pZm9ybSB0eXBlc1xuICAgICAgICBnbFVuaWZvcm1zLmZvckVhY2goZnVuY3Rpb24odW5pZm9ybSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB1bmlmb3JtLm5hbWVcbiAgICAgICAgICAgIHZhciBpc0FycmF5ID0gLyguKylcXFtbMC05XStcXF0vLmV4ZWMobmFtZSlcblxuICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2U6IGNvbG9ycy4uLlxuICAgICAgICAgICAgaWYgKGNvbG9yTmFtZXMgJiYgY29sb3JOYW1lcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcnJheSBvZiBjb2xvciB1bmlmb3JtcyBub3Qgc3VwcG9ydGVkXCIpXG4gICAgICAgICAgICAgICAgaWYgKHVuaWZvcm0udHlwZSAhPT0gJ3ZlYzMnKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaHJlZUpTIGV4cGVjdHMgdmVjMyBmb3IgQ29sb3IgdW5pZm9ybXNcIikgXG4gICAgICAgICAgICAgICAgcmVzdWx0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYycsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gaXNBcnJheVsxXVxuICAgICAgICAgICAgICAgIGlmIChuYW1lIGluIGFycmF5cykgXG4gICAgICAgICAgICAgICAgICAgIGFycmF5c1tuYW1lXS5jb3VudCsrIFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlzW25hbWVdID0geyBjb3VudDogMSwgdHlwZTogdW5pZm9ybS50eXBlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHsgXG4gICAgICAgICAgICAgICAgdHlwZTogZ2V0VHlwZSh1bmlmb3JtLnR5cGUsIGlzQXJyYXkpLCBcbiAgICAgICAgICAgICAgICB2YWx1ZTogaXNBcnJheSA/IG51bGwgOiBkZWZhdWx0VmFsdWUodW5pZm9ybS50eXBlKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICAvL25vdyBjbGVhbiB1cCBhbnkgYXJyYXkgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGsgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgdSA9IHJlc3VsdFtrXVxuICAgICAgICAgICAgaWYgKGsgaW4gYXJyYXlzKSB7IC8vaXMgYW4gYXJyYXlcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFycmF5c1trXVxuICAgICAgICAgICAgICAgIHUudmFsdWUgPSBkZWZhdWx0VmFsdWUoYS50eXBlLCB0cnVlLCBhLmNvdW50KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9yZW5kZXJlcicpIiwidmFyIGNyZWF0ZVRleHQgPSByZXF1aXJlKCdnbC1zcHJpdGUtdGV4dCcpXG52YXIgbWF0NCA9IHtcbiAgICBjcmVhdGU6IHJlcXVpcmUoJ2dsLW1hdDQvY3JlYXRlJyksXG4gICAgc2NhbGU6IHJlcXVpcmUoJ2dsLW1hdDQvc2NhbGUnKSxcbiAgICBtdWx0aXBseTogcmVxdWlyZSgnZ2wtbWF0NC9tdWx0aXBseScpXG59XG5cbnZhciBtb2RlbFRyYW5zZm9ybSA9IG1hdDQuY3JlYXRlKClcbnZhciBmbGlwID0gbWF0NC5jcmVhdGUoKVxubWF0NC5zY2FsZShmbGlwLCBmbGlwLCBbMSwgLTEsIDFdKVxuXG52YXIgV3JhcFRleHR1cmUgPSByZXF1aXJlKCcuL3RleHR1cmUtd3JhcCcpXG52YXIgbnVtYmVyID0gcmVxdWlyZSgnYXMtbnVtYmVyJylcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcblxudmFyIGNyZWF0ZVNoYWRlciA9IHJlcXVpcmUoJ2dsLXNoYWRlci1jb3JlJylcblxuXG4vL25hc3R5IHRlbXAgaGFjayB1bnRpbCAjOTcxIGlzIGZpeGVkXG52YXIgdmVydGV4ID0gJ2F0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWM0IGNvbG9yO1xcbmF0dHJpYnV0ZSB2ZWMyIHRleGNvb3JkMDtcXG5cXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgbW9kZWw7XFxuXFxudmFyeWluZyB2ZWM0IHZfY29sO1xcbnZhcnlpbmcgdmVjMiB2X3RleDA7XFxuXFxudm9pZCBtYWluKCkge1xcbiBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogbW9kZWwgKiBwb3NpdGlvbjtcXG4gdl9jb2wgPSBjb2xvcjtcXG4gdl90ZXgwID0gdGV4Y29vcmQwO1xcbiBnbF9Qb2ludFNpemUgPSAxLjA7XFxufSdcbnZhciBmcmFnbWVudCA9ICcjaWZkZWYgR0xfRVNcXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZW5kaWZcXG5cXG52YXJ5aW5nIHZlYzQgdl9jb2w7XFxudmFyeWluZyB2ZWMyIHZfdGV4MDtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlMDtcXG5cXG51bmlmb3JtIGZsb2F0IHNtb290aGluZztcXG4vLyA9IDEuMC8zMi4wO1xcblxcbi8vIGRyb3Agc2hhZG93IGNvbXB1dGVkIGluIGZyYWdtZW50IHNoYWRlclxcbnZvaWQgbWFpbigpIHtcXG4gdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlMCwgdl90ZXgwKTtcXG5cXG4gZmxvYXQgZHN0ID0gdGV4Q29sb3IuYTtcXG4gZmxvYXQgYWxwaGEgPSBzbW9vdGhzdGVwKDAuNSAtIHNtb290aGluZywgMC41ICsgc21vb3RoaW5nLCBkc3QpO1xcbiB2ZWM0IGJhc2UgPSB2X2NvbCAqIHZlYzQoYWxwaGEpO1xcblxcbiBnbF9GcmFnQ29sb3IgPSBiYXNlO1xcbiBpZiAoZ2xfRnJhZ0NvbG9yLmE8MC4xKVxcbiBkaXNjYXJkO1xcbn0nXG5cbnZhciB1bmlmb3JtcyA9IFtcbiAgICAgICAgeyB0eXBlOiAnZmxvYXQnLCBuYW1lOiAnc21vb3RoaW5nJyB9LFxuICAgICAgICB7IHR5cGU6ICdzYW1wbGVyMkQnLCBuYW1lOiAndGV4dHVyZTAnIH0sXG4gICAgICAgIHsgdHlwZTogJ21hdDQnLCBuYW1lOiAncHJvamVjdGlvbicgfSxcbiAgICAgICAgeyB0eXBlOiAnbWF0NCcsIG5hbWU6ICd2aWV3JyB9LFxuICAgICAgICB7IHR5cGU6ICdtYXQ0JywgbmFtZTogJ21vZGVsJyB9ICAgICAgICBcbiAgICBdLFxuICAgIGF0dHJpYnV0ZXMgPSBbXG4gICAgICAgIHsgdHlwZTogJ3ZlYzQnLCBuYW1lOiAncG9zaXRpb24nIH0sXG4gICAgICAgIHsgdHlwZTogJ3ZlYzQnLCBuYW1lOiAnY29sb3InIH0sXG4gICAgICAgIHsgdHlwZTogJ3ZlYzInLCBuYW1lOiAndGV4Y29vcmQwJyB9XG4gICAgXVxuXG5cblxuZnVuY3Rpb24gY29weUNvbG9yKG91dCwgY29sb3IsIG9wYWNpdHkpIHtcbiAgICBvdXRbMF0gPSBjb2xvci5yXG4gICAgb3V0WzFdID0gY29sb3IuZyBcbiAgICBvdXRbMl0gPSBjb2xvci5iIFxuICAgIG91dFszXSA9IG9wYWNpdHlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUSFJFRSkge1xuICAgIHZhciBzaGFyZWRTaGFkZXJcblxuICAgIGZ1bmN0aW9uIFRleHRSZW5kZXJlcihyZW5kZXJlciwgb3B0KSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUZXh0UmVuZGVyZXIpKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBUZXh0UmVuZGVyZXIocmVuZGVyZXIsIG9wdClcbiAgICAgICAgb3B0PW9wdHx8e31cblxuICAgICAgICB2YXIgZ2wgPSByZW5kZXJlci5nZXRDb250ZXh0KClcbiAgICAgICAgdGhpcy5nbCA9IGdsXG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoKVxuICAgICAgICBpZiAob3B0LmNvbG9yICE9PSBudWxsICYmIHR5cGVvZiBvcHQuY29sb3IgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgdGhpcy5jb2xvci5zZXQob3B0LmNvbG9yKVxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBudW1iZXIob3B0Lm9wYWNpdHksIDEuMClcblxuICAgICAgICAvL2lmIG5vIHRleHR1cmVzIGFyZSBnaXZlbiwgcHJlc3VtZSB0aGV5IGFyZSBiYXNlNjQgcGFja2VkXG4gICAgICAgIC8vaW50byB0aGUgRm9udCBvYmplY3QgKGxpa2Ugd2l0aCBibWZvbnQtbGF0bylcbiAgICAgICAgdmFyIHRleHRPcHRzID0geHRlbmQob3B0KVxuICAgICAgICBpZiAodGV4dE9wdHMudGV4dHVyZXMpIHtcbiAgICAgICAgICAgIHRleHRPcHRzLnRleHR1cmVzID0gdGV4dE9wdHMudGV4dHVyZXMubWFwKGZ1bmN0aW9uKHRleCkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXF1aXJlKCdnbC10ZXh0dXJlMmQnKShnbCwgdGV4LmltYWdlKVxuICAgICAgICAgICAgICAgIGlmICh0ZXggaW5zdGFuY2VvZiBUSFJFRS5UZXh0dXJlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gV3JhcFRleHR1cmUocmVuZGVyZXIsIHRleClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjcmVhdGVUZXh0KGdsLCB0ZXh0T3B0cylcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBtYXQ0LmNyZWF0ZSgpXG5cbiAgICAgICAgaWYgKCFzaGFyZWRTaGFkZXIgJiYgIW9wdC5zaGFkZXIpXG4gICAgICAgICAgICBzaGFyZWRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIHZlcnRleCwgZnJhZ21lbnQsIHVuaWZvcm1zLCBhdHRyaWJ1dGVzKVxuICAgICAgICB0aGlzLnNoYWRlciA9IG9wdC5zaGFkZXIgfHwgc2hhcmVkU2hhZGVyXG4gICAgICAgIHRoaXMuc2hhZGVyLmJpbmQoKVxuXG4gICAgICAgIHRoaXMucGFkZGluZyA9IG51bWJlcihvcHQucGFkZGluZywgMClcblxuICAgICAgICB2YXIgcyA9IG51bWJlcihvcHQuc21vb3RoaW5nLCAxLjAvMzIuMClcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMuc21vb3RoaW5nID0gc1xuICAgICAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy50ZXh0dXJlMCA9IDBcbiAgICB9XG5cbiAgICBUZXh0UmVuZGVyZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjYW1lcmEsIG9iamVjdCkge1xuICAgICAgICB2YXIgZ2wgPSB0aGlzLmdsXG5cbiAgICAgICAgaWYgKCFvYmplY3QudmlzaWJsZSlcbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50LnRleHR1cmVzIHx8IHRoaXMuZWxlbWVudC50ZXh0dXJlcy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpXG4gICAgICAgIC8vIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbClcblxuICAgICAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVClcbiAgICAgICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTClcblxuICAgICAgICAvLyBnbC5mcm9udEZhY2UoIGdsLkNDVyApICAgIFxuICAgICAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKVxuICAgICAgICAvLyBnbC5jdWxsRmFjZSggZ2wuRlJPTlQgKVxuICAgICAgICBnbC5jb2xvck1hc2sodHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgZ2wuZGlzYWJsZShnbC5TVEVOQ0lMX1RFU1QpXG4gICAgICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApXG4gICAgICAgIGdsLmRlcHRoTWFzayh0cnVlKVxuICAgICAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKVxuXG4gICAgICAgIHRoaXMuc2hhZGVyLmJpbmQoKVxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dHVyZXNbMF0uYmluZCgwKVxuXG4gICAgICAgIC8vIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKVxuXG4gICAgICAgIGdsLmN1bGxGYWNlKGdsLkZST05UKVxuXG4gICAgICAgIG1hdDQubXVsdGlwbHkobW9kZWxUcmFuc2Zvcm0sIG9iamVjdC5tYXRyaXhXb3JsZC5lbGVtZW50cywgdGhpcy50cmFuc2Zvcm0pXG4gICAgICAgIG1hdDQubXVsdGlwbHkobW9kZWxUcmFuc2Zvcm0sIG1vZGVsVHJhbnNmb3JtLCBmbGlwKVxuXG4gICAgICAgIHRoaXMuc2hhZGVyLmJpbmQoKVxuICAgICAgICB0aGlzLnNoYWRlci51bmlmb3Jtcy5wcm9qZWN0aW9uID0gY2FtZXJhLnByb2plY3Rpb25NYXRyaXguZWxlbWVudHNcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMudmlldyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UuZWxlbWVudHNcbiAgICAgICAgdGhpcy5zaGFkZXIudW5pZm9ybXMubW9kZWwgPSBtb2RlbFRyYW5zZm9ybVxuICAgICAgICAgICAgXG4gICAgICAgIGNvcHlDb2xvcih0aGlzLmVsZW1lbnQuYmF0Y2guY29sb3IsIHRoaXMuY29sb3IsIHRoaXMub3BhY2l0eSlcbiAgICAgICAgdGhpcy5lbGVtZW50LmRyYXcodGhpcy5zaGFkZXIsIHRoaXMucGFkZGluZywgdGhpcy5wYWRkaW5nKVxuXG4gICAgICAgIGdsLmN1bGxGYWNlKCBnbC5CQUNLIClcbiAgICB9XG5cblxuICAgIHJldHVybiBUZXh0UmVuZGVyZXJcbn0iLCIvLyBpbiB0aW1lIHRoaXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGEgc29sdXRpb25cbi8vIHRoYXQgYmV0dGVyIHN1cHBvcnRlZCBUaHJlZUpTIFRleHR1cmUgb2JqZWN0c1xuXG5cbmZ1bmN0aW9uIFRleHR1cmVXcmFwKHJlbmRlcmVyLCB0ZXgpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVGV4dHVyZVdyYXApKVxuICAgICAgICByZXR1cm4gbmV3IFRleHR1cmVXcmFwKHJlbmRlcmVyLCB0ZXgpXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgdGhpcy50ZXh0dXJlID0gdGV4XG4gICAgdGhpcy5fc2hhcGUgPSBbMCwgMF1cbn1cblxuVGV4dHVyZVdyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbih1bml0KSB7XG4gICAgdXBkYXRlU2l6ZSh0aGlzLl9zaGFwZSwgdGhpcy50ZXh0dXJlKVxuXG5cbiAgICB2YXIgZ2wgPSB0aGlzLnJlbmRlcmVyLmdldENvbnRleHQoKVxuICAgIHRoaXMucmVuZGVyZXIuc2V0VGV4dHVyZSh0aGlzLnRleHR1cmUsIHVuaXR8MClcbiAgICBcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLnRleHR1cmUuX193ZWJnbFRleHR1cmUpXG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShUZXh0dXJlV3JhcC5wcm90b3R5cGUsIFwic2hhcGVcIiwge1xuXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdXBkYXRlU2l6ZSh0aGlzLl9zaGFwZSwgdGhpcy50ZXh0dXJlKVxuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcGVcbiAgICB9XG59KVxuXG5mdW5jdGlvbiB1cGRhdGVTaXplKHNoYXBlLCB0ZXh0dXJlKSB7XG4gICAgc2hhcGVbMF0gPSAodGV4dHVyZS5pbWFnZSAmJiB0ZXh0dXJlLmltYWdlLndpZHRoKSAgfDBcbiAgICBzaGFwZVsxXSA9ICh0ZXh0dXJlLmltYWdlICYmIHRleHR1cmUuaW1hZ2UuaGVpZ2h0KSB8MFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVXcmFwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ2ZXJ0ZXhcIjpcIlxcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JOVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JORTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTVztcXG52YXJ5aW5nIHZlYzIgdl9yZ2JTRTtcXG52YXJ5aW5nIHZlYzIgdl9yZ2JNO1xcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnZvaWQgYV94X3RleGNvb3Jkcyh2ZWMyIGZyYWdDb29yZCwgdmVjMiByZXNvbHV0aW9uLCBvdXQgdmVjMiB2X3JnYk5XLCBvdXQgdmVjMiB2X3JnYk5FLCBvdXQgdmVjMiB2X3JnYlNXLCBvdXQgdmVjMiB2X3JnYlNFLCBvdXQgdmVjMiB2X3JnYk0pIHtcXG4gIHZlYzIgaW52ZXJzZVZQID0gMS4wIC8gcmVzb2x1dGlvbi54eTtcXG4gIHZfcmdiTlcgPSAoZnJhZ0Nvb3JkICsgdmVjMigtMS4wLCAtMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYk5FID0gKGZyYWdDb29yZCArIHZlYzIoMS4wLCAtMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYlNXID0gKGZyYWdDb29yZCArIHZlYzIoLTEuMCwgMS4wKSkgKiBpbnZlcnNlVlA7XFxuICB2X3JnYlNFID0gKGZyYWdDb29yZCArIHZlYzIoMS4wLCAxLjApKSAqIGludmVyc2VWUDtcXG4gIHZfcmdiTSA9IHZlYzIoZnJhZ0Nvb3JkICogaW52ZXJzZVZQKTtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgdlV2ID0gdXY7XFxuICB2ZWMyIGZyYWdDb29yZCA9IHV2ICogcmVzb2x1dGlvbjtcXG4gIGFfeF90ZXhjb29yZHMoZnJhZ0Nvb3JkLCByZXNvbHV0aW9uLCB2X3JnYk5XLCB2X3JnYk5FLCB2X3JnYlNXLCB2X3JnYlNFLCB2X3JnYk0pO1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCIsXCJmcmFnbWVudFwiOlwiXFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgdmVjMiB2X3JnYk5XO1xcbnZhcnlpbmcgdmVjMiB2X3JnYk5FO1xcbnZhcnlpbmcgdmVjMiB2X3JnYlNXO1xcbnZhcnlpbmcgdmVjMiB2X3JnYlNFO1xcbnZhcnlpbmcgdmVjMiB2X3JnYk07XFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSBzYW1wbGVyMkQgdERpZmZ1c2U7XFxuI2lmbmRlZiBGWEFBX1JFRFVDRV9NSU5cXG5cXG4jZGVmaW5lIEZYQUFfUkVEVUNFX01JTiAgICgxLjAvIDEyOC4wKVxcblxcbiNlbmRpZlxcblxcbiNpZm5kZWYgRlhBQV9SRURVQ0VfTVVMXFxuXFxuI2RlZmluZSBGWEFBX1JFRFVDRV9NVUwgICAoMS4wIC8gOC4wKVxcblxcbiNlbmRpZlxcblxcbiNpZm5kZWYgRlhBQV9TUEFOX01BWFxcblxcbiNkZWZpbmUgRlhBQV9TUEFOX01BWCAgICAgOC4wXFxuXFxuI2VuZGlmXFxuXFxudmVjNCBhX3hfZnhhYShzYW1wbGVyMkQgdGV4LCB2ZWMyIGZyYWdDb29yZCwgdmVjMiByZXNvbHV0aW9uLCB2ZWMyIHZfcmdiTlcsIHZlYzIgdl9yZ2JORSwgdmVjMiB2X3JnYlNXLCB2ZWMyIHZfcmdiU0UsIHZlYzIgdl9yZ2JNKSB7XFxuICB2ZWM0IGNvbG9yO1xcbiAgbWVkaXVtcCB2ZWMyIGludmVyc2VWUCA9IHZlYzIoMS4wIC8gcmVzb2x1dGlvbi54LCAxLjAgLyByZXNvbHV0aW9uLnkpO1xcbiAgdmVjMyByZ2JOVyA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiTlcpLnh5ejtcXG4gIHZlYzMgcmdiTkUgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYk5FKS54eXo7XFxuICB2ZWMzIHJnYlNXID0gdGV4dHVyZTJEKHRleCwgdl9yZ2JTVykueHl6O1xcbiAgdmVjMyByZ2JTRSA9IHRleHR1cmUyRCh0ZXgsIHZfcmdiU0UpLnh5ejtcXG4gIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQodGV4LCB2X3JnYk0pO1xcbiAgdmVjMyByZ2JNID0gdGV4Q29sb3IueHl6O1xcbiAgdmVjMyBsdW1hID0gdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KTtcXG4gIGZsb2F0IGx1bWFOVyA9IGRvdChyZ2JOVywgbHVtYSk7XFxuICBmbG9hdCBsdW1hTkUgPSBkb3QocmdiTkUsIGx1bWEpO1xcbiAgZmxvYXQgbHVtYVNXID0gZG90KHJnYlNXLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFTRSA9IGRvdChyZ2JTRSwgbHVtYSk7XFxuICBmbG9hdCBsdW1hTSA9IGRvdChyZ2JNLCBsdW1hKTtcXG4gIGZsb2F0IGx1bWFNaW4gPSBtaW4obHVtYU0sIG1pbihtaW4obHVtYU5XLCBsdW1hTkUpLCBtaW4obHVtYVNXLCBsdW1hU0UpKSk7XFxuICBmbG9hdCBsdW1hTWF4ID0gbWF4KGx1bWFNLCBtYXgobWF4KGx1bWFOVywgbHVtYU5FKSwgbWF4KGx1bWFTVywgbHVtYVNFKSkpO1xcbiAgbWVkaXVtcCB2ZWMyIGRpcjtcXG4gIGRpci54ID0gLSgobHVtYU5XICsgbHVtYU5FKSAtIChsdW1hU1cgKyBsdW1hU0UpKTtcXG4gIGRpci55ID0gKChsdW1hTlcgKyBsdW1hU1cpIC0gKGx1bWFORSArIGx1bWFTRSkpO1xcbiAgZmxvYXQgZGlyUmVkdWNlID0gbWF4KChsdW1hTlcgKyBsdW1hTkUgKyBsdW1hU1cgKyBsdW1hU0UpICogKDAuMjUgKiBGWEFBX1JFRFVDRV9NVUwpLCBGWEFBX1JFRFVDRV9NSU4pO1xcbiAgZmxvYXQgcmNwRGlyTWluID0gMS4wIC8gKG1pbihhYnMoZGlyLngpLCBhYnMoZGlyLnkpKSArIGRpclJlZHVjZSk7XFxuICBkaXIgPSBtaW4odmVjMihGWEFBX1NQQU5fTUFYLCBGWEFBX1NQQU5fTUFYKSwgbWF4KHZlYzIoLUZYQUFfU1BBTl9NQVgsIC1GWEFBX1NQQU5fTUFYKSwgZGlyICogcmNwRGlyTWluKSkgKiBpbnZlcnNlVlA7XFxuICB2ZWMzIHJnYkEgPSAwLjUgKiAodGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogKDEuMCAvIDMuMCAtIDAuNSkpLnh5eiArIHRleHR1cmUyRCh0ZXgsIGZyYWdDb29yZCAqIGludmVyc2VWUCArIGRpciAqICgyLjAgLyAzLjAgLSAwLjUpKS54eXopO1xcbiAgdmVjMyByZ2JCID0gcmdiQSAqIDAuNSArIDAuMjUgKiAodGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogLTAuNSkueHl6ICsgdGV4dHVyZTJEKHRleCwgZnJhZ0Nvb3JkICogaW52ZXJzZVZQICsgZGlyICogMC41KS54eXopO1xcbiAgZmxvYXQgbHVtYUIgPSBkb3QocmdiQiwgbHVtYSk7XFxuICBpZigobHVtYUIgPCBsdW1hTWluKSB8fCAobHVtYUIgPiBsdW1hTWF4KSlcXG4gICAgY29sb3IgPSB2ZWM0KHJnYkEsIHRleENvbG9yLmEpO1xcbiAgZWxzZVxcbiAgICBjb2xvciA9IHZlYzQocmdiQiwgdGV4Q29sb3IuYSk7XFxuICByZXR1cm4gY29sb3I7XFxufVxcbnZvaWQgbWFpbigpIHtcXG4gIHZlYzIgZnJhZ0Nvb3JkID0gdlV2ICogcmVzb2x1dGlvbjtcXG4gIGdsX0ZyYWdDb2xvciA9IGFfeF9meGFhKHREaWZmdXNlLCBmcmFnQ29vcmQsIHJlc29sdXRpb24sIHZfcmdiTlcsIHZfcmdiTkUsIHZfcmdiU1csIHZfcmdiU0UsIHZfcmdiTSk7XFxufVwiLFwidW5pZm9ybXNcIjpbe1wibmFtZVwiOlwicmVzb2x1dGlvblwiLFwidHlwZVwiOlwidmVjMlwifSx7XCJuYW1lXCI6XCJyZXNvbHV0aW9uXCIsXCJ0eXBlXCI6XCJ2ZWMyXCJ9LHtcIm5hbWVcIjpcInREaWZmdXNlXCIsXCJ0eXBlXCI6XCJzYW1wbGVyMkRcIn1dLFwiYXR0cmlidXRlc1wiOltdfSIsIi8vIHZhciBnbHNsaWZ5ID0gcmVxdWlyZSgnZ2xzbGlmeScpXG52YXIgdGhyZWVpZnkgPSByZXF1aXJlKCd0aHJlZS1nbHNsaWZ5JylcblxuLy8gdmFyIHNvdXJjZSA9IGdsc2xpZnkoe1xuLy8gICAgIHZlcnRleDogJy4vdmVydC5nbHNsJyxcbi8vICAgICBmcmFnbWVudDogJy4vZnJhZy5nbHNsJyxcbi8vICAgICBzb3VyY2VPbmx5OiB0cnVlXG4vLyB9KVxuXG52YXIgc291cmNlID0gcmVxdWlyZSgnLi9jb21waWxlZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVEhSRUUpIHtcbiAgICB2YXIgY3JlYXRlU2hhZGVyID0gdGhyZWVpZnkoVEhSRUUpXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU2hhZGVyKHNvdXJjZSlcbiAgICB9XG59IiwidmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRIUkVFKSB7XG5cbiAgICBmdW5jdGlvbiBDb21wbGV4KG1lc2gpIHtcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBsZXgpKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21wbGV4KG1lc2gpXG4gICAgICAgIFRIUkVFLkdlb21ldHJ5LmNhbGwodGhpcylcbiAgICAgICAgdGhpcy5keW5hbWljID0gdHJ1ZVxuXG4gICAgICAgIGlmIChtZXNoKVxuICAgICAgICAgICAgdGhpcy51cGRhdGUobWVzaClcbiAgICB9XG5cbiAgICBpbmhlcml0cyhDb21wbGV4LCBUSFJFRS5HZW9tZXRyeSlcblxuICAgIC8vbWF5IGV4cG9zZSB0aGVzZSBpbiBuZXh0IHZlcnNpb25cbiAgICBDb21wbGV4LnByb3RvdHlwZS5fdXBkYXRlUG9zaXRpb25zID0gZnVuY3Rpb24ocG9zaXRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTxwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbnNbaV1cbiAgICAgICAgICAgIGlmIChpID4gdGhpcy52ZXJ0aWNlcy5sZW5ndGgtMSlcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoKS5mcm9tQXJyYXkocG9zKSlcbiAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1tpXS5mcm9tQXJyYXkocG9zKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmVydGljZXMubGVuZ3RoID0gcG9zaXRpb25zLmxlbmd0aFxuICAgICAgICB0aGlzLnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWVcbiAgICB9XG5cbiAgICBDb21wbGV4LnByb3RvdHlwZS5fdXBkYXRlQ2VsbHMgPSBmdW5jdGlvbihjZWxscykge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8Y2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBmYWNlID0gY2VsbHNbaV1cbiAgICAgICAgICAgIGlmIChpID4gdGhpcy5mYWNlcy5sZW5ndGgtMSlcbiAgICAgICAgICAgICAgICB0aGlzLmZhY2VzLnB1c2gobmV3IFRIUkVFLkZhY2UzKGZhY2VbMF0sIGZhY2VbMV0sIGZhY2VbMl0pKVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHRmID0gdGhpcy5mYWNlc1tpXVxuICAgICAgICAgICAgICAgIHRmLmEgPSBmYWNlWzBdXG4gICAgICAgICAgICAgICAgdGYuYiA9IGZhY2VbMV1cbiAgICAgICAgICAgICAgICB0Zi5jID0gZmFjZVsyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mYWNlcy5sZW5ndGggPSBjZWxscy5sZW5ndGhcbiAgICAgICAgdGhpcy5lbGVtZW50c05lZWRVcGRhdGUgPSB0cnVlXG4gICAgfVxuXG4gICAgQ29tcGxleC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24obWVzaCkge1xuICAgICAgICB0aGlzLl91cGRhdGVQb3NpdGlvbnMobWVzaC5wb3NpdGlvbnMpXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNlbGxzKG1lc2guY2VsbHMpXG4gICAgfVxuXG4gICAgcmV0dXJuIENvbXBsZXhcbn0iLCIvKipcbiAqIEJpdCB0d2lkZGxpbmcgaGFja3MgZm9yIEphdmFTY3JpcHQuXG4gKlxuICogQXV0aG9yOiBNaWtvbGEgTHlzZW5rb1xuICpcbiAqIFBvcnRlZCBmcm9tIFN0YW5mb3JkIGJpdCB0d2lkZGxpbmcgaGFjayBsaWJyYXJ5OlxuICogICAgaHR0cDovL2dyYXBoaWNzLnN0YW5mb3JkLmVkdS9+c2VhbmRlci9iaXRoYWNrcy5odG1sXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7IFwidXNlIHJlc3RyaWN0XCI7XG5cbi8vTnVtYmVyIG9mIGJpdHMgaW4gYW4gaW50ZWdlclxudmFyIElOVF9CSVRTID0gMzI7XG5cbi8vQ29uc3RhbnRzXG5leHBvcnRzLklOVF9CSVRTICA9IElOVF9CSVRTO1xuZXhwb3J0cy5JTlRfTUFYICAgPSAgMHg3ZmZmZmZmZjtcbmV4cG9ydHMuSU5UX01JTiAgID0gLTE8PChJTlRfQklUUy0xKTtcblxuLy9SZXR1cm5zIC0xLCAwLCArMSBkZXBlbmRpbmcgb24gc2lnbiBvZiB4XG5leHBvcnRzLnNpZ24gPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAodiA+IDApIC0gKHYgPCAwKTtcbn1cblxuLy9Db21wdXRlcyBhYnNvbHV0ZSB2YWx1ZSBvZiBpbnRlZ2VyXG5leHBvcnRzLmFicyA9IGZ1bmN0aW9uKHYpIHtcbiAgdmFyIG1hc2sgPSB2ID4+IChJTlRfQklUUy0xKTtcbiAgcmV0dXJuICh2IF4gbWFzaykgLSBtYXNrO1xufVxuXG4vL0NvbXB1dGVzIG1pbmltdW0gb2YgaW50ZWdlcnMgeCBhbmQgeVxuZXhwb3J0cy5taW4gPSBmdW5jdGlvbih4LCB5KSB7XG4gIHJldHVybiB5IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG59XG5cbi8vQ29tcHV0ZXMgbWF4aW11bSBvZiBpbnRlZ2VycyB4IGFuZCB5XG5leHBvcnRzLm1heCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgcmV0dXJuIHggXiAoKHggXiB5KSAmIC0oeCA8IHkpKTtcbn1cblxuLy9DaGVja3MgaWYgYSBudW1iZXIgaXMgYSBwb3dlciBvZiB0d29cbmV4cG9ydHMuaXNQb3cyID0gZnVuY3Rpb24odikge1xuICByZXR1cm4gISh2ICYgKHYtMSkpICYmICghIXYpO1xufVxuXG4vL0NvbXB1dGVzIGxvZyBiYXNlIDIgb2YgdlxuZXhwb3J0cy5sb2cyID0gZnVuY3Rpb24odikge1xuICB2YXIgciwgc2hpZnQ7XG4gIHIgPSAgICAgKHYgPiAweEZGRkYpIDw8IDQ7IHYgPj4+PSByO1xuICBzaGlmdCA9ICh2ID4gMHhGRiAgKSA8PCAzOyB2ID4+Pj0gc2hpZnQ7IHIgfD0gc2hpZnQ7XG4gIHNoaWZ0ID0gKHYgPiAweEYgICApIDw8IDI7IHYgPj4+PSBzaGlmdDsgciB8PSBzaGlmdDtcbiAgc2hpZnQgPSAodiA+IDB4MyAgICkgPDwgMTsgdiA+Pj49IHNoaWZ0OyByIHw9IHNoaWZ0O1xuICByZXR1cm4gciB8ICh2ID4+IDEpO1xufVxuXG4vL0NvbXB1dGVzIGxvZyBiYXNlIDEwIG9mIHZcbmV4cG9ydHMubG9nMTAgPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiAgKHYgPj0gMTAwMDAwMDAwMCkgPyA5IDogKHYgPj0gMTAwMDAwMDAwKSA/IDggOiAodiA+PSAxMDAwMDAwMCkgPyA3IDpcbiAgICAgICAgICAodiA+PSAxMDAwMDAwKSA/IDYgOiAodiA+PSAxMDAwMDApID8gNSA6ICh2ID49IDEwMDAwKSA/IDQgOlxuICAgICAgICAgICh2ID49IDEwMDApID8gMyA6ICh2ID49IDEwMCkgPyAyIDogKHYgPj0gMTApID8gMSA6IDA7XG59XG5cbi8vQ291bnRzIG51bWJlciBvZiBiaXRzXG5leHBvcnRzLnBvcENvdW50ID0gZnVuY3Rpb24odikge1xuICB2ID0gdiAtICgodiA+Pj4gMSkgJiAweDU1NTU1NTU1KTtcbiAgdiA9ICh2ICYgMHgzMzMzMzMzMykgKyAoKHYgPj4+IDIpICYgMHgzMzMzMzMzMyk7XG4gIHJldHVybiAoKHYgKyAodiA+Pj4gNCkgJiAweEYwRjBGMEYpICogMHgxMDEwMTAxKSA+Pj4gMjQ7XG59XG5cbi8vQ291bnRzIG51bWJlciBvZiB0cmFpbGluZyB6ZXJvc1xuZnVuY3Rpb24gY291bnRUcmFpbGluZ1plcm9zKHYpIHtcbiAgdmFyIGMgPSAzMjtcbiAgdiAmPSAtdjtcbiAgaWYgKHYpIGMtLTtcbiAgaWYgKHYgJiAweDAwMDBGRkZGKSBjIC09IDE2O1xuICBpZiAodiAmIDB4MDBGRjAwRkYpIGMgLT0gODtcbiAgaWYgKHYgJiAweDBGMEYwRjBGKSBjIC09IDQ7XG4gIGlmICh2ICYgMHgzMzMzMzMzMykgYyAtPSAyO1xuICBpZiAodiAmIDB4NTU1NTU1NTUpIGMgLT0gMTtcbiAgcmV0dXJuIGM7XG59XG5leHBvcnRzLmNvdW50VHJhaWxpbmdaZXJvcyA9IGNvdW50VHJhaWxpbmdaZXJvcztcblxuLy9Sb3VuZHMgdG8gbmV4dCBwb3dlciBvZiAyXG5leHBvcnRzLm5leHRQb3cyID0gZnVuY3Rpb24odikge1xuICB2ICs9IHYgPT09IDA7XG4gIC0tdjtcbiAgdiB8PSB2ID4+PiAxO1xuICB2IHw9IHYgPj4+IDI7XG4gIHYgfD0gdiA+Pj4gNDtcbiAgdiB8PSB2ID4+PiA4O1xuICB2IHw9IHYgPj4+IDE2O1xuICByZXR1cm4gdiArIDE7XG59XG5cbi8vUm91bmRzIGRvd24gdG8gcHJldmlvdXMgcG93ZXIgb2YgMlxuZXhwb3J0cy5wcmV2UG93MiA9IGZ1bmN0aW9uKHYpIHtcbiAgdiB8PSB2ID4+PiAxO1xuICB2IHw9IHYgPj4+IDI7XG4gIHYgfD0gdiA+Pj4gNDtcbiAgdiB8PSB2ID4+PiA4O1xuICB2IHw9IHYgPj4+IDE2O1xuICByZXR1cm4gdiAtICh2Pj4+MSk7XG59XG5cbi8vQ29tcHV0ZXMgcGFyaXR5IG9mIHdvcmRcbmV4cG9ydHMucGFyaXR5ID0gZnVuY3Rpb24odikge1xuICB2IF49IHYgPj4+IDE2O1xuICB2IF49IHYgPj4+IDg7XG4gIHYgXj0gdiA+Pj4gNDtcbiAgdiAmPSAweGY7XG4gIHJldHVybiAoMHg2OTk2ID4+PiB2KSAmIDE7XG59XG5cbnZhciBSRVZFUlNFX1RBQkxFID0gbmV3IEFycmF5KDI1Nik7XG5cbihmdW5jdGlvbih0YWIpIHtcbiAgZm9yKHZhciBpPTA7IGk8MjU2OyArK2kpIHtcbiAgICB2YXIgdiA9IGksIHIgPSBpLCBzID0gNztcbiAgICBmb3IgKHYgPj4+PSAxOyB2OyB2ID4+Pj0gMSkge1xuICAgICAgciA8PD0gMTtcbiAgICAgIHIgfD0gdiAmIDE7XG4gICAgICAtLXM7XG4gICAgfVxuICAgIHRhYltpXSA9IChyIDw8IHMpICYgMHhmZjtcbiAgfVxufSkoUkVWRVJTRV9UQUJMRSk7XG5cbi8vUmV2ZXJzZSBiaXRzIGluIGEgMzIgYml0IHdvcmRcbmV4cG9ydHMucmV2ZXJzZSA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuICAoUkVWRVJTRV9UQUJMRVsgdiAgICAgICAgICYgMHhmZl0gPDwgMjQpIHxcbiAgICAgICAgICAoUkVWRVJTRV9UQUJMRVsodiA+Pj4gOCkgICYgMHhmZl0gPDwgMTYpIHxcbiAgICAgICAgICAoUkVWRVJTRV9UQUJMRVsodiA+Pj4gMTYpICYgMHhmZl0gPDwgOCkgIHxcbiAgICAgICAgICAgUkVWRVJTRV9UQUJMRVsodiA+Pj4gMjQpICYgMHhmZl07XG59XG5cbi8vSW50ZXJsZWF2ZSBiaXRzIG9mIDIgY29vcmRpbmF0ZXMgd2l0aCAxNiBiaXRzLiAgVXNlZnVsIGZvciBmYXN0IHF1YWR0cmVlIGNvZGVzXG5leHBvcnRzLmludGVybGVhdmUyID0gZnVuY3Rpb24oeCwgeSkge1xuICB4ICY9IDB4RkZGRjtcbiAgeCA9ICh4IHwgKHggPDwgOCkpICYgMHgwMEZGMDBGRjtcbiAgeCA9ICh4IHwgKHggPDwgNCkpICYgMHgwRjBGMEYwRjtcbiAgeCA9ICh4IHwgKHggPDwgMikpICYgMHgzMzMzMzMzMztcbiAgeCA9ICh4IHwgKHggPDwgMSkpICYgMHg1NTU1NTU1NTtcblxuICB5ICY9IDB4RkZGRjtcbiAgeSA9ICh5IHwgKHkgPDwgOCkpICYgMHgwMEZGMDBGRjtcbiAgeSA9ICh5IHwgKHkgPDwgNCkpICYgMHgwRjBGMEYwRjtcbiAgeSA9ICh5IHwgKHkgPDwgMikpICYgMHgzMzMzMzMzMztcbiAgeSA9ICh5IHwgKHkgPDwgMSkpICYgMHg1NTU1NTU1NTtcblxuICByZXR1cm4geCB8ICh5IDw8IDEpO1xufVxuXG4vL0V4dHJhY3RzIHRoZSBudGggaW50ZXJsZWF2ZWQgY29tcG9uZW50XG5leHBvcnRzLmRlaW50ZXJsZWF2ZTIgPSBmdW5jdGlvbih2LCBuKSB7XG4gIHYgPSAodiA+Pj4gbikgJiAweDU1NTU1NTU1O1xuICB2ID0gKHYgfCAodiA+Pj4gMSkpICAmIDB4MzMzMzMzMzM7XG4gIHYgPSAodiB8ICh2ID4+PiAyKSkgICYgMHgwRjBGMEYwRjtcbiAgdiA9ICh2IHwgKHYgPj4+IDQpKSAgJiAweDAwRkYwMEZGO1xuICB2ID0gKHYgfCAodiA+Pj4gMTYpKSAmIDB4MDAwRkZGRjtcbiAgcmV0dXJuICh2IDw8IDE2KSA+PiAxNjtcbn1cblxuXG4vL0ludGVybGVhdmUgYml0cyBvZiAzIGNvb3JkaW5hdGVzLCBlYWNoIHdpdGggMTAgYml0cy4gIFVzZWZ1bCBmb3IgZmFzdCBvY3RyZWUgY29kZXNcbmV4cG9ydHMuaW50ZXJsZWF2ZTMgPSBmdW5jdGlvbih4LCB5LCB6KSB7XG4gIHggJj0gMHgzRkY7XG4gIHggID0gKHggfCAoeDw8MTYpKSAmIDQyNzgxOTAzMzU7XG4gIHggID0gKHggfCAoeDw8OCkpICAmIDI1MTcxOTY5NTtcbiAgeCAgPSAoeCB8ICh4PDw0KSkgICYgMzI3MjM1NjAzNTtcbiAgeCAgPSAoeCB8ICh4PDwyKSkgICYgMTIyNzEzMzUxMztcblxuICB5ICY9IDB4M0ZGO1xuICB5ICA9ICh5IHwgKHk8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB5ICA9ICh5IHwgKHk8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHkgID0gKHkgfCAoeTw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHkgID0gKHkgfCAoeTw8MikpICAmIDEyMjcxMzM1MTM7XG4gIHggfD0gKHkgPDwgMSk7XG4gIFxuICB6ICY9IDB4M0ZGO1xuICB6ICA9ICh6IHwgKHo8PDE2KSkgJiA0Mjc4MTkwMzM1O1xuICB6ICA9ICh6IHwgKHo8PDgpKSAgJiAyNTE3MTk2OTU7XG4gIHogID0gKHogfCAoejw8NCkpICAmIDMyNzIzNTYwMzU7XG4gIHogID0gKHogfCAoejw8MikpICAmIDEyMjcxMzM1MTM7XG4gIFxuICByZXR1cm4geCB8ICh6IDw8IDIpO1xufVxuXG4vL0V4dHJhY3RzIG50aCBpbnRlcmxlYXZlZCBjb21wb25lbnQgb2YgYSAzLXR1cGxlXG5leHBvcnRzLmRlaW50ZXJsZWF2ZTMgPSBmdW5jdGlvbih2LCBuKSB7XG4gIHYgPSAodiA+Pj4gbikgICAgICAgJiAxMjI3MTMzNTEzO1xuICB2ID0gKHYgfCAodj4+PjIpKSAgICYgMzI3MjM1NjAzNTtcbiAgdiA9ICh2IHwgKHY+Pj40KSkgICAmIDI1MTcxOTY5NTtcbiAgdiA9ICh2IHwgKHY+Pj44KSkgICAmIDQyNzgxOTAzMzU7XG4gIHYgPSAodiB8ICh2Pj4+MTYpKSAgJiAweDNGRjtcbiAgcmV0dXJuICh2PDwyMik+PjIyO1xufVxuXG4vL0NvbXB1dGVzIG5leHQgY29tYmluYXRpb24gaW4gY29sZXhpY29ncmFwaGljIG9yZGVyICh0aGlzIGlzIG1pc3Rha2VubHkgY2FsbGVkIG5leHRQZXJtdXRhdGlvbiBvbiB0aGUgYml0IHR3aWRkbGluZyBoYWNrcyBwYWdlKVxuZXhwb3J0cy5uZXh0Q29tYmluYXRpb24gPSBmdW5jdGlvbih2KSB7XG4gIHZhciB0ID0gdiB8ICh2IC0gMSk7XG4gIHJldHVybiAodCArIDEpIHwgKCgofnQgJiAtfnQpIC0gMSkgPj4+IChjb3VudFRyYWlsaW5nWmVyb3ModikgKyAxKSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgYml0cyA9IHJlcXVpcmUoJ2JpdC10d2lkZGxlJylcbnZhciBkdXAgPSByZXF1aXJlKCdkdXAnKVxuXG4vL0xlZ2FjeSBwb29sIHN1cHBvcnRcbmlmKCFnbG9iYWwuX19UWVBFREFSUkFZX1BPT0wpIHtcbiAgZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MID0ge1xuICAgICAgVUlOVDggICA6IGR1cChbMzIsIDBdKVxuICAgICwgVUlOVDE2ICA6IGR1cChbMzIsIDBdKVxuICAgICwgVUlOVDMyICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UOCAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UMTYgICA6IGR1cChbMzIsIDBdKVxuICAgICwgSU5UMzIgICA6IGR1cChbMzIsIDBdKVxuICAgICwgRkxPQVQgICA6IGR1cChbMzIsIDBdKVxuICAgICwgRE9VQkxFICA6IGR1cChbMzIsIDBdKVxuICAgICwgREFUQSAgICA6IGR1cChbMzIsIDBdKVxuICAgICwgVUlOVDhDICA6IGR1cChbMzIsIDBdKVxuICAgICwgQlVGRkVSICA6IGR1cChbMzIsIDBdKVxuICB9XG59XG5cbnZhciBoYXNVaW50OEMgPSAodHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSAhPT0gJ3VuZGVmaW5lZCdcbnZhciBQT09MID0gZ2xvYmFsLl9fVFlQRURBUlJBWV9QT09MXG5cbi8vVXBncmFkZSBwb29sXG5pZighUE9PTC5VSU5UOEMpIHtcbiAgUE9PTC5VSU5UOEMgPSBkdXAoWzMyLCAwXSlcbn1cbmlmKCFQT09MLkJVRkZFUikge1xuICBQT09MLkJVRkZFUiA9IGR1cChbMzIsIDBdKVxufVxuXG4vL05ldyB0ZWNobmlxdWU6IE9ubHkgYWxsb2NhdGUgZnJvbSBBcnJheUJ1ZmZlclZpZXcgYW5kIEJ1ZmZlclxudmFyIERBVEEgICAgPSBQT09MLkRBVEFcbiAgLCBCVUZGRVIgID0gUE9PTC5CVUZGRVJcblxuZXhwb3J0cy5mcmVlID0gZnVuY3Rpb24gZnJlZShhcnJheSkge1xuICBpZihCdWZmZXIuaXNCdWZmZXIoYXJyYXkpKSB7XG4gICAgQlVGRkVSW2JpdHMubG9nMihhcnJheS5sZW5ndGgpXS5wdXNoKGFycmF5KVxuICB9IGVsc2Uge1xuICAgIGlmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnJheSkgIT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICAgIGFycmF5ID0gYXJyYXkuYnVmZmVyXG4gICAgfVxuICAgIGlmKCFhcnJheSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBuID0gYXJyYXkubGVuZ3RoIHx8IGFycmF5LmJ5dGVMZW5ndGhcbiAgICB2YXIgbG9nX24gPSBiaXRzLmxvZzIobil8MFxuICAgIERBVEFbbG9nX25dLnB1c2goYXJyYXkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZnJlZUFycmF5QnVmZmVyKGJ1ZmZlcikge1xuICBpZighYnVmZmVyKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG4gPSBidWZmZXIubGVuZ3RoIHx8IGJ1ZmZlci5ieXRlTGVuZ3RoXG4gIHZhciBsb2dfbiA9IGJpdHMubG9nMihuKVxuICBEQVRBW2xvZ19uXS5wdXNoKGJ1ZmZlcilcbn1cblxuZnVuY3Rpb24gZnJlZVR5cGVkQXJyYXkoYXJyYXkpIHtcbiAgZnJlZUFycmF5QnVmZmVyKGFycmF5LmJ1ZmZlcilcbn1cblxuZXhwb3J0cy5mcmVlVWludDggPVxuZXhwb3J0cy5mcmVlVWludDE2ID1cbmV4cG9ydHMuZnJlZVVpbnQzMiA9XG5leHBvcnRzLmZyZWVJbnQ4ID1cbmV4cG9ydHMuZnJlZUludDE2ID1cbmV4cG9ydHMuZnJlZUludDMyID1cbmV4cG9ydHMuZnJlZUZsb2F0MzIgPSBcbmV4cG9ydHMuZnJlZUZsb2F0ID1cbmV4cG9ydHMuZnJlZUZsb2F0NjQgPSBcbmV4cG9ydHMuZnJlZURvdWJsZSA9IFxuZXhwb3J0cy5mcmVlVWludDhDbGFtcGVkID0gXG5leHBvcnRzLmZyZWVEYXRhVmlldyA9IGZyZWVUeXBlZEFycmF5XG5cbmV4cG9ydHMuZnJlZUFycmF5QnVmZmVyID0gZnJlZUFycmF5QnVmZmVyXG5cbmV4cG9ydHMuZnJlZUJ1ZmZlciA9IGZ1bmN0aW9uIGZyZWVCdWZmZXIoYXJyYXkpIHtcbiAgQlVGRkVSW2JpdHMubG9nMihhcnJheS5sZW5ndGgpXS5wdXNoKGFycmF5KVxufVxuXG5leHBvcnRzLm1hbGxvYyA9IGZ1bmN0aW9uIG1hbGxvYyhuLCBkdHlwZSkge1xuICBpZihkdHlwZSA9PT0gdW5kZWZpbmVkIHx8IGR0eXBlID09PSAnYXJyYXlidWZmZXInKSB7XG4gICAgcmV0dXJuIG1hbGxvY0FycmF5QnVmZmVyKG4pXG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoKGR0eXBlKSB7XG4gICAgICBjYXNlICd1aW50OCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50OChuKVxuICAgICAgY2FzZSAndWludDE2JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQxNihuKVxuICAgICAgY2FzZSAndWludDMyJzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY1VpbnQzMihuKVxuICAgICAgY2FzZSAnaW50OCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQ4KG4pXG4gICAgICBjYXNlICdpbnQxNic6XG4gICAgICAgIHJldHVybiBtYWxsb2NJbnQxNihuKVxuICAgICAgY2FzZSAnaW50MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jSW50MzIobilcbiAgICAgIGNhc2UgJ2Zsb2F0JzpcbiAgICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgICByZXR1cm4gbWFsbG9jRmxvYXQobilcbiAgICAgIGNhc2UgJ2RvdWJsZSc6XG4gICAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgICAgcmV0dXJuIG1hbGxvY0RvdWJsZShuKVxuICAgICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICAgIHJldHVybiBtYWxsb2NVaW50OENsYW1wZWQobilcbiAgICAgIGNhc2UgJ2J1ZmZlcic6XG4gICAgICAgIHJldHVybiBtYWxsb2NCdWZmZXIobilcbiAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgY2FzZSAnZGF0YXZpZXcnOlxuICAgICAgICByZXR1cm4gbWFsbG9jRGF0YVZpZXcobilcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gbWFsbG9jQXJyYXlCdWZmZXIobikge1xuICB2YXIgbiA9IGJpdHMubmV4dFBvdzIobilcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIHZhciBkID0gREFUQVtsb2dfbl1cbiAgaWYoZC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGQucG9wKClcbiAgfVxuICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKG4pXG59XG5leHBvcnRzLm1hbGxvY0FycmF5QnVmZmVyID0gbWFsbG9jQXJyYXlCdWZmZXJcblxuZnVuY3Rpb24gbWFsbG9jVWludDgobikge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY1VpbnQ4ID0gbWFsbG9jVWludDhcblxuZnVuY3Rpb24gbWFsbG9jVWludDE2KG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50MTZBcnJheShtYWxsb2NBcnJheUJ1ZmZlcigyKm4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50MTYgPSBtYWxsb2NVaW50MTZcblxuZnVuY3Rpb24gbWFsbG9jVWludDMyKG4pIHtcbiAgcmV0dXJuIG5ldyBVaW50MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NVaW50MzIgPSBtYWxsb2NVaW50MzJcblxuZnVuY3Rpb24gbWFsbG9jSW50OChuKSB7XG4gIHJldHVybiBuZXcgSW50OEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQ4ID0gbWFsbG9jSW50OFxuXG5mdW5jdGlvbiBtYWxsb2NJbnQxNihuKSB7XG4gIHJldHVybiBuZXcgSW50MTZBcnJheShtYWxsb2NBcnJheUJ1ZmZlcigyKm4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NJbnQxNiA9IG1hbGxvY0ludDE2XG5cbmZ1bmN0aW9uIG1hbGxvY0ludDMyKG4pIHtcbiAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDQqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0ludDMyID0gbWFsbG9jSW50MzJcblxuZnVuY3Rpb24gbWFsbG9jRmxvYXQobikge1xuICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShtYWxsb2NBcnJheUJ1ZmZlcig0Km4pLCAwLCBuKVxufVxuZXhwb3J0cy5tYWxsb2NGbG9hdDMyID0gZXhwb3J0cy5tYWxsb2NGbG9hdCA9IG1hbGxvY0Zsb2F0XG5cbmZ1bmN0aW9uIG1hbGxvY0RvdWJsZShuKSB7XG4gIHJldHVybiBuZXcgRmxvYXQ2NEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKDgqbiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0Zsb2F0NjQgPSBleHBvcnRzLm1hbGxvY0RvdWJsZSA9IG1hbGxvY0RvdWJsZVxuXG5mdW5jdGlvbiBtYWxsb2NVaW50OENsYW1wZWQobikge1xuICBpZihoYXNVaW50OEMpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KG1hbGxvY0FycmF5QnVmZmVyKG4pLCAwLCBuKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBtYWxsb2NVaW50OChuKVxuICB9XG59XG5leHBvcnRzLm1hbGxvY1VpbnQ4Q2xhbXBlZCA9IG1hbGxvY1VpbnQ4Q2xhbXBlZFxuXG5mdW5jdGlvbiBtYWxsb2NEYXRhVmlldyhuKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcobWFsbG9jQXJyYXlCdWZmZXIobiksIDAsIG4pXG59XG5leHBvcnRzLm1hbGxvY0RhdGFWaWV3ID0gbWFsbG9jRGF0YVZpZXdcblxuZnVuY3Rpb24gbWFsbG9jQnVmZmVyKG4pIHtcbiAgbiA9IGJpdHMubmV4dFBvdzIobilcbiAgdmFyIGxvZ19uID0gYml0cy5sb2cyKG4pXG4gIHZhciBjYWNoZSA9IEJVRkZFUltsb2dfbl1cbiAgaWYoY2FjaGUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBjYWNoZS5wb3AoKVxuICB9XG4gIHJldHVybiBuZXcgQnVmZmVyKG4pXG59XG5leHBvcnRzLm1hbGxvY0J1ZmZlciA9IG1hbGxvY0J1ZmZlclxuXG5leHBvcnRzLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiBjbGVhckNhY2hlKCkge1xuICBmb3IodmFyIGk9MDsgaTwzMjsgKytpKSB7XG4gICAgUE9PTC5VSU5UOFtpXS5sZW5ndGggPSAwXG4gICAgUE9PTC5VSU5UMTZbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuVUlOVDMyW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLklOVDhbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuSU5UMTZbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuSU5UMzJbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuRkxPQVRbaV0ubGVuZ3RoID0gMFxuICAgIFBPT0wuRE9VQkxFW2ldLmxlbmd0aCA9IDBcbiAgICBQT09MLlVJTlQ4Q1tpXS5sZW5ndGggPSAwXG4gICAgREFUQVtpXS5sZW5ndGggPSAwXG4gICAgQlVGRkVSW2ldLmxlbmd0aCA9IDBcbiAgfVxufSIsIi8qXG4qIHVhLWRldmljZS10eXBlXG4qIHNwZWNpYWwgdGhhbmtzIHRvIHJndWVycmVpcm8gYXV0aG9yIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9yZ3VlcnJlaXJvL2V4cHJlc3MtZGV2aWNlXG4qIHdobyB0cmFja2VkIGRvd24gdGhlIGRldmljZSBtYXRjaGluZyBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2JqYW5rb3JkL0NhdGVnb3JpenJcbiogaSBuZWVkZWQgdG8gdXNlIHRoaXMgd2l0aG91dCB1c2luZyBleHByZXNzLiBpdHMgYSBzbWFsbCBsaWIgc28gaSBidW5kbGVkIGl0IHVwIGZvciBhbGwgdG8gZW5qb3kuXG4qL1xuXG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgZW1wdHlVc2VyQWdlbnREZXZpY2VUeXBlOiAnZGVza3RvcCcsXG4gIHVua25vd25Vc2VyQWdlbnREZXZpY2VUeXBlOiAncGhvbmUnLFxuICBib3RVc2VyQWdlbnREZXZpY2VUeXBlOiAnYm90J1xufTtcblxudmFyIGRldmljZXMgPSB7XG4gIHR2OlwidHZcIixcbiAgdGFibGV0OlwidGFibGV0XCIsXG4gIHBob25lOlwicGhvbmVcIixcbiAgZGVza3RvcDpcImRlc2t0b3BcIixcbiAgYm90OlwiYm90XCJcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVhLG9wdGlvbnMpe1xuICBvcHRpb25zID0gb3B0aW9uc3x8e307ICAgICAgICBcblxuICBpZiAoIXVhIHx8IHVhID09PSAnJykge1xuICAgIC8vIE5vIHVzZXIgYWdlbnQuXG4gICAgcmV0dXJuIG9wdGlvbnMuZW1wdHlVc2VyQWdlbnREZXZpY2VUeXBlfHxkZXZpY2VzLmRlc2t0b3A7XG4gIH1cblxuICBpZiAodWEubWF0Y2goL0dvb2dsZVRWfFNtYXJ0VFZ8SW50ZXJuZXQgVFZ8TmV0Q2FzdHxORVRUVnxBcHBsZVRWfGJveGVlfEt5bG98Um9rdXxETE5BRE9DfENFXFwtSFRNTC9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgYSBzbWFydCBUViAtIGh0dHA6Ly9nb28uZ2wvRm9jRGtcbiAgICByZXR1cm4gZGV2aWNlcy50djtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvWGJveHxQTEFZU1RBVElPTiAzfFdpaS9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgYSBUViBCYXNlZCBHYW1pbmcgQ29uc29sZVxuICAgIHJldHVybiBkZXZpY2VzLnR2O1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9pUChhfHJvKWQvaSkgfHwgKHVhLm1hdGNoKC90YWJsZXQvaSkgJiYgIXVhLm1hdGNoKC9SWC0zNC9pKSkgfHwgdWEubWF0Y2goL0ZPTElPL2kpKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhIFRhYmxldFxuICAgIHJldHVybiBkZXZpY2VzLnRhYmxldDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvTGludXgvaSkgJiYgdWEubWF0Y2goL0FuZHJvaWQvaSkgJiYgIXVhLm1hdGNoKC9GZW5uZWN8bW9iaXxIVEMgTWFnaWN8SFRDWDA2SFR8TmV4dXMgT25lfFNDLTAyQnxmb25lIDk0NS9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgYW4gQW5kcm9pZCBUYWJsZXRcbiAgICByZXR1cm4gZGV2aWNlcy50YWJsZXQ7XG4gIH0gZWxzZSBpZiAodWEubWF0Y2goL0tpbmRsZS9pKSB8fCAodWEubWF0Y2goL01hYyBPUy9pKSAmJiB1YS5tYXRjaCgvU2lsay9pKSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgS2luZGxlIG9yIEtpbmRsZSBGaXJlXG4gICAgcmV0dXJuIGRldmljZXMudGFibGV0O1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9HVC1QMTB8U0MtMDFDfFNIVy1NMTgwU3xTR0gtVDg0OXxTQ0gtSTgwMHxTSFctTTE4MEx8U1BILVAxMDB8U0dILUk5ODd8enQxODB8SFRDKCBGbHllcnxfRmx5ZXIpfFNwcmludCBBVFA1MXxWaWV3UGFkN3xwYW5kaWdpdGFsKHNwcm5vdmF8bm92YSl8SWRlb3MgUzd8RGVsbCBTdHJlYWsgN3xBZHZlbnQgVmVnYXxBMTAxSVR8QTcwQkhUfE1JRDcwMTV8TmV4dDJ8bm9vay9pKSB8fCAodWEubWF0Y2goL01CNTExL2kpICYmIHVhLm1hdGNoKC9SVVRFTS9pKSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgcHJlIEFuZHJvaWQgMy4wIFRhYmxldFxuICAgIHJldHVybiBkZXZpY2VzLnRhYmxldDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvQk9MVHxGZW5uZWN8SXJpc3xNYWVtb3xNaW5pbW98TW9iaXxtb3dzZXJ8TmV0RnJvbnR8Tm92YXJyYXxQcmlzbXxSWC0zNHxTa3lmaXJlfFRlYXJ8WFY2ODc1fFhWNjk3NXxHb29nbGUgV2lyZWxlc3MgVHJhbnNjb2Rlci9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgdW5pcXVlIG1vYmlsZSBVc2VyIEFnZW50XG4gICAgcmV0dXJuIGRldmljZXMucGhvbmU7XG4gIH0gZWxzZSBpZiAodWEubWF0Y2goL09wZXJhL2kpICYmIHVhLm1hdGNoKC9XaW5kb3dzIE5UIDUvaSkgJiYgdWEubWF0Y2goL0hUQ3xYZGF8TWluaXxWYXJpb3xTQU1TVU5HXFwtR1RcXC1pODAwMHxTQU1TVU5HXFwtU0dIXFwtaTkvaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGFuIG9kZCBPcGVyYSBVc2VyIEFnZW50IC0gaHR0cDovL2dvby5nbC9uSzkwS1xuICAgIHJldHVybiBkZXZpY2VzLnBob25lO1xuICB9IGVsc2UgaWYgKCh1YS5tYXRjaCgvV2luZG93cyAoTlR8WFB8TUV8OSkvKSAmJiAhdWEubWF0Y2goL1Bob25lL2kpKSAmJiAhdWEubWF0Y2goL0JvdHxTcGlkZXJ8aWFfYXJjaGl2ZXJ8TmV3c0dhdG9yL2kpIHx8IHVhLm1hdGNoKC9XaW4oID85fE5UKS9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgV2luZG93cyBEZXNrdG9wXG4gICAgcmV0dXJuIGRldmljZXMuZGVza3RvcDtcbiAgfSBlbHNlIGlmICh1YS5tYXRjaCgvTWFjaW50b3NofFBvd2VyUEMvaSkgJiYgIXVhLm1hdGNoKC9TaWxrL2kpKSB7XG4gICAgLy8gaWYgYWdlbnQgaXMgTWFjIERlc2t0b3BcbiAgICByZXR1cm4gZGV2aWNlcy5kZXNrdG9wO1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9MaW51eC9pKSAmJiB1YS5tYXRjaCgvWDExL2kpICYmICF1YS5tYXRjaCgvQ2hhcmxvdHRlL2kpKSB7XG4gICAgLy8gaWYgdXNlciBhZ2VudCBpcyBhIExpbnV4IERlc2t0b3BcbiAgICByZXR1cm4gZGV2aWNlcy5kZXNrdG9wO1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9Dck9TLykpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgQ2hyb21lIEJvb2tcbiAgICByZXR1cm4gZGV2aWNlcy5kZXNrdG9wO1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9Tb2xhcmlzfFN1bk9TfEJTRC9pKSkge1xuICAgIC8vIGlmIHVzZXIgYWdlbnQgaXMgYSBTb2xhcmlzLCBTdW5PUywgQlNEIERlc2t0b3BcbiAgICByZXR1cm4gZGV2aWNlcy5kZXNrdG9wO1xuICB9IGVsc2UgaWYgKHVhLm1hdGNoKC9jdXJsfEJvdHxCLU8tVHxDcmF3bGVyfFNwaWRlcnxTcHlkZXJ8WWFob298aWFfYXJjaGl2ZXJ8Q292YXJpby1JRFN8ZmluZGxpbmtzfERhdGFwYXJrU2VhcmNofGxhcmJpbnxNZWRpYXBhcnRuZXJzLUdvb2dsZXxORy1TZWFyY2h8U25hcHB5fFRlb21hfEplZXZlc3xDaGFybG90dGV8TmV3c0dhdG9yfFRpbkV5ZXxDZXJiZXJpYW58U2VhcmNoU2lnaHR8WmFvfFNjcnViYnl8UXNlZXJvfFB5Y1VSTHxQb21wb3N8b2VncHxTQklkZXJ8eW9vZ2xpRmV0Y2hBZ2VudHx5YWN5fHdlYmNvbGxhZ2V8VllVMnx2b3lhZ2VyfHVwZGF0ZWR8dHJ1d29HUFN8U3RhY2tSYW1ibGVyfFNxd29ybXxzaWxrfHNlbWFudGljZGlzY292ZXJ5fFNjb3V0SmV0fE55bWVzaXN8TmV0UmVzZWFyY2hTZXJ2ZXJ8TVZBQ2xpZW50fG1vZ2ltb2dpfE1ub2dvc2VhcmNofEFyYWNobW98QWNjb29uYXxob2xtZXN8aHRkaWd8aWNoaXJvfHdlYmlzfExpbmtXYWxrZXJ8bHdwLXRyaXZpYWwvaSkgJiYgIXVhLm1hdGNoKC9tb2JpbGV8UGxheXN0YXRpb24vaSkpIHtcbiAgICAvLyBpZiB1c2VyIGFnZW50IGlzIGEgQk9UL0NyYXdsZXIvU3BpZGVyXG4gICAgcmV0dXJuIG9wdGlvbnMuYm90VXNlckFnZW50RGV2aWNlVHlwZXx8ZGV2aWNlcy5ib3Q7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIGFzc3VtZSBpdCBpcyBhIG1vYmlsZSBEZXZpY2VcbiAgICByZXR1cm4gb3B0aW9ucy51bmtub3duVXNlckFnZW50RGV2aWNlVHlwZXx8ZGV2aWNlcy5waG9uZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cy5kZXZpY2VzID0gZGV2aWNlcztcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHRPcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4LCB2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pXG59IiwiLy8gQ29weXJpZ2h0IChDKSAyMDExIEdvb2dsZSBJbmMuXG4vL1xuLy8gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbi8vIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuLy9cbi8vIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuLy9cbi8vIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbi8vIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbi8vIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuLy8gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbi8qKlxuICogQGZpbGVvdmVydmlldyBJbnN0YWxsIGEgbGVha3kgV2Vha01hcCBlbXVsYXRpb24gb24gcGxhdGZvcm1zIHRoYXRcbiAqIGRvbid0IHByb3ZpZGUgYSBidWlsdC1pbiBvbmUuXG4gKlxuICogPHA+QXNzdW1lcyB0aGF0IGFuIEVTNSBwbGF0Zm9ybSB3aGVyZSwgaWYge0Bjb2RlIFdlYWtNYXB9IGlzXG4gKiBhbHJlYWR5IHByZXNlbnQsIHRoZW4gaXQgY29uZm9ybXMgdG8gdGhlIGFudGljaXBhdGVkIEVTNlxuICogc3BlY2lmaWNhdGlvbi4gVG8gcnVuIHRoaXMgZmlsZSBvbiBhbiBFUzUgb3IgYWxtb3N0IEVTNVxuICogaW1wbGVtZW50YXRpb24gd2hlcmUgdGhlIHtAY29kZSBXZWFrTWFwfSBzcGVjaWZpY2F0aW9uIGRvZXMgbm90XG4gKiBxdWl0ZSBjb25mb3JtLCBydW4gPGNvZGU+cmVwYWlyRVM1LmpzPC9jb2RlPiBmaXJzdC5cbiAqXG4gKiA8cD5FdmVuIHRob3VnaCBXZWFrTWFwTW9kdWxlIGlzIG5vdCBnbG9iYWwsIHRoZSBsaW50ZXIgdGhpbmtzIGl0XG4gKiBpcywgd2hpY2ggaXMgd2h5IGl0IGlzIGluIHRoZSBvdmVycmlkZXMgbGlzdCBiZWxvdy5cbiAqXG4gKiA8cD5OT1RFOiBCZWZvcmUgdXNpbmcgdGhpcyBXZWFrTWFwIGVtdWxhdGlvbiBpbiBhIG5vbi1TRVNcbiAqIGVudmlyb25tZW50LCBzZWUgdGhlIG5vdGUgYmVsb3cgYWJvdXQgaGlkZGVuUmVjb3JkLlxuICpcbiAqIEBhdXRob3IgTWFyayBTLiBNaWxsZXJcbiAqIEByZXF1aXJlcyBjcnlwdG8sIEFycmF5QnVmZmVyLCBVaW50OEFycmF5LCBuYXZpZ2F0b3IsIGNvbnNvbGVcbiAqIEBvdmVycmlkZXMgV2Vha01hcCwgc2VzLCBQcm94eVxuICogQG92ZXJyaWRlcyBXZWFrTWFwTW9kdWxlXG4gKi9cblxuLyoqXG4gKiBUaGlzIHtAY29kZSBXZWFrTWFwfSBlbXVsYXRpb24gaXMgb2JzZXJ2YWJseSBlcXVpdmFsZW50IHRvIHRoZVxuICogRVMtSGFybW9ueSBXZWFrTWFwLCBidXQgd2l0aCBsZWFraWVyIGdhcmJhZ2UgY29sbGVjdGlvbiBwcm9wZXJ0aWVzLlxuICpcbiAqIDxwPkFzIHdpdGggdHJ1ZSBXZWFrTWFwcywgaW4gdGhpcyBlbXVsYXRpb24sIGEga2V5IGRvZXMgbm90XG4gKiByZXRhaW4gbWFwcyBpbmRleGVkIGJ5IHRoYXQga2V5IGFuZCAoY3J1Y2lhbGx5KSBhIG1hcCBkb2VzIG5vdFxuICogcmV0YWluIHRoZSBrZXlzIGl0IGluZGV4ZXMuIEEgbWFwIGJ5IGl0c2VsZiBhbHNvIGRvZXMgbm90IHJldGFpblxuICogdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhhdCBtYXAuXG4gKlxuICogPHA+SG93ZXZlciwgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggYSBrZXkgaW4gc29tZSBtYXAgYXJlXG4gKiByZXRhaW5lZCBzbyBsb25nIGFzIHRoYXQga2V5IGlzIHJldGFpbmVkIGFuZCB0aG9zZSBhc3NvY2lhdGlvbnMgYXJlXG4gKiBub3Qgb3ZlcnJpZGRlbi4gRm9yIGV4YW1wbGUsIHdoZW4gdXNlZCB0byBzdXBwb3J0IG1lbWJyYW5lcywgYWxsXG4gKiB2YWx1ZXMgZXhwb3J0ZWQgZnJvbSBhIGdpdmVuIG1lbWJyYW5lIHdpbGwgbGl2ZSBmb3IgdGhlIGxpZmV0aW1lXG4gKiB0aGV5IHdvdWxkIGhhdmUgaGFkIGluIHRoZSBhYnNlbmNlIG9mIGFuIGludGVycG9zZWQgbWVtYnJhbmUuIEV2ZW5cbiAqIHdoZW4gdGhlIG1lbWJyYW5lIGlzIHJldm9rZWQsIGFsbCBvYmplY3RzIHRoYXQgd291bGQgaGF2ZSBiZWVuXG4gKiByZWFjaGFibGUgaW4gdGhlIGFic2VuY2Ugb2YgcmV2b2NhdGlvbiB3aWxsIHN0aWxsIGJlIHJlYWNoYWJsZSwgYXNcbiAqIGZhciBhcyB0aGUgR0MgY2FuIHRlbGwsIGV2ZW4gdGhvdWdoIHRoZXkgd2lsbCBubyBsb25nZXIgYmUgcmVsZXZhbnRcbiAqIHRvIG9uZ29pbmcgY29tcHV0YXRpb24uXG4gKlxuICogPHA+VGhlIEFQSSBpbXBsZW1lbnRlZCBoZXJlIGlzIGFwcHJveGltYXRlbHkgdGhlIEFQSSBhcyBpbXBsZW1lbnRlZFxuICogaW4gRkY2LjBhMSBhbmQgYWdyZWVkIHRvIGJ5IE1hcmtNLCBBbmRyZWFzIEdhbCwgYW5kIERhdmUgSGVybWFuLFxuICogcmF0aGVyIHRoYW4gdGhlIG9mZmlhbGx5IGFwcHJvdmVkIHByb3Bvc2FsIHBhZ2UuIFRPRE8oZXJpZ2h0cyk6XG4gKiB1cGdyYWRlIHRoZSBlY21hc2NyaXB0IFdlYWtNYXAgcHJvcG9zYWwgcGFnZSB0byBleHBsYWluIHRoaXMgQVBJXG4gKiBjaGFuZ2UgYW5kIHByZXNlbnQgdG8gRWNtYVNjcmlwdCBjb21taXR0ZWUgZm9yIHRoZWlyIGFwcHJvdmFsLlxuICpcbiAqIDxwPlRoZSBmaXJzdCBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGVtdWxhdGlvbiBoZXJlIGFuZCB0aGF0IGluXG4gKiBGRjYuMGExIGlzIHRoZSBwcmVzZW5jZSBvZiBub24gZW51bWVyYWJsZSB7QGNvZGUgZ2V0X19fLCBoYXNfX18sXG4gKiBzZXRfX18sIGFuZCBkZWxldGVfX199IG1ldGhvZHMgb24gV2Vha01hcCBpbnN0YW5jZXMgdG8gcmVwcmVzZW50XG4gKiB3aGF0IHdvdWxkIGJlIHRoZSBoaWRkZW4gaW50ZXJuYWwgcHJvcGVydGllcyBvZiBhIHByaW1pdGl2ZVxuICogaW1wbGVtZW50YXRpb24uIFdoZXJlYXMgdGhlIEZGNi4wYTEgV2Vha01hcC5wcm90b3R5cGUgbWV0aG9kc1xuICogcmVxdWlyZSB0aGVpciB7QGNvZGUgdGhpc30gdG8gYmUgYSBnZW51aW5lIFdlYWtNYXAgaW5zdGFuY2UgKGkuZS4sXG4gKiBhbiBvYmplY3Qgb2Yge0Bjb2RlIFtbQ2xhc3NdXX0gXCJXZWFrTWFwfSksIHNpbmNlIHRoZXJlIGlzIG5vdGhpbmdcbiAqIHVuZm9yZ2VhYmxlIGFib3V0IHRoZSBwc2V1ZG8taW50ZXJuYWwgbWV0aG9kIG5hbWVzIHVzZWQgaGVyZSxcbiAqIG5vdGhpbmcgcHJldmVudHMgdGhlc2UgZW11bGF0ZWQgcHJvdG90eXBlIG1ldGhvZHMgZnJvbSBiZWluZ1xuICogYXBwbGllZCB0byBub24tV2Vha01hcHMgd2l0aCBwc2V1ZG8taW50ZXJuYWwgbWV0aG9kcyBvZiB0aGUgc2FtZVxuICogbmFtZXMuXG4gKlxuICogPHA+QW5vdGhlciBkaWZmZXJlbmNlIGlzIHRoYXQgb3VyIGVtdWxhdGVkIHtAY29kZVxuICogV2Vha01hcC5wcm90b3R5cGV9IGlzIG5vdCBpdHNlbGYgYSBXZWFrTWFwLiBBIHByb2JsZW0gd2l0aCB0aGVcbiAqIGN1cnJlbnQgRkY2LjBhMSBBUEkgaXMgdGhhdCBXZWFrTWFwLnByb3RvdHlwZSBpcyBpdHNlbGYgYSBXZWFrTWFwXG4gKiBwcm92aWRpbmcgYW1iaWVudCBtdXRhYmlsaXR5IGFuZCBhbiBhbWJpZW50IGNvbW11bmljYXRpb25zXG4gKiBjaGFubmVsLiBUaHVzLCBpZiBhIFdlYWtNYXAgaXMgYWxyZWFkeSBwcmVzZW50IGFuZCBoYXMgdGhpc1xuICogcHJvYmxlbSwgcmVwYWlyRVM1LmpzIHdyYXBzIGl0IGluIGEgc2FmZSB3cmFwcHBlciBpbiBvcmRlciB0b1xuICogcHJldmVudCBhY2Nlc3MgdG8gdGhpcyBjaGFubmVsLiAoU2VlXG4gKiBQQVRDSF9NVVRBQkxFX0ZST1pFTl9XRUFLTUFQX1BST1RPIGluIHJlcGFpckVTNS5qcykuXG4gKi9cblxuLyoqXG4gKiBJZiB0aGlzIGlzIGEgZnVsbCA8YSBocmVmPVxuICogXCJodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZXMtbGFiL3dpa2kvU2VjdXJlYWJsZUVTNVwiXG4gKiA+c2VjdXJlYWJsZSBFUzU8L2E+IHBsYXRmb3JtIGFuZCB0aGUgRVMtSGFybW9ueSB7QGNvZGUgV2Vha01hcH0gaXNcbiAqIGFic2VudCwgaW5zdGFsbCBhbiBhcHByb3hpbWF0ZSBlbXVsYXRpb24uXG4gKlxuICogPHA+SWYgV2Vha01hcCBpcyBwcmVzZW50IGJ1dCBjYW5ub3Qgc3RvcmUgc29tZSBvYmplY3RzLCB1c2Ugb3VyIGFwcHJveGltYXRlXG4gKiBlbXVsYXRpb24gYXMgYSB3cmFwcGVyLlxuICpcbiAqIDxwPklmIHRoaXMgaXMgYWxtb3N0IGEgc2VjdXJlYWJsZSBFUzUgcGxhdGZvcm0sIHRoZW4gV2Vha01hcC5qc1xuICogc2hvdWxkIGJlIHJ1biBhZnRlciByZXBhaXJFUzUuanMuXG4gKlxuICogPHA+U2VlIHtAY29kZSBXZWFrTWFwfSBmb3IgZG9jdW1lbnRhdGlvbiBvZiB0aGUgZ2FyYmFnZSBjb2xsZWN0aW9uXG4gKiBwcm9wZXJ0aWVzIG9mIHRoaXMgV2Vha01hcCBlbXVsYXRpb24uXG4gKi9cbihmdW5jdGlvbiBXZWFrTWFwTW9kdWxlKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBpZiAodHlwZW9mIHNlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VzLm9rICYmICFzZXMub2soKSkge1xuICAgIC8vIGFscmVhZHkgdG9vIGJyb2tlbiwgc28gZ2l2ZSB1cFxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbiBzb21lIGNhc2VzIChjdXJyZW50IEZpcmVmb3gpLCB3ZSBtdXN0IG1ha2UgYSBjaG9pY2UgYmV0d2VlZW4gYVxuICAgKiBXZWFrTWFwIHdoaWNoIGlzIGNhcGFibGUgb2YgdXNpbmcgYWxsIHZhcmlldGllcyBvZiBob3N0IG9iamVjdHMgYXNcbiAgICoga2V5cyBhbmQgb25lIHdoaWNoIGlzIGNhcGFibGUgb2Ygc2FmZWx5IHVzaW5nIHByb3hpZXMgYXMga2V5cy4gU2VlXG4gICAqIGNvbW1lbnRzIGJlbG93IGFib3V0IEhvc3RXZWFrTWFwIGFuZCBEb3VibGVXZWFrTWFwIGZvciBkZXRhaWxzLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uICh3aGljaCBpcyBhIGdsb2JhbCwgbm90IGV4cG9zZWQgdG8gZ3Vlc3RzKSBtYXJrcyBhXG4gICAqIFdlYWtNYXAgYXMgcGVybWl0dGVkIHRvIGRvIHdoYXQgaXMgbmVjZXNzYXJ5IHRvIGluZGV4IGFsbCBob3N0XG4gICAqIG9iamVjdHMsIGF0IHRoZSBjb3N0IG9mIG1ha2luZyBpdCB1bnNhZmUgZm9yIHByb3hpZXMuXG4gICAqXG4gICAqIERvIG5vdCBhcHBseSB0aGlzIGZ1bmN0aW9uIHRvIGFueXRoaW5nIHdoaWNoIGlzIG5vdCBhIGdlbnVpbmVcbiAgICogZnJlc2ggV2Vha01hcC5cbiAgICovXG4gIGZ1bmN0aW9uIHdlYWtNYXBQZXJtaXRIb3N0T2JqZWN0cyhtYXApIHtcbiAgICAvLyBpZGVudGl0eSBvZiBmdW5jdGlvbiB1c2VkIGFzIGEgc2VjcmV0IC0tIGdvb2QgZW5vdWdoIGFuZCBjaGVhcFxuICAgIGlmIChtYXAucGVybWl0SG9zdE9iamVjdHNfX18pIHtcbiAgICAgIG1hcC5wZXJtaXRIb3N0T2JqZWN0c19fXyh3ZWFrTWFwUGVybWl0SG9zdE9iamVjdHMpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHNlcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzZXMud2Vha01hcFBlcm1pdEhvc3RPYmplY3RzID0gd2Vha01hcFBlcm1pdEhvc3RPYmplY3RzO1xuICB9XG5cbiAgLy8gSUUgMTEgaGFzIG5vIFByb3h5IGJ1dCBoYXMgYSBicm9rZW4gV2Vha01hcCBzdWNoIHRoYXQgd2UgbmVlZCB0byBwYXRjaFxuICAvLyBpdCB1c2luZyBEb3VibGVXZWFrTWFwOyB0aGlzIGZsYWcgdGVsbHMgRG91YmxlV2Vha01hcCBzby5cbiAgdmFyIGRvdWJsZVdlYWtNYXBDaGVja1NpbGVudEZhaWx1cmUgPSBmYWxzZTtcblxuICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgZ29vZC1lbm91Z2ggV2Vha01hcCBpbXBsZW1lbnRhdGlvbiwgYW5kIGlmIHNvXG4gIC8vIGV4aXQgd2l0aG91dCByZXBsYWNpbmcgaXQuXG4gIGlmICh0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBIb3N0V2Vha01hcCA9IFdlYWtNYXA7XG4gICAgLy8gVGhlcmUgaXMgYSBXZWFrTWFwIC0tIGlzIGl0IGdvb2QgZW5vdWdoP1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgLy8gV2UncmUgbm93ICphc3N1bWluZyBub3QqLCBiZWNhdXNlIGFzIG9mIHRoaXMgd3JpdGluZyAoMjAxMy0wNS0wNilcbiAgICAgIC8vIEZpcmVmb3gncyBXZWFrTWFwcyBoYXZlIGEgbWlzY2VsbGFueSBvZiBvYmplY3RzIHRoZXkgd29uJ3QgYWNjZXB0LCBhbmRcbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gbWFrZSBhbiBleGhhdXN0aXZlIGxpc3QsIGFuZCB0ZXN0aW5nIGZvciBqdXN0IG9uZVxuICAgICAgLy8gd2lsbCBiZSBhIHByb2JsZW0gaWYgdGhhdCBvbmUgaXMgZml4ZWQgYWxvbmUgKGFzIHRoZXkgZGlkIGZvciBFdmVudCkuXG5cbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgcGxhdGZvcm0gdGhhdCB3ZSAqY2FuKiByZWxpYWJseSB0ZXN0IG9uLCBoZXJlJ3MgaG93IHRvXG4gICAgICAvLyBkbyBpdDpcbiAgICAgIC8vICB2YXIgcHJvYmxlbWF0aWMgPSAuLi4gO1xuICAgICAgLy8gIHZhciB0ZXN0SG9zdE1hcCA9IG5ldyBIb3N0V2Vha01hcCgpO1xuICAgICAgLy8gIHRyeSB7XG4gICAgICAvLyAgICB0ZXN0SG9zdE1hcC5zZXQocHJvYmxlbWF0aWMsIDEpOyAgLy8gRmlyZWZveCAyMCB3aWxsIHRocm93IGhlcmVcbiAgICAgIC8vICAgIGlmICh0ZXN0SG9zdE1hcC5nZXQocHJvYmxlbWF0aWMpID09PSAxKSB7XG4gICAgICAvLyAgICAgIHJldHVybjtcbiAgICAgIC8vICAgIH1cbiAgICAgIC8vICB9IGNhdGNoIChlKSB7fVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFIDExIGJ1ZzogV2Vha01hcHMgc2lsZW50bHkgZmFpbCB0byBzdG9yZSBmcm96ZW4gb2JqZWN0cy5cbiAgICAgIHZhciB0ZXN0TWFwID0gbmV3IEhvc3RXZWFrTWFwKCk7XG4gICAgICB2YXIgdGVzdE9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgICAgdGVzdE1hcC5zZXQodGVzdE9iamVjdCwgMSk7XG4gICAgICBpZiAodGVzdE1hcC5nZXQodGVzdE9iamVjdCkgIT09IDEpIHtcbiAgICAgICAgZG91YmxlV2Vha01hcENoZWNrU2lsZW50RmFpbHVyZSA9IHRydWU7XG4gICAgICAgIC8vIEZhbGwgdGhyb3VnaCB0byBpbnN0YWxsaW5nIG91ciBXZWFrTWFwLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciBnb3BuID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG4gIHZhciBkZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICB2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuICAvKipcbiAgICogU2VjdXJpdHkgZGVwZW5kcyBvbiBISURERU5fTkFNRSBiZWluZyBib3RoIDxpPnVuZ3Vlc3NhYmxlPC9pPiBhbmRcbiAgICogPGk+dW5kaXNjb3ZlcmFibGU8L2k+IGJ5IHVudHJ1c3RlZCBjb2RlLlxuICAgKlxuICAgKiA8cD5HaXZlbiB0aGUga25vd24gd2Vha25lc3NlcyBvZiBNYXRoLnJhbmRvbSgpIG9uIGV4aXN0aW5nXG4gICAqIGJyb3dzZXJzLCBpdCBkb2VzIG5vdCBnZW5lcmF0ZSB1bmd1ZXNzYWJpbGl0eSB3ZSBjYW4gYmUgY29uZmlkZW50XG4gICAqIG9mLlxuICAgKlxuICAgKiA8cD5JdCBpcyB0aGUgbW9ua2V5IHBhdGNoaW5nIGxvZ2ljIGluIHRoaXMgZmlsZSB0aGF0IGlzIGludGVuZGVkXG4gICAqIHRvIGVuc3VyZSB1bmRpc2NvdmVyYWJpbGl0eS4gVGhlIGJhc2ljIGlkZWEgaXMgdGhhdCB0aGVyZSBhcmVcbiAgICogdGhyZWUgZnVuZGFtZW50YWwgbWVhbnMgb2YgZGlzY292ZXJpbmcgcHJvcGVydGllcyBvZiBhbiBvYmplY3Q6XG4gICAqIFRoZSBmb3IvaW4gbG9vcCwgT2JqZWN0LmtleXMoKSwgYW5kIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCksXG4gICAqIGFzIHdlbGwgYXMgc29tZSBwcm9wb3NlZCBFUzYgZXh0ZW5zaW9ucyB0aGF0IGFwcGVhciBvbiBvdXJcbiAgICogd2hpdGVsaXN0LiBUaGUgZmlyc3QgdHdvIG9ubHkgZGlzY292ZXIgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLCBhbmRcbiAgICogd2Ugb25seSB1c2UgSElEREVOX05BTUUgdG8gbmFtZSBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5LCBzbyB0aGVcbiAgICogb25seSByZW1haW5pbmcgdGhyZWF0IHNob3VsZCBiZSBnZXRPd25Qcm9wZXJ0eU5hbWVzIGFuZCBzb21lXG4gICAqIHByb3Bvc2VkIEVTNiBleHRlbnNpb25zIHRoYXQgYXBwZWFyIG9uIG91ciB3aGl0ZWxpc3QuIFdlIG1vbmtleVxuICAgKiBwYXRjaCB0aGVtIHRvIHJlbW92ZSBISURERU5fTkFNRSBmcm9tIHRoZSBsaXN0IG9mIHByb3BlcnRpZXMgdGhleVxuICAgKiByZXR1cm5zLlxuICAgKlxuICAgKiA8cD5UT0RPKGVyaWdodHMpOiBPbiBhIHBsYXRmb3JtIHdpdGggYnVpbHQtaW4gUHJveGllcywgcHJveGllc1xuICAgKiBjb3VsZCBiZSB1c2VkIHRvIHRyYXAgYW5kIHRoZXJlYnkgZGlzY292ZXIgdGhlIEhJRERFTl9OQU1FLCBzbyB3ZVxuICAgKiBuZWVkIHRvIG1vbmtleSBwYXRjaCBQcm94eS5jcmVhdGUsIFByb3h5LmNyZWF0ZUZ1bmN0aW9uLCBldGMsIGluXG4gICAqIG9yZGVyIHRvIHdyYXAgdGhlIHByb3ZpZGVkIGhhbmRsZXIgd2l0aCB0aGUgcmVhbCBoYW5kbGVyIHdoaWNoXG4gICAqIGZpbHRlcnMgb3V0IGFsbCB0cmFwcyB1c2luZyBISURERU5fTkFNRS5cbiAgICpcbiAgICogPHA+VE9ETyhlcmlnaHRzKTogUmV2aXNpdCBNaWtlIFN0YXkncyBzdWdnZXN0aW9uIHRoYXQgd2UgdXNlIGFuXG4gICAqIGVuY2Fwc3VsYXRlZCBmdW5jdGlvbiBhdCBhIG5vdC1uZWNlc3NhcmlseS1zZWNyZXQgbmFtZSwgd2hpY2hcbiAgICogdXNlcyB0aGUgU3RpZWdsZXIgc2hhcmVkLXN0YXRlIHJpZ2h0cyBhbXBsaWZpY2F0aW9uIHBhdHRlcm4gdG9cbiAgICogcmV2ZWFsIHRoZSBhc3NvY2lhdGVkIHZhbHVlIG9ubHkgdG8gdGhlIFdlYWtNYXAgaW4gd2hpY2ggdGhpcyBrZXlcbiAgICogaXMgYXNzb2NpYXRlZCB3aXRoIHRoYXQgdmFsdWUuIFNpbmNlIG9ubHkgdGhlIGtleSByZXRhaW5zIHRoZVxuICAgKiBmdW5jdGlvbiwgdGhlIGZ1bmN0aW9uIGNhbiBhbHNvIHJlbWVtYmVyIHRoZSBrZXkgd2l0aG91dCBjYXVzaW5nXG4gICAqIGxlYWthZ2Ugb2YgdGhlIGtleSwgc28gdGhpcyBkb2Vzbid0IHZpb2xhdGUgb3VyIGdlbmVyYWwgZ2NcbiAgICogZ29hbHMuIEluIGFkZGl0aW9uLCBiZWNhdXNlIHRoZSBuYW1lIG5lZWQgbm90IGJlIGEgZ3VhcmRlZFxuICAgKiBzZWNyZXQsIHdlIGNvdWxkIGVmZmljaWVudGx5IGhhbmRsZSBjcm9zcy1mcmFtZSBmcm96ZW4ga2V5cy5cbiAgICovXG4gIHZhciBISURERU5fTkFNRV9QUkVGSVggPSAnd2Vha21hcDonO1xuICB2YXIgSElEREVOX05BTUUgPSBISURERU5fTkFNRV9QUkVGSVggKyAnaWRlbnQ6JyArIE1hdGgucmFuZG9tKCkgKyAnX19fJztcblxuICBpZiAodHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSAnZnVuY3Rpb24nICYmXG4gICAgICB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIHR5cGVvZiBVaW50OEFycmF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGFiID0gbmV3IEFycmF5QnVmZmVyKDI1KTtcbiAgICB2YXIgdThzID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXModThzKTtcbiAgICBISURERU5fTkFNRSA9IEhJRERFTl9OQU1FX1BSRUZJWCArICdyYW5kOicgK1xuICAgICAgQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHU4cywgZnVuY3Rpb24odTgpIHtcbiAgICAgICAgcmV0dXJuICh1OCAlIDM2KS50b1N0cmluZygzNik7XG4gICAgICB9KS5qb2luKCcnKSArICdfX18nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb3RIaWRkZW5OYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gIShcbiAgICAgICAgbmFtZS5zdWJzdHIoMCwgSElEREVOX05BTUVfUFJFRklYLmxlbmd0aCkgPT0gSElEREVOX05BTUVfUFJFRklYICYmXG4gICAgICAgIG5hbWUuc3Vic3RyKG5hbWUubGVuZ3RoIC0gMykgPT09ICdfX18nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb25rZXkgcGF0Y2ggZ2V0T3duUHJvcGVydHlOYW1lcyB0byBhdm9pZCByZXZlYWxpbmcgdGhlXG4gICAqIEhJRERFTl9OQU1FLlxuICAgKlxuICAgKiA8cD5UaGUgRVM1LjEgc3BlYyByZXF1aXJlcyBlYWNoIG5hbWUgdG8gYXBwZWFyIG9ubHkgb25jZSwgYnV0IGFzXG4gICAqIG9mIHRoaXMgd3JpdGluZywgdGhpcyByZXF1aXJlbWVudCBpcyBjb250cm92ZXJzaWFsIGZvciBFUzYsIHNvIHdlXG4gICAqIG1hZGUgdGhpcyBjb2RlIHJvYnVzdCBhZ2FpbnN0IHRoaXMgY2FzZS4gSWYgdGhlIHJlc3VsdGluZyBleHRyYVxuICAgKiBzZWFyY2ggdHVybnMgb3V0IHRvIGJlIGV4cGVuc2l2ZSwgd2UgY2FuIHByb2JhYmx5IHJlbGF4IHRoaXMgb25jZVxuICAgKiBFUzYgaXMgYWRlcXVhdGVseSBzdXBwb3J0ZWQgb24gYWxsIG1ham9yIGJyb3dzZXJzLCBpZmYgbm8gYnJvd3NlclxuICAgKiB2ZXJzaW9ucyB3ZSBzdXBwb3J0IGF0IHRoYXQgdGltZSBoYXZlIHJlbGF4ZWQgdGhpcyBjb25zdHJhaW50XG4gICAqIHdpdGhvdXQgcHJvdmlkaW5nIGJ1aWx0LWluIEVTNiBXZWFrTWFwcy5cbiAgICovXG4gIGRlZlByb3AoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlOYW1lcycsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmFrZUdldE93blByb3BlcnR5TmFtZXMob2JqKSB7XG4gICAgICByZXR1cm4gZ29wbihvYmopLmZpbHRlcihpc05vdEhpZGRlbk5hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIGdldFByb3BlcnR5TmFtZXMgaXMgbm90IGluIEVTNSBidXQgaXQgaXMgcHJvcG9zZWQgZm9yIEVTNiBhbmRcbiAgICogZG9lcyBhcHBlYXIgaW4gb3VyIHdoaXRlbGlzdCwgc28gd2UgbmVlZCB0byBjbGVhbiBpdCB0b28uXG4gICAqL1xuICBpZiAoJ2dldFByb3BlcnR5TmFtZXMnIGluIE9iamVjdCkge1xuICAgIHZhciBvcmlnaW5hbEdldFByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0UHJvcGVydHlOYW1lcztcbiAgICBkZWZQcm9wKE9iamVjdCwgJ2dldFByb3BlcnR5TmFtZXMnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZmFrZUdldFByb3BlcnR5TmFtZXMob2JqKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbEdldFByb3BlcnR5TmFtZXMob2JqKS5maWx0ZXIoaXNOb3RIaWRkZW5OYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiA8cD5UbyB0cmVhdCBvYmplY3RzIGFzIGlkZW50aXR5LWtleXMgd2l0aCByZWFzb25hYmxlIGVmZmljaWVuY3lcbiAgICogb24gRVM1IGJ5IGl0c2VsZiAoaS5lLiwgd2l0aG91dCBhbnkgb2JqZWN0LWtleWVkIGNvbGxlY3Rpb25zKSwgd2VcbiAgICogbmVlZCB0byBhZGQgYSBoaWRkZW4gcHJvcGVydHkgdG8gc3VjaCBrZXkgb2JqZWN0cyB3aGVuIHdlXG4gICAqIGNhbi4gVGhpcyByYWlzZXMgc2V2ZXJhbCBpc3N1ZXM6XG4gICAqIDx1bD5cbiAgICogPGxpPkFycmFuZ2luZyB0byBhZGQgdGhpcyBwcm9wZXJ0eSB0byBvYmplY3RzIGJlZm9yZSB3ZSBsb3NlIHRoZVxuICAgKiAgICAgY2hhbmNlLCBhbmRcbiAgICogPGxpPkhpZGluZyB0aGUgZXhpc3RlbmNlIG9mIHRoaXMgbmV3IHByb3BlcnR5IGZyb20gbW9zdFxuICAgKiAgICAgSmF2YVNjcmlwdCBjb2RlLlxuICAgKiA8bGk+UHJldmVudGluZyA8aT5jZXJ0aWZpY2F0aW9uIHRoZWZ0PC9pPiwgd2hlcmUgb25lIG9iamVjdCBpc1xuICAgKiAgICAgY3JlYXRlZCBmYWxzZWx5IGNsYWltaW5nIHRvIGJlIHRoZSBrZXkgb2YgYW4gYXNzb2NpYXRpb25cbiAgICogICAgIGFjdHVhbGx5IGtleWVkIGJ5IGFub3RoZXIgb2JqZWN0LlxuICAgKiA8bGk+UHJldmVudGluZyA8aT52YWx1ZSB0aGVmdDwvaT4sIHdoZXJlIHVudHJ1c3RlZCBjb2RlIHdpdGhcbiAgICogICAgIGFjY2VzcyB0byBhIGtleSBvYmplY3QgYnV0IG5vdCBhIHdlYWsgbWFwIG5ldmVydGhlbGVzc1xuICAgKiAgICAgb2J0YWlucyBhY2Nlc3MgdG8gdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCB0aGF0IGtleSBpbiB0aGF0XG4gICAqICAgICB3ZWFrIG1hcC5cbiAgICogPC91bD5cbiAgICogV2UgZG8gc28gYnlcbiAgICogPHVsPlxuICAgKiA8bGk+TWFraW5nIHRoZSBuYW1lIG9mIHRoZSBoaWRkZW4gcHJvcGVydHkgdW5ndWVzc2FibGUsIHNvIFwiW11cIlxuICAgKiAgICAgaW5kZXhpbmcsIHdoaWNoIHdlIGNhbm5vdCBpbnRlcmNlcHQsIGNhbm5vdCBiZSB1c2VkIHRvIGFjY2Vzc1xuICAgKiAgICAgYSBwcm9wZXJ0eSB3aXRob3V0IGtub3dpbmcgdGhlIG5hbWUuXG4gICAqIDxsaT5NYWtpbmcgdGhlIGhpZGRlbiBwcm9wZXJ0eSBub24tZW51bWVyYWJsZSwgc28gd2UgbmVlZCBub3RcbiAgICogICAgIHdvcnJ5IGFib3V0IGZvci1pbiBsb29wcyBvciB7QGNvZGUgT2JqZWN0LmtleXN9LFxuICAgKiA8bGk+bW9ua2V5IHBhdGNoaW5nIHRob3NlIHJlZmxlY3RpdmUgbWV0aG9kcyB0aGF0IHdvdWxkXG4gICAqICAgICBwcmV2ZW50IGV4dGVuc2lvbnMsIHRvIGFkZCB0aGlzIGhpZGRlbiBwcm9wZXJ0eSBmaXJzdCxcbiAgICogPGxpPm1vbmtleSBwYXRjaGluZyB0aG9zZSBtZXRob2RzIHRoYXQgd291bGQgcmV2ZWFsIHRoaXNcbiAgICogICAgIGhpZGRlbiBwcm9wZXJ0eS5cbiAgICogPC91bD5cbiAgICogVW5mb3J0dW5hdGVseSwgYmVjYXVzZSBvZiBzYW1lLW9yaWdpbiBpZnJhbWVzLCB3ZSBjYW5ub3QgcmVsaWFibHlcbiAgICogYWRkIHRoaXMgaGlkZGVuIHByb3BlcnR5IGJlZm9yZSBhbiBvYmplY3QgYmVjb21lc1xuICAgKiBub24tZXh0ZW5zaWJsZS4gSW5zdGVhZCwgaWYgd2UgZW5jb3VudGVyIGEgbm9uLWV4dGVuc2libGUgb2JqZWN0XG4gICAqIHdpdGhvdXQgYSBoaWRkZW4gcmVjb3JkIHRoYXQgd2UgY2FuIGRldGVjdCAod2hldGhlciBvciBub3QgaXQgaGFzXG4gICAqIGEgaGlkZGVuIHJlY29yZCBzdG9yZWQgdW5kZXIgYSBuYW1lIHNlY3JldCB0byB1cyksIHRoZW4gd2UganVzdFxuICAgKiB1c2UgdGhlIGtleSBvYmplY3QgaXRzZWxmIHRvIHJlcHJlc2VudCBpdHMgaWRlbnRpdHkgaW4gYSBicnV0ZVxuICAgKiBmb3JjZSBsZWFreSBtYXAgc3RvcmVkIGluIHRoZSB3ZWFrIG1hcCwgbG9zaW5nIGFsbCB0aGUgYWR2YW50YWdlc1xuICAgKiBvZiB3ZWFrbmVzcyBmb3IgdGhlc2UuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRIaWRkZW5SZWNvcmQoa2V5KSB7XG4gICAgaWYgKGtleSAhPT0gT2JqZWN0KGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBhbiBvYmplY3Q6ICcgKyBrZXkpO1xuICAgIH1cbiAgICB2YXIgaGlkZGVuUmVjb3JkID0ga2V5W0hJRERFTl9OQU1FXTtcbiAgICBpZiAoaGlkZGVuUmVjb3JkICYmIGhpZGRlblJlY29yZC5rZXkgPT09IGtleSkgeyByZXR1cm4gaGlkZGVuUmVjb3JkOyB9XG4gICAgaWYgKCFpc0V4dGVuc2libGUoa2V5KSkge1xuICAgICAgLy8gV2VhayBtYXAgbXVzdCBicnV0ZSBmb3JjZSwgYXMgZXhwbGFpbmVkIGluIGRvYy1jb21tZW50IGFib3ZlLlxuICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG5cbiAgICAvLyBUaGUgaGlkZGVuUmVjb3JkIGFuZCB0aGUga2V5IHBvaW50IGRpcmVjdGx5IGF0IGVhY2ggb3RoZXIsIHZpYVxuICAgIC8vIHRoZSBcImtleVwiIGFuZCBISURERU5fTkFNRSBwcm9wZXJ0aWVzIHJlc3BlY3RpdmVseS4gVGhlIGtleVxuICAgIC8vIGZpZWxkIGlzIGZvciBxdWlja2x5IHZlcmlmeWluZyB0aGF0IHRoaXMgaGlkZGVuIHJlY29yZCBpcyBhblxuICAgIC8vIG93biBwcm9wZXJ0eSwgbm90IGEgaGlkZGVuIHJlY29yZCBmcm9tIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG4gICAgLy9cbiAgICAvLyBOT1RFOiBCZWNhdXNlIHRoaXMgV2Vha01hcCBlbXVsYXRpb24gaXMgbWVhbnQgb25seSBmb3Igc3lzdGVtcyBsaWtlXG4gICAgLy8gU0VTIHdoZXJlIE9iamVjdC5wcm90b3R5cGUgaXMgZnJvemVuIHdpdGhvdXQgYW55IG51bWVyaWNcbiAgICAvLyBwcm9wZXJ0aWVzLCBpdCBpcyBvayB0byB1c2UgYW4gb2JqZWN0IGxpdGVyYWwgZm9yIHRoZSBoaWRkZW5SZWNvcmQuXG4gICAgLy8gVGhpcyBoYXMgdHdvIGFkdmFudGFnZXM6XG4gICAgLy8gKiBJdCBpcyBtdWNoIGZhc3RlciBpbiBhIHBlcmZvcm1hbmNlIGNyaXRpY2FsIHBsYWNlXG4gICAgLy8gKiBJdCBhdm9pZHMgcmVseWluZyBvbiBPYmplY3QuY3JlYXRlKG51bGwpLCB3aGljaCBoYWQgYmVlblxuICAgIC8vICAgcHJvYmxlbWF0aWMgb24gQ2hyb21lIDI4LjAuMTQ4MC4wLiBTZWVcbiAgICAvLyAgIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWNhamEvaXNzdWVzL2RldGFpbD9pZD0xNjg3XG4gICAgaGlkZGVuUmVjb3JkID0geyBrZXk6IGtleSB9O1xuXG4gICAgLy8gV2hlbiB1c2luZyB0aGlzIFdlYWtNYXAgZW11bGF0aW9uIG9uIHBsYXRmb3JtcyB3aGVyZVxuICAgIC8vIE9iamVjdC5wcm90b3R5cGUgbWlnaHQgbm90IGJlIGZyb3plbiBhbmQgT2JqZWN0LmNyZWF0ZShudWxsKSBpc1xuICAgIC8vIHJlbGlhYmxlLCB1c2UgdGhlIGZvbGxvd2luZyB0d28gY29tbWVudGVkIG91dCBsaW5lcyBpbnN0ZWFkLlxuICAgIC8vIGhpZGRlblJlY29yZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgLy8gaGlkZGVuUmVjb3JkLmtleSA9IGtleTtcblxuICAgIC8vIFBsZWFzZSBjb250YWN0IHVzIGlmIHlvdSBuZWVkIHRoaXMgdG8gd29yayBvbiBwbGF0Zm9ybXMgd2hlcmVcbiAgICAvLyBPYmplY3QucHJvdG90eXBlIG1pZ2h0IG5vdCBiZSBmcm96ZW4gYW5kXG4gICAgLy8gT2JqZWN0LmNyZWF0ZShudWxsKSBtaWdodCBub3QgYmUgcmVsaWFibGUuXG5cbiAgICB0cnkge1xuICAgICAgZGVmUHJvcChrZXksIEhJRERFTl9OQU1FLCB7XG4gICAgICAgIHZhbHVlOiBoaWRkZW5SZWNvcmQsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGhpZGRlblJlY29yZDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gVW5kZXIgc29tZSBjaXJjdW1zdGFuY2VzLCBpc0V4dGVuc2libGUgc2VlbXMgdG8gbWlzcmVwb3J0IHdoZXRoZXJcbiAgICAgIC8vIHRoZSBISURERU5fTkFNRSBjYW4gYmUgZGVmaW5lZC5cbiAgICAgIC8vIFRoZSBjaXJjdW1zdGFuY2VzIGhhdmUgbm90IGJlZW4gaXNvbGF0ZWQsIGJ1dCBhdCBsZWFzdCBhZmZlY3RcbiAgICAgIC8vIE5vZGUuanMgdjAuMTAuMjYgb24gVHJhdmlzQ0kgLyBMaW51eCwgYnV0IG5vdCB0aGUgc2FtZSB2ZXJzaW9uIG9mXG4gICAgICAvLyBOb2RlLmpzIG9uIE9TIFguXG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNb25rZXkgcGF0Y2ggb3BlcmF0aW9ucyB0aGF0IHdvdWxkIG1ha2UgdGhlaXIgYXJndW1lbnRcbiAgICogbm9uLWV4dGVuc2libGUuXG4gICAqXG4gICAqIDxwPlRoZSBtb25rZXkgcGF0Y2hlZCB2ZXJzaW9ucyB0aHJvdyBhIFR5cGVFcnJvciBpZiB0aGVpclxuICAgKiBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0LCBzbyBpdCBzaG91bGQgb25seSBiZSBkb25lIHRvIGZ1bmN0aW9uc1xuICAgKiB0aGF0IHNob3VsZCB0aHJvdyBhIFR5cGVFcnJvciBhbnl3YXkgaWYgdGhlaXIgYXJndW1lbnQgaXMgbm90IGFuXG4gICAqIG9iamVjdC5cbiAgICovXG4gIChmdW5jdGlvbigpe1xuICAgIHZhciBvbGRGcmVlemUgPSBPYmplY3QuZnJlZXplO1xuICAgIGRlZlByb3AoT2JqZWN0LCAnZnJlZXplJywge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlkZW50aWZ5aW5nRnJlZXplKG9iaikge1xuICAgICAgICBnZXRIaWRkZW5SZWNvcmQob2JqKTtcbiAgICAgICAgcmV0dXJuIG9sZEZyZWV6ZShvYmopO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBvbGRTZWFsID0gT2JqZWN0LnNlYWw7XG4gICAgZGVmUHJvcChPYmplY3QsICdzZWFsJywge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlkZW50aWZ5aW5nU2VhbChvYmopIHtcbiAgICAgICAgZ2V0SGlkZGVuUmVjb3JkKG9iaik7XG4gICAgICAgIHJldHVybiBvbGRTZWFsKG9iaik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIG9sZFByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuICAgIGRlZlByb3AoT2JqZWN0LCAncHJldmVudEV4dGVuc2lvbnMnLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaWRlbnRpZnlpbmdQcmV2ZW50RXh0ZW5zaW9ucyhvYmopIHtcbiAgICAgICAgZ2V0SGlkZGVuUmVjb3JkKG9iaik7XG4gICAgICAgIHJldHVybiBvbGRQcmV2ZW50RXh0ZW5zaW9ucyhvYmopO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGNvbnN0RnVuYyhmdW5jKSB7XG4gICAgZnVuYy5wcm90b3R5cGUgPSBudWxsO1xuICAgIHJldHVybiBPYmplY3QuZnJlZXplKGZ1bmMpO1xuICB9XG5cbiAgdmFyIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nRG9uZSA9IGZhbHNlO1xuICBmdW5jdGlvbiBjYWxsZWRBc0Z1bmN0aW9uV2FybmluZygpIHtcbiAgICAvLyBGdXR1cmUgRVM2IFdlYWtNYXAgaXMgY3VycmVudGx5ICgyMDEzLTA5LTEwKSBleHBlY3RlZCB0byByZWplY3QgV2Vha01hcCgpXG4gICAgLy8gYnV0IHdlIHVzZWQgdG8gcGVybWl0IGl0IGFuZCBkbyBpdCBvdXJzZWx2ZXMsIHNvIHdhcm4gb25seS5cbiAgICBpZiAoIWNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nRG9uZSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nRG9uZSA9IHRydWU7XG4gICAgICBjb25zb2xlLndhcm4oJ1dlYWtNYXAgc2hvdWxkIGJlIGludm9rZWQgYXMgbmV3IFdlYWtNYXAoKSwgbm90ICcgK1xuICAgICAgICAgICdXZWFrTWFwKCkuIFRoaXMgd2lsbCBiZSBhbiBlcnJvciBpbiB0aGUgZnV0dXJlLicpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBuZXh0SWQgPSAwO1xuXG4gIHZhciBPdXJXZWFrTWFwID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE91cldlYWtNYXApKSB7ICAvLyBhcHByb3hpbWF0ZSB0ZXN0IGZvciBuZXcgLi4uKClcbiAgICAgIGNhbGxlZEFzRnVuY3Rpb25XYXJuaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIGN1cnJlbnRseSAoMTIvMjUvMjAxMikgbmV2ZXIgZW5jb3VudGVyaW5nIGFueSBwcmVtYXR1cmVseVxuICAgIC8vIG5vbi1leHRlbnNpYmxlIGtleXMuXG4gICAgdmFyIGtleXMgPSBbXTsgLy8gYnJ1dGUgZm9yY2UgZm9yIHByZW1hdHVyZWx5IG5vbi1leHRlbnNpYmxlIGtleXMuXG4gICAgdmFyIHZhbHVlcyA9IFtdOyAvLyBicnV0ZSBmb3JjZSBmb3IgY29ycmVzcG9uZGluZyB2YWx1ZXMuXG4gICAgdmFyIGlkID0gbmV4dElkKys7XG5cbiAgICBmdW5jdGlvbiBnZXRfX18oa2V5LCBvcHRfZGVmYXVsdCkge1xuICAgICAgdmFyIGluZGV4O1xuICAgICAgdmFyIGhpZGRlblJlY29yZCA9IGdldEhpZGRlblJlY29yZChrZXkpO1xuICAgICAgaWYgKGhpZGRlblJlY29yZCkge1xuICAgICAgICByZXR1cm4gaWQgaW4gaGlkZGVuUmVjb3JkID8gaGlkZGVuUmVjb3JkW2lkXSA6IG9wdF9kZWZhdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB2YWx1ZXNbaW5kZXhdIDogb3B0X2RlZmF1bHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzX19fKGtleSkge1xuICAgICAgdmFyIGhpZGRlblJlY29yZCA9IGdldEhpZGRlblJlY29yZChrZXkpO1xuICAgICAgaWYgKGhpZGRlblJlY29yZCkge1xuICAgICAgICByZXR1cm4gaWQgaW4gaGlkZGVuUmVjb3JkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGtleXMuaW5kZXhPZihrZXkpID49IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0X19fKGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBpbmRleDtcbiAgICAgIHZhciBoaWRkZW5SZWNvcmQgPSBnZXRIaWRkZW5SZWNvcmQoa2V5KTtcbiAgICAgIGlmIChoaWRkZW5SZWNvcmQpIHtcbiAgICAgICAgaGlkZGVuUmVjb3JkW2lkXSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2luY2Ugc29tZSBicm93c2VycyBwcmVlbXB0aXZlbHkgdGVybWluYXRlIHNsb3cgdHVybnMgYnV0XG4gICAgICAgICAgLy8gdGhlbiBjb250aW51ZSBjb21wdXRpbmcgd2l0aCBwcmVzdW1hYmx5IGNvcnJ1cHRlZCBoZWFwXG4gICAgICAgICAgLy8gc3RhdGUsIHdlIGhlcmUgZGVmZW5zaXZlbHkgZ2V0IGtleXMubGVuZ3RoIGZpcnN0IGFuZCB0aGVuXG4gICAgICAgICAgLy8gdXNlIGl0IHRvIHVwZGF0ZSBib3RoIHRoZSB2YWx1ZXMgYW5kIGtleXMgYXJyYXlzLCBrZWVwaW5nXG4gICAgICAgICAgLy8gdGhlbSBpbiBzeW5jLlxuICAgICAgICAgIGluZGV4ID0ga2V5cy5sZW5ndGg7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC8vIElmIHdlIGNyYXNoIGhlcmUsIHZhbHVlcyB3aWxsIGJlIG9uZSBsb25nZXIgdGhhbiBrZXlzLlxuICAgICAgICAgIGtleXNbaW5kZXhdID0ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVfX18oa2V5KSB7XG4gICAgICB2YXIgaGlkZGVuUmVjb3JkID0gZ2V0SGlkZGVuUmVjb3JkKGtleSk7XG4gICAgICB2YXIgaW5kZXgsIGxhc3RJbmRleDtcbiAgICAgIGlmIChoaWRkZW5SZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIGlkIGluIGhpZGRlblJlY29yZCAmJiBkZWxldGUgaGlkZGVuUmVjb3JkW2lkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZGV4ID0ga2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2luY2Ugc29tZSBicm93c2VycyBwcmVlbXB0aXZlbHkgdGVybWluYXRlIHNsb3cgdHVybnMgYnV0XG4gICAgICAgIC8vIHRoZW4gY29udGludWUgY29tcHV0aW5nIHdpdGggcG90ZW50aWFsbHkgY29ycnVwdGVkIGhlYXBcbiAgICAgICAgLy8gc3RhdGUsIHdlIGhlcmUgZGVmZW5zaXZlbHkgZ2V0IGtleXMubGVuZ3RoIGZpcnN0IGFuZCB0aGVuIHVzZVxuICAgICAgICAvLyBpdCB0byB1cGRhdGUgYm90aCB0aGUga2V5cyBhbmQgdGhlIHZhbHVlcyBhcnJheSwga2VlcGluZ1xuICAgICAgICAvLyB0aGVtIGluIHN5bmMuIFdlIHVwZGF0ZSB0aGUgdHdvIHdpdGggYW4gb3JkZXIgb2YgYXNzaWdubWVudHMsXG4gICAgICAgIC8vIHN1Y2ggdGhhdCBhbnkgcHJlZml4IG9mIHRoZXNlIGFzc2lnbm1lbnRzIHdpbGwgcHJlc2VydmUgdGhlXG4gICAgICAgIC8vIGtleS92YWx1ZSBjb3JyZXNwb25kZW5jZSwgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgZGVsZXRlLlxuICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBuZWVkcyB0byB3b3JrIGNvcnJlY3RseSB3aGVuIGluZGV4ID09PSBsYXN0SW5kZXguXG4gICAgICAgIGxhc3RJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgICAgICAga2V5c1tpbmRleF0gPSB2b2lkIDA7XG4gICAgICAgIC8vIElmIHdlIGNyYXNoIGhlcmUsIHRoZXJlJ3MgYSB2b2lkIDAgaW4gdGhlIGtleXMgYXJyYXksIGJ1dFxuICAgICAgICAvLyBubyBvcGVyYXRpb24gd2lsbCBjYXVzZSBhIFwia2V5cy5pbmRleE9mKHZvaWQgMClcIiwgc2luY2VcbiAgICAgICAgLy8gZ2V0SGlkZGVuUmVjb3JkKHZvaWQgMCkgd2lsbCBhbHdheXMgdGhyb3cgYW4gZXJyb3IgZmlyc3QuXG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZXNbbGFzdEluZGV4XTtcbiAgICAgICAgLy8gSWYgd2UgY3Jhc2ggaGVyZSwgdmFsdWVzW2luZGV4XSBjYW5ub3QgYmUgZm91bmQgaGVyZSxcbiAgICAgICAgLy8gYmVjYXVzZSBrZXlzW2luZGV4XSBpcyB2b2lkIDAuXG4gICAgICAgIGtleXNbaW5kZXhdID0ga2V5c1tsYXN0SW5kZXhdO1xuICAgICAgICAvLyBJZiBpbmRleCA9PT0gbGFzdEluZGV4IGFuZCB3ZSBjcmFzaCBoZXJlLCB0aGVuIGtleXNbaW5kZXhdXG4gICAgICAgIC8vIGlzIHN0aWxsIHZvaWQgMCwgc2luY2UgdGhlIGFsaWFzaW5nIGtpbGxlZCB0aGUgcHJldmlvdXMga2V5LlxuICAgICAgICBrZXlzLmxlbmd0aCA9IGxhc3RJbmRleDtcbiAgICAgICAgLy8gSWYgd2UgY3Jhc2ggaGVyZSwga2V5cyB3aWxsIGJlIG9uZSBzaG9ydGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICB2YWx1ZXMubGVuZ3RoID0gbGFzdEluZGV4O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShPdXJXZWFrTWFwLnByb3RvdHlwZSwge1xuICAgICAgZ2V0X19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoZ2V0X19fKSB9LFxuICAgICAgaGFzX19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoaGFzX19fKSB9LFxuICAgICAgc2V0X19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoc2V0X19fKSB9LFxuICAgICAgZGVsZXRlX19fOiB7IHZhbHVlOiBjb25zdEZ1bmMoZGVsZXRlX19fKSB9XG4gICAgfSk7XG4gIH07XG5cbiAgT3VyV2Vha01hcC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5wcm90b3R5cGUsIHtcbiAgICBnZXQ6IHtcbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJuIHRoZSB2YWx1ZSBtb3N0IHJlY2VudGx5IGFzc29jaWF0ZWQgd2l0aCBrZXksIG9yXG4gICAgICAgKiBvcHRfZGVmYXVsdCBpZiBub25lLlxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KGtleSwgb3B0X2RlZmF1bHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0X19fKGtleSwgb3B0X2RlZmF1bHQpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgIGhhczoge1xuICAgICAgLyoqXG4gICAgICAgKiBJcyB0aGVyZSBhIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBrZXkgaW4gdGhpcyBXZWFrTWFwP1xuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNfX18oa2V5KTtcbiAgICAgIH0sXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0sXG5cbiAgICBzZXQ6IHtcbiAgICAgIC8qKlxuICAgICAgICogQXNzb2NpYXRlIHZhbHVlIHdpdGgga2V5IGluIHRoaXMgV2Vha01hcCwgb3ZlcndyaXRpbmcgYW55XG4gICAgICAgKiBwcmV2aW91cyBhc3NvY2lhdGlvbiBpZiBwcmVzZW50LlxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0X19fKGtleSwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSxcblxuICAgICdkZWxldGUnOiB7XG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBhbnkgYXNzb2NpYXRpb24gZm9yIGtleSBpbiB0aGlzIFdlYWtNYXAsIHJldHVybmluZ1xuICAgICAgICogd2hldGhlciB0aGVyZSB3YXMgb25lLlxuICAgICAgICpcbiAgICAgICAqIDxwPk5vdGUgdGhhdCB0aGUgYm9vbGVhbiByZXR1cm4gaGVyZSBkb2VzIG5vdCB3b3JrIGxpa2UgdGhlXG4gICAgICAgKiB7QGNvZGUgZGVsZXRlfSBvcGVyYXRvci4gVGhlIHtAY29kZSBkZWxldGV9IG9wZXJhdG9yIHJldHVybnNcbiAgICAgICAqIHdoZXRoZXIgdGhlIGRlbGV0aW9uIHN1Y2NlZWRzIGF0IGJyaW5naW5nIGFib3V0IGEgc3RhdGUgaW5cbiAgICAgICAqIHdoaWNoIHRoZSBkZWxldGVkIHByb3BlcnR5IGlzIGFic2VudC4gVGhlIHtAY29kZSBkZWxldGV9XG4gICAgICAgKiBvcGVyYXRvciB0aGVyZWZvcmUgcmV0dXJucyB0cnVlIGlmIHRoZSBwcm9wZXJ0eSB3YXMgYWxyZWFkeVxuICAgICAgICogYWJzZW50LCB3aGVyZWFzIHRoaXMge0Bjb2RlIGRlbGV0ZX0gbWV0aG9kIHJldHVybnMgZmFsc2UgaWZcbiAgICAgICAqIHRoZSBhc3NvY2lhdGlvbiB3YXMgYWxyZWFkeSBhYnNlbnQuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZV9fXyhrZXkpO1xuICAgICAgfSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICBpZiAodHlwZW9mIEhvc3RXZWFrTWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gSWYgd2UgZ290IGhlcmUsIHRoZW4gdGhlIHBsYXRmb3JtIGhhcyBhIFdlYWtNYXAgYnV0IHdlIGFyZSBjb25jZXJuZWRcbiAgICAgIC8vIHRoYXQgaXQgbWF5IHJlZnVzZSB0byBzdG9yZSBzb21lIGtleSB0eXBlcy4gVGhlcmVmb3JlLCBtYWtlIGEgbWFwXG4gICAgICAvLyBpbXBsZW1lbnRhdGlvbiB3aGljaCBtYWtlcyB1c2Ugb2YgYm90aCBhcyBwb3NzaWJsZS5cblxuICAgICAgLy8gSW4gdGhpcyBtb2RlIHdlIGFyZSBhbHdheXMgdXNpbmcgZG91YmxlIG1hcHMsIHNvIHdlIGFyZSBub3QgcHJveHktc2FmZS5cbiAgICAgIC8vIFRoaXMgY29tYmluYXRpb24gZG9lcyBub3Qgb2NjdXIgaW4gYW55IGtub3duIGJyb3dzZXIsIGJ1dCB3ZSBoYWQgYmVzdFxuICAgICAgLy8gYmUgc2FmZS5cbiAgICAgIGlmIChkb3VibGVXZWFrTWFwQ2hlY2tTaWxlbnRGYWlsdXJlICYmIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgUHJveHkgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIERvdWJsZVdlYWtNYXAoKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBPdXJXZWFrTWFwKSkgeyAgLy8gYXBwcm94aW1hdGUgdGVzdCBmb3IgbmV3IC4uLigpXG4gICAgICAgICAgY2FsbGVkQXNGdW5jdGlvbldhcm5pbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZWZlcmFibGUsIHRydWx5IHdlYWsgbWFwLlxuICAgICAgICB2YXIgaG1hcCA9IG5ldyBIb3N0V2Vha01hcCgpO1xuXG4gICAgICAgIC8vIE91ciBoaWRkZW4tcHJvcGVydHktYmFzZWQgcHNldWRvLXdlYWstbWFwLiBMYXppbHkgaW5pdGlhbGl6ZWQgaW4gdGhlXG4gICAgICAgIC8vICdzZXQnIGltcGxlbWVudGF0aW9uOyB0aHVzIHdlIGNhbiBhdm9pZCBwZXJmb3JtaW5nIGV4dHJhIGxvb2t1cHMgaWZcbiAgICAgICAgLy8gd2Uga25vdyBhbGwgZW50cmllcyBhY3R1YWxseSBzdG9yZWQgYXJlIGVudGVyZWQgaW4gJ2htYXAnLlxuICAgICAgICB2YXIgb21hcCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBIaWRkZW4tcHJvcGVydHkgbWFwcyBhcmUgbm90IGNvbXBhdGlibGUgd2l0aCBwcm94aWVzIGJlY2F1c2UgcHJveGllc1xuICAgICAgICAvLyBjYW4gb2JzZXJ2ZSB0aGUgaGlkZGVuIG5hbWUgYW5kIGVpdGhlciBhY2NpZGVudGFsbHkgZXhwb3NlIGl0IG9yIGZhaWxcbiAgICAgICAgLy8gdG8gYWxsb3cgdGhlIGhpZGRlbiBwcm9wZXJ0eSB0byBiZSBzZXQuIFRoZXJlZm9yZSwgd2UgZG8gbm90IGFsbG93XG4gICAgICAgIC8vIGFyYml0cmFyeSBXZWFrTWFwcyB0byBzd2l0Y2ggdG8gdXNpbmcgaGlkZGVuIHByb3BlcnRpZXMsIGJ1dCBvbmx5XG4gICAgICAgIC8vIHRob3NlIHdoaWNoIG5lZWQgdGhlIGFiaWxpdHksIGFuZCB1bnByaXZpbGVnZWQgY29kZSBpcyBub3QgYWxsb3dlZFxuICAgICAgICAvLyB0byBzZXQgdGhlIGZsYWcuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIChFeGNlcHQgaW4gZG91YmxlV2Vha01hcENoZWNrU2lsZW50RmFpbHVyZSBtb2RlIGluIHdoaWNoIGNhc2Ugd2VcbiAgICAgICAgLy8gZGlzYWJsZSBwcm94aWVzLilcbiAgICAgICAgdmFyIGVuYWJsZVN3aXRjaGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRnZXQoa2V5LCBvcHRfZGVmYXVsdCkge1xuICAgICAgICAgIGlmIChvbWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gaG1hcC5oYXMoa2V5KSA/IGhtYXAuZ2V0KGtleSlcbiAgICAgICAgICAgICAgICA6IG9tYXAuZ2V0X19fKGtleSwgb3B0X2RlZmF1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaG1hcC5nZXQoa2V5LCBvcHRfZGVmYXVsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGhhcyhrZXkpIHtcbiAgICAgICAgICByZXR1cm4gaG1hcC5oYXMoa2V5KSB8fCAob21hcCA/IG9tYXAuaGFzX19fKGtleSkgOiBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHNldDtcbiAgICAgICAgaWYgKGRvdWJsZVdlYWtNYXBDaGVja1NpbGVudEZhaWx1cmUpIHtcbiAgICAgICAgICBkc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIWhtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgaWYgKCFvbWFwKSB7IG9tYXAgPSBuZXcgT3VyV2Vha01hcCgpOyB9XG4gICAgICAgICAgICAgIG9tYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGVuYWJsZVN3aXRjaGluZykge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbWFwKSB7IG9tYXAgPSBuZXcgT3VyV2Vha01hcCgpOyB9XG4gICAgICAgICAgICAgICAgb21hcC5zZXRfX18oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGhtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRkZWxldGUoa2V5KSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9ICEhaG1hcFsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgICBpZiAob21hcCkgeyByZXR1cm4gb21hcC5kZWxldGVfX18oa2V5KSB8fCByZXN1bHQ7IH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoT3VyV2Vha01hcC5wcm90b3R5cGUsIHtcbiAgICAgICAgICBnZXRfX186ICAgIHsgdmFsdWU6IGNvbnN0RnVuYyhkZ2V0KSB9LFxuICAgICAgICAgIGhhc19fXzogICAgeyB2YWx1ZTogY29uc3RGdW5jKGRoYXMpIH0sXG4gICAgICAgICAgc2V0X19fOiAgICB7IHZhbHVlOiBjb25zdEZ1bmMoZHNldCkgfSxcbiAgICAgICAgICBkZWxldGVfX186IHsgdmFsdWU6IGNvbnN0RnVuYyhkZGVsZXRlKSB9LFxuICAgICAgICAgIHBlcm1pdEhvc3RPYmplY3RzX19fOiB7IHZhbHVlOiBjb25zdEZ1bmMoZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gd2Vha01hcFBlcm1pdEhvc3RPYmplY3RzKSB7XG4gICAgICAgICAgICAgIGVuYWJsZVN3aXRjaGluZyA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JvZ3VzIGNhbGwgdG8gcGVybWl0SG9zdE9iamVjdHNfX18nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBEb3VibGVXZWFrTWFwLnByb3RvdHlwZSA9IE91cldlYWtNYXAucHJvdG90eXBlO1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBEb3VibGVXZWFrTWFwO1xuXG4gICAgICAvLyBkZWZpbmUgLmNvbnN0cnVjdG9yIHRvIGhpZGUgT3VyV2Vha01hcCBjdG9yXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2Vha01hcC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgICAgICAgdmFsdWU6IFdlYWtNYXAsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLCAgLy8gYXMgZGVmYXVsdCAuY29uc3RydWN0b3IgaXNcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUaGVyZSBpcyBubyBob3N0IFdlYWtNYXAsIHNvIHdlIG11c3QgdXNlIHRoZSBlbXVsYXRpb24uXG5cbiAgICAvLyBFbXVsYXRlZCBXZWFrTWFwcyBhcmUgaW5jb21wYXRpYmxlIHdpdGggbmF0aXZlIHByb3hpZXMgKGJlY2F1c2UgcHJveGllc1xuICAgIC8vIGNhbiBvYnNlcnZlIHRoZSBoaWRkZW4gbmFtZSksIHNvIHdlIG11c3QgZGlzYWJsZSBQcm94eSB1c2FnZSAoaW5cbiAgICAvLyBBcnJheUxpa2UgYW5kIERvbWFkbywgY3VycmVudGx5KS5cbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgUHJveHkgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBPdXJXZWFrTWFwO1xuICB9XG59KSgpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB3ZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICd1bmRlZmluZWQnID8gcmVxdWlyZSgnd2Vhay1tYXAnKSA6IFdlYWtNYXBcblxudmFyIFdlYkdMRVdTdHJ1Y3QgPSBuZXcgd2Vha01hcCgpXG5cbmZ1bmN0aW9uIGJhc2VOYW1lKGV4dF9uYW1lKSB7XG4gIHJldHVybiBleHRfbmFtZS5yZXBsYWNlKC9eW0EtWl0rXy8sICcnKVxufVxuXG5mdW5jdGlvbiBpbml0V2ViR0xFVyhnbCkge1xuICB2YXIgc3RydWN0ID0gV2ViR0xFV1N0cnVjdC5nZXQoZ2wpXG4gIGlmKHN0cnVjdCkge1xuICAgIHJldHVybiBzdHJ1Y3RcbiAgfVxuICB2YXIgZXh0ZW5zaW9ucyA9IHt9XG4gIHZhciBzdXBwb3J0ZWQgPSBnbC5nZXRTdXBwb3J0ZWRFeHRlbnNpb25zKClcbiAgZm9yKHZhciBpPTA7IGk8c3VwcG9ydGVkLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGV4dE5hbWUgPSBzdXBwb3J0ZWRbaV1cblxuICAgIC8vU2tpcCBNT1pfIGV4dGVuc2lvbnNcbiAgICBpZihleHROYW1lLmluZGV4T2YoJ01PWl8nKSA9PT0gMCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgdmFyIGV4dCA9IGdsLmdldEV4dGVuc2lvbihzdXBwb3J0ZWRbaV0pXG4gICAgaWYoIWV4dCkge1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgZXh0ZW5zaW9uc1tleHROYW1lXSA9IGV4dFxuICAgICAgdmFyIGJhc2UgPSBiYXNlTmFtZShleHROYW1lKVxuICAgICAgaWYoYmFzZSA9PT0gZXh0TmFtZSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZXh0TmFtZSA9IGJhc2VcbiAgICB9XG4gIH1cbiAgV2ViR0xFV1N0cnVjdC5zZXQoZ2wsIGV4dGVuc2lvbnMpXG4gIHJldHVybiBleHRlbnNpb25zXG59XG5tb2R1bGUuZXhwb3J0cyA9IGluaXRXZWJHTEVXIiwibW9kdWxlLmV4cG9ydHMgPSBoYXNLZXlzXG5cbmZ1bmN0aW9uIGhhc0tleXMoc291cmNlKSB7XG4gICAgcmV0dXJuIHNvdXJjZSAhPT0gbnVsbCAmJlxuICAgICAgICAodHlwZW9mIHNvdXJjZSA9PT0gXCJvYmplY3RcIiB8fFxuICAgICAgICB0eXBlb2Ygc291cmNlID09PSBcImZ1bmN0aW9uXCIpXG59XG4iLCJ2YXIgS2V5cyA9IHJlcXVpcmUoXCJvYmplY3Qta2V5c1wiKVxudmFyIGhhc0tleXMgPSByZXF1aXJlKFwiLi9oYXMta2V5c1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgaWYgKCFoYXNLZXlzKHNvdXJjZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IEtleXMoc291cmNlKVxuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBrZXlzW2pdXG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBzb3VyY2VbbmFtZV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRcbn1cbiIsInZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIGlzRnVuYyA9ICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgJiYgIShmbiBpbnN0YW5jZW9mIFJlZ0V4cCkpIHx8IHRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXHRpZiAoIWlzRnVuYyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdGlzRnVuYyA9IGZuID09PSB3aW5kb3cuc2V0VGltZW91dCB8fCBmbiA9PT0gd2luZG93LmFsZXJ0IHx8IGZuID09PSB3aW5kb3cuY29uZmlybSB8fCBmbiA9PT0gd2luZG93LnByb21wdDtcblx0fVxuXHRyZXR1cm4gaXNGdW5jO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcblx0aWYgKCFpc0Z1bmN0aW9uKGZuKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2l0ZXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXHR9XG5cdHZhciBpLCBrLFxuXHRcdGlzU3RyaW5nID0gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycsXG5cdFx0bCA9IG9iai5sZW5ndGgsXG5cdFx0Y29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogbnVsbDtcblx0aWYgKGwgPT09ICtsKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuXHRcdFx0aWYgKGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0Zm4oaXNTdHJpbmcgPyBvYmouY2hhckF0KGkpIDogb2JqW2ldLCBpLCBvYmopO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm4uY2FsbChjb250ZXh0LCBpc1N0cmluZyA/IG9iai5jaGFyQXQoaSkgOiBvYmpbaV0sIGksIG9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvciAoayBpbiBvYmopIHtcblx0XHRcdGlmIChoYXNPd24uY2FsbChvYmosIGspKSB7XG5cdFx0XHRcdGlmIChjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Zm4ob2JqW2tdLCBrLCBvYmopO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZuLmNhbGwoY29udGV4dCwgb2JqW2tdLCBrLCBvYmopO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IHJlcXVpcmUoJy4vc2hpbScpO1xuXG4iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG5cdHZhciBzdHIgPSB0b1N0cmluZy5jYWxsKHZhbHVlKTtcblx0dmFyIGlzQXJndW1lbnRzID0gc3RyID09PSAnW29iamVjdCBBcmd1bWVudHNdJztcblx0aWYgKCFpc0FyZ3VtZW50cykge1xuXHRcdGlzQXJndW1lbnRzID0gc3RyICE9PSAnW29iamVjdCBBcnJheV0nXG5cdFx0XHQmJiB2YWx1ZSAhPT0gbnVsbFxuXHRcdFx0JiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xuXHRcdFx0JiYgdHlwZW9mIHZhbHVlLmxlbmd0aCA9PT0gJ251bWJlcidcblx0XHRcdCYmIHZhbHVlLmxlbmd0aCA+PSAwXG5cdFx0XHQmJiB0b1N0cmluZy5jYWxsKHZhbHVlLmNhbGxlZSkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cdH1cblx0cmV0dXJuIGlzQXJndW1lbnRzO1xufTtcblxuIiwiKGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gbW9kaWZpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20va3Jpc2tvd2FsL2VzNS1zaGltXG5cdHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuXHRcdHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcblx0XHRmb3JFYWNoID0gcmVxdWlyZSgnLi9mb3JlYWNoJyksXG5cdFx0aXNBcmdzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuXHRcdGhhc0RvbnRFbnVtQnVnID0gISh7J3RvU3RyaW5nJzogbnVsbH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxuXHRcdGhhc1Byb3RvRW51bUJ1ZyA9IChmdW5jdGlvbiAoKSB7fSkucHJvcGVydHlJc0VudW1lcmFibGUoJ3Byb3RvdHlwZScpLFxuXHRcdGRvbnRFbnVtcyA9IFtcblx0XHRcdFwidG9TdHJpbmdcIixcblx0XHRcdFwidG9Mb2NhbGVTdHJpbmdcIixcblx0XHRcdFwidmFsdWVPZlwiLFxuXHRcdFx0XCJoYXNPd25Qcm9wZXJ0eVwiLFxuXHRcdFx0XCJpc1Byb3RvdHlwZU9mXCIsXG5cdFx0XHRcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXG5cdFx0XHRcImNvbnN0cnVjdG9yXCJcblx0XHRdLFxuXHRcdGtleXNTaGltO1xuXG5cdGtleXNTaGltID0gZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcblx0XHR2YXIgaXNPYmplY3QgPSBvYmplY3QgIT09IG51bGwgJiYgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcsXG5cdFx0XHRpc0Z1bmN0aW9uID0gdG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBGdW5jdGlvbl0nLFxuXHRcdFx0aXNBcmd1bWVudHMgPSBpc0FyZ3Mob2JqZWN0KSxcblx0XHRcdHRoZUtleXMgPSBbXTtcblxuXHRcdGlmICghaXNPYmplY3QgJiYgIWlzRnVuY3Rpb24gJiYgIWlzQXJndW1lbnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmtleXMgY2FsbGVkIG9uIGEgbm9uLW9iamVjdFwiKTtcblx0XHR9XG5cblx0XHRpZiAoaXNBcmd1bWVudHMpIHtcblx0XHRcdGZvckVhY2gob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0dGhlS2V5cy5wdXNoKHZhbHVlKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbmFtZSxcblx0XHRcdFx0c2tpcFByb3RvID0gaGFzUHJvdG9FbnVtQnVnICYmIGlzRnVuY3Rpb247XG5cblx0XHRcdGZvciAobmFtZSBpbiBvYmplY3QpIHtcblx0XHRcdFx0aWYgKCEoc2tpcFByb3RvICYmIG5hbWUgPT09ICdwcm90b3R5cGUnKSAmJiBoYXMuY2FsbChvYmplY3QsIG5hbWUpKSB7XG5cdFx0XHRcdFx0dGhlS2V5cy5wdXNoKG5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGhhc0RvbnRFbnVtQnVnKSB7XG5cdFx0XHR2YXIgY3RvciA9IG9iamVjdC5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0c2tpcENvbnN0cnVjdG9yID0gY3RvciAmJiBjdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0O1xuXG5cdFx0XHRmb3JFYWNoKGRvbnRFbnVtcywgZnVuY3Rpb24gKGRvbnRFbnVtKSB7XG5cdFx0XHRcdGlmICghKHNraXBDb25zdHJ1Y3RvciAmJiBkb250RW51bSA9PT0gJ2NvbnN0cnVjdG9yJykgJiYgaGFzLmNhbGwob2JqZWN0LCBkb250RW51bSkpIHtcblx0XHRcdFx0XHR0aGVLZXlzLnB1c2goZG9udEVudW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoZUtleXM7XG5cdH07XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBrZXlzU2hpbTtcbn0oKSk7XG5cbiJdfQ==
