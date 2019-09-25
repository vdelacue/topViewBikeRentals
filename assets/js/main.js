$(function () {

  // ---------
  // VARIABLES
  // ---------

  // target areas in index.html using jQuery selectors
  const addItemBtn = $(".add-item");
  const delItemBtn = $(".del-item");
  const accessoryList = $("#accessory-list");
  const bikeList = $("#bike-list");
  const shoppingCartList = $("#shopping-cart-list");

  //variables to reflect user interaction and change events
  let shoppingCartItemArr = [];
  let shoppingCartSubTotal = 0;
  let currentItem = {};
  let isBikeRented = false;

  // ---------
  // FUNCTIONS
  // ---------

  // GET AND RENDER ALL ITEMS
  // JSON data is provided (Simulate API call here and store the response in const `products`)
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

  // Function to display products acccording to product_type
  const displayProducts = data => {
    accessoryList.empty();
    bikeList.empty();

    for (let i = 0; i < data.length; i++) {
      if (data[i].product_type === "bike") {
        bikeList.append(`
        <div class="col-xs-4 col-md-4" style="width: 18rem;" data-id="${data[i].id}">
          <img src="${data[i].image}" class="card-img-top" alt="${data[i].name}">
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price: $${data[i].price}</li>
              <li class="list-group-item">Quanity: <input class="productQty" type="number" value="1" min="1"></li>
            </ul>
            <div class="card-body">
              <a href="" class="add-item btn btn-dark rounded-pill py-2 btn-block">Add to Cart</a>
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
              <li class="list-group-item">Quanity: <input class="productQty" type="number" value="1" min="1"></li>
            </ul>
            <div class="card-body">
              <a href="${isBikeRented ? "bicycles":"#rentBikeModal"}" data-product-id="${data[i].id}" class="add-item btn btn-dark rounded-pill py-2 btn-block">Add to Cart</a>
            </div>
          </div>
        </div>
    `)
      }
    }
  };
  // calling function on page load to see current products
  displayProducts(products);

  // -------------------
  // ON-CLICK FUNCTIONS
  // ------------------

  //Add Item to Cart function
  const handleAddItemToCart = (JSONdata) => {
    let itemID = $(this).data("product-id");
    let itemQty = productQty.val();
    // loop through array of products to find item / with backend this would be simple API call using the product id then push item to 
    currentItem = JSONdata.map(item => {
      if (item.id === itemID) {
        return {
          ...item,
          Qty: itemQty
        }
      }
    });
    console.log(currentItem);


    if (!isBikeRented) {
      alert("rent bike modal goes here")
    } else {
      shoppingCartItemList.push(currentItem);
      console.log(shoppingCartList)
      shoppingCartSubTotal += currentItem.price * currentItem.Qty;
      console.log(shoppingCartSubTotal);
    };

    addItemBtn.on("click", handleAddItemToCart(products));


  };

})