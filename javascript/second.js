function objPath(obj, path) {
    if (!path || !obj) {
      return null;
    }
    var pathParams = path.split(".");
    if(pathParams.length === 1) {
      return obj[pathParams[0]] || null;
    } else {
      var firstParam = obj[pathParams[0]];
      pathParams.shift();
      return objPath(firstParam, pathParams.join("."));
    }
  }
  


  function minimumSwap(ratings) {
    var n = ratings.length;
    var ratingsPos = [];
    for (var i = 0; i < n; i++) {
      ratingsPos[i] = [i, ratings[i]];
    }
    ratingsPos.sort(function(a, b) {
      return +b[1] - +a[1];
    });
    var visited = new Array(n);
    var swaps = 0;
    
    for (var i = 0; i < n; i++) {
      if (visited[i] || ratingsPos[i][0] == i) {
        continue;
      }
      var cycle_size = 0;
          var j = i;
          while (!visited[j]) {
        visited[j] = 1;
        j = ratingsPos[j][0];
        cycle_size += 1;
      }
      if (cycle_size > 0) {
        swaps += (cycle_size - 1)
      }
    }
    return swaps;
  }
  


function minimumSwaps(ratings) {
    let swap=0;
    for(let i=0;i<a.length;i++){
        if(i+1!=a[i]){
            let t=i;
            while(a[t]!=i+1){
                t++;  
            }
            let temp=a[t];
            a[t]=a[i];
            a[i]=temp;
            swap++;
        }
    }
    return swap;

}