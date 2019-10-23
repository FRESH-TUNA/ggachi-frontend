const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(()=>{
    const server = express();

    // 커스텀 라우터 전후 비교 시 아래 부분을 주석 처리 후 확인해 보세요
    server.get('/newletter/:componentState', (req, res) => {
        const page = '/newletter';
        const params = {componentState: req.params.componentState}
        app.render(req, res, page, params)
    });

    server.get('/letters/:pk', (req, res) => {
        const page = '/letter';
        const params = {pk: req.params.pk}
        app.render(req, res, page, params)
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(80, (err) => {
        if(err) throw err;
        console.log("> Ready on Server Port: 80")
    })
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})