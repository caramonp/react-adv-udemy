import { ReactElement } from "react";

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  increaseBy: (value: number) => void;
  counter: number;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img, title }: { img?: string; title?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
