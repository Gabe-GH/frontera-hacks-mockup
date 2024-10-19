import { Html5Qrcode } from "html5-qrcode";

Html5Qrcode.getCameras().then((devices) => {
  /**
   * devices would be an array of objects of type:
   * { id: "id", label: "label" }
   */
  if (devices && devices.length) {
    var cameraId = devices[0].id;

    const html5QrCode = new Html5Qrcode("reader");

    html5QrCode
      .start(
        cameraId,
        {
          fps: 10,
          qrbox: 250,
          
        },
        (qrCodeMessage) => {
          // do something when code is read. For example:
          console.log(`QR Code detected: ${qrCodeMessage}`);
        },
        (errorMessage) => {
          // parse error, ideally ignore it. For example:
          console.log(`QR Code no longer in front of camera.`);
        }
      )
      .catch((err) => {});

    html5QrCode
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log("QR Code scanning stopped.");
      })
      .catch((err) => {
        // Stop failed, handle it.
        console.log("Unable to stop scanning.");
      });
  }
});
