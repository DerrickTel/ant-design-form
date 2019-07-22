
import React, { lazy, Suspense, PureComponent } from 'react';
// import FromView from './components/FormView'
// import SearchView from './components/SearchView'
import ModalView from './components/ModalView'
import {demo1} from './constant/formView'
import 'antd/dist/antd.css'
import { Card, Button, Table, Divider } from 'antd';

const FormView  = lazy(() => import('./components/FormView'));

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    id: 'asd111asd111',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    id: 'asd222asd222',
  },
];

class ReactDemo extends PureComponent {
  state = {
    visible: false,
    showData: {},
    category: 'check',
  }

  clickModal = (category, showData) =>{
    this.setState({
      visible: true,
      category,
      showData
    });
  }

  hideModal = () => {
    this.setState({visible: false})
  }

  columns = () => [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '操作',
      render: (text, record) => <>
        <Button onClick={() => this.clickModal('check', record)} type="primary">查看</Button>
        <Divider type="vertical" />
        <Button onClick={() => this.clickModal('edit', record)}>编辑</Button>
      </>
    }
  ];

  render(){
    const {visible, category, showData} = this.state;
    return (
      <Card title="ModalViewDemo">
        <Button onClick={() => this.clickModal('create', {})}>我是新增</Button>
        <ModalView
          onOk={params => {console.log(params); this.setState({visible: false})}}
          onCancel={() => {this.setState({visible: false})}}
          show={visible}
          category={category}
          data={[
            {
              label: 'ID（无需录入）',
              key: 'id',
              type: 'input',
              Message: 'ID自动录入无需您操心~',
              disabled: true,
            },
            {
              label: '姓名',
              key: 'name',
              type: 'input',
              Message: '请输入姓名',
            },
            {
              label: '年龄',
              key: 'age',
              type: 'select',
              Message: '请选择年龄',
              option: [
                { severKey: '32', showValue: '12岁' }, 
                { severKey: '42', showValue: '13岁' },
              ],
            },
          ]}
          showData={showData}
        />
        <Table dataSource={dataSource} columns={this.columns()} />
      </Card>
    );
  }
}
  
export default ReactDemo;
