/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","1a08dadcb363ed9361892dd3382774da"],["/archives/2017/index.html","7dc88e44541130e498570f214a6e5ec5"],["/archives/2018/03/index.html","9c10ce176b1faefa2f7c569c81bdc268"],["/archives/2018/04/index.html","eba6cdbb6f1c7dd052d269981d4b7565"],["/archives/2018/06/index.html","3fc4631302118376929849394c8cbbb8"],["/archives/2018/07/index.html","d002ac662e119e0c40caf627a705b024"],["/archives/2018/index.html","7fd66e998f3e5a4614457aafce2f94f6"],["/archives/2019/04/index.html","4ea1260322a68917bdd3080890fea182"],["/archives/2019/05/index.html","a4a38ef76b5cabe965b1de9ecb54202f"],["/archives/2019/06/index.html","a4819d0d97536ff885adc9d9361ddefe"],["/archives/2019/07/index.html","fb55882f42d35e7240440b7dde81b29d"],["/archives/2019/index.html","af6b15d7cbe64425465a38114d7fcc47"],["/archives/2020/02/index.html","250c24c38ca2de0c40d088ec058201ce"],["/archives/2020/02/page/2/index.html","73977137dace0da87e5c01a0851207fa"],["/archives/2020/02/page/3/index.html","42a95ed0a582bb0b915dac8a6879e0f5"],["/archives/2020/02/page/4/index.html","20a3ffb3611ff03313d8372f3e8ac504"],["/archives/2020/02/page/5/index.html","b4101b12d5dd9d27c5253c6f2bed1082"],["/archives/2020/02/page/6/index.html","3de062ba0ec93ac3f972370effcf3a8a"],["/archives/2020/02/page/7/index.html","956bc8e27fb6e45ec6c9c1b62f79f3f0"],["/archives/2020/07/index.html","61a2b7549f4432e8a9ef4e96d7d001ba"],["/archives/2020/09/index.html","3ca46ef21fe76d3bf2f5753416f733b7"],["/archives/2020/index.html","4e47860590d63bd8f63d6c1e440557e5"],["/archives/2020/page/2/index.html","fc73116434d2d60d8edc299a3e8a4c7e"],["/archives/2020/page/3/index.html","37ff349481d5a246ee4b924baaa3cac8"],["/archives/2020/page/4/index.html","edc57eb40b5371abb84728a7ef662315"],["/archives/2020/page/5/index.html","682c24d26e28bcfc62ace78bd58ff4f7"],["/archives/2020/page/6/index.html","6f8db345c2094b4a7c73b4086f2f5e6c"],["/archives/2020/page/7/index.html","a58891f719d6b4a8a81e03203b33ec7a"],["/archives/index.html","283967ece8c03a417768ad318f9aee6b"],["/archives/page/2/index.html","53c34ff0203a2953e50a3b08bae3f422"],["/archives/page/3/index.html","e5a41fbc856ae81b193e691217be2fb3"],["/archives/page/4/index.html","ef8d15eb82b116eb8ca844ef9b43f68e"],["/archives/page/5/index.html","0bbbdf1d800ba756cb39c5fc8d2a9e98"],["/archives/page/6/index.html","fa8108d9b37e20c7e54ad3df4029dd8d"],["/archives/page/7/index.html","9dc060ab612ca04fb88f1f9b95c83ab7"],["/archives/page/8/index.html","24982e97f81056e925d8dd9ee66b9b26"],["/archives/page/9/index.html","01967c94f9a88ea2672172be3c9b15b3"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","cbc79edee90b23998661c1c78746c505"],["/categories/uncategorized/index.html","5c9b982912436406cfda1a545b7f9bb0"],["/css/main.css","327dd7b05e26da9ca4c56a056c2e5486"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","29bb9323f7332b674ad0760626ed7f3d"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","bc309201432476553024486737f13145"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5a6566536c7fda42569ac36d917693d6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5c0a43e0faefb5c4f9ac54f2cae0679c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","a1464eb96f7b294f36bcda40b543fb2a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","136219dfc065fcbc43cb30e065d1ddd7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","8d8ed61008bc28b01d3dbc351bc2e2e3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","af6f122678f21a942251b0ffb2f64069"],["/live2d-widget/demo/demo2.html","775d2a909b25f1e965621f273778c558"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6e4480b631467e8caeec8637ea5e0542"],["/page/2/index.html","c175621a4076c3954d0a9f9e0e5cfb36"],["/page/3/index.html","83118f7abe5c0fca0f225c08bb4aba2a"],["/page/4/index.html","c016803666491cbc11229cbe015bba4c"],["/page/5/index.html","b0f4e3f0d3e233e17466a6bdae138e41"],["/page/6/index.html","fe2fc2421eefb575d9d62b33cf6cdcf5"],["/page/7/index.html","4861aa08373a23ce89123e49d30d35cb"],["/page/8/index.html","d3941a8f8b1e50e604ab784a3215a43a"],["/page/9/index.html","0014a714da5a6bfde909ca189d82831f"],["/posts/1045120033.html","d9a553c6796cb95e5e4ac5b0b8a46d5a"],["/posts/1167241981.html","2d8ad25cfe71092fd1c89fb82b2f890f"],["/posts/12354587.html","6dd3c5cacfe2c8a7f33653d9e36786cf"],["/posts/1368285564.html","18bae2fdcaa008065df0a1464abd8ed4"],["/posts/139679387.html","a5e727c606bf276c820323e3547f93ec"],["/posts/143294467.html","6603e9845f77ea255c9be9324b5f872c"],["/posts/1450526405.html","ba7f007ed71d5e61be4b18b18ce7c176"],["/posts/1453157241.html","d418ad52ca2d9ca0e3701072fbcbca9b"],["/posts/156538331.html","abc7b11118ce227db29ff6456b88cc2e"],["/posts/1573656155.html","6c83b41324a06cf3d2b2b5afda323ea2"],["/posts/1589577150.html","1ea212197807190f4406f391795ee600"],["/posts/1671835932.html","27d3f14abf59f9f6624ccf6bcce8bc16"],["/posts/1676366600.html","64cb4c95c73dd024cbaf82c348d2b67d"],["/posts/1736621667.html","d9d9f8672a46f47c7b1f164d44b80718"],["/posts/1756176446.html","8e2f5f63d00f12230a0c35c335b92d2c"],["/posts/1770279608.html","61eff9d783c69da127d4de538812babd"],["/posts/1887844997.html","aa99801f6352a36d9782f450e97f5bec"],["/posts/1909736378.html","2f1dbfefdf1f46a551a42ef785dd5b0c"],["/posts/1935704712.html","107d3a506c9a046264780a0a86c0e11e"],["/posts/2068027928.html","9ef07c3fd24977488145802498bf2239"],["/posts/2223700806.html","3624ce8b64335ff54a85e37979ba5e93"],["/posts/2284540863.html","434a48207f7b2a40f70542269e7193b8"],["/posts/2292025215.html","95931dba73c2cb8c6814d58999c64b1a"],["/posts/2380608036.html","10a8ca0ee842dfd16a6d9170e53e0f2d"],["/posts/2384358518.html","18d27a843f57bee9cd417189e543d9ba"],["/posts/2422235321.html","06572d84db8b7f0bd1f6e8aae9dfa7c7"],["/posts/2436325960.html","b43ea4b7d6a8bc190ffad0199a5d8f28"],["/posts/2497004773.html","ae6d0b707805b718bb3f2c4424d252f3"],["/posts/2521564445.html","9b952e10014964e3ec2f27a53a560d78"],["/posts/261493140.html","8b6410268f61393eadf578d23d26ee99"],["/posts/2624931580.html","bb028793ae641fc29e65a3e523c43518"],["/posts/2628694986.html","402a620be53d26e6084b13d799ac6907"],["/posts/2632806726.html","69d4dfb8a9275ca5e4052d7d3c4272e1"],["/posts/2766769718.html","12b2c9776fe0962268fdc3b23386c043"],["/posts/2799909634.html","962c402f275bd59e7f09c0ef3ee2ad82"],["/posts/2819274611.html","d9790496bceb764587c810127a078063"],["/posts/2851953132.html","e7569c851a7c3af700d85ced7a8ace76"],["/posts/2909455182.html","ab6bf7655e79c27484e92345d3e9efea"],["/posts/2948078190.html","568e657d321083ea5673daeff2acd8f8"],["/posts/294966981.html","a76254d4d2220d1a16a2b9a27b232418"],["/posts/3177927357.html","44bca33a8d4b9ea30ea53bcbbc67bdb7"],["/posts/318287987.html","0fec1f139ea6f95f488afc5b6e41d629"],["/posts/3223976295.html","46586c00592753bf6db84b7a2a81f564"],["/posts/3269715988.html","05fd2781d31d3bc1767380ce9eb4fd7a"],["/posts/327264135.html","cae7de4d35d8a72c33d24627529b4aa5"],["/posts/3334855695.html","46e421a442c24a3136a2f1631eebf2e6"],["/posts/335527560.html","673f5c63b714cc49102fe5ab566c6ea7"],["/posts/3358116184.html","5338247c4454584cb7b82d3f1535634b"],["/posts/336607436.html","c51d4ece65b102607a18791ab1477c4c"],["/posts/3457327171.html","9c43108b3de66ced122eecf82a60f57b"],["/posts/3556896672.html","f97daf364f0b815264be73d3289b6c96"],["/posts/3623710045.html","e29f41ff5f54fcadba39a93a4bdcc6da"],["/posts/3711347257.html","69a7a1b630f2f1b3d17155a492ce2640"],["/posts/373021397.html","771d355587a921be1f77f095572f17bc"],["/posts/3907754421.html","387830e5538d5701c0a002104f5c3933"],["/posts/3910010431.html","c627393e17b2e05ce6b834e5a6e0e5c8"],["/posts/3944560991.html","be5d6e1bd540db69520e12a568564be8"],["/posts/3983964006.html","a1aaa850d4d66bca4205e8a404ad2c95"],["/posts/3993308688.html","f26ba9f8b90d5e2525eed5220b1ae1a1"],["/posts/4017356380.html","6a5dbdfa63ca9d99b362cd18a5d45637"],["/posts/4035306291.html","e274005afda98acff99acc3aab00563a"],["/posts/4162857404.html","420149afeaa3ade42381aeaad2b23b89"],["/posts/4209115826.html","251af1e7e5da2175281339357b88e863"],["/posts/4210195828.html","b3ef5549963934067f64fadbdcc434c0"],["/posts/4225763383.html","b36b1867631b33493b0e6fa8aa297b56"],["/posts/4274270301.html","8f27effb6a6fbd169405892935e25c3e"],["/posts/479952160.html","de6c39530fa442783dd1dc10f9439145"],["/posts/52063040.html","b194afa946c4451992f310b0d05a19c4"],["/posts/570379779.html","2be23bb38e2eba0b1d9e895e9efb8574"],["/posts/610628007.html","053825c45e6c0cf2f678874541454190"],["/posts/614845674.html","2ab2ecf3642f5e0b66efdc8aa0ca586d"],["/posts/62490762.html","ce5515bd4f600020e929a4a2310d633a"],["/posts/677403736.html","fd5f7b8884e360ba5cc563838207eba0"],["/posts/757859542.html","15fabec1fe94d0114d806f83b3b4cef4"],["/posts/765759357.html","67032c75ffbf7bca8ba25804ec9c4631"],["/posts/804394302.html","b69fa9872c43355020781c0541ff332f"],["/posts/836650148.html","5616d17cdcc1fc6d59e85d9b31e25af0"],["/posts/872076193.html","84dae19f30364d20841581d6f198b703"],["/posts/903614484.html","c06c4189f2467413408dc227bd3ec653"],["/posts/914665799.html","8a212c9ab3ec34da089cfd2230ae2733"],["/posts/915758770.html","59fa773e370abbdf3cf6ed60d03d7b51"],["/posts/917588948.html","14d5e315057e38df0dd6d27e44e0a1dc"],["/posts/967289922.html","0a53c8cf369d2acb644b67fe8aa8c4ee"],["/posts/973073571.html","3cca448e034587b1d1e68ee1b69933d9"],["/posts/983467300.html","c57374e9ca628b4eab1d361d49675b61"],["/posts/986637382.html","418088e0f5a6135d1e8fc9be31d8a2c8"],["/posts/undefined.html","53fd9888d4d91f3509d1ddf75845cb76"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","80e1033c9341288aa4231440f11c63b5"],["/tags/AD/index.html","af7c3d946794e70d3d6d2bf392c701d5"],["/tags/Android/index.html","017d50165c999ff7168ad0286acbc6dd"],["/tags/C/index.html","ae9eec43d587ac07d515f1b763b10448"],["/tags/C语言/index.html","f2c068acfba5729f471a16df4860b962"],["/tags/HTML/index.html","359bd5512209b211e60cb29cd6e52cdf"],["/tags/Linux/index.html","3f2cfd06f4f55b5e5eede6143e3ce733"],["/tags/Linux/page/2/index.html","07af658af17f1149121ae6272914b31b"],["/tags/Linux/page/3/index.html","e62596910bf270d0bf66e28e39f2f2ec"],["/tags/OS/index.html","bd8e6c0701e0a891bf93380ceba3afee"],["/tags/PHP/index.html","167b9109b4e40a991a78543afb97f280"],["/tags/Qt/index.html","f1af9473f10098771f47e62e705a41ca"],["/tags/RaspberryPi/index.html","361b5fa5d26c404ee8ffeb7fbadcd60c"],["/tags/RaspiberryPi/index.html","bb401853b33c3a673d849e717d55d2fe"],["/tags/android/index.html","eff646d9b09ce11aadc8efadd59cfbf6"],["/tags/hexo/index.html","170cd8e9829c29a0c38cc05d4d0c44d7"],["/tags/index.html","8be2b41aae470e0034936b68d21d3557"],["/tags/linux-ubuntu/index.html","fe614982c45f79f8b1fcad42314369ed"],["/tags/linux/index.html","b1834f65c3735d878f9628796b235aa7"],["/tags/mysql/index.html","fc642364f68120d7b26265bd88f124da"],["/tags/oj/index.html","46105c2eb5784a9135d73bac833eaa73"],["/tags/python/index.html","3c5457153ac3e7dbfa605f1d05681367"],["/tags/qt/index.html","a15c92fcee71637018842e2a8961293a"],["/tags/raspberryPi/index.html","484a0db50c42e1ec20e22c4f3260318a"],["/tags/ssr/index.html","120e02b51d173b3fef7cd31869d6dba7"],["/tags/unix/index.html","625d42e3a718da6cb3d41fc7225616e7"],["/tags/上位机-Qt/index.html","44ae29214913faf642735f179bd93884"],["/tags/交叉编译/index.html","052790125897905b2f0d95473637bb19"],["/tags/代理/index.html","f5bedc52843c097cff5847a857e86008"],["/tags/刷机/index.html","6be58fd2548193ebca19305167e405c5"],["/tags/学习/index.html","a523f87d03c17d2ddd6531b65a94ed2b"],["/tags/感想/index.html","66bfd5cd6482046df9efbd06a5dc2ecc"],["/tags/未分类/index.html","826edada3b2314327b3f2029c43a976c"],["/tags/树莓派/index.html","4048c840f3a95cbba157f73bdf40ef5f"],["/tags/毕业设计/index.html","8009caba01d87ec0e1e6c4f3936f56b0"],["/tags/硬件/index.html","503dc5dc83b8c8bed5fedc3646cc5e22"],["/tags/算法/index.html","bb4427457c72ffebed7fc9d5219223bd"],["/tags/系统/index.html","f3d29d319b19c525224cacf852d63707"],["/tags/组会/index.html","2fb7a000af803c5f353b04551e0f8a7f"],["/tags/网站/index.html","266e1629bba3b782ac751caf1b762d7f"],["/tags/肺腑之言/index.html","643268374bb0347e0fae785693cf6949"],["/tags/自顶向下方法/index.html","d7eba33cfb8660804ba1c0f850ec4be2"]];
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
