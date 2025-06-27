//删的 //不写注释是入，反正这玩意语法小学生没什么难度
recipes.remove(<item:mystias_izakaya:en_10>);
recipes.remove(<item:mystias_izakaya:yang_cong>);
recipes.remove(<item:mystias_izakaya:pu_tao>);
recipes.remove(<item:mystias_izakaya:pang_xie>);
recipes.remove(<item:mystias_izakaya:ba_mu_man>);
recipes.remove(<item:mystias_izakaya:nan_gua>);
recipes.remove(<item:mystias_izakaya:di_gua>);
recipes.remove(<item:mystias_izakaya:bing_kuai>);
recipes.remove(<item:mystias_izakaya:huan_tan_hua>);
recipes.remove(<item:mystias_izakaya:ji_dan>);
recipes.remove(<item:mystias_izakaya:hong_dou>);
recipes.remove(<item:mystias_izakaya:ke_ke_dou>);
recipes.remove(<item:mystias_izakaya:hai_dan>);
recipes.remove(<item:mystias_izakaya:huang_gua>);
recipes.remove(<item:mystias_izakaya:san_wen_yu>);
recipes.remove(<item:mystias_izakaya:xia>);
recipes.remove(<item:mystias_izakaya:tu_dou>);
recipes.remove(<item:mystias_izakaya:zhu_zi>);
recipes.remove(<item:mystias_izakaya:xi_hong_shi>);
recipes.remove(<item:mystias_izakaya:tao_zi>);
recipes.remove(<item:mystias_izakaya:lu_rou>);
recipes.remove(<item:mystias_izakaya:ye_zhu_rou>);
recipes.remove(<item:mystias_izakaya:niu_rou>);
recipes.remove(<item:mystias_izakaya:zhu_rou>);
recipes.remove(<item:mystias_izakaya:hai_tai>);
recipes.remove(<item:mystias_izakaya:feng_mi>);
recipes.remove(<item:mystias_izakaya:he_tun>);
recipes.remove(<item:mystias_izakaya:jin_qiang_yu>);
recipes.remove(<item:mystias_izakaya:ji_shang_jin_qiang_yu>);
recipes.remove(<item:mystias_izakaya:zun_yu>);
recipes.remove(<item:mystias_izakaya:nuo_mi>);
recipes.remove(<item:mystias_izakaya:hei_mao_zhu_rou>);
recipes.remove(<item:mystias_izakaya:he_niu>);
recipes.remove(<item:mystias_izakaya:zhang_yu>);
recipes.remove(<item:mystias_izakaya:song_lu>);
recipes.remove(<item:mystias_izakaya:song_zi>);
recipes.remove(<item:mystias_izakaya:la_jiao>);
recipes.remove(<item:mystias_izakaya:ban_li>);
recipes.remove(<item:mystias_izakaya:dou_fu>);
recipes.remove(<item:mystias_izakaya:hei_yan>);
recipes.remove(<item:mystias_izakaya:ning_meng>);
recipes.remove(<item:mystias_izakaya:mo_gu>);
recipes.remove(<item:mystias_izakaya:mian_fen>);
recipes.remove(<item:mystias_izakaya:huang_you>);
recipes.remove(<item:mystias_izakaya:nai_you>);
recipes.remove(<item:mystias_izakaya:zhi_shi>);
recipes.remove(<item:mystias_izakaya:yue_guang_cao>);
recipes.remove(<item:mystias_izakaya:bai_guo>);
recipes.remove(<item:mystias_izakaya:bing_di_lian>);
recipes.remove(<item:mystias_izakaya:chan_shui>);
recipes.remove(<item:mystias_izakaya:chun_chun>);
recipes.remove(<item:mystias_izakaya:mei_zi>);
recipes.remove(<item:mystias_izakaya:pu_pu_you_guo>);
recipes.remove(<item:mystias_izakaya:xu_li>);
recipes.remove(<item:mystias_izakaya:xi_lan_hua>);
recipes.remove(<item:mystias_izakaya:yin_er>);
recipes.remove(<item:mystias_izakaya:lian_zi>);
recipes.remove(<item:mystias_izakaya:luo_bu>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);
//recipes.remove(<item:mystias_izakaya:>);



