export const Card = () => {
    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="space-y-16">
                <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                    <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />

                    <div className="w-full px-8 absolute top-8">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-light">
                                    Name
                                </p>
                                <p className="font-medium tracking-widest">
                                    Placeholder
                                </p>
                            </div>
                            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                        </div>
                        <div className="pt-1">
                            <p className="font-light">
                                Card Number
                            </p>
                            <p className="font-medium tracking-more-wider">
                                1234  5678  9012  3456
                            </p>
                        </div>
                        <div className="pt-6 pr-6">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light text-xs">
                                        Valid
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        01/76
                                    </p>
                                </div>
                                <div className="">
                                    <p className="font-light text-xs text-xs">
                                        Expiry
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        01/76
                                    </p>
                                </div>

                                <div className="">
                                    <p className="font-light text-xs">
                                        CVV
                                    </p>
                                    <p className="font-bold tracking-more-wider text-sm">
                                        ···
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="leading-loose">
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                        <p className="text-gray-800 font-medium">Customer information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required={true} placeholder="Your Name" aria-label="Name" />
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                            <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Your Email" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Street" aria-label="Email" />
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="City" aria-label="Email" />
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Country" aria-label="Email" />
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="Zip" aria-label="Email" />
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                        <div className="">
                            <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required={true} placeholder="Card Number" aria-label="Name" />
                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">MM/YY</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="MM/YY" aria-label="Email" />
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">CVC</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required={true} placeholder="CVC" aria-label="Email" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}