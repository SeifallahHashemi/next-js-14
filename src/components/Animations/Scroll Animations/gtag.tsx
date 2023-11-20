'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/components/Animations/Scroll Animations/utils/gtag";

const gaTrackingId = "G-D0K1FGG74W";

export const Gtag = () => {
  const router = useRouter();

  useEffect(() => {
    pageview(location.pathname, gaTrackingId);
  }, [router]);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        async
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaTrackingId}', {
        page_path: window.location.pathname
      });
    `,
        }}
      />
    </>
  );
};
