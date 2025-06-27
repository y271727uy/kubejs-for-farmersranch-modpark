// 王水
StartupEvents.registry('fluid', event => {
    let aquaRegia = event.create('aqua_regia')
      .displayName('王水')
      .stillTexture('kubejs:block/liquid/1')
      .flowingTexture('kubejs:block/liquid/1')
      .color(0xFFA500)
      .bucketColor(0xFFA500)
  
    let attributes = aquaRegia.createAttributes();
    attributes.temperature(350)
      .viscosity(1500)
      .density(1600)
      .luminosity(0)
      .tickDelay(5)
      .explosionResistance(100.0)
      .lighterThanAir(false)
      .slopeFindDistance(4);
  });
  
  // 浓缩铂
  StartupEvents.registry('fluid', event => {
    let platinum = event.create('platinum_concentrate')
      .displayName('浓缩铂')
      .stillTexture('kubejs:block/liquid/2')
      .flowingTexture('kubejs:block/liquid/2')
      .color(0xE3E3AC)
      .bucketColor(0xE3E3AC)
  
    let attributes = platinum.createAttributes();
    attributes.temperature(350)
      .viscosity(1500)
      .density(1600)
      .luminosity(0)
      .tickDelay(5)
      .explosionResistance(100.0)
      .lighterThanAir(false)
      .slopeFindDistance(4);
    });
  //nmd,记录一下第一次写代码写道这个点 2025.6.8凌晨1：21


  //硫酸
  StartupEvents.registry('fluid', event => {
    let platinum = event.create('sulfuric_acid')
      .displayName('硫酸')
      .stillTexture('kubejs:block/liquid/3')
      .flowingTexture('kubejs:block/liquid/3')
      .color(0xFF8000)
      .bucketColor(0xFF8000)
  
    let attributes = platinum.createAttributes();
    attributes.temperature(350)
      .viscosity(1500)
      .density(1600)
      .luminosity(0)
      .tickDelay(5)
      .explosionResistance(100.0)
      .lighterThanAir(false)
      .slopeFindDistance(4);
    });

    StartupEvents.registry('fluid', event => {
      let extract = event.create('pure_plant_extract')
        .displayName('纯净植物提取液')
        .stillTexture('kubejs:block/xyn2/1')
        .flowingTexture('kubejs:block/xyn2/1')
        .color(0x80FF80)
         // 禁止自动生成桶物品
    
      extract.createAttributes()
        .temperature(300)
        .viscosity(1000)
        .density(1000)
        .luminosity(0)
        .tickDelay(5)
        .explosionResistance(100.0)
        .lighterThanAir(false)
        .slopeFindDistance(4);
    });
    
    // 硫酸铑

    StartupEvents.registry('fluid', event => {
      // 注册名为 'rhodium_sulfate' 的流体
      let rhodiumSulfate = event.create('rhodium_sulfate')
        .displayName('硫酸铑') // 设置显示名称
        .stillTexture('kubejs:block/liquid/rhodium_sulfate') // 静止纹理路径
        .flowingTexture('kubejs:block/liquid/rhodium_sulfate') // 流动纹理路径
        .color(0xEDA447) // 设置颜色代码
        .bucketColor(0xEDA447); // 设置桶的颜色代码
    
      // 默认情况下，如果未调用 createAttributes()，KubeJS 会使用默认的流体属性。
      // 如果需要自定义温度、粘度等，您可以在这里添加 createAttributes() 和相关设置。
    });
    
    /* 锇
  StartupEvents.registry('fluid', event => {
    let platinum = event.create('platinum_concentrate')
      .displayName('浓缩铂')
      .stillTexture('kubejs:block/liquid/2')
      .flowingTexture('kubejs:block/liquid/2')
      .color(0xE3E3AC)
      .bucketColor(0xE3E3AC)
    });
*/