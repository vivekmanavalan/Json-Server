import React, {Component} from "react";
import axios from 'axios';
import '../css/AddExpense.css';

class AddExpense extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            name : "",
            place : "",
            company : "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount () {
        
    }
    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name] : value,
        });
    }
    handleSubmit(){
        console.log("called");
        axios.post('http://localhost:5000/Expenses', {
            date: this.state.name,
            place: this.state.place,
            company: this.state.company
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        }); 
    }
    
    
    render(){
        return (
            <div className="expense">
                 <h3 className="company">CHITRA COLD TRANSPORTS</h3>
                 <div className="form_div">  
                <form className="expense_form">
                    Name: <br/> <input type="date" className="inputStyle" name="date" onChange={this.handleChange} placeholder="select date"/><br/><br/>
                    Place: <br/><input type="text" name="place" onChange={this.handleChange} placeholder="enter name"/><br/><br/>
                    Company: <br/><input type="text" name="company" onChange={this.handleChange} /><br/><br/>
                </form>
                <input type="submit" onClick={this.handleSubmit} value="Register"/>
                </div>
            </div>
        );
    }
}
export default AddExpense;