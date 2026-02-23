import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LuBriefcaseBusiness } from "react-icons/lu";
import "./SectionOne.css";

const SectionOne = () => {
  const [account, setAccount] = useState("Personal");

  const handleSetBusiness = () => {
    setAccount("Business");
  };

  const handleSetPersonal = () => {
    setAccount("Personal");
  };

  return (
    <>
      <p className="f_w_400">
        To join us tell us
        <span className="f_w_500"> what type of account</span> <br /> you are
        opening
      </p>
      <div
        className={
          account === "Personal" ? "acc_selected acc_button" : "acc_button"
        }
        onClick={() => handleSetPersonal()}
      >
        <CgProfile /> <small className="m_l_1rem">Personal</small>
        {account === "Personal" ? (
          <IoCheckmarkDoneCircle className="done_icon" />
        ) : (
          ""
        )}
      </div>
      <div
        className={
          account === "Business" ? "acc_selected acc_button" : "acc_button"
        }
        onClick={() => handleSetBusiness()}
      >
        <LuBriefcaseBusiness /> <small className="m_l_1rem">Business</small>
        {account === "Business" ? (
          <IoCheckmarkDoneCircle className="done_icon" />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export { SectionOne };
