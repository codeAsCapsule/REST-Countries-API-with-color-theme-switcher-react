import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {};
  return (
    <header className="header">
      <div>
        <h4 className="heading">Where in the world?</h4>
      </div>

      <div>
        <button className="btn-moon" onClick={() => changeTheme()}>
          {/* <i className="fas fa-moon"></i> */}
          Dark mode
        </button>
      </div>
    </header>
  );
};

export default Header;
