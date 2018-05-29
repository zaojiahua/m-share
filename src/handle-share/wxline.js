/*
 * @Author: backtonature 
 * @Date: 2018-05-24 14:17:21 
 * @Last Modified by: daringuo
 * @Last Modified time: 2018-05-29 12:29:22
 */
import util from '../util.js';
import qqBrowserShare from './handle-qqbrowser.js';
import ui from '../ui.js';

export default (info) => {
  if (util.ua.isFromWx) {
    // 微信客户端
    ui.showRightTopTips();
    return;
  }

  if (util.ua.isFromQQ) {
    // 手机qq
    ui.showRightTopTips();
    return;
  }

  if (util.ua.isFromUC) {
    // uc浏览器
    if (util.ua.isFromIos) {
      window.ucbrowser && window.ucbrowser.web_share(info.title, data.imgUrl, data.link, 'kWeixinFriend', '', '', '');
    } else {
      window.ucweb && window.ucweb.startRequest("shell.page_share", [info.title, data.imgUrl, data.link, 'WechatTimeline', '', '']);
    }
    return;
  }

  if (util.ua.isFromQQBrower) {
    // qq浏览器
    qqBrowserShare('wxline', info);
    return;
  }

  // 都不是则弹层二维码提示分享
};