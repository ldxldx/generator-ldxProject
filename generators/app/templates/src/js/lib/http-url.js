import {CONFIG} from './config';
let _host = CONFIG.debugger ? 'http://mdev.zhaoyl.com' : 'http://m.zhaoyl.com';
let httpUrl = {
    'save': _host + '/wx/photoWall/save',
    'get': _host + '/wx/photoWall/get',
    'upload': _host + '/wx/studentCard/upload',//上传图片
    'getStatus': _host + '/wx/photoWall/getStatus',//获取是否要手机验证
    'verCode': _host + '/wx/photoWall/auth',//验证手机验证码
    'getPicWallList': _host + '/wx/photoWall/list' //确认验证码
};
let statistics = _host + '/wx/satistics/insert';//活动统计接口
/**
 * @description 短信验证码
 * @type {string}
 * 发送的参数 mobile=159********&template=spRegister
 */
let sendVerification = 'https://passport.zhaoyl.com/msg/send';//
let WXhttp = {
    'checkOpenId': _host + '/wx/vote/redirect',
    'getWxAuthor': _host + '/ticket/get',
    'getUser': _host + '/wx/vote/getUser',
    'appId': CONFIG.debugger ? 'wxae3969df6f1d76fd' : 'wxef743b6a29c2f4d8'
};
export {httpUrl, WXhttp, statistics, sendVerification}