export class Cliente {
    Nombre: String;
    Apellido: String;
    Direccion: {
        Ciudad: String;
        Provincia: String;
        Sector: String;
        Calle: String;
    };
    Balance: String;
    Email: String;
    Pedidos: [
        {
            Fecha: Date;
            Lugar_Entrega: String;
            Productos: [
                {
                    Nombre: String;
                    Precio: Number;
                    Cantidad: Number;
                }
            ]
        }
    ]
}