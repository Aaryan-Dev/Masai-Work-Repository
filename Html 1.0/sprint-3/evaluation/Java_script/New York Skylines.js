// Gini and Johnny are on a trip to New York, and are in awe of the marvellous tall buildings of the city

// So, they decided to play a game

// They decided to give every building a rating, such that

// If the building is greater than the building to its left, and the building to its right, it gets 2 point

// If the building is greater than one of the buildings to it's left or the buildings to it right, it get's 1 point

// If the building is smaller than the building to it's left and the building to it's right, it gets 0 point

// Given an array, which gives the height of the buildings, find out the score of each building

// Note : You don't have to take the input
// Just complete the function and print the required function


function newYorkBuildings(N,arr){
    
    
    let bag = ""
    
    
    for(i=0; i<arr.length; i++){
        
        if(i===0){
            if(arr[i]<=arr[i+1]){
        bag = bag + 0+ " ";
    }else if(arr[i]>arr[i+1]){
       bag = bag +  1 + " ";
    }
        }
        else{
        
        if(arr[i]<=arr[i-1]&& arr[i]<=arr[i+1]){
            bag = bag + 0+ " ";
        }
        else if(arr[i]>arr[i-1]&& arr[i]>arr[i+1]){
            bag = bag + 2+ " ";
        }
        else if((arr[i]>arr[i-1]&&arr[i]<=arr[i+1])||(arr[i]<=arr[i-1] && arr[i]>arr[i+1])){
            bag = bag + 1+ " ";
        }
    }
    }
    if(arr[arr.length-1]<=arr[arr.length-1-1]){
        bag = bag + 0 + " ";
    }else if(arr[arr.length-1]>arr[arr.length-1-1]){
      bag = bag +  1 + " ";
    }
        console.log(bag);
        
}