import Image from 'next/image';
import Container from '../container';

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-gray-800">
      <Container>
        <div className="mt-2 mb-3 sm:w-full sm:px-8 flex justify-center">
          <div className="my-2 mr-6">
            <a
              href="mailto:melinda.hl.lim@gmail.com"
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
                eager
              />
            </a>
          </div>
          <div className="my-2 mr-6">
            <a
              href="https://github.com/melinda-hl-lim/"
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
                eager
              />
            </a>
          </div>
          <div className="my-2 mr-6">
            <a
              href="https://www.linkedin.com/in/melinda-h-l-lim/"
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
                eager
              />
            </a>
          </div>
          <div className="my-2">
            <a
              href="https://drive.google.com/file/d/1gngHhiDQL9t-cd8docA_Rmmmqf1jyQq4/view?usp=sharing"
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
                eager
              />
            </a>

          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-white font-bold mb-2">
                Made with ❤️ Melinda Lim
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
