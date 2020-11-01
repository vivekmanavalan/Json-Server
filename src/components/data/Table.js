import React,{useState, useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import '../css/Table.css';

 const Table = (props) => {
    const [data,setData] = useState({});
    const [isEditable, setIsEditable] = useState(false);
    const [rowIndex, setRowIndex] = useState({});
    const [tempValues, setTempValues] = useState({
        tempdate:'',
        tempvehicleNo:'',
        tempgroup:'',
        tempvendor:'',
        tempqty:'',
        tempparticulars:'',
        temprate:'',
        tempamount:''
    });

    useEffect(() => {
        const fetchApi = async() => {
            const getData = await fetch("http://localhost:5000/Expenses");
            const value = await getData.json();
            setData(value);
        }
        fetchApi();   
    },[]);

    const handleChange = (e) => {
        
        let name = "temp"+e.target.name;
        let value=e.target.value;
        setTempValues({
            ...tempValues,
            [name]:value
        });
    }

    const handleSubmit = () => {
        let tempdatas= data;
        let rownum = rowIndex.rowIndex.rowIndex;
        console.log("data",data);
        tempdatas[rownum].Date = tempValues.tempdate;
        tempdatas[rownum].Group = tempValues.tempgroup;
        tempdatas[rownum].Amount =  tempValues.tempamount;
        tempdatas[rownum].Vendor = tempValues.tempvendor;
        tempdatas[rownum].Particulars = tempValues.tempparticulars;
        tempdatas[rownum].Qty = tempValues.tempqty;
        tempdatas[rownum].Rate = tempValues.temprate;
        tempdatas[rownum].VehicleNo = tempValues.tempvehicleNo;
        setData(tempdatas);        

        handleClose();
    }
    
    const handleEdit = (rowIndex) => {
        setIsEditable(true);
        setRowIndex({
            rowIndex
        })
        setTempValues({
            ...tempValues,
            tempdate: rowIndex.rowData[0],
            tempvehicleNo: rowIndex.rowData[1],
            tempgroup:rowIndex.rowData[2],
            tempvendor:rowIndex.rowData[3],
            tempparticulars:rowIndex.rowData[4],
            tempqty:rowIndex.rowData[5],
            temprate:rowIndex.rowData[6],
            tempamount:rowIndex.rowData[7],
        })
        
    }


    
    const handleClose = () => {
        setIsEditable(false);
    }
    
    const columns = ["Date", "VehicleNo","Group","Vendor","Particulars","Qty","Rate","Amount",
    {
        name: "Edit",
        options: {
          filter: false,
          sort: false,
          empty: true,
          customBodyRender: (dataIndex,rowIndex) => {
            return (
              <button className="edit_form" onClick={() => handleEdit(rowIndex)}>
                Edit
              </button>
            );
          }
        }
      },
        ];
    const options = {
        selectableRows: "none",
        checked:false,
        //background: "linear-gradient(to right, rgb(244, 107, 69), rgb(238, 168, 73))"
    }
return(
    <div>
        {isEditable ?
        <div className="modal">
            <header className="header"><strong>Edit Expense</strong></header>
            <div className="modal_form">
            <form className="modal_content">
                Date: &nbsp;&ensp;<input type="text" inputMode="text" name="date" className="form_input" defaultValue={tempValues.tempdate} onChange={handleChange}/><br/><br/>
                Vehicle No: &nbsp;&ensp;<input type="text" name="vehicleNo" className="form_input" defaultValue={tempValues.tempvehicleNo} onChange={handleChange} /><br/><br/>
                Group: &nbsp;&ensp;<input type="text" name="group" className="form_input" defaultValue={tempValues.tempgroup} onChange={handleChange} /><br/><br/>
                Particulars: &nbsp;&ensp; <input type="text" name="particulars" className="form_input" defaultValue={tempValues.tempvehicleNo} onChange={handleChange} /><br/><br/>
            </form>
            <form className="modal_content">
                Vendor: &nbsp;&ensp;<input type="text" name="vendor" className="form_input" defaultValue={tempValues.tempvendor} onChange={handleChange} /><br/><br/>
                Quantity: &nbsp;&ensp;<input type="text" name="qty" className="form_input" defaultValue={tempValues.tempqty} onChange={handleChange} /><br/><br/>
                Rate: &nbsp;&ensp;<input type="text" name="rate" className="form_input" defaultValue={tempValues.temprate} onChange={handleChange} /><br/><br/>
                Amount: &nbsp;&ensp;<input type="text" name="amount" className="form_input" defaultValue={tempValues.tempamount} onChange={handleChange} /><br/><br/>

            </form>
            </div>
            <button name="save" className="button_form" value="save" onClick={handleSubmit}>Save</button>&ensp;
            <button name="cancel" className="button_form" onClick={handleClose}>Cancel</button>
        </div>
        :
        null
        }
        {data.length > 3 ?
        <MUIDataTable 
        data={data}
        columns = {columns}
        options = {options}/>
        :
        <h1>Fetching data...</h1>
        }
    </div>
);
    
 }

 export default Table;