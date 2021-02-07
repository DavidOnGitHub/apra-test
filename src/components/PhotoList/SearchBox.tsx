import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import React, { FunctionComponent, ChangeEvent } from 'react';

import { SearchBoxContainer, TextInput } from './PhotoList.styles';

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
  doSearch: () => void;
}

const SearchBox: FunctionComponent<Props> = ({
  keyword,
  setKeyword,
  doSearch,
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e!.target!.value);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      doSearch();
    }
  };

  return (
    <SearchBoxContainer>
      <TextInput
        placeholder="Search keywords on title"
        onKeyDown={handleKeyDown}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search" onClick={doSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        value={keyword}
        onChange={onChange}
      />
    </SearchBoxContainer>
  );
};

export default SearchBox;
