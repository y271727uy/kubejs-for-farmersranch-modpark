ServerEvents.recipes(event => {
    const create = event.recipes.create;
    create.mechanical_crafting('kubejs:doge_coin', 1 [  //输出
        "BBBB",
        "BBBB",
        "BBBB",
        "BBBB"
    ], {  //配方,
        B: "neutronium_gt_credit"
    });
//动力合成器配方

    event.recipes.create.milling(
      [Item.of('kubejs:iron_dust', 1)], // 输出数组形式，必须用 [] 包裹
      'minecraft:iron_ingot'         // 输入为字符串或 Ingredient
    ).processingTime(200 * 20);       // 单位是 tick，这里是 200 秒
//研磨铁粉


    event.recipes.create.mixing(
      [Item.of('kubejs:steel_ingot')], // 输出：钢锭
      [
        Item.of('minecraft:coal', 8),  // 输入1：8煤
        'kubejs:iron_dust'             // 输入2：铁粉
      ]
    ).heated(); // 必须加热
  
    event.recipes.create.mixing(
      [Item.of('kubejs:doge_coin')], // 
      [
        Item.of('kubejs:neutronium_gt_credit', 16),  // 
      ]
    ).heated(); 

    event.recipes.create.mixing(
        [Item.of('kubejs:doge_coin')], 
        [
          Item.of('kubejs:neutronium_gt_credit', 16),  
        ]
      ).heated(); 

      event.recipes.create.mixing(
        [
          Fluid.of('kubejs:platinum_concentrate', 1000),  // 输出流体：浓缩铂 1000mB
          Item.of('kubejs:platinum_residue_dust', 1)      // 输出物品：铂渣粉 1个
        ],
        [
          Fluid.of('kubejs:sulfuric_acid', 1000),             // 输入流体：王水 现在是硫酸1000mB
          Item.of('kubejs:platinum_wetallic_powder_dust', 4)  // 输入物品：铂金粉 4个
        ]
      ).heated();
      
  
    event.recipes.create.milling(
          [
            Item.of('minecraft:gravel'),                      // 必出
            Item.of('kubejs:metallic_slag').withChance(0.10), 
            Item.of('minecraft:iron_nugget').withChance(0.10),
            Item.of('kubejs:stone_dust'),
            Item.of('kubejs:pile_of_fallout').withChance(0.01) // 1%概率
          ],
          'minecraft:cobblestone'
        ).processingTime(400);
    
    event.recipes.create.mixing(
          [Item.of('kubejs:thorium')], 
          [
            Fluid.of('kubejs:sulfuric_acid', 1000), // 输入1：1000mB 
            Item.of('kubejs:raw_thorium', 9)               
          ]
        );
    /*  
    event.recipes.create.crushing(
            [
              Item.of('create:cinder_flour'),                         // 必出 ×1
              Item.of('create:cinder_flour').withChance(0.5),         // 50% 再出 ×1
              Item.of('kubejs:sulfur_dust').withChance(0.5)           // 50% 概率出硫粉
            ],
            'minecraft:netherrack' // 输入原料（可改）
          ).processingTime(300); // 300 tick = 15秒
      
    event.recipes.create.mixing(
              [
                Fluid.of('kubejs:sulfuric_acid', 1000) // 输出流体
              ],
              [
                Fluid.of('minecraft:water', 1000),                         // 输入水
                Item.of('minecraft:charcoal', 2),                          // 输入木炭 ×2
                Item.of('kubejs:sulfur_dust', 1)                           // 输入硫粉
              ]
            ).heated(); // 需要加热
     */       
    event.recipes.create.mixing(
              [
                Fluid.of('kubejs:sulfuric_acid', 1000) // 输出流体
              ],
              [
                Fluid.of('minecraft:water', 1000),                         // 输入水
                Item.of('minecraft:charcoal', 2),                          // 输入木炭 ×2
                Item.of('alexscaves:sulfur_dust', 1)                           // 输入硫粉
              ]
            ).heated(); // 需要加热
                  
        
    event.recipes.create.mixing(
              [
                Item.of('kubejs:raw_thorium', 1)
              ],
              [
                Fluid.of('minecraft:water', 1000),
                Item.of('prehistoricfauna:hardened_silt', 2),
                Item.of('yungscavebiomes:ancient_sand', 4),
                Item.of('minecraft:clay_ball', 3),
                Item.of('kubejs:sure_corrosion_powder', 10)  // 新加的输入
              ]
      ).superheated();
    
      
    event.recipes.create.mixing(
      [
        Item.of('kubejs:sure_corrosion_powder', 1)  // 输出物品
      ],
      [
        Fluid.of('kubejs:sulfuric_acid', 1000),     // 输入流体
        Item.of('kubejs:pile_of_fallout', 64)       // 输入物品
      ]
    ).superheated();  // 超级加热


    event.recipes.create.mixing(
        [
          Item.of('kubejs:suspicious_uranium_slag', 1) // 输出
        ],
        [
          Item.of('minecraft:granite', 64),             // 花岗岩
          Fluid.of('kubejs:sulfuric_acid', 1000),       // 浓硫酸
          Item.of('kubejs:sure_corrosion_powder', 10)   // 腐蚀粉
        ]
      ).superheated(); // 超级加热

    event.recipes.create.mixing(
          [
            Item.of('kubejs:uranium_crystals', 1) // 输出
          ],
          [
            Item.of('kubejs:suspicious_uranium_slag', 64), // 输入铀渣
            Fluid.of('kubejs:sulfuric_acid', 1000)         // 浓硫酸
          ]
        ).superheated(); // 超级加热
    
  event.recipes.create.crushing(
     [
      Item.of('kubejs:plant_residue', 1) // 输出
     ],
       Item.of('minecraft:apple', 1)       // 输入
     ).processingTime(200); // 可选：加工时间（单位 tick，200 = 10 秒）
  event.recipes.create.crushing(
     [
       Item.of('kubejs:plant_residue', 9) // 输出
     ],
        Item.of('fruitsdelight:apple_crate', 1)       // 输入
    ).processingTime(200); // 可选：加工时间（单位 tick，200 = 10 秒）
    event.recipes.create.crushing(
      [
        Item.of('kubejs:plant_residue', 9) // 输出
      ],
         Item.of('vinery:apple_bag', 1)       // 输入
     ).processingTime(200); // 可选：加工时间（单位 tick，200 = 10 秒）
     event.recipes.create.crushing(
      [
        Item.of('kubejs:plant_residue', 9) // 输出
      ],
         Item.of('hearthandharvest:apple_crate', 1)       // 输入
     ).processingTime(200); // 可选：加工时间（单位 tick，200 = 10 秒）


  event.recipes.create.mixing(
      [
        Fluid.of('kubejs:pure_plant_extract', 1000) // 输出流体
      ],
      [
        Item.of('kubejs:plant_residue', 16),        // 植物残渣
        Item.of('minecraft:charcoal', 2),           // 木炭
        Fluid.of('minecraft:water', 1000)           // 水
        ]
      );

  event.recipes.create.mixing(
          [
            Item.of('kubejs:plant_extract_crystallization', 6) // 输出
          ],
          [
            Fluid.of('kubejs:pure_plant_extract', 250)        // 输入流体
          ]
        ).superheated(); // 超级加热
  
  event.recipes.create.crushing(
        [
          Item.of('kubejs:refined_plant_dust', 1),                            // 主输出
          Item.of('kubejs:estradiol_powder', 1).withChance(0.05)              // 5% 概率副产物
        ],
        'kubejs:plant_extract_crystallization'
      ).processingTime(200);

event.recipes.create.milling(
  [
    Item.of('kubejs:stone_dust'),                      // 必出
    Item.of('kubejs:light_metal_slag').withChance(0.01),  //轻金属残渣 钛
    Item.of('kubejs:non_ferrous_metal_slag').withChance(0.01),   //有色金属残渣  铝
    Item.of('kubejs:silver_white_metal_residue').withChance(0.01),//银白金属残渣  其他金属
    Item.of('kubejs:platinum_wetallic_powder_dust').withChance(0.01) //铂金属粉粉 铂系金属
  ],
    'kubejs:metallic_slag'
  ).processingTime(400);
//深板岩
event.recipes.create.milling(
  [
    Item.of('minecraft:gravel'),                      // 必出
    Item.of('kubejs:metallic_slag').withChance(0.10), 
    Item.of('minecraft:iron_nugget').withChance(0.10),
    Item.of('kubejs:stone_dust'),
    Item.of('kubejs:pile_of_fallout').withChance(0.01) // 1%概率
  ],
  'minecraft:cobbled_deepslate'
).processingTime(400);

event.recipes.create.mixing(
  [
    Item.of('kubejs:impure_pileof_luminium_dust').withChance(0.25)
  ],
  [
    Fluid.of('kubejs:sulfuric_acid', 1000),
    Item.of('kubejs:non_ferrous_metal_slag', 9)
  ]
);

event.recipes.create.mixing(
  [
    Item.of('kubejs:aluminium_dust'),
    Item.of('kubejs:aluminium_dust').withChance(0.5)
  ],
  [
    Fluid.of('minecraft:water', 1000),
    'kubejs:impure_pileof_luminium_dust'
  ]
);

  //铝锭
  event.blasting('kubejs:aluminium_ingot', 'kubejs:aluminium_dust')
  event.blasting('kubejs:platinum_ingot', 'kubejs:platinum_dust')
  event.blasting('kubejs:titanium_ingot', 'kubejs:titanium_dust')       
  event.blasting('kubejs:silver_ingot', 'kubejs:silver_dust');       
  
  
  //不锈钢锭
  event.recipes.create.mixing(
    [
      Item.of('kubejs:stainless_steel_ingot', 9)
    ],
    [
      Item.of('kubejs:iron_dust', 6),
      Item.of('kubejs:manganese_dust', 1),//锰
      Item.of('kubejs:nickel_dust', 1),
      Item.of('kubejs:chrome_dust', 1)
    ]
  ).superheated();
  
  event.recipes.create.mixing(
    [
      Item.of('kubejs:impure_pile_of_platinum_metallic_powder_dust',2),
      Item.of('kubejs:platinum_group_sludge_dust', 5)
    ],
    [
      Fluid.of('kubejs:platinum_concentrate', 1000)
    ]
  ).superheated();
  
  event.recipes.create.mixing(
    [
      Item.of('kubejs:platinum_dust'),
      Item.of('kubejs:platinum_dust').withChance(0.5)
    ],
    [
      Fluid.of('minecraft:water', 1000),
      'kubejs:impure_pile_of_platinum_metallic_powder_dust'
    ]
  );
//硫酸铑
  event.recipes.create.mixing(
    [
      Fluid.of('kubejs:rhodium_sulfate', 1000)
    ],
    [
      Fluid.of('kubejs:sulfuric_acid', 1000),
      Item.of('kubejs:platinum_residue_dust', 16)
    ]
  );
  
  event.recipes.create.mixing(
    [
      Item.of('kubejs:rhodium_salt', 2).withChance(0.25)
    ],
    [
      Fluid.of('kubejs:rhodium_sulfate', 1000)
    ]
  ).heatRequirement('superheated');

  event.recipes.create.mixing(
    [
      Item.of('kubejs:crude_rhodium_metal_dust', 1).withChance(0.25),
      Item.of('braziliandelight:salt', 3),
      Item.of('braziliandelight:salt', 1).withChance(0.7)
    ],
    [
      Fluid.of('minecraft:water', 1000),
      Item.of('kubejs:rhodium_salt', 1)
    ]
  );
       
  event.recipes.create.mixing(
    [
      Item.of('kubejs:rhodium_dust', 1)
    ],
    [
      Fluid.of('minecraft:water', 1000),
      Item.of('kubejs:crude_rhodium_metal_dust', 1)
    ]
  );

  event.recipes.create.mixing(
    [
      Item.of('kubejs:palladium_salt_dust', 6)
    ],
    [
      Item.of('braziliandelight:salt', 3),
      Item.of('kubejs:platinum_group_sludge_dust', 3),
      Fluid.of('minecraft:water', 1000)
    ]
  );    
    
  event.recipes.create.mixing(
    [
      Item.of('kubejs:impure_pileof_alladium_metallic_dust_dust', 1),
    ],
    [
      Fluid.of('minecraft:water', 1000),
      Item.of('kubejs:palladium_salt_dust', 3)
    ]
  );


  event.recipes.create.mixing(
    [
      Item.of('kubejs:impure_pile_of_palladium_metallic_powder_dust', 1)
    ],
    [
      Fluid.of('minecraft:water', 1000),
      Item.of('kubejs:palladium_salt_dust', 3)
    ]
  );


  event.recipes.create.mixing(
    [
      Item.of('kubejs:palladium_dust', 1)
    ],
    [
      Fluid.of('minecraft:water', 1000),
      Item.of('kubejs:impure_pile_of_palladium_metallic_powder_dust', 1)
    ]
  );

  event.recipes.create.mixing(
    [
      Item.of('kubejs:rhodium_plated_palladium_ingot', 4)
    ],
    [
      Item.of('kubejs:palladium_dust', 1),
      Item.of('kubejs:rhodium_dust', 3)
    ]
  ).heatRequirement('superheated');
  
  event.recipes.create.mixing(
    [
      Item.of('kubejs:tungstensteel_ingot', 4)
    ],
    [
      Item.of('kubejs:tungsten_dust', 1),
      Item.of('kubejs:steel_ingot', 3)
    ]
  ).heatRequirement('superheated');

  event.recipes.create.milling(
    [
      Item.of('kubejs:naquadah_dust', 1).withChance(0.01),
      Item.of('kubejs:platinum_wetallic_powder_dust', 1).withChance(0.8)
    ],
    'minecraft:end_stone'
  ).processingTime(200 * 20);

  event.recipes.create.mixing(
    [
      Item.of('kubejs:naquadah_alloy_ingot', 5)
    ],
    [
      Item.of('kubejs:tungstensteel_ingot', 2),
      Item.of('kubejs:stainless_steel_ingot', 1),
      Item.of('kubejs:rhodium_plated_palladium_ingot', 2)
    ]
  ).heatRequirement('superheated');

  event.recipes.create.mixing(
    [
      Item.of('minecraft:magma_cream', 2).withChance(0.3),
      Item.of('minecraft:blaze_powder', 2).withChance(0.3),
      Item.of('minecraft:glowstone_dust', 4).withChance(0.4),
      Item.of('alexscaves:sulfur_dust', 5).withChance(0.5),
      Item.of('kubejs:tungsten_dust', 1).withChance(0.05)
    ],
    [
      Fluid.of('minecraft:lava', 1000),
      Item.of('minecraft:blue_ice', 5)
    ]
  );
  
  event.recipes.create.milling(
    [
      Item.of('kubejs:chrome_dust', 2).withChance(0.1),
      Item.of('kubejs:manganese_dust', 2).withChance(0.1),
      Item.of('kubejs:nickel_dust', 2).withChance(0.1),
      Item.of('kubejs:stone_dust', 2)
    ],
    Item.of('kubejs:light_metal_slag', 9)
  ).processingTime(200 * 20);

  //庆祝下，还要钛的银白金属渣线了

  //下面俩是机械手的
  //create.deploying(Item.of('mystias_izakaya:bing_kuai', 4),['minecraft:iron_axe','minecraft:ice']).keepHeldItem  //这个是必定输出
  event.recipes.create.deploying([
    Item.of('mystias_izakaya:bing_kuai', 4),                      // 固定输出
    Item.of('mystias_izakaya:bing_kuai').withChance(0.5)         // 50% 概率额外输出
  ], [
    'minecraft:ice',
    'minecraft:iron_axe'//铁斧
  ]).keepHeldItem();
//极上金枪鱼 开始
event.recipes.create.deploying([
  Item.of('mystias_izakaya:jin_qiang_yu', 10),// 固定输出
  Item.of('minecraft:bone_meal'),
  Item.of('aquaculture:fish_fillet_raw', 5),                      
  Item.of('mystias_izakaya:ji_shang_jin_qiang_yu').withChance(0.25)         // 50% 概率额外输出
], [
  'aquaculture:tuna',
  Item.of('aquaculture:stone_fillet_knife', '{Damage:0}')//刀
]).keepHeldItem();

event.recipes.create.deploying([
  Item.of('mystias_izakaya:jin_qiang_yu', 10),// 固定输出
  Item.of('minecraft:bone_meal'),
  Item.of('aquaculture:fish_fillet_raw', 5),                      
  Item.of('mystias_izakaya:ji_shang_jin_qiang_yu').withChance(0.25)         // 50% 概率额外输出
], [
  'aquaculture:tuna',
  Item.of('aquaculture:wooden_fillet_knife', '{Damage:0}')//刀
]).keepHeldItem();

  event.recipes.create.deploying([
    Item.of('mystias_izakaya:jin_qiang_yu', 10),// 固定输出
    Item.of('minecraft:bone_meal'),
    Item.of('aquaculture:fish_fillet_raw', 5),                      
    Item.of('mystias_izakaya:ji_shang_jin_qiang_yu').withChance(0.25)         // 50% 概率额外输出
  ], [
    'aquaculture:tuna',
    Item.of('aquaculture:iron_fillet_knife', '{Damage:0}')//铁刀
  ]).keepHeldItem();

  event.recipes.create.deploying([
    Item.of('mystias_izakaya:jin_qiang_yu', 10),// 固定输出
    Item.of('minecraft:bone_meal'),
    Item.of('aquaculture:fish_fillet_raw', 5),                      
    Item.of('mystias_izakaya:ji_shang_jin_qiang_yu').withChance(0.25)         // 50% 概率额外输出
  ], [
    'aquaculture:tuna',
    Item.of('aquaculture:gold_fillet_knife', '{Damage:0}')//金刀
  ]).keepHeldItem();
  event.recipes.create.deploying([
    Item.of('mystias_izakaya:jin_qiang_yu', 10),// 固定输出
    Item.of('minecraft:bone_meal'),
    Item.of('aquaculture:fish_fillet_raw', 5),                      
    Item.of('mystias_izakaya:ji_shang_jin_qiang_yu').withChance(0.25)         // 50% 概率额外输出
  ], [
    'aquaculture:tuna',
    Item.of('aquaculture:diamond_fillet_knife', '{Damage:0}')//钻石刀
  ]).keepHeldItem();
  event.recipes.create.deploying([
    Item.of('mystias_izakaya:jin_qiang_yu', 10),// 固定输出
    Item.of('minecraft:bone_meal'),
    Item.of('aquaculture:fish_fillet_raw', 5),                      
    Item.of('mystias_izakaya:ji_shang_jin_qiang_yu').withChance(0.25)         // 50% 概率额外输出
  ], [
    'aquaculture:tuna',
    'aquaculture:neptunium_fillet_knife'//海王刀
  ]).keepHeldItem();
//结束

  event.recipes.create.deploying([
    Item.of('mystias_izakaya:zun_yu', 4),
    Item.of('aquaculture:fish_fillet_raw', 5),  
    Item.of('minecraft:bone_meal'),                              
    Item.of('mystias_izakaya:zun_yu').withChance(0.5)         
  ], [
    'aquaculture:rainbow_trout',
    Item.of('farmersdelight:iron_knife', '{Damage:0}')
  ]).keepHeldItem();

  event.shaped(
    Item.of('mystias_izakaya:hei_mao_zhu_rou', 1),  
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'nethersdelight:hoglin_loin',      
      B: 'createaddition:electrum_nugget' 
    }
  )
  event.shaped(
    Item.of('mystias_izakaya:he_niu', 1),  
    [
      'AAA',
      'ABA',
      'AAA'
    ],
    {
      A: 'minecraft:beef',      
      B: 'createaddition:electrum_nugget' 
    }
  )

  event.recipes.create.mixing(
    [
      Item.of('kubejs:stone_dust', 1),
      Item.of('kubejs:silver_dust', 1).withChance(0.25),
      Item.of('kubejs:titanium_dust', 1).withChance(0.25),
      Item.of('kubejs:pile_of_fallout', 64).withChance(0.01)
    ],
    [
      Fluid.of('minecraft:water', 1000),
      Item.of('kubejs:silver_white_metal_residue')
    ]
  );

  event.recipes.create.milling(
    [Item.of('kubejs:silver_dust', 1)],   // 输出必须是数组
    'kubejs:silver_ingot'                 // 输入：1个银锭
  ).processingTime(200 * 20);             // 加工时间，单位 tick，这里是 200 秒

  event.recipes.create.mixing(
    [Item.of('createaddition:electrum_ingot', 2)],    // 输出：2个电镀金锭
    [
      Item.of('kubejs:silver_dust', 1),               // 输入：1个银粉
      Item.of('minecraft:gold_ingot', 1)              // 输入：1个金锭
    ]
  ).superheated();                                    // 超级加热
  
  
  







  });


 
  