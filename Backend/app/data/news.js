const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('../Database/hirek.db')

module.exports = {
    readAllNews() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM CIKKEK', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    readNewsByCategoryId(categoryId) {
        const catId = parseInt(categoryId);
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM CIKKEK WHERE KatID=${catId}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    readAllCategories() {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM KATEGORIA', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
    readNewsById(cikkId) {
        return new Promise((resolve, reject) => {
            db.get(`SELECT * FROM CIKKEK WHERE cikkId=${cikkId}`, (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
};