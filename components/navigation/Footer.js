import Image from 'next/image';
import Container from '../container';

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-gray-800">
      <Container>
        <div className="mt-2 mb-3 sm:w-full sm:px-8 flex justify-center">
          <div className="my-2 mr-6">
            <a
              href="mailto:awcrotwell@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col"
            >
              <p className="text-white text-md text-center">
                Email
              </p>
              <Image
                src="/assets/images/email.svg"
                width={50}
                height={50}
                fill="white"
              />
            </a>
          </div>
          <div className="my-2 mr-6">
            <a
              href="https://github.com/andrewc910"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col"
            >
              <p className="text-white text-md text-center">
                Github
              </p>
              <Image
                src="/assets/images/github.svg"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="my-2 mr-6">
            <a
              href="https://linkedin/in/awcrotwell"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col"
            >
              <p className="text-white text-md text-center">
                LinkedIn
              </p>
              <Image
                src="/assets/images/linkedin.svg"
                width={50}
                height={50}
              />
            </a>
          </div>
          <div className="my-2">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col"
            >
              <p className="text-white text-md text-center">
                Resume
              </p>
              <Image
                src="/assets/images/resume.svg"
                width={50}
                height={50}
              />
            </a>

          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-white font-bold mb-2">
                Made with ❤️ Andrew Crotwell
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
