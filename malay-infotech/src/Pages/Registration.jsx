import React, { useState } from 'react'
import "../Styles/register.css" 
import axios from 'axios'
export const Registration = () => {

    const initRequest= {
        "MemberID": null,
        "LoginName": "",
        "LoginPwd": "Munjal@123",
        "Title": "Mr",
        "MemberName": "Munjal",
        "FatherTitle": "S/O",
        "FatherName": "KSP",
        "BirthDate": "1984-05-10T11:30:00.000Z",
        "Gender": "M",
        "MaritalStatus": "U",
        "MemberAddress": "Ahmedabad",
        "MemberStateID": 12,
        "MemberDistrictID": 189,
        "MemberCityName": "Ahmedabad",
        "MemberPinCode": 380007,
        "MobileNo": 9099959153,
        "EmailID": null,
        "MemberPANNo": "ALAPP9716D",
        "MemberBankID": 0,
        "MemberBankBranch": "",
        "MemberBankACNo": "",
        "MemberBankACType": "",
        "MemberBankIFSCCode": "",
        "NomineeName": "",
        "NomineeRelation": "",
        "SponsorID": 16303,
        "GroupID": 16303,
        "GroupPosition": "L",
        "CommandID": null,
        "CreateBy": 0,
        "CreateDate": null,
        "CreateIP": null,
        "UpdateBy": 0,
        "UpdateDate": null,
        "UpdateIP": null,
        "RegType": "I",
        "ProfilePhoto": "",
        "MemberAadharNo": "",
        "MemberCode": "",
        "GroupCode": "B1849835915",
        "SponsorCode": "B1849835915",
        "ConfirmPass": "Munjal@123",
        "IsActive": true,
        "IsPaid": null,
        "date": 10,
        "month": 5,
        "year": 1984,
        "TermNCondition": null
    }

    const [userDetails,setUserDetails]=useState(initRequest)
    const handleForm=(e)=>{
// console.log(e.target.value)
        setUserDetails({...userDetails,[e.target.name]:e.target.value})
    }
    const handleRegistration=async(e)=>{
      e.preventDefault() 
      console.log(userDetails)
      try {
        let Registerres=await axios.post(process.env.REACT_APP_Registerapi,userDetails)
        console.log(Registerres)
      } catch (error) {
        console.log(error)
      }
      setUserDetails(initRequest)

    }
  return (
    <div>
        <h1>Registration</h1>
        <form action="" onSubmit={handleRegistration}className='registerForm'>
            <div>
            <label>Individual</label>
            <input value={"I"} checked={userDetails.RegType=="I"} onChange={handleForm} type="radio" name="RegType" />
            <label value={"O"}>Organistaion</label>
            <input onChange={handleForm} type="radio" name="RegType" />
            </div>
            
            <input onChange={handleForm} type="text" placeholder='Title Mr/Ms/Mrs' name='Title' />
            <input onChange={handleForm} type="text" placeholder='Name' maxLength={60} name='MemberName' />
            <input onChange={handleForm} type="text" placeholder='Father / Husband Title S/O, D/O, W/O' name='FatherTitle' />
            <input onChange={handleForm} type="text" placeholder='Father / Husband Name' maxLength={60} name='FatherName'/>
            <input onChange={handleForm} type="date" placeholder='Birth Date' name='BirthDate'/>
            <input onChange={handleForm} type="text" placeholder='Gender' name='Gender' />
            <input onChange={handleForm} type="text" placeholder='Marital Status' name='MaritalStatus'/>
            <input onChange={handleForm} type="text" placeholder='Address'  maxLength={250} name='MemberAddress' />
            <input onChange={handleForm} type="text" placeholder='State Id' name='MemberStateID'/>
            <input onChange={handleForm} type="text" placeholder='District Id' name='MemberDistrictID' />
            <input onChange={handleForm} type="text" placeholder='City' name='MemberCityName'/>
            <input onChange={handleForm} type="number" placeholder='Pin code' maxLength={10} name='MemberPinCode' />
            <input onChange={handleForm} type="number" placeholder='Mobile No' maxLength={10} name='MobileNo'/>
            <input onChange={handleForm} type="email" placeholder='Email Id' name='EmailID'/>
            <input onChange={handleForm} type="number" placeholder='MemberAadharNo' required={true} maxLength={12} name='MemberAadharNo' />

            <input onChange={handleForm} type="text" placeholder='PAN No' name='MemberPANNo' />
            <input onChange={handleForm} type="text" placeholder='Bank Id' name='MemberBankID'/>
            <input onChange={handleForm} type="text" placeholder='Bank Branch' name='MemberBankBranch' />
            <input onChange={handleForm} type="text" placeholder='Bank Account No' name='MemberBankACNo'/>
            <input onChange={handleForm} type="text" placeholder='Bank Account Type' name='MemberBankACType' />
            <input onChange={handleForm} type="text" placeholder='Bank IFSC Code' name='MemberBankIFSCCode'/>
            <input onChange={handleForm} type="text" placeholder='Nominee Name' maxLength={50} name='NomineeName' />
            <input onChange={handleForm} type="text" placeholder='Nominee Relation' maxLength={50}  name='NomineeRelation'/>
            <input onChange={handleForm} type="password" placeholder='password' name='LoginPwd' />
            <input onChange={handleForm} type="password" placeholder='password' name='ConfirmPass' />


                <input type="submit"/>
        


        </form>
    </div>
  )
}
