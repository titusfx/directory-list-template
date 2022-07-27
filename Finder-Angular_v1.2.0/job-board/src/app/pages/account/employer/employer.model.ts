/**
 * List
 */
 export interface list {
  image: string;
  btn?: string;
  btn_color?: string;
  sub_title?: string;
  title?: string;
  location?: string;
  price?: string;
}

/**
 * About Reviews List
 */
 export interface reviews {
  image?: string;
  title?: string;
  date?: string;
  rating?: any;
  content?: string;
  like?: string;
  unlike?: string;
}
