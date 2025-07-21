"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const mockOrders = [
  { id: "ORD-001", user: "user1@example.com", total: 29.99, status: "Delivered" },
  { id: "ORD-002", user: "user2@example.com", total: 45.98, status: "Shipped" },
  { id: "ORD-003", user: "user3@example.com", total: 19.99, status: "Processing" },
];

export default function AdminOrders() {
  const [orders, setOrders] = useState(mockOrders);

  const handleView = (id: string) => {
    // TODO: Implement view logic
    alert(`View order ${id}`);
  };

  const handleUpdate = (id: string) => {
    // TODO: Implement update logic
    alert(`Update order ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-muted">
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-2 border">{order.id}</td>
              <td className="p-2 border">{order.user}</td>
              <td className="p-2 border">${order.total.toFixed(2)}</td>
              <td className="p-2 border">{order.status}</td>
              <td className="p-2 border space-x-2">
                <Button size="sm" onClick={() => handleView(order.id)}>View</Button>
                <Button size="sm" onClick={() => handleUpdate(order.id)}>Update</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 