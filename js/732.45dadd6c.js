"use strict";(self["webpackChunkhmmm_frontend_vue3_dev"]=self["webpackChunkhmmm_frontend_vue3_dev"]||[]).push([[732,338],{71095:function(e,t,a){a(57658);function o(e){if(!(this instanceof o))return new o(e,null,null)}o.treeToArray=function(e,t,a,n){let i=[];return Array.from(e).forEach((function(e){void 0===e._expanded&&(e._expanded=n),t&&(e._parent=t);let l=0;if(void 0!==a&&null!==a&&(l=a+1),e._level=l,i.push(e),e.childs&&e.childs.length>0){const t=o.treeToArray(e.childs,e,l,n);i=i.concat(t)}if(e.points&&e.points.length>0){const t=o.treeToArray(e.points,e,l,n);i=i.concat(t)}})),i},t.Z=o},31338:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var o=a(73396),n=a(87139);const i={class:"add-form"},l={key:0},s=["model"],d={class:"dialog-footer"};function r(e,t,a,r,u,p){const c=(0,o.up)("el-radio"),h=(0,o.up)("el-radio-group"),m=(0,o.up)("el-form-item"),f=(0,o.up)("el-option"),w=(0,o.up)("el-select"),g=(0,o.up)("el-input"),y=(0,o.up)("el-form"),b=(0,o.up)("el-button"),M=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(M,{title:a.text+a.pageTitle,modelValue:u.dialogFormVisible,"onUpdate:modelValue":t[7]||(t[7]=e=>u.dialogFormVisible=e)},{footer:(0,o.w5)((()=>[(0,o._)("div",d,[(0,o.Wm)(b,{onClick:p.handleClose},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("table.cancel")),1)])),_:1},8,["onClick"]),(0,o.Wm)(b,{type:"primary",onClick:t[6]||(t[6]=e=>p.handleSubmit("formMenu"))},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("table.confirm")),1)])),_:1})])])),default:(0,o.w5)((()=>[(0,o.Wm)(y,{rules:u.ruleInline,ref:"formMenu",model:u.formMenu,"label-position":"left","label-width":"120px",style:{width:"400px","margin-left":"120px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{label:e.$t("table.permissionUser")},{default:(0,o.w5)((()=>[(0,o.Wm)(h,{modelValue:u.type,"onUpdate:modelValue":t[0]||(t[0]=e=>u.type=e),class:"choose-type",onChange:p.handleChooseType},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{label:"menu",class:"choose-item",disabled:u.typeStatus},{default:(0,o.w5)((()=>[(0,o.Uk)("菜单")])),_:1},8,["disabled"]),(0,o.Wm)(c,{label:"points",class:"choose-item",disabled:u.typeStatus},{default:(0,o.w5)((()=>[(0,o.Uk)("权限点")])),_:1},8,["disabled"])])),_:1},8,["modelValue","onChange"])])),_:1},8,["label"]),(0,o.Wm)(m,{label:e.$t("table.permissionUser")},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{modelValue:u.formMenu.pid,"onUpdate:modelValue":t[1]||(t[1]=e=>u.formMenu.pid=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{value:0,label:e.$t("table.powerNav")},{default:(0,o.w5)((()=>[(0,o.Uk)("主导航")])),_:1},8,["label"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(u.notPointDataList,(e=>((0,o.wg)(),(0,o.j4)(f,{value:e.id,key:e.id,label:e.title,disabled:"points"===u.type&&!!e.childs,class:(0,n.C_)("moveIn"+e.layer)},null,8,["value","label","disabled","class"])))),128))])),_:1},8,["modelValue"])])),_:1},8,["label"]),u.showMenuBlock?((0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(m,{label:e.$t("table.powerCode"),prop:"code"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:u.formMenu.code,"onUpdate:modelValue":t[2]||(t[2]=e=>u.formMenu.code=e)},null,8,["modelValue"])])),_:1},8,["label"]),(0,o.Wm)(m,{label:e.$t("table.powerTitle"),prop:"title"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:u.formMenu.title,"onUpdate:modelValue":t[3]||(t[3]=e=>u.formMenu.title=e)},null,8,["modelValue"])])),_:1},8,["label"])])):(0,o.kq)("",!0),u.showPointBlock?((0,o.wg)(),(0,o.iD)("div",{key:1,model:u.formPoints},[(0,o.Wm)(m,{label:e.$t("table.powerCode"),prop:"code"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:u.formPoints.code,"onUpdate:modelValue":t[4]||(t[4]=e=>u.formPoints.code=e)},null,8,["modelValue"])])),_:1},8,["label"]),(0,o.Wm)(m,{label:e.$t("table.powerTitle"),prop:"title"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{modelValue:u.formPoints.title,"onUpdate:modelValue":t[5]||(t[5]=e=>u.formPoints.title=e)},null,8,["modelValue"])])),_:1},8,["label"])],8,s)):(0,o.kq)("",!0)])),_:1},8,["rules","model"])])),_:1},8,["title","modelValue"])])}a(57658);var u=a(19471),p=a(5917);a(71095);let c=[];var h={name:"items",props:{treeStructure:{type:Boolean,default:function(){return!1}},text:{type:String},pageTitle:{type:String},PermissionGroupsList:{type:Array}},data(){const e=(t,a,o)=>{const n=c.formMenu.code;if(""===a)o(new Error("代码不能为空"));else{e.ifHave=!1;const t=c.formMenu.pid;e.ifHaveCodeExciting=function(a){for(let o=0;o<a.length;o++)a[o].childs&&a[o].childs.length>0&&e.ifHaveCodeExciting(a[o].childs),a[o].points&&a[o].points.length>0&&a[o].id===t&&e.doPoints(a[o].points)},e.doPoints=function(t){for(let a=0;a<t.length;a++)t[a].code&&t[a].code===n&&(e.ifHave=!0)},e.ifHaveCodeExciting(c.parentDataList),o()}};return{type:"menu",showMenuBlock:!0,showPointBlock:!1,dialogFormVisible:!1,typeStatus:!1,notPointDataList:[],parentDataList:[],formMenu:{pid:"",is_point:"",code:"",title:""},formPoints:{pid:"",is_point:"",code:"",title:""},codepast:"",ruleInline:{title:[{required:!0,message:"标题不能为空",trigger:"blur"}],code:[{required:!0,validator:e,trigger:"blur"}]},leafCount:[]}},computed:{},methods:{dialogFormV(){this.dialogFormVisible=!0},dialogFormH(){this.dialogFormVisible=!1},handleChooseType(){"menu"===this.type&&c.changeToMenu(),"points"===this.type&&c.changeToPoints()},changeType(e){"menu"===e&&(this.type="menu",c.changeToMenu()),"points"===e&&(this.type="points",c.changeToPoints()),this.typeStatus=!0},changeArays(){const e=t=>{for(let a=0;a<t.length;a++)void 0!==t[a].code&&c.notPointDataList.push(t[a]),t[a].childs&&t[a].childs.length>0&&e(t[a].childs)};e(c.parentDataList)},changeToMenu(){c.showMenuBlock=!0,c.showPointBlock=!1,c.notPointDataList=[],this.changeArays()},changeToPoints(){c.showMenuBlock=!1,c.showPointBlock=!0,c.formMenu=c.formPoints,c.formMenu.pid=c.formPoints.pid,c.formMenu.code=c.formPoints.code,c.formMenu.title=c.formPoints.title,c.notPointDataList=[],this.changeArays()},handleClose(){(0,u.Qy)(this,"handleCloseModal")},handle_Edit(e){(0,p.Vx)(this.formMenu).then((()=>{(0,u.Qy)(this,"handleCloseModal"),(0,u.Qy)(this,"newDataes",this.formMenu)}))},select_Add(){(0,p.IH)(this.formMenu).then((()=>{c.handleResetForm(),(0,u.Qy)(this,"handleCloseModal"),(0,u.Qy)(this,"newDataes",this.formMenu)}))},handle_Add(e){"points"===c.type?(this.formMenu.is_point=!0,this.select_Add()):(this.formMenu.is_point=!1,this.select_Add())},handleSubmit(e){if(c.formMenu.pid=Number(c.formMenu.pid),c.formMenu.id){const t=c.formMenu.code;t===this.codepast?(this.$refs.formMenu.validateField("title"),c.handle_Edit(e)):c.$refs[e].validate((t=>{t?c.handle_Edit(e):this.$Message.error("表单验证失败")}))}else c.$refs[e].validate((t=>{t?c.handle_Add(e):this.$Message.error("表单验证失败")}))},dataRest(e){for(let t=0;t<e.length;t++){if(e[t].childs&&e[t].childs.length>0)for(let a=0;a<e[t].childs.length;a++)e[t].childs[a].layer=1;e[t].layer=0}},hanldeEditForm(e){this.formMenu.id=e,(0,p.pb)().then((e=>{c.parentDataList=e.data,c.notPointDataList=[],this.dataRest(e.data),this.changeArays()})),(0,p.lA)({id:e}).then((e=>{this.formMenu.id=e.data.id,this.formMenu.pid=e.data.pid,this.formMenu.title=e.data.title,this.formMenu.code=e.data.code,this.formMenu.is_point=e.data.is_point;const t=e.data,a=this.type;"points"===a&&(this.formMenu.code=e.data.code),null===t.pid&&(this.formMenu.pid=0)}))},handleResetForm(){this.formMenu.id="",this.formMenu.pid=0,this.formMenu.title="",this.formMenu.code="",c.typeStatus=!1,c.type="menu",(0,p.pb)().then((e=>{c.parentDataList=e.data,c.notPointDataList=c.parentDataList,this.dataRest(e.data),c.changeToMenu()}))}},mounted:function(){},created(){c=this},updated:function(){},emits:["newDataes","handleCloseModal"]},m=a(40089);const f=(0,m.Z)(h,[["render",r],["__scopeId","data-v-70010ac8"]]);var w=f},31732:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var o=a(73396),n=a(87139);const i={class:"dashboard-container"},l={class:"app-container"};function s(e,t,a,s,d,r){const u=(0,o.up)("el-button"),p=(0,o.up)("tree-table"),c=(0,o.up)("el-card");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("div",l,[(0,o.Wm)(c,{shadow:"never"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"filter-item fr",size:"small",style:{"margin-left":"10px"},onClick:r.handleCreate,type:"primary",icon:d.ElIconEdit},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.$t("table.add")),1)])),_:1},8,["onClick","icon"]),(0,o.Wm)(p,{border:"",data:d.dataList,columns:d.columns,"tree-structure":!0,listLoading:d.listLoading,rowClassStatus:r.rowClassStatus,onHandleUpdate:r.handleUpdate,onRemoveUser:r.removeUser},null,8,["data","columns","listLoading","rowClassStatus","onHandleUpdate","onRemoveUser"]),((0,o.wg)(),(0,o.j4)((0,o.LL)(d.MenuAdd),{ref:"editMenu",text:d.text,pageTitle:d.pageTitle,PermissionGroupsList:d.PermissionGroupsList,notPointDataList:d.notPointDataList,parentDataList:d.parentDataList,onNewDataes:r.handleLoadData,onHandleCloseModal:r.handleCloseModal},null,40,["text","pageTitle","PermissionGroupsList","notPointDataList","parentDataList","onNewDataes","onHandleCloseModal"]))])),_:1})])])}a(57658);var d=a(72748),r=a(19471);const u={key:1};function p(e,t,a,i,l,s){const d=(0,o.up)("expand"),r=(0,o.up)("el-table-column"),p=(0,o.up)("el-button"),c=(0,o.up)("el-table"),h=(0,o.Q2)("loading");return(0,o.wy)(((0,o.wg)(),(0,o.j4)(c,{data:s.formatData,"row-class-name":s.rowClassStatus,"element-loading-text":"给我一点时间",fit:"","highlight-current-row":"",style:{width:"100%"}},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.columns,((e,t)=>((0,o.wg)(),(0,o.j4)(r,{key:e.prop,width:e.width,prop:e.prop,label:e.text},{default:(0,o.w5)((a=>[e.render?((0,o.wg)(),(0,o.j4)(d,{key:0,render:e.render,row:a.row,index:t,column:e},null,8,["render","row","index","column"])):((0,o.wg)(),(0,o.iD)("span",u,(0,n.zw)(a.row[e.value]),1))])),_:2},1032,["width","prop","label"])))),128)),(0,o.Wm)(r,{label:"操作",width:"260",align:"center"},{default:(0,o.w5)((e=>[(0,o.Wm)(p,{size:"mini",type:"primary",onClick:t=>s.handleUpdate(e.row)},{default:(0,o.w5)((()=>[(0,o.Uk)(" 修改 ")])),_:2},1032,["onClick"]),(0,o.Wm)(p,{size:"mini",type:"danger",onClick:t=>s.handleDelete(e.row.id)},{default:(0,o.w5)((()=>[(0,o.Uk)(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","row-class-name"])),[[h,a.listLoading]])}var c=a(71095);function h(e,t){const a={...t,props:e,data:t.attr,children:t.slots},n={row:a.props.row,index:a.props.index};return a.props.column&&(n.column=a.props.column),a.props.render(o.h,n)}const m=h;var f=m,w={name:"treeTable",components:{expand:f},props:{treeStructure:{type:Boolean,default:function(){return!1}},data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}},listLoading:{type:Boolean,default:!1},defaultExpandAll:{type:Boolean,default:function(){return!0}}},computed:{formatData:function(){const e=this;if(e.treeStructure){const t=c.Z.treeToArray(e.data,null,null,e.defaultExpandAll);return t}return e.data}},methods:{rowClassStatus:function(){(0,r.Qy)(this,"rowClassStatus")},handleUpdate(e){(0,r.Qy)(this,"handleUpdate",e)},handleDelete(e){(0,r.Qy)(this,"removeUser",e)}},emits:["handleUpdate","removeUser","rowClassStatus"]},g=a(40089);const y=(0,g.Z)(w,[["render",p],["__scopeId","data-v-3502c53c"]]);var b=y,M=a(31338),_=a(5917);let v=[];var L={data(){return{MenuAdd:"menuAdd",listLoading:!0,dataList:[],newArray:[],pageTitle:"菜单",text:"",PermissionGroupsList:[],parentDataList:[],notPointDataList:[],columns:[{text:"标题",value:"title",width:200,render(e,t){return o.h("div",[o.h("i",(0,r.Ps)({class:"ivu-icon "+t.row.icon,style:{marginLeft:20*t.row.layer+"px",marginRight:"5px",fontSize:"16px"}})),o.h("i",t.row.title)])}},{text:"权限点代码",value:"code"}],ElIconEdit:d.Edit}},name:"treeTableDemo",components:{treeTable:b,MenuAdd:M["default"]},methods:{handleLoadData(e){this.listLoading=!0,(0,_.pb)(e).then((e=>{this.dataList=e.data,this.listLoading=!1;const t=[],a=function(e,t){let a;a=t.is_point?" el-icon-view":t.childs&&t.childs.length>0?" fa fa-folder-open-o fa-fw":"fa fa-file-o fa-fw";const o={id:t.id,pid:t.pid,layer:e,is_point:t.is_point,code:t.code,title:t.title,icon:a};return o},o=function(e,t){e++,n(e,t),e--};function n(e,n){for(let i=0;i<n.length;i++)t.push(a(e,n[i])),n[i].childs&&n[i].childs.length>0&&o(e,n[i].childs),n[i].points&&n[i].points.length>0&&o(e,n[i].points)}const i=0;n(i,v.dataList),v.dataList=t}))},setupData(){simple().then((e=>{this.PermissionGroupsList=e.data}))},handleLoadDataList(){},rowClassStatus(e){return 1===e.row.is_deleted?"disabled":""},handleCreate(){this.text="创建",this.$refs.editMenu.dialogFormV(),this.$refs.editMenu.handleResetForm()},handleCloseModal(){this.$refs.editMenu.dialogFormH()},handleUpdate(e){const t=e.is_point?"points":"menu";v.$refs.editMenu.changeType(t),v.$refs.editMenu.dialogFormV(),v.$refs.editMenu.hanldeEditForm(e.id)},removeUser(e){this.$confirm("此操作将永久删除用户 , 是否继续?","提示",{type:"warning"}).then((()=>{(0,_.Od)({id:e}).then((t=>{this.$message.success("成功删除了用户!"),this.dataList.splice(e,1),this.handleLoadData(this.requestParameters)})).catch((e=>{this.$message.error("删除失败!")}))})).catch((()=>{this.$message.info("已取消操作!")}))}},mounted:function(){this.handleLoadData()},created(){v=this},updated:function(){},beforeUpdate:function(){}};const D=(0,g.Z)(L,[["render",s],["__scopeId","data-v-5eeaf2d2"]]);var C=D}}]);
//# sourceMappingURL=732.45dadd6c.js.map