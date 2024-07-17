"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";

export default function Header() {
	const [svgText, setSvgText] = useState("");

	useEffect(() => {
		const fetchSVG = async () => {
			const client = createClient();
			const settings = await client.getSingle("settings");

			const svgData = settings.data.feature_svgs[0];

			const svgResponse = await fetch(svgData.svg_image.url);
			const svgText = await svgResponse.text();

			// Parse the fetched SVG
			const parser = new DOMParser();
			const svgEle = parser.parseFromString(svgText, "image/svg+xml").querySelector("svg");

			// Set dynamic attributes
			svgEle.setAttribute("stroke-width", svgData.svg_stroke_width);
			svgEle.setAttribute("color", svgData.svg_color);
			svgEle.style.background = svgData.svg_background;
	  
			// Convert the SVG back to text
			const serializer = new XMLSerializer();
			const updatedSvgText = serializer.serializeToString(svgEle);
			setSvgText(updatedSvgText);
		};

		fetchSVG();
	}, []);

	return <div dangerouslySetInnerHTML={{ __html: svgText }} />;
}