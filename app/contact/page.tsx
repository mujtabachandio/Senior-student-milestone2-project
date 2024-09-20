import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <main className="bg-black text-gray-900 min-h-screen p-8 md:p-16">
        {/* Contact Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 fade-in-up">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 fade-in-up">
            Feel free to get in touch with me through any of the following methods:
          </p>
        </section>

        {/* Contact Information Section */}
        <section className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-blue-500" />
              <p className="text-lg md:text-xl text-gray-600">mujtaba@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-3xl text-green-500" />
              <p className="text-lg md:text-xl text-gray-600">+92 300 1234567</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 fade-in-up">
            Send Me a Message
          </h2>
          <form
            action="#"
            method="POST"
            className="mt-1 block w-full p-3 border border-gray-700 rounded-md bg-gray-900 text-gray-200 placeholder-red-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Social Media Links Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800 fade-in-up">
            Connect with Me
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
              <FaLinkedin className="text-3xl" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-orange-500">
              <FaGithub className="text-3xl" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
