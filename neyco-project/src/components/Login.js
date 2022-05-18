
const Login = () => {
  return (
    <div className="flex items-center align-middle ">
        <div className=" hidden md:inline-flex w-[50%] h-[100vh] ">
            <img className="h-full object-cover" src="/img/micah-williams-lmFJOx7hPc4-unsplash.jpeg"/>
        </div>
        
        <div className=" mt-20  mx-auto flex-1 md:w-[50%]  md:my-auto h-full space-y-8">
            <h1 className="text-center text-3xl">Login to your portal</h1>
            <form className="flex p-2 flex-col space-y-6">
                <label className="px-4 ">
                    <p >Username</p>
                    <input className="input-field" type="text" placeholder="Enter your username"/>
                </label>
                <label className="px-4 ">
                    <p>Password</p>
                    <input className="input-field" type="password" placeholder="********"/>
                </label>
                <button className="hover:text-green-600">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login