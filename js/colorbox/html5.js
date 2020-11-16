<!DOCTYPE html>
<html><head>
<meta http-equiv="content-type" content="text/html; charset=Shift_JIS"><title>http://tsudoi.org/javascript/jQuery/Plugin/colorbox/1/js/libs/js/libs/html5.js</title><link rel="stylesheet" type="text/css" href="html5_files/viewsource.css"></head><body id="viewsource" class="highlight" style="-moz-tab-size: 4" contextmenu="actions"><pre id="line1"><span></span><span class="error doctype" title="Almost standards mode doctype. Expected &quot;&lt;!DOCTYPE html&gt;&quot;.">&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</span><span>
<span id="line2"></span></span><span>&lt;<span class="start-tag">html</span> <span class="attribute-name">xmlns</span>="<a class="attribute-value">http://www.w3.org/1999/xhtml</a>"&gt;</span><span>
<span id="line3"></span></span><span>&lt;<span class="start-tag">head</span>&gt;</span><span>
<span id="line4"></span></span><span>&lt;<span class="start-tag">meta</span> <span class="attribute-name">http-equiv</span>="<a class="attribute-value">Content-Type</a>" <span class="attribute-name">content</span>="<a class="attribute-value">text/html; charset=UTF-8</a>"&gt;</span><span>
<span id="line5"></span></span><span>&lt;<span class="start-tag">meta</span> <span class="attribute-name">http-equiv</span>="<a class="attribute-value">Content-Style-Type</a>" <span class="attribute-name">content</span>="<a class="attribute-value">text/css</a>"&gt;</span><span>
<span id="line6"></span></span><span>&lt;<span class="start-tag">meta</span> <span class="attribute-name">http-equiv</span>="<a class="attribute-value">Content-Script-Type</a>" <span class="attribute-name">content</span>="<a class="attribute-value">text/javascript</a>"&gt;</span><span>
<span id="line7"></span></span><span>&lt;<span class="start-tag">meta</span> <span class="attribute-name">name</span>="<a class="attribute-value">viewport</a>" <span class="attribute-name">content</span>="<a class="attribute-value">width=device-width; initial-scale=1.0;  maximum-scale=1.0; user-scalable=0;</a>"&gt;</span><span>
<span id="line8"></span></span><span>&lt;<span class="start-tag">title</span>&gt;</span><span>404 Error - Not Found</span><span>&lt;/<span class="end-tag">title</span>&gt;</span><span>
<span id="line9"></span>
<span id="line10"></span></span><span>&lt;<span class="start-tag">style</span> <span class="attribute-name">type</span>="<a class="attribute-value">text/css</a>"&gt;</span><span>
<span id="line11"></span></span><span>&lt;</span><span>!--
<span id="line12"></span>#ERR_MAIN { margin:11px auto 0 auto; width:620px;text-align:left; }
<span id="line13"></span>.LINE_DOT { background-image:url(/lolipop_service_documents/simple/line_dot.gif); height:2px; }
<span id="line14"></span>a.IMG_LINK:hover { background:none; }
<span id="line15"></span>.ERR_TXT { width: 610px; height:18px; padding: 
5px 0 5px 10px ; margin:15px 0 10px; background-color: #bbeeee; 
font-weight: bold; color:#ee5555; }
<span id="line16"></span>.ERR_CHK { width: 610px; margin:0 0 0 10px; padding-left:1em; text-indent:-1em; }
<span id="line17"></span>.PEPABO  { border-top: 1px solid #666; 
color:#022055; padding: 10px 0 0 0; margin-bottom: 10px; 
text-align:center; font-family:Verdana;}
<span id="line18"></span>.COPY{margin-bottom:15px; text-align:center; font-family:Verdana; }
<span id="line19"></span>.h1-img-mg {width:460px; height:70px; margin-left:135px;}
<span id="line20"></span>.to-lolipop-img {margin-left:140px;}
<span id="line21"></span>#AdMobile{display:none;}
<span id="line22"></span>
<span id="line23"></span>.MobileView #ERR_MAIN {width: auto !important; -webkit-text-size-adjust: none;}
<span id="line24"></span>.MobileView .ERR_TXT { width: auto !important; 
font-size:11px !important; margin:0 0 10px !important; height:15px 
!important; padding: 3px 0 4px 10px !important;}
<span id="line25"></span>.MobileView .ERR_CHK { width: auto !important; 
font-size:10px !important; line-height:12px !important; margin-top:10px 
!important; padding:0 5px !important;}
<span id="line26"></span>.MobileView .PEPABO  { font-size:11px !important; }
<span id="line27"></span>.MobileView .COPY{ font-size:10px !important; }
<span id="line28"></span>.MobileView .h1-img-mg {width:276px; height:42px; margin:0;}
<span id="line29"></span>.MobileView .to-lolipop-img {width:280px; height:14px; margin:0;}
<span id="line30"></span>.MobileView #AdPc{display:none;}
<span id="line31"></span>.MobileView #AdMobile{display:block;margin:8px auto;}
<span id="line32"></span>--&gt;
<span id="line33"></span></span><span>&lt;/<span class="end-tag">style</span>&gt;</span><span>
<span id="line34"></span>
<span id="line35"></span></span><span>&lt;<span class="start-tag">script</span> <span class="attribute-name">type</span>="<a class="attribute-value">text/javascript</a>"&gt;</span><span>
<span id="line36"></span>var checkUA = function() {
<span id="line37"></span>    var _ua = navigator.userAgent;
<span id="line38"></span>    if( 0 </span><span>&lt; </span><span>_ua.indexOf('iPhone') ) { return 'iphone' }
<span id="line39"></span>    else if( 0 </span><span>&lt; </span><span>_ua.indexOf('iPad') ) { return 'ipad' }
<span id="line40"></span>    else if( 0 </span><span>&lt; </span><span>_ua.indexOf('iPod') ) { return 'ipod' }
<span id="line41"></span>    else if( 0 </span><span>&lt; </span><span>_ua.indexOf('Android') ) { return 'android' }
<span id="line42"></span>    else return false;
<span id="line43"></span>}
<span id="line44"></span>
<span id="line45"></span>window.onload = function(){
<span id="line46"></span>    if(checkUA()=='iphone' || checkUA()=='ipod' || checkUA()=='android'){
<span id="line47"></span>        document.getElementsByTagName('body')[0].setAttribute('class','MobileView');
<span id="line48"></span>    }
<span id="line49"></span>}
<span id="line50"></span>// コピーライト
<span id="line51"></span>function setCopyrights () {
<span id="line52"></span>	document.write('copyright(c)2001-　' + ' </span><span>&lt;a</span><span> href="http://pepabo.com/" target="_blank"&gt;GMOペパボ株式会社</span><span>&lt;/<span></span>a</span><span>&gt; all rights reserved');
<span id="line53"></span>}
<span id="line54"></span></span><span>&lt;/<span class="end-tag">script</span>&gt;</span><span>
<span id="line55"></span></span><span>&lt;/<span class="end-tag">head</span>&gt;</span><span>
<span id="line56"></span>
<span id="line57"></span></span><span>&lt;<span class="start-tag">body</span>&gt;</span><span>
<span id="line58"></span>    </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">id</span>="<a class="attribute-value">ERR_MAIN</a>"&gt;</span><span>
<span id="line59"></span>
<span id="line60"></span>        </span><span>&lt;<span class="start-tag">h1</span> <span class="attribute-name">style</span>="<a class="attribute-value">margin:0px;</a>"&gt;</span><span></span><span>&lt;<span class="start-tag">img</span> <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://tsudoi.org/lolipop_service_documents/simple/obj_404.gif">/lolipop_service_documents/simple/obj_404.gif</a>" <span class="attribute-name">alt</span>="<a class="attribute-value">404 エラー</a>" <span class="attribute-name">class</span>="<a class="attribute-value">h1-img-mg</a>"<span>/</span>&gt;</span><span></span><span>&lt;/<span class="end-tag">h1</span>&gt;</span><span>
<span id="line61"></span>        </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">class</span>="<a class="attribute-value">LINE_DOT</a>" <span class="attribute-name">style</span>="<a class="attribute-value">margin:7px 0px;</a>"&gt;</span><span></span><span>&lt;<span class="start-tag">img</span> <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://tsudoi.org/lolipop_service_documents/simple/sp.gif">/lolipop_service_documents/simple/sp.gif</a>" <span class="attribute-name">width</span>="<a class="attribute-value">1</a>" <span class="attribute-name">height</span>="<a class="attribute-value">1</a>"&gt;</span><span></span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line62"></span>        </span><span>&lt;<span class="start-tag">a</span> <span class="attribute-name">href</span>="<a class="attribute-value" href="view-source:http://lolipop.jp/">http://lolipop.jp/</a>" <span class="attribute-name">class</span>="<a class="attribute-value">IMG_LINK</a>" <span class="attribute-name">title</span>="<a class="attribute-value">ロリポップ！レンタルサーバー</a>"&gt;</span><span></span><span>&lt;<span class="start-tag">img</span> <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://tsudoi.org/lolipop_service_documents/simple/btn_lolipop.gif">/lolipop_service_documents/simple/btn_lolipop.gif</a>" <span class="attribute-name">border</span>="<a class="attribute-value">0</a>" <span class="attribute-name">width</span>="<a class="attribute-value">320</a>" <span class="attribute-name">height</span>="<a class="attribute-value">16</a>" <span class="attribute-name">alt</span>="<a class="attribute-value">ロリポップ！レンタルサーバー</a>" <span class="attribute-name">class</span>="<a class="attribute-value">to-lolipop-img</a>"<span>/</span>&gt;</span><span></span><span>&lt;/<span class="end-tag">a</span>&gt;</span><span>
<span id="line63"></span>
<span id="line64"></span>        </span><span>&lt;<span class="start-tag">dl</span> <span class="attribute-name">style</span>="<a class="attribute-value">margin: 8px 0px; padding:0 0 15px; border-bottom:1px solid #ccc; line-height:20px;</a>"&gt;</span><span>
<span id="line65"></span>            </span><span>&lt;<span class="start-tag">dt</span> <span class="attribute-name">class</span>="<a class="attribute-value">ERR_TXT</a>"&gt;</span><span>※指定されたページ（ＵＲＬ）は見つかりません。</span><span>&lt;/<span class="end-tag">dt</span>&gt;</span><span>
<span id="line66"></span>            </span><span>&lt;<span class="start-tag">dd</span> <span class="attribute-name">class</span>="<a class="attribute-value">ERR_CHK</a>"&gt;</span><span><span class="entity"><span>&amp;</span>bull;</span><span class="entity"><span>&amp;</span>nbsp;</span>ＵＲＬに間違いがないか、再度確認してください。再読み込みしてください。</span><span>&lt;/<span class="end-tag">dd</span>&gt;</span><span>
<span id="line67"></span>            </span><span>&lt;<span class="start-tag">dd</span> <span class="attribute-name">class</span>="<a class="attribute-value">ERR_CHK</a>"&gt;</span><span><span class="entity"><span>&amp;</span>bull;</span><span class="entity"><span>&amp;</span>nbsp;</span>ご利用中のユーザー様は【</span><span>&lt;<span class="start-tag">a</span> <span class="attribute-name">href</span>="<a class="attribute-value" href="view-source:http://lolipop.jp/support/faq/">http://lolipop.jp/support/faq/</a>" <span class="attribute-name">target</span>="<a class="attribute-value">_top</a>"&gt;</span><span>ロリポップ！よくある質問集</span><span>&lt;/<span class="end-tag">a</span>&gt;</span><span>】をご参照ください。</span><span>&lt;/<span class="end-tag">dd</span>&gt;</span><span>
<span id="line68"></span>            </span><span>&lt;<span class="start-tag">dd</span> <span class="attribute-name">class</span>="<a class="attribute-value">ERR_CHK</a>"&gt;</span><span><span class="entity"><span>&amp;</span>bull;</span><span class="entity"><span>&amp;</span>nbsp;</span>疑問点等ございましたら【</span><span>&lt;<span class="start-tag">a</span> <span class="attribute-name">href</span>="<a class="attribute-value" href="view-source:http://lolipop.jp/support/inq/">http://lolipop.jp/support/inq/</a>" <span class="attribute-name">target</span>="<a class="attribute-value">_top</a>"&gt;</span><span>ロリポップ！お問合せフォーム</span><span>&lt;/<span class="end-tag">a</span>&gt;</span><span>】よりお問合せください。</span><span>&lt;/<span class="end-tag">dd</span>&gt;</span><span>
<span id="line69"></span>        </span><span>&lt;/<span class="end-tag">dl</span>&gt;</span><span>
<span id="line70"></span>
<span id="line71"></span>        </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">id</span>="<a class="attribute-value">AdMobile</a>"&gt;</span><span>
<span id="line72"></span>            </span><span>&lt;<span class="start-tag">script</span> <span class="attribute-name">type</span>="<a class="attribute-value">text/javascript</a>"&gt;</span><span>
<span id="line73"></span>                if(checkUA()=='android'){
<span id="line74"></span>                    var adstir_vars = {
<span id="line75"></span>                        ver    : "4.0",
<span id="line76"></span>                        app_id : "MEDIA-bdb7dec6",
<span id="line77"></span>                        ad_spot: 2,
<span id="line78"></span>                        center : false
<span id="line79"></span>                    };
<span id="line80"></span>                } else{
<span id="line81"></span>                    var adstir_vars = {
<span id="line82"></span>                        ver    : "4.0",
<span id="line83"></span>                        app_id : "MEDIA-bdb7dec6",
<span id="line84"></span>                        ad_spot: 1,
<span id="line85"></span>                        center : false
<span id="line86"></span>                    };
<span id="line87"></span>                }
<span id="line88"></span>            </span><span>&lt;/<span class="end-tag">script</span>&gt;</span><span>
<span id="line89"></span>            </span><span>&lt;<span class="start-tag">script</span> <span class="attribute-name">type</span>="<a class="attribute-value">text/javascript</a>" <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://js.ad-stir.com/js/adstir.js?20130527">http://js.ad-stir.com/js/adstir.js?20130527</a>"&gt;</span><span></span><span>&lt;/<span class="end-tag">script</span>&gt;</span><span>
<span id="line90"></span>        </span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line91"></span>
<span id="line92"></span>        </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">id</span>="<a class="attribute-value">AdPc</a>" <span class="attribute-name">style</span>="<a class="attribute-value">width:620px; margin:20px 0;</a>"&gt;</span><span>
<span id="line93"></span>            </span><span class="comment">&lt;!-- ロリポップ！バナー --&gt;</span><span>
<span id="line94"></span>            </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">style</span>="<a class="attribute-value">text-align:center;margin:15px auto 20px;</a>"&gt;</span><span>
<span id="line95"></span>                </span><span>&lt;<span class="start-tag">a</span> <span class="attribute-name">href</span>="<a class="attribute-value" href="view-source:http://lolipop.jp/info/campaign/">http://lolipop.jp/info/campaign/</a>" <span class="attribute-name">target</span>="<a class="attribute-value">_blank</a>"&gt;</span><span></span><span>&lt;<span class="start-tag">img</span> <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://assets.lolipop.jp/img/bnr/bnr_lolipop_ad_001.gif">http://assets.lolipop.jp/img/bnr/bnr_lolipop_ad_001.gif</a>" <span>/</span>&gt;</span><span></span><span>&lt;/<span class="end-tag">a</span>&gt;</span><span>
<span id="line96"></span>            </span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line97"></span>            </span><span class="comment">&lt;!-- 広告左 --&gt;</span><span>
<span id="line98"></span>            </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">style</span>="<a class="attribute-value">width:300px;display:inline;float:left;</a>"&gt;</span><span>
<span id="line99"></span>                </span><span>&lt;<span class="start-tag">script</span> <span class="attribute-name">type</span>='<a class="attribute-value">text/javascript</a>'&gt;</span><span></span><span>&lt;!</span><span>--//</span><span>&lt;!</span><span>[CDATA[
<span id="line100"></span>                    if(!checkUA()){
<span id="line101"></span>                    document.MAX_ct0 ='INSERT_CLICKURL_HERE';
<span id="line102"></span>                        if (location.protocol=='https:') {
<span id="line103"></span>                        } else {
<span id="line104"></span>                            var m3_u = 'http://vsc.send.microad.jp/delivery/ajs.php';
<span id="line105"></span>                            var m3_r = Math.floor(Math.random()*99999999999);
<span id="line106"></span>                            if (!document.MAX_used) document.MAX_used = ',';
<span id="line107"></span>                            document.write ("</span><span>&lt;s</span><span>cr"+"ipt type='text/javascript' src='"+m3_u);
<span id="line108"></span>                            document.write ("?zoneid=14317&amp;amp;charset=UTF-8");
<span id="line109"></span>                            document.write ('&amp;amp;snr=1&amp;amp;cb=' + m3_r);
<span id="line110"></span>                            if (document.MAX_used != ',') document.write ("&amp;amp;exclude=" + document.MAX_used);
<span id="line111"></span>                            document.write ('&amp;amp;charset=UTF-8');
<span id="line112"></span>                            document.write ("&amp;amp;loc=" + encodeURIComponent(window.location));
<span id="line113"></span>                            if (document.referrer) document.write ("&amp;amp;referer=" + encodeURIComponent(document.referrer));
<span id="line114"></span>                            if (document.context) document.write ("&amp;context=" + encodeURIComponent(document.context));
<span id="line115"></span>                            if 
((typeof(document.MAX_ct0) != 'undefined') &amp;&amp; 
(document.MAX_ct0.substring(0,4) == 'http')) {
<span id="line116"></span>                                document.write ("&amp;amp;ct0=" + encodeURIComponent(document.MAX_ct0));
<span id="line117"></span>                            }
<span id="line118"></span>                            if (document.mmm_fo) document.write ("&amp;amp;mmm_fo=1");
<span id="line119"></span>                            document.write ("'&gt;</span><span>&lt;\</span><span>/scr"+"ipt&gt;");
<span id="line120"></span>                        }
<span id="line121"></span>                    }
<span id="line122"></span>                //]]&gt;--&gt;</span><span>&lt;/<span class="end-tag">script</span>&gt;</span><span>
<span id="line123"></span>                </span><span>&lt;<span class="start-tag">noscript</span>&gt;</span><span></span><span>&lt;</span><span>a href='http://vsc.send.microad.jp/delivery/ck.php?n=adeb0af3&amp;amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'&gt;</span><span>&lt;</span><span>img
 
src='http://vsc.send.microad.jp/delivery/avw.php?zoneid=14317&amp;amp;charset=UTF-8&amp;amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;amp;n=adeb0af3&amp;amp;ct0=INSERT_CLICKURL_HERE&amp;amp;snr=1'
 border='0' alt='' /&gt;</span><span>&lt;/<span></span>a</span><span>&gt;</span><span>&lt;/<span class="end-tag">noscript</span>&gt;</span><span>
<span id="line124"></span>            </span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line125"></span>
<span id="line126"></span>            </span><span class="comment">&lt;!-- 広告右 --&gt;</span><span>
<span id="line127"></span>            </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">style</span>="<a class="attribute-value">width:300px;margin-left:20px;float:left;</a>"&gt;</span><span>
<span id="line128"></span>                </span><span class="comment">&lt;!-- minne --&gt;</span><span>
<span id="line129"></span>                </span><span>&lt;<span class="start-tag">a</span> <span class="attribute-name">href</span>="<a class="attribute-value" href="view-source:https://minne.com/?utm_source=lolipop&amp;utm_medium=bnr&amp;utm_content=404&amp;utm_campaign=pepabo">https://minne.com/?utm_source=lolipop<span><span class="error" title="&quot;&amp;&quot; が実体参照の開始以外で使われています。&quot;&amp;&quot; を &quot;&amp;amp;&quot; にエスケープし忘れてる可能性があります。">&amp;</span>ut</span>m_medium=bnr<span><span class="error" title="&quot;&amp;&quot; が実体参照の開始以外で使われています。&quot;&amp;&quot; を &quot;&amp;amp;&quot; にエスケープし忘れてる可能性があります。">&amp;</span>ut</span>m_content=404<span><span class="error" title="&quot;&amp;&quot; が実体参照の開始以外で使われています。&quot;&amp;&quot; を &quot;&amp;amp;&quot; にエスケープし忘れてる可能性があります。">&amp;</span>ut</span>m_campaign=pepabo</a>" <span class="attribute-name">target</span>="<a class="attribute-value">_blank</a>"&gt;</span><span>
<span id="line130"></span>                    </span><span>&lt;<span class="start-tag">img</span> <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://minne.com/images/banner/minne_d_300_250.png">http://minne.com/images/banner/minne_d_300_250.png</a>" <span class="attribute-name">alt</span>="<a class="attribute-value">ハンドメイドマーケット minne（ミンネ）</a>" <span class="attribute-name">width</span>="<a class="attribute-value">300</a>" <span class="attribute-name">height</span>="<a class="attribute-value">250</a>"&gt;</span><span>
<span id="line131"></span>                </span><span>&lt;/<span class="end-tag">a</span>&gt;</span><span>
<span id="line132"></span>            </span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line133"></span>            </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">style</span>="<a class="attribute-value">clear:both;</a>"&gt;</span><span></span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line134"></span>        </span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line135"></span>
<span id="line136"></span>        </span><span>&lt;<span class="start-tag">h4</span> <span class="attribute-name">class</span>="<a class="attribute-value">PEPABO</a>"&gt;</span><span></span><span>&lt;<span class="start-tag">a</span> <span class="attribute-name">href</span>="<a class="attribute-value" href="view-source:http://lolipop.jp/">http://lolipop.jp/</a>" <span class="attribute-name">target</span>="<a class="attribute-value">_blank</a>"&gt;</span><span>ロリポップ！レンタルサーバー</span><span>&lt;/<span class="end-tag">a</span>&gt;</span><span></span><span>&lt;/<span class="end-tag">h4</span>&gt;</span><span>
<span id="line137"></span>        </span><span>&lt;<span class="start-tag">div</span> <span class="attribute-name">class</span>="<a class="attribute-value">COPY</a>"&gt;</span><span></span><span>&lt;<span class="start-tag">script</span> <span class="attribute-name">type</span>="<a class="attribute-value">text/javascript</a>"&gt;</span><span>setCopyrights();</span><span>&lt;/<span class="end-tag">script</span>&gt;</span><span></span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line138"></span>
<span id="line139"></span>    </span><span>&lt;/<span class="end-tag">div</span>&gt;</span><span>
<span id="line140"></span></span><span>&lt;/<span class="end-tag">body</span>&gt;</span><span>
<span id="line141"></span></span><span>&lt;/<span class="end-tag">html</span>&gt;</span><span>
<span id="line142"></span></span></pre><menu type="context" id="actions"><menuitem id="goToLine" label="指定行へ移動..." accesskey="L"></menuitem><menuitem id="wrapLongLines" label="長い行を折り返す" type="checkbox"></menuitem><menuitem id="highlightSyntax" label="構文を強調表示" type="checkbox" checked="true"></menuitem></menu></body></html>