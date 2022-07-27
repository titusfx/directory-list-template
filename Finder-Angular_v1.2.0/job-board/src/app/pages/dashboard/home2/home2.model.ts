/**
 * category List
 */
 export interface category {
  icon?: string;
  title?: string;
}

/**
 * steps List
 */
 export interface steps {
  id?: string;
  title?: string;
  content?: string;
}

/**
 * Properties List
 */
 export interface promotion {
  image?: string;
  title?: string;
  price?: string;
  view?: string;
  days?: string;
  movingSymbol?: string;
  featuredSymbol?: string;
  activeClass?: string;
}

/**
 * Job City List
 */
 export interface jobCity {
  image?: string;
  name?: string;
  jobs?: string;
}

/**
 * Reviews List
 */
 export interface reviews {
  content?: string;
  image?: string;
  name?: string;
  position?: string;
}
