import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, or contact us for support.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Name and contact information</li>
              <li>Payment and shipping information</li>
              <li>Order history and preferences</li>
              <li>Communication records</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and updates</li>
              <li>Provide customer support</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except as described in this policy.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for secure transactions</li>
              <li>Shipping partners to deliver your orders</li>
              <li>Legal requirements when necessary</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to access, update, or delete your personal information. 
              Contact us to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this privacy policy, please contact us at:
            </p>
            <div className="bg-card p-4 rounded-lg">
              <p className="text-foreground">Email: privacy@bookhaven.com</p>
              <p className="text-foreground">Phone: +1 (555) 123-4567</p>
              <p className="text-foreground">Address: 123 Book Street, Literary City</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 