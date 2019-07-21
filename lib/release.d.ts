import * as React from 'react';
export interface SearchViewProps {
  searchFun?: Function;
  data?: Array<Object>;
}
declare const SearchView: React.FC<SearchViewProps>;

export interface FormViewProps {
  showData?: Object;
  formData?: Array<Object>;
  selectSearch?: Function;
  selectSearchOption?: Array<Object>;
  selectSearchCallBack?: Function;
  imgUploadUrl?: String;
  imgUploadHeaders?: Object;
  cascaderOption?: Array<Object>;
}
declare const FormView: React.FC<FormViewProps>;

export {
  SearchView,
  FormView,
}