/**
 * Created by lmy on 18-1-20.
 */

const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let userSQL = require('../dbs/userSql');


router.post("/userInfo", (req, res) => {
    console.log(req);
    let name = req.body.userName;
    let password = req.body.userPassword;
    db.query(userSQL.logSql, [name, password], function (err, result) {
        if (err) {
            console.log("查找失败"+err);
            return err;
        }
        else {
            console.log("长度是"+result.length);
            // console.log(result[0].name,name,result[0].password,password);
            if (result.length === 0) {
                db.query(userSQL.findUser, name, function (err, result) {
                    if (err) {
                        console.log("查找失败"+err);
                        return err;
                    }
                    else if (result[0].name === name && result[0].password != password){
                        res.json({isSuccess:false,logInfo:"password is not correct"});
                    }
                    else {
                        res.json({isSuccess: false, logInfo: "user not exites"});

                    }
                })
            }
            else if (result[0].name === name && result[0].password === password) {
                res.json({isSuccess: true, logInfo: "success"});
            }

        }
    })

});

module.exports = router;