
const Registration = () => {
  return (
    <div>
        <div className=" max-w-4xl mx-auto mt-10">
            <h1 className="text-center text-3xl">Register your personal items</h1>
            <form className="flex p-2 flex-col space-y-6">
                <label className="px-4 ">
                    <p >Full name</p>
                    <input className="input-field" type="text" placeholder="----"/>
                </label>
                <label className="px-4 ">
                    <p>Department</p>
                    <input className="input-field" type="text" placeholder="----"/>
                </label>
                <label className="px-4 ">
                    <p>Company</p>
                    <input className="input-field" type="text" placeholder="----"/>
                </label>
                <label className="px-4 ">
                    <p>Serial number</p>
                    <small>or any other unique ID of your item</small>
                    <input className="input-field" type="text" placeholder="----"/>
                </label>
                <label className="px-4 ">
                    <p>Product name</p>
                    <input className="input-field" type="text" placeholder="----"/>
                </label>
                <label className="px-4 ">
                    <p>Brand</p>
                    <input className="input-field" type="text" placeholder="----"/>
                </label>
                <label className="px-4 ">
                    <p>Other relevnt informtion</p>
                    <textarea className="input-field" type="text" placeholder="----"/>
                </label>

                <button className="hover:text-green-600 uppercase ">Register item</button>
            </form>
        </div>    
    </div>
  )
}

export default Registration