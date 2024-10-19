import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

interface Config {
  fps: number;
  qrbox: number;
  aspectRatio: number;
  disableFlip: boolean;
}

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: {
  fps?: number;
  qrbox?: number;
  aspectRatio?: number;
  disableFlip?: boolean;
}) => {
  let config: Config = {
    fps: props.fps || 30, // default fps
    qrbox: props.qrbox || 25, // default qrbox size
    aspectRatio: props.aspectRatio || 1, // default aspect ratio
    disableFlip: props.disableFlip !== undefined ? props.disableFlip : false, // default is false
  };
  return config;
};

const Html5QrcodePlugin = (props: any) => {
  useEffect(() => {
    const config = createConfig(props);
    const verbose = props.verbose === true;

    // Success callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw new Error("qrCodeSuccessCallback is required callback.");
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );

    console.log(`here`);
    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback ||
        ((error) => {
          console.error("QR Code Error:", error);
        })
    );

    // Cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [props]);

  return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;
