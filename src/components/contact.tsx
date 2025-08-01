export default function ContactInfo() {
  return (
    <footer className="bg-blue-200 text-blue-900 px-6 py-12">
      <div className="max-w-screen-lg mx-auto text-center space-y-8">
        <h2 className="text-2xl font-bold">Contact Ward 11 Office</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm justify-center text-left md:text-center">
          <div className="space-y-2">
            <p><strong>Office Address:</strong><br />3659 S Halsted St, Chicago, IL 60609</p>
            <p><strong>Phone:</strong><br />(312) 744-0730</p>
            <p><strong>Email:</strong><br />ward11@cityofchicago.org</p>
          </div>
          <div className="space-y-2">
            <p><strong>Office Hours:</strong><br />Monday – Friday: 9:00 AM – 5:00 PM</p>
            {/* <p><strong>Follow Us:</strong><br />Facebook | Twitter | Instagram</p> */}
          </div>
        </div>
        <p className="text-xs text-blue-800">© 2025 Alderman Nicole Lee - 11th Ward of Chicago. All rights reserved.</p>
      </div>
    </footer>
  );
}
