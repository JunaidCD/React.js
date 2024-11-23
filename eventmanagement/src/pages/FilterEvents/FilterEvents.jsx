import {useState} from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SearchEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation";
import './FilterEvents.css';
const  FilterEvents = () =>{
    const [monthYear,setMonthYear]=useState({
        selectedMonth:null,
        selectedYear:null,
    })

    const getMonthYear = (selectedMonth,selectedYear)=>{
       setMonthYear({selectedYear,selectedMonth})
    }

    return(
        <div>
            <Navigation/>
            <FilterBox getMonthYear={getMonthYear}/>
            <SearchEventList monthYear={monthYear}/>

        </div>
    )
}
export default FilterEvents;