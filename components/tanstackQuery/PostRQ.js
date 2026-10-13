import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

// creating data in db

const PostRQ = () => {
  const [username, setUsername] = useState("");
  const [book, setBook] = useState("");

  const queryClient = useQueryClient();

  // get
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["books"],
    queryFn: () => {
      return axios.get("http://localhost:4000/books");
    },
  });

  //post
  const {
    mutate,
    isPending,
    isError: isMutationError,
    error: mutationError,
  } = useMutation({
    mutationFn: async (data) => {
      console.log("data", data);
      return axios.post("http://localhost:4000/books", data);
    },
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading......</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error has occured...</h1>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ username, book });
  };

  return (
    <>
      {/* posting a data */}
      <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br></br>
        <label>Book Name: </label>
        <input
          value={book}
          onChange={(e) => {
            setBook(e.target.value);
          }}
        />
        <br></br>
        <button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Information"}
        </button>
      </form>

      {isMutationError && (
        <p style={{ color: "red" }}>
          {mutationError?.response?.data?.message || mutationError.message}
        </p>
      )}

      <hr />
      <hr />
      <hr />
      <hr />

      {/* showing the data  */}
      {data?.data?.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.username}</h3>
          <h5>book name: {user.book}</h5>
          <hr />
        </div>
      ))}
    </>
  );
};

export default PostRQ;
