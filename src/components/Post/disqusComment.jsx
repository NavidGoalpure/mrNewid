import React from "react";
import PropTypes from "prop-types";

import { Disqus, CommentCount } from "gatsby-plugin-disqus";
import { siteUrl } from "../../../content/meta/config";

const DisqusComment = props => {
  let disqusConfig = {
    url: `${siteUrl + props.slug}`,
    identifier: props.slug,
    title: props.title
  };
  return (
    <div>
      <CommentCount config={disqusConfig} placeholder={"..."} />

      <Disqus config={disqusConfig} />
    </div>
  );
};

export default DisqusComment;

DisqusComment.propTypes = {
  slug: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};
