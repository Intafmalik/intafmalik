import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


const ContactForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        const userInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            subject: data.subject,
            message: data.message
        }

        try {
            setLoading(true)
            await axios.post("https://getform.io/f/ayvpgxpb", userInfo)
            // https://getform.io/f/ayvpgxpb
            toast.success("Your message has been sent")
            reset()

        } catch (error) {
            toast.error("Somthing went wrong ")
            console.log(error)

        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                // method="POST"
                // action="https:// className="text-redColor text-sm pl-2" g* etform.io/f/awngxdlb"
                className=" w-[85%] bg-bgblack100  bg-opacity-0 hover:bg-opacity-100 dark:bg-bgBlack dark:bg-opacity-10 p-4  dark:hover:bg-opacity-60 duration-300 mx-6 shadow-shadowlight dark:shadow-shadowOne rounded-xl h-full py-3   ">
                <div className="flex flex-col w-full items-start  p-1 gap-3
                                text-textblack900 group-hover:text-textblack900 bg-opacity-0 hover:bg-opacity-100 dark:text-bgblack900 dark:group-hover:text-textWhite duration-300">

                    <div className="flex flex-col w-full md:flex-row  items-center gap-5 ">
                        <div className="flex flex-col gap-1">
                            <label className="pl-2 ">First Name</label>
                            <input
                                {...register("firstName", { required: true })}
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack900 border-2 dark:bg-slate-200  w-full"
                            />
                            {errors.firstName && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="pl-2">Last Name</label>
                            <input
                                {...register("lastName", { required: true })}
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal border-2 h-10 bg-bgblack900  dark:bg-slate-200  w-full"
                            />
                            {errors.lastName && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col  w-full gap-1">
                        <label className="pl-2">Email</label>
                        <input
                            {...register("email", { required: true })}
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack900 border-2  dark:bg-slate-200  w-full"

                        />
                        {errors.email && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                    </div>
                    <div className="flex flex-col  w-full gap-">
                        <label className="pl-2">Subject</label>
                        <input
                            {...register("subject", { required: true })}
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-10 bg-bgblack900 border-2  dark:bg-slate-200 w-full"

                        />
                        {errors.subject && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                    </div>
                    <div className="flex flex-col  w-full gap-1">
                        <label className="pl-2">Your Message</label>
                        <textarea
                            {...register("message", { required: true })}
                            name="message"
                            placeholder="Your Message"
                            className="rounded-[10px] outline-none text-[1.2rem] px-2 text-bgModal  h-40 bg-bgblack900 border-2  dark:bg-slate-200 w-full"
                        />
                        {errors.message && <span className="text-redColor text-sm pl-2" >* This field is required</span>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="button"
                    >
                        {loading ? "Submitting..." : "Submit Form"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm