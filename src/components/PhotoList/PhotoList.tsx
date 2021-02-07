import React, { useState } from 'react';
import SearchBox from './SearchBox';
import {
  Container,
  ClickableTableCell,
  ThumbNail,
  MainTable,
  PaginationController,
} from './PhotoList.styles';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useQuery } from '@apollo/client';
import Loader from '../Loader';
import ErrorPage from '../ErrorPage';
import PhotoPopup from '../PhotoPopup';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import { NUMBER_OF_ROWS_PER_PAGE } from '../../configs/appConfig';
import { ALL_PHOTOS_QUERY } from '../../queries/photos';
import { Photo, PhotosData } from '../../types/Photo';

const PhotoList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [popupImageUrl, setPopupImageUrl] = useState();
  const [keyword, setKeyword] = useState('');

  const getQueryVariables = (page: number, keyword = '') => ({
    options: {
      paginate: {
        page,
        limit: NUMBER_OF_ROWS_PER_PAGE,
      },
      search: { q: keyword },
    },
  });

  const {
    loading,
    error,
    data,
    fetchMore,
    refetch,
    client,
  } = useQuery(ALL_PHOTOS_QUERY, { variables: getQueryVariables(1) });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorPage />;
  }

  const { photos } = data as PhotosData;
  const startIndex = currentPage * NUMBER_OF_ROWS_PER_PAGE;
  const photosDisplayed: Photo[] = photos.data.slice(
    startIndex,
    startIndex + NUMBER_OF_ROWS_PER_PAGE
  );

  const onChangePage = (_: any, page: number) => {
    if (page * NUMBER_OF_ROWS_PER_PAGE >= photos.data.length) {
      fetchMore({
        variables: getQueryVariables(currentPage + 2, keyword),
      }).then(() => setCurrentPage(page));
    } else {
      setCurrentPage(page);
    }
  };

  const searchPhotos = () =>
    client.cache.reset().then(() => {
      client.clearStore().then(() => {
        refetch(getQueryVariables(1, keyword)).then(() => setCurrentPage(0));
      });
    });

  return (
    <Container>
      <SearchBox
        keyword={keyword}
        setKeyword={setKeyword}
        doSearch={searchPhotos}
      />
      <MainTable>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Photo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {photosDisplayed.map((photo: any) => (
            <TableRow key={photo.id}>
              <ClickableTableCell onClick={() => setPopupImageUrl(photo.url)}>
                {photo.id}
              </ClickableTableCell>
              <TableCell>{photo.title}</TableCell>
              <ClickableTableCell onClick={() => setPopupImageUrl(photo.url)}>
                <ThumbNail src={photo.thumbnailUrl} alt={photo.title} />
              </ClickableTableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <PaginationController
              count={photos.meta.totalCount}
              page={currentPage}
              onChangePage={onChangePage}
              rowsPerPage={NUMBER_OF_ROWS_PER_PAGE}
            />
          </TableRow>
        </TableFooter>
      </MainTable>
      <PhotoPopup
        imageUrl={popupImageUrl}
        onClose={() => setPopupImageUrl(undefined)}
      />
    </Container>
  );
};

export default PhotoList;
