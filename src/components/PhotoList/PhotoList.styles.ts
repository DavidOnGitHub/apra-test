import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';

export const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const TextInput = styled(Input)`
  width: 100%;
`;

export const ClickableTableCell = styled(TableCell)`
  cursor: pointer;
`;

export const ThumbNail = styled.img`
  height: 60px;
`;

export const MainTable = styled(Table)`
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const SearchBoxContainer = styled.div`
  width: 100%;
`;

export const PaginationController = styled(TablePagination)`
  .MuiTablePagination-spacer + .MuiTablePagination-caption {
    display: none;
  }
  .MuiTablePagination-input {
    display: none;
  }
`;
