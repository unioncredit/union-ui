import React from "react";

export function WalletConnect({ width }) {
  return (
    <svg
      width={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0" transform="scale(0.00390625)" />
        </pattern>
        <image
          id="image0"
          width="256"
          height="256"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAgAElEQVR4Ae2dC5hlRXXvx9yAER+5SdT4ivGtQRFhmJnuXXv3NAwCYwBvxEmMEePFgDGKN+Dj+ha5alCDwjy6d9XpBwMD6gRBgoKKIlGUiCMqgohXJSoqgqgoyuNU7ZVv1a61u86Z092nu8+ru//9ff3VPq+9q3611qpVr1Vr1uAPBEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABEAABBZHgOgBa1r9n0a/1/J9/i7+QAAElgGBVoot73Ui+3Kv5rQT98Y9QAAEFkAgKOFpFFruOX56kqZ91CQ9ZmSaDsgMbVQ1eoHS9PeZoRPTGr0qyd2pyrjXJZpeo3L6x9TQCammFytjN2cTtH50gp6yeRc9bI5H+I84L6eJJzHfl/E5CIDAAgiIws+iYGs17cNKethOeqyqUZYaOl5p98Zhbbel2n5IGfuJRNurlLZfUbp+k9L2FqXtD5W2P1Ha3q60vUNpe5vS9lal7Q+Udv9fafcNpe2XlLZXqLy4KNV2ajivvyfV7lXK0LHZFO2/aSf9yVpN+7UqiTdOs+S31ffxHgiAQEyA6AFeieL3wnV6Pv1RWqO13Jqnxr1VafvhRLuvKm1/qrT9tdK2rmpE2TRRdk5Ip4jSSaJ0giitEfHn/t8QKVPMvK6F7/D3JomyqZn78GulLf/fo7S9U2n7PW8gjNuWGDoxy+ub0il6ErHB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"
        />
      </defs>
    </svg>
  );
}
