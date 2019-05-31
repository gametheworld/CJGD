import React from 'react';
import PanelBox from '../../Component/PanelBox/Index';
import { Card, WingBlank, WhiteSpace,Flex,Button } from 'antd-mobile';
import { sendReq } from '../../Util/ajax';
import method from '../../Util/axios';
import {listUrl} from '../../Component/Config/evn';
import bjimg from '../../Component/Images/bj.png';

class ModelDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:props.match.params.id,
            userName:localStorage.getItem('uname'),
            modelInfo:{
                collectFlag: 0,
                collectNum: 0,
                description: '',
                remark: '',
                source: '',
                shareNum: 0,
                likeNum: 0,
                ai3dUrl: '',
                shareModelUrl: '',
                recentCommentTime: 0,
                modelData: '',
                isPublic: 1,
                followFlag: 0,
                id: '',
                tag: '',
                creator: '',
                thumbImg: '',
                updateTime: 0,
                commentNum: 0,
                imgURL: '',
                createTime: 0,
                thumbsUpFlag: 0,
                name: '',
                tenantId: '',
                taskId: ''
            },
            dataSource:[],
            pagination:{
                total:0,
                defaultPageSize:10,
                current:1,
            }
        };
        this.getModelData = this.getModelData.bind(this);
    }
    componentWillMount(){
        this.getModelData(this.state.id);
    }
    /**
     *
     *
     * @param {*} pageNo
     * @param {*} pageSize
     * @param {*} pa
     * @memberof modelList
     */
    getModelData(id){
        let VM=this;
        method.api.get(`${listUrl}3dmaas/api/v1/models/${id}`).then(function(res){
            if(res.data.code===0){
                VM.setState({
                    modelInfo:res.data.result.datas
                });
            }else{
              //VM.$Message.error(res.data.msg);
            }
          }).catch(function(error){
            console.log(error);
          });
    }
    /**
     *
     *
     * @memberof modelList
     */
    handleOnClick(){

        let param={
            objId:this.state.modelInfo.id,
            flag:this.state.modelInfo.collectFlag===1 ? 0 : 1,
            type:2,
          };
        this.postPoerators(param);
    }
    /**
     *
     *
     * @param {*} params
     * @memberof modelList
     */
    postPoerators(params){
        let VM = this;
        method.api.post(`${listUrl}3dmaas/api/v1/operators'`,params).then(function(res){
            if(res.data.code===0){
              //VM.$Message.success(res.data.msg)
              VM.getModelData(VM.state.id);
            }else{
              //VM.$Message.error(res.data.msg)
            }
          });
      }
    followClick(){
        let VM = this;
        let params={
            accountName: this.state.modelInfo.creator,
            flag: this.state.modelInfo.followFlag === 0 ? 1 : 0,
        };
        method.api.post(`${listUrl}3dmaas/api/v1/follow'`,params).then(function(res){
            if(res.data.code===0){
              //VM.$Message.success(res.data.msg)
              VM.getModelData(VM.state.id);
            }else{
              //VM.$Message.error(res.data.msg)
            }
          });
    }
    render(){
        const {modelInfo} =this.state;
        return(
            <PanelBox title='浏览全文' className='modelDetail'>
                <WingBlank size='lg'>
                    <WhiteSpace size='lg' />
                    {
                        // this.state.dataSource.map((item,index)=>(
                            <Card>
                                <Card.Header
                                    title={<div className='mitn'>
                                        <a href={`'#/modelList/${localStorage.getItem('uname')}/${localStorage.getItem('token')}`}>
                                        <p>{modelInfo.name}</p></a>
                                        <p>{modelInfo.creator}</p>
                                        </div>}
                                    thumb={modelInfo.imgURL?modelInfo.imgURL:bjimg}
                                    extra={
                                        //this.state.modelInfo.creator===this.state.userName &&
                                        <span onClick={this.followClick.bind(this)}>{this.state.modelInfo.followFlag === 1 ?'已关注':'关注'}</span>
                                    }
                                />
                                <Card.Body>
                                    <div>{modelInfo.remark}</div>
                                    <img src={modelInfo.thumbImg} ></img>
                                </Card.Body>
                                <Card.Footer content={`'发布于:'${modelInfo.createTime}`} extra={
                                        <i className={modelInfo.collectFlag === 0 ?'cicon incollect':'cicon icollect'} onClick={this.handleOnClick.bind(this)}></i>
                                    } />
                            </Card>
                        // ))
                    }
                    
                    <WhiteSpace size='lg' />
                </WingBlank>
            </PanelBox>
        );
    }

}
export default ModelDetail;