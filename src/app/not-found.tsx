import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">Page not found</h1>
      <p className="mt-4 text-gray-600">The page you are looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services/" variant="outline">View services</ButtonLink>
      </div>
    </Container>
  );
}
