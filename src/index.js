
import React from 'react';
import FromView from './components/FormView'
import {demo1} from './constant/formView'
import 'antd/dist/antd.css'

const ReactDemo = () => (
 <FromView
  formData={demo1} 
  submitText="提交" 
 />
);
export default ReactDemo;
