/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Login() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 h-screen">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto hover:scale-125 transition-all"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <div class="flex items-center justify-center">
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">B</h2>
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">a</h2>
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">R</h2>
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">u</h2>
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">D</h2>
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">a</h2>
            <h2 className="mt-10 text-center text-2xl font-bold pr-1 cursor-pointer leading-9 hover:text-3xl transition-all tracking-tight text-gray-900">K</h2>
            
            </div>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-100 rounded p-6 shadow-lg">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2  shadow-lg hover:bg-white transition-all ring-1 ring-inset bg-slate-50 ring-gray-300 text-slate-500 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-600 bg-slate-50 shadow-lg hover:bg-white transition-all ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 hover:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="flex items-center content-center justify-center ">
                <button
                  type="submit"
                  className="flex content-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all shadow-xl" 
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Blum punya akun?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Ayo daftar
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  