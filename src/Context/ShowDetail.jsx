import * as React from "react";

export const ShowDetailContext = React.createContext({});

export const ShowDetailProvider = ({ children }) => {
  const [showDetails, setShowDetails] = React.useState(false);
  const [visitorData, setVisitorData] = React.useState({});

  return (
    <ShowDetailContext.Provider
      value={{
        showDetails,
        setShowDetails,
        visitorData,
        setVisitorData,
      }}
    >
      {children}
    </ShowDetailContext.Provider>
  );
};
