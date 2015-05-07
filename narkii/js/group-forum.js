$.ajax({
    type : "POST",
    url : "http://112.74.102.213/test/group-forum.php",
    dataType : "jsonp",
    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
    jsonpCallback:"success_jsonpCallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
    success : function(data){ 
       
//	var dataString = ;
	var groupString = JSON.stringify(data.group[0].name);
	//alert(groupString);
	
	var length = data.group.length;
	//alert(length);
	
	var length1 = data.forum[2].length;
	//alert(length1);
	for(var i =0;i<length;i++)
	{
		//alert(JSON.stringify(data.forum));
		$("#ul1").append("  <li class=\"mui-table-view-cell mui-collapse\"> " + "<a class=\"mui-navigate-right\" href=\"#\"> " + data.group[i].name + "</a>"  + "  </li> ");
		for(var j =0;j<data.forum[i].length;j++)
		{ 
			var forumString =JSON.stringify(data.forum[i][j].name);
			//alert(forumString);
			$("#ul1").append("  <li class=\"mui-table-view-cell\"><a class=\"mui-navigate-right\" href=\"list.html\"> " + forumString   +  "</a></li> ");
		}
	
	}
	
	//alert(length1);
    },
    error:function(){
        alert('fail');
    }
});

