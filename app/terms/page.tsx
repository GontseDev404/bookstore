import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using BookHaven's website and services, you accept and agree to be bound 
              by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials on BookHaven's 
              website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-muted-foreground mb-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by BookHaven at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ordering and Payment</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be received before order processing</li>
              <li>We accept major credit cards and digital payment methods</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Shipping and Delivery</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Standard shipping takes 3-5 business days</li>
              <li>Express shipping takes 1-2 business days</li>
              <li>Delivery times may vary based on location</li>
              <li>Risk of loss transfers to buyer upon delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Returns and Refunds</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Returns accepted within 30 days of purchase</li>
              <li>Items must be in original condition</li>
              <li>Refunds processed within 5-7 business days</li>
              <li>Shipping costs are non-refundable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The content on this website, including text, graphics, images, and software, 
              is the property of BookHaven and is protected by copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              BookHaven shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about these terms, please contact us:
            </p>
            <div className="bg-card p-4 rounded-lg">
              <p className="text-foreground">Email: legal@bookhaven.com</p>
              <p className="text-foreground">Phone: +1 (555) 123-4567</p>
              <p className="text-foreground">Address: 123 Book Street, Literary City</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 