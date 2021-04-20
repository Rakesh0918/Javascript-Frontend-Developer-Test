 var arr=[103];
 var i, j;
  for (var i = 0; i < 5; i++) {
            arr[i]=prompt("enter element of an array");
    }
        document.write("Repeated Elements are :");
        for (i = 0; i < 5; i++)
        {
            for (j = i + 1; j < 5; j++)
            {
                if (arr[i] == arr[j])
                    document.write(arr[i] + " ");
            }
        }