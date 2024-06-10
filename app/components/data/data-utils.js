import data from './data.json';
export const getSchoolById = (id) => {
    return data.find(item => item.id === Number(id));
};
export const raitingSchool=(school)=>{
  const raitingTop=Number(school.raitingtop);
  const raitingBad=Number(school.raitingbad);
  const raitingMedium=Number(school.raitingmedium);
  const allRaiting=[raitingTop*5,raitingBad,raitingMedium*3.5];
  let sumRaiting=0
  for(let i=0;i<allRaiting.length;i++){
    sumRaiting+=allRaiting[i];
  }
  const averageRaiting=(sumRaiting/(raitingTop+raitingMedium+raitingBad)).toFixed(2);
  return averageRaiting;
}