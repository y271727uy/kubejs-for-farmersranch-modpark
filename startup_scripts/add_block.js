
StartupEvents.registry('block', event => {
    /*
    event.create('example_block') // 创建 ID 为 kubejs:example_block 的方块
      .displayName('测试方块') // 在游戏中显示的名称
      .soundType('wool') // 设置声音类型为羊毛
      .hardness(1.0) // 设置硬度
      .resistance(1.0) // 设置爆炸抗性
      .requiresTool(true) // 没有工具不会掉落
      .tagBlock('minecraft:mineable/pickaxe') // 可以用镐快速挖掘
      .tagBlock('minecraft:needs_stone_tool') // 至少需要石制工具
*/

      event.create('test_block','basic')
           .textureAll('kubejs:block/sandwiching_station_side')
           .textureSide(Direction.up,'kubejs:block/sandwiching_station_top')
           .textureSide(Direction.DOWN,'kubejs:block/sandwiching_station_bottom')
           .displayName('测试方块') 












  })



