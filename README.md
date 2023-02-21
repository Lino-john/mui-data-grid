# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## Instructions (API configuraions) 
  
  src/api/patient-api.js contains basic API configurations. 
  We can edit the baseURL and test the functionality with any other url.


## Following are the Major Libraries used in this project.

  1. Axios:  is a HTTP client library based on promises. It makes sending asynchronous HTTP requests to REST endpoints easier and helps you perform CRUD operations.
  2. Material UI : is an open-source React component library,which includes a comprehensive collection of prebuilt components.
  3. Material UI Data grid : Data tables display information in a grid-like format of rows and columns which includes features like sort, filter and edit. 



## Sort features

  By default, sorting is enabled in the ascending order of patient_id.

  In practice, when you click a column that is not sorted, 
  it will sort in ascending (asc). The next click will make it sort in descending (desc). 
  Another click will remove the sort (null), reverting to the order that the data was provided in.

## Columns Visibility

  patient_id, patient_name, patient_dob (date of birth), timestamp and state fields will all be immediately visible for all items.

  We can toggle the visibility of other columns by clicking on "Columns" toolbar menu and select the appropriate one.

## Error handling

  If REST API call fails,  it will show an error message. 
