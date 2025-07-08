function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 My Project. All rights reserved.</p>
      <p>
        Follow us on{' '}
        <a href="https://twitter.com" className="text-blue-400">
          Twitter
        </a>{' '}
        and{' '}
        <a href="https://github.com" className="text-blue-400">
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;