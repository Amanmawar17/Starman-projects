import product from "/nft_card/image-equilibrium.jpg"; 
import avatar from "/nft_card/image-avatar.png"; 

const NftCard = () => {
  return (
    <div className="h-screen bg-[#0d192b] flex justify-center items-center text-secondary font-sans">
      <div id="card" className="max-w-[280px] bg-[#14253d] rounded-xl p-4 shadow-xl">
        <img
          src={product}
          alt="Product image"
          className="w-60 m-auto rounded-xl h-60"
        />
        <div id="card-body" className="" >
          <h1 className="mt-4 font-bold hover:text-[#00fff7]">Equilibrium #3429</h1>
          <p className="my-4 text-[#8bacda]">Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#00fff7]">0.041 ETH</p>
            <p className="">3 days left</p>
          </div>
          <hr className="text-[#2f415b] h-1" />
          <div id="creator" className="mt-4 flex items-center">
            <img
              src={avatar}
              alt="creator image"
              className="h-10 border-2 rounded-full"
            />
            <h3 className="ml-3 font-medium text-[#8bacda]">Creation of
            <span className="text-secondary hover:text-[#00fff7]"> Jules Wyvern</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
