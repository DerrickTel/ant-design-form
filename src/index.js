
import React from 'react';
import FromView from './components/FormView'
import SearchView from './components/SearchView'
import {demo1} from './constant/formView'
import 'antd/dist/antd.css'

const ReactDemo = () => (
  <SearchView
    data={
      [{
        label: '所有订单',
        key: 'pharmacyType',
        type: 'select',
        defaultValue: '所有订单',
        option: [{ severKey: 'allList', showValue: '所有订单' }, { severKey: 'unpay', showValue: '待付款订单' }, { severKey: 'cancel', showValue: '订单取消' }, { severKey: 'returnGoods', showValue: '退订/退货' }, { severKey: 'success', showValue: '交易成功' }, { severKey: 'paid', showValue: '已付款' }],
      }, {
        label: '开始时间',
        key: 'startTime',
        type: 'datePicker',
        Message: '请选择时间',
      }, {
        label: '结束时间',
        key: 'endTime',
        type: 'datePicker',
        Message: '请选择时间',
      }, {
        label: '关键字',
        key: 'keywords',
        type: 'input',
        Message: '请输入商品名称',
      }]
      
  }
  searchFun={(params) => {console.log(params)}}
 />
);
export default ReactDemo;
