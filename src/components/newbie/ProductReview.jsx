import desktop from "/product-desktop.jpg";
import mobile from "/product-mobile.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function ProductReview() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#f2ebe3] text-[#6c7289]">
      <div className="flex flex-col md:flex-row justify-center max-w-xs md:max-w-3xl items-center bg-[#fff] rounded-lg md:rounded-xl">
        <div className="md:w-1/2">
          <img src={mobile} alt="mobile-img" className="block md:hidden rounded-lg" />
          <img src={desktop} alt="desktop-img" className="hidden md:block md:rounded-xl" />
        </div>
        <div className="px-4 my-2 md:px-8 md:w-1/2 grid gap-4 md:gap-10">
          <h3 className="font-sans tracking-[10px]">PERFUME</h3>
          <h1 className="text-3xl md:text-5xl font-semibold font-serif text-[#1c232b]">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-lg">
            A floral, solar and voluptuos interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex justify-start items-center">
            <span className="text-4xl font-semibold font-serif text-[#3c8067]">
              $149.99
            </span>{" "}
            <span className="ml-4 line-through">$169.99</span>
          </div>
          <button className="w-full rounded-lg bg-[#3c8067] hover:bg-[#144634] text-[#fff] inline p-4 text-center text-base font-medium">
            <span className="flex justify-center items-center"><AiOutlineShoppingCart className="mr-2" />Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
