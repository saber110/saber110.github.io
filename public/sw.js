/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","2b41e42f6e22e7a882fb4ca0909f4100"],["/archives/2017/index.html","2479aef24a2fef853d35de8eb8e19834"],["/archives/2018/03/index.html","6f0bd5f06d522922b525e695b7724f4a"],["/archives/2018/04/index.html","c599ac54035e7f0f225ef31371a41c8a"],["/archives/2018/06/index.html","fee20fee0a2cb452660d412e6de0877f"],["/archives/2018/07/index.html","434e0a171ab1576c768563bcd9b34eed"],["/archives/2018/index.html","c90eafaba99c50e489bfd1a57a3ff210"],["/archives/2019/04/index.html","389a9847424e14cd05a7ba3c49f8b973"],["/archives/2019/05/index.html","099480603bfe8ce25f2fedd2cdf2c651"],["/archives/2019/06/index.html","2a499bca9fb3fb34f4b42f2c67e4061e"],["/archives/2019/07/index.html","06d6d8b5d3899ea84a30ad067678b829"],["/archives/2019/index.html","cc30693a1da077c360c5653f8fe6c989"],["/archives/2020/02/index.html","5f7b1059558f568afd266b51b73505ca"],["/archives/2020/02/page/2/index.html","68c09b62e1d4829b95d1b811751dc4c7"],["/archives/2020/02/page/3/index.html","4e55877d33207ecefa10646d4267c4d1"],["/archives/2020/02/page/4/index.html","6cff0533a263bcae1cc26057e1c85e70"],["/archives/2020/02/page/5/index.html","a0ac993f858ad18534e48ee9d5a21cee"],["/archives/2020/02/page/6/index.html","07b5ef30215a92eccd2004db57f48ec0"],["/archives/2020/02/page/7/index.html","90b72e7e401ac0f18ee880c5e965b1d2"],["/archives/2020/07/index.html","319b3420b2ebae20e7d057be293aed78"],["/archives/2020/09/index.html","ec1af28fdafa80105ddd64756ada950e"],["/archives/2020/index.html","65ce3de189ab022bc08fc512f633c209"],["/archives/2020/page/2/index.html","2d4f8b6d590ffa9ead8915b97e166506"],["/archives/2020/page/3/index.html","dad5c471948a39c4c0d9e768dfb547df"],["/archives/2020/page/4/index.html","9d817ac4129bc7dac474a00a81041111"],["/archives/2020/page/5/index.html","f7e5d2d87a24b8568200f553ecfe0933"],["/archives/2020/page/6/index.html","d7edaf4a71ff84854a17cc4b2c82bfcb"],["/archives/2020/page/7/index.html","709965f48a673b6fb365b63aac724ec3"],["/archives/2021/05/index.html","c6fefbed0ce360b55d4320ad03b88a26"],["/archives/2021/index.html","abe92325e7be51ec52f469916bd9d2d0"],["/archives/index.html","4396daa722af1e4173c449828faed4a9"],["/archives/page/2/index.html","369b1704c62b5c40bce32e8556120de7"],["/archives/page/3/index.html","2089e0fd4cddcd3302afa5d677f1ab55"],["/archives/page/4/index.html","2b910759798fc52b63720160de58d31a"],["/archives/page/5/index.html","dfd1e6caca6154d5c4890be3d3a3a440"],["/archives/page/6/index.html","e3fceb78e83bea0dfda979a4f0a238a2"],["/archives/page/7/index.html","b2807c77ab95b5ab87efbd47ad07bedf"],["/archives/page/8/index.html","377afc85b2f986248babd49055a0f1b1"],["/archives/page/9/index.html","8b03403ae86d0c07c1508477262f69ca"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","6b1ea085f70349ca77e8610b311ea3a0"],["/categories/uncategorized/index.html","50fe1a3e196c488b767669776073c54e"],["/css/main.css","fd7304a4a917d41fd193c91084e6d896"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","246c9e5caeb084b9d138059ebd527346"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","aadb19bb8182f66e23a0d6761ba2d284"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","86232f4e98a784a7c22dd38f959317e2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","98dfac7975505544d0b1d9caa5b4bf92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","1f7cebda5a301552e010b86736230074"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d9787e13216a8f9535d3ed7859411f60"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","05cdc66459e755737c08a9992e2e9c3d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","d28a6d8a3976432f431a58db5d62e278"],["/live2d-widget/demo/demo2.html","a6ccbd3c9eb02a618688118eb57cd496"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1091d05b26086df6bdbdf7347a0857c8"],["/page/2/index.html","d593c82c850603c40f61e7002b183d86"],["/page/3/index.html","f484ba4cb094e4e484f279e9a1cd04fe"],["/page/4/index.html","0324e2945601c097d342f7c077fb694b"],["/page/5/index.html","42ef2ced476f4468b2821516647fbf91"],["/page/6/index.html","d1bcdcca21410dd872c322c89736c99a"],["/page/7/index.html","da50e4eb391cb3ebf05f5db1f7009d58"],["/page/8/index.html","0019f290ef9c4e5b682ad005d91b7f87"],["/page/9/index.html","7ef6acd06caea35db8c9581a1b5a5307"],["/posts/1045120033.html","b87ffce4a2b6d95537b7e359bce91983"],["/posts/1167241981.html","d2a566c341f12820b898a0ac7f3f61b0"],["/posts/12354587.html","46983345791227dd69dbccba166abda6"],["/posts/1368285564.html","c088e94680a47e7366ea314d1596d665"],["/posts/139679387.html","a01e5a885a357fdaf40ed9ef9da7fd7d"],["/posts/143294467.html","68d31f03a3aaee722ef5abfda5f07fb4"],["/posts/1450526405.html","3ce48c875a17500f76d6e67710f62172"],["/posts/1453157241.html","91f3533c3c979da2929405a2a79ec930"],["/posts/156538331.html","68141fab32191dcc111af93f52bb4348"],["/posts/1573656155.html","c9b43ba2e8b1f2a50677829020cd3144"],["/posts/1589577150.html","d05561cc11b3b8a223a2f82ba194acea"],["/posts/1671835932.html","1f1f678fb20f21b98c48bf5f0e47c05b"],["/posts/1676366600.html","eebf6159b8547fb72a69e33275fc82fc"],["/posts/1736621667.html","4e9f315ad16afa07550c2bed63fb8321"],["/posts/1756176446.html","a357cc04846f43c99461063f4657af7c"],["/posts/1770279608.html","27e9fba9ab1398a46d4f6160aac4b044"],["/posts/1887844997.html","b17d0bff21d5763f6fa43d1cf0f05dd7"],["/posts/1909736378.html","8868a8b1191350f00a4d1fab8ccee1a2"],["/posts/1935704712.html","2236d689e911d2062cc12c6842dc8408"],["/posts/2068027928.html","e181c691f9cc573bba79b11aadc7a65c"],["/posts/2223700806.html","763c687d649d55275ea97c6fd08bbf9c"],["/posts/2284540863.html","633baf1a2c8010da7d30f91d91a24c69"],["/posts/2292025215.html","5eea2c90e720c0312c0065f548a55fe7"],["/posts/2380608036.html","5025d3df49be41f04c42fa81e9964f19"],["/posts/2384358518.html","c3da320e2da9334446d176490239532a"],["/posts/2422235321.html","89e770c33e4e7d62a7174b91681ff12c"],["/posts/2436325960.html","42a3498c4cac0d4a7493b81356775fa9"],["/posts/2471479807.html","eb49fc05bed2c6cfbd9847ebc708bc0f"],["/posts/2497004773.html","124443079f415134f86d67f2b2148fda"],["/posts/2521564445.html","e8bcc2b50c05b184b7c4004a07ee7935"],["/posts/261493140.html","b830d164f22676605a30f87e6b17f19b"],["/posts/2624931580.html","6446823c7b6d15843b9aecf1e8961f3d"],["/posts/2628694986.html","fd2e6dc9d018bed48ca949bf246a492d"],["/posts/2632806726.html","b6bf0481285de379c60c62a19e5e188a"],["/posts/2766769718.html","6ea1cdf9f62756805626aaddd347a70b"],["/posts/2799909634.html","835cd74202454192f419a1737316ec57"],["/posts/2819274611.html","c429003652e446c006ebadd6283b030d"],["/posts/2851953132.html","b2ffece9171db2b0eb9fe0a67586f5cb"],["/posts/2909455182.html","983442a6aa9ebd407f2136269f3049e0"],["/posts/2948078190.html","941918b1760eaeaea905a7b988489f2d"],["/posts/294966981.html","415522fe12f6d6f74a856101ccd08c2e"],["/posts/3177927357.html","f58d46745636b904590b7782e273af8d"],["/posts/318287987.html","09ef0bbe1a8aa8029b6b260c7b961bcb"],["/posts/3223976295.html","fe07e12030f0dc6d62decc8e2471583e"],["/posts/3269715988.html","914d07111e8fa68249a805080258d66c"],["/posts/327264135.html","349bf820a47bdf54d1e4102053a91995"],["/posts/3334855695.html","5aba86c286ba00218536e7a434d8e277"],["/posts/335527560.html","7a1989d3aa5611e8cad29e6a2c086cdb"],["/posts/3358116184.html","ac6c517bcb81ad227a37b809ee7223e4"],["/posts/336607436.html","4643c327bb06d7b7ff5baeaac1074c3b"],["/posts/3457327171.html","2da35e1da67a1a279c0d5b6722c3355e"],["/posts/3556896672.html","19093b119fe3d1de29071151473de911"],["/posts/3623710045.html","864a5af6ba12b98e5ad5b81213c7f3a0"],["/posts/3711347257.html","3b4559b500abd3b839ac95fbb8d0f503"],["/posts/373021397.html","b679ba3bb77e507c1c13a463f87f8d4a"],["/posts/3907754421.html","05fa691675ebf3f5149afc5a156358ab"],["/posts/3910010431.html","138e8d0b70ed697d558e43dc9a5976e5"],["/posts/3944560991.html","c4e2c8be112d824454c963a95b3570a8"],["/posts/3983964006.html","4391f37c59f967dccae8e5031ac4a9e7"],["/posts/3993308688.html","3d64eedc1457fd2ee7ac98ef67f5fb21"],["/posts/4017356380.html","49f22c599dd599ee22cd876acee66f4f"],["/posts/4035306291.html","fdf675090a6d434c190d2941583a9075"],["/posts/4162857404.html","6144bc4ad527ded144c1c8b7002903c8"],["/posts/4209115826.html","1035a0e29406f0e223195a0edcb916b7"],["/posts/4210195828.html","45d0f2a90fda49a539e17055fab05219"],["/posts/4225763383.html","16b10d97ff83a5782939a3ab5e338df6"],["/posts/4274270301.html","b54a44d83654a9c2cf5122a78df60d0c"],["/posts/479952160.html","1806bf4c4a23701b70c19fcfef25fe99"],["/posts/52063040.html","bafc5b12d610f291b87ab0b00f0549cc"],["/posts/548755248.html","2c08462442445fc39d2710d9dd929574"],["/posts/570379779.html","f2c784bade7d0b27aacbd7d7a6e33b76"],["/posts/610628007.html","6428ce7af64165305d154cfbf19d2b4b"],["/posts/614845674.html","9d14226dd36aa735a6267547ba065466"],["/posts/62490762.html","9a110d1e82d92d0123e305f97107def8"],["/posts/677403736.html","49b6840ae76c3dd56f01b041282fe82a"],["/posts/757859542.html","c5c59d847ecf63d4becfe3d75176a34b"],["/posts/765759357.html","49cf6193e60cf3e2d129c93247d10994"],["/posts/804394302.html","b0dead49edf30c576a6de6fa0865ccb2"],["/posts/836650148.html","cbfd27bb8bee57d0c75f641a9ac1a6da"],["/posts/872076193.html","4e57a4d6bd8d07ae1d5374cef1a211e7"],["/posts/903614484.html","5028c6de8c840ddee330f09d7d16a498"],["/posts/914665799.html","753288accc7ef33a07a68e5f6d501d93"],["/posts/915758770.html","5df9a09b4fbcd9ce8804494855fbbfe4"],["/posts/917588948.html","cdb40b56877d1d238d5a067b6c56100c"],["/posts/967289922.html","6706b13c9530193ea2038cdd910e0219"],["/posts/973073571.html","23263816ff50133b76df0d9977f4a4ed"],["/posts/983467300.html","d3fb06d8d89531d3c85c8da7de4686b0"],["/posts/986637382.html","6c93002816c22eb2425bd43cb7b64070"],["/posts/undefined.html","67c92c43c316390a089fb6ea57987861"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0133eb1c850ca017b6474fde8ca12d4c"],["/tags/AD/index.html","f53447f181804d512c0c80561582ae65"],["/tags/Android/index.html","c554718f1332597edf493dbe32c7ff60"],["/tags/C/index.html","dbaef3674b80ec2e7672341c22ea88ce"],["/tags/C语言/index.html","0a972601ef25fce35e8596941c5b1ce6"],["/tags/HTML/index.html","a2932937970ad8c8286a569a654866e3"],["/tags/Linux/index.html","0dd7b3537aa8f57553312202ccc589a6"],["/tags/Linux/page/2/index.html","be9e313e42ab74c615e8ccc7f8a401a7"],["/tags/Linux/page/3/index.html","4cffc9de0efc04bc73d3dc1f1ada6417"],["/tags/OS/index.html","30d0de5cd462af4c49595907ea501c2e"],["/tags/PHP/index.html","de89dfc7999a54cba6f072cb37e68a1a"],["/tags/Qt/index.html","bf29daaa67cbfdebe4a0497c0d03ec0f"],["/tags/RaspberryPi/index.html","8b38a10f2c0ec30ce723d271cf657b98"],["/tags/RaspiberryPi/index.html","d2e89b8313e4e2a60d084b1bce3bec14"],["/tags/android/index.html","31eccf6b38bec70dcd914ab06967bca4"],["/tags/hexo/index.html","ea2f735da28f882eb10187ac6af6e5fb"],["/tags/index.html","a9c27518a3455e6f2b99c6e1e2ead658"],["/tags/linux-ubuntu/index.html","ba579cedbb5131cf2fcdf87a4c5e38af"],["/tags/linux/index.html","b0e26e7c478f9c091998e60888221262"],["/tags/mysql/index.html","b701e84122040105aa7acfca567973a9"],["/tags/oj/index.html","a296d92bcedb15a1a56f5c81d31693cb"],["/tags/python/index.html","52e1bfc65a61aa490a6daadd5105da69"],["/tags/qt/index.html","1816044fcde206009a839a56e9fe11e1"],["/tags/raspberryPi/index.html","d19921a78392c7c45ee5a180aa8b2e86"],["/tags/ssr/index.html","2afb738b3161c7bf2bed838b13fa6427"],["/tags/unix/index.html","570a4245751be5be4903b5adbffca8e9"],["/tags/上位机-Qt/index.html","0fdfbb0c0ab7b6a0c9600a695fec1ad3"],["/tags/交叉编译/index.html","28d67722e1d1ba80c5641d31d689775f"],["/tags/代理/index.html","732bf8bd7d419fb33197e4313b412f2d"],["/tags/刷机/index.html","b77b837b5da844b2bf5c770e1c1da51f"],["/tags/学习/index.html","acd88f0021386ab15de223b0e14f08e7"],["/tags/感想/index.html","d504329de948f769cf72497ad2929a01"],["/tags/未分类/index.html","90116ddd82d1327db681294198efc965"],["/tags/树莓派/index.html","d1eecb2f69fe28e187c4a6b5ca1f188b"],["/tags/毕业设计/index.html","1ae2a46898aaee155b00d8146d30a2b6"],["/tags/硬件/index.html","195a9bf4a0def5f9ba8265751ed653df"],["/tags/算法/index.html","bb75edb744ff599de86362711fb1091e"],["/tags/系统/index.html","1fb0ae2958e80e2dc2ff794220045ca7"],["/tags/组会/index.html","336d26073afdbd72248967d3422186ab"],["/tags/网站/index.html","d99fac716968164e7616a5057a24760d"],["/tags/肺腑之言/index.html","df11ed44c053b7585e100454528bde68"],["/tags/自顶向下方法/index.html","0d6e48e5ed3b12fd13c8a707cd253d4b"]];
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
