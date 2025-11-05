import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  title: string;
  description: string;
  children?: ReactNode;
  lastUpdated?: string;
  editor?: string;
}

export default function PageHeader({
  title,
  description,
  children,
  lastUpdated,
  editor,
}: PageHeaderProps) {
  return (
    <div className="space-y-6 border-b border-border bg-card px-6 py-8 md:px-12">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {description}
            </p>
          </div>
          {children && <div className="shrink-0">{children}</div>}
        </div>

        {(lastUpdated || editor) && (
          <div className="flex flex-wrap gap-3 text-sm">
            {editor && (
              <Badge variant="secondary" className="gap-1.5">
                <span className="text-muted-foreground">Editor:</span>
                <span className="font-medium">{editor}</span>
              </Badge>
            )}
            {lastUpdated && (
              <Badge variant="secondary" className="gap-1.5">
                <span className="text-muted-foreground">Updated:</span>
                <span className="font-medium">{lastUpdated}</span>
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
