"use client";

import Image from "next/image";
import { useState } from "react";
import { BRAND_SHORT_NAME } from "@/config/business";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      {!imageFailed ? (
        <Image
          src="/logo.png"
          alt="Logo Neto Cell"
          width={150}
          height={40}
          className="h-10 w-auto max-w-[150px] object-contain"
          onError={() => setImageFailed(true)}
          priority
        />
      ) : (
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl font-black ${
            inverted
              ? "bg-white text-brand-red"
              : "bg-brand-red text-white shadow-red"
          }`}
          aria-hidden="true"
        >
          NC
        </div>
      )}
      <span
        className={`text-lg font-black leading-none ${
          inverted ? "text-white" : "text-brand-dark"
        }`}
      >
        {BRAND_SHORT_NAME}
      </span>
    </div>
  );
}
