import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../Collection/Collection";

import "./ShopPage.scss";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
