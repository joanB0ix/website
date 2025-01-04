export interface Project {
  title: string;
  description: string;
  url?: string;
}

export const PROJECT_LIST: Project[] = [
  {
    title: "TicTacToe",
    description:
      "I wrote a TicTacToe with two gamemodes implementing the MinMaxAlgorithm",
  },
  {
    title: "Test",
    description: "Test",
  },
];
