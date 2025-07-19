import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
                      <Image src="/images/2books-logo.png" alt="BookHaven Logo" width={40} height={40} className="h-10 w-auto" />
        <span className="text-xl font-bold">BookHaven</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your destination for the best books at the best prices.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/books" className="text-sm text-muted-foreground hover:text-foreground">
                  All Books
                </Link>
              </li>
              <li>
                <Link href="/bestsellers" className="text-sm text-muted-foreground hover:text-foreground">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/new-releases" className="text-sm text-muted-foreground hover:text-foreground">
                  New Releases
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm text-muted-foreground hover:text-foreground">
                  Deals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Account</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="/account" className="text-sm text-muted-foreground hover:text-foreground">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-sm text-muted-foreground hover:text-foreground">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-sm text-muted-foreground hover:text-foreground">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Help</h3>
            <ul className="grid gap-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BookHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
