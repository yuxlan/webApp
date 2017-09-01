angular.module('starter.services', [])

//.factory('Walk', function() {
//// Might use a resource here that returns a JSON array
//
//// Some fake testing data
//var walk = [{
//  id: 0,
//  name: 'Ben Sparrow',
//  lastText: 'You on your way?',
//  face: 'img/ben.png'
//}, {
//  id: 1,
//  name: 'Max Lynx',
//  lastText: 'Hey, it\'s me',
//  face: 'img/max.png'
//}, {
//  id: 2,
//  name: 'Adam Bradleyson',
//  lastText: 'I should buy a boat',
//  face: 'img/adam.jpg'
//}, {
//  id: 3,
//  name: 'Perry Governor',
//  lastText: 'Look at my mukluks!',
//  face: 'img/perry.png'
//}, {
//  id: 4,
//  name: 'Mike Harrington',
//  lastText: 'This is wicked good ice cream.',
//  face: 'img/mike.png'
//}];
//
//return {
//  all: function() {
//    return walk;
//  },
//  remove: function(walks) {
//    walk.splice(walk.indexOf(walks), 1);
//  },
//  get: function(walkId) {
//    for (var i = 0; i < walk.length; i++) {
//      if (walk[i].id === parseInt(walkId)) {
//        return walk[i];
//      }
//    }
//    return null;
//  }
//};
//})


