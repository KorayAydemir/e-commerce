import { Products } from "@components/components/home/Products";
import WideLayout from "@components/components/layouts/layout_wide";
import { Header } from "@components/components/shared/Header";
import { supabase } from "../../lib/supabaseClient";
import { CartProvider } from "@components/contexts/CartContext";

export default function Home({ productsData, products }: any) {
    console.log(productsData);
    return (
        <>
            <CartProvider>
                <Header />
                <section className="mt-6">
                    <WideLayout>
                        <Products productsData={productsData} />
                    </WideLayout>
                </section>
            </CartProvider>
        </>
    );
}

export const getStaticProps = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const newData = await response.json();
    //const { data } = await supabase.from("categories").select("*");
    return {
        props: {
            productsData: newData,
            //       products: data,
        },
    };
};
