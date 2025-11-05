"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const UtilityBar = dynamic(() => import("./UtilityBar"), { ssr: false });

export default function UtilityBarLazy() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let idleHandle;
    let timeoutId;

    const schedule = () => {
      if (typeof window === "undefined") return;
      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(
          () => setShouldRender(true),
          { timeout: 1200 }
        );
      } else {
        timeoutId = window.setTimeout(() => setShouldRender(true), 400);
      }
    };

    schedule();

    return () => {
      if (typeof window === "undefined") return;
      if (idleHandle) {
        window.cancelIdleCallback?.(idleHandle);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return <UtilityBar />;
}