.factory('ClothTabService', function () {
	var clothList = [
			        { id:0, name: '穿搭', viewable: true, content:[
			                                                {id:0,title:'不是所有T恤都适合你，你挑对款式了吗？',img:['img/cloth/cloth-1.jpg','img/cloth/cloth-1-1.jpg','img/cloth/cloth-1-2.jpg','img/cloth/cloth-1-3.jpg','img/cloth/cloth-1-4.jpg'],author:'Katherine',readNum:'21',content:'简简单单一件T恤是不知道穿什么时的万能“搭配师”，也是赶时间时的“救场王”，但是T恤的版型、材质对穿着和搭配效果都有着不同的影响',date:'2017-07-26 14:43',contentDetail:'小飞袖/短袖/中袖夏天的T恤虽然都统称短袖，但短袖的袖子到底得多短还得根据你的身材来挑选。最短的袖长，只比背心多了两个“小翅膀”，所以也叫小飞袖。夏天穿着当然干练凉快，但是这样的短袖对于肩宽和手臂有拜拜肉的女生都很不友好。第一，视觉上拉宽肩膀，第二，让你的粗手臂无处可藏。连超模Karlie Kloss都免不了“被坑”，手臂上好看的肌肉线条都被这件T恤硬生生演绎成了“壮硕”。'},
			                                                {id:1,title:'男朋友的衣服你要穿，裤子现在你也要穿？！',img:['img/cloth/cloth-2.jpg','img/cloth/cloth-2-1.jpg','img/cloth/cloth-2-2.jpg'],author:'ValeriaYang',readNum:'35',content:'热裤万年不过时，阔腿裤时髦又百搭，但穿久了总是有些无聊。夏天的裤装还有什么新花样？不妨去男友的衣柜里翻翻，get一点新鲜灵感',date:'2017-07-30 14:43',contentDetail:'没错，今天我们要说的就是一条看起来颇有“直男气息”的裤子——百慕大短裤。这条短裤的来历其实很有故事。一种说法是百慕大当地的居民因为炎热，纷纷把长裤的裤管剪掉，只留下了膝盖以上两三公分的的宽松裤腿；也有说法是，当时英军在百慕大驻扎的海外部队因为太热，不得不把原本正式而厚重的西装进行改良，使它渐渐成为休闲西装的一部分。'},
			                                                {id:2,title:'能让我一秒变明星的这件潮物，居然只要几百块？？',img:['img/cloth/cloth-3.jpg','img/cloth/cloth-3-1.jpg','img/cloth/cloth-3-2.jpg'],author:'Luka',readNum:'6',content:'夏天就是时髦girl的秀场，放眼望去清爽穿搭要靠什么小心机取胜吸睛？不妨看看明星街拍学习灵感。一看就知道，十个明星出街九个都会佩戴的随身单品',date:'2017-07-24 18:35',contentDetail:'简单的黑色搭配，一顶明艳的彩色小帽子就能瞬间点亮、明艳动人。其实不仅仅是鸭舌帽，还有很多种帽子都是明星们佩戴率很高的单品。只要好好搭配，下一个街头小妖精就是你！'},
			                                                {id:3,title:'40度了，除了短上加短我也是不知道穿什么了...',img:['img/cloth/cloth-4.jpg','img/cloth/cloth-4-1.jpg','img/cloth/cloth-4-2.jpg'],author:'ValeriaYang',readNum:'9',content:'动一动就会出汗的伏天还要穿的层层叠叠？免谈！炎炎夏日，当然要穿“背心”出门，一件好搭又凉快的吊带配上短下装，高温天，美丽就交给它们了',date:'2017-07-21 21:35',contentDetail:'吊带与热裤绝对是出镜率最高的组合，时髦、性感又清爽，看起来轻松愉快，造型毫不费力。藏了几个月的好身材与大长腿，此刻也该自信地秀出来了。'},
			                                                {id:4,title:'原来“背心+牛仔裤”能玩出这么多时髦花样！',img:['img/cloth/cloth-5.jpg','img/cloth/cloth-5-1.jpg','img/cloth/cloth-5-2.jpg','img/cloth/cloth-5-3.jpg'],author:'Kylin',readNum:'28',content:'这个室外温度达40℃的酷暑，总觉得身上多一个蝴蝶结，多一条皮带都觉得是个累赘！在所有基础搭配中，哪一组CP最代表2017夏日的时髦趋势',date:'2017-07-21 19:14',contentDetail:'没错，今年的性感更适合通过上半身释放！相比“OversizeT恤+热裤”，“吊带/背心+牛仔裤”才是时装精们的头号选择！'},
			                                                {id:5,title:'厌倦了清一色白Tee？糖果色Tee成明星新宠！',img:['img/cloth/cloth-6.jpg','img/cloth/cloth-6-1.jpg','img/cloth/cloth-6-2.jpg','img/cloth/cloth-6-3.jpg','img/cloth/cloth-6-4.jpg'],author:'Katherine',readNum:'64',content:'每天一出门都觉得自己下一秒就要被烤化了，不过就算化，我也要化成一滩五颜六色的糖水！',date:'2017-07-20 18:10',contentDetail:'终日沉迷《楚乔传》只盼星玥CP多发糖，最近终于得以如愿所偿。不过你们的“语文老师”在与楚大大“爱的怼怼”中可是发话了：女孩子们，不要天天只知道穿黑白！'},
			                                                {id:6,title:'就算下半年还会火，这几件衣服也请你绝对别买！',img:['img/cloth/cloth-7.jpg','img/cloth/cloth-7-1.jpg','img/cloth/cloth-7-2.jpg','img/cloth/cloth-7-3.jpg'],author:'Serena',readNum:'6',content:'前阵子，我们才和大家分享了2017年上半年的“潮流大坑”，也是时候来展望下半年的趋势了。有这么几件单品，虽然大有持续走红的趋势，但是希望各位...',date:'2017-07-19 16:47',contentDetail:'高危单品之：荷叶边露肩上衣最致命缺点：让胸口、上身膨胀火了整个上半年的露肩元素，尤其以荷叶边上衣最受欢迎。'}
			                                                ]},
			        { id:1, name: '前沿', viewable: false, content:[
			                                                {id:0,title:'上半年过去了，这些潮流你被“坑”了吗？',img:['img/cloth/cloth-11.jpg','img/cloth/cloth-11-1.jpg','img/cloth/cloth-11-2.jpg','img/cloth/cloth-11-3.jpg','img/cloth/cloth-11-4.jpg'],author:'Valeria Yang',readNum:'82',content:'上半年过去了，明星潮人带火了不少单品和穿搭法则，带货王们一上身，你就立刻被种下了一片草原，高呼“买买买”“求同款？小心！',date:'2017-07-14 17:21',contentDetail:'上半年过去了，明星潮人带火了不少单品和穿搭法则，带货王们一上身，你就立刻被种下了一片草原，高呼“买买买”“求同款？小心！这些潮流可能是来“坑”你的。'},
			                                                {id:1,title:'跨界融合 精致生活  第十七届深圳服交会时尚绽放',img:['img/cloth/cloth-12.jpg','img/cloth/cloth-12-1.jpg','img/cloth/cloth-12-2.jpg','img/cloth/cloth-12-3.jpg'],author:'Valeria Yang',readNum:'71',content:'7月6日上午，第十七届中国（深圳）国际品牌服装服饰交易会在深圳会展中心盛大开幕，同期举办2017深圳国际纺织面料及辅料博览会。',date:'2017-07-12 17:48',contentDetail:'7月6日上午，第十七届中国（深圳）国际品牌服装服饰交易会在深圳会展中心盛大开幕，同期举办2017深圳国际纺织面料及辅料博览会。本届服交会在7月6-8日3期间，在9万平米的七大展馆，汇集了十多个国家和地区的一千多家展商以及知名设计师，为世界呈现一场独具魅力的时尚饕餮盛宴。'},
			                                                {id:2,title:'叮，这里有一本花式秀锁骨大全，请查收',img:['img/cloth/cloth-13.jpg','img/cloth/cloth-13-2.jpg','img/cloth/cloth-13-3.jpg'],author:'ValeriaYang',readNum:'15',content:'露肉的季节姑娘们都在花式秀身材，就算你再疏于管理无法露腰露背露小腹，露个锁骨总是没那么多禁忌吧？从硬币秀锁骨开始',date:'2017-07-07 15:24',contentDetail:'露肉的季节姑娘们都在花式秀身材，就算你再疏于管理无法露腰露背露小腹，露个锁骨总是没那么多禁忌吧？从硬币秀锁骨开始，instagram时装／旅游博主就热衷于搜刮各种秀锁骨单品，今天来个大盘点，给大家花式秀锁骨提供灵感！'},
			                                                {id:3,title:'直筒衬衫OUT！2017年最该入手这件收腰衬衫！',img:['img/cloth/cloth-14.jpg','img/cloth/cloth-14-1.jpg','img/cloth/cloth-14-2.jpg','img/cloth/cloth-14-3.jpg'],author:'Serena',readNum:'16',content:'女生们对衬衫的感情可以说是相当深厚了，感觉自己一年四季都可以穿。不过，再经典的单品也有让人“审美疲劳”的一天。你有没有想过给自己入手一件',date:'2017-06-28 16:45',contentDetail:'女生们对衬衫的感情可以说是相当深厚了，感觉自己一年四季都可以穿。不过，再经典的单品也有让人“审美疲劳”的一天。你有没有想过给自己入手一件全新的收腰款衬衫呢？'},
			                                                {id:4,title:'高圆圆和刘雯说自己的阔腿裤好看，是因为这两条飘带',img:['img/cloth/cloth-15.jpg','img/cloth/cloth-15-1.jpg','img/cloth/cloth-15-2.jpg','img/cloth/cloth-15-3.jpg','img/cloth/cloth-15-4.jpg'],author:'Serena',readNum:'8',content:'天蓝花红的好天气里，仙气和灵动的因子在空气里飘散。你是否相信，只要在各种单品上加一条飘带，就能驱散夏日的平淡无奇。',date:'2017-06-23 13:11',contentDetail:'天蓝花红的好天气里，仙气和灵动的因子在空气里飘散。你是否相信，只要在各种单品上加一条飘带，就能驱散夏日的平淡无奇。'},
			                                                {id:5,title:'这是一条你穿了人人都夸美的新裙子',img:['img/cloth/cloth-16.jpg','img/cloth/cloth-16-1.jpg','img/cloth/cloth-16-2.jpg'],author:'Serena',readNum:'9',content:'格纹并不是新鲜元素，但是提到格纹，却好像无法摆脱“土气”的印象，甚至很多人已经把它早早“尘封”起来。其实，作为诞生已经百余年的格纹',date:'2017-06-16 17:41',contentDetail:'格纹并不是新鲜元素，但是提到格纹，却好像无法摆脱“土气”的印象，甚至很多人已经把它早早“尘封”起来。其实，作为诞生已经百余年的格纹，点缀美美的裙装最合适不过。文艺中带一点复古优雅，谁穿谁美！'},
			                                                {id:6,title:'Joanna Gunn：创意集结 挑战无限',img:['img/cloth/cloth-17.jpg','img/cloth/cloth-17-1.jpg','img/cloth/cloth-17-2.jpg'],author:'Mok',readNum:'29',content:'各路新晋设计师及创意企业家们受邀参与的「创意集结号」即将拉开帷幕，ELLE特别专访这一项目的幕后主理人Joanna Gunn，和她一起深入探讨',date:'2017-06-16 13:59',contentDetail:'各路新晋设计师及创意企业家们受邀参与的「创意集结号」即将拉开帷幕，ELLE特别专访这一项目的幕后主理人Joanna Gunn，和她一起深入探讨。身为首席品牌官的Joanna Gunn，有20多年的多品牌零售行业经验，曾任职于Gucci和Joyce Boutique等奢侈品牌。她于2001年加入连卡佛，在香港及中国内地的各项重要开店及营销活动中都发挥着非常关键的作用。'}
			        										]},
			        { id:2, name: '有料', viewable: false, content:[
			                                                {id:0,title:'设计师兰玉推出高定艺术版HUAWEI手机—“玉”',img:['img/cloth/cloth-21.jpg','img/cloth/cloth-21-1.jpg','img/cloth/cloth-21-2.jpg','img/cloth/cloth-21-3.jpg','img/cloth/cloth-21-4.jpg'],author:'马云菲',readNum:'83',content:'被誉为“跨界女王”的时装设计师、苏绣艺术传承人兰玉又有大动作了，这次她将跨界的对象延伸到智能手机领域，携手世界500强品牌华为，共同推出',date:'2017-08-30 18:08',contentDetail:'被誉为“跨界女王”的时装设计师、苏绣艺术传承人兰玉又有大动作了，这次她将跨界的对象延伸到智能手机领域，携手世界500强品牌华为，共同推出了一款设计师兰玉高定艺术版HUAWEI手机——“玉”，并与LANYU手工苏绣首饰礼盒联合发布，将传统工艺与现代科技完美融合。'},
			                                                {id:1,title:'Echolac愛可楽 携手张碧晨演绎都市时尚风',img:['img/cloth/cloth-22.jpg','img/cloth/cloth-22-1.jpg','img/cloth/cloth-22-2.jpg','img/cloth/cloth-22-3.jpg'],author:'马云菲',readNum:'82',content:'历经50余年传承和创新发展，Echolac愛可楽 一向走在时代前沿，时尚弄潮儿的赞誉当之无愧。说到Echolac愛可楽 的经典之作，还是非旅行箱包莫属',date:'2017-08-30 16:20',contentDetail:'历经50余年传承和创新发展，Echolac愛可楽 一向走在时代前沿，时尚弄潮儿的赞誉当之无愧。说到Echolac愛可楽 的经典之作，还是非旅行箱包莫属，不仅在众多热门影视剧中频频现身，更是不少明星日常出行必备的旅行箱。从鲜肉到潮叔、从萝莉到女王，Echolac愛可楽可真称得上是时尚圈的男神女神收割机。'},
			                                                {id:2,title:'GEOX携手景甜共同开启“我的呼吸之履”',img:['img/cloth/cloth-23.jpg','img/cloth/cloth-23-1.jpg','img/cloth/cloth-23-2.jpg','img/cloth/cloth-23-3.jpg'],author:'Kylin',readNum:'15',content:'近日，意大利著名鞋履品牌GEOX（健乐士）正式宣布由知名影视明星景甜担任品牌新一季代言人，与GEOX共同开启舒适健康时尚的#我的呼吸之履#',date:'2017-08-30 13:00',contentDetail:'近日，意大利著名鞋履品牌GEOX（健乐士）正式宣布由知名影视明星景甜担任品牌新一季代言人，与GEOX共同开启舒适健康时尚的#我的呼吸之履#。'},
			                                                {id:3,title:'无鞋带一脚蹬！Vans全新推出高阶摩蹬系列',img:['img/cloth/cloth-24.jpg','img/cloth/cloth-24-1.jpg'],author:'Kylin',readNum:'83',content:'今秋Vans全新推出高阶摩蹬系列，采用黑白纯色配色，在Sk8-Hi和Old Skool二种经典鞋款上，大胆采用无鞋带一脚蹬设计，辅以鞋口弹性绑带，穿脱方便',date:'2017-08-29 15:23',contentDetail:'今秋Vans全新推出高阶摩蹬系列，采用黑白纯色配色，在Sk8-Hi和Old Skool二种经典鞋款上，大胆采用无鞋带一脚蹬设计，辅以鞋口弹性绑带，穿脱方便的同时也诠释了Vans不拘一格的品牌态度。'},
			                                                {id:4,title:'这个秋天最流行什么靴子？无纹无扣无带的“三无”光',img:['img/cloth/cloth-25.jpg','img/cloth/cloth-25-1.jpg','img/cloth/cloth-25-2.jpg','img/cloth/cloth-25-3.jpg','img/cloth/cloth-25-4.jpg'],author:'Kylin',readNum:'17',content:'今年秋天最流行什么靴？答案与靴筒长度无关，与图案设计以为无关，今秋最流行的正是无纹无扣无带的“三无”光靴！',date:'2017-08-26 02:15',contentDetail:'今年秋天最流行什么靴？答案与靴筒长度无关，与图案设计以为无关，今秋最流行的正是无纹无扣无带的“三无”光靴！'},
			                                                {id:5,title:'adidas neo推出cloudfoam ULTIMATE 掀高街潮流风暴',img:['img/cloth/cloth-26.jpg','img/cloth/cloth-26-1.jpg','img/cloth/cloth-26-2.jpg','img/cloth/cloth-26-3.jpg','img/cloth/cloth-26-4.jpg'],author:'Kylin',readNum:'38',content:'潮流九月，adidas neo再露锋芒，重磅推出了街头焦点作品——cloudfoam ULTIMATE系列，为高街潮流市场注入了一针强心剂。',date:'2017-08-24 18:13',contentDetail:'潮流九月，adidas neo再露锋芒，重磅推出了街头焦点作品——cloudfoam ULTIMATE系列，为高街潮流市场注入了一针强心剂。'},
			                                                {id:6,title:'Coterie携手郑秀妍发布BLANC & ECLARE x COTERIE限',img:['img/cloth/cloth-27.jpg','img/cloth/cloth-27-1.jpg','img/cloth/cloth-27-2.jpg','img/cloth/cloth-27-3.jpg','img/cloth/cloth-27-4.jpg'],author:'Kylin',readNum:'7',content:'2017年8月18日，汇集全球眼镜品牌的时尚集团Coterie携手亚洲人气偶像郑秀妍(Jessica Jung)联袂推出BLANC & ECLARE x COTERIE限量系列墨镜',date:'2017-08-23 18:23',contentDetail:'2017年8月18日，汇集全球眼镜品牌的时尚集团Coterie携手亚洲人气偶像郑秀妍(Jessica Jung)联袂推出BLANC & ECLARE x COTERIE限量系列墨镜。'}
			        										]}
			      ];
			      
	return {
	  all: function() {
	    return clothList;
	  },
	  remove: function(clothLists) {
	    clothList.splice(clothList.indexOf(clothLists), 1);
	  },
	  get: function(clothListId,clothListTitle) {
	    for (var i = 0; i < clothList.length; i++) {
	    	for (var j = 0; j < clothList[i].content.length; j++){
		      if (clothList[i].content[j].id === parseInt(clothListId) && clothList[i].content[j].title === clothListTitle) {
		        return clothList[i].content[j];
		      }
	    	}
	    }
	    return null;
	  }
	};
 })


