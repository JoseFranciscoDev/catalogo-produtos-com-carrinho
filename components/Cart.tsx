"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export const Cart: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeItem,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    let message = "Oi! Estou interessado nos seguintes itens:\n\n";

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantidade: ${item.quantity} ${item.unit}${
        item.quantity > 1 ? "s" : ""
      }\n`;
      message += `   Preço: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `Total do pedido: $${getTotalPrice().toFixed(2)}\n\n`;
    message +=
      "Por favor, me conte mais sobre a disponibilidade e opções de entrega.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5589994638152?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  if (items.length === 0) {
    return (
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />O que você já escolheu:
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center py-8">
            Nenhum item selecionado. Por favor, escolha um ou mais itens do
            nosso catalogo
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />O que você já escolheu:
          </div>
          <Badge variant="secondary">{getTotalItems()} items</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-96 overflow-y-auto space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.name}</h4>
                <p className="text-orange-600 font-semibold">
                  ${item.price.toFixed(2)} por {item.unit}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 p-0"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="font-medium min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 p-0"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 p-0 ml-auto text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>Total:</span>
            <span className="text-orange-600">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            onClick={handleWhatsAppOrder}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            size="lg"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Pedir via Whatsapp
          </Button>
          <Button onClick={clearCart} variant="outline" className="w-full">
            Limpar seleção
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
