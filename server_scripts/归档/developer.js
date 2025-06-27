ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
  
    const msgList = [
      "§5开发团队&贡献者(排名不分先后)",
      "草莓棉花糖(主创，牛马，魔改)",
      "摸鱼芋圆(任务书)",
      "DangcingSnow(mod移植)",
      
      "筱雨(Excel文档)", 
      "摸鱼の墨(天选白干牛马)",
      "铨酱(Mac设备测试)"

    ];
  
    event.register(
      Commands.literal("developer")
        .requires(source => source.hasPermission(0)) // 所有人可用
        .executes(ctx => {
          const player = ctx.source.player;
          msgList.forEach(msg => {
            player.sendSystemMessage(Text.literal(msg));
          });
          return 1;
        })
    );
  });
  
  //村民交易
  //简单经济
  //标签合并
  //掉落物替换
  //模拟殖民地接受食品
  //自定义赏金板
  //模拟殖民地物品合并
  //凡家物语魔改