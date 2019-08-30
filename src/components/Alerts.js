import React from "react";
import { Alert } from "reactstrap";

export default function Alerts() {
  return (
    <div className="App">
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <Alert color="secondary">This is a secondary alert — check it out!</Alert>
      <Alert color="success">This is a success alert — check it out!</Alert>
      <Alert color="danger">This is a danger alert — check it out!</Alert>
      <Alert color="warning">This is a warning alert — check it out!</Alert>
    </div>
  );
}
