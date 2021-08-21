const { adaptRoute } = require('../adapters/express-router-adapter');
const makeFindAllPurchaseOrders  = require('../factories/controllers/purchase-orders/find-all-purchase-orders');
const makeCreatePurchaseOrdersController = require('../factories/controllers/purchase-orders/create-purchase-orders');
const makeDeletePurchaseOrdersController = require('../factories/controllers/purchase-orders/delete-purchase-orders');

module.exports = (router) => {
    router.get('/orders', adaptRoute(makeFindAllPurchaseOrders()));
    router.post('/orders', adaptRoute(makeCreatePurchaseOrdersController()));
    router.delete('/orders/:id', adaptRoute(makeDeletePurchaseOrdersController()));
};
