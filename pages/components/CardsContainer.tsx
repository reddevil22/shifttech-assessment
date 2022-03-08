import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Card } from "./Card";

export interface CardFields {
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

export const CardsContainer = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<CardFields>();

    const [numberOfCards, setNumberOfCards] = useState(0);

    const [cards, setCards] = useState<CardFields[]>([]);

    const onSubmit: SubmitHandler<CardFields> = data => {
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
        const doesCardExist = cards.find(card => card.cardnumber === cardNumber) !== undefined

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
                    return <Card key={index} card={card} />
                })}
                {numberOfCards > 0 && <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded max-w-max" onClick={() => clearCards()}>Clear cards from session</button>}

                <div className="leading-loose">
                    <h3 className="font-bold underline flex justify-center p-8">Add new card</h3>
                    <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-gray-800 font-medium">Customer information</p>
                        <div className="">
                            <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" type="text" placeholder="Your Name" aria-label="Name"  {...register("name", { required: true })} />
                            {errors.name && <div className="text-red-600">This field is required</div>}
                        </div>
                        <div className="mt-2">
                            <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                            <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" type="email" placeholder="Your Email" aria-label="Email" {...register("email", { required: true })} />
                            {errors.email && <div className="text-red-600">This field is required</div>}
                        </div>
                        <div className="mt-2">
                            <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_addr" type="text" placeholder="Street" {...register("address", { required: true })} />
                            {errors.address && <div className="text-red-600">This field is required</div>}
                        </div>
                        <div className="mt-2">
                            <label className="hidden text-sm block text-gray-600" htmlFor="cus_email">City</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_city" type="text" placeholder="City" {...register("city", { required: true })} />
                            {errors.city && <div className="text-red-600">This field is required</div>}
                        </div>
                        <div className="inline-block mt-2 w-1/2 pr-1">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Country</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_country" type="text" placeholder="Country" {...register("country", { required: true, validate: value => !bannedCountries.includes(value.toLocaleLowerCase()) })} />
                            {errors.country && errors.country?.type !== 'validate' && <div className="text-red-600">This field is required</div>}
                            {errors.country?.type === 'validate' && <div className="text-red-600">This country is on a banned list</div>}
                        </div>
                        <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                            <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">Zip</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_zip" type="number" placeholder="Zip" {...register("zip", { required: true })} />
                            {errors.zip && <div className="text-red-600">This field is required</div>}
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Payment information</p>
                        <div className="">
                            <label className="block text-sm text-gray-600" htmlFor="cus_name">Card</label>
                            <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cardNr" type="number" placeholder="Card Number"{...register("cardnumber", { required: true, validate: value => validateCardExists(value), pattern: /^[0-9]{12}(?:[0-9]{3})?$/ })} />
                            {errors.cardnumber && errors.cardnumber?.type !== 'validate' && errors.cardnumber?.type !== 'pattern' && <div className="text-red-600">This field is required</div>}
                            {errors.cardnumber?.type === 'validate' && <div className="text-red-600">This card already exists</div>}
                            {errors.cardnumber?.type === 'pattern' && <div className="text-red-600">Card number should be 12 digits</div>}
                            <div className="inline-block mt-2 w-1/2 pr-1">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">MM/YY</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_exp_date" type="text" placeholder="MM/YY" {...register("expDate", { required: true, pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/ })} />
                                {errors.expDate && errors.expDate?.type !== 'pattern' && <div className="text-red-600">This field is required</div>}
                                {errors.expDate?.type === 'pattern' && <div className="text-red-600">Incorrect format</div>}
                            </div>
                            <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                <label className="hidden block text-sm text-gray-600" htmlFor="cus_email">CVV</label>
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_cvv" type="number" placeholder="CVV" {...register("cvv", { required: true })} />
                                {errors.cvv && <div className="text-red-600">This field is required</div>}
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit" disabled={errors && Object.keys(errors).length !== 0 && Object.getPrototypeOf(errors) === Object.prototype}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}