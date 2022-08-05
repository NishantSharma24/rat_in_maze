import React, { useState } from 'react'
import PrintMatrix from './PrintMatrix';
import'./Rat.css'
import Solution from './Solution';

export default function Rat() {
    
let possiblePaths = [];
let path = "";
let MAX =  4;
function isSafe(row, col, m, n, visited)
{
    if (row === -1 || row === n || col === -1 ||
         col === n || visited[row][col] ||
                           m[row][col] === 0)
        return false;
  
    return true;
}
 
function printPathUtil(row, col, m, n, visited)
{
    if (row === -1 || row === n || col === -1 ||
         col === n || visited[row][col] ||
                           m[row][col] === 0)
        return;
    if (row === n - 1 && col === n - 1)
    {
        possiblePaths.push(path);
        return;
    }
    visited[row][col] = true;
    if (isSafe(row + 1, col, m, n, visited))
    {
        path += 'D';
        printPathUtil(row + 1, col, m, n,
                      visited);
        path = path.substring(0, path.length - 1);
    }
  
    // Check if the left move is valid
    if (isSafe(row, col - 1, m, n, visited))
    {
        path += 'L';
        printPathUtil(row, col - 1, m, n,
                      visited);
        path = path.substring(0, path.length - 1);
    }
  
    // Check if the right move is valid
    if (isSafe(row, col + 1, m, n, visited))
    {
        path += 'R';
        printPathUtil(row, col + 1, m, n,
                      visited);
        path = path.substring(0, path.length - 1);
    }
  
    // Check if the upper move is valid
    if (isSafe(row - 1, col, m, n, visited))
    {
        path += 'U';
        printPathUtil(row - 1, col, m, n,
                      visited);
        path = path.substring(0, path.length - 1);
    }
    visited[row][col] = false;
}
function printPath(m, n)
{
    let visited = new Array(n);
    for(let i = 0; i < n; i++)
    {
        visited[i] = new Array(MAX);
        for(let j = 0; j < MAX; j++)
            visited[i][j] = false;
    }
    printPathUtil(0, 0, m, n, visited);
}

//Printing the total paths
// console.log(possiblePaths);


// Driver code
let [m ,setm] =useState(Array.from({length: 4},()=> Array.from({length: 4}, () => 0)));

printPath(m,4);
let totalPaths =[];
for (let i = 0; i < possiblePaths.length; i++) {
    let s = possiblePaths[i];
    let ptr = 0;
    let x =0,y=0;
    let matrix = [];
    // white is set
    for(let i = 0;i<4;i++){
        matrix[i] = new Array(4);
        for(let j = 0;j<4;j++){
            matrix[i][j] = 0;
        }
    }
    // red is set
    for(let i = 0;i<4;i++){
        for(let j = 0;j<4;j++){
            if(m[i][j]===0){
                matrix[i][j]=0;
            }
        }
    }
    while (ptr<s.length) {
        if(s[ptr]==='R'){
            y++;
        }
        else if(s[ptr]==='L'){
            y--;
        }
        else if(s[ptr]==='U'){
            x--;
            
        }
        else{
            x++;
        }
        matrix[x][y] =2;
        ptr++;
    }
    matrix[0][0]=1;
    matrix[3][3] =1;
    for (let i = 0; i < 4; i++) {
        for(let j = 0 ;j < 4; j++){
            if (matrix[i][j]===0 && m[i][j]===1) {
                matrix[i][j]=1;
            }
        }
    }
    totalPaths.push(matrix);
} 
// color blocked red matrix value =0
// color white value =1;
// color green value =2;
const getMatrix =(matrix) =>{
    // console.log("inside this ");
    setm(matrix);
    console.log(matrix);
    printPath(m, 4);
    
}
console.log(totalPaths);
  return (
    <div className='container'>
        <h1 id='title'>RAT IN A MAZE !!!</h1>
        <PrintMatrix getMatrix={getMatrix} />
        <h3 className='totaltext'>Total Paths are : {totalPaths.length}</h3>
        <ul type ="none" className='containerul'>
        {totalPaths.map((value) =>{
            return <><li key={value} className="solution"><Solution arr ={value}/></li></>
        })}
        </ul>
        
    </div>
  )
}
