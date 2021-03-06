import LazyLoad from 'react-lazyload';

export default function GanderCaseStudy() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-1 justify-around flex-col lg:flex-row">
        <div className="lg:mr-4 lg:m-10 m-4 sm:mb-0 flex justify-center">
          <div className="max-w-2xl">
            <LazyLoad offset={100} once>
              <img
                alt="gander logo"
                src="/assets/images/gander_logo.svg"
                className="md:max-w-md self-center lg:hidden mx-auto mb-4"
              />

              <img id="gander-demo" src="/assets/gifs/gander_setup.gif" alt="gander demo" />

              {/* <video autoPlay loop muted playsInline>
                <source src="/assets/gifs/gander_setup.gif" type="video/gif" />
                <source src="/assets/gifs/gander_setup.gif" type="video/gif" />
              </video> */}
            </LazyLoad>
          </div>
        </div>

        <div className="sm:mt-0 lg:text-left lg:m-10 lg:ml-4 mx-4 mb-4 flex flex-col">
          <LazyLoad offset={100} once>
            <div className="flex flex-col">
              <img
                alt="gander logo"
                src="/assets/images/gander_logo.svg"
                className="md:max-w-md self-center hidden lg:block"
              />
            </div>
          </LazyLoad>
          <p
            className="mt-3 mb-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center"
          >
            Gander is an open-source, drop-in solution for automating "review apps"
            on a pull request, making it easy for teams to review new features.
            With a serverless architecture and minimal configuration,
            Gander requires little effort to set up and no maintenance.
          </p>

          <div className="rounded-md shadow max-w-sm mx-auto">
            <a
              href="https://gander-framework.github.io/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              View Case Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
