export interface Project {
  title: string;
  description: string;
  url: string;
}

export const PROJECT_LIST: Project[] = [
  {
    title: "sorting_wasm",
    description:
      "A WASM library that implements multiple sorting algorithms with snapshot capabilities made in Rust.",
    url: "https://github.com/joanB0ix/sorting_wasm",
  },
  {
    title: "arxiv_wrapper",
    description: "A wrapper of the arXiv API made in Rust.",
    url: "https://github.com/joanB0ix/arxiv_wrapper",
  },
];
