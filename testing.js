const ProductManager = require('./src/ProductManager');
const pm = new ProductManager('./productos.json');

console.log(pm.getProducts());
pm.addProduct('desinfectante', 'Ayudin limpiadores de pisos', 430, 'desinfectante.png', 'P001', 15);
pm.addProduct('jabon de ropa', 'Skip jabon liquido para diluir', 1800, 'jabonderopa.png', 'P002', 5);
pm.addProduct('limpia vidrios', 'Cif ultra rápido vidrios', 300, 'limpiavidrios.png', 'P003', 10);
pm.addProduct('detergente', 'Lavavajilla Magistral 500ml', 300, 'magistral.png', 'P004', 20);
pm.addProduct('limpiador multisuperficies', 'Limpiador Cif Ultra Brillo Original 400ml', 520, 'lustramuebles.png', 'P005', 30);
pm.addProduct('rollo de cocina', 'Rollo De Cocina Sussex Clasico 50 Paños 3u', 830, 'sussex.png', 'P006', 40);
pm.addProduct('desinfectante', 'Desinfectante Amb Lysoform Lavanda 360cc', 650, 'lysoform.png', 'P007', 12);
pm.addProduct('jabon blanco', 'Jabón En Pan Argentino 400 Gr', 420, 'jabonblanco.png', 'P008', 14);
pm.addProduct('papel higenico', 'Papel Higienico Felpita Hoja Simple 6x80', 2000, 'felpita.png', 'P009', 8);
pm.addProduct('suavizante', 'Suavizante Downy Perfume 1lt', 2200, 'downy.png', 'P010', 2);

console.log(pm.getProducts());