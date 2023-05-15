import React from "react";
import { Redirect } from "react-router";

const UnauthorizedPage = () => {
  return <Redirect to="/redirected" />;
};

export default UnauthorizedPage;
