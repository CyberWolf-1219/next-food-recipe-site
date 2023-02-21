import React from 'react';
import Avatar from '../Avatar/Avatar';
import { FaCalendarDay, FaComment } from 'react-icons/fa';
import Image from 'next/image';

interface iBlogPostSnippetCard {
  title: string;
  snippet: string;
  authorImage: string;
  authorName: string;
  comments: number;
  createdDate: number;
}

function BlogPostSnippetCard(props: iBlogPostSnippetCard) {
  return (
    <article
      className={
        'w-full h-fit p-4 rounded-md shadow-sm shadow-black/50 bg-white'
      }
    >
      <h4 className={'w-full h-fit mt-4'}>Lorem ipsum dolor sit.</h4>
      <hr />
      <div
        className={
          'w-full h-fit mt-2 flex flex-col sm:flex-row items-start justify-start gap-4 flex-wrap'
        }
      >
        <Image
          src={''}
          alt={''}
          className={
            'grow basis-[35%] aspect-[4/3] lg:aspect-[1/1] w-full min-w-[10rem] h-auto object-cover border-2'
          }
        />
        <p className={'grow basis-[60%]'}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque totam
          modi nisi architecto eligendi quod dolores qui mollitia quae dolor, id
          hic, quis dolore sit facere! Nobis tempora maiores veritatis!
        </p>
      </div>
      <div
        className={
          'w-full h-fit mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 flex-wrap'
        }
      >
        {/* AUTHOR */}
        <div className={'w-fit h-fit flex flex-row items-center gap-4'}>
          <Avatar
            image={''}
            size={'sm'}
          />
          <span>AuthorName</span>
        </div>
        {/* POST DATA */}
        <div
          className={'w-fit h-fit flex flex-row items-center justify-end gap-4'}
        >
          <div
            className={
              'w-fit h-fit flex flex-row items-center justify-start gap-2'
            }
          >
            <FaComment />
            <span>587</span>
          </div>
          <div
            className={
              'w-fit h-fit flex flex-row items-center justify-start gap-2'
            }
          >
            <FaCalendarDay />
            <span>03/01/2023</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogPostSnippetCard;
