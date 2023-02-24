export default function Portfolio() {
  return (
    <div>
      <h3>Some projects i cooperated as a front-end developer in are listed here:</h3>
      <hr />
      <ul style={{ paddingLeft: 0, listStyle: "none", marginTop: "3em" }}>
        <li style={{ borderLeft: "2px solid", padding: "1em" }}>
          <h5 style={{ fontSize: 22 }}>Phocus</h5>
          <p style={{ marginTop: "0.5em" }}>A data intensive enterprise resource planning solution</p>
        </li>
        <li style={{ borderLeft: "2px solid", padding: "1em", marginTop: "1em" }}>
          <h5 style={{ fontSize: 22 }}>Qbic Cloud</h5>
          <p style={{ marginTop: "0.5em" }}>A cloud and deploy service provider</p>
        </li>
        <li style={{ borderLeft: "2px solid", padding: "1em", marginTop: "1em" }}>
          <h5 style={{ fontSize: 22 }}>QuizBaba</h5>
          <p style={{ marginTop: "0.5em" }}>A fun and educative way to learn</p>
        </li>
        <li style={{ borderLeft: "2px solid", padding: "1em", marginTop: "1em" }}>
          <h5 style={{ fontSize: 22 }}>Jobbfy</h5>
          <p style={{ marginTop: "0.5em" }}>A modern way of working for contractors</p>
        </li>
      </ul>
    </div>
  );
}
