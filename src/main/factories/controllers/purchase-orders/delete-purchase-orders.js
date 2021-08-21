const PurchaseOrdersRepository = require('../../../../repositories/purchase-orders');
const DeletePurchaseOrdersController = require('../../../../controllers/purchase-orders/delete-purchase-orders');
const makeDeletePurchaseOrdersValidators = require('../../validators/purchase-orders/delete-purchase-orders');

module.exports = () => {
    const repository = new PurchaseOrdersRepository();
    const validators = makeDeletePurchaseOrdersValidators();

    return new DeletePurchaseOrdersController(repository, validators);
};
