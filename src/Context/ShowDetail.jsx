import * as React from "react";

export const ShowDetailContext = React.createContext({});

export const ShowDetailProvider = ({ children }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <ShowDetailContext.Provider
      value={{
        showDetails,
        setShowDetails,
      }}
    >
      {children}
    </ShowDetailContext.Provider>
  );
};
