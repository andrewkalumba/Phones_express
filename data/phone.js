function Phone(type, name, size, weight, color, capacity, price, intelligence, description, reviews, image) {
    this.type = type;
    this.name = name;
    //this.slug = name.trim().toLowerCase().replace(/\s+/g,'-')
    this.size = size;
    this.weight = weight
    this.color = color;
    this.capacity = capacity;
    this.price = price;
    this.intelligence = intelligence
    this.description = description;
    this.reviews = reviews
    this.image = image

}

let iphone = [
    new Phone('iphone', 'iphone 16pro max', 'Width: 3.06 inches (77.6mm), Height: 6.42 inches (163mm), Depth: 0.32 inch (8.25mm)', '7.99 ounces (227 grams)', 'red, black, white, blue', '256GB, 512GB, 1TB', '$1896,47', 'Built into your iPhone, Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.', 'The iPhone 16 Pro and iPhone 16 Pro Max are smartphones developed and marketed by Apple Inc. Alongside the iPhone 16 and iPhone 16 Plus, they form the eighteenth generation of the iPhone, succeeding the iPhone 15 Pro and iPhone 15 Pro Max, and were announced on September 9, 2024, and released on September 20, 2024. The iPhone 16 Pro and iPhone 16 Pro Max include larger 6.3-inch and 6.9-inch displays, a faster processor, upgraded wide and ultra-wide cameras, support for Wi-Fi 7, larger batteries, and come pre-installed with the iOS 18 operating system. The Design and display; The backside of the iPhone 16 Pro in Desert Titanium. The iPhone 16 Pro models continue the edge-to-edge display design but introduce thinner display borders, giving them the thinnest borders of any Apple product to date; iPhone 16 Pro and iPhone 16 Pro Max feature larger 6.3-inch and 6.9-inch Super Retina XDR OLED displays, respectively, with iPhone 16 Pro Max offering the largest iPhone display ever.[5] Both models have always-on 13:6 aspect ratio displays, with 460 ppi density from a 2622 × 1206 (Pro) and 2868 × 1320 (Pro Max) resolution. Both are 120 Hz, HDR10, with 1000 nits brightness typical and 2000 nits at peak. Both Pro models come in four colors, the new Desert Titanium, Natural Titanium, White Titanium and Black Titanium, offering a lightweight, scratch-resistant exterior.[6] The Desert Titanium color replaced the Blue Titanium color used on the iPhone 15 Pro and iPhone 15 Pro Max.', 'best phone ever', '../images/iphone-16.png'),

    new Phone('iphone', 'iphone 15pro max', 'Width: 3.02inches (76.7mm) Height: 6.29inches (159.9mm), Depth: 0.32 inch (8.25mm)', '7.81 ounces (221 grams)', 'red, black, white, blue', '256GB, 512GB, 1TB', '$1706,83', 'Built into your iPhone, Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly. With groundbreaking privacy protections, it gives you peace of mind that no one else can access your data — not even Apple.', 'The iPhone 15 Pro and iPhone 15 Pro Max are smartphones that were developed and marketed by Apple Inc. They are the seventeenth-generation flagship iPhones, succeeding the iPhone 14 Pro and iPhone 14 Pro Max. The devices were unveiled alongside the iPhone 15 and iPhone 15 Plus during the Apple Event at Apple Park in Cupertino, California, on September 12, 2023. Pre-orders began on September 15, and the devices were made available to the general public on September 22. The iPhone 15 Pro and iPhone 15 Pro Max were discontinued on September 9, 2024, following the announcement of the iPhone 16 Pro and iPhone 16 Pro Max. Similar to the iPhone 15 and 15 Plus, the 15 Pro and Pro Max replaced the proprietary Lightning connector with USB-C to comply with European Union mandates. They also support Apple Intelligence, which uses AI to prioritize privacy-centric functions. The iPhone 15 Pro features the first major redesign of the outer shell of the device since the iPhone 12 Pro in 2020, featuring rounded edges, a slightly curved display, and back glass. The enclosure of the iPhone 15 Pro and iPhone 15 Pro Max is made of grade 5 titanium, unlike the stainless steel frame of previous Pro models. The display bezels have also been reduced from 2.2 mm to 1.55 mm.[10] The phone is available in four colors: natural titanium, blue titanium, white titanium, and black titanium. It is also the first premium iPhone since the iPhone X to not come in the gold color option.', 'What a light nice iphone', '../images/iphone15.png'),

    new Phone('iphone', 'iphone 14pro max', 'Width: 77.6mm, Height: 160.7mm, Thickness: 7.85mm', '240 grams', 'Space Black, Silver, Gold, and Deep Purple', '256GB, 512GB, 1TB', '$1706,83', 'Non', 'The iPhone 14 Pro and iPhone 14 Pro Max are smartphones that were developed and marketed by Apple Inc. They are the sixteenth generation flagship iPhones, succeeding the iPhone 13 Pro and Pro Max. The devices were unveiled alongside the iPhone 14 and 14 Plus during the Apple Event at Apple Park in Cupertino, California, on September 7, 2022,[8][9] and were made available on September 16, 2022. The iPhone 14 Pro and iPhone 14 Pro Max were the first iPhones to have a new type of display cutout called "Dynamic Island", replacing the notch design that has been in use since the iPhone X was introduced. Along with the iPhone 14, iPhone 14 Pro models add bidirectional satellite connectivity to contact emergency services when out of range of Wi-Fi and cellular networks. Along with the iPhone 14 and 14 Plus, these were the last iPhones to use a Lightning port; the iPhone 14 Pro models were discontinued in September 2023, and their successors, the iPhone 15 Pro and 15 Pro Max, replaced the Lightning port with USB-C.[13][14] iPhone 14 Pro models (as well as the iPhone 14 models) sold in the United States dropped support for physical SIM cards, making them the first iPhone models since the CDMA variant of the iPhone 4 to lack a discrete SIM card reader. On November 6, 2022, COVID-19 affected product assembly in Chinese factories, resulting in longer shipment times for some customers. On September 12, 2023, Apple discontinued and removed iPhone 14 Pro and iPhone 14 Pro Max from their official website following the announcement of the iPhone 15 Pro, and 15 Pro Max as their successors. In May 2024, Apple began selling refurbished iPhone 14 Pro models on their official website. Design is Back of the iPhone 14 Pro Max Space Black. The design of the iPhone 14 Pro and iPhone 14 Pro Max is almost identical to older iPhone models,  such as the iPhone 12 Pro and 13 Pro. The iPhone 14 Pro and iPhone 14 Pro Max have a new front camera called the Dynamic Island.', 'one of the very best', '../images/iphone14Pic3.jpg')
];

