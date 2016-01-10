var Basic_Information={init:function(){var a=this;a.initSticky(),a.initSMSValidator(),a.initValidator(),a.initSubmit(),a.initArea(),baseCalendar("#foundtime_id"),$('input[name="photo"]').bind("change",function(){a.uploadImage($(this).attr("id"))})},initSticky:function(){seajs.use(["sticky"],function(a){a(".main>.main-left",0)})},sendMail:function(){var a=$.trim($("#From_BaseInfo input[name='userMail']").val());if(""==a)return void remind("error","邮箱不能为空！");var b=/^([A-Za-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;return b.exec(a)?void $.ajax({type:"POST",url:"/common/emailValidate/create",data:{userCate:1,emailAddr:a},dataType:"json",success:function(a){a.code==zttx.SUCCESS?(remind("success","认证邮件发送成功！"),$("#sendMail").hide()):remind("error",a.message)},error:function(a,b,c){alert(c)}}):void remind("error","邮箱格式不正确！")},getPhoneCaptcha:function(){var a=this,b=$("#formMo input[name='userMobile']"),c=$.trim(b.val()),d=/^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/;return d.exec(c)?void $.ajax({type:"POST",url:"/common/phoneVerify",data:{userMobile:c,userType:1},dataType:"json",success:function(b){if(0==b.code){var c=$("#yanzm");a.shoTime(c,60,"getPhoneCaptcha()","点击获取验证码")}else remind("error","获取验证码失败！")},error:function(a,b,c){alert(c)}}):void remind("error","手机格式不正确！")},shoTime:function(a,b,c,d){var e=this;0==b?(a.attr("href","javascript:"+c+";"),a.text(d)):(a.attr("href","javascript:;"),a.text("重新发送("+b+")"),b--,setTimeout(function(){e.shoTime(a,b,c,d)},1e3))},initSMSValidator:function(){$("#duanxin").on("click",function(){var a=$("#formMo input[name='userMobile']"),b=$.trim(a.val()),c=/^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$/;if(!c.exec(b))return void remind("error","手机格式不正确！");var d=$("#formMo input[name='verifyCode']");return""==$.trim(d)?void remind("error","验证码不能为空！"):void $.ajax({type:"post",url:"/dealer/info/mobile",data:$("#formMo").serialize(),traditional:!0,dataType:"json",success:function(a){if(a.code==zttx.SUCCESS){remind("success","认证成功！"),$(".mobile a").remove();var c='<input type="hidden" name="userMobile" value='+b+" />";c+='<span class="err">·手机已认证</span>',$('.mobile input[name="dealerMobile"]').attr("readonly","readonly").val(b).after(c)}else remind("error",a.message)}})})},initValidator:function(){seajs.use(["$","validator","widget","umeditor","umeditor_config","umdeitor_style"],function($,a,b){function c(){var a=$('input[name="shopNum"]').val(),b=/^[0-9]*$/;return b.test(a)?Number(a)>1e4?!1:!0:!1}function d(){var a=$('input[name="empNum"]').val(),b=/^[0-9]*$/;return b.test(a)?Number(a)>1e4?!1:!0:!1}function e(){var a=$('input[name="monNum"]').val(),b=/^[0-9]+([.]{1}[0-9]+){0,1}$/;return b.test(a)?Number(a)>1e4?!1:!0:!1}function f(){var a=$('input[name="provinceName"]').val();return""==a||"请选择省"==a?!1:!0}function g(){var a=$('input[name="cityName"]').val();return""==a||"请选择市"==a?!1:!0}function h(){var a=$('input[name="areaName"]').val();return""==a||"请选择区"==a?!1:!0}b.autoRenderAll();var i=UM.getEditor("myEditor1",{initialFrameWidth:676,initialFrameHeight:300});i.ready(function(){}),a.addRule("dianhua",/^((\+?[0-9]{2,4}\-[0-9]{3,4}\-)|([0-9]{3,4}\-))?([0-9]{7,8})(\-[0-9]+)?$/,"请输入正确的{{display}}格式"),a.addRule("province",f,"请选择相应的省市区"),a.addRule("city",g,"请选择相应的省市区"),a.addRule("area",h,"请选择相应的省市区"),a.addRule("monNum",e,"格式不正确或者销售额过大"),a.addRule("empNum",d,"格式不正确或者销售额过大"),a.addRule("shopNum",c,"格式不正确或者销售额过大"),a.query("#From_BaseInfo").addItem({element:"[name=userMobile]",required:function(){var a=$.trim($("#tel").val());return""==a?!0:!1}}).addItem({element:"[name=dealerTel]",required:function(){var a=$.trim($("#mobile").val());return""==a?!0:!1},rule:"dianhua"}).addItem({element:"[name=dealerFax]",rule:"dianhua"}).addItem({element:"[name=provinceName]",rule:"province"}).addItem({element:"[name=cityName]",rule:"city"}).addItem({element:"[name=areaName]",rule:"area"}).addItem({element:"[name=monNum]",rule:"monNum"}).addItem({element:"[name=empNum]",required:!0,rule:"empNum"}).addItem({element:"[name=shopNum]",required:!0,rule:"shopNum"}),a.query("#From_BaseInfo").on("formValidated",function(a){if(!a){var b=$("#test1province :selected").text(),c=$("#test1city :selected").text(),d=$("#test1county :selected").text();"请选择省"!=b&&$('input[name="provinceName"]').val(b),"请选择市"!=c&&$('input[name="cityName"]').val(c),"请选择区"!=d&&$('input[name="areaName"]').val(d)}}),$(".department-items li,.role-items li").hover(function(){$(this).toggleClass("on")}),seajs.use(["dialog"],function(a){var b=new a({trigger:".clickatur",content:"#newChildrenID",width:400}).after("show",function(){$(".btn-saveid").click(function(){b.hide()})})}),0!=$(".certificate_box").length&&($(".certificate_box").on("mouseenter mouseleave",".item",function(a){"mouseenter"==a.type?$(this).find(".close").show():"mouseleave"==a.type&&$(this).find(".close").hide()}),$(".certificate_box").on("click",".close",function(a){var b=window.confirm("确定要删除该证书么？");b&&$(this).parents(".item").remove()}),0==$("#select_category").length)})},initSubmit:function(){$("#btn_save").click(function(){$.post("/dealer/account/infor2",$("#From_BaseInfo").serialize(),function(a){126e3==a.code?(remind("success","保存成功！"),setTimeout(function(){window.location.reload()},1e3)):remind("error",a.message)},"json")})},initArea:function(){$("#test1province").on("change",function(){var a=this.options[this.selectedIndex].text;"请选择省"==a&&($('input[name="cityName"]').val("请选择市"),$('input[name="areaName"]').val("请选择区")),$('input[name="provinceName"]').val(a)}),$("#test1city").on("change",function(){var a=this.options[this.selectedIndex].text;"请选择市"==a&&$('input[name="areaName"]').val("请选择区"),$('input[name="cityName"]').val(a)}),$("#test1county").on("change",function(){var a=this.options[this.selectedIndex].text;$('input[name="areaName"]').val(a)})},showImage:function(a,b){var c='<img src="'+b+'" style="width:100%;height:100%;"  alt=""/>';c+='<input type="hidden" name="'+a+'" value="'+b+'" />',$("#"+a).prev().text("").html(c)},uploadImage:function(a){var b=this;dialogLoading(function(c){seajs.use(["$","ajaxFileUpload"],function($){$.ajaxFileUpload({url:"/common/showImg",secureuri:!1,fileElementId:a,dataType:"json",success:function(d){$("#"+a).bind("change",function(){b.uploadImage(a)}),126e3==d.code&&b.showImage(a,d.message),c.hide()}})})})}},Basic_Information_Check={init:function(){var a=this;a.initSticky(),a.initValidator(),a.initCategory(),a.initSubmit(),$('input[name="photo"]').bind("change",function(){a.uploadImage($(this).attr("id"))})},initSticky:function(){seajs.use(["sticky"],function(a){a(".main>.main-left",0)})},initValidator:function(){var a=this;seajs.use(["widget","validator"],function(b,c){b.autoRenderAll(),c.addRule("IDCard",/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|x|X)$)/,"请输入正确的{{display}}格式"),c.addRule("faren",a.vidata,"请上传法人的证件照"),c.query("#From_BaseInfo").addItem({element:"[name=cardId]",required:!0,rule:"IDCard"})})},initCategory:function(){$.each(_dealList,function(a,b){var c='<li id="'+b.id+'" class="item" name="'+a+'"><span>'+b.item+'</span><i class="iconfont">&#xe60f;</i></li>';$("#select_category .select_inner").append(c)}),$("#select_category .select_inner").on("click",".item",function(){$("#select_category .item").removeClass("current"),$(this).addClass("current");var a=parseFloat($(this).attr("name"));$("#select_class .select_inner").empty(),$.each(_dealList[a].childs,function(a,b){var c='<li id="'+b.id+'" class="item" name="'+a+'"><span>'+b.item+'</span><i class="iconfont">&#xe60f;</i></li>';$("#select_class .select_inner").append(c)})}),$("#select_class").on("click",".item",function(){var a=parseFloat($(this).attr("id")),b=[];$("#select_product .select_inner li").each(function(){var a=parseFloat($(this).attr("no"));b.push(a)});var c=$(this).find("span").text();$(this).siblings().removeClass("current"),$(this).addClass("current");var d=!0;if($.each(b,function(b,c){return a==c?(d=!1,!1):void 0}),d){var e='<i style="display: none;" class="account-icon i-cancel close_icon"></i>';$("#select_product .select_inner").append('<li no="'+a+'" class="item"><span>'+c+"</span>"+e+'<input type="hidden" name="dealNos" value="'+a+'"  /></li>')}}),$("#select_product").on("mouseenter mouseleave click",".item",function(a){switch(a.type){case"mouseenter":$(this).find(".close_icon").show();break;case"mouseleave":$(this).find(".close_icon").hide();break;case"click":var b=$(this).attr("id");$($("#"+b)).removeClass("current"),$("#"+b).attr("clicked","false"),$(this).remove()}})},showImage:function(a,b){var c='<img src="'+b+'" style="width:100%;height:100%;"  alt=""/>';c+='<input type="hidden" name="'+a+'" value="'+b+'" />',$("#"+a).prev().text("").append(c),$("#photo_hidden").val("xxxx")},uploadImage:function(a){var b=this;dialogLoading(function(c){seajs.use(["$","ajaxFileUpload"],function($){$.ajaxFileUpload({url:"/common/showImg?fSize=5",secureuri:!1,fileElementId:a,dataType:"json",success:function(d){$("#"+a).bind("change",function(){b.uploadImage(a)}),126e3!=d.code?alert(d.message):b.showImage(a,d.message),c.hide()}})})})},vidata:function(){var a=$("#Imgz img").attr("src"),b=$("#Imgf img").attr("src");return null!=a&&null!=b?!0:($("#imgError i").html(""),$("#imgError i").html("<i style='color:red;'>法人身份证必须要上传</i>"),!1)},initSubmit:function(){$("#wancheng").click(function(){$.post("/dealer/account/check2",$("#From_BaseInfo").serialize(),function(a){126e3==a.code?remind("success","保存成功！"):remind("error",a.message)},"json")})}};