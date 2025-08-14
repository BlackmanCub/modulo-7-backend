export const invoiceData = {
    id: "INV-001",
    company: {
        ruc: "1234567890",
        name: "Tech Solution",
        direccion: {
            city: "San Francisco",
            principalStreet: "123 Tech",
            secondaryStreet: "Suite 100",
            code: "94105"
        }
    },
    customer: {
        id: "124865671",
        name: "Bryan",
        surname: "Raura",
        address: {
            city: "Los Angeles",
            principalStreet: "456 Elm Street",
            secondaryStreet: "Canelo",
            code: "90001"
        }
    },
    item: [
        {
            id: 1,
            product: {
                id: 1,
                name: "Laptop",
                price: 1200,
                descripcion: "Hogh-performance laptop",
                category: {
                    id: 1,
                    name: "Electonics",
                }
            },
            quantity: 2,
        },
        {
            id: 2,
            product: {
                id: 2,
                name: "Mouse",
                price: 25,
                descripcion: "Wireless mouse",
                category: {
                    id: 2,
                    name: "Accesories",
                }
            },
            quantity: 3,
        },
    ],
}