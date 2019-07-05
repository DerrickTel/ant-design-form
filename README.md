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

#### SearchView

| 参数名    | 说明                                                         | 数据类型           |
| --------- | ------------------------------------------------------------ | ------------------ |
| searchFun | 用于与服务端交互的一个函数，点击查询之后会回调。会返回data中所设置的key | object（function） |
| data      | 用于设置显示的样式（调用ant-design中的某个组件）             | array（ [ {} ] ）  |

SearchView-data

| 参数名       | 说明                                                         | 数据类型                                                 |
| ------------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| label        | 前端通知用户，组件类型（暂时只支持展示dataPicker，后续会做成自适应的 | string                                                   |
| key          | 回调函数返回的 Json 里面的key                                | string                                                   |
| type         | 展示的ant-design中的某个组件（可以是输入框，选择框等）       | string                                                   |
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

##### Demo

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

#### FormView（敬请期待

#### ModalView（敬请期待





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
