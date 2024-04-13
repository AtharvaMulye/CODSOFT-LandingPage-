import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/modeToggle";
const ActionButtons = () => {
  return (
    <div>
      <ModeToggle />
      <div className="md:hidden lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu name="menu-mobile" />
          </SheetTrigger>
          <SheetContent className="bg-gray-400/40 backdrop-blur-sm text-white">
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-6 items-start w-full text-xl dark:text-white text-white mt-10">
                  <Link href="/">Home</Link>
                  <Link href="/contactUs">Contact Us</Link>
                  <Link href="/aboutUs">About Us</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default ActionButtons;
