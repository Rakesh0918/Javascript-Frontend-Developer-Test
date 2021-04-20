 var N = prompt("enter size of array");
 var arr=[N];
        for (var i = 0; i < N; i++) {
            arr[i]=parseInt(Math.random()*N);
    }
    for(var i = 0; i < N; i++){
    	if(arr[i]%2==0)
    	{
		document.write(arr[i]);
    	}
    }