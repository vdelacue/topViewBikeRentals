$(function() {
  // target areas in index.html using jQuery selectors
  const addItemBtn = $("#add-item-btn");
  const delItemBtn = $("#del-item-btn");
  const accessoryList = $("#accessory-list");
  const bikeList = $("#bike-list");
  const shoppingCartList = $("#shopping-cart-list");

  //-------------------------GET AND RENDER ALL Items--------------------//
  //function that will be called after API call retrieves JSON data
  //funciton will take JSON data and dynamically render on page

  // (JSON data is provided therefore call is a simulation)
  const productsData = {
    products: [
      {
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
        image:
          "http://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
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
    ]
  };

  const displayProducts = function(data) {
    accessoryList.empty();
    bikeList.empty();

    let accessoryListItems = [];
    let bikeListItems = [];
    

    for (let i = 0; i < data.length; i++) {
      if( data[i].product_type === "bike") {

      } else {

      }
      let item = data[i];

      let li = $("<li class='list-group-item'>").data(note);
      let titleDiv = $("<div>");
      let titleSpan = $("<span class='font-weight-bold'>").text(note.title);
      let delBtn = $(
        `<i class='fas fa-trash-alt delete-note ml-2' data-id="${note.id}">`
      );
      let noteP = $("<p class='mt-2'>").text(note.body);

      titleDiv.append(titleSpan, delBtn);

      li.append(titleDiv, noteP);
      noteListItems.push(li);
    }

    noteList.append(noteListItems);
  };
});
