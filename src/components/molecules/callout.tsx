import { Alert, AlertDescription, AlertTitle } from "#components/shadcn/alert";
import WarningIcon from "~/assets/ico/warning-circle.svg?react";
import InfoIcon from "~/assets/ico/info.svg?react";
import { cn } from "#lib/utils";

type CalloutType = "info" | "warn";

interface Props {
  type: CalloutType;
  title?: string;
  children: string;
  coloring?: boolean;
}

function getCalloutMetadataByType(type: CalloutType) {
  switch (type) {
    case "info":
      return {
        color: "border-blue-100",
        icon: <InfoIcon />,
      };
    case "warn":
      return {
        color: "border-yellow-100",
        icon: <WarningIcon />,
      };
  }
}

export default function Callout({
  type,
  title,
  children,
  coloring = false,
}: Props) {
  const calloutMetadata = getCalloutMetadataByType(type);
  return (
    <Alert className={cn("fill-current", coloring && calloutMetadata.color)}>
      {calloutMetadata.icon}
      {title && <AlertTitle className="font-bold">{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
