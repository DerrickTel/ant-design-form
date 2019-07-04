import React, { PureComponent } from 'react';
import { Upload, Icon, message, Input } from 'antd';
import PropTypes from 'prop-types';
import { isUrl, isColor } from '../../util/utils';

class FormImageUpload extends PureComponent {
  state = {
    loading: false,
  };

  uploadButton = () => {
    const { loading } = this.state;
    return (
      <div>
        <Icon type={loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
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
      console.log(onChange)
      this.setState({ imageUrl: info.file.response.data[0], loading: false });
      onChange(info.file.response.data[0]);
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

  change = e => {
    const { onChange } = this.props;
    onChange(e);
  };

  showView = () => {
    const { imageUrl } = this.state;
    const { value } = this.props;
    const style = { width: 100, height: 100 };
    if (imageUrl) {
      return <img style={style} src={imageUrl} alt="resource" />;
    }
    if (isUrl(value)) {
      return <img style={style} src={value} alt="resource" />;
    }
    if (isColor(value)) {
      return <div style={{ backgroundColor: `#${value}`, height: 100, width: 100 }} />;
    }
    return this.uploadButton();
  };

  render() {
    const { Message, value, disabled, isHaveInput } = this.props;
    return (
      <>
        {isHaveInput === true ? (
          <Input disabled={disabled} placeholder={Message} value={value} onChange={this.change} />
        ) : (
          ''
        )}
        <Upload listType="picture-card" {...this.upLoadProps()}>
          {this.showView()}
        </Upload>
      </>
    );
  }
}

FormImageUpload.propsType = {
  disabled: PropTypes.bool, // 是否不可选
  Message: PropTypes.string, // 默认文字（placeholder
};

FormImageUpload.defaultProps = {
  disabled: false,
  Message: '',
};

export default FormImageUpload;
