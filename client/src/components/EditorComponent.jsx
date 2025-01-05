// import React, { useRef, useEffect } from "react";
// import EditorJS from "@editorjs/editorjs";
// import Header from "@editorjs/header";
// import InlineCode from "@editorjs/inline-code";
// import List from "@editorjs/list";
// import Embed from "@editorjs/embed";
// import ImageTool from "@editorjs/image";
// import Quote from "@editorjs/quote";
// import LinkTool from "@editorjs/link-tool";

// const EditorComponent = ({ onSaveContent }) => {
//   const editorInstance = useRef(null);

//   useEffect(() => {
//     editorInstance.current = new EditorJS({
//       holder: "editorjs",
//       tools: {
//         header: {
//           class: Header,
//           inlineToolbar: ["bold", "italic", "underline"],
//         },
//         inlineCode: InlineCode,
//         list: List,
//         embed: Embed,
//         image: ImageTool,
//         quote: Quote,
//         linkTool: LinkTool,
//       },
//       autofocus: true,
//       placeholder: "Start writing your blog...",
//     });

//     return () => {
//       if (editorInstance.current && typeof editorInstance.current.destroy === "function") {
//         editorInstance.current.destroy();
//         editorInstance.current = null;
//       }
//     };
//   }, []);

//   const handleSaveContent = async () => {
//     try {
//       const savedContent = await editorInstance.current.save();
//       onSaveContent(savedContent); // Pass the saved content back to the parent
//     } catch (error) {
//       console.error("Error saving content:", error);
//     }
//   };

//   return (
//     <div>
//       <div id="editorjs" className="border border-gray-300 p-4 rounded mb-4"></div>
//       <button onClick={handleSaveContent} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//         Save Content
//       </button>
//     </div>
//   );
// };

// export default EditorComponent;
