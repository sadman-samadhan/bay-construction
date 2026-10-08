import SiteLayout from "./(site)/layout";
import NotFoundContent from "./(site)/not-found";

/** Unmatched URLs render outside the (site) group, so wrap the 404 in the site chrome here. */
export default function RootNotFound() {
  return (
    <SiteLayout>
      <NotFoundContent />
    </SiteLayout>
  );
}
