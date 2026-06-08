import prisma from "./prisma"

async function main() {
    await prisma.product.deleteMany();

    await prisma.product.createMany({
        data: [
            {
                name: "Mechanical Keyboard",
                slug: "mechanical-keyboard",
                description: "Tactile blue switches with RGB backlighting.",
                polarProductId: "9ae0dd39-d90d-4944-9cfa-55ffae80921b",
                priceInCents: 8500
            },
            {
                name: "Ergonomic Mouse",
                slug: "ergonomic-mouse",
                description: "Vertical design to reduce wrist strain during long coding sessions.",
                polarProductId: "82600177-508e-4dd7-9e2e-d7ae659b5219",
                priceInCents: 6500
            },
            {
                name: "USB-C Hub",
                slug: "usb-c-hub",
                description: "7-in-1 adapter with 4K HDMI and Power Delivery.",
                polarProductId: "30dcf34b-eeb2-4ffd-8eda-346bb8e8bfa6",
                priceInCents: 4500
            },
            {
                name: "Privacy Webcam Cover",
                slug: "webcam-cover",
                description: "Ultra-thin slider for laptop cameras.",
                polarProductId: "1ae42886-51eb-4a0a-9cb6-9cb1b2ba94c4",
                priceInCents: 500
            },
            {
                name: "Desk Mat (Extra Large)",
                slug: "desk-mat-xl",
                description: "Waterproof microfiber surface for smooth mouse tracking.",
                polarProductId: "97333fb7-9034-4ac6-b8f5-8b5ef542fc18",
                priceInCents: 3000
            }
        ],
        skipDuplicates: true,
    });
}

main()
    .then(async () => {
        console.log("Database Seeded!")
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })