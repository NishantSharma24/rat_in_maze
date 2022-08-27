
# Rat in Maze

In this problem, there is a given maze of size N x N. 
The source and the destination location is top-left cell and bottom right cell respectively.
Some cells are valid to move and some cells are blocked. If one rat starts moving from start vertex to destination vertex, we have to find that is there any way to complete the path, if it is possible then mark the correct path for the rat.



## Documentation

This Problem generally comes under the topic of backtracking which one can study from various website.
  
  
  There are total 3 React Components used inside this which include :  
    
  **1. Index.js:**  
   ```
  This component is just the entry point of our website.
   ```
   **2. App.js:**  
   ```
  This component is used to render the Rat.js component , also includes its css file.

   ```  
  **3. Rat.js:**  
   ```
   The component contains the main functioning of the website. There is the PrintPathUtil function which covers all the path that can be possible to reach our target cell.
   Then we have possible path array that will be converted to a matrix as our final result and the solution.js(React component) is used to render the available paths.
  
   ```
   **4. PrintMatrix.js:**  
   ```
   The initial Matrix is constructed using this component and different useState variables are used to work for respective cell. 
  
   ```
   **5. Solution.js:**  
   ```
   The Rat.js component calls this component only when we have a direct path to the target cell. The path is colored green according to value present inside the cell. 
  
   ```
    
   ## 💫💫https://nishantsharma24.github.io/rat_in_maze/ 💫💫##

## Screenshots

Initially the Red buttons are shown in order to show the blocked paths but when you press or click on them 
they will get unblock and their color will change to white which means now they can be used for our available paths 😃. 
![App Screenshot](https://i.postimg.cc/RC8SPC6d/1.png)

**After you click on the buttons:**
![App Screenshot](https://i.postimg.cc/XJVxrvKR/2.png)

**Result :**
It shows the path in green color.
![App Screenshot](https://i.postimg.cc/7L1mPzz1/3.png)


## Installation

Download the Project code inside the master branch of current repository then extract files to your working folder.
  

Install Rat_in_Maze Dependencies with npm

```bash
  npm install  
```
To run the project on the LocalHost use below command
```bash
  npm start
```
