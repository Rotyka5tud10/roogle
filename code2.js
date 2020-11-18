gdjs.End_32ScreenCode = {};
gdjs.End_32ScreenCode.GDgoObjects1= [];
gdjs.End_32ScreenCode.GDgoObjects2= [];
gdjs.End_32ScreenCode.GDtext1Objects1= [];
gdjs.End_32ScreenCode.GDtext1Objects2= [];
gdjs.End_32ScreenCode.GDtext2Objects1= [];
gdjs.End_32ScreenCode.GDtext2Objects2= [];
gdjs.End_32ScreenCode.GDmenuObjects1= [];
gdjs.End_32ScreenCode.GDmenuObjects2= [];
gdjs.End_32ScreenCode.GDscoreObjects1= [];
gdjs.End_32ScreenCode.GDscoreObjects2= [];
gdjs.End_32ScreenCode.GDhighscoreObjects1= [];
gdjs.End_32ScreenCode.GDhighscoreObjects2= [];
gdjs.End_32ScreenCode.GDnewscoreObjects1= [];
gdjs.End_32ScreenCode.GDnewscoreObjects2= [];

gdjs.End_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition2IsTrue_0 = {val:false};


gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.End_32ScreenCode.GDmenuObjects1});gdjs.End_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("highscore"), gdjs.End_32ScreenCode.GDhighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("newscore"), gdjs.End_32ScreenCode.GDnewscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.End_32ScreenCode.GDscoreObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "240;243;8");
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDhighscoreObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDhighscoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.End_32ScreenCode.GDnewscoreObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDnewscoreObjects1[i].hide();
}
}}

}


{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("newscore"), gdjs.End_32ScreenCode.GDnewscoreObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDnewscoreObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDnewscoreObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.End_32ScreenCode.GDmenuObjects1);

gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.End_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.End_32ScreenCode.mapOfGDgdjs_46End_9532ScreenCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.End_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.End_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.End_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


{
}

}


};

gdjs.End_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32ScreenCode.GDgoObjects1.length = 0;
gdjs.End_32ScreenCode.GDgoObjects2.length = 0;
gdjs.End_32ScreenCode.GDtext1Objects1.length = 0;
gdjs.End_32ScreenCode.GDtext1Objects2.length = 0;
gdjs.End_32ScreenCode.GDtext2Objects1.length = 0;
gdjs.End_32ScreenCode.GDtext2Objects2.length = 0;
gdjs.End_32ScreenCode.GDmenuObjects1.length = 0;
gdjs.End_32ScreenCode.GDmenuObjects2.length = 0;
gdjs.End_32ScreenCode.GDscoreObjects1.length = 0;
gdjs.End_32ScreenCode.GDscoreObjects2.length = 0;
gdjs.End_32ScreenCode.GDhighscoreObjects1.length = 0;
gdjs.End_32ScreenCode.GDhighscoreObjects2.length = 0;
gdjs.End_32ScreenCode.GDnewscoreObjects1.length = 0;
gdjs.End_32ScreenCode.GDnewscoreObjects2.length = 0;

gdjs.End_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['End_32ScreenCode'] = gdjs.End_32ScreenCode;
