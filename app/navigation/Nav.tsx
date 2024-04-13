import Logo from "./logo";
import ActionButtons from "./actionButtons";
import NavMenu from "./navMenu";
const Navigation = () => {
  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between py-3 backdrop-blur-[0.325rem] shadow-sm sm:text-sm ">
        <Logo />
        <div className="flex-grow" />
        <div className="mr-6">
          <NavMenu />
        </div>
        <div className="mr-4">
        <ActionButtons />
        </div>
      </div>
    </>
  );
};
export default Navigation;
