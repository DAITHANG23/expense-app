import './ChartJan.css'

const ChartJan = (props) => {

    const { month, filteredMonthJan } = props;
    const TARGET_INCOME = 10000;
    const chartJan = filteredMonthJan.map((chartItem) => {
        const { amount } = chartItem;
        let expense = +amount

        let totalExpense = 0;
        totalExpense = totalExpense + expense;
        return totalExpense;

    })

    const totalExpenseMonth = (chartJan) => {
        let totalExpenseMonth = 0;
        for (let i = 0; i < chartJan.length; i++) {    
            totalExpenseMonth += chartJan[i]
        }
        return totalExpenseMonth;
    }
    const totalExpense = totalExpenseMonth(chartJan);

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

export default ChartJan