# Top View Bike Rentals
bike rental simulation site

# **Top View Bike Rentals**
a single page bike rental simulation site. The site includes a complete checkout process, which means users are able to select the type of product, select the number of product, view a summary before checkout, and in the end, check out. Site is intended to demonstrate a checkout experience that is as smooth as possible.
Users cannot check out with accessories or add-ons only - they must come with a bike selection.  [Top View Bike Rental Website](https://vdelacue.github.io/topViewBikeRentals/)

---

# **Technologies and Depencies**

This application implements a simple web based bike rental storefront using the `HTML5`-basic wireframe and layout of page, `CS3`-style content and responsiveness, `JavaScript/ES6`-interactivity and overall site functionality, `JQuery`-JS library to help target page elements and render content/logic, `Bootstrap`-style content and responsiveness, `FontAwesome`-icons and fonts, `Google Fonts`-custom fonts, `cloudinary`-hosting for pictures and videos. 

Note: The site content is dynamically rendered not hard coded on the client side. Client side dynamic content code is written in `javascript` implementing features of ECMA16.

--- 

## `User Interface` 
The user lands on top of page and can either click the 'see bike rentals button', scroll down the page to bicycles section, or click 'bicycles' link in nav bar.
User can then view the selections of bicycles to rent and can select a quantity andclick add to cart if they would like to rent.
User then has the option to select accessories or add-ons. 

Note: the user cannot select an accessory or add-on unless a bike rental is in their cart. A modal will appear if they attempt to add an accessory or add-on without a bike rental that instructs user to rent a bike first.


---

# **Code Example**
Below is a sample of the logic used to handle click event for adding item to cart
```js
  //add item to cart button
  $('.add-item').click(function (event) {
    event.preventDefault();
    isAddingItem = true;
    let itemID = $(this).data('id');
    let itemQty = $(".productQty").val();
    products.map(item => {
      if (item.id === itemID) {
        currentItem = {
          ...item,
          Qty: parseInt(itemQty)
        }
      }
    });
    handleIsBikeRented();
  });
```
---

# **Top View Bike Rentals GIF demos
Unavailable at this time please check back later
 

MIT © [Vanessa de la Cuetara](2019)

