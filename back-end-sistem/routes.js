const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
        
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
        
    },
    {
        method: 'GET',
        path: '/test',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
        
    },
    {
        method: 'POST',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses';
        },
        
    },
];

module.exports = routes;
