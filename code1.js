gdjs.GameCode = {};
gdjs.GameCode.GDFishObjects1_1final = [];

gdjs.GameCode.GDRockObjects1_1final = [];

gdjs.GameCode.GDSpongebobsboatObjects1_1final = [];

gdjs.GameCode.GDSpongebobsboatObjects1= [];
gdjs.GameCode.GDSpongebobsboatObjects2= [];
gdjs.GameCode.GDSpongebobsboatObjects3= [];
gdjs.GameCode.GDFishObjects1= [];
gdjs.GameCode.GDFishObjects2= [];
gdjs.GameCode.GDFishObjects3= [];
gdjs.GameCode.GDRockObjects1= [];
gdjs.GameCode.GDRockObjects2= [];
gdjs.GameCode.GDRockObjects3= [];
gdjs.GameCode.GDStars2Objects1= [];
gdjs.GameCode.GDStars2Objects2= [];
gdjs.GameCode.GDStars2Objects3= [];
gdjs.GameCode.GDStarsObjects1= [];
gdjs.GameCode.GDStarsObjects2= [];
gdjs.GameCode.GDStarsObjects3= [];
gdjs.GameCode.GDtimeObjects1= [];
gdjs.GameCode.GDtimeObjects2= [];
gdjs.GameCode.GDtimeObjects3= [];
gdjs.GameCode.GDgroundObjects1= [];
gdjs.GameCode.GDgroundObjects2= [];
gdjs.GameCode.GDgroundObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.condition5IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.condition5IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SpongeBob Music_ Slide Whistle Song - YouTube.mp3", true, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SpongeBob Music Porous Pursuit.mp3", true, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 2;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SpongeBob Music Grass Skirt Chase.mp3", true, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 3;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "Sponge Monger.mp3", true, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 4;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "YouTube-25", true, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 5;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SpongeBob Music_ Riverboat Rumpas (a) - YouTube", true, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("zene")) == 6;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SpongeBob Music Earl's Revenge.mp3", true, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpongebobsboatObjects2Objects = Hashtable.newFrom({"Spongebobsboat": gdjs.GameCode.GDSpongebobsboatObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFishObjects2Objects = Hashtable.newFrom({"Fish": gdjs.GameCode.GDFishObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpongebobsboatObjects2Objects = Hashtable.newFrom({"Spongebobsboat": gdjs.GameCode.GDSpongebobsboatObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects2Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects2});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("hs", "hs", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;227;255");
}{runtimeScene.getVariables().get("zene").setNumber(gdjs.random(6));
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDFishObjects1.length = 0;

gdjs.GameCode.GDRockObjects1.length = 0;

gdjs.GameCode.GDSpongebobsboatObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDFishObjects1_1final.length = 0;gdjs.GameCode.GDRockObjects1_1final.length = 0;gdjs.GameCode.GDSpongebobsboatObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameCode.GDFishObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spongebobsboat"), gdjs.GameCode.GDSpongebobsboatObjects2);
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpongebobsboatObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDFishObjects2Objects, false, runtimeScene, true);
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDFishObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDFishObjects1_1final.indexOf(gdjs.GameCode.GDFishObjects2[j]) === -1 )
            gdjs.GameCode.GDFishObjects1_1final.push(gdjs.GameCode.GDFishObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDSpongebobsboatObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDSpongebobsboatObjects1_1final.indexOf(gdjs.GameCode.GDSpongebobsboatObjects2[j]) === -1 )
            gdjs.GameCode.GDSpongebobsboatObjects1_1final.push(gdjs.GameCode.GDSpongebobsboatObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Spongebobsboat"), gdjs.GameCode.GDSpongebobsboatObjects2);
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpongebobsboatObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects2Objects, false, runtimeScene, true);
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDRockObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDRockObjects1_1final.indexOf(gdjs.GameCode.GDRockObjects2[j]) === -1 )
            gdjs.GameCode.GDRockObjects1_1final.push(gdjs.GameCode.GDRockObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDSpongebobsboatObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDSpongebobsboatObjects1_1final.indexOf(gdjs.GameCode.GDSpongebobsboatObjects2[j]) === -1 )
            gdjs.GameCode.GDSpongebobsboatObjects1_1final.push(gdjs.GameCode.GDSpongebobsboatObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Spongebobsboat"), gdjs.GameCode.GDSpongebobsboatObjects2);
for(var i = 0, k = 0, l = gdjs.GameCode.GDSpongebobsboatObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpongebobsboatObjects2[i].getY() >= 721 ) {
        gdjs.GameCode.condition2IsTrue_1.val = true;
        gdjs.GameCode.GDSpongebobsboatObjects2[k] = gdjs.GameCode.GDSpongebobsboatObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSpongebobsboatObjects2.length = k;if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDSpongebobsboatObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDSpongebobsboatObjects1_1final.indexOf(gdjs.GameCode.GDSpongebobsboatObjects2[j]) === -1 )
            gdjs.GameCode.GDSpongebobsboatObjects1_1final.push(gdjs.GameCode.GDSpongebobsboatObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDFishObjects1_1final, gdjs.GameCode.GDFishObjects1);
gdjs.copyArray(gdjs.GameCode.GDRockObjects1_1final, gdjs.GameCode.GDRockObjects1);
gdjs.copyArray(gdjs.GameCode.GDSpongebobsboatObjects1_1final, gdjs.GameCode.GDSpongebobsboatObjects1);
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Screen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("v")));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
gdjs.GameCode.condition2IsTrue_1.val = false;
gdjs.GameCode.condition3IsTrue_1.val = false;
gdjs.GameCode.condition4IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition2IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.GameCode.condition2IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition3IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num8");
if( gdjs.GameCode.condition3IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition4IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.GameCode.condition4IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Spongebobsboat"), gdjs.GameCode.GDSpongebobsboatObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSpongebobsboatObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpongebobsboatObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameCode.GDFishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.GameCode.GDStarsObjects1);
gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.GameCode.GDgroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects1[i].setX(gdjs.GameCode.GDRockObjects1[i].getX() - (8));
}
}{for(var i = 0, len = gdjs.GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFishObjects1[i].setX(gdjs.GameCode.GDFishObjects1[i].getX() - (8));
}
}{for(var i = 0, len = gdjs.GameCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDgroundObjects1[i].setX(gdjs.GameCode.GDgroundObjects1[i].getX() - (8));
}
}{for(var i = 0, len = gdjs.GameCode.GDStarsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStarsObjects1[i].setX(gdjs.GameCode.GDStarsObjects1[i].getX() - (4));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRockObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRockObjects1[i].getX() <= -(256) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRockObjects1[k] = gdjs.GameCode.GDRockObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRockObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDRockObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects1[i].setX(gdjs.randomInRange(1700, 3000));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fish"), gdjs.GameCode.GDFishObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDFishObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFishObjects1[i].getX() <= -(256) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDFishObjects1[k] = gdjs.GameCode.GDFishObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFishObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDFishObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFishObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFishObjects1[i].setX(gdjs.randomInRange(1800, 3200));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ground"), gdjs.GameCode.GDgroundObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDgroundObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDgroundObjects1[i].getX() <= -(1284) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDgroundObjects1[k] = gdjs.GameCode.GDgroundObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDgroundObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDgroundObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDgroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDgroundObjects1[i].setX(1273);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.GameCode.GDStarsObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDStarsObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDStarsObjects1[i].getX() < -(200) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDStarsObjects1[k] = gdjs.GameCode.GDStarsObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDStarsObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDStarsObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDStarsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStarsObjects1[i].setX(1500);
}
}{for(var i = 0, len = gdjs.GameCode.GDStarsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStarsObjects1[i].setY(gdjs.randomInRange(0, 150));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("time"), gdjs.GameCode.GDtimeObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getVariables().get("v").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDtimeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtimeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("v")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Spongebobsboat"), gdjs.GameCode.GDSpongebobsboatObjects1);
{for(var i = 0, len = gdjs.GameCode.GDSpongebobsboatObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpongebobsboatObjects1[i].setX(97);
}
}}

}


