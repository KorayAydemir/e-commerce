import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
export default function SiteSearch() {
    type searchFormValues = {
        searchQuery: string;
    };
    const [searchFormData, setSearchFormData] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<searchFormValues>();

    // TODO go to show the search results page
    const onSubmit: SubmitHandler<searchFormValues> = (data) => {
        setSearchFormData(data.searchQuery);
        console.log(searchFormData);
    };

    const watchSearchQuery = watch("searchQuery");

    // TODO learn what subscriptions are
    // TODO show search results
    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            console.log(value, name, type)
        );

        return () => subscription.unsubscribe();
    }, [watch]);

    // TODO handle errors
    console.log("errors:", errors);

    return (
        <input
            className="rounded-sm max-w-sm m-0-auto border-2  border-gray-500 bg-[#2b2a33] py-0.5 pl-1 text-white "
            type="search"
            placeholder="Search..."
            {...register("searchQuery", { required: true })}
            onSubmit={handleSubmit(onSubmit)}
        />
    );
}
