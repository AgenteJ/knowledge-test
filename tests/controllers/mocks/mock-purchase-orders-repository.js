module.exports = class PurchaseOrdersRepositorySpy {
    constructor() {
        this.result = 0;
    }

    async findAll() {
        return this.result;
    }

    async create(params) {
        this.params = params;
        return this.result;
    }

    async delete(params) {
        this.params = params;
        return this.result;
    }
};
