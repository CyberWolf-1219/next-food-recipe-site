import React, { useState } from 'react';

import Container from '@/components/Container/Container';
import Footer from '@/components/Footer/Footer';
import Navigation from '@/components/Navigation/Navigation';
import Head from 'next/head';
import BlogPostSnippetCard from '@/components/BlogPostSnippetCard/BlogPostSnippetCard';

type BlogPostSnippet = {
  title: string;
  snippet: string;
  createdDate: number;
  authorImage: string;
  authorName: string;
};

function Blog() {
  const [blogPosts, setBlogPosts] = useState<Array<BlogPostSnippet>>([]);

  return (
    <>
      <Head>
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=7'
        />
        <meta
          name='description'
          content='Share what you know and learn what they know.'
        />
        <meta
          http-equiv='X-UA-Compatible'
          content='ie=edge'
        />
        <meta
          http-equiv='Content-Type'
          content='text/html;charset=UTF-8'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>
        <section className={'px-4'}>
          <Container>
            <h1>Blog</h1>
            <hr />
            <ul
              className={
                'w-full h-fit mt-4 grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4'
              }
            >
              {[...Array(20)].map((_) => {
                return (
                  <li key={`blog_post_snippet_${Math.random()}`}>
                    <BlogPostSnippetCard
                      title={''}
                      snippet={''}
                      authorImage={''}
                      authorName={''}
                      comments={0}
                      createdDate={0}
                    />
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
