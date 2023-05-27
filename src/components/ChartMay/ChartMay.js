import React from 'react'
import './ChartMay.css'
const ChartMay = (props) => {
    const { month, filteredMonthMay } = props;
    const TARGET_INCOME = 10000;
    const chartMay = filteredMonthMay.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartMay) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartMay.length; i++) {    
            totalExpenseMonth += chartMay[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartMay);

    let percent = Math.round((totalExpense / TARGET_INCOME)*100);
    let stylePercent = percent ? (percent) : ("")
    let exceedPercent = (percent >= 100) ? "chart-percent-item" : "style-chart" 
    return <div className="chart-item">
        <div style={{position:"relative"}} className="chart-percent">
            <div style={{
                height:`${percent}%`
            }} className={exceedPercent} >{stylePercent}</div>
        </div>
        <p>{month}</p>
    </div>


}

export default ChartMay