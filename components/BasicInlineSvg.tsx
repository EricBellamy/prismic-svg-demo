"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

export default function Header() {
  const [svgText, setSvgText] = useState("");

  useEffect(() => {
    const fetchSVG = async () => {
      const client = createClient();
      const settings = await client.getSingle("settings");

      const svgResponse = await fetch(settings.data.svg_image.url);
      const svgText = await svgResponse.text();

      setSvgText(svgText);
    };

    fetchSVG();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: svgText }} />;
}