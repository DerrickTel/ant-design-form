import * as React from 'react';
export interface SearchViewProps {
  searchFun?: Function;
  data?: Array<Object>;
  [index: string]: any;
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
  [index: string]: any;
}
declare const FormView: React.FC<FormViewProps>;


export interface ModalViewProps {
  showData?: Object;
  selectSearch?: Function;
  selectSearchOption?: Array<Object>;
  selectSearchCallBack?: Function;
  imgUploadUrl?: String;
  imgUploadHeaders?: Object;
  fileUploadUrl?: String;
  fileUploadHeaders?: Object;
  cascaderOption?: Array<Object>;
  category?: String;
  data?: Array<Object>;
  show: Boolean;
  importCallBack?: Function;
  importColumns?: Array<Object>;
  downloadUrl?: String;
  onOk?: Function;
  onCancel?: Function;
  [index: string]: any;
}
declare const ModalView: React.FC<ModalViewProps>;

export {
  SearchView,
  FormView,
  ModalView
}