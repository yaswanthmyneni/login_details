import { useEffect, useState } from "react";
import loginImage from "../../assets/login_image1.png";
import { SectionOne } from "../SectionOne/SectionOne";
import "./LoginPage.css";
import { SectionTwo } from "../SectionTwo/SectionTwo";
import { SectionThree } from "../SectionThree/SectionThree";
import { SectionFour } from "../SectionFour/SectionFour";
import { SectionFive } from "../SectionFive/SectionFive";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

const LoginPage = () => {
  const [data, setData] = useState({ accountType: "Personal" });
  const [openModal, setOpenModal] = useState(false);
  const [section, setSection] = useState(1);
  const [p_width, set_P_Width] = useState("20%");

  const handleNextSection = () => {
    if (section === 5) {
      setOpenModal(true);
    }
    if (section !== 5) {
      setSection(section + 1);
    }
  };

  const handlePreviousSection = () => {
    if (section !== 1) {
      setSection(section - 1);
    }
  };

  const handleDashboardBtn = () => {
    setSection(1);
    setOpenModal(false);
    set_P_Width("25%");
  };

  useEffect(() => {
    if (section === 2) {
      set_P_Width("25%");
    }
    if (section === 3) {
      set_P_Width("50%");
    }
    if (section === 4) {
      set_P_Width("75%");
    }
    if (section === 5) {
      set_P_Width("100%");
    }
  }, [section]);

  return (
    <section className="section">
      <h2 className="f_w_300 m_t_0">Let's get started</h2>
      <h1 className="h1_tag ">Create your account</h1>
      <p className="f_w_400">Follow the steps to create your account</p>
      <img className="login_icon" src={loginImage} alt="login_image" />
      <div className="login_right_pos">
        {section !== 1 && <div className="p_bar_container">
          <div className="progress_bar">
            <div className="progress_fill" style={{ width: p_width }}></div>
          </div>
        </div>}
        <div className="login_container">
          {section === 1 && <SectionOne setData={setData} />}
          {section === 2 && <SectionTwo setData={setData} data={data} />}
          {section === 3 && <SectionThree />}
          {section === 4 && <SectionFour setData={setData} data={data} />}
          {section === 5 && <SectionFive />}
          <div className="m_t_auto btn_container">
            <button className="btn" onClick={() => handlePreviousSection()}>
              Back
            </button>
            <button className="btn bg_btn" onClick={() => handleNextSection()}>
              Continue
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="overlay">
          <div className="modal">
            <IoCheckmarkDoneCircleOutline className="modal_icon" />
            <h2 className="h2_tag">You're all set!</h2>
            <small className="small_tag">
              Here's a quick summary of your account details
            </small>
            <div className="details_container">
              <div className="details_container_2">
                <div className=" details_flex">
                  <p className="title">Account Type</p>
                  <p className="value f_s_500">Personal</p>
                </div>
                <div className=" details_flex">
                  <p className="title">Email</p>
                  <p className="value f_s_500">jo....@example.com</p>
                </div>
                <div className=" details_flex">
                  <p className="title">Name</p>
                  <p className="value f_s_500">John Deo</p>
                </div>
                <div className=" details_flex">
                  <p className="title">Mobile Number</p>
                  <p className="value f_s_500">9701782736</p>
                </div>
              </div>
            </div>
            <div className="secure_flex">
              <MdOutlineSecurity className="color_green" />
              <small className="small_tag">
                Your account is secured with bank-grade security
              </small>
            </div>
            <div className="m_t_auto btn_container">
              <button
                className="dashboard_btn"
                onClick={() => handleDashboardBtn()}
              >
                Go To Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { LoginPage };
