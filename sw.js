/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","ded59bcc807bf4d2c6681064ee17a779"],["/archives/2017/index.html","f5a6ac5ba784e65c7c45f65eb0d98470"],["/archives/2018/03/index.html","fa62f73ebe2436148c160e2f085dac75"],["/archives/2018/04/index.html","542ffda791fe91f80f4b961fc32b6206"],["/archives/2018/06/index.html","d030b48b0190fe2b5afaa62453aa0ede"],["/archives/2018/07/index.html","b6b9f616469cc38d68e3db6a095f9776"],["/archives/2018/index.html","65e2645c4922db90cfe29b38ff234818"],["/archives/2019/04/index.html","3ffc782b2bf58d6613ecf4fec50db07c"],["/archives/2019/05/index.html","6906df6e550c8bc0355d14d77946d85f"],["/archives/2019/06/index.html","3f093c244d2d2da2cb015a3b2a1e090b"],["/archives/2019/07/index.html","3d39c9dc8cbbaa51058ee4b089bec8ee"],["/archives/2019/index.html","06868505205feb179ace8f0c2ad00e31"],["/archives/2020/02/index.html","4f8831ca2bd63ea386e4a5bfffadbed1"],["/archives/2020/02/page/2/index.html","974f8e80c683f5c546e63a8f6d88854c"],["/archives/2020/02/page/3/index.html","1e4d8cbec6380f088cee2c0b967021ca"],["/archives/2020/02/page/4/index.html","a79c06265464e575fb9ce9ec9f15b2ba"],["/archives/2020/02/page/5/index.html","71847770e6adbaa0922ad3db0b326fd6"],["/archives/2020/02/page/6/index.html","37e69635652940dd47c358e2b506177e"],["/archives/2020/02/page/7/index.html","764de5c66cec80207dd67a14f49e46e4"],["/archives/2020/07/index.html","148c5582256aedf4c12ca03d9fe9beb1"],["/archives/2020/09/index.html","be99f899f433f3ac64d128978a7a2cdb"],["/archives/2020/index.html","cb3fc31e17feb7b6c4d06d29dfe29612"],["/archives/2020/page/2/index.html","6991f1b8b65d123d1b7fb5110fb5461b"],["/archives/2020/page/3/index.html","a6d296299c82a7bb69a33f6cdb984085"],["/archives/2020/page/4/index.html","f9ee94c3581d8d515ab0cd3e5bada70a"],["/archives/2020/page/5/index.html","ec0cc9bcb0028e0094ff3845737f6f7b"],["/archives/2020/page/6/index.html","0736b5181135e3e3bccda094c917ae00"],["/archives/2020/page/7/index.html","4bd606bb62db151b1f47ccfa3d82c23f"],["/archives/2021/05/index.html","f487d1282a2f5ddf1b4aef05998933f2"],["/archives/2021/index.html","5d2a7ad1424551bba0dc64ffc4c46b70"],["/archives/index.html","13b892e13ba8e63485b8b42e940001f5"],["/archives/page/2/index.html","18e98d8bcfac574c4ffb42c6bfd6c357"],["/archives/page/3/index.html","9af1b2a505853a7b17a3635fee13125a"],["/archives/page/4/index.html","c2d38446b32cd786a3ed949fa6655d76"],["/archives/page/5/index.html","06e012cde7f8f7f1248894461aebd133"],["/archives/page/6/index.html","b304a231a0d05e29ce5ff7306b464d4e"],["/archives/page/7/index.html","e83bbd0d03ce8a90b014e6187eb20f89"],["/archives/page/8/index.html","74d0c2e46fa248aecd2efbe953b33474"],["/archives/page/9/index.html","fb6f6689ca60a92824bf2b824efe58be"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","c9d6b0b55bd46ef844600503f5ff5ef2"],["/categories/uncategorized/index.html","3053f0d9d1e789105a9b3690c594f196"],["/css/main.css","fd7304a4a917d41fd193c91084e6d896"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","be0a19e3c9544735d62017acaee59d78"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","aadb19bb8182f66e23a0d6761ba2d284"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","86232f4e98a784a7c22dd38f959317e2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","98dfac7975505544d0b1d9caa5b4bf92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","1f7cebda5a301552e010b86736230074"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d9787e13216a8f9535d3ed7859411f60"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","05cdc66459e755737c08a9992e2e9c3d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","d28a6d8a3976432f431a58db5d62e278"],["/live2d-widget/demo/demo2.html","a6ccbd3c9eb02a618688118eb57cd496"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1091d05b26086df6bdbdf7347a0857c8"],["/page/2/index.html","ad84cc73ca8a2f80774fbd475dad5de2"],["/page/3/index.html","beffd5335fdd6fbef9abd4fd5d4578f5"],["/page/4/index.html","ba3a2c5ec0c5b37f9d13fa495c185431"],["/page/5/index.html","5f367cf2235836bd8da60e653bade3cc"],["/page/6/index.html","fc3734f132988cb42ff9b4361eab3e78"],["/page/7/index.html","b3ea7412e002c3028b76bfd5ab11d0e9"],["/page/8/index.html","ba1b78e47f2bb6c1b10dd5c932939078"],["/page/9/index.html","be47e20f00cfb5a4f8b67ea136143992"],["/posts/1045120033.html","8e37070956803b86a5091469c25900b8"],["/posts/1167241981.html","23405892625266f7c5e2796ab3ef0d1e"],["/posts/12354587.html","c10c21674e88a7a2c1b4b103ee991ef2"],["/posts/1368285564.html","778287ec5588a5ad76a7fb42d7089edf"],["/posts/139679387.html","d6a765996d3eb51d374ce6073334b3d5"],["/posts/143294467.html","c28a29a7635f44d4789a50e5619ee89d"],["/posts/1450526405.html","e26f3e182a60629c124dd63dedef3ccf"],["/posts/1453157241.html","79e53c414e511fc61ab451d2af63476c"],["/posts/156538331.html","a144609f121afb0d20be051fa0f87691"],["/posts/1573656155.html","edc06a181b99fb44585f31c48893d263"],["/posts/1589577150.html","494b28e107594dd86595eab6661027a9"],["/posts/1671835932.html","27128b586c3d6555a40d8db582dac000"],["/posts/1676366600.html","492ee3f068233d09359a4138bc538714"],["/posts/1736621667.html","1d8b46670b9ecfb213763b5d8211c1f7"],["/posts/1756176446.html","c35b96d7fb1c73636b495053d507f78d"],["/posts/1770279608.html","41bbd97c1b19221fd8dd76441a26e048"],["/posts/1887844997.html","227fb6886cc187abae56a02d7c896682"],["/posts/1909736378.html","248436c43cda8f3d226fc11c56c506cf"],["/posts/1935704712.html","4e109c7e4c262709b4daa185d835e2bd"],["/posts/2068027928.html","c4d00c6460b2e629f1da8a4833cda25f"],["/posts/2223700806.html","b22a6a45228c6de43a509b4d38f1bad6"],["/posts/2284540863.html","79a68d8e9c16c731b7432dc8b7d3d62c"],["/posts/2292025215.html","20f8c47c23c245f1fa3fcac45a5b7ce7"],["/posts/2380608036.html","770759932c70c04d111957eef16e4484"],["/posts/2384358518.html","f5624960b000844af531c0fe2168fcab"],["/posts/2422235321.html","0f67ca25adbc2acee4ac964dcfb3c9fb"],["/posts/2436325960.html","63119c9ee92e61e881f8641ce15f15aa"],["/posts/2471479807.html","7d513147bb73cf90ed7c6ff3fb3a914f"],["/posts/2497004773.html","826139faa6789e172f10125ba762dbdd"],["/posts/2521564445.html","7819d0846c62f0ae2e43637867283e49"],["/posts/261493140.html","68602f2338a1883dd446c6740830bfe5"],["/posts/2624931580.html","49ff6795afb7e18183b5f3b3b583b899"],["/posts/2628694986.html","c7a078267941b4106b92380b4c41f30b"],["/posts/2632806726.html","c3d3dfd934cdca9524acdd9ca9cc4211"],["/posts/2766769718.html","e22dc2f38930695771b8b3e9e22e5ff1"],["/posts/2799909634.html","5c793fce27fc8a268cc9ea4fae73d9ba"],["/posts/2819274611.html","6eebe7ce53dc1d56e8cc71e569d4d05e"],["/posts/2851953132.html","4ef2df9e65ff67bdd4ee37c558d5a2e8"],["/posts/2909455182.html","4066b44bb1ba5df2ced06ebdf59d95b2"],["/posts/2948078190.html","b4a0fa9b210939dff218e56120bffbf4"],["/posts/294966981.html","b0d81f468e43bb4bb64608b688ad2b6d"],["/posts/3177927357.html","5f7a7a63d0d0770979bb58b7f525f933"],["/posts/318287987.html","87736dcbbe3500339dcc3ef29d88a047"],["/posts/3223976295.html","b10a91c613997419dc1fc7986c3e71e0"],["/posts/3269715988.html","6b274793aa5624ad6be9de08f1b684d8"],["/posts/327264135.html","f398c94fa69a547eac745abbd4fda0ba"],["/posts/3334855695.html","d6d4f2cd5ab86ffcf980949e03b1350b"],["/posts/335527560.html","aefe5f851e56d02982e36ed8dfd967f4"],["/posts/3358116184.html","57c097ce1671dc138ccd12230b03b465"],["/posts/336607436.html","31853077e7a699d0a36dee47dc97d37b"],["/posts/3457327171.html","c91293e81adb5fab16acd51cd417f226"],["/posts/3556896672.html","0e395bd9a0916d2aa190b08d19a43110"],["/posts/3623710045.html","8b9097c991e166ebfdba255c9bc44a5c"],["/posts/3711347257.html","e8be424c8096ade98883207c3df2ee10"],["/posts/373021397.html","520613089a0f9f298b1d5097e629d34c"],["/posts/3907754421.html","004cc55999a08d4fb53ead2469dc7d85"],["/posts/3910010431.html","c9c72e1f9a30ce38e72d1b4188ecb2f1"],["/posts/3944560991.html","48ccca7532159877b5ef327f2535d337"],["/posts/3983964006.html","fb673c40a45e61c5d95152df35c97450"],["/posts/3993308688.html","642e6513d96b3920e93785d3e31af958"],["/posts/4017356380.html","4db4b15b8b0b0657edee097bd3057118"],["/posts/4035306291.html","c1bc45a46faf8e9dfefde61ed3aa54d3"],["/posts/4162857404.html","ea8ce8e5c3bbe3021fa4b817bad6ec35"],["/posts/4209115826.html","63887b32cf4f4316f82700b35be0ee14"],["/posts/4210195828.html","b9beb8c19545ddea5989afd70b9662bc"],["/posts/4225763383.html","a5caef268fa27e5ae60aef82b0acc60b"],["/posts/4274270301.html","5309c1677f63b67efcb0e0d94fb534f8"],["/posts/479952160.html","9f53d4be11459526ed9e9bd9eaa28977"],["/posts/52063040.html","45a7b7dbe4f96e93863389b5f6152ded"],["/posts/548755248.html","62723606fb079b2943c45e5c7f19111c"],["/posts/570379779.html","11354f408c29d256b87aa870b0cf0e8f"],["/posts/610628007.html","fcb99017870285796ac6f83b434199bd"],["/posts/614845674.html","704306e44c165ced1cafbfeb99439946"],["/posts/62490762.html","5728508b99e31f5bdb816315dc17882d"],["/posts/677403736.html","65abf5d90f0db0d380f16c51333cce0a"],["/posts/757859542.html","e5d4695b98d8bd10ceac3f2d1cc4868f"],["/posts/765759357.html","d104769b1566be466bffbe0395a5e6e5"],["/posts/804394302.html","5a0c4b36d39d57af298bb0f8cdb5cf8f"],["/posts/836650148.html","fb007c2fb222c3149c1a3d3c1aa45575"],["/posts/872076193.html","dc6f5f7a90f85d4202567a45311c9f63"],["/posts/903614484.html","8ef3918f4f16a11129c1b9ed570aa47b"],["/posts/914665799.html","9cbed0ee66f353219d561d6b8f418fd9"],["/posts/915758770.html","dbe7c3d0f22b3a952c6cced6c2716da0"],["/posts/917588948.html","a49149de4422703763c1f7a4f3df0ebd"],["/posts/967289922.html","83f17c5bd15b8157e23f0d49ea9fc520"],["/posts/973073571.html","bcb9fd31d676d930525b6802fd856cb9"],["/posts/983467300.html","7b8dd4f806f68ff8db3adac58164b2e4"],["/posts/986637382.html","38296eb9eefe02eae820a1cf0f4aab3e"],["/posts/undefined.html","fbe0d8900133204aff31f002feb3726a"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0eb867f5ed0ea9cdc757f803682825c7"],["/tags/AD/index.html","2397fec876ed8887e01e9621c2f94b44"],["/tags/Android/index.html","8fa0fd51a99c2f09f2c8da834a6c54a3"],["/tags/C/index.html","d7245bb69b87c0ad801b144930461c91"],["/tags/C语言/index.html","dea450ae2a40e7f3a2b952cae73d82c7"],["/tags/HTML/index.html","77b56fcc77cb59b574b19e0fb5817618"],["/tags/Linux/index.html","e0e464ddef543efd5b2ee22bd845b05d"],["/tags/Linux/page/2/index.html","a5702f55b37e688fd9d1e33d23f24322"],["/tags/Linux/page/3/index.html","8d2da61074ea02a6d063e5a0f5adc4c8"],["/tags/OS/index.html","c91e522f5372e4e817a4ba93e71c1b42"],["/tags/PHP/index.html","02f5d81ae4d51fb83a93bff47c4fdb25"],["/tags/Qt/index.html","22cc51164824a11449735ab755cdd782"],["/tags/RaspberryPi/index.html","5a7ef7b390be84ed8fb052461d11fc28"],["/tags/RaspiberryPi/index.html","927f260e8cdeab94928ad59eca7a4c6d"],["/tags/android/index.html","8873a16efee8aea72ec7e1df573faac5"],["/tags/hexo/index.html","0fea67a8cfcf4b23dfff2130bb3ac34d"],["/tags/index.html","11b87633b15256fb74f19cd27d78f5b6"],["/tags/linux-ubuntu/index.html","66a8dd8df8e4e92b566fd20c92e0d596"],["/tags/linux/index.html","13045fa0c59450151fb3e158dc575dfc"],["/tags/mysql/index.html","70228d22f19b0852a30f7538d81a2f5c"],["/tags/oj/index.html","cb95c222991b4837c8c4b106214d2717"],["/tags/python/index.html","b860c3268d49cd96a778d467ebb3d4cd"],["/tags/qt/index.html","aab168ecd536c1b0a772d55fa2853c1d"],["/tags/raspberryPi/index.html","767a49fa16412715d8714b8b91f9eb66"],["/tags/ssr/index.html","8b6adaf4269b00174395ab9ae23f3683"],["/tags/unix/index.html","4c7739fd1c849289c23bcb8672040ee9"],["/tags/上位机-Qt/index.html","fb75bb6ffcdc034b2ff4ecfeff64198d"],["/tags/交叉编译/index.html","9d73f27fa2314f150b355187be8e8453"],["/tags/代理/index.html","368951157ea38c58f3dc50299e673f9a"],["/tags/刷机/index.html","4247d9c4f63846ff3319d199919cbbee"],["/tags/学习/index.html","3f425ca5153e595f761e45eeddc4ed80"],["/tags/感想/index.html","8c9baaf89630a59202307443f3fb4aac"],["/tags/未分类/index.html","891b5982804826dece59a3942f23fead"],["/tags/树莓派/index.html","a6b1c3137ad9e576d4f7a7d9213a0ee5"],["/tags/毕业设计/index.html","ecf2a54e4ad0981caf82ab00aa40a64d"],["/tags/硬件/index.html","bb63a7dafdbe25259a173d954d8a7348"],["/tags/算法/index.html","b132c103efba1022010ac6a966bc1ae7"],["/tags/系统/index.html","838729551b0f916572cdd7b1a2a638bc"],["/tags/组会/index.html","2bc55988585829f25268a059d19571ef"],["/tags/网站/index.html","ce5fd6cfd4367ccc1915115246b6533e"],["/tags/肺腑之言/index.html","10741a3cc9531c555465f93f9809e771"],["/tags/自顶向下方法/index.html","6b20faee28ef518010fdf0a699b7e22a"]];
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
