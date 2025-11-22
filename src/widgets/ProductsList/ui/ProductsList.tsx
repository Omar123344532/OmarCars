import React, { useMemo } from "react";
import ProductCard from "../../../entities/product/ui/ProductCard";
import type { Product } from "../../../entities/product/model/types";


const ProductsList = React.memo(function ProductsList({ products }: { products: Product[] }) {
    console.log("Render ProductsList"); 

    
    const renderedProducts = useMemo(() => {
        return products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ));
    }, [products]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.length > 0 ? renderedProducts : <div>loading</div>}
        </div>
    );
});

export default ProductsList;
