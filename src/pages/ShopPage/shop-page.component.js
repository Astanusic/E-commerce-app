import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/CollectionsOverview/collections-overview.component";
import CollectionPage from "../Collection/collection.component";

import "./ShopPage.scss";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
