//钢锭
StartupEvents.registry('item', event => {

 event.create('ancient_gold_coin')
      .displayName('上古金币')
      .tooltip('币值:***\n从上古遗迹中挖掘出来的金币\n没有市场流通价值但及其昂贵')
      .texture('kubejs:item/8') 
      .rarity('epic')
      .maxStackSize(64)

  event.create('steel_ingot')
    .displayName('钢锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/ingot_steel') 
    .rarity('common')
    .maxStackSize(64)

    //铝锭
    event.create('aluminium_ingot')
    .displayName('铝锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/aluminium_ingot') 
    .rarity('common')
    .maxStackSize(64)
    //不锈钢锭
    event.create('stainless_steel_ingot')
    .displayName('不锈钢锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/stainless_steel_ingot') 
    .rarity('common')
    .maxStackSize(64)

    //钛锭
    event.create('titanium_ingot')
    .displayName('钛锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/titanium_ingot') 
    .rarity('common')
    .maxStackSize(64)

    //镀铑钯锭
    event.create('rhodium_plated_palladium_ingot')
    .displayName('镀铑钯锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/rhodium_plated_palladium_ingot') 
    .rarity('common')
    .maxStackSize(64)
    
    //钨钢锭
    event.create('tungstensteel_ingot')
    .displayName('钨钢锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/tungstensteel_ingot') 
    .rarity('common')
    .maxStackSize(64)

    //硅岩合金锭
    event.create('naquadah_alloy_ingot')
    .displayName('硅岩合金锭')
    .tooltip('各种各样的锭')
    .texture('kubejs:item/gt/naquadah_alloy_ingot') 
    .rarity('common')
    .maxStackSize(64)

//铁粉
    event.create('iron_dust')
      .displayName('铁粉')
      .tooltip('各种各样的粉')
      .texture('kubejs:item/gt/iron_dust') 
      .rarity('common')
      .maxStackSize(64)
//铂金属粉粉
      event.create('platinum_wetallic_powder_dust')
      .displayName('铂金属粉粉')
      .tooltip('各种各样的粉')
      .texture('kubejs:item/gcy/1') 
      .rarity('common')
      .maxStackSize(64)
//铂渣粉
      event.create('platinum_residue_dust')
      .displayName('铂渣粉')
      .tooltip('各种各样的粉')
      .texture('kubejs:item/gcy/2') 
      .rarity('common')
      .maxStackSize(64)
//浸出渣粉
    event.create('leach_residue_dust')
    .displayName('浸出渣粉')
    .tooltip('各种各样的粉')
    .texture('kubejs:item/gcy/3') 
    .rarity('common')
    .maxStackSize(64)
//稀有金属渣粉
      event.create('prarest_metal_residue_dust')
      .displayName('稀有金属渣粉')
      .tooltip('各种各样的粉')
      .texture('kubejs:item/gcy/4') 
      .rarity('common')
      .maxStackSize(64)
//金属渣
      event.create('metallic_slag')
      .displayName('金属渣')
      .tooltip('含有金属的残渣')
      .texture('kubejs:item/gt/metallic_slag') 
      .rarity('common')
      .maxStackSize(64)
 
 //金属渣
      event.create('compressed_cobblestone')
      .displayName('压缩圆石')
      .tooltip('1:9')
      .texture('kubejs:item/gt/compressed_cobblestone') 
      .rarity('common')
      .maxStackSize(64)

//放射性粉末
      event.create('pile_of_fallout')
      .displayName('放射性粉末')
      .tooltip('不必在意')
      .texture('kubejs:item/gt/pile_of_fallout') 
      .rarity('common')
      .maxStackSize(64)
//钍
      event.create('raw_thorium')
      .displayName('粗提取钍')
      .tooltip('Th?')
      .texture('kubejs:item/gt/raw_thorium') 
      .rarity('common')
      .maxStackSize(64)
//钍
      event.create('thorium')
      .displayName('金属钍')
      .tooltip('Th')
      .texture('kubejs:item/gt/thorium') 
      .rarity('common')
      .maxStackSize(64)
//硫粉
      event.create('sulfur_dust')
      .displayName('硫粉')
      .texture('kubejs:item/gt/sulfur_dust') 
      .rarity('common')
      .maxStackSize(64)
//酸蚀粉末
      event.create('sure_corrosion_powder')
      .displayName('酸蚀粉末')
      .texture('kubejs:item/gt/sure_corrosion_powder') 
      .rarity('common')
      .maxStackSize(64)

      //
      event.create('suspicious_uranium_slag')
      .displayName('可疑的含铀矿渣')
      .texture('kubejs:item/gt/suspicious_uranium_slag') 
      .rarity('common')
      .maxStackSize(64)
      
      event.create('uranium_crystals')
      .displayName('铀晶体')
      .texture('kubejs:item/gt/uranium_crystals') 
      .rarity('common')
      .maxStackSize(64)

      event.create('plant_residue')
      .displayName('植物残渣')
      .texture('kubejs:item/xyn/plant_residue') 
      .rarity('common')
      .maxStackSize(64)

      event.create('plant_extract_crystallization')
      .displayName('植物提取物晶体')
      .texture('kubejs:item/xyn/plant_extract_crystallization') 
      .rarity('common')
      .maxStackSize(64)
      

      event.create('estradiol_powder')
      .displayName('雌二醇粉末')
      .texture('kubejs:item/xyn/estradiol_powder') 
      .rarity('common')
      .maxStackSize(64)

      event.create('tungstensteel_apple')
      .displayName('钨钢苹果')
      .texture('kubejs:item/gtfo/tungstensteel_apple') 
      .rarity('common')
      .maxStackSize(64)

      event.create('gtfologo')
      .displayName('GTFOlogo')
      .texture('kubejs:item/gtfo/gtfologo') 
      .rarity('common')
      .maxStackSize(64)
      
      event.create('chrome_dust')
      .displayName('铬粉')
      .texture('kubejs:item/gt/chrome_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('nickel_dust')
      .displayName('镍粉')
      .texture('kubejs:item/gt/nickel_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('manganese_dust')
      .displayName('锰粉')
      .texture('kubejs:item/gt/manganese_dust') 
      .rarity('common')
      .maxStackSize(64)
      
      event.create('stone_dust')
      .displayName('石粉')
      .texture('kubejs:item/gt/stone_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('light_metal_slag')
      .displayName('轻金属残渣')
      .texture('kubejs:item/gt/light_metal_slag') 
      .rarity('common')
      .maxStackSize(64)

      event.create('non_ferrous_metal_slag')
      .displayName('有色金属渣')
      .texture('kubejs:item/gt/non_ferrous_metal_slag') 
      .rarity('common')
      .maxStackSize(64)

      event.create('silver_white_metal_residue')
      .displayName('银白金属渣')
      .texture('kubejs:item/gt/silver_white_metal_residue') 
      .rarity('common')
      .maxStackSize(64)

      event.create('impure_pileof_luminium_dust')
      .displayName('污浊铝粉')
      .texture('kubejs:item/gt/impure_pileof_luminium_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('aluminium_dust')
      .displayName('铝粉')
      .texture('kubejs:item/gt/aluminium_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('titanium_dust')
      .displayName('钛粉')
      .texture('kubejs:item/gt/titanium_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('tungsten_dust')
      .displayName('钨粉')
      .texture('kubejs:item/gt/tungsten_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('platinum_group_sludge_dust')
      .displayName('铂系矿泥')
      .texture('kubejs:item/gt/platinum_group_sludge_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('impure_pile_of_platinum_metallic_powder_dust')
      .displayName('含杂铂粉')
      .texture('kubejs:item/gt/impure_pile_of_platinum_metallic_powder_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('platinum_dust')
      .displayName('铂粉')
      .texture('kubejs:item/gt/platinum_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('platinum_ingot')
      .displayName('铂锭')
      .texture('kubejs:item/gt/platinum_ingot') 
      .rarity('common')
      .maxStackSize(64)
/*
      event.create('rhodium_ingot')
      .displayName('铑锭')
      .texture('kubejs:item/gt/rhodium_ingot') 
      .rarity('common')
      .maxStackSize(64)
*/
      event.create('rhodium_salt')
      .displayName('铑盐')
      .texture('kubejs:item/gt/rhodium_salt') 
      .rarity('common')
      .maxStackSize(64)

      event.create('crude_rhodium_metal_dust')
      .displayName('粗制铑金属粉')
      .texture('kubejs:item/gt/crude_rhodium_metal_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('rhodium_dust')
      .displayName('铑粉')
      .texture('kubejs:item/gt/rhodium_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('palladium_salt_dust')
      .displayName('钯盐')
      .texture('kubejs:item/gt/palladium_salt_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('impure_pile_of_palladium_metallic_powder_dust')
      .displayName('含杂钯粉')
      .texture('kubejs:item/gt/impure_pile_of_palladium_metallic_powder_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('palladium_dust')
      .displayName('钯粉')
      .texture('kubejs:item/gt/palladium_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('naquadah_dust')
      .displayName('硅岩粉')
      .texture('kubejs:item/gt/naquadah_dust') 
      .rarity('common')
      .maxStackSize(64)

      event.create('lifeafter_logo')
      .displayName('lifeafter_logo')
      .texture('kubejs:item/gcy/1') 
      .rarity('common')
      .maxStackSize(64)

      event.create('silver_dust')
      .displayName('银粉')
      .texture('kubejs:item/gt/silver_dust') 
      .rarity('common')
      .maxStackSize(64)


      event.create('silver_ingot')
      .displayName('银锭')
      .texture('kubejs:item/gt/rhodium_plated_palladium_ingot') 
      .rarity('common')
      .maxStackSize(64)
 /*     
      event.create('')
      .displayName('')
      .texture('kubejs:item/gt/') 
      .rarity('common')
      .maxStackSize(64)


      event.create('')
      .displayName('')
      .texture('kubejs:item/gt/') 
      .rarity('common')
      .maxStackSize(64)
 */
 });

 