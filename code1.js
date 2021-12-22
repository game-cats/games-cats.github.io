gdjs.Episode_321Code = {};
gdjs.Episode_321Code.GDbgForestObjects1= [];
gdjs.Episode_321Code.GDbgForestObjects2= [];
gdjs.Episode_321Code.GDbgForestObjects3= [];
gdjs.Episode_321Code.GDMalishObjects1= [];
gdjs.Episode_321Code.GDMalishObjects2= [];
gdjs.Episode_321Code.GDMalishObjects3= [];
gdjs.Episode_321Code.GDTextObjects1= [];
gdjs.Episode_321Code.GDTextObjects2= [];
gdjs.Episode_321Code.GDTextObjects3= [];
gdjs.Episode_321Code.GDDialogObjects1= [];
gdjs.Episode_321Code.GDDialogObjects2= [];
gdjs.Episode_321Code.GDDialogObjects3= [];
gdjs.Episode_321Code.GDKayObjects1= [];
gdjs.Episode_321Code.GDKayObjects2= [];
gdjs.Episode_321Code.GDKayObjects3= [];
gdjs.Episode_321Code.GDRitaObjects1= [];
gdjs.Episode_321Code.GDRitaObjects2= [];
gdjs.Episode_321Code.GDRitaObjects3= [];
gdjs.Episode_321Code.GDBridaObjects1= [];
gdjs.Episode_321Code.GDBridaObjects2= [];
gdjs.Episode_321Code.GDBridaObjects3= [];

gdjs.Episode_321Code.conditionTrue_0 = {val:false};
gdjs.Episode_321Code.condition0IsTrue_0 = {val:false};
gdjs.Episode_321Code.condition1IsTrue_0 = {val:false};
gdjs.Episode_321Code.condition2IsTrue_0 = {val:false};
gdjs.Episode_321Code.conditionTrue_1 = {val:false};
gdjs.Episode_321Code.condition0IsTrue_1 = {val:false};
gdjs.Episode_321Code.condition1IsTrue_1 = {val:false};
gdjs.Episode_321Code.condition2IsTrue_1 = {val:false};


gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDMalishObjects2Objects = Hashtable.newFrom({"Malish": gdjs.Episode_321Code.GDMalishObjects2});gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDDialogObjects2Objects = Hashtable.newFrom({"Dialog": gdjs.Episode_321Code.GDDialogObjects2});gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDTextObjects2Objects = Hashtable.newFrom({"Text": gdjs.Episode_321Code.GDTextObjects2});gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDKayObjects2Objects = Hashtable.newFrom({"Kay": gdjs.Episode_321Code.GDKayObjects2});gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDRitaObjects2Objects = Hashtable.newFrom({"Rita": gdjs.Episode_321Code.GDRitaObjects2});gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDBridaObjects2Objects = Hashtable.newFrom({"Brida": gdjs.Episode_321Code.GDBridaObjects2});gdjs.Episode_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Episode_321Code.condition0IsTrue_0.val = false;
gdjs.Episode_321Code.condition1IsTrue_0.val = false;
{
gdjs.Episode_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Episode_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Episode_321Code.conditionTrue_1 = gdjs.Episode_321Code.condition1IsTrue_0;
gdjs.Episode_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8304764);
}
}}
if (gdjs.Episode_321Code.condition1IsTrue_0.val) {
gdjs.Episode_321Code.GDBridaObjects2.length = 0;

gdjs.Episode_321Code.GDDialogObjects2.length = 0;

gdjs.Episode_321Code.GDKayObjects2.length = 0;

gdjs.Episode_321Code.GDMalishObjects2.length = 0;

gdjs.Episode_321Code.GDRitaObjects2.length = 0;

gdjs.Episode_321Code.GDTextObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDMalishObjects2Objects, 946, 338, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDDialogObjects2Objects, 55, 455, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDTextObjects2Objects, 210, 520, "Dialog");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDKayObjects2Objects, 946, 338, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDRitaObjects2Objects, 946, 338, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Episode_321Code.mapOfGDgdjs_46Episode_95321Code_46GDBridaObjects2Objects, 946, 338, "");
}{for(var i = 0, len = gdjs.Episode_321Code.GDKayObjects2.length ;i < len;++i) {
    gdjs.Episode_321Code.GDKayObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDRitaObjects2.length ;i < len;++i) {
    gdjs.Episode_321Code.GDRitaObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDBridaObjects2.length ;i < len;++i) {
    gdjs.Episode_321Code.GDBridaObjects2[i].hide();
}
}}

}


