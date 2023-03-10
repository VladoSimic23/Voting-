export type PersonType = {
  name: string;
  votes: number;
};

export interface LeaderboardProps {
  people: PersonType[];
}

export interface PersonProps {
  person: PersonType;
  index: number;
  handleVote: (
    index: number,
    vote: number,
    setPeople: React.Dispatch<React.SetStateAction<PersonType[]>>
  ) => void;
  totalVotes: number;
  setPeople: React.Dispatch<React.SetStateAction<PersonType[]>>;
}