//加入
craftingTable.addShapeless("exchange_en_from_gt", <item:mystias_izakaya:en_10> * 16, [
    <item:kubejs:silver_gt_credit>
]);

craftingTable.addShapeless("exchange_gt_from_en", <item:kubejs:silver_gt_credit>, [
    <item:mystias_izakaya:en_10> * 16
]);

craftingTable.addShapeless("onion_conversion", <item:mystias_izakaya:yang_cong> * 4, [
    <item:farmersdelight:onion>
]);

craftingTable.addShapeless("grape_bud_to_grape", <item:mystias_izakaya:pu_tao> * 4, [
    <item:hearthandharvest:red_grapes>
]);

craftingTable.addShapeless("grape_bud_to_grape2", <item:mystias_izakaya:pu_tao> * 4, [
    <item:vinery:jungle_grapes_red>
]);

craftingTable.addShapeless("grape_bud_to_grape3", <item:mystias_izakaya:pu_tao> * 4, [
    <item:vinery:taiga_grapes_red>
]);

craftingTable.addShapeless("grape_bud_to_grape4", <item:mystias_izakaya:pu_tao> * 4, [
    <item:vinery:savanna_grapes_red>
]);

craftingTable.addShapeless("grape_bud_to_grape5", <item:mystias_izakaya:pu_tao> * 4, [
    <item:vinery:red_grape>
]);

craftingTable.addShapeless("typf", <item:mystias_izakaya:pang_xie> * 4, [
    <item:crabbersdelight:crab>
]);

craftingTable.addShapeless("typf2", <item:mystias_izakaya:huan_tan_hua> * 4, [
    <item:youkaishomecoming:udumbara_flower>
]);

craftingTable.addShapeless("typf4", <item:mystias_izakaya:di_gua> * 4, [
    <item:veggiesdelight:sweet_potato>
]);

craftingTable.addShapeless("typf3", <item:mystias_izakaya:nan_gua> * 4, [
    <item:minecraft:pumpkin>
]);

craftingTable.addShapeless("typf5", <item:mystias_izakaya:ji_dan> * 4, [
    <item:minecraft:egg>
]);

craftingTable.addShapeless("typf6", <item:mystias_izakaya:hong_dou> * 4, [
   <item:neapolitan:adzuki_beans> 
]);

craftingTable.addShapeless("typf7", <item:mystias_izakaya:ke_ke_dou> * 4, [
    <item:minecraft:cocoa_beans>
]);

craftingTable.addShapeless("typf8", <item:mystias_izakaya:hai_dan> * 4, [
    <item:collectorsreap:urchin>
]);

craftingTable.addShapeless("typf9", <item:mystias_izakaya:huang_gua> * 4, [
    <item:vintagedelight:cucumber>
]);

craftingTable.addShapeless("typf10", <item:mystias_izakaya:san_wen_yu> * 4, [
    <item:farmersdelight:salmon_slice>
]);

craftingTable.addShapeless("typf11", <item:mystias_izakaya:tu_dou> * 4, [
    <item:minecraft:potato>
]);

craftingTable.addShapeless("typf12", <item:mystias_izakaya:zhu_rou> * 4, [
    <item:minecraft:porkchop>
]);

craftingTable.addShapeless("typf13", <item:mystias_izakaya:zhu_zi> * 4, [
    <item:minecraft:bamboo>
]);

craftingTable.addShapeless("typf14", <item:mystias_izakaya:xia> * 4, [
    <item:crabbersdelight:shrimp>
]);

craftingTable.addShapeless("typf15", <item:mystias_izakaya:xia> * 4, [
    <item:crabbersdelight:shrimp>
]);

craftingTable.addShapeless("typf16", <item:mystias_izakaya:xi_hong_shi> * 4, [
    <item:farmersdelight:tomato>
]);

