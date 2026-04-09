use("ecommerce");

// USUARIOS
db.usuarios.insertMany([
  { "_id": "usr1", "nombre": "Ana López", "email": "ana@mail.com", "password": "hash123", "telefono": "5512345678" },
  { "_id": "usr2", "nombre": "Carlos Ruiz", "email": "carlos@mail.com", "password": "hash456", "telefono": "5598765432" },
  { "_id": "usr3", "nombre": "María Torres", "email": "maria@mail.com", "password": "hash789", "telefono": "5511223344" }
]);

// PRODUCTOS
db.productos.insertMany([
  { "_id": "prod1", "nombre": "Camiseta Básica", "descripcion": "100% algodón", "precio": 299.00, "categoria_id": "cat1" },
  { "_id": "prod2", "nombre": "Tenis Running", "descripcion": "Suela antideslizante", "precio": 899.00, "categoria_id": "cat2" },
  { "_id": "prod3", "nombre": "Mochila Urban", "descripcion": "15L resistente al agua", "precio": 649.00, "categoria_id": "cat3" }
]);

// INVENTARIO
db.inventario.insertMany([
  { "_id": "inv1", "producto_id": "prod1", "talla": "M", "color": "Blanco", "stock": 50 },
  { "_id": "inv2", "producto_id": "prod1", "talla": "L", "color": "Negro", "stock": 30 },
  { "_id": "inv3", "producto_id": "prod2", "talla": "27", "color": "Azul", "stock": 15 },
  { "_id": "inv4", "producto_id": "prod3", "talla": "Única", "color": "Gris", "stock": 20 }
]);

// PEDIDOS
db.pedidos.insertMany([
  { "_id": "ped1", "usuario_id": "usr1", "total": 1198.00, "estado": "entregado" },
  { "_id": "ped2", "usuario_id": "usr2", "total": 899.00, "estado": "en camino" },
  { "_id": "ped3", "usuario_id": "usr1", "total": 649.00, "estado": "pendiente" }
]);

print("Datos insertados correctamente");
