class Product {
    async fetch () {
        try {
            const response = await fetch('products.json');

            return response.json();
        } catch (err) {
            return undefined;
        }
    }

    async getAll () {
        return this.fetch();
    }
}

export default new Product();
