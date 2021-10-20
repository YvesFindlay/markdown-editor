import React from "react";

const initialContext = {
  markdownText: "",
  setMarkdownText: () => {},
};

export default React.createContext(initialContext);
