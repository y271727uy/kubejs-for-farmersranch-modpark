//瞎几把写的
//前面加物品，打标签，改位置 后面还要更改配置
//不过好在啊，好在没出岔子，也是把货币这个干扰了我一个星期的东西给写好了
//后面还要改一下配方
//感觉这都能写个日记了hhh
//所以，看到这里的玩家 v我50我买盒补或者去疯狂星期四

StartupEvents.registry('item', event => {
  event.create('copper_gt_credit')
    .displayName('铜GT币')
    .tooltip('币值:1')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/0') 
    .rarity('common')
    .maxStackSize(64)

  event.create('cupronickel_gt_credit')
    .displayName('白铜GT币')
    .tooltip('币值:2')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/1') 
    .rarity('common')
    .maxStackSize(64)

  event.create('silver_gt_credit')
    .displayName('银GT币')
    .tooltip('币值:4')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/2') 
    .rarity('uncommon')
    .maxStackSize(64)

  event.create('gold_gt_credit')
    .displayName('金GT币')
    .tooltip('币值:8')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/3') 
    .rarity('uncommon')
    .maxStackSize(64)

  event.create('platinum_gt_credit')
    .displayName('铂GT币')
    .tooltip('币值:16')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/4') 
    .rarity('uncommon')
    .maxStackSize(64)

  event.create('osmium_gt_credit')
    .displayName('锇GT币')
    .tooltip('币值:128')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/5') 
    .rarity('rare')
    .maxStackSize(64)

  event.create('naquadah_gt_credit')
    .displayName('硅岩GT币')
    .tooltip('币值:1024')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/6') 
    .rarity('rare')
    .maxStackSize(64)

  event.create('neutronium_gt_credit')
    .displayName('中子素GT币')
    .tooltip('币值:8192')
    .tooltip('由GregTech发行')
    .texture('kubejs:item/7') 
    .rarity('rare')
    .maxStackSize(64)

//狗币
  event.create('doge_coin')
    .displayName('Doge币')
    .tooltip('币值:131072')
    .tooltip('由GregTech发行')
    .tooltip('wow,我现在有好多钱了')
    .texture('kubejs:item/9') 
    .rarity('epic')
    .maxStackSize(64)
})



//屎啊
//打标签
//哦不对要打倒服务端那边
//all_tag.js 193行
//加入物品栏是在gt_coin.js

//一级铜币   1 1：2
//二级白铜币 2 1：2
//三级银币   4 1：2
//四级金币   8 1：2
//五级铂币   16 1：2
//六级锇币   128 1：8
//七级硅岩币  1024 1：8
//八级中子素币 8192 1：8
//九级doge币 131072  1：16
//十级上古金币  暂定1：25