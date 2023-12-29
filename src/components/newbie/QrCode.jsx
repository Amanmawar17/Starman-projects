import qrcode from "/image-qr-code.png"

const QRCode = () => {
  return (
    <div className="flex h-screen bg-[#d6e2f0] overflow-y-scroll no-scrollbar">
      <div className="flex flex-col justify-center items-center bg-[#ffffff] max-w-xs m-auto bg-white 
      shadow-xl rounded-[12px]">
        <div className="p-3">
          <img
            className="rounded-xl"
            src={qrcode}
            alt="QR code"
          />
        </div>
        <div className="text-center p-4">
          <h1 className="font-sans text-lg font-bold text-[#1f3251]">
            Improve your front-end skills by building projects
          </h1>
          <p className="font-sans font-normal text-base text-[#7b879d] my-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
