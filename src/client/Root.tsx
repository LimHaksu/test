import React, { FunctionComponent } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import App from "shared/App";
import { Provider } from "react-redux";

const Root: FunctionComponent<any> = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
