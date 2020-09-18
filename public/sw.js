/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","039b4cfc19264c3f5c7040821119c540"],["/archives/2017/index.html","b81bd1430dd6712ef64b0ac143b05b29"],["/archives/2018/03/index.html","0ebc87ecf94045d361bbb038756b2a84"],["/archives/2018/04/index.html","d36b666361573fb37fdea6327013e1b2"],["/archives/2018/06/index.html","0bac8a9951c011d6e82d6c3b5a5b3200"],["/archives/2018/07/index.html","75b6ec92c118ab105091406e9ede7b23"],["/archives/2018/index.html","c97a10900fc27cdc99bfdeee6cc223b7"],["/archives/2019/04/index.html","bff94f1ee9f46210f88aaff9d8be35bc"],["/archives/2019/05/index.html","9142506c3e5c294beecdf9bbd8ee02c8"],["/archives/2019/06/index.html","933f28b4c0ef940c23627ab572569161"],["/archives/2019/07/index.html","49aedcefde1525d95408786790cbad6c"],["/archives/2019/index.html","5eb7f5acd61f0c66219d43f4bb89ee94"],["/archives/2020/02/index.html","5ae9c617c3e5af0418dd4011e0a2334f"],["/archives/2020/02/page/2/index.html","59dc2bfef56dff80b754185f27b1ff06"],["/archives/2020/02/page/3/index.html","adf5601d9ea1dd92c38e29cd67bf7d48"],["/archives/2020/02/page/4/index.html","d4c0a6c39f33cef32ed6e7a0971da73b"],["/archives/2020/02/page/5/index.html","7a539d8501bc1b8fc62ad90ac9ade241"],["/archives/2020/02/page/6/index.html","b9cf3b7159fe77a363db60fc1cb60bdf"],["/archives/2020/02/page/7/index.html","c65cf8b881d4ca8be1b6fbd288455ebe"],["/archives/2020/07/index.html","d048174e7dd1d55472c04b211cf9829b"],["/archives/2020/09/index.html","a97a75e83346cb075fcd923408844c8b"],["/archives/2020/index.html","2eea23efd26914e42e10cff16751b673"],["/archives/2020/page/2/index.html","a334ea75835dc1b102c41bac02ab4861"],["/archives/2020/page/3/index.html","dee04b9a73208d65a00f71e479ff1443"],["/archives/2020/page/4/index.html","48e60bbb4563fa9e59b554b0d5a4f8ea"],["/archives/2020/page/5/index.html","07333bb654bd1e271a6c951becc289ca"],["/archives/2020/page/6/index.html","ceabebbd6eb6d8957c9f91815a04196e"],["/archives/2020/page/7/index.html","cba6a644d8a79b1bb0b7faca30dec175"],["/archives/index.html","964b5adb762eb5beaedae84c6fbc60c8"],["/archives/page/2/index.html","548f66aa3938186fa0f66f6cbbfb5fa2"],["/archives/page/3/index.html","be1c6fffc25fd8d760bc0aaff83c9d1c"],["/archives/page/4/index.html","3bbd1da96235875c9e71244ab6668fb2"],["/archives/page/5/index.html","cd2b253dfd8935412a66eb41afb53bd4"],["/archives/page/6/index.html","68a27b7917423f90b3b4590d19c5c320"],["/archives/page/7/index.html","fb51ee94c76918c0c2afffa595612b8b"],["/archives/page/8/index.html","3321b0a0afd2353d03c01482fbaf3c4f"],["/archives/page/9/index.html","fd9c71e12c9de7ff19f5c080efc993f1"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","e2142f0cd2131068949bcbd863da9a01"],["/categories/uncategorized/index.html","d7293717bd5e779e989022c8faa05bfa"],["/css/main.css","c81908bfff86d55f8e442aaa41a3fb8d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","2a01c0f2e1619bbede61f3ef36dad173"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b27fddb2d84780b1fa10be8bf4e32d9e"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a7af536e0c5b1c2271e66d6aa1a92bc6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5c652944ca1eed22aeba276635ac59fa"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","f78e255fc8738de3b78c90800a309d9d"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","b12fbee8bed27d6a339c6feb9df4f258"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","83d0d2aace0eee2983d8f8161460ca3a"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","d28a6d8a3976432f431a58db5d62e278"],["/live2d-widget/demo/demo2.html","a6ccbd3c9eb02a618688118eb57cd496"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","710f2ac4bc979151e9393cec675116a4"],["/page/2/index.html","20f73c56a652d811d29e7866d7ca3697"],["/page/3/index.html","892cd01b1639f5637da94bba45597bd6"],["/page/4/index.html","bfdb66e44162974b3790d17b45fb9094"],["/page/5/index.html","1eb6b3c8c470a9b85aa0c9db46dbaa13"],["/page/6/index.html","46d6b8b2880c4bc13c8c46d2398458df"],["/page/7/index.html","3144e0a1a432d1d8576b9d59cce3bac8"],["/page/8/index.html","b2107897535ee34e5b58fe470bbdd62b"],["/page/9/index.html","73b498c1eb96a913f73088881ef50399"],["/posts/1045120033.html","5cda9258dafc1448f22cc0e1fc537b9f"],["/posts/1167241981.html","3fc23a3babf5b84672dd1ca4b3fd5c4f"],["/posts/12354587.html","63894b4ebd07a754d37eff59bddec697"],["/posts/1368285564.html","5907301e35c6b47bc84f77721a28093c"],["/posts/139679387.html","569f627462850df959eb9e86df2f9962"],["/posts/143294467.html","cde6ba3af095cd285e6f845f5210e0e1"],["/posts/1450526405.html","6ca3188c4f7f471d17f217d174279b29"],["/posts/1453157241.html","e97656f9b9908e8c1cdcccb5e00d4b7c"],["/posts/156538331.html","5846ed4829f03e3ee9ed88ba29569928"],["/posts/1573656155.html","942b68bd9335f4c37f3e7ec12f15a00b"],["/posts/1589577150.html","5a18b42c9cc460a3f5381c8df289b0f3"],["/posts/1671835932.html","46db9e570d4af2c389ebe2ab555d217a"],["/posts/1676366600.html","a0a0d115f0aa49c92440a7186532c006"],["/posts/1736621667.html","6259205d0ce4ae88ea6f390fb4285c22"],["/posts/1756176446.html","edff2e7d719dd025bd6a7533347db207"],["/posts/1770279608.html","c44a48e09fcc49a878a5ed0ab49af28f"],["/posts/1887844997.html","113a60562f6019b39e978c8f48e683a2"],["/posts/1909736378.html","bc536671b0f1fb7a470103d2a56f6ef4"],["/posts/1935704712.html","5fcabc43909b9fcec22266c7f585e9a0"],["/posts/2068027928.html","98e78bc9356eabf52a1cdb9e09b0a4e7"],["/posts/2223700806.html","305f2539b63f0b5b723524443a7e851b"],["/posts/2284540863.html","b280ac15907861ff3c03ec7c91be1db6"],["/posts/2292025215.html","51101ece12795cf55d2c3b6e7b68be4b"],["/posts/2380608036.html","12321bb704b879e1ad053ca10bff60bc"],["/posts/2384358518.html","3710a4b3223145bc7b3405011ad9bb12"],["/posts/2422235321.html","620432fcbac47d09ac2620728756dcc8"],["/posts/2436325960.html","9292bff74b9b41294308cabe28748292"],["/posts/2497004773.html","b4ba6c3659ae2bed95efbfe0508ab9b7"],["/posts/2521564445.html","046f5162a3f96bf65637007159a1ce99"],["/posts/261493140.html","814f02c945885fa3ba5f897e088eccac"],["/posts/2624931580.html","ba1917af09e9eed5e1c315b4863e88d1"],["/posts/2628694986.html","8e30c82a3190c60e249444a84153d85c"],["/posts/2632806726.html","6e8af747a2ebcf980df42d2fed54cf5c"],["/posts/2766769718.html","bc6c06a0e7ef029a97f2ea7acb0ef6d3"],["/posts/2799909634.html","1b1308546f91d3d2f64c79a10b07b6a7"],["/posts/2819274611.html","4fca83970c2f7736f2e0b4bd94ee0e68"],["/posts/2851953132.html","5dda124c03ee5840d895897dd1711040"],["/posts/2909455182.html","ba9e653f3582964c4d4c0b13379a154b"],["/posts/2948078190.html","b5feccd79a262c032cd39a2b93f2b3fa"],["/posts/294966981.html","6a63c672d7c0b5344760ff6df9dbf772"],["/posts/3177927357.html","fe1979f6cb8c325cceddfa9cb5b21413"],["/posts/318287987.html","c27c85828da546d9b0cb5333fd529bb1"],["/posts/3223976295.html","f36820205de4dd6692f75f2c50d60338"],["/posts/3269715988.html","84affa3f6e35be6871a17dde6bd8f2c4"],["/posts/327264135.html","f2015fd170ef846942acac4b1ab93e37"],["/posts/3334855695.html","5ed93eea1c50715cc8dd95743361f4a0"],["/posts/335527560.html","2f124a6f6b54d8de448c888240ab2871"],["/posts/3358116184.html","8667b548e783d1015e40d6e43e1c337b"],["/posts/336607436.html","ab832d4014281b50aabb01021f3ad147"],["/posts/3457327171.html","608e332f543ce584efff8e3122205e68"],["/posts/3556896672.html","a327c7f058564847513236c5d18e07ae"],["/posts/3623710045.html","9262092c5b1df8420b7f026f22cb48fc"],["/posts/3711347257.html","a1749c632ed96e948509afd0ecead113"],["/posts/373021397.html","b29422093368b8fa684a6237a5b44341"],["/posts/3907754421.html","133b9832de5d5dfafe43c400b409e1d0"],["/posts/3910010431.html","b10acc3d41c8fe49dfe372e19ec84451"],["/posts/3944560991.html","2eee1bce64202e1af2439c8761c41d4a"],["/posts/3983964006.html","1dad273e8b9d95c508f3c6fd2098174e"],["/posts/3993308688.html","6890c89bcd8e0ec47557c670c33d60ab"],["/posts/4017356380.html","61f1bf3e43ceea8b72a54c9e7284c21a"],["/posts/4035306291.html","76621a18b482d755800c3cdfbe99504c"],["/posts/4162857404.html","b5c3489efc5a415505bde75de9441c8d"],["/posts/4209115826.html","95dfdaa1d7818377daa55280ba33161c"],["/posts/4210195828.html","28704a04fa46548db5315c40174a6aa1"],["/posts/4225763383.html","f5781c980e7bc3b4051cb9a77026dc8f"],["/posts/4274270301.html","47ce4c852765eb910c21489726b252f5"],["/posts/479952160.html","d307c0afe9e6a99664428aee74aebec6"],["/posts/52063040.html","6740e87a15d0e73c31aabcbab5bd7f23"],["/posts/570379779.html","a4b16ec76dd31eb98cc44443b7cab4ec"],["/posts/610628007.html","6588ca53ac8fedac8ed5fea594edf452"],["/posts/614845674.html","19f825e2914815ab31b57922453232fd"],["/posts/62490762.html","242f892ae5ceb3003acc9387e318c2b6"],["/posts/677403736.html","8daa17c842b11321cb8fa966f1ab797c"],["/posts/757859542.html","83ab4ef943bd93c9e78919af57b9b34c"],["/posts/765759357.html","3fb3b985b2ab3d908d94657d99affb1b"],["/posts/804394302.html","10ac714db86f892df3341141d363738d"],["/posts/836650148.html","e347779a246132531d6ba9aeff069a37"],["/posts/872076193.html","6d9181ba3aa79f196e2338487cb8f421"],["/posts/903614484.html","91370cef3921cfbef026bea66a9043e7"],["/posts/914665799.html","116d9c1c0f6e8a180d5a0e097da912f3"],["/posts/915758770.html","a57d07cc64768763c5d9f21acdf825cc"],["/posts/917588948.html","717463f18ce407fdfd71579adb29642f"],["/posts/967289922.html","45f019c5fdb592f9e60e14dca92347eb"],["/posts/973073571.html","d79e5d617ec2dd53efa35a525ee9fd6d"],["/posts/983467300.html","de23762b3b4773e0138bbf74c8f03455"],["/posts/986637382.html","f242804cde49d22826be9d043efef7b8"],["/posts/undefined.html","4f35e5300ec1be196f6c49fc222d76de"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","8119d75e447905f5367338e9b99a28a2"],["/tags/AD/index.html","534ba7f77e01b00ff887b132216e2b4f"],["/tags/Android/index.html","e990953187d33d788e465f20b29180d8"],["/tags/C/index.html","8d948306dbc36674f526da18ecfd2416"],["/tags/C语言/index.html","5a7c66fad111f34b5764ae29e95e6f96"],["/tags/HTML/index.html","edb014bae61fa8a77b9bc8246244a555"],["/tags/Linux/index.html","4e3ca42d83c5df6d33f5135b985e84f2"],["/tags/Linux/page/2/index.html","e86bb3472b778eeb1fef26e805f1f605"],["/tags/Linux/page/3/index.html","7ac821dba295477d887f6e21352b34bf"],["/tags/OS/index.html","e93b670de28697a380d652f9da5d4a86"],["/tags/PHP/index.html","4a88802db93df0a73e789ec4477b0f5e"],["/tags/Qt/index.html","4ecc313822518c68b66d9c3b49001015"],["/tags/RaspberryPi/index.html","a20628ad48ad43b53138637e06ff2462"],["/tags/RaspiberryPi/index.html","afef0e951ad718ec293026ec7f9ae713"],["/tags/android/index.html","3239a7d60a67a1b8b670341deaa04b1b"],["/tags/hexo/index.html","6facb554cc84a1cbe06f863eadaf3269"],["/tags/index.html","453cd4e3c7839b89433cba3660ac2dab"],["/tags/linux-ubuntu/index.html","3ceca372dbeae66b9949552cbbb46e63"],["/tags/linux/index.html","707ec82d27ae75beb6205e926e795d43"],["/tags/mysql/index.html","6d3a87410c606989521dfdfaca3665bb"],["/tags/oj/index.html","41b632cabcb8b9cdd127c6deced51a0b"],["/tags/python/index.html","ce6253b5a718b155874f4495bb776cb8"],["/tags/qt/index.html","c6d7975b8c8d9cb04f9ea46eaa459ac3"],["/tags/raspberryPi/index.html","f9906e0d39fe868f5225028e7c8fe659"],["/tags/ssr/index.html","399255864d43fea70f23807cec0c9d0c"],["/tags/unix/index.html","ce3aa55ce8593bc404d890107d382a43"],["/tags/上位机-Qt/index.html","d265f287031f0705bc130e06def5c9bd"],["/tags/交叉编译/index.html","0fd430f444a48b3734c50e17e8ad1b2f"],["/tags/代理/index.html","19c56247bd0a29ee21f8c98378e9cccf"],["/tags/刷机/index.html","735efd741b1eb21d9353c67f42358c18"],["/tags/学习/index.html","5af2551cb6007b633d33a442b9f94af8"],["/tags/感想/index.html","72376d301ea044ee2664d160d6cfcd72"],["/tags/未分类/index.html","b0248e969d88ddeb8b294354adb9c2b1"],["/tags/树莓派/index.html","55585e760b25d3c49dd910c4fa2af9d9"],["/tags/毕业设计/index.html","2f12d0906d5b1d1557845c2a3b7e25ce"],["/tags/硬件/index.html","5979d3ab0bd4734b525f4742a921546b"],["/tags/算法/index.html","178e9628a21470585adc3de5b0202814"],["/tags/系统/index.html","5a857fbd5d0b5120835d397e4d95542c"],["/tags/组会/index.html","e592d0b7a2a1c78b4228b68575c06370"],["/tags/网站/index.html","b4387f7dbd497577599d56908f4d5a9d"],["/tags/肺腑之言/index.html","be3f525c39df2f1fdc0eaeef3ed21599"],["/tags/自顶向下方法/index.html","62a7e85100d5eb4e371d28ccabbc600d"]];
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
