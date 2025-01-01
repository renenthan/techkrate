import  { useState } from 'react';
import { ChevronLeft, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

const Blogs = () => {
  
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Async over-communication",
      excerpt: "A notification pops up somewhere. A bot relays it to project management and/or comms (slack). A thread gets started in situ...",
      readTime: "2m 24s",
      content: "A notification pops up somewhere. A bot relays it to project management and/or comms (slack). A thread gets started in situ. Always ends up being mentioned or continued in a different context. Some will type an actual reply, most will only react. May get indexed as a task in PM software.\n\nA loom or more extensive notes get sent out to address it. Then maybe a meeting happens to further align « in person ». The meeting gets recorded and distributed via multiple channels to reach everyone who might be related to the discussion items.\n\nAutomated email notifications are sent via tagging. Comments and reactions add up at all levels and channels. Sometimes a « resolved » status gets added if/when the task gets cleared in one or more contexts. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quia neque mollitia voluptatum beatae. Enim repellat omnis ipsa officiis commodi unde. Quam, commodi. Expedita impedit incidunt, recusandae in id blanditiis repudiandae quae? Quaerat eius vero possimus non a quos voluptates at rem. Quo dolore, incidunt impedit dolores aliquam animi nihil minus quisquam officia modi unde reiciendis deleniti itaque eum fuga similique possimus excepturi nemo in quis amet? Aut, voluptates eum dolores quibusdam omnis modi nulla nisi placeat, necessitatibus obcaecati eveniet voluptatem totam perspiciatis numquam deserunt! Unde ad soluta qui, cum doloremque consequuntur atque repudiandae in natus, recusandae at quas. Eaque iure, unde blanditiis sit fugit optio praesentium, incidunt ipsam sequi porro earum laudantium ratione consectetur accusamus officia obcaecati animi. Exercitationem, vitae ullam eius corrupti ipsam totam fugiat ea aliquam, tempore obcaecati impedit a eos, dolor repudiandae ducimus laborum nemo neque aperiam iste adipisci perferendis. Aliquam iure, dicta culpa molestiae sit vel sint ullam accusamus recusandae impedit sapiente maxime perferendis, tempora repudiandae eaque aut nulla possimus esse consequatur maiores ut quisquam veritatis? Ipsa explicabo, pariatur saepe molestiae aliquam quod exercitationem fuga doloremque, hic quo asperiores adipisci laudantium, nobis tempora aliquid tenetur sapiente! Earum iure voluptates corrupti culpa? Pariatur dignissimos et aliquam distinctio aspernatur sint? Labore quos perspiciatis corrupti nam quo sunt temporibus, laudantium sapiente, quia ipsum magnam non animi fugit expedita excepturi ut voluptates error iste dicta quidem quod soluta. Voluptates maiores a sunt molestiae cumque fugit nesciunt, sit expedita necessitatibus maxime facilis facere, ut id doloribus accusamus aspernatur magnam tenetur aperiam ullam. Itaque eos repellat ab quasi aliquam error et blanditiis autem rerum iure dolorem, optio laudantium laborum sed, numquam reiciendis facilis dolor vitae! Exercitationem corporis praesentium quisquam ratione dolorum atque deleniti quo? Nam consectetur recusandae optio ad molestiae voluptatum numquam nesciunt quaerat, mollitia soluta totam architecto fuga modi labore accusamus commodi dolores sint unde id hic, obcaecati magnam voluptate? Sed quasi impedit culpa sequi architecto ab, laborum quas numquam aperiam nulla magnam commodi facilis ad aliquid eaque eveniet voluptates quaerat, maiores labore? Pariatur corporis eos magni numquam, ipsa dicta placeat non at exercitationem rem assumenda, repellendus voluptates ea iusto quia suscipit quibusdam natus aspernatur laboriosam mollitia, distinctio in esse velit illo! Adipisci dolore sequi delectus, vero asperiores libero non doloribus rerum eaque repellat obcaecati ipsum at doloremque assumenda voluptates nostrum ducimus optio? Ex eos natus eaque cupiditate veritatis distinctio quae, excepturi iusto fuga, omnis, voluptas dolor aliquam facilis amet! "
    },
    {
      id: 2,
      title: "Communication Patterns in Modern Teams",
      excerpt: "Human groups (you know, friends) and companies rely on these patterns and tools to various degrees...",
      readTime: "3m 45s",
      content: "A notification pops up somewhere. A bot relays it to project management and/or comms (slack). A thread gets started in situ. Always ends up being mentioned or continued in a different context. Some will type an actual reply, most will only react. May get indexed as a task in PM software.\n\nA loom or more extensive notes get sent out to address it. Then maybe a meeting happens to further align « in person ». The meeting gets recorded and distributed via multiple channels to reach everyone who might be related to the discussion items.\n\nAutomated email notifications are sent via tagging. Comments and reactions add up at all levels and channels. Sometimes a « resolved » status gets added if/when the task gets cleared in one or more contexts. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quia neque mollitia voluptatum beatae. Enim repellat omnis ipsa officiis commodi unde. Quam, commodi. Expedita impedit incidunt, recusandae in id blanditiis repudiandae quae? Quaerat eius vero possimus non a quos voluptates at rem. Quo dolore, incidunt impedit dolores aliquam animi nihil minus quisquam officia modi unde reiciendis deleniti itaque eum fuga similique possimus excepturi nemo in quis amet? Aut, voluptates eum dolores quibusdam omnis modi nulla nisi placeat, necessitatibus obcaecati eveniet voluptatem totam perspiciatis numquam deserunt! Unde ad soluta qui, cum doloremque consequuntur atque repudiandae in natus, recusandae at quas. Eaque iure, unde blanditiis sit fugit optio praesentium, incidunt ipsam sequi porro earum laudantium ratione consectetur accusamus officia obcaecati animi. Exercitationem, vitae ullam eius corrupti ipsam totam fugiat ea aliquam, tempore obcaecati impedit a eos, dolor repudiandae ducimus laborum nemo neque aperiam iste adipisci perferendis. Aliquam iure, dicta culpa molestiae sit vel sint ullam accusamus recusandae impedit sapiente maxime perferendis, tempora repudiandae eaque aut nulla possimus esse consequatur maiores ut quisquam veritatis? Ipsa explicabo, pariatur saepe molestiae aliquam quod exercitationem fuga doloremque, hic quo asperiores adipisci laudantium, nobis tempora aliquid tenetur sapiente! Earum iure voluptates corrupti culpa? Pariatur dignissimos et aliquam distinctio aspernatur sint? Labore quos perspiciatis corrupti nam quo sunt temporibus, laudantium sapiente, quia ipsum magnam non animi fugit expedita excepturi ut voluptates error iste dicta quidem quod soluta. Voluptates maiores a sunt molestiae cumque fugit nesciunt, sit expedita necessitatibus maxime facilis facere, ut id doloribus accusamus aspernatur magnam tenetur aperiam ullam. Itaque eos repellat ab quasi aliquam error et blanditiis autem rerum iure dolorem, optio laudantium laborum sed, numquam reiciendis facilis dolor vitae! Exercitationem corporis praesentium quisquam ratione dolorum atque deleniti quo? Nam consectetur recusandae optio ad molestiae voluptatum numquam nesciunt quaerat, mollitia soluta totam architecto fuga modi labore accusamus commodi dolores sint unde id hic, obcaecati magnam voluptate? Sed quasi impedit culpa sequi architecto ab, laborum quas numquam aperiam nulla magnam commodi facilis ad aliquid eaque eveniet voluptates quaerat, maiores labore? Pariatur corporis eos magni numquam, ipsa dicta placeat non at exercitationem rem assumenda, repellendus voluptates ea iusto quia suscipit quibusdam natus aspernatur laboriosam mollitia, distinctio in esse velit illo! Adipisci dolore sequi delectus, vero asperiores libero non doloribus rerum eaque repellat obcaecati ipsum at doloremque assumenda voluptates nostrum ducimus optio? Ex eos natus eaque cupiditate veritatis distinctio quae, excepturi iusto fuga, omnis, voluptas dolor aliquam facilis amet! "
    },
    {
      id: 3,
      title: "The Evolution of Digital Communication",
      excerpt: "From email threads to instant messaging, the landscape of digital communication continues to evolve...",
      readTime: "1m 50s",
      content: "A notification pops up somewhere. A bot relays it to project management and/or comms (slack). A thread gets started in situ. Always ends up being mentioned or continued in a different context. Some will type an actual reply, most will only react. May get indexed as a task in PM software.\n\nA loom or more extensive notes get sent out to address it. Then maybe a meeting happens to further align « in person ». The meeting gets recorded and distributed via multiple channels to reach everyone who might be related to the discussion items.\n\nAutomated email notifications are sent via tagging. Comments and reactions add up at all levels and channels. Sometimes a « resolved » status gets added if/when the task gets cleared in one or more contexts. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quia neque mollitia voluptatum beatae. Enim repellat omnis ipsa officiis commodi unde. Quam, commodi. Expedita impedit incidunt, recusandae in id blanditiis repudiandae quae? Quaerat eius vero possimus non a quos voluptates at rem. Quo dolore, incidunt impedit dolores aliquam animi nihil minus quisquam officia modi unde reiciendis deleniti itaque eum fuga similique possimus excepturi nemo in quis amet? Aut, voluptates eum dolores quibusdam omnis modi nulla nisi placeat, necessitatibus obcaecati eveniet voluptatem totam perspiciatis numquam deserunt! Unde ad soluta qui, cum doloremque consequuntur atque repudiandae in natus, recusandae at quas. Eaque iure, unde blanditiis sit fugit optio praesentium, incidunt ipsam sequi porro earum laudantium ratione consectetur accusamus officia obcaecati animi. Exercitationem, vitae ullam eius corrupti ipsam totam fugiat ea aliquam, tempore obcaecati impedit a eos, dolor repudiandae ducimus laborum nemo neque aperiam iste adipisci perferendis. Aliquam iure, dicta culpa molestiae sit vel sint ullam accusamus recusandae impedit sapiente maxime perferendis, tempora repudiandae eaque aut nulla possimus esse consequatur maiores ut quisquam veritatis? Ipsa explicabo, pariatur saepe molestiae aliquam quod exercitationem fuga doloremque, hic quo asperiores adipisci laudantium, nobis tempora aliquid tenetur sapiente! Earum iure voluptates corrupti culpa? Pariatur dignissimos et aliquam distinctio aspernatur sint? Labore quos perspiciatis corrupti nam quo sunt temporibus, laudantium sapiente, quia ipsum magnam non animi fugit expedita excepturi ut voluptates error iste dicta quidem quod soluta. Voluptates maiores a sunt molestiae cumque fugit nesciunt, sit expedita necessitatibus maxime facilis facere, ut id doloribus accusamus aspernatur magnam tenetur aperiam ullam. Itaque eos repellat ab quasi aliquam error et blanditiis autem rerum iure dolorem, optio laudantium laborum sed, numquam reiciendis facilis dolor vitae! Exercitationem corporis praesentium quisquam ratione dolorum atque deleniti quo? Nam consectetur recusandae optio ad molestiae voluptatum numquam nesciunt quaerat, mollitia soluta totam architecto fuga modi labore accusamus commodi dolores sint unde id hic, obcaecati magnam voluptate? Sed quasi impedit culpa sequi architecto ab, laborum quas numquam aperiam nulla magnam commodi facilis ad aliquid eaque eveniet voluptates quaerat, maiores labore? Pariatur corporis eos magni numquam, ipsa dicta placeat non at exercitationem rem assumenda, repellendus voluptates ea iusto quia suscipit quibusdam natus aspernatur laboriosam mollitia, distinctio in esse velit illo! Adipisci dolore sequi delectus, vero asperiores libero non doloribus rerum eaque repellat obcaecati ipsum at doloremque assumenda voluptates nostrum ducimus optio? Ex eos natus eaque cupiditate veritatis distinctio quae, excepturi iusto fuga, omnis, voluptas dolor aliquam facilis amet! "
    }
  ];

  const BlogList = () => (
    <div className="relative w-full min-h-screen py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-amber-200/20 backdrop-blur-xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-6 py-10 cursor-pointer transition-all duration-300 hover:bg-black/40"
          >
            <div className="flex items-center space-x-2 text-white/80 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Read {post.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-white">
              {post.title}
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const BlogPost = ({ post }) => (
    <div className="relative w-full py-24 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-amber-200/20 backdrop-blur-xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8">
          <div className="flex items-center space-x-2 text-white/80 mb-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Read {post.readTime}</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-6 text-white">
            {post.title}
          </h1>
          
          <div className="prose prose-invert">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <button 
          onClick={() => setSelectedPost(null)}
          className="fixed bottom-8 left-8 flex items-center space-x-2 text-white/80 hover:text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
    <div className='absolute'>
      <Navbar/>

    </div>
    <div className="bg-gray-900">
      {selectedPost ? <BlogPost post={selectedPost} /> : <BlogList />}
    </div>
    </>
  );
};

export default Blogs;