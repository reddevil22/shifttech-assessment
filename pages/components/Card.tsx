import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

export const Card = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');
    const [cardnumber, setCardnumber] = useState(0);
    const [expDate, setExpDate] = useState('');
    const [cvv, setCvv] = useState('');

    const [cards, setCards] = useState('');
    console.log("🚀 ~ file: Card.tsx ~ line 16 ~ Card ~ cards", cards)

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items') || '');
        if (items) {
            setCards(items);
        }
    }, []);

    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example")) // watch input value by passing the name of it

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
                                    {name}
                                </p>
                            </div>
                            <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                        </div>
                        <div className="pt-1">
                            <p className="font-light">
                                Card Number
                            </p>
                            <p className="font-medium tracking-more-wider">
                                {cardnumber}
                            </p>
                        </div>
                        <div className="pt-6 pr-6">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light text-xs text-xs">
                                        Expiry
                                    </p>
                                    <p className="font-medium tracking-wider text-sm">
                                        {expDate}
                                    </p>
                                </div>

                                <div className="">
                                    <p className="font-light text-xs">
                                        CVV
                                    </p>
                                    <p className="font-bold tracking-more-wider text-sm">
                                        {cvv}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="leading-loose">
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-gray-800 font-medium">Customer information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" type="text" required={true} placeholder="Your Name" aria-label="Name"  {...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                            <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" type="email" required={true} placeholder="Your Email" aria-label="Email" {...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_addr" type="text" required={true} placeholder="Street" {...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_city" type="text" required={true} placeholder="City" {...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_country" type="text" required={true} placeholder="Country" {...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_zip" type="number" required={true} placeholder="Zip" {...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                        <div className="">
                            <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cardNr" type="number" required={true} placeholder="Card Number"{...register("example")} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">MM/YY</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_exp_date" type="text" required={true} placeholder="MM/YY" {...register("example")} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">CVV</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cvv" type="number" required={true} placeholder="CVC" {...register("example")} />
                                {errors.exampleRequired && <span>This field is required</span>}
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