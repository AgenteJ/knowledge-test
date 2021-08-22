const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class PurchaseOrdersRepository {
    async delete(id) {
        const sql = `
            UPDATE 
                purchase_orders
            SET 
                deletion_flag = 'Y' 
            WHERE 
                id = ?;
        `;
        return db.deleteOne(sql, id);
    }
    
    async findAll() {
        const sql = `
            SELECT
                po.id as orders_id,
                pd.id as product_id,
                sp.id as supplier_id,
                *
            FROM
                purchase_orders as po
            INNER JOIN
                products as pd ON po.product_id = pd.id 
                AND
                po.deletion_flag = 'N'
            INNER JOIN 
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
