module.exports = function(app){

    app.get('/feed', function(req, res){
        res.render('feed', {
            title: 'Feed Provider API'
        });
    });

}
