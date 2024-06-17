import "./Admin.css";
import { FC, useState, ChangeEvent, FormEvent } from "react";

interface LoginForm {
  username: string;
  email: string;
  comment: string;
}

const initialState: LoginForm = {
  username: "",
  email: "",
  comment: "",
};

const Admin: FC = () => {
  const [formData, setData] = useState<LoginForm>(initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container">
      <div className="hero_admin">
        <form action="" onSubmit={handlesubmit} className="hero_text">
          <label htmlFor="username">Name</label>
          <div className="search_admin">
            <input
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              placeholder="Your name..."
            />
          </div>
          <label htmlFor="email">E-mail</label>
          <div className="search_admin">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Your email..."
            />
          </div>
          <label htmlFor="comment">Message</label>

          <textarea
            onChange={handleChange}
            name="comment"
            id="comment"
            placeholder="Your message..."
          ></textarea>

          <div className="btn_text">
            <button className="send" type="submit">
              Send request
            </button>
            <p>
              By sending a request you agree to <br /> our Privacy & Policy
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
