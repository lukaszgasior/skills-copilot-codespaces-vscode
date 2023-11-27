// Create  web server
// 1. import express
const express = require('express');
const fs = require('fs');
// 2. create an express app
const app = express();
// 3. import the comments.json file
const comments = require('./comments.json');
// 4. create a route for /comments
app.get('/comments', function(req, res) {
    res.send(comments);
});
// 5. create a route for /comments/:id
app.get('/comments/:id', function(req, res) {
    const comment = comments.find(function(comment) {
        return comment.id === Number(req.params.id);
    });
    res.send(comment);
});
// 6. create a route for /comments/search
app.get('/comments/search', function(req, res) {
    const search = req.query.search;
    const searchComments = comments.filter(function(comment) {
        return comment.body.includes(search);
    });
    res.send(searchComments);
});
// 7. create a route for /comments/newest
app.get('/comments/newest', function(req, res) {
    const newestComments = comments.slice(-5);
    res.send(newestComments);
});
// 8. create a route for /comments/oldest
app.get('/comments/oldest', function(req, res) {
    const oldestComments = comments.slice(0, 5);
    res.send(oldestComments);
});
// 9. create a route for /comments/users/:id
app.get('/comments/users/:id', function(req, res) {
    const userComments = comments.filter(function(comment) {
        return comment.userId === Number(req.params.id);
    });
    res.send(userComments);
});
// 10. create a route for /comments/users/:id/newest
app.get('/comments/users/:id/newest', function(req, res) {
    const userComments = comments.filter(function(comment) {
        return comment.userId === Number(req.params.id);
    });
    const newestComments = userComments.slice(-5);
    res.send(newestComments);
});
// 11. create a route for /comments/users/:id/oldest
app.get('/comments/users/:id/oldest', function(req, res) {
    const userComments = comments.filter(function(comment) {
        return comment.userId === Number(req.params.id);
    });
    const oldestComments = userComments.slice(0, 5);
    res.send(oldestComments);
});