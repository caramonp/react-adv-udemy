import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assests/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "", title = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={styles.productImg} src={imgToShow} alt={title} />;
};
