"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem, items } = useCart();
  const isInCart = items.some((item) => item.id === product.id);

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          {product.inStock ? (
            <Badge className="bg-green-500 text-white">Ainda em estoque</Badge>
          ) : (
            <Badge variant="destructive">Sem estoque</Badge>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-700">
            {product.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-orange-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              por {product.unit}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white transition-colors"
        >
          {isInCart ? (
            <>
              <Package className="w-4 h-4 mr-2" />
              Added to Selection
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Selection
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
