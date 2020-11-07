const Dimmer = ({ children }) => {
  return (
    <>
      <div className="dimmer">
        {children}
      </div>
      <style jsx>{`
        .dimmer {
          display: flex;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Dimmer;
