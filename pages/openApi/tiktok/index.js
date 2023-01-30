import React, {Component} from 'react'
import fetch from '@site/src/utils/fetch'
import styles from './index.module.css'
import { Input, Button, message } from 'antd';
export default class Tiktok extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      loading: false,
      value: '',
      videoData: {}
    }
  }
  handleChangeValue(evt) {
    this.setState({
      value: evt.target.value
    })
  }
  handleTranslate() {
    this.setState({
      loading: true
    })
    fetch({
      method: 'get',
      url: `https://api.oick.cn/douyin/api.php?url=${this.state.value}`
    }).then(res => {
      console.log(res);
      if (res) {
        this.setState({
          show: true,
          videoData: res
        })
      }
    }).finally(() => {
      this.setState({
        loading: false
      })
    })
  }
  handleDownload() {
    // https://v.douyin.com/MtmAS8r/
    fetch(this.state.videoData.play)
      .then(res => res.blob())
      .then(blob => {
        const link = document.createElement('a');
        const objectUrl = window.URL.createObjectURL(blob);
        link.setAttribute('download', this.state.videoData.title);
        link.setAttribute('href', objectUrl);
        link.click();
        window.URL.revokeObjectURL(objectUrl);
        link.remove();
      })

  }
  handleCopy(value) {
    const ipt = document.createElement('textarea');
    ipt.style.zIndex = -999;
    ipt.style.position = 'fixed';
    ipt.style.left = '-9999px'
    ipt.value = value;
    document.body.appendChild(ipt);
    requestAnimationFrame(() => {
      ipt.select();
      document.execCommand('copy');
      message.success('复制成功！');
      ipt.remove();
    })
  }
  render() {
    const { value, loading, videoData } = this.state;
    return (
      <div>
        <div>
          <p className={styles.tag}>请输入视频的链接</p>
          <Input 
            style={{width: '300px'}}
            placeholder="输入视频地址"
            value={value}
            onChange={(evt) => this.handleChangeValue(evt)}/>
          <Button
            type="primary"
            loading={loading}
            onClick={(evt) => this.handleTranslate(evt)}>转换</Button>
        </div>
        {
          this.state.show ?
          (<div className={styles.marginTop}>
            <div>
              <p className={styles.tag}>该视频地址为</p>
              <div>
                <p className={styles.content}>{videoData.play}</p>
                <Button
                  type="primary"
                  onClick={() => this.handleCopy(videoData.play)}>复制地址</Button>
                {/* <Button
                  type="primary"
                  onClick={() => this.handleDownload()}>下载该视频</Button> */}
              </div>
           
            </div>
            <div className={styles.marginTop}>
              <p className={styles.tag}>该视频的音乐地址为</p>
              <p className={styles.content}>{videoData.music}</p>
              <Button
                type="primary"
                onClick={() => this.handleCopy(videoData.music)}>复制地址</Button>
            </div>
            </div>) :
          ''
        }
       
      </div>
    );
  }
}
