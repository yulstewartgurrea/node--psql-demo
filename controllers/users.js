const database = require('../database');

exports.getUsers = (req, res, next) => {
    database
        .query(`Select * from public."user" ORDER BY id ASC`)
        .then(users => {
            if (!users) {
                const error = new Error('Unable to view users at the moment.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({message: 'Success', data:users.rows})
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        });
    database.end;
    
};

exports.getUser = (req, res, next) => {
    database
        .query(`Select * from public."user" where id=${req.params.user_id}`)
        .then(users => {
            if (!users) {
                const error = new Error('Unable to view users at the moment.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({message: 'Success', data:users.rows})
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        });
    database.end;
};

exports.createUser = (req, res, next) => {
    const user = req.body;
    
    let insertQuery = `insert into public."user"(firstname, lastname, middlename, birthday, address) 
                       values('${user.firstname}', '${user.lastname}', '${user.middlename}', '${user.birthday}', '${user.address}')`

    database
        .query(insertQuery)
        .then(result => {
            res.status(201).json({
                message: "Success",
                data: req.body
            });
        }).catch(err => {
            console.log()
        });
    database.end;
};

exports.updateUser = (req, res, next) => {
    let user_id = req.params.user_id;
    let user = req.body;
    let updateQuery = `update public."user"
                       set firstname = '${user.firstname}',
                       lastname = '${user.lastname}',
                       middlename = '${user.middlename}',
                       birthday = '${user.birthday}',
                       address = '${user.address}'
                       where id = ${user_id}`
    database
        .query(updateQuery)
        .then(result => {
            res.status(200).json({message: 'Success'});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
    database.end;
};

exports.deleteUser = (req, res, next) => {
    let deleteQuery = `delete from public."user" where id=${req.params.user_id}`

    database
        .query(deleteQuery)
        .then(result => {
            res.status(200).json({message: 'Success'});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err)
        });
    database.end;
};
