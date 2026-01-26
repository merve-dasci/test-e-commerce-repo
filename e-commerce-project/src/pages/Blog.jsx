import { Link } from 'react-router-dom';
import { Clock, MessageSquare, ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog/0b0c96f389ffa172c4a8eccf5597bc1f6a5d8179.jpg",
      isNew: true,
      tags: ["Google", "Trending", "New"],
      title: "Koudetat à la Maison #1 (L'intégrale)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystsatisfying away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 2,
      image: "/images/blog/46fc79cfcfe88d57a4885eb544c7412d075c9801.jpg",
      isNew: true,
      tags: ["Google", "Trending", "New"],
      title: "Koudetat à la Maison #1 (L'intégrale)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystatisfying away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 3,
      image: "/images/blog/899d1a7031c4725950c821e61af800d9b17ca401.jpg",
      isNew: false,
      tags: ["Google", "Trending", "New"],
      title: "Koudetat à la Maison #1 (L'intégrale)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystatisfying away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 4,
      image: "/images/blog/a5c008935415d0416604b70bee0fcd91f7eea390.jpg",
      isNew: false,
      tags: ["Google", "Trending", "New"],
      title: "Koudetat à la Maison #1 (L'intégrale)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystatisfying away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 5,
      image: "/images/blog/af80b25fd7ca75cdf1be3ab74a99a188a3d41070.jpg",
      isNew: true,
      tags: ["Google", "Trending", "New"],
      title: "Koudetat à la Maison #1 (L'intégrale)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystatisfying away.",
      date: "22 April 2021",
      comments: 10
    },
    {
      id: 6,
      image: "/images/blog/ecc5c7216a506f6f75998ab84e759d93aa5d3403.jpg",
      isNew: true,
      tags: ["Google", "Trending", "New"],
      title: "Koudetat à la Maison #1 (L'intégrale)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystatisfying away.",
      date: "22 April 2021",
      comments: 10
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold tracking-wider text-[#23A6F0] mb-3">
              Practice Advice
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#252B42] dark:text-white mb-4">
              Featured Posts
            </h1>
            <p className="text-sm text-[#737373] dark:text-gray-400 max-w-md mx-auto leading-relaxed">
              Problems trying to resolve the conflict between
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Desktop: 2 columns, Mobile: 1 column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* NEW Badge */}
                  {post.isNew && (
                    <span className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-bold px-3 py-1 rounded shadow-md">
                      NEW
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Tags */}
                  <div className="flex items-center gap-3 mb-3">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={`text-xs font-medium ${
                          index === 0 ? 'text-[#8EC2F2]' : 
                          index === 1 ? 'text-[#737373] dark:text-gray-400' : 'text-[#737373] dark:text-gray-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg lg:text-xl font-bold text-[#252B42] dark:text-white mb-3 hover:text-[#23A6F0] transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#737373] dark:text-gray-400 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-[#737373] dark:text-gray-400 mb-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#23A6F0]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#23856D]" />
                      <span>{post.comments} comments</span>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#737373] dark:text-gray-400 hover:text-[#23A6F0] transition-colors group"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
