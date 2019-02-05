import React from "react";
import commentBox from "commentbox.io";

class Comments extends React.Component {
  componentDidMount() {
    this.removeCommentBox = commentBox("5750789393874944-proj");
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return <div className="commentbox" />;
  }
}
export default Comments;
