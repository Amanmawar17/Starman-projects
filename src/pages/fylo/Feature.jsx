import comp from "/fylo/comp.svg";
import secu from "/fylo/secu.svg";
import real from "/fylo/real.svg";
import store from "/fylo/store.svg";

const Feature = () => {
  return (
    <>
      <section className="features grid md:grid-cols-2 grid-cols-1 place-items-evenly gap-4 lg:h-screen text-center bg-[#181f2a] py-10 px-8">
        <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
          <img src={comp} alt="access anywhere" />
          <h1 className="text-lg">Access your files, anywhere</h1>
          <p className="my-2">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
          <img src={secu} alt="security" />
          <h1 className="text-lg">Security you can trust</h1>
          <p className="my-2">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
          <img src={real} alt="collabration" />
          <h1 className="text-lg">Real-time collaboration</h1>
          <p className="my-2">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
        <div className="card max-w-sm flex flex-col justify-center items-center place-self-center">
          <img src={store} alt="storage" />
          <h1 className="text-lg">Store any type of file</h1>
          <p className="my-2">
            Whether you`re sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>
    </>
  );
};

export default Feature;
