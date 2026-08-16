import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 text-[34px] leading-[1.1] font-extrabold text-soil sm:text-[44px]">
        This page isn&apos;t in season
      </h1>
      <p className="mt-4 max-w-md text-[16px] leading-relaxed text-soil/65">
        The page you&apos;re looking for doesn&apos;t exist. Try our produce
        catalogue or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/shop" variant="secondary">
          View Our Produce
        </Button>
      </div>
    </Container>
  );
}
