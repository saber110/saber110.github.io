/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2017/09/index.html","864c41428cfa389af935cb9e6a4f5e81"],["/archives/2017/index.html","8413d361345177627420eea150e32616"],["/archives/2018/03/index.html","c539d044bdb2a3447bb1dca740146a81"],["/archives/2018/04/index.html","9ad71163880f7453585052f553b4a982"],["/archives/2018/06/index.html","fae577b3c2cd9fb53c9726aad561f0db"],["/archives/2018/07/index.html","6e8a05b706d0cf55fb12857b09b8c4d1"],["/archives/2018/index.html","da050672396da1059b0996bcb52e7cb8"],["/archives/2019/04/index.html","fa490fc7319af6a732bd0aa3bb185cdd"],["/archives/2019/05/index.html","e51fccfb324d74822074200d2c3cdee8"],["/archives/2019/06/index.html","c3b6c9cccec529076076da650d0fcbc1"],["/archives/2019/07/index.html","4050399a60a278e1edcb8c9773698592"],["/archives/2019/index.html","5a332172d8d586cdac0dcd790dda05a5"],["/archives/2020/02/index.html","89d04f2a4223f763af945be53e5258d3"],["/archives/2020/02/page/2/index.html","7a88362bbb075d94702067f6f35435b1"],["/archives/2020/02/page/3/index.html","98c3155521ce96a7189b38861c7f8760"],["/archives/2020/02/page/4/index.html","1a157c23dd158d4dc624193f0ddacb7e"],["/archives/2020/02/page/5/index.html","94b3297b757ac12bc385d67d2a4efd27"],["/archives/2020/02/page/6/index.html","b468172cf8f06496382a04d9b476a4d3"],["/archives/2020/02/page/7/index.html","f86c4902a189d9a3cbf70a30759c1dcb"],["/archives/2020/07/index.html","6e9242fd991a52cfb460a2b832e41a17"],["/archives/2020/09/index.html","3290334fc00f4e85df1b5e913f623259"],["/archives/2020/index.html","96489db060cace5eb956efa3e0c07591"],["/archives/2020/page/2/index.html","fe9bd0d74cd3472eff92f4b24a386d23"],["/archives/2020/page/3/index.html","8dfa768ba9cb3ba51eda1b8002f5a269"],["/archives/2020/page/4/index.html","73fbc2691cccc7f88449e8e0fb2d537d"],["/archives/2020/page/5/index.html","c304a8e55f24dd06aed0bb6074b53e5e"],["/archives/2020/page/6/index.html","9fea2c1e4f142627ef6da548ae83f35a"],["/archives/2020/page/7/index.html","55ebe526e3d82468cd2a2be8a555bb61"],["/archives/2021/05/index.html","bd47a13b48f3b1267d9d8d9ef573255d"],["/archives/2021/index.html","3ff366533fb0b6d0c45fc353b0ebe058"],["/archives/index.html","b45a8592692d9e2703e192bf6ce3d907"],["/archives/page/2/index.html","9e7ca482da32b96b200a54e5c3b752e6"],["/archives/page/3/index.html","b649364daddc8335eb6eba91ea044354"],["/archives/page/4/index.html","77c59dabb5b8a53c0fac700a9f8b9ba1"],["/archives/page/5/index.html","d111c062a1b2c9ef8058059427488063"],["/archives/page/6/index.html","35aaffe0551ab64910168e9de55f8542"],["/archives/page/7/index.html","765cba2a047ca71c39227102cc5644c2"],["/archives/page/8/index.html","ca2d4dfb4b461bbafcd048b8d713bf15"],["/archives/page/9/index.html","1cc411e6d32bf7a61963af9df523e9a1"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/index.html","f6cdd9717fbee52f8f022d2c74753b65"],["/categories/uncategorized/index.html","cfb31409ea4ecaf84ccf4325a62d6f3a"],["/css/main.css","fd7304a4a917d41fd193c91084e6d896"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","33befe66e820ebc7a11a229b9cd4c38c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","73b026abf976a9ea4e96b2c6bf30b714"],["/images/alipay2.jpg","1c57484f1dc8aa29a298da31ceec9269"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beichen.png","b63c9b1a2cc651453779874bd3f8b192"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next.png","887fd7c1a7ff81c36c08ce8497e12287"],["/images/favicon-32x32-next.png","d2c389db2105c6e22a846e5d09f2d55e"],["/images/hot.png","04302fd49d66c51212ee50ebc108f3c7"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","fa11cd64e255d3a0843f44cd598c3d99"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","c85ff4eadbff34dfecbce5f641a4d7e4"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d54ca20b0b1fa2e5293e55f704cb82cd"],["/images/time.png","f400db525b901d5d43f34bc43da28122"],["/images/wechatpay.jpg","3bc380f762aa63c0f14f8c36f05b10d7"],["/images/wechatpay2.jpg","1728aaf7c569607792ca39cdc3c8fd31"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/index.html","7d1d5a58999300fd04651f67efdc2cc4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","cad93757c791b96988bb95bab7d2e671"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","aadb19bb8182f66e23a0d6761ba2d284"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","86232f4e98a784a7c22dd38f959317e2"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","98dfac7975505544d0b1d9caa5b4bf92"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","1f7cebda5a301552e010b86736230074"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","ee6e2fd938c66c36151ad16e1137bd18"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","d9787e13216a8f9535d3ed7859411f60"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c2fd9d63df31ea69a7a5f15248701f14"],["/lib/jquery_lazyload/README.html","1ebb02ed95a23b8b64ed3214e68c7ddb"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","05cdc66459e755737c08a9992e2e9c3d"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2d-widget/README.html","336fcc201da38048952b841700313f14"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","d28a6d8a3976432f431a58db5d62e278"],["/live2d-widget/demo/demo2.html","a6ccbd3c9eb02a618688118eb57cd496"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","1091d05b26086df6bdbdf7347a0857c8"],["/page/2/index.html","ae7c63d6352606211a2fbce5285e5d3d"],["/page/3/index.html","400d1f9bd3c8c1031afd820e59d03ed1"],["/page/4/index.html","09c30bb3b48df78b821f02772a96d870"],["/page/5/index.html","2f38b0ef0894280aa227361771325e96"],["/page/6/index.html","2179a1ef3a1f00040244128792c02462"],["/page/7/index.html","ac71a425841ac75ffbd6d803e97fe3bc"],["/page/8/index.html","807cc3943daea89485e58bdee3ac492e"],["/page/9/index.html","22087bfd957807a1a448adbb483ed2be"],["/posts/1045120033.html","75a23e09d9ba705cf5729b66bf523a4b"],["/posts/1167241981.html","89e98f2429c7aef69cbde2115a7aeaf3"],["/posts/12354587.html","6643532a79c231bf905884e9fc538dba"],["/posts/1368285564.html","dfbfa76f5525780d961509c385034cfd"],["/posts/139679387.html","a2826ba32a74848eb8fb99bc61a148a0"],["/posts/143294467.html","f0e9c0ba35d90aa56acb3ad8e6e77456"],["/posts/1450526405.html","3070b807153073e2370ac76cd6787451"],["/posts/1453157241.html","3ca552f298b03eb16c85e87e07cebf84"],["/posts/156538331.html","912f17bfed5c0a72bc980d7d916d0f1e"],["/posts/1573656155.html","6e38546cbaef754ae4aacf46d32813f1"],["/posts/1589577150.html","ebfcffc93543326c4fc69f286ab2bbca"],["/posts/1671835932.html","1c5d787b6cc8aa4befa253db6821f6c3"],["/posts/1676366600.html","8305014b4e689de3614c02582d426d72"],["/posts/1736621667.html","08e336506a1c2b736ea15f3d96076747"],["/posts/1756176446.html","467180d49caa8d40fe52621574feb64d"],["/posts/1770279608.html","367156c5b953f9aa5fe3d6e9d4564da6"],["/posts/1887844997.html","24d6791026548113a8380817cc8a4c1e"],["/posts/1909736378.html","911964c6ed93dcee548e748642048b38"],["/posts/1935704712.html","f0151f037a6c6690e3f6f1e67afc110a"],["/posts/2068027928.html","3d4f46cd55be8884bdd09e1c001678eb"],["/posts/2223700806.html","7d71f8f651387b55359b7a013a2e3bdb"],["/posts/2284540863.html","c8bc1d07d053a54d6352f9ede6946432"],["/posts/2292025215.html","e16c42a7a255b01d16154b5a97cc7e0b"],["/posts/2380608036.html","f5a7ecef8fef70a587873ea003250db7"],["/posts/2384358518.html","69e385decf1f145b96062e3d98099f29"],["/posts/2422235321.html","c9890d0ce55c3710406c8b98e8b725a4"],["/posts/2436325960.html","e60de704e07b9066566508df212ae114"],["/posts/2497004773.html","e5a922d832d24804747bd0ed4ecac7e3"],["/posts/2521564445.html","cf9be1be14957c5557f2d1d2f3720ee1"],["/posts/261493140.html","8c28abbec2328de06f34f659314d9777"],["/posts/2624931580.html","42690ad95ec01f8040766505b68ec979"],["/posts/2628694986.html","aee370dd63d856c55bc0358663b95dd6"],["/posts/2632806726.html","3f0c591cb3a5ec84076ab490af531886"],["/posts/2766769718.html","f75c877ef26ce22c933ff26af6b0e26f"],["/posts/2799909634.html","8ad18f1ceab0eef76bef5efd5cb08c0a"],["/posts/2819274611.html","3c6b12ec94aee129cf1e6b9d21c3d0d7"],["/posts/2851953132.html","ee67e40466b7af3f8e8eb53b073dcdd4"],["/posts/2909455182.html","6fb6808a960247caa43714e2a285af5c"],["/posts/2948078190.html","2a68ec12d94ca5c82e96c4332885d778"],["/posts/294966981.html","b45884a036e426a46729720b68b94fe7"],["/posts/3177927357.html","89104dea142d3b2da7983ffe5792f836"],["/posts/318287987.html","8af5e5a2d7d506cb606927028656872f"],["/posts/3223976295.html","0e0fa0927e725fb01c00f8095f0de7f8"],["/posts/3269715988.html","2fd21f72aa0ededd2987c19ef6bf0c23"],["/posts/327264135.html","b946aac5e7612ba1c2c2e98bbdc32ab0"],["/posts/3334855695.html","51b408fc85930513ab378b3f38583e2c"],["/posts/335527560.html","4e4839dafe4a4a16c7a8f4ab05c7505b"],["/posts/3358116184.html","65da84f809aedc923a6a7a829618b17f"],["/posts/336607436.html","63b2e61d4074fbd675b09037b9fa5312"],["/posts/3457327171.html","5808deb5fc94ca5c4192443fbca66d2e"],["/posts/3556896672.html","293b886e11573b32ccf3605ae0b5dc28"],["/posts/3623710045.html","9bb1b3e4ca12db1f439e4bd88737f154"],["/posts/3711347257.html","294e042202dba3427c767b00eb12b317"],["/posts/373021397.html","9bcf3a59ac428fc9f197f43699d3ad0f"],["/posts/3907754421.html","0af63c204e2527b6741b6b79f28c80b3"],["/posts/3910010431.html","e86abb4c395d6e2eb522816daf592900"],["/posts/3944560991.html","f85b5a4d34e49056ffb61b5a9c1978e8"],["/posts/3983964006.html","90cc53ce5bb4bc51bbfdc569833e6b55"],["/posts/3993308688.html","11f6ac510279af357a755f06e0504fea"],["/posts/4017356380.html","8a07ccf0ba336d31e8c4dd0c727bcf45"],["/posts/4035306291.html","c50ce8c16c79725b9245602d45f70e75"],["/posts/4162857404.html","f51484fca5e7d3a953fae4d5e4a0c1af"],["/posts/4209115826.html","78b4e80215f4c7c0b9aa4a878340ff76"],["/posts/4210195828.html","b8ea12986ff26eb3f1daed293b99dc6f"],["/posts/4225763383.html","7cfd99ee1e5d1c759425454eb1a9bd80"],["/posts/4274270301.html","c27bcdbc387fa3f4b4a0674916e34181"],["/posts/479952160.html","463b1319872a9776d0bf7dc354e1676d"],["/posts/52063040.html","3565d8d37b593a855106f0015ba51c37"],["/posts/548755248.html","f80f9709cff6639488ca9d1efa9479ef"],["/posts/570379779.html","9ae982a133ee7486dec420eefb0923ea"],["/posts/610628007.html","852d9d6cf7176f431db64d4d849d0e88"],["/posts/614845674.html","9bf9a9315487c9b28309a1fce1e08c92"],["/posts/62490762.html","bd032047bb78ca035b23927742c982a2"],["/posts/677403736.html","0e25e7119cafca1b9601bfede7130846"],["/posts/757859542.html","fa8647cbb507320a3616e3dbbe31022e"],["/posts/765759357.html","3c1a65250f453ffeac9af24d37bf2a35"],["/posts/804394302.html","bbfed22b9fb2b8ead8b4722abd323560"],["/posts/836650148.html","acfc87380529e97ef2cbd889c016ea4f"],["/posts/872076193.html","57811b5ac41d86f127403ab5c2e1449c"],["/posts/903614484.html","29c6f80fbd282f480f7a4534f6957b58"],["/posts/914665799.html","251a1ea962b51d224960cdbdd18a12c6"],["/posts/915758770.html","38734073f03e39ebb5d25532a6c68f49"],["/posts/917588948.html","26d79de1b8a43191fb23e5c0a4d9d4b8"],["/posts/967289922.html","f59d160b7d9343c2a78aaa7e3819733f"],["/posts/973073571.html","da43625f231d7a024ce7d83c9897d930"],["/posts/983467300.html","70913a04348d5889739251913bb06006"],["/posts/986637382.html","1d692850386b432346ebe85c5ef4a99b"],["/posts/undefined.html","9cd82546e801e30f6f3f936af5014957"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","da323db5f1f558b30b331df1df687321"],["/tags/AD/index.html","25590448f3742bb0db7cf055ba944af6"],["/tags/Android/index.html","bbf79698be797a0fdedc9ccde88d43b7"],["/tags/C/index.html","6521aa706580b92cdec293308e534252"],["/tags/C语言/index.html","bbf98abf4b153f0f8d131be756dce6bd"],["/tags/HTML/index.html","7a88db7e85959c159fc123be1cb1792a"],["/tags/Linux/index.html","e87c2ae0703ce9eeb07aaa71fb5bf028"],["/tags/Linux/page/2/index.html","a932f9985898c1ddde68720b633f7bcd"],["/tags/Linux/page/3/index.html","d9cf38f33f147a96680b666d95f2d9f8"],["/tags/OS/index.html","b6a6e7a2574d149660953ef51a6586e5"],["/tags/PHP/index.html","0eb52ca95a7bd228ea01197bae61cc1e"],["/tags/Qt/index.html","13dbc9420c76d73c60acc7c8f3b6a87f"],["/tags/RaspberryPi/index.html","6f9bfc5f5b66b1cfaed3a6122e373375"],["/tags/RaspiberryPi/index.html","de260ed4e3fa2daec0beb7944b7d22aa"],["/tags/android/index.html","b621e5c03834d82c34c785d9af4d1932"],["/tags/hexo/index.html","9f8c5e3d82346a127b6c834640574970"],["/tags/index.html","59ef23fe70a0bf3e0a44f322025f5cef"],["/tags/linux-ubuntu/index.html","48ec89e63c9d7287572dead3d7d56df9"],["/tags/linux/index.html","bb3580e63d8c99cc5100c39453a1adcc"],["/tags/mysql/index.html","1ca8a75a4bf271fa58b0c2c6dd1ce25d"],["/tags/oj/index.html","7936b1af6423ca0ca8a7b9b1c2727fa7"],["/tags/python/index.html","11fdd7d6568f324842108e64b68c31bb"],["/tags/qt/index.html","7b9cad841e5b8f159b4fb424270e27c5"],["/tags/raspberryPi/index.html","d77b66a1e42668b64f3737a14d65f7c8"],["/tags/ssr/index.html","5c6f9aa40bb96f2abf580cd7bc76a12f"],["/tags/unix/index.html","cdca619e0c1bee6bfeea39cf6fd9972b"],["/tags/上位机-Qt/index.html","1b85be037323d874ac2d0fb9cfa9f20c"],["/tags/交叉编译/index.html","9f65aba875bbebd24489612a25d96e61"],["/tags/代理/index.html","c7dd30b7a1e3e720fa58dbfd7036a296"],["/tags/刷机/index.html","8cc6abab5ded4996afa05be1e6eae742"],["/tags/学习/index.html","06ae19e131ce19f60d3a39f3aff0b00a"],["/tags/感想/index.html","fe4eed815c06990f9cb93dc451b37246"],["/tags/未分类/index.html","414c53d34e9cf40f2a2dffc0d984665c"],["/tags/树莓派/index.html","edcb35f22bd983179a7a77af9d608173"],["/tags/毕业设计/index.html","cd887e4d80f41df8d129ea143c92ccb7"],["/tags/硬件/index.html","ec8959d93642cc06d9b25d8ca347f807"],["/tags/算法/index.html","58b9cfc7091ef95b563621b891cca225"],["/tags/系统/index.html","d5365378464a4ddad055d5795ed74ac1"],["/tags/组会/index.html","f5633daa7462678ce8a41b1f320ef691"],["/tags/网站/index.html","aa828a2b697bfcd45683bfbb75f12b35"],["/tags/肺腑之言/index.html","377fdd5ec4e576519113896a5c89d300"],["/tags/自顶向下方法/index.html","a978dba139c268ccbb7803ae5d1514d5"]];
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
