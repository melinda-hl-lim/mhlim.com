import React from 'react';

export default function OtherProjects() {
  const projects = [
    {
      title: 'Motion.cr',
      image: 'https://raw.githubusercontent.com/awcrotwell/motion.cr/master/images/logo.svg',
      description: 'Motion is a framework for building reactive, real-time frontend UI components in your Amber application using pure Crystal that are reusable, testable & encapsulated.',
      url: 'https://github.com/awcrotwell/motion.cr',
      tags: ['Crystal', 'Backend', 'SSR'],
    },
    {
      title: 'Jello - Task Manager',
      image: '/assets/images/jello-dashboard.png',
      description: 'Jello is a trello clone, react application.',
      url: 'https://github.com/petertdelia/jello-task-manajer',
      tags: ['React', 'Frontend', 'CSS'],
    },
    {
      title: 'Mochi',
      image: 'https://raw.githubusercontent.com/awcrotwell/mochi/master/logo.svg',
      description: 'Mochi is a authentication shard inspired by devise designed for the Amber framework.',
      url: 'https://github.com/awcrotwell/mochi',
      tags: ['Crystal', 'Backend', 'Authentication'],
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
