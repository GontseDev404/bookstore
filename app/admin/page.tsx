"use client";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/admin/books" className="text-blue-600 underline text-lg">Manage Books</Link>
        </li>
        <li>
          <Link href="/admin/orders" className="text-blue-600 underline text-lg">Manage Orders</Link>
        </li>
        <li>
          <Link href="/admin/users" className="text-blue-600 underline text-lg">Manage Users</Link>
        </li>
      </ul>
    </div>
  );
} 