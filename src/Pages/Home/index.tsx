import NavBar from "../../Components/NavBar";
import RightSideBar from "../../Components/RightSideBar";
import SideBar from "../../Components/SideBar";
import AddPostButton from "../../Components/AddPostButton";
import NewFeeds from "../../Components/NewFeeds";

function Home() {
  return (
    <div>
      <div className="mb-3">
        <NavBar />
        <div className="flex ">
          <SideBar />
          {/* New feed */}
          <div className="flex flex-col flex-1 gap-4 mx-20 mt-[84px]">
            <AddPostButton />

            <NewFeeds />
          </div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
