# GadgetHeaven

GadgetHeaven is your go-to destination for the latest and greatest gadgets. This e-commerce platform is designed to provide a seamless shopping experience for gadget enthusiasts. Below you'll find details about the project, its functionalities, and how to navigate through it.

## Project Overview

**Platform Name:** GadgetHeaven

**Description:**
An e-commerce website developed based on a detailed Figma design. The platform features a structured navigation bar, product categories, individual product details pages, a shopping cart, a wishlist system, and product filtering. The Context API manages the cart and wishlist with optional LocalStorage for data persistence.

## Features

### Navbar Section

- **Menu Items:** Logo, Brand Name, Dashboard, Stats
- **Active Route Indicator:** Highlights the active route

### Home Page

- **Banner Section:** An attractive banner with a button linking to the Dashboard page
- **Categories Sidebar:** Displays categories such as computers, phones, smart watches, chargers, and power banks
- **Gadgets Cards:** Displays 6-9 gadgets in a card grid format with product details and a 'Details' button

### Details Page

- **Product Details:** Displays image, name, price, description, specifications, and availability
- **Actions:** Add to Cart (cart icon) and Add to Wishlist (heart icon). Prevent duplicate additions to the wishlist

### Dashboard Page

- **Tabs:** Cart and Wishlist
- **Cart Tab:** Displays cart items with total price and a 'Sort by Price' button for sorting by descending price
- **Wishlist Tab:** Displays wishlist items

### Additional Pages

- **404 Page:** Custom error page
- **New Route/Page:** Includes an additional meaningful route

### Miscellaneous

- **Reload Handling:** Prevents errors on page reload
- **Toast Notifications:** Displays messages when adding items to cart or wishlist
- **Dynamic Titles:** Each page has a dynamic title
- **Favicon:** Custom favicon for the website

## Challenge Tasks

- **Background Color Change:** Different background colors for the home page and other pages using the `useLocation()` hook
- **Purchase Modal:** Congratulates the user on purchase, clears the cart, and navigates back to the home page without page reload using `useNavigate()` hook
- **Cart Limit:** Limits cart total to $1000, handles item removal, and updates total price
- **Wishlist Management:** Allows moving items from wishlist to cart and handles errors if the cart exceeds $1000
- **Statistics Page:** Displays a Composed Chart with Price vs. Product Name, Area and Bar data according to Prices, and scatter data according to ratings

## Data Structure

Each product data set includes:

- `product_id`
- `product_title`
- `product_image`
- `category`
- `price` (minimum $50)
- `description`
- `Specification[]`
- `availability` (true/false)
- `rating`

## Implementation Details

- **Data Management:** Context API and LocalStorage
- **Routing:** React Router for navigation
- **Rating Component:** React Rating Star Components
- **State Management:** Context API for global state management

## Documentation

### Live Website

[Live Link](https://defective-bucket.surge.sh/)

### Requirement Document

[Requirement Document](#)

### React Fundamentals Used

- Component-based architecture
- State and props
- Hooks (`useState`, `useEffect`, `useContext`, `useNavigate`, `useLocation`)
- Routing with React Router

### Data Handling

- Context API for state management
- LocalStorage for data persistence

### Website Features

1. Structured navigation and category-based layout
2. Shopping cart and wishlist functionalities
3. Product sorting and filtering
4. Responsive design
5. Dynamic page titles and notifications

## Conclusion

GadgetHeaven offers a rich user experience with its organized layout, intuitive navigation, and interactive features. The use of modern React practices ensures a smooth and efficient performance, making it a top destination for gadget shopping.

For further details, explore the website and the provided documentation.
