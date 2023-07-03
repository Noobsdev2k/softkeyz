import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = () => {
    return (
        <Link href="/product/slug-value" className="overflow-hidden duration-200 transform bg-white cursor-pointer hover:scale-105">
            <Image width={500} height={500} src="thumbnail-url-value" alt="product-name-value" />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">product-name-value</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        ₹price-value
                    </p>
                    {/* Only render the following block if original_price-value exists */}
                    <p className="text-base font-medium line-through">
                        ₹original-price-value
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                        discount-value%
                    </p>
                </div>
            </div>
        </Link>


    );
};

export default ProductCard;