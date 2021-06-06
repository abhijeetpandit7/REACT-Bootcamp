import React from "react";

const authContext = React.createContext({
  onAddExpense: () => {},
});

export default authContext;
