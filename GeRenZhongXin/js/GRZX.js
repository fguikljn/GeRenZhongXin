//表单验证
$("form .phone").on("click",function(){
    $(this)[0].setCustomValidity("");
});
$("form .phone").on("invalid",function(){
    $(this)[0].setCustomValidity("请填写正确格式的手机号");
});