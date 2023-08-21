import { FaMoon, FaSun } from "react-icons/fa";

interface State {
  currentMode: String;
  setCurrentMode: any;
}

const Switcher = ({ currentMode, setCurrentMode }: State) => {
  const swtichMode = () => {
    setCurrentMode(currentMode === "light" ? "dark" : "light");
  };

  return (
    <button className="switcher" onClick={swtichMode}>
      <p className="dark:text-light_blue text-royal_blue max-sm:hidden">
        {currentMode === "light" ? "Dark" : "Light"}
      </p>
      <span className="dark:text-yellow-600 text-royal_blue">
        {currentMode === "light" ? <FaMoon /> : <FaSun />}
      </span>
    </button>
  );
};

export default Switcher;
