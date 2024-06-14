import React from "react";

export function parseLinksToReact(str) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;

  str.replace(linkPattern, (match, text, url, index) => {
    // Add text before the link
    if (index > lastIndex) {
      parts.push(str.substring(lastIndex, index));
    }
    // Add the link
    parts.push(
      <a href={url} key={index} className="text-blue-500 atag">
        {text}
      </a>,
    );
    lastIndex = index + match.length;
  });

  // Parse all \n to <br> tags
  const newLinePattern = /\n/g;
  str.replace(newLinePattern, (match, index) => {
    if (index > lastIndex) {
      parts.push(str.substring(lastIndex, index));
    }
    parts.push(<br key={index} className="block m-3 [content:'']" />);
    lastIndex = index + match.length;
  });

  // Add any remaining text after the last link
  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex));
  }

  return <span>{parts}</span>;
}
