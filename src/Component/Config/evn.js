import _ from 'lodash';
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */


/*测试环境*/
let testUrl = getHost('testUrl');
/*生产环境*/
let baseUrl =getHost('baseUrl');
/*图片存放地址*/
let baseImgPath = getHost('baseImgPath');
/* 模型预览* */
let taskModelHost=getHost('taskModelHost');
/* 图片地址 */
let imagePath=getHost('imagePath');
/* h5预览地址 */
let h5ViewUrl=getHost('h5ViewUrl');
/* 权限角色 */
let paashost=getHost('paashost');
// 查询列表地址
let listUrl =getHost('listUrl');
/*模型MTL加载地址*/
let tempUrl = getHost('tempUrl');
/*websock  */
let websockurl=getHost('wsulr');

/**
 * @description: 获取host
 * @param {type} 
 * @return: 
 */
function getHost(name){
  const DEVHost={
      // /*测试环境*/
      testUrl : 'http://192.168.89.72:8810/',
      //websock
      wsulr:'ws://192.168.1.244:8081'
  };
  const SITHost={
    testUrl : 'http://localohst:81/',
  };
  if (location.hostname.match(/.*localhost/i)) return _.get(DEVHost,name);
  else if(location.hostname.match(/.*192.168.1.246*/i)) return _.get(DEVHost,name);
  else if(location.hostname.match(/.*5822.4922.12522.227*/i)) return _.get(SITHost,name);
  else if(location.hostname.match(/.*5811.4911.12511.227*/i)) return _.get(SITHost,name);
  else return _.get(DEVHost,name);
}
export {
  testUrl,
  baseUrl,
  baseImgPath,
  listUrl,
  taskModelHost,
  imagePath,
  h5ViewUrl,
  paashost,
  tempUrl,
  websockurl
};
