***Welcome to the home of your group's TIETA12, part 2 coursework code and documentation!***

This README.md file is where your group writes your project plan/project report.

When you write it, you must use Markdown. [Documentation for GitLab Flavored Markdown (GFM)](https://docs.gitlab.com/ee/user/markdown.html).

The directory structure of the code is up to your group to decide, but this README.md file must remain in place.

# Initial project plan document
The headers that must be present in this document are shown here. 

For instructions on what to add under these headers, see the course project assignment document, [see the coursework assignment document](https://docs.google.com/document/d/1ctG6mURrs1WlqwwPnMOFE_mSIEhZVCjp2XGefAZMdxQ/edit#heading=h.vsanic5plbto)

## Course project group information   
#### Group information: 
- Pietari Pakarinen; 431505; pietari.pakarinen@tuni.fi
- Lassi Palojärvi; 432220; lassi.palojarvi@tuni.fi
- Iiro Sinisalo; 425196; iiro.sinisalo@tuni.fi
#### Group name: veeveevee-ryhmä
#### [GitLab repo URL](https://course-gitlab.tuni.fi/tieta12-2019-2020/veeveevee-ryhma)

## Planned functionality   

#### Timetable:
- coursework initial project plan by 02.03
- Assign issues for every group member 25.2
- Divide responsibilities 25.2

#### Common:
- [ ] Make the coursework initial project plan by 02.03
- [x] Make a project skeleton
- [x] Make a use case diagram to clarify user roles
- [x] Write the first issues into the GitLab issue Board
- [ ] Assign issues for every group member
    - division of responsibility areas among group members

#### Frontend:
- [ ] Simple UI with react for testing functionality
    - Design Mockup UIs for each page and component
    - Design components
        - Divide each page into components
- [ ] Handle state with redux
    - Design state management between components
- [ ] Frontpage, index
    - Design Mockup UI for the frontpage
    - Design state management between frontpage components
- [ ] Product page
    - Design Mockup UI for the Product page
    - Design state management between frontpage Product page
- [ ] Buy page
    - Design Mockup UI for the Buy page
    - Design state management between frontpage Buy page
- [ ] Sell page
    - Design Mockup UI for the Sell page
    - Design state management between frontpage Sell page
- [ ] Manage page
    - Design Mockup UI for the Manage page
    - Design state management between frontpage Manage page
- [ ] Search component
    - Design Mockup search component
    - Design state management for the search component
- [ ] Log in UI
    - Design Mockup Log in component

#### Backend:
- [ ] Routes
- [ ] Models
- [ ] View
- [ ] Controllers
- [ ] User control
- [ ] Authentication with passport
- [ ] Testing, write unit tests

#### Use case diagram showcasing what different roles can do:

![alt text](media/WWWUseCase.jpg "Use case diagram showcasing what different roles can do")

## Pages and navigation    
#### Page architecture
![alt text](media/pages&navigation.png "Navigation")

Page architecture for the webstore

#### Frontpage, Löydöt.fi
![alt text](media/tieta12proto-frontpage.jpg "The frontpage of Löydöt.fi")

The frontpage of our webstore, Löydöt.fi. It has a search bar and images of products the shopkeeper has put up for sale.

#### Product page
![alt text](media/tieta12proto-item.jpg "The page the customer sees when he selects an item.")

On an item page, the customer can view images of the product and read a description of it. There are buttons for buying the page and returning.

#### Purchasing page
![alt text](media/tieta12proto-Buy.jpg "The page the customer sees when buying products")

The buy page is the page the customer sees when he clicks the buy button on a products' page. From the buy page the customer can buy the product.


#### Sell page
![alt text](media/tieta12proto-seller.jpg "The page the customer sees when selling products")

The sell page has a form the seller has to fill to sell his product to the shopkeeper. On the sell page he can make an offer using the information he put into the form.

#### Sign in
![alt text](media/tieta12proto-Sign_in.jpg "The page for signing in to the application")

The page for signing in to the application.

#### Sign up
![alt text](media/tieta12proto-Sign_up.jpg "The page for registeing to the application")

The page for registeing to the application.

#### Shopkeepers' view
![alt text](media/tieta12proto-Shopkeeper.jpg "The page from which the shopkeeper can view, accept and decline offers")

The page from which the shopkeeper can view, accept and decline offers.


The administrator can see and edit whatever he needs to.

## Modules your group created in your Node project
- Project uses mvc as its project architecture
- Project will use stripe to handle payments

#### Modules:
- Router
- User controller
- Client controller
- Product controller
- Database

## Mongo database and Mongoose schemas    

#### Name of the model
DB 
Handles database connection
Methods:
- Connect
- Disconnect
- Error

#### Schemas

Product schema is connected to user via Original user attribute. The original user is who sold the product to the shopkeeper.
Image schema is connected to product schema, as the images the product schema displays are stored as images.

The Role of the user schema in the system is to determine what the user is allowed to do on the website.
- User
    - Username, String
    - Password, String
    - Id, Number
    - Role, String
    - Email, String

The role of the product schema is to give a standard for the products on the website.
- Product
    - Category, String
    - Name, String
    - Offer price, Number
    - Sale price, Number
    - Keywords, [String]
    - Images, [String]
    - Id, Number
    - Original User, String

The role of the image schema is to allow us to store images into our database.
- Image
    - data, Buffer
    - type, String

## API
Client will be served from http://localhost:3000/ root directory.
Api routes will be served from http://localhost:3000/api/ 

- These routes are:
    - /user
    - /product

## React and Redux
React app is going to use Redux for state management
We will use React router to handle history

- Pages:
    - /
    - /manage
    - /login
    - /register
    - /product/:id
    - /buy
    - /sell

## Testing

Testing will done with Mocha and chai libraries on backend side.
Testing on react app will be done with Jest library

## Project timetable and division of work    

Division of work:
- Backend:
    - Mostly Lassi
    - Iiro most likely will help, Pietari might
- Frontend
    - Pietari and Iiro will work on seperate pages as they see fit
- Testing
    - Will be done later in the project by whoever has the time

Timetable:
First priority is to get a working MVP of frontpage and sign in and sign up for frontend
Routes for backend are done. Images and passporting are in the near future.
We're currently thinking about improving project architecture.

*Good luck and happy WWWdevvin’!*
