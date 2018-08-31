import React, {PureComponent} from 'react';
import { Card } from 'antd';
import './PicCard.css';

const { Meta } = Card;
const Tip = (nv) => {
  return (
    <div className="pic-card-tip">
      {window.IS_MOBILE?(<div>
          <p>类型：{nv.type}</p><p>关注：{nv.totalFanNum}</p>
          <p>身高：{nv.height}</p> <p> 体重：{nv.weight}</p></div>)
        :(<div>
          <p>类型：{nv.type}  关注：{nv.totalFanNum}</p>
          <p>身高：{nv.height}  体重：{nv.weight}</p>
        </div>)}
    </div>
  )
}

export default class PicCard extends PureComponent{
  render() {
    const nv = this.props.nv;
    const goMm = () => this.props.picClick && this.props.picClick(nv.userId);
    const wStyle = {
      width:window.IS_MOBILE?160:240
    };
    const hStyle = {
      height:window.IS_MOBILE?240:320
    }
    return (
      <div className="pic-card-div" style={wStyle}>
        <Card
          hoverable
          bordered
          cover={<img style={hStyle} className="pic-card" alt={nv.realName}  onClick={goMm}   src={nv.avatarUrl}/>}
        >
          <Meta title={nv.realName}  description={Tip(nv)}
          />
        </Card>
      </div>
    )
  }
}

