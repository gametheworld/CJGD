import React from 'react';
import PanelBox from '../../Component/PanelBox/Index';
import { Card, WingBlank, WhiteSpace,Flex,Button,Carousel, } from 'antd-mobile';
import { List, message, Avatar, Spin } from 'antd';
import method from '../../Util/axios';
import {testUrl} from '../../Component/Config/evn';
import './modelcss.css';

class modelList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slide:[],
            list:[],
            pagination:{
                total:0,
                defaultPageSize:10,
                current:1,
            },
        };
        this.getPaginationData = this.getPaginationData.bind(this);
    }
    componentWillMount(){
        this.getPaginationData(this.state.pagination.current,this.state.pagination.defaultPageSize,this.state.userName);
    }
    /**
     *
     *
     * @param {*} pageNo
     * @param {*} pageSize
     * @param {*} pa
     * @memberof modelList
     */
    getPaginationData(pageNo,pageSize,uname){
        let VM=this;
        let url=`${testUrl}data`;
        method.api.get(url).then(function(res){
            console.log('res',res);
            //判断业务接口，当前200应该放到请求axios封装函数中处理，现在节省时间
            if(res.status===200){
                VM.setState({
                    slide:res.data.data.slide,
                    list:res.data.data.list,
                    //分页，当前测试先不做分页，可以保留
                    pagination:{
                        ...VM.state.pagination
                    }
                });
            }else{
              //VM.$Message.error(res.data.msg);
            }
          }).catch(function(error){
            console.log(error);
          });
    }
    render(){
        const {userinfo}=this.state;
        console.log('this.state.slide',this.state.slide);
        return(
            <PanelBox title='新闻主页' className='modelList'>
                <WingBlank size='lg'>

                    <div>
                        {
                            this.state.slide &&
                            <Carousel autoplay className='carouselList'>
                            {
                                this.state.slide.map((item,index)=>{
                                return <div key={index}>
                                    <a href={item.href} >
                                            <img src={item.img} className='carouselistImg' />
                                            <p>{item.description}</p>
                                        </a>
                                    </div>;
                                })
                            }
                            </Carousel>
                        }
                        
                    </div>
                    <div>
                    <List
                        dataSource={this.state.list}
                        className='newlistName'
                        renderItem={item => (
                        <List.Item className="newitem">
                            <List.Item.Meta
                            avatar={<img src={item.cover} width='100px' />}
                            title={<a href={item.url} className='itemcla' >{item.title}</a>}
                            // description={item.description}
                            />
                        </List.Item>
                        )}
                    />
                    </div>
                    <WhiteSpace size='lg' />
                </WingBlank>
            </PanelBox>
        );
    }

}
export default modelList;