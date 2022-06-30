var categories = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0233/5133/files/work_to_weekend_banner4_91d3fa0b-5136-49b0-9de8-5233123750b0_800x.jpg?v=1652061590",
    title: "WATCHES"
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0233/5133/files/work_to_weekend_banner_800x.jpg?v=1652061826",
    title: "BAGS"
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0233/5133/files/work_to_weekend_banner2_800x.jpg?v=1652061645",
    title: "WALLETS"
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0233/5133/files/work_to_weekend_banner3_800x.jpg?v=1652061947",
    title: "BACKPACKS"
  },
];

var products = [
  {
    id:1,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_A43_1824copy_1400x.jpg?v=1643776105",
    desc:"Vegetable Tan Leather Watch",
    cat:"WATCHES",
    price:"159$"
  },
  {
    id:2,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/B24-1_1400x.jpg?v=1635406135",
    desc:"Tan Leather Watch",
    cat:"WATCHES",
    price:"159$"
  },
  {
    id:3,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_SK4_0140copy_1400x.jpg?v=1645573527",
    desc:"Black Leather Watch",
    cat:"WATCHES",
    price:"149$"
  },
  {
    id:4,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/B16-1_3126c711-7a44-42b8-ba84-985d5d331da1_1400x.jpg?v=1635405526",
    desc:"Nude Leather Watch",
    cat:"WATCHES",
    price:"159$"
  },
  {
    id:5,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_B17_1798copy_1400x.jpg?v=1636434315",
    desc:"Light Grey Leather Watch",
    cat:"WATCHES",
    price:"159$"
  },
  {
    id:6,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/RH2-1_1400x.jpg?v=1635478722",
    desc:"Blush Leather Watch",
    cat:"WATCHES",
    price:"159$"
  },
  {
    id:7,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/LBB2-1_1400x.png?v=1632989145",
    desc:"Lady Bev Brown Bag",
    cat:"BAG",
    price:"199$"
  },
  {
    id:8,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/NHB1-1_1400x.png?v=1633041343",
    desc:"The Natalie Black Bag",
    cat:"BAG",
    price:"299$"
  },
  {
    id:9,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/NHB2-1_1400x.png?v=1633041466",
    desc:"The Natalie Brown Bag",
    cat:"BAG",
    price:"299$"
  },
  {
    id:10,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_BL3_0096copy_1400x.jpg?v=1644969793",
    desc:"The Friday Black Bag",
    cat:"BAG",
    price:"179$"
  },
  {
    id:11,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_SAT3_1520copy_1400x.jpg?v=1635723925",
    desc:"The Saturday Surf Mist Bag",
    cat:"BAG",
    price:"90$"
  },
  {
    id:12,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/NB7-1_1400x.png?v=1633041032",
    desc:"The Dome Olive Bag",
    cat:"BAG",
    price:"179$"
  },
  {
    id:13,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/20220523_THEHORSE_AWL6_0115_1400x.jpg?v=1655337318",
    desc:"Annie Coffee Wallet",
    cat:"WALLET",
    price:"119$"
  },
  {
    id:14,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/AU2-1_1400x.png?v=1632966520",
    desc:"The August Brown Wallet",
    cat:"WALLET",
    price:"119$"
  },
  {
    id:15,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_SW1_0032copy_1400x.jpg?v=1645415877",
    desc:"The Tig Square Black Wallet",
    cat:"WALLET",
    price:"99$"
  },
  {
    id:16,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/AWL3-1_1400x.png?v=1632968484",
    desc:"Annie Olive Wallet",
    cat:"WALLET",
    price:"119$"
  },
  {
    id:17,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_SW2_0025copy_1400x.jpg?v=1645416857",
    desc:"The Tig Square Brown Wallet",
    cat:"WALLET",
    price:"99$"
  },
  {
    id:18,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/THEHORSE_SW3_0038copy_1400x.jpg?v=1645416825",
    desc:"The Tig Square Olive Wallet",
    cat:"WALLET",
    price:"99$"
  },
  {
    id:19,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/20220523_THEHORSE_BM7_0087_1400x.jpg?v=1655337702",
    desc:"The Mini Coffee Backpack",
    cat:"BACKPACK",
    price:"199$"
  },
  {
    id:20,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/MDBL1-1_1400x.png?v=1633020248",
    desc:"The Mini Dome Black Backpack",
    cat:"BACKPACK",
    price:"239$"
  },
  {
    id:21,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/MDBL2-1_1400x.png?v=1633020342",
    desc:"The Mini Dome Brown Backpack",
    cat:"BACKPACK",
    price:"239$"
  },
  {
    id:22,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/BM6-1_1400x.png?v=1632982519",
    desc:"The Mini Black Backpack",
    cat:"BACKPACK",
    price:"199$"
  },
  {
    id:23,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/BM2-1_1400x.png?v=1632981945",
    desc:"The Mini Brown Backpack",
    cat:"BACKPACK",
    price:"199$"
  },
  {
    id:24,
    img:"https://cdn.shopify.com/s/files/1/0233/5133/products/20210901_THEHORSE_MDBL3_1763copy_1400x.jpg?v=1635737398",
    desc:"The Mini Dome Olive Backpack",
    cat:"BACKPACK",
    price:"239$"
  },
]

export {categories,products}