
import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
export default class Index extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className ={this.props.className}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    className={ 'defaultCalss '}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >
                    {this.props.title}
                </NavBar>  
                {this.props.children}
            </div>
        );
    }
}



