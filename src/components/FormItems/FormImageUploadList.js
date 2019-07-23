import React, { Component } from 'react';
import { Upload, Icon, message, Modal, Row } from 'antd';
import PropTypes from 'prop-types';

class FormImageUploadList extends Component {
  state = {
    loading: false,
    imageList: [],
    previewImage: '',
    previewVisible: false,
  };

  componentDidMount() {
    const {showData} = this.props
    this.setState({imageList: showData || [] })
  }

  uploadButton = () => {
    const { loading } = this.state;
    return (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">点我上传</div>
      </div>
    );
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      const { onChange } = this.props;
      const { imageList } = this.state
      imageList.push({imgSrc: info.file.response.data[0], isMain: 0})
      this.setState({ imageList, loading: false });
      onChange(imageList);
    }
  };

  beforeUpload = file => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片大小不能大于2MB!');
    }
    return isLt2M;
  };

  upLoadProps = () => {
    const {imgUploadUrl, imgUploadHeaders} = this.props;
    const props = {
      name: 'file',
      action: imgUploadUrl,
      headers: imgUploadHeaders,
      onChange: this.handleChange,
      showUploadList: false,
      beforeUpload: this.beforeUpload,
    };
    return props;
  };

  handleCancel = () => { this.setState({previewVisible: false}) }

  previewImageList = () => {
    const {imageList} = this.state;
    return imageList.map( (value, index) => {
      return (
        <div key={value.imgSrc} style={{margin: '0 10px'}}>
          <img alt="预览图片" style={{width: '100px', height: '100px', padding: '5px'}} src={value.imgSrc} onClick={() => {this.previewImage(value.imgSrc)}} />
        </div>
      )
    })
  }

  // 设为主图
  setMain = (i) => {
    const {imageList: List} = this.state;
    const imageList = List.map( (value, index) => {
      const rValue = value
      rValue.isMain = 0;
      if(i === index){
        rValue.isMain = 1;
      }
      return rValue;
    })
    this.setState({imageList})
  }

  // 清空
  cleanItem = (i) => {
    const {imageList} = this.state;
    imageList.splice(i, 1)
    this.setState({imageList})
  }

  previewImage = (previewImage) => {
    this.setState({previewImage, previewVisible: true})
  }

  render() {
    const { previewVisible, previewImage, additional } = this.state;
    return (
      <>
        <Row type="flex">
          {this.previewImageList()}
          <Upload {...additional} listType="picture-card" {...this.upLoadProps()}>
            {this.uploadButton()}
          </Upload>
        </Row>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="预览图片" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

FormImageUploadList.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
};

FormImageUploadList.defaultProps = {
  disabled: false,
  Message: '',
};

export default FormImageUploadList;
