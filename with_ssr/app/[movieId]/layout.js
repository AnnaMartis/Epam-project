export default function SelectedMovieLayout(props) {
  return (
    <section>
      {props.children}
      {props.modals}
    </section>
  );
}
