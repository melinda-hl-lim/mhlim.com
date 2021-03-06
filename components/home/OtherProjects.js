import React from 'react';

export default function OtherProjects() {
  const projects = [
    {
      title: 'Moments',
      image: '/assets/images/moments_screenshots_2.png',
      description: 'Moments is an activity and mood tracker designed to help you understand what activities affect your mood. It\'s built with React and Ruby on Rails, for PostgreSQL. ',
      url: 'https://github.com/melinda-hl-lim/moments-react',
      tags: ['React', 'Rails', 'PWA'],
    },
    {
      title: 'Cello - Task Manager',
      image: '/assets/images/cello_board.png',
      description: 'Cello, a Trello clone, is a kanban board application for tracking your todos. It\'s built with a React/Redux frontend, an ExpressJS backend, and for MongoDB.',
      url: 'https://github.com/melinda-hl-lim/cello-task-manager',
      tags: ['React', 'Redux', 'MongoDB'],
    },
    {
      title: 'Request Tub',
      image: '/assets/images/request_tub.png',
      description: 'Request Tub, a clone of RequestBin.com, is an application for inspecting requests and webhooks. It\'s built with React, Express, and Socket.IO, for PostgreSQL.',
      url: 'https://github.com/melinda-hl-lim/request-bin',
      tags: ['React', 'PostgreSQL', 'Socket.IO'],
    },
  ];

  return (
    <section className="">
      <div className="container py-12 mx-auto px-4">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

          {projects.map(({
            title, description, url, tags, image,
          }) => (
            <div className="my-1 px-1 w-100 lg:my-4 lg:px-4 lg:w-1/3 md:w-1/3" key={title}>

              <a
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <article className="overflow-hidden rounded-lg shadow-lg bg-white">

                  <div className="m-4">
                    <img alt="Placeholder" className="block h-auto w-full max-h-64" src={image} />
                  </div>

                  <header className="flex items-center justify-center leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                      <div className="no-underline hover:underline text-black">
                        {title}
                      </div>
                    </h1>
                  </header>

                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <p className="md:block text-center">
                      {description}
                    </p>
                  </footer>
                  <div className="px-2 pt-4 pb-2">
                    {tags.map((tag) => (
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                    ))}
                  </div>

                </article>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
