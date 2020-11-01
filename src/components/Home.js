import React,{Component} from 'react';
import './css/Home.css';
import Nav from './nav';
import Pie from './charts/ExpenseChart';

class Home extends Component {
    render(){
        return(
            
            <div>
                    <Nav />
                    <div className="chartdiv">
                        <Pie />
                    </div>
            </div>
        );
    }
}

export default Home;