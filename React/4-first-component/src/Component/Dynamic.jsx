const Dynamic = ()=>{
    const StudentName='Ashraf';
    const Marks =[45,67,87,56,65];
    const score =()=>{
        let sum=0;
        for(let i=0;i<Marks.length;i++){
            sum+=Marks[i];
        }
        return sum/Marks.length;
    }
        return <p>{StudentName} scored {score()}% in SSC Exam</p>;

}

export default Dynamic