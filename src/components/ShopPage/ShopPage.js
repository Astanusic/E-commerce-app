import React from "react";
import "./ShopPage.scss";
import { SHOP_DATA } from "../../utils/shopdata";
import CollectionPreview from "../PreviewCollection/PreviewCollection";

function ShopPage() {
  const [collections, setCollections] = React.useState(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
