import React from "react";
import { shopData } from "../../data/controlconfig";
import PreviewCollections from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: shopData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollections key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