craftingTable.addShapeless("typf17", <item:mystias_izakaya:xi_hong_shi> * 4, [
    <item:argentinas_delight:tomatitos_cherry>
]);

craftingTable.addShapeless("typf18", <item:mystias_izakaya:tao_zi> * 4, [
    <item:fruitsdelight:peach>
]);

craftingTable.addShapeless("typf19", <item:mystias_izakaya:lu_rou> * 4, [
    <item:naturalist:venison>
]);

craftingTable.addShapeless("typf20", <item:mystias_izakaya:ye_zhu_rou> * 4, [
    <item:nethersdelight:hoglin_loin>
]);

craftingTable.addShapeless("typf21", <item:mystias_izakaya:niu_rou> * 4, [
    <item:minecraft:beef>
]);

craftingTable.addShapeless("typf22", <item:mystias_izakaya:hai_tai> * 4, [
    <item:minecraft:kelp>
]);

craftingTable.addShapeless("typf23", <item:mystias_izakaya:feng_mi> * 4, [
    <item:minecraft:honey_bottle>
]);

craftingTable.addShapeless("typf24", <item:mystias_izakaya:he_tun> * 4, [
    <item:minecraft:pufferfish>
]);

craftingTable.addShapeless("typf25", <item:mystias_izakaya:he_tun> * 4, [
    <item:netherdepthsupgrade:lava_pufferfish>
]);

craftingTable.addShapeless("typf26", <item:mystias_izakaya:nuo_mi> * 4, [
    <item:farmersdelight:rice>
]);
    
craftingTable.addShapeless("typf27", <item:mystias_izakaya:zhang_yu> * 4, [
    <item:miners_delight:tentacles>
]);

craftingTable.addShapeless("typf28", <item:mystias_izakaya:song_lu> * 4, [
    <item:wildernature:truffle>
]);

craftingTable.addShaped("hei_mao_zhu_rou_recipe", <item:mystias_izakaya:hei_mao_zhu_rou>,
    [
        [<item:nethersdelight:hoglin_loin>, <item:nethersdelight:hoglin_loin>, <item:nethersdelight:hoglin_loin>],
        [<item:nethersdelight:hoglin_loin>, <item:createaddition:electrum_nugget>, <item:nethersdelight:hoglin_loin>],
        [<item:nethersdelight:hoglin_loin>, <item:nethersdelight:hoglin_loin>, <item:nethersdelight:hoglin_loin>]
    ]
);

craftingTable.addShaped("he_niu_recipe", <item:mystias_izakaya:he_niu>,
    [
        [<item:minecraft:beef>, <item:minecraft:beef>, <item:minecraft:beef>],
        [<item:minecraft:beef>, <item:createaddition:electrum_nugget>, <item:minecraft:beef>],
        [<item:minecraft:beef>, <item:minecraft:beef>, <item:minecraft:beef>]
    ]
);

craftingTable.addShapeless("typf29", <item:mystias_izakaya:song_zi> * 4, [
    <item:alexscaves:pine_nuts>
]);

craftingTable.addShapeless("typf30", <item:mystias_izakaya:la_jiao> * 4, [
    <item:vintagedelight:ghost_pepper>
]);

craftingTable.addShapeless("typf31", <item:mystias_izakaya:la_jiao> * 4, [
    <item:muffins_thaidelight:pepper>
]);

craftingTable.addShapeless("typf32", <item:mystias_izakaya:huang_gua> * 4, [
    <item:culturaldelights:cucumber>
]);

craftingTable.addShapeless("typf33", <item:mystias_izakaya:xia> * 4, [
    <item:collectorsreap:tiger_prawn>
]);

craftingTable.addShapeless("typf34", <item:mystias_izakaya:xia> * 4, [
    <item:braziliandelight:shrimp>
]);

craftingTable.addShapeless("typf35", <item:mystias_izakaya:lu_rou> * 4, [
    <item:wildernature:venison>
]);

