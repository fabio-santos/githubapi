const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

app.get('/users', (req, res) => {
    try {
        const since = req.query.since || '0';
        
        request({
            uri: `https://api.github.com/users?since=${since}`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
        }).pipe(res);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/users/:login/details', (req, res) => {
    try {        
        request({
            uri: `https://api.github.com/users/${req.params.login}`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
        }).pipe(res);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/users/:login/repos', (req, res) => {
    try {        
        request({
            uri: `https://api.github.com/users/${req.params.login}/repos`,
            headers: {
                'User-Agent': 'Request-Promise'
            },
        }).pipe(res);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = app;