{


{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDSpongebobsboatObjects1.length = 0;
gdjs.GameCode.GDSpongebobsboatObjects2.length = 0;
gdjs.GameCode.GDSpongebobsboatObjects3.length = 0;
gdjs.GameCode.GDFishObjects1.length = 0;
gdjs.GameCode.GDFishObjects2.length = 0;
gdjs.GameCode.GDFishObjects3.length = 0;
gdjs.GameCode.GDRockObjects1.length = 0;
gdjs.GameCode.GDRockObjects2.length = 0;
gdjs.GameCode.GDRockObjects3.length = 0;
gdjs.GameCode.GDStars2Objects1.length = 0;
gdjs.GameCode.GDStars2Objects2.length = 0;
gdjs.GameCode.GDStars2Objects3.length = 0;
gdjs.GameCode.GDStarsObjects1.length = 0;
gdjs.GameCode.GDStarsObjects2.length = 0;
gdjs.GameCode.GDStarsObjects3.length = 0;
gdjs.GameCode.GDtimeObjects1.length = 0;
gdjs.GameCode.GDtimeObjects2.length = 0;
gdjs.GameCode.GDtimeObjects3.length = 0;
gdjs.GameCode.GDgroundObjects1.length = 0;
gdjs.GameCode.GDgroundObjects2.length = 0;
gdjs.GameCode.GDgroundObjects3.length = 0;

gdjs.GameCode.eventsList2(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
