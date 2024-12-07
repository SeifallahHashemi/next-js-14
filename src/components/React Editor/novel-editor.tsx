'use client';
import React from "react";
import { Editor } from "novel";

// video: title ===> Build your own WYSIWYG Editor with AI in React
// video: src ===> https://www.youtube.com/watch?v=ZgstesimYN0
const NovelEditor = () => {
  return (
      <Editor defaultValue={{
        type: "doc",
        content: []
      }}/>
  );
};

export default NovelEditor;