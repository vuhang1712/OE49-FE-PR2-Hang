import "./style.scss";
import React from "react";
import { formatMoney } from "../../../../utils";
import Rating from "../../../Rating";
import { Link } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../store/Slice/cartSlice";

function ProductItem(props) {
  const dispatch = useDispatch();
  const { id, title, thumbnail, price, rating } = props;

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="col">
      <div className="product__item">
        <Link to={`/products/${id}`} state={props}>
          <img src={thumbnail} alt="product" className="product__image" />
        </Link>
        <div className="product__content p-3">
          <Link to={`/products/${id}`} state={props} className="product__title py-1">
            {title}
          </Link>
          <div className="product__price py-2">{formatMoney(price)}</div>
          {Rating(rating)}

          <div className="product__action d-none">
            <button className="btn action__wishlist d-block">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              onClick={() => handleAddToCart({ id, title, thumbnail, price })}
              className="btn action__cart d-block"
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
