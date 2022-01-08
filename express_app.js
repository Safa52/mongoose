
var app = require('./config/server.config');
var crud = require('./models/models.supplier');


app.post('/Add', function(req, res, next) {
    var create = new crud(req.body);
    create.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(create);
        }
    });
});

app.post('/read', function(req, res, next) {
    
    crud.find({ "email": req.body.email }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});

app.post('/update', function(req, res, next) {
    var email = req.body.email;
    var supplier_name = req.body.supplier_name;
    crud.updateOne({ "email": email }, { "supplier_name": supplier_name }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});

app.post('/remove', function(req, res, next) {
   
    crud.remove({ "email": req.body.email }, function(err, data) {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});
