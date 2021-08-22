const { serverError, badRequest, success } = require('../../utils/http/http-helper');

module.exports = class DeletePurchaseOrderController {
    constructor(repository, validation) {
        this.repository = repository;
        this.validation = validation;
    }

    async handle(request) {
        try {
            const errors = this.validation.validate(request.route);
            if (errors.length > 0) {
                return badRequest(errors);
            }

            const serializedPurchaseOrders = request.route.id;
            await this.repository.delete(serializedPurchaseOrders);
            return success(request.route);
        } catch (error) {
            return serverError(error);
        }
    }
};
