import React ,{useState} from 'react'
import './PrintMatrix.css'
//here we create that matrix



export default function PrintMatrix(props) {
const [matrix1,setMatrix] = useState(Array.from({length: 4},()=> Array.from({length: 4}, () => 0)))



// Now Cell Val will be updating 
const [val00,setval00] = useState(1);
const [val01,setval01] = useState(1);
const [val02,setval02] = useState(1);
const [val03,setval03] = useState(1);

const [val10,setval10] = useState(1);
const [val11,setval11] = useState(1);
const [val12,setval12] = useState(1);
const [val13,setval13] = useState(1);

const [val20,setval20] = useState(1);
const [val21,setval21] = useState(1);
const [val22,setval22] = useState(1);
const [val23,setval23] = useState(1);

const [val30,setval30] = useState(1);
const [val31,setval31] = useState(1);
const [val32,setval32] = useState(1);
const [val33,setval33] = useState(1);




// Handling the color change
const [isActive00, setIsActive00] = useState(1);
const [isActive01, setIsActive01] = useState(0);
const [isActive02, setIsActive02] = useState(0);
const [isActive03, setIsActive03] = useState(0);

const [isActive10, setIsActive10] = useState(0);
const [isActive11, setIsActive11] = useState(0);
const [isActive12, setIsActive12] = useState(0);
const [isActive13, setIsActive13] = useState(0);

const [isActive20, setIsActive20] = useState(0);
const [isActive21, setIsActive21] = useState(0);
const [isActive22, setIsActive22] = useState(0);
const [isActive23, setIsActive23] = useState(0);

const [isActive30, setIsActive30] = useState(0);
const [isActive31, setIsActive31] = useState(0);
const [isActive32, setIsActive32] = useState(0);
const [isActive33, setIsActive33] = useState(1);




// Handling onclick events
const handleMatrixChange = (row, column) => {
    let copy = [...matrix1];
    
    if (row===0 && column===0) {
        setIsActive00(1);
        setval00(1);
    }
    else if (row===0 && column===1) {
        setval01((val01===1)?0:1);
        setIsActive01((val01===1?1:0));
        copy[row][column] = val01;
    }
    else if (row===0 && column===2) {
        setval02((val02===1)?0:1);
        setIsActive02((val02===1?1:0));
        copy[row][column] = val02;
    }
    else if (row===0 && column===3) {
        setval03((val03===1)?0:1);
        setIsActive03((val03===1?1:0));
        copy[row][column] = val03;
    }
    else if (row===1 && column===0) {
        setval10((val10===1)?0:1);
        setIsActive10((val10===1?1:0));
        copy[row][column] = val10;
    }
    else if (row===1 && column===1) {
        setval11((val11===1)?0:1);
        setIsActive11((val11===1?1:0));
        copy[row][column] = val11;
    }
    else if (row===1 && column===2) {
        setval12((val12===1)?0:1);
        setIsActive12((val12===1?1:0));
        copy[row][column] = val12
    }
    else if (row===1 && column===3) {
        setval13((val13===1)?0:1);
        setIsActive13((val13===1?1:0));
        copy[row][column] = val13;
    }
    else if (row===2 && column===0) {
        setval20((val20===1)?0:1);
        setIsActive20((val20===1?1:0));
        copy[row][column] = val20;
    }
    else if (row===2 && column===1) {
        setval21((val21===1)?0:1);
        setIsActive21((val21===1?1:0));
        copy[row][column] = val21;
    }
    else if (row===2 && column===2) {
        setval22((val22===1)?0:1);
        setIsActive22((val22===1?1:0));
        copy[row][column] = val22;
    }
    else if (row===2 && column===3) {
        setval23((val23===1)?0:1);
        setIsActive23((val23===1?1:0));
        copy[row][column] = val23;
    }
    else if (row===3 && column===0) {
        setval30((val30===1)?0:1);
        setIsActive30((val30===1?1:0));
        copy[row][column] = val30;
    }
    else if (row===3 && column===1) {
        setval31((val31===1)?0:1);
        setIsActive31((val31===1?1:0));
        copy[row][column] = val31;
    }
    else if (row===3 && column===2) {
        setval32((val32===1)?0:1);
        setIsActive32((val32===1?1:0));
        copy[row][column] = val32;
    }
    else if (row===3 && column===3) {
        setval33(1);
        setIsActive33(1);
    }
    copy[0][0]=1;
    copy[3][3]=1;
    setMatrix(copy);
    console.log(matrix1);
    props.getMatrix(matrix1);
  };



    return (
    <div>
        <table className='initialTable'>
            <tbody>
                <tr>
                <td>
                    <img src="./images/jerry.png" alt="jerry" width={70} height={70} />
                </td>
                    <td><input type="button" value={val01} onClick={e => handleMatrixChange(0, 1)} style={{
          backgroundColor: (isActive01===1) ?'white':'red',
          color: (isActive01===1) ?'white':'red'
        }} /></td>
                    <td><input type="button" value={val02} onClick={e => handleMatrixChange(0, 2)} style={{
          backgroundColor: (isActive02===1) ?'white':'red',
          color: (isActive02===1) ?'white':'red'
        }} /></td>
                    <td><input type="button" value={val03} onClick={e => handleMatrixChange(0, 3)} style={{
          backgroundColor: (isActive03===1) ?'white':'red',
          color: (isActive03===1) ?'white':'red'
        }} /></td>
                </tr>
                <tr>
                    <td><input type="button" value={val10} onClick={e => handleMatrixChange(1, 0)} style={{
          backgroundColor: (isActive10===1) ?'white':'red',
          color: (isActive10===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val11} onClick={e => handleMatrixChange(1, 1)} style={{
          backgroundColor: (isActive11===1) ?'white':'red',
          color: (isActive11===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val12} onClick={e => handleMatrixChange(1, 2)} style={{
          backgroundColor: (isActive12===1) ?'white':'red',
          color: (isActive12===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val13} onClick={e => handleMatrixChange(1, 3)} style={{
          backgroundColor: (isActive13===1) ?'white':'red',
          color: (isActive13===1) ?'white':'red'
        }}/></td>
                </tr>
                <tr>
                    <td><input type="button" value={val20} onClick={e => handleMatrixChange(2, 0)} style={{
          backgroundColor: (isActive20===1) ?'white':'red',
          color: (isActive20===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val21} onClick={e => handleMatrixChange(2, 1)} style={{
          backgroundColor: (isActive21===1) ?'white':'red',
          color: (isActive21===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val22} onClick={e => handleMatrixChange(2, 2)} style={{
          backgroundColor: (isActive22===1) ?'white':'red',
          color: (isActive22===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val23} onClick={e => handleMatrixChange(2, 3)} style={{
          backgroundColor: (isActive23===1) ?'white':'red',
          color: (isActive23===1) ?'white':'red'
        }}/></td>
                </tr>
                <tr>
                    <td><input type="button" value={val30} onClick={e => handleMatrixChange(3, 0)} style={{
          backgroundColor: (isActive30===1) ?'white':'red',
          color: (isActive30===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val31} onClick={e => handleMatrixChange(3, 1)} style={{
          backgroundColor: (isActive31===1) ?'white':'red',
          color: (isActive31===1) ?'white':'red'
        }}/></td>
                    <td><input type="button" value={val32} onClick={e => handleMatrixChange(3, 2)} style={{
          backgroundColor: (isActive32===1) ?'white':'red',
          color: (isActive32===1) ?'white':'red'
        }}/></td>
                    <td>
                        <img src="./images/cheese.png" width={70} height={65} alt="cheese" />
                    </td>
                </tr>
            </tbody>
        </table>
        { console.log(matrix1)}
    </div>
  )
 
}
