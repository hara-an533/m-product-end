const router = require('koa-router')(),
    msql = require('../lib/dbclass')


router.post('/login', async ctx => {
    let {
        id,
        pwd
    } = ctx.request.body;
    if (pwd && id) {
        let sql = `SELECT id FROM staff_list WHERE staff_id="${id}" AND staff_pwd="${pwd}"`
        // console.log(sql);
        let res = await msql.query(sql)
        // console.log(res);
        if (res.length > 0) {
            ctx.body = {
                id:id,
                pwd:pwd,
                status: 200
            }
        } else {
            ctx.body = {
                status: 404
            }
        }
    }
})

module.exports = router.routes()