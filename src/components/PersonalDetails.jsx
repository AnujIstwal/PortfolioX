import React from "react";
import { motion } from "framer-motion";

const details = [
  { field: "Name", value: "Anuj Kumar" },
  { field: "Email", value: "anujistwal80" },
  { field: "Contact", value: "8968059548" },
  { field: "D.O.B", value: "08 Oct 2002" },
  { field: "State", value: "Haryana" },
  { field: "Country", value: "India" },
];

export default function PersonalDetails() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.6 }}
      className="flex h-full w-full flex-col items-center gap-2 rounded-3xl bg-[#EEEEEE] px-8 py-6 shadow-sm"
    >
      <div className="flex w-full items-center justify-between border-b border-gray-300 pb-2">
        <h3 className="text-lg font-bold text-gray-800">Details</h3>
      </div>

      <table className="min-w-full">
        <tbody>
          {details.map((data) => (
            <tr className="text-[.9rem]">
              <td className="py-1 pr-8">
                <h3 className="font-semibold">{data.field}</h3>
              </td>
              <td className="py-1 pl-4 text-right">
                <p>{data.value}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