.factory('FoodTabService', function () {
	var foodList = [
			        { id:0, name: '颜控', viewable: true, content:[
			                                                {id:0,title:'圣诞树桩蛋糕',img:['img/food/food-1.jpg','img/food/food-1-1.jpg','img/food/food-1-2.jpg','img/food/food-1-3.jpg','img/food/food-1-4.jpg','img/food/food-1-5.jpg','img/food/food-1-6.jpg','img/food/food-1-7.jpg','img/food/food-1-8.jpg','img/food/food-1-9.jpg','img/food/food-1-10.jpg','img/food/food-1-11.jpg','img/food/food-1-12.jpg','img/food/food-1-13.jpg','img/food/food-1-14.jpg'],content:'原料：低筋面粉、糖粉、鸡蛋、油、纯牛奶、蓝风车奶油、草莓、法芙娜巧克力粉、法芙娜黑巧克力币、黑芝麻、盐。',author:'我叫一尾鱼'},
			                                                {id:1,title:'法式奶油蘑菇浓汤',img:['img/food/food-2.jpg','img/food/food-2-1.jpg','img/food/food-2-2.jpg','img/food/food-2-3.jpg','img/food/food-2-4.jpg','img/food/food-2-5.jpg','img/food/food-2-6.jpg','img/food/food-2-7.jpg','img/food/food-2-8.jpg','img/food/food-2-9.jpg'],content:'原料：无盐黄油、普通面粉、口蘑、洋葱、开水、全脂牛奶、淡奶油、香叶、盐、白砂糖、白胡椒。',author:'枫雪醉听泉'},
			                                                {id:2,title:'蓝莓烤吐司布丁',img:['img/food/food-3.jpg','img/food/food-3-1.jpg','img/food/food-3-2.jpg','img/food/food-3-3.jpg'],content:'原料：蓝莓、吐司、牛奶、芝士碎。',author:'冰蓝紫羽'},
			                                                {id:3,title:'迷迭香佛卡夏',img:['img/food/food-4.jpg','img/food/food-4-1.jpg','img/food/food-4-2.jpg','img/food/food-4-3.jpg','img/food/food-4-4.jpg'],content:'原料：高筋面粉（面团）、水（面团）、橄榄油（面团）、酵母（面团）、白砂糖（面团）、盐（面团）、意大利香草（香料）、新鲜迷迭香（香料）、小番茄（香料）、橄榄油（香料）、盐（香料）、黑胡椒粉（香料）。',author:'安宝的虎妈'},
			                                                {id:4,title:'浪漫七夕，粉嫩嫩的草莓慕斯',img:['img/food/food-5.jpg','img/food/food-5-1.jpg','img/food/food-5-2.jpg','img/food/food-5-3.jpg','img/food/food-5-4.jpg','img/food/food-5-5.jpg','img/food/food-5-6.jpg','img/food/food-5-7.jpg'],content:'原料：水、大豆油、白糖、鸡蛋、低筋面粉、可可粉、牛奶、白糖、吉利丁片、朗姆酒、柠檬汁、草莓果酱、淡奶油。',author:'萌城美食'},
			                                                {id:5,title:'椰蓉小餐包',img:['img/food/food-6.jpg','img/food/food-6-1.jpg','img/food/food-6-2.jpg','img/food/food-6-3.jpg','img/food/food-6-4.jpg','img/food/food-6-5.jpg','img/food/food-6-6.jpg','img/food/food-6-7.jpg'],content:'原料：高粉、低粉、奶粉、盐、糖、酵母、水、黄油、黄油、细砂糖、鸡蛋液、椰蓉、牛奶。',author:'小耳Maggie'},
			                                                {id:6,title:'浓浓情意——巧克力淋面蛋糕',img:['img/food/food-7.jpg','img/food/food-7-1.jpg','img/food/food-7-2.jpg','img/food/food-7-3.jpg','img/food/food-7-4.jpg','img/food/food-7-5.jpg','img/food/food-7-6.jpg'],content:'原料：牛奶、白糖、吉利丁粉、淡奶油、戚风蛋糕、白糖、葡萄糖、水、炼奶、黑巧克力、吉利丁片。',author:'吾爱烘焙'},
			                                                {id:7,title:'二十四节气餐盘画——雨水',img:['img/food/food-8.jpg','img/food/food-8-1.jpg','img/food/food-8-2.jpg','img/food/food-8-3.jpg','img/food/food-8-4.jpg','img/food/food-8-5.jpg'],content:'原料：黄瓜、海苔、五豆羹。',author:'情一诺'},
			                                                {id:8,title:'蛋奶酱闪电泡芙',img:['img/food/food-9.jpg','img/food/food-9-1.jpg','img/food/food-9-2.jpg','img/food/food-9-3.jpg','img/food/food-9-4.jpg','img/food/food-9-5.jpg','img/food/food-9-6.jpg'],content:'原料：低筋面粉、鸡蛋、黄油、牛奶、糖、盐、蛋奶酱。',author:'土豆丝卷饼'}
			        										]},
			        { id:1, name: '家常', viewable: false, content:[
			                                                {id:0,title:'泡菜鱼泡烧河鱼',img:['img/food/food-10.jpg','img/food/food-10-1.jpg','img/food/food-10-2.jpg','img/food/food-10-3.jpg','img/food/food-10-4.jpg','img/food/food-10-5.jpg','img/food/food-10-6.jpg','img/food/food-10-7.jpg'],content:'原料：小河鱼、鱼泡、自制泡菜、干红椒、姜、蒜、葱、料酒、米醋、生抽、老抽、豆瓣酱、油、盐、鸡精。',author:'MSHS杨'},
			                                                {id:1,title:'秋葵虾仁',img:['img/food/food-11.jpg','img/food/food-11-1.jpg','img/food/food-11-2.jpg'],content:'原料：基围虾、毛豆、秋葵、彩椒粒、洋葱粒。',author:'黄元宝'},
			                                                {id:2,title:'三杯虾',img:['img/food/food-12.jpg','img/food/food-12-1.jpg','img/food/food-12-2.jpg','img/food/food-12-3.jpg','img/food/food-12-4.jpg','img/food/food-12-5.jpg','img/food/food-12-6.jpg'],content:'原料：基尾虾、生抽、老抽、麻油、广东米酒、新鲜九层塔、细砂糖、姜片。',author:'我叫一尾鱼'},
			                                                {id:3,title:'小炒牛肉',img:['img/food/food-13.jpg','img/food/food-13-1.jpg','img/food/food-13-2.jpg','img/food/food-13-3.jpg'],content:'原料：牛肉、红尖椒、香芹、八角、桂皮、姜、蒜、料酒、生抽、蚝油、油、盐、鸡精。',author:'MSHS杨'},
			                                                {id:4,title:'农家小炒肉',img:['img/food/food-14.jpg','img/food/food-14-1.jpg','img/food/food-14-2.jpg','img/food/food-14-3.jpg','img/food/food-14-4.jpg','img/food/food-14-5.jpg'],content:'原料：五花肉、香豆干、大蒜叶、姜片、辣椒、生抽、豆瓣酱、料酒、糖。',author:'我叫一尾鱼'},
			                                                {id:5,title:'肉汁萝卜',img:['img/food/food-15.jpg','img/food/food-15-1.jpg','img/food/food-15-2.jpg','img/food/food-15-3.jpg','img/food/food-15-4.jpg','img/food/food-15-5.jpg'],content:'原料：白萝卜、五花肉、老抽、生抽、黄酒、姜片、冰糖、盐。',author:'我叫一尾鱼'},
			                                                {id:6,title:'西芹百合',img:['img/food/food-16.jpg','img/food/food-16-1.jpg','img/food/food-16-2.jpg','img/food/food-16-3.jpg','img/food/food-16-4.jpg','img/food/food-16-5.jpg'],content:'原料：西芹、鲜百合、盐、红椒。',author:'我叫一尾鱼'},
			                                                {id:7,title:'煎黄瓜鱼',img:['img/food/food-17.jpg','img/food/food-17-1.jpg','img/food/food-17-2.jpg'],content:'原料：黄花鱼、酱油、香醋、盐、姜、大蒜、白糖、味精、香葱。',author:'阿墨是我宝宝'},
			                                                {id:8,title:'炒空心菜',img:['img/food/food-18.jpg','img/food/food-18-1.jpg'],content:'原料：空心菜、大蒜、油、盐、鸡精。',author:'阿墨是我宝宝'},
			                                                {id:9,title:'干煸双丝',img:['img/food/food-19.jpg','img/food/food-19-1.jpg','img/food/food-19-2.jpg','img/food/food-19-3.jpg','img/food/food-19-4.jpg','img/food/food-19-5.jpg'],content:'原料：猪肉、莲藕、干红椒、姜、蒜、葱、油、盐、鸡精。',author:'MSHS杨'},
			                                                {id:10,title:'热拌菜',img:['img/food/food-20.jpg','img/food/food-20-1.jpg','img/food/food-20-2.jpg','img/food/food-20-3.jpg','img/food/food-20-4.jpg','img/food/food-20-5.jpg'],content:'原料：橄榄菜、胭脂萝卜、蒜粒、盐。',author:'黄元宝'}
			        										]}
			      ];
			      
	return {
	  all: function() {
	    return foodList;
	  },
	  remove: function(foodLists) {
	    foodList.splice(foodList.indexOf(foodLists), 1);
	  },
	  get: function(foodListId,foodListTitle) {
	    for (var i = 0; i < foodList.length; i++) {
	    	for (var j = 0; j < foodList[i].content.length; j++){
		      if (foodList[i].content[j].id === parseInt(foodListId) && foodList[i].content[j].title === foodListTitle) {
		        return foodList[i].content[j];
		      }
	    	}
	    }
	    return null;
	  }
	};
 })




