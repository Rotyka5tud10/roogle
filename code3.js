gdjs.SettingsCode = {};
gdjs.SettingsCode.GDArrow2Objects1= [];
gdjs.SettingsCode.GDArrow2Objects2= [];
gdjs.SettingsCode.GDArrowObjects1= [];
gdjs.SettingsCode.GDArrowObjects2= [];
gdjs.SettingsCode.GDMusicObjects1= [];
gdjs.SettingsCode.GDMusicObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;0");
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDArrow2Objects1.length = 0;
gdjs.SettingsCode.GDArrow2Objects2.length = 0;
gdjs.SettingsCode.GDArrowObjects1.length = 0;
gdjs.SettingsCode.GDArrowObjects2.length = 0;
gdjs.SettingsCode.GDMusicObjects1.length = 0;
gdjs.SettingsCode.GDMusicObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
