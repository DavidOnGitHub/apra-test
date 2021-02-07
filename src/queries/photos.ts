import { gql } from '@apollo/client';

export const ALL_PHOTOS_QUERY = gql`
  query allPhotosQuery($options: PageQueryOptions) {
    photos(options: $options) @connection(key: "photos") {
      data {
        id
        title
        url
        thumbnailUrl
      }
      meta {
        totalCount
      }
    }
  }
`;
