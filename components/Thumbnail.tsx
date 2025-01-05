import Image from "next/image";

import { cn, getFileIcon } from "@/lib/utils";

interface ThumbnailProps {
  type: string;
  extension: string;
  url?: string;
  imageClassName?: string;
  className?: string;
}

export const Thumbnail = ({
  type = "",
  extension,
  url,
  imageClassName,
  className,
}: ThumbnailProps) => {
  const isImage = type === "image" && extension !== "svg";
  const imageSrc = isImage && url ? url : getFileIcon(extension, type);

  return (
    <figure className={cn("thumbnail", className)}>
      <Image
        src={imageSrc}
        alt="thumbnail"
        width={100}
        height={100}
        className={cn(
          "size-8 object-contain",
          imageClassName,
          className,
          isImage && "thumbnail-image"
        )}
      />
    </figure>
  );
};
