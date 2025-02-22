function Product(name,imgSrc,stars,count,priceCents){
    this.name = name,
    this.imgSrc = imgSrc,
    this.rating = {
        stars:stars,
        count:count,
    },
    this.priceCents = priceCents;
};
const newProducts = [new Product(
    'Black and Gray Athletic Cotton Socks - 6 Pairs',
    'images/products/athletic-cotton-socks-6-pairs.jpg',
    4.5,
    87,
    1090
),
new Product(
    'Intermediate Size Basketball',
    'images/products/intermediate-composite-basketball.jpg',
    4,
    127,
    2095
),
new Product(
    'Adults Plain Cotton T-Shirt - 2 Pack',
    'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    4.5,
    56,
    799
)

];
console.log(newProducts[0]);