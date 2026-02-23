import "./SectionFour.css";

const SectionFour = ({ setData, data }) => {

  return (
    <>
      <h2 className="f_w_500">What is your name?</h2>
      <label className="label" for="first_name">
        First name
      </label>
      <div className="input_container">
        <input
          className="name_input"
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Olive"
        />
      </div>
      <label className="label" for="last_name">
        Last name
      </label>
      <div className="input_container">
        <input
          className="name_input"
          type="text"
          id="last_name"
          name="last_name"
          placeholder="last name"
        />
      </div>
    </>
  );
};

export { SectionFour };
