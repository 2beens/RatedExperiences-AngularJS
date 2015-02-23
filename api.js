var mlog = require("./mini-log");

function startRouting(app, expTypes) {

    ///////     GET ALL EXP TYPES   ///////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    app.get('/exptypes', function(req, res) {
        mlog.debug('Request for all experience types. Size: ' + expTypes.length);
        res.status(200).json(expTypes);    
    });

    ///////     GET ALL EXP TYPE BY ID   //////////////////////////////
    ///////////////////////////////////////////////////////////////////
    app.get('/exptype/:id', function(req, res) {
        var expTypeId = parseInt(req.params.id);
        mlog.debug('Request for experience type id: ' + expTypeId);

        var expType = null;
        for(var i = 0, len = expTypes.length; i < len; i++) {
            if(expTypes[i].id === expTypeId) {
                expType = expTypes[i];
                break;
            }
        }

        if(expType) {
            res.status(200).json(expType);
        }else{
            res.status(404).json({ error: 'Experience type ID: ' + expTypeId + ' cannot be found.'});
        }
    });

    ///////     CREATE NEW EXP TYPE   /////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    app.post('/exptype/new', function(req, res) {
        var newExpTypeName = req.body.name;

        if(newExpTypeName) {
            mlog.debug('Trying to add new experience type [' + newExpTypeName + ']');
            expTypes.push({"id": expTypes.length + 1, "name": {"value": newExpTypeName, "type": "text"}});

            res.status(200).json({result: 'OK'});
        }else{
            mlog.debug('Cannot add new experience type: name not provided.');
            res.status(400).json({ error: 'New experience type name not provided.'});
        }
    });

    ///////     DELETE EXP TYPE   /////////////////////////////////////
    ///////////////////////////////////////////////////////////////////
    app.post('/exptype/delete', function(req, res) {
         var expTypeId = req.body.id;

        if(expTypeId) {
            mlog.debug('Trying to delete experience type ID[' + expTypeId + ']');
            var deletedOK = findAndRemoveExpType(expTypes, expTypeId);
            var resMessage = 'OK';
            var status = 200;
            if(!deletedOK){
                resMessage = 'Not deleted!';
                status = 404;
            }

            res.status(status).json({result: resMessage});
        }else{
            mlog.debug('Cannot delete experience type: id not provided.');
            res.status(400).json({ error: 'Experience type cannot be deleted: id not provided.'});
        }
    });
}

///////     MISC METHODS     //////////////////////////////////////
///////////////////////////////////////////////////////////////////

function findAndRemoveExpType(expTypes, expTypeId) {
    var deletedOk = false;
    
    for(var i in expTypes) {
        if(expTypes[i].id === expTypeId) {
            expTypes.splice(i, 1);
            deletedOk = true;
            break;
        }
    }
    
    return deletedOk;
}

exports.startRouting = startRouting;