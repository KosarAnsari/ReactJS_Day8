function Wrapper({ children, color = 'green' }) {
  return (
    <div
      style={{
        color: color,
        border: '2px solid black',
        width: '300px',
        margin: '5px',
      }}
    >
      {children}
    </div>
  );
}
export default Wrapper;