craftingTable.addShapeless("typf36", <item:mystias_izakaya:zhang_yu> * 4, [
    <item:culturaldelights:raw_calamari>
]);

craftingTable.addShapeless("typf37", <item:mystias_izakaya:ban_li> * 4, [
    <item:forestry:fruit_chestnut>
]);

craftingTable.addShapeless("typf38", <item:mystias_izakaya:dou_fu> * 4, [
    <item:vegandelight:tofu>
]);

craftingTable.addShapeless("typf39", <item:mystias_izakaya:hei_yan> * 4, [
    <item:braziliandelight:salt>
]);

craftingTable.addShapeless("typf40", <item:mystias_izakaya:ning_meng> * 4, [
    <item:fruitsdelight:lemon>
]);

craftingTable.addShapeless("typf41", <item:mystias_izakaya:mo_gu> * 4, [
    <item:collectorsreap:portobello>
]);

craftingTable.addShapeless("typf42", <item:mystias_izakaya:mo_gu> * 4, [
    <item:minecraft:brown_mushroom>
]);

craftingTable.addShapeless("typf43", <item:mystias_izakaya:mo_gu> * 4, [
    <item:minecraft:red_mushroom>
]);

craftingTable.addShapeless("typf44", <item:mystias_izakaya:mo_gu> * 4, [
    <item:minecraft:warped_fungus>
]);

craftingTable.addShapeless("typf45", <item:mystias_izakaya:mo_gu> * 4, [
    <item:minecraft:crimson_fungus>
]);

craftingTable.addShapeless("typf46", <item:mystias_izakaya:mian_fen> * 4, [
    <item:bountifulfares:flour>
]);

craftingTable.addShapeless("typf47", <item:mystias_izakaya:huang_you> * 4, [
    <item:braziliandelight:butter>
]);

craftingTable.addShapeless("typf48", <item:mystias_izakaya:nai_you> * 4, [
    <item:argentinas_delight:dulcedeleche>
]);

craftingTable.addShapeless("typf49", <item:mystias_izakaya:nai_you> * 5, [
    <item:braziliandelight:heavy_cream_bucket>
]);

craftingTable.addShapeless("typf50", <item:mystias_izakaya:nai_you> * 4, [
    <item:cosmopolitan:cream_bucket>
]);
//密码的芝士全家桶51-61
craftingTable.addShapeless("typf51", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:brewinandchewin:flaxen_cheese_wedge>
]);

craftingTable.addShapeless("typf52", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:unusualfoodsdelight:soft_cheese_cube>
]);

craftingTable.addShapeless("typf53", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:unusualfoodsdelight:soft_cheese_cube>
]);

craftingTable.addShapeless("typf54", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:trailandtales_delight:cherry_cheese_slice>
]);

craftingTable.addShapeless("typf55", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:trailandtales_delight:cherry_cheese_slice>
]);

craftingTable.addShapeless("typf56", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:vintagedelight:cheese_slice>
]);

craftingTable.addShapeless("typf57", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:pizzadelight:cheese>
]);

craftingTable.addShapeless("typf58", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:braziliandelight:minas_cheese_slice>
]);

craftingTable.addShapeless("typf59", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:brewinandchewin:scarlet_cheese_wedge>
]);

craftingTable.addShapeless("typf60", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:hearthandharvest:goat_cheese_slice>
]);

craftingTable.addShapeless("typf61", <item:mystias_izakaya:zhi_shi> * 4, [
    <item:argentinas_delight:queso>
]);
//奶酪结束
craftingTable.addShapeless("typf62", <item:mystias_izakaya:zhu_zi> * 4, [
    <item:unusualprehistory:zuloagae>
]);

craftingTable.addShapeless("typf63", <item:mystias_izakaya:luo_bu> * 4, [
    <item:miners_delight:cave_carrot>
]);

craftingTable.addShapeless("typf64", <item:mystias_izakaya:luo_bu> * 4, [
    <item:minecraft:carrot>
]);


/*
craftingTable.addShapeless("typf", <item:mystias_izakaya:> * 4, [
    
]);
*/

