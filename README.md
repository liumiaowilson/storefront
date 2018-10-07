# Storefront
Storefront is a simple online shopping application built with React/Redux.

## Features
- Show the plates category and a list of plate products
- Hover on the product image to see related actions, either to view the product details or to add it to the cart
- Click on 'My Cart' to show a cart dropdown, and click anywhere else to hide it
- 'My Cart' dropdown will allow you to remove products from your cart, go to your cart page or checkout(which does nothing now)
- Product details page show all the information for the product and allows you to add it to the cart
- Cart page will show all items in your cart and you can add/remove items in your cart
- You can see the total price of the cart and choose to continue shopping or checkout

## Highlights
- Create-React-App sets up the scaffolding with webpack, babel, PWA, linting and pretty formatting support
- Files are organised first by functionality, then by features
- CSS3 grid and flexbox are used to manipulate layouts
- BEM methodology is used to organise styles
- Redux manages the state throughout the app
- Redux-saga processes the side effects such as asynchronous requests
- HTML5 elements and attributes such as aria labels are used to enhance accessibility
- Jest drives component testing largely by snapshots comparison and reducers/utilities by functional testing

## Assumptions
- Add a fake API to get information of the category 'plates'
- Omit API to get information of the select product, assuming all information needed has been fetched in the `getProducts` API
- Responsive design is skipped as the hover-action effect breaks the whole responsiveness, rendering it unavailable on tablets and mobiles
- Reusable components reside in `index.js` file, not extracted as single files, as they are not really widely reused now

## Instructions
Once installed, you should install the dependencies by running
```
npm install
```

To serve the application, run
```
npm start
```

To run the test suite, run
```
npm test
```
