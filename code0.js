gdjs.StartCode = {};
gdjs.StartCode.GDbgStartObjects1= [];
gdjs.StartCode.GDbgStartObjects2= [];
gdjs.StartCode.GDbgStartObjects3= [];
gdjs.StartCode.GDRainObjects1= [];
gdjs.StartCode.GDRainObjects2= [];
gdjs.StartCode.GDRainObjects3= [];
gdjs.StartCode.GDButtonStartObjects1= [];
gdjs.StartCode.GDButtonStartObjects2= [];
gdjs.StartCode.GDButtonStartObjects3= [];
gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDStartObjects2= [];
gdjs.StartCode.GDStartObjects3= [];
gdjs.StartCode.GDSoundObjects1= [];
gdjs.StartCode.GDSoundObjects2= [];
gdjs.StartCode.GDSoundObjects3= [];
gdjs.StartCode.GDGameNameObjects1= [];
gdjs.StartCode.GDGameNameObjects2= [];
gdjs.StartCode.GDGameNameObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};
gdjs.StartCode.conditionTrue_1 = {val:false};
gdjs.StartCode.condition0IsTrue_1 = {val:false};
gdjs.StartCode.condition1IsTrue_1 = {val:false};
gdjs.StartCode.condition2IsTrue_1 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDRainObjects1Objects = Hashtable.newFrom({"Rain": gdjs.StartCode.GDRainObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.StartCode.GDButtonStartObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDSoundObjects1Objects = Hashtable.newFrom({"Sound": gdjs.StartCode.GDSoundObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.StartCode.GDSoundObjects1, gdjs.StartCode.GDSoundObjects2);

{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.StartCode.GDSoundObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDSoundObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDSoundObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.StartCode.GDSoundObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDSoundObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sound"), gdjs.StartCode.GDSoundObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDSoundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
{gdjs.StartCode.conditionTrue_1 = gdjs.StartCode.condition1IsTrue_0;
gdjs.StartCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8291980);
}
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "2");
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.StartCode.GDButtonStartObjects1);
gdjs.StartCode.GDRainObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDRainObjects1Objects, gdjs.random(1280), 0, "");
}{for(var i = 0, len = gdjs.StartCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonStartObjects1[i].setAnimation(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Rain"), gdjs.StartCode.GDRainObjects1);
{for(var i = 0, len = gdjs.StartCode.GDRainObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDRainObjects1[i].addForce(0, 1200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.StartCode.GDButtonStartObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.StartCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDButtonStartObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "toybox.wav", true, 30, 1);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDbgStartObjects1.length = 0;
gdjs.StartCode.GDbgStartObjects2.length = 0;
gdjs.StartCode.GDbgStartObjects3.length = 0;
gdjs.StartCode.GDRainObjects1.length = 0;
gdjs.StartCode.GDRainObjects2.length = 0;
gdjs.StartCode.GDRainObjects3.length = 0;
gdjs.StartCode.GDButtonStartObjects1.length = 0;
gdjs.StartCode.GDButtonStartObjects2.length = 0;
gdjs.StartCode.GDButtonStartObjects3.length = 0;
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDStartObjects3.length = 0;
gdjs.StartCode.GDSoundObjects1.length = 0;
gdjs.StartCode.GDSoundObjects2.length = 0;
gdjs.StartCode.GDSoundObjects3.length = 0;
gdjs.StartCode.GDGameNameObjects1.length = 0;
gdjs.StartCode.GDGameNameObjects2.length = 0;
gdjs.StartCode.GDGameNameObjects3.length = 0;

gdjs.StartCode.eventsList2(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
