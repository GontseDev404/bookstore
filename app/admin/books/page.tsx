"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const mockBooks = [
  { id: "1", title: "Silver Feet and Her Wonder", author: "Nana Ndlovana-Mthimkhulu", stock: 10 },
  { id: "2", title: "The Monkey Blanket", author: "Nana Ndlovana-Mthimkhulu", stock: 5 },
  { id: "3", title: "Fearless", author: "Lauren Roberts", stock: 0 },
];

export default function AdminBooks() {
  const [books, setBooks] = useState(mockBooks);
  const [editId, setEditId] = useState<string | null>(null);
  const [editStock, setEditStock] = useState<number>(0);

  const handleEdit = (id: string, currentStock: number) => {
    setEditId(id);
    setEditStock(currentStock);
  };

  const handleSave = (id: string) => {
    setBooks((prev) => prev.map((b) => b.id === id ? { ...b, stock: editStock } : b));
    setEditId(null);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete logic
    alert(`Delete book ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Books</h1>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-muted">
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">
                {editId === book.id ? (
                  <input
                    type="number"
                    value={editStock}
                    onChange={(e) => setEditStock(Number(e.target.value))}
                    className="w-20 border rounded px-2 py-1"
                  />
                ) : (
                  book.stock
                )}
              </td>
              <td className="p-2 border space-x-2">
                {editId === book.id ? (
                  <Button size="sm" onClick={() => handleSave(book.id)}>Save</Button>
                ) : (
                  <Button size="sm" onClick={() => handleEdit(book.id, book.stock)}>Edit</Button>
                )}
                <Button size="sm" variant="destructive" onClick={() => handleDelete(book.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 