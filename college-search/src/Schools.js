import React from 'react'
import { DataGrid } from "@material-ui/data-grid";
import schools from './ma_schools.json';

function Schools(){
  //Set columns for table
  const columns = [
    { field: 'id', headerName: 'ID', width: 75}, //5% of 0
    { field: 'name', headerName: 'School', width: 350},
    { field: 'url', headerName: 'URL', width: 300},
    { field: 'adm_rate', headerName: 'Admit %', width: 100},
    { field: 'avg_sat', headerName: 'Avg SAT', width: 100},
    { field: 'city', headerName: 'City', width: 150},
  ]

  let rows = []
  //Populate rows with school data
  schools.forEach((school, i)=>{
    rows.push({
      id: i,
      name: school.INSTNM,
      url: school.INSTURL,
      adm_rate: !isNaN(parseInt(school.ADM_RATE)) ? Math.round(school.ADM_RATE*100)+"%" : "-" , //school.ADM_RATE !== "NULL" ? Math.round(school.ADM_RATE*100) : '-',
      avg_sat: school.SAT_AVG !== "NULL" ? parseInt(school.SAT_AVG) : '-',
      city: school.CITY
    })
    i++;
  })

  return (
    <div style={{ height: '100%', width: '100%', textAlign: 'left' }}>
      <DataGrid rows={rows} columns={columns} pageSize={15}/>
    </div>
  );
}

export default Schools;
