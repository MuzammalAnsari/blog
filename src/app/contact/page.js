export default function Page() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="p-6 w-full max-w-2xl bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <h1 className="text-3xl font-bold mb-4 text-center">Contact Me</h1>
          <form
            className="space-y-4"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
            />
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  