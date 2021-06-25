import React, { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";

import moment from "moment";

import "./index.css";
import "./style.scss";

const getUserModule = () =>
  import(/* webpackChunkName:"usersAPI" */ "./common/userApi");

const App = () => {
  useEffect(() => {
    getUserModule().then(({ getUsers }) =>
      getUsers().then((json) => console.log(json))
    );
  }, []);

  return <div>Hi from React!!!.</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
