/**
 * Work Model
 */
 export interface work {
  id: string;
  title?: string;
  content?: string;
  svg?: string;
}

/**
 * review Model
 */
 export interface review {
  content?: string;
  profile?: string;
  name?: string;
  position?: string;
}

/**
 * brand Model
 */
 export interface brand {
  image?: string;
  nimage?: string;
}
