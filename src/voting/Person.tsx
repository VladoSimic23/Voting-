import { PersonProps } from "./types";
import styles from "./styles/voting.module.css";

const Person = ({
  person,
  index,
  handleVote,
  totalVotes,
  setPeople,
}: PersonProps) => {
  const { name, votes } = person;
  // Calculating the percentage of votes for the current person by dividing their vote count by the total number of votes and multiplying by 100
  const roundPrecentage = (votes / totalVotes) * 100;

  // Rounding the percentage to the nearest whole number and converting it to a string with a percentage sign
  const votesPrecentage = `${Math.round(roundPrecentage)} %`;

  return (
    <div key={name}>
      <div className={styles.personFlex}>
        <div>
          <span>{name}: </span>
          <span>{votes} Votes</span>
        </div>
        <div>
          <button onClick={() => handleVote(index, 1, setPeople)}>+1</button>
          <button onClick={() => handleVote(index, -1, setPeople)}>-1</button>
        </div>
      </div>
      <div className={styles.votingBar}>
        <p>{votesPrecentage}</p>
        <div
          style={{
            width: `${(votes / totalVotes) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Person;