.factory('HouseTabService', function () {
	var houseList = [
			        { id:0, name: '手工', viewable: true, content:[
			                                                {id:0,title:'竹签手工制作埃菲尔铁塔模型的详细图解教程',num:'3',like:'17',img:['img/house/house-1.jpg','img/house/house-1-1.jpg','img/house/house-1-2.jpg','img/house/house-1-3.jpg','img/house/house-1-4.jpg','img/house/house-1-5.jpg','img/house/house-1-6.jpg','img/house/house-1-7.jpg','img/house/house-1-8.jpg','img/house/house-1-9.jpg','img/house/house-1-10.jpg'],content:'近来在网上看到几件手工达人制作的埃菲尔铁塔作品，很是漂亮，恰巧最近晚上得闲，也想自己鼓捣一个。参看他们所做的作品，有使用竹签的、牙签的、也有用回形针的，不过大多都是竹签性质，竹制作品，这样下来，DIY门槛极低，所需工具、材料都是易得的。',author:'yooongchun',date:'2017-09-01'},
			                                                {id:1,title:'用水桶打造的装置艺术 呼吁解决城市停车乱象',num:'23',like:'0',img:['img/house/house-2.jpg','img/house/house-2-1.jpg','img/house/house-2-2.jpg','img/house/house-2-3.jpg'],content:'在墨西哥市这个两千多万人口的城市里，停车位严重不足，使得停车几乎是开车人的噩梦，甚至衍生出「viene viene」这种非法业者，他们霸占车位后，再拿着这种塑胶水桶向驾驶员收取高昂的停车费，而找不到车位的驾驶员再怎么不甘愿，为了停车还是只能乖乖付钱。面对这种「此车位不是我开，但此车位是我占，要在此路停，留下停车财」的非法现象，Factor Eficiencia、5468796建筑师事务和NYL工作室，在墨西哥市的Alameda公园中，用水桶打造出装置艺术「One Bucket at a Time」发出不平之鸣，要求还给民众应有的公共空间使用权。',author:'幽趣',date:'2017-09-01'},
			                                                {id:2,title:'中秋灯笼DIY制作图解 幼儿园做灯笼的教程',num:'36',like:'13',img:['img/house/house-3.jpg','img/house/house-3-1.jpg','img/house/house-3-2.jpg','img/house/house-3-3.jpg','img/house/house-3-4.jpg','img/house/house-3-5.jpg','img/house/house-3-6.jpg','img/house/house-3-7.jpg','img/house/house-3-8.jpg','img/house/house-3-9.jpg','img/house/house-3-10.jpg','img/house/house-3-11.jpg'],content:'',author:'幽趣',date:'2017-08-30'},
			                                                {id:3,title:'卡通图案马克杯DIY 定制款马克杯制作方法',num:'20',like:'9',img:['img/house/house-4.jpg','img/house/house-4-1.jpg','img/house/house-4-2.jpg','img/house/house-4-3.jpg','img/house/house-4-4.jpg','img/house/house-4-5.jpg','img/house/house-4-6.jpg','img/house/house-4-7.jpg','img/house/house-4-8.jpg','img/house/house-4-9.jpg'],content:'',author:'幽趣',date:'2017-08-30'},			                                          
			                                                {id:4,title:'有趣的影子DIY 赋予平凡事物一个生动的灵魂',num:'46',like:'7',img:['img/house/house-5.jpg','img/house/house-5-1.jpg','img/house/house-5-2.jpg','img/house/house-5-3.jpg','img/house/house-5-4.jpg'],content:'每一个人都有一位随身保镖，只要有光的地方，就会发现它的存在;即便摸不到、听不见、嗅不着，它依旧是个无法否认的事实──影子。位于加州的红木城，有一名当地的艺术家将影子增添「戏味」，让它们彷彿拥有自己的生命，趁人不注意的时候，偷偷动来动去。',author:'幽趣',date:'2017-08-29'}			                                          
			        										]},
			        { id:1, name: '脑洞', viewable: false, content:[
			                                                {id:0,title:'易拉罐做汽车步骤图解 易拉罐卡车DIY教程',num:'96',like:'1',img:['img/house/house-6.jpg','img/house/house-6-1.jpg','img/house/house-6-2.jpg','img/house/house-6-3.jpg','img/house/house-6-4.jpg','img/house/house-6-5.jpg','img/house/house-6-6.jpg','img/house/house-6-7.jpg'],content:'',author:'幽趣',date:'2017-09-01'},
			                                                ]}
			      ];
			      
	return {
	  all: function() {
	    return houseList;
	  },
	  remove: function(houseLists) {
	    houseList.splice(houseList.indexOf(houseLists), 1);
	  },
	  get: function(houseListId,houseListTitle) {
	    for (var i = 0; i < houseList.length; i++) {
	    	for (var j = 0; j < houseList[i].content.length; j++){
		      if (houseList[i].content[j].id === parseInt(houseListId) && houseList[i].content[j].title === houseListTitle) {
		        return houseList[i].content[j];
		      }
	    	}
	    }
	    return null;
	  }
	};
 })


