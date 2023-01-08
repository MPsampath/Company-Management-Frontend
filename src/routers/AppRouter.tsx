import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import EmployeeAttend from '../component/Employee/employee_attendence';

const AppRouter: React.FC = () =>{

    return <Router>
       <Routes>
          <Route path="/" element={<EmployeeAttend />}/>
          {/* <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
          <Route path="/new_user" element={<UserCreate />} />
          <Route path="/prescription_home" element={<PrescriptHome />} />
          <Route path="/prescription_upload" element={<PrescriptionUpload />} /> */}
        </Routes>
    </Router>

};

export default AppRouter;