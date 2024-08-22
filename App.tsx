import * as React from 'react';
import Router from "./src/router/Router";


//STEP #1: ./app/src/main/java.MainActivity.kt
//STEP #2: App.js -> App(), HomeScreen(), DetailsScreen()
//STEP #3: create Different Components or Screens for screens and import in App.js
//STEP #4: add required dependencies and libraries for Stack and Drawer
//STEP #5: import gesture handler to index.js
//STEP #6: create Router 
//Step #7: create AuthContext in Router
//Step #8: set AuthContextType
//Styp #9: use signout type auth in HomeScreen
//Step #10: create SignInScreen component and use signIn there


function App(){
  return(
    <Router />
  )
};

export default App;
