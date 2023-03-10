import { generateLeaderMessage } from "./helpers";
import { LeaderboardProps } from "./types";

// A functional component to display the current leader(s) of the voting contest
const Leaderboard = ({ people }: LeaderboardProps) => {
  const leaderMessage = generateLeaderMessage(people);

  // Rendering the leader message in a h2 element
  return (
    <div>
      <h2>{leaderMessage}</h2>
    </div>
  );
};

export default Leaderboard;
