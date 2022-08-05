import React  from 'react'
//here we print the solution matrix if any

export default function Solution({arr}) {

    return (
    <div>
        <table>
            <tbody>
                <tr>
                    <td><input type="button" value={arr[0][0]} style={{
          backgroundColor: (arr[0][0]===1) ?'white':(arr[0][0]===2?'green':'red'),
          color: (arr[0][0]===1) ?'white':(arr[0][0]===2?'green':'red')
        }} /></td>
                    <td><input type="button" value={arr[0][1]} style={{
          backgroundColor: (arr[0][1]===1) ?'white':(arr[0][1]===2?'green':'red'),
          color: (arr[0][1]===1) ?'white':(arr[0][1]===2?'green':'red')
        }} /></td>
                    <td><input type="button" value={arr[0][2]} style={{
          backgroundColor: (arr[0][2]===1) ?'white':(arr[0][2]===2?'green':'red'),
          color: (arr[0][2]===1) ?'white':(arr[0][2]===2?'green':'red')
        }} /></td>
                    <td><input type="button" value={arr[0][3]} style={{
          backgroundColor: (arr[0][3]===1) ?'white':(arr[0][3]===2?'green':'red'),
          color: (arr[0][3]===1) ?'white':(arr[0][3]===2?'green':'red')
        }} /></td>
                </tr>
                <tr>
                    <td><input type="button" value={arr[1][0]} style={{
          backgroundColor: (arr[1][0]===1) ?'white':(arr[1][0]===2?'green':'red'),
          color: (arr[1][0]===1) ?'white':(arr[1][0]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[1][1]} style={{
          backgroundColor: (arr[1][1]===1) ?'white':(arr[1][1]===2?'green':'red'),
          color: (arr[1][1]===1) ?'white':(arr[1][1]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[1][2]} style={{
          backgroundColor: (arr[1][2]===1) ?'white':(arr[1][2]===2?'green':'red'),
          color: (arr[1][2]===1) ?'white':(arr[1][2]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[1][3]} style={{
          backgroundColor: (arr[1][3]===1) ?'white':(arr[1][3]===2?'green':'red'),
          color: (arr[1][3]===1) ?'white':(arr[1][3]===2?'green':'red')
        }}/></td>
                </tr>
                <tr>
                    <td><input type="button" value={arr[2][0]} style={{
          backgroundColor: (arr[2][0]===1) ?'white':(arr[2][0]===2?'green':'red'),
          color: (arr[2][0]===1) ?'white':(arr[2][0]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[2][1]} style={{
          backgroundColor: (arr[2][1]===1) ?'white':(arr[2][1]===2?'green':'red'),
          color: (arr[2][1]===1) ?'white':(arr[2][1]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[2][2]} style={{
          backgroundColor: (arr[2][2]===1) ?'white':(arr[2][2]===2?'green':'red'),
          color: (arr[2][2]===1) ?'white':(arr[2][2]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[2][3]} style={{
          backgroundColor: (arr[2][3]===1) ?'white':(arr[2][3]===2?'green':'red'),
          color: (arr[2][3]===1) ?'white':(arr[2][3]===2?'green':'red')
        }}/></td>
                </tr>
                <tr>
                    <td><input type="button" value={arr[3][0]} style={{
          backgroundColor: (arr[3][0]===1) ?'white':(arr[3][0]===2?'green':'red'),
          color: (arr[3][0]===1) ?'white':(arr[3][0]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[3][1]} style={{
          backgroundColor: (arr[3][1]===1) ?'white':(arr[3][1]===2?'green':'red'),
          color: (arr[3][1]===1) ?'white':(arr[3][1]===2?'green':'red')
        }}/></td>
                    <td><input type="button" value={arr[3][2]} style={{
          backgroundColor: (arr[3][2]===1) ?'white':(arr[3][2]===2?'green':'red'),
          color: (arr[3][2]===1) ?'white':(arr[3][2]===2?'green':'red')
        }}/></td>
                    <td><img src="./images/win.png" alt="win" width={70} height={70} /></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
 
}
