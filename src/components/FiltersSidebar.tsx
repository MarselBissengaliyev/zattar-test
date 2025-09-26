"use client";

import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDownIcon } from "lucide-react";

interface Props {
  filters: string[];
}

export default function FiltersSidebar({ filters }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border rounded-lg p-2 bg-white shadow-sm sticky top-20">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="flex justify-between items-center w-full font-semibold text-gray-700 hover:text-blue-600 transition px-2 py-1">
          <span>Фильтры</span>
          <ChevronDownIcon
            className={`w-5 h-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          />
        </CollapsibleTrigger>

        <CollapsibleContent className="mt-2 space-y-2 px-2">
          {filters.map((f) => (
            <div key={f} className="flex items-center">
              <Checkbox id={f} className="mr-2" />
              <label htmlFor={f} className="cursor-pointer text-gray-700 hover:text-blue-600">
                {f}
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
