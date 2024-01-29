(function(e,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("vue")):typeof define=="function"&&define.amd?define(["vue"],r):(e=typeof globalThis<"u"?globalThis:e||self,e.VueBootstrapModal=r(e.Vue))})(this,function(e){"use strict";const r=(s,t)=>{const l=s.__vccOpts||s;for(const[d,n]of t)l[d]=n;return l};var a=[];const c={data(){return{isShow:!1,noEvent:!1,customStyle:"display: none",myPosition:0,isBackdrop:!1,classes:["fade"],previous:!1}},emits:["hideBsModal","hiddenBsModal","showBsModal","shownBsModal"],props:["title","actions","showTitle","btnClose","dataBsBackdrop","showOnMount","showOnTop"],watch:{isShow:function(s){var t=this;if(s){this.$emit("shownBsModal"),this.customStyle="display: block",this.isBackdrop=!0,setTimeout(function(){t.classes.push("show")},100);return}this.classes.pop(),setTimeout(function(){t.customStyle="display: none;",!t.noEvent&&(t.$emit("hiddenBsModal"),t.isBackdrop=!1)},300)}},computed:{getRole:function(){if(this.isShow)return"dialog"},backdropClasses:function(){return this.classes.join(" ")}},methods:{showPrevious:function(){this.hide(),a[this.previous].show(),this.previous=!1},clickHide:function(s){if(this.dataBsBackdrop&&this.dataBsBackdrop=="static"){this.classes.push("modal-static");var t=this;setTimeout(function(){t.classes.pop()},300);return}this.$refs.root&&this.$refs.root==s.target&&(this.hide(!1),this.previous&&this.showPrevious())},hide:function(s){this.noEvent=s,this.isShow&&(this.isShow=!1,!this.noEvent&&this.$emit("hideBsModal"))},show:function(){if(!this.isShow){if(this.showOnTop!==!0)for(var s in a)a[s].isShow===!0&&(this.previous=s,a[s].hide(!0));var t=this;setTimeout(function(){t.isShow=!0,t.$emit("showBsModal")},100)}},processClick:function(s){if(s){var t=s(this);t!==!0&&this.hide()}else this.hide()}},unmounted:function(){a.splice(this.myPosition,1)},mounted:function(){this.myPosition=a.push(this)-1,this.showOnMount&&this.show()}},h=["aria-hidden","aria-modal","role"],m={class:"modal-content"},f={key:0,class:"modal-header"},u=[e.createElementVNode("i",{class:"fa-solid fa-chevron-left"},null,-1)],k={key:1,class:"modal-title"},p={class:"modal-body"},B={key:1,class:"modal-footer"},w=["onClick","disabled"];function y(s,t,l,d,n,o){return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{class:e.normalizeClass(["modal",o.backdropClasses]),"aria-hidden":!n.isShow,"aria-modal":n.isShow,role:o.getRole,style:e.normalizeStyle(n.customStyle),onClick:t[2]||(t[2]=(...i)=>o.clickHide&&o.clickHide(...i)),ref:"root"},[e.createElementVNode("div",{class:e.normalizeClass(["modal-dialog",s.$attrs.class])},[e.createElementVNode("div",m,[l.showTitle?(e.openBlock(),e.createElementBlock("div",f,[n.previous?(e.openBlock(),e.createElementBlock("button",{key:0,type:"button",class:"btn btn-link text-reset btn-reset","data-bs-dismiss":"modal","aria-label":"Go back",onClick:t[0]||(t[0]=(...i)=>o.showPrevious&&o.showPrevious(...i))},u)):e.createCommentVNode("",!0),e.renderSlot(s.$slots,"header"),l.title?(e.openBlock(),e.createElementBlock("h5",k,e.toDisplayString(l.title),1)):e.createCommentVNode("",!0),l.btnClose?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("button",{key:2,type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[1]||(t[1]=(...i)=>o.hide&&o.hide(...i))}))])):e.createCommentVNode("",!0),e.createElementVNode("div",p,[e.renderSlot(s.$slots,"default")]),l.actions?(e.openBlock(),e.createElementBlock("div",B,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.actions,(i,C)=>(e.openBlock(),e.createElementBlock("button",{type:"button",class:e.normalizeClass(["btn",i.class]),key:C,onClick:_=>o.processClick(i.click),disabled:i.disabled==!0},e.toDisplayString(i.title),11,w))),128))])):e.createCommentVNode("",!0)])],2)],14,h),n.isBackdrop?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["modal-backdrop",o.backdropClasses]),onClick:t[3]||(t[3]=(...i)=>o.clickHide&&o.clickHide(...i))},null,2)):e.createCommentVNode("",!0)],64)}return r(c,[["render",y]])});
