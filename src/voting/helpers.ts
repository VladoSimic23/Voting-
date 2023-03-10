import { PersonType } from "./types";

// A function to handle vote count and update the state
export const handleVote = (
  index: number, // Index of the person in the array
  vote: number, // Amount of votes to be added or subtracted
  setState: (value: React.SetStateAction<PersonType[]>) => void // A function to set the state
) => {
  setState((prevPeople) => {
    // Updating the state with the new vote count
    const newPeople = [...prevPeople]; // Creating a copy of the previous state array
    const newVoteCount = newPeople[index].votes + vote; // Calculating the new vote count
    newPeople[index] = {
      // Updating the vote count of the person at the provided index
      ...newPeople[index],
      votes: newVoteCount >= 0 ? newVoteCount : 0, // Setting the vote count to 0 if it goes below 0
    };
    return newPeople; // Returning the updated state array
  });
};

// A function to get the total number of votes
export const getTotalVotes = (arg: PersonType[]) => {
  const totalVotes = arg.reduce((total, person) => total + person.votes, 0); // Calculating the total vote count
  return totalVotes; // Returning the total vote count
};

// A function to generate a leader message
export function generateLeaderMessage(people: PersonType[]): string {
  // Finding the maximum vote count from the array of people
  const maxVotes = people.reduce(
    (max, person) => (person.votes > max ? person.votes : max),
    0
  );

  // Initializing the leaderMessage variable
  let leaderMessage = "";

  // Filtering the array of people to get the leaders with the maximum vote count
  const leaders = people.filter((person) => person.votes === maxVotes);

  // Generating the leader message based on the number of leaders
  if (leaders.length === 1) {
    // If there is only one leader
    leaderMessage = `The current leader is ${leaders[0].name} with ${leaders[0].votes} votes.`;
  } else {
    const names = leaders.map((person) => person.name);
    if (names.length === 2) {
      // If there are 2 tied leaders
      leaderMessage = `${names[0]} and ${names[1]} are tied with ${maxVotes} votes.`;
    } else {
      // If there are more than 2 leaders
      const last = names.slice(-1);
      const rest = names.slice(0, -1);
      leaderMessage = `${rest.join(
        ", "
      )} and ${last} are tied with ${maxVotes} votes.`;
    }
  }

  return leaderMessage;
}
