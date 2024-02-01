import party from "../src/assets/images/Party.png";
import galarry1 from "../src/assets/images/galarry1.png";
import galarry2 from "../src/assets/images/galarry2.png";
import galarry3 from "../src/assets/images/galarry3.png";
import galarry4 from "../src/assets/images/galarry4.png";
import galarry5 from "../src/assets/images/galarry5.png";
import galarry6 from "../src/assets/images/galarry6.png";
import galarry7 from "../src/assets/images/galarry7.png";
import galarry8 from "../src/assets/images/galarry8.png";
import galarry10 from "../src/assets/images/galarry10.png";
import galarry11 from "../src/assets/images/galarry11.png";
const App = () => {
  return (
    <div className="max-w-[1250px] mx-auto border  h-screen px-5 lg:px-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        {/* left side  */}
        <div>
          <div className="flex justify-end">
            <img className="text-end w-[150px] " src={party} alt="" />
          </div>
          <div className="w-3/4">
            <h1 className="text-5xl font-bold">Galary</h1>
            <p className="mt-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium atque vitae ratione eius temporibus necessitatibus
              libero recusandae voluptatibus voluptas porro. Porro dicta
              necessitatibus facilis pariatur fugit omnis fugiat, et corrupti.
            </p>
            <ul className="list-disc list-inside">
              <li>option1</li>
              <li>option2</li>
              <li>option3</li>
              <li>option4</li>
              <li>option4</li>
            </ul>
          </div>
        </div>

        {/* right side  */}
        <div className="grid grid-cols-4 grid-rows-3 gap-3 h-[800px]">
          <div className="row-span-2 flex flex-col items-center justify-center h-full">
            <img className="shrink-0" src={galarry1} alt="" />
            <img src={galarry2} alt="" />
          </div>
          <div className="row-span-3 flex flex-col items-center justify-center h-3/4">
            <img src={galarry3} alt="" />
            <img src={galarry4} alt="" />
            <img src={galarry5} alt="" />
          </div>
          <div className="row-span-3 flex flex-col items-center justify-center h-3/4">
            <img src={galarry6} alt="" />
            <img src={galarry7} alt="" />
            <img src={galarry8} alt="" />
          </div>
          <div className="row-span-2 flex flex-col items-center justify-center h-full">
            <img src={galarry10} alt="" />
            <img src={galarry11} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
