/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","8042c181233a3c57e4d5849abaabb4a3"],["/archives/2017/index.html","5504969bab1ac82b9969e3786fc77aeb"],["/archives/2018/03/index.html","d059179f751146d80a2e4b781d57301f"],["/archives/2018/04/index.html","84fb9dc585cf1f1b6953642817358217"],["/archives/2018/06/index.html","881196d0146b0a52f18fc340df6fc9c2"],["/archives/2018/07/index.html","caa4fde81fa43efd6aefb9a87ef240c7"],["/archives/2018/index.html","9b0c31af08262b9f39648d7f8ac92b8f"],["/archives/2019/04/index.html","c3bb1c5158c5262d65bf6b9876d6a729"],["/archives/2019/05/index.html","9de9b1986bc9a14a03156542a564ba85"],["/archives/2019/06/index.html","af4632f61bae3e8ee42f4fc78d70b3fd"],["/archives/2019/07/index.html","4a6a6f21d1daaf38f9c907a955d04a33"],["/archives/2019/index.html","22d90d67cf5047600e69897852b2e529"],["/archives/2020/02/index.html","900ce11abd7eaf8e67b3f2c6a4f4b3a1"],["/archives/2020/02/page/2/index.html","cdacf997d1c6fad8f41cadea35fbc997"],["/archives/2020/02/page/3/index.html","f354001d6ca04847952f24996275b3f8"],["/archives/2020/02/page/4/index.html","5ab1bf00a58aa163a835e4da313c1b6d"],["/archives/2020/02/page/5/index.html","50a053a1b83d6962e24539d02fe4d596"],["/archives/2020/02/page/6/index.html","4708dd3c621400d8010406e3168be531"],["/archives/2020/02/page/7/index.html","6986f318fa2993bcfb02308b6216041e"],["/archives/2020/07/index.html","ed90007bacd9f19d05565cd3d9c5f5be"],["/archives/2020/09/index.html","8ca9d50aa9206a3385620edaae69ee17"],["/archives/2020/index.html","84d3da1768e81a8c0c9e6d6f7c82445e"],["/archives/2020/page/2/index.html","159234b54ceaa3e3c29d6e6c58c06089"],["/archives/2020/page/3/index.html","b2200ef60b5a0e8e4bf72ca2a0ce4ee0"],["/archives/2020/page/4/index.html","d66c9778a9269ec02c983de6099947ec"],["/archives/2020/page/5/index.html","0d1d0da18c9245fc04f63cbe0e974f90"],["/archives/2020/page/6/index.html","69c09bc2c52ddfc3cc5e1b5fac9a5edc"],["/archives/2020/page/7/index.html","7fe496f9c4064e0a16d522e38f922d52"],["/archives/2021/05/index.html","d17497f41e7cb6f0c743187a67de9afa"],["/archives/2021/index.html","e84d50df57cd380a7683a7ca7bb62939"],["/archives/index.html","4cbf9bdcc0099a0b7ad60bb5b386acb0"],["/archives/page/2/index.html","b37ef3b33fc4c929a71cafb4162674f5"],["/archives/page/3/index.html","d06435a4373fc8cc56caa843beb85c09"],["/archives/page/4/index.html","e2880608e62714daaf521b8da24701ef"],["/archives/page/5/index.html","d6b76861d52bc0d07a27f7ea02b77513"],["/archives/page/6/index.html","717239999899e3fee4f0b059c50a545e"],["/archives/page/7/index.html","890e79b87e44130117adfe486f41d235"],["/archives/page/8/index.html","61cc552d55dee72bd4ebe10350d36429"],["/archives/page/9/index.html","c0f7c48bf1d465524282a7b6bce4f85e"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","ded32f62dd34f884b5912db8410ac5d1"],["/categories/uncategorized/index.html","5af709737e7ee7c2679b9e831b2f72c5"],["/css/main.css","327dd7b05e26da9ca4c56a056c2e5486"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","52b01a6a7bf3dd7c0a17c390082595c3"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","bc309201432476553024486737f13145"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","5a6566536c7fda42569ac36d917693d6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5c0a43e0faefb5c4f9ac54f2cae0679c"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","a1464eb96f7b294f36bcda40b543fb2a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","136219dfc065fcbc43cb30e065d1ddd7"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","8d8ed61008bc28b01d3dbc351bc2e2e3"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","d28a6d8a3976432f431a58db5d62e278"],["/live2d-widget/demo/demo2.html","a6ccbd3c9eb02a618688118eb57cd496"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","6e4480b631467e8caeec8637ea5e0542"],["/page/2/index.html","eb87d72e9a7d2fd8e020fb042f7cf4ce"],["/page/3/index.html","48380aec2c7a38aedae50e67b5c3eec4"],["/page/4/index.html","599b2de951294d5db675f7bb7d897b7f"],["/page/5/index.html","d923848dd97f4b0ca5e379890d819ffb"],["/page/6/index.html","0d9ac646f2d37531c8f17fa7ac337ab1"],["/page/7/index.html","2d1645c54088fc9df38fe301d4a4283d"],["/page/8/index.html","f353206ab4ac2bacf004470f943ca941"],["/page/9/index.html","5fffc98d0569b07d55db088ae1dbc57b"],["/posts/1045120033.html","e1efc0b535d1e8a3f02f149caf23529f"],["/posts/1167241981.html","c5dcf611aacd8f666d8b3f4e99349928"],["/posts/12354587.html","83e788ed022ab46bf04bfff623a93f92"],["/posts/1368285564.html","ba13e769788c299f8b11049bf33ba2af"],["/posts/139679387.html","5586d74f743867cc90f3a423f1989208"],["/posts/143294467.html","20992e6f6ec20caa3c7338302d19aa69"],["/posts/1450526405.html","629e36814ae46ac66868c64d4793264d"],["/posts/1453157241.html","31a0b706c2c27003bc5ecd551497e69a"],["/posts/156538331.html","13db886b4dcece4afa54c04fd0636fd5"],["/posts/1573656155.html","8e399617bab1b539e6a5ac85c9acfb59"],["/posts/1589577150.html","3a76b71f5eb9998e3ed19048596a6cc9"],["/posts/1671835932.html","3eb550514128e3a8f547918aa281a30d"],["/posts/1676366600.html","d1242c2647e54d2d3114b20780727e17"],["/posts/1736621667.html","b4bbdbc14ed61034a6cd694ea6731bd8"],["/posts/1756176446.html","c2283e81a61f1d7f5791720ebe87220d"],["/posts/1770279608.html","6c436e6bcda56240390ab94142b730da"],["/posts/1887844997.html","da85bc8a6b1f9af36a229cbbc3c7a693"],["/posts/1909736378.html","b64cef05a3bbdeeae28fe95d97af0acc"],["/posts/1935704712.html","c0c4d8162288f7768578d59e1277fcff"],["/posts/2068027928.html","f58967d79d63eb42ba1fabb412c338e6"],["/posts/2223700806.html","e3f70a8aec777550841d1237450f365a"],["/posts/2284540863.html","6e54615474d60617300e2abba4e39e89"],["/posts/2292025215.html","253013a84705ba5efc3d3f468be2b684"],["/posts/2380608036.html","24401302c443c604e3c4f7425e356c24"],["/posts/2384358518.html","20e14a140849f501d9e57dc38aeade80"],["/posts/2422235321.html","8ff548fc49f4219087cecdfdc6447218"],["/posts/2436325960.html","8aa19e1d36d1bedfc6ecc6ab054d4074"],["/posts/2497004773.html","8d1badfc99c5845fb4e3b22d3880e7f3"],["/posts/2521564445.html","7c72a4793f96e1ac8fecccabcfb0bd05"],["/posts/261493140.html","4ee4c127f846e92c0b7bf2e802af982d"],["/posts/2624931580.html","4d8a403b6bf85f6e8c33878721fc31fe"],["/posts/2628694986.html","3c883e24a0d2eb00acaebecdec43be09"],["/posts/2632806726.html","385690f74486a7da360e5f73d961a68d"],["/posts/2766769718.html","1eec752591e14f8fd8736a7d5556e322"],["/posts/2799909634.html","36ea759d14ec6d3b20a08a04417522c0"],["/posts/2819274611.html","64a5fdf5264e09061775a57e1ef3d5d6"],["/posts/2851953132.html","87ea211257a850a023b44fc805589ddc"],["/posts/2909455182.html","b40d5560b26a0f2c2d3e61680d348d8c"],["/posts/2948078190.html","c9ff11e6d924aab39941697faf8a4e3e"],["/posts/294966981.html","9b045033233066fce076f1c710d02135"],["/posts/3177927357.html","17f799c117e178c3cf4edd8ef5ed7d97"],["/posts/318287987.html","1eabf71df4714a3e451baed21fc47780"],["/posts/3223976295.html","063c7e9f58594ceae2da4eb41d568745"],["/posts/3269715988.html","07a0640e6917bac5981eb2df7947cb16"],["/posts/327264135.html","73c0f15ae6c7729c20bfce4199047c72"],["/posts/3334855695.html","983e208986a25e76a5f16e36db242fa0"],["/posts/335527560.html","263e6fc756763587e346102e3908a46a"],["/posts/3358116184.html","7074a28d9552d32e4a3fc10bea05237e"],["/posts/336607436.html","39fc8bfa40d796ab45ab1f36b0228e6c"],["/posts/3457327171.html","692787109d26e865d22d82cca42e17ba"],["/posts/3556896672.html","61e80b2ae802c99f18a77292ef6533e4"],["/posts/3623710045.html","7c2bae1d6d02b19df39706db03e93144"],["/posts/3711347257.html","17b34221825d3b86e23823c0bb9fa033"],["/posts/373021397.html","0056feb9af8a1ee153a561a38860aae9"],["/posts/3907754421.html","6b8c423a503087a4dc67d0ad057fbd15"],["/posts/3910010431.html","03a39d482b3902eadddbf84ac58c1a41"],["/posts/3944560991.html","cc588db366347c9ad05e502fa4bc46bc"],["/posts/3983964006.html","a99f07419a2218c62c968a61e33ff534"],["/posts/3993308688.html","ba917644cad36286ced9d5cde13eb05d"],["/posts/4017356380.html","f19636fde0e156e0d390bf3caf065126"],["/posts/4035306291.html","4b4acc4eb11924eec8cafed78494af2f"],["/posts/4162857404.html","f23c984c10565eb9081664c442b98228"],["/posts/4209115826.html","041be6800073d20baeb26319f207b047"],["/posts/4210195828.html","50d3b4cdcdbd7b7f318a7916cd327e49"],["/posts/4225763383.html","f6a01d34ab37f1034e247315f45d7f2c"],["/posts/4274270301.html","45d572ee42e2f0047d365abdb282897d"],["/posts/479952160.html","1b39efc87a0d6a76385085084e836993"],["/posts/52063040.html","f57b1b3c9bfe996c302aae47baa85e89"],["/posts/548755248.html","75994a47a8ecc5c1e6aef508d53e2f1b"],["/posts/570379779.html","04a916c70076c04e0beb1448e1c4e147"],["/posts/610628007.html","4e5d0b26debfaa96e5b59e75c2ad35b7"],["/posts/614845674.html","d5345e91e28d22b57d4245d7b6f38d7b"],["/posts/62490762.html","2e5dacdf7c24d7340786c2915ec28fff"],["/posts/677403736.html","9002bde9333b12ddfdd0873336d16f20"],["/posts/757859542.html","af04538a37d30606f50af18ee330f778"],["/posts/765759357.html","c110fa9196fddd83687c83da19c2dce8"],["/posts/804394302.html","3f5fbbcec0774ec8ad0180ff90ce4936"],["/posts/836650148.html","ff9d348cda246ca41bfafb21787e2324"],["/posts/872076193.html","5b117cd537bcf0d28733b15bbba18e8a"],["/posts/903614484.html","8e1eb0de61b07ef6afba77ffaefc1afe"],["/posts/914665799.html","4231e14ff6c0f2162de0c218a0f62166"],["/posts/915758770.html","50f33519f2407cee6459590cba6d264e"],["/posts/917588948.html","a12c199d54ffd500604071abdae29165"],["/posts/967289922.html","1a296d9a89c8b4e075eb731fedd143f9"],["/posts/973073571.html","6624b48f8b0e93fca7a358216027f734"],["/posts/983467300.html","db4f15db1ce0ad4ff740584bcc4fca0e"],["/posts/986637382.html","fddb5ab290935b050fbcf0320a7ecc91"],["/posts/undefined.html","474dbf3e6cb6e1067280c1f8f06e7dc2"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","0cee2c0ec445ca136135ef68558b09a5"],["/tags/AD/index.html","e4b41380596c637e6a00af4e376604e2"],["/tags/Android/index.html","f1e6d30e2e2abbd6d31fedd7d8855b56"],["/tags/C/index.html","2adf0eeb98b6c94a012dcfae97a914e9"],["/tags/C语言/index.html","0b30b8382febea6db56cdaadb1eb401e"],["/tags/HTML/index.html","f85c8fe078c5d49f61ae86d12f32d00c"],["/tags/Linux/index.html","677c2af6c52cc92bc7f3ef29f0a41daa"],["/tags/Linux/page/2/index.html","d8fbd137015339cfd8dae4c86769892e"],["/tags/Linux/page/3/index.html","235acb838cd1244518c0640bff2bc510"],["/tags/OS/index.html","6a8dbd35aedeed4dc55cf9ec3b2b2cc0"],["/tags/PHP/index.html","68a7880154c6d266ce1661f1f516f7c8"],["/tags/Qt/index.html","fbd37d9b0f030e5d8d7d0b6ddefe54ac"],["/tags/RaspberryPi/index.html","89d92a32572d95d4ffa65edbab0e0e1c"],["/tags/RaspiberryPi/index.html","c0db14a5d14db7ad77e26074f8c97bfb"],["/tags/android/index.html","78ec20cfdfd7a97fba883ebac4675dc5"],["/tags/hexo/index.html","3b400f45af83797605e32af11542602e"],["/tags/index.html","3268f2bd452db17bf2bc394694b89cd3"],["/tags/linux-ubuntu/index.html","862ea0ff19de7e874d4ece5dd83a1ca0"],["/tags/linux/index.html","d0986094b5cddb99abe0ce27d56d0e2d"],["/tags/mysql/index.html","f5fadc7b8530d083bf6f2f8db0356c46"],["/tags/oj/index.html","68bea6f259d319990ad136be47263571"],["/tags/python/index.html","922d76a7729f8fe82d264a176b980051"],["/tags/qt/index.html","e68fb13e930d4e9016a599ee6183c32d"],["/tags/raspberryPi/index.html","b68dffbe7d39b7b95337337f385f1ec4"],["/tags/ssr/index.html","70d9116f78ef1952c095a4e224952004"],["/tags/unix/index.html","5fa1a4c0dbbfdf172889476c2e93a312"],["/tags/上位机-Qt/index.html","0ba11858e410098180d58b8605827650"],["/tags/交叉编译/index.html","cd43546939e946aafcd534b0b056307a"],["/tags/代理/index.html","80a093d04e577d647c635fa0a572acbe"],["/tags/刷机/index.html","672a54e2a4d23c15eed06e8f8fc425d4"],["/tags/学习/index.html","3d903a9cf87f3987668b70c0d8b67bc7"],["/tags/感想/index.html","e9efa6255807721b646c9cfd467b9f40"],["/tags/未分类/index.html","955c6e8f96aed07f1d1a2bf2102006fb"],["/tags/树莓派/index.html","8561c9e7fdc31e9c726b2fe8e26461da"],["/tags/毕业设计/index.html","19c215442a36d86fcbebeefc0e225212"],["/tags/硬件/index.html","48e514a9d7bf62cd5302b504c3a96d8a"],["/tags/算法/index.html","ac2fd80b061ca80a01f253941b928967"],["/tags/系统/index.html","d6c4729eb9063b814ca7b1c1e5b3483e"],["/tags/组会/index.html","234a57142cb34e4f90ffd45e5a5f5255"],["/tags/网站/index.html","180d1e19d814ff9518ed57797229176d"],["/tags/肺腑之言/index.html","b70fc8d513e5d6cd2c3e330ee85a8cc5"],["/tags/自顶向下方法/index.html","acb5ccd52c0838c61984cbcb762eba8e"]];
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
