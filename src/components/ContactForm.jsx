import { useState } from "react";
import { IoPaperPlane } from "react-icons/io5";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSendEmail = () => {
    const recipient = "anujistwal80@gmail.com"; // Your email
    const subject = encodeURIComponent(purpose);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`;
    window.open(mailtoLink, "_blank"); // Open Gmail in new tab
  };

  return (
    <div className="flex w-full flex-wrap items-center gap-3 p-2">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-2xl border border-zinc-500/20 bg-[#1a1a1a] px-6 py-4 text-zinc-400 placeholder-gray-400 focus:outline-none md:w-1/3"
      />

      {/* Purpose Input */}
      <input
        type="text"
        placeholder="Purpose"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className="flex-1 rounded-2xl border border-zinc-500/20 bg-[#1a1a1a] px-6 py-4 text-zinc-400 placeholder-gray-400 focus:outline-none"
      />

      {/* Send Button */}
      <button
        onClick={handleSendEmail}
        className="flex items-center justify-center rounded-xl bg-rose-500 p-4 text-zinc-100 transition duration-300 hover:bg-rose-600"
      >
        <IoPaperPlane className="text-2xl" />
      </button>
    </div>
  );
};

export default ContactForm;
