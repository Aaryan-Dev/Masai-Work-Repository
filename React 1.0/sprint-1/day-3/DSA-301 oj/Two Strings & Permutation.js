// You are given two strings S1 and S2 of equal number of characters. Your task is to comment if any permutation of one string can form other or not.

// If it is possible, print "Yes" (without quotes)

// If it is not possible, print "No" (without quotes)


function permutation(str1, str2) {

   str1 = str1.split("")
 
  str1.sort(function(a, b){
      
      if(a>b){
          return 1
      }
      else if(a<b){
          return -1
          
      }
      else{
          return 0
      }
  });
  
  
  
   str2 = str2.split("")
 
  str2.sort(function(a, b){
      
      if(a>b){
          return 1
      }
      else if(a<b){
          return -1
          
      }
      else{
          return 0
      }
  });
  
  if(str1.join("")==str2.join("")){
      console.log("Yes");
  }else{
      console.log("No");
  }
   
      
}

