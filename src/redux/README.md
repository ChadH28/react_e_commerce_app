root-reducer.js will hold all the reducers performed in the app. almost like a index.js file

user.reducer will hold all user reducers
user.actions will hold all user actions


from user.actions => user.reducers => root.reducer => store

connect and mapstatetoprops will be used when we want to connect our props from the reducers to the components
connect is a higher component which connects the two functions of mapping the state with the designated component