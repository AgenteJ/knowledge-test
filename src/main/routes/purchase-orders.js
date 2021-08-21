const { adaptRoute } = require('../adapters/express-router-adapter');
const makeFindAllPurchaseOrders  = require('../factories/controllers/purchase-orders/find-all-purchase-orders');
const makePurchaseOrdersController = require('../factories/controllers/purchase-orders/create-purchase-orders');

module.exports = (router) => {
    router.get('/orders', adaptRoute(makeFindAllPurchaseOrders()));
    router.post('/orders', adaptRoute(makePurchaseOrdersController()));
    // router.post('/orders/:id', adaptRoute(makePurchaseOrdersController()));
};
