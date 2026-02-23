import "./SectionThree.css";

const SectionThree = () => {
  return (
    <>
      <h2 className="f_w_500">OTP Verification</h2>
      <small className="small_tag_color">
        An OTP has been sent to your mobile number
      </small>
      <div className="flex_container gap_3_5rem">
        <div className="input sec_three_input">
          <input className="otp_flex_container" type="text" />
        </div>
        <div className="input sec_three_input">
          <input className="otp_flex_container" type="text" />
        </div>
        <div className="input sec_three_input">
          <input className="otp_flex_container" type="text" />
        </div>
        <div className="input sec_three_input">
          <input className="otp_flex_container" type="text" />
        </div>
      </div>
      <p className="f_w_400 text_center">
        Did not recieve OTP?{" "}
        <span className="color_blue f_w_500">Resend OTP</span>
      </p>
    </>
  );
};

export { SectionThree };
