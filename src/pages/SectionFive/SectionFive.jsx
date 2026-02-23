import { BiHide } from "react-icons/bi";
import "./SectionFive.css";

const SectionFive = () => {
  return (
    <>
      <h2 className="f_w_500">What is your name?</h2>
      <label className="label" for="new_password">
        Enter new password
      </label>
      <div>
        <div className="input_container s5_input_container">
          <input
            className="name_input"
            type="password"
            id="new_password"
            name="new_password"
            placeholder="Enter new password"
          />
          <BiHide className="hide_icon" />
        </div>
        <p className="label m_y_0 s5_p_tag">Must be atleast 6 characters</p>
      </div>
      <label className="label" for="conf_password">
        Confirm password
      </label>
      <div>
        <div className="input_container s5_input_container">
          <input
            className="name_input"
            type="password"
            id="conf_password"
            name="conf_password"
            placeholder="Confirm password"
          />
          <BiHide className="hide_icon" />
        </div>
        <p className="label m_y_0 s5_p_tag">Both passwords must match</p>
      </div>
    </>
  );
};

export { SectionFive };
