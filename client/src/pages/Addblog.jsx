// import React, { useState } from 'react';
// import EditorComponent from '../components/EditorComponent';

// const AddBlogPage = () => {
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [featuredImage, setFeaturedImage] = useState(null);
//   const [tags, setTags] = useState('');
//   const [description, setDescription] = useState('');
//   const [content, setContent] = useState('');

//   // Handle title input change
//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   // Handle category input change
//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };
// // 
//   // Handle tags input change
//   const handleTagsChange = (e) => {
//     setTags(e.target.value);
//   };

//   // Handle description input change
//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   // Handle image file change (featured image)
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFeaturedImage(URL.createObjectURL(file));
//     }
//   };

//   // Handle content saving from the editor
//   const handleSaveContent = (savedContent) => {
//     setContent(savedContent);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you can handle submission logic (e.g., save data to your backend)
//     const blogData = {
//       title,
//       category,
//       featuredImage,
//       tags: tags.split(',').map(tag => tag.trim()), // Split tags by commas
//       description,
//       content,
//     };

//     console.log('Blog Data:', blogData);

//     // You can send the `blogData` to your backend for saving
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
        
//         {/* Blog Title Input */}
//         <div>
//           <label className="block text-xl font-semibold mb-2" htmlFor="title">Blog Title</label>
//           <input
//             id="title"
//             type="text"
//             value={title}
//             onChange={handleTitleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Enter your blog title"
//             required
//           />
//         </div>

//         {/* Category Input */}
//         <div>
//           <label className="block text-xl font-semibold mb-2" htmlFor="category">Category</label>
//           <input
//             id="category"
//             type="text"
//             value={category}
//             onChange={handleCategoryChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Enter blog category"
//             required
//           />
//         </div>

//         {/* Featured Image Upload */}
//         <div>
//           <label className="block text-xl font-semibold mb-2" htmlFor="featuredImage">Featured Image</label>
//           <input
//             id="featuredImage"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//           {featuredImage && (
//             <div className="mt-2">
//               <img src={featuredImage} alt="Featured" className="w-32 h-32 object-cover" />
//             </div>
//           )}
//         </div>

//         {/* Tags Input */}
//         <div>
//           <label className="block text-xl font-semibold mb-2" htmlFor="tags">Tags (comma separated)</label>
//           <input
//             id="tags"
//             type="text"
//             value={tags}
//             onChange={handleTagsChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Enter tags"
//           />
//         </div>

//         {/* Description Input */}
//         <div>
//           <label className="block text-xl font-semibold mb-2" htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={handleDescriptionChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Enter a short description"
//             rows="4"
//           />
//         </div>

//         {/* EditorComponent for Blog Content */}
//         <EditorComponent onSaveContent={handleSaveContent} />

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Save Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBlogPage;
