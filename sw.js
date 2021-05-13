/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","5c8c58f166b06d4b6f752cbfc699e451"],["/archives/2017/index.html","3dde1e95635ae5e38fe63c6b6f79c6fd"],["/archives/2018/03/index.html","0a2e5dbeb9faf2b235b58259af8e2828"],["/archives/2018/04/index.html","0223b5a4d29fe5ad156b219f2070465d"],["/archives/2018/06/index.html","970c493037f2eca556ae8e9acf40d5d7"],["/archives/2018/07/index.html","b5f138fbcec207b11639742233dbf0aa"],["/archives/2018/index.html","be15a6facf2988ddc2f7ebf613ce0714"],["/archives/2019/04/index.html","eb54e903c0ac955f1a172e4fb8263ee1"],["/archives/2019/05/index.html","ef1a5bc28532bfcbbbf6e1808a197b82"],["/archives/2019/06/index.html","ae3663208458dccfa4001b1903c0b18e"],["/archives/2019/07/index.html","68cbad2b06b10688613c93d5dae26ab6"],["/archives/2019/index.html","f3f4c0f2df7c3b42b1cd0f2ba6899825"],["/archives/2020/02/index.html","3104118e65caaf5bf2c1b5965393ac5d"],["/archives/2020/02/page/2/index.html","16f33e578287a8c75dcd86282571a1e4"],["/archives/2020/02/page/3/index.html","87ca82eb55bb7ea76c03be4be4953729"],["/archives/2020/02/page/4/index.html","e3499559b48ed667c3fe883e23f17d86"],["/archives/2020/02/page/5/index.html","9c86d4d551d09ac7c655dc0b3a7e3137"],["/archives/2020/02/page/6/index.html","0dd4177d2d41f7c147f95a5e219e1ef1"],["/archives/2020/02/page/7/index.html","957f1a853954a0ed37ee3676905734f4"],["/archives/2020/07/index.html","bdc0d966429dfe461b591056abd5b8f5"],["/archives/2020/09/index.html","e7f1e1bb38b6a5e0c141357d6be1a1fa"],["/archives/2020/index.html","a11fdcdfe90d4d42425f794f95b84ac4"],["/archives/2020/page/2/index.html","c74a1329094f62d29c7022aa265256b9"],["/archives/2020/page/3/index.html","1b6f4a0ad61b96a3e1a9ca7a093c0561"],["/archives/2020/page/4/index.html","7bb3e5bd24790339e2099e4e5ee067c8"],["/archives/2020/page/5/index.html","f52f0b9fbc97bc3af233ba1c42f1dfc5"],["/archives/2020/page/6/index.html","8f32f0e8cce4fd9815d934d89cdcdddf"],["/archives/2020/page/7/index.html","0ea48184e0114ae184111fa314fafdac"],["/archives/2021/05/index.html","42966adabcf740164236375b210e3ebf"],["/archives/2021/index.html","2acae83f29c4e0ca8ed732925dce3063"],["/archives/index.html","e8d7b1bf4b0a93cb7bdc232b1cf132db"],["/archives/page/2/index.html","f736402281689be13e64e4b9dad05258"],["/archives/page/3/index.html","5d993c147206e49b0b0f1e4175e9c64d"],["/archives/page/4/index.html","ad21a7e8c0983849be7efbe23eeee250"],["/archives/page/5/index.html","90d19a3827386e8a7774952b824055f4"],["/archives/page/6/index.html","8dadd6d92ee1961b7e7ac38405a09169"],["/archives/page/7/index.html","b27493f5606a149dc1103f7c8359a95d"],["/archives/page/8/index.html","67e228575dfb130308c8c84c6bd9b15f"],["/archives/page/9/index.html","ce2c1ad5f175e626ea64638e91b66337"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","5556560fc81af34fe3011b1f23fd2de6"],["/categories/uncategorized/index.html","199b575ac12ec4e9124a954b37a3d12e"],["/css/main.css","327dd7b05e26da9ca4c56a056c2e5486"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","13a64f01cc630786eff3e4ef94dc1457"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","bc309201432476553024486737f13145"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5a6566536c7fda42569ac36d917693d6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5c0a43e0faefb5c4f9ac54f2cae0679c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","a1464eb96f7b294f36bcda40b543fb2a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","136219dfc065fcbc43cb30e065d1ddd7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","8d8ed61008bc28b01d3dbc351bc2e2e3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","d28a6d8a3976432f431a58db5d62e278"],["/live2d-widget/demo/demo2.html","a6ccbd3c9eb02a618688118eb57cd496"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6e4480b631467e8caeec8637ea5e0542"],["/page/2/index.html","a860a602311b60d852d79e58d57c6f06"],["/page/3/index.html","b2e2aeb7f6b3b7d532263af417eaea9b"],["/page/4/index.html","b7ca874f1de4a79b0d76b8ee6aae54f6"],["/page/5/index.html","1b83af44964313eb255e690d7e2d988b"],["/page/6/index.html","79af0f733acc35fb8689c28086f49175"],["/page/7/index.html","65ef7797a1532b159bf251d094f86496"],["/page/8/index.html","6831c93fb030214469445e120f471107"],["/page/9/index.html","c9ce08116f583148c53556feedd3b506"],["/posts/1045120033.html","b70fbc781d348be3a742fc9ccc0c57bc"],["/posts/1167241981.html","bafe6133d346e4c3ffdddcaa96aa3c46"],["/posts/12354587.html","39bc064e56a2631c72d98bea4688b75c"],["/posts/1368285564.html","db01e1f50aef2eaee29b3df9ed0980ce"],["/posts/139679387.html","4a653507a5581f37c8cf839a82a30039"],["/posts/143294467.html","af7abf156131d92939c7b5d05f283117"],["/posts/1450526405.html","a8a71adfc34a0effbff526d36422ca44"],["/posts/1453157241.html","e640d6ac98a73754651d22ecbc0d9a54"],["/posts/156538331.html","ea3d102f23333ef333bc23b083be1667"],["/posts/1573656155.html","b987bc5af194facc9b20bc4b70526b86"],["/posts/1589577150.html","b07c5ff6612776c27f87dd80a6f84004"],["/posts/1671835932.html","1cd4d2dc241a3a92a3f1f0cc37e5f0a9"],["/posts/1676366600.html","23552e435103f5fba3690754d5e20685"],["/posts/1736621667.html","395aab52d47a3ba210110bce209626fa"],["/posts/1756176446.html","09666370d4d6e44fe977f784f6347899"],["/posts/1770279608.html","209a3b97fb082881eb17e8467c2de900"],["/posts/1887844997.html","9066d73d66340782d3cf557497c50363"],["/posts/1909736378.html","b1097e19c8732b9bf62c2dce6b3b6467"],["/posts/1935704712.html","bd630d3c043dae73702fcd31f096a094"],["/posts/2068027928.html","086c396175f646a8fe1f60efeb1ff573"],["/posts/2223700806.html","25bc966f3973d2bbc361ec80b07a9aad"],["/posts/2284540863.html","cd7b922ceb4026366a1033e480a596f3"],["/posts/2292025215.html","5febd9a83490ae60101d3d5f0b9aea40"],["/posts/2380608036.html","ec16bda4cbc0ce8d882f20c7b7a479ed"],["/posts/2384358518.html","aa39c61f03b63b0c2861aadc0bc870fe"],["/posts/2422235321.html","e1fdf29a91f4b4e1352bf61be77de893"],["/posts/2436325960.html","f8de0af8cd6f4eac1816d241ddd099d2"],["/posts/2497004773.html","6fb38adf03d7c02ef898eba57b5d4d5f"],["/posts/2521564445.html","00906287c28d78afdedf1c6857765217"],["/posts/261493140.html","bda674beb35781993a28978496a53db2"],["/posts/2624931580.html","9be208f3e7f67c043f948e067d404d1f"],["/posts/2628694986.html","f7ba54ecfbc97afc475d93bb742e6236"],["/posts/2632806726.html","2f1ecce9ea1de54cc6a0d5e7e09b9911"],["/posts/2766769718.html","513f5d09ad81a3459804c067483a3048"],["/posts/2799909634.html","bd6c85980c9e5960cd695d6adc623519"],["/posts/2819274611.html","084afda4d69465e238ee0ad24883611c"],["/posts/2851953132.html","8a13d009644f651ffe46fcfe07c21b16"],["/posts/2909455182.html","65fc36e889cc2e08d743ef9976b0f619"],["/posts/2948078190.html","5ceb4bca8b350361c0ee2047c8763280"],["/posts/294966981.html","19f2b17d5eb9127781aac58a25feaa57"],["/posts/3177927357.html","1253d4a3863c6b42b46dcaf15ee3e41c"],["/posts/318287987.html","b28d9357bf6b01fc50a66aaff37dd343"],["/posts/3223976295.html","191a39afcc24945bbaa3f8590cdd3618"],["/posts/3269715988.html","9af05f024d0c6632e0b942ec202ceb40"],["/posts/327264135.html","c615ec32609c0b50f794fadaf61b5b9f"],["/posts/3334855695.html","8cbf96548a5100ea517779a5c7ab4083"],["/posts/335527560.html","d9bb808006fc7b4b30579d0a3305edc7"],["/posts/3358116184.html","d0cd221b51d30ed28d5bcdc1055fe173"],["/posts/336607436.html","ae6b6a6faad2f2ca24ada412461ccd9b"],["/posts/3457327171.html","14e0b3a5aed7f0f99ed1759c7f4e602e"],["/posts/3556896672.html","61781d293366c18dec2d12303a055b29"],["/posts/3623710045.html","f6ef4ce85ccdd0433e9c6955eef9007b"],["/posts/3711347257.html","d8acc9f2ddb48a7b51381106b3bb0ebc"],["/posts/373021397.html","8e99414e099ff4e32b14393af093f17a"],["/posts/3907754421.html","e807bc9c735c2d51fb38d2a79a758336"],["/posts/3910010431.html","5f7d76b42eb0f908425b3a753a303a7d"],["/posts/3944560991.html","473d29c10b2d4f51bd2138e92fa81066"],["/posts/3983964006.html","ad00a8308ed9bf8bad9f28f412e4e82e"],["/posts/3993308688.html","efff4487f74c45167eb52f8829d1c983"],["/posts/4017356380.html","e9ef4e6527a64a2a45083d122e0b0c81"],["/posts/4035306291.html","25c8ad46549069192f34807a26d6378b"],["/posts/4162857404.html","62385ccb2965904693d42ad2fa459cb0"],["/posts/4209115826.html","2eae3b03832675367bcbac2451cf111e"],["/posts/4210195828.html","e509e103da0d95ea38a2a2035578836f"],["/posts/4225763383.html","d341896f843400d0118157e876c396bf"],["/posts/4274270301.html","14d255afa2f3d4eac277167b7a0651ee"],["/posts/479952160.html","9b7e10ae70248d50eeb47c2a9164f6be"],["/posts/52063040.html","e40549850e497ba18f301dd31005cb85"],["/posts/548755248.html","994b29527ea1c570954e73b660c40003"],["/posts/570379779.html","d950d7d419fd31cef4a8f0035ad4981e"],["/posts/610628007.html","a1300818c78c3c021b956f583482252c"],["/posts/614845674.html","e6b55fbd8a4856e6a41fc6abcc4ad077"],["/posts/62490762.html","c7d91ccc574b46d4ab30a595f99ba498"],["/posts/677403736.html","ff3317f8c33f66ebe0d881f6889fb3a6"],["/posts/757859542.html","50803c2d6884f20fdb0f761fd90d654f"],["/posts/765759357.html","2a22d648f41a18144a013008c04f5163"],["/posts/804394302.html","db639f44b252e863e8135d6b01f339cf"],["/posts/836650148.html","92b0b77527800df8f49f6ab243757f38"],["/posts/872076193.html","16989145f9aac1463604e076ea330a2a"],["/posts/903614484.html","bf2b3179d93a43a93877aa6a75dfffd2"],["/posts/914665799.html","8474a72d3076906ac1a466fe541980dc"],["/posts/915758770.html","da057a7e09963a8e2bf751ca63cea352"],["/posts/917588948.html","752191889f02a03511be003767f36c3d"],["/posts/967289922.html","1ec67faefdb4d30eea93bb0e597bfc19"],["/posts/973073571.html","042ddcc361a64903e55dac34be968891"],["/posts/983467300.html","a4bb8cc924c4445021e45e5d7b0c4d14"],["/posts/986637382.html","66edcfb700a6a8ac888056023a01fe31"],["/posts/undefined.html","3f62fe90ff0a6a15e5ee4ffe392b05b3"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","42391f17cfb241dcf0d4a96ec8902fe7"],["/tags/AD/index.html","971da524c19b8bb03e6a8971a74241fe"],["/tags/Android/index.html","55d46ad2030344578b9494f128c3a38e"],["/tags/C/index.html","f17af160651b7263451a1eed409108a3"],["/tags/C语言/index.html","1939cd55f00f8e9ccb2c1c8300f10e43"],["/tags/HTML/index.html","0c06a3461c4c9296f490f51de74ef75b"],["/tags/Linux/index.html","df06a8b104848703a751376e0c9719e1"],["/tags/Linux/page/2/index.html","6876318d69fc3e9e9774a89e6de2b063"],["/tags/Linux/page/3/index.html","48f719a234463b1d572fa32950ac594b"],["/tags/OS/index.html","e0c7921c926f078d50ac8f9e0f9941a8"],["/tags/PHP/index.html","c245dc95a577fd859c0c200af5904141"],["/tags/Qt/index.html","adbbc48dbe32d16863c2635c86756eb2"],["/tags/RaspberryPi/index.html","6367cadc7cac764a27d0b5aa4dbf4a64"],["/tags/RaspiberryPi/index.html","de1afa1e261a44bfd57d60e343220c67"],["/tags/android/index.html","4f3ab5b5a2461c35792c8c69bcdcf3e8"],["/tags/hexo/index.html","b693036f4af85d22bba1c964f6ab9953"],["/tags/index.html","25754890d7255d3b26d027a9cda0e72b"],["/tags/linux-ubuntu/index.html","ab7590efda4ca36c115edfced0868772"],["/tags/linux/index.html","6ee69b5f3456da9bce1f44e7485b9a32"],["/tags/mysql/index.html","e13bf54461e897ac23890ff9dbf2fa3b"],["/tags/oj/index.html","c422973c07242f19a91dbef877c09268"],["/tags/python/index.html","f47392095d362d389d00efc45600886e"],["/tags/qt/index.html","e11241e6eca83d811a86f97ccca27af3"],["/tags/raspberryPi/index.html","3f09d8029b51a7ab3bd87f12969f6f46"],["/tags/ssr/index.html","e92067cc26c4e2c587e35f2eec19cfae"],["/tags/unix/index.html","3813ae88b416f8bff8a43b2dd205a805"],["/tags/上位机-Qt/index.html","aa4da86e9a6e11aeb7df340f0b0698cf"],["/tags/交叉编译/index.html","344299378be9c2c69b65e2a9d7d5f8c8"],["/tags/代理/index.html","968c7cf8c88312f9e55d3ae05d67e4f8"],["/tags/刷机/index.html","456d7376a00776584d52b934765cf1e4"],["/tags/学习/index.html","125fd2ed7fd14d193b1f4776a3bfe988"],["/tags/感想/index.html","e3790b9464aead3613a39c89e989afa9"],["/tags/未分类/index.html","136d52ee95a393cdb8935bc90b6bb348"],["/tags/树莓派/index.html","672dd400fa4b07e0ea8b44be245a727b"],["/tags/毕业设计/index.html","2d37cdaa004178369e61cea426ed260c"],["/tags/硬件/index.html","36c4e663810acf2705efa1cf9e41319b"],["/tags/算法/index.html","e5d565933743d6327cbb3a37eb8f2b41"],["/tags/系统/index.html","6db541f7526975607f586b7feeb3b1b2"],["/tags/组会/index.html","f082e452aa6566ae1359e787adb3cfcd"],["/tags/网站/index.html","70712ef9406dbd081ac1a742cea3f831"],["/tags/肺腑之言/index.html","59667ca4ec4bbbe9656d0a947f27f5ac"],["/tags/自顶向下方法/index.html","e1ace6dc3a357a1a1e4d86392c9ff0b8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
