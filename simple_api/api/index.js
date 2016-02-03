var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');

router.get('/article', function (req, res, next) {
    var articles = withComments(mocks.articles).map(function (article) {
            return assign({}, article, {
                text: undefined
            })
        }),
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
    if (aid) return res.json(mocks.comments.filter(function (comment) {
        return comment.article == aid
    }))

    var limit = Number(req.query.limit) || mocks.comments.length,
        offset = Number(req.query.offset) || 0;
    res.json({
        total: mocks.comments.length,
        records: mocks.comments.slice(offset, limit + offset)
    })
});

router.post('/comment', function (req, res, next) {
    var comment = {
        id : mocks.comments.length + 1,
        text : req.body.text,
        timeStamp: new Date(),
        user: req.body.user,
        article : req.body.article
    };
    mocks.comments.push(comment);
    res.json(comment)
});

router.post('/report', function (req, res) {
    res.json({})
})

module.exports = router;

function withComments(articles) {
    return articles.map(function (q) {
        q.comments = mocks.comments.filter(function (comment) {
            return comment.article == q.id
        }).map(function (comment) {
            return comment.id
        });
        return q
    })
}