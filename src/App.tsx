import styles from "./voting/styles/voting.module.css";
import Voting from "./voting/Voting";

function App() {
  return (
    <div className={styles.container}>
      <Voting />
    </div>
  );
}

export default App;