{


gdjs.Episode_321Code.condition0IsTrue_0.val = false;
{
gdjs.Episode_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Episode_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Brida"), gdjs.Episode_321Code.GDBridaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kay"), gdjs.Episode_321Code.GDKayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Malish"), gdjs.Episode_321Code.GDMalishObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rita"), gdjs.Episode_321Code.GDRitaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Episode_321Code.GDTextObjects1);
{for(var i = 0, len = gdjs.Episode_321Code.GDMalishObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDMalishObjects1[i].setHeight(390);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDMalishObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDMalishObjects1[i].setWidth(320);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDTextObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDTextObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDKayObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDKayObjects1[i].setHeight(390);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDRitaObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDRitaObjects1[i].setHeight(390);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDBridaObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDBridaObjects1[i].setHeight(390);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDKayObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDKayObjects1[i].setWidth(320);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDRitaObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDRitaObjects1[i].setWidth(320);
}
}{for(var i = 0, len = gdjs.Episode_321Code.GDBridaObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDBridaObjects1[i].setWidth(320);
}
}}

}


};gdjs.Episode_321Code.eventsList1 = function(runtimeScene) {

{


gdjs.Episode_321Code.condition0IsTrue_0.val = false;
gdjs.Episode_321Code.condition1IsTrue_0.val = false;
{
gdjs.Episode_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.Episode_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Episode_321Code.conditionTrue_1 = gdjs.Episode_321Code.condition1IsTrue_0;
gdjs.Episode_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8309772);
}
}}
if (gdjs.Episode_321Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Episode_321Code.condition0IsTrue_0.val = false;
{
gdjs.Episode_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Episode_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Episode_321Code.GDTextObjects2);
{for(var i = 0, len = gdjs.Episode_321Code.GDTextObjects2.length ;i < len;++i) {
    gdjs.Episode_321Code.GDTextObjects2[i].setString("Привет, бандиты, я Наруто!");
}
}}

}


{


gdjs.Episode_321Code.condition0IsTrue_0.val = false;
{
gdjs.Episode_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.Episode_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Episode_321Code.GDTextObjects1);
{for(var i = 0, len = gdjs.Episode_321Code.GDTextObjects1.length ;i < len;++i) {
    gdjs.Episode_321Code.GDTextObjects1[i].setString("Это моя новая игра-квест!");
}
}}

}


};gdjs.Episode_321Code.eventsList2 = function(runtimeScene) {

{


gdjs.Episode_321Code.eventsList0(runtimeScene);
}


{


gdjs.Episode_321Code.eventsList1(runtimeScene);
}


};

gdjs.Episode_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Episode_321Code.GDbgForestObjects1.length = 0;
gdjs.Episode_321Code.GDbgForestObjects2.length = 0;
gdjs.Episode_321Code.GDbgForestObjects3.length = 0;
gdjs.Episode_321Code.GDMalishObjects1.length = 0;
gdjs.Episode_321Code.GDMalishObjects2.length = 0;
gdjs.Episode_321Code.GDMalishObjects3.length = 0;
gdjs.Episode_321Code.GDTextObjects1.length = 0;
gdjs.Episode_321Code.GDTextObjects2.length = 0;
gdjs.Episode_321Code.GDTextObjects3.length = 0;
gdjs.Episode_321Code.GDDialogObjects1.length = 0;
gdjs.Episode_321Code.GDDialogObjects2.length = 0;
gdjs.Episode_321Code.GDDialogObjects3.length = 0;
gdjs.Episode_321Code.GDKayObjects1.length = 0;
gdjs.Episode_321Code.GDKayObjects2.length = 0;
gdjs.Episode_321Code.GDKayObjects3.length = 0;
gdjs.Episode_321Code.GDRitaObjects1.length = 0;
gdjs.Episode_321Code.GDRitaObjects2.length = 0;
gdjs.Episode_321Code.GDRitaObjects3.length = 0;
gdjs.Episode_321Code.GDBridaObjects1.length = 0;
gdjs.Episode_321Code.GDBridaObjects2.length = 0;
gdjs.Episode_321Code.GDBridaObjects3.length = 0;

gdjs.Episode_321Code.eventsList2(runtimeScene);
return;

}

gdjs['Episode_321Code'] = gdjs.Episode_321Code;
