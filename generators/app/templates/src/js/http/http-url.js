import {CONFIG} from '../../../config.babel';
let _host = CONFIG.debugger ? 'http://mdev.zhaoyl.com' : 'http://m.zhaoyl.com';
/**
 * @description 业务接口
 */
let httpUrl = {};
/**
 * @description 活动统计接口
 * @param {string} voteId voteName openId  mobile type url
 * @type {string}
 */
let statistics = _host + '/wx/satistics/insert';
/**
 * @description 短信验证码
 * @type {string}
 * 发送的参数 mobile=159********&template=spRegister
 */
let sendVerification = 'https://passport.zhaoyl.com/msg/send';
/**
 * @description 微信接口
 * @type {{checkOpenId: string, getWxAuthor: string, getUser: string, appId: string}}
 */
let WXhttp = {
    'checkOpenId': _host + '/wx/vote/redirect',
    'getWxAuthor': _host + '/ticket/get',
    'getUser': _host + '/wx/vote/getUser',
    'appId': CONFIG.debugger ? 'wxae3969df6f1d76fd' : 'wxef743b6a29c2f4d8'
};
export {httpUrl, WXhttp, statistics, sendVerification}