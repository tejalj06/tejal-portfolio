const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        {/* Auto-updating copyright year */}
        <p className="text-gray-400">
          © {new Date().getFullYear()} Tejal Jambhulkar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
