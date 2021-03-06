import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';


export default function Chart(crowdData) {
    const [chartData, setChartData] = useState(crowdData.crowdData);

    useEffect(()=>{
        setChartData(crowdData.crowdData);
    });

    return (

        <div className="table-responsive container">

            <Bar 
                data={{
                    labels: ['12 AM','','','3 AM','','','6 AM','','','9 AM','','','12 PM','','','3 PM','','','6 PM','','','9 PM','',''],
                    datasets: [
                        {
                            label: '',
                            backgroundColor: 'rgba(220,220,220)',
                            borderColor: 'rgba(192,192,192)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(211,211,211)',
                            hoverBorderColor: 'rgba(169,169,169)',
                            data: chartData
                        }
                    ]
                }}
                
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

