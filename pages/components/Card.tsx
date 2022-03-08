import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    city: string,
    country: string,
    zip: number,
    cardnumber: number,
    expDate: string,
    cvv: string,
    address: string,
};

const bannedCountries = [
    'iran',
    'north korea',
    'russia'
];

export const Card = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const [numberOfCards, setNumberOfCards] = useState(0);

    const [cards, setCards] = useState<Inputs[]>([]);

    useEffect(() => {
        let initialCards
        if (localStorage.getItem('cards')) {
            initialCards = JSON.parse(localStorage.getItem('cards') || '');
        }
        if (initialCards) {
            setCards(initialCards);
            setNumberOfCards(initialCards.length)
        }
    }, []);

    const onSubmit: SubmitHandler<Inputs> = data => {
        cards.push(data)
        setCards(cards)
        localStorage.setItem('cards', JSON.stringify(cards))
        let num = numberOfCards
        num++
        setNumberOfCards(num)
    };

    const clearCards = () => {
        setCards([])
        localStorage.setItem('cards', JSON.stringify([]))
        setNumberOfCards(0)
    }

    const validateCardExists = (cardNumber: number) => {
        const isThereCards = cards.length > 0;
        console.log("🚀 ~ file: Card.tsx ~ line 58 ~ validateCardExists ~ isThereCards", isThereCards)
        const doesCardExist = cards.find(card => card.cardnumber === cardNumber) !== undefined
        console.log("🚀 ~ file: Card.tsx ~ line 60 ~ validateCardExists ~ doesCardExist", doesCardExist)

        if (isThereCards) {
            return !doesCardExist;
        }
        else {
            return true;
        }
    }

    return (
        <div className="bg-white min-h-screen flex justify-center items-center">
            <div className="space-y-16 flex items-center flex-col">
                {cards.length > 0 && cards.map((card, index) => {
                    return <div key={index} className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                        <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />

                        <div className="w-full px-8 absolute top-8">
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="font-light">
                                        Name
                                    </p>
                                    <p className="font-medium tracking-widest">
                                        {card.name}
                                    </p>
                                </div>
                                <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                            </div>
                            <div className="pt-1">
                                <p className="font-light">
                                    Card Number
                                </p>
                                <p className="font-medium tracking-more-wider">
                                    {card.cardnumber}
                                </p>
                            </div>
                            <div className="pt-6 pr-6">
                                <div className="flex justify-between">
                                    <div className="">
                                        <p className="font-light text-xs text-xs">
                                            Expiry
                                        </p>
                                        <p className="font-medium tracking-wider text-sm">
                                            {card.expDate}
                                        </p>
                                    </div>

                                    <div className="">
                                        <p className="font-light text-xs">
                                            CVV
                                        </p>
                                        <p className="font-bold tracking-more-wider text-sm">
                                            {card.cvv}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                })}
                {numberOfCards > 0 && <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded max-w-max" onClick={() => clearCards()}>Clear cards from session</button>}

                <div className="leading-loose">
                    <h3 className="font-bold underline flex justify-center p-8">Add new card</h3>
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-gray-800 font-medium">Customer information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" type="text" placeholder="Your Name" aria-label="Name"  {...register("name", { required: true })} />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                            <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" type="email" placeholder="Your Email" aria-label="Email" {...register("email", { required: true })} />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_addr" type="text" placeholder="Street" {...register("address", { required: true })} />
                            {errors.address && <span>This field is required</span>}
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_city" type="text" placeholder="City" {...register("city", { required: true })} />
                            {errors.city && <span>This field is required</span>}
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_country" type="text" placeholder="Country" {...register("country", { required: true, validate: value => !bannedCountries.includes(value.toLocaleLowerCase()) })} />
                            {errors.country && errors.country?.type !== 'validate' && <span>This field is required</span>}
                            {errors.country?.type === 'validate' && <span>This country is on a banned list</span>}
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_zip" type="number" placeholder="Zip" {...register("zip", { required: true })} />
                            {errors.zip && <span>This field is required</span>}
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                        <div className="">
                            <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cardNr" type="number" placeholder="Card Number"{...register("cardnumber", { required: true, validate: value => validateCardExists(value) })} />
                            {errors.cardnumber && errors.cardnumber?.type !== 'validate' && <span>This field is required</span>}
                            {errors.cardnumber?.type === 'validate' && <span>This card already exists</span>}
                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">MM/YY</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_exp_date" type="text" placeholder="MM/YY" {...register("expDate", { required: true })} />
                                {errors.expDate && <span>This field is required</span>}
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">CVV</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cvv" type="number" placeholder="CVV" {...register("cvv", { required: true })} />
                                {errors.cvv && <span>This field is required</span>}
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