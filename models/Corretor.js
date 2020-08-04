import con from '../config/db.js';
var data = []

class Corretor {
    list(id,callback) {
        try {
            con.get((err, db) => {
                try {
                    if(id){
                        return db.query('SELECT * FROM TCORRETOR WHERE ID_CORRETOR=?',[id], function(err, result) {
                            // IMPORTANT: close the connection
                            callback(null,result);
                            db.detach();
                        })
                    } else {
                        return db.query('SELECT * FROM TCORRETOR', function(err, result) {
                            // IMPORTANT: close the connection
                            callback(null,result);
                            db.detach();
                        })                        
                    }
            } catch {err} {
                    return err
                }
            });
        } catch (err) {
            return err
        }
    }       
    add(value,callback) {
        try {
            con.get((err, db) => {
                try {
                    return db.query('INSERT INTO TCORRETOR (ID_CORRETOR) VALUES (?)',value, function(err, result) {
                        // IMPORTANT: close the connection
                        callback(null,result);
                        db.detach();
                    })
                } catch {err} {
                    return err
                }
            });
        } catch (err) {
            return err
        }
    }       
    update(value,callback) {
        try {
            con.get((err, db) => {
                try {
                    return db.query('UPDATE TCORRETOR  SET NOME=? WHERE ID_CORRETOR=?',value, function(err, result) {
                        // IMPORTANT: close the connection
                        callback(null,result);
                        db.detach();
                    })
                } catch {err} {
                    return err
                }
            });
        } catch (err) {
            return err
        }
    }       
    del(id,callback) {
        try {
            con.get((err, db) => {
                try {
                    return db.query('DELETE FROM TCORRETOR WHERE ID_CORRETOR=?',id, function(err, result) {
                        // IMPORTANT: close the connection
                        callback(null,result);
                        db.detach();
                    })
                } catch {err} {
                    return err
                }
            });
        } catch (err) {
            return err
        }
    }       
}

export default Corretor;