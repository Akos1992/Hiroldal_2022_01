const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('Database/hirek.db')

module.exports = {
    readAllNews() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM CIKKEK', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }
};