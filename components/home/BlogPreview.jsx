"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 inline-flex"
            >
              Insights & Tips
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl font-montserrat font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0F172A" }}
            >
              Latest from the{" "}
              <span className="heading">Blog</span>
            </motion.h2>
          </div>
          <Link href="/blog" className="btn-primary inline-flex text-sm shrink-0">
            All Articles <ArrowRight size={14} />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 hover:border-orange-100 shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Color header strip */}
              <div
                className="h-2"
                style={{
                  background: i === 0
                    ? "linear-gradient(90deg, #480A62, #480A62)"
                    : i === 1
                    ? "linear-gradient(90deg, #480A62, #480A62)"
                    : "linear-gradient(90deg, #480A62, #480A62)",
                }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Category + read time */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-[#F97316] bg-orange-50 px-3 py-1 rounded-full font-inter">
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-inter">
                    <Clock size={11} />
                    {post.readTime} read
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-montserrat font-bold text-[#0F172A] text-base leading-snug mb-3 group-hover:text-[#F97316] transition-colors duration-200 flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed font-inter mb-5">
                  {post.excerpt.slice(0, 120)}…
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-inter">
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:gap-2.5 transition-all duration-200 font-inter"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
