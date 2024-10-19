import { Html5QrcodeScanner } from "html5-qrcode";

function onScanSuccess(decodedText: any, decodedResult: any) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(err: any) {
  console.log(`Couldn't scan code`);
}

// Square QR box with edge size = 70% of the smaller edge of the viewfinder.
let qrboxFunction = function (viewfinderWidth: any, viewfinderHeight: any) {
  let minEdgePercentage = 0.7; // 70%
  let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
  let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
  return {
    width: qrboxSize,
    height: qrboxSize,
  };
};

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: qrboxFunction },
  /* verbose= */ false
);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);
