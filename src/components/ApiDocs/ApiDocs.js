import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>API Documentation</h1>
      <SwaggerUI url="http://localhost:8000/api/" /> {/* URL вашего OpenAPI */}
    </div>
  );
};

export default ApiDocs;