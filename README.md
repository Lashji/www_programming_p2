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
#### Group name: veeveevee-ryhmä
#### [GitLab repo URL](https://course-gitlab.tuni.fi/tieta12-2019-2020/veeveevee-ryhma)

## Planned functionality    

#### Common:
- [x] Make a project skeleton
- [x] Make a use case diagram to clarify user roles
- [ ] Make the coursework initial project plan by 02.03.
- [ ] Write the first issues into the GitLab issue Board
- [ ] Assign issues for every group member

#### Frontend:
- [ ] Simple UI with react for testing functionality
- [ ] Handle state with redux
- [ ] Frontpage, index
- [ ] Product page
- [ ] Buy page
- [ ] Sell page
- [ ] Manage page
- [ ] Search component
- [ ] Log in UI

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
## Modules your group created in your Node project    
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
Image shcema is connected to product schema, as the images the product schema displays are stored as images.

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
## React and Redux
## Testing    
## Project timetable and division of work    


*Good luck and happy WWWdevvin’!*
