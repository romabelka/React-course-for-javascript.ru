var router = require('express').Router();
var mocks = require('./mock');

router.get('/article', function (req, res, next) {
    var articles = withComments(mocks.articles),
        limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0;

    res.json(articles.slice(offset, limit + offset))
});

router.get('/article/:id', function (req, res, next) {
    var article = withComments(mocks.articles).filter(function (article) {
        return article.id == req.params.id
    })[0];
    if (article) return res.json(article);

    res.status(404).json({error: "not found"});
});

router.post('/article', function (req, res, next) {
    var body = req.body;
    var article = {
        text: body.text,
        id: mocks.articles.length + 1,
        user: body.user,
        timeStamp: new Date()
    };
    mocks.articles.push(article);
    res.json(article)
});

router.get('/comment', function (req, res, next) {
    var aid = req.query.article;
    var comments = aid ? mocks.comments.filter(function (comment) {
        return comment.aid == aid
    }) : mocks.comments;

    var limit = Number(req.query.limit) || articles.length,
        offset = Number(req.query.offset) || 0;
    res.json(comments.slice(offset, limit + offset))
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : mocks.comments.length + 1,
        text : req.body.text,
        timeStamp: new Date(),
        user: req.body.user,
        aid : req.body.aid
    };
    mocks.comments.push(comment);
    res.json(comment)
});

module.exports = router;

function withComments(articles) {
    return articles.map(function (q) {
        q.cids = mocks.comments.filter(function (comment) {
            return comment.aid == q.id
        }).map(function (comment) {
            return comment.id
        });
        return q
    })
}