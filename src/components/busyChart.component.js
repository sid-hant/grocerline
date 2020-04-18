import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export class BusyChart extends Component {
    
    constructor (props){
        super(props);

        this.state = {
            chartData: {
                labels: ['12 AM','1','2','3 AM','4','5','6 AM','','','9 AM','','','12 PM','','','3 PM','','','6 PM','','','9 PM','',''],
                datasets: [
                  {
                    label: 'Busy Level',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                  }
                ]
              }
        }
    }

    componentDidMount(){
        this.setState({ 
            chartData : {
                labels: ['12 AM','','','3 AM','','','6 AM','','','9 AM','','','12 PM','','','3 PM','','','6 PM','','','9 PM','',''],
                datasets: [
                  {
                    label: '',
                    backgroundColor: 'rgba(220,220,220)',
                    borderColor: 'rgba(192,192,192)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(211,211,211)',
                    hoverBorderColor: 'rgba(169,169,169)',
                    data: this.props.data
                  }
                ]
              } 
        })
    }



    render() {



        return (
            <div className="table-responsive container">
                <Bar data={this.state.chartData}
                    options={
                        {   
                            maintainAspectRatio: false,
                            legend: {
                                display: false
                            },
                            scales: {
                                yAxes:[{
                                        display: false,
                                        scaleLabel: {
                                            display: false,
                                            labelString: 'Busy Level'
                                        },
                                        ticks: {
                                            min: 0,
                                            max: 3,
                                            stepSize: 1,
                                            callback: function(label, index, labels){
                                                switch (label){
                                                    case 0: return ''
                                                    case 1: return ''
                                                    case 2: return ''
                                                    case 3: return ''
                                                }
                                            }
                                        },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                ]
                            }
                        }
                    }
                />
            </div>
        )
    }
}

export default BusyChart
