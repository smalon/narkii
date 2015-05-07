$.ajax({
    type : "POST",
    url : "http://112.74.102.213/test/linktest.php",
    dataType : "jsonp",
    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
    jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
    success : function(data){
  
	var str = JSON.stringify(data);
	//var json1 = eval(data);
	//alert(json1[0].subject);
	 var t3 = str.substr(1,str.length-2);//比标准的json对象前后多了一对括号，去掉
	//alert(t3);
	var myobj=eval(t3); 
	for(var i=myobj.length-1;i>=0;i--){ 
	   // alert(myobj[i].subject); 
	   var title = myobj[i].subject.substr(0,15)+"......";
	   $("div").append("<li><a href=\"#\">"+title+"</a></li>");
	   $("li").addClass("mui-table-view-cell");
	   $("a").addClass("mui-navigate-right");
	}
	
	  
    },
    error:function(){
        alert('fail');
    }
});

