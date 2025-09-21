"use client";

import React, { useState, useMemo } from "react";
import { CartProvider } from "@/contexts/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { ProductSearch } from "@/components/ProductSearch";
import { products, categories } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Building2, Phone, MapPin, X } from "lucide-react";

function CatalogContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Todas as categorias"
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch: boolean =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory: boolean =
        selectedCategory === "Todas as Categorias" ||
        product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Building2 className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    Viniplastik
                  </h1>
                  <p className="text-gray-600">A sua loja parceira</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(89) 99463-8152</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>
                  Av. Candido Coelho, em frente ao posto Frans, São João do
                  Piauí
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Nosso catalogo de produtos
              </h2>
              <p className="text-gray-600 mb-4">
                Explore uma gama de produtos com a qualidade que você merece
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Produtos de qualidade</Badge>
                <Badge variant="secondary">Preços competitivos</Badge>
                <Badge variant="secondary">Rapida entrega</Badge>
              </div>
            </div>

            <ProductSearch
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              category={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories}
            />

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-4">
                  <Building2 className="w-16 h-16 text-gray-400 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-gray-500">
                  Tente revisar sua busca ou categoria do produto
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">
                    Mostrando {filteredProducts.length} de {products.length}{" "}
                    produtos
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Cart />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Building2 className="w-6 h-6" />
              <span className="text-xl font-semibold">Viniplastik</span>
            </div>
            <p className="text-gray-400 mb-4">
              Os materiais com a qualidade que sua obra precisa!
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-400">
              <span>© 2025 Viniplastik. Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <CartProvider>
      <CatalogContent />
    </CartProvider>
  );
}
