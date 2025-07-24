export interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: { name: string; price: number; quantity: number }[];
  shipping: {
    method: string;
    tracking: string | null;
    estimated: string;
    delivered: string | null;
  };
  billing: {
    address: string;
    payment: string;
  };
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    date: "2024-01-15",
    status: "Delivered",
    total: 29.99,
    items: [
      { name: "The Great Gatsby", price: 14.99, quantity: 1 },
      { name: "To Kill a Mockingbird", price: 15.00, quantity: 1 }
    ],
    shipping: {
      method: "Standard Shipping",
      tracking: "1Z999AA1234567890",
      estimated: "2024-01-20",
      delivered: "2024-01-18"
    },
    billing: {
      address: "123 Main St, City, State 12345",
      payment: "Visa ending in 1234"
    }
  },
  {
    id: "ORD-002",
    date: "2024-01-10",
    status: "Shipped",
    total: 45.98,
    items: [
      { name: "1984", price: 12.99, quantity: 1 },
      { name: "Pride and Prejudice", price: 9.99, quantity: 1 },
      { name: "The Hobbit", price: 23.00, quantity: 1 }
    ],
    shipping: {
      method: "Express Shipping",
      tracking: "1Z999AA1234567891",
      estimated: "2024-01-12",
      delivered: null
    },
    billing: {
      address: "123 Main St, City, State 12345",
      payment: "PayPal"
    }
  },
  {
    id: "ORD-003",
    date: "2024-01-05",
    status: "Processing",
    total: 19.99,
    items: [
      { name: "The Catcher in the Rye", price: 19.99, quantity: 1 }
    ],
    shipping: {
      method: "Standard Shipping",
      tracking: null,
      estimated: "2024-01-10",
      delivered: null
    },
    billing: {
      address: "123 Main St, City, State 12345",
      payment: "Mastercard ending in 5678"
    }
  }
]; 