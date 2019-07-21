# 安装

```javascript
npm install ant-design-form
```

```
yarn add ant-design-form
```

## 使用

```react
import {FormView} from 'ant-design-form'
ReactDOM.render(<FromView />, mountNode);
```

可能需要引入ant-design的样式

```
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
```

# 说明

Ant-Design是React一个非常好用的UI库。几乎涉猎了所有场景，但是在B端。对于增删改查，更多的会用到表单。但是表单的创建或者说使用又比较繁琐，比如校验规则、与特定ID绑定等等。

比如

```react
<Form.Item label="Select[multiple]">
    {getFieldDecorator('select-multiple', {
        rules: [
            { required: true, message: 'Please select your favourite colors!', type: 'array' },
        ],
    })(
        <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
        </Select>,
    )}
</Form.Item>
```

这样的<Form.Item>你一定写过不少。

但是，"ant-design-form"来了。

暂时支持三个组件。

1. SearchView
2. FormView
3. ModalView

## SearchView

#### Demo

```react
<SearchView
    data={
      [{
        label: '所有订单',
        key: 'pharmacyType',
        type: 'select',
        defaultValue: '所有订单',
        option: [
            { severKey: 'allList', showValue: '所有订单' }, 
            { severKey: 'unpay', showValue: '待付款订单' }, 
            { severKey: 'cancel', showValue: '订单取消' }, 
            { severKey: 'returnGoods', showValue: '退订/退货' }, 
            { severKey: 'success', showValue: '交易成功' }, 
            { severKey: 'paid', showValue: '已付款' }
        ],
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
```

​	![demo](http://i2.tiimg.com/691643/de32f087573c18e7.png)

点击搜索之后：



![搜索](http://i1.fuimg.com/691643/a6f6a297b77d082b.png)



| 参数名    | 说明                                                         | 数据类型        |
| --------- | ------------------------------------------------------------ | --------------- |
| searchFun | 用于与服务端交互的一个函数，点击查询之后会回调。会返回data中所设置的key | function        |
| data      | 用于设置显示的样式（调用ant-design中的某个组件）             | array< object > |

SearchView-data

| 参数名       | 说明                                                         | 数据类型                                                 |
| ------------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| label        | 前端通知用户，组件类型（暂时只支持展示dataPicker，后续会做成自适应的 | string                                                   |
| key          | 回调函数返回的 Json 里面的key                                | string                                                   |
| type         | 展示定制的组件（基本上都是从ant-design里面选取的）（可以是输入框，选择框等） | string                                                   |
| Message      | placeholder展示的文案                                        | string                                                   |
| defaultValue | 默认值                                                       | 根据组件来判断（如果是日期类型是moment，一般来说是string |
| option       | 用于select组件中的可选项。                                   | array                                                    |

SearchView-data-type

| 参数名      | 说明                                  | 数据类型 |
| ----------- | ------------------------------------- | -------- |
| input       | 文本输入框                            | string   |
| select      | 选择框                                | string   |
| datePicker  | 日期选择框(返回moment)                | string   |
| rangePicker | 日期联级选择框（返回是[moment,moment] | string   |

SearchView-data-option

| 参数名    | 说明                     | 数据类型 |
| --------- | ------------------------ | -------- |
| severKey  | select的Value值          | string   |
| showValue | select用于前端展示的文案 | string   |



## FormView

#### Demo

![](http://i1.fuimg.com/691643/07c3f254f0696625.png)

点击提交之后

![](http://i1.fuimg.com/691643/9fa6dc1bf08506de.png)

```react
<FromView
    formData={[
        {
            label:'select',
            key:'select',
            type:'select',
            option: [
                { severKey: '1', showValue: '处方药' }, 
                { severKey: '0', showValue:'非处方药' }
            ],
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
/>
```



| 参数名               | 说明                                                         | 数据类型        |
| -------------------- | ------------------------------------------------------------ | --------------- |
| formData             | 用于设置显示的样式（调用ant-design中的某个组件）             | array< object > |
| showData             | 初始参数，key对应formData，value是初始值                     | object          |
| selectSearch         | 使用selectSearch这个组件时的查询函数                         | function        |
| selectSearchOption   | 使用selectSearch这个组件时显示的下拉框                       | array< object > |
| selectSearchCallBack | 使用selectSearch这个组件时点击选中的回调函数，默认返回选中的key | function        |
| imgUploadUrl         | 使用imgUpload这个组件时的上传地址，默认返回的是res.data[0]（暂时不支持定制，可能要提前和后端的同事协调好） | string          |
| imgUploadHeaders     | 使用imgUpload这个组件时的上传header                          | object          |
| submitText           | 提交按钮的文案                                               | string          |
| cascaderOption       | 联级选择器Cascader的下拉框                                   | array< object > |



FormView-formData

| 参数名  | 说明                                                         | 数据类型        |
| ------- | ------------------------------------------------------------ | --------------- |
| label   | 前端显示的文案，表示这个地方要输入什么                       | string          |
| key     | 与服务端交互的key                                            | string          |
| type    | 展示定制的组件（基本上都是从ant-design里面选取的）（可以是输入框，选择框等） | string          |
| Message | placeholder展示的文案，表单错误的时候出现的文案              | string          |
| option  | 用于select组件中的可选项。                                   | array< object > |

FormView-formData-type

| 参数名          | 说明                                  | 数据类型 |
| --------------- | ------------------------------------- | -------- |
| input           | 文本输入框                            | string   |
| select          | 选择框                                | string   |
| datePicker      | 日期选择框(返回moment)                | string   |
| rangePicker     | 日期联级选择框（返回是[moment,moment] | string   |
| radioGroup      | 单选框                                | string   |
| richTextEditor  | 富文本编辑器                          | string   |
| imageUploadList | 图片上传（多张                        | string   |
| textArea        | 长文本输入框                          | string   |
| selectSearch    | 带搜索的选择框                        | string   |
| imageUpload     | 图片上传（单张                        | string   |
| cascader        | 联级选择                              | string   |

FormView-formData-option

| 参数名    | 说明                     | 数据类型 |
| --------- | ------------------------ | -------- |
| severKey  | select的Value值          | string   |
| showValue | select用于前端展示的文案 | string   |

#### ModalView（敬请期待
