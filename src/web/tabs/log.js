const sharedObjectId=window.infoBox.sharedObjectId,sharedObject=window[sharedObjectId],{Component,html}=window.neverland,LogTab=Component(()=>html`<div class="tab-pane fade" id="log" role="tabpanel" aria-labelledby="log-tab">Логи</div>`);export default LogTab;