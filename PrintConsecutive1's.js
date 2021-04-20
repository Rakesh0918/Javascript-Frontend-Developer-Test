 var N = prompt("enter size of array");
 var arr=[N];
 var count=0;
 var result=0;
        for (var i = 0; i < N; i++) {
            arr[i]=prompt("enter element of an array");
    }
    for(var i = 0; i < N; i++){
    	if(arr[i]==0)
    	{
    		count = 0;
    	}
    	else
    	{
    		count++;
    		result=Math.max(result,count);
    	}
    
    }
		document.write(result);
