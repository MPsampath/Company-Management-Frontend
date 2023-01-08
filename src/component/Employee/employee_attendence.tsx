import React, { ChangeEvent, useEffect, useState } from 'react';
import { Card } from '@mui/material';

import Auth from '../../services/api';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
const EmployeeAttend = () => {


  // const {http,setToken} = Auth();
  const [file, setFile] = useState<File | null>();
  const [fileName, setFileName] = useState<String | null>();
  const [employees, setEmployees] = useState<any>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);

    }
  }

  const onSubmit = () => {
    const formdata = new FormData();
    if (file) {
      formdata.append('file', file);
      Auth.post('/uploadfile', formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      }).then((res) => {

        if (res.data.sts == 1) {
          setFile(null);     
          getData();
          alert("File upload succsessfuly completed");
          window.location.reload();
        }

      });
    }

  }
  const getData = () => {

    Auth.get('/getsheduledata').then((res) => {

      setEmployees(res.data);


    });
  }
  useEffect(() => { getData() }, []);


  return (
    <>
      <Card style={{ marginTop: '2%', marginLeft: '2%' }}>
        <h1>Upload excell file</h1>
        <div>
          <input type="file" name='exel' onChange={handleFileChange} />
          <button onClick={() => onSubmit()}>Submit</button>
        </div>
      </Card>
      <Card style={{ marginTop: '2%', marginLeft: '2%' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Checkin</TableCell>
                <TableCell>Checkout</TableCell>
                <TableCell>Working hours</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {employees.map((employee: any) => (
                <TableRow
                  key={employee.sch_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {employee.emp_nam}
                  </TableCell>
                  <TableCell>{employee.strt_time}</TableCell>
                  <TableCell >{employee.end_time}</TableCell>
                  <TableCell>{employee.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

    </>

  );
}
export default EmployeeAttend;