use("ecommerce");

db.createCollection("usuarios");
db.createCollection("productos");
db.createCollection("pedidos");
db.createCollection("detalle_pedidos");
db.createCollection("pagos");
db.createCollection("envios");
db.createCollection("direcciones");
db.createCollection("inventario");
db.createCollection("categorias");

print("Colecciones creadas correctamente");
