const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class PurchaseOrdersRepository {
    async findAll() {
        const sql = `
            SELECT
                *
            FROM
                purchase_orders as po
            INNER JOIN
                products as pd ON po.product_id = pd.id
            LEFT JOIN 
                suppliers as sp ON pd.supplier_id = sp.id
        `;
        const purchase_orders = await db.select(sql);

        return purchase_orders;
    }

    async create(purchase_orders) {
        const sql = `
            INSERT INTO 
                purchase_orders (product_id, price) 
            VALUES 
                (?,?);
        `;

        return db.persistMany(sql, purchase_orders);
    }
};
