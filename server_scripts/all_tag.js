/*
ServerEvents.tags('item', event => {
    event.add('forge:salt', 'ratatouille:salt');//乡村乐事盐
    event.add('forge:salt', 'hearthandharvest:salt'); //暖灶丰年盐
});

活爹乐事
Huodie's Delight
*/

ServerEvents.tags('item', event => {
    event.add('forge:plum', 'bountifulfares:plum');
    event.add('forge:plum', 'forestry:fruit_plum'); 

    event.add('forge:lime', 'muffins_thaidelight:lime'); 
    event.add('forge:lime', 'collectorsreap:lime'); 
    event.add('muffins_thaidelight:lime','collectorsreap:lime');

    event.add('forge:redbean', 'youkaishomecoming:redbean'); 
    event.add('forge:redbean', 'neapolitan:adzuki_beans'); 

    event.add('forge:mango', 'manors_bounty:mango'); 
    event.add('forge:mango', 'fruitsdelight:mango'); 

    event.add('forge:coconut', 'ecologics:coconut'); 
    event.add('forge:coconut', 'braziliandelight:coconut'); 

    event.add('forge:strawberry', 'manors_bounty:strawberry'); 
    event.add('forge:strawberry', 'neapolitan:strawberries'); 

    event.add('forge:white_strawberry', 'neapolitan:white_strawberries'); 
    event.add('forge:white_strawberry', 'manors_bounty:pineberry'); 

    event.add('forge:eggplant', 'culturaldelights:eggplant'); 
    event.add('forge:eggplant', 'minecolonies:eggplant'); 
    event.add('forge:eggplant', 'dumplings_delight:eggplant'); 

    event.add('forge:peach', 'manors_bounty:peach'); 
    event.add('forge:peach', 'fruitsdelight:peach'); 

    event.add('forge:coconut_slice', 'ecologics:coconut_slice'); 
    event.add('forge:coconut_slice', 'braziliandelight:coconut_slice'); 

    event.add('forge:hamimelon', 'manors_bounty:hamimelon'); 
    event.add('forge:hamimelon', 'fruitsdelight:hamimelon'); 
    
    event.add('forge:hm_slice', 'fruitsdelight:hamimelon_slice'); 
    event.add('forge:hm_slice', 'manors_bounty:hamimelon_slice'); 

    event.add('forge:pineapple_slice', 'manors_bounty:pineapple_slice'); 
    event.add('forge:pineapple_slice', 'fruitsdelight:pineapple_slice'); 

    event.add('forge:cranberry', 'fruitsdelight:cranberry'); 
    event.add('forge:cranberry', 'manors_bounty:cranberry'); 
    event.add('forge:cranberry', 'biologica:cranberry'); 

    event.add('forge:orange', 'bountifulfares:orange'); 
    event.add('forge:orange', 'fruitfulfun:orange'); 
    event.add('forge:orange', 'manors_bounty:orange'); 

    event.add('forge:orange2', 'fruitsdelight:orange'); 
    event.add('forge:orange2', 'fruitfulfun:tangerine'); 

    event.add('forge:cut_avocado', 'culturaldelights:cut_avocado'); 
    event.add('forge:cut_avocado', 'manors_bounty:half_of_avocado'); 

    event.add('forge:onion', 'farmersdelight:onion'); 
    event.add('forge:onion', 'minecolonies:onion'); 

    event.add('forge:yellow_papper', 'rusticdelight:bell_pepper_yellow'); 
    event.add('forge:yellow_papper', 'veggiesdelight:bellpepper'); 

    event.add('forge:green_papper', 'rusticdelight:bell_pepper_green'); 
    event.add('forge:green_papper', 'spanishdelight:green_pepper'); 

    event.add('forge:avocade', 'culturaldelights:avocado'); 
    event.add('forge:avocade', 'manors_bounty:avocado'); 

    event.add('forge:pear', 'fruitsdelight:pear'); 
    event.add('forge:pear', 'manors_bounty:pear'); 

    event.add('forge:cabbage', 'minecolonies:cabbage'); 
    event.add('forge:cabbage', 'farmersdelight:cabbage'); 

    event.add('forge:cooked_corn', 'corn_delight:grilled_corn'); 
    event.add('forge:cooked_corn', 'braziliandelight:cooked_corn'); 

    event.add('forge:pod', 'braziliandelight:bean_pod'); 
    event.add('forge:pod', 'youkaishomecoming:pods'); 

    event.add('forge:hazelnut', 'wildernature:hazelnut'); 
    event.add('forge:hazelnut', 'manors_bounty:filbert'); 

    event.add('forge:truffle', 'manors_bounty:truffle'); 
    event.add('forge:truffle', 'wildernature:truffle'); 

    event.add('forge:rice', 'farmersdelight:rice'); 
    event.add('forge:rice', 'minecolonies:rice'); 

    event.add('forge:pitaya', 'manors_bounty:dragon_fruit'); 
    event.add('forge:pitaya', 'nethers_exoticism:pitaya'); 

    event.add('forge:cooked_venison', 'wildernature:cooked_venison'); 
    event.add('forge:cooked_venison', 'naturalist:cooked_venison'); 

    event.add('forge:venison', 'wildernature:venison'); 
    event.add('forge:venison', 'naturalist:venison'); 

    event.add('forge:turkey', 'wildernature:turkey_meat'); 
    event.add('forge:turkey', 'bountifulharvest:raw_turkey'); 

    event.add('forge:cooked_turkey', 'wildernature:cooked_turkey_meat'); 
    event.add('forge:cooked_tirkey', 'bountifulharvest:cooked_turkey'); 

    event.add('forge:peanut', 'hearthandharvest:peanut'); 
    event.add('forge:peanut', 'vintagedelight:peanut'); 

    event.add('forge:cassava_flour', 'braziliandelight:cassava_flour'); 
    event.add('forge:cassava_flour', 'createcafe:tapioca_flour'); 

    event.add('forge:red_grape', 'hearthandharvest:red_grapes'); 
    event.add('forge:red_grape', 'vinery:red_grape'); 

    event.add('forge:pickle', 'culturaldelights:pickle'); 
    event.add('forge:pickle', 'vintagedelight:pickle'); 

    event.add('forge:cooked_squid', 'culturaldelights:cooked_squid'); 
    event.add('forge:cooked_squid', 'miners_delight:baked_squid'); 

    event.add('forge:glow_squid', 'culturaldelights:glow_squid'); 
    event.add('forge:glow_squid', 'miners_delight:glow_squid'); 

    event.add('forge:squid', 'culturaldelights:squid'); 
    event.add('forge:squid', 'miners_delight:squid'); 

    event.add('forge:squid_tentacles', 'kubejs:glow_squid_tentacles'); //要更改
    event.add('forge:squid_tentacles', 'oceanic_delight:glow_squid_tentacles'); 
    event.add('forge:squid_tentacles', 'crabbersdelight:raw_glow_squid_tentacles'); 
//完成了上面的
    event.add('forge:duck', 'naturalist:duck'); 
    event.add('forge:duck', 'untitledduckmod:raw_duck'); 

    event.add('forge:cooked_duck', 'untitledduckmod:cooked_duck'); 
    event.add('forge:cooked_duck', 'naturalist:cooked_duck'); 

    event.add('forge:soybean', 'minecolonies:soybean'); 
    event.add('forge:soybean', 'vegandelight:soybean'); 

    event.add('forge:ginko', 'unusualprehistory:ginkgo_fruit'); 
    event.add('forge:ginko', 'prehistoricfauna:ginkgo_berry'); 

    event.add('forge:cooked_ginko', 'unusualprehistory:cooked_ginkgo_seeds'); 
    event.add('forge:cooked_ginko', 'prehistoricfauna:cooked_ginkgo_nuts'); 

    event.add('forge:green_tea', 'farmersrespite:green_tea_leaves'); 
    event.add('forge:green_tea', 'youkaishomecoming:green_tea_leaves'); 

    event.add('forge:red_tea', 'farmersrespite:black_tea_leaves'); 
    event.add('forge:red_tea', 'youkaishomecoming:black_tea_leaves'); 

    event.add('forge:green_grape', 'hearthandharvest:green_grapes'); 
    event.add('forge:green_grape', 'vinery:white_grape'); 

    event.add('forge:cassava', 'braziliandelight:cassava_root'); 
    event.add('forge:cassava', 'create_deepfried:yuca'); 
    event.add('forge:cassava', 'createcafe:cassava_root'); 

    event.add('forge:cooked_prawn', 'manors_bounty:cooked_prawn'); 
    event.add('forge:cooked_prawn', 'crabbersdelight:cooked_shrimp'); 
    event.add('forge:cooked_prawn', 'braziliandelight:cooked_shrimp'); 

    event.add('forge:red_papper', 'spanishdelight:red_pepper'); 
    event.add('forge:red_papper', 'minecolonies:bell_pepper'); 
    event.add('forge:red_papper', 'rusticdelight:bell_pepper_red'); 

    event.add('forge:walnut', 'forestry:fruit_walnut'); 
    event.add('forge:walnut', 'ecologics:walnut'); 
    event.add('forge:walnut', 'bountifulfares:walnut'); 

    event.add('forge:kiwi', 'manors_bounty:kiwifruit'); 
    event.add('forge:kiwi', 'fruitsdelight:kiwi'); 
    event.add('forge:kiwi', 'jagmkiwis:kiwi_fruit'); 

    event.add('forge:blueberry', 'fruitsdelight:blueberry'); 
    event.add('forge:blueberry', 'hearthandharvest:blueberries'); 
    event.add('forge:blueberry', 'manors_bounty:blueberry'); 

    event.add('forge:mint', 'neapolitan:mint_leaves'); 
    event.add('forge:mint', 'minecolonies:mint'); 

    event.add('forge:sweet_potato', 'argentinas_delight:batata'); 
    event.add('forge:sweet_potato', 'veggiesdelight:sweet_potato'); 
    event.add('forge:sweet_potato', 'bountifulharvest:sweet_potato'); 

    event.add('forge:pineapple', 'fruitsdelight:pineapple'); 
    event.add('forge:pineapple', 'manors_bounty:pineapple'); 
    event.add('forge:pineapple', 'pineapple_delight:pineapple'); 

    event.add('forge:corn_seeds', 'braziliandelight:kernels'); 
    event.add('forge:corn_seeds', 'manors_bounty:corn_seed'); 
    event.add('forge:corn_seeds', 'corn_delight:corn_seeds'); 

    event.add('forge:flour', 'create:wheat_flour'); 
    event.add('forge:flour', 'foragersinsight:wheat_flour'); 
    event.add('forge:flour', 'bountifulfares:flour'); 
    event.add('forge:flour', 'argentinas_delight:harinadetrigo'); 

    event.add('forge:acorn', 'seeddelight:acorn'); 
    event.add('forge:acorn', 'delightful:acorn'); 
    event.add('forge:acorn', 'manors_bounty:acorn'); 

    event.add('forge:rose_hip', 'farmersrespite:rose_hips'); 
    event.add('forge:rose_hip', 'seeddelight:rosehip'); 
    event.add('forge:rose_hip', 'foragersinsight:rose_hip'); 

    event.add('forge:apple_slices', 'some_assembly_required:apple_slices'); 
    event.add('forge:apple_slices', 'foragersinsight:apple_slice'); 
    event.add('forge:apple_slices', 'create_deepfried:apple_slices'); 
    event.add('forge:apple_slices', 'manors_bounty:apple_slice'); 

    event.add('forge:tofu', 'vegandelight:tofu'); 
    event.add('forge:tofu', 'youkaishomecoming:tofu'); 
    event.add('forge:tofu', 'minecolonies:tofu'); 

    event.add('forge:cooked_calamari', 'culturaldelights:cooked_calamari'); 
    event.add('forge:cooked_calamari', 'oceanic_delight:grilled_squid_tentacles'); 
    event.add('forge:cooked_calamari', 'miners_delight:baked_tentacles'); 
    event.add('forge:cooked_calamari', 'crabbersdelight:cooked_squid_tentacles'); 
    event.add('forge:cooked_calamari', 'rusticdelight:cooked_calamari'); 

    event.add('forge:cherry', 'vinery:cherry'); 
    event.add('forge:cherry', 'hearthandharvest:cherry'); 
    event.add('forge:cherry', 'seeddelight:cherry'); 
    event.add('forge:cherry', 'forestry:fruit_cherry'); 
    event.add('forge:cherry', 'fruitfulfun:cherry'); 

    event.add('forge:salt2', 'braziliandelight:salt'); 
    event.add('forge:salt2', 'vintagedelight:salt_dust'); 
    event.add('forge:salt2', 'vegandelight:salt'); 
    event.add('forge:salt2', 'unusualfoodsdelight:salt'); 
    event.add('forge:salt2', 'ratatouille:salt'); 
    event.add('forge:salt2', 'hearthandharvest:salt'); 

    event.add('forge:coffee_beans', 'braziliandelight:coffee_beans'); 
    event.add('forge:coffee_beans', 'youkaishomecoming:coffee_beans'); 
    event.add('forge:coffee_beans', 'rusticdelight:coffee_beans'); 
    event.add('forge:coffee_beans', 'coffee_delight:coffee_beans'); 
    event.add('forge:coffee_beans', 'createcafe:coffee_beans'); 
    event.add('forge:coffee_beans', 'farmersrespite:coffee_bush'); 

    event.add('forge:corn', 'braziliandelight:corn'); 
    event.add('forge:corn', 'argentinas_delight:choclo'); 
    event.add('forge:corn', 'corn_delight:corn'); 
    event.add('forge:corn', 'culturaldelights:corn_cob'); 
    event.add('forge:corn', 'manors_bounty:corn');
    event.add('forge:corn', 'bountifulfares:maize'); 
    event.add('forge:corn', 'minecolonies:corn'); 

    event.add('forge:shrimp', 'braziliandelight:shrimp'); 
    event.add('forge:shrimp', 'manors_bounty:raw_prawn'); 
    event.add('forge:shrimp', 'crabbersdelight:shrimp'); 
    event.add('forge:shrimp', 'oceanic_delight:shrimp'); 

    event.add('forge:lemon', 'fruitsdelight:lemon'); 
    event.add('forge:lemon', 'fruitfulfun:lemon'); 
    event.add('forge:lemon', 'bountifulfares:lemon'); 
    event.add('forge:lemon', 'manors_bounty:lemon');
    event.add('forge:lemon', 'braziliandelight:lemon'); 
    event.add('forge:lemon', 'forestry:fruit_lemon'); 

    event.add('forge:garlic', 'braziliandelight:garlic_bulb'); 
    event.add('forge:garlic', 'minecolonies:garlic'); 
    event.add('forge:garlic', 'ubesdelight:garlic'); 
    event.add('forge:garlic', 'dumplings_delight:garlic'); 
    event.add('forge:garlic', 'spanishdelight:garlic'); 
    event.add('forge:garlic', 'manors_bounty:garlic'); 
    event.add('forge:garlic', 'veggiesdelight:garlic');

    event.add('forge:calamari2', 'culturaldelights:raw_calamari'); 
    event.add('forge:calamari2', 'miners_delight:tentacles');
    event.add('forge:calamari2', 'dumplings_delight:calamari'); 
    event.add('forge:calamari2', 'rusticdelight:calamari'); 
    event.add('forge:calamari2', 'oceanic_delight:squid_tentacles'); 
    event.add('forge:calamari2', 'oceansdelight:tentacles'); 
    event.add('forge:calamari2', 'crabbersdelight:raw_squid_tentacles'); 

    event.add('forge:cucumber', 'vintagedelight:cucumber');
    event.add('forge:cucumber', 'culturaldelights:cucumber'); 

    event.add('fabric:cheese', 'argentinas_delight:queso'); 
    event.add('fabric:cheese', 'pizzadelight:cheese'); 

    event.add('forge:butter', 'gourmet:butter'); 
    event.add('forge:butter', 'braziliandelight:butter'); 
    event.add('forge:butter', 'youkaishomecoming:butter'); 

    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', '');
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', '');
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', '');
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', ''); 
    event.add('forge:', '');

    event.add('neoforge:', ''); 
    event.add('fabric:', ''); 
    event.add('forge:','');
    event.add('quilt:','')
    event.add('liteloader:', '');
    event.add('optfine:','')
});