.service('WalkTabService', function () {
    this.getWalkClassify = function () {
      return [
        { name: '导航', viewable: true},
        { name: '公交', viewable: false},
        { name: '旅途', viewable: false}
      ]
    }
 })


.service('AccountService', function ($http) {
var $this = this;
// 获取缓存用户信息
//this.getCacheUser = function () {
//return angular.fromJson(window.localStorage[cache.user]);
//}

// 登陆
this.login = function (name, password, callback) {
//var url = urls.login + "&name=" + name + "&password=" + password;
//$http.jsonp(url).success(function (response) {
//  if (response.status == true) {
//    window.localStorage[cache.token] = response.access_token;
//    $this.user(callback);
//  } else {
//    alert("用户名和密码不匹配！");
//  }
//})
	if (name == 'YuXLan' && password == "yuxiaolan123") {
//		alert("登录成功");
		$this.user(callback);
	} else if (name == '' || password ==''){
		alert("用户名或者密码不能为空");
	} else {
		alert("用户名或密码错误");
	}
}
// 获取信息
this.user = function (callback) {
//var url = urls.user + "&access_token=" + window.localStorage[cache.token];
//$http.jsonp(url).success(function (response) {
//  console.log(response);
//  window.localStorage[cache.user] = angular.toJson(response);
//  callback(response)
//})
	callback({name:'YuXLan'});
}

// 注册
//this.reg = function (account, email, password) {
//var url = urls.reg + "&account=" + account + "&email=" + email + "&password=" + password;
//$http.jsonp(url).success(function (response) {
//  if (response.status == false) {
//    alert(response.msg);
//  } else {
//    window.localStorage[cache.token] = response.access_token;
//  }
//})
//}

//获取收藏列表
//this.getFavorites = function (page) {
//var url = urls.favorite + "?page=" + page + "&rows" + settings.rows + "&access_token=" + window.localStorage[cache.token];
//return $http.jsonp(url);
//}
//删除收藏
//this.deleteFav = function (id, type) {
//var url = urls.favoriteDelete + "?id=" + id + "&type=" + type + "&access_token=" + window.localStorage[cache.token]
//return $http.jsonp(url);
//}
//添加收藏
//this.addFav = function (id, type, title) {
//var url = urls.favoriteAdd + "?id=" + id + "&type=" + type + "&title=" + title + "&access_token=" + window.localStorage[cache.token]
//return $http.jsonp(url);
//}
});
