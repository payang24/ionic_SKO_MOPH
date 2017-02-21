let Q = require('q');

module.exports = {
  login(db, username, password) {
    
    let q = Q.defer();
    // sql query
    let sql = `SELECT * FROM users WHERE username=? and password=?`;
    
    db.getConnection((err, conn) => {
      if (err) {
        q.reject(err);
console.log(err)
      } else {
        conn.query(sql, [username, password], (err, rows) => {
          if (err) q.reject(err);
          else q.resolve(rows);
        });
        conn.release();
      }
    });

        return q.promise;
  },
}

