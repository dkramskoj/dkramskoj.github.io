import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { ProductsList } from "./types/ProductsList";

export const homePageQuery = gql`
  query ProductsList {
products(first: 2) {
    edges {
      node {
        id
        name
      }
    }
  }
    shop {
      description
      name
      homepageCollection {
        id
        backgroundImage {
          url
        }
        name
      }
    }
    categories(level: 0, first: 4) {
      edges {
        node {
          id
          name
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;

export const TypedHomePageQuery = TypedQuery<ProductsList, {}>(homePageQuery);
