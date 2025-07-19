/**
 * Posts page
 */

import React from "react"
import PostCard from "@/components/common/PostCard"
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Posts</h1>
      <PostCard />
    </div>
  )
}

export default Posts;
