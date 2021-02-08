import { MenuItem, Select, InputLabel, FormControl, createStyles, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import * as api from '../../containers/AdminTreatmentContainer/AdminTreatmentContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const AdminTreatment: React.FunctionComponent = (props: any) => {
  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    table: {
      minWidth: 300,
    },
  }),
);

const classes = useStyles();

const [treatmentType, setTreatmentType] = React.useState<any>(  
  {id: '',
  name: ''
}
);

const [selectedTreatmentType, setSelectedTreatmentType] = React.useState<any>(  
  {
    id: '',
    name: ''
  }
);

const handleChange = (event: React.ChangeEvent<{ value: any }>) => {    
  console.log("test0" + event.target.value);  
  setSelectedTreatmentType(event.target.value);
};

// 1. Get treatment types
// 2. Display treatments for that treatment type
// 3. Add/Delete -> send form

useEffect(() => {
  async function fetchMyApi() {
    const response = await api.getAllTreatmentTypes();
    console.log(response);
    const eventsMapped = response.map(
      (treatmentTypeInfo: {
        ID: any;
        Type: any;
      }) => {
        return {
          id: treatmentTypeInfo.ID,
          type: treatmentTypeInfo.Type,          
        };
      }
    );      
    setTreatmentType(eventsMapped);      
  }
  fetchMyApi();
}, [])

useEffect(() => {
console.log("Treatment Types: " + JSON.stringify(treatmentType));
}, [treatmentType])
useEffect(() => {
  console.log("Selected Treatment Types: " + JSON.stringify(selectedTreatmentType));
  }, [selectedTreatmentType])

  // Table
  function createData(treatmentName: string, treatmentId: any) {
    return {treatmentName, treatmentId };
  }
  
  const rows = [
    createData('Treatment1', "Treatment ID"),
   
  ];
  
  return (
    <>
      {(selectedTreatmentType.id === '' )? 
      <p>Select treatment type</p>       : null}
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Treatment Types</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={selectedTreatmentType}
          onChange={handleChange}
        >
          <MenuItem disabled value="">
            <em>Treatment Types</em>
          </MenuItem>
          { Object.keys(treatmentType).map((key, val) => {        
            return ( 
              <MenuItem value={treatmentType[key]}>
                {treatmentType[key].type}
              </MenuItem> )
          })}       
          </Select>
      </FormControl>
          {/* Treatment */}
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>            
            <TableCell>Treatment</TableCell>  
            <TableCell align="right">Treatment ID</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.treatmentName}>
              <TableCell component="th" scope="row">
                {row.treatmentName}
              </TableCell>
              <TableCell align="right">{row.treatmentId}</TableCell>           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
    )
  }




export default AdminTreatment;