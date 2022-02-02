import React from 'react';
import Article from './Article';

function ArticleList({posts}) {
  
    const articleObj = posts.map(post => {
        return (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes}
        />
      )
    })
  return (
    <main key={posts.id}>
        {articleObj}
    </main>
  );
};

export default ArticleList;
