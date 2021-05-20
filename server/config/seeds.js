const db = require('./connection');
const { User, Product, Category, Order } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Craft Beer',
      description: 'Hop on over to see some local craft beers.',
      image: 'https://images.unsplash.com/photo-1581338772961-e1a4c9b36580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
    },
    { name: 'Fresh Produce',
      description: 'Check out some local farmers selling fresh produce.',
      image: 'https://images.unsplash.com/photo-1543076659-9380cdf10613?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZydWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    { name: 'Jewelry',
      description: 'Handmade jewelry made with love.',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    { name: 'Artisan Cheese',
      description: 'We like it cheesy.',
      image: 'https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    { name: 'Fresh Meat',
      description: 'So fresh its still mooing.', 
      image: 'https://images.unsplash.com/photo-1616589717939-cda1709a292e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1lYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    { name: 'Handmade Items',
      description: 'Incense, soap, babies...', 
      image: 'https://images.unsplash.com/photo-1618840313409-66c0d92d6f26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNvYXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    { name: 'Baked Goods',
      description: 'Cookies, cakes, bread...',
      image: 'https://images.unsplash.com/photo-1598839950984-034f6dc7b495?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2llc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60' 
    },
    { name: 'Wine',
      description: 'Wine and dine.',
      image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2luZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/baked-goods-2-min.jpg',
      category: categories[6]._id,
      price: 10,
      quantity: 20
    },
    {
      name: 'Necklaces',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/jewelry-1-min.jpg',
      category: categories[2]._id,
      price: 30,
      quantity: 5
    },
    {
      name: 'Bread Loaves',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/baked-goods-1-min.jpg',
      category: categories[6]._id,
      price: 4,
      quantity: 15
    },
    {
      name: 'Oranges',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/produce-3-min.jpg',
      category: categories[1]._id,
      price: 3,
      quantity: 10
    },
    {
      name: 'White Wine',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/wine-1-min.jpg',
      category: categories[7]._id,
      price: 40,
      quantity: 5 
    },
    {
      name: 'Handmade Soap',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/soap-1-min.jpg',
      category: categories[5]._id,
      price: 15,
      quantity: 9
    },
    {
      name: 'Lamp Chops',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/meat-2-min.jpg',
      category: categories[4]._id,
      price: 15,
      quantity: 20
    },
    {
      name: 'Steak',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/meat-1-min.jpg',
      category: categories[4]._id,
      price: 10,
      quantity: 16
    },
    {
      name: 'Munster',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/cheese-3-min.jpg',
      category: categories[3]._id,
      price: 7,
      quantity: 25
    },
    {
      name: 'Cheese tray',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/cheese-2-min.jpg',
      category: categories[3]._id,
      price: 35,
      quantity: 5
    }
  ]);

  console.log('products seeded');

  await Order.deleteMany();

  const orders = await Order.insertMany([
    {
      products: [products[0]._id, products[1]._id, products[2]._id],
      sellerId: 'Pamela',
      buyerId: 'Elijah'
    },
    {
      products: [products[1]._id],
      sellerId: 'Bobbi',
      buyerId: 'Pamela'
    },
    {
      products: [products[1]._id, products[4]._id],
      sellerId: 'Bobbi',
      buyerId: 'Elijah'
    }
  ]);

  console.log('orders seeded');


  await User.deleteMany();


  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@test.com',
    password: 'password12345',
    products: [products[0], products[2], products[3]],
    sales: [
      orders[0]
    ],
    purchases: [
      orders[1]
    ]
  });

  await User.create({
    firstName: 'Bobbi',
    lastName: 'Graham',
    email: 'bgraham@test.com',
    password: 'password12345',
    products: [products[1], products[4], products[8], products[9]],
    purchases: [],
    sales: [
      orders[1],
      orders[2]
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@test.com',
    password: 'password12345',
    purchases:[
      orders[0],
      orders[2]
    ],
    sales:[]
  });

  console.log('users seeded');

  process.exit();
});