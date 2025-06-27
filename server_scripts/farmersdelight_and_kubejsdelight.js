ServerEvents.recipes(event => {
    event.custom({
      type: 'farmersdelight:cutting',
      ingredients: [
        { item: 'biologica:raw_elk' }   //输入
      ],
      tool: {
        tag: 'forge:tools/knives'   //工具
      },
      result: [
        {
          item: 'delightful:venison_chops',  //输出
          count: 2,
          chance: 1.0
        }
      ]
    });

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
          { item: 'wildernature:venison' }   //输入
        ],
        tool: {
          tag: 'forge:tools/knives'   //工具
        },
        result: [
          {
            item: 'delightful:venison_chops',  //输出
            count: 2,
            chance: 1.0
          }
        ]
      });




  });
  