let samsung = [
    new Phone('samsung', 'galaxy s25', '146.9 x 70.5 x 7.2', '5.71 ounces (162 grams)', 'Blue, navy, mint, silver, black, red, rose gold', '128GB, 256GB', '$799.99', 'samsung AI', 'Unlike previous generations, all Samsung Galaxy S25 phones launched with 12 GB of RAM. While you can`t customize the amount of RAM on an S25, like previous generations of the S Series of phones, you can customize the amount of storage. However, in South Korea and Greater China (Mainland China, Hong Kong and Taiwan) market, 16 GB of RAM option exists for certain Samsung Galaxy S25 Ultra models. For South Korean model, Titanium Jetblack-colored Galaxy S25 Ultra with 1 TB storage comes with 16 GB of RAM. For Greater China, regardless of colors, 1 TB storage option comes with 16 GB of RAM. The Galaxy S25 phones were launched with Android 15, and Samsung One UI 7. Samsung has promised 7 years of OS and security updates to the S25 series of phones (meaning support may end in 2032). The devices are additionally shipped with Galaxy AI, Samsung`s advanced AI features on Galaxy devices. This year, Galaxy AI being a relatively young technology, now has new updates with S25 Series.', 'The best', '../images/galaxyS25.jpg'),

    new Phone('samsung', 'galaxy s25 Ultra', '162.8 x 77.6 x 8.2', '7.68 ounces (218 grams)', 'Black, gray, silver, white, rose gold, black, and green', '256GB, 512GB, 1TB', '$1,299.99', 'samsung AI', 'The Samsung Galaxy S25 lineup includes 4 different models of phones, Samsung Galaxy S25 Ultra, and the Samsung Galaxy S25 Edge. Although not much is known about the S25 Edge, early builds teased by Samsung on stage show a slimmer version of the normal S25. The inclusion of the S25 Edge marks a new addition to the line up of the S Series of smartphones and the return of Galaxy S Edge series since 2016`s Samsung Galaxy S7 Edge. The S25 and S25+ share the same display size as their predecessors, whereas the top-end S25 Ultra has a slightly larger display. The flagship S25 features a flat 6.2 inch (155 mm) display. The S25+ has similar hardware, but with a larger 6.7 inch (168 mm) form factor. The S25 Ultra is slightly larger than its predecessor, with a screen size of 6.9 inches (175 mm). The S25 Ultra also features rounded corners as part of its design, making it align more with the rest of the Galaxy S Series of smartphones. The S25 lineup of smartphones is powered by the Snapdragon 8 Elite chipset, which, unlike previous generations of the S Series, will be used in all S25 smartphones worldwide. The colors of the S25 Ultra: Titanium Silverblue, Black, Whitesilver and Gray The S25 and S25+ smartphones have an aluminium body and a glass back, similar to the design of their predecessors. Both the S25 and S25+ use Gorilla Glass Victus 2 for both the front display and rear glass panel.[15] They come in 4 (four) standard colours: Icy Blue, Mint, Navy and Silver Shadow, with an additional 3 (three) colours being available only through Samsung`s online website: Pink Gold, Coral Red and Blue Black. The S25 Ultra has a titanium body and a glass back, similar to the S24 Ultra. However, the S25 Ultra features rounded corners, departing from the S24 Ultra`s squared corners. Additionally, the S25 Ultra uses Gorilla Glass Armor 2 for its front display and rear panel for improved durability and reduced glare. The S25 Ultra comes in 4 (four) standard colours: Titanium Silver Blue, Titanium Black, Titanium White Silver and Titanium Grey, as well as 3 (three additional colours that are only available through Samsung`s online website: Titanium Jade Green, Titanium Jet Black and Titanium Pink Gold.', 'one in a million', '../images/galaxyUltra.jpg'),

    new Phone('samsung', 'galaxy s24 Ultra', '162.3 x 79.0 x 8.6', '8.18 ounces (232 grams)', 'Black, violet, gray, yellow, blue, green, orange', '256GB, 512GB, 1TB', '$1,299.99', 'samsung AI', 'The Galaxy S24 series includes four devices, which share the same lineup and screen sizes as the previous Galaxy S23 series. The flagship Galaxy S24 features a flat 6.2-inch (155 mm) display. The Galaxy S24+ features similar hardware in a 6.7-inch (168 mm) form factor. The Galaxy S24 Ultra features a flat 6.8-inch (173 mm) display, with sharp edges, distinct from its base model counterpart. The S24 and S24+ phones are powered by Snapdragon 8 Gen 3 in the U.S., Canada, China, Macau, Hong Kong, Taiwan, and Japan, while a Exynos 2400 is used in the rest of the world. The S24 Ultra is equipped with the Snapdragon 8 Gen 3 in every market. Conversely, the S24 FE comes with an underclocked variant of the Exynos 2400 called the Exynos 2400e in every market including North America. The Galaxy S24 and S24+ use a "Dynamic AMOLED 2X" display with HDR10+ support, 2600 nits of peak brightness, LTPO backplane, "dynamic tone mapping" technology, and Corning Gorilla Glass Victus 2. The Galaxy S24 FE has 1900 nits of peak brightness and LTPS backplane. All models use an ultrasonic in-screen fingerprint sensor, except the S24 FE which uses an optical in-screen fingerprint sensor. The S24 series uses a variable refresh rate display with a range of 1 Hz or 24 Hz to 120 Hz,[17] except the S24 FE which has a range of 60 Hz to 120 Hz[citation needed]. The Galaxy S24 Ultra, in addition to the features of the S24+, uses Corning Gorilla Glass Armor glass on its display, but it drops the curved edges seen in the Galaxy S23 Ultra.', 'my love for this phone is unbelievable', '../images/galaxyS24.jpg')
]

