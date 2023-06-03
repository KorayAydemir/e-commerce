import { createContext, useState, useEffect } from "react";
export const SiteContext = createContext<SiteContextType | null>(null);
interface SiteContextType {
    headerData: any;
}

export function SiteProvider({ children }: React.PropsWithChildren) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(); // Fetch the data when the provider mounts
    }, []);

    const fetchData = async () => {
        // Fetch the data from your API
        const response = await fetch(
            "https://dummyjson.com/products/categories"
        );
        const newData = await response.json();

        setData(newData);
    };

    return (
        <SiteContext.Provider value={{ headerData: data }}>
            {children}
        </SiteContext.Provider>
    );
}
