import React from "react";
import { Separator } from "../ui/separator";
import { Link, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-2/3 mx-auto my-30">
      <div className="text-2xl">Contacts and Socials</div>
      <Separator />
      <div>
        <div className="text-sm text-gray-600 my-4">
          Feel free to reach out to me through any of the following platforms:
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone width={15} height={15} />
            <span className="text-sm">0917-2454-272</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail width={15} height={15} />
            <span className="text-sm">villaearljoshua@gmail.com</span>
          </div>
          <div className="flex flex-col gap-2">
            <a
              className="text-sm flex gap-2 cursor-pointer hover:underline hover:text-green-500"
              href="https://www.linkedin.com/in/earl-joshua-villa/"
              rel="noopener"
              target="_blank"
            >
              linkedIn <Link width={15} height={15} />
            </a>
            <a
              className="text-sm flex gap-2 cursor-pointer hover:underline hover:text-green-500"
              href="https://github.com/JoshVilla"
              rel="noopener"
              target="_blank"
            >
              github <Link width={15} height={15} />
            </a>
            <a
              className="text-sm flex gap-2 cursor-pointer hover:underline hover:text-green-500"
              href="https://www.facebook.com/earljoshua.corpuzvilla"
              rel="noopener"
              target="_blank"
            >
              facebook <Link width={15} height={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
