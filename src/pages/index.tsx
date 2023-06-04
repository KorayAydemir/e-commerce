import { Products } from "@components/components/home/Products";
import WideLayout from "@components/components/layouts/layout_wide";
import { Header } from "@components/components/shared/Header";

export default function Home({ productsData }: any) {
    return (
        <>
            <Header />
            <section className="mt-6">
                <WideLayout>
                    <Products productsData={productsData} />
                </WideLayout>
            </section>
        </>
    );
}

export const getStaticProps = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const newData = await response.json();
    return {
        props: {
            productsData: newData,
        },
    };
};
