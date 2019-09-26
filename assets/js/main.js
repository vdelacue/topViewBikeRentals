$(function () {

  // ---------
  // VARIABLES
  // ---------

  // target areas in index.html using jQuery selectors
  const $addItemBtn = $(".add-item");
  const $delItemBtn = $(".del-item");
  const $accessoryList = $("#accessory-list");
  const $bikeList = $("#bike-list");
  const $shoppingCartList = $("#shopping-cart-list");

  //variables to reflect user interaction and change events
  let shoppingCartListArr = [];
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
    $accessoryList.empty();
    $bikeList.empty();

    for (let i = 0; i < data.length; i++) {
      if (data[i].product_type === "bike") {
        $bikeList.append(`
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
              <button data-id="${data[i].id}" class="add-item btn btn-dark rounded-pill py-2 btn-block">Add to Cart</button>
            </div>
          </div>
        </div>
    `)
      } else {
        $accessoryList.append(`
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
              <button data-id="${data[i].id}" class="add-item btn btn-dark rounded-pill py-2 btn-block">Add to Cart</button>
            </div>
          </div>
        </div>
    `)
      }
    }
  };
  // calling function on page load to see current products
  displayProducts(products);


  let handleIsBikeRented = () => {
    console.log(currentItem)
    if (!isBikeRented && currentItem.product_type != "bike") {
      alert("rent bike modal goes here")
    } else {
      if (shoppingCartListArr.icludes(currentItem.id)) {
console.log("item is already in cart")
      } else {
        shoppingCartListArr.push(currentItem);
        console.log(shoppingCartListArr)
        shoppingCartSubTotal += currentItem.price * currentItem.Qty;
        console.log(shoppingCartSubTotal);
        isBikeRented = true;
      }
    };
  }

  let addItemToCart = () => {
    console.log("adding " + currentItem + " to Cart")
    //function will check to see if the current item is in the cart if it is it will adjust the quantity and subtotal
    //if item is not in cart it will push to cart 
  }
  // -------------------
  // ON-CLICK FUNCTIONS
  // ------------------

  //Add Item to Cart function


  $('.add-item').click(function (event) {
    event.preventDefault();
    console.log("condition hit")
    let itemID = $(this).data('id');
    let itemQty = $(".productQty").val();
    console.log(itemID);
    products.map(item => {
      if (item.id === itemID) {
        currentItem = {
          ...item,
          Qty: parseInt(itemQty)
        }
      }
    });
    console.log(currentItem);
    handleIsBikeRented();
  });

})