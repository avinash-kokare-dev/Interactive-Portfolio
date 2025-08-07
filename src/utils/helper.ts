export const getYearOfExperience = () => {
    const joiningYear = 2021;
    const joiningMonth = 5;
    const date = new Date();
    
    let yearOfExperience;
    let monthOfExperience;

    
    if(date.getMonth() === joiningMonth){
        yearOfExperience = date.getFullYear() - joiningYear;
        return `${yearOfExperience}`;
    }else if(date.getMonth() > joiningMonth){
        yearOfExperience = date.getFullYear() - joiningYear;
        monthOfExperience = date.getMonth() - joiningMonth;
    }else{
        yearOfExperience = date.getFullYear() - joiningYear - 1;
        monthOfExperience = (12 - joiningMonth) + date.getMonth();
    }
    return `${yearOfExperience}.${monthOfExperience}+`
}