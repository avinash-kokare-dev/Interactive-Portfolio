export const getYearOfExperience = () => {
    const joiningYear = 2021;
    const joiningMonth = 6;
    const date = new Date();
    
    let yearOfExperience;
    let monthOfExperience;

    if(date.getMonth() + joiningMonth < 12){
        monthOfExperience = date.getMonth() - joiningMonth < 0 ? date.getMonth() - joiningMonth + 12 : date.getMonth() - joiningMonth;
        yearOfExperience = date.getFullYear() - joiningYear - 1;
    }else if(date.getMonth() + joiningMonth >= 12){
        monthOfExperience = joiningMonth - date.getMonth();
        yearOfExperience = date.getFullYear() - joiningYear - 1;
    }

    return `${yearOfExperience}.${monthOfExperience}+`
}