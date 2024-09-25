const db = require("../database/index");
module.exports.getAllUser = (req, res) => {
    let sql="select * from fundraiser"
    db.query(sql,(err,results)=>{
        try {
            if(err){
                res.send({
                    code: 400,
                    msg:"error"
                })
            }
     
            res.send({
                code: 200,
                data: results,
            })
            
        } catch (error) {
            
        }
        

    })
    
    
}
module.exports.getUserById = (req, res) => {
    let sql=`select * from fundraiser where FUNDRAISER_ID = ${req.query.id}`
    db.query(sql,(err,results)=>{
        try {
            if(err){
                res.send({
                    code: 400,
                    msg:"error"
                })
            }
     
            res.send({
                code: 200,
                data: results,
            })
            
        } catch (error) {
            
        }
        

    })
    
    
}
module.exports.getAllCategory= (req, res) => {
    let sql="select * from category"
    db.query(sql,(err,results)=>{
        try {
            if(err){
                res.send({
                    code: 400,
                    msg:"error"
                })
            }
     
            res.send({
                code: 200,
                data: results,
            })
            
        } catch (error) {
            
        }
        

    })
    
    
}
module.exports.getUserByOther = (req, res) => { 
    const { organizer, city, categoryId } = req.query;
    let sql = `SELECT * FROM fundraiser WHERE 1=1`;
    const params = [];
    if (organizer) {
        sql += ` AND ORGANIZER = ?`;
        params.push(organizer);
    }
    
    if (city) {
        sql += ` AND CITY = ?`;
        params.push(city);
    }

    if (categoryId) {
        sql += ` AND CATEGORY_ID = ?`;
        params.push(categoryId);
    }

    db.query(sql, params, (err, results) => {
        try {
            if (err) {
                return res.send({
                    code: 400,
                    msg: "Error retrieving data",
                });
            }
            if (results.length === 0) {
                return res.send({
                    code: 400,
                    msg: "No data found",
                });
            }

            res.send({
                code: 200,
                data: results,
            });
        } catch (error) {
            res.send({
                code: 500,
                msg: "Internal server error",
            });
        }
    });
};
