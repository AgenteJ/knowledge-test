const { serverError, badRequest, created } = require('../../utils/http/http-helper');

module.exports = class CreatePurchaseOrdersController {
    constructor(repository, validation) {
        this.repository = repository;
        this.validation = validation;
    }

    async handle(request) {
        try {
            const errors = this.validation.validate(request.body);
            if (errors.length > 0) {
                return badRequest(errors);
            }

            const serializedPurchaseOrders = this.serializePurchaseOrdersToDb(request.body);
            await this.repository.create(serializedPurchaseOrders);
            return created(request.body);
        } catch (error) {
            return serverError(error);
        }
    }

    serializePurchaseOrdersToDb(purchases) {
        purchases = Array.isArray(purchases) ? purchases : [purchases];

        return purchases.map(purchase => ([
            purchase.product_id,
            purchase.price,
        ]));
    }
};
