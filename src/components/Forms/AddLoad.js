import React, {Component} from "react";
import axios from 'axios';

class AddLoad extends Component {
    
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
        axios.post('http://localhost:4000/data', {
            name: this.state.name,
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
            <div>
                <form>
                    Name: <br/> <input type="text" name="name" onChange={this.handleChange} /><br/><br/>
                    Place: <br/><input type="text" name="place" onChange={this.handleChange} /><br/><br/>
                    Company: <br/><input type="text" name="company" onChange={this.handleChange} /><br/><br/>
                </form>
                <input type="submit" onClick={this.handleSubmit} value="Register"/>
            </div>
        );
    }
}
export default AddLoad;