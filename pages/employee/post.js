import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router'
import Swal from "sweetalert2";

export default function post() {


    const router = useRouter()
    const [Employee_name, setEmployee_name] = useState("");
    const [Employee_username, setEmployee_username] = useState("");
    const [Employee_password, setEmployee_password] = useState(0);

    const addEmployee = () => {
        Axios.post('http://localhost:8080/employees', {
          employee_name: Employee_name,
          employee_username: Employee_username,
          employee_password: Employee_password
      })
      .then(function (response) {
        console.log(response);

        Swal.fire({
          icon: 'success',
          title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(function () {
        router.push('/employee');
        });
        
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
            icon: 'success',
            title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
            showConfirmButton: false,
            timer: 2000
        }).then(function () {
        router.push('/employee');
        });
      });
     
      }

  return (
    <div>
        <h1 className="my-5 text-center text-capitalize">สมัครข้อมูล</h1>
        <input type="text" className="form-control" placeholder="ชื่อ" onChange={(e) => { setEmployee_name(e.target.value) }}/>
        <br />
        <input type="text" className="form-control" placeholder="Username" onChange={(e) => { setEmployee_username(e.target.value) }}/>
        <br />
        <input type="text" className="form-control" placeholder="Password" onChange={(e) => { setEmployee_password(e.target.value) }}/>
        <br />
        <button type="button" className="btn btn-success" onClick={addEmployee}>บันทึก</button>
    </div>
  )
}