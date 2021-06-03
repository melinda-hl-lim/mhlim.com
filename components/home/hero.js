export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto">
        <div
          className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32 desktop-min-h-100"
        >
          {/* Makes cut through main photo */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />

          <main className="mt-0 md:mt-0 sm:mt-0 mx-auto max-w-7xl px-4 sm:mt-0 sm:px-0 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="md:block lg:hidden flex justify-center">
              <img
                className="object-cover object-top w-full h-full mx-auto"
                src="/assets/images/melinda_body.jpg"
                alt=""
                style={{
                  borderRadius: '50%',
                  height: '250px',
                  width: '250px',
                }}
              />
            </div>

            <div className="text-center lg:text-left sm:mt-12">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hi there, I&#39;m </span>
                <span className="block text-indigo-600 xl:inline">Melinda Lim</span>
              </h1>
              <p
                className="mt-3 mb-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                I&apos;m a full-stack software engineer, located in Los Angeles, California.
                <br />
                <br />
                Right now, I prefer working with
                <span className="text-indigo-600 font-semibold"> Ruby on Rails</span>
                {' '}
                and
                <span className="text-indigo-600 font-semibold"> React</span>
                .
                Though stay tuned, as I enjoy learning new languages and technologies and hope to keep updating my toolkit.
                <br />
                <br />
                Lately, I have been working with
                <span className="text-indigo-600 font-semibold"> Go</span>
                .
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-black">
        <img
          className="hidden lg:block object-top object-cover h-full ml-auto"
          src="/assets/images/melinda_body.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
