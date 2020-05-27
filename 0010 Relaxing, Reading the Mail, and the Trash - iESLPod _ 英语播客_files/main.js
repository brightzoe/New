var nav_content = "";
  nav_content += '';
  nav_content += '<div id="alignRight">';
  nav_content += '<div class="bdsharebuttonbox"><a href="#" class="bds_more" data-cmd="more"></a>';
  nav_content += '<a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>';
  nav_content += '<a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>';
  nav_content += '<a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>';
  nav_content += '<a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>';
  nav_content += '<a href="#" class="bds_copy" data-cmd="copy" title="分享到复制网址"></a></div>';
  nav_content += '</div>';
notice.innerHTML = nav_content;



document.writeln("<script>window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"1\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"share\":{}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=\'+~(-new Date()/36e5)];</script>");


document.writeln("<script type=\"text\/javascript\">");
document.writeln("document.body.oncopy = function () { ");
document.writeln("	setTimeout( function () { ");
document.writeln("		var text = clipboardData.getData(\"text\");");
document.writeln("		if (text) { ");
document.writeln("			text = text + \"\\r\\n本文来自：详细网址：\"+location.href; clipboardData.setData(\"text\", text);");
document.writeln("		} ");
document.writeln("				}, 100 ) ");
document.writeln("}");
document.writeln("<\/script>");