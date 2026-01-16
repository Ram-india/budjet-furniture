import React from "react";

import { getImageUrl } from "../../utils/getImageUrl";
import { useLocation } from "react-router-dom";

const Meta = ({ data }) => {
  const location = useLocation();
  if (!data) return null;

  const url = window.location.origin + "/data" + data.slug;
  const title = data.meta_title || data.title;
  const description = data.meta_description || data.excerpt || data.title;
  const image = getImageUrl(data.image || data.hdImage, "datas");

  return (
    <>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={data.meta_keyword} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default Meta;
