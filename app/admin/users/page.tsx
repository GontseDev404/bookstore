"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const mockUsers = [
  { id: "1", email: "admin@example.com", role: "admin" },
  { id: "2", email: "user1@example.com", role: "user" },
  { id: "3", email: "user2@example.com", role: "user" },
];

export default function AdminUsers() {
  const [users, setUsers] = useState(mockUsers);

  const handleEdit = (id: string) => {
    // TODO: Implement edit logic
    alert(`Edit user ${id}`);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete logic
    alert(`Delete user ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-muted">
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.role}</td>
              <td className="p-2 border space-x-2">
                <Button size="sm" onClick={() => handleEdit(user.id)}>Edit</Button>
                <Button size="sm" variant="destructive" onClick={() => handleDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 