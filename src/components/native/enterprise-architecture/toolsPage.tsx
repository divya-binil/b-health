import React from "react";

interface EntprcArchitecture {
  contendetails: string;
}

const ToolsPage: React.FC<EntprcArchitecture> = ({ contendetails }) => {
  //const sanitizedHTML = testNodeHTML(contendetails);
  const sanitizedHTML = contendetails;
  return (
    <div
      style={{ display: "block", width: "100%", overflowX: "auto" }}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};

export default ToolsPage;
