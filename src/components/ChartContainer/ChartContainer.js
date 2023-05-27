import { useEffect } from "react";
import ChartJan from "../ChartJan/ChartJan"
import "./ChartContainer.css"
import ChartFeb from "../ChartFeb/ChartFeb";
import ChartMar from "../ChartMar/ChartMar";
import ChartApr from "../ChartApr/ChartApr";
import ChartMay from "../ChartMay/ChartMay";
import ChartJun from '../ChartJun/ChartJun'
import ChartJul from "../ChartJul/ChartJul";
import ChartAug from "../ChartAug/ChartAug";
import ChartSep from "../ChartSep/ChartSep";
import ChartOct from "../ChartOct/ChartOct";
import ChartNov from "../ChartNov/ChartNov";
import ChartDec from "../ChartDec/ChartDec";

const MONTHS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const ChartContainer = ({ filtered, filteredMonthJan, setFilteredMonthJan, filteredMonthFeb, setFilteredMonthFeb, filteredMonthMar, setFilteredMonthMar, filteredMonthApr, setFilteredMonthApr, filteredMonthMay, setFilteredMonthMay, filteredMonthJun, setFilteredMonthJun, filteredMonthJul, setFilteredMonthJul, filteredMonthAug, setFilteredMonthAug, filteredMonthSep, setFilteredMonthSep, filteredMonthOct, setFilteredMonthOct, filteredMonthNov, setFilteredMonthNov, filteredMonthDec, setFilteredMonthDec}) => {

    useEffect(()=>{
        const chartItemJan = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[0];
        })

        setFilteredMonthJan(chartItemJan);

        const chartItemFeb = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[1];
        })

        setFilteredMonthFeb(chartItemFeb);

        const chartItemMar = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[2];
        })

        setFilteredMonthMar(chartItemMar);

        const chartItemApr = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[3];
        })

        setFilteredMonthApr(chartItemApr);

        const chartItemMay = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[4];
        })

        setFilteredMonthMay(chartItemMay);

        const chartItemJun = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[5];
        })

        setFilteredMonthJun(chartItemJun);

        const chartItemJul = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[6];
        })

        setFilteredMonthJul(chartItemJul);

        const chartItemAug = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[7];
        })

        setFilteredMonthAug(chartItemAug);

        const chartItemSep = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[8];
        })

        setFilteredMonthSep(chartItemSep);

        const chartItemOct = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[9];
        })

        setFilteredMonthOct(chartItemOct);

        const chartItemNov = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[10];
        })

        setFilteredMonthNov(chartItemNov);

        const chartItemDec = filtered.filter((chartItem) => {
            return new Date(chartItem.createTime).getMonth() === MONTHS[11];
        })

        setFilteredMonthDec(chartItemDec);

        
    },[filtered])
        
   

    return <div className="chart-container">

        <ChartJan filteredMonthJan={filteredMonthJan} month="Jan" />
        <ChartFeb filteredMonthFeb={filteredMonthFeb} month="Feb" />
        <ChartMar filteredMonthMar={filteredMonthMar} month="Mar" />
        <ChartApr filteredMonthApr={filteredMonthApr} month="Apr" />
        <ChartMay filteredMonthMay={filteredMonthMay} month="May" />
        <ChartJun filteredMonthJun={filteredMonthJun} month="Jun" />
        <ChartJul filteredMonthJul={filteredMonthJul} month="Jul" />
        <ChartAug filteredMonthAug={filteredMonthAug} month="Aug" />
        <ChartSep filteredMonthSep={filteredMonthSep} month="Sep" />
        <ChartOct filteredMonthOct={filteredMonthOct} month="Oct" />
        <ChartNov filteredMonthNov={filteredMonthNov} month="Nov" />
        <ChartDec filteredMonthDec={filteredMonthDec} month="Dec" />

    </div>
}

export default ChartContainer;