ServerEvents.commandRegistry(event => {
    const { commands: Commands } = event;
  
    event.register(
      Commands.literal('testupdata')
        .executes(ctx => {
          const player = ctx.getSource().getPlayerOrException();
          player.sendSystemMessage(Component.literal("命令测试成功！"));
          return 1;
        })
    );
  });
  