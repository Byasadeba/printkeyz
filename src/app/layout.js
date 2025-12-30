// import './globals.css';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-[#fffaf2] antialiased">{children}</body>
//     </html>
//   );
// }

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-page-bg text-text-primary">
        {children}
      </body>
    </html>
  );
}
