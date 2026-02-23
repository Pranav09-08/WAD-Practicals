export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">
        <input className="w-full mb-4 p-3 border rounded" placeholder="Name" />
        <input className="w-full mb-4 p-3 border rounded" placeholder="Email" />
        <textarea
          className="w-full mb-4 p-3 border rounded"
          placeholder="Message"
        />
        <button className="w-full bg-blue-500 text-white py-3 rounded font-semibold">
          Send Message
        </button>
      </div>
    </section>
  );
}
