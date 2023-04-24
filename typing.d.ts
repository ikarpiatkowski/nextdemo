type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type TodoPageProps = {
  params: {
    todoId: string;
  };
};
type SearchPageProps = {
  params: {
    searchTerm: string;
  };
};
type SearchResult = {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
};
