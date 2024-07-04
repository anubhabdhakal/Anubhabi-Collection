export interface ProductInterface {
  id: number;
  name: string;
  price: number;
  available_sizes: Array<{ id: number; name: string }>;
  category: { id: number; name: number; photo_url: string };
  photos: Array<PhotoInterface>;
  description: string;
  rating: number;
  quantity?: number;
  is_available?: boolean;
}
export interface CategoryInterface {
  name: string;
  photo: string;
  numberOfItems: number;
}

export interface PhotoInterface {
  id: number;
  image: string;
}

export interface ClothSizeInterface {
  id: number;
  name: string;
}

export interface BoardTitleProps {
  title: string;
  linkName?: string;
  linkTo?: (path: string) => void;
}
export interface SingleMenuProps {
  name: string;
  hasNew?: boolean | undefined;
  subList: Array<{ name: string }> | undefined;
  key?: React.Key;
}
export interface SignupFormInterface {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export type ImageSliderProps = {
  imagesList: Array<{
    image: string;
    heading?: string;
    caption?: string;
  }>;
};

export type informationProps = {
  infoList: Array<{
    image: string;
    header: string;
    contentList: Array<{ content: string }>;
  }>;
};

export type ContactCardProps = {
  image: string;
  header: string;
  contentList: Array<{ content: string }>;
};

export type ImageCardProps = {
  image: string;
  isInCart: boolean;
  openModal: () => void;
};

export type sizeOptionProps = {
  sizeOptions: Array<ClothSizeInterface>;
  currentSize: ClothSizeInterface;
  setSize: (size: ClothSizeInterface) => void;
};

export type SingleProductModalInterface = {
  product: ProductInterface;
  closeModal: () => void;
};

export type QuestionInterface = {
  content: string;
  subContent: string;
};
