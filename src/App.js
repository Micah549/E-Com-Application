import React from 'react';
import FirebaseAuthHookProvider from './firebase/FirebaseAuthHook';
import FireBaseDataHookProvider from './firebase/FireBaseDataHook';
import Routing from "./routes/Routing";

function App() {
  return (
    
    <div className="App" >
      {/* call hooks here in app js */}
      
    <FirebaseAuthHookProvider> 
      <FireBaseDataHookProvider> 
     <Routing/>
    </FireBaseDataHookProvider>
    </FirebaseAuthHookProvider>
    </div>

  );
}

export default App;
