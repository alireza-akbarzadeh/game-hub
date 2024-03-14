import React, { useState } from "react";

export const DebugValue = () => {
  // use debug value only work in a custom hook
  // and you can pass a value to it and the it's gone log to react devtools components tab
  // This hook will log the value passed to it and also return that value
  // It is used to debug values in React components
  // We pass a value to it and it will log that value to the React devtools
  // and if you pass a coll back function as second argument it's only log that in development mode and when you open the devtools

  return <div>DebugValue</div>;
};
