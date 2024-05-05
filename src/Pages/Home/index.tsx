import NavBar from "../../Components/NavBar";
import RightSideBar from "../../Components/RightSideBar";
import SideBar from "../../Components/SideBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="flex ">
        <SideBar />
        <div className="flex-1 px-4 pt-3 bg-secondary">New feed</div>

        <RightSideBar />
      </div>
    </>
  );
}

export default Home;
