// import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
// import { blogPosts } from "@/lib/data";
// import Link from "next/link";
// import { Clock, Tag, ArrowRight } from "lucide-react";

// export const metadata = buildMetadata("blog");

// export default function BlogPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Blog", href: "/blog" },
//   ]);

//   const accentColors = [
//     "linear-gradient(90deg, #F97316, #FB923C)",
//     "linear-gradient(90deg, #0891B2, #06B6D4)",
//     "linear-gradient(90deg, #8B5CF6, #A78BFA)",
//   ];

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />

//       {/* Hero */}
//       <section className="pt-32 pb-16 bg-white text-center px-6">
//         <div className="max-w-3xl mx-auto">
//           <span className="section-label mb-5 inline-flex">Insights & Tips</span>
//           <h1
//             className="font-montserrat font-extrabold leading-tight mb-5"
//             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
//           >
//             Business Growth{" "}
//             <span className="gradient-text-orange">Insights</span>
//           </h1>
//           <p className="text-slate-500 font-inter text-lg">
//             Practical strategies, mindset shifts, and real-world tips for business owners — from Arnav Patil.
//           </p>
//         </div>
//       </section>

//       {/* Blog grid */}
//       <section className="pb-24 bg-[#F8FAFC]">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//             {blogPosts.map((post, i) => (
//               <div
//                 key={post.slug}
//                 className="group bg-white rounded-3xl border border-slate-100 hover:border-orange-100 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
//               >
//                 {/* Color strip */}
//                 <div className="h-2" style={{ background: accentColors[i % accentColors.length] }} />

//                 <div className="p-7 flex flex-col flex-1">
//                   {/* Meta */}
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="flex items-center gap-1.5 text-xs font-semibold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full font-inter">
//                       <Tag size={10} />
//                       {post.category}
//                     </span>
//                     <span className="flex items-center gap-1 text-xs text-slate-400 font-inter">
//                       <Clock size={11} />
//                       {post.readTime} read
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h2 className="font-montserrat font-bold text-[#0F172A] text-lg leading-snug mb-3 group-hover:text-[#F97316] transition-colors duration-200 flex-1">
//                     {post.title}
//                   </h2>

//                   {/* Excerpt */}
//                   <p className="text-slate-500 text-sm leading-relaxed font-inter mb-5">{post.excerpt}</p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1.5 mb-5">
//                     {post.tags.slice(0, 2).map((tag) => (
//                       <span key={tag} className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg font-inter">
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Footer */}
//                   <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                     <span className="text-xs text-slate-400 font-inter">
//                       {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
//                     </span>
//                     <Link
//                       href={`/blog/${post.slug}`}
//                       className="flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:gap-2.5 transition-all duration-200 font-inter"
//                     >
//                       Read <ArrowRight size={14} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
// import { blogPosts } from "@/lib/data";
// import Link from "next/link";
// import { Clock, Tag, ArrowRight } from "lucide-react";

// export const metadata = buildMetadata("blog");

// export default function BlogPage() {
//   const breadcrumb = getBreadcrumbSchema([
//     { name: "Home", href: "/" },
//     { name: "Blog", href: "/blog" },
//   ]);

//   const accentColors = [
//     "linear-gradient(90deg, #F97316, #FB923C)",
//     "linear-gradient(90deg, #0891B2, #06B6D4)",
//     "linear-gradient(90deg, #8B5CF6, #A78BFA)",
//   ];

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
//       />

//       {/* Hero */}
//       <section className="pt-32 pb-16 bg-white text-center px-6">
//         <div className="max-w-3xl mx-auto">
//           <span className="section-label mb-5 inline-flex">Insights & Tips</span>
//           <h1
//             className="font-montserrat font-extrabold leading-tight mb-5"
//             style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0F172A" }}
//           >
//             Business Growth{" "}
//             <span className="gradient-text-orange">Insights</span>
//           </h1>
//           <p className="text-slate-500 font-inter text-lg">
//             Practical strategies, mindset shifts, and real-world tips for business owners — from Arnav Patil.
//           </p>
//         </div>
//       </section>

//       {/* Blog grid */}
//       <section className="pb-24 bg-[#F8FAFC]">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
//             {blogPosts.map((post, i) => (
//               <div
//                 key={post.slug}
//                 className="group bg-white rounded-3xl border border-slate-100 hover:border-orange-100 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
//               >
//                 {/* Color strip */}
//                 <div className="h-2" style={{ background: accentColors[i % accentColors.length] }} />

