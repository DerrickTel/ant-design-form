
import React, { lazy, Suspense } from 'react';
// import FromView from './components/FormView'
import SearchView from './components/SearchView'
import {demo1} from './constant/formView'
import 'antd/dist/antd.css'
import { Card } from 'antd';

const FormView  = lazy(() => import('./components/FormView'));

const ReactDemo = () => (
  <Card title="FromViewDemo">
    <Suspense fallback={<div>Loading...</div>}>
      <FormView
        formData={[
          {
            label:'select',
            key:'select',
            type:'select',
            option: [{ severKey: '1', showValue: '处方药' }, { severKey: '0', showValue: '非处方药' }],
            Message: '请选择select',
          }, {
            label:'input',
            key:'input',
            type:'input',
            Message: '输入input',
          }, {
            label: 'imageUpload',
            key: 'imageUpload',
            type: 'imageUpload',
            Message: 'imageUpload'
          }
        ]}
        imgUploadUrl="https://hcrm-gateway.test.ebaoyf.com/admin/uploadImage"
      />
    </Suspense>
  </Card>
);
export default ReactDemo;
