import { useGetProductsQuery } from "../../../entities/product/api/productApi";
import ProductsList from "../../../widgets/ProductsList/ui/ProductsList";
import { useState } from "react";
import type { SortParams } from "../../../feature/sort";
import SortSelect from "../../../feature/sort/ui/SortSelect";
import { ProductFilters } from "../../../feature/filter";
import type { FilterState, FilterParams } from "../../../feature/filter";

export default function ShopPage() {
    const [sortParams, setSortParams] = useState<SortParams | undefined>(undefined);
    const [filterState, setFilterState] = useState<FilterState>({
        selectedCategory: undefined,
        selectedBrand: undefined,
        ratingRange: undefined
    });

    // Преобразуем FilterState в FilterParams для API
    const filterParams: FilterParams = {
        category: filterState.selectedCategory,
        brand: filterState.selectedBrand,
        minRating: filterState.ratingRange?.min,
        maxRating: filterState.ratingRange?.max
    };

    const {
        data: products,
        isLoading,
        isError,
        error
    } = useGetProductsQuery({
        sortParams,
        filterParams: Object.values(filterParams).some(value => value !== undefined) ? filterParams : undefined
    });

    function handleSortChange(sortBy: string, order: string) {
        setSortParams({
            sortBy: sortBy as 'price',
            order: order as 'asc' | 'desc'
        });
    }

    function handleFilterChange(newFilterState: FilterState) {
        setFilterState(newFilterState);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Shop Page</h1>

            <SortSelect
                onSortChange={handleSortChange}
                currentSort={sortParams ? `${sortParams.sortBy}-${sortParams.order}` : undefined}
            />

            {isLoading && <div>Loading...</div>}
            {isError && <div>Error loading products: {error?.toString()}</div>}
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-1">
                    <ProductFilters
                        filterState={filterState}
                        onFilterChange={handleFilterChange}
                    />
                </div>
                <div className="col-span-5">
                    {products && <ProductsList products={products} />}
                </div>
            </div>
        </div>
    );
}