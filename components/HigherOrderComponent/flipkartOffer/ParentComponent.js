import Product from "./Product";
import withOffer from "./withOffer";

const OfferProduct = withOffer(Product);

const ParentComponent = () => {
  const IMG_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/003/088/054/small/wooden-dining-table-set-isolated-free-photo.jpg";
  return (
    <div>
      Parent component Of FlipKart
      <Product image={IMG_URL} />
      <OfferProduct image={IMG_URL} />
    </div>
  );
};

export default ParentComponent;
