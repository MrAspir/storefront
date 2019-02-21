class ProductService {
    async fetch () {
        try {
            const response = await fetch(`//${window.location.host}/products.json`);

            return response.json();
        } catch (err) {
            return undefined;
        }
    }

    async getAll () {
        return await this.fetch();
    }

    async getOne (id) {
        const response = await this.fetch();

        return response.find(item => item.id === id);
    }
}

export default new ProductService();
