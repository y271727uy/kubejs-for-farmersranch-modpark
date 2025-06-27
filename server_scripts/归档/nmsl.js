ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
  
    const msgList = [
      "§c那我问你，你考虑过整合包作者吗？",
      "§cNMD那MCreator写的mod我TM就差给你解包了",
      "§c我都怀疑是我的问题，结果为什么隔壁黄瓜能统一我***",
      "§c啊..那我问你，你自己清不清楚你写的是什么？那玩意crt+js都杀不动年猪都没这么难杀我**",
      "§c啊能能能，我mod脱离了mcr我手写的",
      "§c你能你***"
    ];
  
    event.register(
      Commands.literal("cnm")
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
  
  
  