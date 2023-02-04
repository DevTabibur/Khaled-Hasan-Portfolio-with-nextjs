import React, { Fragment, useEffect } from "react";
// import Custom Components

import Resume from "./layouts/resume";

const Home = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#10266b");
    document.body.style.setProperty("--secondary", "#464545");
    document.body.style.setProperty("--light", "#1F357D");
    document.body.style.setProperty("--dark", "#04185B");
  });

  return (
    <Fragment>
      <Resume />
    </Fragment>
  );
};

export default Home;
