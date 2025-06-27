//货币合成别看错了

//铜币合成白铜币
ServerEvents.recipes(event => {
    event.shaped(
      Item.of('kubejs:cupronickel_gt_credit', 1),  // 输出物品
      [
        'AA ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:copper_gt_credit'       // 映射字典中只需要写形状中实际用到的字符
      }
    )


//白铜币合成银币
    event.shaped(
      Item.of('kubejs:silver_gt_credit', 1),  
      [
        'AA ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:cupronickel_gt_credit'      
      }
    )


//银币合成金币
    event.shaped(
      Item.of('kubejs:gold_gt_credit', 1),  
      [
        'AA ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:silver_gt_credit'       
      }
    )


  //金币合成铂币
    event.shaped(
      Item.of('kubejs:platinum_gt_credit', 1),  
      [
        'AA ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:gold_gt_credit'      
      }
    )
  

//铂币合成锇币
    event.shaped(
      Item.of('kubejs:osmium_gt_credit', 1),  
      [
        'AAA',
        'AAA',
        'AA '
      ],
      {
        A: 'kubejs:platinum_gt_credit'       
      }
    )
  

//锇币合成硅岩币
    event.shaped(
      Item.of('kubejs:naquadah_gt_credit', 1),  
      [
        'AAA',
        'AAA',
        'AA '
      ],
      {
        A: 'kubejs:osmium_gt_credit'      
      }
    )
 

//硅岩币合成中子素币
    event.shaped(
      Item.of('kubejs:neutronium_gt_credit', 1),  
      [
        'AAA',
        'AAA',
        'AA '
      ],
      {
        A: 'kubejs:naquadah_gt_credit'      
      }
    )


  //中子素币合成doge币
 //已更换

//反着来
//doge币合成中子素币
    event.shaped(
      Item.of('kubejs:neutronium_gt_credit', 16), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:doge_coin'       
      }
    )

  //中子素币合硅岩币
    event.shaped(
      Item.of('kubejs:naquadah_gt_credit', 8), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:neutronium_gt_credit'       
      }
    )
  

//硅岩币合成锇币
    event.shaped(
      Item.of('kubejs:osmium_gt_credit', 8), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:naquadah_gt_credit'       
      }
    )
  

//锇币合成铂币
    event.shaped(
      Item.of('kubejs:platinum_gt_credit', 8), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:osmium_gt_credit'       
      }
    )
  

 //铂币合成金币
    event.shaped(
      Item.of('kubejs:gold_gt_credit', 2), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:platinum_gt_credit'       
      }
    )

  //金币合成银币
    event.shaped(
      Item.of('kubejs:silver_gt_credit', 2), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:gold_gt_credit'       
      }
    )


  //银币合成白铜币
    event.shaped(
      Item.of('kubejs:cupronickel_gt_credit', 2), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:silver_gt_credit'       
      }
    )

  //白铜币合成铜币
    event.shaped(
      Item.of('kubejs:copper_gt_credit', 2), 
      [
        'A  ',
        '   ',
        '   '
      ],
      {
        A: 'kubejs:cupronickel_gt_credit'       
      }
    )
//无尽贪婪配方
    event.shaped(
      Item.of('avaritia:compressed_crafting_table', 1),  
      [
        'AA ',
        '   ',
        '   '
      ],
      {
        A: 'minecraft:crafting_table'       
      }
    )
    event.shaped(
      Item.of('avaritia:double_compressed_crafting_table', 1),  
      [
        'AAA',
        'ABA',
        'AAA'
      ],
      {
        A:'avaritia:compressed_crafting_table',
        B:'createaddition:electrum_ingot'
      }
    )

    event.shaped(
      Item.of('avaritia:diamond_lattice', 1),  
      [
        ' A ',
        'A A',
        ' A '
      ],
      {
        A:'minecraft:diamond'
      }
    )

    event.shaped(
      Item.of('avaritia:extreme_crafting_table', 1),  
      [
        'CAC',
        'ABA',
        'CAC'
      ],
      {
        A:'avaritia:crystal_matrix_ingot',
        B:'avaritia:double_compressed_crafting_table',
        C:'avaritia:diamond_lattice'
      }
    )

  })