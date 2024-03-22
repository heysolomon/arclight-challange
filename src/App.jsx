import Header from "./components/Header";
import img1 from "./assets/Dashboard.png";
import checkmark from "./assets/Checkmark.svg";

function App() {
  return (
    <div className="bg-primary max-w-screen h-full p-5 m-0 font-primary text-[16px]">
      <Header />
      <main className="">
        <div className="grid grid-cols-2 mt-[80px] gap-16 px-[10%]">
          <div className="flex h-full w-full items-end">
            <img src={img1} alt="" />
          </div>
          <div className="text-white">
            <h2 className="text-4xl font-bold">
              A powerful dashboard that tracks everything.
            </h2>
            <p className="mt-2 mb-9">
              Decisions should be powered by data, and there’s no better way to
              collect good data than our powerful dashboard.
            </p>

            <div className="mb-[80px]">
              <span className="flex items-center gap-4 mb-4">
                <img src={checkmark} alt="" />
                <p>Create and manage custom referral links.</p>
              </span>
              <span className="flex items-center gap-4 mb-4">
                <img src={checkmark} alt="" />
                <p>A/B test your campaigns for more accurate results.</p>
              </span>
              <span className="flex items-center gap-4 mb-4">
                <img src={checkmark} alt="" />
                <p>Track all your campaigns.</p>
              </span>
            </div>
          </div>
        </div>

        <div className="px-[10%] py-[80px] bg-white w-full">
          <div className="grid grid-cols-2 gap-[20px] mb-[80px]">
            <div className="bg-primary text-white p-9">
              <h2 className="text-4xl font-bold">For Startups</h2>
              <p className="mt-2 mb-9">
                Not all companies are big, startups should have just as much
                opportunities as established enterprises.
              </p>

              <div className="">
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>50% off all plans, forever.</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>
                    Receive monthly offers for and expert support to help you
                    grow your referral program.
                  </p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>
                    Access to our{" "}
                    <span className="underline font-bold">Founders Hub.</span>
                  </p>
                </span>
              </div>
            </div>

            <div className="bg-primary text-white p-9">
              <h2 className="text-4xl font-bold">For Enterprises</h2>
              <p className="mt-2 mb-9">
                Just because your company is huge, doesn’t mean you shouldn’t
                benefit from a referral system.
              </p>

              <div className="">
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>10% off all plans, forever.</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>
                    Free consultation consultations with our Marketing experts.
                  </p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>
                    Access to our{" "}
                    <span className="underline font-bold">Enterprise Hub.</span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-9 rounded-[10px] text-secondary">
              <p>Basic</p>
              <h3 className="font-bold text-[56px]">
                $39 <span className="text-[16px] font-normal text-secondary-light">/mo</span>
              </h3>
              <p>Suited for those experimenting with referral programs.</p>
              
              <div className="mt-6">
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Migration services</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Onboarding manager</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Automation features</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Mass actions</p>
                </span>
              </div>
            </div>
            <div className="p-9 bg-primary text-white rounded-[10px]">
              <p>Starter</p>
              <h3 className="font-bold text-[56px]">
                $59 <span className="text-[16px] font-normal">/mo</span>
              </h3>
              <p>Suited for those experimenting with referral programs.</p>
              
              <div className="mt-6">
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Migration services</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Onboarding manager</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Automation features</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Mass actions</p>
                </span>
              </div>
            </div>
            <div className="p-9 rounded-[10px] text-secondary">
              <p>Starter</p>
              <h3 className="font-bold text-[56px]">
                $59 <span className="text-[16px] font-normal">/mo</span>
              </h3>
              <p>Suited for those experimenting with referral programs.</p>
              
              <div className="mt-6">
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Migration services</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Onboarding manager</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Automation features</p>
                </span>
                <span className="flex items-center gap-4 mb-4">
                  <img src={checkmark} alt="" />
                  <p>Mass actions</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
