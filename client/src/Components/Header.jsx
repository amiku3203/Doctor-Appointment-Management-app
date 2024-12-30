 

import { useState } from "react";
import d1 from "../assets/Doctors/d1.jpg";
import d2 from "../assets/Doctors/d2.jpg";
import d3 from "../assets/Doctors/d3.jpg";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import OffSection from "./OffSection";

const allDoctor = [
  {
    Name: "Amit Kumar",
    Specialization: "Cardiology",
    Experience: "3 Years",
    Education:
      "Dr. Amit Kumar holds an MBBS degree from AIIMS and an MD in Cardiology from PGIMER Chandigarh. He is highly skilled in diagnosing and treating various cardiovascular diseases and has been recognized for his research in preventive cardiology.",
    Fees: "₹500",
    About:
      "Dr. Amit Kumar is a passionate cardiologist with a mission to provide personalized care to his patients. With three years of hands-on experience, he focuses on improving patient outcomes through innovative techniques.",
    AvailableSlots: [
      { date: "2024-01-02", time: "10:00 AM - 11:00 AM" },
      { date: "2024-01-03", time: "3:00 PM - 4:00 PM" },
      { date: "2024-01-04", time: "6:00 PM - 7:00 PM" },
    ],
    Image: d1,
    slug: "amit-kumar",
  },
  {
    Name: "Anuj Kumar",
    Specialization: "Heart Specialist",
    Experience: "3 Years",
    Education:
      "Dr. Anuj Kumar completed his MBBS from KGMU and pursued a DM in Cardiology from the prestigious Narayana Health Institute. His expertise lies in handling complex heart conditions with precision and care.",
    Fees: "₹600",
    About:
      "Dr. Anuj Kumar is dedicated to ensuring his patients live healthier lives by providing advanced treatment plans for heart-related issues. His patient-first approach has earned him wide recognition in the field.",
    AvailableSlots: [
      { date: "2024-01-02", time: "11:00 AM - 12:00 PM" },
      { date: "2024-01-03", time: "2:00 PM - 3:00 PM" },
      { date: "2024-01-04", time: "5:00 PM - 6:00 PM" },
    ],
    Image: d2,
    slug: "anuj-kumar",
  },
];


const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <OffSection />

      <header className="bg-white play-regular">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://devamit.tech/assets/Devamit-DP7D9DZY.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm libre-baskerville-bold text-gray-900">
                Doctors
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
  transition
  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
>
  <div className="p-4">
    {allDoctor.map((doctor) => (
      <div
        key={doctor.slug}
        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
      >
        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <img
            src={doctor.Image}
            alt={doctor.Name}
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="flex-auto">
          <Link
            to={`/appointment/${doctor.slug}`}
            className="block libre-baskerville-bold text-gray-900"
          >
            {doctor.Name}
            <span className="absolute inset-0" />
          </Link>
          <p className="mt-1 text-gray-600">{doctor.Specialization}</p>
        </div>
      </div>
    ))}
  </div>
</PopoverPanel>

            </Popover>

            <Link
              href="#"
              className="text-sm libre-baskerville-bold text-gray-900"
            >
              Specialities
            </Link>
            <Link
              href="#"
              className="text-sm libre-baskerville-bold text-gray-900"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-sm libre-baskerville-bold text-gray-900"
            >
              About
            </Link>
          </PopoverGroup>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/auth" className="link p-2">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 libre-baskerville-bold text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 libre-baskerville-bold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 libre-baskerville-bold text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 libre-baskerville-bold text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 libre-baskerville-bold text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                  <Link to="/auth" className="link p-2">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
