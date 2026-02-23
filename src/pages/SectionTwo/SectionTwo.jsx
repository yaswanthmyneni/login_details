import "./SectionTwo.css";

const SectionTwo = () => {

  return (
    <>
      <h2 className="f_w_500">OTP Verification</h2>
      <small className="small_tag_color">
        Mobile Number <span className="color_red">*</span>
      </small>
      <div className="flex_container">
        <div className="input">
          <select name="code" className="select_input">
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+3"> +3</option>
            <option value="+23">+23</option>
          </select>
        </div>
        <input
          className="input number_input"
          type="text"
        />
      </div>
    </>
  );
};

export { SectionTwo };
