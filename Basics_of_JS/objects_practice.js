let orders = [
  {
    order_number: 101,
    order_date: "31.12.2022",
    payment_method: "Credit Card",
    cargo_address: {
      city: "Istanbul",
      district: "Besiktas",
    },
    purchased_products: [
      {
        product_id: 5,
        product_name: "Iphone 13 Pro",
        product_url: "http://abc.com/iphone-13-pro",
        product_price: 1400,
      },
      {
        product_id: 5,
        product_name: "Iphone 13 Pro Max",
        product_url: "http://abc.com/iphone-13-pro-max",
        product_price: 1600,
      },
    ],
    customer_id: 12,
    seller: {
      firm_id: 45,
      firm_name: "Apple Turkey",
    },
  },
  {
    order_number: 102,
    order_date: "31.05.2021",
    payment_method: "Credit Card",
    cargo_address: {
      city: "Istanbul",
      district: "Nisantasi",
    },
    purchased_products: [
      {
        product_id: 3,
        product_name: "Iphone 14 Pro",
        product_url: "http://abc.com/iphone-14-pro",
        product_price: 1800,
      },
      {
        product_id: 4,
        product_name: "Iphone 14 Pro Max",
        product_url: "http://abc.com/iphone-14-pro-max",
        product_price: 2000,
      },
    ],
    customer_id: 13,
    seller: {
      firm_id: 45,
      firm_name: "Apple Turkey",
    },
  },
];

let order1_total =
  orders[0].purchased_products[0].product_price +
  orders[0].purchased_products[1].product_price * 1.18;

let order2_total =
  orders[1].purchased_products[0].product_price +
  orders[1].purchased_products[1].product_price * 1.18;

let overall_total = order1_total + order2_total;
console.log("Total amount of the first order: ", order1_total);
console.log("Total amount of the second order: ", order2_total);
console.log("Overall Total: ", overall_total);
