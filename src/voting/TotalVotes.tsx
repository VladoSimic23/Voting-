import { getTotalVotes } from "./helpers";
import { PersonType } from "./types";

const TotalVotes = ({ people }: { people: PersonType[] }) => {
  // Get total votes from getTotalVotes function from helpers.js
  const totalVotes = getTotalVotes(people);

  return (
    <div>
      <p>Number of People voted: {totalVotes}</p>
    </div>
  );
};

export default TotalVotes;
