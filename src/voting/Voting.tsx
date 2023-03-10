import { useState } from "react";
import { peopleData } from "./data";
import { getTotalVotes, handleVote } from "./helpers";
import Leaderboard from "./Leaderboards";
import Person from "./Person";
import { PersonType } from "./types";
import styles from "./styles/voting.module.css";
import TotalVotes from "./TotalVotes";

const Voting = () => {
  // Initializing the people state with the array of people data from peopleData and setting the initial state to an empty array of PersonType objects
  const [people, setPeople] = useState<PersonType[]>(peopleData);

  // Calculating the total number of votes from the people array using the getTotalVotes function
  const totalVotes = getTotalVotes(people);

  return (
    <div className={styles.people}>
      <Leaderboard people={people} />
      <div>
        {people.map((person, index) => (
          <div key={index}>
            <Person
              person={person}
              index={index}
              totalVotes={totalVotes}
              setPeople={setPeople}
              handleVote={handleVote}
            />
          </div>
        ))}
      </div>
      <TotalVotes people={people} />
    </div>
  );
};

export default Voting;
