import React from "react";
import ValueProvider from './ValueContext';
import TabDemo from './tabDemo'

const App = () => {
  const data = {name:"anon", email:"anon@anon.com", major:""}

  return (
    <ValueProvider value={data}>
        <TabDemo/>
    </ValueProvider>
  )
}

export default App;