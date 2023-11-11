export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        {props.children}
        {props.modals}
      </body>
    </html>
  );
}
