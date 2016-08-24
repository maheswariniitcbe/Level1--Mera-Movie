var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'), //parses information from POST

router.use(bodyParser.urlencoded({ extended: true }))

var mongoose = require('mongoose');
//var dbHost = 'mongodb://localhost:27017/test';
//mongoose.connect(dbHost);

var bookingSchema = mongoose.Schema({
     ID: String,
    mName:String,
    tName:String,
    tLoc:String,
    sTime:String,
    noofTickets:String,
    amountPaid:String
    });

var Book = mongoose.model('Book', bookingSchema, 'book');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log("Connected to DB");
// });

router.get('/bk', function (req, res,next) {
    console.log("REACHED GET FUNCTION ON SERVER");

    Book.find({}, function (err, docs) {
         res.json(docs);
         console.log(docs);

    });
});

router.get('/bk/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Book.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);

    });
});

router.post('/bk', function(req, res){
  console.log(req.body);
    var id=req.body.ID;
    var name = req.body.mName;
    var tname=req.body.tName;
    var tloc = req.body.tLoc;
    var time = req.body.sTime;
    var cnt = req.body.noofTickets;
    var amt=req.body.amountPaid;
   var Booking = new Book({
    ID:id,
    mName:name,
    tName:tname,
    tLoc:tloc,
    sTime:time,
    noofTickets:cnt,
    amountPaid:amt,
  });

  Booking.save(function(err, docs){
    if ( err ) throw err;
    console.log("Book Saved Successfully");
    res.json(docs);
  });

  })

router.delete('/bk/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Book.remove({ID:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/bk/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Book.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      res.json(data);
    });
})

router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


module.exports = router;
