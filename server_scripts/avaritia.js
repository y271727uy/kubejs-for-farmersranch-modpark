ServerEvents.recipes(event => {
    event.remove({ mod: 'avaritia_delight'})
    event.remove({ output:'avaritia:compressed_crafting_table'})
    event.remove({ output: 'avaritia:double_compressed_crafting_table'})
    event.remove({ output: 'avaritia:extreme_crafting_table'})
    event.remove({ output: 'avaritia:diamond_lattice'})
    event.remove({ output: 'avaritia:ultimate_stew'})
    event.remove({ output: 'avaritia:cosmic_meatballs'})
    event.remove({ output: 'avaritia_delight:infinity_knife'})

    event.shaped(
        Item.of('avaritia_delight:infinity_knife', 1),  // 输出物品
        [
          ' B ',
          ' A ',
          '   '
        ],
        {
          A:'minecraft:stick',
          B:'avaritia:infinity_ingot'       
          // 映射字典中只需要写形状中实际用到的字符
        }
      )
    
})


/*
ServerEvents.recipes(event => {
    event.recipes.avaritia.extreme_shaped(
        'acacia_boat', 
        [
            'AAAA',
            'AAAA',
            'AAAA',
            'AAAA'
        ], 
        {
            'A': 'acacia_planks'
        }
    )
终极工作台

    event.recipes.avaritia.extreme_shapeless(
        'oak_door',
        [
            'oak_planks'
        ],
        true
    )


    event.recipes.avaritia.compressor(
        'chest',
        [
            '#minecraft:planks'
        ],
        200
    )
})

*/