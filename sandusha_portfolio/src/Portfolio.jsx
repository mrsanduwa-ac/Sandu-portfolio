
import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Sandusha Avishkha</h1>
        <p className="text-lg mt-2">Graphic Designer</p>
      </header>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm Sandusha Avishkha, a passionate graphic designer who crafts visually impactful designs
          that communicate ideas effectively. My goal is to combine creativity with simplicity.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Graphic Design</li>
          <li>Logo Design</li>
          <li>Social Media Design</li>
          <li>Adobe Illustrator & Photoshop</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <p>Coming soon...</p>
      </section>

      <footer className="text-center mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Sandusha Avishkha. All rights reserved.
      </footer>
    </div>
  );
}
