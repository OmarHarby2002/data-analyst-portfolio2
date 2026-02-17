import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="h-12 w-12 text-primary" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Thank You!</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            شكراً لتواصلك معي! سأقوم بالرد على رسالتك في أقرب وقت ممكن.
          </p>
          <p className="text-lg text-muted-foreground">
            Thanks for reaching out! I appreciate your interest and will get back to you as soon as possible.
          </p>
        </div>

        <div className="pt-8 space-y-4">
          <Link href="/">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Back to Home
            </Button>
          </Link>

          <div className="text-sm text-muted-foreground">
            You can also connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/omar-elsayed-b73b6524b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/OmarHarby2002"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
