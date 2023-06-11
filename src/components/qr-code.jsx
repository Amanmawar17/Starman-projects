import qrcode from "/image-qr-code.png"

const QRcode = () => {
  return (
    <div className="flex h-screen bg-[#d6e2f0]">
      <div className="flex flex-col justify-center items-center bg-[#ffffff] m-auto min-[375px]:w-64 max-[1440px]:w-4/5 bg-white shadow-xl rounded-[12px]">
        <div className="p-4">
          <img
            className="w-fit m-auto rounded-[24px]"
            src={qrcode}
            alt="QR code"
          />
        </div>
        <div className="text-center p-4">
          <h1 className="font-[Outfit] font-[700] text-[#1f3251]">
            Improve your front-end skills by building projects
          </h1>
          <p className="font-[Outfit] font-[400] text-[15px] text-[#7b879d] gap-y-6">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRcode;
