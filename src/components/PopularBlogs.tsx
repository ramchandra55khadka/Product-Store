import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
     const blogs = [
          {
            title: "Tech Trends of 2025",
            author: "Ramchandra Khadka",
            likes: 234,
            comments: 56,
          },
          {
            title: "The Art of Minimalism",
            author: "Sophia",
            likes: 189,
            comments: 32,
          },
          {
            title: "Tips to Increase Business Profit",
            author: "Sabitra",
            likes: 102,
            comments: 21,
          },
          {
            title: "The healthy Way of Living",
            author: "Mahendra",
            likes: 78,
            comments: 12,
          },
          {
            title: "Healthy Living Tips",
            author: "Mia",
            likes: 145,
            comments: 43,
          },
        ];
        

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>
            <span className="text-gray-600 ">Published by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">
                <i className="fas fa-thumbs-up"></i> {blog.likes}
              </span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2">
                <i className="fas fa-comments"></i>
                {blog.comments}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
