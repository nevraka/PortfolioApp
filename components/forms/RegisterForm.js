import { useState } from 'react';
const RegisterForm = ({ onSubmit }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={(onSubmit = () => onSubmit(form))}>
      <div className="form-group">
        <label htmlFor="avatar">Avatar</label>
        <input
          type="text"
          name="avatar"
          className="form-control"
          id="avatar"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          id="username"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          name="passwordConfirmation"
          className="form-control"
          id="passwordConfirmation"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-main bg-blue py-2 ttu">
        Submit
      </button>
    </form>
  );
};
export default RegisterForm;
