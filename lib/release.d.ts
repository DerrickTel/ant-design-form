import * as React from 'react';
export interface SearchViewProps {
  searchFun?: Function;
  data?: Array<Object>;
}
declare const SearchView: React.FC<SearchViewProps>;
export {SearchView}