//                 <div className="p-7 flex flex-col flex-1">
//                   {/* Meta */}
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="flex items-center gap-1.5 text-xs font-semibold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full font-inter">
//                       <Tag size={10} />
//                       {post.category}
//                     </span>
//                     <span className="flex items-center gap-1 text-xs text-slate-400 font-inter">
//                       <Clock size={11} />
//                       {post.readTime} read
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h2 className="font-montserrat font-bold text-[#0F172A] text-lg leading-snug mb-3 group-hover:text-[#F97316] transition-colors duration-200 flex-1">
//                     {post.title}
//                   </h2>

//                   {/* Excerpt */}
//                   <p className="text-slate-500 text-sm leading-relaxed font-inter mb-5">{post.excerpt}</p>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-1.5 mb-5">
//                     {post.tags.slice(0, 2).map((tag) => (
//                       <span key={tag} className="text-xs px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg font-inter">
//                         #{tag}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Footer */}
//                   <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                     <span className="text-xs text-slate-400 font-inter">
//                       {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
//                     </span>
//                     <Link
//                       href={`/blog/${post.slug}`}
//                       className="flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:gap-2.5 transition-all duration-200 font-inter"
//                     >
//                       Read <ArrowRight size={14} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { blogPosts } from "@/lib/data";
import { getBreadcrumbSchema } from "@/utils/seoConfig";
import Link from "next/link";
import { Clock, Tag, Search, TrendingUp, Calendar, User, ChevronRight } from "lucide-react";

export default function BlogPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);

  // Get unique categories
  const categories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-[#F97316] text-sm font-semibold tracking-wide uppercase mb-3 inline-block">Insights & Strategies</span>
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-[#0F172A] mb-4">
            Business Growth <span className="text-[#F97316]">Insights</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Practical strategies, mindset shifts, and real-world tips for business owners — from Arnav Patil.
          </p>
        </div>
      </section>

      <section className="pt-12 pb-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          
          {/* LEFT - BLOG LIST */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <div key={post.slug} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                
                {/* Featured Image */}
                <div className="relative overflow-hidden h-64 bg-gradient-to-br from-orange-100 to-teal-100">
                  <img
                    src={post.image || `https://placehold.co/600x400/F97316/white?text=${encodeURIComponent(post.title.split(" ").slice(0, 3).join(" "))}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 flex-wrap">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      CA Rahul Malodia
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime} read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-montserrat font-bold text-xl text-[#0F172A] mb-3 group-hover:text-[#F97316] transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-100 text-slate-500 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#F97316] font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Read More <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            
            {/* Search Box */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-montserrat font-semibold text-[#0F172A] mb-3 flex items-center gap-2">
                <Search size={16} className="text-[#F97316]" /> Search Here
              </h3>
              <input
                type="text"
                placeholder="Search Post..."
                className="w-full border border-slate-200 px-4 py-2.5 rounded-xl text-sm focus:border-[#F97316] focus:ring-2 focus:ring-orange-100 outline-none transition-all"
              />
            </div>

            {/* Most Viewed */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-montserrat font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                <TrendingUp size={16} className="text-[#F97316]" /> Most Viewed
              </h3>

              <div className="space-y-4">
                {blogPosts.slice(0, 5).map((post, idx) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="flex gap-3 group/item hover:bg-slate-50 p-2 rounded-lg transition-all">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-100 to-teal-100 rounded-lg flex items-center justify-center text-[#F97316] font-bold text-lg">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#0F172A] group-hover/item:text-[#F97316] transition-colors line-clamp-2">
                        {post.title}
                      </p>
                      <span className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-montserrat font-semibold text-[#0F172A] mb-4">Category</h3>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full hover:bg-[#F97316] hover:text-white transition-colors cursor-pointer"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-5 rounded-2xl text-center">
              <span className="text-3xl mb-2 block">📧</span>
              <h3 className="font-montserrat font-semibold text-white text-lg mb-2">Newsletter</h3>
              <p className="text-slate-300 text-xs mb-4">Get the latest insights straight to your inbox</p>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-lg text-sm mb-3 outline-none"
              />
              <button className="w-full py-2 rounded-lg bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}