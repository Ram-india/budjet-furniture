

import { useEffect } from "react";
import { getImageUrl } from "../../utils/getImageUrl";
import { useLocation } from "react-router-dom";

const Meta = ({ data }) => {
  const location = useLocation();
  if (!data) return null;

  const title = data.meta_title || data.title;
  const description = data.meta_description || data.excerpt || data.title;
  const image = getImageUrl(data.image || data.hdImage, "datas");
  const url = `${window.location.origin }${location.pathname}`;

  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Basic
    setMeta("description", description);
    setMeta("keywords", data.meta_keyword);

    // Open Graph
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:image", image);
    setProperty("og:url", url);
    setProperty("og:type", "article");

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, image, url, data.meta_keyword]);

  return null;
};


export default Meta;

// ----Helpers---- //

function setMeta(name, content){
  if(!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if(!tag){
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
function setProperty(property, content){
  if(!content) return;
  let tag = document.querySelector(`meta[property="{property}"]`);
  if(!tag){
    tag = document.createElement("meta");
    tag.setAttribute("property",property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}
