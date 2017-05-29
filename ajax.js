function ajax(url, fnSucc, fnFaild)
{
	//1.create ajax object
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();
	}
	else
	{//IE
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}

	//2.connect the server
	oAjax.open('GET', url, true);


	//3.send request
	oAjax.send();

	//4.receive the response
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if(oAjax.status==200)
			{
				fnSucc(oAjax.responseText);
			}
			else
			{
				
				if(fnFaild)
				{
					fnFaild();
				}
			}
		}
	};
}
