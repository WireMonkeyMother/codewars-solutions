// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//MY SOLUTION---
function maps(x){
    const y = [];
    for(let i = 0; i<x.length;i++){
      y[i] = x[i]*2;
    }
    return y;
  }