let nokia = [
    new Phone('nokia', 'nokia C20 Plus', '6.50-inch (720x1600)', '154grams', 'Ocean Blue ', '128MB', '$800', 'Non', 'The Nokia C20 Plus runs Android Go and was launched quite recently. Priced starting from Rs. 8,999 for the 2GB RAM variant, its underpowered and doesnt really justify its cost. The positioning is questionable, since it will be going up against Micromax recently launched In 2b, the Redmi 9i, and Realme C21Y. The Nokia C20 Plus features a simple and practical design. The textured back has fine ridges, which make for a decent grip. With a 6.5-inch display, it has a large footprint and is not a device that can easily be operated with one hand. It`s also quite thick at 9.35mm and heavy at 204g. The plastic unibody felt sturdy and was good at rejecting fingerprints with its matte finish. The same can be said about the display glass, which remained smudge-free in regular use. There`s a 3.5mm headphone jack at the top and a Micro-USB port at the bottom. The circular camera module protrudes a bit from the already thick body, and the LED flash is placed next to it. The speaker is under a slit located at the bottom right corner and there`s a tiny dimple to help prevent sound from getting muffled when this phone is placed on a flat surface.', 'Good', '../images/nokiaC20Plus.jpeg'),

    new Phone('nokia', 'Nokia 2780 Flip', '2.70-inch (240x320)', '160grams', 'Blue, Red', '512MB', '$1000', 'Non', 'Nokia 2780 Flip mobile was launched on 15th November 2022. The phone comes with a 2.70-inch primary display offering a resolution of 240x320 pixels. It also features a 1.77-inch as its second display, with a resolution of 128x160 pixels.Nokia 2780 Flip comes with 4GB of RAM. As far as the cameras are concerned, the Nokia 2780 Flip on the rear packs 5-megapixel camera. Nokia 2780 Flip is based on Firefox OS KaiOS 3.1 and packs 512MB of inbuilt storage that can be expanded via microSD card (up to 32GB). The Nokia 2780 Flip measures 202.10 x 58.00 x 11.47mm (height x width x thickness) . It was launched in Blue and Red colours. It bears a plastic body. Connectivity options on the Nokia 2780 Flip include Wi-Fi 802.11 b/g/n, GPS, Bluetooth v4.20, and USB Type-C.', 'Fair', '../images/nokiaFlip.jpg'),

    new Phone('nokia', 'Nokia 6310 (2021)', '2.80-inch', '95grams', 'Black, Dark Green, Yellow, Light Blue', '8MB', '$100', 'Non', 'Nokia 6310 (2021) mobile was launched on 27th July 2021. The phone comes with a 2.80-inch display.Nokia 6310 (2021) comes with 16MB of RAM. The Nokia 6310 (2021) runs Series 30+ and is powered by a 1150mAh battery. As far as the cameras are concerned, the Nokia 6310 (2021) on the rear packs 0.3-megapixel camera.Nokia 6310 (2021) is based on Series 30+ and packs 8MB of inbuilt storage that can be expanded via microSD card (up to 32GB). The Nokia 6310 (2021) is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. It was launched in Black, Dark Green, Yellow, and Light Blue colours. Connectivity options on the Nokia 6310 (2021) include Wi-Fi, Bluetooth v5.00, Micro-USB, and FM radio.', 'Portable device', '../images/nokia6310.jpg')
]

function Content(maincontent) {
    this.maincontent = maincontent
}
let homeContent = [
    new Content('Buy, sell or repair your mobile phone at Mobile Phone Hub. With us you get fast service of the highest quality directly. We have helped nearly 1 million customers, with over 10 years of experience and 35 stores around Sweden we know what it takes to give your phone new life. We offer everything from repairs and screen replacements to protection, buying used mobile phones and refurbished phones always with a passion for sustainability.'),

    new Content('Why wait? Our knowledgeable technicians are ready to help you in no time. We do most repairs while you wait, so you can quickly get back to your everyday life without any hassle. In addition, we are a green partner in the mobile world, and with our sustainable thinking we contribute to a more environmentally friendly future. Trust Mobile Phone Hub for safe and smooth mobile ownership. Come in today and experience the difference. We are always close to you!')
]

const allPhones = [...iphone, ...samsung, ...nokia];

export { allPhones, iphone, samsung, nokia, homeContent};


