import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';

class ExpenseChart extends Component {

    state = { 
    data : {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    }
};

    render(){
        const options = {
            legend: {
                display: false
            },
            responsive: true,
            maintainAspectRatio:false,
            
        }
        return(

                <Pie
                data = {this.state.data} 
                height = {300}
                width = {50}
                options = {options}
                />
        )
    }

}


export default ExpenseChart;