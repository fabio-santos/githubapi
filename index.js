const express = require('express');
const request = require('request');
const server = express();

server.get('/', (req, res) => {
    response.send('Hello World!');
});

server.get('/users', (req, res) => {
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

server.get('/users/:login/details', (req, res) => {
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

server.get('/users/:login/repos', (req, res) => {
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

server.listen(3000, () => {
    console.log(`Server UP!`)
});