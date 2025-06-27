/*
EntityEvents.spawned(event => {
    const entity = event.entity;
    if (!entity.item) return; 
    if (entity.item.id === 'manors_bounty:strawberry') {
      entity.item = Item.of('neapolitan:strawberries', entity.item.count);
    }
  });

  EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === '') {
    entity.item = Item.of('', entity.item.count);
  }
});
  
*/

EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'forestry:fruit_plum') {
    entity.item = Item.of('bountifulfares:plum', entity.item.count);
  }
});

/*
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'muffins_thaidelight:lime') {
    entity.item = Item.of('collectorsreap:lime', entity.item.count);
  }
});
*/
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:redbean') {
    entity.item = Item.of('neapolitan:adzuki_beans', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:mango') {
    entity.item = Item.of('fruitsdelight:mango', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'ecologics:coconut') {
    entity.item = Item.of('braziliandelight:coconut', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:strawberry') {
    entity.item = Item.of('neapolitan:strawberries', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:pineberry') {
    entity.item = Item.of('neapolitan:white_strawberries', entity.item.count);
  }
});
//茄子
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:eggplant') {
    entity.item = Item.of('culturaldelights:eggplant', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'dumplings_delight:eggplant') {
    entity.item = Item.of('culturaldelights:eggplant', entity.item.count);
  }
});

EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:peach') {
    entity.item = Item.of('fruitsdelight:peach', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'ecologics:coconut_slice') {
    entity.item = Item.of('braziliandelight:coconut_slice', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:hamimelon') {
    entity.item = Item.of('fruitsdelight:hamimelon', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:hamimelon_slice') {
    entity.item = Item.of('fruitsdelight:hamimelon_slice');
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:pineapple_slice') {
    entity.item = Item.of('fruitsdelight:pineapple_slice');
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'biologica:cranberry') {
    entity.item = Item.of('fruitsdelight:cranberry');
  }
});
  EntityEvents.spawned(event => {
    const entity = event.entity;
    if (!entity.item) return; 
    if (entity.item.id === 'manors_bounty:cranberry') {
      entity.item = Item.of('fruitsdelight:cranberry');
    }
  //橙子
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'fruitfulfun:orange') {
    entity.item = Item.of('bountifulfares:orange', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:orange') {
    entity.item = Item.of('bountifulfares:orange', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'fruitfulfun:tangerine') {
    entity.item = Item.of('fruitsdelight:orange', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:half_of_avocado') {
    entity.item = Item.of('culturaldelights:cut_avocado', entity.item.count);
  }
});

EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:onion') {
    entity.item = Item.of('farmersdelight:onion', entity.item.count);
  }
});

EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'veggiesdelight:bellpepper') {
    entity.item = Item.of('rusticdelight:bell_pepper_yellow', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'spanishdelight:green_pepper') {
    entity.item = Item.of('rusticdelight:bell_pepper_green', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:avocado') {
    entity.item = Item.of('culturaldelights:avocado', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:cabbage') {
    entity.item = Item.of('farmersdelight:cabbage', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:pear') {
    entity.item = Item.of('fruitsdelight:pear', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'corn_delight:grilled_corn') {
    entity.item = Item.of('braziliandelight:cooked_corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:pods') {
    entity.item = Item.of('braziliandelight:bean_pod', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:filbert') {
    entity.item = Item.of('wildernature:hazelnut', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:truffle') {
    entity.item = Item.of('wildernature:truffle', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:rice') {
    entity.item = Item.of('farmersdelight:rice', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:dragon_fruit') {
    entity.item = Item.of('nethers_exoticism:pitaya', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'naturalist:cooked_venison') {
    entity.item = Item.of('wildernature:cooked_venison', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'bountifulharvest:raw_turkey') {
    entity.item = Item.of('wildernature:turkey_meat', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'naturalist:venison') {
    entity.item = Item.of('wildernature:venison', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'bountifulharvest:cooked_turkey') {
    entity.item = Item.of('wildernature:cooked_turkey_meat', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'hearthandharvest:peanut') {
    entity.item = Item.of('vintagedelight:peanut', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'createcafe:tapioca_flour') {
    entity.item = Item.of('braziliandelight:cassava_flour', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'hearthandharvest:red_grapes') {
    entity.item = Item.of('vinery:red_grape', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'vintagedelight:pickle') {
    entity.item = Item.of('culturaldelights:pickle', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'miners_delight:baked_squid') {
    entity.item = Item.of('culturaldelights:cooked_squid', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'miners_delight:glow_squid') {
    entity.item = Item.of('culturaldelights:glow_squid', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'miners_delight:squid') {
    entity.item = Item.of('culturaldelights:squid', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'crabbersdelight:raw_glow_squid_tentacles') {
    entity.item = Item.of('oceanic_delight:glow_squid_tentacles', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'naturalist:duck') {
    entity.item = Item.of('untitledduckmod:raw_duck', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'naturalist:cooked_duck') {
    entity.item = Item.of('untitledduckmod:cooked_duck', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:soybean') {
    entity.item = Item.of('vegandelight:soybean', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'prehistoricfauna:ginkgo_berry') {//入
    entity.item = Item.of('unusualprehistory:ginkgo_fruit', entity.item.count);//出
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'prehistoricfauna:cooked_ginkgo_nuts') {
    entity.item = Item.of('unusualprehistory:cooked_ginkgo_seeds', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:green_tea_leaves') {
    entity.item = Item.of('farmersrespite:green_tea_leaves', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:black_tea_leaves') {
    entity.item = Item.of('farmersrespite:black_tea_leaves', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'hearthandharvest:green_grapes') {
    entity.item = Item.of('vinery:white_grape', entity.item.count);
  }
});
//木薯
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'create_deepfried:yuca') {
    entity.item = Item.of('braziliandelight:cassava_root', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'createcafe:cassava_root') {
    entity.item = Item.of('braziliandelight:cassava_root', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:cooked_prawn') {
    entity.item = Item.of('braziliandelight:cooked_shrimp', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'crabbersdelight:cooked_shrimp') {
    entity.item = Item.of('braziliandelight:cooked_shrimp', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'spanishdelight:red_pepper') {
    entity.item = Item.of('rusticdelight:bell_pepper_red', entity.item.count);
  }
  
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:bell_pepper') {
    entity.item = Item.of('rusticdelight:bell_pepper_red', entity.item.count);
  }
});

EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'forestry:fruit_walnut') {
    entity.item = Item.of('bountifulfares:walnut', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'ecologics:walnut') {
    entity.item = Item.of('bountifulfares:walnut', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'hearthandharvest:blueberries') {
    entity.item = Item.of('fruitsdelight:blueberry', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:kiwifruit') {
    entity.item = Item.of('fruitsdelight:kiwi', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'jagmkiwis:kiwi_fruit') {
    entity.item = Item.of('fruitsdelight:kiwi', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:blueberry') {
    entity.item = Item.of('fruitsdelight:blueberry', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:mint') {
    entity.item = Item.of('neapolitan:mint_leaves', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'argentinas_delight:batata') {
    entity.item = Item.of('veggiesdelight:sweet_potato', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'bountifulharvest:sweet_potato') {
    entity.item = Item.of('veggiesdelight:sweet_potato', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'pineapple_delight:pineapple') {
    entity.item = Item.of('fruitsdelight:pineapple', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:pineapple') {
    entity.item = Item.of('fruitsdelight:pineapple', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'corn_delight:corn_seeds') {
    entity.item = Item.of('braziliandelight:kernels', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:corn_seed') {
    entity.item = Item.of('braziliandelight:kernels', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'create:wheat_flour') {
    entity.item = Item.of('bountifulfares:flour', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'foragersinsight:wheat_flour') {
    entity.item = Item.of('bountifulfares:flour', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'argentinas_delight:harinadetrigo') {
    entity.item = Item.of('bountifulfares:flour', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:acorn') {
    entity.item = Item.of('seeddelight:acorn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'delightful:acorn') {
    entity.item = Item.of('seeddelight:acorn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'farmersrespite:rose_hips') {
    entity.item = Item.of('seeddelight:rosehip', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'foragersinsight:rose_hip') {
    entity.item = Item.of('seeddelight:rosehip', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'foragersinsight:apple_slice') {
    entity.item = Item.of('some_assembly_required:apple_slices', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'create_deepfried:apple_slices') {
    entity.item = Item.of('some_assembly_required:apple_slices', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:apple_slice') {
    entity.item = Item.of('some_assembly_required:apple_slices', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:tofu') {
    entity.item = Item.of('vegandelight:tofu', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:tofu') {
    entity.item = Item.of('vegandelight:tofu', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'oceanic_delight:grilled_squid_tentacles') {
    entity.item = Item.of('culturaldelights:cooked_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'miners_delight:baked_tentacles') {
    entity.item = Item.of('culturaldelights:cooked_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'crabbersdelight:cooked_squid_tentacles') {
    entity.item = Item.of('culturaldelights:cooked_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'rusticdelight:cooked_calamari') {
    entity.item = Item.of('culturaldelights:cooked_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'hearthandharvest:cherry') {
    entity.item = Item.of('vinery:cherry', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'seeddelight:cherry') {
    entity.item = Item.of('vinery:cherry', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'forestry:fruit_cherry') {
    entity.item = Item.of('vinery:cherry', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'fruitfulfun:cherry') {
    entity.item = Item.of('vinery:cherry', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'vintagedelight:salt_dust') {
    entity.item = Item.of('braziliandelight:salt', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'vegandelight:salt') {
    entity.item = Item.of('braziliandelight:salt', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'unusualfoodsdelight:salt') {
    entity.item = Item.of('braziliandelight:salt', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'ratatouille:salt') {
    entity.item = Item.of('braziliandelight:salt', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'hearthandharvest:salt') {
    entity.item = Item.of('braziliandelight:salt', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:coffee_beans') {
    entity.item = Item.of('braziliandelight:coffee_beans', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'rusticdelight:coffee_beans') {
    entity.item = Item.of('braziliandelight:coffee_beans', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'coffee_delight:coffee_beans') {
    entity.item = Item.of('braziliandelight:coffee_beans', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'createcafe:coffee_beans') {
    entity.item = Item.of('braziliandelight:coffee_beans', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'farmersrespite:coffee_bush') {
    entity.item = Item.of('braziliandelight:coffee_beans', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'argentinas_delight:choclo') {
    entity.item = Item.of('braziliandelight:corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'corn_delight:corn') {
    entity.item = Item.of('braziliandelight:corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'culturaldelights:corn_cob') {
    entity.item = Item.of('braziliandelight:corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:corn') {
    entity.item = Item.of('braziliandelight:corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'bountifulfares:maize') {
    entity.item = Item.of('braziliandelight:corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:corn') {
    entity.item = Item.of('braziliandelight:corn', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:raw_prawn') {
    entity.item = Item.of('braziliandelight:shrimp', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'crabbersdelight:shrimp') {
    entity.item = Item.of('braziliandelight:shrimp', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'oceanic_delight:shrimp') {
    entity.item = Item.of('braziliandelight:shrimp', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'fruitfulfun:lemon') {
    entity.item = Item.of('fruitsdelight:lemon', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'bountifulfares:lemon') {
    entity.item = Item.of('fruitsdelight:lemon', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:lemon') {
    entity.item = Item.of('fruitsdelight:lemon', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'braziliandelight:lemon') {
    entity.item = Item.of('fruitsdelight:lemon', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'forestry:fruit_lemon') {
    entity.item = Item.of('fruitsdelight:lemon', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'minecolonies:garlic') {
    entity.item = Item.of('braziliandelight:garlic_bulb', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'ubesdelight:garlic') {
    entity.item = Item.of('braziliandelight:garlic_bulb', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'dumplings_delight:garlic') {
    entity.item = Item.of('braziliandelight:garlic_bulb', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'spanishdelight:garlic') {
    entity.item = Item.of('braziliandelight:garlic_bulb', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'manors_bounty:garlic') {
    entity.item = Item.of('braziliandelight:garlic_bulb', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'veggiesdelight:garlic') {
    entity.item = Item.of('braziliandelight:garlic_bulb', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'miners_delight:tentacles') {
    entity.item = Item.of('culturaldelights:raw_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'dumplings_delight:calamari') {
    entity.item = Item.of('culturaldelights:raw_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'rusticdelight:calamari') {
    entity.item = Item.of('culturaldelights:raw_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'oceanic_delight:squid_tentacles') {
    entity.item = Item.of('culturaldelights:raw_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'oceansdelight:tentacles') {
    entity.item = Item.of('culturaldelights:raw_calamari', entity.item.count);
  }
});

EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'crabbersdelight:raw_squid_tentacles') {
    entity.item = Item.of('culturaldelights:raw_calamari', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'vintagedelight:cucumber') {
    entity.item = Item.of('culturaldelights:cucumber', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'argentinas_delight:queso') {
    entity.item = Item.of('pizzadelight:cheese', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'youkaishomecoming:butter') {
    entity.item = Item.of('braziliandelight:butter', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === 'gourmet:butter') {
    entity.item = Item.of('braziliandelight:butter', entity.item.count);
  }
});
/*
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === '') {
    entity.item = Item.of('', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === '') {
    entity.item = Item.of('', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === '') {
    entity.item = Item.of('', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === '') {
    entity.item = Item.of('', entity.item.count);
  }
});
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (!entity.item) return; 
  if (entity.item.id === '') {
    entity.item = Item.of('', entity.item.count);
  }
});
*/

