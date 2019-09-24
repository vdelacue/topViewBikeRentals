$(function () {

  // target areas in index.html using jQuery selectors
  const addItem = $("#add-item");
  const delItem = $("#del-item");
  const accessoryList = $("#accessory-list");
  const bikeList = $("#bike-list");
  const shoppingCartList = $("#shopping-cart-list");

  //
  const currentShoppingCart = [];

  //-------------------------GET AND RENDER ALL Items--------------------//
  //function that will be called after API call retrieves JSON data
  //funciton will take JSON data and dynamically render on page

  // (JSON data is provided therefore call is a simulation the response is stored in const variable products)
  const products = [{
      id: 1,
      name: "Adult Male Bike",
      price: 20.5,
      image: "http://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      product_type: "bike"
    },
    {
      id: 2,
      name: "Adult Female Bike",
      price: 20.5,
      image: "http://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      product_type: "bike"
    },
    {
      id: 3,
      name: "Kids Unisex Bike",
      price: 12.75,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      product_type: "bike"
    },
    {
      id: 4,
      name: "Adult Unisex Helmet",
      price: 4.0,
      image: "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 5,
      name: "Kids Unisex Helmet",
      price: 3.5,
      image: "http://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      product_type: "accessory"
    },
    {
      id: 6,
      name: "Insurance",
      price: 9.99,
      image: "http://via.placeholder.com/250x250?text=Insurance",
      product_type: "addon"
    }
  ];

  const displayProducts = function (data) {
    accessoryList.empty();
    bikeList.empty();

    for (let i = 0; i < data.length; i++) {
      if (data[i].product_type === "bike") {
        bikeList.append(`
        <div class="col-xs-4 col-md-4" style="width: 18rem;" data-id="${data[i].id}">
          <img src="${data[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price: $${data[i].price}</li>
              <li class="list-group-item">Quanity: <input class="product-quantity "type="number" value="1" min="1"></li>
            </ul>
            <div class="card-body">
              <a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Add to Cart</a>
            </div>
          </div>
        </div>
    `)
      } else {
        accessoryList.append(`
        <div class="col-xs-4 col-md-4" style="width: 18rem;" data-id="${data[i].id}">
          <img src="${data[i].image}" class="card-img-top" alt="${data[i].name}">
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price: $${data[i].price}</li>
              <li class="list-group-item">Quanity: <input class="product-quantity "type="number" value="1" min="1"></li>
            </ul>
            <div class="card-body">
              <a href="#" class="btn btn-dark rounded-pill py-2 btn-block">Add to Cart</a>
            </div>
          </div>
        </div>
    `)
      }

    }

  };
  displayProducts(products);

});