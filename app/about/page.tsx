import { FaUser, FaCode, FaBriefcase, FaHeart } from 'react-icons/fa';

export default function About() {
  return (
    <div>
      <main className="bg-black text-gray-200 min-h-screen p-8 md:p-16">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 fade-in-up">
            About Me
          </h1>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <FaUser className="text-6xl text-blue-500 mb-4" />
            <p className="text-lg md:text-xl text-gray-200 mb-8 fade-in-up">
              Hi, I’m Mujtaba Chandio, a passionate developer with expertise in modern web technologies. I thrive on solving complex problems and building impactful applications.
            </p>
          </div>
        </section>

        {/* Background Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 fade-in-up">
            My Background
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <FaCode className="text-6xl text-green-500 mb-4" />
            <p className="text-lg md:text-xl text-gray-200 mb-8 fade-in-up">
              I have a background in <strong className="font-bold">JavaScript, TypeScript, Python, React.js, and Next.js</strong>. My journey started with a keen interest in programming and has evolved into a career focused on creating innovative solutions and beautiful web applications.
            </p>
            <p className="text-lg md:text-xl text-gray-200 fade-in-up">
              Over the years, I’ve had the opportunity to work on various projects, ranging from small-scale applications to large, complex systems. My approach combines technical proficiency with a user-centered design philosophy to deliver high-quality software.
            </p>
          </div>
        </section>

        {/* Professional Journey Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 fade-in-up">
            Professional Journey
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <FaBriefcase className="text-6xl text-yellow-500 mb-4" />
            <p className="text-lg md:text-xl text-gray-200 mb-8 fade-in-up">
              My professional journey began with a deep dive into web development and has since expanded to include expertise in full-stack development. I am always eager to learn and adapt to new technologies, and I actively seek opportunities to enhance my skills and contribute to meaningful projects.
            </p>
          </div>
        </section>

        {/* Personal Interests Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 fade-in-up">
            Personal Interests
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <FaHeart className="text-6xl text-red-500 mb-4" />
            <p className="text-lg md:text-xl text-gray-200 mb-8 fade-in-up">
              Beyond coding, I have a passion for exploring new cuisines and trying out different recipes. I believe that creativity in the kitchen fuels my creativity in programming. When I’m not working on a project, you might find me experimenting with new dishes or diving into the latest tech trends.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
