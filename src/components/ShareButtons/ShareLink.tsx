import { ReactNode } from "react";
import { Share } from "../../util/Share";

interface ShareLinkProps {
  url: string;
  title: string;
  tags: [string];
  type: "facebook" | "twitter" | "linkedin" | "instagram" | "whastapp";
  children: ReactNode;
  className?: string;
}

const ShareLink = (props: ShareLinkProps) => {
  const { url, title, tags, type, children, className } = props;
  const shareGenerator = Share(url, title, tags);
  let shareUrl: string = "";
  if (type === "facebook") {
    shareUrl = shareGenerator.facebook.generateUrl();
  } else if (type === "twitter") {
    shareUrl = shareGenerator.twitter.generateUrl();
  } else if (type === "linkedin") {
    shareUrl = shareGenerator.linkedin.generateUrl();
  } else if (type === "instagram") {
    shareUrl = shareGenerator.instagram.generateUrl();
  } else if (type === "whastapp") {
    shareUrl = shareGenerator.whatsapp.generateUrl();
  }

  return (
    <a href={shareUrl} title={title} className={className}>
      {children}
    </a>
  );
};

export { ShareLink };
