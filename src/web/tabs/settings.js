const sharedObjectId=window.infoBox.sharedObjectId,sharedObject=window[sharedObjectId],_=sharedObject.i18n["_"],{Component,html}=window.neverland,{store,useDispatch,useSelector}=sharedObject.store;import{Switch,Card}from"../components/index.js";const autoSettings=[{id:"autoProduction",label:_("main_window.tabs.settings.aprod"),handler:handleAutoSettings},{id:"autoCoins",label:_("main_window.tabs.settings.acoin"),handler:handleAutoSettings},{id:"outpostFarmCoins",label:_("main_window.tabs.settings.outpost_coins"),handler:handleAutoSettings},{id:"outpostFarmGoods",label:_("main_window.tabs.settings.outpost_goods"),handler:handleAutoSettings},{id:"autoTavern",label:_("main_window.tabs.settings.tavern"),handler:handleAutoSettings},{id:"autoTavernBoost",label:_("main_window.tabs.settings.tavern_boost"),handler:handleAutoSettings},{id:"autoTavernCollect",label:_("main_window.tabs.settings.tavern_collect"),handler:handleAutoSettings},{id:"autoLikeNewFriend",label:_("main_window.tabs.settings.like"),handler:handleAutoSettings},{id:"autoRewards",label:_("main_window.tabs.settings.rewards"),handler:handleAutoSettings}],commonSettings=[{id:"contributionFuse",label:_("main_window.tabs.settings.contr_fuse"),handler:handleCommonSettings},{id:"disableConfirmation",label:_("main_window.tabs.settings.d_confirm"),handler:handleCommonSettings},{id:"disableReward",label:_("main_window.tabs.settings.d_rewards"),handler:handleCommonSettings},{id:"disableBattleSummary",label:_("main_window.tabs.settings.d_b_summary"),handler:handleCommonSettings},{id:"expandZoom",label:_("main_window.tabs.settings.zoom"),handler:handleCommonSettings}],SettingsTab=Component(()=>{const n=useSelector(t=>t.botConfig);return html`<div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">${Card(_("main_window.tabs.settings.automation"),html`<div class="container"><div class="row"><div class="col-6">${autoSettings.map(t=>Switch({...t,checked:n[t.id]}))}</div></div></div>`)} ${Card(_("main_window.tabs.settings.common"),html`<div class="container"><div class="row"><div class="col-6">${commonSettings.map(t=>Switch({...t,checked:n.common[t.id]}))}</div></div></div>`)}<div class="container mt-3"><div class="row"><div class="col"><button class="btn btn-primary" type="button" onclick=${exportDBHandler}>${_("main_window.tabs.settings.db_export")}</button> <label class="btn btn-primary" for="importDB-btn">${_("main_window.tabs.settings.db_import")}</label><br><input type="file" name="importDB" id="importDB-btn" onchange=${importDBHandler} style="display:none"></div></div></div></div>`});async function handleAutoSettings(t,n){const a=useDispatch();a({type:"BOT:AUTO_SETTINGS_UPDATED",payload:{[t]:n}}),saveConfig(!0)}async function handleCommonSettings(t,n){const a=useDispatch();a({type:"BOT:COMMON_SETTINGS_UPDATED",payload:{[t]:n}}),saveConfig()}async function exportDBHandler(t){try{var n=await sharedObject.extension.exportDB(),a=new Blob([n],{type:"application/json"});download(a,"foeBot-db-export.json","application/json")}catch(t){}}async function importDBHandler(t){var n=this.files[0];try{if(!n)throw new Error(_("main_window.tabs.settings.drop_error"));const e=new Blob([n],{type:n.type});var a=await e.text();await sharedObject.extension.importDB(a,n.type)}catch(t){}}async function saveConfig(t=!1){const n=sharedObject.bgApi;var a=store.getState()["botConfig"];await n.setConfig(a,t)}export default SettingsTab;