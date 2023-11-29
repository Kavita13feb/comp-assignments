import React, { useState } from "react";
import "../Styles/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Registration = () => {
  const initRequest = {
    MemberID: null,
    LoginName: "",
    LoginPwd: "Munjal@123",
    Title: "Mr",
    MemberName: "Munjal",
    FatherTitle: "S/O",
    FatherName: "KSP",
    BirthDate: "1984-05-10T11:30:00.000Z",
    Gender: "M",
    MaritalStatus: "U",
    MemberAddress: "Ahmedabad",
    MemberStateID: 12,
    MemberDistrictID: 189,
    MemberCityName: "Ahmedabad",
    MemberPinCode: 380007,
    MobileNo: 9099959153,
    EmailID: null,
    MemberPANNo: "ALAPP9716D",
    MemberBankID: 0,
    MemberBankBranch: "",
    MemberBankACNo: "",
    MemberBankACType: "",
    MemberBankIFSCCode: "",
    NomineeName: "",
    NomineeRelation: "",
    SponsorID: 16303,
    GroupID: 16303,
    GroupPosition: "L",
    CommandID: null,
    CreateBy: 0,
    CreateDate: null,
    CreateIP: null,
    UpdateBy: 0,
    UpdateDate: null,
    UpdateIP: null,
    RegType: "I",
    ProfilePhoto: "",
    MemberAadharNo: "",
    MemberCode: "",
    GroupCode: "B1849835915",
    SponsorCode: "B1849835915",
    ConfirmPass: "Munjal@123",
    IsActive: true,
    IsPaid: null,
    date: 10,
    month: 5,
    year: 1984,
    TermNCondition: null,
  };
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(initRequest);
  const handleForm = (e) => {
    // console.log(e.target.value)
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleRegistration = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      let Registerres = await axios.post(
        process.env.REACT_APP_Registerapi,
        userDetails
      );
      console.log(Registerres);

      navigate("/login");
      setUserDetails(initRequest);
      // e.target.reset()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="section">
      <h1>Registration</h1>
      <form action="" onSubmit={handleRegistration} className="registerForm">
        <div>
          <label>Individual</label>
          <input
            value={"I"}
            checked={userDetails.RegType == "I"}
            onChange={handleForm}
            type="radio"
            name="RegType"
          />
          <label value={"O"}>Organistaion</label>
          <input onChange={handleForm} type="radio" name="RegType" />
        </div>
        <div className="wrapper">
          {" "}
          <input
            onChange={handleForm}
            type="text"
            placeholder="Title Mr/Ms/Mrs"
            name="Title"
          />
          
           <input
          onChange={handleForm}
          type="text"
          placeholder="Name"
          maxLength={60}
          name="MemberName"
        />
        </div>

        <div className="wrapper">
        <input
          onChange={handleForm}
          type="text"
          placeholder="Father / Husband Title S/O, D/O, W/O"
          name="FatherTitle"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Father / Husband Name"
          maxLength={60}
          name="FatherName"
        />
        </div>
        <div className="wrapper">
        
        <input
          onChange={handleForm}
          type="date"
          placeholder="Birth Date"
          name="BirthDate"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Gender"
          name="Gender"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="Marital Status"
          name="MaritalStatus"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Address"
          maxLength={250}
          name="MemberAddress"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="State Id"
          name="MemberStateID"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="District Id"
          name="MemberDistrictID"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="City"
          name="MemberCityName"
        />
        <input
          onChange={handleForm}
          type="number"
          placeholder="Pin code"
          maxLength={10}
          name="MemberPinCode"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="number"
          placeholder="Mobile No"
          maxLength={10}
          name="MobileNo"
        />
        <input
          onChange={handleForm}
          type="email"
          placeholder="Email Id"
          name="EmailID"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="number"
          placeholder="MemberAadharNo"
          required={true}
          maxLength={12}
          name="MemberAadharNo"
        />

        <input
          onChange={handleForm}
          type="text"
          placeholder="PAN No"
          name="MemberPANNo"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="Bank Id"
          name="MemberBankID"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Bank Branch"
          name="MemberBankBranch"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="Bank Account No"
          name="MemberBankACNo"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Bank Account Type"
          name="MemberBankACType"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="Bank IFSC Code"
          name="MemberBankIFSCCode"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Sponsor Id"
          maxLength={50}
          name="SponsorID"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="GroupID"
          maxLength={50}
          name="GroupID"
        />

        <input
          onChange={handleForm}
          type="password"
          placeholder="MemberCode"
          name="MemberCode"
        />
        </div>
        <div className="wrapper">

        <input
          onChange={handleForm}
          type="password"
          placeholder="GroupCode"
          name="GroupCode"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="SponsorCode"
          maxLength={50}
          name="SponsorCode"
        />
</div>
<div className="wrapper">

        <input
          onChange={handleForm}
          type="text"
          placeholder="Nominee Name"
          maxLength={50}
          name="NomineeName"
        />
        <input
          onChange={handleForm}
          type="text"
          placeholder="Nominee Relation"
          maxLength={50}
          name="NomineeRelation"
        />
        </div>
        <div className="wrapper">
        
        <input
            onChange={handleForm}
            type="text"
            placeholder="Login Name"
            maxLength={60}
            name="LoginName"
          />
        <input
          onChange={handleForm}
          type="password"
          placeholder="password"
          name="LoginPwd"
        />
</div>
        <input
          onChange={handleForm}
          type="password"
          placeholder="confirm password"
          name="ConfirmPass"
        />

        <input type="submit" />
      </form>
    </div>
  );
};
