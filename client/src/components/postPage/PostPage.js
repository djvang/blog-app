import React, { useState, useEffect } from "react";

import PostMain from "./PostMain";
import CommentsList from "./CommentsList";
import CommentForm from "./CommentForm";
import MainLoader from "../MainLoader";

import { baseUrlPosts } from "../../shared/app-constants";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const PostPage = () => {
  let { id } = useParams();

  const { response, loading } = useFetch(`${baseUrlPosts}/${id}`, {
    requestParams: {
      _embed: "comments",
      _expand: "user"
    }
  });

  const { title, body, user } = response || {
    user: {},
    comments: []
  };

  const [comments, setComments] = useState(response ? response.comments : []);

  useEffect(() => {
    setComments(response ? response.comments : []);
  }, [response]);

  return (
    <>
      <div className="uk-section">
        <div className="uk-container">
          <PostMain title={title} body={body} author={user.name} />
          <hr />
          <CommentsList comments={comments} />
          <hr />
          <CommentForm id={+id} comments={comments} setComments={setComments} />
        </div>
      </div>
      {loading && <MainLoader />}
    </>
  );
};

export default PostPage;
