// Employee
let employee = { 
  firstName: "Mehboob" ,
  lastName: "Rider",
  startDate: new Date(2024, 01, 03),
  numYearsService: 7,
  isActive: true,
  department: "Engineering",
  title: "VP Engenineering",
};

switch (employee.department) { 
  case `Engineering` :
    console.log(`Meet in Building 1`);
    break;

    case `Marketing` :
      console.log(`Meet in building 2`);
      break;

  case `HR`:
    console.log(`Meet in Bilding 1`);
    break;
    
    default:
      console.log(`Meet in building 3`);

}

switch (employee.department) { 
  case `Engineering`:
  case `HR`:
    console.log(`Meet in Building 1`);
    break;
    
    case `Marketing`:
      console.log(`Meet in building 2`);
      break;

      default:
      console.log(`Meet in building 3`); 
}