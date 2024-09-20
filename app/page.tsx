import { FaJs, FaPython, FaReact, FaCss3Alt, FaHtml5 } from 'react-icons/fa'; // Importing icons

export default function Home() {
  return (
    <div className=''>
      <main className="bg-black p-8 md:p-16 min-h-screen">
        {/* Introduction Section */}
        <section className="bg-black text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 fade-in-up">
            Hello! I'm Mujtaba Chandio, a passionate developer specializing in JavaScript, TypeScript, Python, and modern web technologies like React.js and Next.js. I love crafting beautiful and functional web applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 fade-in-up">
            My Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 fade-in-up">
            With a diverse set of skills, I have experience in:
          </p>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex flex-col items-center fade-in-up">
              <FaJs className="text-yellow-500 text-4xl mb-2" />
              <span className="text-lg text-gray-800">JavaScript</span>
            </div>
            <div className="flex flex-col items-center fade-in-up">
              <FaPython className="text-blue-500 text-4xl mb-2" />
              <span className="text-lg text-gray-800">Python</span>
            </div>
            <div className="flex flex-col items-center fade-in-up">
              <FaReact className="text-cyan-500 text-4xl mb-2" />
              <span className="text-lg text-gray-800">React.js</span>
            </div>
            <div className="flex flex-col items-center fade-in-up">
              <FaHtml5 className="text-orange-500 text-4xl mb-2" />
              <span className="text-lg text-gray-800">HTML</span>
            </div>
            <div className="flex flex-col items-center fade-in-up">
              <FaCss3Alt className="text-blue-600 text-4xl mb-2" />
              <span className="text-lg text-gray-800">CSS</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
