ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
  
    const updateLog = [
    "§6当前版本:5.6.07",
    "§a饮水值配置完成，使用crt删除超级煲和寰宇肉丸配方",
    "§e出货箱价格仍在设置（暂时使用香草纪元配置）",
    "§b任务线制作最终章初步仍需调整",
    "草莓，终将被统一！！"
    ];
  
    event.register(
      Commands.literal('updata')
        .executes(ctx => {
          const player = ctx.getSource().getPlayerOrException();
          updateLog.forEach(line => {
            player.sendSystemMessage(Component.literal(line));
          });
          return 1;
        })
    );
  });
  
  