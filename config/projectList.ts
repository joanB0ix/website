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
    title: "sorting-website",
    description:
      "A Sorting Visualizer website that uses sorting_wasm as a library to caluclate the steps.",
    url: "https://sorting.joanboix.dev",
  },
  {
    title: "arxiv_wrapper",
    description: "A wrapper of the arXiv API made in Rust.",
    url: "https://github.com/joanB0ix/arxiv_wrapper",
  },
];
