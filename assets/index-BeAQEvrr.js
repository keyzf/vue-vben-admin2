import{_ as h}from"./BasicTable.vue_vue_type_script_setup_true_lang-SRC-EKfg.js";import"./TableImg.vue_vue_type_style_index_0_lang-CtVqm_Ct.js";import{a as b}from"./componentMap-BMYokLo3.js";import{u as g}from"./useTable-DmeeyTiY.js";import{a as C}from"./system-uU7PF3-i.js";import{b as k}from"./index-BZZVbhSh.js";import{_ as x,c as y,s as R}from"./DeptModal.vue_vue_type_script_setup_true_lang-BbvkNxUd.js";import{d as S,a7 as w,Z as n,_ as M,k as o,a9 as i,G as T,a8 as v,u as e,ab as B}from"./vue-COhTiP8A.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-BQFzeibw.js";import"./FormItem.vue_vue_type_script_lang-C3Z-YQsw.js";import"./entry/index-BGK6cUrP-1709521023304.js";import"./antd-BS7GgtZr.js";import"./helper-DaHVWFHg.js";import"./BasicForm.vue_vue_type_style_index_0_lang-Cep80zEK.js";import"./useForm-B4y2TSrB.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-O9jCeuD7.js";import"./useFormItem-CGQuU2J0.js";import"./onMountedOrActivated-GpUdBAv_.js";import"./useWindowSizeFn-dSYxDkkm.js";import"./useSortable-DpvcYqML.js";import"./download-BuHrEehU.js";import"./base64Conver-bBv-IO2K.js";import"./index-C28cPYGr.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-DTHpzMS1.js";import"./copyTextToClipboard-YrNkOw48.js";import"./index-DYMeAwHC.js";import"./index-CwbeSnSL.js";const se=S({name:"DeptManagement",__name:"index",setup(D){const[s,{openModal:r}]=k(),[m,{reload:l}]=g({title:"部门列表",api:C,columns:y,formConfig:{labelWidth:120,schemas:R},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function p(){r(!0,{isUpdate:!1})}function c(t){r(!0,{record:t,isUpdate:!0})}function d(t){}function u(){l()}return(t,N)=>{const f=w("a-button");return n(),M("div",null,[o(e(h),{onRegister:e(m)},{toolbar:i(()=>[o(f,{type:"primary",onClick:p},{default:i(()=>[T(" 新增部门 ")]),_:1})]),bodyCell:i(({column:_,record:a})=>[_.key==="action"?(n(),v(e(b),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:c.bind(null,a)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:d.bind(null,a)}}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"]),o(x,{onRegister:e(s),onSuccess:u},null,8,["onRegister"])])}}});export{se as default};
