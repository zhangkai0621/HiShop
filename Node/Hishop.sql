SET NAMES UTF8;
DROP DATABASE  IF EXISTS hishop;
CREATE DATABASE hishop CHARSET=UTF8;
USE hishop;
CREATE TABLE cases(
	lid		TINYINT PRIMARY KEY,
	src		VARCHAR(20),
    title   VARCHAR(64),
	userUrl 	VARCHAR(30),
	mode    VARCHAR(30),
    achievement   VARCHAR(100)
);

CREATE TABLE userinfo(
	uid TINYINT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(20),
	upwd	VARCHAR(8),
	phone	VARCHAR(11)
);

INSERT INTO userinfo VALUES (NULL,'richard','zhangkai',18508457621);


INSERT INTO `cases` (`lid`, `src`, `title`, `userUrl`, `mode`, `achievement`) VALUES
(1, 'img/case_info1.png', '茅台', 'http://www.emaotai.cn/', 'PC商城+微信商城+WAP商城', '借助HiShop移动云商城，快速布局线上业务，打造更方便快捷的购物体验，从而实现了品牌电商化转型。'),
(2, 'img/case_info2.png', '山东购精彩', 'http://sdgoujingcai.com/', 'PC商城+微信商城+WAP商城+APP商城', '光大银行通过HiMall搭建旗下省级电商平台——山东购精彩，\r\n致力于把山东的特色产品分享给更多的顾客。'),
(3, 'img/case_info3.png', '远大空品', 'http://www.broadair.net', 'PC商城+WAP商城', '综合考量远大的需求及其优势，HiShop为远大定制全方位立\r\n体运营模式。低库存供应链、全渠道电子商务并驾齐驱。'),
(4, 'img/case_info4.png', '广州酒家', 'http://mall.gzr.com.cn', 'PC商城+微信商城+WAP', '目前年营业额是15亿，旗下有门店酒楼，月饼粽子和熟食手\r\n信等，利口福食品门店200来家'),
(5, 'img/case_info5.png', '开口笑酒官方商城', 'http://fx.vats.com.cn/default.', '微信商城', '借助销客多搭建微信分销商城，开口笑主要从事白酒的生\r\n产，销售，以其卓越品质跻身于名优高档酒行列'),
(6, 'img/case_info6.png', '金锣', 'http://www.jinluoshop.com/', 'PC商城+WAP商城+微信商城+APP商城', '金锣集团是以肉制品生产加工为主的中国500强企业，结合移动云商城，\r\n建立多渠道布局线上销售及线下周边多门店配送，效果显著。'),
(7, 'img/case_info7.png', '恒大农牧', 'http://mall.hdnmgroup.com', 'PC商城+WAP商城+微信商城', '恒大农牧集团是恒大集团“多元+规模+品牌”战略指导下成立的特大型集团，\r\n借势移动云商城实现产供销一体化，有效整合全产业链优势资源。'),
(8, 'img/case_info8.png', '乔丹体育', 'http://www.qiaodan.com.cn/', 'PC+WAP+微信+小程序+O2O', '	与HiShop旗下产品HiMall相结合搭建的乔丹官方商城，结合O2O模式，线上商城\r\n与线下实体店共同协作共赢，成功将产品、服务、品牌相结合，实现品牌企业转型\r\n新零售。'),
(9, 'img/case_info9.png', ' 贝因美', 'http://m.beingmate.com/', 'PC商城+WAP商城+微信商城', '贝因美主要涉及婴幼儿产品及服务,公司始终坚持以爱的企业精神,使用\r\n移动云商城进行线上销售，帮助更多宝宝健康成长！'),
(10, 'img/case_info10.png', '京粮集团点到网', 'http://www.365diandao.com/', 'PC商城+微信商城+WAP商城+APP商城+小程序商城', '	利用HiMall搭建的点到网作为京粮集团旗下网上商超购物\r\n平台，线上商城和线下实体店协作共赢，扩大销量。'),
(11, 'img/case_info11.png', '厦门航空', '	shop.xiamenair.com', 'PC商城+微信商城+WAP商城', '	厦门航空利用HiShop云分销打造网上综合预定机票平台，囊\r\n括机票预订,值机办理,航班动态等一体化服务。'),
(12, 'img/case_info12.png', '桃花季', 'http://www.szthj.com/', 'PC商城+WAP商城+微信商城+APP商城', '“桃花季”内衣连锁品牌企业，全国范围共开设了约1000余家终端店铺，\r\n500多万会员，建立了覆盖广泛的销售网络。');
