
  //哎哟卧槽，什么傻逼玩意我去
  //中午折腾半个小时司马了啊
  
  //21：44 果然啊,mcr的一切都不适合魔改得了重写重启游戏
  //forge的这个进程卡死是不是祖传的啊
  //草，这代码估计除了 我没有人能看得懂了，命名和代码不符合，不写注释因为我看个鸡毛


StartupEvents.registry('creative_mode_tab', event => {
	event.create('gregtech_food_option').icon(() => 'kubejs:gtfologo').content(() => [
		'kubejs:tungstensteel_apple',
    ''
	])
})

StartupEvents.registry('creative_mode_tab', event => {
	event.create('LifeAfter').icon(() => 'minecraft:rotten_flesh').content(() => [
		'kubejs:lifeafter_logo',
    ''
	])
})
