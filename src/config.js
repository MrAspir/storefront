const config = {
    host: `//${window.location.host}`,
    routs: {
        homepage: '/',
        category: '/category',
        product: '/product/:id',
        cart: '/cart',
        'not-found': '/404'
    }
};

export default config;
